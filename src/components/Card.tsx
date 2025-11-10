
import React from 'react';
import { GuideItem } from '../types';

interface CardProps {
  item: GuideItem;
}

const DetailItem: React.FC<{ label: string; value: string | string[] }> = ({ label, value }) => (
  <div className="flex flex-col text-sm">
    <dt className="font-semibold text-gray-500">{label}</dt>
    {Array.isArray(value) ? (
      <dd className="text-gray-700 mt-1">
        <ul className="list-disc list-inside">
          {value.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
      </dd>
    ) : (
      <dd className="text-gray-700">{value}</dd>
    )}
  </div>
);

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform hover:shadow-2xl transition-shadow duration-300">
      {item.image && (
        <img
          className="w-full h-48 object-cover"
          src={item.image}
          alt={item.name}
          loading="lazy"
        />
      )}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-[#0033A0] mb-2">{item.name}</h3>
        {item.description && <p className="text-gray-600 mb-4 text-sm flex-grow">{item.description}</p>}
        
        {Object.keys(item.details).length > 0 && (
          <dl className="space-y-3 border-t pt-4 mt-auto">
            {Object.entries(item.details).map(([key, value]) => (
              <DetailItem key={key} label={key} value={value} />
            ))}
          </dl>
        )}

        {item.subItems && (
          <div className="border-t pt-4 mt-auto">
             {item.subItems.map((sub, index) => (
                <div key={index} className="mb-3 pb-3 border-b last:border-b-0 last:mb-0 last:pb-0">
                    <h4 className="font-bold text-gray-800">{sub.name}</h4>
                    {Object.keys(sub.details).length > 0 && (
                        <dl className="mt-1 space-y-1">
                            {Object.entries(sub.details).map(([key, value]) => (
                                <DetailItem key={key} label={key} value={value} />
                            ))}
                        </dl>
                    )}
                </div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
};
