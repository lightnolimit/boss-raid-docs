---
description: Boss Raid can consume real ERC-8004 registration references today, but the repo does not create those registrations onchain yet.
---

# Synthesis Registration

Registration is deferred. Keep the requirements in repo, but do not call registration until the build and submission story are ready.

## Current Truth

- the proof story depends on real `routingProof`, Venice strict-private routing, and ERC-8183 plus ERC-8004 evidence in public receipts
- Boss Raid can consume real ERC-8004 registration references today
- the repo does not create those registrations onchain yet
- the recommended demo path is one consistent Base registry flow for Mercenary, one Venice-backed provider, and at least one comparison provider

## Operational Notes

- if Virtuals ACP is the chosen path, use ACP registration as the onboarding flow and consume the resulting ERC-8004 references inside Boss Raid
- keep the field mapping between ACP and Boss Raid explicit
- keep the proof runbook aligned with the actual registry path you plan to demo
