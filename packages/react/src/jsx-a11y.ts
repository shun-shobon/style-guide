import type { Config } from "@shun-shobon/eslint-config-utils";
import {
  combineRules,
  definePlugins,
  defineRules,
  renameAlias,
} from "@shun-shobon/eslint-config-utils";
// @ts-expect-error: This package don't have types
import jsxA11y from "eslint-plugin-jsx-a11y";

export const ALIAS_JSX_A11Y = "jsx-a11y";

export const plugins = definePlugins(ALIAS_JSX_A11Y, jsxA11y as Config.Plugin);

const baseRules = renameAlias(
  ALIAS_JSX_A11Y,
  // eslint-disable-next-line typescript/no-unsafe-member-access
  jsxA11y.configs.recommended.rules as Config.Rules
);

const additionalRules = defineRules(ALIAS_JSX_A11Y, {
  // 曖昧なリンクのテキストを許可しない
  "anchor-ambiguous-text": "error",
  // インタラクティブな要素にラベルが付いていないことを許可しない
  "control-has-associated-label": "error",
  // フォーカス可能な要素に `aria-hidden` 属性を付与することを許可しない
  "no-aria-hidden-on-focusable": "error",
});

export const rules = combineRules(baseRules, additionalRules);
