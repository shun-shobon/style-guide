import type { Config } from "@shun-shobon/eslint-config-utils";
import {
  combineRules,
  definePlugins,
  defineRules,
  renameAlias,
} from "@shun-shobon/eslint-config-utils";
// @ts-expect-error: This package doesn't have types
import unicorn from "eslint-plugin-unicorn";

export const ALIAS_UNICORN = "unicorn";

export const plugins = definePlugins(ALIAS_UNICORN, unicorn as Config.Plugin);

const baseRules = renameAlias(
  ALIAS_UNICORN,
  // eslint-disable-next-line typescript/no-unsafe-member-access
  unicorn.configs.recommended.rules as Config.Rules
);

const overrideRules = defineRules(ALIAS_UNICORN, {
  // Prettierで整形できるルールは無効化
  "empty-brace-spaces": "off",
  "no-nested-ternary": "off",
  "number-literal-case": "off",

  // unicornの推奨ルールから不要なものを無効化

  // コンポーネント内の関数など、スコープを小さくしておきたい場合があるので無効化
  "consistent-function-scoping": "off",

  // ファイルの名前はコンポーネントなどで形式が変化するため無効化
  "filename-case": "off",

  // 直接関数を渡したほうが簡潔に書ける場合があるので無効化
  "no-array-callback-reference": "off",

  // `.forEach()`のほうが簡潔に書ける場合があるので無効化
  "no-array-for-each": "off",

  // `.reduce()`/`.reduceRight()`は使ったほうが簡潔に書ける場合があるので無効化
  "no-array-reduce": "off",

  // 否定形の方が簡潔に書ける場合があるので無効化
  "no-negated-condition": "off",

  // nullも使う場合があるので無効化
  "no-null": "off",

  // CommonJSを使う場合もあるため無効化
  "prefer-module": "off",

  // `[...array].map()`は~~ダサい~~ので無効化
  "prefer-spread": "off",

  // 略語の方が簡潔に書ける場合があるので無効化
  "prevent-abbreviations": "off",

  // switch文のcase節を常にブロックにするのは冗長なので必要なときのみブロックにする
  "switch-case-braces": ["warn", "avoid"],
});

export const rules = combineRules(baseRules, overrideRules);
