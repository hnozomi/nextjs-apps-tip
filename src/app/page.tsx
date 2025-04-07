import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Next.js、React、TypeScriptのTipsとチートシート</h1>
        <p className="text-lg text-gray-700">
          このサイトでは、Next.js、React、TypeScriptの開発に役立つTipsやチートシートを提供しています。
          最新のベストプラクティスやコード例を通じて、効率的な開発をサポートします。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">カテゴリ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Next.js</h3>
            <p className="mb-4 text-gray-600">App Router、データフェッチング、最適化など</p>
            <Link href="/tips/nextjs" className="text-blue-600 hover:underline">
              詳細を見る →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="mb-4 text-gray-600">フック、コンポーネント、パターンなど</p>
            <Link href="/tips/react" className="text-blue-600 hover:underline">
              詳細を見る →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
            <p className="mb-4 text-gray-600">型定義、ユーティリティ型、設定など</p>
            <Link href="/tips/typescript" className="text-blue-600 hover:underline">
              詳細を見る →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">最近の更新</h2>
        <ul className="space-y-4">
          <li className="border-b pb-2">
            <span className="text-gray-500 text-sm">2025-04-06</span>
            <h3 className="font-medium">Next.jsのApp Routerでのレイアウト構成</h3>
          </li>
          <li className="border-b pb-2">
            <span className="text-gray-500 text-sm">2025-04-05</span>
            <h3 className="font-medium">TypeScriptの高度な型テクニック</h3>
          </li>
          <li className="border-b pb-2">
            <span className="text-gray-500 text-sm">2025-04-04</span>
            <h3 className="font-medium">Reactのパフォーマンス最適化</h3>
          </li>
        </ul>
      </section>
    </div>
  );
}
