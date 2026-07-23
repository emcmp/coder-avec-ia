# Advanced Configuration

## Profiles
```toml
# ~/.codex/deep-review.config.toml
model = "gpt-5.5"
model_reasoning_effort = "xhigh"
approval_policy = "on-request"
```

```bash
codex --profile deep-review
```

## CLI overrides
```bash
codex --model gpt-5.4
codex --config model='"gpt-5.4"'
codex --config sandbox_workspace_write.network_access=true
```

## Custom model providers
```toml
model_provider = "proxy"

[model_providers.proxy]
name = "OpenAI using LLM proxy"
base_url = "http://proxy.example.com"
env_key = "OPENAI_API_KEY"
```

## Amazon Bedrock
```toml
model_provider = "amazon-bedrock"
model = "<bedrock-model-id>"

[model_providers.amazon-bedrock.aws]
profile = "default"
region = "eu-central-1"
```

## OSS mode
```toml
oss_provider = "ollama"  # or "lmstudio"
```

## Shell environment
```toml
[shell_environment_policy]
inherit = "none"
set = { PATH = "/usr/bin" }
include_only = ["PATH", "HOME"]
```

## Hooks
```toml
[[hooks.PreToolUse]]
matcher = "^Bash$"

[[hooks.PreToolUse.hooks]]
type = "command"
command = '/usr/bin/python3 "hooks/pre_tool_use_policy.py"'
```
