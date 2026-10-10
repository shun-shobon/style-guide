---
"@shun-shobon/eslint-config": major
---

eslint-plugin-unicorn を v77 に更新

recommended に追加された多数のルールが有効になる。以下は無効化した。

- `unicorn/no-asterisk-prefix-in-documentation-comments`: prettier-plugin-jsdoc の出力と競合する
- `unicorn/no-leading-empty-lines`: Prettier で整形される
- `unicorn/no-top-level-side-effects`: `export default defineConfig()` のような設定ファイルを検出してしまう
- `unicorn/operator-assignment` / `unicorn/require-array-sort-compare`: 同等のルールを有効化済み

改名された `unicorn/no-array-for-each` → `unicorn/no-for-each`、`unicorn/prevent-abbreviations` → `unicorn/name-replacements` は従来どおり無効。
