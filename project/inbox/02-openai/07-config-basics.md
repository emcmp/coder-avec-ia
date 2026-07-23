# Config Basics

Learn the basics of configuring your local Codex client.

## Configuration file

Personal defaults: `~/.codex/config.toml`
Project overrides: `.codex/config.toml` (trusted projects only)

## Configuration precedence

1. CLI flags and `--config` overrides
2. Project config: `.codex/config.toml` (closest wins)
3. Profile files: `--profile profile-name`
4. User config: `~/.codex/config.toml`
5. System config: `/etc/codex/config.toml`
6. Built-in defaults

## Common options

### Default model
```toml
model = "gpt-5.6"
```

### Approval policy
```toml
approval_policy = "on-request"
```

### Sandbox level
```toml
sandbox_mode = "workspace-write"
```

### Web search
```toml
web_search = "cached"  # cached, indexed, live, disabled
```

### Reasoning effort
```toml
model_reasoning_effort = "high"
```

### Personality
```toml
personality = "friendly"  # friendly, pragmatic, none
```

### Feature flags
```toml
[features]
apps = true
hooks = true
multi_agent = true
shell_tool = true
```
