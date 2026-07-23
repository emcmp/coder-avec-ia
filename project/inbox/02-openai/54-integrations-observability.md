# Integrations and Observability

## MCP Integration

### Hosted MCP server

```python
from agents import Agent, HostedMCPTool

agent = Agent(
    name="MCP assistant",
    tools=[HostedMCPTool(
        tool_config={
            "type": "mcp",
            "server_label": "gitmcp",
            "server_url": "https://gitmcp.io/openai/codex",
        }
    )],
)
```

### Local MCP server

```python
from agents import Agent, Runner
from agents.mcp import MCPServerStdio

async with MCPServerStdio(
    name="Filesystem MCP Server",
    params={"command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem", "./files"]},
) as server:
    agent = Agent(name="Assistant", mcp_servers=[server])
    result = await Runner.run(agent, "Read the files.")
```

## Tracing

Built-in tracing captures model calls, tool calls, handoffs, and guardrails.

```python
from agents import trace

with trace("Joke workflow"):
    first = await Runner.run(agent, "Tell me a joke")
    second = await Runner.run(agent, f"Rate this joke: {first.final_output}")
```
