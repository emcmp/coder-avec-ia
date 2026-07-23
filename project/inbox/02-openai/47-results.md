# Results

## Result types

- `RunResult`: From `Runner.run()` or `Runner.run_sync()`
- `RunResultStreaming`: From `Runner.run_streamed()`

## Key properties

| Property | Use |
|---|---|
| `final_output` | Final answer |
| `to_input_list()` | Next-turn input |
| `new_items` | Rich run metadata |
| `last_agent` | Last agent that ran |
| `last_response_id` | For server-managed continuation |
| `interruptions` | Pending approvals |

## Final output

```python
result = await Runner.run(agent, "Hello")
print(result.final_output)  # Final answer
```

## Continue conversation

```python
# Next-turn input
new_input = result.to_input_list() + [{"role": "user", "content": "Follow-up?"}]
result = await Runner.run(agent, new_input)
```

## Interruptions

```python
if result.interruptions:
    state = result.to_state()
    for interruption in result.interruptions:
        state.approve(interruption)
    result = await Runner.run(agent, state)
```
