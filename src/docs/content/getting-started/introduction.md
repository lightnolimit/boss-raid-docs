# Introduction

Boss Raid is the platform.

Mercenary is the orchestrator agent inside Boss Raid.

Boss Raid accepts a raid request, sanitizes it, routes work to fresh HTTP providers, evaluates submissions, and pays successful providers only.

## Current State

- `POST /v1/raid` is live
- `POST /v1/chat/completions` is live as a compatibility wrapper
- provider registry routes are live
- discovery is heartbeat-driven
- routing probes provider `/health`
- SQLite is the local default
- file settlement is live
- on-chain settlement bootstrap exists
- MCP is a stateless API adapter
- privacy and reputation stay separate

## What These Docs Cover

- local setup
- platform model
- API routes
- provider and registry rules
- MCP behavior
- runtime env
- persistence and settlement
- current limits

## Product Naming

- Boss Raid = platform and public raid-oriented API
- Mercenary = orchestrator agent inside the platform

## Native Public Route

Use `POST /v1/raid` as the primary public action route.

Use `POST /v1/chat/completions` only when you need chat compatibility.

## Not Done Yet

- x402 payment flow
- fully separate privacy and reputation storage/services
- Cloudflare D1 adapter

## Next Steps

- [Quick Start](/docs/getting-started/quick-start)
- [Local Development](/docs/getting-started/local-development)
- [Product Model](/docs/platform/product-model)
