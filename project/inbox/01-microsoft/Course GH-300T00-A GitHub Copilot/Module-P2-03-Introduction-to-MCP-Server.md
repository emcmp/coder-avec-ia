# Module P2-03: Introduction to MCP Server

> **Duration:** 35 min | **XP:** 800 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/mcp-server/

---

## Overview

This module introduces GitHub MCP Server, a secure and scalable way to integrate GitHub features into your AI tools. You'll learn what MCP is, how to configure GitHub MCP Server in VS Code, use it with Copilot Chat, and troubleshoot common issues.

### Learning Objectives

By the end of this module, you'll be able to:

- Understand what MCP and GitHub MCP Server are and why they're useful for developers.
- Set up and configure GitHub MCP Server in Visual Studio Code for your projects.
- Use the GitHub MCP Server with Copilot Chat to automate development tasks.
- Identify and resolve common issues when working with GitHub MCP Server.

### Prerequisites

- A GitHub account.
- Visual Studio Code or another editor that supports MCP integration.
- If you're on Copilot Business or Enterprise, the "MCP servers in Copilot" policy must be enabled.
- (Optional) A GitHub Personal Access Token (PAT) for advanced setup and permissions control.
- (Optional) Docker installed if you plan to experiment with a local server setup.

---

## Unit 1: Introduction (5 min)

The GitHub MCP Server is a hosted, secure, scalable way to integrate your favorite GitHub features into your AI-assisted workflow. Built on the Model Context Protocol (MCP), introduced by Anthropic, it's compatible with all of your favorite development tools.

Its suite of tools extends GitHub Copilot and other AI tools to help you automate tasks, manage repositories, and enhance your development experience with context-aware AI assistance.

Currently available for Visual Studio Code, it will expand to other editors and platforms.

---

## Unit 2: Simplify your AI workflow with GitHub MCP Server (5 min)

### What is MCP?

MCP (Model Context Protocol) is like a USB-C standard for your AI tools, providing a consistent and secure way for AI models to connect to the tools and data sources they need.

MCP offers:

- Access to a growing library of tools that your AI models can use immediately.
- Flexibility to work with different AI providers while keeping your workflows consistent.
- Integration into your existing development environment and processes.

### How MCP clients connect to servers and services

#### Local communication with local data

The MCP Client talks directly to an MCP Server running on your machine using the MCP Protocol. The server connects to a local data source (files, databases, or other resources).

**When to use:** Local development, fast access to private data on your machine.

#### Local server as a bridge to remote services

The MCP Client connects to an MCP Server running locally, which bridges to a remote service via Web APIs.

**When to use:** When a local tool needs to fetch/update information from a remote service but benefits from having a local server (caching, security checks, data preprocessing).

#### Remote communication over the internet

The MCP Client connects to an MCP Server that lives entirely on the internet. That remote server communicates with other external services via Web APIs.

**When to use:** When the resource or computation can't happen locally — cloud-based compute, SaaS platforms, third-party integrations.

### Why use GitHub MCP Server?

Benefits:

- Eliminates the need for Docker or manual configuration files.
- Provides easy one-click OAuth login for fast authentication.
- Works seamlessly across web, desktop, and mobile environments.
- Supports enterprise identity providers (Entra, Auth0).
- Scales automatically to meet your usage needs.

### GitHub MCP Server in action

GitHub MCP Server is an open-source server that connects GitHub Copilot and other AI tools directly to your repositories. It allows you to:

- Analyze and summarize your code.
- Create and manage issues and pull requests.
- Automate repository triage and task tracking.

Currently offers over 30 tools, enabling you to:

- Add issues, edit files, and create branches.
- Rank pull requests and issues to identify priorities.

---

## Unit 3: Configure, connect, and use GitHub MCP Server in VS Code (5 min)

### Use OAuth

1. In VS Code, open the Command Palette (**Ctrl+Shift+P** / **Cmd+Shift+P**).
2. Type **MCP: add server** and press Enter.
3. Select **HTTP (HTTP or Server-Sent Events)**.
4. In the **Server URL** field, enter `https://api.githubcopilot.com/mcp/`, then press Enter.
5. When prompted for a **Server ID**, press Enter for the default or type a custom ID.
6. Choose where to save your MCP Server configuration (user settings for all projects, workspace settings for current project).
7. Select **Allow** to authorize with GitHub using OAuth and sign in if prompted.

### Use Personal Access Token (PAT)

1. Create a PAT with `repo` and `read:packages` scope in your GitHub account.
2. Follow the same steps above, but **cancel OAuth** when prompted.
3. In your configuration file, add:

```json
"headers": {
  "Authorization": "Bearer ${input:github_token}"
}
```

4. Add an input prompt:

```json
"inputs": [
  {
    "id": "github_token",
    "type": "promptString",
    "description": "GitHub Personal Access Token",
    "password": true
  }
]
```

5. Restart the MCP server in VS Code and enter your PAT when prompted.

### Local MCP Server setup with Docker (Optional)

For enterprise environments with PAT restrictions or local-only use:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "github_token",
      "description": "GitHub Personal Access Token",
      "password": true
    }
  ],
  "servers": {
    "github": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}"
      }
    }
  }
}
```

> **Note:** For enterprises with PAT restrictions, only API scopes allowed by your organization's policy are accessible. OAuth isn't supported in local setups.

### Troubleshooting

- Confirm you're signed into your GitHub account within VS Code.
- If using PAT, ensure it has correct scopes and is entered correctly.
- Check configuration for typos or missing fields.
- If using Docker, ensure it's installed and running.
- Restart VS Code or the MCP Server for temporary connection issues.

---

## Unit 4: Using GitHub MCP Server with Copilot Chat (5 min)

### How to use GitHub MCP Server with Copilot Chat

1. Open Copilot Chat in Visual Studio Code and switch to **Agent mode** to activate MCP Server tools.
2. Click on **Select tools** to view all available MCP Server functionalities.
3. Try creating a new issue, summarizing a repository, or getting insights using natural language prompts.
4. Follow the prompts within Copilot Chat to complete tasks.

### What are agentic capabilities?

Agentic capabilities give Copilot the ability to:

- Work independently by carrying out multi-step workflows without constant guidance.
- Make decisions by choosing which tools or approaches to use based on context.
- Adapt and improve by responding to feedback, adjusting its approach, and iterating on results.

### How MCP makes Agent mode stronger

Through MCP, Copilot can:

- Access external data, APIs, or enterprise tools directly.
- Stay in context across multiple platforms, without requiring you to switch applications.
- Complete "agentic loops" — dynamically seeking information, analyzing results, and making informed next steps.

### Benefits of combining MCP with Agent Mode

- **Extended context:** Copilot draws on information from multiple systems.
- **Reduced manual effort:** Routine work like opening issues, managing workflows, or running checks can be automated.
- **Seamless integration:** Tasks spanning tools and platforms without custom connectors.

### Best practices for success

- **Be clear about goals:** Define what you want Copilot to achieve and what the final output should look like.
- **Provide context:** Share background details — links, references, prior steps.
- **Set boundaries:** State if you want Copilot to stop at planning. Limit which MCP tools are active.
- **Ask for confirmation:** Have Copilot summarize its plan before big changes.
- **Use prompt files or instructions:** Create custom prompt files that guide Copilot on how to behave with specific MCP servers.

---

## Unit 5: Exercise — Integrate MCP with GitHub Copilot (5 min)

In this exercise, you'll:

- Integrate a GitHub MCP server with GitHub Copilot.
- Delegate Copilot to research similar projects and open issues.
- Ask Copilot to find an important issue and implement it from idea to pull request.
- Add comments to a recently closed issue.

Launch the exercise at: https://github.com/skills/integrate-mcp-with-copilot/

---

## Unit 6: Knowledge Check (5 min)

### Check Your Knowledge

**Q1: What does MCP stand for in the context of GitHub MCP Server?**
- ❌ Model Collaboration Platform
- ✅ **Model Context Protocol**
- ❌ Multicloud Provider
- ❌ Modular Code Process

**Q2: What is a primary benefit of using the GitHub MCP Server over local MCP servers?**
- ❌ Requires manual configuration for each project
- ✅ **Eliminates the need for Docker or config files**
- ❌ Only works on mobile devices
- ❌ Lacks support for enterprise authentication

**Q3: Which authentication methods are supported by GitHub MCP Server in Visual Studio Code?**
- ❌ Only OAuth
- ❌ Only Personal Access Token (PAT)
- ✅ **OAuth and PAT**
- ❌ Username and password

**Q4: Why would you use a local MCP server setup with Docker?**
- ❌ To avoid using PATs for authentication
- ✅ **To access resources or APIs restricted by enterprise policy**
- ❌ To enable OAuth authentication only
- ❌ To disable all external integrations

**Q5: What is the purpose of Copilot's agent mode when combined with MCP Server?**
- ❌ To run security scans only
- ✅ **To allow Copilot to independently plan and execute multi-step workflows**
- ❌ To limit Copilot to single-step commands
- ❌ To restrict Copilot to code summarization

**Q6: How do you ensure your Personal Access Token (PAT) is securely used in MCP Server configuration?**
- ❌ Hardcode the token in your source files
- ✅ **Enter the token via a secure input prompt**
- ❌ Share the token publicly in your repository
- ❌ Save the token in plain text in your workspace

**Q7: Which troubleshooting step should you try first if MCP Server tools aren't working in VS Code?**
- ❌ Reinstall Docker
- ✅ **Confirm you're signed into your GitHub account in VS Code**
- ❌ Delete your PAT
- ❌ Remove all server configurations

**Q8: What is an example of how MCP Server extends Copilot's capabilities in agent mode?**
- ❌ Copilot can only suggest code completions
- ✅ **Copilot can open issues, manage workflows, and execute tasks across platforms**
- ❌ Copilot can't interact with GitHub repositories
- ❌ Copilot disables semantic search

---

## Unit 7: Summary (5 min)

### Key Takeaways

Now that you've finished this module, you should be able to:

- Explain what MCP and GitHub MCP Server are, and how they support AI-powered development workflows.
- Describe the benefits of using GitHub MCP Server to simplify and scale your projects.
- Set up GitHub MCP Server in Visual Studio Code using OAuth, a Personal Access Token (PAT), or Docker.
- Use Copilot Chat with MCP Server to automate tasks and boost productivity directly in your editor.
- Troubleshoot common setup issues with confidence.

### Learn more

- [Using the GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server)
- [GitHub MCP Server is now available in public preview](https://github.blog/changelog/2025-04-04-github-mcp-server-public-preview/)
- [Introduction - Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)
- [What is GitHub Copilot?](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)
- [Enhancing GitHub Copilot agent mode with MCP](https://docs.github.com/en/copilot/tutorials/enhance-agent-mode-with-mcp)
- [GitHub MCP Server](https://gh.io/mcp)

---
