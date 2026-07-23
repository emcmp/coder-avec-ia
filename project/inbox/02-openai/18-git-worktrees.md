# Git Worktrees

> Source: https://learn.chatgpt.com/docs/environments/git-worktrees

Use Git worktrees in Codex in the ChatGPT desktop app to run chats in parallel.

Worktrees let Codex run multiple independent chats in the same project without interfering with each other. For Git repositories, [scheduled tasks](/codex/automations) can run on dedicated background worktrees so they don't conflict with your ongoing work.

## What's a worktree

Worktrees only work in projects that are part of a Git repository. A worktree allows you to create a second copy ("checkout") of your repository. Each worktree has its own copy of every file in your repo but they all share the same metadata (`.git` folder) about commits, branches, etc.

## Terminology

- **Local checkout**: The repository that you created. Sometimes referred to as **Local** in the ChatGPT desktop app.
- **Worktree**: A Git worktree that was created from your local checkout in the ChatGPT desktop app.
- **Handoff**: The flow that moves a chat between Local and Worktree. Codex handles the Git operations required to move your work safely between them.

## Getting started

1. **Select "Worktree"** — In the new chat view, select **Worktree** under the composer.
2. **Select the starting branch** — Choose the Git branch to base the worktree on.
3. **Submit your prompt** — Codex creates a Git worktree based on the branch you selected.
4. **Choose where to keep working** — Keep working directly on the worktree or hand the chat off to your local checkout.

## Working between Local and Worktree

### Option 1: Working on the worktree

If you want to stay exclusively on the worktree, turn your worktree into a branch using the **Create branch here** button in the chat header.

From here you can commit your changes, push your branch to your remote repository, and open a pull request on GitHub.

### Option 2: Handing a chat off to Local

If you want to bring a chat into the foreground, select **Hand off** in the chat header and move it to **Local**.

Codex handles the Git steps required to move the chat safely between the worktree and your local checkout.

Each chat keeps the same associated worktree over time. If you hand the chat back to a worktree later, Codex returns it to that same background environment.

## Advanced details

### Codex-managed and permanent worktrees

By default, chats use a Codex-managed worktree. These are meant to feel lightweight and disposable.

If you want a long-lived environment, create a permanent worktree from the three-dot menu on a project in the sidebar. Permanent worktrees aren't automatically deleted.

### How Codex manages worktrees

Codex creates worktrees in `$CODEX_HOME/worktrees`. The starting commit is the `HEAD` commit of the branch selected when you start your chat. The worktree isn't checked out as a branch — it's in a [detached HEAD](https://git-scm.com/docs/git-checkout#_detached_head) state.

### Copy ignored local files into managed worktrees

Add a `.worktreeinclude` file to the repository root and list the ignored paths or `.gitignore`-style patterns to copy when Codex creates a managed worktree:

```
# .worktreeinclude
.env
.env.local
config/secrets.json
```

### Worktree cleanup

By default, Codex keeps your most recent 15 Codex-managed worktrees. You can change this limit or turn off automatic deletion in settings.

Codex-managed worktrees won't be deleted automatically if:
- A pinned chat is tied to it
- The chat is still in progress
- The worktree is a permanent worktree

### Frequently asked questions

**Can I control where worktrees are created?**

Yes. Codex creates managed worktrees under `$CODEX_HOME/worktrees` by default. To choose another location, open **Settings > Worktrees** and change **Worktree root**.

**Can I move a chat between Local and Worktree?**

Yes. Use **Hand off** in the chat header to move a chat between your local checkout and a worktree.

**What happens to chats if a worktree is deleted?**

Chats can remain in your history even if the underlying worktree directory is deleted. For Codex-managed worktrees, Codex saves a snapshot before deleting the worktree and offers to restore it if you reopen the associated chat.
