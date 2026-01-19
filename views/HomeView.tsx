
import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] px-4 md:px-10 lg:px-0 py-10">
        <div className="relative overflow-hidden rounded-xl bg-dark-accent min-h-[550px] flex flex-col justify-end p-8 md:p-16">
          <div className="absolute inset-0 z-0 opacity-60">
            <img 
              alt="Professional portrait of Jonatan Armengol" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/jonatan-portrait/1200/800" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-accent via-dark-accent/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6">
              Jonatan <br/><span className="text-primary">Armengol</span>
            </h1>
            <p className="text-white text-lg md:text-2xl font-medium leading-relaxed mb-8 opacity-90">
              La comunicación no se ve, se siente: Gastronomía y Liderazgo sin límites.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                <span className="material-symbols-outlined">radio</span> Radio
              </button>
              <button className="flex items-center gap-2 bg-white text-dark-accent px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                <span className="material-symbols-outlined">local_fire_department</span> El Camino del Fuego
              </button>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all shadow-xl">
                <span className="material-symbols-outlined">accessibility_new</span> Accesibilidad
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-dark-accent py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-0 flex flex-wrap justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start flex-1 min-w-[250px] border-l-4 border-primary pl-6">
            <p className="text-primary text-sm font-black uppercase tracking-widest mb-2">Impacto Digital</p>
            <h2 className="text-white text-6xl md:text-7xl font-black tracking-tighter leading-none">1,17M</h2>
            <p className="text-white/60 text-lg font-medium mt-2 italic">Seguidores (Metricool)</p>
          </div>
          <div className="flex flex-col items-center md:items-start flex-1 min-w-[250px] border-l-4 border-primary pl-6">
            <p className="text-primary text-sm font-black uppercase tracking-widest mb-2">Visibilidad Global</p>
            <h2 className="text-white text-6xl md:text-7xl font-black tracking-tighter leading-none">564,8M</h2>
            <p className="text-white/60 text-lg font-medium mt-2 italic">Impresiones (Metricool)</p>
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
