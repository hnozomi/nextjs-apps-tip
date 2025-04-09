# Next.js、React、TypeScriptのTipsリポジトリのフォルダ構成

## トップレベルのフォルダ構成

```
/
├── cheatsheets/             # チートシート
├── docs/                    # ドキュメント
│   ├── nextjs/              # Next.js関連のドキュメント
│   ├── react/               # React関連のドキュメント
│   └── typescript/          # TypeScript関連のドキュメント
├── examples/                # 実行可能なサンプルコード
│   ├── advanced/            # 高度な実装例
│   └── basic/               # 基本的な実装例
├── public/                  # 静的ファイル
│   ├── fonts/               # フォント
│   └── images/              # 画像
├── src/                     # メインのソースコード
│   ├── app/                 # App Router (Next.js 13+)
│   ├── components/          # コンポーネント
│   │   ├── features/        # 機能別コンポーネント
│   │   └── ui/              # 基本的なUI要素
│   │       ├── layout/      # レイアウト関連
│   │       └── [その他UIコンポーネント]
│   ├── config/              # 設定ファイル
│   ├── hooks/               # カスタムフック
│   │   ├── api/             # API関連のフック
│   │   └── common/          # 共通のフック
│   ├── lib/                 # ユーティリティ関数
│   ├── mock/                # モックデータ
│   │   └── [ドメイン]/       # ドメイン別のモックデータ
│   ├── network/             # API通信
│   │   └── [ドメイン]/       # ドメイン別のAPI実装
│   ├── styles/              # スタイル関連
│   └── types/               # TypeScript型定義
│       ├── api/             # API関連の型定義
│       ├── [ドメイン]/       # ドメイン別の型定義
│       └── ui/              # UI関連の型定義
└── tips/                    # Tipsコレクション
    ├── nextjs/              # Next.js関連Tips
    │   ├── data-fetching/   # データフェッチング関連
    │   ├── optimization/    # 最適化関連
    │   └── routing/         # ルーティング関連
    ├── react/               # React関連Tips
    │   ├── components/      # コンポーネント関連
    │   ├── hooks/           # フック関連
    │   └── patterns/        # パターン関連
    └── typescript/          # TypeScript関連Tips
        ├── configuration/   # 設定関連
        ├── types/           # 型定義関連
        └── utilities/       # ユーティリティ型関連
```

## App Routerのフォルダ構成

```
src/app/
├── layout.tsx                # ルートレイアウト
├── page.tsx                  # ホームページ
├── globals.css               # グローバルスタイル
├── favicon.ico               # ファビコン
│
├── (auth)/                   # 認証関連のルートグループ（URLには影響しない）
│   ├── login/                # /login
│   │   └── page.tsx
│   ├── register/             # /register
│   │   └── page.tsx
│   └── layout.tsx            # 認証ページ共通のレイアウト
│
├── [機能A]/                  # /[機能A]
│   ├── page.tsx              # 機能Aのメインページ
│   ├── edit/                 # /[機能A]/edit
│   │   └── page.tsx
│   └── [id]/                 # /[機能A]/[id] (動的ルート)
│       └── page.tsx
│
├── [機能B]/                  # /[機能B]
│   ├── page.tsx              # 機能Bの一覧ページ
│   ├── layout.tsx            # 機能B関連ページの共通レイアウト
│   │
│   ├── [サブカテゴリ1]/       # /[機能B]/[サブカテゴリ1]
│   │   ├── page.tsx          # サブカテゴリ1の一覧
│   │   └── [slug]/           # /[機能B]/[サブカテゴリ1]/[slug]
│   │       └── page.tsx      # 個別ページ
│   │
│   ├── [サブカテゴリ2]/       # /[機能B]/[サブカテゴリ2]
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   └── [サブカテゴリ3]/       # /[機能B]/[サブカテゴリ3]
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
│
├── [機能C]/                  # /[機能C]
│   ├── page.tsx              # 機能Cの一覧ページ
│   └── [category]/           # /[機能C]/[category]
│       ├── page.tsx          # カテゴリ別の一覧
│       └── [id]/             # /[機能C]/[category]/[id]
│           └── page.tsx      # 個別ページ
│
├── api/                      # APIルート
│   ├── [エンドポイント1]/     # /api/[エンドポイント1]
│   │   └── route.ts          # APIハンドラ
│   └── [エンドポイント2]/     # /api/[エンドポイント2]
│       └── route.ts          # APIハンドラ
│
└── _components/              # アプリ全体で使用される内部コンポーネント（ルーティングには影響しない）
    ├── ThemeProvider.tsx
    └── SearchDialog.tsx
```

## コンポーネントのフォルダ構成

```
src/components/
├── features/                 # 機能別コンポーネント
│   └── [ドメイン]/            # ドメイン固有の機能
│       ├── components/       # ドメイン関連のコンポーネント
│       │   ├── [コンポーネントA].tsx
│       │   ├── [コンポーネントB].tsx
│       │   ├── [コンポーネントC].tsx
│       │   ├── [コンポーネントD].tsx
│       │   ├── [コンポーネントE].tsx
│       │   ├── [ページコンポーネント].tsx
│       │   └── index.ts      # エクスポート用
│       ├── hooks/            # ドメイン関連のフック
│       │   ├── [フックA].ts
│       │   ├── [フックB].ts
│       │   └── index.ts      # エクスポート用
│       └── index.ts          # エクスポート用
└── ui/                       # 基本的なUI要素
    ├── layout/               # レイアウト関連
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── Layout.tsx
    │   └── index.ts          # エクスポート用
    ├── [UIコンポーネントA].tsx
    ├── [UIコンポーネントB].tsx
    └── index.ts              # エクスポート用
```

## データフェッチングとAPIの構成

```
src/
├── hooks/
│   ├── api/                  # API関連のフック
│   │   ├── useApi.ts         # SWRを使用した汎用APIフック
│   │   └── index.ts
│   └── common/               # 共通のフック
│       ├── [フックA].ts
│       ├── [フックB].ts
│       └── index.ts
├── lib/                      # ユーティリティ関数
│   ├── fetcher.ts            # 汎用フェッチャー関数
│   └── index.ts
├── mock/                     # モックデータ
│   ├── [ドメイン]/            # ドメイン関連のモックデータ
│   │   ├── data.ts
│   │   └── index.ts
│   └── index.ts
├── network/                  # API通信
│   ├── [ドメイン]/            # ドメイン関連のAPI
│   │   ├── [ドメイン].ts      # ドメイン固有のAPI関数
│   │   └── index.ts
│   └── index.ts
└── types/                    # TypeScript型定義
    ├── api/                  # API関連の型定義
    │   ├── fetcher.ts        # フェッチャー関連の型
    │   └── index.ts
    ├── [ドメイン]/            # ドメイン関連の型定義
    │   ├── base.ts           # 基本的な型定義
    │   ├── components.ts     # コンポーネント用の型定義
    │   └── index.ts
    ├── ui/                   # UI関連の型定義
    │   ├── [UIコンポーネントA].ts
    │   ├── [UIコンポーネントB].ts
    │   └── index.ts
    └── index.ts
```

## 使用例

```tsx
import { Layout } from '@/components/ui/layout';
import { ページコンポーネント } from '@/components/features/[ドメイン]/components';
import { getドメインData } from '@/network/[ドメイン]';

export default function Home() {
  const ドメインData = getドメインData();
  
  return (
    <Layout>
      <ページコンポーネント data={ドメインData} />
    </Layout>
  );
}
```

## コンポーネント分割の原則

1. **単一責任の原則**: 各コンポーネントは1つの責任を持つべきです
2. **再利用性**: 汎用的なコンポーネントは再利用できるように設計します
3. **関心の分離**: UIとロジックを適切に分離します
4. **型安全性**: TypeScriptの型を活用して、コンポーネント間のデータの受け渡しを安全に行います
5. **階層構造**: 小さなコンポーネントを組み合わせて大きなコンポーネントを構築します

## API・データフェッチングの原則

1. **責務の分離**: 
   - `network/`: API通信の実装
   - `hooks/api/`: データフェッチングのフック
   - `mock/`: モックデータ
   - `types/api/`: API関連の型定義

2. **型安全性**: すべてのAPI通信は型安全に行います

3. **再利用性**: 汎用的なフェッチャーとフックを作成し、ドメイン固有のAPIを実装します

4. **エラーハンドリング**: エラー状態を適切に処理し、ユーザーに通知します

5. **キャッシュ管理**: SWRを使用してデータをキャッシュし、パフォーマンスを向上させます

このフォルダ構成は、Next.jsとReactのプロジェクトのベストプラクティスに従っており、保守性と拡張性に優れています。
