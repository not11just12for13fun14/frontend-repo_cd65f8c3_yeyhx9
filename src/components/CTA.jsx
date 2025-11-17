import { useState } from 'react'

export default function CTA() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', phone: '', service_type: 'Autre', address: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Envoi...')
    try {
      const res = await fetch(`${baseUrl}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Merci ! Nous vous contacterons rapidement.')
        setForm({ name: '', email: '', phone: '', service_type: 'Autre', address: '', message: '' })
      } else {
        setStatus(data.detail || 'Une erreur est survenue.')
      }
    } catch (e) {
      setStatus("Impossible d'envoyer la demande.")
    }
  }

  return (
    <section id="devis" className="py-16 md:py-24 bg-slate-900/40 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Demander un devis gratuit</h2>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 bg-slate-800/60 border border-white/10 rounded-xl p-6">
          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nom complet" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white" />
          <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white" />
          <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Téléphone" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white" />
          <select value={form.service_type} onChange={e=>setForm({...form,service_type:e.target.value})} className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white">
            {['Nettoyage résidentiel','Nettoyage commercial','Fin de bail','Nettoyage de vitres','Entretien récurrent','Autre'].map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <input value={form.address} onChange={e=>setForm({...form,address:e.target.value})} placeholder="Adresse (Lausanne)" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white md:col-span-2" />
          <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Votre message" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white md:col-span-2" rows={4} />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold transition md:col-span-2">Envoyer ma demande</button>
          {status && <p className="text-blue-200 md:col-span-2">{status}</p>}
        </form>
      </div>
    </section>
  )
}