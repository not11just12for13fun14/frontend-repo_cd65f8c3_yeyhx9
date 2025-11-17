import { CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-blue-300 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full text-sm mb-4">Entreprise locale à Lausanne</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Nettoyage professionnel pour votre maison et vos locaux
          </h1>
          <p className="text-blue-100/80 mt-4 text-lg">
            Ponctuel ou régulier, notre équipe assure un service impeccable dans toute la région lausannoise.
          </p>
          <div className="mt-6 space-y-2">
            {[
              'Devis gratuit en 2 minutes',
              'Équipe de confiance, assurée et formée',
              'Produits écologiques disponibles'
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-blue-100/90">
                <CheckCircle className="text-emerald-400" size={18} />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#devis" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold text-center transition">Demander un devis</a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg font-semibold text-center transition">Découvrir nos services</a>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400&auto=format&fit=crop" alt="Nettoyage à Lausanne" className="rounded-2xl border border-white/10 shadow-2xl" />
          <div className="absolute -bottom-5 -left-5 bg-slate-900/80 border border-white/10 rounded-xl p-3 text-sm text-blue-100/90">
            <p>Disponible du lundi au samedi • 7h - 19h</p>
          </div>
        </div>
      </div>
    </section>
  )
}