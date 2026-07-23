# Codex CLI Reference

> Source: https://developers.openai.com/codex/cli/reference/

## Global Flags

| Key | Type / Values | Details |
| `--add-dir` | `path` | Allow extra directories for writing. |
| `--ask-for-approval, -a` | `untrusted \| on-request \| never` | Control human approval triggers. |
| `--cd, -C` | `path` | Set the starting directory. |
| `--config, -c` | `key=value` | Override configuration settings. |
| `--dangerously-bypass-approvals-and-sandbox, --yolo` | `boolean` | Disable safety prompts and sandboxing. |
| `--dangerously-bypass-hook-trust` | `boolean` | Run hooks without trust verification. |
| `--disable` | `feature` | Force-disable a feature flag. |
| `--enable` | `feature` | Force-enable a feature flag. |
| `--image, -i` | `path[,path...]` | Attach image files to prompts. |
| `--local-provider` | `lmstudio \| ollama` | Select a local model provider. |
| `--model, -m` | `string` | Override the configured model. |
| `--no-alt-screen` | `boolean` | Disable the alternate TUI screen. |
| `--oss` | `boolean` | Use an open-source model provider. |
| `--profile, -p` | `string` | Apply a specific config profile. |
| `--remote` | `ws://host:port \| wss://host:port \| unix:// \| unix://PATH` | Connect to a remote server. |
| `--remote-auth-token-env` | `ENV_VAR` | Read bearer tokens for remote auth. |
| `--sandbox, -s` | `read-only \| workspace-write \| danger-full-access` | Set the sandbox policy level. |
| `--search` | `boolean` | Enable live web search capabilities. |
| `--strict-config` | `boolean` | Error on unrecognized config fields. |
| `PROMPT` | `string` | Initial instruction for the session. |

## Command Overview

| Key | Maturity | Details |
| `codex` | Stable | Launches the interactive terminal interface. |
| `codex app` | Stable | Opens the desktop application locally. |
| `codex app-server` | Experimental | Starts a local development server. |
| `codex apply` | Stable | Applies diffs from cloud sessions. |
| `codex archive` | Stable | Archives saved interactive sessions. |
| `codex cloud` | Experimental | Manages cloud-based chat tasks. |
| `codex completion` | Stable | Generates shell completion scripts. |
| `codex exec` | Stable | Executes tasks non-interactively. |
| `codex fork` | Stable | Creates a new session branch. |
| `codex login` | Stable | Handles user authentication flows. |
| `codex logout` | Stable | Clears stored credentials locally. |
| `codex mcp` | Stable | Manages protocol server settings. |
| `codex plugin` | Stable | Installs and manages extensions. |
| `codex resume` | Stable | Continues a previous interaction. |
| `codex review` | Stable | Performs automated code analysis. |
| `codex sandbox` | Stable | Executes commands securely. |
| `codex update` | Stable | Applies software version updates. |

## Command Details

### Interactive Terminal

Running the base command starts the TUI. Users can attach images, enable live searching, and adjust sandbox permissions.

### App Server

Experimental tool that facilitates local development via standard input/output, WebSockets, or Unix sockets. Supports various authentication modes.

### Exec & Execpolicy

- `exec`: Runs scripted tasks non-interactively, supporting JSON output and session resumption.
- `execpolicy`: Tests execution rules against specific command sets.

### Authentication & MCP

- `login/logout`: Manages OAuth, API keys, or access tokens.
- `mcp`: Configures server connections via standard input/output or HTTP streams.

### Plugins & Marketplaces

- `plugin`: Installs, lists, or removes extensions from configured sources.
- `plugin marketplace`: Adds, removes, or updates Git-based plugin repositories.

### Resume, Fork, & Sandbox

- `resume`: Continues previous sessions using unique identifiers.
- `fork`: Branches an active session into a new chat.
- `sandbox`: Runs commands securely using macOS seatbelts, Linux Landlock, or Windows sandboxes.

### Slash Commands

| Command | Purpose | When to use it |
| `/permissions` | Modify approval settings. | Adjust sandbox rules mid-session. |
| `/model` | Switch active model. | Change processing engine. |
| `/fast` | Toggle speed tier. | Prioritize latency over depth. |
| `/plan` | Request execution strategy. | Outline steps before coding. |
| `/goal` | Set persistent targets. | Maintain focus on large tasks. |
| `/review` | Analyze working tree. | Audit local file changes. |
| `/status` | Display session info. | Check model and token usage. |
| `/compact` | Summarize history. | Free up context window tokens. |
| `/clear` | Reset the interface. | Start a fresh conversation. |
| `/exit` | Leave the interface. | Close the active session. |
| `/resume` | Continue saved chat. | Pick up a previous session. |
| `/new` | Start fresh chat. | Reset context within CLI. |
| `/quit` | Exit application. | Close the terminal interface. |
