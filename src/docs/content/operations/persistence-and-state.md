# Persistence And State

Boss Raid persists provider state and raid state so the API, ops surface, and settlement tooling can work against the same data.

## Backends

### SQLite

`@bossraid/persistence-sqlite` is the current local default backend.

Configured by:

- `BOSSRAID_STORAGE_BACKEND=sqlite`
- `BOSSRAID_SQLITE_FILE=./temp/bossraid-state.sqlite`

### File-Backed Snapshots

`@bossraid/persistence` provides file-backed snapshots.

Configured by:

- `BOSSRAID_STORAGE_BACKEND=file`
- `BOSSRAID_STATE_FILE=./temp/bossraid-state.json`

### In-Memory

The orchestrator can also run against in-memory persistence, but that is not the local default.

## What Gets Persisted

- provider profiles
- provider status and freshness timestamps
- raid records
- assignments
- ranked submissions
- reputation events
- settlement execution records

## Restore Behavior

On boot, the orchestrator restores:

- persisted providers into runtime provider profiles
- persisted raids into active raid records

It then refreshes provider scores and continues serving status and result routes from the restored state.

## Settlement Artifacts

Settlement execution records include:

- execution mode
- artifact path
- registry raid reference
- task hash
- evaluation hash
- successful provider ids
- allocations
- optional transaction hashes
- optional job ids

## Current Operational Guidance

- use SQLite for local development
- keep file-backed mode as a compatibility path
- do not assume D1 exists yet

## Next Steps

- [Raid Lifecycle](/docs/platform/raid-lifecycle)
- [Settlement And Contracts](/docs/operations/settlement-and-contracts)
- [Current Limits](/docs/reference/current-limits)
