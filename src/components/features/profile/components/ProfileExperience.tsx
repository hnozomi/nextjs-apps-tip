import React from 'react';
import { Card } from '@/components/ui';
import type { ProfileExperienceProps } from '@/types/profile/components';

export const ProfileExperience: React.FC<ProfileExperienceProps> = ({ experience }) => {
  return (
    <Card title="職歴">
      <div className="space-y-4">
        {experience.map((exp, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
            <h3 className="font-semibold">{exp.position}</h3>
            <p className="text-gray-700">{exp.company} | {exp.period}</p>
            <p className="mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
