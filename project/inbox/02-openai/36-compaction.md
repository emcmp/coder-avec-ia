# Compaction

Manage long-running conversations with server-side and standalone compaction.

## Server-side compaction

Enable server-side compaction by configuring `context_management`:

```python
response = client.responses.create(
    model="gpt-5.3-codex",
    input=conversation,
    store=False,
    context_management=[{"type": "compaction", "compact_threshold": 200000}],
)

conversation.extend(response.output)
conversation.append({"type": "message", "role": "user", "content": get_next_user_input()})
```

## Standalone compact endpoint

For explicit control:

```python
compacted = client.responses.compact(
    model="gpt-5.6",
    input=long_input_items_array,
)

next_input = [
    *compacted.output,
    {"type": "message", "role": "user", "content": user_input_message()},
]

next_response = client.responses.create(
    model="gpt-5.6",
    input=next_input,
    store=False,
)
```
