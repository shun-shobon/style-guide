import typescript from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import {
  defineConfig,
  definePlugins,
  defineRules,
  combineRules,
} from "@shun-shobon/eslint-config-utils";
import { type Config } from "@shun-shobon/eslint-config-utils";
import { GLOB_TS } from "@shun-shobon/eslint-config-utils/globs";

export const ALIAS_TYPESCRIPT = "typescript";

export const plugins = definePlugins(
  ALIAS_TYPESCRIPT,
  typescript as unknown as Config.Plugin
);

const disableRules = defineRules(
  typescript.configs["eslint-recommended"]!.overrides![0]!.rules!
);
const enableRules = defineRules(ALIAS_TYPESCRIPT, {
  // 厳密なルール + 型チェックのルールを有効化
  ...typescript.configs["strict-type-checked"]!.rules!,
  // コーディング規約 + 型チェックのルールを有効化
  ...typescript.configs["stylistic-type-checked"]!.rules!,

  // exportされている関数は型の明示を必須にする
  "explicit-module-boundary-types": "warn",

  // 型をexportする際に`type`の付与を必須にする
  "consistent-type-exports": [
    "error",
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],

  // 型をimportする際に`type`の付与を必須にする
  "consistent-type-imports": "error",

  // `_`から始まる変数名以外の未使用変数を警告
  "no-unused-vars": [
    "warn",
    {
      varsIgnorePattern: "^_",
      argsIgnorePattern: "^_",
    },
  ],

  // 副作用の可能性のあるtype importを警告
  "no-import-type-side-effects": "warn",

  // なるべくreadonlyを付与する
  "prefer-readonly": "warn",

  // `Promise`を返す関数は`async`を付与する
  "promise-function-async": "error",

  // ソートでは必ず比較関数を渡す
  "require-array-sort-compare": "error",

  // `return await`を使う
  // 一貫性のためと、awaitが無くなったときにasyncを外すのは面倒なため
  // また、スタックトレースが読みやすくなる
  "return-await": ["warn", "always"],

  // if文にboolean以外を許可しない
  "strict-boolean-expressions": [
    "error",
    {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false,
    },
  ],
});

export const rules = combineRules(disableRules, enableRules);

export default defineConfig({
  files: [GLOB_TS],
  languageOptions: {
    parser,
  },
  plugins,
  rules,
});
