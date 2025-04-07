import React from 'react';
import { Card, Badge } from '@/components/ui';
import type { ProfileSkillsProps } from '@/types/profile/components';

export const ProfileSkills: React.FC<ProfileSkillsProps> = ({ skills }) => {
  return (
    <Card title="スキル">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} text={skill} />
        ))}
      </div>
    </Card>
  );
};
