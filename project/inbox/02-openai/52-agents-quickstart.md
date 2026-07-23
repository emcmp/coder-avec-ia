# Agents SDK Quickstart

## Install

```bash
pip install openai-agents
export OPENAI_API_KEY=sk-...
```

## Create and run your first agent

```python
from agents import Agent, Runner

agent = Agent(
    name="History tutor",
    instructions="Answer history questions clearly.",
    model="gpt-5.6",
)

result = await Runner.run(agent, "When did the Roman Empire fall?")
print(result.final_output)
```

## Add tools

```python
from agents import function_tool

@function_tool
def history_fun_fact() -> str:
    """Return a short history fact."""
    return "Sharks are older than trees."

agent = Agent(name="Tutor", tools=[history_fun_fact])
```

## Add specialist agents

```python
history_tutor = Agent(name="History tutor", handoff_description="History specialist.")
math_tutor = Agent(name="Math tutor", handoff_description="Math specialist.")

triage_agent = Agent(
    name="Triage",
    handoffs=[history_tutor, math_tutor],
)
```
