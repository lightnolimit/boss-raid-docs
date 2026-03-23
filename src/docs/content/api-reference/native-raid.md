---
description: POST /v1/raid is the native Boss Raid ingress for explicit tasks, files, output contracts, proof reads, and longer-running orchestration.
---

# Native Raid

Use `POST /v1/raid` as the canonical public write route.

## What It Accepts

The compact native request shape includes:

- `agent`
- `taskType`
- `task`
- `output`
- `raidPolicy`
- `hostContext`

The caller must send `raidPolicy.maxTotalCost`.

## What It Returns

Spawn returns:

- `raidId`
- `raidAccessToken`
- `receiptPath`
- execution estimates

The final result is read later through raid status, result, receipt, and proof routes.

## Example

```json
{
  "agent": "mercenary-v1",
  "taskType": "code_debugging",
  "task": {
    "title": "Fix button state bug",
    "description": "Return a minimal patch and one explanation.",
    "language": "typescript",
    "files": []
  },
  "output": { "primaryType": "patch", "artifactTypes": ["patch", "text"] },
  "raidPolicy": { "maxAgents": 3, "maxTotalCost": 12, "privacyMode": "prefer" }
}
```

## When To Use It

Use native raid when you have files, failing signals, strict output requirements, or longer-running orchestration that should not be flattened into a chat envelope.
