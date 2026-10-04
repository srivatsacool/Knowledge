---
title: React & JavaScript — Frontend Fundamentals
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [react, javascript, frontend, level-7, tier-3]
---

# ⚛️ React & JavaScript

> [!important] Resume tie-in
> BTracker lists React + JavaScript. Depth expectation: fundamentals + component thinking + how the frontend talks to your FastAPI backend — not senior-FE trivia.

---

## 1 · JavaScript Fundamentals

### The language in six facts

1. **Dynamic, weakly typed** — types belong to values; `"1" + 1 = "11"` (coercion!) → hence TypeScript's rise
2. **Single-threaded, event-loop concurrency** — async I/O without blocking (below)
3. **First-class functions & closures** — functions are values; inner functions remember their scope
4. **`var` is dead** — use `const` by default, `let` when reassigning (block scope vs var's function scope + hoisting weirdness)
5. **Everything has methods** — arrays/strings are rich (`map`, `filter`, `reduce` — the trinity, same ideas as Python)
6. **JSON is native** — `JSON.parse` / `JSON.stringify`

### Async JavaScript — the part that's always asked

```javascript
// Promises: a value that arrives later
fetch("/api/agents")
  .then(res => { if (!res.ok) throw new Error(res.status); return res.json(); })
  .then(data => render(data))
  .catch(err => console.error(err));

// async/await: same thing, sync-shaped — the modern default
async function loadAgents() {
  try {
    const res = await fetch("/api/agents");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) { console.error(e); return []; }
}

// parallelism: independent awaits run together
const [users, tasks] = await Promise.all([fetchUsers(), fetchTasks()]);
```

**Event loop in one line:** *"JS runs one call stack; async callbacks queue as microtasks (promises) and macrotasks (timers); the loop drains microtasks first — that's why `await` doesn't block the UI."*

---

## 2 · React — the component model

### Components, props, state — the trinity

```jsx
function AgentCard({ name, status }) {        // props = read-only inputs
  const [expanded, setExpanded] = useState(false);   // state = local, triggers rerender
  return (
    <div className="card" onClick={() => setExpanded(!expanded)}>
      <h3>{name}</h3>
      <span className={`badge ${status}`}>{status}</span>
      {expanded && <TaskList agent={name} />}   {/* conditional render */}
    </div>
  );
}
```

> [!tip] The mental model interviewers want
> **UI = f(state).** You don't mutate the DOM; you change state, and React *derives* the UI. Props flow down; events flow up. Rerender = re-run the function, diff the virtual DOM, patch the real one minimally.

### The hooks you must know cold

| Hook | Job | Rules |
|---|---|---|
| `useState` | local state | setState triggers rerender; updater form for dependent updates |
| `useEffect` | synchronize with outside world (fetch, subscriptions, timers) | dependency array controls when; `[]` = mount only; **return a cleanup** |
| `useMemo` / `useCallback` | cache computed values / function identities | only on measured cost — premature memoization is noise |
| `useRef` | mutable box that doesn't trigger render | DOM nodes, interval ids |
| custom hooks | extract reusable stateful logic | `useFetch(url)` — composition, the React way |

> [!important] `useEffect` — the interview minefield
> - **Missing dependency** → stale closure bugs (effect remembers old state)
> - **Object/array deps** recreated every render → effect fires endlessly
> - **Cleanup function** for subscriptions/timers — the leak-prevention half everyone forgets
> - *"Not every side effect belongs in an effect"* — derived values belong in render, fetch-on-action belongs in event handlers

---

## 3 · Talking to Your Backend — the full loop

```jsx
async function sendMessage(text) {
  setPending(true);
  try {
    const res = await fetch("/v1/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      body: JSON.stringify({ message: text, session_id }),
    });
    if (res.status === 429) return warn("Quota exceeded — try later");
    if (!res.ok) throw new Error(await res.text());
    const { reply, tool_calls } = await res.json();
    setMessages(m => [...m, { role: "assistant", text: reply }]);
  } catch (e) { showError(e.message); }
  finally { setPending(false); }          // always stop the spinner
}
```

**The checklist this demonstrates:** loading state · error handling per status code · optimistic vs confirmed UI · JSON serialization · auth header · never trusting the client (validation happens server-side — FastAPI's Pydantic layer, not here).

**CORS in one line:** *"Browser blocks cross-origin responses unless the server sends `Access-Control-Allow-Origin` — it's a browser-enforced policy; FastAPI's CORSMiddleware configures it."*

---

## 4 · Architecture Vocabulary

| Term | One-liner |
|---|---|
| **Virtual DOM / reconciliation** | diff derived trees, patch minimally |
| **Keys in lists** | stable identity for diffing — index keys break on reorder |
| **Lifting state up** | shared state lives at the common ancestor |
| **Controlled components** | inputs driven by state (single source of truth) |
| **Component composition** | small pieces compose; props.children for slots |
| **SPA vs MPA** | client-side routing vs server pages — SPA needs a router (React Router) |
| **Bundling** | Vite/webpack: modules → optimized static assets; code-splitting by route |
| **State libraries** | context for low-frequency global state; Redux/Zustand when it grows — say "I'd add it when props-drilling hurts, not before" |

**Responsive UI basics:** mobile-first CSS, flexbox/grid layouts, touch targets ≥ 44px, `prefers-reduced-motion` respect — accessibility is not optional (contrast, labels, keyboard paths).

---

## 5 · React vs Streamlit — the architecture judgment call

> *"Streamlit = fastest path from Python analysis to working UI (my inventory dashboard). React = when the product needs custom interaction, component reuse, and scale (BTracker's chat + tool-call surfaces). The discipline is the same: state drives UI; the difference is who manages the complexity."*

---

## ⚡ Rapid-Fire Q&A

> **Props vs state?**
> Props: inputs from parent, read-only. State: component-owned, mutable via setters, triggers rerender.

> **`useState` vs `useRef`?**
> State changes rerender; a ref is a silent mutable box (DOM handles, timers, latest-value caches).

> **What does the dependency array do?**
> Controls when the effect re-runs: every render (no array), once ([]) , or when listed values change. Stale closures come from wrong deps.

> **Why keys in lists?**
> Diffing identity — stable keys let React reorder DOM nodes instead of destroying/recreating them (and preserve input state).

> **How do you prevent unnecessary renders?**
> Measure first (Profiler); then memo/correct-state-shape/split components. Premature optimization is a smell even here.

> **Fetch on mount vs on submit?**
> Read-on-mount data → effect (with abort/cleanup). User actions (send message, run agent) → event handler. Saying this distinction marks real experience.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The backend it talks to | [[FastAPI]] |
| Production concerns of the whole stack | [[Production_Concepts]] |
| Your MCP architecture | [[../01_AI/MCP/MCP_Architecture]] |
