import {
  Accessibility, Bandage, Syringe, Clock, ClipboardCheck, HeartHandshake, Activity, Droplets, Wind, Soup,
  CircleDot, Droplet, ShieldPlus, Home, Wallet, Users, UserRound, BadgeCheck, Stethoscope, HeartPulse,
  ShieldCheck, Repeat, ClipboardList, BedDouble, UsersRound, Heart, Circle,
} from 'lucide-react'

const ICONS = {
  Accessibility, Bandage, Syringe, Clock, ClipboardCheck, HeartHandshake, Activity, Droplets, Wind, Soup,
  CircleDot, Droplet, ShieldPlus, Home, Wallet, Users, UserRound, BadgeCheck, Stethoscope, HeartPulse,
  ShieldCheck, Repeat, ClipboardList, BedDouble, UsersRound, Heart,
}

// Resolve a lucide icon by name (names come from the data files).
export const Icon = ({ name, ...props }) => {
  const C = ICONS[name] || Circle
  return <C aria-hidden="true" {...props} />
}

export const Logo = ({ light = false, className = '' }) => (
  <span className={`inline-flex items-center gap-3 ${className}`}>
    <img src="/logo-mark.png" alt="" className="h-10 w-auto" />
    <span className="leading-none">
      <span className={`block font-display text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-brand'}`}>Medfirst</span>
      <span className={`mt-1 block text-[11px] font-semibold tracking-wide ${light ? 'text-white/70' : 'text-slate-500'}`}>Healthcare services</span>
    </span>
  </span>
)

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.16l-.3-.18-3.08.89.9-3-.2-.31a8.2 8.2 0 1 1 6.88 3.76Zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.85.83-.85 2.03s.87 2.35.99 2.52c.12.16 1.71 2.6 4.14 3.65 1.53.66 2.13.72 2.9.6.47-.07 1.46-.6 1.66-1.17.2-.57.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
  </svg>
)

export const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const FacebookIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.2H8V13.5h2.5V21h3Z" />
  </svg>
)

export const SectionHead = ({ title, children, className = '', light = false }) => (
  <div className={`max-w-2xl ${className}`}>
    <h2 className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
    {children && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/70' : 'text-slate-600'}`}>{children}</p>}
  </div>
)
