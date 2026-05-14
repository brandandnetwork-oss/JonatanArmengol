
import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: { label: string; path: string }[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Radio', path: '/radio' },
    { label: 'Influencer', path: '/influencer' },
    { label: 'Accesibilidad', path: '/accesibilidad' },
    { label: 'Conferencias', path: '/conferencias' },
    { label: 'Catas a Ciegas', path: '/catas' },
    { label: 'Prensa', path: '/prensa' },
    { label: 'Contacto', path: '/contacto' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1A1A1A] shadow-lg shadow-black/10 px-4 md:px-10 lg:px-20 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={closeMenu}
          aria-label="Jonatan Armengol - Ir a inicio"
        >
          <div className="size-10 bg-white/10 rounded-xl flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
            <span className="material-symbols-outlined text-xl" aria-hidden="true">visibility_off</span>
          </div>
          <h2 className="text-white text-2xl font-display font-black leading-tight tracking-tight">
            Jonatan <span className="text-white/70">Armengol</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-all duration-300 ${isActive || (item.path === '/' && location.pathname === '/home') ? 'text-white bg-white/15 px-3 py-1 rounded-lg' : 'text-white/60 hover:text-white hover:scale-105'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white" aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'} aria-expanded={isMenuOpen}>
            <span className="material-symbols-outlined text-3xl" aria-hidden="true">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-left text-lg font-bold py-2 border-b border-gray-50 ${isActive ? 'text-[#1A1A1A]' : 'text-gray-500'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

        </div>
      )}
    </header>
  );
};

export default Header;
