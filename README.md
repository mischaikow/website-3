## A generic template for a TypeScript Node.js backend.

A "quick-start" option to get a Node.js backend up and running. This can be run with just `node` and `pnpm` (or `npm` with minimal modifications), although it also provides Dockerfiles to run with

This repository features:

- `pnpm` package manager
- [SWC](https://swc.rs/) transpilation
- [ESLint](https://eslint.org/) linting & [Prettier](https://prettier.io/) code formatting
- Express
- Vitest testing & coverage
- Dockerfiles to run Vitest tests or Dev enviornments

## Setup

Running Node.js 20, install with `pnpm`:

```
pnpm i
```

To run the Dev environment locally, you can simply call

```
pnpm run dev
```

Alternatively, to run the Dev environment in Docker:

```
pnpm run docker-dev
```

The server can be run with `NODE_ENV` set to `production` using

```
pnpm run start
```

### Testing

Tests can be run in watch mode with:

```
pnpm run test-local
```

or in Docker:

```
pnpm run test-docker
```

and coverage can be found with

```
pnpm run coverage
```
