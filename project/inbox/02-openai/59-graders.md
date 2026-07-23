# Graders

Graders compare reference answers to model outputs, scoring 0-1.

## Types

| Type | Use case |
|------|----------|
| String check | Pass/fail exact match |
| Text similarity | Fuzzy match with metrics |
| Score model grader | LLM-as-judge |
| Python code execution | Custom logic |

## String check

```json
{
  "type": "string_check",
  "operation": "eq",
  "input": "{{ sample.output_text }}",
  "reference": "{{ item.label }}"
}
```

## Text similarity

```json
{
  "type": "text_similarity",
  "evaluation_metric": "cosine",
  "pass_threshold": 0.8
}
```

## Multigrader

```json
{
  "type": "multi",
  "graders": {"name": {...}, "email": {...}},
  "calculate_output": "(name + email) / 2"
}
```
