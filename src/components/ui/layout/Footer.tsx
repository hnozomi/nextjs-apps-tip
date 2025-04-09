import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© {new Date().getFullYear()} プロフィールサイト</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
