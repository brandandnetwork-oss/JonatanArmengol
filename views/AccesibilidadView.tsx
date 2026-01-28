
import React from 'react';

const AccesibilidadView: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="bg-[#FF6B00]/10 text-[#FF6B00] px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Accesibilidad de Alto Impacto</span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter text-dark-accent">
            La accesibilidad no es un checklist, es una <span className="text-[#FF6B00]">ventaja competitiva</span>.
          </h1>
          <p className="text-lg md:text-xl text-[#6b5849] leading-relaxed max-w-xl">
            Ayudamos a las empresas a eliminar barreras visuales, mejorando la experiencia de usuario y potenciando el impacto social.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#FF6B00] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[#FF6B00]/20">
              Solicitar Consultoría <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://picsum.photos/seed/accessibility/800/600" className="w-full aspect-[4/3] object-cover" alt="Accessibility testing" />
          <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-gray-100">
            <p className="text-3xl font-black text-[#FF6B00]">+15 Años</p>
            <p className="text-sm font-medium">Liderando la inclusión digital</p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Nuestra Metodología</h2>
            <p className="text-[#6b5849]">Un proceso estructurado para transformar la accesibilidad en valor de marca.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { num: '01', title: 'Análisis', desc: 'Detectamos barreras en diseño y código.' },
              { num: '02', title: 'Implementación', desc: 'Ejecutamos cambios técnicos y formamos equipos.' },
              { num: '03', title: 'Resultados', desc: 'Certificamos y medimos el impacto real.' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-6">
                <div className={`size-20 rounded-full border-4 flex items-center justify-center font-black text-2xl ${i === 1 ? 'bg-[#FF6B00] border-white text-white' : 'bg-white border-[#FF6B00] text-[#FF6B00] shadow-xl'}`}>
                  {step.num}
                </div>
                <h4 className="text-2xl font-bold">{step.title}</h4>
                <p className="text-[#6b5849]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 pb-24">
        <div className="bg-[#FF6B00] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-900/20">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">¿Listo para hacer tu producto universal?</h2>
          <button className="bg-white text-[#FF6B00] px-10 py-5 rounded-2xl text-xl font-extrabold shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto">
            Hablar con Jonatan <span className="material-symbols-outlined font-bold">mail</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AccesibilidadView;
