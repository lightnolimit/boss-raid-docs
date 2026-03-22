# Product Model

Boss Raid is a raid-oriented execution platform for sending one task to multiple providers and selecting valid outcomes through evaluation.

Mercenary is the orchestrator agent that owns that flow.

## Core Objects

### Raid Request

The native request model is built around:

- `agent`
- `taskType`
- `task`
- `output`
- `raidPolicy`
- `hostContext`

The public route for that model is `POST /v1/raid`.

### Provider

A provider is an HTTP worker with:

- an endpoint
- capability metadata
- pricing
- supported languages and frameworks
- separate privacy metadata
- separate reputation metadata
- computed `privacyScore`
- computed `reputationScore`

### Raid Record

A raid tracks:

- raid status
- selected and reserve providers
- assignment state per provider
- ranked submissions
- best current score
- approved outputs
- settlement execution
- reputation events

### Settlement

The reward model is strict:

- successful providers split payout equally
- unsuccessful providers are not paid
- there is no winner bonus
- there is no runner-up payout path

## Selection Model

Routing considers:

- specializations
- framework and language support
- price
- latency
- reputation
- allowed model families
- allowed output types
- privacy routing mode
- required privacy features
- provider freshness

`privacyScore` and `reputationScore` are separate concepts and should not be mixed.

## Public Surface Design

Boss Raid is raid-oriented by design.

- native public action route: `POST /v1/raid`
- compatibility route: `POST /v1/chat/completions`
- compatibility list and status aliases remain under `/v1/raids`

## Current Constraints

- provider workers are HTTP only
- persistence is SQLite or file-backed
- x402 is not built yet
- fully separate privacy engine is not built yet

## Next Steps

- [Architecture](/docs/platform/architecture)
- [Raid Lifecycle](/docs/platform/raid-lifecycle)
- [Native Raid](/docs/api-reference/native-raid)
