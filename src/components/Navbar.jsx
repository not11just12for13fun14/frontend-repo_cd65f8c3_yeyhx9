import { Phone } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-900/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
            <span className="text-blue-400 font-black">LC</span>
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">Lausanne Clean</p>
            <p className="text-xs text-blue-200/70 -mt-1">Services de nettoyage</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-blue-100/80">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#process" className="hover:text-white transition">Processus</a>
          <a href="#avis" className="hover:text-white transition">Avis</a>
          <a href="#devis" className="hover:text-white transition">Devis</a>
        </nav>
        <a href="tel:+41210000000" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition">
          <Phone size={18} /> 021 000 00 00
        </a>
      </div>
    </header>
  )
}