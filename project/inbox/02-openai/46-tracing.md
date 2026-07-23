# Tracing

Built-in tracing for debugging, visualizing, and monitoring agent workflows.

## Overview

Tracing is enabled by default. Collects LLM generations, tool calls, handoffs, guardrails, and custom events.

## Disable tracing

1. Env var: `OPENAI_AGENTS_DISABLE_TRACING=1`
2. Code: `set_tracing_disabled(True)`
3. Per-run: `RunConfig(tracing_disabled=True)`

## Traces and spans

- **Traces**: End-to-end workflow operations
- **Spans**: Operations with start/end time (nested hierarchy)

## Default tracing

SDK automatically traces:
- Runner invocations
- Model turns
- Agent runs
- LLM generations
- Function tool calls
- Guardrails
- Handoffs
- Audio I/O

## Higher level traces

```python
from agents import trace

with trace("Joke workflow"):
    first_result = await Runner.run(agent, "Tell me a joke")
    second_result = await Runner.run(agent, f"Rate this joke: {first_result.final_output}")
```

## Sensitive data

Control with `RunConfig.trace_include_sensitive_data`.

## Ecosystem integrations

Weights & Biases, Arize-Phoenix, MLflow, Braintrust, LangSmith, Langfuse, Langtrace, Comet Opik, and more.
