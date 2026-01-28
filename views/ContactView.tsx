
import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <p className="text-[#FF6B00] text-sm font-bold uppercase tracking-widest mb-2">Representación & Network</p>
            <h1 className="text-dark-accent text-5xl lg:text-6xl font-black mb-4 tracking-tighter">Hablemos.</h1>
            <p className="text-[#897261] text-lg leading-relaxed max-w-md">
              Expertos en comunicación, accesibilidad y presencia de marca. Conectamos talento con oportunidades globales.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-dark-accent text-xl font-bold pt-4">Contacto Directo</h3>
            <a href="#" className="flex items-center justify-between bg-white border border-[#f4f2f0] rounded-xl px-4 py-4 hover:border-[#FF6B00] transition-colors group">
              <div className="flex items-center gap-4">
                <div className="text-[#FF6B00] bg-[#FF6B00]/10 p-3 rounded-lg material-symbols-outlined">chat</div>
                <div>
                  <p className="text-dark-accent font-bold">WhatsApp Profesional</p>
                  <p className="text-[#897261] text-sm">+34 625 034 042</p>
                </div>
              </div>
              <span className="material-symbols-outlined group-hover:text-[#FF6B00]">arrow_forward</span>
            </a>
          </div>

          <div className="rounded-xl overflow-hidden relative h-40 bg-gray-100 border border-gray-200">
            <img src="https://picsum.photos/seed/madrid-map/800/400?grayscale" className="w-full h-full object-cover opacity-40" alt="Madrid map" />
            <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-sm">
              <p className="text-xs font-bold text-dark-accent flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF6B00] text-sm">location_on</span>
                Based in Madrid, Spain
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-[#f4f2f0]">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Nombre Completo</label>
                  <input type="text" className="h-14 rounded-lg border-2 border-gray-100 px-4 focus:border-[#FF6B00] focus:ring-0 transition-colors bg-gray-50/50" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Empresa</label>
                  <input type="text" className="h-14 rounded-lg border-2 border-gray-100 px-4 focus:border-[#FF6B00] focus:ring-0 transition-colors bg-gray-50/50" placeholder="Nombre de tu organización" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Asunto del Interés</label>
                <select className="h-14 rounded-lg border-2 border-gray-100 px-4 focus:border-[#FF6B00] focus:ring-0 transition-colors bg-gray-50/50">
                  <option>Selecciona una categoría</option>
                  <option>Radio & Podcasts</option>
                  <option>Influencer & Media</option>
                  <option>Consultoría de Accesibilidad</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Mensaje Detallado</label>
                <textarea rows={5} className="rounded-lg border-2 border-gray-100 p-4 focus:border-[#FF6B00] focus:ring-0 transition-colors bg-gray-50/50" placeholder="Cuéntanos más..."></textarea>
              </div>
              <button className="h-16 rounded-xl bg-[#FF6B00] text-white text-lg font-black hover:bg-[#E65A00] transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-[#FF6B00]/20">
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
