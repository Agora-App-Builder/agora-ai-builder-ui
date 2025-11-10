# Agora AI Builder UI

A comprehensive component library built on top of [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/), designed to help you build AI-powered real-time applications faster with Agora.

## Overview

Agora AI Builder UI provides pre-built, customizable React components specifically designed for AI agents, voice conversations, and real-time interactions. It includes a collection of UI components to accelerate development of modern AI applications.

The library features:

- **Voice & Audio Components** - Microphone Selectors, Agent Visualizers, etc.
- **Full TypeScript Support** - Type-safe component APIs
- **Dark Mode** - Built-in theme support with CSS variables

## Installation

The easiest way to use Agora AI Builder UI components in your projects is via the [Agora App Builder CLI](https://www.npmjs.com/package/agora-app-builder-cli)

#### Install All Components

This will install all available UI components at once:

```bash
npx agora-app-builder-cli@latest components add all
```

#### Install Specific Components

This will install individual components:

```bash
npx agora-app-builder-cli@latest components add agent-visualizer
```

## Prerequisites

Before using Agora AI Builder UI, ensure your Next.js project meets these requirements:

- **Node.js 18** or later
- **shadcn/ui** initialized in your project (npx shadcn@latest init)
- **Tailwind CSS** configured

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

#### Component Contribution Guide

```
1. Create Component
   └─ Add to: apps/www/registry/agora-ui/ui/my-component.tsx

2. Build Registry
   └─ Run: pnpm registry:build
   └─ Generates: apps/www/registry.json

3. Deploy to Vercel
   └─ Push to main branch
   └─ Registry published to CDN

4. Users Install via CLI
   └─ Run: npx agora-app-builder-cli@latest components add my-component
   └─ CLI fetches from Vercel registry
   └─ Component installed in user's project
```

#### What Happens When You Run `pnpm registry:build`

The registry build script:

1. Scans all components in `apps/www/registry/agora-ui/ui/`
2. Scans all examples in `apps/www/registry/agora-ui/examples/`
3. Creates JSON metadata for each component
4. Generates `registry.json` (for all components)
5. Generates individual component files (for CLI distribution)
6. Deploys to Vercel when code is pushed

#### Scripts Reference

App Level Scripts (apps/www)

- `pnpm dev` - Start Next.js dev server with Turbopack
- `pnpm build` - Build Next.js application
- `pnpm start` - Start production server
- `pnpm registry:build` - Rebuild component registry

## Support

For issues, feature requests, or questions:

- Open an [issue](../../issues) on GitHub
<!-- - Check the [documentation](./apps/www) in the docs folder -->
- Review component examples in the examples folder
