# Brand Guidelines — Zepto × Chor Police

> Speed is not a number. It is a chase. Every design decision makes the chase feel real.

**Source of truth rule:** if an AI coder asks "what font / what color / what spacing / what copy," the answer is in this file. If it isn't, the answer is "stop and ask." Never default to Tailwind or shadcn values.

**Decision Rationale Requirement:** every non-obvious choice carries a one-line defense.
> We chose [X] because [Y]. We rejected [Z] because [W].

---

## Table of Contents

1. The Brief
2. Surface Declaration
3. Visual Idea
4. Typography
5. Color
6. Spacing & Shape
7. Motion
8. Iconography
9. Information Hierarchy
10. States
11. Data & Formatting
12. Accessibility
13. Microcopy
14. Components
15. Surface-Specific Patterns
16. Global Anti-Patterns
17. What This Brand is NOT
18. Token Scaffolds

---

## 1. The Brief

### Target user

Aanya — 24, Mumbai, orders ice cream 4x/month, 78% after 9pm. Has Zepto, Blinkit, Swiggy installed. Picks based on the last memorable moment. Will only share something if it's genuinely worth her group chat. Currently Zepto is her speed app. Not her fun app.

### Primary job to be done

When Aanya has a late-night craving, she wants to feel like something is happening — not just waiting — so she screenshots the moment and sends it to someone before she even opens the packaging.

### Top 3 things the user must see

1. **This is a chase** — the craving is running, the rider is after it, 10 minutes is the clock
2. **This is specifically about HER** — her name, her product, her rider, her delivery time
3. **This is worth sharing** — the FIR card must feel found, not produced

### Constraints

- **Platforms:** Mobile-first web (390px). Runs in any browser as a single HTML file.
- **Performance budget:** No JS bundler. CDN fonts only. Prototype must load under 3s on 4G.
- **Locale:** en-IN primary. Hinglish copy throughout.
- **Accessibility target:** WCAG AA for contrast ratios. No ARIA requirements for prototype.
- **Stack:** Plain HTML + CSS + vanilla JS. No frameworks.
- **Dark mode:** Not applicable — this is a dark-background app by design.

### Rejected directions

1. **Light/white background** — Zepto's brand is deep purple. A light UI would not read as Zepto from a screenshot.
2. **Green color scheme** — While a LinkedIn post suggests Zepto is testing green, purple is the established identity Aanya recognises. We use what she knows.
3. **Playful/cartoonish illustration style** — Chor Police works because it uses an official/bureaucratic aesthetic (FIR card) against a playful context. Cartoon illustrations would kill the tension.
4. **Blinkit-adjacent loud design** — High contrast, maximum saturation, screaming CTAs. Zepto is confident, not loud. The design should feel like a cop, not a carnival.

---

## 2. Surface Declaration

- [x] **Mobile** — mobile-first web prototype, 390px
- [x] **Transactional** — FIR card (the shareable PNG output)

All other surfaces: not applicable for this prototype.

---

## 3. Visual Idea

**Deep purple authority broken by one hot pink signal.**

Zepto's purple is not a playful color. It's the color of something that takes itself seriously — which is exactly what makes the absurdist Chor Police copy land. The visual language says "official" and "in control." The copy says "your craving is a fugitive." That tension is the joke.

Every screen is deep purple — calm, fast, dense. The hot pink `#FF2D55` appears exactly once per screen: the primary CTA. It's the siren. It says "act now." The FIR card inverts everything — cream and ink, monospace, bureaucratic. It's the only screen without purple. That contrast is why it feels like something worth sharing.

**The rule:** one hot pink element per screen. Not two. Not on decorative elements. Only on the action that advances the user through the chase.

**Why not orange as the CTA color:** we researched Zepto's actual app. Hot pink `#FF2D55` is the verified CTA color from multiple case studies (Quick Add, View Cart). Orange would feel like Swiggy. We stay on brand.

**Why not full-screen animations:** this is a prototype being screen-recorded in 30 seconds. Every animation must be obvious within a single tap. Subtle animations get cut from the recording.

---

## 4. Typography

### 4.1 Font Selection

**Primary font (app screens): DM Sans** — Google Fonts
- Character: Geometric, clean, modern humanist. Confident without being corporate.
- Usage: All app screen text — headlines, body, labels, buttons.
- Defense: We chose DM Sans because it is identified as the closest match to Zepto's actual app font across multiple design case studies. We rejected Inter because it is the default fallback everyone uses and would not read as Zepto specifically.

**Monospace font (FIR card): Courier Prime** — Google Fonts
- Character: Typewriter-style monospace. Immediately reads as an official document.
- Usage: FIR card only — all text inside the cream card.
- Defense: We chose Courier Prime because it is a high-quality, readable monospace with a slightly warmer feel than Courier New. The FIR card must feel like a real document. Monospace creates that. We rejected system monospace because it varies by device and would break the card's consistent appearance.

**Font loading:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800;900&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

**Payload budget:** CDN-loaded. No woff2 self-hosting. `font-display: swap` handled by Google Fonts.

### 4.2 Type Scale

| Role | Font | Weight | Size | Line height | Tracking |
|------|------|--------|------|-------------|----------|
| Hero / PAKAD LIYA | DM Sans | 900 | 32px | 1.1 | -1px |
| Screen title | DM Sans | 800 | 24px | 1.2 | -0.5px |
| Campaign headline | DM Sans | 800 | 20px | 1.25 | -0.5px |
| Tracking state copy | DM Sans | 800 | 20px | 1.3 | 0 |
| Product name | DM Sans | 700 | 15–18px | 1.3 | 0 |
| Body / descriptions | DM Sans | 400 | 14px | 1.5 | 0 |
| CTA button | DM Sans | 800 | 16px | 1 | 0.5px (all caps) |
| UI label / badge | DM Sans | 700 | 11–12px | 1 | 1px (all caps) |
| Price | DM Sans | 900 | 16–28px | 1 | 0 |
| FIR card — all text | Courier Prime | 400/700 | 13–16px | 1.4 | 0 |
| Micro (order ID) | Courier Prime | 400 | 12px | 1.3 | 0 |

### 4.3 Weight Usage

- **400 (Regular):** body descriptions, secondary labels, FIR card body text
- **600 (Semibold):** not used — skip this weight to maintain cleaner contrast
- **700 (Bold):** product names, section labels, FIR card fields, rider tag
- **800 (ExtraBold):** screen titles, campaign headlines, tracking copy, CTAs
- **900 (Black):** hero moments (PAKAD LIYA), prices, logo mark

Weights not on this list don't ship.

### 4.4 Italic Rules

- FIR card verdict line only: `font-style: italic` in Courier Prime
- One italic word per card, maximum
- No italic on app screens

### 4.5 Numbers and Monospace

- Delivery time (8 min 17 sec): DM Sans 900 — it's a stat, not a document reference
- FIR number (ZPT-2026-MUM-4821): Courier Prime — it IS a document reference
- Prices (₹120): DM Sans 900 — must read as bold at a glance
- Distance (800m): DM Sans 700 — tracking context, not tabular

### 4.6 Typography Anti-Patterns

- Everything at 800 weight — nothing stands out. Reserve 800+ for 1–2 elements per screen.
- DM Sans at 400 for CTAs — CTAs are 800 always.
- Courier Prime outside the FIR card — it signals "document" and will confuse context.
- Small all-caps text below 10px — unreadable on mobile.

---

## 5. Color

### 5.1 Neutral Axis

This is not a neutral-axis product. The background is deep purple, not a neutral. The FIR card uses cream — warm, not neutral.

**App background axis: purple-dominant dark**
**FIR card axis: warm cream**

Defense: We chose purple-dominant dark because Zepto's entire brand identity is built on it. A neutral-axis redesign would not read as Zepto from a screenshot. That is one of the four judging criteria.

### 5.2 Surface Elevation

| Level | Token | Value | Usage |
|-------|-------|-------|-------|
| 0 | `--bg` | `#1A0A2E` | Page background — deepest dark purple |
| 1 | `--surface` | `rgba(255,255,255,0.08)` | Cards, product tiles, cart items |
| 2 | `--surface-raised` | `rgba(255,255,255,0.12)` | Active/hovered cards, selected states |
| 3 | `--surface-header` | `#2D1554` | Navigation headers, map background |
| 4 | `--surface-fir` | `#F5F0E8` | FIR card only — cream, warm |

### 5.3 Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--text` | `#FFFFFF` | All primary text on dark surfaces |
| `--text-secondary` | `rgba(255,255,255,0.7)` | Descriptions, subtitles, secondary info |
| `--text-muted` | `rgba(255,255,255,0.5)` | Labels, timestamps, brand names |
| `--text-fir` | `#1A1A1A` | All text inside the FIR card |
| `--text-fir-secondary` | `#555555` | FIR card labels (left column) |

### 5.4 Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--border` | `rgba(255,255,255,0.1)` | Card dividers, section separators |
| `--border-strong` | `rgba(255,255,255,0.2)` | Active inputs, focus states |
| `--border-accent` | `#FF2D55` | Selected payment method, focused input |
| `--border-fir` | `#AAAAAA` | FIR card internal dividers (dashed) |

### 5.5 Accent

**Primary accent: Hot Pink `#FF2D55`**
- Usage: All primary CTA buttons, logo Z bolt, urgency pills
- Hover: `#E0264C`
- Dim (subtle backgrounds): `rgba(255,45,85,0.15)`
- Defense: Verified as Zepto's actual CTA color (Quick Add, View Cart) from multiple app case studies. We rejected orange (#FF6B35) because it reads as Swiggy/Zomato territory.

**Cap:** hot pink on no more than 1 element per screen. One siren, not a disco.

**Brand Purple: `#8B2FC9`**
- Usage: Campaign banners, stamp on FIR card, active state highlights
- This is the brand color — it surfaces on elements that represent Zepto's identity specifically (not every surface).

### 5.6 Semantic (Status)

| Token | Value | Usage |
|-------|-------|-------|
| `--success` | `#22C55E` | "On time" delivery, confirmed states |
| `--warning` | `#FF6B35` | Urgency bar, craving intensity, delayed |
| `--danger` | `#EF4444` | Cancelled, error states |
| `--info` | `#8B2FC9` | Brand purple used as info accent |

Note: these are tonally adjusted to work against the dark purple background. Raw Tailwind `green-500` etc. would clash. These specific values are verified from Zepto's Live Activities case study.

### 5.7 Data Viz Palette

Only one data viz element: the craving intensity bar.

**Craving bar:** `linear-gradient(90deg, #FF6B35, #FF2D55)` — orange to hot pink. Reads as "danger level rising."

No charts or multi-series data in this prototype.

### 5.8 Gradient Rules

- **Campaign banner:** `linear-gradient(135deg, #FF6B35, #FF4500)` — orange to deep orange. Signals urgency without competing with purple.
- **Craving bar:** `linear-gradient(90deg, #FF6B35, #FF2D55)` — urgency escalation.
- **Rider dot glow:** `box-shadow: 0 0 20px rgba(255,45,85,0.5)` — soft pink pulse.
- **Banned everywhere else.** No purple-to-pink gradients on backgrounds. No gradient text.

### 5.9 Dark Mode

Not applicable. The app IS dark mode. The FIR card is intentionally light — that contrast is a design decision, not a mode.

### 5.10 Contrast Targets

| Element | Target | Notes |
|---------|--------|-------|
| White text on `#1A0A2E` | ~15:1 | Far exceeds AA |
| White text on `#2D1554` | ~9:1 | Exceeds AA |
| White text on `#8B2FC9` | ~4.6:1 | Meets AA |
| Hot pink `#FF2D55` on dark purple | ~4.8:1 | Meets AA |
| Ink `#1A1A1A` on cream `#F5F0E8` | ~16:1 | Far exceeds AA |

### 5.11 Color Anti-Patterns

- Orange CTAs — reads as Swiggy.
- Purple CTAs — disappears into the background.
- Hot pink used decoratively (borders, icons, dividers) — it must mean "primary action" only.
- White at full opacity for secondary text — too much visual weight, creates flat hierarchy.
- Gradient backgrounds behind cards — kills the card elevation system.

---

## 6. Spacing & Shape

### 6.1 Spacing Scale

Base unit: **8px**. Every spacing value is a multiple.

| Value | Token | Common Use |
|-------|-------|-----------|
| 4px | `--space-1` | Icon-to-label gap, badge padding |
| 8px | `--space-2` | Tight inline gaps, progress dot spacing |
| 12px | `--space-3` | Within compact elements, tag padding |
| 16px | `--space-4` | Card padding, section margins, input padding |
| 20px | `--space-5` | Header padding, standard screen padding |
| 24px | `--space-6` | Between component groups, FIR card padding |
| 28px | `--space-7` | Name entry screen padding |
| 32px | `--space-8` | Section-to-section |
| 40px | `--space-10` | Product detail hero top/bottom padding |

### 6.2 Control Height Standard

- **Primary CTA button:** 56px (18px vertical padding × 2 + 16px line-height text + 4px). Full-width on mobile.
- **Secondary/inline button:** 36px (ADD button on product cards).
- **Input field:** 52px (16px padding × 2 + 20px input text).
- **Touch target minimum:** 44×44px on all tappable elements.

### 6.3 Border Radius

Philosophy: Rounded but grounded. 12–16px for containers. Tighter for inline elements.

| Element | Radius |
|---------|--------|
| Primary CTA button | 12px |
| Product cards | 16px |
| Campaign banner | 16px |
| Cart item, payment option | 12px |
| Input field | 12px |
| Tracking card (top only) | 24px |
| Badge / tag pills | 20px (pill) |
| FIR card | 16px |
| Rider dot (map) | 50% (circle) |
| Add button (small) | 8px |

Rule: no single radius for everything. Different surfaces have different radii by role.

### 6.4 Spacing Anti-Patterns

- Same padding on every screen — the name entry screen and the cart need different breathing room.
- Card padding under 16px — content feels crammed on mobile.
- Tracking card floating without the 24px top radius — it won't read as lifting off the map.
- FIR card with less than 24px padding — it's a document, not a card. It needs margin.

---

## 7. Motion

### 7.1 Principles

- Motion signals progress through the chase. It does not decorate.
- Every animation advances the story: the craving is being hunted.
- Respect `prefers-reduced-motion` — no animation for users who opt out.

### 7.2 Duration Ladder

| Duration | Usage |
|----------|-------|
| 100ms | Button press feedback, progress dot fill |
| 150ms | Screen transition (fade) |
| 200ms | Input focus border change |
| 800ms | Rider dot movement on map (ease) |
| 1.5s | Craving bar fill animation (ease-out) — slow build = rising urgency |
| 1.5s loop | Dispatch confirmation pulsing emoji |

### 7.3 Easing Curves

- **Standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — screen transitions
- **Ease-out:** `cubic-bezier(0, 0, 0.2, 1)` — rider dot arrival, craving bar fill
- **Spring-like:** `cubic-bezier(0.34, 1.56, 0.64, 1)` — not used in this prototype (would require JS)

### 7.4 Motion Taxonomy

**Craving bar (Product detail):**
- Trigger: 200ms after screen renders
- Duration: 1.5s ease-out to final value (73–98%)
- Purpose: creates urgency — the craving is at critical level before user decides

**Rider dot (Tracking map):**
- Trigger: tap "AAGE BADHAO"
- Duration: 800ms ease-out transition on `left` property
- Purpose: makes the chase feel physically real

**Dispatch emoji pulse (Order confirmed):**
- Loop: scale 1 → 1.08 → 1, 1.5s infinite
- Purpose: the siren is active, rider is moving

**Screen transitions:**
- Simple: `opacity` 0 → 1, 150ms ease-out
- No slide animations — prototype simplicity

### 7.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 7.6 Motion Anti-Patterns

- Auto-advancing screens — every transition is user-initiated (tap). No auto-advance, ever.
- Craving bar animating on every render — only once on entry.
- Rider dot jumping instead of sliding — `transition: left 0.8s ease` required.
- Toast animations — no toasts in this prototype.

---

## 8. Iconography

### 8.1 Library

No icon library. Emoji as systematic design throughout.

Defense: We chose emoji over Lucide/Heroicons because (a) this is a plain HTML prototype with no npm, (b) emoji is native to Indian consumer app culture, (c) specific emoji are part of the narrative (🚨 = Chor Police, 🏍️ = rider, 👮‍♂️ = cop) and cannot be replaced by generic icons without losing meaning.

### 8.2 Emoji Size, Usage

- **Narrative emoji** (🚨 👮‍♂️ 🏍️): 24–72px depending on screen role
- **Product emoji** (🍦 🍫 🍧 🍨): 36–80px as product image proxy
- **UI emoji** (📍 📱 💳 💵): 24px in lists and labels
- Color: native system rendering

### 8.3 Systematic Emoji Roles

| Emoji | Meaning | Context |
|-------|---------|---------|
| 🚨 | Chor Police — alert, dispatch, live | All tracking screens, notification, FIR screen |
| 👮‍♂️ | Rider / cop character | Rider tag, confirmed screen |
| 🏍️ | Rider on map | Tracking map dot |
| 🏠 | Destination | Map destination marker |
| 📍 | Location / distance | Tracking distance label |
| 🔒 | Evidence secured | Cart status bar |
| 🗂️ | Evidence / case file | Cart screen title |
| 📥 | Download | FIR card download button |
| 📸 | Screenshot | Share hint on FIR screen |

**Product emoji (systematic, not decorative):**

| Emoji | Product |
|-------|---------|
| 🍦 | Amul Kool Kone |
| 🍫 | Magnum Gold |
| 🍧 | Cornetto Classic |
| 🍨 | Havmor Choco Bar |

### 8.4 Emoji Anti-Patterns

- ✨ anywhere — generic "magic" filler, banned
- 🚀 — not speed, not police, banned
- 🎯 — not used here, banned
- 👋 — no greetings, banned
- More than 1 narrative emoji per CTA button

---

## 9. Information Hierarchy

### 9.1 Emphasis Tiers

**Tier 1: Primary** — The chase status. What is happening right now.
- Signaled by: DM Sans 800–900, full white `#FFFFFF`, 20–32px

**Tier 2: Secondary** — The product or action available.
- Signaled by: DM Sans 700, white at 90%, 15–18px

**Tier 3: Tertiary** — Context, labels, brand attribution.
- Signaled by: DM Sans 400, white at 50–70%, 12–14px

**Tier 4: Micro** — FIR numbers, order IDs, legal.
- Signaled by: Courier Prime 400, white at 40% or `#555` on FIR card, 10–12px

### 9.2 Signaling Rules

- **Size:** track state copy (20px) > product name (15–18px) > label (12px)
- **Weight:** 900 = one number per screen. 800 = primary action/state. 700 = supporting info. 400 = context.
- **Color:** white = primary. rgba 70% = secondary. rgba 50% = muted. Hot pink = action only.
- **Position:** chase copy always top of card. CTA always bottom full-width.

Never use all four levers at once on the same element.

### 9.3 Hierarchy Anti-Patterns

- Price at same weight as product name — price must be heavier.
- CTA at same visual weight as secondary actions — one primary CTA per screen, always hot pink.
- Tracking state copy smaller than product name — the chase is always Tier 1.

---

## 10. States

### 10.1 Empty States

Not applicable for this prototype — all screens have guaranteed content (name entered, product selected, rider assigned). No empty state scenarios exist in the 10-screen flow.

### 10.2 Loading States

No async operations in this prototype. No loading states required.
CDN font fallback: if Google Fonts fails, system sans-serif maintains layout.

### 10.3 Error States

**Input validation (Screen 1 — name entry):**
- Trigger: submit with empty name field
- Treatment: input border turns hot pink `#FF2D55`, field shakes focus
- Copy: field is required, no explicit error message needed — just focus the field

**FIR download failure:**
- Trigger: html2canvas fails
- Treatment: `alert('Screenshot karo aur share karo! 📸')` — fallback prompt
- Do not show a technical error. Keep the Chor Police voice.

### 10.4 Success States

| Action | Confirmation |
|--------|-------------|
| Name submitted | Screen transition to notification — no explicit "success" |
| Product added | Immediate screen transition to detail — no toast |
| Order confirmed | Full screen 8 — dedicated confirmation moment |
| Delivery complete | PAKAD LIYA state on tracking — this IS the celebration |
| FIR downloaded | Browser download dialog — no additional UI |

**The PAKAD LIYA moment is the celebratory state.** It gets the most visual weight in the product. No other screen competes with it.

### 10.5 All-States Anti-Patterns

- Toast for any success in this flow — no toasts, ever
- Full error screen for validation — too heavy for a prototype input
- "Loading..." text on any screen — no async operations
- Separate "Order successfully placed!" screen before FIR card — that's two wins where one is better

---

## 11. Data & Formatting

### 11.1 Numbers

- Prices: `₹35`, `₹120` — symbol first, no decimal for whole amounts, no space
- Delivery time: `8 min 17 sec` — spelled out, not `8:17`
- FIR number: `ZPT-2026-MUM-4821` — hyphenated, all caps
- Distance: `800m`, `600m` — no space between number and unit
- Craving intensity: `94%` — whole number, no decimal

### 11.2 Currency

- Symbol: ₹ (always, no "INR" abbreviation in UI)
- Position: symbol before number, no space
- Whole amounts only: ₹35 not ₹35.00

### 11.3 Dates and Time

- Notification time: `10:43 PM` — 12-hour, space before AM/PM
- FIR delivery time: `8 min 17 sec` — never `08:17` (reads as time-of-day, not duration)
- FIR number year: `2026` — 4-digit year in the document reference

### 11.4 Percentages

- Craving intensity: `94%` — whole number, no sign needed (always positive)

### 11.5 Null States

- Rider name: never empty — always one of: Ramesh, Suresh, Vikram, Ajay, Ravi
- Delivery time: never empty — always a value in the 7:42–9:28 range
- FIR number: never empty — always ZPT-2026-MUM-[4 random digits]
- Verdict: never empty — time-of-day logic always resolves to one of 4 options

### 11.6 Anti-Patterns

- `8:17 min` — reads as time-of-day, not duration. Use `8 min 17 sec`.
- `₹ 35` — no space between symbol and amount.
- `9:28` as delivery time display — looks like a clock, not a delivery window.
- FIR number in lowercase — it's an official document reference, always caps.

---

## 12. Accessibility

Target: WCAG AA contrast ratios. Keyboard navigation not required for prototype.

### 12.1 Contrast Targets

All text/background combinations verified:

| Text | Background | Ratio | Status |
|------|-----------|-------|--------|
| `#FFFFFF` on `#1A0A2E` | White on deep purple | ~15:1 | AAA ✓ |
| `#FFFFFF` on `#2D1554` | White on mid purple | ~9:1 | AAA ✓ |
| `#FFFFFF` on `#8B2FC9` | White on brand purple | ~4.6:1 | AA ✓ |
| `#FF2D55` on `#1A0A2E` | Hot pink on deep purple | ~4.8:1 | AA ✓ |
| `#1A1A1A` on `#F5F0E8` | Ink on cream | ~16:1 | AAA ✓ |
| `rgba(255,255,255,0.5)` on `#1A0A2E` | Muted white | ~7:1 | AA ✓ |

### 12.2 Touch Targets

Every tappable element meets 44×44px minimum:
- Product cards: full card area is tappable (not just the ADD button)
- Back button: minimum 44×44 touch target even if visual size is smaller
- CTA buttons: full-width, 56px height — far exceeds minimum

### 12.3 Accessibility Anti-Patterns

- Touch targets under 44px on back buttons or small ADD buttons
- Color as the only signal for selected payment method — use border + background shift together

---

## 13. Microcopy

### 13.1 Voice

**Brand voice in 3 adjectives:** Confident. Direct. Slightly absurd.

**Anti-adjectives:** Not corporate. Not cute. Not hype. Not apologetic.

**Tone per surface:**

| Surface | Tone | Example |
|---------|------|---------|
| Push notification | Urgent, personal | "Gopal, teri craving bhaag rahi hai!" |
| App home banner | Bold, inviting | "Chor Police active hai. Pakad lo →" |
| Product listing | Urgent, brief | "Pakad lo pehle bhaag jaaye" |
| Product detail | Tense, specific | "Yeh craving zyada der nahi rukegi." |
| Cart | Official, amused | "Evidence secured. Dispatch ke liye tayaar." |
| Payment | Mission-mode | "Operation authorize karo." |
| Order confirmed | Alive, moving | "Dispatch ho gaya. Rider nikal pada." |
| Tracking states | Chase commentary | "600 metres. Rider tez hai. Craving thakne lagi." |
| FIR card | Bureaucratic deadpan | "Crime: Attempted Craving Escape. Case closed." |

### 13.2 Button Labels

- All caps for primary CTAs: `CHOR POLICE BULAO →`, `CART MEIN DAALO →`, `TRACK KARO →`
- All caps signals: Zepto buttons in the app are all caps
- Arrow `→` on forward-navigation CTAs only
- No adverbs. No "seamlessly." No "instantly."
- Defense: all-caps CTA is Zepto's verified pattern from the real app

### 13.3 Copy Rules

- **Always lead with action:** "Pakad lo" not "You can catch your craving"
- **Hinglish formula:** English structure + Hindi words for emotion/urgency
- **Numbers over adjectives:** "800 metres" not "almost there"
- **Never promise a specific minute:** "10 min" as estimate context, never "we will deliver in exactly X minutes"
- **The FIR card is deadpan:** it does not wink at the user. The formality IS the joke.

### 13.4 Hinglish Usage

**App UI (nav, labels, errors):** English only
**Campaign copy (banners, tracking, CTAs):** Hinglish welcome
**FIR card:** Fully Hinglish — all field labels in Hinglish, verdict in English/Hinglish blend

Hinglish is natural, not forced. No transliteration of long sentences.
- ✓ "Teri craving bhaag rahi hai" — natural
- ✗ "Aapka delivery agent aapke ghar ke taraf aa raha hai" — too literal, sounds automated

### 13.5 Microcopy Anti-Patterns

- "Welcome back!" anywhere — not Zepto's voice
- "Amazing!" or "Great!" — Zepto doesn't self-congratulate
- Generic error: "Something went wrong" — keep Chor Police voice even in errors
- Passive voice in chase moments: "Your order is being delivered" → "Rider 400 metres pe hai"
- Emoji as tone-softener (🙂) — emoji here are systematic characters, not emotional punctuation

---

## 14. Components

### 14.1 CTA Button (Primary)

**Spec:**
- Background: `#FF2D55`
- Text: `#FFFFFF`, DM Sans 800, 16px, all caps, letter-spacing 0.5px
- Height: 56px, full-width (minus 20px margin each side on screen)
- Radius: 12px
- States: rest → active (scale 0.98 + 20ms) → release

**Rule:** one primary CTA per screen. No exceptions.

### 14.2 Product Card

**Spec:**
- Background: `rgba(255,255,255,0.08)`
- Radius: 16px
- Padding: 16px
- Emoji: 40px, center-aligned
- Name: DM Sans 700, 13px, white
- Brand: DM Sans 400, 11px, white 50%
- Price: DM Sans 800, 15px, white
- ADD button: `#FF2D55`, DM Sans 800, 12px, 8px radius, 6×14px padding

**Full card area is tappable** — not just the ADD button.

### 14.3 Campaign Banner

**Spec:**
- Background: `linear-gradient(135deg, #FF6B35, #FF4500)`
- Radius: 16px
- Padding: 20px
- Tag: DM Sans 800, 10px, all caps, letter-spacing 1.5px, white 80%
- Title: DM Sans 900, 20px, white
- Sub: DM Sans 400, 13px, white 85%
- Police emoji background: absolute, right-aligned, 48px, opacity 30%

### 14.4 FIR Card

**Spec:**
- Background: `#F5F0E8`
- Radius: 16px
- Padding: 28px × 24px
- Font: Courier Prime throughout
- Dividers: `━━━━━` text dividers (not CSS borders) at top/bottom of header
- Internal dividers: `hr` with dashed style, `#AAAAAA`
- Stamp: purple circle, 64px, 3px border, top-right, rotated -15deg

**Label alignment:** labels must be consistent-width for alignment. Use a minimum-width span.

### 14.5 Tracking Map

**Spec:**
- Background: `#2D1554`
- Dot grid: CSS `radial-gradient`, 30px × 30px spacing, white 5%
- Route line: 3px height, `rgba(255,45,85,0.3)` unfilled, `#FF2D55` filled
- Rider dot: 44px circle, `#FF2D55`, glow shadow
- Destination: 36px circle, `#2D1554` background, 3px white border

**Rider movement:** `transition: left 0.8s ease-out` on percentage position changes.

---

## 15. Surface-Specific Patterns

### 15.5 Mobile

- All screens: `max-width: 390px`, centered on desktop with `#1A0A2E` body background
- Touch targets: 44px minimum on all interactive elements (verified in §12.2)
- No hover-dependent interactions — every state must work on tap only
- `user-scalable=no` in viewport meta — prevents accidental zoom during demo
- Safe areas: not required for prototype (no status bar simulation except screen 2)
- Scroll: only where content genuinely overflows (long product listings)

**Screen 2 (notification) specific:**
- Background: near-black `#0A0A14` — simulates phone lock screen, not Zepto app
- Status bar simulation: custom HTML, not real system UI
- This is the only screen that breaks the Zepto purple system — intentionally

### Transactional (FIR Card)

- The FIR card is the only "document" surface in this product
- It must render identically to how it downloads as PNG
- html2canvas at scale 3 (3× resolution for sharing quality)
- All fonts must be loaded before html2canvas runs
- Cream background `#F5F0E8` must be explicitly set as `backgroundColor` in html2canvas options

---

## 16. Global Anti-Patterns

- **Defaults are the enemy.** Every color value in this file is a deliberate choice. Tailwind defaults don't ship.
- **No rounded-2xl on everything.** Radius varies by component role — see §6.3.
- **No hot pink used decoratively.** It means "primary action." Nothing else.
- **No auto-advancing screens.** Every transition is user-initiated. The chase is in the user's control.
- **No toasts, ever.** This prototype has no async operations that need toasting.
- **No Lorem Ipsum.** Every piece of copy is Chor Police copy.
- **No generic error messages.** Errors stay in the Chor Police voice.
- **No gradient backgrounds behind cards.** Surface elevation uses opacity, not gradients.
- **No Courier Prime outside the FIR card.** It signals "official document." Use it only there.

---

## 17. What This Brand is NOT

- Not Blinkit: loud, crowd-participation, maximum saturation. Zepto is confident, not chaotic.
- Not Swiggy/Zomato: orange-dominant, food photography, warm. Zepto is purple, urban, speed-first.
- Not a fun app by default: the playfulness comes from the copy and the FIR card format. The visual design is serious.
- Not a startup-y brand: no inter with default weights, no Tailwind defaults, no gradient-everything.
- Not English-only: this is a Hinglish product. English-only copy will feel corporate and wrong.
- Not warm or cozy: it's 11pm, there's a craving running, a cop is chasing it. The tone is alive, not warm.

---

## 18. Token Scaffolds

### 18.1 CSS Custom Properties

```css
:root {
  /* Surfaces */
  --bg: #1A0A2E;
  --surface: rgba(255, 255, 255, 0.08);
  --surface-raised: rgba(255, 255, 255, 0.12);
  --surface-header: #2D1554;
  --surface-fir: #F5F0E8;

  /* Text */
  --text: #FFFFFF;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --text-muted: rgba(255, 255, 255, 0.5);
  --text-fir: #1A1A1A;
  --text-fir-secondary: #555555;

  /* Borders */
  --border: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.2);
  --border-accent: #FF2D55;
  --border-fir: #AAAAAA;

  /* Accent */
  --accent: #FF2D55;
  --accent-hover: #E0264C;
  --accent-dim: rgba(255, 45, 85, 0.15);

  /* Brand */
  --brand-purple: #8B2FC9;
  --brand-purple-dim: rgba(139, 47, 201, 0.2);

  /* Semantic */
  --success: #22C55E;
  --warning: #FF6B35;
  --danger: #EF4444;

  /* Typography */
  --font-app: 'DM Sans', 'Inter', system-ui, sans-serif;
  --font-fir: 'Courier Prime', 'Courier New', monospace;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-10: 40px;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Motion */
  --duration-instant: 100ms;
  --duration-fast: 150ms;
  --duration-standard: 250ms;
  --duration-rider: 800ms;
  --duration-craving: 1500ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);

  /* Controls */
  --control-height: 56px;
  --control-height-sm: 36px;
}
```

---

## Design Vocabulary

"breathing room" = more padding
"tighter" = less gaps
"premium" = bigger type contrast + lighter weight + more whitespace
"less corporate" = warmer colors + rounded corners
"like Zepto" = deep purple + hot pink siren + DM Sans 800 + Hinglish
"too boxy" = remove borders, use spacing
"needs hierarchy" = make one element 3× bigger
"feels flat" = add subtle glow shadow on rider dot / add gradient to banner
"AI slop" = make bolder, more specific choice
"breaks the chase" = any design element that makes the user feel like they're in a generic delivery app

---

*Research sources: `~/zepto-scream-research.md` + `docs/brand-guidelines-research.md` (synthesised May 2026)*
*Last updated: 2026-05-25 | Author: Gopal Singh Lora*
