# External Models

Run evals on non-OpenAI models.

## Third-party models

Available providers:
- Google
- Anthropic (AWS Bedrock)
- Together
- Fireworks

### Billing limits

| Tier | Monthly limit |
|------|---------------|
| Tier 1 | $5 |
| Tier 2 | $25 |
| Tier 3 | $50 |
| Tier 4 | $100 |
| Tier 5 | $200 |

## Custom endpoints

Configure a custom provider:
1. Enable "Custom providers for evaluations" in organization settings
2. Go to Settings > Evaluations tab
3. Provide endpoint URL (OpenAI-compatible) and API key
4. Specify model names (slugs)
5. Verify the connection

## Running evals

Select external model from model picker in datasets or evals.
