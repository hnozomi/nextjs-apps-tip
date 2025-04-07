import React from 'react';
import { Card } from '@/components/ui/Card';
import type { ProfileContactProps } from '@/types/profile/components';

export const ProfileContact: React.FC<ProfileContactProps> = ({ contact }: ProfileContactProps) => {
  return (
    <Card title="連絡先">
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Email: </span>
          <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
            {contact.email}
          </a>
        </p>
        {contact.github && (
          <p>
            <span className="font-semibold">GitHub: </span>
            <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {contact.github}
            </a>
          </p>
        )}
        {contact.twitter && (
          <p>
            <span className="font-semibold">Twitter: </span>
            <a href={`https://twitter.com/${contact.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              @{contact.twitter}
            </a>
          </p>
        )}
        {contact.linkedin && (
          <p>
            <span className="font-semibold">LinkedIn: </span>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              プロフィール
            </a>
          </p>
        )}
      </div>
    </Card>
  );
};
