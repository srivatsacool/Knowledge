---
title: NLP — Classical to Transformers
type: entry
domain: knowledge
status: active
created: 2026-09-07
updated: 2026-09-07
tags: [nlp, level-6, tier-3]
---

# 🗣️ NLP — Classical to Transformers

> [!important] The resume bridge
> NLP on the resume + LLM work (BTracker) = you should be able to walk the *arc* from bag-of-words to attention — and place every buzzword on that arc. This note is the walk.

---

## 1 · The NLP Pipeline

```text
RAW TEXT → clean → tokenize → normalize (stopwords, stem/lemma) → vectorize → MODEL → task output
```

**Why text needs all this:** models eat numbers, not words — every stage is a lossy compression from messy language to structured signal.

---

## 2 · The Classical Layer

### Tokenization

- Splitting text into units: words (`"don't"` → `"do", "n't"`?), subwords (`"forecasting"` → `"forecast", "ing"`), characters
- **Subword tokenization (BPE/WordPiece)** is the modern answer to rare words & vocabulary bloat — name-drop it; it's the link to the transformer layer

### Stopwords, Stemming, Lemmatization

| Technique | What | Cost |
|---|---|---|
| Stopword removal | drop高频 function words ("the", "is") | loses negation nuance ("not good"!) |
| **Stemming** | chop suffixes by rules (Porter): "studies" → "studi" | fast, can produce non-words |
| **Lemmatization** | dictionary-aware reduction to lemma: "better" → "good" | slower, linguistically correct |

> **When NOT to remove stopwords:** sentiment and anything using word order — "not" is a stopword to the naive. Saying this exception is the interview point.

### Vectorization — turning text into numbers

| Method | Idea | Fails at |
|---|---|---|
| **Bag of Words** | one column per vocabulary word, count | word order, new words, huge sparse matrix |
| **TF-IDF** | weight by frequency-in-doc × rarity-in-corpus | still no word *meaning* or order |
| **N-grams** | adjacent pairs/triples restore local order | combinatorial explosion |

$$\text{TF-IDF}(t,d) = \text{TF}(t,d) \times \log\frac{N}{\text{DF}(t)}$$

> *"TF-IDF's intuition: a word matters if it's frequent in this document and rare across documents — 'defect' matters in a quality report; 'the' doesn't."* Still the strongest baseline for classical text classification (Naive Bayes/LogReg on TF-IDF) — say that; baselines matter here too.

---

## 3 · The Embedding Layer — words with geometry

- **Word2Vec / GloVe:** dense vectors (~100–300 dims) where *distance encodes meaning* — learned from co-occurrence; famous algebra: king − man + woman ≈ queen
- **Contextual embeddings (transformers):** the upgrade that matters — *"in 'bank loan' vs 'river bank', classical embeddings give 'bank' the same vector; BERT gives a different vector per context."*
- **Sentence embeddings:** whole sentences → vectors → **semantic similarity** via cosine — the engine of modern search, dedup, RAG retrieval (→ LLM layer below)

```python
cos_sim = (a · b) / (‖a‖ · ‖b‖)      # 1 = same meaning direction
```

---

## 4 · The Task Map — classical vs modern

| Task | Classical approach | Modern approach |
|---|---|---|
| Text classification | TF-IDF + LogReg/NB | fine-tuned BERT / LLM zero-shot |
| **NER** (entities) | CRF + gazetteers | transformer NER |
| Sentiment | lexicon (VADER) / BoW model | contextual transformer |
| Semantic search | keyword match | embedding retrieval + rerank |
| Summarization | extractive (rank sentences) | abstractive (LLM) |
| Translation | statistical (phrase tables) | neural seq2seq / transformers |

---

## 5 · Transformers & Attention — the bridge to LLMs

> [!tip] The attention one-liner
> **Attention lets every token look at every other token and decide what's relevant** — "it" attends to its antecedent; long-range dependencies become one hop instead of a long RNN chain. *And it parallelizes — the practical reason transformers ate NLP.*

```text
Input → tokenize → embeddings + positional encoding
      → N × [self-attention + feed-forward]   (encoder: understanding)
      → N × [masked self-attention + cross-attention] (decoder: generating)
      → output probabilities
```

| Family | Architecture | Talent |
|---|---|---|
| **BERT** | encoder only | *understanding* (classification, NER) |
| **GPT** | decoder only | *generation* (your LLMs) |
| **T5/BART** | encoder–decoder | seq→seq (translation, summarization) |

**Self-attention mechanics, one level deeper:** each token emits Query/Key/Value vectors; attention weight = softmax(QKᵀ/√d) — a learned, differentiable lookup. Multi-head = several attention patterns in parallel.

**Where your LLM work sits:** BTracker is GPT-family (decoder-only) accessed via API — so the transformer *is* the product's engine, and RAG/retrieval (→ [[../01_AI/LLMs/LLM_Fundamentals]]) is embeddings (this note's §3) put to work.

---

## ⚡ Rapid-Fire Q&A

> **Stemming vs lemmatization?**
> Rule-chopping vs dictionary-aware reduction — "studies" → "studi" vs "study". Lemmatize when correctness matters; stem when speed does.

> **BoW vs TF-IDF vs embeddings?**
> Counts → rarity-weighted counts → meaning-bearing geometry. Each adds information; embeddings add *semantics*.

> **Why do transformers beat RNNs?**
> Parallel training + direct long-range attention paths (no vanishing chains of timesteps).

> **BERT vs GPT?**
> Encoder (bidirectional understanding) vs decoder (autoregressive generation) — different masks over the same attention core.

> **What is semantic search?**
> Query & documents embedded into the same vector space; cosine retrieval over meaning instead of keyword overlap — the retrieval half of RAG.

> **How would you build a text classifier today?**
> Baseline first: TF-IDF + LogReg (hours, interpretable, often shockingly competitive); then a fine-tuned transformer if the baseline misses — measured, not assumed.

---

## 🔗 Where This Leads

| Next | Link |
|---|---|
| LLMs built on this | [[../01_AI/LLMs/LLM_Fundamentals]] |
| Retrieval in production (RAG) | [[../01_AI/LLMs/Tool_Calling]] |
| The deep learning layer | [[../01_AI/Deep_Learning_Fundamentals]] |
