# Using tools

Use tools like remote MCP servers or web search to extend the model's capabilities.

## Available tools

| Tool | Description |
|------|-------------|
| **Function calling** | Call custom code to give the model access to additional data. |
| **Web search** | Include data from the Internet in model response generation. |
| **Remote MCP servers** | Give the model access to new capabilities via MCP servers. |
| **Skills** | Upload and reuse versioned skill bundles. |
| **Shell** | Run shell commands in hosted containers or your own local runtime. |
| **Computer use** | Create agentic workflows that enable a model to control a computer interface. |
| **Image generation** | Generate or edit images using GPT Image. |
| **File search** | Search the contents of uploaded files. |
| **Tool search** | Dynamically load relevant tools to optimize token usage. |
| **Programmatic Tool Calling** | Let models compose and run JavaScript that orchestrates tool calls. |

## Web search

```javascript
const response = await client.responses.create({
  model: "gpt-5.6",
  tools: [{ type: "web_search" }],
  input: "What was a positive news story from today?",
});
```

## File search

```python
response = client.responses.create(
    model="gpt-5.6",
    input="What is deep research by OpenAI?",
    tools=[{"type": "file_search", "vector_store_ids": ["<id>"]}]
)
```

## Tool search

Load deferred tools at runtime. Only `gpt-5.4` and later support `tool_search`.

## Function calling

```javascript
const tools = [{
  type: "function",
  name: "get_weather",
  description: "Get current temperature for a given location.",
  parameters: { type: "object", properties: { location: { type: "string" } }, required: ["location"] },
  strict: true,
}];
```

## Remote MCP

```javascript
const resp = await client.responses.create({
  model: "gpt-5.6",
  tools: [{ type: "mcp", server_label: "dmcp", server_url: "https://dmcp-server.deno.dev/mcp" }],
  input: "Roll 2d4+1",
});
```
