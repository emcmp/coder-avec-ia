# Module 7: Management and Customization Considerations with GitHub Copilot

> **Duration:** 30 min | **XP:** 800 | **Units:** 7
> **URL:** https://learn.microsoft.com/en-us/training/modules/github-copilot-management-and-customizations/

---

## Overview

Management and customization control are a vital part of using an AI pair programming tool. Understand GitHub Copilot plans, contractual protections, content exclusions, and troubleshooting.

### Learning Objectives

- Understand GitHub Copilot plans and their associated management features
- Gain insight into contractual protections and disabling matching public code
- Know how to manage content exclusions
- Recognize common problems and their solutions

---

## Unit 1: Introduction (2 min)

GitHub is committed to advancing safe, secure, and trustworthy AI. This module covers:
- Plans and customization features
- Contractual protections
- Content exclusions
- Troubleshooting

---

## Unit 2: Plans & Management Features (5 min)

### Management Policy Features

| Feature | Free/Pro | Business | Enterprise |
|---------|----------|----------|------------|
| Public code filter | ✅ | ✅ | ✅ |
| User management | ❌ | ✅ | ✅ |
| Data excluded from training | ❌ | ✅ | ✅ |
| Enterprise-grade security | ❌ | ✅ | ✅ |
| IP indemnity | ❌ | ✅ | ✅ |
| Content exclusions | ❌ | ✅ | ✅ |
| SAML SSO | ❌ | ✅ | ✅ |
| Require GitHub Enterprise Cloud | ❌ | ❌ | ✅ |
| Usage metrics | ❌ | ✅ | ✅ |

### Customization Features

| Feature | Free/Pro | Business | Enterprise |
|---------|----------|----------|------------|
| Chat tailored to private codebase | ❌ | ❌ | ✅ |
| Unlimited Copilot Extensions | ✅ | ✅ | ✅ |
| Private extensions for internal tooling | ✅ | ✅ | ✅ |
| Attach knowledge bases to chat | ❌ | ❌ | ✅ |

### Key Considerations

- **Data privacy & security** — Business/Enterprise offer robust controls
- **Policy management** — Organizational-level management
- **Data collection** — Individual subscribers can opt out
- **IP indemnity** — Critical for businesses

---

## Unit 3: Contractual Protections (5 min)

### Protections Offered

- **IP indemnity** — Business and Enterprise plans protect against IP claims (requires Matching public code = blocked)
- **Data Protection Agreement (DPA)** — Outlines data protection measures
- **GitHub Copilot Trust Center** — Security, privacy, compliance, IP safeguards

### Filtering Matching Public Code

| Scope | Who Manages | What It Controls |
|-------|-------------|------------------|
| Organization (Business/Enterprise) | Admins | Public code filter for all members |
| Personal (Free/Pro/Pro+) — self-paid | Individual | Allow/Block toggle |
| Personal — org-provided | Individual | May be locked to org policy |

### Managing the Public Code Filter (Org Admins)

1. Profile → **Your organizations** → **Settings**
2. **Copilot** → **Features** → **Privacy**
3. **Suggestions matching public code** → Choose **Block**
4. **Save**

### Personal Users

1. Profile → **Settings** → **Copilot** → **Features**
2. **Privacy** section → Toggle **Allow/Block**

---

## Unit 4: Content Exclusions (7 min)

### Configure for Repositories

1. Repository → **Settings**
2. **Code & automation** → **Copilot**
3. **Repositories and paths to exclude** → Specify files/directories

### Configure for Organizations

1. Profile → **Your organizations** → **Settings**
2. **Copilot** → **Content exclusion**
3. Enter files/repositories to exclude

### Impact of Content Exclusions

- Code completion unavailable in excluded files
- Excluded content won't inform suggestions elsewhere
- Excluded content won't inform Chat responses

### Limitations

- **IDE limitations** — Exclusions may not apply in Chat (`@github` participant)
- **Semantic information** — Type info and hover definitions may still leak context
- **Policy scope** — Applies only to org members with the configured exclusion

---

## Unit 5: Troubleshoot Common Issues (5 min)

### Code Suggestions Missing

- Check internet connection
- Update Copilot extension
- Verify IDE compatibility
- Review content exclusions

### Content Exclusions Not Working

- **Delayed application** — Changes take up to 30 minutes; reload IDE
- **Inadequate scope** — Apply only to org members; check Copilot icon (diagonal line = excluded)
- **IDE limitations** — Some features bypass exclusions

### Unsatisfactory Suggestions

- Provide clear context (descriptive comments, meaningful names)
- Use Copilot commands (e.g., `Ctrl+Enter` in VS Code)
- Adjust prompt length

---

## Unit 6: Module Assessment (5 min)

### Check Your Knowledge

**Q1: Which plans include enterprise-grade security?**
- ✅ **Business and Enterprise**

**Q2: What should you do if Copilot isn't providing suggestions?**
- ✅ **Check the internet connection**

**Q3: What is the purpose of content exclusions?**
- ✅ **Prevent specific files/repositories from being used for code suggestions**

---

## Unit 7: Summary (1 min)

### Key Takeaways

- Select the right plan for your organization's needs
- Contractual protections include IP indemnity, DPA, and Trust Center
- Content exclusions protect sensitive files but have limitations
- Common issues: missing suggestions, exclusion problems, unsatisfactory suggestions

### Resources

- [GitHub Trust Center](https://github.com/trust-center)
- [Establishing trust in using GitHub Copilot](https://resources.github.com/learn/pathways/copilot/essentials/establishing-trust-in-using-github-copilot/)
- [Excluding content from GitHub Copilot](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/excluding-content-from-github-copilot)

---
