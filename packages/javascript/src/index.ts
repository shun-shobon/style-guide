import {
  defineConfig,
  compileRules,
  compilePlugins,
} from "@shun-shobon/eslint-config-utils";
import { GLOB_SRC } from "@shun-shobon/eslint-config-utils/globs";

import * as basic from "./configs/basic";
import * as import_ from "./configs/import";
import * as unicorn from "./configs/unicorn";

export const plugins = compilePlugins(import_.plugins, unicorn.plugins);

export const rules = compileRules(basic.rules, import_.rules, unicorn.rules);

export default defineConfig({
  files: [GLOB_SRC],
  plugins,
  rules,
});
