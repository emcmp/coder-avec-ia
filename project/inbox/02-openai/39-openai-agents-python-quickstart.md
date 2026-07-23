# OpenAI Agents SDK Quickstart

## Setup

```bash
pip install openai-agents
export OPENAI_API_KEY="your-key"
```

## Building Your Initial Agent

```python
from agents import Agent, Runner

agent = Agent(
    name="Assistant",
    instructions="You are a helpful assistant.",
)

result = await Runner.run(agent, "What is the capital of France?")
print(result.final_output)
```

## Adding Functional Capabilities

```python
from agents import function_tool

@function_tool
def get_weather(city: str) -> str:
    """Get the weather for a given city."""
    return f"The weather in {city} is sunny."

agent = Agent(name="Assistant", tools=[get_weather])
```

## Multi-Agent Coordination

Define specialists and a dispatcher for handoffs:

```python
coder = Agent(name="Coder", instructions="You are a coding expert.")
writer = Agent(name="Writer", instructions="You are a writing expert.")

dispatcher = Agent(name="Dispatcher", handoffs=[coder, writer])

result = await Runner.run(dispatcher, user_input)
```
