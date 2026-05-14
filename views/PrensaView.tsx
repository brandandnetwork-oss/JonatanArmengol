
import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { source: '20 Minutos', title: 'Jonatan Armengol, el único crítico gastronómico ciego de España', desc: 'El influencer denuncia las barreras diarias que enfrentan las personas con discapacidad visual en la hostelería.', href: 'https://www.20minutos.es', date: '2024' },
  { source: 'Infobae', title: 'La inclusión no es un extra: Jonatan Armengol revoluciona la accesibilidad', desc: 'Entrevista sobre cómo la accesibilidad debe ser un pilar fundamental del diseño hostelero.', href: 'https://www.infobae.com', date: '2024' },
  { source: 'La Voz de Galicia', title: 'De la ceguera a referente en la crítica gastronómica', desc: 'Perfil del comunicador que utiliza el olfato y la memoria sensorial para evaluar la alta cocina y visibilizar la accesibilidad.', href: 'https://www.lavozdegalicia.es', date: '2024' },
  { source: 'RTVE', title: 'Comer a Ciegas: el programa que cambia la gastronomía', desc: 'RTVE destaca el formato de Radio Intereconomía diseñado para personas con discapacidad visual.', href: 'https://www.rtve.es', date: '2023' },
  { source: 'Tododisca', title: 'La lucha contra la discriminación de usuarios con perro guía', desc: 'Jonatan visibiliza las negativas de acceso a restaurantes y transporte a personas con perro guía.', href: 'https://www.tododisca.es', date: '2024' },
  { source: 'Diario de Sevilla', title: 'El Camino del Fuego: Jonatan conquista YouTube desde las brasas', desc: 'El canal de cocina al fuego del influencer ciego supera las 45.000 visualizaciones.', href: 'https://www.diariodesevilla.es', date: '2023' },
];

const featuredArticles = [
  {
    source: 'El País',
    title: 'Cómo la gastronomía puede ser accesible para todos',
    desc: 'Un reportaje sobre las iniciativas que están transformando la experiencia culinaria para personas con discapacidad visual en España.',
    href: 'https://www.elpais.com',
    date: '2025',
    tag: 'Reportaje destacado'
  },
  {
    source: 'La Vanguardia',
    title: 'Accesibilidad universal: el desafío pendiente de la hostelería española',
    desc: 'Jonatan Armengol lidera el debate sobre por qué los restaurantes deben pensar en todos sus clientes desde el primer día.',
    href: 'https://www.lavanguardia.com',
    date: '2025',
    tag: 'Entrevista exclusiva'
  },
];

const PrensaView: React.FC = () => (
  <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-16">
    {/* Header de sección */}
    <section className="mb-16">
      <span className="text-[#1A1A1A] text-sm font-bold uppercase tracking-widest block mb-3">Sala de Prensa</span>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Jonatan en los Medios</h1>
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">Artículos, entrevistas y reportajes publicados en medios nacionales e internacionales sobre accesibilidad, gastronomía y comunicación inclusiva.</p>
    </section>

    {/* Artículos Destacados */}
    <section className="mb-16" aria-labelledby="featured-heading">
      <div className="flex items-center gap-4 mb-8">
        <span className="size-2 bg-[#1A1A1A] rounded-full animate-pulse" aria-hidden="true"></span>
        <h2 id="featured-heading" className="text-xl font-black uppercase tracking-widest text-[#1A1A1A]">Artículos Destacados</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredArticles.map((a, i) => (
          <a
            key={i}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-[#1A1A1A] text-white rounded-xl overflow-hidden hover:scale-[1.02] transition-all shadow-xl"
            aria-label={`Leer artículo destacado de ${a.source}: ${a.title} (se abre en nueva pestaña)`}
          >
            <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url("https://picsum.photos/seed/featured-${i}/800/400")` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
              <span className="absolute top-4 left-4 bg-white text-[#1A1A1A] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">{a.tag}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">{a.date} · {a.source}</span>
              <h3 className="text-xl font-bold mb-3 group-hover:underline leading-snug">{a.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed flex-1">{a.desc}</p>
              <div className="flex items-center gap-2 mt-4 text-white font-bold text-sm">
                Leer artículo <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>

    {/* Todos los artículos */}
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" aria-label="Todos los artículos de prensa">
      {articles.map((a, i) => (
        <a key={i} href={a.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden" aria-label={`Leer artículo de ${a.source}: ${a.title} (se abre en nueva pestaña)`}>
          <div className="h-48 bg-[#F0F0F0] flex items-center justify-center">
            <span className="text-4xl font-black text-gray-300 group-hover:text-[#1A1A1A] transition-colors">{a.source}</span>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{a.date} · {a.source}</span>
            <h3 className="text-lg font-bold mb-3 group-hover:underline leading-snug">{a.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.desc}</p>
            <div className="flex items-center gap-2 mt-4 text-[#1A1A1A] font-bold text-sm">Leer artículo <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span></div>
          </div>
        </a>
      ))}
    </section>

    {/* CTA prensa */}
    <section className="bg-[#1A1A1A] rounded-2xl p-10 md:p-16 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-black mb-4">¿Eres periodista o medio de comunicación?</h2>
      <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Contacta con nuestro departamento de prensa para entrevistas, notas de prensa y reportajes sobre accesibilidad y gastronomía inclusiva.</p>
      <a href="mailto:contacto@jonatanarmengol.com" className="inline-flex items-center gap-3 bg-white text-[#1A1A1A] px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all" aria-label="Enviar email al departamento de prensa de Jonatan Armengol">
        <span className="material-symbols-outlined" aria-hidden="true">mail</span> contacto@jonatanarmengol.com
      </a>
    </section>
  </div>
);

export default PrensaView;
