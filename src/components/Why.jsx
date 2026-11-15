import { HIGHLIGHTS, SITE, waLink } from '../data/site'
import { Icon, SectionHead, WhatsAppIcon } from './ui'

export default function Why() {
  return (
    <section id="why" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12">
        <div className="self-start lg:sticky lg:top-28 lg:col-span-4">
          <SectionHead title="Why choose Medfirst" light>
            Professional and compassionate healthcare at home, ensuring patients receive dedicated care while families enjoy greater peace of mind.
          </SectionHead>
          <a href={waLink('Hi Medfirst, I would like to talk about care for my family member.')} target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition hover:bg-brand-100">
            <WhatsAppIcon className="h-5 w-5 text-[#1faa55]" /> Talk to us on WhatsApp
          </a>
        </div>

        <dl className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
          {HIGHLIGHTS.map(([icon, title, text]) => (
            <div key={title} className="flex gap-4 border-t border-white/10 py-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-care"><Icon name={icon} className="h-5 w-5" /></span>
              <div>
                <dt className="font-display text-base font-bold">{title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-white/70">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
