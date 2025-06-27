# 🐼 あおぱんだスタンプ人気ランキング投票サイト - デプロイ方法

## 📁 必要なファイル

デプロイに必要なファイル：
```
├── index.html           # メインページ
├── style.css           # スタイルシート  
├── script.js           # 投票機能
└── images/
    ├── 商標logo.png     # あおぱんだロゴ
    ├── aopanda2.gif     # 浮遊GIF
    ├── aopanda3.gif
    ├── ...
    ├── aopanda9.gif
    └── stamps/
        ├── stamp1.png   # スタンプ画像
        ├── stamp2.png
        └── ... (stamp42.pngまで)
```

## 🚀 簡単デプロイ方法

### 1️⃣ Netlify（推奨）
最も簡単な方法です。

1. [netlify.com](https://netlify.com) にアクセス
2. 「Sites」→「Add new site」→「Deploy manually」
3. プロジェクトフォルダ全体をドラッグ&ドロップ
4. 自動的にURLが生成されます

### 2️⃣ Vercel
GitHubと連携できます。

1. [vercel.com](https://vercel.com) にアクセス
2. GitHubでサインイン
3. 「New Project」でリポジトリを選択
4. 自動デプロイ開始

### 3️⃣ GitHub Pages
GitHubリポジトリから直接デプロイ。

1. GitHubにリポジトリ作成
2. ファイルをアップロード
3. Settings → Pages → Source: Deploy from a branch
4. `https://username.github.io/repository-name` でアクセス

### 4️⃣ Firebase Hosting
Googleのサービスを使用。

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## ⚙️ 管理者機能の使い方

### 管理者モード有効化
- キーボードで `Ctrl + Shift + A` を押す
- 「管理者モードが有効になりました」と表示される
- 画面に「管理者メニュー」ボタンが表示される

### 機能
- **結果を表示**: 投票結果をプログレスバーで確認
- **投票データリセット**: 全投票データを初期化
- **閉じる**: 管理者パネルを非表示

## 📊 投票システムの特徴

- **一人二票制**: 最大2つまでスタンプを選択可能
- **結果の秘匿**: 投票者は結果を見れない
- **データ永続化**: ローカルストレージで保存
- **レスポンシブ**: スマホ・タブレット対応

## 🎨 カスタマイズ

### スタンプ画像の変更
`images/stamps/stamp1.png` ～ `stamp42.png` を差し替え

### タイトル変更
`index.html` の h1 タグを編集

### 色の変更
`style.css` のカラーコードを変更

## 🔧 トラブルシューティング

### GIFが表示されない
- ファイルパスを確認
- ファイル名が正確か確認
- ブラウザのキャッシュをクリア

### 投票が動作しない
- JavaScriptが有効か確認
- ブラウザの開発者ツールでエラーチェック

### レスポンシブデザインの問題
- ビューポートメタタグが設定されているか確認

## 📞 サポート

問題が発生した場合：
1. ブラウザの開発者ツールでエラーを確認
2. ファイル構造が正しいか確認
3. 必要に応じてコードを修正

## 🎊 完了！

デプロイが完了したら、URLを共有してあおぱんだファンに投票してもらいましょう！