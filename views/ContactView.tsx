
import React, { useState, useRef } from 'react';

interface FormData {
  perfil: string;
  servicio: string;
  proyecto: string;
  presupuesto: string;
  fecha: string;
  nombre: string;
  email: string;
  telefono: string;
}

const INITIAL: FormData = {
  perfil: '', servicio: '', proyecto: '', presupuesto: '', fecha: '', nombre: '', email: '', telefono: '',
};

const ContactView: React.FC = () => {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const confirmRef = useRef<HTMLDivElement>(null);

  const set = (key: keyof FormData, val: string) => {
    setForm(prev => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors(prev => { const n = { ...prev }; delete n[key]; return n; });
  };

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!form.perfil) e.perfil = 'Selecciona quién nos contacta.';
    if (!form.servicio) e.servicio = 'Selecciona un servicio.';
    if (!form.proyecto.trim()) e.proyecto = 'Describe brevemente tu proyecto.';
    if (!form.presupuesto) e.presupuesto = 'Indica un rango de presupuesto.';
    if (!form.fecha) e.fecha = 'Selecciona una fecha estimada.';
    if (!form.nombre.trim()) e.nombre = 'Introduce tu nombre.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Introduce un email corporativo válido.';
    if (!form.telefono.trim()) e.telefono = 'Introduce un teléfono de contacto.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => confirmRef.current?.focus(), 100);
  };

  const isHighPriority = form.perfil === 'Marca' || form.perfil === 'Agencia';
  const isAccessibility = form.servicio === 'Consultoria';

  const inputCls = (key: keyof FormData) =>
    `h-14 rounded-xl border-2 px-4 transition-colors bg-gray-50/50 outline-none focus:ring-2 focus:ring-gray-300 ${errors[key] ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#1A1A1A]'}`;

  const ErrorMsg = ({ field }: { field: keyof FormData }) =>
    errors[field] ? <p className="text-sm text-red-600 font-medium mt-1" role="alert">{errors[field]}</p> : null;

  if (submitted) {
    return (
      <div className="max-w-[700px] mx-auto px-6 py-20 text-center">
        <div ref={confirmRef} tabIndex={-1} role="status" aria-live="polite" className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
          </div>
          <h2 className="text-3xl font-black text-dark-accent">¡Solicitud Enviada!</h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-md">
            Gracias por tu interés, <strong className="text-dark-accent">{form.nombre.split(' ')[0]}</strong>. Tu solicitud ha sido recibida correctamente. Jonatan o su equipo de representación se pondrán en contacto contigo en las próximas <strong>24-48 horas laborables</strong>.
          </p>
          {isHighPriority && (
            <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 text-[#1A1A1A] px-4 py-2 rounded-lg text-sm font-bold">
              <span className="material-symbols-outlined text-sm">priority_high</span> Solicitud marcada como prioridad ALTA
            </div>
          )}
          {isAccessibility && (
            <a href="#" className="flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-colors" aria-label="Descargar Dossier de Accesibilidad en formato PDF, se abre en una pestaña nueva" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">download</span> Descargar Dossier de Accesibilidad (PDF)
            </a>
          )}
          <button onClick={() => { setSubmitted(false); setForm(INITIAL); }} className="mt-4 text-[#1A1A1A] font-bold hover:underline">
            Enviar otra consulta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <p className="text-[#1A1A1A] text-sm font-bold uppercase tracking-widest mb-2">Media Kit Interactivo</p>
            <h1 className="text-dark-accent text-5xl lg:text-6xl font-black mb-4 tracking-tighter">Hablemos.</h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Expertos en comunicación, accesibilidad y presencia de marca. Conectamos talento con oportunidades globales.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-dark-accent text-xl font-bold pt-4">Contacto Directo</h3>
            <a href="#" className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-4 hover:border-[#1A1A1A] transition-colors group">
              <div className="flex items-center gap-4">
                <div className="text-[#1A1A1A] bg-gray-100 p-3 rounded-lg material-symbols-outlined">chat</div>
                <div>
                  <p className="text-dark-accent font-bold">WhatsApp Profesional</p>
                  <p className="text-gray-500 text-sm">+34 625 034 042</p>
                </div>
              </div>
              <span className="material-symbols-outlined group-hover:text-[#1A1A1A]">arrow_forward</span>
            </a>
          </div>
          {/* Steps indicator */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col gap-3">
            <p className="text-sm font-bold text-dark-accent mb-1">Pasos del formulario</p>
            {['Perfil', 'Servicio', 'Proyecto', 'Presupuesto y Fechas', 'Contacto'].map((s, i) => {
              const keys: (keyof FormData)[][] = [['perfil'], ['servicio'], ['proyecto'], ['presupuesto', 'fecha'], ['nombre', 'email', 'telefono']];
              const done = keys[i].every(k => form[k].trim() !== '');
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-colors ${done ? 'bg-[#1A1A1A] text-white' : 'bg-gray-100 text-gray-400'}`}>{i + 1}</div>
                  <span className={`text-sm font-medium ${done ? 'text-dark-accent' : 'text-gray-400'}`}>{s}</span>
                  {done && <span className="material-symbols-outlined text-green-500 text-sm ml-auto">check</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
              {Object.keys(errors).length > 0 && (
                <div role="alert" aria-live="assertive" className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm font-medium" tabIndex={-1}>
                  Por favor corrige los {Object.keys(errors).length} error(es) del formulario.
                </div>
              )}

              {/* PASO 1 */}
              <fieldset className="flex flex-col gap-3">
                <legend className="text-lg font-bold text-dark-accent mb-2">¿Quién nos contacta?</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Marca', 'Agencia', 'Medio de Comunicación', 'Institución / Organismo Público'].map(op => (
                    <label key={op} className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${form.perfil === op ? 'border-[#1A1A1A] bg-gray-50' : errors.perfil ? 'border-red-300 bg-red-50/30' : 'border-gray-200 bg-gray-50/50 hover:border-[#1A1A1A]'}`}>
                      <input type="radio" name="perfil" value={op} checked={form.perfil === op} onChange={() => set('perfil', op)} className="w-5 h-5 text-[#1A1A1A] focus:ring-gray-400" aria-required="true" />
                      <span className="font-medium">{op}</span>
                    </label>
                  ))}
                </div>
                <ErrorMsg field="perfil" />
              </fieldset>

              {/* PASO 2 */}
              <div className="flex flex-col gap-2">
                <label htmlFor="servicio" className="text-lg font-bold text-dark-accent">¿En qué servicio estás interesado?</label>
                <select id="servicio" value={form.servicio} onChange={e => set('servicio', e.target.value)} className={inputCls('servicio')} aria-required="true">
                  <option value="">Selecciona un servicio</option>
                  <option value="Publicidad">Publicidad y Branded Content (RRSS)</option>
                  <option value="Jurado">Jurado Gastronómico Profesional</option>
                  <option value="Conferencias">Conferencias y Eventos (Keynotes)</option>
                  <option value="Consultoria">Consultoría en Accesibilidad</option>
                  <option value="Experiencias">Experiencias Sensoriales (Team Building)</option>
                </select>
                <ErrorMsg field="servicio" />
              </div>

              {/* PASO 3 */}
              <div className="flex flex-col gap-2">
                <label htmlFor="proyecto" className="text-lg font-bold text-dark-accent">Cuéntanos sobre el proyecto, producto o evento.</label>
                <textarea id="proyecto" rows={4} maxLength={500} value={form.proyecto} onChange={e => set('proyecto', e.target.value)} className={`rounded-xl border-2 p-4 transition-colors bg-gray-50/50 outline-none focus:ring-2 focus:ring-gray-300 ${errors.proyecto ? 'border-red-500' : 'border-gray-200 focus:border-[#1A1A1A]'}`} placeholder="Describe brevemente el objetivo, fechas tentativas y cualquier necesidad especial..." aria-required="true" />
                <div className="flex justify-between">
                  <ErrorMsg field="proyecto" />
                  <span className="text-xs text-gray-500 font-medium ml-auto" aria-live="polite">{form.proyecto.length}/500</span>
                </div>
              </div>

              {/* PASO 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="presupuesto" className="text-lg font-bold text-dark-accent">Presupuesto Estimado</label>
                  <select id="presupuesto" value={form.presupuesto} onChange={e => set('presupuesto', e.target.value)} className={inputCls('presupuesto')} aria-required="true">
                    <option value="">Selecciona un rango</option>
                    <option value="<1000">&lt; 1.000€</option>
                    <option value="1000-3000">1.000€ - 3.000€</option>
                    <option value="3000-5000">3.000€ - 5.000€</option>
                    <option value=">5000">&gt; 5.000€</option>
                  </select>
                  <ErrorMsg field="presupuesto" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="fecha" className="text-lg font-bold text-dark-accent">Fecha estimada</label>
                  <input type="date" id="fecha" value={form.fecha} onChange={e => set('fecha', e.target.value)} className={inputCls('fecha')} aria-required="true" />
                  <ErrorMsg field="fecha" />
                </div>
              </div>

              {/* PASO 5 */}
              <fieldset className="flex flex-col gap-6">
                <legend className="text-lg font-bold text-dark-accent mb-2">Contacto Directo</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nombre" className="text-sm font-bold">Nombre Completo</label>
                    <input type="text" id="nombre" value={form.nombre} onChange={e => set('nombre', e.target.value)} className={inputCls('nombre')} placeholder="Ej. Juan Pérez" aria-required="true" />
                    <ErrorMsg field="nombre" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold">Email Corporativo</label>
                    <input type="email" id="email" value={form.email} onChange={e => set('email', e.target.value)} className={inputCls('email')} placeholder="tu@empresa.com" aria-required="true" />
                    <ErrorMsg field="email" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="telefono" className="text-sm font-bold">Teléfono</label>
                  <input type="tel" id="telefono" value={form.telefono} onChange={e => set('telefono', e.target.value)} className={inputCls('telefono')} placeholder="+34 600 000 000" aria-required="true" />
                  <ErrorMsg field="telefono" />
                </div>
              </fieldset>

              <button type="submit" className="h-16 rounded-xl bg-[#1A1A1A] text-white text-lg font-black hover:bg-black transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-black/10 mt-4 focus:ring-4 focus:ring-gray-400 outline-none">
                ENVIAR CONSULTA PROFESIONAL
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
