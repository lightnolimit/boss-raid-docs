# Boss Raid Docs

This repo is the documentation site for Boss Raid.

Boss Raid is the platform. Mercenary is the orchestrator agent inside Boss Raid. These docs cover the public raid-oriented API, provider worker model, registry and discovery flow, ops surfaces, persistence, settlement, and the current limits of the stack.

Production URL: `https://boss-raid-docs.pages.dev`

Start in the app at `/docs/getting-started/introduction`.

## Run Locally

```bash
git clone git@github.com-lite:lightnolimit/boss-raid-docs.git
cd boss-raid-docs
npm install
npm run dev
```

The docs app runs at `http://localhost:3333`.

## Start Here

- Product overview: `/docs/getting-started/introduction`
- Local setup: `/docs/getting-started/quick-start`
- Native API: `/docs/api-reference/native-raid`
- Runtime and env: `/docs/operations/runtime-and-environment`

## Content Model

- `shared/documentation-config.js` is the docs tree and homepage source of truth
- `src/docs/content/` contains the markdown source pages
- `public/docs-content/` and `public/docs-index.json` are generated artifacts
- `public/llms.txt` and `public/llms-full.txt` are AI-facing exports generated from the docs corpus

## Writer Workflow

1. Update `shared/documentation-config.js` when the docs tree, hero copy, or footer links need to change.
2. Edit markdown under `src/docs/content/`.
3. If `npm run dev` is already running, rerun `npm run generate:docs` after docs-tree or markdown changes.
4. Rerun `npm run generate:seo` after changing `VITE_SITE_URL`, homepage messaging, or page descriptions.
5. Run `npm run generate:llms` if you want fresh AI exports without a full build.
6. Run `npm test`, `npm run lint`, `npm run build`, and `npm run release:check` before shipping.

## Core Commands

```bash
npm run dev
npm run generate:docs
npm run generate:seo
npm run generate:llms
npm test
npm run lint
npm run build
npm run release:check
```

## Source Of Truth

The docs content is derived from the live Boss Raid app repo and its current internal docs:

- app repo: `https://github.com/lightnolimit/boss-raid`
- monorepo docs: `README.md`, `docs/architecture.md`, `docs/interfaces.md`, `docs/runtime.md`, `docs/ui.md`, `docs/hackathon.md`, `docs/synthesis-registration.md`
- runtime source: `apps/api`, `apps/orchestrator`, `apps/provider-agent`, `apps/mcp-server`, and the shared packages

When behavior changes in the app repo, update this repo to keep the external docs current.

## Release Notes

- [RELEASING.md](RELEASING.md)
- [CHANGELOG.md](CHANGELOG.md)

## License

MIT. See [LICENSE](LICENSE).
