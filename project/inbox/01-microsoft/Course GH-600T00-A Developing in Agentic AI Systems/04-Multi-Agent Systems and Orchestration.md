# Multi-Agent Systems and Orchestration

> **Module** | 9 Units | Intermediate
> Source: https://learn.microsoft.com/en-us/training/modules/multi-agent-systems-orchestration/

Learn how to design reliable multi-agent systems in GitHub using observable workflows, coordinated artifacts, and safe recovery mechanisms.

## Learning objectives

By the end of this module, you'll be able to:

- Define agent responsibilities and scope boundaries within the SDLC
- Coordinate multi-agent workflows using GitHub Actions events and orchestration patterns
- Isolate agent execution using branches, workflows, permissions, and concurrency controls
- Detect and resolve conflicts using GitHub-native validation and review mechanisms
- Ensure observability, attribution, and traceability of agent actions
- Diagnose failures and implement recovery strategies for reliable multi-agent systems

## Prerequisites

- A GitHub account
- Basic understanding of repositories, branches, and pull requests
- Familiarity with GitHub Actions
- General understanding of agent workflows in GitHub, IDE, or CLI environments

---

## Unit 1: Introduction

Multi-agent systems are becoming common in modern software delivery. Instead of one agent performing isolated tasks, teams deploy multiple agents — each responsible for work such as dependency updates, vulnerability remediation, refactoring, documentation improvements, or repository reporting.

As soon as more than one agent operates in the same repository, the core challenge shifts from "can an agent do the work?" to "can the system coordinate that work safely?" Without a clear orchestration model, agents can collide by changing the same files, opening overlapping pull requests, or repeatedly triggering workflows without convergence.

In GitHub, multi-agent coordination is achieved through visible, enforceable workflows. Pull requests define the boundary for proposed changes, branches isolate execution, GitHub Actions coordinates validation, and repository policies — such as required checks, required reviews, CODEOWNERS, and environments — ensure changes are reviewed and gated before they're accepted.

In this module, you'll learn how to design multi-agent systems that coordinate through GitHub-native artifacts, remain observable through logs and workflow outputs, and recover safely through retry, rollback, and human escalation.

---

## Unit 2: Define multi-agent responsibilities in the SDLC

A multi-agent system only works well when each agent has a clear role. Without defined responsibilities, agents can overlap, duplicate work, or create conflicting changes. Start by thinking about how work is divided across the system — what each agent is responsible for, where those boundaries exist, and how that work becomes visible and reviewable in GitHub.

### Why responsibility mapping matters

Multi-agent failures are often predictable. When responsibilities overlap, the system produces duplicated work, conflicting pull requests, and unclear ownership. A strong design prevents these outcomes by assigning each agent a narrow role, limiting scope by path and artifact type, and defining completion signals that can be verified through GitHub checks and review outcomes.

### Responsibility boundary model

In GitHub, it is usually safest to design multi-agent systems around a consistent boundary: **agents propose; humans and policy accept.** Agents can open pull requests and produce evidence. Repository policy and reviewers determine whether changes can merge.

### Map agent responsibilities to SDLC stages and GitHub artifacts

| **SDLC stage** | **Multi-agent responsibility** | **GitHub artifact that makes it reviewable** |
|---|---|---|
| Planning | Define goal, scope, success criteria, risks | PR plan section or PLAN.md |
| Implementation | Make changes in an isolated branch | branch + commits + PR |
| Validation | Produce evidence and results | Actions runs + checks + artifacts |
| Acceptance | Apply policy and human judgment | CODEOWNERS + reviews + required checks |
| Deployment | Gate high-risk execution | environments + approvals |

### Define scope boundaries

A stable starting point is to define "what each agent is allowed to change."

- The **dependency agent** may modify dependency manifests and lockfiles. It should avoid changing application behavior unless explicitly required.
- The **refactoring agent** may modify `src/` but should not modify dependency manifests, lockfiles, or workflows.
- The **security agent** may validate outcomes and produce reports that reference checks and scan results. It may propose changes, but should not broaden scope into refactoring unless the task is explicitly to fix a security issue in code.

### What happens when responsibilities are not defined

If multiple agents act as general developers across the entire repository, including workflows and infrastructure, it leads to repeated collisions, inconsistent review routing, and uncontrolled risk.

### Key takeaway

Multi-agent design starts by defining responsibilities that are specific enough to enforce through GitHub-native boundaries.

---

## Unit 3: Orchestrate agents using GitHub workflows

Once responsibilities are clear, the focus shifts to how agents coordinate their work. Even well-defined roles can lead to confusion if execution isn't structured. Think about when agents should run, how their work is sequenced, and how outputs move between steps. Expressing this coordination through GitHub workflows keeps the system predictable, observable, and easier to manage as it grows.

### What is orchestration in multi-agent systems

Orchestration in multi-agent systems defines how multiple agents coordinate their work within a shared environment. It determines when agents run, how their tasks are sequenced, and how outputs are passed between steps, ensuring that work progresses in a controlled and predictable way rather than happening independently or in conflict.

### How orchestration works in GitHub

In GitHub, orchestration works best when it's expressed through workflows that respond to events. This keeps coordination visible because it happens in pull requests, workflow runs, checks, and logs.

Typical triggers include:

- schedules for periodic work (reporting, dependency checks)
- pull request events for validation and iteration
- workflow completion triggers when one step should run after another

### Sequential orchestration

Some work must happen in a strict sequence. A common pipeline is:

1. The dependency agent opens a PR
2. CI validates correctness (tests/build)
3. A security validation workflow runs after CI completes
4. A human reviewer approves
5. Merge happens only when gates are satisfied

Example: run security validation after CI completes:

```yaml
# File: .github/workflows/security-validate.yml
name: Security Validation

on:
  workflow_run:
    workflows: [CI Validation]
    types: [completed]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Run security validation here."
```

### Parallel orchestration

Parallel orchestration is appropriate when scope boundaries prevent overlap. For example, a documentation agent and a refactoring agent can work simultaneously if they operate in separate paths. Their outputs still converge through pull request checks and reviews.

The core design requirement for parallel orchestration is isolation: if agents can collide on the same files, parallelism will increase instability rather than throughput.

#### Example: Fan-Out, Fan-In Orchestration Pattern

To coordinate multiple agents in parallel and then merge their outputs, use the fan-out/fan-in orchestration with `needs`:

```yaml
name: multi-agent-orchestration

on:
  workflow_dispatch:

jobs:
  spec_analyzer:
    runs-on: ubuntu-latest
    steps:
      - name: Run spec analyzer
        run: ./executors/spec_analyzer.sh

  risk_reviewer:
    runs-on: ubuntu-latest
    steps:
      - name: Run risk reviewer
        run: ./executors/risk_reviewer.sh

  plan_merger:
    runs-on: ubuntu-latest
    needs: [spec_analyzer, risk_reviewer]   # <-- FANS IN both
    steps:
      - name: Merge analysis and risk outputs
        run: ./executors/plan_merger.sh
      - name: Publish merged plan
        run: echo "publish plan artifact"
    concurrency:
      group: multiagent-${{ github.ref }}   # <-- Ensures no overlapping merge jobs per branch
```

This ensures `plan_merger` waits for both upstream jobs — a classic "fan-in".

### Artifact-based coordination

In multi-agent systems, direct "agent-to-agent communication" is often less reliable than shared, reviewable artifacts. A robust orchestration pattern is to:

1. Run an agent with restricted permissions
2. Produce a structured output (plan/report/proposal) as an artifact
3. Use a controlled step to apply only the operations your workflow allows

Example: scheduled repository report (artifact + controlled output):

```yaml
# File: .github/workflows/daily-repo-report.yml
name: Daily Repo Status Report

on:
  schedule:
    - cron: "0 2 * * *"

permissions:
  contents: read
  issues: write
  pull-requests: read

jobs:
  report:
    runs-on: ubuntu-latest
    steps:
      - name: Generate report
        run: |
          echo '{ "summary": "Daily status...", "links": [] }' > report.json

      - name: Upload report artifact
        uses: actions/upload-artifact@v4
        with:
          name: repo-status-report
          path: report.json

      - name: Create issue (controlled output)
        run: |
          echo "Create issue from report.json"
```

### Key takeaway

Orchestration should be expressed through GitHub Actions events and shared artifacts so the system remains observable. Use sequential orchestration when outputs depend on prior steps. Use parallel orchestration only when agents operate on isolated paths.

---

## Unit 4: Isolate execution - branches, workflows, permissions, and concurrency

Execution isolation is the practice of separating agent activity so that each agent operates within its own controlled scope. It ensures that agents don't interfere with each other, don't share execution context such as branches, workflows, or permissions, and don't create unstable or unpredictable behavior when running in parallel.

### Why isolation matters in multi-agent systems

Isolation isn't only about preventing merge conflicts. It's also about preventing instability. When multiple agents share the same execution context — such as a branch, a workflow, or broad write permissions — failures become harder to diagnose and the system becomes more likely to thrash through repeated runs.

### Branch isolation

Each agent should open a PR from a dedicated branch such as:

- `agent/dependency/<ticket>`
- `agent/refactor/<ticket>`
- `agent/security/<ticket>`

This makes changes bound and helps reviewers understand intent and scope.

### Workflow isolation

Give each agent a dedicated workflow (or a dedicated job with distinct permissions) so triggers, permissions, and outputs are easy to reason about. This reduces accidental coupling when workflows evolve over time.

### Permission isolation

Workflow permissions should be reduced to the minimum needed.

Example permissions for a workflow that updates PR metadata but shouldn't push arbitrary commits:

```yaml
permissions:
  contents: read
  pull-requests: write
```

### Concurrency controls

When a PR is updated frequently, workflows can overlap. Concurrency controls cancel outdated runs and reduce noise.

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

- `group: ${{ github.workflow }}-${{ github.ref }}`: Ensures that runs are isolated per workflow and per branch.
- `cancel-in-progress: true`: Automatically cancels previous, overlapping runs on the same branch for the same workflow, so only the newest run continues.

> **Note:** Setting only `${{ github.ref }}` without workflow makes concurrency global to the branch, potentially blocking unrelated workflows from running.

#### Copilot Agent Modes: Parallelism Capabilities

| **Agent Mode** | **Parallel Sessions Across Multiple Tasks?** |
|---|---|
| Copilot Cloud | Yes |
| Copilot CLI | Yes |
| Local | No (serial only, one at a time) |

### What happens without isolation

If multiple agents share the same branch or workflow context, you can end up with interleaved commits, ambiguous ownership, and repeated failures. This makes rollback and auditing significantly harder.

### Key takeaway

Isolation is the foundation for multi-agent stability. Use concurrency controls when workflows trigger frequently, especially on pull request updates.

---

## Unit 5: Detect and resolve conflicts using GitHub-native arbitration

Conflicts are a natural part of multi-agent systems, especially when multiple agents work in the same repository. These can include merge conflicts (same files changed), semantic conflicts (changes break combined behavior), policy conflicts (different approval requirements), and duplicate work (multiple agents solving the same problem). Understanding these types helps design systems that can detect and resolve conflicts effectively.

### Common conflict types

- Textual merge conflicts (same files/lines changed)
- Semantic conflicts (clean merge, broken combined behavior)
- Policy conflicts (protected areas require different reviews/approvals)
- Duplicate effort (two PRs solving the same problem differently)

A stable system makes conflicts detectable early and provides a rule-based way to resolve them.

### How conflicts are detected and resolved

#### Merge validation checks

GitHub PRs show merge conflicts, but teams often add a merge validation step so conflicts fail fast as checks:

```yaml
- name: Validate merge with main
  run: |
    git fetch origin main
    git merge --no-commit origin/main
```

If this is a required check, conflicts become enforceable and don't depend on reviewers noticing them manually.

#### Route sensitive changes using CODEOWNERS

CODEOWNERS routes review based on file paths, which is essential for arbitration in multi-agent systems:

```
# File: CODEOWNERS

/security/ @security-team
/.github/workflows/ @platform-team
/infra/ @platform-team
* @core-team
```

#### Define escalation thresholds

Define escalation rules so automation stops before repeated failures create instability:

- If a PR conflicts twice after rebasing attempts
- If required checks fail twice with the same failure signature
- If two agents propose incompatible fixes to the same alert

Escalation should include a short report: what conflicted, what was attempted, and which options exist.

### What happens without structured conflict resolution

Without structured conflict resolution, outcomes are often determined by timing rather than correctness. Without arbitration rules, whichever pull request merges first becomes the "winner," which encourages instability and forces reviewers to untangle the system after the fact.

### Key takeaway

Conflicts must be detected early and resolved intentionally through ownership routing and explicit escalation. Escalate when conflicts repeat or when automated resolution fails twice.

---

## Unit 6: Make the system observable - attribution, evidence, and handoffs

Observability in multi-agent systems refers to the ability to clearly see and understand what the system is doing at every step. It ensures that actions are visible, decisions are traceable, and evidence is accessible, allowing teams to review, debug, and trust how work is performed across agents.

In practice, this means that every meaningful action taken by an agent can be inspected, explained, and validated after the fact. As systems grow in complexity, observability becomes the foundation for coordination, debugging, and governance.

### Track agent actions using GitHub artifacts

Observable artifacts include:

- Pull requests
- Workflow runs
- Logs
- Artifacts

### Observability becomes more important as the number of agents grows

As the number of agents grows, traceability becomes a primary requirement. Reviewers need to understand which agent produced a change, what decision was made, what evidence supports it, and what happened next.

### Define a practical observability goal

A practical observability goal is that every meaningful step leaves a durable trace in GitHub:

- a PR that links to context and describes intent
- checks and workflow runs that produce evidence
- artifacts and logs that explain outcomes
- clear attribution (titles, labels, owners)

### Use consistent attribution and naming

Adopt conventions such as:

- PR titles: `[agent: dependency] Update <package> to <version>`
- labels: `agent: dependency`, `agent: security`, `agent: refactor`
- PR body sections: Plan, Evidence, Risks, Rollback/Escalation

### Upload structured agent evidence as artifacts

Artifacts create durable evidence that supports debugging and audits:

```yaml
- name: Upload agent report
  uses: actions/upload-artifact@v4
  with:
    name: agent-report
    path: report.json
```

### Access and analyze artifacts after workflow execution

#### Download agent artifacts for post-hoc analysis

When investigating agent behavior after a workflow run, workflow artifacts are the primary evidence source — even if live logs are incomplete. To access agent outputs:

1. Navigate to the corresponding workflow run in the GitHub Actions tab
2. Locate the "Artifacts" section at the bottom of the run summary
3. Download the artifact (such as `agent-report`) for detailed post-hoc review

#### Audit artifact deletion via GitHub organization audit log

If workflow artifacts are unexpectedly missing, GitHub audit logging reveals deletions:

- Search the organization audit log for: `action:artifact.destroy`
- This event shows who deleted an artifact, when, and the affected repository

### Document decisions and handoffs in pull requests

Use a standard PR structure to keep handoffs consistent:

```md
## Objective

What problem is being solved?

## Plan

1.
2.
3.

## Evidence

- CI run:
- Scan outputs:
- Relevant issue/alert:

## Decisions and handoffs

- Decision:
- Rationale:
- Next owner (if escalation needed):

## Risks and rollback

-
```

This structure ensures that every decision is captured, every action is justified, and every handoff is clear.

### Why observability matters

Observability is what allows multi-agent systems to scale safely. Without it, coordination breaks down because there's no shared understanding of what has happened or why.

When systems lack logs or artifacts, failures can't be diagnosed and trust can't be established. In multi-agent systems, invisible work becomes an operational risk.

### Key takeaway

Observability isn't optional. It's the mechanism that keeps multi-agent systems reviewable and operable.

---

## Unit 7: Operate reliably at scale - diagnose failures and recover safely

Coordination failures occur when multiple agents or workflows do not progress or interact as intended within the system. These failures can take several forms, including partial execution where tasks do not complete fully, stalled workflows that stop progressing, conflicting pull requests that interfere with each other, and repeated runs that fail to converge.

### Multi-agent failures are often coordination failures

Common failure modes include:

- Partial execution (PR exists, but evidence or validation is missing)
- Stalled workflows (checks fail repeatedly or approvals never arrive)
- Conflicting outputs (PRs compete and block each other)
- Flapping (workflows rerun repeatedly with no convergence)

### How failures are diagnosed and resolved in GitHub

A well-designed system is not just capable of running — it is also diagnosable when things go wrong. GitHub provides native artifacts that allow teams to trace failures and understand their causes.

#### Diagnose using GitHub-native evidence

A well-designed system can be debugged using:

- PR timelines (what changed and when)
- Required check results (what failed and how often)
- Workflow run history (patterns of failures and cancellations)
- Artifacts (reports and logs explaining outcomes)

#### Apply recovery strategies: bounded retries, rollback, escalation

Reliable systems assume failure and define recovery paths:

- **Bounded retries:** an agent can revise a PR branch to fix failures, but only within limits to prevent endless loops
- **Escalation threshold:** if the same required check fails twice, stop automated iteration and escalate to a human with links and a concise summary
- **Rollback readiness:** prefer small, scoped PRs to make rollback safe; revert changes when risk increases

### Monitor and troubleshoot agent failures in real time

#### Live monitoring of agent sessions

You can live-stream agent session logs using the GitHub CLI:

```bash
gh agent-task view --log --follow
```

Use this command to debug a stalled or long-running agent run in real time.

#### Interpreting policy-blocked actions (preToolUse hook)

If an agent attempt triggers a validation or security block before execution:

```md
Error: Command blocked by policy

Reason: destructive_operation_detected

[agent] Escalating to human review...
```

This pre-execution (preToolUse) hook ensures risky actions, like deleting infrastructure, trigger a human handoff.

### Understand how agent configuration affects orchestration

#### Agent frontmatter: configuration effects

| **Setting** | **Effect** |
|---|---|
| `disable-model-invocation: true` | Cannot be invoked as a subagent via orchestration |
| `user-invocable: false` | Not selectable directly by users in chat/UI |

### Control high-risk execution paths

#### Gate high-risk execution with environments

For high-risk actions such as production deployments, GitHub environments provide an approval gate:

```yaml
environment:
  name: production
```

#### Allowing Copilot Agent to bypass ruleset protections (when needed)

If Copilot coding agent is blocked by a repository rule (for example, "require signed commits" on protected branches), you can add Copilot as a bypass actor — allowing automation on agent branches but enforcing protection for human users.

### Coordinate agents through subagents and handoffs

#### Defining, adding, and invoking subagents

To chain agents, specify allowed subagents in the parent agent's YAML frontmatter and use `handoffs` to invoke them:

```yaml
# planner.agent.md
---
agents: [implementer, code-review]

handoffs:
  - label: Start Implementation
    agent: implementer
    send: true
    model: GPT-5.2

  - label: Run Review
    agent: code-review
    prompt: Review the code changes made in the previous step.
```

- `agents`: lists allowed subagents for this agent to orchestrate
- `handoffs`: configures transitions, optionally auto-submitting a prompt (`send: true`) or using a custom model
- Handoffs resolve to subagents by `name:` attribute in agent YAML or by matching filename

### Why failure design matters

Failures are not exceptions in multi-agent systems — they are expected. The difference between stable and unstable systems is whether failure is accounted for in the design.

To build reliable systems:

- assume failure at every stage
- define clear retry limits
- escalate when automation cannot converge
- design changes to be reversible

### Key takeaway

Reliable multi-agent systems are built for failure detection, recovery, and safe iteration.

---

## Unit 8: Knowledge Check

1. **What is the most effective coordination primitive for multi-agent work in GitHub?**

   - Private agent-to-agent messaging
   - ~~Pull requests and surrounding artifacts (checks, reviews, history)~~ ✓
   - A shared spreadsheet
   - A single long-running workflow without branches

2. **Which configuration helps prevent repeated overlapping workflow runs when a PR is updated frequently?**

   - Larger runners
   - ~~Concurrency with cancel-in-progress~~ ✓
   - Removing required checks
   - Disabling PR triggers

3. **What is the best GitHub-native mechanism to route review for sensitive paths touched by agent pull requests?**

   - Asking reviewers in chat
   - ~~CODEOWNERS (with required reviews policy)~~ ✓
   - Adding more labels
   - Squashing commits

4. **Which is an example of a coordination failure rather than an individual agent failure?**

   - A single unit test fails once
   - ~~Two agent pull requests repeatedly conflict because they change the same files~~ ✓
   - A reviewer requests changes
   - A workflow run finishes successfully

5. **What is a safe pattern for high-risk actions like production deployments?**

   - Auto-deploy after tests pass
   - ~~Use environments with required reviewers so jobs pause for approval~~ ✓
   - Allow direct pushes to main
   - Disable workflow approvals

---

## Unit 9: Summary

In this module, you learned how to:

- Define agent responsibilities and scopes to prevent overlapping work and unclear ownership
- Orchestrate multi-agent workflows using GitHub Actions events and workflow patterns
- Isolate execution using branches, workflow boundaries, least-privilege permissions, and concurrency controls
- Detect and resolve conflicts using merge validation checks, CODEOWNERS routing, and explicit escalation rules
- Implement observability through consistent pull request conventions, workflow evidence (checks and runs), and uploaded artifacts
- Design reliability and recovery patterns using bounded retries, rollback strategies, human escalation, and environment approvals for high-risk actions

## Learn more

- [GitHub Actions events that trigger workflows](https://docs.github.com/actions/using-workflows/events-that-trigger-workflows)
- [Workflow syntax for GitHub Actions](https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions)
- [Control the concurrency of workflows and jobs](https://docs.github.com/en/actions/how-tos/writing-workflows/choosing-when-your-workflow-runs/control-the-concurrency-of-workflows-and-jobs)
- [About code owners (CODEOWNERS)](https://docs.github.com/articles/about-code-owners)
- [Environments](https://docs.github.com/en/actions/reference/environments)
- [Storing workflow data as artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)
