# Module 6: GitHub Copilot Across Environments

> **Duration:** 53 min | **XP:** 900 | **Units:** 8
> **URL:** https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/

---

## Overview

Explore the multifaceted capabilities of GitHub Copilot across IDE, Chat, GitHub.com, CLI, and the Copilot App.

### Learning Objectives

- Utilize auto-suggestions, multiple suggestions pane, and adaptability to coding styles
- Provide context through comments to enhance code generation
- Interact through natural language conversations for complex code, debugging, explanations
- Improve Copilot Chat with scope referencing, slash commands, and agents
- Use Copilot on GitHub.com for repository exploration, PR assistance, issue management
- Interact with Copilot CLI for command explanations and suggestions

---

## Unit 1: Introduction (3 min)

GitHub Copilot saves time by automating routine tasks, providing relevant code completion, and generating entire blocks of code — accelerating development cycles from initial coding to pull request completion.

### Interaction Modes

| Mode | Purpose |
|------|---------|
| IDE auto-suggestions | Inline code completion |
| Conversational Chat | Complex problem-solving |
| GitHub.com | Collaborative features |
| Command Line | Terminal assistance |

---

## Unit 2: Code Completion (6 min)

### Supported Languages

Python, JavaScript, Java, TypeScript, Ruby, Go, C#, C++ (and many more)

### Auto Suggestions (Ghost Text)

Grayed-out suggestions as you type. Accept with `Tab`, or ignore.

### Multiple Suggestions Pane

Cycle through alternatives:
- **macOS:** `Option]+` (next), `Option+[` (previous)
- **Windows/Linux:** `Alt+]` (next), `Alt+[` (previous)

### Adaptability

Copilot adapts to:
- Method implementation style
- Naming conventions
- Formatting preferences
- Comment style
- Design patterns

### Using Comments for Suggestions

- **Inline comments** — Short explanations
- **Block comments** — Longer function/class descriptions
- **Docstrings** — Formal documentation
- **TODO comments** — Future implementation notes

**Comment-driven code generation:**
- Function implementation from description
- Code completion with developer intent
- Variable naming from context
- Algorithm selection from steps

---

## Unit 3: GitHub Copilot Chat (6 min)

### Use Cases

- **Complex code generation** — Algorithms, data structures, boilerplate, regex, SQL
- **Debugging** — Analyze errors, suggest fixes, step-by-step explanations
- **Code explanations** — Break down complex snippets

### Improving Responses

#### Scope Referencing

- `#file:controller.js` — Focus on a specific file
- `@terminal` — Get help based on terminal output

#### Slash Commands

| Command | Purpose |
|---------|---------|
| `/doc` | Add comments to selected code |
| `/explain` | Explain selected code |
| `/fix` | Propose fixes for problems |
| `/generate` | Generate new code |
| `/optimize` | Improve runtime efficiency |
| `/tests` | Create unit tests |

#### Model Selection

| Model | PRU Cost | Best For |
|-------|----------|----------|
| Standard (GPT-4o) | 1 PRU | Routine coding, explanations |
| Premium (o1-preview) | 2 PRU | Complex analysis, algorithms |

#### Copilot Agents

- `@terminal` — Command-line questions
- `@vscode` — VS Code settings and debugging
- `/new` — Generate a new project from scratch

#### Feedback

Use thumbs up/down buttons to rate suggestions.

---

## Unit 4: GitHub Copilot on GitHub.com (8 min)

### Access

Integrated throughout the GitHub web interface — chat button or inline suggestions.

### Agent Tasks

#### Repository Exploration
- Code explanation, project overview, documentation generation

#### Pull Request Assistance
- PR summaries, review suggestions, merge conflict resolution
- **Note:** PR summaries consume 1-2 PRUs

#### Issue Management
- Issue analysis, solution brainstorming, reproduction steps

#### Code Review
- Review comments, security analysis, performance optimization
- **Note:** Code review consumes 1-3 PRUs

### GitHub Actions Error Explanation

Copilot analyzes failed workflow runs and provides insights into what went wrong and how to fix it.

---

## Unit 5: GitHub Copilot for the Command Line (5 min)

### Installation

```bash
brew install copilot-cli
# or
curl -fsSL https://gh.io/copilot-install | bash
```

### Launch

```bash
copilot          # Interactive mode
copilot -i "explain brew install git"  # One-shot
```

### Common Slash Commands

| Command | Description |
|---------|-------------|
| `/help` | Show available commands |
| `/explain <cmd>` | Explain a shell command |
| `/suggest <task>` | Suggest a command for a task |
| `/revise` | Revise last suggestion |
| `/feedback` | Submit feedback |
| `/exit` | Exit interactive mode |
| `/model <model>` | Select AI model |
| `/theme` | Change theme |
| `/sandbox enable` | Enable local sandboxing |

### Example Workflows

1. **Explain:** "Explain what `git reset --hard HEAD` does"
2. **Suggest:** "Find and delete all .log files"
3. **Revise:** "Include only files modified in the last 7 days"

### Sandboxing

| Feature | Local Sandbox | Cloud Sandbox |
|---------|--------------|---------------|
| Execution | Local machine | GitHub-hosted |
| Resource usage | Local | Cloud |
| Isolation | Restricted local | Fully isolated |
| Device independence | No | Yes |

```bash
/sandbox enable          # Local sandbox
copilot --cloud          # Cloud sandbox
```

---

## Unit 6: The GitHub Copilot App (5 min)

### What is the Copilot App?

Native desktop experience (macOS, Windows, Linux) for end-to-end work management — from selecting what to build to shipping code.

### Comparison Overview

| Surface | Best For | Key Role |
|---------|----------|----------|
| **Copilot App** | End-to-end agent workflows | Issue → Code → PR → Merge |
| **VS Code** | Editing & debugging | Hands-on development |
| **Copilot CLI** | Terminal workflows | Automation & scripting |
| **GitHub.com** | Collaboration | Issues, PR creation |

### Session Modes

| Mode | Description | Best For |
|------|-------------|----------|
| **Interactive** | Step-by-step collaboration | Exploratory tasks |
| **Plan** | Detailed plan before execution | Complex tasks |
| **Autopilot** | Fully autonomous | Well-defined tasks |

### `/chronicle`

Generate summaries of recent work across sessions — useful for standups.

### Voice Dictation

Speak prompts instead of typing. Configure in Settings → Voice Dictation tab.

---

## Unit 7: Module Assessment (15 min)

### Check Your Knowledge

**Q1: Which language isn't mentioned as receiving strong Copilot support?**
- ✅ **Rust**

**Q2: Which slash command generates unit tests?**
- ✅ **`/tests`**

**Q3: Which command explains a specific command in CLI?**
- ✅ **`gh copilot explain`**

**Q4: Which is NOT a common Copilot agent task on GitHub.com?**
- ✅ **Compiling and deploying applications**

**Q5: What billing consideration should you be aware of with Copilot Code Review?**
- ✅ **It consumes Premium Request Units (PRUs)**

---

## Unit 8: Summary (5 min)

### Key Takeaways

- Utilize auto-suggestions and multiple suggestions pane for efficient completion
- Adapt to coding styles through comments and context
- Use Chat for complex code, debugging, explanations
- Improve Chat with scope referencing, slash commands, agents
- Interact with Copilot CLI for command explanations
- Configure CLI settings including aliases and data handling

### References

- [GitHub Copilot documentation](https://docs.github.com/copilot)
- [GitHub Copilot Chat documentation](https://docs.github.com/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-chat-in-your-ide)
- [GitHub CLI documentation](https://docs.github.com/en/github-cli)

---
