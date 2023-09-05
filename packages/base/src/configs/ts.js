import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

import ignorePattern from "../ignore-pattern.js";

/**
 * @type {import("@shun-shobon/eslint-config-utils").Config}
 */
const config = {
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: tsParser,
  },
  plugins: {
    "@typescript-eslint": ts,
  },
  rules: {
    // recommended と重複しているルールを無効化
    ...ts.configs["eslint-recommended"].overrides[0].rules,

    // TODO: recommended-requiring-type-checking は既に deprecated であり，なおかつ strict-type-checking で代用可能なため置き換える
    // recommended + 型チェックのルールを使用
    ...ts.configs["recommended-requiring-type-checking"].rules,
    // strict のルールを使用
    ...ts.configs["strict"].rules,
    // TODO: stylistic-type-checking の追加
    // `_`から始まる変数名以外の未使用変数を警告
    "@typescript-eslint/no-unused-vars": ["warn", ignorePattern],
    // exportされている関数は型の明示を必須にする
    "@typescript-eslint/explicit-module-boundary-types": "error",
    // `import { type T } from "..."` を許可しない
    // `import type { T } from "..."` や `import { T, type U } from "..."` は可能
    // `{ type T }` のみのimportはトランスパイル時に `import {} from "..."` のみが残り、副作用になるため
    "@typescript-eslint/no-import-type-side-effects": "warn",
    // `require()` を許可しない
    "@typescript-eslint/no-require-imports": "error",
    // `private` なであり、書き換えられないメンバーは `readonly` を強制する
    "@typescript-eslint/prefer-readonly": "warn",
    // 安全でない真偽値判定を許可しない
    "@typescript-eslint/strict-boolean-expressions": "error",
    // Switch文が全てのケースを網羅していることを強制する
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    // 配列の型を `T[]` ではなく `Array<T>` にする
    "@typescript-eslint/array-type": [
      "error",
      { default: "generic", readonly: "generic" },
    ],
    // 未使用の式を警告
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    // union型での `void` を許可
    "@typescript-eslint/no-invalid-void-type": "off",
  },
};

export default config;
