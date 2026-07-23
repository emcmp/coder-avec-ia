# Guardrails

Checks and validations on user input and agent output.

## Types

1. **Input guardrails**: Run on initial user input
2. **Output guardrails**: Run on final agent output
3. **Tool guardrails**: Run on function-tool invocations

## Input guardrails

```python
from agents import input_guardrail, GuardrailFunctionOutput

@input_guardrail
async def math_guardrail(ctx, agent, input):
    result = await Runner.run(guardrail_agent, input)
    return GuardrailFunctionOutput(
        output_info=result.final_output,
        tripwire_triggered=result.final_output.is_math_homework,
    )

agent = Agent(
    name="Support",
    input_guardrails=[math_guardrail],
)
```

## Execution modes

- **Parallel** (default): Guardrail runs concurrently with agent
- **Blocking** (`run_in_parallel=False`): Guardrail runs before agent starts

## Tool guardrails

```python
@tool_input_guardrail
def block_secrets(data):
    if "sk-" in json.dumps(data.context.tool_arguments):
        return ToolGuardrailFunctionOutput.reject_content("Remove secrets.")
    return ToolGuardrailFunctionOutput.allow()

@function_tool(tool_input_guardrails=[block_secrets])
def classify_text(text: str) -> str:
    return f"length:{len(text)}"
```
