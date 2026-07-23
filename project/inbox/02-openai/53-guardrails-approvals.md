# Guardrails and Human Review

## Overview

- **Guardrails**: Automatically verify input, output, or tool actions
- **Human review**: Pause for manual approval of sensitive tasks

## Blocking Guardrail

```python
@input_guardrail
async def math_guardrail(ctx, agent, input):
    result = await Runner.run(guardrail_agent, input)
    return GuardrailFunctionOutput(
        output_info=result.final_output,
        tripwire_triggered=result.final_output.is_math_homework,
    )
```

## Human Approval

```python
@function_tool(needs_approval=True)
async def cancel_order(order_id: int) -> str:
    return f"Cancelled order {order_id}"

result = await Runner.run(agent, "Cancel order 123.")

if result.interruptions:
    state = result.to_state()
    for interruption in result.interruptions:
        state.approve(interruption)
    result = await Runner.run(agent, state)
```

## Approval Lifecycle

1. Approval interruption recorded
2. Result includes `interruptions` and resumable `state`
3. App approves/rejects
4. Execution resumes from saved state
