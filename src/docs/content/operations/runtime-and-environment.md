---
description: Runtime operations cover the local stack, gateway and API posture, evaluator settings, provider auth, and x402 payment environment.
---

# Runtime And Environment

The standard operator loop is:

```bash
pnpm check
pnpm build
pnpm dev
```

## Key Runtime Facts

- SQLite is the local default persistence backend
- `POST /v1/raid` is the native public action route
- x402 is enabled by default on public write routes unless `BOSSRAID_X402_ENABLED=false`
- chat still defaults to two agents, but every public write request needs an explicit budget

## Important Env Areas

- gateway and API host/origin env
- provider ingress and callback auth env
- evaluator sandbox env
- x402 network, asset, pay-to, and facilitator env
- settlement mode and onchain contract env

## Local Payment Modes

- unpaid private dev: `BOSSRAID_X402_ENABLED=false`
- paid local rehearsal: `BOSSRAID_X402_VERIFY_HMAC_SECRET` plus `BOSSRAID_X402_PAY_TO`

Use the operations pages for persistence, settlement, pricing, and troubleshooting details.
