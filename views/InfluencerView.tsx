
import React from 'react';

const InfluencerView: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 pb-20">
      <section className="py-10 md:py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 aspect-[4/5] bg-cover rounded-xl shadow-2xl" style={{ backgroundImage: 'url("https://picsum.photos/seed/influencer/800/1000")' }}></div>
        <div className="w-full md:w-1/2 space-y-6">
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-sm">Media Kit 2024</span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-dark-accent">
            Influencer & <br /><span className="text-[#FF6B00]">Creador de Contenido</span>
          </h1>
          <p className="text-lg text-[#5c4a3d] leading-relaxed">
            Autenticidad que conecta, impacto que trasciende. Uniendo marcas con audiencias reales a través de contenido estratégico.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-[#FF6B00] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:translate-y-[-2px] transition-all shadow-[#FF6B00]/20">Ver Métricas</button>
            <button className="bg-white border border-gray-200 text-dark-accent px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all">Contactar</button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 bg-white rounded-xl border border-gray-100 shadow-sm mb-16">
        {[
          { label: 'Instagram Followers', value: '150K+', trend: '+12%', icon: 'groups' },
          { label: 'TikTok Views', value: '2.4M', trend: '+25%', icon: 'visibility' },
          { label: 'Engagement Rate', value: '4.8%', trend: 'Top 5%', icon: 'favorite' },
          { label: 'Alcance Mensual', value: '1.2M', trend: '+18%', icon: 'share' }
        ].map((stat, i) => (
          <div key={i} className="p-6 bg-[#f8f7f6] rounded-lg border border-transparent hover:border-[#FF6B00] transition-colors">
            <div className="flex justify-between mb-4">
              <span className="text-sm font-medium opacity-70">{stat.label}</span>
              <span className="material-symbols-outlined text-[#FF6B00]">{stat.icon}</span>
            </div>
            <p className="text-3xl font-extrabold">{stat.value}</p>
            <p className="text-[#07880e] text-sm font-bold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> {stat.trend}
            </p>
          </div>
        ))}
      </section>

      {/* Brand Logos */}
      <section className="py-12 border-y border-gray-100 mb-16 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#897261] mb-8">Marcas que han confiado</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 font-black italic text-2xl">
          <span>NIKE</span> <span>APPLE</span> <span>ADIDAS</span> <span>SAMSUNG</span> <span>NETFLIX</span>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-[#FF6B00] rounded-2xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-orange-900/20">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-black mb-4">¿Listo para colaborar?</h2>
          <p className="text-white/90 text-lg">Descarga mi dossier completo con demográficos detallados de audiencia y tarifas 2024.</p>
        </div>
        <button className="bg-white text-[#FF6B00] px-10 py-5 rounded-xl font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <span className="material-symbols-outlined">download</span> Media Kit PDF
        </button>
      </section>
    </div>
  );
};

export default InfluencerView;
