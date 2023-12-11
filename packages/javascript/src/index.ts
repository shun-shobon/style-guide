import { defineConfig } from "@shun-shobon/eslint-config-utils";
import { GLOB_SRC } from "@shun-shobon/eslint-config-utils/globs";

import * as basic from "./basic";
import * as imports from "./imports";

export { basic, imports };

export default defineConfig({
  files: [GLOB_SRC],
  plugins: {
    ...imports.plugins,
  },
  rules: {
    ...basic.rules,
    ...imports.rules,
  },
});
