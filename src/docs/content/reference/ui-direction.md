---
description: The public web should stay API-first and proof-aware, while ops remains internal and focused on receipt review and control surfaces.
---

# UI Direction

## Public Web

- `apps/web` is public
- `/` frames Boss Raid as a private tool surface
- `/raiders` exposes the public provider directory
- `/receipt` exposes one public proof page at a time via `raidId` plus `raidAccessToken`

## Ops

- `apps/ops` is internal
- it includes receipt and proof views for ranked submissions and settlement review
- do not place operator controls on the public page

## Design Rule

Public and ops should feel related, but not identical. The public surface should stay focused on task ingress, proof, and discoverability rather than internal control flows.
