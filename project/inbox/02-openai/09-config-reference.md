# Configuration Reference

## Key categories

### Model & Reasoning
| Key | Type | Default |
|-----|------|---------|
| `model` | string | gpt-5.4-mini |
| `model_reasoning_effort` | minimal/xhigh | medium |
| `model_verbosity` | low/medium/high | medium |

### Sandbox & Approval
| Key | Values | Default |
|-----|--------|---------|
| `approval_policy` | on-request/never | on-request |
| `sandbox_mode` | read-only/workspace-write | workspace-write |

### Web Search
| Key | Values | Default |
|-----|--------|---------|
| `web_search` | cached/indexed/live/disabled | cached |

### Features
| Key | Default | Description |
|-----|---------|-------------|
| `features.apps` | true | Connector integrations |
| `features.multi_agent` | true | Subagent collaboration |
| `features.shell_tool` | true | Default shell tool |
| `features.hooks` | true | Lifecycle hooks |
| `features.memories` | false | Memory injection |

## Full config.toml sections

See Advanced Configuration for detailed examples of:
- Profiles
- Custom model providers
- Shell environment policy
- Approval policies
- Hook configuration
- MCP servers
- OTel telemetry
- Windows sandbox
