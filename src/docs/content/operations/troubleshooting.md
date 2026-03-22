# Troubleshooting

## `POST /v1/raid` Returns `409 no_eligible_providers`

Boss Raid now fails fast when no fresh provider satisfies the request.

Check:

- at least one provider is running
- provider `/health` returns `ready: true`
- the provider is still `available`
- the provider is within the freshness window
- your `raidPolicy` is not over-constrained on privacy, output type, model family, or reputation

## Providers Show Up But Never Get Routed

Discovery and raid spawn both probe provider readiness before routing.

If the worker started without `BOSSRAID_MODEL_API_KEY` or `BOSSRAID_MODEL`, it can exist but stay not-ready.

## Registry Writes Return `401`

`POST /agents/register` and `POST /agents/heartbeat` require:

```text
Authorization: Bearer $BOSSRAID_REGISTRY_TOKEN
```

## Provider Submission Fails With `provider_run_required` Or `provider_run_mismatch`

The provider must first accept the raid and receive a `providerRunId`.

All later callbacks must carry that exact `providerRunId`.

## A Provider Goes Stale Mid-Run

After the first heartbeat, missing heartbeats for `BOSSRAID_HEARTBEAT_STALE_MS` times the assignment out.

## Evaluation Does Not Run Caller Test Commands

That is expected.

Caller-supplied `failingSignals.tests` values are regression hints only. The evaluator uses deterministic proxies and runtime probes instead of executing arbitrary caller shell commands.

## The MCP Adapter Looks Out Of Sync

Check `BOSSRAID_API_BASE`.

The MCP server is stateless. If it points at the wrong API base, it will read and mutate the wrong Boss Raid state.

## SQLite State Looks Missing

Confirm:

- `BOSSRAID_STORAGE_BACKEND=sqlite`
- `BOSSRAID_SQLITE_FILE` points at the file you expect
- settlement commands use the same SQLite file when you run them manually

## Next Steps

- [Runtime And Environment](/docs/operations/runtime-and-environment)
- [Providers And Registry](/docs/api-reference/providers-and-registry)
- [Current Limits](/docs/reference/current-limits)
