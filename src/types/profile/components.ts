import { ProfileContact, WorkExperience, EducationHistory } from './base';

export type ProfileData = {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  contact: ProfileContact;
  experience: WorkExperience[];
  education: EducationHistory[];
};

export type ProfileHeaderProps = {
  profile: Pick<ProfileData, 'name' | 'title' | 'bio'>;
};

export type ProfileSkillsProps = {
  skills: ProfileData['skills'];
};

export type ProfileExperienceProps = {
  experience: ProfileData['experience'];
};

export type ProfileEducationProps = {
  education: ProfileData['education'];
};

export type ProfileContactProps = {
  contact: ProfileData['contact'];
};

export type ProfilePageProps = Record<string, never>;

export type ProfileUpdateParams = Partial<ProfileData>;

export type ProfileAction = {
  toggleFavoriteSkill: (skill: string) => void;
  isSkillFavorited: (skill: string) => boolean;
  updateProfile: (params: ProfileUpdateParams) => void;
  favorites: string[];
};
