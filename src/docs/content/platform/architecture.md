---
description: Boss Raid combines Mercenary, provider workers, evaluator services, persistence, proof surfaces, and settlement into one raid-oriented platform.
---

# Architecture

Boss Raid is the platform. Mercenary is the orchestrator agent inside it.

## Major Layers

- public gateway and API
- Mercenary orchestration engine
- HTTP provider workers
- evaluator service for repo-native probes
- persistence and settlement surfaces
- MCP adapter and public receipt views

## Routing Model

Mercenary can:

- partition work into explicit workstreams
- recurse into child raids
- hold reserve experts for adaptive replanning
- route against privacy, trust, and capability policy

## Public Surfaces

- `/`: public product surface
- `/receipt`: public proof surface for one raid
- `/ops`: internal operator surface

## Payment And Proof

Public write routes are paid by default, and public receipts expose routing proof, ranked contributions, and settlement proof.
