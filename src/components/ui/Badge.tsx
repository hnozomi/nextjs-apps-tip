import React from 'react';
import type { BadgeProps, BadgeColor } from '@/types/ui/badge';

export const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
  const colorClasses: Record<BadgeColor, string> = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${colorClasses[color]}`}>
      {text}
    </span>
  );
};
