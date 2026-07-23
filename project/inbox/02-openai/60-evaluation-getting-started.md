# Getting Started with Datasets

## Create a dataset

1. Go to **Datasets** tab on the evaluation page
2. Click **Create**
3. Add data rows with input and ground truth columns

## Build a prompt

1. Click **Add prompt** in the dataset
2. Configure model, temperature, tools
3. Add variables and write system message

## Generate and annotate

1. Click **Generate output**
2. Annotate outputs with ratings and feedback
3. Use annotations as ground truth for improvement

## Add graders

Grader types:
- **String check**: Exact match
- **Text similarity**: Semantic similarity
- **Score model**: Numeric rating
- **Python code**: Custom logic

```
Workflow:
1. Create dataset with test cases
2. Build prompt with variables
3. Generate outputs
4. Annotate with human feedback
5. Add graders for automated evaluation
6. Iterate on prompt to improve scores
```
