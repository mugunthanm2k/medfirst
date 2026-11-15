import { useRef, useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import services from '../data/services.json'
import { SITE, waLink } from '../data/site'
import { FacebookIcon, InstagramIcon, SectionHead, WhatsAppIcon } from './ui'

const Row = ({ href, icon: I, label, value, external, tone = 'bg-brand-50 text-brand' }) => (
  <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10">
    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${tone}`}><I className="h-5 w-5" /></span>
    <span className="min-w-0">
      <span className="block text-xs font-semibold text-slate-500">{label}</span>
      <span className="block truncate font-display text-base font-bold text-ink">{value}</span>
    </span>
  </a>
)

const field = 'w-full rounded-xl border-2 border-slate-200 bg-mist px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-slate-400 focus:border-brand focus:ring-0'

const fieldBad = 'border-care-600 focus:border-care-600'

const fieldFocus = 'focus:border-brand'

const NAME_RE = /^[\p{L}\p{M}]+(?:[\s][\p{L}\p{M}]+)*$/u   // letters (any language) and single spaces only
const PHONE_RE = /^(?:\+?91)?[6-9]\d{9}$/                   // Indian mobile, optional +91 / 91

// Per-field validators: return an error message, or '' when valid.
const validators = {
  name: (v) => {
    const t = v.trim()
    if (!t) return 'Name is required.'
    if (t.length < 2) return 'Name must be at least 2 letters.'
    if (!NAME_RE.test(t)) return 'Use letters and spaces only, no numbers or special characters.'
    return ''
  },
  phone: (v) => {
    const t = v.trim()
    if (!t) return 'Mobile number is required.'
    if (!/^\+?\d+$/.test(t)) return 'Use digits only (a + is allowed at the start).'
    if (!PHONE_RE.test(t)) return 'Enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.'
    return ''
  },
  service: (v) => (v ? '' : 'Please select the service you need.'),
}

// Keep typing clean: block disallowed characters as the user types / pastes.
const sanitize = {
  name: (v) => v.replace(/[^\p{L}\p{M}\s]/gu, '').replace(/\s{2,}/g, ' ').replace(/^\s+/, ''),
  phone: (v) => v.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, ''),   // digits and a leading + only
}

const FieldError = ({ id, msg }) => msg
  ? <p id={id} role="alert" className="mt-2 text-sm font-semibold text-care-600">{msg}</p>
  : null

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', service: '', note: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState({ type: '', msg: '' })   // 'success' | 'error'
  const refs = { name: useRef(null), phone: useRef(null), service: useRef(null) }

  const set = (k) => (e) => {
    const v = sanitize[k] ? sanitize[k](e.target.value) : e.target.value
    setF((p) => ({ ...p, [k]: v }))
    if (touched[k] && validators[k]) setErrors((p) => ({ ...p, [k]: validators[k](v) }))
    if (status.msg) setStatus({ type: '', msg: '' })
  }
  const blur = (k) => () => {
    setTouched((p) => ({ ...p, [k]: true }))
    if (validators[k]) setErrors((p) => ({ ...p, [k]: validators[k](f[k]) }))
  }
  const props = (k) => ({
    id: `cf-${k}`, value: f[k], onChange: set(k), onBlur: blur(k), ref: refs[k],
    'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `cf-${k}-err` : undefined,
    className: `${field} ${errors[k] ? fieldBad : fieldFocus}`,
  })

  const submit = (e) => {
    e.preventDefault()
    const next = { name: validators.name(f.name), phone: validators.phone(f.phone), service: validators.service(f.service) }
    setErrors(next)
    setTouched({ name: true, phone: true, service: true })
    const firstBad = ['name', 'phone', 'service'].find((k) => next[k])
    if (firstBad) { refs[firstBad].current?.focus(); return }

    const text = [
      'Hi Medfirst, I would like to request a call back.',
      `Name: ${f.name.trim()}`,
      `Phone: ${f.phone.trim()}`,
      `Service: ${f.service}`,
      f.note.trim() && `Details: ${f.note.trim()}`,
    ].filter(Boolean).join('\n')

    try {
      const w = window.open(waLink(text), '_blank', 'noopener')
      if (!w) throw new Error('blocked')
      setStatus({ type: 'success', msg: 'WhatsApp is opening with your details. Please press send there and we will call you back.' })
      setF({ name: '', phone: '', service: '', note: '' }); setErrors({}); setTouched({})
    } catch {
      setStatus({ type: 'error', msg: `We could not open WhatsApp (your browser may have blocked the pop-up). Please allow pop-ups and try again, or call us on ${SITE.phones[0].display}.` })
    }
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead title="Talk to Medfirst">
            Call, message or send your details. We will help you choose the right care for your family.
          </SectionHead>
          <div className="mt-8 grid gap-3">
            <Row href={waLink()} external icon={WhatsAppIcon} label="WhatsApp" value={SITE.whatsapp.display} tone="bg-[#e6f7ed] text-[#1faa55]" />
            {SITE.phones.map((p) => <Row key={p.tel} href={`tel:${p.tel}`} icon={Phone} label="Phone" value={p.display} />)}
            <Row href={`mailto:${SITE.email}`} icon={Mail} label="Email" value={SITE.email} />
            <div className="grid grid-cols-2 gap-3">
              <Row href={SITE.instagram.url} external icon={InstagramIcon} label="Instagram" value={SITE.instagram.handle} tone="bg-care-50 text-care-600" />
              <Row href={SITE.facebook.url} external icon={FacebookIcon} label="Facebook" value="Medfirst" />
            </div>
          </div>
        </div>

        <form onSubmit={submit} noValidate className="rounded-3xl bg-white p-6 shadow-[0_30px_80px_-40px_rgba(34,34,242,.35)] ring-1 ring-slate-200 sm:p-9 lg:col-span-7">
          <h3 className="font-display text-2xl font-extrabold text-ink">Request a call back</h3>
          <p className="mt-2 text-sm text-slate-600">Your details open as a WhatsApp message to our team, so you can review before sending. Fields marked <span className="text-care-600">*</span> are required.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-name" className="mb-2 block text-sm font-bold text-ink">Name <span className="text-care-600" aria-hidden="true">*</span></label>
              <input {...props('name')} type="text" autoComplete="name" maxLength={50} placeholder="Patient or contact name" required aria-required="true" />
              <FieldError id="cf-name-err" msg={errors.name} />
            </div>
            <div>
              <label htmlFor="cf-phone" className="mb-2 block text-sm font-bold text-ink">Mobile number <span className="text-care-600" aria-hidden="true">*</span></label>
              <input {...props('phone')} type="tel" inputMode="tel" autoComplete="tel" maxLength={13} placeholder="10-digit number" required aria-required="true" />
              <FieldError id="cf-phone-err" msg={errors.phone} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cf-service" className="mb-2 block text-sm font-bold text-ink">Service needed <span className="text-care-600" aria-hidden="true">*</span></label>
              <select {...props('service')} required aria-required="true">
                <option value="">Select a service</option>
                {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
              <FieldError id="cf-service-err" msg={errors.service} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cf-note" className="mb-2 block text-sm font-bold text-ink">Anything we should know? <span className="font-medium text-slate-400">(optional)</span></label>
              <textarea id="cf-note" className={field} rows={4} maxLength={500} value={f.note} onChange={set('note')} placeholder="Patient’s condition, doctor’s advice, preferred time" />
              <p className="mt-1.5 text-right text-xs text-slate-400">{f.note.length}/500</p>
            </div>
          </div>
          {status.msg && (
            <p role={status.type === 'error' ? 'alert' : 'status'}
              className={`mt-4 rounded-lg px-4 py-3 text-sm font-semibold ${status.type === 'error' ? 'bg-care-50 text-care-600' : 'bg-[#e6f7ed] text-[#14803f]'}`}>{status.msg}</p>
          )}
          <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-600 sm:w-auto">
            <WhatsAppIcon className="h-5 w-5" /> Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}