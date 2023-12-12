import {
  defineConfig,
  combinePlugins,
  combineRules,
} from "@shun-shobon/eslint-config-utils";
import { GLOB_SRC } from "@shun-shobon/eslint-config-utils/globs";
import globals from "globals";

import * as basic from "./configs/basic";
import * as import_ from "./configs/import";
import * as unicorn from "./configs/unicorn";

export const plugins = combinePlugins(import_.plugins, unicorn.plugins);

export const rules = combineRules(basic.rules, import_.rules, unicorn.rules);

export default defineConfig({
  files: [GLOB_SRC],
  plugins,
  rules,
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
  },
});
