# Codex CLI

> Source: https://developers.openai.com/codex/cli/

Inspect, edit, and run code from your terminal.

Inspect code, make changes, run commands, and automate repeatable work without leaving your terminal.

## Quickstart

### 1. Install Codex

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Update Codex:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

### 2. Run Codex and sign in

Open a project directory and run `codex`. The first time you run Codex, choose **Sign in with ChatGPT** or another available sign-in method.

### 3. Start your first task

Describe what you want to accomplish. For example, ask Codex to explain the project, make a focused change, or help debug an issue.

```bash
Tell me about this project
```

Create Git checkpoints before and after a task so you can revert changes.

## What Codex CLI can do

Use one focused terminal loop for interactive work, automation, review, and delegation.

### Keep the coding loop in your terminal

Start Codex in a repository to explore unfamiliar code, plan a change, edit files, and run your local development tools. Steer the active turn, inspect commands and diffs as they appear, and keep follow-up work in the same session.

### Use skills and plugins

Package repeatable instructions as skills, then add plugins to connect Codex to your team's tools and data without leaving the CLI.

### Review changes before they ship

Run a dedicated review against uncommitted changes, a commit, or a base branch. Codex reports prioritized findings without modifying your working tree, so you can address risks before you commit or open a pull request.

## Build a terminal workflow around Codex

### `codex resume` - Return to a saved chat

Reopen a recent chat from the current repository, or search across local chats when you need to return to older work.

### `codex --image` - Bring visual context into the prompt

Pass an error screenshot, architecture diagram, or design reference with the first prompt, or paste an image into the interactive composer.

### `subagents` - Split up a larger investigation

Ask Codex to delegate focused work to specialized agents, then bring their findings back into the main terminal session.

### `codex --search` - Search for current context

Switch a run to live web search when a task depends on current releases, documentation, or external behavior. Search activity stays visible in the transcript.

### `codex cloud` - Move work to Codex cloud

Browse active and completed chats, submit work to a configured environment, and apply the result to your local repository from the terminal.

### `codex mcp` - Connect external tools with MCP

Add local or remote MCP servers, authenticate when needed, and inspect the tools available to the current session before Codex uses them.

### `/permissions` - Set the boundaries for each run

Choose when Codex can edit files or run commands without asking, and inspect the active sandbox and writable roots before you continue.

### `codex completion` - Fit Codex to your terminal

Generate completions for your shell, choose a syntax theme, and open longer prompts in the editor configured by VISUAL or EDITOR.

## Use Codex CLI when...

- You work from the terminal: Explore, edit, and run a repository in one focused loop.
- You need scripting or CI: Run a non-interactive command in a repeatable workflow.
- You want a local code review: Inspect changes before you commit or open a pull request.
- You want to hand work to the cloud: Launch a cloud chat and return to the terminal later.

## Other ChatGPT and Codex surfaces

- **Desktop app** - Coordinate projects and long-running tasks on your desktop.
- **ChatGPT web** - Research, analyze, and create from your browser.
- **IDE extension** - Work with Codex beside the code in your editor.
- **Codex cloud** - Run coding tasks in parallel cloud environments.
