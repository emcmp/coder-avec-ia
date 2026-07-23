# Background mode

Run long running tasks asynchronously in the background.

Background mode enables you to execute long-running tasks on models like GPT-5.2 and GPT-5.2 Pro reliably, without timeouts or connectivity issues.

## Generate a response in the background

```python
resp = client.responses.create(
  model="gpt-5.6",
  input="Write a very long novel about otters in space.",
  background=True,
)

print(resp.status)
```

## Polling background responses

```python
while resp.status in {"queued", "in_progress"}:
  print(f"Current status: {resp.status}")
  sleep(2)
  resp = client.responses.retrieve(resp.id)

print(f"Final status: {resp.status}\nOutput:\n{resp.output_text}")
```

## Cancelling a background response

```python
resp = client.responses.cancel("resp_123")
```

## Streaming a background response

Create with both `background` and `stream` set to `true` for immediate streaming.

## Limits

1. Background requests from ZDR projects run with `store=false`.
2. To cancel a synchronous response, terminate the connection.
3. You can only start a new stream from a background response if created with `stream=true`.