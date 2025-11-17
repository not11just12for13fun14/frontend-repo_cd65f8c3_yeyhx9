import { ClipboardCheck, Leaf, Shield } from 'lucide-react'

export default function Process() {
  const steps = [
    { icon: ClipboardCheck, title: 'Devis express', desc: "Envoyez votre demande en 2 minutes via le formulaire." },
    { icon: Shield, title: 'Intervention fiable', desc: "Équipe professionnelle, formée et assurée." },
    { icon: Leaf, title: 'Résultat impeccable', desc: "Produits respectueux et finitions soignées." },
  ]

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Comment ça marche</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="bg-slate-800/60 border border-white/10 rounded-xl p-6">
              <s.icon className="text-blue-400 mb-3" />
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-blue-100/80 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}