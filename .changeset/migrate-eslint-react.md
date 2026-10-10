---
"@shun-shobon/eslint-config": major
---

React のルールを eslint-plugin-react / eslint-plugin-react-hooks から @eslint-react/eslint-plugin に移行

eslint-plugin-react は ESLint 10 で `settings.react.version: "detect"` 時にクラッシュするため置き換えた。ルール名は `react/` 接頭辞のまま @eslint-react のルール名に変わり、`react-hooks/*` は `react/*` に統合される。
