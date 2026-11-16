import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { ORG } from '../data'

const LINKS = [['Services', '#services'], ['Why Medfirst', '#why'], ['Book a visit', '#book'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled || open ? 'bg-white/90 shadow-card backdrop-blur-md' : ''}`}>
      <nav className="section flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Medfirst home">
          <img src={`${import.meta.env.BASE_URL}logo-mark.png`} alt="" className="h-9 w-auto" />
          <span className="leading-none">
            <span className="block font-display text-xl font-extrabold text-brand">Medfirst</span>
            <span className="block text-[11px] font-semibold text-ink/60">Healthcare services</span>
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map(([l, h]) => (
            <li key={h}><a href={h} className="text-[15px] font-medium text-ink/75 transition hover:text-brand">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={`tel:${ORG.phones[0].tel}`} className="btn btn-primary hidden !py-2.5 sm:inline-flex"><Phone size={16} /> {ORG.phones[0].label}</a>
          <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-ink/15 md:hidden" aria-expanded={open} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="section pb-5 md:hidden">
          <ul className="flex flex-col divide-y divide-ink/10 rounded-2xl bg-mist px-4">
            {LINKS.map(([l, h]) => (
              <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3.5 font-medium">{l}</a></li>
            ))}
          </ul>
          <a href={`tel:${ORG.phones[0].tel}`} className="btn btn-primary mt-3 w-full"><Phone size={16} /> Call {ORG.phones[0].label}</a>
        </div>
      )}
    </header>
  )
}
