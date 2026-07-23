# Streaming API Responses

> Source: https://developers.openai.com/api/docs/guides/streaming-responses

Learn how to stream model responses from the OpenAI API using server-sent events.

By default, the API generates the model's entire output before sending it back in a single HTTP response. Streaming allows you to print or process the beginning of the model's output while the full response continues to generate.

## Enable Streaming

Set `stream=True` in your request to the Responses endpoint:

**Python**

```python
from openai import OpenAI
client = OpenAI()

stream = client.responses.create(
    model="gpt-5.6",
    input=[{"role": "user", "content": "Say 'double bubble bath' ten times fast."}],
    stream=True,
)

for event in stream:
    print(event)
```

**JavaScript**

```javascript
import OpenAI from "openai";
const client = new OpenAI();

const stream = await client.responses.create({
  model: "gpt-5.6",
  input: [{role: "user", content: "Say 'double bubble bath' ten times fast."}],
  stream: true,
});

for await (const event of stream) {
  console.log(event);
}
```

## Common Events

- `response.created`
- `response.output_text.delta`
- `response.completed`
- `error`

## Stream a Chat Completion

**Python**

```python
stream = client.chat.completions.create(
    model="gpt-5.6",
    messages=[{"role": "user", "content": "Say 'double bubble bath' ten times fast."}],
    stream=True,
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")
```

**JavaScript**

```javascript
const stream = await client.chat.completions.create({
  model: "gpt-5.6",
  messages: [{role: "user", content: "Say 'double bubble bath' ten times fast."}],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || "");
}
```

## Moderation Risk

Streaming makes it more difficult to moderate content, as partial completions may be more difficult to evaluate.
