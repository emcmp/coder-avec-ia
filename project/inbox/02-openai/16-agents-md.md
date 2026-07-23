# Custom Instructions with AGENTS.md

> Source: https://learn.chatgpt.com/docs/agent-configuration/agents-md

Give Codex extra instructions and context for your project.

Codex reads `AGENTS.md` files before doing any work. By layering global guidance with project-specific overrides, you can start each task with consistent expectations, no matter which repository you open.

## How Codex discovers guidance

Codex builds an instruction chain when it starts (once per run). Discovery follows this precedence order:

1. **Global scope:** In your Codex home directory (defaults to `~/.codex`), Codex reads `AGENTS.override.md` if it exists. Otherwise, Codex reads `AGENTS.md`.
2. **Project scope:** Starting at the project root, Codex walks down to your current working directory. In each directory, it checks for `AGENTS.override.md`, then `AGENTS.md`, then any fallback names in `project_doc_fallback_filenames`.
3. **Merge order:** Codex concatenates files from the root down, joining them with blank lines. Files closer to your current directory override earlier guidance because they appear later in the combined prompt.

Codex skips empty files and stops adding files once the combined size reaches the limit defined by `project_doc_max_bytes` (32 KiB by default).

## Create global guidance

```bash
mkdir -p ~/.codex
```

Create `~/.codex/AGENTS.md` with reusable preferences:

```markdown
# ~/.codex/AGENTS.md

## Working agreements

- Always run `npm test` after modifying JavaScript files.
- Prefer `pnpm` when installing dependencies.
- Ask for confirmation before adding new production dependencies.
```

Run Codex anywhere to confirm it loads the file:

```bash
codex --ask-for-approval never "Summarize the current instructions."
```

Use `~/.codex/AGENTS.override.md` when you need a temporary global override without deleting the base file.

## Layer project instructions

Repository-level files keep Codex aware of project norms while still inheriting your global defaults.

1. In your repository root, add an `AGENTS.md`:
   ```markdown
   # AGENTS.md
   ## Repository expectations
   - Run `npm run lint` before opening a pull request.
   - Document public utilities in `docs/` when you change behavior.
   ```
2. Add overrides in nested directories:
   ```markdown
   # services/payments/AGENTS.override.md
   ## Payments service rules
   - Use `make test-payments` instead of `npm test`.
   - Never rotate API keys without notifying the security channel.
   ```

## Customize fallback filenames

If your repository uses a different filename, add it to the fallback list:

```toml
# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

Now Codex checks: `AGENTS.override.md`, `AGENTS.md`, `TEAM_GUIDE.md`, `.agents.md`.

## Troubleshoot discovery issues

- **Nothing loads:** Verify you're in the intended repository. Ensure instruction files contain content.
- **Wrong guidance appears:** Look for an `AGENTS.override.md` higher in the directory tree.
- **Codex ignores fallback names:** Confirm you listed the names in `project_doc_fallback_filenames`.
- **Instructions truncated:** Raise `project_doc_max_bytes` or split large files across nested directories.
- **Profile confusion:** Run `echo $CODEX_HOME` before launching Codex.
