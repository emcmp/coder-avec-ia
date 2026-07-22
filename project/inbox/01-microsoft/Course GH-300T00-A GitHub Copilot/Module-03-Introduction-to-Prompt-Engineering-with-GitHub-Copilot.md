# Module 3: Introduction to Prompt Engineering with GitHub Copilot

> **Duration:** 30 min | **XP:** 800 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/

---

## Overview

This module highlights the basic core principles of prompt engineering and explains the best practices to create prompts quickly and effectively in GitHub Copilot.

### Learning Objectives

By the end of this module, you're able to:

- Craft effective prompts that optimize GitHub Copilot's performance, ensuring precision and relevance in every code suggestion.
- Understand the intricate relationship between prompts and Copilot's responses, including role prompting and chat history management.
- Gain insights into the underlying mechanism of how GitHub Copilot handles user prompts, from secure transmission to content filtering and context analysis.

### Prerequisites

- Basic coding knowledge
- GitHub Copilot Access (VS Code, Visual Studio, Neovim, JetBrains IDEs)
- A GitHub account

---

## Unit 1: Introduction (2 min)

GitHub Copilot, powered by OpenAI, accelerates development workflows from initial code creation to production-ready implementations. It grasps intricate project details through training on both natural language and billions of lines of source code from publicly available sources.

To get the most out of GitHub Copilot, you need to know about **prompt engineering** — how you tell Copilot what you need with precision and efficiency.

---

## Unit 2: Prompt Engineering Foundations & Best Practices (7 min)

### What is Prompt Engineering?

The process of crafting clear instructions to guide AI systems to generate context-appropriate code tailored to your project's specific needs.

### The 4 Ss of Prompt Engineering

1. **Single** — Focus on one well-defined task or question per prompt
2. **Specific** — Be explicit and detailed in your instructions
3. **Short** — Keep prompts concise and to the point
4. **Surround** — Use descriptive filenames and keep related files open for rich context

### Best Practices

#### Provide Enough Clarity
Be explicit: "Write a Python function to filter and return even numbers from a given list"

#### Provide Enough Context with Details
Add comments at the top of your code to give Copilot more details about what you want. Copilot also uses parallel open tabs for context.

#### Provide Examples for Learning
Using examples clarifies requirements and makes prompts more tangible. Effective for generating boilerplate code, test templates, and repetitive implementations.

#### Assert and Iterate
Your first prompt might not yield production-ready code. Erase the suggestion, enrich your comment with added details, and prompt again.

### How Copilot Learns from Your Prompts

#### Zero-shot Learning
Copilot generates code without examples, relying on its foundational training. Ideal for common patterns and standard functionality.

#### One-shot Learning
A single example is given, aiding context-aware responses following your patterns. Effective for consistent implementations.

#### Few-shot Learning
Several examples are provided, balancing unpredictability with precision. Excels at handling multiple scenarios and edge cases.

### Chain Prompting and Managing Chat History

Long conversation histories can become inefficient and costly (2-3 PRU per turn):

- **Summarize context** when conversations become lengthy
- **Reset and provide focused context** for new features
- **Use concise references** instead of repeating full implementations

### Role Prompting for Specialized Tasks

Instruct Copilot to act as a specific expert for targeted results:

**Security Expert:** "Act as a cybersecurity expert. Create a password validation function that checks for common vulnerabilities and follows OWASP guidelines."

**Performance Expert:** "Act as a performance optimization expert. Refactor this sorting algorithm to handle large datasets efficiently."

**Testing Specialist:** "Act as a testing specialist. Create comprehensive unit tests for this payment processing module, including edge cases."

---

## Unit 3: GitHub Copilot User Prompt Process Flow (5 min)

### Inbound Flow

#### 1. Secure Prompt Transmission & Context Gathering
- Prompt sent securely over HTTPS
- Copilot collects: code before/after cursor, filename, open tabs, project structure, programming languages/frameworks
- Pre-processing using **Fill-in-the-Middle (FIM)** technique

#### 2. Proxy Filter
Traffic passes through a proxy server in a GitHub-owned Azure tenant, filtering attempts to hack or manipulate the system.

#### 3. Toxicity Filtering
Filters out:
- **Hate speech and inappropriate content**
- **Personal data** (names, addresses, identification numbers)

#### 4. Code Generation with LLM
Filtered prompt passed to LLM models for code suggestion generation.

### Outbound Flow

#### 5. Post-Processing & Response Validation
- **Toxicity filter** removes harmful content
- **Code quality** checks for bugs/vulnerabilities (XSS, SQL injection)
- **Matching public code** (optional) — filters suggestions resembling ~150+ characters of public code

#### 6. Suggestion Delivery & Feedback Loop
Only filtered responses are delivered. Copilot learns from accepted/modified/rejected suggestions.

---

## Unit 4: GitHub Copilot Data (4 min)

### Data Handling for Code Suggestions
- Does not retain prompts to train foundational models
- Discards prompts once a suggestion is returned
- Individual subscribers can opt-out of prompt sharing for model finetuning

### Data Handling for Chat
- Prompts, suggestions, and context retained for **28 days** (outside code editor)
- Chat maintains conversation history for contextual understanding
- Same applies to CLI, Mobile, and GitHub.com chat

### Prompt Types Supported
- **Direct Questions**: "How do I implement a quick sort in Python?"
- **Code-Related Requests**: "Write a function to calculate factorial"
- **Open-Ended Queries**: "What are best practices for clean code?"
- **Contextual Prompts**: "Here's my code, can you suggest improvements?"

### Limited Context Windows
- Standard Copilot: ~200-500 lines of code / a few thousand tokens
- Copilot Chat: **4k tokens** context window
- Tip: Break complex problems into smaller, focused queries

---

## Unit 5: GitHub Copilot Large Language Models (LLMs) (4 min)

### What are LLMs?

AI models trained on vast text data to understand, generate, and manipulate human language.

**Core aspects:**
- **Volume of training data** — diverse sources, broad understanding
- **Contextual understanding** — coherent, contextually relevant output
- **ML & AI integration** — neural networks with billions of parameters
- **Versatility** — adaptable across domains and languages

### Role of LLMs in Copilot
Considers current file, open files, and tabs to generate accurate completions.

### Fine-Tuning LLMs

Training a pretrained model on a smaller, task-specific dataset while leveraging knowledge from the source model.

### LoRA Fine-Tuning (Low-Rank Adaptation)

- Adds smaller trainable parts to each layer instead of changing everything
- Original model remains unchanged, saving time and resources
- Outperforms adapters and prefix-tuning
- "Working smarter, not harder"

---

## Unit 6: Module Assessment (6 min)

### Check Your Knowledge

**Q1: What's GitHub Copilot?**
- ✅ **An assistant for coding, powered by OpenAI.**

**Q2: What role does prompting play in utilizing GitHub Copilot effectively?**
- ✅ **It enhances the quality of code suggestions.**

**Q3: Which rule is a principle of the 4S Method?**
- ✅ **Specify instructions explicitly and in detail.**

**Q4: How does GitHub Copilot handle personal data?**
- ✅ **It actively filters out personal data to protect user privacy.**

**Q5: What is LoRA in the context of fine-tuning LLMs?**
- ✅ **A method that adds trainable elements to each layer without a complete overhaul.**

**Q6: How does Copilot use context to provide suggestions?**
- ✅ **It considers surrounding code, file type, and content of parallel open tabs.**

**Q7: Which strategy improves prompt effectiveness?**
- ✅ **Providing detailed contextual information with clarity.**

---

## Unit 7: Summary (2 min)

### Key Takeaways

- Prompt engineering principles, best practices, and how Copilot learns from prompts
- The process flow: how Copilot processes prompts to generate responses
- Data handling for code suggestions and chat
- LLMs and their role in Copilot and prompting
- How to craft effective prompts for precision and relevance
- How Copilot handles data including secure transmission and content filtering

### References

- [Inside GitHub: Working with the LLMs behind GitHub Copilot](https://github.blog/2023-05-17-inside-github-working-with-the-llms-behind-github-copilot/)
- [How to use GitHub Copilot: Prompts, tips, and use cases](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)
- [How GitHub Copilot handles data](https://resources.github.com/learn/pathways/copilot/essentials/how-github-copilot-handles-data/)

---
