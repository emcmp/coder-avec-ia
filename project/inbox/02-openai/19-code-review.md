# Custom instructions with AGENTS.md

Give Codex extra instructions and context for your project.

## How Codex Discovers Guidance

Codex reads `AGENTS.md` files before doing any work. Discovery follows this precedence:

1. **Global scope:** In `~/.codex`, Codex reads `AGENTS.override.md` or `AGENTS.md`.
2. **Project scope:** From project root to current directory, checks for `AGENTS.override.md`, `AGENTS.md`, then fallback names.
3. **Merge order:** Files concatenated from root down; closer files override earlier guidance.

## Create Global Guidance

Create `~/.codex/AGENTS.md` with reusable preferences:

```markdown
# ~/.codex/AGENTS.md

## Working agreements

- Always run `npm test` after modifying JavaScript files.
- Prefer `pnpm` when installing dependencies.
```

## Layer Project Instructions

Repository-level files keep Codex aware of project norms while inheriting global defaults.

Use `AGENTS.override.md` for per-directory overrides:

```markdown
# services/payments/AGENTS.override.md

## Payments service rules

- Use `make test-payments` instead of `npm test`.
```

## Add Code Review Rules

For Codex code review in GitHub, add a `## Code Review Rules` section to the closest `AGENTS.md`:

```markdown
## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
```

## Customize Fallback Filenames

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

## Troubleshoot

- Nothing loads: Check you're in the right repo, files aren't empty.
- Wrong guidance: Look for `AGENTS.override.md` higher in the tree.
- Instructions truncated: Raise `project_doc_max_bytes`.