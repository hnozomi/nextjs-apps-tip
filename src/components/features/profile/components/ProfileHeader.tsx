import React from 'react';
import type { ProfileHeaderProps } from '@/types/profile/components';

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">{profile.name}</h1>
      <p className="text-xl text-gray-600">{profile.title}</p>
      <p className="mt-2">{profile.bio}</p>
    </div>
  );
};
