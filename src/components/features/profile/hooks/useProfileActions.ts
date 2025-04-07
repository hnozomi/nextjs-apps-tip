import { useState } from 'react';
import type { ProfileData, ProfileUpdateParams, ProfileAction } from '@/types/profile/components';
import { useLocalStorage } from '@/hooks/common/useLocalStorage';

export function useProfileActions(initialProfile: ProfileData | null): ProfileAction & { profile: ProfileData | null } {
  const [profile, setProfile] = useState<ProfileData | null>(initialProfile);
  const [favorites, setFavorites] = useLocalStorage<string[]>('profile-favorites', []);

  const toggleFavoriteSkill = (skill: string): void => {
    if (favorites.includes(skill)) {
      setFavorites(favorites.filter(item => item !== skill));
    } else {
      setFavorites([...favorites, skill]);
    }
  };

  const isSkillFavorited = (skill: string): boolean => {
    return favorites.includes(skill);
  };

  const updateProfile = (updatedProfile: ProfileUpdateParams): void => {
    if (!profile) return;
    
    setProfile({
      ...profile,
      ...updatedProfile
    });
  };

  return {
    profile,
    favorites,
    toggleFavoriteSkill,
    isSkillFavorited,
    updateProfile
  };
}
