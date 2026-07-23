# Agent approvals & security

How to securely operate Codex with sandboxing, approvals, and network controls

Codex helps protect your code and data and reduces the risk of misuse.

This page covers how to operate Codex safely, including sandboxing, approvals, and network access.

By default, the agent runs with network access turned off. Locally, Codex uses an OS-enforced sandbox that limits what it can touch (typically to the current workspace), plus an approval policy that controls when it must stop and ask you before acting.

## Sandbox and approvals

Codex security controls come from two layers that work together:

* **Sandbox mode**: What Codex can do technically when it executes model-generated commands.
* **Approval policy**: When Codex must ask you before it executes an action.

Codex uses different sandbox modes depending on where you run it:

* **Codex cloud**: Runs in isolated OpenAI-managed containers.
* **Codex CLI / IDE extension**: OS-level mechanisms enforce sandbox policies. Defaults include no network access and write permissions limited to the active workspace.

In the `Auto` preset (`--sandbox workspace-write --ask-for-approval on-request`), Codex can read files, make edits, and run commands in the working directory automatically.

## Network access

For Codex cloud, see agent internet access to enable full internet access or a domain allow list.

For the ChatGPT desktop app, Codex CLI, or IDE extension, the default `workspace-write` sandbox mode keeps network access turned off unless you enable it:

```toml
[sandbox_workspace_write]
network_access = true
```

### Network isolation

Network access is controlled through destination rules. When command network access is already enabled, turn on the `network_proxy` feature:

```toml
[features.network_proxy]
enabled = true
domains = { "api.openai.com" = "allow", "example.com" = "deny" }
```

#### Network policy

Domain rules are allowlist-first: exact hosts, scoped wildcards, and global `*` allow rules. `deny` always wins.

#### DNS rebinding protections

Before allowing a hostname, Codex performs a DNS and IP classification check to reduce DNS rebinding risk.

### Web search tool

```toml
web_search = "cached"  # default
# web_search = "disabled"
# web_search = "live"  # same as --search
```

## Defaults and recommendations

* Version-controlled folders: `Auto` (workspace write + on-request approvals)
* Non-version-controlled folders: `read-only`

### Common sandbox and approval combinations

| Intent | Flags | Effect |
|--------|-------|--------|
| Auto | `--sandbox workspace-write --ask-for-approval on-request` | Read/edit/run in workspace, approval for external |
| Safe read-only | `--sandbox read-only --ask-for-approval on-request` | Read only, approval for everything else |
| Non-interactive CI | `--sandbox read-only --ask-for-approval never` | Read only, no prompts |
| Full access | `--dangerously-bypass-approvals-and-sandbox` | No sandbox, no approvals |

### Automatic approval reviews

Set `approvals_reviewer = "auto_review"` to route eligible approval requests through a reviewer agent:

```toml
approval_policy = "on-request"
approvals_reviewer = "auto_review"
```

## OS-level sandbox

* **macOS**: Uses Seatbelt policies and `sandbox-exec`.
* **Linux**: Uses `bwrap` plus `seccomp`.
* **Windows**: Uses Linux sandbox in WSL2, or native Windows sandbox.

## Version control

Recommendations: work on feature branches, prefer patch-based workflows, commit frequently, and treat Codex suggestions like any other PR.

## Monitoring and telemetry

Codex supports opt-in monitoring via OpenTelemetry (OTel):

```toml
[otel]
environment = "staging"
exporter = "none"  # none | otlp-http | otlp-grpc
log_user_prompt = false
```

## Configuration

```toml
approval_policy = "untrusted"
sandbox_mode    = "read-only"

[sandbox_workspace_write]
network_access = true
```
