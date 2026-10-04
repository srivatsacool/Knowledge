# Brain Knowledge Hub — GitHub Preparation & Runbook

**Target Repository**: [https://github.com/srivatsacool/Knowledge](https://github.com/srivatsacool/Knowledge)  
**Remote URL**: `https://github.com/srivatsacool/Knowledge.git`  
**Target Branch**: `main`  
**Current Git State**: Initialized, linked to `origin/main`  

---

## 1. Repository Status

The repository is now connected to GitHub:
- **Remote**: `origin` -> `https://github.com/srivatsacool/Knowledge.git`
- **Active Branch**: `main` (tracking `origin/main`)
- **Initial Commit**: Committed and pushed to `origin/main`.

---

## 2. Git Status & Exclusion Audit

The `.gitignore` file protects generated build artifacts, dependencies, and private working material from accidental commits:

### Checked Exclusions (`.gitignore`)
- `Website/dist/` *(Ephemeral generated build output)*
- `.wrangler/` *(Cloudflare local state)*
- `node_modules/`
- `.DS_Store`, `Thumbs.db`, `desktop.ini`
- `*.log`
- `_draft*` *(Private working material)*

---

## 3. Staging and Committing Full Repository Assets

Whenever you are ready to stage the full repository assets:

```powershell
cd D:\Brain\05_Knowledge
git add .
git commit -m "feat: sync full Brain Knowledge Hub platform, notebooks, and governance"
git push origin main
```

---

## 4. Branching Strategy for Future Development

To keep the production deployment stable while drafting new notebooks or enhancing the website, use these standardized branch prefixes:

| Branch Name | Purpose | Merging Rule |
| :--- | :--- | :--- |
| `main` | Production branch connected to Cloudflare Pages. | Merged only when `npm test` passes 100%. |
| `content/<topic>` | Drafting or updating a specific study notebook. | PR to `main` with companion `.meta.json`. |
| `feature/<name>` | Enhancing website layout, search engine, or scripts. | Tested locally before merging. |
| `research/<topic>` | Incubating experimental literature reviews or AI synthesis. | Kept as draft until reviewed. |
| `fix/<issue>` | Addressing broken links, typos, or responsive UI bugs. | Direct PR to `main`. |

---

## 5. Pre-Push Quality Checklist

Before pushing any new commit or pull request to GitHub:

- [ ] Run `cd D:\Brain\05_Knowledge\Website && npm test` (Ensure 0 failures).
- [ ] Check `git status` to ensure no `.env`, API keys, or private notes are staged.
- [ ] Ensure any private working material is prefixed with `_draft` or marked `"status": "draft"`.
- [ ] Confirm `Website/dist/` is ignored and not committed.
