# Module 9: Develop unit tests using GitHub Copilot tools

> **Duration:** 1h 08 | **XP:** 900 | **Units:** 8
> **URL:** https://learn.microsoft.com/en-us/training/modules/develop-unit-tests-using-github-copilot-tools/

---

## Overview

This module explores using GitHub Copilot and GitHub Copilot Chat to create unit tests. Exercises provide practical experience creating unit test projects and running unit tests in Visual Studio Code.

### Learning Objectives

By the end of this module, you're able to:

- Create unit tests using GitHub Copilot in Visual Studio Code.
- Create unit tests that target edge cases and specific conditions using GitHub Copilot in Visual Studio Code.
- Use Visual Studio Code, the .NET SDK, and the C# Dev Kit extension to create a test project and verify that your unit tests build and run successfully.

### Prerequisites

- One or more years of software development experience is recommended.
- Experience developing C# applications using Visual Studio Code and the C# Dev Kit extension is recommended.
- An active subscription for GitHub Copilot is required for either your personal GitHub account or a GitHub account managed by an organization or enterprise.
- Experience using GitHub Copilot in Visual Studio Code to explain, debug, and generate code.

> **Important:** To complete this training, you must have an active subscription for GitHub Copilot in your personal GitHub account (includes the GitHub Copilot Free plan), or you must be assigned to a subscription managed by an organization or enterprise.

---

## Unit 1: Introduction (3 min)

Unit testing is a crucial aspect of software development that ensures the functionality of individual components within a system.

This module introduces how to generate unit tests with GitHub Copilot in Visual Studio Code. The module focuses on using the Chat view in Agent mode — with Ask and Plan modes available for analysis and planning — and ghost text suggestions to create and maintain unit tests for the xUnit testing framework. Visual Studio Code and the C# Dev Kit extension provide the environment that hosts your test project and runs the tests.

**Topics covered:**

- Using Visual Studio Code and the C# Dev Kit to host and run unit tests.
- Generating unit tests in the GitHub Copilot Chat view using Agent mode (with Ask mode for upfront analysis).
- Planning and automating multi-file test workflows with the Plan and Agent agents.
- Extending tests with ghost text suggestions and fixing failing tests with GitHub Copilot.
- Developing unit tests for a C# application end to end.

---

## Unit 2: Examine Visual Studio Code support for unit testing (7 min)

Before generating unit tests with GitHub Copilot, your project needs a working test framework and a way to run tests inside Visual Studio Code.

### Visual Studio Code support for unit tests

To create and run C# unit tests in Visual Studio Code, you need:

- The .NET 8.0 SDK or later.
- The C# Dev Kit extension for Visual Studio Code.
- A test framework package added to your project.

### C# Dev Kit support for unit tests

The C# Dev Kit extension provides:

- **Test Explorer:** A tree view showing all test cases in your workspace (beaker icon on Activity bar).
- **Run/Debug test cases:** Green play buttons in the editor next to each test class and method.
- **View test results:** Results reflected in editor decorations and Test Explorer.
- **Testing commands:** Commands like `Test: Run All Tests` in the Command Palette.
- **Testing settings:** Settings that control test discovery and runtime behavior.

Supported test frameworks: **xUnit**, **NUnit**, **MSTest**.

### Create a test project using the Command Palette

Open the Command Palette (**Ctrl+Shift+P** / **Cmd+Shift+P**), select **.NET: New Project...**, then choose the framework:

#### xUnit

Select **xUnit Test Project**, provide a name and location. Creates a project with:

- `Microsoft.NET.Test.Sdk`
- `xUnit`
- `xunit.runner.visualstudio`
- `coverlet.collector`

```dotnetcli
dotnet add [location of your test csproj file] reference [location of the csproj file for project to be tested]
```

#### NUnit

Select **NUnit3 Test Project**. Creates a project with:

- `Microsoft.NET.Test.Sdk`
- `NUnit`
- `NUnit3TestAdapter`

#### MSTest

Select **MSTest Test Project**. Creates a project with:

- `Microsoft.NET.Test.Sdk`
- `MSTest.TestAdapter`
- `MSTest.TestFramework`
- `coverlet.collector`

### Run and manage unit tests in Visual Studio Code

- **Run/Debug from the editor:** Select the green play button next to a class or method.
- **Test Explorer:** Run or debug individual tests, groups, or the full suite.
- **View test results:** Editor decorations and Test Explorer reflect test state.
- **Testing commands:** `Test: Run All Tests`, `Test: Debug Failed Tests`, `Test: Show Output`.
- **Testing settings:** Search for `Testing` in Settings.

### The unit testing workflow with GitHub Copilot

1. **Set up the environment:** Create a test project and reference the project under test.
2. **Generate test code:** Use GitHub Copilot in the Chat view to generate unit tests.
3. **Run and maintain tests:** Use Test Explorer to run tests, then use GitHub Copilot to extend coverage and fix failures.

---

## Unit 3: Generate unit tests with the GitHub Copilot Chat view (8 min)

The Chat view is the primary place to generate unit tests with GitHub Copilot.

### Open the Chat view

- Press **Ctrl+Alt+I** (Windows/Linux) or **Cmd+Alt+I** (macOS).
- Select the GitHub Copilot icon in the title bar, then select **Toggle Chat**.

Three configuration choices affect every prompt:

- **Agent Target:** Where the agent runs (select **Local** for full workspace access).
- **Agent:** The role — built-in local agents are **Ask**, **Plan**, and **Agent**.
- **Permission level:** **Default Approvals**, **Bypass Approvals**, or **Autopilot**.

For unit test generation, the recommended starting point is the **Agent** with **Default Approvals**.

### Use Ask mode to explore testing options first

**Ask mode** answers questions without modifying files. Use it to:

- Compare candidate test cases for a complex method.
- Identify edge cases and boundary conditions worth covering.
- Get a recommendation for a test framework or assertion style.
- See an example test in chat without writing it to disk.

### Set up a testing framework with `/setupTests`

The `/setupTests` slash command recommends a test framework and walks through configuration steps. In Agent mode, it can also install packages and create the test project.

1. Open the Chat view, select **Agent**.
2. Enter `/setupTests`.
3. Confirm tool invocations to install packages, scaffold the test project, and recommend testing extensions.

### Generate tests with `/tests`

The `/tests` slash command generates unit tests for the code currently active in the editor. In Agent mode, tests are written directly into an appropriate test file.

**For an entire file:**

1. Open the application code file.
2. Enter `/tests` with guidance (e.g., `/tests Generate unit tests for the methods in this file. Include success, failure, and edge cases.`).
3. Confirm tool invocations.
4. Review the diff, then **Keep** or **Undo**.

**For a specific method:**

1. Select the method or block you want to test.
2. Enter `/tests` with guidance referencing the selection.
3. Review and accept/discard changes.

### Generate tests with a natural-language prompt

Examples:

- "Generate xUnit tests for the methods in this file and add them to the Calculator.Tests project."
- "Write unit tests for the `CalculateDiscount` method, including edge cases for negative values and zero. Run the tests after writing them."

### Add context to your prompts

- **Add Context button:** Add files, folders, symbols, or the current editor selection.
- **Drag and drop:** Drag files from Explorer onto the Chat view.
- **`#` mentions:** Type `#` followed by a name. Use `#selection` for the current selection, `#codebase` for workspace search.
- **External files:** Attach markdown files (contributor guidelines, test conventions) through **Add Context**.

### Review and refine the Agent's changes

- **Review the diff:** Each file the Agent changes opens with proposed edits highlighted.
- **Keep or Undo:** Accept or revert changes (including individual hunks).
- **Build and run:** Build and run tests from Test Explorer or the terminal.
- **Iterate:** Use follow-up prompts to refine.

### Personalize test generation with custom instructions

Store custom instructions in a `*.instructions.md` file. Use `applyTo: tests/**` to scope to test files. Custom instructions can:

- Specify preferred testing frameworks.
- Define naming conventions for test classes and methods.
- Set code structure preferences (e.g., Arrange-Act-Assert pattern).
- Request specific test patterns (e.g., parameterized tests for boundary values).

> **Important:** Generated test cases might not cover every scenario. Manual review is still required.

---

## Unit 4: Plan and automate test workflows using the Plan and Agent modes (8 min)

The **Plan** agent and longer **Agent** sessions handle larger testing tasks that need structure.

### Compare the Ask, Plan, and Agent agents

| Agent | Best for | Typical use in unit testing |
|---|---|---|
| **Ask** | Read-only analysis and Q&A | Explore edge cases, framework choices, or example tests. |
| **Plan** | Structured, step-by-step implementation plans | Design a multi-file test strategy for review. |
| **Agent** | Autonomous, multi-file coding workflows | Generate tests, run them, and iterate on failures. |

### Use the Plan agent to design a test strategy

1. Open the files containing the code to test.
2. Select **Plan** from the agent picker (or type `/plan`).
3. Enter a prompt: `I need unit tests for the methods in the Calculator class. Use xUnit. Include tests for success, failure, and boundary conditions.`
4. Answer any clarifying questions.
5. Review the proposed plan (high-level summary, step breakdown, verification steps, documented decisions).
6. Hand off the plan for implementation.

### Use the Agent to automate test workflows

1. Open the file containing the code to test.
2. Select **Agent** from the agent picker.
3. Let the Agent determine context (or attach additional context manually).
4. Optionally, select **Tools** to choose allowed tools.
5. Enter a prompt: `Ensure that a suitable unit test project is prepared for the selected code file. Create a test file that includes unit tests for all methods. Use xUnit. Run the tests to ensure expected results.`
6. Monitor and confirm/reject tool invocations.
7. Review files, keep or discard changes.

### Decide when to use Plan, Agent, or both

- **Plan first** when the task involves ambiguity, multiple files, or team conventions to confirm.
- **Agent directly** when the task is well defined and you want to skip planning.
- **Plan then hand off to Agent** for a reviewable plan plus autonomous implementation.

---

## Unit 5: Extend tests with ghost text and fix failing tests (7 min)

### Extend test coverage with ghost text suggestions

Ghost text is the inline code completion that appears as you type. When a test file already contains test cases, GitHub Copilot uses existing patterns to suggest similar test cases.

1. Open a test file with at least one or two complete test cases.
2. Position cursor at the end of the last test case, press **Enter**.
3. Start typing a new test method or write a descriptive comment.
4. Press **Tab** to accept, **Esc** to dismiss.
5. Refine as needed.

Ghost text works best when:

- The test file shows the pattern to follow.
- The method under test is referenced through a `using` directive.
- Your comment clearly states the scenario.

### Fix failing tests from Test Explorer

1. Run tests from Test Explorer or the green play button.
2. Hover over a failing test in Test Explorer.
3. Select the **Fix Test Failure** button (sparkle icon).
4. Review the proposed fix.
5. Apply with **Keep** or discard with **Undo**.

### Fix failing tests with `/fixTestFailure`

1. Open the Chat view.
2. Enter `/fixTestFailure`.
3. Optionally attach additional context.
4. Follow suggestions to fix, then rerun.

### Let the Agent monitor and fix failures automatically

Use Agent to run tests, monitor output, identify failures, and automatically fix and rerun.

### Choose the right tool for the job

- **Ghost text:** Add more test cases to an existing file with an established pattern.
- **Fix Test Failure in Test Explorer:** A single test fails — fast, focused fix.
- **`/fixTestFailure` in Chat view:** Attach extra context or work through several failures.
- **Agent-driven test runs:** Run, diagnose, and apply fixes across multiple files in one session.

---

## Unit 6: Exercise — Develop unit tests using GitHub Copilot (25 min)

> **Important:** To complete this exercise, you need an active GitHub account and a Visual Studio Code environment configured for C# development.

In this exercise, you use GitHub Copilot to accelerate the development of unit tests for a C# application. Tasks include:

- Use the Chat view and Agent to create a new test class.
- Use the Chat view and Agent mode to create unit tests.

Launch the exercise at: https://go.microsoft.com/fwlink/?linkid=2320040

---

## Unit 7: Module Assessment (7 min)

### Check Your Knowledge

**Q1: Which Visual Studio Code feature provides a tree view that lists every test case in your workspace and lets you run or debug them?**
- ✅ **The Test Explorer view provided by the C# Dev Kit extension.**
- ❌ The Chat view in GitHub Copilot.
- ❌ The Solution Explorer view.

**Q2: You want to create a new xUnit test project in Visual Studio Code. What's the most direct way?**
- ✅ **Open the Command Palette and run `.NET: New Project...`, then select `xUnit Test Project`.**
- ❌ Right-click the editor and select `Generate Code > Generate Tests`.
- ❌ Open the Chat view and run the `/newproject` slash command.

**Q3: Which slash command in the Chat view generates unit tests for the code that's currently active in the editor?**
- ✅ **`/tests`**
- ❌ `/setupTests`
- ❌ `/explain`

**Q4: What are the three built-in agents available in the GitHub Copilot Chat view?**
- ✅ **Ask, Plan, and Agent.**
- ❌ Ask, Edit, and Agent.
- ❌ Plan, Debug, and Agent.

**Q5: Your team has a multi-step testing task. Which agent is best suited to autonomously complete this work?**
- ✅ **The Agent.**
- ❌ The Ask agent.
- ❌ The Plan agent.

**Q6: You want GitHub Copilot to generate unit tests for the active file and write them directly into a test project. Which agent is the recommended starting point?**
- ✅ **Agent.**
- ❌ Ask.
- ❌ Plan.

**Q7: A test file already contains several xUnit test methods. You want to quickly add tests for more edge cases. Which feature is the best fit?**
- ✅ **Ghost text inline suggestions in the editor.**
- ❌ The `/setupTests` slash command in the Chat view.
- ❌ The Plan agent in the Chat view.

**Q8: A unit test fails in Test Explorer. What's the fastest way to ask GitHub Copilot to propose a fix?**
- ✅ **Hover over the failing test in Test Explorer and select the Fix Test Failure button (sparkle icon).**
- ❌ Run the `/setupTests` slash command in the Chat view.
- ❌ Right-click the test file and select `Generate Code > Generate Tests`.

---

## Unit 8: Summary (3 min)

### Key Takeaways

In this module, you learned how to use GitHub Copilot and Visual Studio Code to create and maintain unit tests for C# projects. You examined the VS Code testing environment provided by the .NET SDK and the C# Dev Kit extension, including Test Explorer, run/debug commands, and supported frameworks (xUnit, NUnit, MSTest). You used the Chat view in Agent mode with `/setupTests` and `/tests` slash commands, and saw how Ask mode helps explore edge cases before letting the Agent change files. You explored how the Plan agent produces a reviewable test strategy, and how the Agent automates multi-file workflows. Finally, you learned how ghost text extends coverage, and how Fix Test Failure and `/fixTestFailure` help diagnose and resolve failures.

**Main takeaway:** GitHub Copilot lets you move through every stage of the unit testing workflow — setup, generation, extension, and repair — without leaving Visual Studio Code, while the C# Dev Kit keeps the test project organized and runnable.

### Additional Reading

- [GitHub Copilot documentation](https://docs.github.com/copilot)
- [GitHub Copilot in Visual Studio Code](https://code.visualstudio.com/docs/copilot/overview)
- [Test with GitHub Copilot](https://code.visualstudio.com/docs/copilot/guides/test-with-copilot)
- [Set up a test-driven development flow in VS Code](https://code.visualstudio.com/docs/copilot/guides/test-driven-development-guide)
- [GitHub Copilot in Visual Studio Code - Cheat Sheet](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)
- [Testing with the C# Dev Kit](https://code.visualstudio.com/docs/csharp/testing)

---
