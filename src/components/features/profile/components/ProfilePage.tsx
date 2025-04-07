import React from 'react';
import {
  ProfileHeader,
  ProfileSkills,
  ProfileExperience,
  ProfileEducation,
  ProfileContact
} from '@/components/features/profile/components';
import { useWindowSize } from '@/hooks/common/useWindowSize';
import { useProfileData, useProfileActions } from '@/components/features/profile/hooks';
import type { ProfileData, ProfilePageProps } from '@/types/profile/components';

export const ProfilePage: React.FC<ProfilePageProps> = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  
  const { profile, loading, error, refreshProfile } = useProfileData();
  useProfileActions(profile);
  
  if (loading) return <div className="p-4 text-center">読み込み中...</div>;
  if (error) return <div className="p-4 text-center text-red-500">エラー: {error.message}</div>;
  if (!profile) return <div className="p-4 text-center">プロフィールデータがありません</div>;

  const validateProfile = (data: ProfileData): ProfileData => data;
  const validatedProfile = validateProfile(profile as ProfileData);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <ProfileHeader profile={validatedProfile} />
      
      <div className={isMobile ? "space-y-6" : "grid grid-cols-3 gap-6"}>
        <div className={isMobile ? "" : "col-span-2 space-y-6"}>
          <ProfileExperience experience={validatedProfile.experience} />
          <ProfileEducation education={validatedProfile.education} />
        </div>
        
        <div className="space-y-6">
          <ProfileSkills skills={validatedProfile.skills} />
          <ProfileContact contact={validatedProfile.contact} />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button 
          onClick={refreshProfile}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          プロフィールを更新
        </button>
      </div>
    </div>
  );
};
