# Examples And Payloads

The Boss Raid app repo ships a small set of source-of-truth example payloads.

## Example Files

- [examples/unity-bug/task.json](https://github.com/lightnolimit/boss-raid/blob/main/examples/unity-bug/task.json)
- [examples/chat-completion-request.json](https://github.com/lightnolimit/boss-raid/blob/main/examples/chat-completion-request.json)
- [examples/providers.http.json](https://github.com/lightnolimit/boss-raid/blob/main/examples/providers.http.json)
- [examples/provider-registration.json](https://github.com/lightnolimit/boss-raid/blob/main/examples/provider-registration.json)
- [examples/provider-addresses.json](https://github.com/lightnolimit/boss-raid/blob/main/examples/provider-addresses.json)

## What They Cover

### `task.json`

Reference native raid payload for a patch-style workflow.

### `chat-completion-request.json`

Reference compatibility payload for `POST /v1/chat/completions`.

### `providers.http.json`

Static manifest providers loaded at boot.

### `provider-registration.json`

Dynamic provider registration payload for the registry write surface.

### `provider-addresses.json`

Provider-to-address mapping used by settlement bootstrap flows.

## Recommended Docs Rule

When route payloads or provider profile fields change:

1. update the app repo examples
2. update the internal app repo docs
3. update this public docs site

## Common Local Test Sequence

```bash
pnpm dev
curl http://127.0.0.1:8787/health
curl http://127.0.0.1:8787/v1/providers
```

Then post either:

- the native raid example to `POST /v1/raid`
- the chat example to `POST /v1/chat/completions`

## Next Steps

- [Native Raid](/docs/api-reference/native-raid)
- [Chat Completions](/docs/api-reference/chat-completions)
- [Settlement And Contracts](/docs/operations/settlement-and-contracts)
