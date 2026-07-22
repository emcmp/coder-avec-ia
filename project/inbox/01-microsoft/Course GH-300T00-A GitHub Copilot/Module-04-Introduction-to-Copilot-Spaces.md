# Module 4: Introduction to Copilot Spaces

> **Duration:** 31 min | **XP:** 800 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/introduction-copilot-spaces/

---

## Overview

Learn how to use GitHub Copilot Spaces to get context-aware, reliable answers, configure custom instructions, and optimize interactions for repositories, issues, and pull requests.

### Learning Objectives

By the end of this module, learners can:

- Explain what Spaces are and when to use them versus general Copilot Chat
- Create, configure, and iterate on a Space with targeted context and custom instructions
- Apply best practices for high-quality, grounded answers within model context limits

### Prerequisites

- GitHub account with an active Copilot subscription
- Access to the Spaces feature
- Basic familiarity with repositories, issues, and pull requests

---

## Unit 1: Introduction (5 min)

### What is a GitHub Copilot Space?

A dedicated Copilot chat grounded in a curated set of context you choose. Feed it GitHub files, issues, pull requests, and free-text instructions to provide context for your specific topic.

### Setting Context

Attach specific files (scripts, config, documentation), relevant issues/PRs, and tailored instructions. **Context order matters** — lead with the most critical sources.

### When to Use Spaces vs General Chat

| Spaces | General Chat |
|--------|-------------|
| Consistent, reproducible answers | Broad discovery |
| Tightly scoped topics | Less precise |
| Depth over breadth | Breadth over depth |

### Setup

**Attaching Files:** Use "Attach files" to select files from your GitHub repo. Referenced from the default branch, so the Space stays up to date.

**Adding Instructions:** Provide goals, style preferences, canonical examples. Keep brief, focused, actionable.

### Best Practices
- Keep Spaces small and focused (model context limits apply)
- Be clear and concise with instructions
- Include canonical examples to anchor style and expected outputs
- Selection and ordering of context influences responses

---

## Unit 2: Creating Your First Space (5 min)

### Steps

1. Go to https://github.com/copilot/spaces → **Create space**
2. Give it a name
3. Choose personal or organization ownership
4. Optionally add a description
5. Click **Save**

### Adding Context

**Instructions:** Free text describing what Copilot should focus on.

**Attachments:**
- Attach files/folders from GitHub repos
- Link pull requests and issues (paste URLs)
- Upload files from local machine
- Add text content (transcripts, notes)

---

## Unit 3: Sharing, Discoverability, and Governance (5 min)

### Visibility and Sharing
- Set visibility based on intended use
- Use clear, purpose-driven titles
- Short description stating scope, audience, expected outputs

### Security and Access
- Follows GitHub's existing permissions — no new access granted
- Only users with appropriate repo permissions see linked content
- Avoid pasting sensitive data into free-text notes

### Versioning and Freshness
- Linked files reflect the repo's default branch
- Issues/PRs evolve as they change
- For branch-specific guidance: narrow references or attach a text file

### Governance Checklist

**Naming & Purpose**
- [ ] Clear, purpose-driven title ("one job per Space")
- [ ] 1-2 sentence description (scope, audience, outputs)
- [ ] "How to use this Space" note in instructions

**Ownership & Visibility**
- [ ] Correct owner (individual or organization)
- [ ] Appropriate visibility
- [ ] Share URL and add collaborators

**Security & Privacy**
- [ ] No sensitive data in free-text
- [ ] All attached sources suitable for chosen visibility
- [ ] Remove obsolete/confidential materials

**Review Cadence**
- [ ] Assign maintainer
- [ ] Set review cadence (monthly or per release)
- [ ] Validate links, test prompts, prune noisy sources

---

## Unit 4: Do's and Don'ts of Working in a Space (5 min)

### Do's ✅
- Keep questions tightly scoped to attached sources
- Treat the Space as a focused environment for a single task
- Use prompting patterns that lead to runnable, verifiable outputs
- Iterate when responses drift: tighten instructions, add 1-3 examples
- Keep context fresh and well-ordered
- Link version-controlled files

### Don'ts ❌
- Don't @-mention people or Copilot extensions in a Space
- Don't expect the Space to pull in content that isn't included
- Don't let the Space sprawl beyond a single job or exceed model context limits
- Don't paste sensitive data into free-text notes

---

## Unit 5: Exercise (5 min)

Hands-on exercise: Democratize tribal knowledge using Copilot Spaces.
- Add a repository as a source
- Explore and summarize process documentation
- Create custom chat modes for deep analysis
- Update documentation based on insights

👉 [Start the exercise on GitHub](https://github.com/skills/democratize-tribal-knowledge-using-copilot-spaces)

---

## Unit 6: Module Assessment (4 min)

### Check Your Knowledge

**Q1: When is a Space the better choice than general chat?**
- ✅ **When you want consistent, reproducible answers on a tightly scoped topic**

**Q2: Which statement about Space ownership is true?**
- ✅ **You can choose personal or organization ownership; description is for human readers**

**Q3: Which action does NOT add usable context for Copilot in a Space?**
- ✅ **@-mentioning a Copilot extension so it can run in Space chat**

**Q4: How do Spaces handle security and access?**
- ✅ **A Space mirrors GitHub permissions, surfacing only what the viewer can already see**

**Q5: You need branch-specific guidance or a historical snapshot. What should you do?**
- ✅ **Narrow references and add a brief example, or attach a text file with the exact content**

**Q6: Which prompting pattern best supports runnable outputs?**
- ✅ **Confirm intent, add concrete constraints, request executable outputs with references**

**Q7: You see size warnings and vague answers. What's the best next step?**
- ✅ **Reduce sources or split the Space into smaller, single-job Spaces**

---

## Unit 7: Summary (2 min)

### Key Takeaways

- Spaces deliver business value through context-grounded AI assistance
- Curated sources reduce ambiguity and improve response predictability
- Leverages GitHub's existing permission model for secure knowledge sharing

### References

- [What is GitHub Copilot?](https://docs.github.com/en/copilot/overview-of-github-copilot)
- [What is GitHub Copilot Spaces? | GitHub Checkout](https://youtu.be/a0LWEWLUt48)

---
