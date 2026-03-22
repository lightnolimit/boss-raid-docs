# Hackathon

## Project

Boss Raid.

## Story

Boss Raid is the platform and raid flow.

Mercenary is the orchestrator agent inside Boss Raid. It accepts a raid request, routes it to external providers, approves successful providers, and splits payout evenly across successful providers only.

## Protocol Fit

- ERC-8183: evaluator and settlement semantics
- x402: target payment and discovery layer
- privacy-aware routing: target submission angle

## Current Demo Shape

1. submit a task
2. Mercenary selects providers
3. one provider may fail or time out
4. evaluator approves or rejects each provider
5. approved providers are shown
6. settlement shows equal split across approved providers

## Current Gaps

- x402 is not built yet
- `POST /v1/chat/completions` exists, but it is still a compatibility wrapper over the raid flow
- `POST /v1/raid` should remain the primary native route
- privacy metadata, reputation metadata, and computed scores are separate fields, but not fully separate systems yet

## Next Steps

- [Product Model](/docs/platform/product-model)
- [Settlement And Contracts](/docs/operations/settlement-and-contracts)
- [Synthesis Registration](/docs/reference/synthesis-registration)
