---
title: Git & GitHub — Version Control Defense
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [git, github, level-1, tier-3]
---

# 🧰 Git & GitHub

> [!important] Resume tie-in
> BTracker is open-sourced on GitHub — interviewers may probe both the *mechanics* and the *workflow discipline*. 15 minutes of this note covers everything asked.

---

## 1 · Git vs GitHub — the classic opener

> *"Git is the **version control system** — local, distributed, tracks snapshots. GitHub is a **hosting platform** for Git repositories adding collaboration: PRs, issues, CI, code review. Git works without GitHub; GitHub is useless without Git."*

- **Distributed** = every clone is a full repository with history — commit offline, push later
- Git stores **snapshots** (not diffs) with deduplication — cheap branching is the design consequence

---

## 2 · The Core Model

```text
working dir ──add──► staging area ──commit──► local repo ──push──► remote
   ◄────────── checkout/restore ──────────┘         ◄──pull/fetch──┘
```

| Command | Does |
|---|---|
| `git init` / `git clone URL` | create / copy a repo |
| `git status` · `git log --oneline` | what's happening |
| `git add -p` | stage interactively, hunk by hunk |
| `git commit -m "msg"` | snapshot the staged area |
| `git push` / `git pull` | sync with remote |
| `git branch` / `git switch -c feat` | branch / create-and-move |
| `git merge` / `git rebase` | integrate history (below) |
| `git restore --staged file` | unstage |
| `git revert <sha>` / `git reset` | undo (below) |
| `git stash` | park work-in-progress |

**Commit discipline:** small, single-purpose commits, imperative messages ("Add rolling-origin harness" not "changes"); `.gitignore` for secrets, data, `__pycache__`, `.venv`.

---

## 3 · Branch, Merge, Rebase

```text
main:     A──B──E──F
                 └─D──D2── feature        rebase = replay commits on new base
merge:    A──B──C(main)──M(fusion)        merge = preserve both histories + merge commit
```

| | Merge | Rebase |
|---|---|---|
| History | preserves truth + merge commit | linear, rewritten |
| Use | shared/public branches | your own unpushed branches |
| Danger | noise | rewriting shared history (never rebase pushed main) |

**Merge conflict:** both branches touched the same lines → Git marks `<<<<<<<`/`=======`/`>>>>>>>` → you *choose/combine* the content, `git add`, `git commit`. The fix is editorial, not mechanical.

---

## 4 · The Pull-Request Workflow — how teams actually work

```text
1. git switch -c feat/rolling-origins     ← branch per task
2. commit small, push to origin
3. open PR: description, what changed, how to test
4. code review → address comments → CI runs (tests, lint)
5. squash-merge to main → delete branch
```

**What reviewers look for:** correctness, tests, naming, no dead code, no secrets, diff size reviewable. **PR etiquette:** small diffs, self-review before requesting, description that stands alone.

**CI/CD in one line:** *"CI runs tests on every push/PR so main is always green; CD automates deployment of green builds — GitHub Actions is YAML-defined jobs on GitHub events."*

---

## 5 · Undo — the hierarchy (know which is safe)

| Situation | Tool | Safety |
|---|---|---|
| Unstage a file | `git restore --staged` | ✅ harmless |
| Discard local edits | `git restore file` | ⚠️ loses edits |
| Undo a **pushed** commit | `git revert <sha>` (new inverse commit) | ✅ safe for shared history |
| Undo a **local** commit | `git reset --soft HEAD~1` (keep changes) / `--hard` (delete) | local only |
| WIP interruption | `git stash` / `git stash pop` | ✅ |

> [!important] The one rule you must state
> **Never `push --force` or rewrite history on shared branches** — `--force-with-lease` on your *own* feature branches only. In interviews, the willingness to say "never force-push main" signals real experience.

---

## 6 · Git for Data Science — your angle

- **Reproducibility:** commit code + config + seed values; *never* commit data/secrets — reference data by versioned location (your SIRP manifests mindset → [[../02_ANALYTICS/Reproducibility]])
- **Notebooks:** commit cleaned outputs (`nbstripout`) or favor scripts; notebooks are terrible for merges
- **Experiment tracking complements Git:** Git versions *code*; experiments need their own registry (→ [[MLOps]])
- **GitHub vocabulary:** issues, labels, milestones, releases/tags, fork (no write access), `gh` CLI

---

## ⚡ Rapid-Fire Q&A

> **`git fetch` vs `git pull`?**
> Fetch downloads remote commits without touching your working branch; pull = fetch + merge/rebase into current branch.

> **Merge conflict — walk me through it.**
> Git marks both versions; I edit to the correct combined content, `add`, `commit`. Prevention: small branches, short-lived, communicate on shared files.

> **When rebase over merge?**
> My own unpushed feature commits onto fresh main — clean linear history. Never on shared branches.

> **`git reset` vs `git revert`?**
> Reset moves the branch pointer (local, history-rewriting); revert adds an inverse commit (safe on shared history).

> **What goes in .gitignore?**
> Secrets/env files, data artifacts, virtualenvs, build outputs, notebook outputs — anything reproducible or sensitive.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Reproducibility stack | [[../02_ANALYTICS/Reproducibility]] |
| CI/CD in production terms | [[Production_Concepts]] · [[MLOps]] |
| Your open-sourced product | [[Production_Concepts]] |
