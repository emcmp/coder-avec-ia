# Sandbox Agents

Give agents a persistent workspace for file operations, shell commands, and skills.

## Quickstart

```python
from agents import Runner, RunConfig, SandboxAgent, Manifest
from agents.sandbox import UnixLocalSandboxClient

agent = SandboxAgent(
    name="Sandbox engineer",
    model="gpt-5.6-sol",
    instructions="Read task.md, fix the issue, run tests.",
    default_manifest=Manifest(entries={"repo": LocalDir(src="repo/")}
),

result = await Runner.run(
    agent, "Fix the issue",
    run_config=RunConfig(sandbox=SandboxRunConfig(client=UnixLocalSandboxClient())),
)
```

## Key concepts

- **Manifest**: Files, repos, directories for workspace
- **Capabilities**: Sandbox-native tools (filesystem, shell, skills)
- **Sandbox client**: Unix-local, Docker, or hosted providers
- **Snapshots**: Preserve and resume sandbox state
