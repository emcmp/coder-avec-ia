# OpenAI Agents SDK

## Overview

The OpenAI Agents SDK provides a framework for building multi-agent applications with the Responses API.

## Quickstart

### Setup & Installation

```bash
mkdir agents-app && cd agents-app
python -m venv .venv
# Activate: source .venv/bin/activate (Linux/Mac) or .venv\Scripts\activate (Windows)
pip install openai-agents
export OPENAI_API_KEY="your-key"
```

### Building Your Initial Agent

```python
from agents import Agent, Runner

agent = Agent(
    name="Assistant",
    instructions="You are a helpful assistant.",
    model="gpt-5.6"
)

result = await Runner.run(agent, "What is the capital of France?")
print(result.final_output)
```

### Adding Functional Capabilities

```python
from agents import function_tool

@function_tool
def get_weather(city: str) -> str:
    """Get the weather for a given city."""
    return f"The weather in {city} is sunny."

agent = Agent(
    name="Assistant",
    tools=[get_weather],
)
```

### Multi-Agent Coordination

```python
specialist_1 = Agent(name="Coder", instructions="You are a coding expert.")
specialist_2 = Agent(name="Writer", instructions="You are a writing expert.")

dispatcher = Agent(
    name="Dispatcher",
    handoffs=[specialist_1, specialist_2],
)
```

## Key Features

- Multi-agent orchestration with handoffs
- Tool integration with function calling
- Session management and persistence
- Guardrails and guardrail agents
- Tracing and observability
- Sandbox execution environments