# Designing Agent Architecture and SDLC Integration

> **Module** | 9 Units | Intermediate
> Source: https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/

Learn how agentic systems use GitHub workflows to build software safely.

## Learning objectives

By the end of this module, you will be able to:

- Map agent responsibilities to SDLC stages and define architectural boundaries
- Define structured agent tasks using inputs, outputs, and success criteria
- Separate planning, reasoning, and execution to create inspectable and reliable workflows
- Implement pull request-based governance using templates, checks, CODEOWNERS, rules, and environments
- Design reliable workflows using outputs, contexts, triggers, and cross-job handoffs
- Operate agent systems safely using observability, tool governance, secrets boundaries, hooks, and reliability patterns

## Prerequisites

Before getting started, you should have:

- A GitHub account and familiarity with repositories, branches, and pull requests
- Basic experience with GitHub Actions workflows and status checks
- A general understanding of the software development lifecycle (SDLC) (planning, implementation, validation, deployment)
- Awareness of repository governance concepts, such as required reviews, CODEOWNERS, and branch protection

---

## Unit 1: Introduction

Agentic systems are changing how software is built and maintained. Instead of relying only on developers to write and update code, teams are adopting systems that can interpret goals, propose solutions, and take action within repositories. In GitHub, an agent might create a branch, modify files, open a pull request, and then iterate based on feedback from tests, security scans, and code reviews.

However, capability alone doesn't make an agent reliable. Without a well-defined architecture, agents may act too early, produce unclear changes, or operate without sufficient validation. In production environments, these failures create real risks to code quality, security, and operational stability.

Designing an agent system in GitHub isn't about giving the agent more freedom. It's about defining how work flows through the system using enforceable GitHub functions such as pull requests, workflows, and repository rules. A well-designed architecture ensures that every agent action leaves a visible record, is validated by objective signals, and is accepted only when it meets policy requirements.

### Glossary

**Key terms and definitions**

This module uses a small set of recurring terms. The definitions below clarify how they're used throughout the content.

- **Plan (artifact)** — A structured description of intended changes, typically included in a pull request description. It outlines the goal, scope, steps, risks, and validation criteria for the work.
- **Planning (agent capability)** — The process by which an agent generates or refines a plan based on a task, issue, or user input. This can occur in different entry points, such as a GitHub issue or the Agents interface.

---

## Unit 2: Map agent responsibilities to the SDLC

In this unit, you will learn:

- Why mapping agent responsibilities to SDLC stages improves reliability
- How SDLC stages map to GitHub artifacts and control surfaces
- Define architectural boundaries for agent behavior to reduce risk and improve auditability

### Why responsibility mapping matters

Agent systems should not operate across the entire SDLC without restriction. When an agent is treated like a general-purpose developer, it becomes difficult to reason about its behavior, limit its impact, or audit outcomes.

A more reliable approach is to map the agent to specific lifecycle stages where GitHub can enforce boundaries. Most teams start by scoping agents to the implementation and validation stages, where pull requests and workflows provide natural control points.

### Mapping SDLC stages to GitHub artifacts

The SDLC can be simplified into planning, implementation, validation, and deployment. Each stage maps to a different GitHub "surface" where work and evidence can be recorded.

| **SDLC stage** | **Typical agent responsibility in GitHub** | **Primary artifact** |
|---|---|---|
| Planning | Draft scope, plan steps, define success criteria | GitHub Issues, pull request descriptions/comments, Agents tab |
| Implementation | Create branch, make changes, open/update PR | Branch, commits, pull request |
| Validation | Run checks, attach artifacts, iterate on failures | Workflow runs, checks, artifacts |
| Deployment | Usually restricted; require approvals for sensitive actions | Environments and deployment approvals |

### Define architectural boundaries for agent behavior to reduce risk and improve auditability

- Scope early to reduce blast radius: limit which directories an agent can modify by policy and ownership.
- Treat workflow and infra changes as higher risk than application code changes.
- Prefer PR-based work even for automation; avoid direct-to-default-branch changes.

A common design boundary is: **agents propose; humans and policy accept.** The agent can prepare work and submit it through a pull request, but repository policy and human reviewers decide whether that work is merged or deployed.

### Practical example in GitHub

A dependency remediation agent is scoped to implementation:

1. The agent detects a vulnerable dependency (for example, from a security alert or an issue).
2. The agent creates a branch.
3. The agent updates the dependency and lockfile.
4. The agent opens a pull request that includes a structured plan and expected success signals.

At that point, the agent's scoped responsibility can be considered complete. Validation and acceptance happen through checks, reviews, and policy controls.

---

## Unit 3: Define inputs, outputs, and success criteria

In this unit, you'll learn:

- How to define structured agent tasks using inputs, outputs, and success criteria
- Review examples of a task contract and a workflow that can define success criteria for an agent

### Task structure makes outcomes predictable

Each agent task should be defined in terms of:

- **Inputs:** what the agent needs (issue context, constraints, boundaries).
- **Outputs:** what the agent produces (plan + PR + evidence).
- **Success criteria:** how results are evaluated (checks, scans, review outcomes).

When tasks are under-specified, agents can produce changes that look plausible but don't actually solve the underlying problem.

### Example task contract: vulnerability remediation

**Inputs**

- A security alert or issue link describing the vulnerability.
- Repository scope: changes allowed under `src/` and dependency files, but not `infra/` unless explicitly requested.
- Constraints: no workflow changes without platform review; no secrets introduced; no direct-to-main pushes.

**Outputs**

- A pull request containing:
  - a structured plan (in PR description or `.github/pull_request_template.md`)
  - a bounded changeset (commits on an agent branch)
  - And evidence links to workflow run

**Success criteria**

- Required checks pass (build/test/lint).
- Security signal is resolved (for example, the vulnerable version is replaced).
- Scope matches intent (no unexpected files changed).
- A rollback or escalation path is recorded for higher-risk changes.

> **Tip:** "CI passed" is necessary, but not always sufficient. Make success criteria reflect the real intent of the task (for example, "vulnerability resolved" rather than "tests passed").

### Implementation example: CI validation as an enforceable success signal

The following workflow is a common way to turn success criteria into a required status check.

```yaml
on:
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm test

  security-analysis:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      security-events: write
    steps:
      - uses: actions/checkout@v4
      - name: Initialize analysis
        uses: github/codeql-action/init@v3
      - name: Analyze
        uses: github/codeql-action/analyze@v3
```

When this workflow is configured as a required check (via rulesets or branch protection), a pull request can't be merged until the check passes. This ensures that success is enforced by the system — not assumed by the agent.

If success criteria are vague or missing, an agent may "complete the task" in a way that looks correct but fails the underlying goal. For example, the agent might update a dependency but leave the vulnerable version reachable through a transitive dependency or make broad changes that are difficult to validate.

---

## Unit 4: Separate planning, reasoning, and execution

In this unit, you will learn:

- Why separating planning, execution, and validation improves reliability
- Understanding the difference between a plan-first and a plan + execution workflows
- How to enforce planning boundaries using capability limits and tool gating

### Why separation improves reliability

Reliable agent systems separate:

- **Planning:** what will be done and why.
- **Execution:** the concrete changes made to the repository.
- **Validation:** evidence that the outcome meets success criteria.

When planning and execution are mixed together, reviewers see only the final diff. They lose the ability to validate intent early, detect misunderstandings quickly, and control scope before impact.

### How separation maps to GitHub

GitHub naturally supports this separation:

- Planning appears in a PR description, an issue comment, or a `.github/pull_request_template.md` artifact.
- Execution appears as commits on a branch.
- Validation appears as checks, scans, artifacts, and review outcomes.

### Understanding the difference between a plan-first workflow and a plan + execution workflow

When working with agents, teams must decide when a plan becomes visible and when code changes are allowed to begin. In GitHub, planning and execution can start from different entry points — such as a GitHub issue (for example, assigning a Copilot Cloud Agent), or through the Agents tab where a plan is generated interactively.

These are separate ways of interacting with the agent, but they converge on the same governance model: all work is ultimately surfaced and reviewed in a pull request (PR).

The key design choice is therefore not where the plan starts, but when human validation is required relative to code changes.

#### Option A: Plan-first pull request

In this approach, planning is completed and approved before any code changes are introduced.

**How it works in practice:**

- A plan is generated (for example, by assigning an agent to a GitHub issue or creating it in the Agents tab).
- The agent opens a pull request that contains only the plan (no code changes yet).
- Reviewers discuss, refine, and approve the plan directly in the PR.
- After approval, the agent proceeds to implement the plan in follow-up commits or a new PR.

This creates a clear separation between intent (plan) and execution (code).

#### Option B: Plan + execution in the same pull request

In this approach, planning and execution are combined within a single PR.

**How it works in practice:**

- The agent opens a PR that includes both:
  - a structured plan (in the description)
  - initial code changes (commits)
- The agent may continue updating the PR as the plan evolves.
- Standard GitHub controls — required checks, CODEOWNERS reviews, and branch protection — prevent merging until all requirements are satisfied.

Here, the plan is still visible, but it is presented alongside active changes rather than before them.

### Key difference: Timing of validation

Both options use the same GitHub controls. The difference is when those controls are applied relative to execution:

- **Option A (Plan-first):** Human validation happens *before* any code is written.
- **Option B (Plan + execution):** Code is generated immediately, but validation is still required *before merge*.

### Risk considerations

Both approaches can be safe when GitHub protections are correctly configured. The difference lies in when risk is introduced into the system:

- **Option A reduces early exposure.** Since no code is generated before approval, reviewers validate intent first. This minimizes unnecessary or unsafe changes and is preferred in high-risk environments (for example, production systems or security-sensitive areas).
- **Option B introduces earlier exposure to change.** Code appears in the PR before the plan is fully validated. While this code cannot be merged without approval, it may:
  - introduce unnecessary or incorrect changes that must be reviewed and rejected
  - increase reviewer effort
  - create temporary misalignment between plan and implementation

Importantly, this risk exists during the proposal stage, not after merge. GitHub's enforcement mechanisms still prevent unsafe code from being deployed.

### When to use each option

- Use **Plan-first workflow** when:
  - changes are high-risk or difficult to reverse
  - alignment on intent is critical before execution
  - you want strict separation between planning and implementation
- Use **Plan and execution** workflow when:
  - speed and iteration are more important
  - changes are low-risk or easily reversible
  - reviewers are comfortable evaluating plan and code together

### Key takeaway

The choice is not whether work is reviewed — it always is. The choice is when the system allows code to be generated relative to human validation, and how early you want to introduce change into the workflow.

### Enforcing planning boundaries using capability limits and tool gating

1. **Capability boundary** (planning agents are read-only) — A planning agent should be limited to read-only tools so it cannot modify files during planning.
2. **Explicit transition (or handoff) to an implementation agent.** Execution should occur only after plan approval, using a deliberate handoff.
3. **Tool gating in orchestrators** — In automated orchestrations, you can force planning to run without tool execution and then enable tools only after the plan is accepted.
4. **"Plan mode" workflows** — Some interfaces support a planning-first experience that generates a plan artifact and pauses before any changes are applied.

### Decision guidance

- Use plan-first for high-risk work (workflows, infra, auth, production).
- Use plan + execution for medium/low risk work, but keep checks/reviews required.
- Treat "instructions not to edit" as guidance; treat tool allowlists and gates as enforcement.

**Key takeaway:** Separation creates an opportunity to review intent before accepting impact.

---

## Unit 5: Examples of implementing PR governance with templates, checks, CODEOWNERS, rules, and environment gates

In this unit, you'll learn:

- How pull requests act as architectural control points for agent execution
- How to enforce plan validation with required checks status checks
- How to use CODEOWNERS and reviews to route and approve changes

### Pull requests are architectural control points

Pull requests are the primary control mechanism for agent execution in GitHub. Instead of allowing direct changes to protected branches, well-designed architectures route agent changes through pull requests and enforce merge requirements through policy.

A common safe workflow looks like this:

```
Agent creates branch
    ↓
Agent opens pull request (includes plan)
    ↓
Required reviews validate approach
    ↓
GitHub Actions run required checks
    ↓
All checks pass + approvals complete
    ↓
Pull request can be merged
```

This structure ensures that execution is gated by both automation and human review.

### Implementation: PR template that requires a structured plan

A pull request template ensures that every agent PR provides consistent plan and evidence sections.

```md
<!-- File: .github/pull_request_template.md -->

## Plan (required)
- **Goal:**
- **Scope (paths/files):**
- **Steps:**
  1.
  2.
  3.
- **Success criteria (verifiable):**
  - [ ] Required checks pass
  - [ ] Security signals reviewed (as applicable)
- **Risks + mitigations:**
- **Rollback / escalation plan:**

## Evidence
- Workflow run(s):
- Scan results (if applicable):

## Review checklist
- [ ] Plan reviewed and approved
- [ ] Required reviews satisfied
- [ ] Required checks satisfied
```

### Enforcing plan validation with required checks status checks

In addition to templates, you can enforce plan gating as a required status check. This turns a process expectation ("include a plan") into a system guarantee.

```yaml
# File: .github/workflows/plan-gate.yml
name: Plan Gate

on:
  pull_request:
    branches: [ main ]

jobs:
  require-plan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Require plan artifact
        run: |
          if [ ! -f ".github/pull_request_template.md" ]; then
            echo ".github/pull_request_template.md is required for this pull request."
            exit 1
          fi
          echo ".github/pull_request_template.md found."
```

**Implementation note:** A repository administrator can mark Plan Gate as a required status check using rulesets/branch protection, ensuring PRs can't merge unless the plan exists.

GitHub can require explicit approval before workflows run on agent-generated changes.

### Using CODEOWNERS to ensure safety

CODEOWNERS ensures that changes to sensitive areas go to the right reviewers automatically.

```text
# File: CODEOWNERS

/security/ @security-team
/.github/workflows/ @platform-team
/infra/ @platform-team
* @core-team
```

This ensures that a plan and changeset affecting high-risk paths can't be merged without visibility from the right experts (when combined with required review policies).

### Be wary of execution without validation

If an agent can bypass required checks or merge without reviews, the architecture loses its primary safety mechanisms. This is less a model problem and more a workflow design failure.

**Key takeaway:** Pull requests aren't just collaboration tools — they are enforcement mechanisms.

---

## Unit 6: Build reliable workflows - outputs, contexts, triggers, and cross-job handoffs

In this unit, you'll learn:

- How to pass data through workflows using step and job outputs
- How to use GitHub contexts for configuration and control
- How to design workflows with safe triggers and defensive gating
- How to ensure workflows run only in the correct context
- How to build reliable workflows using structured data and event logic

### Autonomy must be designed, not assumed

Different tasks carry different risks. A good agent architecture uses policy to express different autonomy levels rather than applying the same rules everywhere.

A simple risk-based autonomy model might look like this:

| **Task type** | **Example paths** | **Risk level** | **Autonomy design** |
|---|---|---|---|
| Low | docs/, formatting | Low | merge can be automated using GitHub automerge after required checks (and reviews, if configured) pass |
| Medium | src/, dependency bumps | Medium | PR required + checks + at least one review |
| High | infra/, .github/workflows/ | High | CODEOWNERS + multiple reviews + stricter rulesets |
| Critical | production deploys settings, secrets | Critical | environment approvals; agent prepares but can't execute |

### Implementation: environment approvals for high-risk execution

Environments provide a strong control point for risky actions such as deployments and access to protected secrets. If an environment is configured with required reviewers, a job targeting that environment will pause until approval is granted.

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: production
    steps:
      - run: echo "Deploying to production..."
```

This design allows the agent to prepare changes while preventing it from executing production-impacting actions independently.

### Outputs are workflow contracts (step outputs vs job outputs vs env)

When a workflow generates information that downstream steps or jobs must consume, treat that data as an explicit output rather than "just logs."

Teach and apply these principles:

- **Step outputs** pass values between steps in the same job.
- **Job outputs** pass values across jobs (through job dependencies).
- **Environment variables** configure runtime behavior but shouldn't replace outputs for structured data flow.

Illustrative pattern (mechanics shown, but not exam-shaped):

```yaml
- id: generate_plan
  run: |
    echo "plan=high level steps..." >> "$GITHUB_OUTPUT"

- run: |
    echo "Plan: ${{ steps.generate_plan.outputs.plan }}"
```

For cross-job sharing, publish a job output and reference it from a dependent job:

```yaml
jobs:
  plan:
    outputs:
      plan: ${{ steps.generate_plan.outputs.plan }}
    steps:
      - id: generate_plan
        run: echo "plan=..." >> "$GITHUB_OUTPUT"

  implement:
    needs: plan
    steps:
      - run: echo "Using plan: ${{ needs.plan.outputs.plan }}"
```

### Contexts: GitHub vs vars vs env

Use the right context for the right purpose:

- `github.*` → event metadata and runtime decisions ("what triggered this run?")
- `vars.*` → centrally managed configuration values designed to be reused
- `env.*` → job-level environment variables and runtime configuration

### Safe triggering and defensive gating

Even when workflows are designed for PRs, repositories often have multiple triggers. Add defensive gating so "PR-only" behavior doesn't accidentally run without a PR context.

General pattern to teach:

- Use job-level conditions to ensure PR-dependent actions only run when the run is tied to a PR event.

#### Defensive gating for pull request-only behavior

Even if a workflow is intended to run only for pull requests, it may still be triggered by other events (for example, push, `workflow_dispatch`, or schedule). Without additional safeguards, PR-specific steps — such as commenting on a pull request or evaluating changes — can fail or behave unexpectedly.

You can prevent this by adding a **job-level condition** that ensures the workflow only runs when it's associated with a pull request.

```yaml
name: PR Validation

on:
  pull_request:
    branches: [ main ]
  workflow_dispatch: # allows manual runs, but still gated below

jobs:
  validate-pr:
    # Defensive gating: only run if this is actually a PR context
    if: github.event_name == 'pull_request'

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Run tests
        run: npm test

      - name: Comment on PR
        run: echo "Validation complete"
```

**Key takeaway:** Workflow reliability improves when plans and signals are treated as structured outputs and guarded by event-aware logic.

---

## Unit 7: Control and operate agents - observability, tools, MCP, secrets, hooks, and reliability

In this unit, you will learn:

- Discover the evidence and artifacts that are required for agent work
- How to control tools, MCP integrations, and secrets safely
- How hooks enforce guardrails and audit logging
- How to design for reliability using retries, escalation, and least privilege

### Required evidence and artifacts for agents

An agent system must produce visible artifacts for every meaningful action. Without artifacts, you cannot reliably review behavior, debug failures, or perform post-hoc analysis.

In GitHub, observability is achieved through artifacts such as:

- pull requests and PR timelines,
- commits and branch history,
- workflow runs and job logs,
- required checks and scan results, and
- uploaded workflow artifacts (for example, test reports).

#### Minimum observability set

A well-designed agent task should produce visible, reviewable evidence using GitHub-native artifacts:

- a structured plan, typically included in a pull request description or discussion
- a bounded pull request and commit history
- workflow run links for required checks
- uploaded artifacts (for example, logs or reports)
- review outcomes (approvals or changes requested)

#### Upload workflow artifacts for review and debugging

Uploading artifacts makes evidence durable and reviewable, even when logs scroll away.

We recommend the best practice of including links to workflow runs and relevant artifacts in the PR under an "Evidence" section so reviewers can quickly validate outcomes.

```yaml
- name: Upload test results
  uses: actions/upload-artifact@v4
  with:
    name: test-results
    path: results/
```

### Reliability assumes failure

Reliable systems assume that failure will occur. Agents will misunderstand tasks, tests will fail, and changes will conflict with existing behavior. Your architecture should detect failures early and provide safe recovery paths.

A practical reliability pattern includes:

- **Retries:** the agent can update the branch when checks fail.
- **Escalation:** persistent failures are summarized and handed off to a human.
- **Rollback readiness:** high-risk changes include rollback notes and scope limits.

#### Safe iteration policy

Use a predictable policy for iteration:

- If a required check fails, the agent may revise the PR branch and rerun checks.
- If the same required check fails twice, escalate to a human reviewer with:
  - what failed,
  - what was attempted,
  - what evidence exists, and
  - what the suggested next step is.

This policy helps prevent infinite loops and makes failures actionable.

### Observability as a required architectural feature

A minimum observability set for autonomous work should include:

- a visible plan artifact,
- a PR + commit history,
- workflow run links for required checks,
- durable artifacts (logs/reports/traces),
- review outcomes and approvals.

### Make evidence traceable to execution and code state

Teach a naming/metadata principle:

- Evidence should be traceable to a specific workflow run and a specific commit.

This helps audits and debugging: you can answer "which run produced this artifact, and against what code state?"

### Share evidence across jobs using artifacts

Teach the pattern:

- Upload artifacts where they are produced
- Download them where they are reviewed or deployed

This keeps outputs inspectable and usable without committing generated files back to the repo.

### How to control tools, MCP integrations, and secrets safely

Agent profile configuration provides three kinds of control:

- **Capability boundary:** which tools are allowed (prefer allowlists)
- **Visibility boundary:** whether the agent is user-selectable in interactive UI
- **Delegation boundary:** which subagents can be invoked and how handoffs occur

Design guidance:

- Use read-only toolsets for planning and review agents.
- Restrict implementation tools to execution agents.
- Treat changes to tool allowlists as a governance-sensitive change.

#### MCP servers: extend tools safely

MCP servers extend tool capability. Teach these patterns:

- **Transport shape:** some MCP servers are remote endpoints; others are local processes.
- **Authentication:** tokens should be injected at runtime via protected secret boundaries.
- **Namespace control:** prefer enabling a narrow tool subset rather than broad wildcards.

Operational guidance:

- Adding or expanding MCP tools increases blast radius and should be reviewed like a high-risk dependency.

#### Secrets and environment constraints (keep secrets out of repo content)

Do not place secrets in:

- instructions files,
- committed configuration files,
- or workflow YAML in plain text.

Instead:

- Use protected secret boundaries intended for runtime injection,
- Pass secrets only to the components that need them,
- Scope secret availability (for example, by environment) to reduce exposure.

Teach the principle:

- "The agent's runtime environment has its own secret boundary; don't assume it automatically inherits repository CI secrets."

### How hooks enforce guardrails and audit logging

In GitHub Copilot agents, hooks are defined as configuration files stored in the repository (for example, under `.github/hooks/`). Each hook specifies when it runs and what action it performs.

Hooks execute custom commands at specific points during agent execution. This allows teams to enforce policies, validate actions, and capture audit data automatically.

A simplified example:

```json
{
  "name": "block-high-risk-command",
  "trigger": "pre-tool-use",
  "run": "if [[ \"$TOOL\" == \"delete\" ]]; then echo 'Blocked unsafe command'; exit 1; fi"
}
```

#### How this works

- The hook runs before a tool is executed (pre-tool-use)
- It inspects the requested action
- If the action matches a blocked pattern, execution is stopped

#### Common hook patterns

- **Pre-action hooks** — Validate or block unsafe actions before execution
- **Post-action hooks** — Log tool usage, outputs, or decisions for auditing
- **Error hooks** — Capture failures and trigger escalation or alerting

#### What hooks enable

- Enforcing security policies (for example, blocking unsafe commands)
- Adding audit logs for compliance and debugging
- Integrating with external systems (alerts, monitoring, approvals)
- Hooks provide enforceable control points that operate independently of the model's reasoning. Instead of relying on instructions, they ensure that certain rules are always applied during execution.

### How to design for reliability using retries, escalation, and least privilege

As we spoke about earlier, agents will eventually fail, but we can build systems that can catch these failures and ensure human intervention catches it, for example here are a couple of ways to ensure failures are caught:

- Bounded retries for transient failures
- Escalation paths for repeated failures
- Rollback readiness for high-risk changes
- Least-privilege permissions to reduce blast radius

#### Rollback-safe pattern to teach:

- Operate on explicit references (commit/tag) when deploying sensitive configuration, rather than "latest on a branch."

#### Least privilege reminder:

- Restrict workflow permissions by default and elevate only where needed.

#### Least-privilege workflow permissions

Least privilege reduces risk when something goes wrong. It also prevents over-permissioned automation from becoming an architectural vulnerability.

```yaml
permissions:
  contents: read
  pull-requests: write
```

This configuration allows automation to read repository content and update PR context (comments, statuses) while preventing broad write access by default.

---

## Unit 8: Knowledge Check

1. **What is the most reliable way to prevent planless execution from being merged?**

   - Ask the agent to be careful.
   - Require a plan template only.
   - ~~Make a plan check a required status check and require pull request reviews.~~ ✓
   - Allow direct pushes but require tests.

2. **Which GitHub feature most directly routes reviews based on changed file paths?**

   - Issues
   - ~~CODEOWNERS~~ ✓
   - Actions artifacts
   - Releases

3. **In a plan-act-evaluate architecture, where should evaluation evidence primarily live?**

   - Only inside the agent's private logs
   - In PR comments only
   - ~~In GitHub-native artifacts like workflow runs, checks, and uploaded artifacts~~ ✓
   - In a separate external document

4. **Which design best expresses risk-based autonomy for production deployments?**

   - Let the agent deploy after tests pass
   - ~~Use GitHub Environments with required reviewers for production~~ ✓
   - Allow direct pushes to main
   - Disable workflow approvals

5. **Which is an architectural anti-pattern in agent design?**

   - Clear success criteria
   - Required checks
   - ~~Mixed planning and execution with no inspectable plan~~ ✓
   - Uploading artifacts

---

## Unit 9: Summary

**This module covered how to design agent architectures that work reliably within the Software Development Lifecycle (SDLC) while maintaining clear boundaries, governance, and human oversight.** We explored how agentic systems can go beyond simple automation by interpreting goals and proposing changes, but also why that power requires structure — without it, agents can introduce risk to code quality, security, and stability.

A key theme across the module was reinforcing that agents should propose work, not unilaterally execute it. By using pull requests, required checks, CODEOWNERS, and environment protections, we ensure that all agent-generated changes are validated through both automated signals and human review before they are accepted. This model is critical to maintaining security and reliability, especially as agent autonomy increases.

By enforcing governance, observability, and risk-based autonomy, teams can safely delegate repetitive or time-consuming work to agents while keeping humans in control of decisions that matter most. The result is a development workflow that is both faster and more scalable, without sacrificing trust, quality, or accountability.

In this module, you learned how to:

- Map agent responsibilities to SDLC stages and define bounded scopes.
- Define task inputs, outputs, and enforceable success criteria.
- Separate planning from execution and enforce plan gating.
- Use PR-based controls (templates, required checks, CODEOWNERS, rules, environments) to govern work.
- Build reliable workflows using outputs, contexts, and safe triggering patterns.
- Operate agents safely using observability, artifacts, tool governance, MCP restrictions, secrets isolation, hooks-based guardrails, and reliability patterns.

## Learn more

For deeper reading, use official GitHub documentation on:

- [Creating a pull request template for your repository](https://docs.github.com/es/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)
- [Managing rulesets for a repository](https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository) and [Available rules for rulesets](https://docs.github.com/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)
- [Troubleshooting required status checks](https://docs.github.com/en/enterprise-server@3.16/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/troubleshooting-required-status-checks) (helps avoid brittle "required check" designs)
- [Using GITHUB_TOKEN for authentication in workflows](https://docs.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) and [Security hardening for GitHub Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Environments](https://docs.github.com/en/actions/reference/environments) (required reviewers, deployment protection rules, and approval gates)
- [Uploading an artifact in a workflow](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts) (workflow outputs as durable evidence)
- [Uploading a SARIF file to GitHub](https://docs.github.com/en/code-security/how-tos/scan-code-for-vulnerabilities/integrate-with-existing-tools/uploading-a-sarif-file-to-github) (code scanning evidence in CI)
- [Protecting pushes with secret scanning (push protection)](https://docs.github.com/code-security/secret-scanning/protecting-pushes-with-secret-scanning) (prevents supported secrets from being committed)
- [Using hooks with GitHub Copilot agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-hooks)
- [Tracking GitHub Copilot's sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/track-copilot-sessions)
