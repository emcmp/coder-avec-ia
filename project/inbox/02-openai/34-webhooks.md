# Webhooks

OpenAI webhooks allow you to receive real-time notifications about events in the API.

## Overview

Webhooks are delivered to an HTTP endpoint you control, following the Standard Webhooks specification.

### Python Example

```python
from openai import OpenAI, InvalidWebhookSignatureError
from flask import Flask, request, Response

app = Flask(__name__)
client = OpenAI(webhook_secret=os.environ["OPENAI_WEBHOOK_SECRET"])

@app.route("/webhook", methods=["POST"])
def webhook():
    try:
        event = client.webhooks.unwrap(request.data, request.headers)
        if event.type == "response.completed":
            response = client.responses.retrieve(event.data.id)
            print("Response output:", response.output_text)
        return Response(status=200)
    except InvalidWebhookSignatureError:
        return Response("Invalid signature", status=400)
```

### Node.js Example

```javascript
const client = new OpenAI({ webhookSecret: process.env.OPENAI_WEBHOOK_SECRET });

app.post("/webhook", async (req, res) => {
  const event = await client.webhooks.unwrap(req.body, req.headers);
  if (event.type === "response.completed") {
    const response = await client.responses.retrieve(event.data.id);
    console.log("Response output:", response.output_text);
  }
  res.status(200).send();
});
```
