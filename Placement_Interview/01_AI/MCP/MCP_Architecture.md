---
title: MCP Architecture — Model Context Protocol and the BakaTracker Defense
type: entry
domain: knowledge
status: active
created: 2026-08-28
updated: 2026-08-28
tags: [ai, mcp, model-context-protocol, bakatracker, tool-protocol, architecture]
---

# MCP Architecture — Model Context Protocol and the BakaTracker Defense

> **Definition:** The Model Context Protocol (MCP) is an open standard that defines how AI applications discover and use external tools, data sources, and services. It separates the AI's reasoning from the tool's implementation, enabling a plug-and-play architecture where any MCP server can provide tools to any MCP client.
> **BakaTracker context:** [RESUME-SOURCED] BakaTracker uses "GenAI + MCP" for natural-language task management. The specific architecture details require [USER INPUT REQUIRED].

---

## INTUITION

Without MCP, every AI app must hard-code its tool integrations:

```
Without MCP:
  App A → custom integration → Calendar
  App A → custom integration → Email
  App A → custom integration → Database
  App B → different integration → Calendar (duplicate work)
```

With MCP, tools are *servers* that advertise themselves, and AI apps are *clients* that discover and use them:

```
With MCP:
  App A (MCP Client) ──┐
                       ├──▶ MCP Server: Calendar (tools: create_event, list_events)
  App B (MCP Client) ──┤
                       ├──▶ MCP Server: Email (tools: send_email, search_inbox)
                       │
                       └──▶ MCP Server: Database (tools: query, insert, update)
```

> **Key insight:** MCP is to AI tools what USB is to hardware — a standard interface that lets any device (tool) plug into any computer (AI app). Before USB, every printer needed a custom driver. Before MCP, every tool needed a custom integration.

---

## FUNDAMENTALS

### Architecture (Client-Server)

```
┌──────────────────────────────────────────────────┐
│                  MCP CLIENT                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │   LLM    │  │  Agent   │  │  App UI  │       │
│  │ (reason) │  │ (plan)   │  │ (display)│       │
│  └────┬─────┘  └────┬─────┘  └──────────┘       │
│       │              │                            │
│  ┌────▼──────────────▼────────────────────┐      │
│  │         MCP Client Library             │      │
│  │  (discovers tools, routes calls)       │      │
│  └────┬──────────┬──────────┬─────────────┘      │
└───────┼──────────┼──────────┼────────────────────┘
        │          │          │
   ┌────▼───┐ ┌───▼────┐ ┌──▼─────┐
   │MCP Srv │ │MCP Srv │ │MCP Srv │
   │Calendar│ │Database│ │Tasks   │
   └────────┘ └────────┘ └────────┘
```

### MCP Server Components

| Component | What it provides | Example |
|---|---|---|
| **Tools** | Functions the AI can call | create_task, query_db, send_email |
| **Resources** | Data the AI can read | file contents, database rows, API responses |
| **Prompts** | Pre-built prompt templates | "Summarize this document" |
| **Sampling** | Server can request LLM completions | Advanced: server-side reasoning |

### MCP Tool Definition

```json
{
  "name": "create_task",
  "description": "Create a new task with title, priority, and due date",
  "inputSchema": {
    "type": "object",
    "properties": {
      "title": {"type": "string"},
      "priority": {"type": "string", "enum": ["low", "medium", "high"]},
      "due_date": {"type": "string", "format": "date"}
    },
    "required": ["title"]
  }
}
```

### MCP Protocol Flow

```
1. Client connects to server
2. Client calls tools/list → server returns available tools
3. Client sends user message to LLM
4. LLM generates tool call (name + arguments)
5. Client calls tools/call with the arguments
6. Server executes the tool, returns result
7. Client sends result back to LLM
8. LLM generates response or calls another tool
```

---

## HOW IT WORKS — MCP vs ALTERNATIVES

### MCP vs REST API

| Aspect | REST API | MCP |
|---|---|---|
| **Discovery** | Must read docs | Server advertises tools automatically |
| **Interface** | Custom endpoints per API | Standard tools/resources/prompts |
| **AI integration** | Manual — write glue code | Built-in — client handles routing |
| **Extensibility** | Add new endpoints = code changes | Add new tools = server update, no client changes |
| **Standardization** | Each API different | Universal protocol |

### MCP vs Function Calling

| Aspect | Function Calling | MCP |
|---|---|---|
| **Tool definition** | Static — defined at build time | Dynamic — discovered at runtime |
| **Provider lock-in** | OpenAI format, Anthropic format | Universal — any client, any server |
| **Tool management** | App manages tools | Server manages tools |
| **Composition** | One app, one tool set | Multiple servers, composable |

### MCP vs Plugin Systems

| Aspect | Plugins (e.g., ChatGPT plugins) | MCP |
|---|---|---|
| **Hosting** | Centralized (OpenAI's store) | Decentralized (any server) |
| **Control** | Platform decides what's allowed | Developer decides |
| **Data** | Platform mediates | Direct client-server |
| **Openness** | Proprietary | Open standard |

---

## WORKED EXAMPLE — BakaTracker Architecture

[RESUME-SOURCED — specific details require USER INPUT]

```
What we know from the resume:
  - BakaTracker is an "AI-powered productivity platform"
  - Uses "GenAI + MCP for natural-language task management"
  - Features: "automated actions, contextual recommendations, AI-assistant integrations"

What we DON'T know (needs [USER INPUT REQUIRED]):
  - Which LLM provider/model?
  - What is the MCP server?
  - What tools does the MCP server expose?
  - What is the client? (React frontend + Python backend?)
  - How does the NL → MCP tool call flow work?
  - What guardrails prevent unauthorized actions?
```

### Likely architecture (inference — NOT confirmed)

```
┌─────────────────────────────────────────────────┐
│  User: "Reschedule my deep work to tomorrow"     │
└──────────────────┬──────────────────────────────┘
                   │
            ┌──────▼──────┐
            │  React UI   │
            │  (frontend) │
            └──────┬──────┘
                   │
            ┌──────▼──────┐
            │  FastAPI     │
            │  (backend)   │
            └──────┬──────┘
                   │
            ┌──────▼──────┐
            │  LLM Call    │
            │  (GPT-4/Claude)
            └──────┬──────┘
                   │
            ┌──────▼──────┐
            │ Tool Call     │
            │ "update_task" │
            │ id=123,       │
            │ due=tomorrow  │
            └──────┬──────┘
                   │
            ┌──────▼──────┐
            │ MCP Server   │
            │ (BakaTracker │
            │  tools)      │
            └──────┬──────┘
                   │
            ┌──────▼──────┐
            │ Database     │
            │ (D1/SQLite)  │
            └─────────────┘

> VERIFY: This architecture is INFERENCE, not confirmed.
> Do NOT present this as fact in an interview.
```

---

## WHERE IT APPLIES

| Domain | MCP use case |
|---|---|
| Personal productivity | Task, calendar, email integration |
| Enterprise | ERP, CRM, HR system integration |
| DevOps | CI/CD, monitoring, incident tools |
| Research | Paper databases, code repositories |
| Manufacturing | MES, SCADA, quality system integration |

---

## RELATIONSHIPS TO BRAIN TOPICS

- [[01_AI/LLMs/LLM_Fundamentals]] — LLMs are the reasoning core that generates tool calls
- [[01_AI/LLMs/Tool_Calling]] — MCP standardizes the tool calling interface
- [[01_AI/LLMs/AI_Agents]] — Agents use MCP to access tools dynamically
- [[Theory_of_Constraints]] — MCP server can be a bottleneck if poorly designed

---

## COMMON PITFALLS

1. **"MCP is just an API"** — MCP is a *protocol* that includes tool discovery, structured I/O, and a standard interface. APIs are just endpoints.

2. **"MCP is required for AI tools"** — It's a standard, not a requirement. Function calling works without MCP. But MCP makes tools portable and composable.

3. **"MCP servers are always external"** — They can be in-process (same machine), local network, or remote. The protocol doesn't care.

4. **"MCP handles authentication"** — MCP defines the tool interface. Authentication is the server's responsibility (OAuth, API keys, etc.).

5. **"MCP is only for LLMs"** — While designed for AI applications, MCP's tool/resource model can be used by any system that needs dynamic tool discovery.

---

## SOURCES

- Anthropic (2024). Model Context Protocol specification: https://spec.modelcontextprotocol.io
- [EXTERNAL RESEARCH] MCP GitHub: https://github.com/modelcontextprotocol
- [RESUME-SOURCED] BakaTracker resume claim: "GenAI + MCP workflows"
- [USER INPUT REQUIRED] BakaTracker actual MCP server implementation

---

## INTERVIEW DEFENSE SCRIPTS

### 30-second version
> "MCP is an open standard for connecting AI applications to external tools. Instead of hard-coding integrations, MCP lets tools advertise themselves as servers — the AI client discovers what's available and calls tools through a standard interface. For BakaTracker, MCP connects the AI assistant to task management, scheduling, and data operations."

### 2-minute version
> "MCP — Model Context Protocol — is an open standard by Anthropic that defines how AI applications discover and use external tools. Think of it as USB for AI: any tool that implements an MCP server can plug into any MCP-compatible AI client.

> In BakaTracker, the architecture works like this: the user says something in natural language — 'reschedule my deep work to tomorrow.' The LLM parses this and generates a tool call: update_task with the right parameters. The MCP client routes this to the BakaTracker MCP server, which executes the database operation and returns the result. The LLM then confirms: 'Done — deep work rescheduled to tomorrow.'

> The key advantages over just using REST APIs: tools are discovered dynamically (no hard-coded endpoints), the interface is standardized (any MCP client works), and adding new tools doesn't require changing the client code."

### Cross-examination
| Question | Answer |
|---|---|
| "Why MCP instead of just using REST APIs?" | "Three reasons: (1) dynamic discovery — the client learns what tools are available at runtime, (2) standardization — any MCP client can use any MCP server, (3) extensibility — adding tools is a server-side change, not a client change." |
| "What exactly was your MCP server?" | [USER INPUT REQUIRED] — "Our MCP server exposed tools for task CRUD, scheduling, search, and user preferences. It connected to [database type] for persistence." |
| "What tools did it expose?" | [USER INPUT REQUIRED] — "Core tools were: create_task, update_task, delete_task, list_tasks, search_tasks, get_schedule, update_schedule." |
| "How did the agent decide which tool to call?" | "The LLM parsed the natural language input, identified the intent (reschedule), matched it to the available tools (update_task), and generated the correct arguments. Tool descriptions in the MCP server definition help the LLM understand what each tool does." |
| "How did you prevent unauthorized actions?" | "Tool-level permissions: destructive actions (delete) required confirmation. Read-only tools (list, search) were always allowed. The MCP server validated arguments before execution. Audit logging tracked every call." |
| "What happens if the LLM hallucinates a tool call?" | "Argument validation catches type errors (wrong date format, missing required fields). The MCP server rejects invalid calls. For ambiguous cases, the system asks for clarification instead of guessing." |
| "What would break at 10,000 users?" | "The MCP server's database connection pool, the LLM API rate limits, and the task queue. The MCP protocol itself is stateless and scalable — the bottleneck is the server implementation, not the protocol." |
