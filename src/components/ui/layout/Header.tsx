import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                プロフィールサイト
              </Link>
            </div>
            <nav className="ml-6 flex items-center space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium">
                ホーム
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium">
                自己紹介
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
