import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { NAV, SITE, waLink } from '../data/site'
import { Logo, WhatsAppIcon } from './ui'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    const els = NAV.map((n) => document.querySelector(n.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc) }
  }, [open])

  return (
    <header className={`sticky top-0 z-50 transition ${scrolled || open ? 'bg-white/90 shadow-[0_1px_0_rgba(10,15,60,.08)] backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20">
        <a href="#top" aria-label="Medfirst Healthcare services, home" onClick={() => setOpen(false)}><Logo /></a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${active === n.href ? 'bg-brand-50 text-brand' : 'text-slate-600 hover:text-ink'}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${SITE.phones[0].tel}`}
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-600 sm:inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call now
          </a>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-full text-ink ring-1 ring-slate-200 md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-4 font-display text-lg font-bold text-ink">{n.label}</a>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a href={`tel:${SITE.phones[0].tel}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand py-3.5 font-bold text-white"><Phone className="h-4 w-4" /> Call</a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1faa55] py-3.5 font-bold text-white"><WhatsAppIcon className="h-5 w-5" /> WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  )
}
