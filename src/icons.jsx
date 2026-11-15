import {
  Accessibility, Bandage, Syringe, Clock, BedDouble, HeartHandshake, Activity, Droplets, Wind, Pipette,
  ShieldPlus, Stethoscope, Cross, Home, BadgeCheck, ShieldCheck, UserRound, Wallet, Users, Repeat,
  ClipboardList, MessageCircleHeart, Sparkles, HeartPulse,
} from 'lucide-react'
export const ICONS = {
  Accessibility, Bandage, Syringe, Clock, BedDouble, HeartHandshake, Activity, Droplets, Wind, Pipette,
  ShieldPlus, Stethoscope, Cross, Home, BadgeCheck, ShieldCheck, UserRound, Wallet, Users, Repeat,
  ClipboardList, MessageCircleHeart, Sparkles, HeartPulse,
}
export const Icon = ({ name, ...p }) => { const C = ICONS[name] || HeartPulse; return <C {...p} /> }
