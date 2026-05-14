
import React from 'react';
import { Link } from 'react-router-dom';

const HomeView: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] px-4 md:px-10 lg:px-0 py-10">
        <div className="relative overflow-hidden rounded-xl bg-[#0A0A0A] min-h-[550px] flex flex-col justify-end p-8 md:p-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent z-10"></div>
            <img
              alt="Retrato profesional de Jonatan Armengol, crítico gastronómico y experto en accesibilidad"
              className="w-full h-full object-cover"
              src="https://picsum.photos/seed/jonatan-portrait/1200/800"
            />
          </div>
          <div className="relative z-20 max-w-3xl pt-20">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 max-w-fit">
              <span className="text-white font-bold text-sm uppercase tracking-widest">Gastronomía · Accesibilidad · Comunicación</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 drop-shadow-xl">
              Jonatan <br /><span className="text-white/80">Armengol</span>
            </h1>
            <p className="text-white/90 text-lg md:text-2xl font-medium leading-relaxed mb-10 max-w-2xl border-l-4 border-white pl-6">
              El primer crítico gastronómico ciego de España: <br />derribando barreras para que <span className="text-white font-bold">todos puedan disfrutar la gastronomía</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Escuchar Radio */}
              <a
                href="https://www.radio-espana.es/podcasts/comer-a-ciegas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-8 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Escuchar el programa de radio Comer a Ciegas en Radio España (se abre en nueva pestaña)"
              >
                <span className="material-symbols-outlined filled" aria-hidden="true">radio</span> Escuchar Radio
              </a>
              {/* El Camino del Fuego */}
              <a
                href="https://www.youtube.com/@jonatanarmengol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Ver El Camino del Fuego en YouTube (se abre en nueva pestaña)"
              >
                <span className="material-symbols-outlined" aria-hidden="true">local_fire_department</span> El Camino del Fuego
              </a>
              {/* Accesibilidad - DESTACADO */}
              <Link
                to="/accesibilidad"
                className="flex items-center gap-3 bg-white text-[#1A1A1A] px-8 py-5 rounded-2xl font-black text-lg hover:scale-105 hover:shadow-xl transition-all cursor-pointer"
                aria-label="Consultoría en Accesibilidad: descubre cómo hacemos los productos más inclusivos para personas con discapacidad visual"
              >
                <span className="material-symbols-outlined filled" aria-hidden="true">accessibility_new</span> Accesibilidad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#F0F0F0] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/5 to-transparent pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-0 flex flex-wrap justify-center md:justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start flex-1 min-w-[250px] border-l-0 md:border-l-4 border-[#1A1A1A] md:pl-8 group hover:-translate-y-2 transition-transform duration-500">
            <p className="text-[#1A1A1A] font-black uppercase tracking-[0.2em] mb-3 text-sm">Impacto Digital</p>
            <h2 className="text-[#1A1A1A] text-7xl md:text-8xl font-black tracking-tighter leading-none transition-all">1.17M</h2>
            <p className="text-gray-600 text-xl font-medium mt-3 flex items-center gap-2 justify-center md:justify-start">
              <span className="size-2 bg-[#1A1A1A] rounded-full animate-pulse" aria-hidden="true"></span> Seguidores Totales
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start flex-1 min-w-[250px] border-l-0 md:border-l-4 border-[#1A1A1A] md:pl-8 group hover:-translate-y-2 transition-transform duration-500">
            <p className="text-[#1A1A1A] font-black uppercase tracking-[0.2em] mb-3 text-sm">Visibilidad Global</p>
            <h2 className="text-[#1A1A1A] text-7xl md:text-8xl font-black tracking-tighter leading-none transition-all">564M+</h2>
            <p className="text-gray-600 text-xl font-medium mt-3 flex items-center gap-2 justify-center md:justify-start">
              <span className="size-2 bg-[#1A1A1A] rounded-full animate-pulse" aria-hidden="true"></span> Impresiones Anuales
            </p>
          </div>
        </div>
      </section>

      {/* Radio Preview */}
      <section className="w-full max-w-[1200px] px-4 md:px-10 lg:px-0 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col md:flex-row shadow-sm">
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <img
                alt="Estudio de radio donde se graba Comer a Ciegas"
                className="w-full h-full object-cover"
                src="/fondo-radio.webp"
              />
            </div>
            <div className="p-8 flex flex-col justify-center flex-1">
              <h2 className="text-3xl font-black mb-4">Radio: Comer a Ciegas</h2>
              <p className="text-lg text-gray-500 mb-6">Explorando la gastronomía desde una perspectiva sensorial pura. Escucha nuestro último análisis sobre la cocina de vanguardia sin el sentido de la vista.</p>
              <a
                href="https://www.radio-espana.es/podcasts/comer-a-ciegas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit bg-[#1A1A1A] text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition-colors shadow-lg shadow-black/10"
                aria-label="Escuchar ahora el programa Comer a Ciegas (se abre en nueva pestaña)"
              >
                <span className="material-symbols-outlined" aria-hidden="true">play_circle</span> Escuchar Ahora
              </a>
            </div>
          </div>
          <div className="bg-[#1A1A1A] p-8 rounded-xl flex flex-col justify-between text-white shadow-xl shadow-black/10">
            <span className="material-symbols-outlined text-5xl" aria-hidden="true">podcasts</span>
            <div>
              <h3 className="text-2xl font-extrabold mb-2">Más que voz</h3>
              <p className="font-medium opacity-90">Presente en las principales cadenas de radio nacionales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Cards Section */}
      <section className="w-full bg-[#F0F0F0] py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-0">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#1A1A1A] font-black uppercase tracking-widest mb-2">Contenido Original</p>
              <h2 className="text-4xl md:text-5xl font-black">El Camino del Fuego</h2>
            </div>
            <a
              className="hidden md:flex items-center gap-2 font-bold text-[#1A1A1A] hover:underline"
              href="https://www.youtube.com/@jonatanarmengol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver todo el canal de YouTube de Jonatan Armengol (se abre en nueva pestaña)"
            >
              Ver todo el canal <span className="material-symbols-outlined" aria-hidden="true">trending_flat</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Técnicas de brasa sin mirar', views: '12K', img: 'bbq' },
              { title: 'El emplatado perfecto', views: '45K', img: 'plating' },
              { title: 'Especias y sensaciones', views: '22K', img: 'spices' }
            ].map((video, idx) => (
              <div key={idx} className="group relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg cursor-pointer" role="article" aria-label={`Vídeo: ${video.title}, ${video.views} visualizaciones`}>
                <img
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  src={`https://picsum.photos/seed/video-${idx}/800/450`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                  <h4 className="text-white font-bold text-lg">{video.title}</h4>
                  <div className="flex items-center gap-2 text-white mt-2">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">visibility</span>
                    <span className="text-xs font-bold text-white/80">{video.views} visualizaciones</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
