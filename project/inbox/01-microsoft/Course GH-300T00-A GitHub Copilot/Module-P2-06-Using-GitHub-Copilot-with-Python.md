# Module P2-06: Using GitHub Copilot with Python

> **Duration:** 22 min | **XP:** 800 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/introduction-copilot-python/

---

## Overview

GitHub Copilot is an AI pair programmer that offers autocomplete-style suggestions as you code in Python.

### Learning Objectives

By the end of this module, you're able to:

- Enable the GitHub Copilot extension in Visual Studio Code.
- Craft prompts that can generate useful suggestions from GitHub Copilot.
- Use GitHub Copilot to improve a Python project.

### Prerequisites

- Basic understanding of Python and text editors.
- Basic comprehension of Git and GitHub Fundamentals, running basic `git` commands like `git add` and `git push`.
- A GitHub Account with an active subscription for GitHub Copilot (Copilot Free with usage limits is sufficient for learning).

---

## Unit 1: Introduction (1 min)

GitHub Copilot is an AI coding partner that provides autocomplete suggestions while you code. Get suggestions by typing code or describing it in natural language.

Copilot analyses your file and related files, offering suggestions in your text editor. It uses OpenAI Codex to help derive context from written code and comments, then suggests new lines or entire functions.

**Scenario:** As a developer, you want to be more productive — typing code faster for both new projects and existing ones. You hope an AI assistant can improve your developer workflows in code writing, documentation, testing, and more.

In this module, you learn how to use GitHub Copilot to modify a project by using a prompt to customize a Python API, and how to use live suggestions after typing initial code.

---

## Unit 2: What is GitHub Copilot? (2 min)

### How does it work?

GitHub Copilot is an AI assistant you use from within your IDE, capable of generating code and much more. It uses **prompts** (natural language text that you type) to provide suggestions based on what you type.

A prompt example:

```python
# Create a web API using FastAPI with a route to products.
```

Copilot generates:

```python
from fastapi import FastAPI
app = FastAPI()

@app.get("/products")
def read_products():
    return []
```

### How it recognizes prompts

Copilot can tell something is a prompt or instruction if you:

- Type it as a comment in a code file with a file ending like `.py` or `.js`.
- Type text in a markdown file and wait a few seconds for Copilot to respond.

### Accepting suggestions

Suggestions appear as grey text (if you use black as text color). To accept, press **Tab**.

For multiple options, cycle through suggestions with **Ctrl+Enter** (or **Cmd+Enter** on Mac) and select the most appropriate one.

---

## Unit 3: Exercise — Set up GitHub Copilot to work with Visual Studio Code

> **Note:** Use the [Codespace with the preconfigured environment](https://codespaces.new/MicrosoftDocs/mslearn-copilot-codespaces-python?azure-portal=true) in your browser.

---

## Unit 4: Use GitHub Copilot with Python (3 min)

### Prompt engineering

A prompt is a collection of instructions or guidelines that help generate code. The quality of output depends on how well you craft your prompt.

**Vague prompt:**

```python
# Create an API endpoint
```

**Specific, clear prompt:**

```python
# Create an API endpoint using the FastAPI framework that accepts a JSON payload in a POST request
```

### Best practices using GitHub Copilot

- **Keep prompts simple, then elaborate:**

  Start with: `create an HTML form with a text field and button`

  Then elaborate: `Add an event listener to the button to send a POST request to /generate endpoint and display response in a div with id "result"`

- **Cycle between suggestions** using Ctrl+Enter (or Cmd+Enter on Mac). Pick the best output.
- **If stuck,** reword the prompt or start writing code for Copilot to autocomplete.

> **Note:** GitHub Copilot uses open files in your text editor as additional context. If you need suggestions based on other files, open them or reference them with your prompt when using GitHub Copilot Chat.

---

## Unit 5: Exercise — Update a Python Web API with GitHub Copilot (5 min)

### What is an API?

An API acts as the intermediary that allows different applications to communicate with each other. For example, a weather website can share historical data or provide forecast functionality through its API.

### Extend the Web API

The API already has a single endpoint to generate a token. Add a new endpoint that accepts text and returns a list of tokens.

#### Step 1: Add a Pydantic model

In `main.py`, add a comment so GitHub Copilot can generate a `Pydantic` model:

```python
class Text(BaseModel):
    text: str
```

#### Step 2: Generate a new endpoint

Add the comment:

```python
# Create a FastAPI endpoint that accepts a POST request with a JSON body containing a single field called "text" and returns a checksum of the text
```

#### Step 3: Add necessary imports

Use GitHub Copilot Chat or add:

```python
import base64
import os
```

Verify the new endpoint is working by going to the `/docs` endpoint.

---

## Unit 6: Module Assessment (5 min)

### Check Your Knowledge

**Q1: How does GitHub Copilot work?**
- ✅ **GitHub Copilot uses prompts and natural language text that you type to provide coding suggestions.**
- ❌ GitHub Copilot uses highlights that you select.
- ❌ GitHub Copilot uses radio language.

**Q2: What are some GitHub Copilot Free features?**
- ❌ It's a free unrestricted AI tool independent of code editors.
- ✅ **It provides several suggestions and chats per month directly in your IDE and on github.com.**
- ❌ An option to enable slower responses.

**Q3: How can you accept GitHub Copilot's suggestions?**
- ✅ **Press the Tab key.**
- ❌ Press the F1 key.
- ❌ Press the F4 key.

**Q4: Identify which statement is valid:**
- ❌ A prompt, which is our output, is a collection of songs.
- ✅ **A prompt, which is our input, is a collection of instructions or guidelines that tell our copilot what to generate.**
- ❌ A prompt, which is our document, is a collection of laptops.

**Q5: What does the quality of the output from GitHub Copilot depend on?**
- ❌ Your code editor.
- ❌ How well your extensions were installed.
- ✅ **How well you craft your prompt.**

---

## Unit 7: Summary (1 min)

### Key Takeaways

In this module, we looked at how GitHub Codespaces can significantly improve the software development lifecycle. GitHub Codespaces allows you to customize your coding experience and GitHub Copilot guides you in each step of the way.

After finishing this module, you should be able to:

- Configure a GitHub repository in Codespaces and install the GitHub Copilot extension.
- Engineer prompts for your project that follow best practices to generate suggestions from GitHub Copilot.
- Use GitHub Copilot Chat to ask coding-related questions and receive answers.

### Delete your Codespaces resources

To avoid consuming all of your monthly GitHub Codespaces time:

1. Go to [GitHub Codespaces](https://github.com/codespaces).
2. Find your Codespace instance and select the **...** menu.
3. Select **Delete** to remove the instance.

> **Note:** Commit and push your changes before deleting your Codespace instance.

### References

- [What is GitHub Copilot?](/en-us/shows/introduction-to-github-copilot/what-is-github-copilot-1-of-6)
- [Introduction to GitHub Copilot](/en-us/training/modules/introduction-to-github-copilot/)
- [Code with GitHub Codespaces](/en-us/training/modules/code-with-github-codespaces/)

---
