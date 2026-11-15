import { Phone } from 'lucide-react'
import { SITE, waLink } from '../data/site'
import { WhatsAppIcon } from './ui'

export default function Floating() {
  return (
    <>
      {/* Phones: sticky call / WhatsApp bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 bg-white/95 p-2 pb-[max(.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(10,15,60,.12)] backdrop-blur md:hidden">
        <a href={`tel:${SITE.phones[0].tel}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-bold text-white"><Phone className="h-4 w-4" aria-hidden="true" /> Call now</a>
        <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1faa55] py-3.5 text-sm font-bold text-white"><WhatsAppIcon className="h-5 w-5" /> WhatsApp</a>
      </div>
      {/* Desktop: floating WhatsApp button */}
      <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat with Medfirst on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#1faa55] text-white shadow-xl shadow-[#1faa55]/40 transition hover:scale-105 md:grid">
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  )
}
