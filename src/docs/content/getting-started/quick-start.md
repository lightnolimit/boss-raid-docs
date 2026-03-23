---
description: Start the local Boss Raid stack, choose your payment posture, and send the first native raid or compatibility chat request.
---

# Quick Start

Use this path to boot the local stack and hit the API quickly.

## 1. Install And Verify

```bash
git clone https://github.com/lightnolimit/boss-raid.git
cd boss-raid
pnpm install
cp .env.example .env
pnpm check
```

## 2. Choose Your Local Payment Posture

Public write routes are paid by default.

For unpaid local development:

```bash
echo 'BOSSRAID_X402_ENABLED=false' >> .env
```

For paid local rehearsal with HMAC:

```bash
echo 'BOSSRAID_X402_VERIFY_HMAC_SECRET=local-dev-only' >> .env
echo 'BOSSRAID_X402_PAY_TO=0x0000000000000000000000000000000000000001' >> .env
```

## 3. Start The Stack

```bash
pnpm dev
```

Local entrypoints:

- web: `http://127.0.0.1:4173`
- ops: `http://127.0.0.1:4174`
- API: `http://127.0.0.1:8787`

## 4. Send A Request

Use the example payloads in:

- `examples/unity-bug/task.json`
- `examples/chat-completion-request.json`

Both public write routes require an explicit payout budget.

## Next Steps

- [Local Development](/docs/getting-started/local-development)
- [Native Raid](/docs/api-reference/native-raid)
- [Chat Completions](/docs/api-reference/chat-completions)
