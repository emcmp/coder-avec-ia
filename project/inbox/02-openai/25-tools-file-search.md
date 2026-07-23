# File Search

> Source: https://developers.openai.com/api/docs/guides/tools-file-search

File search enables models to retrieve information from a knowledge base of previously uploaded files through semantic and keyword search.

## How to Use

### 1. Upload the file

```python
from openai import OpenAI
client = OpenAI()

with open("document.pdf", "rb") as file:
    result = client.files.create(file=file, purpose="assistants")
    print(result.id)
```

### 2. Create a vector store

```python
vector_store = client.vector_stores.create(name="knowledge_base")
print(vector_store.id)
```

### 3. Add the file to the vector store

```python
result = client.vector_stores.files.create(
    vector_store_id=vector_store.id,
    file_id=file_id
)
```

### 4. Use the file search tool

```python
response = client.responses.create(
    model="gpt-5.6",
    input="What is deep research by OpenAI?",
    tools=[{
        "type": "file_search",
        "vector_store_ids": ["<vector_store_id>"]
    }]
)
print(response)
```

## Retrieval Customization

### Limit results

```python
response = client.responses.create(
    model="gpt-5.6",
    input="What is deep research?",
    tools=[{
        "type": "file_search",
        "vector_store_ids": ["<id>"],
        "max_num_results": 2
    }]
)
```

### Metadata filtering

```python
tools=[{
    "type": "file_search",
    "vector_store_ids": ["<id>"],
    "filters": {
        "type": "in",
        "key": "category",
        "value": ["blog", "announcement"]
    }
}]
```

## Supported Files

| Format | MIME type |
|---|---|
| `.c`, `.cpp`, `.cs` | `text/x-c`, `text/x-c++`, `text/x-csharp` |
| `.css` | `text/css` |
| `.doc`, `.docx` | `application/msword`, `application/vnd.openxmlformats...` |
| `.html` | `text/html` |
| `.java`, `.js`, `.ts` | `text/x-java`, `text/javascript`, `text/typescript` |
| `.json` | `application/json` |
| `.md` | `text/markdown` |
| `.pdf` | `application/pdf` |
| `.php`, `.py`, `.rb` | `text/x-php`, `text/x-python`, `text/x-ruby` |
| `.pptx` | `application/vnd.openxmlformats...` |
| `.sh` | `application/x-sh` |
| `.tex` | `text/x-tex` |
| `.txt` | `text/plain` |
