
import React from 'react';
import { ViewType } from '../types';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: ViewType) => {
    onNavigate(view);
    window.location.hash = view;
    window.scrollTo(0, 0);
  };

  return (
    <footer className="w-full bg-dark-accent text-white py-16 md:py-24 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-6">Jonatan Armengol</h2>
            <p className="text-white/60 text-lg max-w-md leading-relaxed mb-8">
              Comunicador, influencer gastronómico y experto en accesibilidad. Redefiniendo los límites de lo posible a través de la voz y el sentido del gusto.
            </p>
            <div className="flex flex-col gap-6">
              <h4 className="text-primary font-black uppercase text-sm tracking-widest">Sígueme en redes</h4>
              <div className="flex flex-wrap gap-4">
                {['TikTok', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="flex items-center gap-3 bg-white/10 hover:bg-primary transition-all p-3 pr-6 rounded-lg min-w-[140px] border border-white/5"
                  >
                    <div className="size-10 bg-white/20 rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">
                        {social === 'Instagram' ? 'photo_camera' : social === 'LinkedIn' ? 'work' : social === 'YouTube' ? 'video_library' : 'music_note'}
                      </span>
                    </div>
                    <span className="font-bold text-sm">{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-black uppercase text-sm tracking-widest mb-6">Representación</h4>
            <p className="font-bold mb-2">Prensa y Eventos</p>
            <a href="mailto:contacto@jonatanarmengol.com" className="text-white/60 mb-6 block underline hover:text-white transition-colors">
              contacto@jonatanarmengol.com
            </a>
            <p className="font-bold mb-2">Teléfono</p>
            <p className="text-white/60">+34 600 000 000</p>
          </div>

          <div>
            <h4 className="text-primary font-black uppercase text-sm tracking-widest mb-6">Mapa del Sitio</h4>
            <ul className="space-y-3 font-bold">
              <li><button onClick={() => handleNav('radio')} className="hover:text-primary transition-colors text-left">Radio: Comer a Ciegas</button></li>
              <li><button onClick={() => handleNav('home')} className="hover:text-primary transition-colors text-left">El Camino del Fuego</button></li>
              <li><button onClick={() => handleNav('accesibilidad')} className="hover:text-primary transition-colors text-left">Consultoría</button></li>
              <li><button onClick={() => handleNav('conferencias')} className="hover:text-primary transition-colors text-left">Conferencias</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© 2024 Jonatan Armengol. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Accesibilidad Web</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
