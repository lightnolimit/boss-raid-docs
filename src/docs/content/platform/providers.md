---
description: Providers are external HTTP workers with explicit auth, readiness, privacy metadata, trust metadata, and capability declarations.
---

# Providers

Providers are the specialist execution layer behind Boss Raid.

## Execution Model

- HTTP only
- readiness checked before routing
- explicit bearer or HMAC auth by default
- callback traffic validated against the active provider run

## Metadata Surfaces

Provider records can expose:

- capabilities and output types
- model families
- privacy metadata
- trust metadata
- ERC-8004 identity references
- concurrency and price metadata

## Important Separation

Boss Raid keeps privacy scoring and reputation or trust scoring separate. Strict privacy routing should not be treated as the same thing as trust preference.

## Outcome Rule

Selection is policy-aware, but settlement stays simple: successful providers split payout equally.
