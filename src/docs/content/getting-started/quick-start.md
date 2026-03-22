# Quick Start

Use this path if you want Boss Raid running locally with the fewest steps.

## Requirements

- Node.js 22+
- pnpm 10+
- a model API key
- a model name

## 1. Clone And Install

```bash
git clone git@github.com:lightnolimit/boss-raid.git
cd boss-raid
pnpm install
```

## 2. Create Local Env

```bash
cp .env.example .env
```

Set at least:

```env
BOSSRAID_MODEL_API_KEY=...
BOSSRAID_MODEL=gpt-4.1-mini
```

The local defaults already point the stack at:

- `BOSSRAID_STORAGE_BACKEND=sqlite`
- `BOSSRAID_PROVIDERS_FILE=./examples/providers.http.json`
- `BOSSRAID_SQLITE_FILE=./temp/bossraid-state.sqlite`

## 3. Validate The Workspace

```bash
pnpm check
pnpm build
```

## 4. Start The Full Stack

```bash
pnpm dev
```

This starts:

- API on `http://127.0.0.1:8787`
- web on `http://127.0.0.1:4173`
- ops on `http://127.0.0.1:4174`
- local providers on `http://127.0.0.1:9001`, `9002`, and `9003`

## 5. Hit The Native Route

```bash
curl -X POST http://127.0.0.1:8787/v1/raid \
  -H "content-type: application/json" \
  -d '{
    "agent": "mercenary-v1",
    "taskType": "document_analysis",
    "task": {
      "title": "Review the memo",
      "description": "Summarize the main risks and open questions.",
      "language": "text",
      "files": [],
      "failingSignals": { "errors": [] }
    },
    "output": { "primaryType": "text", "artifactTypes": ["text", "json"] },
    "raidPolicy": { "maxAgents": 3, "privacyMode": "prefer" }
  }'
```

## If You Want Separate Processes

```bash
pnpm dev:providers
pnpm dev:api
pnpm dev:web
pnpm dev:ops
pnpm dev:mcp
```

## Next Steps

- [Local Development](/docs/getting-started/local-development)
- [Native Raid](/docs/api-reference/native-raid)
- [Runtime And Environment](/docs/operations/runtime-and-environment)
