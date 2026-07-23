# Models

## Choosing a model setup

- **OpenAI only:** Default OpenAI provider with Responses model path
- **WebSocket:** Enable websocket transport
- **Non-OpenAI:** Built-in provider integration points
- **Mixed:** Select providers per run or per agent

## Default model

```python
from agents import Agent, RunConfig, Runner

agent = Agent(name="Assistant", instructions="You're a helpful agent.")

result = await Runner.run(
    agent, "Hello",
    run_config=RunConfig(model="gpt-5.6-sol"),
)
```

## GPT-5.6 models

```python
from agents import Agent, ModelSettings
from openai.types.shared import Reasoning

agent = Agent(
    name="Research agent",
    model="gpt-5.6-sol",
    model_settings=ModelSettings(
        reasoning=Reasoning(mode="pro", effort="max", context="all_turns"),
    ),
)
```

## Non-OpenAI models

```python
from agents import Agent, AsyncOpenAI, OpenAIChatCompletionsModel, set_tracing_disabled

set_tracing_disabled(disabled=True)
client = AsyncOpenAI(api_key="key", base_url="https://provider.com")
model = OpenAIChatCompletionsModel(model="Model_Name", openai_client=client)

agent = Agent(name="Agent", model=model)
```

## Advanced settings

```python
agent = Agent(
    name="Research agent",
    model="gpt-5.6-sol",
    model_settings=ModelSettings(
        parallel_tool_calls=False,
        truncation="auto",
        store=True,
        context_management=[{"type": "compaction", "compact_threshold": 200000}],
    ),
)
```
