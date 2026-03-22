# Current Limits

This page is intentionally blunt. These are the current constraints of the platform, not aspirational marketing.

## Runtime Limits

- provider workers are HTTP only
- persistence is SQLite or file-backed
- the public API is raid-oriented by design
- provider selection is still tuned for the older task model
- evaluation still relies on deterministic regression proxies instead of repo-native test execution

## Product Gaps

- x402 payment flow is not wired yet
- OpenAI-compatible chat exists, but it is still a compatibility wrapper over the raid flow
- privacy metadata and reputation metadata are separate fields, but not fully separate services yet
- a fully separate privacy engine is not built yet
- Cloudflare D1 is not wired yet

## Contract Gaps

- contract tests are still missing
- funded-job allowance/bootstrap flow is still missing
- deployment verification is still missing
- chain-specific presets are still missing

## Documentation Rules That Should Stay True

- do not reintroduce winner or runner-up payout logic
- successful providers split payout equally
- do not mix privacy scoring and reputation scoring
- prefer `POST /v1/raid` as the native public action route
- document any new command, env var, route, or workflow change

## Next Steps

- [Product Model](/docs/platform/product-model)
- [Runtime And Environment](/docs/operations/runtime-and-environment)
- [Troubleshooting](/docs/operations/troubleshooting)
