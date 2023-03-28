import { defineConfig } from "@shun-shobon/eslint-config-utils";

const ignorePattern = {
  varsIgnorePattern: "^_",
  argsIgnorePattern: "^_",
};

export default defineConfig({
  extends: [
    // ESLintの推奨ルールを有効化
    "eslint:recommended",
    // unicornの推奨ルールを有効化
    "plugin:unicorn/recommended",
    // Prettierが行うフォーマット系のルールを無効化
    "prettier",
  ],
  plugins: [
    // import/export のソート関連のルール
    "simple-import-sort",
  ],
  parserOptions: {
    // TypeScript の型チェックを有効化
    target: true,
  },
  rules: {
    // `_`から始まる変数名以外の未使用変数を警告
    "no-unused-vars": ["warn", ignorePattern],
    // コンストラクタの戻り値を許可しない
    "no-constructor-return": "error",
    // `Promise` のコンストラクタの戻り値を許可しない
    "no-promise-executor-return": "error",
    // 自分自身を比較する式を許可しない
    // NaN チェックは `Number.isNaN()` を使う
    "no-self-compare": "error",
    // 1回しかループしないループを許可しない
    "no-unreachable-loop": "error",
    // 未使用のプライベートクラスメンバーを警告
    "no-unused-private-class-members": "warn",
    // 競合が発生する可能性のある値の代入を許可しない
    "require-atomic-updates": "error",
    // 循環的複雑度を15以上を警告
    complexity: ["warn", 15],
    // switch文のデフォルトケースを最後にする
    "default-case-last": "error",
    // デフォルト引数を最後にする
    "default-param-last": "error",
    // null チェックを除いて厳密でない等価演算子を許可しない
    eqeqeq: ["error", "always", { null: "ignore" }],
    // getter/setter をグループ化
    "grouped-accessor-pairs": ["error", "setBeforeGet"],
    // `console.log()`/`alert` を警告
    "no-alert": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // `else { return }` を警告
    "no-else-return": "warn",
    // 空の関数を許可しない
    "no-empty-function": "error",
    // 空のスタティックブロックを許可しない
    "no-empty-static-block": "error",
    // 不要なラベルを許可しない
    "no-extra-label": "error",
    // 不要なifのネストを許可しない
    "no-lonely-if": "error",
    // 複雑な演算子の混在を警告
    "no-mixed-operators": "warn",
    // 複数の代入を許可しない
    "no-multi-assign": "error",
    // 複数行文字列を警告
    "no-multi-str": "warn",
    // `Function`/`Object`/`String`/`Number`/`Boolean` のコンストラクタを許可しない
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    // 8進数のエスケープシーケンスを警告
    "no-octal-escape": "warn",
    // 関数の引数を再代入することを許可しない
    "no-param-reassign": "error",
    // インクリメント/デクリメント演算子を許可しない
    "no-plusplus": "error",
    // カンマ演算子を許可しない
    "no-sequences": "error",
    // `throw` に文字列を渡さない
    "no-throw-literal": "error",
    // 不要な三項演算子を警告
    "no-unneeded-ternary": "warn",
    // 未使用の式を警告
    "no-unused-expressions": "warn",
    // 意味の無いコンストラクタを警告
    "no-useless-constructor": "warn",
    // 意味の無い`return`を警告
    "no-useless-return": "warn",
    // `var` を許可しない
    "no-var": "error",
    // オブジェクトのショートハンド記法を使用していない場合は警告
    "object-shorthand": "warn",
    // 変数宣言は1つの識別子ごとに1つにする
    "one-var": ["error", "never"],
    // 演算子のショートハンド記法を使用していない場合は警告
    "operator-assignment": "warn",
    // コールバック関数をアロー関数にする
    "prefer-arrow-callback": "warn",
    // 名前付きキャプチャグループを使用する
    "prefer-named-capture-group": "warn",
    // `hasOwnProperty` の使用を許可しない
    "prefer-object-has-own": "error",
    // Spread構文を使用する
    "prefer-object-spread": "warn",
    // `Promise` の `reject` には `Error` オブジェクトを渡す
    "prefer-promise-reject-errors": "error",
    // なるべく正規表現リテラルを使用する
    "prefer-regex-literals": "warn",
    // `arguments`/`.apply()` の代わりに `...args` を使用する
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    // `parseInt` には基数を渡す
    radix: "error",
    // 正規表現のユニコードフラグを使用する
    "require-unicode-regexp": "warn",
    // シンボルに名前を付ける
    "symbol-description": "warn",

    // import/export の順序を整理
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",

    // unicornの推奨ルールから不要なものを無効化
    // ファイルの名前はコンポーネントなどで形式が変化するため無効化
    "unicorn/filename-case": "off",
    // コンポーネント内の関数など、スコープを小さくしておきたい場合があるので無効化
    "unicorn/consistent-function-scoping": "off",
    // nullも使う場合があるので無効化
    "unicorn/no-null": "off",
    // `.forEach()` のほうが簡潔に書ける場合があるので無効化
    "unicorn/no-array-for-each": "off",
    // 否定形の方が簡潔に書ける場合があるので無効化
    "unicorn/no-negated-condition": "off",
    // 直接関数を渡したほうが簡潔に書ける場合があるので無効化
    "unicorn/no-array-callback-reference": "off",
    // CommonJSを使う場合もあるため無効化
    "unicorn/prefer-module": "off",
    // `[...array].map()` は ~~ダサい~~ ので無効化
    "unicorn/prefer-spread": "off",
    // セレクタは使い分けたいので無効化
    "unicorn/prefer-query-selector": "off",
    // 略語の方が簡潔に書ける場合があるので無効化
    "unicorn/prevent-abbreviations": "off",
    // switch文のcase節を常にブロックにするのは冗長なので必要なときのみブロックにする
    "unicorn/switch-case-braces": ["error", "avoid"],

    // 安全でない正規表現を警告
    "unicorn/no-unsafe-regex": "warn",
    // なるべく repleaseAll を使用する
    "unicorn/prefer-string-replace-all": "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        // TypeScript ESLintの推奨ルールを有効化
        "plugin:@typescript-eslint/recommended",
        // 型情報が必要なルールを有効化
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        // 更に厳格なルールを有効化
        "plugin:@typescript-eslint/strict",
        // Prettierが行うフォーマット系のルールを無効化
        // 上記でいくつかのフォーマット系のルールを有効にしてるため、最後に読み込む
        "prettier",
      ],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      rules: {
        // `_`から始まる変数名以外の未使用変数を警告
        "no-unused-vars": "off",
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
    },
  ],
});
