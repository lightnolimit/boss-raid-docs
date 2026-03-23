---
description: Run the full local Boss Raid stack, boot individual services when needed, and choose between unpaid local work and paid x402 rehearsal.
---

# Local Development

The default local workflow is:

```bash
pnpm check
pnpm build
pnpm dev
```

`pnpm dev` starts the evaluator, API, web, ops, and local provider workers together.

## Manual Service Commands

Use these when you want a narrower loop:

```bash
pnpm dev:providers
pnpm dev:api
pnpm dev:web
pnpm dev:ops
pnpm dev:mcp
pnpm dev:evaluator
```

## Local Payment Modes

- unpaid private work: set `BOSSRAID_X402_ENABLED=false`
- paid local rehearsal: set `BOSSRAID_X402_VERIFY_HMAC_SECRET` and `BOSSRAID_X402_PAY_TO`

## Common Checks

```bash
pnpm --filter @bossraid/api-contracts test
pnpm --filter @bossraid/api test
pnpm test:mcp:e2e
pnpm test:x402:e2e -- --mode hmac --route raid
```

## Next Steps

- [Runtime And Environment](/docs/operations/runtime-and-environment)
- [Troubleshooting](/docs/operations/troubleshooting)
