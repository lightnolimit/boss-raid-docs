# Local Development

Boss Raid is a pnpm monorepo with app surfaces, shared packages, examples, scripts, and internal markdown docs in the main app repo.

## Workspace Shape

- `apps/api`: HTTP API surface
- `apps/orchestrator`: Mercenary runtime and raid state machine
- `apps/provider-agent`: external HTTP provider worker
- `apps/web`: public landing app
- `apps/ops`: operator console
- `apps/mcp-server`: MCP adapter over the HTTP API
- `packages/*`: shared types, parsing, registry, evaluation, persistence, settlement, and UI helpers
- `examples/*`: request payloads, provider manifests, and address maps
- `docs/*`: internal repo docs that should stay aligned with the public docs site

## Daily Commands

```bash
pnpm check
pnpm build
pnpm dev
```

Manual split:

```bash
pnpm dev:providers
pnpm dev:api
pnpm dev:web
pnpm dev:ops
pnpm dev:mcp
```

## Local Provider Behavior

`pnpm dev:providers` starts three HTTP-only provider workers with different instructions:

- `unity-specialist-a`
- `minimal-diff-hunter`
- `regression-averse-maintainer`

They share the same model env and stay `not-ready` until both `BOSSRAID_MODEL_API_KEY` and `BOSSRAID_MODEL` are set.

## Validation Targets

Use these before you change platform behavior:

```bash
pnpm --filter @bossraid/api test
pnpm --filter @bossraid/orchestrator test
```

## Docs Maintenance Rule

When you change the app repo, keep the following internal docs updated there too:

- `docs/architecture.md`
- `docs/interfaces.md`
- `docs/runtime.md`
- `docs/synthesis-registration.md` when registration flow changes

The public docs site in this repo should track the same behavior.

## Next Steps

- [Architecture](/docs/platform/architecture)
- [Apps And Packages](/docs/platform/apps-and-packages)
- [Troubleshooting](/docs/operations/troubleshooting)
