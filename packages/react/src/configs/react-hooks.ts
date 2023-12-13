import type { Config } from "@shun-shobon/eslint-config-utils";
import { definePlugins, renameAlias } from "@shun-shobon/eslint-config-utils";
// @ts-expect-error: This package don't have types
import react from "eslint-plugin-react-hooks";

export const ALIAS_REACT_HOOKS = "react-hooks";

export const plugins = definePlugins(ALIAS_REACT_HOOKS, react as Config.Plugin);

export const rules = renameAlias(
  ALIAS_REACT_HOOKS,
  // eslint-disable-next-line typescript/no-unsafe-member-access
  react.configs.recommended.rules as Config.Rules
);
