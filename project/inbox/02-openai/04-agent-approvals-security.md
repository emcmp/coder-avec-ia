# Agent Approvals & Security

> Source: https://developers.openai.com/codex/agent-approvals-security/

Codex provides multiple controls to minimize misuse risks and protect data. Key mechanisms include sandboxing, approval policies, and network access controls.

## Sandbox and Approvals

Security relies on two complementary layers:

- **Sandbox mode:** Defines technical limits on command execution, file writing, and network connectivity.
- **Approval policy:** Determines when the system must pause and request permission before performing specific actions.

Environment differences:

- **Codex cloud:** Executes in isolated containers managed by OpenAI. Setup phases may access the internet for dependencies, but agent phases run offline by default.
- **Codex CLI / IDE extension:** Enforces OS-level sandboxing with no default network access and write permissions restricted to the active workspace.

## Network Access

Network access defaults to off unless explicitly enabled.

### Network Policy

Allowlist rules take precedence:

- Exact hosts match only themselves.
- `*.example.com` covers subdomains but excludes the apex.
- `**.example.com` covers both apex and subdomains.
- Global `*` permits any public host unless denied.
- Deny rules always override allow rules.

### Common Sandbox and Approval Combinations

| Intent | Flags / Config | Effect |
|---|---|---|
| Auto (preset) | `--sandbox workspace-write --ask-for-approval on-request` | Reads, edits, and runs commands in workspace. Requires approval for external edits or network access. |
| Safe read-only browsing | `--sandbox read-only --ask-for-approval on-request` | Read-only access. Requires approval for edits, commands, or network access. |
| Auto-edit with untrusted command approval | `--sandbox workspace-write --ask-for-approval untrusted` | Auto-edits files, but requires approval for untrusted commands. |
| Auto-review mode | `approvals_reviewer = "auto_review"` | Eligible requests reviewed by an agent instead of user prompts. |
| Dangerous full access | `--dangerously-bypass-approvals-and-sandbox` | No sandbox or approvals. Not recommended. |

### Configuration in `config.toml`

```toml
approval_policy = "untrusted"
sandbox_mode = "read-only"
allow_login_shell = false

[sandbox_workspace_write]
network_access = true
```

## OS-Level Sandbox

Implementation varies by operating system:

- **macOS:** Uses Seatbelt policies and `sandbox-exec`
- **Linux:** Defaults to `bwrap` plus `seccomp`
- **Windows:** Uses WSL2 or native Windows sandbox

## Monitoring and Telemetry

Opt-in OpenTelemetry (OTel) export supports auditing and compliance. Telemetry is disabled by default.
