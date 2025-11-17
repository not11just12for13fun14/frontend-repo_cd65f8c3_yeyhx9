import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-50">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CTA />
      <footer className="py-10 border-t border-white/10 bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-blue-200/70">
          <p>© {new Date().getFullYear()} Lausanne Clean • Avenue de la Gare 1, 1003 Lausanne • 021 000 00 00</p>
        </div>
      </footer>
    </div>
  )
}

export default App