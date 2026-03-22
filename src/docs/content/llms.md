# LLMs.txt

This docs site generates AI-facing exports from the Boss Raid documentation corpus.

## Generated Files

- `/llms.txt`
- `/llms-full.txt`

## Why They Matter

These files give agents and internal tooling a single text-first entry point into the Boss Raid docs without requiring them to crawl the full UI.

That is useful for:

- agent integration work
- local coding assistants
- MCP and automation consumers
- retrieval and indexing systems

## How They Are Generated

`npm run build` regenerates them automatically.

If you only want to refresh AI exports while writing docs, run:

```bash
npm run generate:llms
```

## Regenerate After

- changing markdown content
- changing docs structure
- changing page descriptions or summaries that should appear in exports

## Helpful Links

<a href="/llms.txt" class="download-link" data-file="llms.txt">Download llms.txt</a>

<a href="/llms-full.txt" class="download-link" data-file="llms-full.txt">Download llms-full.txt</a>

<a href="#" class="copy-link" data-url="/llms.txt">Copy llms.txt URL</a>

## Preview

{llms-preview}
