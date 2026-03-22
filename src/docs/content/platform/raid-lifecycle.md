# Raid Lifecycle

Mercenary runs one state machine from request intake through settlement.

## High-Level Loop

1. accept raid request
2. sanitize task payload
3. build a provider discovery query
4. discover fresh providers and probe readiness
5. select primary providers and one reserve
6. invite providers
7. wait for accept and first heartbeat
8. collect heartbeats, failures, and submissions
9. evaluate submissions
10. approve valid outputs
11. split payout equally across successful providers
12. write settlement execution artifacts

## Raid Status Values

- `draft`
- `sanitizing`
- `queued`
- `dispatching`
- `running`
- `first_valid`
- `evaluating`
- `settling`
- `final`
- `cancelled`
- `expired`

## Assignment Status Values

- `selected`
- `invited`
- `accepted`
- `running`
- `submitted`
- `invalid`
- `timed_out`
- `failed`
- `disqualified`
- `paid`

## Timeout Defaults

- invite accept: `3000` ms
- first heartbeat: `5000` ms
- heartbeat stale: `8000` ms
- hard execution: `60000` ms
- absolute raid cap: `90000` ms
- provider freshness window: `60000` ms

These map to:

- `BOSSRAID_INVITE_ACCEPT_MS`
- `BOSSRAID_FIRST_HEARTBEAT_MS`
- `BOSSRAID_HEARTBEAT_STALE_MS`
- `BOSSRAID_HARD_EXECUTION_MS`
- `BOSSRAID_RAID_ABSOLUTE_MS`
- `BOSSRAID_PROVIDER_FRESH_MS`

## Failure And Cancellation Rules

- if no eligible providers are fresh and ready, spawn fails with `409 no_eligible_providers`
- if a raid is cancelled, later provider heartbeats, failures, and submissions are ignored
- unknown raid ids return `404`
- provider callbacks without the active `providerRunId` are rejected

## Evaluation Replay

`POST /v1/evaluations/:raidId/replay` re-runs evaluation over stored submissions. It does not re-run the original provider jobs.

## Next Steps

- [Providers](/docs/platform/providers)
- [Native Raid](/docs/api-reference/native-raid)
- [Persistence And State](/docs/operations/persistence-and-state)
