
import React from 'react';
import { GuideItem } from '../types';
import { Card } from './Card';

interface SectionPageProps {
  title: string;
  items: GuideItem[];
}

export const SectionPage: React.FC<SectionPageProps> = ({ title, items }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-2 text-[#0033A0]">{title}</h2>
      <div className="w-24 h-1 bg-[#0055ff] mx-auto mb-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Card key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};
