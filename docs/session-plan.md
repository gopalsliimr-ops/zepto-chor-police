# Session Plan — Zepto × Chor Police — 2026-05-25

## Session Goal

Build the complete, working `index.html` — all 10 screens, Hinglish copy, craving meter animation, 5-state tracking, personalised FIR card with PNG download. Open in browser and the full demo flow works without a single broken step.

---

## Context

**Current state:** All docs done. 10 Stitch exports downloaded. Design system locked. Implementation guide written. `index.html` does not exist yet.

**Blockers from last session:** None — all decisions are locked.

**Decisions already locked:**
- Tailwind CDN (what Stitch uses) — not plain CSS
- Material Symbols icons — not emoji for UI, emoji only for products
- Exact Hinglish copy from CLAUDE.md — overrides Stitch copy
- Products: Kool Kone / Magnum Gold / Cornetto Classic / Choco Bar (with emoji)
- Stitch product images → replaced with emoji (CDN images will expire)
- html2canvas at scale 3 for FIR PNG download

---

## What We Are Building Today

| Task | Priority | Est. time | Done? |
|---|---|---|---|
| HTML shell + Tailwind config + CDN links + JS state | P0 | 20 min | [ ] |
| Screen 1 — Name Entry | P0 | 15 min | [ ] |
| Screen 2 — Push Notification | P0 | 10 min | [ ] |
| Screen 3 — App Home | P0 | 15 min | [ ] |
| Screen 4 — Product Listing | P0 | 20 min | [ ] |
| Screen 5 — Product Detail + craving bar | P0 | 20 min | [ ] |
| Screen 6 — Cart | P0 | 15 min | [ ] |
| Screen 7 — Payment | P0 | 15 min | [ ] |
| Screen 8 — Order Confirmed | P0 | 15 min | [ ] |
| Screen 9 — Tracking × 5 states + rider dot | P0 | 25 min | [ ] |
| Screen 10 — FIR Card + dynamic injection + PNG download | P0 | 30 min | [ ] |
| Full flow test: name → FIR download | P0 | 15 min | [ ] |

**Total estimated time:** ~3 hours

---

## Build Order

Build in this exact order — each screen depends on the state set by the one before it:

```
Shell → S1 → S2 → S3 → S4 → S5 → S6 → S7 → S8 → S9 → S10 → Test
```

Never skip ahead. Never test a screen in isolation before wiring it to the flow.

---

## What We Are NOT Doing Today

- Strategy memo (separate deliverable, separate session)
- Back-navigation on all screens (nice to have, not required for demo recording)
- Quantity controls in cart (visual only — no +/- logic needed)
- Real payment processing (tap to confirm, that's it)
- Bottom nav bar interactivity (Stitch added one on home — it's decorative)
- Animations beyond craving bar + rider dot + dispatch pulse
- Any screen not in the 10-screen flow

---

## Definition of Done

This session is complete when:
- [ ] `index.html` opens in browser without errors
- [ ] Screen 1: typing a name and tapping CTA advances to screen 2
- [ ] Screen 2: tapping anywhere advances to screen 3
- [ ] Screen 3: tapping the campaign banner advances to screen 4
- [ ] Screen 4: tapping any product card sets `state.selectedProduct` and advances to screen 5
- [ ] Screen 5: craving bar animates to correct value on entry; CTA advances to screen 6
- [ ] Screen 6: selected product name and price appear correctly; CTA advances to screen 7
- [ ] Screen 7: UPI is pre-selected; CTA advances to screen 8
- [ ] Screen 8: rider name shows correctly; CTA advances to screen 9
- [ ] Screen 9: 5 taps of AAGE BADHAO advance through all tracking states; rider dot moves; 5th tap goes to screen 10
- [ ] Screen 10: FIR card shows user name, product, rider name, FIR number, time, verdict all populated; Download PNG produces a file
- [ ] No console errors at any step
- [ ] Mobile width (390px) renders correctly on desktop Chrome

---

## Dependencies Check

- [x] Tailwind CDN — available
- [x] Google Fonts CDN — available
- [x] Material Symbols CDN — available
- [x] html2canvas CDN — available (cdnjs.cloudflare.com)
- [x] All 10 Stitch exports in `docs/stitch-exports/` — downloaded
- [x] Locked copy in CLAUDE.md — confirmed
- [x] Design tokens in brand-guidelines.md — confirmed
- [x] Implementation guide — written

---

## Risk Identification

| Risk | Likelihood | How to handle |
|---|---|---|
| html2canvas fails on FIR card | Low | Fallback: `alert('Screenshot karo aur share karo! 📸')` |
| Google Fonts not loaded before html2canvas runs | Medium | Wrap in `document.fonts.ready.then(...)` |
| Stitch product images break (CDN expiry) | High | Already decided: replace with emoji — do not use Stitch image URLs |
| Tailwind CDN classes not matching Stitch export class names | Low | Copy Tailwind config exactly from Stitch exports |
| FIR card rotated in Stitch (rotate-1) breaks html2canvas | Medium | Remove rotation from FIR card div before capture, restore after |

---

## Do Not Touch Today

- `docs/brand-guidelines.md` — locked
- `docs/prd.md` — locked
- `CLAUDE.md` — locked unless a product decision changes
- The 10 Stitch export files — reference only, do not edit

---

## Copy Reference (locked — do not change)

| Screen | Key copy |
|---|---|
| S1 headline | "Pehle batao kaun hai" |
| S1 subtext | "craving pakdne se pehle." |
| S1 CTA | "CHOR POLICE BULAO →" |
| S2 notification | "Teri craving bhaag rahi hai. Zepto Police tayaar hai. 🚨" |
| S3 banner headline | "Chor Police active hai." |
| S3 banner sub | "Pakad lo pehle bhaag jaaye →" |
| S4 urgency | "🚨 Pakad lo pehle bhaag jaaye" |
| S5 sub | "Yeh craving zyada der nahi rukegi." |
| S6 header | "🗂️ Evidence Secured" |
| S6 status | "Evidence secured. Dispatch ke liye tayaar." |
| S7 header | "Operation authorize karo." |
| S7 CTA | "OPERATION CONFIRM KARO →" |
| S8 headline | "Dispatch ho gaya." |
| S8 sub | "Rider nikal pada." |
| S9 CTA | "AAGE BADHAO →" |
| S10 headline | "PAKAD LIYA. 🚨" |
| S10 sub | "Tera FIR card tayyar hai. Share karo." |

---

## Tracking State Copy (exact)

| State | Distance | Main copy | Sub copy |
|---|---|---|---|
| 0 | 800m | "800 metres. Craving abhi bhi bhaag rahi hai." | "Rider nikal pada. Pakad lega." |
| 1 | 600m | "600 metres. Rider tez hai. Craving thakne lagi." | "Theek hai. Bas rukne do." |
| 2 | 400m | "400 metres. Craving ko pata chal gaya." | "Pakad liya jaayega. Bas thoda aur." |
| 3 | 200m | "200 metres. Mat jaane dena." | "Almost. Almost." |
| 4 | PAKAD LIYA | "PAKAD LIYA. 🚨" | "Craving caught. Case closed." |

---

## End of Session

**What was built:**
[Fill in at end]

**What was decided:**
[Fill in at end]

**What was left for next session:**
[Fill in at end]

**What went wrong / lesson learned:**
[Fill in at end]

---

*Session date: 2026-05-25 | Project: Zepto × Chor Police*
