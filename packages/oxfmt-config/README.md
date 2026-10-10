# @shun-shobon/oxfmt-config

Shared Oxfmt config for shun-shobon's web projects.

## Installation

`oxfmt` is a peer dependency and must be installed in your project.

```bash
pnpm add --save-dev @shun-shobon/oxfmt-config@<version> oxfmt@<version>
```

## Usage

```ts
// oxfmt.config.ts
import { shun_shobon } from "@shun-shobon/oxfmt-config";

export default shun_shobon();
```

Oxfmt's default style is used as is. This config only enables sorting of imports and `package.json` keys (including `scripts`), and sorting of Tailwind CSS classes when `tailwindcss` is installed.
