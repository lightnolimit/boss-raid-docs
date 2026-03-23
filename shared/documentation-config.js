/**
 * Shared documentation tree configuration.
 *
 * This file is the single source of truth for the docs structure. It is used by:
 * - src/data/documentation.ts
 * - scripts/generate-docs.mjs
 * - scripts/generate-llms.mjs
 */

/**
 * @typedef {Object} FileItem
 * @property {string} name
 * @property {string} path
 * @property {'file' | 'directory'} type
 * @property {FileItem[]} [children]
 * @property {boolean} [expanded]
 * @property {string[]} [tags]
 */

/**
 * @typedef {Object} HomepageConfig
 * @property {boolean} enabled
 * @property {Object} hero
 * @property {Object[]} [features]
 * @property {Object} [quickStart]
 */

/** @type {{ current: string, versions: string[], labels: Record<string, string>, enabled: boolean }} */
export const versionConfig = {
  current: '1.0',
  versions: ['1.0'],
  labels: {
    '1.0': 'Latest',
  },
  enabled: false,
};

/** @type {{ enabled: boolean, defaultLocale: string, locales: string[] }} */
export const i18nConfig = {
  enabled: false,
  defaultLocale: 'en',
  locales: ['en'],
};

/** @type {HomepageConfig} */
export const homepageConfig = {
  enabled: true,
  hero: {
    title: 'Boss Raid Docs',
    subtitle: 'Raid-oriented multi-agent orchestration',
    description:
      'Boss Raid is a raid-oriented execution platform. Mercenary sanitizes tasks, routes work to fresh HTTP providers, evaluates submissions, and splits payout equally across successful providers only.',
    artwork: {
      src: '/images/docs/boss-raid-hero.jpg',
      alt: 'Boss Raid landing artwork',
      caption:
        'Boss Raid public-surface artwork. Use these docs for the real platform model, route contracts, runtime behavior, and current limits.',
    },
    cta: {
      primary: {
        text: 'Quick Start',
        href: '/docs/getting-started/quick-start',
      },
      secondary: {
        text: 'Native Raid API',
        href: '/docs/api-reference/native-raid',
      },
    },
  },
  features: [
    {
      title: 'Raid-first public API',
      description:
        'Use `POST /v1/raid` as the native route. Chat completions exist as a compatibility wrapper over the same orchestration path.',
      icon: 'mingcute:route-line',
    },
    {
      title: 'Provider registry and health routing',
      description:
        'Static manifest providers and registered providers normalize into one runtime provider shape. Discovery only returns fresh, available providers.',
      icon: 'mingcute:radar-2-line',
    },
    {
      title: 'Evaluation and equal split settlement',
      description:
        'Mercenary ranks submissions, approves valid providers, and splits payout equally across successful providers only.',
      icon: 'mingcute:balance-line',
    },
    {
      title: 'Ops, MCP, and local stack docs',
      description:
        'This corpus covers the API, provider worker, ops UI, MCP adapter, persistence backends, env surface, and settlement tooling.',
      icon: 'mingcute:terminal-box-line',
    },
  ],
  quickStart: {
    title: 'Start Boss Raid Locally',
    steps: [
      {
        title: 'Clone the app repo',
        code: 'git clone git@github.com:lightnolimit/boss-raid.git',
      },
      {
        title: 'Install dependencies',
        code: 'cd boss-raid && pnpm install',
      },
      {
        title: 'Create local env',
        code: 'cp .env.example .env',
      },
      {
        title: 'Validate and run the stack',
        code: 'pnpm check && pnpm dev',
      },
    ],
  },
  footer: {
    links: [
      { text: 'Quick Start', href: '/docs/getting-started/quick-start' },
      { text: 'Native API', href: '/docs/api-reference/native-raid' },
      { text: 'App Repo', href: 'https://github.com/lightnolimit/boss-raid' },
      { text: 'Docs Repo', href: 'https://github.com/lightnolimit/boss-raid-docs' },
    ],
  },
};

/** @type {FileItem[]} */
export const documentationTree = [
  {
    type: 'directory',
    name: 'Getting Started',
    path: 'getting-started',
    children: [
      {
        type: 'file',
        name: 'Introduction.md',
        path: 'getting-started/introduction',
        tags: ['getting-started', 'overview', 'boss-raid'],
      },
      {
        type: 'file',
        name: 'Quick Start.md',
        path: 'getting-started/quick-start',
        tags: ['setup', 'quick-start', 'local-dev'],
      },
      {
        type: 'file',
        name: 'Local Development.md',
        path: 'getting-started/local-development',
        tags: ['setup', 'development', 'workflow'],
      },
    ],
  },
  {
    type: 'directory',
    name: 'Platform',
    path: 'platform',
    children: [
      {
        type: 'file',
        name: 'Product Model.md',
        path: 'platform/product-model',
        tags: ['platform', 'product', 'mercenary'],
      },
      {
        type: 'file',
        name: 'Architecture.md',
        path: 'platform/architecture',
        tags: ['architecture', 'apps', 'packages'],
      },
      {
        type: 'file',
        name: 'Raid Lifecycle.md',
        path: 'platform/raid-lifecycle',
        tags: ['raid', 'lifecycle', 'timeouts'],
      },
      {
        type: 'file',
        name: 'Providers.md',
        path: 'platform/providers',
        tags: ['providers', 'registry', 'privacy'],
      },
      {
        type: 'file',
        name: 'Apps And Packages.md',
        path: 'platform/apps-and-packages',
        tags: ['apps', 'packages', 'monorepo'],
      },
    ],
  },
  {
    type: 'directory',
    name: 'API Reference',
    path: 'api-reference',
    children: [
      {
        type: 'file',
        name: 'Overview.md',
        path: 'api-reference/overview',
        tags: ['api', 'overview', 'routes'],
      },
      {
        type: 'file',
        name: 'Native Raid.md',
        path: 'api-reference/native-raid',
        tags: ['api', 'raid', 'native'],
      },
      {
        type: 'file',
        name: 'Chat Completions.md',
        path: 'api-reference/chat-completions',
        tags: ['api', 'chat', 'compatibility'],
      },
      {
        type: 'file',
        name: 'Providers And Registry.md',
        path: 'api-reference/providers-and-registry',
        tags: ['api', 'providers', 'registry'],
      },
      {
        type: 'file',
        name: 'MCP Server.md',
        path: 'api-reference/mcp-server',
        tags: ['api', 'mcp', 'adapter'],
      },
    ],
  },
  {
    type: 'directory',
    name: 'Operations',
    path: 'operations',
    children: [
      {
        type: 'file',
        name: 'Runtime And Environment.md',
        path: 'operations/runtime-and-environment',
        tags: ['runtime', 'environment', 'commands'],
      },
      {
        type: 'file',
        name: 'Persistence And State.md',
        path: 'operations/persistence-and-state',
        tags: ['persistence', 'sqlite', 'state'],
      },
      {
        type: 'file',
        name: 'Settlement And Contracts.md',
        path: 'operations/settlement-and-contracts',
        tags: ['settlement', 'contracts', 'onchain'],
      },
      {
        type: 'file',
        name: 'Pricing And Payouts.md',
        path: 'operations/pricing-and-payouts',
        tags: ['pricing', 'payouts', 'x402'],
      },
      {
        type: 'file',
        name: 'Troubleshooting.md',
        path: 'operations/troubleshooting',
        tags: ['troubleshooting', 'debugging', 'operations'],
      },
    ],
  },
  {
    type: 'directory',
    name: 'Reference',
    path: 'reference',
    children: [
      {
        type: 'file',
        name: 'Examples And Payloads.md',
        path: 'reference/examples-and-payloads',
        tags: ['examples', 'payloads', 'reference'],
      },
      {
        type: 'file',
        name: 'Current Limits.md',
        path: 'reference/current-limits',
        tags: ['limits', 'roadmap', 'reference'],
      },
      {
        type: 'file',
        name: 'UI Direction.md',
        path: 'reference/ui-direction',
        tags: ['ui', 'web', 'ops'],
      },
      {
        type: 'file',
        name: 'Hackathon.md',
        path: 'reference/hackathon',
        tags: ['hackathon', 'story', 'erc-8183'],
      },
      {
        type: 'file',
        name: 'Synthesis Registration.md',
        path: 'reference/synthesis-registration',
        tags: ['synthesis', 'registration', 'reference'],
      },
    ],
  },
  {
    type: 'file',
    name: 'LLMs.txt.md',
    path: 'llms',
    tags: ['llms', 'ai', 'reference'],
  },
];
