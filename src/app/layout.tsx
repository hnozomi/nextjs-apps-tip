import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js, React, TypeScript Tips',
  description: 'Next.js、React、TypeScriptのTipsとチートシート',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <h1 className="text-2xl font-bold text-gray-900">Next.js, React, TypeScript Tips</h1>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 py-6">
            {children}
          </main>
          <footer className="bg-gray-100 mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <p className="text-gray-500"> {new Date().getFullYear()} Next.js, React, TypeScript Tips</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
