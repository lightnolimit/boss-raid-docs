---
description: Boss Raid persists raid state, tokens, proof artifacts, and settlement records with SQLite as the local default.
---

# Persistence And State

Boss Raid persists raid state and proof surfaces instead of treating orchestration as a transient chat response.

## Current Backend Posture

- SQLite-backed state is the local default
- file-backed settlement artifacts remain supported
- persistence is still file- or SQLite-oriented today

## Persisted Objects

- raids and child raids
- provider runs and ranked submissions
- routing proof
- settlement proof
- access tokens for public reads

## Public Read Model

Spawn returns `raidAccessToken`. Public reads against raid status, result, attested result, and `agent_log.json` require that token unless the caller is admin-authenticated.

## Operational Guidance

Treat the persistence layer as part of the proof story. Receipts, logs, and settlement evidence all depend on the recorded raid state remaining available.
