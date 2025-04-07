import React from 'react';
import { Card } from '@/components/ui';
import type { ProfileEducationProps } from '@/types/profile/components';

export const ProfileEducation: React.FC<ProfileEducationProps> = ({ education }: ProfileEducationProps) => {
  return (
    <Card title="学歴">
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-semibold">{edu.institution}</h3>
            <p className="text-gray-700">{edu.degree} | {edu.period}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
