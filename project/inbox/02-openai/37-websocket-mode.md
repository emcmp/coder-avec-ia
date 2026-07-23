# WebSocket Mode

Use persistent WebSocket connections for lower-latency agentic workflows.

## Why use WebSocket mode

Best for workflows with many model-tool round trips. For 20+ tool calls, up to 40% faster end-to-end execution.

## Connect and create responses

```python
from websocket import create_connection
import json

ws = create_connection(
    "wss://api.openai.com/v1/responses",
    header=[f"Authorization: Bearer {os.environ['OPENAI_API_KEY']}"],
)

ws.send(json.dumps({
    "type": "response.create",
    "model": "gpt-5.6",
    "store": False,
    "input": [{"type": "message", "role": "user", "content": [{"type": "input_text", "text": "Find fizz_buzz()"}]}],
    "tools": [],
}))
```

## Continue with incremental inputs

```python
ws.send(json.dumps({
    "type": "response.create",
    "model": "gpt-5.6",
    "store": False,
    "previous_response_id": "resp_123",
    "input": [
        {"type": "function_call_output", "call_id": "call_123", "output": "tool result"},
        {"type": "message", "role": "user", "content": [{"type": "input_text", "text": "Now optimize it."}]},
    ],
    "tools": [],
}))
```

## Connection limits

- Sequential: one in-flight response at a time.
- Connection duration: 60 minutes max.
- No multiplexing today; use multiple connections for parallel runs.

## Errors to handle

- `previous_response_not_found`: ID not in cache (common with `store=false`).
- `websocket_connection_limit_reached`: 60-minute limit reached, reconnect needed.
