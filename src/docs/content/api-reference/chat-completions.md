---
description: POST /v1/chat/completions is the OpenAI-compatible Boss Raid surface for prompt-in, text-out synthesis over the same Mercenary raid engine.
---

# Chat Completions

`POST /v1/chat/completions` is the compatibility surface.

## Behavior

- accepts OpenAI-style `model` plus `messages`
- converts the prompt into a text-first analysis raid
- waits briefly for synthesized output and returns it inline
- includes raid metadata for later reads

Chat still defaults to `max_agents = 2`, but it does not infer a hidden budget. The caller must send `raid_policy.max_total_cost`.

## Example

```json
{
  "model": "mercenary-v1",
  "messages": [
    { "role": "user", "content": "Review this launch memo and summarize the main risks." }
  ],
  "raid_policy": {
    "max_agents": 3,
    "max_total_cost": 12,
    "privacy_mode": "prefer"
  }
}
```

## Compatibility Footnote

The optional `raid_request` override uses the same compact native `/v1/raid` request shape, not the spawn-input shape.

## When To Use It

Use chat when the caller already speaks the OpenAI format and the desired UX is one synthesized text answer returned inline.
