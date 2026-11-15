import { Phone, Clock, Stethoscope, ShieldCheck } from 'lucide-react'
import { SITE, waLink } from '../data/site'
import { WhatsAppIcon } from './ui'

const Ecg = ({ className = '' }) => (
  <svg viewBox="0 0 600 120" fill="none" className={className} aria-hidden="true" preserveAspectRatio="none">
    <path className="ecg-line" pathLength="1" stroke="#f0669f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      d="M0 62H170L190 62L206 34L226 100L248 8L272 108L292 62H350L366 52L382 62H600" />
  </svg>
)

const Chip = ({ icon: I, children, className }) => (
  <div className={`absolute flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-ink shadow-xl shadow-brand/15 ring-1 ring-brand/10 ${className}`}>
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand"><I className="h-4 w-4" aria-hidden="true" /></span>
    {children}
  </div>
)

export default function Hero() {
  return (
    <section id="top" className="relative -mt-16 overflow-hidden pt-16 sm:-mt-20 sm:pt-20
      bg-[radial-gradient(60%_55%_at_88%_8%,#e4e6ff,transparent),radial-gradient(45%_45%_at_0%_100%,#ffe6f0,transparent)]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand ring-1 ring-brand/15">
            <span className="h-2 w-2 rounded-full bg-care" aria-hidden="true" /> Home nursing, available 24/7
          </p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
            Hospital-standard nursing care, in the comfort of your home.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Skilled nurses and caregivers come to your doorstep. Every procedure follows your doctor’s advice, so recovery happens
            surrounded by the people you love.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${SITE.phones[0].tel}`} className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-600">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call {SITE.phones[0].display}
            </a>
            <a href={waLink('Hi Medfirst, I would like to know more about your home care services.')} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-ink ring-1 ring-slate-200 transition hover:ring-brand/40">
              <WhatsAppIcon className="h-5 w-5 text-[#1faa55]" /> Chat on WhatsApp
            </a>
          </div>
          <a href="#services" className="mt-8 inline-block text-sm font-bold text-brand underline-offset-4 hover:underline">See all 13 services</a>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative grid aspect-[5/5.4] place-items-center overflow-hidden rounded-[2.5rem] bg-white shadow-[0_40px_90px_-40px_rgba(34,34,242,.45)] ring-1 ring-brand/10">
            <img src="/logo-mark.png" alt="Medfirst logo: a caring hand cradling a heart with a pulse line" className="mb-10 w-[56%]" />
            <Ecg className="absolute inset-x-0 bottom-[13%] h-20 w-full" />
          </div>
          <Chip icon={Clock} className="left-3 top-6 sm:-left-5">24/7 availability</Chip>
          <Chip icon={Stethoscope} className="bottom-[24%] right-3 sm:-right-5">Doctor-guided care</Chip>
          <Chip icon={ShieldCheck} className="bottom-5 left-3 sm:-left-5">Safe &amp; hygienic care</Chip>
        </div>
      </div>
    </section>
  )
}
