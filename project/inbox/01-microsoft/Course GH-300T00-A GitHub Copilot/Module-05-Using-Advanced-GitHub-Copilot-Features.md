# Module 5: Using Advanced GitHub Copilot Features

> **Duration:** 22 min | **XP:** 800 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/advanced-github-copilot/

---

## Overview

Use advanced GitHub Copilot features with a Python application to make changes and updates.

### Learning Objectives

By the end of this module, you'll be able to:

- Apply slash commands to make code changes
- Interact with GitHub Copilot using the Chat feature
- Ask questions about your project using an agent

### Prerequisites

- Basic understanding of Python (variables, conditionals)
- Ability to use Git and GitHub for version control
- Access to GitHub Copilot service

---

## Unit 1: Introduction (1 min)

GitHub Copilot is an AI coding partner that provides autocomplete suggestions while you code. Copilot analyzes your file and related files, offering suggestions in your text editor.

**GitHub Codespaces** is a hosted developer environment in the cloud that can be run with VS Code. Customize the experience by preinstalling dependencies, libraries, and extensions.

### Scenario

Work with an existing project to add new HTTP API endpoints, write unit tests, and document existing code using advanced Copilot features.

---

## Unit 2: Advanced GitHub Copilot Features (2 min)

### Ghost Text

When Copilot is enabled, it provides suggestions called **ghost text**. Accept with `Tab`, or ignore. Uses open files as context by default.

### Chatting with GitHub Copilot

Click the chat icon in the left sidebar to open the chat interface. Ask questions about your code or software-related questions.

### Inline Chat

Access with `Ctrl+I` (Windows) or `Cmd+I` (Mac). Interact without leaving your code — suggestions happen closer to the code.

### Slash Commands

Quick shortcuts for common tasks in chat or inline chat:

| Command | Purpose |
|---------|---------|
| `/doc` | Add comments to selected code |
| `/explain` | Get code explanations |
| `/fix` | Fix bugs in selected code |
| `/generate` | Generate code for a question |
| `/help` | Get Copilot chat help |
| `/optimize` | Analyze and improve runtime |
| `/tests` | Create unit tests |

### Agents

Agents let you ask questions using a specific context. Example: `@terminal` helps interact with the terminal.

---

## Unit 3: Exercise Setup (5 min)

### Environment Setup

1. Open the [preconfigured Codespace](https://codespaces.new/MicrosoftDocs/mslearn-advanced-copilot?azure-portal=true)
2. Review configuration settings → **Create new codespace**
3. Wait for startup (few minutes)
4. The Python Web API starts on port 8000

**Note:** All GitHub accounts get up to 60 hours of free Codespaces per month.

---

## Unit 4: Applied GitHub Copilot Techniques (3 min)

### Implicit Prompts

Use features that provide precrafted prompts. Example: select buggy code, use `Ctrl+I` and type `/fix`.

```python
# Bug: file.read should be file.read()
with open("file.txt", "r") as file:
    contents = file.read  # Missing ()
```

### Selective Context

Ask Copilot to work with workspace-level context:

```text
I need to create a Dockerfile for this project, can you generate one?
```

Be more specific if needed:

```text
Help me create a Dockerfile using a Python Virtual Environment.
```

Use the `@terminal` agent for terminal-specific help:

```text
@terminal How do I fix the error message I'm seeing?
```

---

## Unit 5: Exercise - Update a Web API (5 min)

### Step 1: Add a New Route

Open `main.py`, use inline chat (`Ctrl+I`):

```text
Create a new route that exposes the cities of a country/region.
```

```python
@app.get('/countries/{country}')
def cities(country: str):
    return list(data[country].keys())
```

### Step 2: Create a Test

Select the route code, ask Copilot Chat:

```text
/tests help me create a new test for this route using Spain as the country/region.
```

Iterate if needed:
```text
This test is not quite right, it is not including cities that doesn't exist. Only Seville is part of the API.
```

### Step 3: Write Documentation

Open `README.md`, use Copilot Chat:

```text
I want to document how to run this project so that other developers can get started quickly.
```

---

## Unit 6: Module Assessment (5 min)

### Check Your Knowledge

**Q1: What is ghost text in GitHub Copilot?**
- ✅ **Suggestions that appear in your text editor as you type**

**Q2: How do you access inline chat?**
- ✅ **Ctrl+I on Windows or Cmd+I on Mac**

**Q3: What are slash commands used for?**
- ✅ **Shortcuts to quickly solve common development tasks**

**Q4: What are the benefits of agents like @terminal?**
- ✅ **Ask questions within a specific context for precise answers**

**Q5: What are the benefits of implicit prompts with slash commands?**
- ✅ **Get better responses without writing longer prompts**

---

## Unit 7: Summary (1 min)

### Key Takeaways

- Use chat, agents, inline chat, and slash commands for flexible coding tasks
- Copilot Chat provides context-aware assistance for your project

### Cleanup

After the exercise, **delete your Codespace** to avoid consuming monthly hours:
1. Go to https://github.com/codespaces
2. Find your instance → **...** menu → **Delete**

### References

- [What is GitHub Copilot?](/en-us/shows/introduction-to-github-copilot/what-is-github-copilot-1-of-6)
- [Introduction to GitHub Copilot](/en-us/training/modules/introduction-to-github-copilot/)
- [Code with GitHub Codespaces](/en-us/training/modules/code-with-github-codespaces/)

---
