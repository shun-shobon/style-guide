# shun-shobon's Style Guide

## Introduction

This repository is a collection of style guides for web application development, which includes configs for popular tools linting and styling tools.

The following configs are available:

- [ESLint](#ESLint)
- [Prettier](#Prettier)

## Installation

All of the configs are contained in one package, `@shun-shobon/style-guide`. To install:

```bash
# If you use npm
npm install --save-dev @shun-shobon/style-guide

# If you use yarn
yarn add --save-dev @shun-shobon/style-guide

# If you use pnpm
pnpm add --dev @shun-shobon/style-guide
```

Some of the configs require peer dependencies.

## ESLint

> [!NOTE]
> ESLint is a peer-dependency of this package, and should be installed at the root of your project.

To use the shared ESLint config, set the following in `eslint.config.js`:

```js
import { shun_shobon } from "@shun-shobon/style-guide/eslint";

export default shun_shobon();
```

## Prettier

> [!NOTE]
> Prettier is a peer-dependency of this package, and should be installed at the root of your project.

To use the shared Prettier config, set the following in `prettier.config.js`:

```js
import { shun_shobon } from "@shun-shobon/style-guide/prettier";

export default shun_shobon();
```
