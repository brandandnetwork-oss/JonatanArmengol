
import React from 'react';
import { Link } from 'react-router-dom';

const catas = [
  { title: 'Cata de Aceites Premium', subtitle: 'El oro líquido de Jaén', desc: 'Descubre los matices del aceite de oliva virgen extra a través de los sentidos del olfato y el gusto, prescindiendo de la vista.', duration: '90 min', guests: '10-30', img: 'olive-oil' },
  { title: 'Cata de Vinos a Ciegas', subtitle: 'Tintos de Rioja y Ribera', desc: 'Una experiencia sensorial donde el color del vino desaparece y solo quedan los aromas, texturas y sabores en boca.', duration: '120 min', guests: '10-50', img: 'wine-tasting' },
  { title: 'Cata de Quesos Artesanales', subtitle: 'Recorrido por la España quesera', desc: 'Desde la Torta del Casar hasta el Idiazábal: una ruta sensorial por las texturas y fermentaciones más singulares.', duration: '75 min', guests: '8-25', img: 'cheese' },
  { title: 'Cata de Chocolate Bean-to-Bar', subtitle: 'Orígenes del cacao', desc: 'Explora chocolates de origen único con un enfoque en la memoria olfativa y las notas de cata sin información visual.', duration: '60 min', guests: '8-20', img: 'chocolate' },
];

const catasEmpresa = [
  {
    icon: 'groups',
    title: 'Team Building Sensorial',
    desc: 'Dinámica de grupo diseñada para equipos de empresa. La ausencia de visión activa la escucha, la colaboración y la confianza mutua entre los participantes.',
    ideal: 'Hasta 60 personas',
    formato: 'Presencial',
  },
  {
    icon: 'business',
    title: 'Cata Corporativa con Ponencia',
    desc: 'Combina una cata a ciegas con una charla sobre accesibilidad y diversidad sensorial. Una experiencia transformadora que conecta la gastronomía con los valores de tu organización.',
    ideal: 'Hasta 120 personas',
    formato: 'Presencial / Híbrido',
  },
  {
    icon: 'celebration',
    title: 'Eventos y Celebraciones Privadas',
    desc: 'Catas personalizadas para bodas, aniversarios y celebraciones exclusivas. El menú sensorial se diseña según los gustos y la historia de los anfitriones.',
    ideal: 'A medida',
    formato: 'Presencial',
  },
  {
    icon: 'school',
    title: 'Cata Formativa para Hostelería',
    desc: 'Formación práctica para profesionales del sector: cocineros, sumilleres y personal de sala aprenden a diseñar experiencias accesibles desde la perspectiva sensorial.',
    ideal: '10-30 profesionales',
    formato: 'Presencial',
  },
];

const CatasView: React.FC = () => (
  <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-16">
    {/* Hero */}
    <section className="relative overflow-hidden rounded-2xl min-h-[480px] flex flex-col justify-end p-8 md:p-16 bg-cover bg-center mb-16" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2)), url("https://picsum.photos/seed/blind-tasting/1200/600")' }}>
      <div className="relative z-10 space-y-6 max-w-3xl">
        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit backdrop-blur-sm">Experiencia Sensorial</span>
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">Catas a Ciegas</h1>
        <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed">
          Experiencias gastronómicas diseñadas para despertar los sentidos que normalmente ignoramos. Sin vista, todo sabe diferente.
        </p>
        <Link to="/contacto" className="inline-flex bg-white text-[#1A1A1A] h-12 px-8 rounded-lg font-bold hover:bg-gray-100 shadow-lg transition-all items-center" aria-label="Reservar una cata a ciegas con Jonatan Armengol">
          Reservar Cata
        </Link>
      </div>
    </section>

    {/* Catalog */}
    <section className="mb-20" aria-labelledby="catalog-heading">
      <h2 id="catalog-heading" className="text-3xl font-black mb-8">Catálogo de Experiencias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {catas.map((c, i) => (
          <article key={i} className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url("https://picsum.photos/seed/${c.img}/800/400")` }} role="img" aria-label={`Imagen de ${c.title}`}></div>
            <div className="p-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{c.subtitle}</span>
              <h3 className="text-2xl font-bold mt-1 mb-3">{c.title}</h3>
              <p className="text-gray-500 mb-4">{c.desc}</p>
              <div className="flex gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm" aria-hidden="true">schedule</span> {c.duration}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm" aria-hidden="true">group</span> {c.guests} personas</span>
              </div>
              <Link to="/contacto" className="text-[#1A1A1A] font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform" aria-label={`Solicitar información sobre ${c.title}`}>
                Solicitar información <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Catas para Empresa */}
    <section className="mb-20" aria-labelledby="empresa-heading">
      <div className="flex items-center gap-4 mb-4">
        <span className="size-2 bg-[#1A1A1A] rounded-full animate-pulse" aria-hidden="true"></span>
        <p className="text-[#1A1A1A] font-black uppercase tracking-widest text-sm">Formato Corporativo</p>
      </div>
      <h2 id="empresa-heading" className="text-3xl md:text-4xl font-black mb-4">Catas para Empresa y Eventos</h2>
      <p className="text-gray-500 text-lg mb-10 max-w-2xl leading-relaxed">
        Experiencias diseñadas para organizaciones que quieren vivir la accesibilidad de primera mano. Una cata a ciegas es la mejor forma de entender lo que significa confiar en los sentidos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {catasEmpresa.map((item, i) => (
          <article key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex items-start gap-4 mb-4">
              <div className="size-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-2xl" aria-hidden="true">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            </div>
            <p className="text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="bg-gray-100 text-[#1A1A1A] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">group</span> {item.ideal}
              </span>
              <span className="bg-gray-100 text-[#1A1A1A] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">location_on</span> {item.formato}
              </span>
            </div>
            <Link
              to="/contacto"
              className="text-[#1A1A1A] font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform"
              aria-label={`Solicitar información sobre ${item.title}`}
            >
              Solicitar información <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </article>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-[#1A1A1A] rounded-2xl p-10 md:p-16 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-black mb-4">¿Quieres una experiencia a medida?</h2>
      <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Diseñamos catas personalizadas para eventos corporativos, team building y celebraciones privadas.</p>
      <Link to="/contacto" className="inline-flex items-center gap-3 bg-white text-[#1A1A1A] px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all" aria-label="Contactar para diseñar una cata a medida con Jonatan Armengol">
        <span className="material-symbols-outlined" aria-hidden="true">restaurant</span> Diseñar mi cata
      </Link>
    </section>
  </div>
);

export default CatasView;
