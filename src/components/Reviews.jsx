import { Star, Quote } from 'lucide-react'
import { SITE } from '../data/site'
import { GOOGLE_RATING, REVIEWS } from '../data/reviews'
import { SectionHead } from './ui'

const Stars = ({ n }) => (
  <div className="flex gap-0.5" role="img" aria-label={`${n} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className={`h-4 w-4 ${i <= n ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
    ))}
  </div>
)

export default function Reviews() {
  if (!REVIEWS.length) return null
  const { score, count } = GOOGLE_RATING
  return (
    <section id="reviews" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead title="Trusted by families">What patients and families say about us on Google.</SectionHead>
          {score && (
            <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 ring-1 ring-slate-200">
              <span className="font-display text-4xl font-extrabold text-ink">{score}</span>
              <div>
                <Stars n={Math.round(score)} />
                {count && <p className="mt-1 text-sm text-slate-600">{count} Google reviews</p>}
              </div>
            </div>
          )}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure key={i} className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200 shadow-[0_30px_80px_-50px_rgba(34,34,242,.35)]">
              <Quote className="h-7 w-7 text-brand/30" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-700">{r.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 font-display font-extrabold text-brand">{r.name?.[0]?.toUpperCase()}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold text-ink">{r.name}</span>
                  <span className="block text-xs text-slate-500">{r.date || 'Google review'}</span>
                </span>
                <Stars n={r.rating ?? 5} />
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={SITE.google.url} target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-bold text-ink ring-1 ring-slate-200 transition hover:text-brand hover:ring-brand/40">
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}