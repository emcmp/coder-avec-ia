# Memory, State, and Evaluation

> **Module** | 8 Units | Intermediate
> Source: https://learn.microsoft.com/en-us/training/modules/memory-state-evaluation/

Learn how to manage agent memory and state, persist progress across environments, and evaluate agent behavior using clear success signals.

## Learning objectives

By the end of this module, you'll be able to:

- Learn agent memory strategies using short-term, long-term, and external memory
- Learn how to maintain and persist agent state and manage context drift
- Learn how to manage agent state across tools and environments
- Understand agent evaluation signals and success criteria

## Prerequisites

- A GitHub account
- Basic understanding of repositories, branches, and pull requests
- Familiarity with GitHub Actions
- General understanding of agent workflows in GitHub, IDE, or CLI environments

---

## Unit 1: Introduction

As agents become more capable, they also take on longer and more complex tasks. These tasks may span multiple steps, tools, and environments, and may not be completed in a single session. To work effectively, agents must be able to retain relevant information, track progress, and stay aligned with the original goal.

In GitHub workflows, agents can create branches, open pull requests, run workflows, and interact with repository artifacts. This makes it important to define how memory is handled, how state is persisted, and how results are evaluated.

This module introduces the foundations of agent memory, state management, and evaluation. You will learn how to structure memory, persist progress through GitHub artifacts, maintain consistency across environments, and define clear signals for success.

### Learning objectives

In this module, you will:

- Learn agent memory strategies using short-term, long-term, and external memory
- Learn how to maintain and persist agent state and manage context drift
- Learn how to manage agent state across tools and environments
- Understand agent evaluation signals and success criteria

---

## Unit 2: Implement agent memory strategies

Agents need structured memory to complete tasks reliably. Instead of relying on a single stream of context, memory should be organized so the agent can focus on the current task while still accessing important information when needed.

In GitHub workflows, this typically involves combining in-session context with durable artifacts such as issues, pull requests, and repository instructions.

### The memory hierarchy

Agent memory can be grouped into three categories.

#### Short-term memory

Short-term memory is the working context for the current task. It includes recent instructions, feedback, and the immediate steps needed to proceed.

This memory is useful during execution but is not preserved across sessions.

#### Long-term memory

Long-term memory contains curated knowledge that can be reused across tasks. It is more stable and typically includes summarized or structured information.

Examples include key decisions, patterns, and reusable knowledge.

#### External memory

External memory is stored outside the agent in durable systems. In GitHub, this includes artifacts such as issues, pull requests, documentation, and workflow outputs.

External memory acts as the source of truth because it is persistent and can be reviewed at any time.

### Choose where to store information

Different types of information should be stored in different places.

Requirements and acceptance criteria should be stored in durable artifacts such as issues or pull request descriptions. This allows the agent to revisit the goal and validate its work.

Plans and decisions should also be stored in the same locations. This helps maintain consistency and allows work to continue without reinterpreting earlier steps.

Repeatable processes should be stored as instructions or reusable skills. This avoids redefining the same workflow for every task.

### Scope memory to relevant information

Memory should be limited to information that affects the outcome of the task.

Relevant information includes:

- Requirements and constraints
- Decisions that affect implementation
- Validation and testing approaches

Information that does not affect the outcome should not be stored. This includes temporary intermediate steps or duplicated context.

Limiting memory reduces confusion and helps prevent the use of outdated information.

### Define a source of truth

Each type of information should have a single, clear location.

For example:

- Requirements → Issue
- Decisions → Pull request or documentation
- Validation rules → Repository instructions
- Results → Workflow logs and artifacts

Defining a source of truth helps prevent conflicting information and keeps the agent aligned across sessions.

### Memory expiration and pruning

Memory should be maintained over time to prevent it from becoming outdated.

Some information should expire after a certain period, especially temporary outputs such as logs or artifacts.

Outdated or unnecessary artifacts should be removed to reduce clutter and avoid stale context.

In cases where detailed history is no longer needed, it can be summarized into key points and references.

Reset rules should also be defined to handle situations where requirements change or previous assumptions are no longer valid.

### Key takeaway

Effective agent memory is structured and selective. Short-term memory supports the current task, long-term memory preserves useful knowledge, and external memory provides a durable source of truth. Clear rules for storage, scope, and maintenance help ensure consistent and reliable agent behavior.

---

## Unit 3: Persist agent state and manage context drift

Memory helps an agent understand what matters. State tracks what has been done, what decisions were made, and what remains.

In GitHub workflows, state is not stored in a single place. It is represented through artifacts such as issues, pull requests, commits, workflow runs, and logs. These artifacts act as persistent memory, allowing the agent to retain context and continue work across sessions without losing progress.

### Capture task progress as durable state

Agent state should be stored in locations that are persistent and easy to review.

In GitHub, this typically means:

- Defining requirements and acceptance criteria in an issue
- Opening a pull request to track implementation
- Using commits to represent incremental progress
- Using workflow runs to capture validation results

For example:

- Create an issue with clear acceptance criteria
- Assign the task to an agent
- Have the agent create a branch and open a pull request
- Let workflows run on each push to validate changes

Together, these artifacts act as persistent memory, providing a complete view of what the agent has done, what decisions were made, and what still needs to be completed.

### Use pull requests as a state anchor

Pull requests are the central place to track state during agent workflows.

A pull request should include:

- A clear description of the task
- Acceptance criteria (or a link to the issue)
- A summary of the plan or approach
- Updates as the work progresses

In practice:

- Use the pull request description to capture the current plan
- Update the description when decisions change
- Reference commits and workflow runs directly in the PR

GitHub aggregates commits, checks, and discussions in the pull request, making it the primary place to track progress and decisions.

### Resume work without repeating steps

Agent workflows may pause or move between environments. To resume work correctly, the agent should rely on stored state instead of starting over.

A typical resume flow looks like:

1. Open the existing pull request
2. Review the description and linked issue
3. Check commits already made
4. Review workflow results under the "Checks" tab
5. Continue from the latest state

Because GitHub preserves commit history and workflow runs, the agent can identify completed work and avoid duplication.

### Detect context drift

Context drift occurs when the agent's actions no longer align with the original goal or prior decisions.

In GitHub workflows, drift can be identified by checking:

- Whether pull request changes satisfy acceptance criteria
- Whether commits contradict earlier decisions
- Whether workflow checks are failing or missing

### Correct context drift

To correct drift, the agent should be re-aligned with the source of truth.

In practice:

- Re-read the issue or pull request description
- Compare current changes with acceptance criteria
- Update the pull request description if needed
- Re-run workflows or push new commits to trigger validation

GitHub allows workflow runs to be re-executed and surfaces results through the Checks tab, making it easier to verify alignment.

### Manage memory over time

Agent memory should be maintained to ensure it remains accurate and useful.

#### Expiration

Some memory should only be retained for a limited time.

In GitHub:

- Workflow logs and artifacts are **retained for 90 days by default and automatically deleted afterward**
- Retention can be configured at the repository, organization, or enterprise level
- Public repositories typically allow 1-90 days, while private repositories can extend retention up to 400 days

#### Pruning

Outdated or unnecessary artifacts should be removed.

In practice:

- Delete workflow artifacts manually from the Actions tab
- Remove unused or stale workflow runs
- Avoid storing large or redundant outputs

GitHub allows manual deletion of artifacts, and deleted artifacts cannot be restored.

#### Summarization

Detailed execution history can be reduced into summaries.

For example:

- Update the pull request description with final decisions
- Reference key commits instead of duplicating details
- Link to workflow runs instead of storing full logs

This preserves traceability while keeping memory manageable.

#### Reset rules

In some cases, memory should be reset to avoid incorrect carryover.

This may be necessary when:

- Requirements in the issue change significantly
- A new implementation approach is chosen
- Previous assumptions are no longer valid

In practice:

- Update or rewrite the pull request description
- Close and recreate a pull request if needed
- Clearly document the new direction before continuing

### Maintain consistency over time

Consistent state management ensures that:

- Work progresses without duplication
- Decisions remain aligned across sessions
- Outputs can be verified using workflow results

GitHub also supports required status checks on pull requests, ensuring workflows must pass before changes are merged.

### Key takeaway

Agent state represents progress, decisions, and results. By using GitHub artifacts such as pull requests, workflow runs, and logs as persistent memory, agents can resume work reliably and stay aligned with the original goal. Managing expiration, pruning, and reset rules ensures that memory remains accurate and relevant over time, while detecting and correcting context drift keeps workflows consistent.

---

## Unit 4: Ensure continuity of agent memory and state across tools and environments

Agent workflows often span multiple tools and environments. An agent may start work in an IDE, continue through a CLI, and complete tasks in a GitHub-hosted environment. To maintain consistency, memory and state must be shared in a way that works across all of these surfaces.

In GitHub workflows, continuity is achieved by relying on durable artifacts and consistent sources of truth rather than temporary session context.

### Share agent state across tools

Agent state should be shared using durable references, not copied context.

In GitHub, this means relying on:

- Pull request numbers and branch names
- Commit SHAs
- Workflow run links
- Issue and pull request URLs

These references allow any tool or environment to retrieve the same state.

In practice:

- Start work from an issue and create a pull request
- Use the pull request as the central reference
- Access the same pull request from the IDE, CLI, or GitHub UI
- Use commit history and workflow runs to understand progress

Because all environments can access the same repository data, the agent can maintain continuity without needing to transfer session context.

### Use GitHub as the source of truth

To maintain consistency, all important information should exist in one place.

In GitHub workflows:

- Requirements live in issues
- Decisions and progress live in pull requests
- Validation rules live in repository instructions
- Execution results live in workflow runs and artifacts

In practice:

- Avoid storing critical information only in prompts or chat history
- Always write important updates to issues or pull requests
- Ensure that workflows produce visible results in the repository

Using GitHub as the source of truth ensures that all tools and environments operate on the same state.

### Prevent conflicting context

Conflicting context occurs when the same information exists in multiple places with different values.

To prevent this:

- Define a single source of truth for each type of information
- Avoid duplicating requirements or decisions across multiple locations
- Update the original source instead of creating new copies

For example:

- Don't redefine acceptance criteria in multiple prompts
- Update the issue or pull request instead of storing new versions elsewhere

This ensures that the agent always retrieves consistent information.

### Prevent stale context

Stale context occurs when outdated information is used during execution.

In GitHub workflows, this can happen when:

- A pull request is outdated compared to the base branch
- Workflow results no longer reflect the current code
- Requirements have changed but weren't updated

To prevent this:

- Ensure branches are up to date with the base branch before continuing work
- Review the latest commits and workflow runs before making changes
- Update issues and pull requests when requirements change

GitHub enforces some of this automatically through features like required status checks and branch protection rules, which may require branches to be up to date before merging.

### Ensuring continuity with workflows and validation

Workflows play a key role in maintaining continuity.

In practice:

- Configure workflows to run on pull requests and pushes
- Use workflow results as the source of validation
- Re-run workflows when changes are made
- Use the "Checks" tab to verify the latest state

Because workflows run in controlled environments and produce consistent outputs, they provide a reliable way to validate state across tools.

### Maintaining continuity across environments

When switching between environments, the agent should always re-anchor to GitHub state.

A typical flow looks like:

1. Start work in an IDE using a repository
2. Open or reference an existing pull request
3. Continue work through CLI or automation
4. Validate changes using GitHub workflows
5. Review and finalize work in the pull request

By always returning to GitHub artifacts, the agent avoids losing context or diverging from prior work.

### Key takeaway

Continuity in agent workflows depends on shared, durable state. By using GitHub artifacts as the source of truth and referencing them consistently across tools and environments, agents can maintain alignment, avoid conflicting or stale context, and continue work reliably across sessions.

---

## Unit 5: Define evaluation signals and enforce quality gates

In this unit, you'll learn:

- How to define success criteria for agent tasks
- How to use pull request checks and workflows for evaluation
- How to enforce quality using required checks and rules
- How to incorporate security scanning into evaluation

### Defining success criteria

Evaluation begins with clear success criteria.

In GitHub workflows, success criteria should be defined in the issue or pull request. These criteria describe what must be true for the task to be considered complete.

For example:

- A feature behaves as expected
- Tests pass successfully
- No new security issues are introduced

In practice:

- Write acceptance criteria directly in the issue
- Reference those criteria in the pull request
- Use them as the basis for validation

Clear criteria allow both the agent and the reviewer to verify completion.

### Using pull request checks for evaluation

Pull requests are the primary place where evaluation occurs.

GitHub displays evaluation signals through:

- Status checks
- Workflow runs
- Check results in the "Checks" tab

In practice:

- Configure workflows to run on pull request or push events
- Ensure tests and validations run automatically
- Review results in the pull request before merging

These checks provide feedback on whether changes meet the required standards.

### Using workflows to validate changes

Workflows powered by GitHub Actions are used to automate evaluation.

Common workflow steps include:

1. Running tests
2. Linting code
3. Building the application

Example trigger:

```yaml
on:
  pull_request:
    branches: [main]
```

In practice:

- Add workflows in `.github/workflows/`
- Ensure they run on pull requests or pushes
- Use workflow results as the source of validation

Each workflow run produces logs and results that are visible in the pull request.

### Enforcing quality with required checks

GitHub allows you to enforce evaluation through required status checks.

Required checks ensure that certain conditions must be met before a pull request can be merged.

In practice:

- Configure branch protection rules
- Enable "Require status checks to pass before merging"
- Select specific checks to enforce

This ensures that all required checks must pass before merging.

GitHub also supports requiring branches to be up to date before merging, depending on configuration.

### Using workflow outputs for visibility

Workflows produce logs and artifacts that support evaluation.

In practice:

- Review logs directly in the Actions tab
- Use artifacts to store outputs such as test results or reports
- Link workflow runs in pull requests for visibility

Artifacts and logs are retained for a limited time and can be reviewed during that period.

By default, GitHub stores workflow logs and artifacts for 90 days, after which they are automatically deleted.

### Incorporating security into evaluation

Evaluation should include security checks to prevent unsafe changes.

In GitHub, this can include:

- Code scanning (for vulnerabilities)
- Dependency review checks
- Secret scanning and push protection

In practice:

- Enable available security features for the repository
- Treat security alerts or failed checks as blockers
- Review security results in the pull request

These checks help ensure that changes are safe before merging.

### Using rules and protections

GitHub provides controls to enforce evaluation policies.

These include:

- Branch protection rules
- Required pull request reviews
- Required status checks

In practice:

- Require at least one approving review before merging
- Combine reviews with required checks
- Prevent direct pushes to protected branches

Branch protection rules enforce these requirements before changes can be merged.

### End-to-end evaluation flow

A typical evaluation flow in GitHub looks like:

1. An issue defines the task and success criteria
2. An agent creates a branch and opens a pull request
3. Workflows run automatically
4. Status checks appear in the pull request
5. Required checks must pass
6. A reviewer approves the changes
7. The pull request is merged

This ensures that all changes are validated before being accepted.

### Key takeaway

Evaluation defines whether agent work is complete and correct. By using GitHub workflows, pull request checks, required status checks, and security scanning, you can enforce consistent quality and ensure that all changes meet defined expectations before merging.

---

## Unit 6: Analyze agent failures and improve behavior

Agent workflows do not always succeed on the first attempt. Failures can occur due to incorrect assumptions, misuse of tools, or inconsistent context. These failures should be analyzed using available artifacts so that the agent's behavior can be improved over time.

In GitHub workflows, failures are observable through logs, pull requests, workflow runs, and related artifacts. These provide the information needed to understand what happened and why.

### Analyze failures using GitHub artifacts

When an agent fails to complete a task correctly, the first step is to review the available evidence.

In GitHub, this typically includes:

- Workflow logs in the Actions tab
- Pull request changes and discussions
- Commit history
- Workflow run results and artifacts

In practice:

- Open the pull request and review recent changes
- Check the "Checks" tab for failed workflows
- Inspect workflow logs to identify errors
- Compare the expected outcome with the actual result

#### Compare intent with results

To understand a failure, compare what the agent was expected to do with what was produced.

In GitHub workflows, intent is typically captured in:

- Issue descriptions (requirements and acceptance criteria)
- Pull request descriptions (plans and decisions)

Results are captured in:

- Commits and code changes
- Workflow outputs and logs

Comparing these helps determine whether the agent:

- Misinterpreted the task
- Implemented an incorrect solution
- Failed during execution or validation

### Classify root causes

Failures can be grouped into common categories:

#### Reasoning errors

Incorrect assumptions or decisions that lead to invalid changes.

Examples include:

- Misinterpreting requirements
- Implementing incorrect logic
- Ignoring acceptance criteria

#### Tool misuse

Incorrect use of workflows, commands, or repository operations.

Examples include:

- Misconfigured workflows
- Incorrect commands or scripts
- Failing to trigger or use workflows properly

#### Context issues

Missing, stale, or conflicting information that leads to incorrect behavior.

Examples include:

- Using outdated pull request state
- Missing prior decisions
- Conflicting information across artifacts

### Improve agent behavior

Once the root cause is identified, the next step is to improve how the agent operates.

This is typically done by adjusting three areas:

#### Prompts and instructions

Improve clarity and specificity in prompts or repository instructions.

In practice:

- Clarify acceptance criteria
- Add constraints or expectations
- Update repository instruction files

#### Memory and state

Improve how information is stored and accessed.

In practice:

- Update issues or pull requests with clearer decisions
- Remove outdated or conflicting context
- Ensure a single source of truth is maintained

#### Tool configuration

Adjust workflows and execution behavior.

In practice:

- Update workflow files in `.github/workflows/`
- Ensure workflows trigger on the correct events (push, pull_request)
- Verify permissions and required checks

GitHub workflows and branch protection rules enforce how validation and execution occur.

### Use a feedback loop

Improving agent behavior is an iterative process.

A typical loop looks like:

1. Run the agent on a task
2. Observe failures through logs and artifacts
3. Identify the root cause
4. Apply fixes to prompts, memory, or tools
5. Re-run the workflow

GitHub supports this loop by allowing workflows to be re-run and by preserving logs and artifacts for inspection.

### Maintain traceability

All improvements should be visible and traceable in GitHub.

In practice:

- Document changes in pull request updates
- Reference related commits and workflow runs
- Keep changes scoped and reviewable

This ensures that adjustments to agent behavior can be reviewed and audited over time.

### Key takeaway

Agent failures are a normal part of workflow execution. GitHub provides logs, workflow runs, and artifacts that make failures observable. By analyzing these outputs, identifying root causes, and improving prompts, memory, and tool configuration, you can continuously improve agent performance and reliability.

---

## Unit 7: Knowledge Check

1. **Which type of memory is considered the most reliable source of truth in agent workflows?**

   - Short-term memory stored in prompts.
   - Long-term memory stored in cached responses.
   - ~~External memory stored in GitHub artifacts such as issues and pull requests.~~ ✓
   - Logs that are automatically deleted after execution.

2. **What is the primary role of a pull request in agent workflows?**

   - To automatically deploy changes to production.
   - ~~To act as a central place to track progress, decisions, and validation results.~~ ✓
   - To store workflow logs permanently.
   - To replace issues as the source of requirements.

3. **What is context drift in agent workflows?**

   - When workflows exceed their execution time.
   - ~~When the agent's actions no longer align with the original goal or prior decisions.~~ ✓
   - When logs are deleted after retention expires.
   - When a branch is merged into the default branch.

4. **Which GitHub feature ensures validation must pass before merging changes?**

   - Workflow logs.
   - ~~Required status checks.~~ ✓
   - Issue comments.
   - Commit messages.

5. **Which GitHub artifacts are most useful for analyzing agent failures?**

   - ~~Workflow logs, workflow runs, and pull requests.~~ ✓
   - Repository stars and watchers.
   - Branch names only.
   - Issue labels.

6. **How can agent behavior be improved after identifying a failure?**

   - By rerunning the workflow without changes.
   - ~~By adjusting prompts, memory structure, or workflow configuration.~~ ✓
   - By deleting the pull request.
   - By ignoring the failure.

---

## Unit 8: Summary

Now that you've finished this module, you should be able to:

- Know agent memory strategies using short-term, long-term, and external memory
- Understand how to maintain and persist agent state and manage context drift
- Manage agent state across tools and environments
- Understand agent evaluation signals and success criteria

## Learn more

- [About GitHub Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent)
- [Using the GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server)
- [Workflow syntax for GitHub Actions](https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions)
- [Events that trigger workflows](https://docs.github.com/actions/using-workflows/events-that-trigger-workflows)
- [Managing GitHub Actions artifacts and logs](https://docs.github.com/actions/managing-workflow-runs/removing-workflow-artifacts)
- [Configuring artifact and log retention](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [About status checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)
- [Managing a branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule)
- [About code scanning](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)
- [About dependency review](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)
