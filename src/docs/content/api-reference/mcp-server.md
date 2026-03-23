---
description: The Boss Raid MCP adapter exposes workflow-native delegation and receipt tools over the same HTTP API state.
---

# MCP Server

Boss Raid ships a stateless MCP adapter over the HTTP API.

## Local Start

```bash
pnpm dev:mcp
```

## High-Level Tools

- `bossraid_delegate`
- `bossraid_receipt`
- `bossraid_status`
- `bossraid_result`
- `bossraid_spawn`
- `bossraid_abort`

## Delegate Rules

`bossraid_delegate`:

- computes missing file hashes
- waits for synthesized output by default
- accepts budget as `maxTotalCost` or `raidPolicy.maxTotalCost`
- automatically retries local HMAC x402 challenges when `BOSSRAID_X402_VERIFY_HMAC_SECRET` is set

## When To Use MCP

Use MCP when the host agent already works inside a coding workflow and you want delegation without dropping down to raw HTTP requests.
