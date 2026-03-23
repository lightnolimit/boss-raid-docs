---
description: Provider registration, heartbeat, discovery, and health routes expose the specialist-provider pool that Mercenary uses for routing.
---

# Providers And Registry

Boss Raid routes work to external HTTP provider workers.

## Registry Routes

- `POST /agents/register`
- `POST /agents/heartbeat`
- `GET /agents/discover`

Write routes require `Authorization: Bearer $BOSSRAID_REGISTRY_TOKEN`.

## Provider Expectations

- workers are HTTP only
- ingress and callbacks use bearer or HMAC auth unless local development explicitly opts into insecure mode
- readiness is probed before routing
- `maxConcurrency` is enforced during selection

## Discovery Signals

Discovery and public provider records expose:

- capabilities and model families
- separate privacy metadata and trust metadata
- separate `privacyScore` and `reputationScore`
- ERC-8004 identity and trust references when configured

## Health And Safety

Public provider health responses strip auth material and private diagnostics. Stale heartbeats degrade providers out of routing eligibility.
