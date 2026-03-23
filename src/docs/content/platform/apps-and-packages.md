---
description: The Boss Raid monorepo separates public apps, orchestration services, provider workers, evaluator services, and shared packages.
---

# Apps And Packages

The monorepo is split into public apps, service apps, and shared packages.

## Apps

- `apps/api`: public and internal HTTP routes
- `apps/orchestrator`: Mercenary orchestration and settlement flow
- `apps/provider-agent`: HTTP provider worker
- `apps/evaluator`: isolated runtime probe service
- `apps/mcp-server`: MCP adapter
- `apps/web`: public web surface
- `apps/ops`: internal operations UI
- `apps/video`: promo and proof-lane video assets

## Packages

- `packages/api-contracts`: request parsing and shared contract logic
- `packages/raid-core`: routing and raid selection primitives
- `packages/provider-sdk`: provider interfaces
- `packages/provider-registry`: provider discovery state
- `packages/persistence` and `packages/persistence-sqlite`: storage backends
- `packages/shared-types`: shared wire and runtime types

## Design Goal

The repo keeps the native raid behavior in shared packages so HTTP, MCP, and UI surfaces all talk to the same core model.
