# Codex Non-Interactive Mode

> Source: https://learn.chatgpt.com/docs/non-interactive-mode

Execute Codex outside of the standard interactive terminal UI using `codex exec`. Useful for CI pipelines, scripts, and automation.

## When to Use `codex exec`

- Execute tasks within automated pipelines, pre-merge checks, or scheduled jobs
- Generate output that can be piped into other applications
- Integrate into CLI workflows that chain command outputs
- Run with pre-determined sandboxing and approval configurations

## Basic Usage

```bash
codex exec "summarize the repository structure and list the top 5 risky areas"
```

Progress updates stream to `stderr` while the final agent message prints to `stdout`.

```bash
codex exec "generate release notes for the last 10 commits" | tee release-notes.md
```

To prevent session files from persisting on disk:

```bash
codex exec --ephemeral "triage this repository and suggest next steps"
```

When stdin is piped alongside a prompt:

```bash
curl -s https://jsonplaceholder.typicode.com/comments \
  | codex exec "format the top 20 items into a markdown table" \
  > table.md
```

## Permissions and Safety

By default, execution runs within a read-only sandbox.

- **Allow edits:** `codex exec --sandbox workspace-write "<task>"`
- **Allow broader access:** `codex exec --sandbox danger-full-access "<task>"`

Use `danger-full-access` exclusively within controlled environments.

Additional flags:
- `--ignore-user-config`: bypass `$CODEX_HOME/config.toml`
- `--ignore-rules`: skip user and project execpolicy `.rules` files

## Machine-Readable Output

Enable JSON Lines formatting using `--json`:

```bash
codex exec --json "summarize the repo structure" | jq
```

Write the final message to a file:

```bash
codex exec -o <path> "<task>"
```

## Structured Outputs with Schemas

Apply `--output-schema` to require the response conform to a JSON Schema:

```bash
codex exec "Extract project metadata" \
  --output-schema ./schema.json \
  -o ./project-metadata.json
```

## Authentication in Automation

By default, saved CLI authentication is reused. In CI environments, provide credentials explicitly.

- **API Key:** Use `CODEX_API_KEY=<key>` inline for the `codex exec` invocation
- **ChatGPT Auth:** Advanced users can use account authentication on trusted runners

## Resuming Sessions

```bash
codex exec "review the change for race conditions"
codex exec resume --last "fix the race conditions you found"
```

Or specify a session explicitly: `codex exec resume <SESSION_ID>`

## Git Repository Requirement

Commands must run inside a Git repository. Use `--skip-git-repo-check` to bypass if safe.

## Common Automation Patterns

### Autofix CI Failures in GitHub Actions

```yaml
name: Codex auto-fix on CI failure
on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]

jobs:
  generate_fix:
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: openai/codex-action@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          prompt: |
            The CI workflow failed. Identify the minimal change needed
            to make the tests pass, implement only that change.
      - name: Create patch artifact
        run: |
          git diff --binary HEAD > codex.patch
```

### Advanced stdin Piping

```bash
# Summarize test failures
npm test 2>&1 | codex exec "summarize the failing tests" > test-summary.md

# Triage logs
tail -n 200 app.log | codex exec "identify the likely root cause" > triage.md

# Debug TLS issues
curl -vv https://api.example.com/health 2>&1 | codex exec "explain the TLS failure"

# Draft PR comments
gh run view 123456 --log | codex exec "summarize in 5 bullets" | gh pr comment 789 --body-file -
```

### Using `codex exec -`

When omitting the prompt argument, the tool reads the prompt from stdin:

```bash
cat prompt.txt | codex exec -

printf "Summarize this error log in 3 bullets:\n\n%s" "$(tail -n 200 app.log)" | codex exec -
```
