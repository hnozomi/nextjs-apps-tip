import { useState, useEffect } from 'react';
import type { ProfileData } from '@/types/profile/components';
import { fetchProfileData } from '@/lib/profile';

export function useProfileData() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true);
        const data = await fetchProfileData();
        setProfile(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  const refreshProfile = async () => {
    try {
      setLoading(true);
      const data = await fetchProfileData();
      setProfile(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return { profile, loading, error, refreshProfile };
}
