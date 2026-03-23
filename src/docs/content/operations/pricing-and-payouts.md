---
description: Buyers pay request budget plus route surcharge, and successful providers split the payout budget equally after approval.
---

# Pricing And Payouts

Boss Raid does not use one global flat price.

## Three Separate Numbers

- request payout budget: chosen by the caller
- route surcharge: small fixed platform charge per public route
- provider list price: routing metadata, not direct settlement payout

## Public Request Price

Buyer charge is:

```text
request payout budget + route surcharge
```

Default surcharges:

- raid: `$0.01`
- chat: `$0.002`

## Budget Rules

- native raid requires `raidPolicy.maxTotalCost`
- chat requires `raid_policy.max_total_cost`
- omitted budget returns `400 bad_request`

## Provider Payout Rule

The payout pool is the raid budget. Successful providers split it equally.

Examples:

- budget `$12`, 3 successful providers -> `$4` each
- budget `$12`, 2 successful providers -> `$6` each
- budget `$12`, 1 successful provider -> `$12`

Provider `pricePerTaskUsd` affects routing, not settlement shares.
