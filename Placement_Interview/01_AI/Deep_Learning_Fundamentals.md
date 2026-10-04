---
title: Deep Learning Fundamentals — Before the LLMs
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [deep-learning, neural-networks, level-6, roadmap]
---

# 🧠 Deep Learning Fundamentals

> [!important] The layer beneath your LSTM claim
> You trained an LSTM — so the fundamentals below are *yours to own*: forward pass, backprop, optimizers, regularization. This note is the theory floor; the LSTM instance lives in [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]].

---

## 1 · The Neuron & The Network

```text
z = w₁x₁ + w₂x₂ + ... + b        (weighted sum + bias)
a = σ(z)                          (activation — the nonlinearity)

layers: input → hidden₁ → hidden₂ → ... → output     ("deep" = many hidden layers)
```

**Why nonlinearity is non-negotiable:** composed linear functions are still linear — without σ, a 50-layer network collapses into one linear layer. The activations are what buy depth.

### Activation functions

| Function | Formula | Use |
|---|---|---|
| **ReLU** | max(0, z) | default hidden activation — cheap, fights vanishing gradients |
| Leaky ReLU / GELU | ReLU variants | fix "dying ReLU", transformer default |
| **Sigmoid** | 1/(1+e⁻ᶻ) | binary output probability |
| **Softmax** | e^{zᵢ}/Σe^{zⱼ} | multi-class output (sums to 1) |
| Tanh | bounded (−1,1) | RNN/LSTM internals |

---

## 2 · Training — forward, loss, backward, step

```text
1. FORWARD:  x → layers → ŷ
2. LOSS:     L(ŷ, y)   — MSE (regression) · CrossEntropy (classification)
3. BACKWARD: chain rule through the graph → ∂L/∂w for every weight (backpropagation)
4. STEP:     w ← w − η ∂L/∂w   (gradient descent / optimizer)
repeat over epochs & batches
```

**Backprop in one line:** *"the chain rule applied efficiently through the computation graph — each layer's gradient reuses the layer after it, which is why depth costs compute, not design."*

### Gradient problems

| Problem | Symptom | Fixes |
|---|---|---|
| **Vanishing gradients** | early layers barely learn (deep/sigmoid nets, long RNNs) | ReLU, residual/skip connections, gated units (LSTM!), batch-norm |
| **Exploding gradients** | loss → NaN | gradient clipping, lower LR |

### Loss functions — the choice IS the objective

| Task | Loss |
|---|---|
| Regression | MSE (quadratic penalty), MAE (linear) — the choice encodes outlier attitude |
| Binary classification | binary cross-entropy |
| Multi-class | categorical cross-entropy (+ softmax) |
| Forecasting (your edge) | quantile/pinball loss for percentile forecasts |

---

## 3 · Optimizers & Hyperparameters

| Optimizer | Idea |
|---|---|
| SGD | plain steps; momentum = rolling average of gradients (acceleration) |
| **Adam** | per-parameter adaptive LR from first & second moment estimates — the sane default |
| LR schedules | reduce-on-plateau, cosine — *the LR is the most important hyperparameter* |

| Knob | Meaning |
|---|---|
| **Epoch** | one full pass over training data |
| **Batch** | samples per weight update (32–256 typical) |
| Iteration | one batch step |
| Learning rate | step size — too big: divergence; too small: stall |

---

## 4 · Regularization — the war on overfitting

| Tool | Mechanism |
|---|---|
| **Dropout** | randomly zero units each step → redundant, robust representations (train-time only) |
| **L2 weight decay** | penalty on weight magnitude → smoother functions |
| **Early stopping** | stop at validation-loss minimum (restore best weights) — the free lunch |
| **Batch normalization** | normalize layer inputs → stable training, mild regularization |
| Data augmentation | more effective samples from the same data |

```python
# the canonical Keras pattern — every piece earns its slot
model.compile(optimizer=Adam(1e-3), loss="mse")
model.fit(Xtr, ytr, epochs=100, batch_size=64,
          validation_data=(Xva, yva),
          callbacks=[EarlyStopping(patience=10, restore_best_weights=True)])
```

**The watch during training:** train loss ↓ while validation loss ↑ = overfitting starts *there* — early stopping catches it automatically; you confirm it on the curve.

---

## 5 · Architecture Families — the map

| Family | Data | You know |
|---|---|---|
| **MLP / dense** | tabular | the base case |
| **CNN** | images (convolutions share weights spatially) | [[../08_TECHNOLOGY/OpenCV_EasyOCR]] context |
| **RNN / LSTM / GRU** | sequences | your SIRP forecaster → [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]] |
| **Transformer** | sequences with attention (parallel) | NLP/LLM layer → [[NLP]] |

**The scaling law sentence (modern awareness):** *"Performance scales smoothly with data, parameters, and compute — which is why data pipelines and compute budgets are now first-class ML concerns, not afterthoughts."*

---

## ⚡ Rapid-Fire Q&A

> **Why "deep"? What do layers buy?**
> Composed nonlinearities build hierarchical representations — edges → parts → objects; abstract features from raw inputs, instead of hand-engineering.

> **Backpropagation in one sentence?**
> The chain rule through the computation graph, computing every weight's gradient in one backward sweep by reusing downstream results.

> **ReLU vs sigmoid in hidden layers?**
> ReLU: non-saturating gradient, cheap — sigmoid saturates (gradient ≈ 0 in tails) and causes vanishing gradients in deep stacks.

> **What does dropout do at inference?**
> Nothing — it's disabled; activations are scaled to match expected magnitudes.

> **Adam vs SGD?**
> Adam adapts per-parameter step sizes — robust default; tuned SGD+momentum can generalize marginally better at a tuning cost.

> **How do you know a network is overfitting?**
> Validation loss turns upward while training loss keeps falling — and the fix menu is regularization, data, or a smaller net.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| Your trained instance | [[../02_ANALYTICS/Forecasting/LSTM_Neural_Forecasting]] |
| Sequence modeling evolution | [[NLP]] |
| Explaining trained models | [[Explainable_AI]] |
