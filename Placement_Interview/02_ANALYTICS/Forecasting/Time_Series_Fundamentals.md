---
title: Time-Series Fundamentals — Interview Deep-Dive
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [forecasting, time-series, level-5, critical, tier-1]
---

# ⏱️ Time-Series Fundamentals

> [!important] Your specialization starts here
> This is the foundation of your SIRP — the most differentiated technical subject on your resume. An examiner can start anywhere: "what is stationarity?" five minutes in. This note makes every foundational question land on your home ground.

---

## 1 · What Makes Time Series Different

> [!tip] The one-sentence identity
> **Observations are ordered, and order carries information.** Yesterday's demand informs today's — which breaks every i.i.d. assumption that ordinary ML quietly makes.

Consequences that ripple through everything:
- Random train/test **splits are illegal** (training on the future)
- Validation must walk **forward in time**
- "Mean imputation" across time is nonsense; the past is the predictor

---

## 2 · The Four Components

| Component | What | Example (your world) |
|---|---|---|
| **Trend** | long-run level shift | retail growth over years |
| **Seasonality** | fixed-period repeating pattern | weekly shopping cycle, December spike |
| **Cyclicality** | irregular multi-year swings | economic booms/busts — *no fixed period* |
| **Noise (residual)** | unpredictable remainder | promo shocks, stockout noise |

**Seasonality vs cyclicality — the classic discriminator:** seasonality has a *known, fixed period* (7 days, 12 months); cycles have *variable length and amplitude*. Say it exactly that way.

**Additive vs multiplicative:** `y = T + S + ε` vs `y = T × S × ε`. Multiplicative when seasonal swings *grow with the level* (a big SKU swings ±500 units, a small one ±20). Fix: log-transform → multiplicative becomes additive.

---

## 3 · Stationarity — the concept interviewers loop on

> [!important] Definition (say it precisely)
> A stationary series has **constant mean, constant variance, and autocovariance that depends only on the lag** — not on time. Statistically: the future looks (in distribution) like the past.

**Why ARIMA cares:** AR/MA terms assume the relationship between y_t and its past is *stable*. With a trend, yesterday's level means nothing about today's — the model chases a moving target.

**The tests:**

| Test | H₀ | Reads as |
|---|---|---|
| **ADF** (Augmented Dickey-Fuller) | unit root (non-stationary) | small p → stationary ✅ |
| **KPSS** | stationary | small p → non-stationary ⚠️ |

*They test opposite nulls — running both (confirmatory analysis) is the senior move.*

**The fix ladder:**
1. **Differencing** — y_t − y_{t−1} kills a trend (d = 1 in ARIMA); seasonal differencing y_t − y_{t−m} kills seasonality (D = 1)
2. **Log / Box-Cox** — stabilizes variance
3. **Detrending** — regress out a deterministic trend

**Weak vs strict stationarity:** weak (covariance) stationarity — means/variance/autocovariance constant — is what applied work needs; strict requires the whole distribution to be time-invariant. Name the distinction; you rarely need the strict version.

---

## 4 · Autocorrelation — the series' memory

### ACF & PACF — read them like a map

```text
ACF(k)  = correlation between y_t and y_{t−k}      (all indirect paths included)
PACF(k) = correlation after removing shorter-lag effects   (the direct path only)
```

| Signature | Diagnosis |
|---|---|
| ACF decays slowly, tail | non-stationary → difference first |
| ACF cuts off at q, PACF tails off | **MA(q)** |
| PACF cuts off at p, ACF tails off | **AR(p)** |
| Both tail off | ARMA |
| Spikes at m, 2m, 3m… | seasonality at period m → seasonal terms |

```python
from statsmodels.tsa.stattools import acf, pacf
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
plot_acf(demand, lags=56); plot_pacf(demand, lags=28)
```

> [!tip] Ljung-Box
> Tests whether residual autocorrelation remains (H₀: no autocorrelation up to lag k). **On residuals: you WANT large p** (model captured the memory). This is a model-diagnostic answer, not a data answer — interviewers notice the difference.

### Lag & rolling statistics

```python
df["demand_lag_28"] = df["demand"].shift(28)             # the SIRP lookback
df["ma_7"]  = df["demand"].rolling(7).mean()
df["std_7"] = df["demand"].rolling(7).std()              # rolling variance → stationarity check
```

---

## 5 · The Vocabulary of a Forecast

| Term | Meaning | Your SIRP value |
|---|---|---|
| Forecast **origin** | last observed time point | each rolling origin |
| Forecast **horizon (h)** | steps ahead being predicted | **28 days** |
| Lookback window | history fed to the model | **28 days** (LSTM input) |
| Backtest | one origin → forecast → score cycle | repeated across origins |

**The h-complication (say it):** error grows with horizon — a 1-day forecast and a 28-day forecast are different problems. Aggregating metrics *across horizons* without stratifying hides this; comparing models at fixed h keeps it honest.

**Multi-step strategies:** recursive (feed predictions back — errors compound), direct (separate model per horizon), seq2seq (output the whole path). LSTM with a 28-step output = direct-ish; knowing the trade-off is the mark of someone who's actually built it.

---

## 6 · Validation — where ordinary ML dies

### The illegal split vs the legal one

```python
# ❌ NEVER — future leaks into training
X_train, X_test, y_train, y_test = train_test_split(X, y, shuffle=True)

# ✅ chronological split
train, valid, test = df[:i], df[i:j], df[j:]
```

### Rolling-origin evaluation — your SIRP's design

```text
Origin 1:  [═══════ train ═══════][28d test]
Origin 2:  [════════ train ════════][28d test]
Origin 3:  [═════════ train ═════════][28d test]
...
```

Each origin: train on everything *before* it, forecast 28 days, score. Slide forward, repeat. Aggregate.

**Why it's the gold standard:**
- Multiple origins → metrics over **different regimes** (promos, holidays, seasons) → robustness, not a single lucky window
- Mirrors production: retrain-as-you-slide = walk-forward deployment
- Per-origin scores feed the **paired DM tests** — the statistical layer of your SIRP

> [!important] Data leakage in time series — name all four flavours
> 1. **Temporal** — training on the future (shuffle split)
> 2. **Preprocessing** — scaling/encoding fitted on the full series (SIRP used *history-only scaling* per origin)
> 3. **Feature** — predictors that encode the target's future (today's stockout hiding tomorrow's demand)
> 4. **Window** — overlapping LSTM windows sharing observations across train/valid boundary (your SIRP's explicit handling)

Full treatment → [[Data_Leakage]].

---

## 7 · Exploratory Time-Series EDA — your SIRP's opening chapter

Checklist (in order, with the Pandas one-liner):

```python
ts.plot()                                          # 1. level, trend, outliers at a glance
seasonal_decompose(ts, period=7)                    # 2. trend / seasonal / residual split
ts.groupby(ts.index.dayofweek).mean().plot()        # 3. weekly seasonality profile
ts.groupby(ts.index.month).mean().plot()            # 4. annual profile
(ts.rolling(30).mean() / ts.rolling(30).std()).plot()  # 5. level-dependent volatility (multiplicative?)
(ts == 0).mean()                                    # 6. zero-demand share → intermittent?
```

Step 6 is the pivot of your SIRP: **zero-demand share feeds directly into ADI/CV² classification** → [[Intermittent_Demand_ADI_CV2]].

---

## ⚡ Rapid-Fire Q&A

> **What is stationarity and why does ARIMA need it?**
> Constant mean/variance/lag-structure over time; ARIMA's AR/MA coefficients assume a *stable* relationship to the past, which a trend destroys. Differencing restores it.

> **Seasonal vs cyclical?**
> Fixed known period vs irregular multi-year swings.

> **ADF vs KPSS?**
> Opposite nulls (unit-root vs stationarity); running both confirms — conflicting results mean borderline structure, handle with care.

> **How do you read ACF/PACF to pick ARIMA orders?**
> PACF cutoff at p → AR(p); ACF cutoff at q → MA(q); both tailing → ARMA; slow ACF decay → difference first.

> **Why rolling-origin instead of one holdout?**
> One window scores one regime; multiple origins average over regimes and feed paired statistical tests.

> **Why can't you shuffle-split a time series?**
> Training on the future. Every downstream metric becomes fiction.

> **What is a 28-day lookback?**
> The LSTM input window — the last 28 days of history per series, from which the network learns the mapping to the next-day (or next-horizon) demand. Chosen to cover a full monthly cycle without bloating the input.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| The 12 models built on this foundation | [[Forecast_Model_Ladder]] |
| Scoring them correctly | [[Forecast_Metrics_MASE]] |
| When zero-demand dominates | [[Intermittent_Demand_ADI_CV2]] |
| The neural end of the ladder | [[LSTM_Neural_Forecasting]] |
