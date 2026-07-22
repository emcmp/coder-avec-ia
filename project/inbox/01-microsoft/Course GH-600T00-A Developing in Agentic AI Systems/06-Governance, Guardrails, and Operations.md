# Governance, Guardrails, and Operations

> **Module** | 9 Units | Intermediate
> Source: https://learn.microsoft.com/en-us/training/modules/governance-guardrails-operations/

Learn how to design secure and compliant agent governance using GitHub-native controls, human-in-the-loop approvals, and least-privilege access. This module also introduces operational safeguards to improve reliability, accountability, and recovery.

## Learning objectives

By the end of this module, you'll be able to:

- Define risk-based autonomy and action boundaries for agent systems
- Enforce governance using GitHub-native controls such as rulesets, checks, CODEOWNERS, and environments
- Design human-in-the-loop workflows for high-risk actions
- Control agent capabilities using least-privilege permissions
- Make agent actions observable, traceable, and auditable
- Maintain governance and operational reliability over time

## Prerequisites

Before getting started, you should have:

- A GitHub account
- Basic understanding of repositories, branches, and pull requests
- Familiarity with GitHub Actions
- General understanding of agent workflows in GitHub, IDE, or CLI environments

---

## Unit 1: Introduction

As agent systems become more capable, the most important design question is no longer what they can do — it's what they **should** be allowed to do.

Real-world agent systems in software engineering operate within constraints such as security requirements, compliance obligations, operational risk management, and organizational policies.

Without governance, even well-designed agents can introduce serious problems:

- Unauthorized changes to critical code
- Unsafe deployments
- Excessive permissions or sensitive data exposure
- Lack of accountability and forensic trace

In the GitHub ecosystem, governance isn't a separate system. It's enforced directly via repository controls, workflows, and enforceable policies.

---

## Unit 2: Define risk-based autonomy and action boundaries

Start by considering what actions an agent should be able to take — and where clear boundaries need to exist. Not all actions carry the same level of risk, and treating them the same can either slow things down or create unnecessary exposure. By grounding autonomy in risk, you create a clear foundation for how agents operate in a safe and predictable way.

### What is risk-based autonomy?

Risk-based autonomy means allowing agents to act within boundaries that match the impact and reversibility of their actions. Low-risk tasks can run automatically, while higher-risk actions require validation, approvals, or stricter controls to prevent unintended consequences.

### Why autonomy must be risk-based

Not all actions have equal impact. Updating documentation is reversible, while deploying infrastructure changes can have system-wide consequences.

Risk depends not only on the action itself, but also on:

- where the change is applied
- how easily it can be reversed
- how quickly it affects users or systems

For example, editing a README file has minimal impact, while modifying `.github/workflows/` affects the entire pipeline.

### Autonomy levels

A useful autonomy model for agentic systems:

- **Read-only autonomy:** Agent can inspect, summarize, classify, and recommend changes, but can't modify anything.
- **Propose-only autonomy:** Agent can create branches and pull requests, but can't merge or deploy.
- **Execute with guardrails:** Agent can run pre-approved workflows (tests, builds, staging deploys) within defined limits.
- **Human-authorized execution:** Agent can perform high-impact actions only after a human approves (production deploy, workflow changes, secret access).

> **Tip:** Autonomy isn't one setting. You'll usually combine controls across PR rules, environments, workflow permissions, and tool access.

### Risk classification model

| Risk level | Example actions | Recommended control |
|---|---|---|
| Low | docs, formatting | full automation |
| Medium | dependency updates, safe refactors | PR + required checks |
| High | infra changes, workflow changes | CODEOWNERS + explicit approvals + stronger checks |
| Critical | production deploy, production secrets access | environment gate + explicit reviewers + audit evidence required |

Use full automation only when failures are reversible. Require approval when actions are irreversible or affect production systems.

> **Important:** Treat changes to `.github/workflows/`, `infra/`, and `security/` as high risk by default. These are "small diff, big consequence" areas.

### Implementation: risk-based execution

When an agent produces a plan with a risk rating, that rating should determine how the system responds.

- Low-risk plans can run automatically
- Medium-risk plans require validation through PRs and checks
- High-risk plans require explicit human approval

Example: route execution based on plan risk

```yaml
name: agent-plan-apply

on:
  workflow_dispatch:

jobs:
  plan:
    runs-on: ubuntu-latest
    outputs:
      risk: ${{ steps.read.outputs.risk }}
    steps:
      - uses: actions/checkout@v4
      - name: Download plan artifact
        uses: actions/download-artifact@v4
        with:
          name: plan
          path: out
      - id: read
        name: Read risk from plan.json
        run: |
          echo "risk=$(jq -r .risk out/plan.json)" >> "$GITHUB_OUTPUT"

  apply:
    needs: plan
    runs-on: ubuntu-latest
    environment: approval-required
    if: ${{ needs.plan.outputs.risk != 'low' }}
    steps:
      - name: Apply agent plan
        run: ./scripts/apply.sh out/plan.json

  apply_auto:
    needs: plan
    runs-on: ubuntu-latest
    if: ${{ needs.plan.outputs.risk == 'low' }}
    steps:
      - name: Apply agent plan (auto)
        run: ./scripts/apply.sh out/plan.json
```

> **Decision guidance:** Don't rely on narrative explanations of risk. Use a machine-readable signal and enforce routing.

### Scope autonomy through tool access

When using terminal-based agents (such as Copilot CLI), tool access becomes the primary governance boundary.

Read-only actions, such as inspecting the repository state, can be allowed by default. However, write operations, command execution, and privileged actions should remain gated unless explicitly required.

Example: low-risk, read-only Copilot CLI task scoped to Git access only

```bash
copilot -p "Summarize the last 10 commits and highlight breaking changes." --allow-tool 'shell(git)'
```

> **Decision guidance:** Match tool access to consequence. Low-risk tasks shouldn't inherit high-risk capabilities.

### Apply progressive autonomy

Teams often begin with strict controls and gradually relax them as agent behavior proves reliable. This allows autonomy to scale safely over time.

Safe progression example:

- **Phase 1:** agent can only open PRs, can't merge
- **Phase 2:** agent can merge low-risk PRs after checks
- **Phase 3:** agent can deploy to staging automatically
- **Phase 4:** agent can deploy to production only through environment approval

### Key takeaway

Autonomy must be explicitly defined and constrained by risk. Apply full automation only to low-risk, reversible tasks, and require validation or approval for higher-risk actions. This ensures agent behavior remains predictable, controlled, and safe as systems scale.

---

## Unit 3: Enforce governance with GitHub controls

Once boundaries are in place, the next step is making sure they're consistently applied. It isn't enough to define rules — those decisions need to be enforced in a way that can't be bypassed. GitHub provides the controls to turn governance into something concrete, so every action is validated and aligned with your policies.

### What are enforcement controls?

- Rulesets / branch protection
- Required checks
- CODEOWNERS
- Environments
- Guardrail workflows

### Apply rulesets and branch protection

For protected branches such as `main`, enforce:

- PR required to merge
- Required checks must pass
- Required approving reviews (per risk)
- Require CODEOWNERS review (for sensitive paths)
- Restrict direct pushes
- Block force pushes and branch deletion

Example: PR checks trigger

```yaml
on:
  pull_request:
    branches: [main]
```

### Use required checks as validation

Required checks should map to your governance goals:

- Build and unit tests (quality)
- Security scans (risk)
- Policy checks (for workflows/infra changes)

> **Decision guidance:** Treat renaming or removing required checks as high risk. If checks drift, governance drifts.

### Route ownership using CODEOWNERS

```
/security/          @security-team
/infra/             @platform-team
/.github/workflows/ @platform-team
*                   @core-team
```

> **Decision guidance:** Make sure "require CODEOWNERS review" is enabled, or CODEOWNERS becomes advisory only.

### Gate deployments with environments

Use environments to:

- Require reviewers for production deploys
- Restrict production secrets to production environment only
- Maintain a clear deployment and approval record

> **Decision guidance:** If a workflow accesses production secrets, treat it as critical risk and gate it.

### Enforceable guardrails for local agent execution (Copilot CLI hooks)

If your organization uses repository-scoped configuration for local agents, enforce deny rules that block dangerous commands before execution.

Example: Copilot CLI preToolUse hook that blocks high-risk commands

```json
{
  "hook": "preToolUse",
  "tools": ["shell(bash)"],
  "rules": [
    { "match": "sudo", "permissionDecision": "deny" },
    { "match": "rm -rf /", "permissionDecision": "deny" },
    { "match": "curl .*\\|\\s*bash", "permissionDecision": "deny" }
  ]
}
```

> **Decision guidance:** Use enforceable hooks for blocking. Logging and banners are helpful, but they don't prevent execution.

### Add defense-in-depth workflows

Some organizations add a guardrail check to ensure that:

- Agent-authored PRs can't merge automatically
- Approvals are counted only from human users, not bots
- Review requirements can't be satisfied by automation identities

Example: guardrail workflow that blocks Copilot-authored PRs and requires human approval

```yaml
name: agent-guardrails

on:
  pull_request:
    branches: ["main"]

permissions:
  contents: read

jobs:
  enforce-human-review:
    runs-on: ubuntu-latest
    steps:
      - name: Fail if PR is authored by Copilot agent
        if: ${{ github.event.pull_request.user.login == 'github-copilot[bot]' }}
        run: |
          echo "PRs authored by github-copilot[bot] must be opened/owned by a human."
          exit 1

      - name: Require at least one human approval
        uses: actions/github-script@v7
        with:
          script: |
            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const pull_number = context.payload.pull_request.number;

            const reviews = await github.rest.pulls.listReviews({ owner, repo, pull_number });

            const approvedByHuman = reviews.data.some(r =>
              r.state === "APPROVED" &&
              r.user &&
              r.user.type === "User" &&
              r.user.login !== "github-copilot[bot]"
            );

            if (!approvedByHuman) {
              core.setFailed("Human approval is required before merge.");
            }
```

### Apply layered enforcement model

Governance should operate across multiple layers:

- Pre-action constraints (permissions)
- In-action validation (checks)
- Post-action traceability (logs, artifacts)

If a control isn't enforced by the platform, it should be treated as optional.

### Why enforcement must be automated

Agents operate at scale and speed. Governance that relies on human behavior alone will fail under these conditions. Enforcement must be built into the system so unsafe actions are blocked before they occur.

> **Important:** "Controls in docs only" is an anti-pattern. If the platform can't enforce it, it will be bypassed.

### Key takeaway

Governance in GitHub is enforced through policy, not trust. By combining rulesets, checks, ownership, and environment gates, you ensure that every action is validated and can't bypass defined controls — making agent behavior consistent, auditable, and safe at scale.

---

## Unit 4: Design human-in-the-loop workflows

Even with strong controls, there are moments where human judgment is still essential. The goal isn't to add friction everywhere, but to introduce oversight where it matters most. By placing humans at key decision points, you can maintain control over high-impact actions while allowing low-risk work to move quickly.

### What is human-in-the-loop governance?

Agents can generate changes quickly, but human judgment is still required for high-risk decisions. The goal isn't to slow down workflows, but to apply human oversight where it matters.

### How human-in-the-loop workflows work

Human-in-the-loop workflows define how agent-generated work is reviewed, validated, and approved before execution.

- Agent creates PR (including plan and risk level)
- Checks validate changes
- CODEOWNERS auto-requested where necessary
- Merge allowed after approvals/checks

> **Tip:** Put humans at decision points (merge, deploy, secret access), not at every step (analysis, formatting, routine checks).

### Gate production deployments

Production deployments should be gated to ensure changes are reviewed and explicitly approved before impacting live systems.

Example: environment approval for production

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: production
    steps:
      - run: ./deploy.sh
```

> **Decision guidance:** Production approvals should be explicit, auditable, and owned by accountable roles.

### Prevent overlapping deployments

Production deployments shouldn't overlap. Preventing concurrent deployments reduces race conditions, conflicting releases, and inconsistent system states.

```yaml
concurrency:
  group: production
  cancel-in-progress: true
```

> **Decision guidance:** Serialize production deploys to keep release behavior predictable and auditable.

### Apply tool-based approval boundaries

Human approval should be applied selectively:

- Low-risk actions (reading, searching) can be automated
- Medium/high-risk actions (editing, execution) should require approval

Example: preserve velocity for read/search while keeping edit/execute approval-gated

```bash
copilot agent run CodeAgent --allow-tool 'read,search'
```

> **Why this matters:** This pattern removes friction for low-risk tools while ensuring high-risk tools remain available but require explicit approval at the time of use.

### Avoid governance fatigue

Governance should be designed to reduce friction, so teams can maintain oversight without slowing down everyday work.

To reduce governance fatigue, focus on practical steps that make review easier and faster:

- Require evidence (tests, scans, artifacts) so review is fast
- Route reviews via CODEOWNERS so reviewers have context
- Keep PRs small and scoped
- Require a rollback plan for high-impact changes

### Why human oversight matters

Agents can execute tasks quickly, but they don't carry responsibility for outcomes. Humans provide the judgment needed to evaluate risk, context, and trade-offs — especially for decisions that can't be fully validated through automated checks.

Apply human oversight selectively at key decision points, such as merge, deployment, and access to sensitive resources, rather than throughout the entire workflow. This ensures control without introducing unnecessary friction.

### Key takeaway

Human control should be targeted and intentional. Apply oversight at high-impact decision points — such as merge, deployment, and access to sensitive resources — while allowing low-risk work to proceed automatically. This balance preserves speed without sacrificing accountability or control.

---

## Unit 5: Control agent capabilities using least privilege

With decision points defined, it becomes important to think about what agents can actually access and do. Permissions shape those boundaries. By limiting access to only what is needed, you reduce the chances of unintended consequences and keep the system easier to manage and recover from.

### What is least-privilege execution?

Least-privilege execution means agents are given only the minimum permissions required to complete a specific task, and nothing more. This limits what an agent can access or modify at any given time.

Broad tokens amplify incidents and increase the potential impact of mistakes. By restricting permissions to only what is necessary — and elevating access only when required — you reduce blast radius and help ensure failures remain contained and easier to recover from.

### Set minimal defaults

Example: workflow permissions

```yaml
permissions:
  contents: read
  pull-requests: write
```

Only allow write where required, and document why. Default to read-only access and elevate permissions only when required.

### Elevate permissions only where needed

Set a read-only default at the workflow level, then elevate write permissions only for the job that must write.

```yaml
permissions:
  contents: read

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - run: echo "Read-only analysis"

  update_artifacts:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - uses: actions/checkout@v5
      - run: echo "Write operations happen here"
```

> **Decision guidance:** Granting `pull-requests: write` should be treated as elevated capability. Use it only when the workflow must create/update PRs.

### Apply additional controls

- Restrict secrets access using environments
- Isolate workflows so high-risk jobs don't share permissions with low-risk jobs
- Minimize third-party actions and pin versions when possible

### Why permissions define risk

Permissions determine what an agent is actually capable of doing, regardless of intent. Broad tokens can amplify small mistakes into large failures by allowing unintended changes across the system. By applying least privilege, you limit the scope of what an agent can affect, reducing blast radius and making issues easier to contain and recover from.

### Key takeaway

Permissions define the true boundary of agent power. They determine what an agent can actually do in the system, regardless of intent or instructions. By keeping permissions minimal and scoped, you reduce risk, contain failures, and maintain control as systems scale.

---

## Unit 6: Make actions observable, traceable, and auditable

As agents begin to operate within these boundaries, visibility becomes critical. Being able to see what happened, why it happened, and who approved it makes it much easier to debug issues and build trust in the system. Every meaningful action should leave behind enough evidence to understand and verify it.

### How observability works in GitHub

GitHub enables observability by capturing agent activity directly within the development workflow through pull requests, workflows, logs, and artifacts.

### Observability model

Every meaningful action must produce:

- PR + commit history
- Workflow results (job logs, time, actor)
- Uploaded artifacts (plan, test results, execution report)
- Approval and merge events
- Environment approval record (for production)

A useful rule is that every meaningful action must leave a trace that a reviewer can inspect.

### Observability as a design requirement

Without durable evidence, you can't:

- Debug failures reliably
- Investigate incidents
- Prove compliance
- Trust autonomous changes over time

Example: upload artifact

```yaml
- name: Upload execution report
  uses: actions/upload-artifact@v4
  with:
    name: execution-report
    path: report.json
```

> **Decision guidance:** Artifacts should be directly accessible and retained long enough for audits and incident response.

### Evidence-first workflows

Each critical workflow should output evidence such as:

- Test results
- Scan reports
- `plan.json` (machine-readable)
- Execution report (machine-readable summary)

> **Important:** Treat missing evidence as a failure. If a change can't be audited, it shouldn't be merged.

### Why observability matters

Without clear, durable evidence of what happened, systems quickly become difficult to operate and trust. When actions aren't visible or traceable:

- Debugging becomes slow and reactive because there is no reliable record of events
- Compliance can't be demonstrated because decisions and approvals aren't auditable
- Trust breaks down because changes can't be explained or validated

A practical rule is: **missing evidence = failure**. If a system can't show what happened and why, it can't be safely operated at scale.

### Key takeaway

Observability enables accountability and trust by making every action visible, traceable, and explainable. It ensures systems remain debuggable, auditable, and reliable as they grow in complexity.

---

## Unit 7: Maintain governance and operational reliability

Over time, systems change, and so do the risks. Controls that worked well initially can drift or become outdated. Maintaining governance means revisiting these decisions regularly, adjusting where needed, and making sure the system continues to operate safely as it grows.

### What is operational governance?

Operational governance recognizes that governance isn't static — it evolves as systems, teams, and risks change over time. It requires continuous management to ensure that controls remain effective, policies stay aligned with real usage, and new risks are addressed as they emerge.

In practice, this means regularly reviewing permissions, updating rules and ownership, monitoring system behavior, and adapting controls as agent capabilities and workflows grow.

### Manage agent lifecycle

Agent lifecycle management follows a continuous sequence of deployment, monitoring, updating, and eventual retirement. In practice, both agents and their guardrails evolve over time, so ownership must be clearly defined, and supporting elements such as runbooks and regular review cadences must be in place to maintain effective governance.

### Detect governance drift

Over time, governance drift is inevitable. Controls can degrade as checks are renamed or removed, review requirements are relaxed, CODEOWNERS become outdated, permissions expand, or secrets are moved into broader scopes. For this reason, governance should be treated as an ongoing operational responsibility, with periodic reviews built into the workflow.

### Prevent ambiguity before execution

Ambiguity must be addressed before it becomes execution risk. Before assigning work to an agent, tasks should be clearly defined with acceptance criteria, constraints and non-goals, specified files or paths, and clear validation and rollout expectations. If a task can't be defined precisely, it shouldn't be executed autonomously.

### Apply recovery strategies

- Retry transient failures (bounded retries)
- Escalate after repeated failures
- Rollback quickly using small PRs and safe revert paths
- Investigate security failures instead of repeatedly retrying

### Run continuous governance loop

Recommended cadence:

- **Weekly:** review failed runs and common policy violations
- **Monthly:** review workflow permissions and secret scopes
- **Quarterly:** audit rulesets, CODEOWNERS, environment reviewers, retention/evidence

### Identify governance failure patterns

| Anti-pattern | Example | Why it fails | Mitigation |
|---|---|---|---|
| Unbounded autonomy | no approval for prod deploys | irreversible changes happen without oversight | environments + required reviewers + rulesets |
| Excess permissions | token can write-all and read-all secrets | small mistake becomes major incident | least privilege + env scoping + job-level permissions |
| Missing audit trail | no artifacts, only console logs | can't prove what happened | artifact uploads + evidence-first workflows |
| Bypass paths exist | direct push to main, disabled checks | policy can be skipped | branch protections/rulesets + restrict push |
| Rubber-stamping | approvals become "click to unblock" | humans stop reviewing | better evidence + CODEOWNERS + smaller PRs |

### Why continuous governance matters

Controls naturally degrade over time as systems evolve — checks are renamed, permissions expand, ownership changes, and workflows are updated. Without regular review, these small changes accumulate and increase risk, creating gaps in enforcement and visibility. Continuous governance ensures that controls remain effective, aligned with current usage, and capable of managing new risks as they emerge.

### Key takeaway

Governance requires continuous monitoring and improvement. Treat it as an ongoing operational responsibility, not a one-time setup, so systems remain secure, reliable, and aligned with real-world usage as they scale.

---

## Unit 8: Knowledge Check

1. **What is the best way to allow a terminal agent to perform a low-risk, read-only task like summarizing recent commits without granting broad capabilities?**

   - Allow all tools so the agent never prompts for approval
   - ~~Scope tool access to only what is required for read-only Git inspection~~ ✓
   - Grant write access by default and rely on audits afterward
   - Deny all shell access and require manual copy/paste of commit history

2. **Which GitHub-native control is most effective for requiring explicit approval before production workflows access production secrets?**

   - A PR template that asks for review
   - A repository README policy statement
   - ~~A protected environment with required reviewers~~ ✓
   - A label applied by the agent

3. **What is the recommended least-privilege pattern for GITHUB_TOKEN permissions in agent-driven workflows?**

   - Set write permissions globally so any job can push if needed
   - ~~Default to read-only and elevate permissions only for the job that performs write operations~~ ✓
   - Disable permissions entirely and store a PAT in the repository
   - Grant all permissions during business hours only

4. **Which configuration helps prevent overlapping production deployments and cancels in-progress deployments when a newer run starts?**

   - Using larger runners
   - Adding more approvals
   - ~~Concurrency with a shared group and cancel-in-progress~~ ✓
   - Disabling `workflow_dispatch`

5. **What is the best GitHub-native mechanism to route required review for sensitive paths like `.github/workflows/` and `infra/`?**

   - Asking reviewers in chat
   - ~~CODEOWNERS (with required reviews policy)~~ ✓
   - Adding labels and milestones
   - Squashing commits before merge

---

## Unit 9: Summary

In this module, you learned how to:

- Define autonomy levels and action boundaries so agents operate with bounded autonomy aligned to risk, security, and compliance requirements
- Classify agent actions (low, medium, high, critical) and map each risk tier to GitHub-native enforcement controls such as rulesets, required checks, CODEOWNERS, and environments
- Enforce governance through rulesets/branch protection, required status checks, path-based review routing, and deployment gates so policy is technically enforced and can't be bypassed
- Design human-in-the-loop workflows that place approvals at high-impact decision points (merge, deploy, secret access) while keeping low-risk work automated for velocity
- Apply least-privilege execution by setting read-only defaults for workflow tokens and granting write permissions only to the job(s) that require them, with secrets scoped to protected environments
- Improve operational reliability with workflow concurrency controls, risk-based plan gating, durable evidence (logs and artifacts), drift detection, and recovery patterns (retry limits, rollback, escalation)

## Learn more

- [Available rules for rulesets - GitHub Docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)
- [About code owners - GitHub Docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [Managing environments for deployment - GitHub Docs](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
- [Secure use reference - GitHub Docs](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Store and share data with workflow artifacts - GitHub Docs](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)
