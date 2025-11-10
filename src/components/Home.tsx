
import React from 'react';
import { touristData } from '../constants/data';
import { SectionKey } from '../types';

interface HomeProps {
    onNavigate: (section: SectionKey) => void;
}

const navCards: { key: SectionKey; label: string; icon: string, description: string }[] = [
  { key: 'natural_attractions', label: 'Atrativos Naturais', icon: 'fa-tree', description: 'Explore serras, rios e piscinas naturais.' },
  { key: 'cultural_attractions', label: 'Cultura e Arte', icon: 'fa-masks-theater', description: 'Descubra as tradições e o artesanato local.' },
  { key: 'religious_attractions', label: 'Turismo de Fé', icon: 'fa-place-of-worship', description: 'Visite igrejas, santuários e morros sagrados.' },
  { key: 'lodging', label: 'Hospedagem', icon: 'fa-bed', description: 'Encontre hotéis e pousadas para sua estadia.' },
  { key: 'food_drink', label: 'Gastronomia', icon: 'fa-utensils', description: 'Saboreie os pratos típicos da região.' },
  { key: 'leisure_events', label: 'Lazer e Eventos', icon: 'fa-calendar-days', description: 'Participe das festas e aproveite os espaços de lazer.' },
];


export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="text-center">
        <div 
            className="bg-cover bg-center rounded-lg shadow-xl p-8 md:p-16 mb-12"
            style={{backgroundImage: 'url(https://picsum.photos/1200/400?random=100)'}}
        >
            <div className="bg-black bg-opacity-50 rounded-lg p-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Inventário da Oferta Turística
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-blue-300 mt-2">
                    {touristData.city}
                </h2>
            </div>
        </div>
      
      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
        {touristData.introduction}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {navCards.map((card) => (
             <div key={card.key}
                onClick={() => onNavigate(card.key)}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center cursor-pointer
                           transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl border-b-4 border-transparent hover:border-[#0033A0]">
                <div className="text-white bg-[#0033A0] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <i className={`fas ${card.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#0033A0] mb-2">{card.label}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};
