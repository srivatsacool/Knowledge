# Brain Knowledge Hub — Cloudflare Pages & Deployment Handbook

This guide outlines the production deployment architecture, step-by-step setup, and operational runbook for deploying the **Brain Knowledge Hub** to Cloudflare Pages via GitHub.

---

## 1. Production Architecture Overview

The Brain Knowledge Hub is hosted as a high-performance, globally distributed static website via Cloudflare Pages edge network:

```
[Local Development]          [GitHub Repository]                [Cloudflare Edge Network]
D:\Brain\05_Knowledge  --->  github.com/srivatsacool/     --->  Cloudflare Pages
(Sources & Generator)        Knowledge (main)                   https://knowledge-du5.pages.dev
```

- **Origin**: GitHub repository containing knowledge sources, publishing code, templates, and documentation.
- **Build Engine**: Node.js static generator (`Website/scripts/build.js`) executing during the Cloudflare build hook.
- **Output Artifacts**: Self-contained static assets emitted to `Website/dist/`.
- **Zero Runtime Infrastructure**: No server, no database, no Docker containers, no external cloud dependencies.

---

## 2. Cloudflare Pages Configuration

### Recommended Settings (Repository Root Deployment)
When connecting the root `D:\Brain\05_Knowledge` repository:

| Setting | Value | Notes |
| :--- | :--- | :--- |
| **Framework preset** | `None` / `Custom` | Do not select Astro, Next.js, or Vite |
| **Build command** | `node Website/scripts/build.js` | Runs native Node build script in ~100ms |
| **Build output directory** | `Website/dist` | Directory containing all generated HTML & assets |
| **Root directory** | `/` | Repository root |
| **Node.js Version** | `18.x` or higher | Set via environment variable `NODE_VERSION: 20` |

### Alternative Settings (Website Subdirectory Deployment)
If you prefer setting the Cloudflare Root Directory to the publishing app:

| Setting | Value |
| :--- | :--- |
| **Root directory** | `Website` |
| **Build command** | `npm run build` *(or `node scripts/build.js`)* |
| **Build output directory** | `dist` |

---

## 3. Step-by-Step Cloudflare Pages Setup

### Step 1: Push Repository to GitHub
Ensure your local repository has been initialized, committed, and pushed to your GitHub account:
```powershell
cd D:\Brain\05_Knowledge
git init
git add .
git commit -m "feat: initialize Brain Knowledge Hub production publishing platform"
git remote add origin https://github.com/srivatsacool/brain-knowledge-hub.git
git branch -M main
git push -u origin main
```

### Step 2: Create Application in Cloudflare Dashboard
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, go to **Workers & Pages** > **Overview**.
3. Click **Create application** > select the **Pages** tab > click **Connect to Git**.
4. Authorize Cloudflare to access your GitHub account and select `brain-knowledge-hub`.

### Step 3: Configure Build & Deploy Settings
1. **Project name**: `brain-knowledge-hub` (or your preferred slug).
2. **Production branch**: `main`.
3. In **Build settings**:
   - **Framework preset**: `None`.
   - **Build command**: `node Website/scripts/build.js`.
   - **Build output directory**: `Website/dist`.
4. In **Environment variables (Advanced)**:
   - Variable name: `NODE_VERSION`
   - Value: `20`
5. Click **Save and Deploy**.

### Step 4: Verify First Deployment
Cloudflare Pages will clone the repository, run `node Website/scripts/build.js`, and deploy the resulting `Website/dist/` directory to its worldwide edge.
The deployment log will report:
```
✔ Build completed successfully in 84ms.
  Output directory: Website/dist
Finished
Deploying site to Cloudflare's global network...
Success! Your site was deployed!
```
Your site is live at `https://knowledge-du5.pages.dev`.

### Direct Edge Deployment via Wrangler CLI
You can also deploy directly from your local terminal using Cloudflare's Wrangler CLI:
```powershell
# 1. Compile fresh production static build
npm run build --prefix Website

# 2. Deploy Website/dist directly to Cloudflare Pages
npx wrangler pages deploy Website/dist --project-name knowledge --branch main
```
Live Production URL: **`https://knowledge-du5.pages.dev`**

---

## 4. Custom Domain Setup

To bind your personal domain or subdomain (e.g., `brain.srivatsa.com` or `knowledge.yourdomain.com`):

1. In the Cloudflare Pages project dashboard, click the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your domain name (e.g., `brain.srivatsa.com`) and click **Continue**.
4. If your DNS is managed on Cloudflare, Cloudflare will automatically configure the `CNAME` record pointing to `brain-knowledge-hub.pages.dev`.
5. If your DNS is external, create a `CNAME` record with your DNS provider:
   - **Name**: `brain` (or subdomain)
   - **Target**: `brain-knowledge-hub.pages.dev`
6. Cloudflare automatically issues and manages a free SSL/TLS certificate.

---

## 5. URL Routing & Clean Directory Resolution

The publishing pipeline generates canonical clean directory URLs:
- Homepage: `/` -> `Website/dist/index.html`
- Subject Catalog: `/operations/` -> `Website/dist/operations/index.html`
- Published Notebook: `/operations/erp/` -> `Website/dist/operations/erp/index.html`

### Why Clean URLs Work Natively on Cloudflare Pages
Cloudflare Pages automatically performs **Clean URL resolution**:
1. When a user requests `/operations/erp/`, Cloudflare looks for `operations/erp/index.html` and serves it with `Content-Type: text/html`.
2. When a user requests `/operations/erp` (without a trailing slash), Cloudflare transparently normalizes it to `/operations/erp/` without requiring URL rewrite configuration.
3. Refreshing any notebook URL directly in the browser will resolve reliably without 404 errors.

---

## 6. Local Testing & Verification Workflow

Before pushing changes to GitHub, test locally with the automated QA suite:

### 1. Run Static Build
```powershell
cd D:\Brain\05_Knowledge\Website
npm run build
```
Confirms that all notebooks are discovered, metadata is parsed, and static files are created in `dist/`.

### 2. Run Test Suite
```powershell
cd D:\Brain\05_Knowledge\Website
npm test
```
Executes 52 automated tests validating routes, URL lowercasing, link resolution, search index generation, and draft exclusion.

### 3. Run Local Dev Server
```powershell
cd D:\Brain\05_Knowledge\Website
npm run dev
```
Launches the native HTTP server at `http://localhost:3000/`. Verify:
- Homepage hero, subject cards, and featured ERP card render properly.
- Search modal (`Ctrl+K` or `/`) operates and matches keywords.
- Theme switch (Light / Dark) operates smoothly.
- ERP notebook loads cleanly at `/operations/erp/` with its portal return bar.

---

## 7. Troubleshooting & Operational Runbook

| Issue | Root Cause | Solution |
| :--- | :--- | :--- |
| **Cloudflare Build Fails with "Command not found"** | Node.js version mismatch or incorrect build command | Ensure Build command is `node Website/scripts/build.js` and `NODE_VERSION: 20` is set in environment variables. |
| **Notebook Not Appearing on Website** | Filename starts with `_draft`, or `.meta.json` specifies `"status": "draft"` | Check `status` field in `<notebook>.meta.json`. Change `"status": "draft"` to `"status": "published"` when ready to release. |
| **Changes to `dist/` Lost After Rebuild** | `dist/` was edited directly | **Never edit `dist/`**. Make changes in `Website/src/` (for site UI) or in the source notebook in its subject folder. |
| **404 on Internal Links** | Relative path resolution error | Run `npm test` locally. Test 6 validates that every internal link generated points to an existing file in `dist/`. |
| **Cache Serving Old Notebook Version** | Cloudflare Edge Cache TTL | In the Cloudflare Pages project, go to **Deployments** > click the three dots on the latest deployment > select **Retry deployment**, or purge cache via Cloudflare dashboard. |
