# @shun-shobon/oxlint-config

Shared Oxlint config for shun-shobon's web projects.

## Installation

`oxlint` is a peer dependency and must be installed in your project. Install `oxlint-tsgolint` as well when you use TypeScript, because type-aware rules are enabled.

```bash
pnpm add --save-dev @shun-shobon/oxlint-config@<version> oxlint@<version> oxlint-tsgolint@<version>
```

## Usage

```ts
// oxlint.config.ts
import { shun_shobon } from "@shun-shobon/oxlint-config";

export default shun_shobon();
```

Oxlint's default plugins are used with the `correctness`, `suspicious` and `pedantic` categories as `error` and `perf` as `warn`. Rules that duplicate another rule or are too noisy in practice (such as `max-lines` and `typescript/prefer-readonly-parameter-types`) are turned off. On top of that, this config adds:

- stricter type-aware TypeScript rules (`strict-boolean-expressions`, `no-unsafe-*`, and so on) when TypeScript is used,
- `eqeqeq` that allows `== null`, and `no-implicit-coercion`,
- `shun-shobon/nullish-comparison` rule, which enforces `== null` / `!= null` instead of `=== null` / `!== null` (reported with a suggestion, not an auto-fix). Use `=== undefined` to check for `undefined` only.

TypeScript (type-aware linting), React (with JSX A11y), Next.js and Vitest are enabled automatically based on the dependencies. Pass options to override the detection, and pass configs after the options to customize them.

```ts
export default shun_shobon(
	{ react: false, ignores: ["generated/**"] },
	{ rules: { "no-console": "error" } },
);
```
