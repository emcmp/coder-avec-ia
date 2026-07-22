# Module 2: Introduction to GitHub Copilot

> **Duration:** 19 min | **XP:** 800 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/

---

## Overview

GitHub Copilot is an AI-powered coding assistant that helps you generate, understand, refactor, and debug code in real time using both inline suggestions and a conversational chat experience—directly from your development environment.

### Learning Objectives

By the end of this module, you'll:

- Understand how GitHub Copilot can help you write, understand, and improve code by providing context-aware suggestions, explanations, and code generation.
- Understand the various ways to trigger GitHub Copilot.
- Comprehend the differences among GitHub Copilot Free, Pro, Business, and Enterprise.
- Know how to configure GitHub Copilot.
- Know how to troubleshoot GitHub Copilot.

### Prerequisites

- GitHub account
- Basic understanding of GitHub fundamentals

---

## Unit 1: Introduction (1 min)

GitHub Copilot is an AI-powered developer assistant that helps you work faster and with greater confidence throughout the software development lifecycle. Copilot uses the context of your code and comments to help generate code, explain existing logic, refactor implementations, fix bugs, and write tests—all directly from your development environment.

Research finds that when GitHub Copilot helps developers code faster, they can focus on solving bigger problems, stay in the flow longer, and feel more fulfilled with their work.

OpenAI created the generative pretrained language model in GitHub Copilot, powered by OpenAI Codex. An extension is available for Visual Studio Code (VS Code), Visual Studio, Neovim, and the JetBrains suite of IDEs.

---

## Unit 2: GitHub Copilot, Your AI Pair Programmer (2 min)

### What is GitHub Copilot?

GitHub Copilot is a service that provides you with an AI pair programmer that works with all of the popular programming languages. Developed by Microsoft in collaboration with OpenAI, powered by the OpenAI Codex system.

**Key statistics:**
- 46% of new code now written by AI
- 55% faster overall developer productivity
- 74% of developers feeling more focused on satisfying work

### Key Features

#### Copilot Chat
Interactive chat experience directly inside supported editors (VS Code, Visual Studio, etc.):
- Ask questions about your code
- Get explanations of logic or errors
- Generate tests or documentation
- Explore how to implement new features

#### Copilot Pull Request Summaries
Automatically generate a summary description of changes when you open a PR. Helps reviewers understand intent, reduces writing work, improves clarity.

#### Copilot Code Review Assistance
Suggests potential issues, describes changes, points out edge cases, proposes improvements for reviewers.

#### Copilot for the CLI
- Ask for command suggestions, code snippets
- Generate shell scripts
- Understand output or errors
- Generate and improve projects from the CLI

#### Copilot Spaces
Dedicated place to collaborate with AI on a project:
- Explore project structure
- Ask high-level planning questions
- Refine requirements
- Iterate on designs

#### Copilot Cloud Agent
Autonomous AI assistant that performs multi-step coding tasks:
- Generate multiple related files
- Implement a feature set
- Build scaffolding from a specification

### Subscription Plans

#### GitHub Copilot Free
- Code completions in supported editors
- Limited monthly completions and chat requests
- Access to supported AI models

#### GitHub Copilot Pro
- Higher usage limits compared to Free
- Priority access to latest AI models
- Advanced code suggestions and explanations
- Integration with VS Code, Visual Studio, JetBrains, Neovim
- Automated test generation and code explanation

#### GitHub Copilot Pro+
- All Pro features
- Additional premium request capacity
- Priority infrastructure access

#### GitHub Copilot Business
- Centralized management and policy controls
- Security vulnerability filtering
- Code referencing and public code filtering
- IP indemnity and enterprise-grade security
- Chat in IDE and mobile
- Filter for public code

#### GitHub Copilot Enterprise
- All Business features
- Personalized code suggestions based on internal/private code
- Integration with GitHub Enterprise Cloud
- AI-powered search and documentation generation across your codebase
- Enhanced pull request support with AI-powered tags and summaries
- Organization-wide customization and fine-tuning of Copilot models

---

## Unit 3: Interact with Copilot (2 min)

### Inline Suggestions

As you type, Copilot offers real-time code completions as grayed-out text.
- **Accept:** `Tab` or `>` (right arrow)
- **Reject:** `Esc` or keep typing

```python
def calculate_average(numbers):
    # Start typing here and watch Copilot suggest the function body
```

### Command Palette

1. `Ctrl+Shift+P` (Win/Linux) or `Cmd+Shift+P` (Mac)
2. Enter **Copilot** to see available commands
3. Select actions like **Explain This** or **Generate Unit Tests**

### Copilot Chat

1. Open the Copilot chat panel in your IDE
2. Enter questions or requests in natural language

Example: "How do I implement a binary search in Python?"

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

### Inline Chat

1. Place your cursor where you want assistance
2. `Ctrl+I` (Win/Linux) or `Cmd+I` (Mac)
3. Ask questions or request changes

**Common slash commands:**
- `/explain` — Explanation of selected code
- `/suggest` — Code suggestions based on context
- `/tests` — Generate unit tests
- `/comment` — Convert comments into code snippets

### Comments to Code

Describe functionality in a comment, press `Enter`, and Copilot generates code:

```python
# Function to reverse a string
def reverse_string(s):
    return s[::-1]
```

### Multiple Suggestions

1. Look for the light bulb icon when Copilot offers a suggestion
2. `Alt+]` (Win/Linux) or `Option+]` (Mac) to cycle through alternatives

### Explanations

1. Select a block of code
2. Right-click → **Copilot: Explain This**
3. Read the explanation

### Automated Test Generation

1. Select a function or class
2. Command palette → **Copilot: Generate Unit Tests**

```python
def add(a, b):
    return a + b

# Copilot might generate:
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
```

---

## Unit 4: Setup, Configure, and Troubleshoot (7 min)

### Sign Up for GitHub Copilot

1. Select your GitHub profile photo → **Settings**
2. Navigate to **Code, planning, and automation** → **Copilot**
3. Install an extension for your preferred environment

### Configure in VS Code

1. Install the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
2. Sign in to GitHub in VS Code when prompted
3. Enable/disable via the status icon in the bottom pane

**Enable/disable inline suggestions:**
- **File** → **Preferences** → **Settings** → **Extensions** → **GitHub Copilot**
- Toggle **Editor: Enable Auto Completions**

### Troubleshoot

1. **View logs:** Command palette → **Developer: Open Log File** or **Developer: Open Extensions Logs Folder**
2. **Electron logs:** **Help** → **Toggle Developer Tools**
3. **Diagnostics:** `Ctrl+Shift+P` → **GitHub Copilot: Collect Diagnostics**

---

## Unit 5: Exercise (1 min)

Hands-on exercise using GitHub Codespaces:
1. Click **Start the exercise on GitHub**
2. Create a new repository from the template
3. Follow the README instructions to complete challenges
4. Return to the module for knowledge check and badge

---

## Unit 6: Module Assessment (5 min)

### Check Your Knowledge

**Q1: What is GitHub Copilot?**
- ✅ **GitHub Copilot is an AI pair programmer that you can use to get code suggestions.**

**Q2: What are the supported IDE extensions for GitHub Copilot?**
- ✅ **GitHub.com, VS Code, Visual Studio, Neovim, and JetBrains**

**Q3: What is the difference between GitHub Copilot Business and Enterprise?**
- ✅ **GitHub Copilot Enterprise has an extra layer of personalization. Organizations use their own codebase to train GitHub Copilot.**

**Q4: Which plan includes all Pro features plus additional premium usage and priority infrastructure access?**
- ✅ **GitHub Copilot Pro+**

---

## Unit 7: Summary (1 min)

### Key Takeaways

At the end of this module, you can:
- Explain GitHub Copilot features and available plans
- Set up and configure GitHub Copilot
- Develop using GitHub Copilot and VS Code

### References

- [Preparing for the GitHub Copilot Certification Exam](https://github.com/orgs/community/discussions/144443)
- [Exploring GitHub Copilot Features](https://github.com/features/copilot)
- [Researching GitHub Copilot's Impact](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/)
- [Understanding GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)
- [Subscribing to GitHub Copilot as an Individual User](https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/subscribing-to-copilot-as-an-individual-user)

---
