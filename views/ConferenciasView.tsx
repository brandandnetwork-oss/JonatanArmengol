
import React from 'react';
import { Link } from 'react-router-dom';

const ConferenciasView: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl min-h-[520px] flex flex-col justify-end p-8 md:p-16 bg-cover bg-center mb-16" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://picsum.photos/seed/speaking/1200/600")' }}>
        <div className="relative z-10 space-y-6 max-w-3xl">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit backdrop-blur-sm">Keynote Speaker</span>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Conferencias: Accesibilidad, Inclusión y Gastronomía
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed">
            Ponencias que transforman la manera en que las organizaciones entienden la accesibilidad y la inclusión de personas con discapacidad visual.
          </p>
          <Link
            to="/contacto"
            className="inline-flex bg-white text-[#1A1A1A] h-12 px-8 rounded-lg font-bold hover:bg-gray-100 shadow-lg transition-all items-center"
            aria-label="Reservar a Jonatan Armengol para tu evento o conferencia"
          >
            Reservar para tu evento
          </Link>
        </div>
      </section>

      {/* Conference Catalog */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {[
          {
            title: 'Nadie gana solo',
            desc: 'Una inmersión profunda en el éxito colectivo: cómo las organizaciones que integran la accesibilidad desde el diseño construyen equipos más resilientes y creativos.',
            img: 'team',
            icon: 'groups'
          },
          {
            title: 'Confianza ciega',
            desc: 'Exploración de la confianza como motor de cambio: la perspectiva de alguien que confía cada día en los demás para desenvolverse en el mundo transforma la cultura de empresa.',
            img: 'trust',
            icon: 'visibility_off'
          },
          {
            title: 'Accesibilidad como ventaja competitiva',
            desc: 'Por qué las empresas que diseñan para todos —incluyendo personas con discapacidad— ganan en innovación, reputación y mercado.',
            img: 'accessibility',
            icon: 'accessibility_new'
          },
          {
            title: 'Sentidos en la mesa',
            desc: 'Una conferencia gastronómica que demuestra cómo la supresión de la vista potencia el olfato, el gusto y la memoria sensorial, con aplicación directa al bienestar organizacional.',
            img: 'senses',
            icon: 'restaurant'
          }
        ].map((conf, i) => (
          <div key={i} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all">
            <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url("https://picsum.photos/seed/conf-${i}/800/400")` }} role="img" aria-label={`Imagen de la conferencia ${conf.title}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="material-symbols-outlined text-white text-4xl" aria-hidden="true">{conf.icon}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{conf.title}</h3>
              <p className="text-gray-500 mb-6">{conf.desc}</p>
              <Link
                to="/contacto"
                className="text-[#1A1A1A] font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform"
                aria-label={`Solicitar información sobre la conferencia ${conf.title}`}
              >
                Solicitar información <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] rounded-2xl p-10 md:p-16 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">¿Quieres llevar esta experiencia a tu organización?</h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Contacta para organizar una ponencia a medida para tu empresa, institución o evento.</p>
        <Link
          to="/contacto"
          className="inline-flex items-center gap-3 bg-white text-[#1A1A1A] px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all"
          aria-label="Contactar para organizar una conferencia con Jonatan Armengol"
        >
          <span className="material-symbols-outlined" aria-hidden="true">mail</span> Hablar con Jonatan
        </Link>
      </section>
    </div>
  );
};

export default ConferenciasView;
