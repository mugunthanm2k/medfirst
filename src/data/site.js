export const SITE = {
  name: 'Medfirst Healthcare Services',
  email: 'info@themedfirst.com',
  whatsapp: { display: '93637 41508', number: '919363741508' },
  phones: [
    { display: '90870 41508', tel: '+919087041508' },
    { display: '96001 41337', tel: '+919600141337' },
  ],
  // Replace with the real page links when you have them.
  instagram: { handle: 'medfirst_nursing_homecare', url: 'https://www.instagram.com/medfirst_nursing_homecare/' },
  google: { url: 'https://share.google/wsmTZcerp2Ek83aOd' },
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.371973293657!2d80.0946808087372!3d13.045664023190207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528bc090acfd3f%3A0x5ea0ed51fa980c78!2sMedfirst%20Nursing%20Healthcare%20services!5e0!3m2!1sen!2sin!4v1794472796788!5m2!1sen!2sin',
  facebook: { name: 'Medfirst Healthcare Services', url: 'https://www.facebook.com/profile.php?id=61580426961260' },
}

export const waLink = (text = '') =>
  `https://wa.me/${SITE.whatsapp.number}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Why Medfirst', href: '#why' },
  { label: 'How it works', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const CATEGORIES = [
  { id: 'all', label: 'All services' },
  { id: 'nursing', label: 'Home nursing & recovery' },
  { id: 'elderly-disability', label: 'Elderly & disability care' },
  { id: 'monitoring', label: 'Monitoring & tests' },
  { id: 'procedures', label: 'Nursing procedures' },
]

// From the "Highlights" sheet.
export const HIGHLIGHTS = [
  ['Home', 'Care at Your Doorstep', 'Avoid the stress of travelling to hospitals or clinics. Our professional medical team comes directly to your home.'],
  ['Wallet', 'Cost-Effective Support', 'Save money by cutting down on repeated hospital visits and unnecessary expenses.'],
  ['Users', 'Healing with Family', 'Receive treatment in the comfort of your home, surrounded by your loved ones for faster recovery.'],
  ['UserRound', 'Personalized Attention', 'One-to-one care ensures every patient’s unique needs are fully addressed.'],
  ['BadgeCheck', 'Trusted Professionals', 'Our experienced nurses and caregivers provide safe, reliable, and compassionate medical support.'],
  ['Clock', '24/7 Availability', 'Round-the-clock medical support whenever you need it.'],
  ['Stethoscope', 'Doctor-Guided Care', 'Treatments and nursing procedures are done under professional medical advice.'],
  ['HeartPulse', 'Skilled Nurses & Caregivers', 'Experienced staff trained to handle complex medical needs.'],
  ['ShieldCheck', 'Safe & Hygienic Care', 'Hospital-standard safety practices followed at home.'],
  ['Repeat', 'Continuity of Care', 'Regular follow-ups to track recovery and avoid readmissions.'],
  ['ClipboardList', 'Customized Care Plans', 'Services tailored for each patient’s medical condition and lifestyle.'],
  ['BedDouble', 'Comfort of Home', 'Faster recovery in a familiar and stress-free environment.'],
  ['UsersRound', 'Family Involvement', 'Loved ones stay informed and actively involved in care decisions.'],
  ['Heart', 'Holistic Support', 'From medical procedures to emotional well-being, we care for the whole person.'],
]

export const STEPS = [
  ['Call or WhatsApp us', 'Tell us who needs care and what kind of support you are looking for.'],
  ['Share the doctor’s advice', 'Injections, tube care, catheter care and other procedures are done as your doctor advises.'],
  ['Get a customized care plan', 'We tailor the service to the patient’s medical condition, routine and lifestyle.'],
  ['Care at home, with follow-ups', 'A trained nurse or caregiver visits, and your family stays informed through regular follow-ups.'],
]
