import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-2xl font-bold text-lime-400 tracking-tighter">LINK-JDA</h1>

          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-400">
            <a href="#servicios" className="hover:text-lime-400 transition-colors">Servicios</a>
            <a href="#starlink" className="hover:text-lime-400 transition-colors">Starlink</a>
            <a href="#webdev" className="hover:text-lime-400 transition-colors">Web Dev</a>
            <a href="#contacto" className="hover:text-lime-400 transition-colors">Contacto</a>
          </nav>

          <a
            href="https://wa.me/2994136709"
            target="_blank"
            className="bg-lime-400 text-black px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-48 pb-24 px-6 md:px-20 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-lime-400/10 rounded-full blur-[120px] -z-10"></div>
        <p className="text-lime-400 uppercase tracking-[0.3em] text-xs mb-6 font-semibold">
          Junín de los Andes · Patagonia
        </p>
        <h2 className="text-5xl md:text-8xl font-black leading-none mb-8">
          DESPERTAMOS SISTEMAS. <br />
          <span className="text-zinc-800" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>DESAFIAMOS LÍMITES.</span>
        </h2>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Instalación de Starlink, optimización de hardware y desarrollo de experiencias digitales de alto impacto.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(163,230,53,0.3)]">
            Escribinos tu consulta
          </button>
        </div>
      </section>

      {/* SERVICIOS TÉCNICOS */}
      <section id="servicios" className="px-6 md:px-20 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-16 inline-block border-b-4 border-lime-400 text-white">Soluciones IT</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-black">
              <h4 className="text-xl font-bold text-lime-400 mb-4 text-white">Formateo & Backup</h4>
              <p className="text-gray-400 text-sm italic mb-4">"Respaldo inteligente, sin sorpresas."</p>
              <p className="text-gray-400 text-white">Reinstalación de sistema, drivers y Office. Tu PC rindiendo como nueva.</p>
            </div>
            <div id="starlink" className="p-8 rounded-3xl border border-lime-400/30 bg-lime-400/5">
              <h4 className="text-xl font-bold text-lime-400 mb-4 text-white">Starlink 100% Funcional</h4>
              <p className="text-gray-400 text-sm italic mb-4 text-white/80">"De la caja a la conexión total."</p>
              <p className="text-gray-300 text-white">Montaje preciso, orientación óptima y red WiFi configurada en toda tu propiedad.</p>
            </div>
            <div id="webdev" className="p-8 rounded-3xl border border-white/10 bg-black">
              <h4 className="text-xl font-bold text-lime-400 mb-4 text-white">Landing Pages Efectivas</h4>
              <p className="text-gray-400 text-sm italic mb-4 text-white/80">"Webs que venden, no que estorban."</p>
              <p className="text-gray-400 text-white">Desarrollo sitios rápidos conectados a WhatsApp para emprendedores y PyMEs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© 2026 — LINK-SMA. Tecnología real. Hecho en Patagonia.</p>
      </footer>
    </div>
  );
}