import { defineConfig } from "@shun-shobon/eslint-config-utils";
import { GLOB_SRC } from "@shun-shobon/eslint-config-utils/globs";

import * as basic from "./basic";

export { basic };

export default defineConfig({
  files: [GLOB_SRC],
  rules: {
    ...basic.rules,
  },
});
