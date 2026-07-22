# Module P2-02: Accelerate development with GitHub Copilot Cloud Agent

> **Duration:** 35 min | **XP:** 700 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/github-copilot-code-agent/

---

## Overview

This module explains how to use Copilot Cloud Agent to assign tasks, streamline development, and combine automation with your team's expertise for faster, higher-quality outcomes.

### Learning Objectives

By the end of this module, you'll be able to:

- Explain what the Copilot Cloud Agent is, how it differs from IDE assistants, and how to enable and budget for it.
- Describe the agent's built-in protections, main risks, mitigations, and its workflow and compatibility limits.
- Assign issues to Copilot, track its pull-request sessions, iterate with @copilot comments, and troubleshoot problems.
- Preconfigure the agent's environment, extend its capabilities with MCP, and test and validate its output before merging.
- Apply responsible-use practices, scope tasks effectively, secure environments, and improve performance.

### Prerequisites

- GitHub account with Copilot Pro, Copilot Pro+, Copilot Business, or Copilot Enterprise.
- Repositories hosted on GitHub (agent does not work on non-GitHub hosts).
- Basic familiarity with issues, pull requests, Actions, and repository rulesets.

---

## Unit 1: Understanding and enabling the GitHub Copilot Cloud Agent (5 min)

### What is GitHub Copilot Cloud Agent?

An autonomous development assistant that runs inside GitHub itself. Rather than pairing with you only in your IDE, the agent acts like a background teammate. You give it a clearly scoped task — such as a bug fix, an incremental feature, or documentation update — and it creates a branch, explores the codebase, generates an implementation plan, and drafts code while keeping you in control of when and whether to open a pull request.

### Availability and plans

- **Plans:** Available on Copilot Pro, Copilot Pro+, Copilot Business, Copilot Enterprise.
- **Repositories:** Works in all GitHub-hosted repositories except those owned by managed user accounts or where the agent is explicitly disabled.

### What the Copilot Cloud Agent does

- Fix bugs and regressions.
- Implement incremental new features.
- Improve test coverage or generate missing tests.
- Update or create documentation.
- Address technical debt and "nice-to-have" backlog items.

**Delegate work in two primary ways:**

- **Assign an issue** to Copilot — on GitHub.com, GitHub Mobile, or via API/CLI.
- **Ask Copilot to make code changes** — from the Agents panel on GitHub, Copilot Chat, your IDE or other agentic tool with MCP support, or Raycast on macOS.

### How it differs from traditional IDE assistants

- All work happens as commits on GitHub.
- The agent automates branch creation, commit messages, and code drafting.
- Work is visible in session logs and PR history for traceability.
- You steer via PR review comments rather than synchronous local sessions.

### Cloud agent vs. "Agent Mode" in IDEs

- **Cloud agent:** Runs autonomously in a GitHub Actions-powered environment to complete development tasks assigned through issues or Copilot Chat.
- **Agent mode (Copilot Edits):** Performs autonomous local edits directly in your IDE session.

### Enabling the Copilot Cloud Agent

- **Organization-owned repositories:** Managed by organization or enterprise administrators.
- **Personal repositories:** Configure availability in account settings.

### Usage Costs: GitHub Actions + PRUs

- **GitHub Actions minutes** for the ephemeral build/test environment.
- **Copilot Premium Requests (PRUs)** to power advanced model reasoning.

> **Note:** Beginning June 4, 2025, the agent uses one premium request per model request it makes. Within your monthly Actions and premium request allowance, you can run tasks without extra charges.

> **Tip:** Use PRUs where they add value — multi-file edits, test generation, and broader diffs that need deeper reasoning. Lightweight edits may require fewer PRU-intensive steps.

---

## Unit 2: Security, risks, and limitations of the Copilot Cloud Agent (5 min)

### Security model and built-in protections

- **Subject to governance** — Organization and enterprise settings govern availability.
- **Restricted environment** — Runs inside a sandbox on GitHub Actions with firewalled internet access and read-only repository access.
- **Branch limits** — Can only create and push to branches beginning with `copilot/`.
- **Permission-aware** — Only responds to users with write permission.
- **Outside-collaborator rules** — Draft PRs require approval by a user with write permission before Actions run. The requestor can't approve.
- **Compliance and attribution** — All commits are coauthored with the developer who assigned the task.

### Risks and mitigations

| Risk | Mitigations |
|---|---|
| Agent pushes code | Only write-access users trigger work. Pushes restricted to `copilot/` branches. Requestor can't approve the agent's PR. |
| Access to sensitive information | Internet access is firewall-restricted by default; customizable per policy. |
| Prompt injection | Hidden characters (HTML comments) are filtered before passing input to the agent. |

### Known limitations

**Workflow limitations:**

- Can only make changes in the same repository as the assigned issue or PR.
- Context scope limited to the assigned repository by default (broadenable via MCP).
- Opens exactly one pull request per task.
- Can't modify an existing PR it didn't create.

**Compatibility limitations:**

- Doesn't sign commits.
- Requires GitHub-hosted Ubuntu x64 runners (self-hosted not supported).
- Not available for personal repositories owned by managed user accounts.
- Doesn't honor content exclusions.
- "Suggestions matching public code" policy isn't enforced.
- Works only with GitHub-hosted repositories.
- Can't change the AI model — selected by GitHub.

---

## Unit 3: Assigning, tracking, and troubleshooting Copilot Cloud Agent tasks (5 min)

### Assigning issues to Copilot

On GitHub.com, navigate to Issues, open the issue, and under Assignees, select Copilot. Copilot receives the issue title, description, and existing comments at the time of assignment.

**Via GitHub CLI:**

```bash
gh issue edit <number> --add-assignee copilot
```

### Assigning via the API

**Availability check:**

```graphql
query {
  repository(owner: "octo-org", name: "octo-repo") {
    suggestedActors(capabilities: [CAN_BE_ASSIGNED], first: 100) {
      nodes { login __typename ... on Bot { id } ... on User { id } }
    }
  }
}
```

**Create and assign a new issue:**

```graphql
mutation {
  createIssue(
    input: {
      repositoryId: "REPOSITORY_ID",
      title: "Implement comprehensive unit tests",
      body: "DETAILS",
      assigneeIds: ["BOT_ID"]
    }
  ) {
    issue { id title assignees(first: 10) { nodes { login } } }
  }
}
```

**Assign an existing issue:**

```graphql
mutation {
  replaceActorsForAssignable(
    input: { assignableId: "ISSUE_ID", actorIds: ["BOT_ID"] }
  ) {
    assignable {
      ... on Issue {
        id title
        assignees(first: 10) { nodes { login } }
      }
    }
  }
}
```

### Tracking Copilot's progress

- **Immediate confirmation:** Copilot adds an 👀 reaction to the issue.
- **Draft pull request creation:** Within seconds, Copilot opens a draft PR linked to the issue.
- **Active agent session:** "Copilot started work" event appears in the PR timeline.
- **Live session logs:** Visible from the Agents page — watch Copilot's actions in real time.
- **Completion and review:** "Copilot finished work" event appears; Copilot requests your review.

### Iterating with Copilot

Mention @copilot in a pull request comment to request changes. Only comments from users with write permission are processed.

### Approvals and workflows

- Pull requests from Copilot are always in draft state.
- Require human approval before merge.
- GitHub Actions workflows don't run until a write-permission user clicks **Approve and run workflows**.
- The requestor cannot approve their own agent PR.

### Troubleshooting

| Issue | Solution |
|---|---|
| Copilot not in Assignees list | Check eligible plan; confirm not disabled at org/repo level. |
| EMU personal repositories | Use organization-owned repositories. |
| "Cannot create a pull request" from Chat | Ensure agent is available; mention @github in IDE prompts. |
| Assigned issue but nothing happened | Refresh; look for 👀 reaction, then draft PR. |
| PR created but no progress | Check PR timeline; open session logs. |
| Agent not responding to PR comment | Confirm write access; mention @copilot on agent's PR. |
| Appears stuck | Sessions time out after one hour. Retry by unassigning/reassigning. |
| Actions aren't running | Click Approve and run workflows in the merge box. |
| Pushes don't pass CI | Provide guidance via .github/copilot-instructions.md. |
| Images not picked up | Max image size is 3.00 MiB; larger images are removed. |

---

## Unit 4: Customizing, extending, and validating the Copilot Cloud Agent (5 min)

### Preseeding the development environment

**Preinstall tools & dependencies with `copilot-setup-steps.yml`:**

Create `.github/workflows/copilot-setup-steps.yml` on the default branch:

```yaml
name: "Copilot Setup Steps"

on:
  workflow_dispatch:
  push:
    paths:
      - .github/workflows/copilot-setup-steps.yml
  pull_request:
    paths:
      - .github/workflows/copilot-setup-steps.yml

jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - name: Checkout code
        uses: actions/checkout@v5
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - name: Install JavaScript dependencies
        run: npm ci
```

Allowed keys for the `copilot-setup-steps` job: `steps, permissions, runs-on, container, services, snapshot, timeout-minutes` (≤ 59).

**Larger GitHub-hosted runners:** Set `runs-on` to the label/group (e.g., `ubuntu-4-core`). Only Ubuntu x64 supported.

**Git LFS:**

```yaml
steps:
  - uses: actions/checkout@v5
    with:
      lfs: true
```

**Firewall customization:** Default internet access is limited; customize or disable per organizational policy.

### Extend with the Model Context Protocol (MCP)

MCP connects LLMs to tools and data. The agent uses **tools** from local or remote MCP servers.

> **Note:** Copilot Cloud Agent supports MCP tools only (not resources or prompts). Remote MCP servers requiring OAuth aren't supported.

**Default MCP servers:**

- **GitHub MCP Server:** Access issues, PRs, and GitHub data with a read-only token scoped to the current repo.
- **Playwright MCP Server:** Read, interact with, and take screenshots of web pages (localhost/127.0.0.1).

**Best practices:**

- Review third-party MCP servers for performance and output quality.
- Prefer read tools; allow only necessary write tools.
- Validate MCP configuration before saving.

### Testing & validating agent output

- Run CI (tests, linters, scanning) on every agent PR.
- Manually inspect high-impact or sensitive areas.
- Ask the agent to generate tests.
- Enforce rulesets for agent PRs.
- Label agent PRs for monitoring.
- Iterate instructions in `.github/copilot-instructions.md`.
- Revert quickly if needed.

> **Tip:** Leverage PRUs for deeper validation tasks — test coverage expansion, audits across directories, risky area scans.

---

## Unit 5: Responsible use of GitHub Copilot Cloud Agent on GitHub.com (5 min)

### About Copilot Cloud Agent on GitHub.com

An autonomous and asynchronous software development agent integrated into GitHub. The agent has been evaluated across a variety of programming languages, with English as the primary supported language.

### How the agent works (end-to-end)

1. **Prompt processing:** Task is combined with relevant contextual information to form a prompt.
2. **Language model analysis:** Prompt passed through an LLM for reasoning and tool leverage.
3. **Response generation:** LLM generates natural language suggestions and code suggestions.
4. **Output formatting:** Agent updates the PR description with changes and supplemental information.

### Use cases

- **Codebase maintenance:** Security fixes, dependency upgrades, targeted refactoring.
- **Documentation:** Updating and creating new documentation.
- **Feature development:** Implementing incremental feature requests.
- **Improving test coverage:** Developing additional test suites.
- **Prototyping new projects:** Green fielding new concepts.

### Improving performance

- Provide clear descriptions and complete acceptance criteria.
- Add hints or pointers on what files need to be changed.
- Use custom Copilot instructions so the agent understands how to build, test, and validate.
- Always review and test generated content.
- Use secure coding and code review practices.

### Security measures

- **Avoiding privilege escalation:** Responds only to write-access users; hidden characters filtered.
- **Constraining permissions:** Only accesses the scoped repository; pushes limited to `copilot/` branches; no access to org/repo Actions secrets.
- **Preventing data exfiltration:** Firewall enabled by default.

### Limitations

- **Limited scope & quality:** May not handle certain code structures or obscure languages.
- **Potential biases:** Training data may include biases.
- **Security risks:** Generated code may expose sensitive info if not reviewed.
- **Inaccurate code:** May appear correct but be semantically/syntactically wrong.
- **Public code:** May produce matches to public code even if "Block" is set.
- **Legal/regulatory:** Ensure compliance with applicable obligations.

---

## Unit 6: Exercise — Expand your team with Copilot Cloud Agent (5 min)

In this exercise, you will:

- Learn how to enable the Copilot Cloud Agent on your repository.
- Assign an issue and understand your agent's progress.
- Collaborate with your agent on code changes.
- Customize and optimize your agent's workspace.
- Prepare issues for better results.

Launch the exercise at: https://github.com/skills/expand-your-team-with-copilot/

---

## Unit 7: Summary (5 min)

### Key Takeaways

The GitHub Copilot Cloud Agent lets you hand off well-scoped, low- to medium-complexity changes — bug fixes, small features, refactors, tests, documentation — while preserving your GitHub-native workflow. You assign the task; the agent works in a secure, firewalled Actions environment, opens a draft PR, and you review, request changes with **@copilot**, and approve.

You control security, governance, and spend: branch protections, approval gates, Actions minutes, and PRUs (one premium request per model request). You can customize the build environment, leverage larger runners, enable LFS, and extend capabilities via MCP — all with clear logs and traceability.

### Learn more

- [About GitHub Copilot Cloud Agent](https://docs.github.com/copilot/concepts/agents/coding-agent/about-coding-agent)
- [Using GitHub Copilot to work on an issue](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr)
- [Troubleshooting GitHub Copilot Cloud Agent](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/troubleshoot-coding-agent)
- [Customizing the development environment for Copilot Cloud Agent](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment)
- [Extending Copilot Cloud Agent with the Model Context Protocol (MCP)](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp)
- [GitHub Copilot billing & Premium Request Units (PRUs)](https://docs.github.com/billing/concepts/product-billing/github-copilot-licenses)
- [GitHub Copilot Trust Center](https://copilot.github.trust.page/)
- [Model Context Protocol (MCP) overview](https://modelcontextprotocol.io/)

---
