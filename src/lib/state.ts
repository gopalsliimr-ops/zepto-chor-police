export interface Product {
  name: string
  emoji: string
  image: string
  price: string
  brand: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface AppState {
  userName: string
  selectedProduct: Product | null
  cart: CartItem[]
  riderName: string
  firNumber: string
  deliveryTime: string
  orderTime: string
  charge: string
  cravingIntensity: number
  verdict: string
  trackingState: number
}

export function parsePrice(price: string): number {
  return parseInt(price.replace('₹', '').replace(',', '')) || 0
}

export function cartTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + parsePrice(item.product.price) * item.quantity, 0)
}

export function cartCount(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.quantity, 0)
}

export const PRODUCTS: Product[] = [
  {
    name: 'Amul Gold TriCone',
    emoji: '🍦',
    image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/4fafa37c-b668-468e-b9e7-e75903739b03/Amul-Gold-TriCone-Chocolate-Ice-Cream-Cone.jpg',
    price: '₹35',
    brand: 'Amul',
  },
  {
    name: 'Magnum Classic',
    emoji: '🍫',
    image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-5000-5000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/edafffb7-7564-4f45-a22a-5fc6f049c1c4/Kwality-Wall-s-Magnum-Classic-Ice-Cream-Stick.jpeg',
    price: '₹80',
    brand: 'Kwality Walls',
  },
  {
    name: 'Cornetto Choco',
    emoji: '🍧',
    image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-5000-5000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/f27e5c56-761f-43ef-a683-6c69a184e970/Kwality-Wall-s-Cornetto-Double-Chocolate-Cone.jpg',
    price: '₹40',
    brand: 'Kwality Walls',
  },
  {
    name: 'Havmor Zulubar',
    emoji: '🍨',
    image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1501-1501,pr-true,f-auto,q-40,dpr-2/cms/product_variant/c80ee858-cdcb-45a8-8cd5-a7fe7e03ba49/Havmor-Zulubar-Ice-Cream-Candy-Stick.jpeg',
    price: '₹48',
    brand: 'Havmor',
  },
]

export const TRACKING_STATES = [
  { distance: '800m', copy: '800 metres. Craving abhi bhi bhaag rahi hai.', sub: 'Craving ka koi chance nahi.' },
  { distance: '600m', copy: '600 metres. Rider tez hai. Craving thakne lagi.', sub: 'Craving thakne lagi. Rider aur tez.' },
  { distance: '400m', copy: '400 metres. Craving ko pata chal gaya.',          sub: '200m mein pakad lega. Hold tight.' },
  { distance: '200m', copy: '200 metres. Mat jaane dena.',                      sub: 'Almost. Almost.' },
  { distance: 'HERE', copy: 'PAKAD LIYA. 🚨',                                  sub: 'Craving caught. Case closed.', final: true },
]

const RIDERS = ['Ramesh', 'Suresh', 'Vikram', 'Ajay', 'Ravi']

function getVerdict(firstName: string, productName: string): string {
  const h = new Date().getHours()
  const day = new Date().getDay()
  const isWeekday = day >= 1 && day <= 5
  if (h >= 23 && isWeekday) return `Caught in 4K, ${firstName}. ${productName} tried to run. Rider was faster.`
  if (h >= 23)              return `Main character energy, ${firstName}. ${productName} secured. Weekend approved.`
  if (h >= 21)              return `Bestie, ${productName} ko pata tha tu aayegi. Case closed, ${firstName}.`
  return `No cap, ${firstName} — ${productName} was always getting caught tonight.`
}

function getCharge(hour: number): string {
  if (hour >= 23 || hour < 4) return 'Section 420-IC: Midnight Craving Possession'
  if (hour >= 21)             return 'Section 420-IC: Late Night Craving Misconduct'
  if (hour >= 18)             return 'Section 420-IC: Post-Dinner Craving Acquisition'
  if (hour >= 12)             return 'Section 420-IC: Afternoon Craving Indulgence'
  return                             'Section 420-IC: Unauthorized Craving'
}

export function initDynamicValues(userName = '', productName = ''): Pick<AppState, 'riderName' | 'firNumber' | 'deliveryTime' | 'orderTime' | 'charge' | 'cravingIntensity' | 'verdict'> {
  const firstName = userName.trim().split(' ')[0] || 'bestie'
  const mins = 7 + Math.floor(Math.random() * 3)
  const secs = Math.floor(Math.random() * 60)
  const now = new Date()
  const h = now.getHours()
  return {
    riderName:        RIDERS[Math.floor(Math.random() * RIDERS.length)],
    firNumber:        'ZPT-2026-MUM-' + String(Math.floor(1000 + Math.random() * 9000)),
    deliveryTime:     `${mins} min ${String(secs).padStart(2, '0')} sec`,
    orderTime:        now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase(),
    charge:           getCharge(h),
    cravingIntensity: 73 + Math.floor(Math.random() * 26),
    verdict:          getVerdict(firstName, productName),
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
    if (!raw) return emptyState()
    return { ...emptyState(), ...JSON.parse(raw) }
  } catch {
    return emptyState()
  }
}

function emptyState(): AppState {
  return {
    userName: '',
    selectedProduct: null,
    cart: [],
    riderName: '',
    firNumber: '',
    deliveryTime: '',
    orderTime: '',
    charge: '',
    cravingIntensity: 0,
    verdict: '',
    trackingState: 0,
  }
}
