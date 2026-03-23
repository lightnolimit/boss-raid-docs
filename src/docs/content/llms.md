---
description: Boss Raid publishes AI-facing llms.txt exports so external tools can consume the docs corpus without crawling the full UI.
---

# LLMs.txt

Boss Raid publishes AI-facing text exports for agents, retrieval pipelines, and search tooling.

## Generated Files

- `/llms.txt`
- `/llms-full.txt`

## What They Cover

The exports summarize the public docs corpus for:

- native raid and chat routes
- MCP workflow integration
- runtime and deployment posture
- pricing, payouts, proof, and settlement

## Refreshing Exports

From the docs app root:

```bash
npm run generate:llms
```

`npm run build` regenerates them automatically.

## Helpful Links

<a href="/llms.txt" class="download-link" data-file="llms.txt">Download llms.txt</a>

<a href="/llms-full.txt" class="download-link" data-file="llms-full.txt">Download llms-full.txt</a>

<a href="#" class="copy-link" data-url="/llms.txt">Copy llms.txt URL</a>

## Preview

{llms-preview}
