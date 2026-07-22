# Module P2-05: Using GitHub Copilot with JavaScript

> **Duration:** 22 min | **XP:** 800 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/introduction-copilot-javascript/

---

## Overview

To work with JavaScript, take advantage of GitHub Copilot, an AI pair programmer that boosts productivity with autocomplete-style suggestions.

### Learning Objectives

By the end of this module, you're able to:

- Enable the GitHub Copilot extension in Visual Studio Code.
- Craft prompts that can generate useful suggestions from GitHub Copilot.
- Use GitHub Copilot to improve a JavaScript project.

### Prerequisites

- Basic understanding of JavaScript, like variables and conditionals.
- Ability to use Git and GitHub for version control.
- A GitHub Account with an active subscription for GitHub Copilot (Copilot Free with usage limits is sufficient for learning).

---

## Unit 1: Introduction (1 min)

GitHub Copilot is an AI coding partner that provides autocomplete suggestions while you code. Get suggestions by typing code or describing it in natural language.

Copilot analyses your file and related files, offering suggestions in your text editor. It uses OpenAI Codex to help derive context from written code and comments, then suggests new lines or entire functions.

**Scenario:** As a developer, you want to be more productive — typing code faster for both new projects and existing ones. You hope an AI assistant can improve your developer workflows in code writing, documentation, testing, and more.

In this module, you'll use GitHub Copilot with applied examples — modifying a repository using a prompt to customize scroll behavior and live suggestions after typing initial code.

---

## Unit 2: What is GitHub Copilot (2 min)

### How does it work?

GitHub Copilot is an AI assistant you use from within your IDE, capable of generating code and much more. It uses prompts (natural language) and provides suggestions based on what you type.

A prompt can be a comment within your code file:

```javascript
// Create a web API using express and JavaScript with routes for products and customers
```

Copilot then generates a response you can choose to accept or reject:

```javascript
const express = require("express");

app = express();
app.path("/products", () => "products");
app.listen(3000, () => "app runs");
```

### How it recognizes prompts

Copilot can recognize a prompt or instruction if you:

- Type it as a comment in a code file (e.g., `.py`, `.js`).
- Type text in a markdown file and wait a few seconds for Copilot to respond.

### Accepting suggestions

Suggestions appear as grey text (if you use black as text color). To accept, press **Tab**.

For multiple options, cycle through suggestions with **Ctrl+Enter** (or **Cmd+Enter** on Mac) and select the most appropriate one.

---

## Unit 3: Exercise — Set up GitHub Copilot to work with Visual Studio Code

> **Note:** Use the [Codespace with the preconfigured environment](https://codespaces.new/MicrosoftDocs/mslearn-copilot-codespaces-javascript?quickstart=1) in your browser.

---

## Unit 4: Use GitHub Copilot with JavaScript (3 min)

### Prompt engineering

A prompt is a collection of instructions or guidelines that help generate code. The quality of output depends on how well you craft your prompt.

**Vague prompt:**

```javascript
// Create an API endpoint
```

**Specific, clear prompt:**

```javascript
// Create an API endpoint using the React framework that accepts a JSON payload in a POST request
```

### Best practices using GitHub Copilot

- **Keep prompts simple, then elaborate:**

  Start with: `create an HTML form with a text field and button`

  Then elaborate: `Add an event listener to the button to send a POST request to /generate endpoint and display response in a div with id "result"`

- **Cycle between suggestions** using Ctrl+Enter (or Cmd+Enter on Mac). Pick the best output.
- **If stuck,** reword the prompt or start writing code for Copilot to autocomplete.

> **Note:** GitHub Copilot uses open files in your text editor as additional context. If you need suggestions based on other files, open them when using GitHub Copilot Chat.

---

## Unit 5: Exercise — Update a JavaScript portfolio with GitHub Copilot (5 min)

### Customize your JavaScript portfolio

Update `src/App.jsx` with your information:

```javascript
const siteProps = {
  name: "Alexandrie Grenier",
  title: "Web Designer & Content Creator",
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};
```

### Animate your social media icons with a prompt

Add a prompt comment in `src/styles.css`:

```css
/* add an amazing animation to the social icons */
```

Copilot suggests:

```css
img.socialIcon:hover {
  animation: bounce 0.5s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
```

Accept by pressing **Tab**. Hover over social media icons in the footer to see the animation!

---

## Unit 6: Module Assessment (5 min)

### Check Your Knowledge

**Q1: How does GitHub Copilot work?**
- ✅ **GitHub Copilot uses the prompts that you write in natural language text, to provide suggestions based on what you type.**
- ❌ GitHub Copilot uses flashing lights to instruct you what to type.
- ❌ GitHub Copilot accepts prompts written in radio language.

**Q2: What are some features of GitHub Copilot Free?**
- ❌ It's a free unrestricted AI tool that works independent of code editors.
- ✅ **It provides several suggestions and chats per month directly in your IDE and on github.com.**
- ❌ It provides an option to enable slower responses.

**Q3: How can you accept GitHub Copilot's suggestions?**
- ✅ **Press the `Tab` key.**
- ❌ Press `F1` key.
- ❌ Press `F4` key.

**Q4: Identify which statement is valid:**
- ❌ A prompt, which is our output, is a collection of songs.
- ✅ **A prompt, which is our input, is a collection of instructions or guidelines that tell GitHub Copilot what to generate.**
- ❌ A prompt, which is a separate document, is a collection of instructions.

**Q5: What does the quality of GitHub Copilot output depend on?**
- ❌ Your code editor.
- ❌ How well your extensions were installed.
- ✅ **How well you crafted your prompt.**

---

## Unit 7: Summary (1 min)

### Key Takeaways

From creating a repository from a GitHub template to adding animations with live suggestions, GitHub Codespaces allows you to customize your coding experience and GitHub Copilot guides you in each step.

Now you should be able to:

- Understand how GitHub Copilot can help you code by offering autocomplete-style suggestions.
- Apply prompt engineering to various projects by using its best practices.
- Use GitHub Copilot Chat to ask and receive coding-related questions.

### Delete your Codespaces resources

To avoid consuming all your monthly GitHub Codespaces time:

1. Go to https://github.com/codespaces
2. Find your Codespace instance and select the three dots menu.
3. Select "delete" to remove the instance.

> **Note:** Commit and push your changes before deleting your Codespace instance.

### References

- [What is GitHub Copilot?](/en-us/shows/introduction-to-github-copilot/what-is-github-copilot-1-of-6)
- [Introduction to GitHub Copilot](/en-us/training/modules/introduction-to-github-copilot/)
- [Code with GitHub Codespaces](/en-us/training/modules/code-with-github-codespaces/)
- [Visual Studio Code (YouTube)](https://www.youtube.com/@code/playlists)

---
