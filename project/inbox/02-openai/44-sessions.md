# Sessions

Built-in session memory to maintain conversation history across multiple agent runs.

## Quick start

```python
from agents import Agent, Runner, SQLiteSession

agent = Agent(name="Assistant", instructions="Reply very concisely.")
session = SQLiteSession("conversation_123")

# First turn
result = await Runner.run(agent, "What city is the Golden Gate Bridge in?", session=session)
print(result.final_output)  # "San Francisco"

# Second turn - agent remembers context
result = await Runner.run(agent, "What state is it in?", session=session)
print(result.final_output)  # "California"
```

## Built-in session implementations

| Session type | Best for |
|---|---|
| `SQLiteSession` | Local development, file-backed |
| `AsyncSQLiteSession` | Async SQLite with aiosqlite |
| `RedisSession` | Shared memory across workers |
| `SQLAlchemySession` | Production with existing databases |
| `MongoDBSession` | MongoDB apps, multi-process |
| `DaprSession` | Cloud-native with Dapr sidecars |
| `OpenAIConversationsSession` | Server-managed OpenAI storage |

## Memory operations

```python
items = await session.get_items()
await session.add_items(new_items)
last_item = await session.pop_item()
await session.clear_session()
```

## Session sharing

Different agents can share the same session:

```python
support_agent = Agent(name="Support")
billing_agent = Agent(name="Billing")
session = SQLiteSession("user_123")

result1 = await Runner.run(support_agent, "Help me", session=session)
result2 = await Runner.run(billing_agent, "What are my charges?", session=session)
```
