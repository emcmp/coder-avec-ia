# Migrate to the Responses API

The Responses API is our new API primitive, an evolution of Chat Completions.

**While Chat Completions remains supported, Responses is recommended for all new projects.**

## About the Responses API

The Responses API is a unified interface for building powerful, agent-like applications. It contains:
- Built-in tools like web search, file search, computer use, code interpreter, and remote MCPs.
- Seamless multi-turn interactions.
- Native multimodal support for text and images.

## Responses benefits

* **Better performance**: 3% improvement in SWE-bench with same prompt and setup.
* **Agentic by default**: Model can call multiple tools within one API request.
* **Lower costs**: 40% to 80% improvement in cache utilization.
* **Stateful context**: Use `store: true` to maintain state from turn to turn.
* **Flexible inputs**: Pass a string or a list of messages.

## Capabilities

| Feature | Chat Completions | Responses |
|---------|:---:|:---:|
| Text generation | ✅ | ✅ |
| Vision | ✅ | ✅ |
| Structured Outputs | ✅ | ✅ |
| Function calling | ✅ | ✅ |
| Web search | ❌ | ✅ |
| File search | ❌ | ✅ |
| Computer use | ❌ | ✅ |
| Code interpreter | ❌ | ✅ |
| MCP | ❌ | ✅ |
| Image generation | ❌ | ✅ |

## Migrating from Chat Completions

### 1. Update generation endpoints
From `post /v1/chat/completions` to `post /v1/responses`.

### 2. Map Messages to Items

| Chat Completions | Responses |
|---|---|
| `messages[]` | `input` as string or array |
| System guidance | Top-level `instructions` |
| Tool call | `function_call` output Item |
| Tool result | `function_call_output` input Item |

### 3. Update multi-turn conversations

Use `previous_response_id` for OpenAI-managed state, manual Item replay, or the Conversations API.

### 4. Decide when to use statefulness

Responses are stored by default. Set `store: false` to disable. For ZDR orgs, OpenAI enforces `store: false` automatically.

### 5. Update function definitions

In Responses, functions are internally tagged and default to strict mode.

### 6. Update Structured Outputs

Moved from `response_format` to `text.format`.

### 7. Update streaming consumers

Use typed server-sent events instead of delta chunks.

## Incremental rollout checklist

* Start with a simple text-generation flow.
* Update endpoint, request body, and output handling.
* Decide on state management approach.
* Migrate function definitions and verify outputs.
* Move Structured Outputs to `text.format`.
* Update streaming consumers.
* Replace custom orchestration with OpenAI-hosted tools where applicable.