import { fetcher } from '../../lib/fetcher'
import type { ProfileData } from '@/types/profile'
import { mockProfileData } from '@/mock/profile'

const API_BASE_URL = '/api'

// モックデータを提供する関数
export const getProfileData = (): ProfileData => {
  return mockProfileData
}

// API経由でプロファイルデータを取得する関数
export const fetchProfileData = async (): Promise<ProfileData> => {
  return fetcher<ProfileData>(`${API_BASE_URL}/profile`)
}

// プロファイルデータを更新する関数
export const updateProfileData = async (data: Partial<ProfileData>): Promise<ProfileData> => {
  return fetcher<ProfileData>(`${API_BASE_URL}/profile`, {
    method: 'PUT',
    body: data
  })
}

// スキルを追加する関数
export const addProfileSkill = async (skill: string): Promise<ProfileData> => {
  return fetcher<ProfileData>(`${API_BASE_URL}/profile/skills`, {
    method: 'POST',
    body: { skill }
  })
}

// スキルを削除する関数
export const removeProfileSkill = async (skill: string): Promise<ProfileData> => {
  return fetcher<ProfileData>(`${API_BASE_URL}/profile/skills/${encodeURIComponent(skill)}`, {
    method: 'DELETE'
  })
}
