# Codex CLI

Codex CLI is a coding agent from OpenAI that runs locally on your computer.

If you want Codex in your code editor (VS Code, Cursor, Windsurf), [install in your IDE](https://developers.openai.com/codex/ide).
If you want the desktop app experience, run `codex app` or visit [the Codex App page](https://chatgpt.com/codex?app-landing-page=true).
If you are looking for the _cloud-based agent_ from OpenAI, **Codex Web**, go to [chatgpt.com/codex](https://chatgpt.com/codex).

---

## Quickstart

### Installing and running Codex CLI

Run the following on Mac or Linux to install Codex CLI:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Run the following on Windows to install Codex CLI:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

Codex CLI can also be installed via the following package managers:

```bash
# Install using npm
npm install -g @openai/codex

# Install using Homebrew
brew install --cask codex
```

Then simply run `codex` to get started.

You can also go to the [latest GitHub Release](https://github.com/openai/codex/releases/latest) and download the appropriate binary for your platform.

Each GitHub Release contains many executables, but in practice, you likely want one of these:

* macOS
  * Apple Silicon/arm64: `codex-aarch64-apple-darwin.tar.gz`
  * x86_64 (older Mac hardware): `codex-x86_64-apple-darwin.tar.gz`
* Linux
  * x86_64: `codex-x86_64-unknown-linux-musl.tar.gz`
  * arm64: `codex-aarch64-unknown-linux-musl.tar.gz`

Each archive contains a single entry with the platform baked into the name (e.g., `codex-x86_64-unknown-linux-musl`), so you likely want to rename it to `codex` after extracting it.

### Using Codex with your ChatGPT plan

Run `codex` and select **Sign in with ChatGPT**. We recommend signing into your ChatGPT account to use Codex as part of your Plus, Pro, Business, Edu, or Enterprise plan. [Learn more about what's included in your ChatGPT plan](https://help.openai.com/en/articles/11369540-codex-in-chatgpt).

You can also use Codex with an API key, but this requires [additional setup](https://developers.openai.com/codex/auth#sign-in-with-an-api-key).

## Docs

* [**Codex Documentation**](https://developers.openai.com/codex)
* [**Contributing**](https://github.com/openai/codex/blob/main/docs/contributing.md)
* [**Installing & building**](https://github.com/openai/codex/blob/main/docs/install.md)
* [**Open source fund**](https://github.com/openai/codex/blob/main/docs/open-source-fund.md)

This repository is licensed under the [Apache-2.0 License](https://github.com/openai/codex/blob/main/LICENSE).
