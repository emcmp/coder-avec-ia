# Module P2-01: Building applications with GitHub Copilot agent mode

> **Duration:** 50 min | **XP:** 700 | **Units:** 6
> **URL:** https://learn.microsoft.com/en-us/training/modules/github-copilot-agent-mode/

---

## Overview

Learn how to build applications using GitHub Copilot Agent Mode by prompting autonomous development tasks, using documentation for guidance, and understanding how Agent Mode iteratively manages, refactors, and improves your codebase.

### Learning Objectives

In this module, you'll:

- Understand how to develop with VS Code IDE in a GitHub Codespace.
- Prompt GitHub Copilot agent mode to create an application.
- Leverage documentation files to instruct GitHub Copilot agent mode.
- Understand how GitHub Copilot agent mode iterates over a code base to:
  - Fix errors
  - Refactor code
  - Develop new features

### Prerequisites

- A GitHub account and a fundamental understanding of GitHub Copilot.

---

## Unit 1: Introduction (1 min)

In this module, you learn how to build an application using GitHub Copilot Agent Mode within a GitHub Codespace and the VS Code IDE. You explore how to effectively prompt Agent Mode to autonomously create new applications, use documentation files to clearly guide its behavior, and harness its powerful iteration capabilities. Specifically, you see firsthand how Copilot Agent Mode intelligently interacts with your code base to detect and fix errors, refactor existing code for better maintainability, and autonomously develop new features that allow you to focus more on innovation and less on repetitive coding tasks.

---

## Unit 2: What is GitHub Copilot Agent Mode? (3 min)

GitHub Copilot Agent Mode represents a major advancement in AI-assisted software development. Unlike traditional coding assistants that provide simple autocomplete-style suggestions, Agent Mode functions as an autonomous peer programmer that helps developers accomplish more with less effort. It doesn't just suggest code — it understands your entire workspace, processes tasks dynamically, and iterates on its own output to improve solutions.

With Agent Mode, GitHub Copilot can:

- Create applications from scratch
- Refactor code across multiple files
- Write and run tests
- Migrate legacy code to modern frameworks
- Generate documentation
- Integrate new libraries
- Answer complex questions about a codebase

### How GitHub Copilot agent mode works

One of the most powerful aspects of Agent Mode is its ability to analyze an entire codebase and determine relevant files and dependencies before making changes. Instead of relying solely on the immediate context of a single file, Agent Mode evaluates the broader structure of a project.

When given a task, it:

- Determines the relevant files and dependencies before making edits.
- Suggests and executes code changes while ensuring they align with the project structure.
- Runs terminal commands as needed (compiling code, installing dependencies, running tests).
- Monitors and refines its output, iterating multiple times to remediate issues and improve accuracy.

### Interact with GitHub Copilot

GitHub Copilot offers multiple ways to assist in your development workflow:

- **Inline Suggestions:** Real-time code completions as you type.
- **Copilot Chat:** A dedicated chat panel for coding questions, tailored to your project context.
- **Copilot Edits:** Apply changes across multiple files to align with specific goals.
- **Agent Mode:** Orchestrate development tasks dynamically — refines outputs and iterates multiple times to improve accuracy.

### Benefits of Agent Mode

- Increases productivity while maintaining full control over projects.
- Handles tedious aspects — repetitive edits, dependency management, testing.
- Reduces cognitive load, allowing focus on higher-level design and problem-solving.
- Iterates on its own outputs, helping ensure code quality.

---

## Unit 3: Explore the power of autonomous development assistance (10 min)

### Autonomous operation

Copilot Agent Mode independently analyzes coding requests, dynamically identifies relevant files, determines appropriate terminal commands, and implements comprehensive solutions without explicit step-by-step instructions.

**Example — Create a new REST API endpoint:**

Agent Mode autonomously:

- Creates API routes (`routes/api.js`)
- Updates main application (`app.js`)
- Installs necessary dependencies (`npm install express`)
- Generates test cases (`tests/api.test.js`)

### Handling complex, multi-step tasks

**Example — Integrate a new database into an existing application:**

1. Updates dependencies (`npm install mongoose`)
2. Generates database connection logic (`database.js`)
3. Modifies environment configuration (`.env`)
4. Creates relevant data model definitions (`models/userModel.js`)
5. Writes associated automated tests (`tests/userModel.test.js`)

### Multi-step orchestration workflows

#### Draft-review-accept workflow

**Scenario:** Adding user authentication to an application

1. **Draft phase:** Agent Mode generates:
   - Authentication middleware (`middleware/auth.js`)
   - User login routes (`routes/auth.js`)
   - Password hashing utilities (`utils/password.js`)
   - Basic frontend login form (`views/login.html`)

2. **Review phase:** Agent Mode evaluates its own draft:
   - Identifies potential security vulnerabilities in password handling
   - Suggests improvements to error handling patterns
   - Recommends additional validation for edge cases
   - Proposes unit tests for critical authentication functions

3. **Accept phase:** Developer reviews the refined, PR-ready implementation:
   - Complete feature with built-in security best practices
   - Comprehensive error handling and validation
   - Ready-to-merge code that follows project conventions
   - Documentation and tests included from the start

> **Note:** Each handoff in Agent Mode consumes ~1 PRU. A 2-step draft–review sequence typically uses 2–3 PRUs. See [GitHub Copilot billing and requests](https://docs.github.com/en/copilot/concepts/billing/copilot-requests).

#### Automated foundation building

**Scenario:** Setting up a new microservice

Agent Mode automatically generates:

- Project structure with standard directories (`src/`, `tests/`, `config/`)
- Package configuration (`package.json`, `Dockerfile`, `.gitignore`)
- Testing framework setup (`jest.config.js`, sample test files)
- CI/CD pipeline configuration (`.github/workflows/test.yml`)
- Environment configuration templates (`.env.example`, `config/default.js`)
- Basic monitoring and logging setup (`utils/logger.js`, health check endpoints)

**Developer focuses on:**

- Implementing specific business logic and domain models
- Customizing the generated foundation for unique requirements
- Adding specialized integrations and custom workflows

#### Advanced reasoning capabilities

For complex scenarios requiring deeper analysis:

- **Architectural decision analysis:** Evaluate trade-offs between implementation approaches.
- **Cross-system impact assessment:** Understand how changes affect multiple components.
- **Performance optimization strategies:** Identify bottlenecks and suggest improvements.
- **Security vulnerability analysis:** Detect and propose fixes for potential security issues.

> **Note:** Premium reasoning provides richer context and deeper analysis but often doubles PRU consumption (~4+ PRUs per request vs. ~2 standard). See [GitHub Copilot billing and requests](https://docs.github.com/en/copilot/concepts/billing/copilot-requests).

### Using intelligent tools and context awareness

Agent Mode uses context from project files, dependencies, and prior actions.

**Example — Deploying a React application:**

- Recognizes project type via `package.json`
- Runs suitable build scripts (`npm run build`)
- Prepares deployment scripts aligned with existing workflow contexts

### Iterative improvement and self-healing

If an error occurs, Agent Mode autonomously detects, corrects, and revalidates solutions.

**Example — Generated unit tests initially fail due to a syntax error:**

- Detects the cause of failure
- Applies a corrective solution
- Re-runs the tests until they pass successfully

### Ensuring user control and oversight

Every action proposed by Agent Mode can be reviewed, adjusted, or reverted at any time.

**Example — Agent Mode proposes extensive changes to authentication logic:**

- Review summarized changes in a pull request
- Request specific modifications or revisions
- Easily undo or adjust changes as required

### Limitations and practical considerations

Agent Mode may struggle with:

- Specialized domain logic
- Nuanced business rules
- Missing critical project context

**Example:** Poorly documented custom business logic can lead to less accurate or incomplete solutions, increasing the need for manual review.

---

## Unit 4: GitHub skills exercise (28 min)

### Exercise overview

In this hands-on skills session, you develop **OctoFit Tracker**, a social fitness app designed to help students stay active and compete with their peers.

### Workshop objectives

By the end of this workshop, you will:

- Set up a development environment using GitHub Codespaces.
- Use GitHub Copilot to accelerate app development.
- Implement core features of OctoFit Tracker with Copilot Agent Mode.
- Apply best practices for prompting and refining AI-generated code.

### Application features

- User profiles for students and gym teachers.
- Activity tracking to monitor fitness progress.
- Team creation and management for collaborative goals.
- Leaderboards to rank student performance.
- Personalized workout suggestions to help students improve.

### Hands-on exercise steps

1. Set up a GitHub Codespace for development.
2. Install and configure GitHub Copilot.
3. Use Copilot Agent Mode to generate and refine key app components.
4. Implement fitness tracking, leaderboards, and user profiles with AI assistance.
5. Test and optimize AI-generated code.

> **Note:** You don't need to modify any workflow files. Altering workflow contents can break the exercise's ability to validate your actions.

Launch the exercise at: https://go.microsoft.com/fwlink/?linkid=2320040

---

## Unit 5: Module Assessment (5 min)

### Check Your Knowledge

**Q1: In what key way does GitHub Copilot Agent Mode differ from traditional AI-assisted coding tools?**
- ❌ It exclusively relies on user-provided step-by-step instructions to generate code.
- ✅ **It dynamically analyzes entire projects, autonomously performs multi-step tasks, and iteratively refines its outputs.**
- ❌ It primarily suggests code snippets based on the immediate context of a single open file.
- ❌ It provides real-time inline suggestions but cannot autonomously refactor or execute code.

**Q2: Which approach describes how GitHub Copilot Agent Mode iteratively improves its generated solutions?**
- ❌ It suggests initial solutions, then requires manual developer intervention to run tests and debug.
- ✅ **It automatically identifies issues through testing, autonomously corrects errors, and repeats the cycle to refine the solution.**
- ❌ It only generates code once per task and relies on manual review to make improvements.
- ❌ It delegates all code improvements entirely to external testing frameworks.

**Q3: You instruct Agent Mode to migrate a legacy JavaScript application to a modern framework. What actions would it likely perform autonomously?**
- ❌ Provide inline code completions only for individual files.
- ✅ **Identify relevant files, update dependencies, refactor existing code across multiple files, and iteratively verify changes by running tests.**
- ❌ Generate new documentation explaining why the migration should occur.
- ❌ Prompt the developer for manual inputs at each step.

**Q4: What is the role of project documentation files when working with GitHub Copilot Agent Mode?**
- ❌ They serve exclusively as reference documents for developers.
- ✅ **They help Agent Mode understand the project's intended behavior, influencing how it autonomously executes tasks.**
- ❌ They restrict Agent Mode's access to code files.
- ❌ Agent Mode completely ignores documentation files.

**Q5: What is an important limitation developers should consider when using GitHub Copilot Agent Mode?**
- ❌ It requires manual configuration after every code generation.
- ✅ **It may struggle with highly specialized domain knowledge or nuanced business logic that lacks clear patterns.**
- ❌ It only supports generating code snippets.
- ❌ It cannot analyze project structure and dependencies.

---

## Unit 6: Summary (3 min)

### Key Takeaways

**GitHub Copilot Agent Mode** enhances the software development workflow, empowering you to tackle complex tasks with unprecedented efficiency. Together with **GitHub Codespaces** and **Visual Studio Code**, Agent Mode uses your project's documentation, context, and insights to autonomously drive improvements, fix issues, and develop new features.

Now that you completed this module, you should be able to:

- Develop applications using VS Code IDE within GitHub Codespaces.
- Prompt GitHub Copilot Agent Mode to autonomously build new applications.
- Use documentation files to guide GitHub Copilot Agent Mode effectively.
- Understand how GitHub Copilot Agent Mode iteratively fixes errors, refactors code, and develops new features across a project.

### References

- [Features of GitHub Copilot](https://github.com/features/copilot)
- [GitHub Copilot: The Agent Awakens](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens)
- [Introducing GitHub Copilot Agent Mode (preview)](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)
- [Developing in Visual Studio Code](https://code.visualstudio.com/docs)
- [Premium Request Units (PRUs) - GitHub Documentation](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)

---
