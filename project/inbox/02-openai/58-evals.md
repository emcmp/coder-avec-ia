# Working with Evals

Evaluations test model outputs to ensure they meet criteria.

## Create an eval

```python
from openai import OpenAI

client = OpenAI()

eval_obj = client.evals.create(
    name="IT Ticket Categorization",
    data_source_config={
        "type": "custom",
        "item_schema": {
            "properties": {
                "ticket_text": {"type": "string"},
                "correct_label": {"type": "string"},
            }
        },
        "include_sample_schema": True,
    },
    testing_criteria=[{
        "type": "string_check",
        "name": "Match output to human label",
        "input": "{{ sample.output_text }}",
        "operation": "eq",
        "reference": "{{ item.correct_label }}",
    }],
)
```

## Run an eval

```python
run = client.evals.runs.create(
    "YOUR_EVAL_ID",
    data_source={
        "type": "responses",
        "model": "gpt-5.6",
        "input_messages": {"type": "template", "template": [...]},
        "source": {"type": "file_id", "id": "YOUR_FILE_ID"},
    },
)
```

## Analyze results

```python
run = client.evals.runs.retrieve("YOUR_EVAL_ID", "YOUR_RUN_ID")
print(run.result_counts)  # {"total": 3, "passed": 3, "failed": 0}
```
