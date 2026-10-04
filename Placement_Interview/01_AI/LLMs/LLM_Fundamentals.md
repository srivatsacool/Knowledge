---
title: LLM Fundamentals — How Large Language Models Work
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
tags: [ai, llm, transformer, tokens, context-window, temperature, hallucination]
---

# LLM Fundamentals — How Large Language Models Work

> **Definition:** A Large Language Model (LLM) is a neural network trained on vast text data to predict the next token in a sequence. It generates text by iteratively predicting the most probable next token, given the preceding context.

---

## INTUITION

An LLM is, at its core, an incredibly sophisticated autocomplete. Given a sequence of tokens, it predicts what comes next — not word by word, but token by token, with a probability distribution over the entire vocabulary.

```
Input:  "The capital of France is"
LLM:    P("Paris") = 0.92
        P("Lyon")  = 0.03
        P("Berlin") = 0.01
        ...

Output: "Paris" (sampled from the distribution)
```

> **Key insight:** LLMs don't "know" facts. They learn statistical patterns in text. When an LLM says "Paris is the capital of France," it's because that pattern appeared frequently in training data — not because it looked up a fact database.

---

## FUNDAMENTALS

### Tokens

```
Text:    "ChatGPT is amazing"
Tokens:  ["Chat", "GPT", " is", " amazing"]  (4 tokens)

Text:    "industrialization"
Tokens:  ["ind", "ustrial", "ization"]  (3 tokens — subword tokenization)
```

- Tokens are subword units (not words, not characters)
- GPT-4 uses ~100K token vocabulary
- 1 token ≈ 0.75 words in English
- Different models tokenize differently — affects cost and context usage

### Context Window

```
Context window = maximum number of tokens the model can process at once

Models:
  GPT-3.5:     4K tokens  (~3,000 words)
  GPT-4:       8K / 32K / 128K tokens
  Claude 3:    200K tokens
  Gemini 1.5:  1M tokens

Impact:
  - Longer context = more text to reason over
  - But: longer context = more expensive, slower
  - And: "lost in the middle" problem — models attend less to middle content
```

### Temperature and Sampling

```
Temperature (T):
  T = 0:    Always pick the most probable token (deterministic)
  T = 0.7:  Balanced creativity
  T = 1.0:  More random
  T = 1.5:  Very creative, less coherent

Top-p (nucleus sampling):
  - Consider only the top p% of probability mass
  - top_p = 0.9: consider tokens that make up 90% of probability
  - Limits the long tail of unlikely tokens
```

### Hallucination

```
Hallucination = model generates plausible-sounding but false information

Causes:
  1. Training data gaps (topic not well-represented)
  2. Ambiguous prompts (model guesses)
  3. Pressure to be helpful (model fills gaps instead of saying "I don't know")
  4. Training incentives (reinforcement learning can over-optimize for fluency)

Mitigation:
  - RAG (Retrieval-Augmented Generation): ground responses in retrieved documents
  - System prompts: instruct model to say "I don't know" when uncertain
  - Temperature reduction: lower T reduces creative hallucination
  - Verification loops: check model output against sources
  - Tool use: let the model call tools to fetch real data instead of generating from memory
```

---

## HOW IT WORKS — THE TRANSFORMER

### Architecture (simplified)

```
Input tokens
    ↓
Token Embeddings (token → vector)
    ↓
Positional Encoding (add position information)
    ↓
Self-Attention Layers (×N)
  - Each token attends to every other token
  - Learns which tokens are relevant to which
    ↓
Feed-Forward Layers (×N)
    ↓
Output: probability distribution over next token
```

### Self-Attention (the key innovation)

```
Query (Q): "What am I looking for?"
Key (K):   "What do I contain?"
Value (V): "What information do I provide?"

Attention(Q, K, V) = softmax(QKᵀ / √d) × V

Intuition: Each token asks "which other tokens should I pay attention to?"
  - "The cat sat on the mat" → "sat" attends strongly to "cat" (subject)
  - "The capital of France is Paris" → "is" attends to "capital" and "France"
```

### Training

```
Phase 1: Pre-training
  - Predict next token on trillions of tokens of text
  - Learns language patterns, facts, reasoning
  - Massive compute (thousands of GPUs, months)

Phase 2: Supervised Fine-Tuning (SFT)
  - Train on (prompt, desired response) pairs
  - Teaches instruction following

Phase 3: RLHF / RLAIF
  - Human/AI feedback on model outputs
  - Aligns model with human preferences
  - Reduces harmful outputs, improves helpfulness
```

---

## WHERE IT APPLIES

| Domain | LLM use case |
|---|---|
| Chatbots | Customer support, personal assistants |
| Code generation | GitHub Copilot, Cursor |
| Search | Perplexity, Bing Chat |
| Analysis | Document summarization, data interpretation |
| Automation | Agent workflows, tool calling |
| Content | Writing, translation, summarization |

---

## RELATIONSHIPS TO BRAIN TOPICS

- [[01_AI/LLMs/Tool_Calling.md]] — Extends LLMs to take actions in the real world
- [[01_AI/LLMs/Agents.md]] — Agents combine LLMs + tools + reasoning loops
- [[01_AI/MCP/MCP_Architecture.md]] — MCP is the protocol connecting agents to tools
- [[07_OPERATIONS/TATA_MOTORS/Methodology.md]] — LLMs could enhance manufacturing analytics

---

## COMMON PITFALLS

1. **"LLMs understand language"** — They model statistical patterns. Whether this constitutes "understanding" is debated. Functionally, they're very good at pattern matching and generation.

2. **"LLMs know facts"** — They encode patterns from training data. They can state facts that appear in training data but cannot verify them. They confabulate when uncertain.

3. **"Bigger is always better"** — Model size matters, but data quality, training methodology, and fine-tuning matter equally. A well-fine-tuned smaller model can outperform a larger one for specific tasks.

4. **"Temperature = creativity"** — Temperature controls randomness, not creativity. High temperature can produce incoherent output. True creativity requires good prompting and architecture.

5. **Ignoring context window limits** — If your prompt exceeds the context window, earlier tokens are dropped. This causes the model to "forget" earlier parts of the conversation.

---

## SOURCES

- Vaswani, A. et al. (2017). "Attention Is All You Need." *NeurIPS*. — Transformer architecture
- Brown, T. et al. (2020). "Language Models are Few-Shot Learners." *NeurIPS*. — GPT-3
- OpenAI (2023). GPT-4 Technical Report. — GPT-4 capabilities
- Anthropic (2024). Claude 3 Model Card. — Claude 3 capabilities
- [EXTERNAL RESEARCH] Jay Alammar's "The Illustrated Transformer": https://jalammar.github.io/illustrated-transformer/

---

## INTERVIEW DEFENSE SCRIPTS

### 30-second version
> "An LLM is a transformer neural network trained to predict the next token. Given a prompt, it generates text by iteratively predicting the most probable next token. Temperature controls randomness; the context window limits how much text it can process. Hallucination — generating false but plausible text — is the main reliability challenge, addressed by RAG and tool use."

### Cross-examination
| Question | Answer |
|---|---|
| "How does an LLM actually generate text?" | "Token by token. Each token is predicted based on all previous tokens using self-attention. The model outputs a probability distribution over the vocabulary, and a token is sampled from that distribution." |
| "What's the difference between GPT-3.5 and GPT-4?" | "Architecture scale (more parameters), training data, and alignment methods. GPT-4 has a larger context window (8K-128K vs 4K) and better reasoning. Both use the same fundamental transformer architecture." |
| "How do you prevent hallucination?" | "RAG grounds responses in retrieved documents. Tool use lets the model fetch real data. System prompts instruct the model to say 'I don't know' when uncertain. Temperature reduction reduces creative confabulation. Verification loops check output against sources." |
| "What's the context window and why does it matter?" | "It's the maximum tokens the model can process. If your input exceeds it, earlier tokens are dropped. This affects cost (more tokens = more expensive), latency (longer processing), and quality (lost-in-the-middle problem). Claude 3 has 200K; GPT-4 has up to 128K." |
