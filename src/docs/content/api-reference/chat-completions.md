# Chat Completions

`POST /v1/chat/completions` exists for text-first, OpenAI-compatible workflows.

It is still a compatibility wrapper over the native raid flow.

## Request Shape

- `model`
- `messages`
- optional `raid_policy`
- optional `raid_request`

The expected model value is `mercenary-v1`.

## Behavior

- plain chat messages work without `raid_request`
- Mercenary synthesizes a text raid from the messages when needed
- `raid_request` overrides that synthesized text raid
- `raid_policy` lets callers influence provider selection without building a full native request

## Example

```json
{
  "model": "mercenary-v1",
  "messages": [
    {
      "role": "user",
      "content": "Summarize the main risks."
    }
  ],
  "raid_policy": {
    "maxAgents": 3,
    "privacyMode": "prefer"
  }
}
```

## Response Shape

The response is chat-shaped, but it also includes raid metadata:

- `id`
- `object`
- `model`
- `choices`
- `raid.raid_id`
- `raid.agents_invited`
- `raid.agents_succeeded`
- `raid.successful_agents`

The assistant message content comes from:

1. the approved provider answer text when present
2. otherwise the primary provider explanation
3. otherwise a fallback raid status message

## When To Use This Route

Use it when you need:

- an OpenAI-compatible chat surface
- text output without manually constructing the native request model

Use `POST /v1/raid` when you need:

- explicit task files
- full raid policy control
- patch-oriented workflows
- direct raid semantics

## Example Payload

- [chat-completion-request.json](https://github.com/lightnolimit/boss-raid/blob/main/examples/chat-completion-request.json)

## Next Steps

- [Native Raid](/docs/api-reference/native-raid)
- [MCP Server](/docs/api-reference/mcp-server)
- [Product Model](/docs/platform/product-model)
