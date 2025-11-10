
import React, { useState } from 'react';
import { SectionKey } from '../types';

interface HeaderProps {
  onNavClick: (section: SectionKey) => void;
  activeSection: SectionKey;
}

const navItems: { key: SectionKey; label: string }[] = [
  { key: 'home', label: 'Início' },
  { key: 'natural_attractions', label: 'Naturais' },
  { key: 'cultural_attractions', label: 'Culturais' },
  { key: 'religious_attractions', label: 'Religiosos' },
  { key: 'lodging', label: 'Hospedagem' },
  { key: 'food_drink', label: 'Gastronomia' },
  { key: 'leisure_events', label: 'Lazer' },
  { key: 'support_services', label: 'Serviços' },
];

export const Header: React.FC<HeaderProps> = ({ onNavClick, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (key: SectionKey) => {
    onNavClick(key);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
           <div className="text-white bg-[#0033A0] p-2 rounded-full">
                <i className="fa-solid fa-map-location-dot"></i>
           </div>
          <h1 className="text-xl md:text-2xl font-bold text-[#0033A0]">
            Guia de Cristino Castro
          </h1>
        </div>

        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleLinkClick(item.key)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                activeSection === item.key
                  ? 'bg-[#0033A0] text-white'
                  : 'text-gray-600 hover:bg-blue-100 hover:text-[#0033A0]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#0033A0] focus:outline-none">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
               <li key={item.key} className="w-full">
                 <button
                    onClick={() => handleLinkClick(item.key)}
                    className={`w-full text-center py-3 font-semibold transition-colors duration-300 ${
                    activeSection === item.key
                        ? 'bg-blue-100 text-[#0033A0]'
                        : 'text-gray-600 hover:bg-blue-50'
                    }`}
                >
                    {item.label}
                </button>
               </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
