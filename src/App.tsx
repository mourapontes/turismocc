
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SectionPage } from './components/SectionPage';
import { touristData } from './constants/data';
import { SectionKey } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('home');

  const handleNavClick = useCallback((section: SectionKey) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const renderContent = () => {
    if (activeSection === 'home') {
      return <Home onNavigate={handleNavClick} />;
    }
    const section = touristData.sections.find(s => s.key === activeSection);
    if (section) {
      return <SectionPage title={section.title} items={section.items} />;
    }
    return <Home onNavigate={handleNavClick} />;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
      <Header onNavClick={handleNavClick} activeSection={activeSection} />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
