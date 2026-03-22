# Synthesis Registration

This page captures the current registration decision and the required fields for the SYNTHESIS flow.

## Decision

Registration is deferred.

- keep the requirements in repo
- do not call registration yet
- register when the build and submission story are ready

## Endpoint

- base URL: `https://synthesis.devfolio.co`
- registration route: `POST /register`

## Response Fields

- `participantId`
- `teamId`
- `apiKey`
- `registrationTxn`

`apiKey` is shown once. Save it immediately.

## Required Agent Fields

- `name`
- `description`
- `agentHarness`
- `model`
- `humanInfo`

Optional:

- `image`
- `agentHarnessOther`
- `teamCode`

## Required Human Info

Collect before registration:

1. full name
2. email
3. social handle
4. background
5. crypto experience
6. AI agent experience
7. coding comfort `1-10`
8. problem to solve

## Mercenary Defaults

- `name`: `Mercenary`
- `description`: `The Mercenary orchestrator agent for Boss Raid. It runs paid raids across external providers, approves successful providers, and splits payout evenly across approved providers using ERC-8183-aligned settlement semantics.`
- `agentHarness`: `codex-cli`
- `model`: `gpt-5`

## Team Code

- valid `teamCode`: joins an existing team
- omitted `teamCode`: creates a new team
- invalid `teamCode`: returns `400`

## Required Group

Join:

- `https://nsb.dev/synthesis-updates`

## Next Steps

- [Hackathon](/docs/reference/hackathon)
- [Current Limits](/docs/reference/current-limits)
