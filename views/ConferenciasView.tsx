
import React from 'react';

const ConferenciasView: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl min-h-[520px] flex flex-col justify-end p-8 md:p-16 bg-cover bg-center mb-16" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://picsum.photos/seed/speaking/1200/600")' }}>
        <div className="relative z-10 space-y-6 max-w-3xl">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit">Keynote Speaker</span>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Conferencias: Confianza, Coordinación y Rendimiento
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed">
            Transforma la dinámica de tu equipo con una perspectiva única sobre el liderazgo y el trabajo colectivo.
          </p>
          <button className="bg-primary text-white h-12 px-8 rounded-lg font-bold hover:brightness-110">Reservar para tu evento</button>
        </div>
      </section>

      {/* Conference Catalog */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {[
          { title: 'Nadie gana solo', time: '45/60 min', desc: 'Una inmersión profunda en el éxito colectivo y la coordinación milimétrica.', img: 'team' },
          { title: 'Confianza ciega', time: '30/45 min', desc: 'Exploración de la confianza radical como motor de cambio organizacional.', img: 'trust' }
        ].map((conf, i) => (
          <div key={i} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#f4f2f0] shadow-sm hover:shadow-xl transition-all">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url("https://picsum.photos/seed/conf-${i}/800/400")` }}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{conf.title}</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">{conf.time}</span>
              </div>
              <p className="text-[#897261] mb-6">{conf.desc}</p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                Ver detalles <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Logistics */}
      <section className="bg-white p-8 md:p-12 rounded-2xl border border-[#f4f2f0] grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold mb-4">Logística y Requerimientos</h2>
          <p className="text-[#897261]">Facilitamos todo el proceso para que la organización sea un éxito rotundo.</p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-primary/10 text-primary size-10 flex items-center justify-center rounded-lg material-symbols-outlined">settings_input_component</div>
            <h4 className="font-bold">Necesidades Técnicas</h4>
            <ul className="text-[#897261] text-sm space-y-2">
              <li>• Micrófono de diadema profesional</li>
              <li>• Conexión HDMI para presentaciones</li>
              <li>• Sistema de sonido de alta fidelidad</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="bg-primary/10 text-primary size-10 flex items-center justify-center rounded-lg material-symbols-outlined">flight_takeoff</div>
            <h4 className="font-bold">Viajes y Estancia</h4>
            <ul className="text-[#897261] text-sm space-y-2">
              <li>• Gestión de vuelos desde Madrid</li>
              <li>• Desplazamientos locales a cargo del cliente</li>
              <li>• Alojamiento en hotel min. 4 estrellas</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConferenciasView;
