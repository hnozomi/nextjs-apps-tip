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
│   │   ├── layout/          # レイアウト関連
│   │   └── ui/              # 基本的なUI要素
│   ├── config/              # 設定ファイル
│   ├── hooks/               # カスタムフック
│   ├── lib/                 # ユーティリティ関数
│   ├── styles/              # スタイル関連
│   └── types/               # TypeScript型定義
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
├── profile/                  # /profile
│   ├── page.tsx              # プロフィールページ
│   ├── edit/                 # /profile/edit
│   │   └── page.tsx
│   └── [username]/           # /profile/[username] (動的ルート)
│       └── page.tsx
│
├── tips/                     # /tips
│   ├── page.tsx              # Tipsの一覧ページ
│   ├── layout.tsx            # Tips関連ページの共通レイアウト
│   │
│   ├── nextjs/               # /tips/nextjs
│   │   ├── page.tsx          # Next.js Tipsの一覧
│   │   └── [slug]/           # /tips/nextjs/[slug]
│   │       └── page.tsx      # 個別のTipsページ
│   │
│   ├── react/                # /tips/react
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   └── typescript/           # /tips/typescript
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
│
├── examples/                 # /examples
│   ├── page.tsx              # 例の一覧ページ
│   └── [category]/           # /examples/[category]
│       ├── page.tsx          # カテゴリ別の例一覧
│       └── [id]/             # /examples/[category]/[id]
│           └── page.tsx      # 個別の例ページ
│
├── api/                      # APIルート
│   ├── tips/                 # /api/tips
│   │   └── route.ts          # TipsのAPIハンドラ
│   └── profile/              # /api/profile
│       └── route.ts          # プロフィールのAPIハンドラ
│
└── _components/              # アプリ全体で使用される内部コンポーネント（ルーティングには影響しない）
    ├── ThemeProvider.tsx
    └── SearchDialog.tsx
```

## App Routerの主要な特徴

1. **ルートグループ [()](cci:1://file:///Users/hamakatanozomi/nextjs-apps-tip/src/components/features/profile/components/ProfilePage.tsx:15:0-54:2)**
   - 括弧で囲まれたフォルダはURLパスに影響しない
   - 関連するルートをグループ化するのに便利

2. **レイアウトの階層化**
   - 各レベルで `layout.tsx` を配置することでネストされたレイアウトを実現
   - 共通UIを効率的に共有できる

3. **動的ルート `[]`**
   - 角括弧で囲まれたフォルダは動的パラメータを表す
   - 例: `[username]` → `/profile/john`, `/profile/jane` など

4. **APIルート**
   - `app/api` ディレクトリ内の `route.ts` ファイルでAPIエンドポイントを定義
   - HTTP メソッド（GET, POST, PUT, DELETE）ごとにハンドラを実装

5. **プライベートフォルダ `_`**
   - アンダースコアで始まるフォルダはルーティングから除外される
   - 内部コンポーネントやユーティリティを整理するのに役立つ

## 自己紹介ページの詳細なファイル構成（更新版）

```
src/
├── hooks/                      # 共通・汎用的なフック
│   └── common/                 # 複数機能で共有される汎用フック
│       ├── useWindowSize.ts    # ウィンドウサイズを監視
│       └── useLocalStorage.ts  # ローカルストレージ操作
│
└── components/
    └── features/
        └── profile/            # プロフィール機能
            ├── components/     # UIコンポーネント
            │   ├── ProfileHeader.tsx   # ヘッダー部分
            │   ├── ProfileSkills.tsx   # スキル表示
            │   ├── ProfileExperience.tsx # 職歴表示
            │   ├── ProfileEducation.tsx  # 学歴表示
            │   ├── ProfileContact.tsx    # 連絡先表示
            │   └── ProfilePage.tsx       # 全体をまとめるコンポーネント
            │
            ├── hooks/          # プロフィール機能固有のフック
            │   ├── useProfileData.ts      # プロフィールデータ取得
            │   └── useProfileActions.ts   # プロフィール操作
            │
            └── index.tsx       # エクスポート用
```

## ファイル分割の考え方

### 型定義 (`/src/types/`)

型定義ファイルでは、アプリケーション全体で使用するTypeScriptの型を定義します。

例: `/src/types/profile.ts`
```typescript
export interface Profile {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  contact: {
    email: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
  experience: {
    company: string;
    position: string;
    period: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
}
```

### データ取得関数 (`/src/lib/`)

データ取得やその他のユーティリティ関数を格納します。

例: `/src/lib/profile.ts`
```typescript
import { Profile } from '../types/profile';

export function getProfileData(): Profile {
  // プロフィールデータを返す
}

export async function fetchProfileData(): Promise<Profile> {
  // 非同期でプロフィールデータを取得する
}
```

### UIコンポーネント (`/src/components/ui/`)

再利用可能な基本的なUIコンポーネントを格納します。

例: `/src/components/ui/Card.tsx`
```tsx
import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white shadow rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  );
};
```

### 機能別コンポーネント (`/src/components/features/`)

特定の機能に関連するコンポーネントを格納します。

例: `/src/components/features/profile/ProfileExperience.tsx`
```tsx
import React from 'react';
import type { ProfileExperienceProps } from '@/types/profile/components';
import { Card } from '@/components/ui/Card';

export const ProfileExperience: React.FC<ProfileExperienceProps> = ({ experience }) => {
  return (
    <Card title="職歴">
      <div className="space-y-4">
        {experience.map((exp, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
            <h3 className="font-semibold">{exp.position}</h3>
            <p className="text-gray-700">{exp.company} | {exp.period}</p>
            <p className="mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
```

### レイアウトコンポーネント (`/src/components/layout/`)

アプリケーション全体のレイアウトに関連するコンポーネントを格納します。

例: `/src/components/layout/Layout.tsx`
```tsx
import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
```

### ページコンポーネント (`/src/app/`)

App Routerを使用したページコンポーネントを格納します。

例: `/src/app/page.tsx`
```tsx
import { Layout } from '@/components/layout/Layout';
import { ProfilePage } from '@/components/features/profile/ProfilePage';
import { getProfileData } from '@/lib/profile';

export default function Home() {
  const profileData = getProfileData();
  
  return (
    <Layout>
      <ProfilePage profile={profileData} />
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

このフォルダ構成は、Next.jsとReactのプロジェクトのベストプラクティスに従っており、保守性と拡張性に優れています。
