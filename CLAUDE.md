# CLAUDE.md

このファイルはClaude Codeがこのリポジトリで作業する際のガイドラインを定義します。

## プロジェクト概要

タスクボードアプリケーション。

## デプロイ先

https://ytakeuchi-afk.github.io/task-board/

- ホスティング: GitHub Pages
- デプロイ方法: `main` ブランチへのプッシュで GitHub Actions が自動ビルド・デプロイ
- ワークフロー: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| UIライブラリ | React 18 |
| ビルドツール | Vite 6 |
| スタイリング | CSS Modules |
| 状態管理 | React useState / useEffect（ライブラリなし） |
| 永続化 | localStorage |
| パッケージマネージャー | npm |

## コンポーネント命名規約

- **ファイル名**: PascalCase（例: `TaskItem.jsx`, `App.jsx`）
- **CSSモジュール**: コンポーネントと同名の `.module.css`（例: `App.module.css`）
- **コンポーネント関数**: PascalCase の名前付き関数でエクスポート（`export default function App()`）
- **フック・ハンドラ**: camelCase（例: `handleKeyDown`, `addTask`, `toggleTask`）
- **定数**: UPPER_SNAKE_CASE（例: `STORAGE_KEY`）

## Git 運用ルール

**コードを変更するたびに、必ずGitHubにプッシュすること。**

具体的な手順:

1. 変更をステージング
   ```
   git add <変更ファイル>
   ```

2. コミット（変更内容を簡潔に記述）
   ```
   git commit -m "変更内容の説明"
   ```

3. GitHubへプッシュ
   ```
   git push origin <ブランチ名>
   ```

### コミットメッセージの規則

- 日本語または英語で記述
- 変更の「何を」「なぜ」を明確に
- フォーマット例:
  - `feat: タスク追加機能を実装`
  - `fix: 期限切れタスクの表示バグを修正`
  - `refactor: タスク一覧コンポーネントをリファクタリング`

### ブランチ運用

- `main` / `master`: 本番ブランチ（直接プッシュ可）
- 大きな機能追加はフィーチャーブランチを切ること

## 一般的な注意事項

- セキュリティ上の懸念がある変更は事前にユーザーへ確認すること
- 不要なファイル（`.env`, 認証情報など）はコミットしないこと
- 破壊的な操作（`git reset --hard`, `git push --force` など）は必ずユーザーへ確認してから実行すること
