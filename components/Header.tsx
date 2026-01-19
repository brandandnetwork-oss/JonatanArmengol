
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
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f4f2f0] bg-white/90 backdrop-blur-md px-4 md:px-10 lg:px-20 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={closeMenu}
        >
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">visibility_off</span>
          </div>
          <h2 className="text-dark-accent text-xl font-extrabold leading-tight tracking-tight">Jonatan Armengol</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-colors hover:text-primary ${isActive || (item.path === '/' && location.pathname === '/home') ? 'text-primary' : 'text-dark-accent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contacto"
            className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-extrabold shadow-lg hover:brightness-110 transition-all"
          >
            Contactar Representante
          </Link>
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
