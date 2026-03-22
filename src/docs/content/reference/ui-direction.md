# UI Direction

Boss Raid has two different UI surfaces and they should stay different.

## Split

- `apps/web` is public
- `apps/ops` is internal

Do not put operator controls on the public page.

## Public Web

Purpose:

- explain the product fast
- show the two API entrypoints
- provide copyable examples
- link to the docs

Use:

- sparse copy
- segmented hero imagery
- compact raid spec framing
- layered code panels
- small mono labels
- restrained motion tied to real state

Do not use:

- payload editors
- abort or replay controls
- provider internals
- live operator timelines

## Ops

Purpose:

- launch raids
- inspect providers
- inspect raid state
- replay evaluation
- inspect approved output
- inspect settlement

Use:

- dense control layout
- state-driven warnings
- readiness and activity tied to real provider state
- restrained animation only when state needs it

## Shared Visual Direction

- dark surfaces
- orange accent
- minimal shadows
- public and ops should feel related, not identical

## Current Product Truth

The public web app is landing-only.

The operator surface is a separate app in `apps/ops`.

## Next Steps

- [Apps And Packages](/docs/platform/apps-and-packages)
- [Current Limits](/docs/reference/current-limits)
- [Hackathon](/docs/reference/hackathon)
