import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Phone, Search, X } from 'lucide-react'
import services from '../data/services.json'
import { CATEGORIES, SITE, waLink } from '../data/site'
import { Icon, SectionHead, WhatsAppIcon } from './ui'

const Badge = () => (
  <span className="rounded-full bg-care-50 px-2.5 py-1 text-xs font-bold text-care-600">Doctor’s advice</span>
)

function Drawer({ id, onClose, onGo }) {
  const idx = services.findIndex((s) => s.id === id)
  const s = services[idx]
  const panel = useRef(null)
  const body = useRef(null)

  useEffect(() => {
    const prev = document.activeElement
    document.body.style.overflow = 'hidden'
    panel.current?.querySelector('[data-close]')?.focus()
    return () => { document.body.style.overflow = ''; prev?.focus?.() }
  }, [])

  useEffect(() => { body.current?.scrollTo(0, 0) }, [id])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onGo((idx + 1) % services.length)
      if (e.key === 'ArrowLeft') onGo((idx - 1 + services.length) % services.length)
      if (e.key === 'Tab') {
        const f = panel.current.querySelectorAll('a[href],button:not([disabled])')
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [idx, onClose, onGo])

  const msg = `Hi Medfirst, I would like to book / enquire about: ${s.title}.`

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
      <div className="scrim absolute inset-0 bg-ink/55 backdrop-blur-sm" onClick={onClose} />
      <aside ref={panel} className="drawer absolute inset-x-0 bottom-0 flex max-h-[92dvh] flex-col rounded-t-3xl bg-white shadow-2xl sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[36rem] sm:rounded-l-3xl sm:rounded-tr-none">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous service" onClick={() => onGo((idx - 1 + services.length) % services.length)} className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-slate-200 hover:ring-brand/40"><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" aria-label="Next service" onClick={() => onGo((idx + 1) % services.length)} className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-slate-200 hover:ring-brand/40"><ChevronRight className="h-5 w-5" /></button>
            <span className="ml-1 text-sm font-semibold text-slate-500">{idx + 1} of {services.length}</span>
          </div>
          <button data-close type="button" aria-label="Close details" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-ink hover:bg-slate-200"><X className="h-5 w-5" /></button>
        </div>

        <div ref={body} className="flex-1 overflow-y-auto px-6 pb-8 pt-7">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white"><Icon name={s.icon} className="h-7 w-7" /></span>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h3 id="drawer-title" className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{s.title}</h3>
            {s.doctorAdvice && <Badge />}
          </div>
          <div className="mt-8 space-y-7">
            {s.benefits.map((b) => (
              <section key={b.title}>
                <h4 className="font-display text-base font-bold text-ink">{b.title}</h4>
                <ul className="mt-2.5 space-y-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {p}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 bg-white px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a href={waLink(msg)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1faa55] py-3.5 text-sm font-bold text-white hover:brightness-95"><WhatsAppIcon className="h-5 w-5" /> Enquire</a>
          <a href={`tel:${SITE.phones[0].tel}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-bold text-white hover:bg-brand-600"><Phone className="h-4 w-4" aria-hidden="true" /> Call now</a>
        </div>
      </aside>
    </div>
  )
}

export default function Services() {
  const [cat, setCat] = useState('all')
  const [q, setQ] = useState('')
  const [openIdx, setOpenIdx] = useState(null)

  const list = useMemo(() => {
    const t = q.trim().toLowerCase()
    return services.filter((s) =>
      (cat === 'all' || s.category === cat) &&
      (!t || s.title.toLowerCase().includes(t) || s.summary.toLowerCase().includes(t))
    )
  }, [cat, q])

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead title="Care for every stage, delivered at home">
          From round-the-clock nursing to specialised procedures, choose a service to see how it works for you and your family.
        </SectionHead>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="tablist" aria-label="Service categories" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
            {CATEGORIES.map((c) => (
              <button key={c.id} role="tab" aria-selected={cat === c.id} type="button" onClick={() => setCat(c.id)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition ${cat === c.id ? 'bg-ink text-white' : 'bg-mist text-slate-600 hover:bg-brand-50 hover:text-brand'}`}>
                {c.label}
              </button>
            ))}
          </div>
          <label className="relative block lg:w-72">
            <span className="sr-only">Search services</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search e.g. wound, injection"
              className="w-full rounded-full border-0 bg-mist py-3 pl-11 pr-4 text-sm text-ink ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-brand" />
          </label>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {list.map((s) => (
            <li key={s.id}>
              <button type="button" onClick={() => setOpenIdx(services.findIndex((x) => x.id === s.id))}
                className="group flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand transition group-hover:bg-brand group-hover:text-white"><Icon name={s.icon} className="h-6 w-6" /></span>
                  {s.doctorAdvice && <Badge />}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{s.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-brand">View details <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></span>
              </button>
            </li>
          ))}
        </ul>

        {list.length === 0 && (
          <div className="mt-10 rounded-2xl bg-mist p-8 text-center">
            <p className="font-semibold text-ink">No service matches “{q}”.</p>
            <button type="button" onClick={() => { setQ(''); setCat('all') }} className="mt-3 text-sm font-bold text-brand underline underline-offset-4">Show all services</button>
          </div>
        )}
      </div>

      {openIdx !== null && (
        <Drawer id={services[openIdx].id} onClose={() => setOpenIdx(null)} onGo={setOpenIdx} />
      )}
    </section>
  )
}
