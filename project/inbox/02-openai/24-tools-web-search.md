# Web Search

> Source: https://developers.openai.com/api/docs/guides/tools-web-search

Allow models to search the web for the latest information before generating a response.

Web search allows models to access up-to-date information from the internet and provide answers with sourced citations.

## Three Types of Web Search

1. **Non-reasoning web search:** Fast, ideal for quick lookups. The model passes the query to the web search tool.
2. **Agentic search with reasoning models:** The model actively manages the search process, can perform multiple searches, and decide whether to keep searching.
3. **Deep research:** Extended investigations by reasoning models, often tapping into hundreds of sources. Can run for several minutes.

## Using Web Search

```javascript
import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-5.6",
  tools: [{ type: "web_search" }],
  input: "What was a positive news story from today?",
});

console.log(response.output_text);
```

## Output and Citations

Model responses include:
- A `web_search_call` output item with the call ID and action taken
- A `message` output item with the text result and inline citations

## Domain Filtering

Limit results to specific domains:

```json
{
  "type": "web_search",
  "filters": {
    "allowed_domains": ["pubmed.ncbi.nlm.nih.gov", "clinicaltrials.gov"],
    "blocked_domains": ["reddit.com", "wikipedia.org"]
  }
}
```

## User Location

Refine search results by geography:

```python
response = client.responses.create(
    model="gpt-5.6",
    tools=[{
        "type": "web_search",
        "user_location": {
            "type": "approximate",
            "country": "GB",
            "city": "London",
        }
    }],
    input="What are the best restaurants near me?",
)
```

## Live Internet Access

Control whether the web search tool fetches live content:
- `external_web_access: false` — offline/cache-only mode
- `external_web_access: true` — live access (default)
