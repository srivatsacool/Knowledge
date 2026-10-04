---
title: Streamlit — Data Apps & the AI Inventory Dashboard
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [streamlit, frontend, dashboards, level-7, tier-2]
---

# 🎨 Streamlit

> [!important] Your flagship's face
> Your AI Inventory Optimization project ships a **live Streamlit dashboard** — forecasting, model comparison, inventory-cost analysis, KPIs, scenario controls. Expect: "how does it work? why Streamlit and not React? what were the hard parts?"

---

## 1 · The Mental Model — script as app

> [!tip] The one-sentence architecture
> **A Streamlit app is a Python script that reruns top-to-bottom on every interaction** — no callbacks, no event wiring, no separate frontend. Widgets are inputs; the rerun redraws the page.

```python
import streamlit as st
import pandas as pd

st.title("📦 AI Inventory Decision Support")

# ── sidebar controls ──────────────────────────────
model = st.sidebar.selectbox("Forecast model", ["LSTM", "SARIMA", "Moving Average", "Croston"])
z = st.sidebar.slider("Service level (z)", 1.0, 2.5, 1.65, 0.05)
h, p = st.sidebar.number_input("Holding cost"), st.sidebar.number_input("Stockout cost")

# ── data + compute ────────────────────────────────
df = load_data()                       # cached
fcst = run_forecast(model, df)         # cached
cost = simulate_inventory(fcst, z=z, h=h, p=p)

# ── render ────────────────────────────────────────
c1, c2, c3 = st.columns(3)
c1.metric("MASE", f"{cost['mase']:.2f}", delta=f"{cost['mase_delta']:.2f}")
c2.metric("Total cost", f"₹{cost['total']:,.0f}")
c3.metric("Fill rate", f"{cost['fill']:.1%}")
st.line_chart(fcst[["actual", "forecast"]])
st.bar_chart(cost["per_model"])
```

**The whole app in 30 lines.** That *is* the pitch — and the honest trade-off.

---

## 2 · Session State & Caching — the two things you must actually understand

### `st.session_state` — memory across reruns

Since every interaction reruns the script, plain variables die between reruns:

```python
if "history" not in st.session_state:
    st.session_state.history = []          # initialize once
st.session_state.history.append(choice)   # survives reruns
```

- Use for: user selections that must persist, multi-step forms/wizards, chat history (your BTracker context, in miniature)
- **Forms** (`st.form` + submit button) batch widget inputs → one rerun, not one per keystroke — the fix for expensive recompute pages

### Caching — decoupling *data* from *interaction*

```python
@st.cache_data(show_spinner="Loading demand data…")     # serializable results (DataFrames)
def load_data(path):
    return pd.read_excel(path)

@st.cache_resource                                       # unserializable singletons (models!)
def load_model(name):
    return trained_models[name]
```

| Decorator | Caches | Typical use |
|---|---|---|
| `@st.cache_data` | return values (hash of args) | CSV/Excel loads, transformed DataFrames |
| `@st.cache_resource` | the object itself | trained LSTM, DB connections |

> [!important] The design rule this enables
> **Cache the expensive, rerun the cheap.** Model training and data loading are cached; only filtering/plotting re-executes per widget move. Without this, every slider drag retrains your model — the classic Streamlit rookie disaster. Say this sentence; it proves you've actually built one.

---

## 3 · Widgets & Layout Vocabulary

| Need | Widget |
|---|---|
| Choose a model | `selectbox`, `radio` |
| Scenario sliders (z, costs) | `slider`, `number_input` |
| File upload | `file_uploader` |
| Parameter forms | `st.form` + `form_submit_button` |
| KPI row | `st.metric` in `st.columns` |
| Tabs / expanders | `st.tabs`, `st.expander` (methodology hidden by default!) |
| Charts | `st.line_chart`, or native Plotly/Altair objects (`st.plotly_chart`) |
| Markdown/rich text | `st.markdown` (supports emoji, LaTeX for formulas) |

**Dashboard layout pattern (what your project does):** sidebar controls → top KPI metric row → main forecast chart → model-comparison table/chart → expandable methodology + caveats.

---

## 4 · Streamlit vs The Alternatives — the architecture question

| | Streamlit | Flask/FastAPI + templates | React |
|---|---|---|---|
| Time to MVP | **hours** | days | weeks |
| Custom UI/UX | limited | medium | **unlimited** |
| Python-only team | ✅ | ✅ (backend) | ❌ (needs JS) |
| Product for thousands of users | ⚠️ | ✅ | ✅ |
| State management | rerun model (simple) | manual | mature |

> [!tip] The two-line answer
> *"Streamlit trades UI control for iteration speed — perfect for internal decision-support where the value is the analysis, not the pixels. If this became a customer-facing product with custom workflows and auth at scale, I'd rebuild the front end in React against a FastAPI backend — the *analysis layer* (forecasting, cost simulation) ports unchanged."*

**Streamlit vs Power BI:** Power BI = governed BI distribution (refresh, RLS, enterprise). Streamlit = custom *interactive analysis* — arbitrary Python, models, simulations in the loop. Your project needed the simulator in the browser; no BI tool does that natively.

---

## 5 · Deployment & Limits

- **Deploy:** Streamlit Community Cloud (free, GitHub-connected) · Docker container on any cloud · Hugging Face Spaces
- **Secrets:** `st.secrets` / environment variables — never hardcode keys
- **Known ceilings (own them proactively):**
  - Full-page rerun model → fine at decision-support scale, strained at consumer scale (session isolation is per-viewer; heavy concurrency needs caching discipline or a rebuild)
  - Limited auth natively (community cloud has none) → gate at the proxy/reverse layer or rebuild
  - No offline/PWA/mobile-native story

> [!important] The maturity sentence
> *"I chose Streamlit because the bottleneck was analytical iteration speed, not UI polish — and I contained its limits with caching, forms for expensive reruns, and methodology tucked into expanders. The upgrade path to a product (FastAPI + React) preserves the entire computation layer."*

---

## ⚡ Rapid-Fire Q&A

> **Explain the rerun model.**
> Every widget interaction reruns the whole script top-to-bottom; `session_state` persists values, `cache_data`/`cache_resource` persist computation. Design = keep the cached path expensive-free and the rerun path cheap.

> **cache_data vs cache_resource?**
> cache_data pickles *return values* keyed by arguments (DataFrames); cache_resource keeps the *object* singleton (trained model, DB connection).

> **How do you stop a slider from retraining the model?**
> Training lives behind `@st.cache_resource` keyed on its parameters; the slider only touches rendering — or group inputs in a form so recompute happens on submit.

> **How would you add auth to Streamlit?**
> Reverse-proxy/gate (OAuth at ingress) or a session-check page pattern with `st.secrets` credentials — native support is minimal, which is itself a scaling signal.

> **Why Streamlit over Power BI for your project?**
> The core value is an *inventory-cost simulator driven by arbitrary Python models* — custom computation a BI tool can't host natively; Power BI shines for governed distribution, not bespoke simulation.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The analysis it exposes | [[../02_ANALYTICS/Forecasting/Forecast_to_Decision]] |
| The API that would sit behind a rebuild | [[FastAPI]] |
| Deployment | [[Docker_Deployment]] |
| BI alternative | [[../02_ANALYTICS/Power_BI/Power_BI_Fundamentals]] |
