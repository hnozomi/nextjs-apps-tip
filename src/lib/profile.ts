import type { ProfileData } from '@/types/profile/components';

export function getProfileData(): ProfileData {
  return {
    name: '山田 太郎',
    title: 'フロントエンドエンジニア',
    bio: 'Next.js、React、TypeScriptを専門とするフロントエンドエンジニアです。ユーザー体験を向上させるモダンなウェブアプリケーションの開発に情熱を持っています。',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    contact: {
      email: 'example@example.com',
      github: 'github.com/example',
      twitter: 'twitter.com/example',
    },
    experience: [
      {
        company: '株式会社テック',
        position: 'シニアフロントエンドエンジニア',
        period: '2020年 - 現在',
        description: 'Next.jsとTypeScriptを使用した大規模Webアプリケーションの開発。パフォーマンス最適化とコンポーネント設計を担当。',
      },
      {
        company: '株式会社ウェブ',
        position: 'フロントエンドエンジニア',
        period: '2018年 - 2020年',
        description: 'Reactを使用したSPAの開発。UI/UXの改善とコンポーネントライブラリの構築。',
      },
    ],
    education: [
      {
        institution: '工科大学',
        degree: '情報工学学士',
        period: '2014年 - 2018年',
      },
    ],
  };
}

export async function fetchProfileData(): Promise<ProfileData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getProfileData());
    }, 500);
  });
}
