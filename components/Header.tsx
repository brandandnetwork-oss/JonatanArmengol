
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
    { label: 'Contacto', path: '/contacto' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#FF6B00] shadow-lg shadow-orange-900/20 px-4 md:px-10 lg:px-20 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={closeMenu}
        >
          <div className="size-10 bg-white/20 rounded-xl flex items-center justify-center text-white backdrop-blur-sm border border-white/20">
            <span className="material-symbols-outlined text-xl">visibility_off</span>
          </div>
          <h2 className="text-white text-2xl font-display font-black leading-tight tracking-tight">
            Jonatan <span className="text-white/80">Armengol</span>
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
                  `text-sm font-bold transition-all duration-300 ${isActive || (item.path === '/' && location.pathname === '/home') ? 'text-white bg-white/20 px-3 py-1 rounded-lg' : 'text-white/70 hover:text-white hover:scale-105'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contacto"
            className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white text-[#FF6B00] text-sm font-extrabold shadow-lg hover:bg-gray-50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contactar Representante
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
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
                `text-left text-lg font-bold py-2 border-b border-gray-50 ${isActive ? 'text-primary' : 'text-dark-accent'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            onClick={closeMenu}
            className="w-full bg-primary text-white py-4 rounded-lg font-bold mt-4 text-center"
          >
            Contactar Representante
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
