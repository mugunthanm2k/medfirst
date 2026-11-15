import { MapPin } from 'lucide-react'
import { SITE } from '../data/site'
import { SectionHead } from './ui'

export default function Location() {
  return (
    <section id="location" className="bg-mist pb-20 pt-4 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead title="Find us">Visit Medfirst Nursing Healthcare Services or get directions on Google Maps.</SectionHead>
          <a href={SITE.google.url} target="_blank" rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-bold text-ink ring-1 ring-slate-200 transition hover:text-brand hover:ring-brand/40 sm:w-auto">
            <MapPin className="h-5 w-5" /> Open on Google
          </a>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl shadow-[0_30px_80px_-40px_rgba(34,34,242,.35)] ring-1 ring-slate-200">
          <iframe title="Medfirst Nursing Healthcare services on Google Maps" src={SITE.mapEmbed}
            className="block h-[22rem] w-full border-0 sm:h-[28rem]" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        </div>
      </div>
    </section>
  )
}
