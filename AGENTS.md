# Repository Guidelines

## プロジェクト構成とモジュール構成

このパッケージは、共有 ESLint / Prettier 設定を TypeScript で公開しています。実装は `src/` 配下にあり、`src/eslint/` には ESLint の factory・rules・各種 preset、`src/prettier/` には Prettier の preset と補助処理を配置します。新しい設定を追加する場合は対応する `configs/` に置き、各ディレクトリの `index.ts` から再エクスポートしてください。

## ビルド・テスト・開発コマンド

- `pnpm build`: `src/eslint/index.ts` と `src/prettier/index.ts` を `dist/` にビルドします。
- `pnpm lint`: リポジトリ全体に ESLint を実行します。
- `pnpm format:check`: Prettier の整形状態を検証します。
- `pnpm typecheck`: `tsc --noEmit` で型検査を実行します。
- `pnpm typegen`: ESLint rule 定義変更時に型生成を更新します。

作業後は `pnpm typecheck && pnpm build && pnpm lint && pnpm format:check` を通してください。

## コーディングスタイルと命名規則

TypeScript + ESM を前提にします。インデントはタブです。整形や lint ルールはこのリポジトリ自身の Prettier / ESLint 設定に従うため、手で整えるより `pnpm format` や `pnpm lint:fix` を優先してください。設定モジュールは小さく分割し、`disable-type-checked.ts` のような kebab-case のファイル名と `index.ts` の公開エントリを維持します。

## コミット

Conventional Commits 形式に従うこと。

- 形式: `<type>(<scope>): <summary>`
- コミットメッセージは件名・本文ともに日本語で記載すること（`type` と `scope` は英語のままで可）。
- `scope` は `eslint` や `prettier` などのパッケージ名を指定すること。どちらにも属さない場合は不要。
- 本文には具体的な変更内容を記載すること。
- 本文を入れるときは、`-m` 引数内に `\n` を書かないこと。`git commit -m "<件名>" -m "<本文 1行目>" -m "<本文 2行目> ..."` のように `-m` を分けるか、メッセージファイルを使うこと。
- 1コミット1目的を徹底すること。
- 適切な粒度でコミットを行うこと。
- GPG署名を無効化しないこと。署名関連でコミットエラーになった場合はユーザーに報告すること。
