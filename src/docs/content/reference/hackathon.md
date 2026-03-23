---
description: The current demo path combines paid public writes, recursive orchestration, proof surfaces, and attested-result flows for the hackathon release.
---

# Hackathon

## Current Story

- Boss Raid is the platform and raid flow
- Mercenary routes work to external providers and pays successful providers only
- the primary route is `POST /v1/raid`
- x402 gates public write routes by default unless `BOSSRAID_X402_ENABLED=false`
- PayAI is the default facilitator path for the current release

## Demo Edge

- recursive mixture-of-agents orchestration instead of one fixed fan-out
- reserve experts for repair or expansion branches
- MCP delegate and receipt tools for host-agent demos
- public `/receipt` plus attested result proof for the live lane

## Rehearsal Order

- local HMAC smoke
- Base Sepolia wallet payment
- one small Base mainnet payment

If a paid route returns `409` before `402`, provider preflight failed and payment should not be attempted.
