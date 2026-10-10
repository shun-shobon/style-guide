# Repository Guidelines

## プロジェクト構成とモジュール構成

このリポジトリは、共有 ESLint / Prettier / Oxlint / Oxfmt 設定を TypeScript で公開する monorepo です。各設定は `packages/<tool>-config/` にあり、`src/factory.ts` の factory と `src/configs/` の preset で構成します。新しい設定を追加する場合は対応する `configs/` に置き、`index.ts` から再エクスポートしてください。Oxlint / Oxfmt の設定は ESLint / Prettier の設定とは独立しており、ツールの既定に必要なものだけを追加する方針です。Oxlint に追加するルールは、既定で有効なもの（`correctness` カテゴリ）と重複させないでください。

## ビルド・テスト・開発コマンド

- `pnpm build`: 各パッケージの `src/index.ts` を `dist/` にビルドします。
- `pnpm lint`: リポジトリ全体に ESLint を実行します。
- `pnpm format:check`: Prettier の整形状態を検証します。
- `pnpm typecheck`: `tsc --noEmit` で型検査を実行します。
- `pnpm typegen`: ESLint rule 定義変更時に型生成を更新します。
- `pnpm test:smoke`: 全フレームワークの設定を有効にして `smoke/fixtures` を ESLint・Oxlint で検査し、Oxfmt の設定を読み込んで、設定の読み込みエラーや非推奨ルールの使用を検出します。Oxlint の同梱ルールのテストも実行します。

作業後は `pnpm typecheck && pnpm build && pnpm lint && pnpm format:check && pnpm test:smoke` を通してください。

## コーディングスタイルと命名規則

TypeScript + ESM を前提にします。インデントはタブです。整形や lint ルールはこのリポジトリ自身の Prettier / ESLint 設定に従うため、手で整えるより `pnpm format` や `pnpm lint:fix` を優先してください。設定モジュールは小さく分割し、`disable-type-checked.ts` のような kebab-case のファイル名と `index.ts` の公開エントリを維持します。

## GitHub Actions

- `uses:` はタグで書き、SHA は `.github/workflows/actions.lock` で固定します。`uses:` を変えたら `gh-actions-lock`（mise で入る）を実行してロックファイルを更新してください。
- リリースは easy-release で行います。`release` ワークフローを手動実行して作られる準備 PR をマージすると、全パッケージが同一バージョンで npm と GitHub Releases に公開されます。changeset ファイルや CHANGELOG は作りません。

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
