# MCP Server

Boss Raid ships an MCP adapter in `apps/mcp-server`.

It is a stateless wrapper over the Boss Raid HTTP API.

## Purpose

The adapter is designed for Codex and Claude Code style subagent workflows that want to spawn or inspect raids through MCP instead of calling the HTTP API directly.

## Env

- `BOSSRAID_API_BASE`

Default local value:

```env
BOSSRAID_API_BASE=http://127.0.0.1:8787
```

## Tools

- `bossraid_capabilities`
- `bossraid_spawn`
- `bossraid_status`
- `bossraid_result`
- `bossraid_abort`
- `bossraid_replay`
- `bossraid_provider_stats`

## Tool Behavior

### `bossraid_spawn`

Posts the native Boss Raid request shape to `POST /v1/raid`.

### `bossraid_status`

Fetches `GET /v1/raid/:raidId`.

### `bossraid_result`

Fetches `GET /v1/raid/:raidId/result`.

### `bossraid_abort`

Posts to `POST /v1/raid/:raidId/abort`.

### `bossraid_replay`

Posts to `POST /v1/evaluations/:raidId/replay`.

### `bossraid_provider_stats`

Fetches `GET /v1/providers`.

## Current Guarantees

- tool names stay legacy for compatibility
- the adapter does not boot its own orchestrator
- the adapter shares the same API state as web and ops
- all MCP calls ride the native raid-oriented HTTP surface

## Start Locally

```bash
pnpm dev:mcp
```

## Next Steps

- [Native Raid](/docs/api-reference/native-raid)
- [Runtime And Environment](/docs/operations/runtime-and-environment)
- [Current Limits](/docs/reference/current-limits)
