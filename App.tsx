
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
import RadioView from './views/RadioView';
import ContactView from './views/ContactView';
import InfluencerView from './views/InfluencerView';
import ConferenciasView from './views/ConferenciasView';
import AccesibilidadView from './views/AccesibilidadView';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-[#FFF5EB] text-gray-900 antialiased">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/radio" element={<RadioView />} />
            <Route path="/influencer" element={<InfluencerView />} />
            <Route path="/accesibilidad" element={<AccesibilidadView />} />
            <Route path="/conferencias" element={<ConferenciasView />} />
            <Route path="/contacto" element={<ContactView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
