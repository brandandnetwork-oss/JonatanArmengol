
import React from 'react';

const RadioView: React.FC = () => {
  return (
    <div className="w-full bg-[#FFF5EB]">
      {/* Hero */}
      <section className="p-4 md:p-10">
        <div
          className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 md:px-16 max-w-[1200px] mx-auto"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://picsum.photos/seed/radio-hero/1200/600")' }}
        >
          <div className="flex flex-col gap-3 text-left max-w-2xl">
            <span className="bg-[#FF6B00] px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest w-fit">Radio Program</span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">Comer a Ciegas</h1>
            <h2 className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
              El primer podcast gastronómico diseñado para personas ciegas y amantes del buen comer. Un viaje sensorial sin precedentes.
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#FF6B00] text-white text-base font-bold transition-transform hover:scale-105 shadow-lg shadow-[#FF6B00]/30">
              <span className="material-symbols-outlined mr-2">play_arrow</span> Último episodio
            </button>
            <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md text-white border border-white/20 text-base font-bold hover:bg-white/20">
              Ver archivo
            </button>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 mb-12">
        <h2 className="text-dark-accent text-2xl md:text-3xl font-bold mb-6">Episodio Destacado</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white p-6 rounded-2xl shadow-xl border border-[#f4f2f0]">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-dark-accent">Cata a ciegas de aceites premium: El oro líquido de Jaén</h3>
              <p className="text-[#897261]">Publicado el 22 de Octubre, 2023 • 48 min</p>
            </div>
            <div className="relative flex items-center justify-center bg-dark-accent aspect-video rounded-xl overflow-hidden group">
              <img src="https://picsum.photos/seed/oil-tasting/800/450" className="w-full h-full object-cover opacity-60" />
              <button className="absolute z-10 size-20 bg-[#FF6B00] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">play_arrow</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-6 lg:border-l border-gray-100 lg:pl-8">
            <h4 className="font-bold text-lg text-dark-accent">En este episodio</h4>
            <ul className="space-y-4">
              {[
                { icon: 'restaurant', title: 'Técnicas de cata', desc: 'Identifica aceites premium.' },
                { icon: 'person', title: 'Invitado Especial', desc: 'Sumiller de Jaén.' },
                { icon: 'shopping_bag', title: 'Selección Gourmet', desc: '3 marcas premium.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="bg-[#FF6B00]/10 text-[#FF6B00] p-2 rounded-lg material-symbols-outlined">{item.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-dark-accent">{item.title}</p>
                    <p className="text-xs text-[#897261]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-10 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-dark-accent tracking-tight">Archivo de Programas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { cat: 'Panadería', title: 'El renacer de la masa madre', date: '15 Oct', dur: '32 min' },
            { cat: 'Vinos', title: '¿Realmente importa el año?', date: '08 Oct', dur: '45 min' },
            { cat: 'Especias', title: 'La ruta de las especias s.XXI', date: '01 Oct', dur: '28 min' }
          ].map((item, idx) => (
            <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-[#f4f2f0] hover:shadow-xl transition-all">
              <img src={`https://picsum.photos/seed/ep-${idx}/400/225`} className="w-full aspect-video object-cover" />
              <div className="p-5">
                <span className="text-[#FF6B00] text-xs font-bold uppercase mb-2 block">{item.cat}</span>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#FF6B00] transition-colors">{item.title}</h3>
                <div className="flex items-center justify-between text-xs font-medium text-[#897261]">
                  <span>{item.date}, 2023</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">schedule</span> {item.dur}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RadioView;
