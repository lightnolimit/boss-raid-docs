---
description: Boss Raid exposes a native raid route, an OpenAI-compatible chat route, provider registry routes, and an MCP adapter over the same Mercenary engine.
---

# API Reference Overview

Boss Raid has one orchestration engine with multiple ingress surfaces.

## Public Write Routes

- `POST /v1/raid`: native raid-oriented request shape
- `POST /v1/chat/completions`: compatibility chat shape over the same engine

Both routes:

- require an explicit payout budget
- use x402 by default unless `BOSSRAID_X402_ENABLED=false`
- can return `402` with `PAYMENT-REQUIRED`
- reserve provider capacity before the unpaid challenge

## Public Read Surfaces

- `GET /v1/raid/:raidId`
- `GET /v1/raid/:raidId/result`
- `GET /v1/raid/:raidId/attested-result`
- `GET /v1/raid/:raidId/agent_log.json`

These reads require the issued `raidAccessToken` unless the caller is admin-authenticated.

## Adjacent Routes

- `/agents/*`: provider registration, heartbeat, and discovery
- MCP: workflow-native delegation over the same API

## Next Steps

- [Native Raid](/docs/api-reference/native-raid)
- [Chat Completions](/docs/api-reference/chat-completions)
- [Providers And Registry](/docs/api-reference/providers-and-registry)
