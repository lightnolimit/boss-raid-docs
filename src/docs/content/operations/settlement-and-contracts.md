---
description: Settlement can stay file-backed locally or move onchain, but the payout rule stays equal split across successful providers only.
---

# Settlement And Contracts

Boss Raid has two settlement modes.

## File Mode

- default local path
- writes settlement artifacts only
- no onchain gas cost

## Onchain Mode

- creates a parent raid record
- creates one child job per selected provider
- sets and optionally funds job budgets
- links child jobs back to the raid
- finalizes the raid in the registry

## Payout Rule

Settlement is always:

- equal split across successful providers only
- no winner bonus
- no runner-up payout

## Important Separation

x402 payment and onchain settlement are separate systems. x402 charges the buyer at request time. Onchain settlement handles registry and child-job proof after the raid.
