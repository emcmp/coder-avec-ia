# Sample Configuration

Complete example `config.toml`:

```toml
model = "gpt-5.6"
model_provider = "openai"
approval_policy = "on-request"
sandbox_mode = "read-only"
web_search = "cached"

[shell_environment_policy]
inherit = "all"
include_only = ["PATH", "HOME"]

[features]
apps = true
hooks = true
multi_agent = true
shell_tool = true
shell_snapshot = true

[sandbox_workspace_write]
network_access = false
writable_roots = []

[history]
persistence = "save-all"

[otel]
log_user_prompt = false
environment = "dev"
exporter = "none"
```
