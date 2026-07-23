# Evaluation Best Practices

## Key principles

1. **Start with traces**: Use traces to debug behavior before formalizing evals
2. **Build diverse datasets**: Cover edge cases and blind spots
3. **Iterate continuously**: Expand test data as you find new failure modes
4. **Use multiple graders**: Combine automated checks with human review
5. **Monitor regressions**: Track performance across prompt/model changes

## Dataset design

- Include representative examples from your production data
- Balance categories and edge cases
- Add new test cases as you discover failure modes
- Use ground truth labels for automated grading

## Grading strategy

- String check for exact outputs
- Text similarity for open-ended responses
- Score model graders for subjective quality
- Python graders for complex logic
- Multigraders for multi-criteria evaluation

## Common pitfalls

- Overfitting to eval data
- Insufficient test coverage
- Biased ground truth
- Reward hacking (model gaming the grader)
