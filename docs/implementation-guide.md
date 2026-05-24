# Implementation Guide — Zepto × Chor Police Prototype

*Source of truth for every build decision. If code and this doc conflict, fix the code.*

---

## Architecture Overview

**Pattern:** Single HTML file — all 10 screens as `<div id="screen-X">` blocks. One visible at a time, rest hidden with `display: none`.

**Data flow:** User input → JS state object → DOM injection → screen transition

**No backend.** No auth. No API calls after initial CDN load. Everything runs client-side.

---

## File Structure

```
zepto-prototype/
├── index.html                    — entire prototype, all 10 screens
├── CLAUDE.md                     — project config and locked decisions
└── docs/
    ├── prd.md                    — full PRD
    ├── brand-guidelines.md       — design system source of truth
    ├── implementation-guide.md   — this file
    ├── session-plan.md           — current session plan
    ├── final-push.md             — submission checklist
    └── stitch-exports/           — Stitch HTML for each screen (reference only)
        ├── 01-name-entry.html
        ├── 02-push-notification.html
        ├── 03-app-home.html
        ├── 04-product-listing.html
        ├── 05-product-detail.html
        ├── 06-cart.html
        ├── 07-payment.html
        ├── 08-order-confirmed.html
        ├── 09-tracking-400m.html
        └── 10-fir-card.html
```

---

## CDN Stack

| CDN | Purpose | Tag |
|---|---|---|
| `cdn.tailwindcss.com` | Utility CSS (what Stitch uses) | `<script src="...">` |
| Google Fonts — DM Sans | App screen typography | `<link>` |
| Google Fonts — Courier Prime | FIR card typography | `<link>` |
| Google Fonts — Material Symbols | Icons throughout | `<link>` |
| cdnjs — html2canvas | FIR card PNG download | `<script src="...">` |

**Why Tailwind CDN:** Stitch generated all screens using Tailwind with a custom config. Using the same system gives us a consistent design baseline without rewriting every class. The CDN version is fine for a prototype.

**No npm, no bundler, no build step.** Open `index.html` in a browser and it works.

---

## Tailwind Config (shared across all screens)

```javascript
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background":            "#1b0b2f",
        "surface":               "#1b0b2f",
        "surface-container":     "#27183c",
        "surface-container-high":"#322247",
        "surface-bright":        "#423257",
        "primary-container":     "#ff5167",   // hot pink — CTAs only
        "on-primary-container":  "#ffffff",
        "on-background":         "#eedcff",
        "on-surface":            "#eedcff",
        "on-surface-variant":    "#e6bcbd",
        "tertiary-container":    "#ff5625",
        "outline":               "#ad8888",
        "outline-variant":       "#5d3f40",
      },
      fontFamily: {
        "body-sm":        ["DM Sans"],
        "button":         ["DM Sans"],
        "body-lg":        ["DM Sans"],
        "label-mono":     ["Courier Prime"],
        "headline-md":    ["DM Sans"],
        "display-lg-mobile": ["DM Sans"],
      },
      fontSize: {
        "body-sm":     ["14px", { lineHeight: "1.4", fontWeight: "400" }],
        "button":      ["16px", { lineHeight: "1",   fontWeight: "700" }],
        "body-lg":     ["18px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-mono":  ["12px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.2", fontWeight: "800" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.1", fontWeight: "900" }],
      },
      spacing: {
        "margin-mobile": "16px",
        "gutter":        "16px",
        "xs":   "4px",
        "sm":   "12px",
        "md":   "24px",
        "lg":   "40px",
        "xl":   "64px",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg":      "0.5rem",
        "xl":      "0.75rem",
        "full":    "9999px",
      }
    }
  }
}
```

---

## JS State Object

Single global object populated as the user moves through the flow:

```javascript
const state = {
  userName:         '',          // captured on screen 1
  selectedProduct:  null,        // { name, emoji, price, brand } — set on screen 4
  riderName:        '',          // randomised on load
  firNumber:        '',          // randomised on load: ZPT-2026-MUM-XXXX
  deliveryTime:     '',          // randomised on load: 7m 42s – 9m 28s
  cravingIntensity: 0,           // randomised on load: 73–98
  verdict:          '',          // computed from time-of-day on load
  trackingState:    0,           // 0–4, incremented by AAGE BADHAO
}
```

**Randomised on page load** (not on each screen show):
```javascript
function initState() {
  const riders = ['Ramesh', 'Suresh', 'Vikram', 'Ajay', 'Ravi']
  state.riderName        = riders[Math.floor(Math.random() * riders.length)]
  state.firNumber        = 'ZPT-2026-MUM-' + String(Math.floor(1000 + Math.random() * 9000))
  const mins             = 7 + Math.floor(Math.random() * 3)
  const secs             = Math.floor(Math.random() * 60)
  state.deliveryTime     = `${mins} min ${String(secs).padStart(2,'0')} sec`
  state.cravingIntensity = 73 + Math.floor(Math.random() * 26)
  const h                = new Date().getHours()
  state.verdict = h >= 23 && [0,1,2,3,4,5,6].includes(new Date().getDay())
    ? 'Justified. Weekdays are hard.'
    : h >= 23
    ? 'Valid. Weekend nights were made for this.'
    : h >= 21
    ? 'Valid. Long days deserve good endings.'
    : 'Justified. No further questions.'
}
```

---

## Screen Navigation

```javascript
function showScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none')
  document.getElementById('screen-' + n).style.display = 'flex'
  window.scrollTo(0, 0)
}
```

Each screen div: `<div id="screen-1" class="screen" style="display:none">...</div>`

Screen 1 shown on load. Every CTA calls `showScreen(n+1)`.

---

## 10-Screen Map

| Screen | ID | Source | Key JS |
|---|---|---|---|
| Name Entry | `screen-1` | `01-name-entry.html` | Capture `state.userName` on submit |
| Push Notification | `screen-2` | `02-push-notification.html` | Inject `state.userName` in copy |
| App Home | `screen-3` | `03-app-home.html` | Static — tap banner → screen 4 |
| Product Listing | `screen-4` | `04-product-listing.html` | Tap product → set `state.selectedProduct` → screen 5 |
| Product Detail | `screen-5` | `05-product-detail.html` | Inject product name, animate craving bar |
| Cart | `screen-6` | `06-cart.html` | Inject product name + price |
| Payment | `screen-7` | `07-payment.html` | Static — confirm → screen 8 |
| Order Confirmed | `screen-8` | `08-order-confirmed.html` | Inject `state.riderName` |
| Tracking | `screen-9` | `09-tracking-400m.html` | 5 internal states, rider dot moves |
| FIR Card | `screen-10` | `10-fir-card.html` | Inject all state values, html2canvas download |

---

## Products (locked — CLAUDE.md)

```javascript
const PRODUCTS = [
  { name: 'Kool Kone',        emoji: '🍦', price: '₹35',  brand: 'Amul' },
  { name: 'Magnum Gold',      emoji: '🍫', price: '₹120', brand: 'Hindustan Unilever' },
  { name: 'Cornetto Classic', emoji: '🍧', price: '₹60',  brand: 'Kwality Walls' },
  { name: 'Choco Bar',        emoji: '🍨', price: '₹25',  brand: 'Havmor' },
]
```

Stitch generated different product names and AI images. **Override with locked products.** Emoji replaces the AI images — no expired CDN URLs.

---

## Tracking Screen — 5 States

Single `screen-9` div. `state.trackingState` tracks position 0–4. Each tap of AAGE BADHAO calls `advanceTracking()`.

```javascript
const TRACKING_STATES = [
  { distance: '800m', copy: '800 metres. Craving abhi bhi bhaag rahi hai.', sub: 'Rider nikal pada. Pakad lega.' },
  { distance: '600m', copy: '600 metres. Rider tez hai. Craving thakne lagi.', sub: 'Theek hai. Bas rukne do.' },
  { distance: '400m', copy: '400 metres. Craving ko pata chal gaya.', sub: 'Pakad liya jaayega. Bas thoda aur.' },
  { distance: '200m', copy: '200 metres. Mat jaane dena.', sub: 'Almost. Almost.' },
  { distance: '0m',   copy: 'PAKAD LIYA. 🚨', sub: 'Craving caught. Case closed.', final: true },
]

function advanceTracking() {
  if (state.trackingState < 4) {
    state.trackingState++
    renderTrackingState()
  } else {
    showScreen(10)
    renderFIRCard()
  }
}
```

Rider dot position: `left: ${[10, 28, 50, 72, 88][state.trackingState]}%` with `transition: left 0.8s ease-out`.

---

## FIR Card — Dynamic Injection

```javascript
function renderFIRCard() {
  document.getElementById('fir-complainant').textContent = state.userName + ', Mumbai'
  document.getElementById('fir-accused').textContent    = '1x ' + state.selectedProduct.name
  document.getElementById('fir-rider').textContent      = 'Rider ' + state.riderName
  document.getElementById('fir-number').textContent     = state.firNumber
  document.getElementById('fir-time').textContent       = state.deliveryTime
  document.getElementById('fir-verdict').textContent    = state.verdict
}
```

---

## FIR Card Download

```javascript
function downloadFIR() {
  const card = document.getElementById('fir-card')
  html2canvas(card, {
    scale: 3,
    backgroundColor: '#F5F0E8',
    useCORS: true,
    logging: false,
  }).then(canvas => {
    const link       = document.createElement('a')
    link.download    = 'zepto-fir-' + state.firNumber + '.png'
    link.href        = canvas.toDataURL('image/png')
    link.click()
  }).catch(() => {
    alert('Screenshot karo aur share karo! 📸')
  })
}
```

---

## Copy Corrections (Stitch → Locked)

Stitch generated slightly different copy. These must be overridden:

| Screen | Stitch copy | Locked copy (CLAUDE.md) |
|---|---|---|
| Screen 1 CTA | "CALL CHOR POLICE" | "CHOR POLICE BULAO →" |
| Screen 2 body | Generic notification | "Teri craving bhaag rahi hai. Zepto Police tayaar hai." |
| Screen 4 urgency | Missing | "Pakad lo pehle bhaag jaaye" |
| Screen 9 main copy | "The craving has been spotted" | "400 metres. Craving ko pata chal gaya." |
| Screen 9 CTA | "NEXT STAGE" | "AAGE BADHAO →" |
| FIR complainant | "Anil K." (hardcoded) | Dynamic: `state.userName + ', Mumbai'` |
| FIR verdict | "GUILTY OF MASSIVE SAVINGS" | Time-based dynamic verdict |

---

## Reusable CSS Utilities (add once in `<style>`)

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.map-pattern {
  background-image: radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}
.pulse-glow {
  animation: pulse-glow 2s infinite;
}
@keyframes pulse-glow {
  0%   { box-shadow: 0 0 0 0   rgba(255, 81, 103, 0.7); }
  70%  { box-shadow: 0 0 0 15px rgba(255, 81, 103, 0); }
  100% { box-shadow: 0 0 0 0   rgba(255, 81, 103, 0); }
}
.craving-bar-fill {
  animation: craving-fill 1.5s ease-out forwards;
}
@keyframes craving-fill {
  from { width: 0%; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Known Issues from Stitch Exports

| Issue | Impact | Fix |
|---|---|---|
| Product images on Google CDN | Will expire / may not load cross-origin | Replace with emoji — already in PRODUCTS array |
| Hardcoded names on FIR card ("Anil K.") | Breaks personalisation | Inject from `state.userName` |
| Stitch generated wrong Hinglish copy | Off-brand | Override with CLAUDE.md locked copy |
| Screen 9 Stitch export is only 400m state | Incomplete | Build all 5 states from TRACKING_STATES array |
| html2canvas not in Stitch exports | Missing download | Add CDN + `downloadFIR()` function |

---

## Performance Targets

- Load under 3s on 4G (CDN fonts + Tailwind are the main payload)
- No JS errors in console
- FIR card renders correctly at 3× scale
- Fonts loaded before html2canvas runs (add `document.fonts.ready.then(downloadFIR)`)

---

*Last updated: 2026-05-25 | Author: Gopal Singh Lora*
