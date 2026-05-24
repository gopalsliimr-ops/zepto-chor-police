export interface Product {
  name: string
  emoji: string
  price: string
  brand: string
}

export interface AppState {
  userName: string
  selectedProduct: Product | null
  riderName: string
  firNumber: string
  deliveryTime: string
  cravingIntensity: number
  verdict: string
  trackingState: number
}

export const PRODUCTS: Product[] = [
  { name: 'Kool Kone',        emoji: '🍦', price: '₹35',  brand: 'Amul' },
  { name: 'Magnum Gold',      emoji: '🍫', price: '₹120', brand: 'Hindustan Unilever' },
  { name: 'Cornetto Classic', emoji: '🍧', price: '₹60',  brand: 'Kwality Walls' },
  { name: 'Choco Bar',        emoji: '🍨', price: '₹25',  brand: 'Havmor' },
]

export const TRACKING_STATES = [
  { distance: '800m', copy: '800 metres. Craving abhi bhi bhaag rahi hai.', sub: 'Rider nikal pada. Pakad lega.' },
  { distance: '600m', copy: '600 metres. Rider tez hai. Craving thakne lagi.', sub: 'Theek hai. Bas rukne do.' },
  { distance: '400m', copy: '400 metres. Craving ko pata chal gaya.',          sub: 'Pakad liya jaayega. Bas thoda aur.' },
  { distance: '200m', copy: '200 metres. Mat jaane dena.',                      sub: 'Almost. Almost.' },
  { distance: '0m',   copy: 'PAKAD LIYA. 🚨',                                  sub: 'Craving caught. Case closed.', final: true },
]

const RIDERS = ['Ramesh', 'Suresh', 'Vikram', 'Ajay', 'Ravi']

function getVerdict(): string {
  const h = new Date().getHours()
  const day = new Date().getDay()
  const isWeekday = day >= 1 && day <= 5
  if (h >= 23 && isWeekday) return 'Justified. Weekdays are hard.'
  if (h >= 23)              return 'Valid. Weekend nights were made for this.'
  if (h >= 21)              return 'Valid. Long days deserve good endings.'
  return 'Justified. No further questions.'
}

export function initDynamicValues(): Pick<AppState, 'riderName' | 'firNumber' | 'deliveryTime' | 'cravingIntensity' | 'verdict'> {
  const mins = 7 + Math.floor(Math.random() * 3)
  const secs = Math.floor(Math.random() * 60)
  return {
    riderName:        RIDERS[Math.floor(Math.random() * RIDERS.length)],
    firNumber:        'ZPT-2026-MUM-' + String(Math.floor(1000 + Math.random() * 9000)),
    deliveryTime:     `${mins} min ${String(secs).padStart(2, '0')} sec`,
    cravingIntensity: 73 + Math.floor(Math.random() * 26),
    verdict:          getVerdict(),
  }
}

const STATE_KEY = 'zcp_state'

export function saveState(state: Partial<AppState>): void {
  if (typeof window === 'undefined') return
  const existing = loadState()
  localStorage.setItem(STATE_KEY, JSON.stringify({ ...existing, ...state }))
}

export function loadState(): AppState {
  if (typeof window === 'undefined') return emptyState()
  try {
    const raw = localStorage.getItem(STATE_KEY)
    return raw ? JSON.parse(raw) : emptyState()
  } catch {
    return emptyState()
  }
}

function emptyState(): AppState {
  return {
    userName: '',
    selectedProduct: null,
    riderName: '',
    firNumber: '',
    deliveryTime: '',
    cravingIntensity: 0,
    verdict: '',
    trackingState: 0,
  }
}
