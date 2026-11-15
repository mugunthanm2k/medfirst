import { useEffect, useState } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { ORG, SERVICES } from '../data'

const field = 'w-full rounded-2xl bg-white px-4 py-3.5 text-[15px] outline-none ring-1 ring-ink/10 transition focus:ring-2 focus:ring-brand'

export default function Booking({ preset }) {
  const [f, setF] = useState({ name: '', phone: '', service: '', note: '' })
  const [err, setErr] = useState({})
  useEffect(() => { if (preset) setF((p) => ({ ...p, service: preset.name })) }, [preset])
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (f.name.trim().length < 2) er.name = 'Please enter the patient or contact name.'
    if (!/^[6-9]\d{9}$/.test(f.phone.replace(/\D/g, '').slice(-10))) er.phone = 'Enter a valid 10-digit mobile number.'
    setErr(er)
    if (Object.keys(er).length) return
    const msg = `Hello Medfirst, I would like to book a home visit.\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service || 'Not sure yet'}${f.note ? `\nDetails: ${f.note}` : ''}`
    window.open(`https://wa.me/${ORG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }

  return (
    <section id="book" className="section py-20 lg:py-28">
      <div className="grid overflow-hidden rounded-[2rem] bg-mist lg:grid-cols-[.9fr_1.1fr]">
        <div className="bg-brand p-8 text-white sm:p-12">
          <h2 className="text-4xl font-extrabold leading-tight">Book a home visit</h2>
          <p className="mt-4 max-w-sm text-lg text-white/80">Tell us what you need. Your details open in WhatsApp so our team can reply with the next steps.</p>
          <div className="mt-8 space-y-3">
            {ORG.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3.5 font-semibold ring-1 ring-white/20 transition hover:bg-white/20"><Phone size={18} /> {p.label}</a>
            ))}
          </div>
        </div>
        <form onSubmit={submit} noValidate className="space-y-4 p-6 sm:p-10">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Name</label>
            <input id="name" value={f.name} onChange={set('name')} autoComplete="name" className={field} aria-invalid={!!err.name} />
            {err.name && <p className="mt-1.5 text-sm text-rose">{err.name}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">Mobile number</label>
            <input id="phone" value={f.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" className={field} aria-invalid={!!err.phone} />
            {err.phone && <p className="mt-1.5 text-sm text-rose">{err.phone}</p>}
          </div>
          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-semibold">Service needed</label>
            <select id="service" value={f.service} onChange={set('service')} className={field}>
              <option value="">Not sure yet</option>
              {SERVICES.map((s) => <option key={s.id}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="note" className="mb-1.5 block text-sm font-semibold">Anything we should know? <span className="font-normal text-ink/50">(optional)</span></label>
            <textarea id="note" rows={3} value={f.note} onChange={set('note')} className={field} />
          </div>
          <button className="btn btn-primary w-full"><MessageCircle size={18} /> Send on WhatsApp</button>
        </form>
      </div>
    </section>
  )
}
