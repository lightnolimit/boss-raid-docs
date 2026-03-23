---
description: The most common Boss Raid failures are missing budgets, missing payment context, no eligible providers, or missing runtime proof configuration.
---

# Troubleshooting

## `400 bad_request`

Most common cause: the caller omitted the explicit payout budget.

- native raid needs `raidPolicy.maxTotalCost`
- chat needs `raid_policy.max_total_cost`

## `402 Payment Required`

Public write routes are paid by default.

- for unpaid local testing, set `BOSSRAID_X402_ENABLED=false`
- for local paid rehearsal, set `BOSSRAID_X402_VERIFY_HMAC_SECRET`
- the paid retry must carry the reservation context

## `409` Before `402`

Provider preflight failed. No payment should be attempted until provider eligibility or readiness is fixed.

## Attested Result Returns `503`

`MNEMONIC` is missing, so the TEE-backed signer is not available.

## MCP Delegate Fails On Payment

Set `BOSSRAID_X402_VERIFY_HMAC_SECRET` for local HMAC retries or disable x402 explicitly for private local workflows.
