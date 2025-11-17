import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900/40 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="text-blue-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Nos services</h2>
        </div>
        {loading ? (
          <p className="text-blue-100/70">Chargement...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="bg-slate-800/60 border border-white/10 rounded-xl p-6 hover:translate-y-[-2px] transition">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="text-blue-100/80 mt-2 text-sm">{s.description}</p>
                <p className="text-blue-200 mt-4 font-semibold">Dès {s.price_from} {s.unit}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}