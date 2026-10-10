# @shun-shobon/eslint-config

## 3.0.0

### Major Changes

- beda65f: fix(deps): update dependency eslint-plugin-simple-import-sort to v14

### Minor Changes

- f2c90d0: fix(deps): update dependency @next/eslint-plugin-next to v16.4.0
- 69e3ba6: fix(deps): update dependency eslint-plugin-regexp to v3.3.1
- bd21bde: fix(deps): update dependency globals to v17.13.0
- 99bf479: fix(deps): update typescript-eslint monorepo to v8.71.1

### Patch Changes

- 2cde813: fix(deps): update dependency @eslint-react/eslint-plugin to v5.24.8
- 83fd550: fix(deps): update dependency eslint-plugin-qwik to v1.20.2
- 728ea68: fix(deps): update dependency eslint-plugin-storybook to v10.6.1

## 2.0.0

### Major Changes

- 0b83837: ESLint 9 のサポートを終了し、eslint-plugin-astro / astro-eslint-parser を v3 に更新

  - peerDependencies の eslint を `^10.4.0` に変更
  - eslint-plugin-astro v3 は eslint-plugin-jsx-a11y を利用者のプロジェクトからしか読み込めないため、`astro/jsx-a11y/*` ルールを無効化

- 3a733a7: React のルールを eslint-plugin-react / eslint-plugin-react-hooks から @eslint-react/eslint-plugin に移行

  eslint-plugin-react は ESLint 10 で `settings.react.version: "detect"` 時にクラッシュするため置き換えた。ルール名は `react/` 接頭辞のまま @eslint-react のルール名に変わり、`react-hooks/*` は `react/*` に統合される。

- f35f4e1: fix(deps): update dependency eslint-plugin-n to v18
- 029d9fe: eslint-plugin-unicorn を v77 に更新

  recommended に追加された多数のルールが有効になる。以下は無効化した。

  - `unicorn/no-asterisk-prefix-in-documentation-comments`: prettier-plugin-jsdoc の出力と競合する
  - `unicorn/no-leading-empty-lines`: Prettier で整形される
  - `unicorn/no-top-level-side-effects`: `export default defineConfig()` のような設定ファイルを検出してしまう
  - `unicorn/operator-assignment` / `unicorn/require-array-sort-compare`: 同等のルールを有効化済み

  改名された `unicorn/no-array-for-each` → `unicorn/no-for-each`、`unicorn/prevent-abbreviations` → `unicorn/name-replacements` は従来どおり無効。

### Minor Changes

- d5007e5: fix(deps): update dependency eslint-plugin-regexp to v3.1.0
- 2cbe920: fix(deps): update typescript-eslint monorepo to v8.57.0
- 0ec90f4: fix(deps): update dependency @next/eslint-plugin-next to v16.2.0
- 81bdb25: fix(deps): update dependency eslint-plugin-storybook to v10.3.0
- b38eb67: fix(deps): update dependency astro-eslint-parser to v1.4.0
- 576a353: fix(deps): update dependency eslint-config-flat-gitignore to v2.3.0
- 5b3ea4c: fix(deps): update typescript-eslint monorepo to v8.58.0
- 8c57a16: fix(deps): update dependency @eslint/core to v1.2.0
- 0e600c9: fix(deps): update dependency eslint-plugin-astro to v1.7.0
- a0c23c3: fix(deps): update dependency globals to v17.5.0
- 3e4d4f4: fix(deps): update dependency eslint-plugin-react-hooks to v7.1.1
- 8da11b4: fix(deps): update typescript-eslint monorepo to v8.59.0
- 3e7d59f: fix(deps): update dependency globals to v17.6.0
- 06cbe7c: fix(deps): update dependency eslint-plugin-storybook to v10.4.0
- cebabe3: fix(deps): update dependency local-pkg to v1.2.0
- 14ad347: fix(deps): update dependency eslint-plugin-qwik to v1.20.0
- a40f5e6: fix(deps): update typescript-eslint monorepo to v8.60.0
- a19b2ba: fix(deps): update typescript-eslint monorepo to v8.61.0
- 9c91e7f: fix(deps): update dependency eslint-plugin-import-x to v4.17.0
- 4b188c9: fix(deps): update dependency globals to v17.7.0
- 50e0e9a: fix(deps): update typescript-eslint monorepo to v8.62.0
- 96548aa: fix(deps): update typescript-eslint monorepo to v8.63.0
- 8911bb6: fix(deps): update dependency eslint-plugin-storybook to v10.5.0
- e53fb22: fix(deps): update typescript-eslint monorepo to v8.65.0
- 17ff16c: fix(deps): update dependency @next/eslint-plugin-next to v16.3.4
- f0ba82a: fix(deps): update dependency eslint-config-flat-gitignore to v2.4.0
- cd4cd06: fix(deps): update dependency eslint-plugin-regexp to v3.2.0
- cba62bf: fix(deps): update dependency eslint-plugin-storybook to v10.6.0
- 9596a88: fix(deps): update dependency globals to v17.12.0
- 8177594: fix(deps): update typescript-eslint monorepo to v8.69.0

### Patch Changes

- 3e39a71: fix(deps): update dependency eslint-plugin-storybook to v10.2.17
- f009bb0: fix(deps): update dependency eslint-plugin-import-x to v4.16.2
- f53d11d: fix(deps): update dependency eslint-plugin-qwik to v1.19.2
- 6056bda: fix(deps): update dependency eslint-plugin-storybook to v10.2.19
- c4577fb: fix(deps): update dependency @next/eslint-plugin-next to v16.1.7
- 2e5609f: fix(deps): update typescript-eslint monorepo to v8.57.1
- 7319f13: fix(deps): update dependency eslint-plugin-storybook to v10.3.1
- c284124: fix(deps): update dependency @next/eslint-plugin-next to v16.2.1
- b9d8e59: fix(deps): update dependency eslint-plugin-storybook to v10.3.3
- a46ae32: fix(deps): update typescript-eslint monorepo to v8.57.2
- ad5d89d: fix(deps): update dependency @next/eslint-plugin-next to v16.2.2
- ced6635: fix(deps): update dependency eslint-plugin-storybook to v10.3.4
- 5197ff6: fix(deps): update dependency @eslint/core to v1.2.1
- 450ebdd: fix(deps): update dependency eslint-plugin-storybook to v10.3.5
- 5b35399: fix(deps): update typescript-eslint monorepo to v8.58.1
- 007f3f2: fix(deps): update dependency @next/eslint-plugin-next to v16.2.3
- 36d1233: fix(deps): update typescript-eslint monorepo to v8.58.2
- a44d517: fix(deps): update dependency @next/eslint-plugin-next to v16.2.4
- 9711690: fix(deps): update typescript-eslint monorepo to v8.59.1
- 7749291: fix(deps): update dependency eslint-plugin-storybook to v10.3.6
- 370c64c: fix(deps): update typescript-eslint monorepo to v8.59.2
- 93d5cb0: fix(deps): update dependency @next/eslint-plugin-next to v16.2.5
- 7d37c82: fix(deps): update dependency @next/eslint-plugin-next to v16.2.6
- 2a2a6ce: fix(deps): update typescript-eslint monorepo to v8.59.3
- 0df9aae: fix(deps): update typescript-eslint monorepo to v8.59.4
- 4c8b0e7: fix(deps): update dependency local-pkg to v1.2.1
- ad309ac: fix(deps): update dependency eslint-plugin-storybook to v10.4.1
- f47802a: fix(deps): update dependency eslint-import-resolver-typescript to v4.4.5
- 82dcd4a: fix(deps): update nextjs monorepo to v16.2.7
- f3ebd90: fix(deps): update storybook monorepo to v10.4.2
- 8a9b9e3: fix(deps): update typescript-eslint monorepo to v8.60.1
- f9437da: fix(deps): update nextjs monorepo to v16.2.9
- 1c01699: fix(deps): update storybook monorepo to v10.4.3
- 4a43c6e: fix(deps): update storybook monorepo to v10.4.4
- 9be7d5d: fix(deps): update storybook monorepo to v10.4.5
- cec4633: fix(deps): update typescript-eslint monorepo to v8.61.1
- 9601a3f: fix(deps): update storybook monorepo to v10.4.6
- 0380c70: fix(deps): update dependency @next/eslint-plugin-next to v16.2.10
- 79a3b79: fix(deps): update dependency eslint-plugin-import-x to v4.17.1
- 48158b8: fix(deps): update dependency eslint-plugin-regexp to v3.1.1
- 7578ed4: fix(deps): update dependency @next/eslint-plugin-next to v16.2.11
- 822eba8: fix(deps): update dependency eslint-plugin-storybook to v10.5.3

## 1.0.1

### Patch Changes

- 6868642: fix(deps): update dependency eslint-plugin-storybook to v10.2.15
- f6a995e: fix(deps): update dependency eslint-plugin-storybook to v10.2.16
- 1526d5e: fix(deps): update dependency @eslint/core to v1.1.1

## 1.0.0

### Major Changes

- fb34a55: feat: split the published package into dedicated ESLint and Prettier configs
