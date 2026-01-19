
import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import RadioView from './views/RadioView';
import ContactView from './views/ContactView';
import InfluencerView from './views/InfluencerView';
import ConferenciasView from './views/ConferenciasView';
import AccesibilidadView from './views/AccesibilidadView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  // Simple hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ViewType;
      if (['home', 'radio', 'influencer', 'accesibilidad', 'conferencias', 'contacto'].includes(hash)) {
        setCurrentView(hash);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView />;
      case 'radio': return <RadioView />;
      case 'influencer': return <InfluencerView />;
      case 'accesibilidad': return <AccesibilidadView />;
      case 'conferencias': return <ConferenciasView />;
      case 'contacto': return <ContactView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1">
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
