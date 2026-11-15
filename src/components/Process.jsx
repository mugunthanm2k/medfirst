import { STEPS } from '../data/site'
import { SectionHead } from './ui'

export default function Process() {
  return (
    <section id="process" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead title="Getting care at home is simple">
          Four steps from your first call to regular follow-ups.
        </SectionHead>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map(([title, text], i) => (
            <li key={title} className="relative">
              {i < STEPS.length - 1 && <span aria-hidden="true" className="absolute left-14 top-6 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-brand/40 to-transparent lg:block" />}
              <span className="relative grid h-12 w-12 place-items-center rounded-full bg-brand font-display text-lg font-extrabold text-white shadow-lg shadow-brand/30">{i + 1}</span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
