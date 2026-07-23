# File inputs

Learn how to use files as file inputs in the OpenAI API.

## How it works

`input_file` processing depends on the file type:

* **PDF files:** On models with vision, extracts both text and page images.
* **Non-PDF documents:** Extracts text only.
* **Spreadsheet files:** Runs a spreadsheet-specific augmentation flow (up to 1,000 rows per sheet).

## PDF detail levels

Set the `detail` field to `auto`, `low`, or `high`:

```json
{
  "type": "input_file",
  "file_data": "data:application/pdf;base64,...",
  "detail": "high"
}
```

## File URLs

```bash
curl "https://api.openai.com/v1/responses" \
    -d '{
        "model": "gpt-5.6",
        "input": [{
            "role": "user",
            "content": [
                {"type": "input_file", "file_url": "https://example.com/doc.pdf"},
                {"type": "input_text", "text": "Summarize this document."}
            ]
        }]
    }'
```

## Uploading files

```bash
curl https://api.openai.com/v1/files \
    -F purpose="user_data" \
    -F file="@document.pdf"
```

## Usage considerations

* **File size:** Each file under 50 MB, combined limit 50 MB.
* **Vision required:** PDF parsing with text and images requires vision-capable models.
* **Token usage:** PDF parsing includes extracted text and page images in context.
