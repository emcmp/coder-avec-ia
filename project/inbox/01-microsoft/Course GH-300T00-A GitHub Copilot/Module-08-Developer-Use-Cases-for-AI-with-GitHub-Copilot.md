# Module 8: Developer use cases for AI with GitHub Copilot

> **Duration:** 49 min | **XP:** 800 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/

---

## Overview

This module explores how GitHub Copilot streamlines developer productivity through AI-powered features. It enhances the Software Development Life Cycle (SDLC), aligns with developer preferences, and identifies key limitations. Additionally, it measures productivity gains effectively.

### Learning Objectives

By the end of this module, you're able to:

- Identify specific ways GitHub Copilot integrates seamlessly into developer workflows, enhancing the overall development experience and supporting individual coding preferences.
- Explore GitHub Copilot's potential impact on different stages of the Software Development Lifecycle.
- Evaluate the limitations of AI-assisted coding and measure its impact on development efficiency.

### Prerequisites

- Basic understanding of software development concepts and practices.
- Familiarity with at least one programming language.
- A GitHub account and basic knowledge of GitHub functionalities.
- Access to GitHub Copilot requires either a personal GitHub account or an account managed by an organization or enterprise. For learning purposes, the Copilot Free option with usage limits should be sufficient.

> **Tip:** GitHub Copilot offers a free tier with **2,000 code autocompletes and 50 chat messages per month**. To get started, open Visual Studio Code, click on the GitHub Copilot icon, and then click "Sign in to Use GitHub Copilot for Free". Log in to your GitHub account in the window that opens in the browser. Educators, Students and, select open-source maintainers can receive Copilot Pro for free — learn how at: https://aka.ms/Copilot4Students.

---

## Unit 1: Introduction (3 min)

GitHub Copilot is an intelligent coding assistant that enables developers to write code faster. It seamlessly integrates with popular Integrated Development Environments (IDEs), offering contextual code suggestions that align with your coding style and preferences.

In this module, we look at different ways developers can use GitHub Copilot. We show how it helps increase productivity, fits with developer preferences, and affects the Software Development Lifecycle (SDLC). This integration helps your team save time, improve code quality, and increase developer satisfaction.

---

## Unit 2: Boost developer productivity with AI (10 min)

GitHub Copilot streamlines development workflows, allowing developers to focus on solving complex problems rather than getting bogged down in routine coding tasks.

### Common AI use cases for streamlining developer productivity

#### Accelerate learning new programming languages and frameworks

- **Code suggestions:** Offers context-aware code snippets that illustrate the usage of unfamiliar functions and libraries.
- **Language support:** Supports a wide range of languages, helping you transition smoothly from one language to another.
- **Documentation integration:** Provides inline suggestions related to API usage and function parameters, reducing the need to constantly refer to external documentation.

#### Minimizing context switching

- **In-editor assistance:** Provides code suggestions directly in the IDE, minimizing the need to search for solutions online.
- **Quick references:** Suggests correct method calls and parameters when working with APIs or libraries.
- **Code completion:** Autocompletes repetitive code patterns, allowing developers to maintain their train of thought.

#### Enhanced documentation writing

- **Inline comments:** Generates contextually relevant inline comments explaining complex code sections.
- **Function descriptions:** Automatically suggests function descriptions, including parameter explanations and return value details.
- **README generation:** Assists in creating project README files by suggesting structure and content based on the codebase.
- **Documentation consistency:** Helps maintain consistent documentation style across a project.

#### Automating the boring stuff

- **Boilerplate code generation:** Quickly produces boilerplate code for common functionalities (REST APIs, class structures).
- **Sample data creation:** Generates realistic sample data for testing.
- **Writing unit tests:** Suggests test cases and generates entire unit tests based on the code.
- **Code translation and refactoring:** Assists in code refactoring and converting programming languages.

##### Advanced boilerplate automation scenarios

- **Database schema and ORM setup:** Generate complete database models, migration files, and ORM configurations.
- **API endpoint scaffolding:** Create entire REST API endpoints with proper error handling, validation, and documentation comments.
- **Configuration management:** Generate configuration files for different environments (dev, staging, production).
- **Test infrastructure:** Set up complete testing frameworks including mock data, fixtures, and helper functions.

> **Note:** Complex multi-file generations consume more PRUs (~3–5 PRUs for complete project scaffolding). Simple boilerplate tasks typically use 1–2 PRUs. Learn more about [Premium Request Units](https://docs.github.com/en/copilot/concepts/billing/copilot-requests).

##### Story-driven development automation

- **Feature scaffolding:** Convert high-level feature descriptions into complete code structures with proper separation of concerns.
- **Business logic implementation:** Generate core functionality based on business rules described in plain language.
- **Integration patterns:** Create standardized patterns for connecting different parts of your application ecosystem.
- **End-to-end automation:** From a single user story, generate the complete feature stack including backend logic, database changes, API documentation, and basic frontend implementation.
- **Quality built-in:** Automatically include error handling, input validation, logging, and basic security considerations.

#### Accelerating pull request workflows

##### PR-ready code generation

- **Complete implementations:** Generate full feature implementations with proper error handling, logging, and edge case coverage.
- **Consistent code patterns:** Ensure new code follows established project conventions and architectural patterns.
- **Documentation integration:** Include inline comments, function documentation, and README updates as part of the initial code generation.
- **Test coverage:** Generate corresponding unit tests, integration tests, and example usage alongside new functionality.

##### Intelligent code review assistance

- **Pre-submission quality checks:** Identify potential issues, suggest improvements, and ensure code quality standards are met.
- **Review comment drafting:** Generate constructive, specific review comments with code examples.
- **Rapid iteration:** When reviewers request changes, Copilot can immediately generate multiple implementation alternatives.
- **Documentation refinement:** Automatically improve code comments and documentation based on reviewer feedback.
- **Conflict resolution:** Assist in resolving merge conflicts by understanding the intent of both code branches.

> **Note:** Asking Copilot for multiple refactor drafts in a PR can consume 2–3 PRUs per draft.

##### Collaborative development workflows

- **Code standardization:** Maintain consistent coding styles and patterns across team members.
- **Knowledge sharing:** Generate code that follows team best practices, helping junior developers learn from senior patterns.
- **Context preservation:** Help understand existing code and continue development in the same style when taking over someone else's work.
- **Merge conflict resolution:** Assist in resolving complex merge conflicts.

#### Orchestrated AI workflows

##### Multi-agent development patterns

1. **Draft agent:** Copilot generates initial code implementations based on feature requirements.
2. **Review agent:** A secondary AI reviews the draft for code quality, security issues, and adherence to project standards.
3. **Documentation agent:** Automatically generates or updates documentation based on code changes.
4. **Test agent:** Creates comprehensive test suites for the new functionality.

> **Note:** Each handoff consumes ~1 PRU. A 2-agent draft–review flow typically uses 2–3 PRUs.

##### Advanced reasoning capabilities

- **Enhanced context understanding:** Analyzes larger codebases and more complex relationships between components.
- **Advanced architectural suggestions:** Provides recommendations for system design and integration patterns.
- **Complex refactoring assistance:** Handles sophisticated code transformations while preserving functionality.
- **Multi-file coordination:** Orchestrates changes across multiple files while maintaining consistency.

> **Note:** Premium runs add more context and reasoning but often double PRU consumption (~4+ per request).

##### Automated story completion workflows

- **Requirements parsing:** Analyze user stories and acceptance criteria to generate implementation plans.
- **Feature scaffolding:** Create complete feature structures including controllers, services, models, and tests.
- **Integration setup:** Generate code to integrate new features with existing system components.
- **Quality assurance automation:** Include comprehensive error handling, logging, and monitoring for new features.

#### Personalized code completion

- **Contextual understanding:** Analyzes the development environment and project structure to offer more accurate completions.
- **Learning from patterns:** Learns from coding patterns and preferences, tailoring suggestions accordingly.

---

## Unit 3: Align with developer preferences (7 min)

GitHub Copilot is designed to seamlessly integrate into developers' workflows, adapting to their preferences and coding styles.

### Developer tastes and AI assistance

#### Code generation and completion

- **Multiple suggestions:** Provides multiple code suggestions when faced with ambiguous scenarios.
- **Language-specific idioms:** Suggests language-specific idioms and best practices.

#### Writing unit tests and documentation

- **Test case generation:** Suggests relevant test cases, including edge cases developers might overlook.
- **Documentation stubs:** Generates initial documentation stubs for functions, classes, and modules.
- **Comment expansion:** Expands brief comments into more detailed explanations.

#### Code refactoring

- **Pattern recognition:** Identifies common patterns and suggests more efficient or cleaner alternatives.
- **Modern syntax suggestions:** Suggests modern language features that may be more concise or performant.
- **Consistency maintenance:** Helps maintain consistency across the codebase.

#### Debugging assistance

- **Error explanation:** Provides plain-language explanations of error messages and suggests potential fixes.
- **Log statement generation:** Suggests relevant log statements to help diagnose issues.
- **Test case suggestions:** Suggests additional test cases to help isolate difficult-to-reproduce bugs.

#### Data science support

- **Statistical functions:** Assists in implementing statistical functions and tests.
- **Data visualization:** Suggests code for creating visualizations using Matplotlib, Seaborn, or Plotly.
- **Data preprocessing:** Suggests code for handling missing values, encoding categorical variables, or scaling numerical features.
- **Model evaluation:** Assists in writing code for model evaluation metrics and performance visualization.

#### Preference for streamlined workflows

##### Integrated development experience

- **IDE-native assistance:** Operates directly within popular development environments.
- **Contextual awareness:** Understands the current project context, suggesting relevant code.
- **Minimal configuration:** Works effectively with minimal setup.

##### Autonomous task completion

- **End-to-end feature generation:** Generates complete features from requirements to deployable code, including tests and documentation.
- **Smart defaults:** Chooses sensible defaults for implementation details.
- **Progressive enhancement:** Developers can start with generated code and refine it iteratively.

##### Quality-first automation

- **Built-in best practices:** Generated code incorporates security, error handling, and performance optimizations.
- **Consistency maintenance:** Automated code follows project conventions and team standards.
- **Comprehensive coverage:** Features come with appropriate testing and documentation.

---

## Unit 4: AI in the Software Development Lifecycle (SDLC) (10 min)

### Enhancing the SDLC with GitHub Copilot

#### Requirement analysis

- **Rapid prototyping:** Quickly generate code snippets based on high-level descriptions for faster proof-of-concept development.
- **User story implementation:** Transform user stories into initial function or class definitions.
- **API design:** Suggest API structures based on described functionality.

#### Design & development

- **Boilerplate code generation:** Automatically create repetitive code structures.
- **Design pattern implementation:** Suggest appropriate design patterns based on the problem context.
- **Code optimization:** Offer more efficient code alternatives.
- **Cross-language translation:** Assist in translating concepts between different programming languages.

#### Testing & quality assurance

- **Unit test creation:** Generate test cases based on function signatures and behavior.
- **Test data generation:** Create realistic test data sets.
- **Edge case identification:** Suggest test scenarios that cover edge cases.
- **Assertion suggestions:** Propose appropriate assertions based on expected behavior.

##### Automated testing workflows

- **Test suite architecture:** Design complete testing frameworks including unit, integration, and end-to-end tests.
- **Test automation pipelines:** Generate test configuration files and CI/CD integration.
- **Quality gates:** Create automated quality checks for code standards.
- **Performance testing:** Generate performance benchmarks and load testing scenarios.

#### Deployment

- **Configuration file generation:** Help create deployment configuration files for various environments.
- **Deployment script assistance:** Suggest commands or scripts for common deployment tasks.
- **Documentation updates:** Assist in updating deployment documentation.

#### Maintenance & support

- **Bug fix suggestions:** Propose potential fixes based on error messages and surrounding code.
- **Code refactoring:** Suggest improvements to existing code.
- **Documentation updates:** Keep code comments and documentation in sync with changes.
- **Legacy code understanding:** Help understand and work with unfamiliar or legacy code.

### Building with orchestrated AI workflows

#### Simple agent orchestration patterns

1. **Draft agent (GitHub Copilot):** Generates initial implementation with core functionality, basic unit tests, inline documentation, and integration points.
2. **Review agent:** Analyzes draft code for quality, security, performance, and architectural compliance.

> **Note:** Each handoff consumes ~1 PRU. A 2-agent draft–review flow typically uses 2–3 PRUs.

#### Advanced orchestration capabilities

##### Premium reasoning integration

- **Architectural decision support:** Analyze trade-offs between implementation approaches.
- **Cross-system impact analysis:** Understand how changes affect distributed system components.
- **Complex refactoring coordination:** Orchestrate changes across multiple files and modules.
- **Integration pattern optimization:** Suggest optimal patterns for connecting new features with existing architecture.

> **Note:** Premium runs add more context and reasoning but often double PRU consumption (~4+ per request).

##### Comprehensive feature delivery workflows

1. **Analysis phase:** Parse user stories and technical requirements to create implementation plans.
2. **Implementation phase:** Generate complete feature code including all necessary components.
3. **Quality assurance phase:** Create comprehensive test suites and quality checks.
4. **Documentation phase:** Generate user documentation, API docs, and maintenance guides.
5. **Deployment phase:** Create deployment scripts and monitoring configurations.

---

## Unit 5: Understand limitations and measure impact (10 min)

### Identify limitations of GitHub Copilot

#### Code quality and correctness

- **Potential for errors:** Can sometimes suggest code that contains bugs or doesn't fully meet requirements.
- **Security concerns:** Generated code may not always adhere to best security practices.
- **Context misinterpretation:** Might misunderstand the broader context, leading to inappropriate suggestions.

#### Language and framework specificity

- **Varying performance:** Effectiveness can vary across different programming languages and frameworks.
- **Niche technologies:** Suggestions may be less accurate for less common or newer technologies.

#### Dependency on training data

- **Bias in suggestions:** Suggestions reflect patterns in training data, which may include biases or outdated practices.
- **Copyright concerns:** Ongoing debate about copyright implications of code generated from trained models.

#### Complex problem solving

- **Limitation in high-level design:** Excels at code-level tasks but may not grasp complex architectural decisions.
- **Creativity constraints:** Cannot replace human creativity in solving novel problems.

### Measure productivity gains

#### REST API endpoints for GitHub Copilot usage metrics

GitHub provides a REST API to access usage metrics for enterprise members, teams, and organization members.

##### Get usage for enterprise members

**Endpoint:** `GET /enterprises/{enterprise}/GitHub Copilot/usage`

```bash
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  https://api.github.com/enterprises/ENTERPRISE/GitHub Copilot/usage
```

##### Get usage for an enterprise team

**Endpoint:** `GET /enterprises/{enterprise}/team/{team_slug}/GitHub Copilot/usage`

```bash
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  https://api.github.com/enterprises/ENTERPRISE/team/TEAM_SLUG/GitHub Copilot/usage
```

##### Get usage for organization members

**Endpoint:** `GET /orgs/{org}/GitHub Copilot/usage`

```bash
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  https://api.github.com/orgs/ORG/GitHub Copilot/usage
```

#### Implementing a measurement framework

1. **Evaluation:** Focus on leading indicators — developer satisfaction and task completion rates. Collect metrics like Average Daily Active Users, Total Acceptance Rate, and Lines of Code Accepted.
2. **Adoption:** Monitor productivity metrics and enablement indicators. Identify areas where further training may be needed.
3. **Optimization:** Fine-tune impact on broader organizational goals (reducing time-to-market, improving code quality).
4. **Sustained efficiency:** Continuously evaluate effectiveness as the organization evolves.

#### GitHub Copilot Developer Survey

**Survey cadence and timing:**

- **Short-form survey:** Every two weeks if frequent feedback is needed.
- **Long-form survey:** No more than once every four weeks.

**Structuring the survey:**

- **Short-form:** Immediate feedback — overall satisfaction, challenges, time saved/wasted.
  - Example: "How would you feel if you could no longer use GitHub Copilot?"
  - Example: "When using GitHub Copilot, I enjoy coding more / write better quality code / complete tasks faster."
- **Long-form:** Deeper analysis — usage patterns, team dynamics, detailed insights.
  - Example: "I use GitHub Copilot to code in a familiar language / explore a new language / write repetitive code."
  - Example: "When using GitHub Copilot, my team provides better code reviews / merges code to production faster."

**Analyzing survey results:**

- **Privacy considerations:** Ensure responses are anonymized.
- **Data tracking:** Collate responses into BI tools or spreadsheets. Track trends over time.
- **Continuous improvement:** Use insights to address challenges, leverage benefits, and adjust usage.

---

## Unit 6: Module Assessment (6 min)

### Check Your Knowledge

**Q1: How does GitHub Copilot assist developers in accelerating the learning of new programming languages or frameworks?**
- ❌ By automatically translating code between different programming languages.
- ✅ **By providing context-aware code snippets and inline documentation related to new functions and libraries.**
- ❌ By offering video tutorials and interactive coding sessions within the IDE.
- ❌ By managing project dependencies and version control automatically.

**Q2: In what way does GitHub Copilot minimize context switching for developers?**
- ❌ It integrates multiple project management tools into the IDE.
- ✅ **It provides code suggestions and completions directly within the editor, reducing the need to search for solutions online.**
- ❌ It automates the entire coding process, eliminating the need for manual coding.
- ❌ It schedules tasks and manages developer workflows automatically.

**Q3: Which feature of GitHub Copilot enhances the process of writing and maintaining code documentation?**
- ❌ Automated generation of UML diagrams from code.
- ✅ **Generating contextually relevant inline comments and function descriptions automatically.**
- ❌ Translating documentation into multiple languages in real-time.
- ❌ Creating comprehensive project management reports based on code commits.

**Q4: What is one way GitHub Copilot automates routine coding tasks for developers?**
- ❌ By deploying applications to production environments automatically.
- ✅ **By generating boilerplate code for common functionalities, such as setting up a REST API.**
- ❌ By managing database migrations and schema changes automatically.
- ❌ By conducting performance testing and optimization of code automatically.

---

## Unit 7: Summary (3 min)

### Key Takeaways

GitHub Copilot offers numerous advantages for developers by streamlining development tasks, aligning with developer preferences, and enhancing various stages of the Software Development Life Cycle. It accelerates learning curves and automates mundane activities, offering developers a powerful tool to enhance productivity, creativity, and overall coding experience.

Moving forward, developers should:

- Continuously explore new ways to integrate GitHub Copilot into their workflows.
- Regularly assess the impact of AI-assisted coding on their development processes.
- Maintain a balance between applying AI assistance and fostering human creativity and problem-solving skills.

### References

- [GitHub Copilot features](https://docs.github.com/en/copilot/about-github-copilot/github-copilot-features)
- [GitHub Copilot for Developers](https://docs.github.com/en/copilot)
- [Responsible use of GitHub Copilot features](https://docs.github.com/en/copilot/responsible-use-of-github-copilot-features)
- [Example prompts for Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/example-use-cases/example-prompts-for-copilot-chat)
- [Write more code by writing less code with GitHub Copilot](https://resources.github.com/videos/write-more-code-by-writing-less-code-with-github-copilot/)
- [About GitHub Copilot](https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot)
- [REST API endpoints for GitHub Copilot usage metrics](https://docs.github.com/en/rest/copilot/copilot-usage?apiVersion=2022-11-28)
- [GitHub Copilot Developer Survey](https://downloads.ctfassets.net/wfutmusr1t3h/66acuCKYqXme0aukY8Rn3x/a8c682946b0176db5860544ad85fffe7/2024-04-23-GitHub-CCI-LP-Copilot-Impact-Survey-NT-V003.pdf)

---
