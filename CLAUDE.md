# Zepto × Chor Police — Project Notes

## What This Is

A Next.js prototype for the Zepto Builder Series Brief #01 — turn ice cream ordering into a
shareable brand moment using the "Chor Police" mechanic (craving = fugitive, rider = cop).

**Goal:** Demo a compelling, viral-ready in-app experience that Aanya (24, Mumbai) would
actually screenshot and share. Ships inside Zepto's 10-min SLA, zero ops changes.

**Stage:** Built — prototype complete, deployed on Vercel.

---

## The Locked Mechanic

**Chor Police.** Every Zepto order is already a 10-minute chase. We just gave it a name.

- **The Chor** = your craving (appears suddenly, runs fast, disappears in 10–15 mins)
- **The Police** = Zepto's rider (dispatched instantly, chases it down)
- **The game clock** = 10-minute delivery window
- **Delivery** = craving pakad liya. Case closed.

**Memo spine:** *"Blinkit made you scream for ice cream. Zepto catches it before it runs away."*

---

## Stack

**Framework:** Next.js 15+ App Router, all pages `'use client'`
**Language:** TypeScript strict, no `any`
**Styles:** Tailwind v4 with `@theme inline` CSS custom properties
**Package manager:** pnpm
**Download:** html2canvas (dynamic import, scale 3)
**State:** localStorage via `src/lib/state.ts` (`loadState` / `saveState`)
**Deployment:** Vercel (`vercel --prod --yes`)
**Fonts:** DM Sans (app) + Courier Prime (FIR card) via Google Fonts CDN

---

## File Structure

```
zepto-prototype/
  src/
    app/
      page.tsx              — Screen 1: Name entry
      notification/page.tsx — Screen 2: Push notification lock screen
      home/page.tsx         — Screen 3: App home with campaign banner
      listing/page.tsx      — Screen 4: Product listing + multi-cart controls
      detail/page.tsx       — Screen 5: Product detail + craving meter
      cart/page.tsx         — Screen 6: Multi-item cart + bill summary
      payment/page.tsx      — Screen 7: Payment confirmation
      confirmed/page.tsx    — Screen 8: Order confirmed + locked FIR preview
      tracking/page.tsx     — Screen 9: Live tracking + inline FIR card
      fir/page.tsx          — Standalone FIR page (backup, not in main flow)
      globals.css           — Brand tokens + keyframe animations
      layout.tsx            — Root layout
    lib/
      state.ts              — AppState, PRODUCTS, TRACKING_STATES, helpers
  CLAUDE.md
  docs/
    prd.md
    brand-guidelines.md
    strategy-memo.md        — to be written
```

---

## Design Tokens (globals.css)

| Token | Value | Use |
|---|---|---|
| `background` | `#1A0A2E` | Page backgrounds |
| `surface-container` | `#27183c` | Cards, panels |
| `primary-container` | `#FF2D55` | All CTAs |
| `brand-purple` | `#8B2FC9` | FIR stamp, accents |
| `success` | `#22C55E` | Arrived state, live dot |
| `on-surface-variant` | `#B8A9C9` | Secondary text |
| `surface-fir` | `#F5F0E8` | FIR card background |
| `text-fir` | `#3b0900` | FIR card body text |
| `text-fir-label` | `#5d1900` | FIR card label text |

**CSS animations declared:** `pulse-glow`, `craving-fill`, `banner-glow`, `blink-dot`, `ticker-track`, `fade-in-up`

---

## 9-Screen Flow (locked — do not change without flagging)

| # | Screen | Key Copy / Action |
|---|--------|------------------|
| 1 | Name entry | "Your craving is already running." → `LET'S GO →` |
| 2 | Push notification | Lock screen simulation → tap anywhere |
| 3 | App home | Campaign banner: "Teri craving bhaag rahi hai." → tap banner |
| 4 | Product listing | 4 products, per-item `− qty +` pill, sticky `VIEW CART` bar |
| 5 | Product detail | Craving meter, `ADD TO CART →` / `− qty +` pill |
| 6 | Cart | All items, bill summary, `PROCEED TO PAY → ₹X` |
| 7 | Payment | UPI mock, `CONFIRM ORDER →` (triggers dynamic value generation) |
| 8 | Confirmed | Rider card, ETA, blurred+locked FIR preview → `TRACK THE ARREST →` |
| 9 | Tracking | Auto-advance 5 states → PAKAD LIYA → FIR card unlocks inline |

**FIR card is inline on Screen 9. There is no separate /fir navigation in the main flow.**

---

## FIR Card Spec (current)

```
[Dark band #3b0900]  First Information Report
                     Zepto Chor Police Dept.           🚨
─────────────────────────────────────────────────────────
FIR No.                               ZPT-2026-MUM-[4d]
─────────────────────────────────────────────────────────
Complainant
[User Name in large font]

Accused (Fugitive Craving / Cravings)
[Product Name]      ×[qty]
[Brand]
[Product Name 2]    ×[qty]   ← if multiple items ordered
[Brand 2]
─────────────────────────────────────────────────────────
Charge
Section 420-IC: [time-sensitive funny charge]
─────────────────────────────────────────────────────────
Arresting Officer    Time of Crime
[Rider Name]         [HH:MM AM/PM]

Craving Intensity    Date
[73–98]%             [DD/MM/YYYY]
─────────────────────────────────────────────────────────
Verdict
"[time-of-day personalised line]"
─────────────────────────────────────────────────────────
Issued by: zepto.app    [ZEPTO POLICE stamp, rotated -5°]

100% unofficial. No actual police involved.
```

**Price is NOT shown on the FIR card.** Removed to encourage sharing.

---

## Dynamic Values

| Variable | Source |
|---|---|
| User name | Typed on screen 1 |
| Rider name | Random: Ramesh / Suresh / Vikram / Ajay / Ravi |
| FIR number | `ZPT-2026-MUM-` + random 4-digit suffix |
| Delivery time | Random: 7–9 mins + random seconds |
| Order time | Current time captured at payment confirm |
| Charge | Time-based: midnight / late night / evening / afternoon / default |
| Craving intensity | Random: 73–98% |
| Verdict | 4 conditions: weekday after 11pm / weekend after 11pm / 9–11pm / default |

All dynamic values generated in `initDynamicValues()` in `state.ts`, called from `payment/page.tsx`.

---

## Products (current)

| Name | Emoji | Price | Brand |
|---|---|---|---|
| Amul Gold TriCone | 🍦 | ₹35 | Amul |
| Magnum Classic | 🍫 | ₹80 | Kwality Walls |
| Cornetto Choco | 🍧 | ₹40 | Kwality Walls |
| Havmor Zulubar | 🍨 | ₹48 | Havmor |

Real product images loaded from Zepto CDN (`cdn.zeptonow.com`). See `state.ts` PRODUCTS array for full URLs.

---

## Tracking States (exact)

| Index | Distance | Copy | Notes |
|---|---|---|---|
| 0 | 800m | "Craving spotted. Rider on the case." | Auto-advances after 3500ms |
| 1 | 600m | "The craving is fast. Rider is faster." | Auto-advances |
| 2 | 400m | "Craving looking for an exit. There isn't one." | Auto-advances |
| 3 | 200m | "It's over. The craving just doesn't know it yet." | Auto-advances |
| 4 | HERE | "PAKAD LIYA. 🚨" | `final: true` — FIR unlocks |

Chase strip: cop emoji moves right (COP_LEFT array), ice cream fixed at right. Skip button shown during auto-advance.

---

## Build Rules for This Project

- `loadState()` always merges with `emptyState()` — prevents blank screen on old localStorage data
- All date/time/localStorage reads inside `useEffect` — prevents hydration mismatches
- `selectedProduct` set to `cart[0].product` before navigating to payment
- html2canvas: dynamic import, `scale: 3`, `backgroundColor: '#F5F0E8'`, `el.style.transform = 'none'` before capture
- Back button on every screen
- CTAs are English. Body copy and flavour text are Hinglish.
- FIR card must show "100% unofficial. No actual police involved." disclaimer

---

## Brief Constraints (non-negotiable)

1. 10-minute SLA is locked — never promise a specific time
2. Ships inside existing app (no separate APK)
3. Zero ops or warehouse changes
4. Branding reads as Zepto, not a sub-brand
5. No loyalty programs, AR/VR, single brand lock-ins

---

## Decisions

- 2026-05-25 — Mechanic: Chor Police — maps to Zepto's actual product (catching cravings), reusable across categories
- 2026-05-25 — Stack: Next.js + Tailwind + Vercel (portability + deployment speed)
- 2026-05-25 — Language: Hinglish flavour text, English CTAs — Aanya's voice without friction. Do not convert Hinglish to English — the absurdity is the product.
- 2026-05-25 — FIR inline on tracking: revealed as reward after 5 tracking states — no navigation needed
- 2026-05-25 — Multi-item cart: supports adding multiple products before checkout
- 2026-05-25 — Price removed from FIR card: reduces friction to sharing (no one wants to share their spend)
- 2026-05-25 — Auto-advance tracking: 3500ms per state, Skip button for demos — keeps the chase feeling alive
- 2026-05-25 — Charge field: time-sensitive IPC joke ("Section 420-IC: Midnight Craving Possession") — deepens personalisation
- 2026-05-25 — FIR card accused section: shows all cart items (name + brand + ×qty), no emojis — cleaner document look
- 2026-05-25 — "FIR" not "Craving Report": FIR is a real Indian legal format — the absurdity lands because everyone knows what it is. Generic rename kills the joke.
- 2026-05-25 — "Tera" not "Aap": intimate Gen-Z tone, not formal. "Tera FIR card tayyar hai" gets forwarded. "Aapka" does not.
- 2026-05-25 — Tracking copy: cricket-commentator style — funny, escalating, matches the absurdist tone
- 2026-05-25 — Name entry tagline: "Your craving is already running." — single line, creates urgency before user even types

## Deliverables Remaining

- [ ] 30-second screen recording (landscape, phone browser)
- [ ] `docs/strategy-memo.md` — one-page opinionated memo
- [ ] Tone test: show to one person in Aanya's cohort
