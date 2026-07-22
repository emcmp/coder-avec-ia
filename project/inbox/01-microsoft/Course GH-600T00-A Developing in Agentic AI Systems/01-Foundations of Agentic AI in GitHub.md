# Foundations of Agentic AI in GitHub

> **Module** | 8 Units | Intermediate
> Source: https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/

Learn how AI coding agents are transforming software development by planning, acting, and improving within GitHub workflows.

## Learning objectives

By the end of this module, you will be able to:

- Define agentic AI in the SDLC and distinguish agents from assistants
- Explain and apply the plan → act → evaluate lifecycle in agent workflows
- Describe how GitHub functions as the system of record and control plane for agent activity
- Identify responsibilities, risks, anti-patterns, and traceability requirements in agent systems
- Apply the contributor model to evaluate agent-generated work

## Prerequisites

Before getting started, you should have:

- A GitHub account and familiarity with repositories, branches, and pull requests
- Basic experience with GitHub Actions and status checks
- A general understanding of the software development lifecycle (SDLC)
- Familiarity with AI-assisted development tools (such as GitHub Copilot)
- Awareness of basic repository governance concepts (for example, reviews, CODEOWNERS, and branch protection)

---

## Unit 1: Introduction

AI-assisted development is evolving. Instead of tools that only suggest code, we now have systems that can actually take action inside the software development lifecycle (SDLC). In GitHub, you can already see this with experiences like Copilot's cloud agent. It can explore a repository, suggest a plan, make changes on a branch, and open a pull request for you to review. As these systems become more capable, your role as a developer starts to change. You're not just writing code anymore. You're also guiding, supervising, and validating systems that can plan, act, and improve over time within your workflows.

Agent workflows follow a plan → act → evaluate loop, where each cycle uses system feedback to refine the next step until the outcome meets required standards. This module gives you the foundation you need to understand that shift. You'll learn what makes a system "agentic," how agents differ from traditional assistants, and how they operate inside GitHub. You'll also see how GitHub acts as both the system of record and the control plane, using familiar tools like pull requests, reviews, status checks, CODEOWNERS, rulesets, and environments to keep agent activity safe and controlled.

In this module we cover:

- Define agentic AI in the SDLC and distinguish agents from assistants
- Explain and apply the plan → act → evaluate lifecycle in agent workflows
- Describe how GitHub functions as the system of record and control plane for agent activity
- Identify responsibilities, risks, anti-patterns, and traceability requirements in agent systems
- Apply the contributor model to evaluate agent-generated work

Here are other modules for more learning about Developing in Agentic AI Systems:

- [Developing Agent Architecture and SDLC Integration](/en-us/training/modules/design-agent-architecture-integration/)
- [Tooling, MCP, and Agent Execution Environments](/en-us/training/modules/agent-tooling-mcp-execution-environments/)

---

## Unit 2: Define agentic AI in the SDLC

Many developers already use AI in a familiar assistant pattern. An assistant responds to a prompt, generates output, and returns control to the user. An agent goes further: it can interpret a goal, decide on intermediate steps, use tools, and take action inside a workflow.

That difference matters because it changes AI from something that helps with development into something that participates in development.

### In this unit, you'll learn

- What makes an AI system agentic in a development context
- How agent-based systems differ from assistant-based systems
- How agent behavior appears inside GitHub workflows

### What makes an AI system agentic in a development context

Assistant-based systems are typically reactive:

- They depend on a user to decide what to do next.
- They may suggest code, explain output, or summarize changes.
- They don't independently move work forward inside a repository.

Agent-based systems are goal-driven:

- They can interpret a task, develop an approach, and take steps toward completion.
- They can use tools (for example, the GitHub API, CI workflows, or repository write operations) to produce durable outcomes such as branches, commits, and pull requests.
- They can iterate based on feedback (checks, reviews, scans).

In GitHub, this model is often expressed through a pull-request-oriented workflow: the agent proposes changes on a branch, opens a pull request, and waits for review and validation before the change is merged.

### Assistant versus agent?

It is behaving like an **assistant** when it:

- Produces suggestions or explanations
- Does not take repository actions
- Requires the user to apply each step manually

An AI system is behaving like an **agent** when it can:

- Maintain a goal across multiple steps
- Decide intermediate actions
- Use tools
- Create or modify durable artifacts (branch/commits/PR)
- Iterate based on feedback signals

### How agent behavior appears in GitHub

In GitHub, agent behavior is visible through the same structures developers already use:

- Branches and commits (what changed)
- Pull requests (what is proposed, why, and for review)
- Workflows and checks (what evidence exists)
- Review comments and approvals (what humans accepted or rejected)

An agent does not replace the workflow. It enters the workflow as a participant.

### Implementation examples

**Agent behavior (PR-producing):** A security alert is filed. The agent:

1. Creates a branch (for example, `agent/bump-dep-2026-04-03`)
2. Updates a dependency and lockfile
3. Opens a pull request with a summary and plan
4. Waits for CI checks and review feedback, then revises if needed

**Assistant behavior (suggestion-only):** You ask an assistant: "How do I safely update this dependency?" The assistant gives:

- a set of recommended commands
- a checklist of risks
- suggested code changes

You still create the branch and pull request yourself.

---

## Unit 3: Explain the agent lifecycle - plan, act, evaluate

Agentic systems don't make one decision and stop. They operate through cycles. A foundational model is the lifecycle of **plan → act → evaluate**. This lifecycle isn't a one-time sequence. It's a loop: agents repeatedly plan, act, and evaluate until the task meets defined success criteria.

### In this unit, you'll learn

- How the plan → act → evaluate lifecycle works in practice
- How planning, action, and evaluation are implemented in GitHub workflows
- How feedback signals drive iteration and completion

### Plan

In the planning phase, the agent interprets the goal and determines what steps are needed to complete it. In high-quality systems, plans aren't hidden internal states. They're structured, reviewable artifacts that make the approach understandable and assessable.

Examples of planning artifacts in GitHub include:

- A structured plan in the pull request description
- A linked issue or checklist outlining scope and success criteria

> **Tip:** Plans become more reviewable when they include scope (what will change), success criteria (how you'll know it worked), and a rollback or escalation path.

### Act

In the action phase, the agent executes the plan in the repository. This can include:

- Creating a branch
- Changing files and pushing commits
- Opening or updating a pull request
- Responding to review feedback with revisions

This matters because it keeps execution bounded: actions occur in a specific repository, on a branch, and through pull request workflows rather than through uncontrolled direct changes to the default branch.

### Evaluate

In the evaluation phase, the agent and the humans supervising it use signals from the development system to assess results. In GitHub, common evaluation signals include:

- Workflow runs and status checks (build/test/lint)
- Code review feedback (requested changes, approvals)
- Security signals (code scanning results, secret scanning alerts, dependency alerts)

When configured by repository or organization policy, protections such as rulesets and branch protection can require checks to pass before changes merge — turning evaluation into an enforceable gate rather than an informal suggestion.

For security-oriented work, evaluation often includes:

- Code scanning (including SARIF upload workflows)
- Secret scanning alerts
- Push protection to prevent supported secrets from being committed

These capabilities reinforce a key lesson: agent evaluation must be grounded in system signals, not in the agent's confidence.

Evaluation isn't the final step. If checks fail, risks remain, or requirements aren't met, the lifecycle continues: the agent must revise the plan, adjust its actions, and reevaluate until the outcome is acceptable or handed off to a human.

For example, when an agent proposes a dependency update in a pull request, the plan defines which package changes, the action updates the files, and evaluation occurs through CI checks and security signals.

If workflows fail or the vulnerability remains unresolved, the work isn't complete. The lifecycle must loop: revise the plan, adjust the change, or escalate to a human.

### A high-quality agent system makes every phase visible

- The plan is inspectable.
- Action is bounded to repository workflows.
- Evaluation uses objective signals.

When any piece is missing, trust degrades: plans become opaque, actions become risky, and outcomes become difficult to validate.

---

## Unit 4: Describe GitHub as the system of record and control plane

Agentic systems need an environment that does more than store code. They need an environment that can capture intent, record actions, enforce validation, and apply policy. In this learning path, GitHub is that environment.

### In this unit, you'll learn

- What it means for GitHub to act as a system of record for agent workflows
- How GitHub enforces control through repository policies and workflows
- Which GitHub controls are used to supervise and constrain agent behavior

### GitHub as the system of record

GitHub is the system of record because it stores the artifacts through which development work is proposed and evaluated:

- Repositories and branches
- Commits and pull requests
- Issues and discussions (context and intent)
- Workflow runs and artifacts (evidence)
- Review history (decisions)

In an agentic workflow, these artifacts do double duty: they support development and make agent behavior inspectable after the fact.

> **Note:** This module focuses on general GitHub governance patterns. GitHub Advanced Security features such as secret scanning and push protection aren't covered here, but can be integrated as additional validation signals in production environments.

### GitHub as the control plane

GitHub is the control plane because (when configured by policy) it provides enforcement points that shape what agent contributions can and can't do.

#### Controls at a glance

| **GitHub control** | **What it enforces** | **Why it matters for agents** |
|---|---|---|
| Pull requests | Changes are proposed before merging | Makes agent work reviewable and discussable |
| Required reviews | Human and agent approval gate | Prevents unreviewed merges and supports accountability |
| Required status checks | CI evidence before merging | Converts evaluation into enforceable policy |
| CODEOWNERS | Review routing by path | Ensures the right experts supervise high-impact changes |
| Rulesets / branch protection | Centralized branch policy | Prevents unsafe merges and enforces consistent guardrails |
| Environments | Approvals for deployments/secrets | Controls sensitive execution and secret access |

> **Note:** These enforcement behaviors depend on configuration and permissions. For example, enabling required checks and rulesets is typically an admin task. The supervision model works everywhere; enforcement requires the controls to be turned on.

### GitHub Actions belongs in the control plane

Workflows are where execution is validated, but permissions matter as much as checks. A key security principle is **least privilege**:

- Set default workflow token permissions conservatively (for example, read-only where possible).
- Grant higher permissions only to the jobs that need them.
- Use environments and approvals to control access to sensitive secrets and deployments.

For agentic systems, "what the agent can do" often reduces to "what the workflow token and tool credentials can do." Controls and permissions must be designed accordingly.

### Implementation examples

- **Workflow execution is gated by humans** — In some agent PR workflows, a human may need to explicitly approve running workflows (for example, an "Approve and run workflows" action). This is a built-in guardrail: it reduces the risk of privileged workflows running automatically for untrusted changes.
- **Environments gate secrets and deployments** — If a workflow job targets an environment with required reviewers, the job waits until approval is granted. This prevents an agent-triggered workflow from accessing protected secrets or deploying without human review (when configured).
- **CODEOWNERS routes reviews for high-risk paths** — If the agent changes files in a sensitive path (for example, `.github/workflows/` or `infra/`), CODEOWNERS can automatically request review from the owners of those paths. When combined with required reviews, this helps ensure the right experts supervise high-impact changes.

### How GitHub enforces control in practice

The agent opens a pull request with a security fix. GitHub:

- Makes the change visible in the PR
- Routes it to the right reviewers via CODEOWNERS (when configured)
- Evaluates it through required checks and workflows
- Blocks merging until policy requirements are satisfied (when configured)
- Prevents access to protected environment secrets until approvals are granted (when configured)

This is what it means to say GitHub is the control plane: it's where enforcement happens.

GitHub isn't just where agent work is stored. It's where agent work is supervised, validated, and governed. Repositories and pull requests make work visible; checks, reviews, CODEOWNERS, rulesets, branch protection, and environments make work controllable.

---

## Unit 5: Identify responsibilities, risks, anti-patterns, and traceability needs

As agents become more capable, it can be tempting to imagine responsibility shifts to the system. It does not. Agentic systems may execute work, but humans remain accountable for outcomes and for the controls that govern execution.

### In this unit, you'll learn

- Who is accountable for agent actions and outcomes
- What common risks and anti-patterns appear in agent systems
- How GitHub controls mitigate these risks
- Why traceability and observability are required for trustworthy systems

### Responsibility does not move with execution

When an agent creates a pull request, revises code, or responds to feedback, it participates in the workflow, but it does not assume ownership of outcomes. The accountable parties are still the people and teams who:

- Defined the task
- Set permissions
- Chose and configured controls
- Approved the resulting change

A pull request review model makes this explicit: the system can propose, but humans decide what is accepted.

### Common risks and anti-patterns

Early-stage agent systems commonly fail in predictable ways:

- **Planless execution** — The agent begins changing code without a clear, inspectable approach.
- **Over-permissioned agents** — The agent (or its workflow token/tooling credentials) has broader access than necessary.
- **Hidden reasoning** — The workflow exposes only outputs (the diff) without intermediate artifacts (plan, assumptions, decision points, execution context).
- **Blind trust in automation** — Passing CI matters, but checks only validate what they're designed to detect. A passing build does not automatically mean the change is complete, appropriate, or low risk.

#### Implementation mapping: risk → GitHub mitigation

| **Risk / anti-pattern** | **What it looks like in GitHub** | **Mitigation using GitHub controls** |
|---|---|---|
| Planless execution | PR has a diff but no plan or rationale | Require a plan section via PR template; require review before merge |
| Over-permissioned agents | Workflows can write to repo, access secrets broadly | Least-privilege GITHUB_TOKEN; environments with required reviewers; restrict who can trigger workflows |
| Hidden reasoning | No assumptions/scope/decision trail | Require plan and link workflow runs and record decisions in PR comments |
| Blind trust in automation | "CI passed, ship it" mindset | Combine checks with CODEOWNERS, required reviews, and risk-based approvals |

### Traceability and observability

To supervise an agent well, you need more than a final diff — you need a trail. In GitHub, that trail can include:

- Pull requests and commit history
- Review comments and approvals
- Workflow runs and uploaded artifacts (test reports, logs)
- Code scanning uploads and alerts
- Secret scanning alerts and push protection events
- Organization audit log events (availability and access depends on org/enterprise configuration)

The goal isn't only compliance. It is operational understanding: when something fails, you need to know what changed, who approved it, what evidence existed, and what happened next.

#### Minimum audit trail for agent contributions

- A stated goal (issue link or PR description)
- An inspectable plan (PR plan section or file)
- A bounded changeset (branch and commits)
- Automated evidence (workflow run and artifacts)
- Human judgment (review and approval)
- A clear outcome (merge, revert, or escalation)

Suppose the agent's vulnerability fix passes CI but later causes a regression. The key question isn't only whether the agent made a mistake — it's whether the system made the mistake understandable and preventable:

- Was there a visible plan and scope?
- Were the right reviewers requested (and did they approve)?
- Did the checks match the risk of the change?
- Is the audit trail sufficient to reconstruct what happened?

Agentic systems change who performs work, but not who owns outcomes. Human teams remain accountable, which is why they must design against common anti-patterns and require strong traceability through GitHub-native artifacts and logs.

---

## Unit 6: Apply the contributor model to agent-generated work

A reliable way to evaluate agent output is to stop treating it as categorically different from normal development work. Instead, treat it as a contribution.

### In this unit, you'll learn

- How the contributor model applies to agent-generated pull requests
- How to evaluate agent contributions using standard development criteria
- What a high-quality, well-supervised agent contribution looks like

### The contributor model

In GitHub, a pull request is the natural unit of contribution. Whether the author is a human developer or an agent, the pull request should answer the same questions:

- Does the change solve the intended problem?
- Is the scope appropriate and explained?
- Do required checks and validations pass?
- Are the right owners reviewing the affected areas?
- Does the change align with standards, architecture, and policy?

This model avoids two opposite errors:

- **Excessive suspicion:** rejecting work because "AI wrote it."
- **Excessive trust:** accepting work because automation produced it.

The contributor model says: evaluate the work by the standards of the workflow, not by the novelty of the author.

#### Practical review rubric for agent PRs

When you review an agent PR, check:

- **Intent:** Is there a clear goal and a visible plan?
- **Scope:** Are the files changed aligned with the plan?
- **Evidence:** Do required checks pass? Are logs/artifacts available if needed?
- **Ownership:** Did the CODEOWNERS review sensitive areas (when configured)?
- **Policy:** Does it comply with rulesets/branch rules/environments (when configured)?
- **Fallback:** Is rollback or escalation clear for high-risk changes?

### Evaluating agent-generated pull requests

When the agent submits a pull request, updates a dependency and modifies configuration files under a contributor model; you don't ask only whether the code compiles. You ask whether:

- the extra changes are justified,
- the checks cover the risk introduced,
- the right owners reviewed the affected areas, and
- the change aligns with repository and deployment policies.

### What good looks like

A well-supervised agent contribution is:

- **Understandable** (clear goal and plan)
- **Bounded** (scoped changeset, least privilege)
- **Reviewable** (right owners involved, evidence present)
- **Policy-compliant** (rulesets/branch rules/environments respected)
- **Reconstructable** (audit trail supports post-hoc analysis)

This is not a special standard for AI. It's the standard of a healthy engineering workflow applied consistently.

Treating agents as contributors helps preserve engineering discipline. It keeps evaluation grounded in pull requests, checks, reviews, repository policy, and human judgment rather than in hype or fear.

---

## Unit 7: Knowledge Check

1. **Which is the best indicator that an AI system is acting as an agent in GitHub?**

   - It suggests code snippets in chat.
   - ~~It opens a pull request from a branch it created.~~ ✓
   - It summarizes documentation.
   - It explains an error message.

2. **Why is GitHub considered a system of record for agent workflows?**

   - It prevents all bugs.
   - ~~It stores plans, commits, pull request discussion, and workflow evidence.~~ ✓
   - It replaces CI/CD.
   - It automatically approves changes.

3. **Which GitHub control is most directly used to require the right reviewers for sensitive paths?**

   - Issues
   - ~~CODEOWNERS~~ ✓
   - Stars
   - Forks

4. **Which scenario is an example of hidden reasoning?**

   - The plan is included in the pull request description.
   - The change is proposed via a pull request.
   - ~~The agent provides a diff but no plan, assumptions, or execution context.~~ ✓
   - The agent reruns a failing workflow after a test fix.

5. **Under the contributor model, what should reviewers evaluate first?**

   - Whether the author is human or AI.
   - ~~Whether the change meets the repo's definition of done (scope, checks, review, policy).~~ ✓
   - Whether the pull request is small.
   - Whether the agent is popular.

---

## Unit 8: Summary

In this module, you:

- Built a working definition of agentic AI in the SDLC and learned how agents differ from assistants.
- Learned how agents show up in GitHub as contributors through branches, pull requests, workflow runs, and reviews.
- Practiced the plan → act → evaluate lifecycle as the core model for agent execution and iteration.
- Learned how GitHub serves as a system of record and a control plane, using controls like rulesets/branch protection, required checks, required reviews, CODEOWNERS, and environments (when configured).
- Identified common risks and anti-patterns, and learned how traceability plus a contributor-based review model helps you evaluate agent work reliably.

## Learn more

For deeper reading, use official GitHub documentation on:

- [Reviewing a pull request created by GitHub Copilot](https://docs.github.com/en/copilot/how-tos/agents/copilot-coding-agent/reviewing-a-pull-request-created-by-copilot)
- [Creating rulesets for a repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository) and [About protected branches (branch protection rules)](https://docs.github.com/github/administering-a-repository/about-branch-restrictions)
- [About code owners (CODEOWNERS)](https://docs.github.com/github/creating-cloning-and-archiving-repositories/about-code-owners)
- [Use GITHUB_TOKEN for authentication in workflows](https://docs.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)
- [Uploading a SARIF file to GitHub (code scanning)](https://docs.github.com/en/code-security/how-tos/scan-code-for-vulnerabilities/integrate-with-existing-tools/uploading-a-sarif-file-to-github)
- [About push protection (secret scanning)](https://docs.github.com/code-security/secret-scanning/protecting-pushes-with-secret-scanning)
- [Audit log for an enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise) (availability depends on organization/enterprise configuration)
