---
"@shun-shobon/eslint-config": major
---

ESLint 9 のサポートを終了し、eslint-plugin-astro / astro-eslint-parser を v3 に更新

- peerDependencies の eslint を `^10.4.0` に変更
- eslint-plugin-astro v3 は eslint-plugin-jsx-a11y を利用者のプロジェクトからしか読み込めないため、`astro/jsx-a11y/*` ルールを無効化
