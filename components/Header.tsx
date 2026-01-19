
import React, { useState } from 'react';
import { ViewType, NavItem } from '../types';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Inicio', view: 'home' },
    { label: 'Radio', view: 'radio' },
    { label: 'Influencer', view: 'influencer' },
    { label: 'Accesibilidad', view: 'accesibilidad' },
    { label: 'Conferencias', view: 'conferencias' },
    { label: 'Contacto', view: 'contacto' },
  ];

  const handleNavClick = (view: ViewType) => {
    onNavigate(view);
    window.location.hash = view;
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f4f2f0] bg-white/90 backdrop-blur-md px-4 md:px-10 lg:px-20 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">visibility_off</span>
          </div>
          <h2 className="text-dark-accent text-xl font-extrabold leading-tight tracking-tight">Jonatan Armengol</h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  currentView === item.view ? 'text-primary' : 'text-dark-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button 
            onClick={() => handleNavClick('contacto')}
            className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-extrabold shadow-lg hover:brightness-110 transition-all"
          >
            Contactar Representante
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-accent">
            <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`text-left text-lg font-bold py-2 border-b border-gray-50 ${
                currentView === item.view ? 'text-primary' : 'text-dark-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contacto')}
            className="w-full bg-primary text-white py-4 rounded-lg font-bold mt-4"
          >
            Contactar Representante
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
