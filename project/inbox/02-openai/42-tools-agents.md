# Tools

## Choosing a tool type

| Tool type | Best for |
|---|---|
| Hosted tools | Web search, file search, computer use, code interpreter |
| Function tools | Custom code execution |
| MCP servers | Third-party integrations |
| Skills | Reusable capability bundles |

## Hosted tools

### Web search
```python
response = client.responses.create(
    model="gpt-5.6",
    tools=[{"type": "web_search"}],
    input="What happened today?",
)
```

### File search
```python
response = client.responses.create(
    model="gpt-5.6",
    tools=[{"type": "file_search", "vector_store_ids": ["vs_123"]}],
    input="Search my files.",
)
```

### Computer use
```python
response = client.responses.create(
    model="gpt-5.6",
    tools=[{"type": "computer"}],
    input="Take a screenshot.",
)
```

### Code interpreter
```python
response = client.responses.create(
    model="gpt-5.6",
    tools=[{"type": "code_interpreter"}],
    input="Calculate 2^100.",
)
```

## Function tools

Define custom functions the model can call:

```python
@function_tool
def get_weather(city: str) -> str:
    """Get weather for a city."""
    return f"Sunny in {city}"
```

## MCP Servers

Connect to MCP servers for third-party integrations.
