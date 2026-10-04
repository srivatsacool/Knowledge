---
title: LSTM Cheat Sheet
type: cheat-sheet
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [lstm, cheat-sheet]
---

# 🧠 LSTM Cheat

## The gates (one line each)

```text
f_t = σ(...)  FORGET — what to erase from cell state
i_t = σ(...)  INPUT  — what to write
c̃_t = tanh    candidate content
c_t = f_t ⊙ c_{t-1} + i_t ⊙ c̃_t   ← CELL STATE: additive highway (kills vanishing gradients)
o_t = σ(...)  OUTPUT — what to expose
h_t = o_t ⊙ tanh(c_t)              ← hidden = working output
```

**Why gates exist:** vanilla RNN multiplies Jacobians through time → gradients vanish/explode; the additive cell state preserves gradient flow.

## Architecture decisions (yours)

| Decision | Value | Why |
|---|---|---|
| Global vs local | **global** — one net, all series | pooled learning, no thousands of overfit models |
| Lookback | **28 days** | one monthly cycle of context |
| Output | Dense(28) direct | avoids recursive error compounding |
| Regularization | Dropout 0.2 + EarlyStopping (restore best) | overfitting control |
| Optimizer | Adam(1e-3), MSE loss | defaults with a reason |

## Leakage — the four holes

1. **Scaling on full series** → fit scaler on train segment only
2. **Windows straddling the split** → generate windows within each split
3. **Shuffling across time** → chronological everything
4. **Origin-unavailable features** → origin-available data only

## Why LSTM can still lose money

1. Accuracy gains concentrate in small misses; cost lives in tails
2. MSE targets conditional mean → over-confident pattern chasing → whipsaw orders
3. MA's damped response = smoother orders = lower cost on dense demand

> *"LSTM lowest MASE on both datasets; on dense demand MA won on inventory cost. Accuracy ≠ economics."*

## Say-cold

- **h vs c:** working output vs long-term memory
- **GRU:** update+reset gates — fewer params, comparable; LSTM's cousin
- **BPTT:** backprop unrolled through time
- **Epoch/batch/LR:** full pass / samples per update / step size (reduce-on-plateau)
- **3 more months:** quantile losses, exogenous features, tuning sweep, reconciliation

→ Deep-dive: [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]] · [[../01_AI/Deep_Learning_Fundamentals]]
