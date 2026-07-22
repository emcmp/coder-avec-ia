# Tooling, MCP, and Agent Execution Environments

> **Module** | 7 Units | Intermediate
> Source: https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/

Learn how agents use tools, MCP, and GitHub workflows to execute tasks safely, with clear boundaries, security controls, and scalable automation.

## Learning objectives

By the end of this module, you will:

- Understand how agents use tools and APIs to perform actions
- Explain the role of MCP servers in extending agent capabilities
- Configure execution environments using GitHub Actions and GitHub Agentic Workflows
- Define execution boundaries such as repository, branch, and workflow scope
- Identify limits and protections that govern agent execution, including branch restrictions, pull request review, and environment safeguards

## Prerequisites

Before getting started, you should have:

- A GitHub account
- Basic understanding of repositories, branches, and pull requests
- Familiarity with GitHub Actions
- General knowledge of CI and CD concepts

---

## Unit 1: Introduction

Modern software agents don't operate in isolation. They rely on tools, APIs, and controlled execution environments to perform meaningful work. In the GitHub ecosystem, this includes integrations with workflows, repositories, APIs, and external systems, all governed by permissions and execution boundaries.

As agents become more autonomous, creating pull requests, triggering workflows, or interacting with infrastructure, it becomes critical to define how they operate, what they can access, and where they execute.

This module introduces the foundations of agent tooling, Model Context Protocol (MCP), execution environments, and GitHub Agentic Workflows. You'll learn how GitHub supports safe and scalable agent execution through APIs, GitHub Actions, MCP-connected tools, and agentic workflows, while maintaining security, control, and human review.

**GitHub Agentic Workflows** are a newer form of repository automation that lets you describe outcomes in Markdown and execute them through coding agents in GitHub Actions with strong guardrails. They augment traditional CI/CD workflows rather than replace them.

---

## Unit 2: How agents interact with GitHub APIs and workflows

AI agents are changing how development work gets done. Instead of manually navigating repositories, writing code, and running commands, agents can operate directly within GitHub to complete tasks from start to finish.

GitHub supports agent-driven work through multiple layers. Agents can use GitHub APIs to read repository state and perform actions, GitHub Actions workflows to execute automation in controlled runners, and GitHub Agentic Workflows to describe higher-level repository tasks in Markdown and run them with coding agents under strong guardrails. Rather than bypassing GitHub, agents work through the same systems developers use, including branches, pull requests, issues, and automation.

### How agents interact with GitHub

GitHub agents, such as Copilot cloud agent, operate within a defined repository and branch context. When you assign a task, for example through an issue or prompt, the agent begins working inside that repository.

Agents can:

- Research and understand the repository
- Plan changes needed to complete a task
- Make code changes on a new branch
- Open a pull request for review

Agents carry out these actions using GitHub platform capabilities such as APIs and workflows.

These actions can be triggered by repository events (such as push or pull request), run on a schedule, or orchestrated through agentic workflows that continuously automate repository tasks over time.

### Using GitHub APIs to perform actions

GitHub provides APIs that allow systems to interact with repositories programmatically.

The APIs enable actions such as:

- Creating branches and commits
- Reading repository data
- Opening and updating pull requests
- Triggering workflows

All API requests must be authenticated using tokens such as personal access tokens, GitHub App tokens, or the `GITHUB_TOKEN` provided in workflows.

This ensures that every action an agent performs is permission-controlled and auditable.

### How agents create changes in a repository

When an agent makes changes, it follows the same workflow as a developer. A typical sequence looks like this:

1. Select a base branch
2. Create a new working branch
3. Modify or create files
4. Commit changes
5. Open a pull request

There are separate API operations for each of these steps, including working with Git references, repository contents, and pull requests.

This means agent actions are fully aligned with GitHub's standard development model.

### Using GitHub Actions as the execution layer

Agents don't execute tasks directly on your machine. Instead, GitHub provides execution environments through workflows powered by GitHub Actions.

A workflow is a YAML-defined process that runs jobs in response to events.

Agents rely on these workflows to:

- Run tests
- Validate changes
- Execute automation tasks
- Deploy applications

Copilot cloud agent operates in a GitHub Actions-powered environment, which means workflows form the foundation of agent execution.

### Traditional workflows vs agentic workflows

Traditional GitHub Actions workflows are usually deterministic and YAML-defined: you explicitly specify each step, trigger, and condition. **GitHub Agentic Workflows** add a different model for repository automation. They let you describe the desired outcome in Markdown, define guardrails in frontmatter, and execute that intent using a coding agent in GitHub Actions. They're best suited to open-ended but bounded repository tasks such as triage, reporting, documentation maintenance, CI failure analysis, and code improvement. They don't replace CI/CD pipelines; they extend them with what GitHub describes as "Continuous AI."

### What makes an agentic workflow different

A GitHub Agentic Workflow has two main parts:

- **Frontmatter** for configuration such as triggers, permissions, tools, and safe outputs
- **Markdown instructions** that describe the job in natural language

The Markdown expresses intent, while the frontmatter defines the boundaries. The workflow is then compiled into a lock file that GitHub Actions executes.

```markdown
---
on: schedule: daily
permissions:
  contents: read
  issues: read
  pull-requests: read
safe-outputs:
  create-issue:
    title-prefix: "[repo-status] "
    labels: [report]
tools:
  - github:
---

Daily Repository Status Report
Create a daily report for maintainers.
Include:
- Recent activity (issues, PRs, commits)
- Key highlights and risks
- Recommended next steps
Keep the report concise and link to relevant issues and pull requests.
```

In this example, the frontmatter (between `---`) defines how and when the workflow runs, what it can access, and what actions are allowed.

The Markdown below defines the intent of the workflow in natural language. An agent interprets this intent and produces structured outputs, which are then applied through controlled, reviewable steps.

Unlike traditional GitHub Actions workflows, which explicitly define each step, agentic workflows focus on describing outcomes. The agent determines how to achieve the goal within the constraints defined in the frontmatter.

### Triggering and interacting with workflows

Workflows can be triggered in multiple ways:

- Automatically through events such as push or pull request
- Manually using the `workflow_dispatch` event
- Programmatically through the GitHub API

Agents can rely on these triggers to execute tasks or validate changes after making updates to a repository.

Each workflow run executes jobs in isolated environments, ensuring consistent and secure execution.

### What happens during an agent session

Agent sessions are observable and interactive.

During a session, you can:

- Monitor progress through a session log
- See what actions the agent is taking
- Provide feedback or adjust the task
- Review the final pull request

The agent adapts based on feedback and continues working until the task is complete.

### End-to-end agent execution flow

Putting it all together, a typical agent interaction with GitHub looks like this:

1. A task is assigned through an issue, chat, or CLI
2. The agent selects the repository and base branch
3. The agent analyzes the codebase and plans changes
4. API operations are used to create branches and commits
5. A pull request is opened
6. Workflows run to validate or deploy changes
7. The user reviews, approves, or requests updates

This flow ensures that all agent activity is:

- Scoped to a repository
- Controlled by permissions
- Executed through workflows
- Visible and reviewable

### Key takeaway

Agents on GitHub don't operate outside the platform. They interact through APIs, workflows, and repository structures that enforce permissions, provide execution environments, and enable collaboration through pull requests.

---

## Unit 3: Model Context Protocol (MCP) servers, registries, and allow lists

Agents become more useful when they can go beyond the repository and interact with other tools, systems, and services. Model Context Protocol, or MCP, makes that possible by giving agents a consistent way to discover and use external capabilities.

In GitHub environments, MCP is not just about connecting to tools. It is also about controlling how those tools are introduced, configured, and governed. That includes configuring MCP servers, using a registry to discover available servers, and enforcing allow lists so only approved servers can be used.

### What is MCP?

Model Context Protocol is a standard way for AI clients to connect to tools and services through MCP servers. Instead of building a one-off integration for every tool, an MCP-compatible client can connect to a server that exposes tools in a structured format.

This gives agents a consistent model for:

- Discovering available tools
- Sending structured requests
- Receiving structured results
- Reusing the same interaction pattern across different systems

### What is an MCP server?

An MCP server is the component that exposes tools to an AI client.

The server sits between the client and the underlying system. It presents available tools in a format the client understands, accepts requests, and then performs the real action against the connected service.

Depending on the setup, an MCP server can:

- Run locally on a developer machine
- Run remotely as a hosted service
- Connect to local resources
- Bridge to remote APIs and platforms

The GitHub MCP server is one example. It connects AI clients to GitHub capabilities such as repositories, issues, and pull requests.

### Local and remote MCP servers

MCP servers can be configured locally or remotely.

A **local MCP server** runs on your machine. This is useful when you want tighter control over configuration, access to local resources, or a custom setup.

A **remote MCP server** is hosted elsewhere and accessed over the network. This reduces setup work and makes it easier to use the same server across environments.

In supported IDEs, the GitHub MCP server can be configured remotely or locally, with the remote option positioned as the recommended setup for most users. GitHub Enterprise Server supports local MCP server configuration, while GitHub Enterprise Cloud with data residency supports both local and remote options.

#### Add a remote MCP server as a tool to an agent (VS Code)

Steps:

1. Click the GitHub Copilot icon at the top of the editor
2. Open Copilot Chat and switch to Agent mode
3. Click the Tools icon in the chat panel
4. Click Configure tools in the top-right corner of the Copilot Chat panel
5. Click Add MCP server
6. In the setup dialog:
   - Select HTTP as the server type
   - Enter the server URL (example for GitHub MCP server): `https://api.githubcopilot.com/mcp/`
   - Press Enter
   - A server name is automatically generated
   - Choose the scope: current workspace or all workspaces
   - Click Authenticate and sign in to GitHub
   - Save the configuration

The MCP server is now available as a tool inside the agent, and the agent can call its capabilities during tasks.

#### Add a local MCP server as a tool to an agent

A local MCP server runs on your machine and allows your agent to interact with local tools, files, or custom services. The setup process in VS Code is the same as adding any MCP server — the only difference is the server you connect to (for example, `http://localhost:3000`).

### What is an MCP registry?

An MCP registry is a catalog of MCP servers.

Instead of asking every developer to manually configure every server, a registry provides a central place where compatible clients can discover which servers are available and how to use them.

This simplifies setup in two ways:

- It makes server discovery easier
- It standardizes how servers are described and distributed

By default, supported IDE experiences can use the GitHub MCP Registry, and developers can also switch to a custom registry when needed.

### How registries help with configuration

Registries reduce friction because they remove much of the manual work involved in adding servers.

Instead of editing configuration files by hand for every server, a developer can browse or search a registry, select a server, install it, and trust it for use in their environment.

This makes registries especially useful when:

- Teams want a simpler setup experience
- Organizations want a standard set of approved servers
- Developers need a curated list instead of unmanaged discovery

GitHub also supports custom MCP registries for organizations and enterprises, as long as the registry follows the required MCP registry specification and endpoint structure.

### Configure MCP registries

To use a custom MCP registry in GitHub, an organization or enterprise must create or host a registry that GitHub Copilot can access.

Steps:

1. Create or host an MCP registry. You can do this in one of three ways:
   - Fork and self-host the open-source MCP Registry
   - Run the open-source registry locally using Docker
   - Build and publish your own custom registry implementation
2. Ensure the registry meets GitHub requirements:
   - Follow the MCP registry v0.1 specification
   - Expose the required HTTPS endpoints:
     - `GET /v0.1/servers`
     - `GET /v0.1/servers/{serverName}/versions/latest`
     - `GET /v0.1/servers/{serverName}/versions/{version}`
   - Include required CORS headers
3. (Optional) Include local MCP servers — if you want developers to use local MCP servers under restricted policies, those servers must be listed in the registry
4. (Alternative) Use Azure API Center — Azure API Center can act as a managed MCP registry
5. Provide the registry URL to your organization or enterprise

Once configured, the registry becomes the source of truth for available MCP servers, allowing developers to discover and use approved tools in a consistent way.

### What is an allow list?

An allow list is a policy that controls which MCP servers are permitted.

This matters because MCP expands what an agent can access. Without guardrails, an agent could be connected to tools that expose sensitive systems or allow unsafe actions.

An allow list solves this by restricting server usage to approved entries. In practice, this means an organization or enterprise can decide whether developers can:

- Use MCP servers at all
- Use any MCP server
- Use only specific MCP servers defined in a registry

### How MCP servers, registries, and allow lists work together

These three concepts solve different parts of the same problem:

- **MCP server** — exposes tools
- **Registry** — makes servers discoverable and trustable
- **Allow list** — decides which servers are permitted

Together, they create a model that is both flexible and controlled.

### Configure MCP allow lists

MCP allow lists control which MCP servers developers are permitted to use. This is configured at the organization or enterprise level in GitHub.

**Steps (Enterprise):**

1. Navigate to your enterprise on GitHub
2. At the top of the page, click AI controls
3. In the sidebar, click MCP
4. Ensure MCP servers in Copilot is set to "Enabled everywhere"
5. In the MCP Registry URL section:
   - Enter the URL of your registry
   - Click Save
6. In "Restrict MCP access to registry servers," choose:
   - **Allow all** — no restrictions, any MCP server can be used
   - **Registry only** — only servers from the registry are allowed

**Steps (Organization):**

1. In GitHub, click your profile picture and select Organizations
2. Select your organization
3. Click Settings
4. In the sidebar, click Copilot, then Policies
5. In the Features section:
   - Ensure MCP servers in Copilot is Enabled
6. (Optional) In MCP Registry URL:
   - Enter your registry URL
   - Click Save
7. In "Restrict MCP access to registry servers," choose:
   - **Allow all**
   - **Registry only**

> **Note:** If the "Allow all" option is selected, developers can add and use any MCP server without restrictions. If "Registry only" is selected, developers are limited to using only the MCP servers defined in the configured registry. In this case, even local MCP servers must be included in the registry, and their server IDs must match exactly.

### A practical GitHub workflow

A realistic GitHub-centered MCP flow looks like this:

1. An organization configures an MCP registry
2. The organization defines an allow list policy for approved servers
3. A developer opens an MCP-capable IDE or client
4. The client discovers approved servers from the registry
5. The developer enables a server such as the GitHub MCP server
6. The agent uses tools from that server during a task

### Key takeaway

MCP extends agent capabilities by connecting them to tools through MCP servers. Registries simplify how those servers are discovered and configured. Allow lists provide the guardrails that decide which servers are allowed.

Together, these pieces make MCP both scalable and governable.

---

## Unit 4: Execution context and boundaries

Once an agent can take actions and connect to tools, the next question is where and how those actions are executed.

Execution context defines the boundaries within which an agent operates. This includes the repository it can access, the branch it works on, the workflow that runs its tasks, and the permissions it's granted.

Without a clearly defined execution context, agent behavior becomes unpredictable and unsafe.

### What is execution context?

Execution context is the set of constraints that define where an agent operates and what it can access.

In GitHub, execution context includes:

- The repository the agent is working in
- The branch the agent is targeting
- The workflow that is executing tasks
- The permissions granted to that workflow

This context determines both visibility and capability.

### Repository scope

Agents always operate within a repository. They can only read and modify code within that repository. They interact with issues, pull requests, and workflows tied to it. They don't have access to other repositories unless explicitly granted.

Repository scope is the first boundary that limits agent behavior.

#### How repository scope is configured

For agents such as the Copilot cloud agent, this boundary is explicitly configured at the repository level:

1. Open your repository on GitHub
2. Click Settings
3. In the sidebar, under Code & automation, click Copilot
4. Select Cloud agent
5. Enable and configure the agent for that repository
6. Save your configuration

Once configured, the agent is scoped to that repository and can't operate outside of it.

#### Custom agent scope within a repository

Custom agents operate within the same repository boundary but can further refine their scope through configuration.

Inside a custom agent file (for example, `.github/agents/security-reviewer.agent.md`), scope is defined using fields such as:

- `applyTo` → limits which files or directories the agent focuses on
- `tools` → defines what actions the agent can perform

Example:

```yaml
applyTo:
  - '**/*.js'
  - 'src/auth/**'
tools:
  - read_file
  - search_files
```

### Branch-based isolation

Agents don't work directly on the main branch.

Instead, they:

- Create a new branch from the selected branch
- Make changes within that branch
- Open a pull request targeting a base branch

This isolates changes and ensures that all modifications go through review before being merged.

Branch-based isolation is a key safety mechanism.

### Workflow boundaries

Execution happens inside workflows powered by GitHub Actions. Each workflow defines what triggers execution, what steps are performed, and what environment the code runs in. Workflows act as controlled execution containers. They ensure that tasks run in a clean environment, execution is repeatable, and logs and results are captured.

### Permission boundaries

Permissions define what an agent can do within its execution context.

Workflows are assigned permissions through tokens, such as the `GITHUB_TOKEN`.

These permissions can allow or restrict:

- Reading repository contents
- Writing code
- Creating pull requests
- Accessing secrets
- Triggering workflows

Permissions should always be explicitly defined and minimized.

### Guardrails in GitHub Agentic Workflows

GitHub Agentic Workflows are designed with defense in depth. Key controls include:

- Read-only tokens by default so the agent can inspect repository state without directly changing it
- Safe outputs that let the agent propose actions while a separate gated step decides what is allowed
- Zero secrets in the agent process, keeping sensitive credentials out of the runtime used by the coding agent
- Sandboxed, containerized execution
- Network isolation and allowlisted outbound access
- Threat detection that scans proposed outputs before any write action is applied

This model helps reduce the risks of overprivileged agents, prompt injection, and unintended repository changes.

### How agents are invoked through workflows

To run agent-driven tasks as part of CI, you invoke them inside a workflow. In this setup, the workflow becomes the execution boundary, and the agent runs within the runner using defined steps and permissions.

Steps:

1. Create or open a workflow file in your repository: `.github/workflows/agent-task.yml`
2. Define when the workflow should run:
   ```yaml
   on:
     workflow_dispatch:
     schedule:
       - cron: '0 9 * * *'
   ```
3. Set workflow permissions:
   ```yaml
   permissions:
     contents: read
   ```
4. Define a job and runner:
   ```yaml
   jobs:
     agent-task:
       runs-on: ubuntu-latest
   ```
5. Check out the repository:
   ```yaml
   - uses: actions/checkout@v4
   ```
6. Set up Node.js:
   ```yaml
   - uses: actions/setup-node@v4
     with:
       node-version: '18'
   ```
7. Provide authentication:
   ```yaml
   env:
     COPILOT_GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```
8. Run the agent task:
   ```yaml
   - run: |
       npx @github/copilot-cli \
       -p "Summarize recent changes in this repository" \
       --no-ask-user
   ```
9. Use a custom agent:
   ```yaml
   - run: |
       npx @github/copilot-cli \
       --agent security-reviewer \
       -p "Review this code for vulnerabilities" \
       --no-ask-user
   ```

The workflow becomes the controlled execution path for the agent. The task runs on a defined runner, with a defined trigger, inside a defined repository context, and with only the permissions granted to that workflow.

### Key takeaway

Execution context defines where agents operate. Boundaries such as repository scope, branch isolation, workflows, and permissions ensure that agent actions remain controlled, predictable, and safe.

---

## Unit 5: Agent execution limits and protections

Agents can take actions in repositories, but those actions run within platform limits and protections. On GitHub, Copilot cloud agent works in a GitHub Actions-powered environment, creates changes on a branch, and prepares those changes for review.

It doesn't finalize changes on its own. You decide whether those changes should become a pull request.

### Repository and branch limits

Copilot cloud agent only has access to the repository where it's working. It can't access other repositories.

Its changes are made on a separate branch, not directly on the default branch such as `main`. This ensures that all modifications are isolated before review.

### Pull request control

When Copilot cloud agent finishes its work, it prepares the changes for review, but it doesn't automatically create or merge a pull request.

You decide whether to:

- Create a pull request
- Review the generated changes
- Request updates or discard the work

This keeps the final decision in human control.

### Workflow controls

Agent work runs within workflows powered by GitHub Actions.

Repository and organization settings can control:

- Which workflows are allowed
- What actions can run
- What the `GITHUB_TOKEN` is permitted to do

These controls limit what the agent can execute through workflows.

### Error handling

Workflows should explicitly handle failures during agent execution.

This can include:

- Failing fast when a step runs into errors
- Logging meaningful error messages
- Preventing partial or inconsistent changes

Example:

```yaml
- run: |
    npx @github/copilot-cli -p "Run task"
  continue-on-error: false
```

This ensures that errors stop execution instead of silently continuing.

### Retries

Retries help handle temporary failures such as network issues or transient errors.

You can implement retries by:

- Rerunning failed steps
- Using retry logic in scripts
- Structuring workflows to allow safe re-execution

Example pattern:

```yaml
- name: Run agent task with retry
  run: |
    for i in 1 2 3; do
      npx @github/copilot-cli -p "Run task" && break
      sleep 5
    done
```

This allows the workflow to recover from temporary issues without manual intervention.

### Rollbacks

If an agent produces incorrect or unsafe changes, rollback mechanisms ensure those changes don't affect the main codebase.

Rollback is naturally supported through:

- Branch-based isolation
- Pull request review before merge

Extra rollback strategies include:

- Closing or discarding the pull request
- Reverting commits if changes are merged

### Escalation paths

When an agent can't complete a task or encounters uncertainty, escalation ensures a human can step in.

This can be implemented by:

- Requiring pull request review
- Assigning reviewers automatically
- Using workflow steps to notify maintainers

### Traceability and accountability

All agent actions should be traceable and auditable.

GitHub provides this through:

- Workflow logs
- Commit history
- Pull request discussions

To improve traceability:

- Use clear commit messages
- Keep changes scoped to a branch
- Review all actions through pull requests

### Environment protections

If agent-generated changes are used in deployments, environments provide extra safeguards.

Environments can:

- Require approvals before jobs continue
- Restrict access to secrets
- Control deployment targets

### Session visibility

Agent execution is visible while it runs.

You can:

- Monitor progress through logs
- Inspect the agent's actions
- Provide follow-up prompts to adjust behavior

This visibility allows you to stay in control throughout the process.

### Trigger behavior and workflow limits

Workflows triggered using the `GITHUB_TOKEN` have restrictions.

Most actions performed with this token don't trigger extra workflow runs, which helps prevent unintended loops or repeated execution.

Other authentication methods, such as GitHub App tokens or personal access tokens (PATs), can trigger extra workflow runs depending on configuration. While this enables more flexible automation patterns, it also requires careful design to avoid recursive executions or unintended automation loops.

### Enabling agent actions safely

Agents can perform actions such as:

- Creating branches
- Updating code
- Preparing changes for review
- Triggering workflows through repository events

These actions are controlled through:

- Branch-based isolation
- Workflow validation
- Pull request review
- Workflow permissions

By combining these controls, agent actions can be enabled without allowing unrestricted access to the repository or execution environment.

### Key takeaway

Agent execution on GitHub is controlled through repository scope, branch isolation, workflow permissions, environment protections, and human decision points. Agents prepare changes, but you remain responsible for reviewing and finalizing them.

---

## Unit 6: Knowledge Check

1. **Where do agents execute tasks when working with GitHub repositories?**

   - Directly on the developer's local machine.
   - ~~Within workflows powered by GitHub Actions.~~ ✓
   - Inside the GitHub web interface without workflows.
   - On external servers without using GitHub workflows.

2. **How are agent-generated code changes isolated before review?**

   - By committing directly to the default branch.
   - ~~By creating and working within a separate branch.~~ ✓
   - By storing changes in a temporary external system.
   - By applying changes only after deployment.

3. **What determines what an agent can do during workflow execution?**

   - The number of contributors in the repository.
   - ~~Workflow permissions and the GITHUB_TOKEN scope.~~ ✓
   - The size of the repository.
   - The number of workflow runs completed.

4. **What is the purpose of a pull request in agent workflows?**

   - To automatically merge agent changes into the default branch.
   - ~~To provide a place to review and validate changes before merging.~~ ✓
   - To bypass workflow execution.
   - To execute code changes immediately without checks.

5. **How can workflows be triggered after an agent updates code?**

   - Only manually by a repository administrator.
   - ~~Through events such as push or pull request.~~ ✓
   - Only when a repository is forked.
   - Only when code is downloaded locally.

6. **What is the role of an MCP server?**

   - To replace GitHub workflows.
   - ~~To expose tools and services that agents can use.~~ ✓
   - To store repository code.
   - To execute workflows instead of GitHub Actions.

7. **What controls which MCP servers an agent can use?**

   - Repository size limits.
   - ~~Registries and allow lists.~~ ✓
   - Workflow execution time limits.
   - The number of commits in the repository.

8. **Why are environment protections used in GitHub workflows?**

   - To increase workflow execution speed.
   - ~~To require approvals and protect sensitive operations.~~ ✓
   - To automatically merge pull requests.
   - To disable workflows on certain branches.

9. **What is the effect of using least-privilege permissions in workflows?**

   - It gives agents full access to all resources.
   - ~~It limits actions to only what is required.~~ ✓
   - It prevents workflows from running.
   - It automatically approves pull requests.

10. **How are agent actions kept visible and reviewable?**

    - By hiding logs and restricting access.
    - ~~Through workflow logs and pull request review.~~ ✓
    - By executing actions outside GitHub.
    - By skipping validation steps.

---

## Unit 7: Summary

Now that you've finished this module, you should be able to:

- Describe how agents operate within GitHub using repositories, branches, workflows, and APIs.
- Explain how workflows powered by GitHub Actions execute agent-driven tasks.
- Explain the difference between traditional GitHub Actions workflows and GitHub Agentic Workflows.
- Describe how GitHub Agentic Workflows use Markdown intent, frontmatter, and lock files to run coding agents in GitHub Actions.
- Define execution context, including repository scope, branch-based isolation, and workflow boundaries.
- Explain how Model Context Protocol (MCP) extends agent capabilities through servers, registries, and allow lists.
- Apply workflow permissions and least-privilege access to control agent actions.
- Identify limits and protections that govern agent execution, including branch restrictions, pull request review, and environment safeguards.

## Learn more

- [About GitHub Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent)
- [Automate repository tasks with GitHub Agentic Workflows](https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/)
- [GitHub Agentic Workflows (gh-aw)](https://github.github.com/gh-aw/)
- [Responsible use of Copilot coding agent](https://docs.github.com/en/copilot/responsible-use/copilot-coding-agent)
- [Workflow syntax for GitHub Actions](https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions)
- [Events that trigger workflows](https://docs.github.com/actions/using-workflows/events-that-trigger-workflows)
- [Managing GitHub Actions permissions](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
- [Using environments for deployment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
- [Using the GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server)
- [Configure MCP registry](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry)
- [Configure MCP server access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-server-access)
