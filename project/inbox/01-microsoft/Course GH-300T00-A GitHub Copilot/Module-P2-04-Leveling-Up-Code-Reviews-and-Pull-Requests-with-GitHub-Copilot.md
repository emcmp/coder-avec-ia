# Module P2-04: Leveling up code reviews and pull requests with GitHub Copilot

> **Duration:** 35 min | **XP:** 700 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/code-reviews-pull-requests-github-copilot/

---

## Overview

This module introduces how GitHub Copilot enhances code reviews by accelerating review cycles, catching issues, and enforcing best practices.

### Learning Objectives

By the end of this module, you'll be able to:

- Explain how GitHub Copilot streamlines code reviews and pull requests.
- Identify the key features Copilot adds to the review process.
- Request and interpret Copilot reviews on GitHub.com and understand their limits.
- Run Copilot reviews locally in your IDE and apply custom instructions.
- Leverage Premium Request Units (PRUs) for deeper, context-rich analysis.
- Automate Copilot reviews across repositories with rulesets and status checks.
- Apply Copilot's suggestions responsibly, combining them with human judgment and testing.

### Prerequisites

- A GitHub account.
- GitHub Copilot enabled on your account (Copilot Pro, Copilot Pro+, Business, or Enterprise plan recommended for full code review features).
- Basic familiarity with pull requests and code reviews.
- A development environment such as Visual Studio Code or JetBrains IDEs (optional but recommended).

---

## Unit 1: Introduction (5 min)

Code reviews are vital for maintaining code quality and collaboration, but they often create bottlenecks. GitHub Copilot helps resolve these challenges by acting as a collaborative reviewer and assistant — catching issues, suggesting improvements, drafting summaries, and even auto-fixing vulnerabilities.

**Premium Request Units (PRUs)** power Copilot's most advanced capabilities. Each time you ask Copilot to perform a premium-level task — such as reviewing an entire pull request, running in agent mode, or generating complex multi-step suggestions — it consumes a PRU.

---

## Unit 2: What GitHub Copilot adds to the review process (5 min)

### Key features of Copilot in code reviews

- **PR Summaries:** Copilot automatically drafts pull request descriptions with a clear summary of changes and affected files.
- **Security Fixes:** With Copilot code review integrated into GitHub Code Scanning, vulnerabilities are flagged across languages.
- **Line-by-Line Explanations:** Reviewers can highlight code and ask Copilot to explain functionality.
- **Drafting Comments:** Copilot generates review comments based on best practices or team guidelines.
- **Reviews in Your IDE:** Copilot reviews code inside your IDE before opening a pull request.

### How PRUs unlock advanced review capabilities

PRUs power advanced capabilities. Assigning Copilot as a PR reviewer uses a PRU each time it posts comments. When combined with custom `.github/copilot-instructions.md` files, PRU-powered reviews align with your team's rules.

**Example without Copilot:** A PR might include vague comments like *"Fix security issue here"*.

**With Copilot + PRUs:** "The use of `exec()` introduces a code injection vulnerability. Consider replacing it with `subprocess.run()` for safer command execution."

### Five different ways Copilot review helps developers

1. **Code review Suggestions:** Highlight code and ask Copilot to suggest improvements — paste into review comments.
2. **Copilot reviews across multiple languages:** Copilot highlights areas that don't follow best practices for each language.
3. **Formatting data in Pull requests:** Copilot flags poorly formatted tables and proposes cleaner versions.
4. **Writing Effective Pull Request Summaries:** Generate draft summaries or outlines from the PR description editor.
5. **Explaining and Reviewing Code:** Ask Copilot to explain unfamiliar changes; run initial reviews before requesting teammate feedback.

---

## Unit 3: Using Copilot as a reviewer in GitHub.com (5 min)

### How to code review on GitHub.com

1. **Open or create a pull request.**
2. **Add Copilot as a reviewer:** In the **Reviewers** menu, select **Copilot**.
3. **Wait for the review to complete:** Typically finishes in less than 30 seconds.
4. **Review Copilot's comments:** Scroll through the pull request to read feedback left as comments.
5. **Apply Copilot's suggested changes:** Commit fixes directly from the PR interface.

   Example prompt: `"Suggest a fix for this review comment: Replace exec() with a safer function."`

   Copilot proposes a patch using `subprocess.run()`. The developer tests it locally, commits, and ensures tests pass.

6. **Understanding the limits:** Copilot's role is advisory. It doesn't approve or reject pull requests, and its comments don't count toward required approvals. Rely on human reviewers for architectural decisions, nuanced trade-offs, and final sign-off.

---

## Unit 4: Catching issues early and automating reviews with Copilot (5 min)

### Running Copilot reviews locally in your IDE

Create a `.github/copilot-instructions.md` file with rules such as:

- "Focus on security and avoid unsafe string interpolation."
- "Ensure functions have docstrings explaining parameters and return types."

**Use case:** A developer adds repetitive code in a TypeScript service. Copilot flags it and suggests extracting a helper function — fixed before pushing.

### Creating path-specific custom instructions

1. Create `.github/instructions/` directory in the repository root.
2. Add `.instructions.md` files with `applyTo` frontmatter using glob syntax:

```markdown
applyTo: "app/models/**/*.rb"
```

```markdown
applyTo: "**/*.ts,**/*.tsx"
```

To apply to all files: `applyTo: "**"`

### Leverage PRUs for deeper analysis in your IDE

PRU-powered reviews in your IDE give deeper, context-rich analysis — spotting style violations, security gaps, and best-practice issues earlier in the development cycle.

### Automating reviews and scaling with Rulesets

Configure rulesets so Copilot is automatically assigned to all PRs targeting protected branches. Pair with status checks:

- Copilot reviews for style and readability.
- Code scanning flags vulnerabilities.
- Tests validate functionality.

### Automatic reviews for your account (Copilot Pro/Pro+)

1. Click profile picture → **Your Copilot**.
2. Find **Automatic Copilot code review** option.
3. Select **Enabled**.

### Automatic reviews for a repository

1. Repository → **Settings** → **Rulesets**.
2. Create **New branch ruleset**.
3. Under Branch rules, check **Require a pull request before merging**.
4. Select **Request pull request review from Copilot**.
5. Click **Create**.

### Automatic reviews across an organization

1. Profile picture → **Your organizations** → **Settings**.
2. **Repository → Rulesets** → **New ruleset**.
3. Add target repositories with inclusion/exclusion patterns.
4. Enable **Require a pull request before merging** → **Request pull request review from Copilot**.
5. Click **Create**.

---

## Unit 5: Measuring impact and optimizing premium request units (PRUs) (5 min)

### Understanding PRUs

PRUs are tokens that unlock Copilot's "extra gear." Routine, lightweight tasks often don't consume PRUs. Premium-level tasks do — e.g., reviewing a 1,500-line change across multiple files, applying `.github/copilot-instructions.md`, checking for security and style issues.

### Why PRUs matter for teams

- **Get deeper analysis:** Spot subtle vulnerabilities, duplicated logic, or style violations across large diffs.
- **Enforce consistency:** Apply the same checks across every pull request automatically.
- **Handle bursts of activity:** Keep quality steady during busy release cycles.

### Measuring the impact of PRU-powered reviews

Track metrics such as:

- **PR lead time:** How quickly pull requests go from open to merged.
- **Quality indicators:** Reduction in post-merge security or style issues.
- **Developer experience:** Feedback on whether Copilot makes reviews faster or clearer.

### Optimizing PRU usage

- **Plan ahead:** Set alerts at 75%, 90%, and 100% of monthly PRU usage.
- **Use PRUs strategically:** Reserve premium reviews for large or high-risk changes.
- **Refine your prompts:** Clean, specific requests reduce unnecessary retries.
- **Scale up if needed:** Consider a higher-tier Copilot plan if consistently maxing out PRUs.

---

## Unit 6: Exercise — GitHub Copilot code review (5 min)

In this exercise, you will:

- Use GitHub Copilot to review code directly in VS Code for immediate feedback.
- Request Copilot code reviews on pull requests.
- Customize Copilot's review considerations with repository-specific instructions.
- Configure automatic code reviews using repository rulesets.

Launch the exercise at: https://github.com/skills/copilot-code-review

---

## Unit 7: Summary (5 min)

### Key Takeaways

Copilot is most effective when treated as a **collaborator**, not a replacement.

**Best practices:**

- Run Copilot reviews in your IDE before pushing.
- Use `.github/copilot-instructions.md` to align Copilot's feedback with team standards.
- Treat Copilot's comments as accelerators, not mandates. Continue using CI/CD pipelines, scans, and other best practices.
- Always validate and test fixes before merging.

### Learn more

- [About GitHub Copilot Code Review](https://docs.github.com/copilot/concepts/agents/code-review)
- [Using GitHub Copilot code review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
- [Adding Repository Custom Instructions for GitHub Copilot](https://docs.github.com/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [Configuring Automatic Code Review by GitHub Copilot](https://docs.github.com/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review)

---
