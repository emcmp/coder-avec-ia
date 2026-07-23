# Configuration

SDK-wide defaults typically set once at startup.

## API Keys

```python
from agents import set_default_openai_key

set_default_openai_key("your-key")
```

## Tracing

```python
from agents import set_tracing_export_api_key, set_tracing_disabled

set_tracing_export_api_key("tracing-key")
set_tracing_disabled(False)
```

## Debug Logging

```python
from agents import enable_verbose_stdout_logging

enable_verbose_stdout_logging()
```
