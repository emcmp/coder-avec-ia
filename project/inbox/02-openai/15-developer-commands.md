# Developer Commands Reference

> Source: https://learn.chatgpt.com/docs/developer-commands

## Global Flags

| Key | Type | Details |
| `--add-dir` | `path` | Allow extra directories for writing |
| `--ask-for-approval, -a` | `untrusted \| on-request \| never` | Control human approval triggers |
| `--cd, -C` | `path` | Set the starting directory |
| `--config, -c` | `key=value` | Override configuration settings |
| `--dangerously-bypass-approvals-and-sandbox` | `boolean` | Disable safety prompts |
| `--image, -i` | `path` | Attach image files to prompts |
| `--model, -m` | `string` | Override the configured model |
| `--profile, -p` | `string` | Apply a specific config profile |
| `--remote` | `ws://host:port` | Connect to a remote server |
| `--sandbox, -s` | `read-only \| workspace-write \| danger-full-access` | Set sandbox policy |
| `--search` | `boolean` | Enable live web search |

## Commands

| Command | Maturity | Details |
| `codex` | Stable | Launches the interactive terminal interface |
| `codex app` | Stable | Opens the desktop application |
| `codex cloud` | Experimental | Manages cloud-based chat tasks |
| `codex exec` | Stable | Executes tasks non-interactively |
| `codex login` | Stable | Handles user authentication |
| `codex mcp` | Stable | Manages protocol server settings |
| `codex plugin` | Stable | Installs and manages extensions |
| `codex resume` | Stable | Continues a previous interaction |
| `codex review` | Stable | Performs automated code analysis |
| `codex update` | Stable | Applies software version updates |

## Slash Commands

| Command | Purpose |
| `/permissions` | Modify approval settings |
| `/model` | Switch active model |
| `/compact` | Summarize history |
| `/clear` | Reset the interface |
| `/review` | Analyze working tree |
| `/status` | Display session info |
