# Codex Authentication

> Source: https://developers.openai.com/codex/auth (redirects to https://learn.chatgpt.com/docs/auth)

## Sign-In Methods

Codex clients support two primary sign-in methods:
- **ChatGPT subscription login**
- **Usage-based API key login**

Desktop, CLI, and IDE tools support both methods locally. Cloud-based Codex requires ChatGPT sign-in. Authentication choice dictates which administrative controls, data retention, and residency policies apply.

### Sign in with ChatGPT

Credentials are passed to Codex via a browser window after login:
- **Web:** Log in at `chatgpt.com` and select your workspace. Sessions persist in the browser.
- **Desktop App:** Choose `Continue to sign in` and finish the browser flow.
- **CLI:** Run `codex login` to trigger the default browser authentication.
- **IDE Extension:** Select `Sign in with ChatGPT` and complete the browser prompt.

### Sign in with an API Key

Retrieve keys from the OpenAI dashboard. API authentication routes billing through standard platform rates and follows API pricing.

- **Desktop App:** Select `Sign in another way`, input the key, and proceed.
- **CLI:** Pipe the key via stdin: `printenv OPENAI_API_KEY | codex login --with-api-key`
- **IDE Extension:** Choose `Use API Key`, enter the key, and confirm.

API keys are recommended for automated CLI workflows like CI/CD pipelines. Avoid using them in untrusted environments.

### Verify or Clear Credentials

- Use the profile menu to check active accounts or workspaces.
- Select `Log out` to end sessions in web or desktop clients.
- In the CLI, run `codex login status` to verify the method and `codex logout` to remove stored credentials.

## Enterprise Access Tokens

Admins can grant token permissions to enable non-interactive, trusted automation. Access tokens provide workspace controls and entitlements without browser prompts.

```bash
printenv CODEX_ACCESS_TOKEN | codex login --with-access-token
```

## Secure Codex Cloud

Enable multi-factor authentication (MFA) due to direct codebase interactions. SSO administrators should enforce MFA organization-wide. Email/password logins require MFA before cloud access.

## Session Caching

Login details are cached and shared between the CLI and IDE extensions. For ChatGPT sessions, tokens refresh automatically during active use. Credentials cache locally at `~/.codex/auth.json` or within the OS keychain.

## Credential Storage Configuration

Adjust the `cli_auth_credentials_store` setting in your config file:
- `file`: Saves to `auth.json` inside `CODEX_HOME`
- `keyring`: Uses the OS credential manager
- `auto`: Attempts OS storage first, falls back to file-based

Treat file-based caches like passwords; never commit or share them publicly.

## Enforce Login Methods or Workspaces

Administrators can restrict authentication pathways via managed configuration:

```toml
forced_login_method = "chatgpt" # or "api"
forced_chatgpt_workspace_id = "00000000-0000-0000-0000-000000000000"
```

Mismatched credentials will trigger an automatic logout.

## Login Diagnostics

Run `codex login` to generate a dedicated `codex-login.log` file for debugging browser or device-code failures.

## Custom CA Bundles

For corporate TLS proxies or private certificates:

```bash
export CODEX_CA_CERTIFICATE=/path/to/corporate-root-ca.pem
codex login
```

Codex will fallback to `SSL_CERT_FILE` if unset.

## Headless Device Authentication

Browser flows may fail in remote or restricted network environments.

### Device Code Authentication (Beta)

1. Enable device code login in workspace or personal security settings.
2. Run `codex login --device-auth` or select it in the UI.
3. Open the provided URL, authenticate, and enter the one-time code.

### Copy Cached Credentials

```bash
ssh user@remote 'mkdir -p ~/.codex'
scp ~/.codex/auth.json user@remote:~/.codex/auth.json
```

For Docker containers:
```bash
CONTAINER_HOME=$(docker exec MY_CONTAINER printenv HOME)
docker exec MY_CONTAINER mkdir -p "$CONTAINER_HOME/.codex"
docker cp ~/.codex/auth.json MY_CONTAINER:"$CONTAINER_HOME/.codex/auth.json"
```

### SSH Port Forwarding

Tunnel the localhost callback (default port 1455):

```bash
ssh -L 1455:localhost:1455 user@remote
```

## Alternative Model Providers

Custom providers in the configuration file support three auth modes:
- **OpenAI Auth:** Set `requires_openai_auth = true`
- **Environment Variable:** Set `env_key = "<VAR_NAME>"`
- **No Auth:** Leave both unset for local models
