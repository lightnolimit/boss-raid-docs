# Settlement And Contracts

Boss Raid supports both file-based settlement records and an on-chain bootstrap path.

The payout policy is fixed:

- successful providers split payout equally
- unsuccessful providers are not paid

## File Settlement

This is the live, practical local path today.

Use:

```bash
pnpm settle:raid -- --raid-id <id>
pnpm settle:raid -- --latest-final
pnpm settle:raid -- --latest-final --sqlite-file ./temp/bossraid-state.sqlite
```

## On-Chain Tooling

Contracts live in `packages/contracts`.

They include:

- `BossJobEscrow.sol`
- `RaidRegistry.sol`

## Deploy Contracts

Required env:

- `BOSSRAID_RPC_URL`
- `BOSSRAID_DEPLOYER_PRIVATE_KEY`
- `BOSSRAID_TOKEN_ADDRESS`

Run:

```bash
pnpm deploy:contracts
```

## Bootstrap Settlement Env

```bash
pnpm bootstrap:settlement-env
```

This writes settlement env output from a deployment manifest and provider address map.

## Full On-Chain Bootstrap

```bash
pnpm bootstrap:onchain
```

This deploys the contracts, writes the deployment manifest, writes the settlement env file, and prints the next manual step.

## Settlement Env Surface

- `BOSSRAID_SETTLEMENT_MODE`
- `BOSSRAID_SETTLEMENT_DIR`
- `BOSSRAID_RPC_URL`
- `BOSSRAID_REGISTRY_ADDRESS`
- `BOSSRAID_ESCROW_ADDRESS`
- `BOSSRAID_TOKEN_ADDRESS`
- `BOSSRAID_CLIENT_PRIVATE_KEY`
- `BOSSRAID_EVALUATOR_ADDRESS`
- `BOSSRAID_CHAIN_ID`
- `BOSSRAID_SETTLEMENT_JOB_EXPIRY_SEC`
- `BOSSRAID_SETTLEMENT_ATOMIC_MULTIPLIER`
- `BOSSRAID_SETTLEMENT_FUND_JOBS`
- `BOSSRAID_PROVIDER_ADDRESS_MAP_JSON`

## Still Missing

- contract tests
- token allowance/bootstrap flow for funded jobs
- deployment verification
- chain-specific config presets

## Next Steps

- [Persistence And State](/docs/operations/persistence-and-state)
- [Examples And Payloads](/docs/reference/examples-and-payloads)
- [Current Limits](/docs/reference/current-limits)
