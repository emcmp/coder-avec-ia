# Handoffs

Handoffs allow an agent to delegate tasks to another agent.

## Creating a handoff

```python
from agents import Agent, handoff

billing_agent = Agent(name="Billing agent")
refund_agent = Agent(name="Refund agent")

triage_agent = Agent(
    name="Triage agent",
    handoffs=[billing_agent, handoff(refund_agent)]
)
```

### Customizing handoffs

```python
handoff_obj = handoff(
    agent=agent,
    on_handoff=on_handoff_callback,
    tool_name_override="custom_handoff_tool",
    tool_description_override="Custom description",
)
```

## Handoff inputs

```python
from pydantic import BaseModel

class EscalationData(BaseModel):
    reason: str

async def on_handoff(ctx, input_data: EscalationData):
    print(f"Escalation agent called with reason: {input_data.reason}")

handoff_obj = handoff(
    agent=agent,
    on_handoff=on_handoff,
    input_type=EscalationData
)
```

## Input filters

```python
from agents.extensions import handoff_filters

handoff_obj = handoff(
    agent=agent,
    input_filter=handoff_filters.remove_all_tools,
)
```

## Recommended prompts

```python
from agents.extensions.handoff_prompt import RECOMMENDED_PROMPT_PREFIX

billing_agent = Agent(
    name="Billing agent",
    instructions=f"""{RECOMMENDED_PROMPT_PREFIX}
    <your prompt here>.""",
)
```
