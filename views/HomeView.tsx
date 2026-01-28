
import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] px-4 md:px-10 lg:px-0 py-10">
        <div className="relative overflow-hidden rounded-xl bg-canvas-dark min-h-[550px] flex flex-col justify-end p-8 md:p-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-canvas-dark/90 via-canvas-dark/60 to-transparent z-10"></div>
            <img
              alt="Professional portrait of Jonatan Armengol"
              className="w-full h-full object-cover"
              src="https://picsum.photos/seed/jonatan-portrait/1200/800"
            />
          </div>
          <div className="relative z-20 max-w-3xl pt-20">
            <div className="inline-block px-4 py-2 bg-[#FF6B00]/20 backdrop-blur-sm border border-[#FF6B00]/30 rounded-full mb-6 max-w-fit">
              <span className="text-[#FF8533] font-bold text-sm uppercase tracking-widest">Gastronomía • Liderazgo • Comunicación</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 drop-shadow-xl">
              Jonatan <br /><span className="text-[#FF6B00] drop-shadow-[0_2px_10px_rgba(255,107,0,0.5)]">Armengol</span>
            </h1>
            <p className="text-white/90 text-lg md:text-2xl font-medium leading-relaxed mb-10 max-w-2xl border-l-4 border-[#FF6B00] pl-6">
              La comunicación no se ve, se siente: <br />Gastronomía y Liderazgo <span className="text-[#FF6B00] font-bold">sin límites</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-gradient-to-r from-[#FF6B00] to-[#E65A00] text-white px-8 py-5 rounded-2xl font-black text-lg hover:scale-105 hover:shadow-xl hover:shadow-[#FF6B00]/30 transition-all cursor-pointer">
                <span className="material-symbols-outlined filled">radio</span> Escuchar Radio
              </button>
              <button className="flex items-center gap-3 bg-white text-secondary px-8 py-5 rounded-2xl font-black text-lg hover:scale-105 hover:bg-gray-50 transition-all shadow-lg cursor-pointer">
                <span className="material-symbols-outlined text-primary">local_fire_department</span> El Camino del Fuego
              </button>
              <button className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all cursor-pointer">
                <span className="material-symbols-outlined">accessibility_new</span> Accesibilidad
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* Stats Section */}
      <section className="w-full bg-[#FFF5EB] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF6B00]/10 to-transparent pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-0 flex flex-wrap justify-center md:justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start flex-1 min-w-[250px] border-l-0 md:border-l-4 border-[#FF6B00] md:pl-8 group hover:-translate-y-2 transition-transform duration-500">
            <p className="text-[#FF6B00] font-black uppercase tracking-[0.2em] mb-3 text-sm">Impacto Digital</p>
            <h2 className="text-[#FF6B00] text-7xl md:text-8xl font-black tracking-tighter leading-none transition-all drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">1.17M</h2>
            <p className="text-gray-800 text-xl font-medium mt-3 flex items-center gap-2 justify-center md:justify-start">
              <span className="size-2 bg-[#FF6B00] rounded-full animate-pulse"></span> Seguidores Totales
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start flex-1 min-w-[250px] border-l-0 md:border-l-4 border-[#FF6B00] md:pl-8 group hover:-translate-y-2 transition-transform duration-500">
            <p className="text-[#FF6B00] font-black uppercase tracking-[0.2em] mb-3 text-sm">Visibilidad Global</p>
            <h2 className="text-[#FF6B00] text-7xl md:text-8xl font-black tracking-tighter leading-none transition-all drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">564M+</h2>
            <p className="text-gray-800 text-xl font-medium mt-3 flex items-center gap-2 justify-center md:justify-start">
              <span className="size-2 bg-[#FF6B00] rounded-full animate-pulse"></span> Impresiones Anuales
            </p>
          </div>
        </div>
      </section>

      {/* Radio Preview */}
      <section className="w-full max-w-[1200px] px-4 md:px-10 lg:px-0 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-xl overflow-hidden border border-[#f4f2f0] flex flex-col md:flex-row shadow-sm">
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <img
                alt="Radio Studio"
                className="w-full h-full object-cover"
                src="https://picsum.photos/seed/radio-studio/600/600"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-xs font-black uppercase">Último Episodio</div>
            </div>
            <div className="p-8 flex flex-col justify-center flex-1">
              <h2 className="text-3xl font-black mb-4">Radio: Comer a Ciegas</h2>
              <p className="text-lg text-dark-accent/70 mb-6">Explorando la gastronomía desde una perspectiva sensorial pura. Escucha nuestro último análisis sobre la cocina de vanguardia sin el sentido de la vista.</p>
              <button className="flex items-center gap-3 w-fit bg-dark-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">play_circle</span> Escuchar Ahora
              </button>
            </div>
          </div>
          <div className="bg-primary p-8 rounded-xl flex flex-col justify-between text-white shadow-xl">
            <span className="material-symbols-outlined text-5xl">podcasts</span>
            <div>
              <h3 className="text-2xl font-extrabold mb-2">Más que voz</h3>
              <p className="font-medium opacity-90">Presente en las principales cadenas de radio nacionales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Cards Section */}
      <section className="w-full bg-[#f4f2f0] py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-0">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-primary font-black uppercase tracking-widest mb-2">Contenido Original</p>
              <h2 className="text-4xl md:text-5xl font-black">El Camino del Fuego</h2>
            </div>
            <a className="hidden md:flex items-center gap-2 font-bold text-primary hover:underline" href="#">
              Ver todo el canal <span className="material-symbols-outlined">trending_flat</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Técnicas de brasa sin mirar', views: '12K', img: 'bbq' },
              { title: 'El emplatado perfecto', views: '45K', img: 'plating' },
              { title: 'Especias y sensaciones', views: '22K', img: 'spices' }
            ].map((video, idx) => (
              <div key={idx} className="group relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <img
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  src={`https://picsum.photos/seed/video-${idx}/800/450`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                  <h4 className="text-white font-bold text-lg">{video.title}</h4>
                  <div className="flex items-center gap-2 text-primary mt-2">
                    <span className="material-symbols-outlined text-sm">visibility</span>
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
