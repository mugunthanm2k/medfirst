import { NAV, SITE } from '../data/site'
import { FacebookIcon, InstagramIcon, Logo } from './ui'

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-14 text-white md:pb-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed text-white/70">Compassionate, doctor-guided nursing and home care for patients and families.</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-white/80">
            {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>)}
          </nav>
          <div className="text-sm text-white/80">
            <a href={`mailto:${SITE.email}`} className="block hover:text-white">{SITE.email}</a>
            {SITE.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="mt-1 block hover:text-white">{p.display}</a>)}
            <div className="mt-4 flex gap-3">
              <a href={SITE.instagram.url} target="_blank" rel="noreferrer" aria-label="Medfirst on Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"><InstagramIcon className="h-5 w-5" /></a>
              <a href={SITE.facebook.url} target="_blank" rel="noreferrer" aria-label="Medfirst on Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"><FacebookIcon className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} {SITE.name}. Nursing procedures are carried out as per doctor’s advice.</p>
      </div>
    </footer>
  )
}
