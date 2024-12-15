# メッセージインボトル

**概要**

メッセージをボトルに詰めて海に流すような体験ができるWebアプリケーションです。
メッセージを送信すると、ランダムに他のユーザーのメッセージが返ってきます。

**技術スタック**

* フロントエンド: Next.js (React, TypeScript)
* バックエンド: ヘッドレスCMS (microCMS)
* インフラストラクチャ: Vercel

**使い方**

1. **ローカル開発環境のセットアップ:**
   ```bash
   cd bottle-message-app
   npm install
   ```

2. **環境変数の設定:**
.env.local ファイルを作成し、microCMSのAPIキーなどを設定します。

3. **開発サーバーの起動:**
   ```bash
   npm run dev
   ```

**API**

* メッセージ送信:
POST /api/sendMessage
リクエストボディ: { message: "あなたのメッセージ" }