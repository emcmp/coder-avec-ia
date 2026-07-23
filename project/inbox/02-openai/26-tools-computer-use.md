# Computer Use

> Source: https://developers.openai.com/api/docs/guides/tools-computer-use

Build an agent that can operate software through the user interface.

Computer use lets a model operate software through the UI. It can inspect screenshots, return interface actions for your code to execute, or work through a custom harness.

## Prepare a Safe Environment

Before you begin, prepare an environment that can capture screenshots and run the returned actions. Use an isolated environment whenever possible.

### Set up a local browsing environment

Install Playwright:

```bash
# Python
pip install playwright

# JavaScript
npm i playwright && npx playwright install
```

Start a browser:

```javascript
import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: false,
  chromium_sandbox: true,
  env: {},
  args: ["--disable-extensions", "--disable-file-system"],
});
const page = await browser.newPage({
  viewport: { width: 1280, height: 720 },
});
```

## Choose an Integration Path

1. **Built-in Computer use loop** — The model returns structured UI actions (clicks, typing, scrolling)
2. **Custom tool or harness** — Use your existing Playwright, Selenium, or VNC harness
3. **Code-execution harness** — The model writes and runs short scripts in a runtime

## Option 1: Built-in Computer use Loop

The model looks at the current UI through a screenshot, returns actions, and your harness executes those actions.

### 1. Send the first request

```python
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-5.6",
    tools=[{"type": "computer"}],
    input="Check whether the Filters panel is open. If not, click Show filters.",
)
```

### 2. Handle screenshot-first turns

The model returns a `computer_call` with a `screenshot` request.

### 3. Run every returned action

```json
{
  "type": "computer_call",
  "call_id": "call_002",
  "actions": [
    {"type": "click", "button": "left", "x": 405, "y": 157},
    {"type": "type", "text": "penguin"}
  ]
}
```

### 4. Capture and return the updated screenshot

```python
def capture_screenshot(page):
    return page.screenshot(type="png")
```

Send the screenshot back as `computer_call_output`.

### 5. Repeat until done

Use `previous_response_id` on each follow-up turn.

## Possible Computer Use Actions

- `click`, `double_click`, `scroll`, `type`, `wait`
- `keypress`, `drag`, `move`, `screenshot`
