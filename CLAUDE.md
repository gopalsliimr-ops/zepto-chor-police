# Zepto × Chor Police — Project Notes

## Document Checklist

**Phase 1 — Discovery**
- [x] `problem-statement` — in `~/zepto-scream-research.md` §1, §5
- [x] `competitive-analysis` — in `~/zepto-scream-research.md` §2, §3
- [x] `solution-doc` — in `~/zepto-scream-research.md` §7–14 (all mechanic rounds + final decisions)
- [x] `docs/prd.md` — problem, user (Aanya), solution, success criteria, metrics, scope, constraints, deliverables

**Phase 2 — Design & Brand**
- [x] `brand-guidelines` — `docs/brand-guidelines.md` (researched from live app, Play Store, 6 case studies — colors, fonts, voice, microcopy patterns)
- [x] `user-flows` — Complete 10-screen flow table in §14
- [x] `design-system` — tokens defined in §14 + this file below
- [ ] `docs/strategy-memo.md` — deliverable, not yet written

**Phase 3 — Build**
- [ ] `docs/session-plan.md` — fill before each session
- [x] `index.html` — prototype target file (not yet built)

**Phase 4 — Deliverables (before submission)**
- [ ] Working prototype (index.html) — 10 screens, Hinglish, shareable FIR card
- [ ] One-page strategy memo (docs/strategy-memo.md)
- [ ] 30-second screen recording (landscape)

---

## What This Is

A prototype for the Zepto Builder Series Brief #01 — turn ice cream ordering into a
shareable brand moment using the "Chor Police" mechanic (craving = fugitive, rider = cop).

**Goal:** Demo a compelling, viral-ready in-app experience that Aanya (24, Mumbai) would
actually screenshot and share. Ships inside Zepto's 10-min SLA, zero ops changes.

**Stage:** Building — prototype only, no backend

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

**Format:** Plain HTML + CSS + vanilla JS — single `index.html` file
**No:** Build tools, npm, bundlers, frameworks
**Fonts:** Google Fonts CDN (DM Sans + Courier Prime)
**Download:** html2canvas via cdnjs CDN
**Deployment:** Open in browser / shareable file

---

## File Structure

```
zepto-prototype/
  index.html              — entire prototype (all 10 screens)
  CLAUDE.md               — this file
  docs/
    brand-guidelines.md   — colors, fonts, voice, microcopy (done)
    strategy-memo.md      — one-page memo (to be written)
    session-plan.md       — current session plan (to be written)
```

---

## Design Tokens
*(Updated after brand research — see docs/brand-guidelines.md for full rationale)*

| Token | Value | Use | Source |
|---|---|---|---|
| `--purple` | `#8B2FC9` | Brand purple — surfaces, banners | Observed from app |
| `--purple-dark` | `#1A0A2E` | App page background | Observed |
| `--purple-mid` | `#2D1554` | Headers, tracking map | Inferred |
| `--hot-pink` | `#FF2D55` | All CTAs, logo accent | VERIFIED from app |
| `--orange` | `#FF6B35` | Urgency states, delayed status | Observed |
| `--green` | `#22C55E` | Success / on-time status | Observed |
| `--cream` | `#F5F0E8` | FIR card background | Our choice |
| `--ink` | `#1A1A1A` | FIR card text | Our choice |
| `--white` | `#FFFFFF` | App screen text | Verified |

**Typography:**
- App screens: DM Sans, bold/800/900 (Zepto's closest confirmed font)
- FIR card: Courier Prime (monospace)

---

## 10-Screen Flow (locked — do not change without flagging)

| # | Screen | Key Copy | Action |
|---|---|---|---|
| 1 | Name entry | *"Pehle batao kaun hai — craving pakdne se pehle."* | Type name → submit |
| 2 | Push notification | *"Teri craving bhaag rahi hai. Zepto Police tayaar hai."* | Tap anywhere |
| 3 | App home | Campaign banner: *"Chor Police active hai."* | Tap banner |
| 4 | Product listing | *"Pakad lo pehle bhaag jaaye."* 4 products | Tap product |
| 5 | Product detail | *"Yeh craving zyada der nahi rukegi."* + craving meter | Add to cart |
| 6 | Cart | *"Evidence secured. Dispatch ke liye tayaar."* | Proceed to payment |
| 7 | Payment | *"Operation authorize karo."* | Confirm order |
| 8 | Order confirmed | *"Dispatch ho gaya. Rider [Name] nikal pada."* | Tap to track |
| 9 | Tracking × 5 states | 800m → 600m → 400m → 200m → PAKAD LIYA | Tap to advance |
| 10 | FIR card | Fully personalised. Download as PNG. | Share |

**Tracking state copy (exact):**
- State 1: "800 metres. Craving abhi bhi bhaag rahi hai."
- State 2: "600 metres. Rider tez hai. Craving thakne lagi."
- State 3: "400 metres. Craving ko pata chal gaya."
- State 4: "200 metres. Mat jaane dena."
- State 5: "PAKAD LIYA."

---

## FIR Card Spec

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ZEPTO POLICE STATION
   FIR No. ZPT-2026-MUM-[4 digits]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Complainant : [First Name], Mumbai
Crime       : Attempted Craving Escape
Accused     : 1x [Product Name]
Caught by   : Rider [Random Name]
Dark Store  : Mumbai Central
Time        : [7:42–9:28 range]
Verdict     : [Context-sensitive line]
              Case closed.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ZEPTO PURPLE OFFICIAL STAMP — top right]
Issued by: zepto.app
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Verdict lines:**
- After 11 PM weekday: *"Justified. Weekdays are hard."*
- After 11 PM weekend: *"Valid. Weekend nights were made for this."*
- 9–11 PM: *"Valid. Long days deserve good endings."*
- Default: *"Justified. No further questions."*

**Brand embedding in shared PNG:**
- "ZEPTO POLICE STATION" header
- ZPT- prefix on FIR number
- Zepto purple circular stamp (top-right)
- "Issued by: zepto.app" footer

---

## Dynamic Values

| Variable | Source |
|---|---|
| User name | Typed on screen 1 |
| City | Hardcoded: Mumbai |
| Rider name | Random: Ramesh / Suresh / Vikram / Ajay / Ravi |
| Delivery time | Random: 7:42–9:28 range |
| FIR number | Random 4-digit suffix |
| Verdict | Based on current time-of-day |
| Craving intensity | Random 73–98% |

---

## Products

| Name | Emoji | Price | Brand |
|---|---|---|---|
| Kool Kone | 🍦 | ₹35 | Amul |
| Magnum Gold | 🍫 | ₹120 | Hindustan Unilever |
| Cornetto Classic | 🍧 | ₹60 | Kwality Walls |
| Choco Bar | 🍨 | ₹25 | Havmor |

---

## Brief Constraints (non-negotiable)

1. 10-minute SLA is locked — never promise a specific time
2. Ships inside existing app (no separate APK)
3. Zero ops or warehouse changes
4. Branding reads as Zepto, not a sub-brand
5. No loyalty programs, AR/VR, single brand lock-ins

---

## Key Flows

1. **Full demo flow:** Name → Notification → Home → Listing → Detail → Cart → Payment → Confirmed → Tracking × 5 → FIR card → Download PNG
2. **Back navigation:** Every screen except name entry has a back button

---

## Build Rules for This Project

- Single `index.html` — no separate JS/CSS files (prototype portability)
- Mobile-first: max-width 390px, centered on desktop
- No auto-advance — every transition is user-initiated (tap)
- FIR card download: html2canvas scale 3 for high-res PNG
- Screenshot fallback if html2canvas fails

---

## Decisions

- 2026-05-25 — Mechanic: Chor Police over Tatkal/Breaking News — most original, maps to Zepto's actual product (catching cravings), reusable across all categories
- 2026-05-25 — Format: Single HTML file — maximum portability for demo/sharing/recording
- 2026-05-25 — Language: Full Hinglish throughout — matches Aanya's voice, adds to virality
- 2026-05-25 — Delivery time: Random 7:42–9:28 — realistic without creating SLA pressure
