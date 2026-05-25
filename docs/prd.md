# PRD — Zepto × Chor Police — Builder Series Brief #01

**Version:** 1.0 | **Status:** Approved
**PM:** Gopal Singh Lora | **Date:** 2026-05-25

---

## Confidence Tags

| Tag | Meaning |
|-----|---------|
| 🟢 | Confirmed by primary research — direct from brief, Zepto official data, or Blinkit verified campaign details |
| 🟡 | Confirmed by secondary research — market reports, industry data, UX case studies |
| 🔵 | A direction I believe in but have not yet proven. Treat as hypothesis. |
| 🔴 | Tested and wrong. Do not rely on it. |

---

## A Note to the Team Building This

I wrote this to make your job easier, not to document mine. I did the research so you do not have to guess what users need. I made the hard prioritisation calls so you do not have to negotiate. I listed the edge cases so you do not discover them mid-build.

Every section tells you what I found, why I made the choices I made, and what I need from you. If something is unclear, that is a gap in this document and I want to fix it. Please ask.

This is a prototype — not a production build. Every decision is optimised for demo clarity, shareability, and brief compliance. Not for scale. Build with that in mind.

---

## One Pager

**Problem:** Zepto's speed advantage has no emotional language. Ice cream ordering feels identical to ordering toothpaste. Blinkit now owns the "fun" position in Aanya's head.

**Solution:** Chor Police — a campaign mechanic that reframes every Zepto order as a 10-minute chase. Craving = fugitive. Rider = cop. Delivery = case closed. Output: a personalised FIR card Aanya screenshots and shares before thinking.

**For whom:** Aanya — 24, Mumbai, orders ice cream 4x/month, 78% after 9pm, will only share something if it's genuinely worth sharing.

**Success metric:** FIR cards downloaded per 100 ice cream orders

**Ship date:** Before peak summer 2026 (brief deadline: 23 March)

---

## Press Release

*Written as if the product already shipped and Aanya is talking about it.*

**Headline:** Zepto Chor Police catches your midnight craving before it runs away

**Opening:** Zepto today launched Chor Police, a new in-app experience that turns every ice cream order into a 10-minute chase — and hands you the official case file when your craving gets caught. Available to all Zepto users in Mumbai, with no change to the app, no separate download, and no impact on delivery time.

**The problem it solves:** Every night at 10pm, millions of Indians feel a craving that disappears in 15 minutes. Zepto was already the fastest at catching it — 8 minutes average in Mumbai metros. But nobody was talking about it. It felt like ordering toothpaste. Chor Police changes that. It gives the fastest delivery in India the story it always deserved.

**How it works:** Order any ice cream on Zepto during the campaign. The app enters Chor Police mode — your craving is the fugitive, Rider Ramesh is the cop, and the 10-minute window is the game clock. When it arrives, you get an official FIR card: personalised, absurd, and designed to go straight to your group chat.

**Customer quote:** *"I sent the FIR card to my entire friend group before I even opened the ice cream. Ramesh caught my craving in 8 min 17 sec. Case closed."* — Aanya, Bandra West

**Call to action:** Open Zepto. Tap the Chor Police banner. Order ice cream. See if your craving escapes.

---

# PART 1: DISCOVERY

---

## 0. Research Scope

**Target Segment:** Urban Indian adults (22–28) in Tier 1 metros who use quick commerce apps at least 3–4x/month, with a behavioural pattern of late-night impulse ordering — particularly for ice cream and snacks. The defining condition is not demographic: it is the 10–15 minute desire window. They have the craving. They know the app will deliver in time. The decision to open Zepto vs. Blinkit is made in a split second, mostly driven by habit and last memorable brand interaction.

**Research Inputs:**

| Input Type | Volume | Period | Method |
|-----------|--------|--------|--------|
| Brief data (primary user profile) | 1 brief | Mar 2026 | Zepto-supplied Aanya persona + behavioural data |
| Competitive audit — Blinkit Scream | Full reverse engineering | May 2026 | Verified via news sources, Reddit India, Twitter/X |
| Secondary market research | 25+ sources | Apr–May 2026 | Market reports, industry analysis, news coverage |
| Competitive landscape | 3 QC players | May 2026 | Business data, app teardowns, pricing analysis |

*Note: Formal user interviews were not conducted. The brief explicitly permitted proxy research ("use proxies if needed"). The Aanya profile is supplied by Zepto with verified behavioural data. A 3-person guerrilla validation was recommended but not completed before prototype build.*

---

## 1. Problem Tension

### 1.1 Real User Scenario

Aanya is 24 and lives in Bandra West. She manages a marketing role with unpredictable hours, eats dinner late, and decompresses with her phone after 9pm. On a Wednesday at 10:43pm, she's watching something on her laptop and gets a craving — not hunger, but the specific want for something cold and sweet. The desire is intense and specific: Magnum Gold, ideally within 15 minutes. 🟢

She picks up her phone. She has Zepto, Blinkit, and Swiggy Instamart installed. The decision takes 2 seconds. Tonight she opens Blinkit — because last week she screamed into her phone for a discount and sent the video to three friends. That memory is still fresh. Zepto has given her no equivalent moment in the last 6 months. She orders on Blinkit.

Zepto was faster. Zepto had the product. Zepto had the better price. Zepto lost the session anyway — because the last memorable interaction lived in Blinkit's app, not theirs. The ordering moment was decided before the app opened. 🟢

### 1.2 Observable Breakdown

When the decision is made in 2 seconds at the app-open moment, Zepto's functional advantages (speed, price, density) cannot express themselves. The failure cycle:

- Aanya uses Zepto for staples (milk, eggs, household) — reliable, transactional ✓
- She uses Blinkit for "fun" or "occasion" orders — ice cream, snacks, treats ✗ for Zepto
- Each fun Blinkit experience reinforces the association: Blinkit = fun, Zepto = utility
- Over time, Zepto becomes invisible for the high-margin impulse category
- Zepto's CAC and loyalty spend cannot overcome a perception gap formed at the moment of desire

The failure is not operational. Zepto's delivery is better in metro density. The failure is perceptual — Zepto has no emotional story for the moments that generate loyalty. 🟡

### 1.3 Evidence

| Evidence | Magnitude | Source | Confidence |
|----------|-----------|--------|-----------|
| Ice cream purchase rate that is impulse-driven | ~60% | FMT Magazine, IBEF | 🟡 |
| QC ice cream orders placed after 9pm | 38% | Brief (Zepto-supplied) | 🟢 |
| Desire window before craving fades | 10–15 min | Consumer behaviour research | 🟡 |
| Users who keep 2–3 QC apps installed | Majority | GrowthLane, market analysis | 🟡 |
| Blinkit's CAC vs CLV gap | CAC ₹1,240 vs CLV ₹890 | TechCrunch, GrowthX | 🟡 |
| QC churn rate driven by price-sensitive switching | 47.35% | Industry analysis | 🟡 |
| Aanya: told 3 friends about Blinkit Scream within 48hrs | 1 user | Brief (Zepto-supplied) | 🟢 |

### 1.4 Why Now

Three structural shifts make this urgent in summer 2026:

1. **Speed is no longer a differentiator.** Government directive in early 2026 banned all QC players from advertising fixed-minute commitments. Zepto can no longer lead with "10 minutes." The number is gone. The story must replace it. 🟢

2. **Blinkit drew first blood.** Scream launched May 2026, went viral on Instagram Reels, Reddit India, Twitter/X. It has established that ice cream ordering can be a brand moment. The category now expects entertainment. 🟢

3. **Summer is peak ice cream.** India's ₹31,000 crore ice cream market peaks May–June. This is the highest-impulse, highest-volume window. A campaign that lands now compounds with natural category demand. 🟡

> **Key Insight:** Zepto's problem is not product or operations — it is that its speed advantage has no emotional translation. "8 minutes" is a fact. A 10-minute chase where your craving gets caught and you receive a FIR card is a story. Stories travel. Facts don't.

---

## 2. Target User

**Segment:** Urban Indian adults, 22–28, Tier 1 metros, QC regular users (3–5x/week), with a defined pattern of late-night impulse ordering for non-essential categories (ice cream, snacks, treats). The defining condition: they choose between apps at the moment of desire, not based on prior research.

### Aanya — Primary Persona

| Attribute | Detail |
|-----------|--------|
| Name / Age | Aanya, 24 |
| City | Mumbai (Bandra West) |
| Reality | 4x ice cream orders/month, 78% after 9pm, 2–3 QC apps installed |
| Current tools | Zepto (utility), Blinkit (fun), Swiggy Instamart (backup) |
| Goal | Ice cream at 10pm, delivered before the craving fades, with zero friction |
| Core frustration | "Zepto is fast but boring. Nothing to tell anyone." |
| History | Used Zepto for staples for 6+ months. Never posted about it. Posted about Blinkit Scream within 48 hours of trying it. |

### Behavioural Traits

| Behaviour | Description |
|-----------|-------------|
| Multi-app installed | Keeps 2–3 QC apps, picks based on mood/memory/last experience |
| Night-dominant ordering | 78% of ice cream orders after 9pm; peak window 10pm–midnight |
| Social amplifier | Will share an app moment — but only if it's genuinely post-worthy, not for a discount |
| Hinglish native | Communicates in a natural Hindi-English blend; brand copy in pure English feels corporate |
| Identity-expressive | Shares things that say something about who she is (late-night person, guilty pleasures, self-aware humour) |

These traits are not fixable with better onboarding or a loyalty program. They define a fundamentally different product requirement: the ordering experience must generate a story worth telling, not just a transaction worth completing.

**Explicit exclusions:** Tier-2 city users (Zepto footprint thinner), users ordering for household staples (wrong emotional context), users without social sharing behaviour.

---

## 3. What Users Actually Do (Primary Research)

**Sample:** Brief-supplied Aanya profile (Zepto internal data) + secondary behavioural research. No independent primary interviews conducted — brief permits proxy research.

### Say-Do Gap

| What Users Say | Reality |
|---------------|---------|
| "I use whichever app is fastest" | They open whichever app had the last memorable moment |
| "I don't care about the brand, just the delivery" | They told 3 friends about a brand experience within 48 hours |
| "I order when I actually need something" | 60% of ice cream orders are unplanned impulse purchases |
| "I don't want marketing in my delivery app" | They screenshot and post the Blinkit Scream result immediately |

### Friction Points (Ranked)

| Friction | Evidence | Severity | Best Quote |
|----------|----------|----------|------------|
| Zepto has no emotional story | Every session is a fresh decision, zero brand loyalty | HIGH | "Zepto is her speed app, not her fun app" — Brief |
| The craving window is short | 10–15 min before desire fades; no urgency in current Zepto UX | HIGH | "Impulse desire window: 10–15 min" — Consumer research |
| Nothing to share | Transaction completes with zero shareable output | HIGH | "She will post about an app moment, but only if it is worth posting" — Brief |
| Blinkit is now associated with fun | Scream created a first-mover brand moment in the category | MEDIUM | "Told 3 friends within 48 hours of trying it" — Brief |

### Behavioural Patterns

**Night ordering + social context (HIGH):** Ice cream orders cluster after 9pm, often while in social situations (watching content, texting friends) — the device is already in hand, the group chat is already open. A shareable output lands at the highest-distribution moment of the day.

**Identity content over deal content (HIGH):** Aanya shares things that say something about her — not discount receipts. The Blinkit Scream went viral not because of the discount but because "I screamed at my phone like an idiot" is a story. The FIR card mechanic is the same principle: the absurdity IS the content.

**Impulse window is the entire product (MEDIUM):** The desire peaks, lasts 10–15 minutes, and fades. If Zepto doesn't catch it at peak, the order doesn't happen — on any app. The Chor Police framing names this exact window as the product's core value.

> **Research Insight:** Aanya doesn't want to be entertained by a delivery app. She wants a moment that is so specifically about HER — her name, her craving, her neighbourhood, her exact delivery time — that it would feel weird not to share it.

---

## 4. Market Context (Secondary Research)

**Market size:** India ice cream market ₹31,000 crore (2025), growing 14–16% CAGR, QC now 10%+ of HUL's ice cream business. 🟡

**QC ice cream growth:** 70–100% YoY in 2024–25, now the #1 screenshotted QC category on Blinkit (Q1 2026). 🟡

**Intent vs. adoption gap for brand moments:** Blinkit's Scream campaign — zero paid media budget, generated millions of organic impressions, extended by user-generated hack content. The gap confirms that the problem is product-mechanic fit, not marketing spend.

**Community pain signals:**
- "All three players look identical. Same products. Same speed. Same UX. Brand recall = whoever discounted last." — QC market analysis, GrowthLane 🟡
- "Speed is no longer a differentiator — every player delivers in 10 minutes" — Storyboard18 🟢
- "Zero brand loyalty. Every session is a fresh decision." — Industry analysis 🟡

---

## 5. Existing Ecosystem

### Baseline — What Users Actually Use

- **Blinkit:** Scream campaign has set the expectation for "fun" moments in the category. Post-campaign, it owns ice cream emotional territory. Also has 30,000+ SKUs vs Zepto's 5,000–8,000.
- **Zepto:** Speed and price leader in metros. No equivalent brand moment. Used for utility. 🟢
- **Swiggy Instamart:** Third-place, no significant brand moment play in ice cream. 🟡

The real competitive benchmark is not features — it is which app lives in Aanya's "fun" mental slot.

### Why Existing Approaches Fail

| Approach | What Works | What Fails | Why It Cannot Be Fixed |
|----------|-----------|------------|----------------------|
| Straight discount (Zepto Pass, coupons) | Drives one-time conversion | Trains users to wait for deals; no story to share | Margin destruction + no emotional residue |
| Generic push notifications | Reaches users | Ignored — no novelty, no hook | No mechanic, just interruption |
| Blinkit Scream copy-cat | Proven format works | Reads as Blinkit's second attempt; Zepto loses on its own turf | First-mover advantage cannot be cloned |
| Speed messaging (10 minutes) | Zepto's truth | Government-regulated away from advertising | External constraint, not solvable |

---

## 6. Problem Prioritisation

### Problems Identified

| Problem | Description | Frequency | Severity |
|---------|-------------|-----------|----------|
| P1 | No emotional story for Zepto's speed | Every session | HIGH |
| P2 | No shareable output from the order flow | Every order | HIGH |
| P3 | Blinkit owns "fun" in ice cream category | Post-Scream | HIGH |
| P4 | Multi-app installed — session lost at app-open moment | Every session | HIGH |
| P5 | Speed messaging regulated away | Permanent | MODERATE |

### The Problem Chain

**P5 (can't say "10 minutes") → P1 (no emotional language) → P2 (nothing to share) → P3 (Blinkit fills the gap) → P4 (session lost before app opens)**

Why this chain: P1 is the root. Everything downstream is a symptom. Solve P1 — give Zepto's speed emotional language — and P2, P3, P4 become addressable.

The strategic call: do not compete with Blinkit on Blinkit's terms (loud, participatory, crowd-sourced). Find Zepto's distinct territory. Zepto is fast. Blinkit is loud. The Chor Police mechanic is the first time Zepto's speed becomes a story — not just a number.

---

## 7. Key Assumptions

| Assumption | Evidence | Confidence |
|-----------|----------|------------|
| Aanya shares things that are about HER specifically, not generic brand content | Brief behavioural profile; Blinkit Scream evidence | 🟢 |
| The FIR card format is instantly legible to Indian urban 22–28 demographic | Government notice absurdism is a proven Indian meme format | 🟡 |
| A personalised absurdist card travels via WhatsApp/Instagram at high forward rate | Viral pattern research: Zepto OOH billboards, Astronomer × Gwyneth, CRED Dravid | 🟡 |
| The Chor Police framing of Zepto's speed creates positive emotional association | No direct test yet; derived from mechanics research | 🔵 |
| Zero ops change is achievable — pure UI + copy | Verified: no sensor, no warehouse, no SLA change required | 🟢 |
| Summer 2026 timing amplifies impact | Ice cream peaks May–June; viral challenges peak in summer | 🟡 |

---

# PART 2: SOLUTION

---

## 8. Product Concept

### What We Are Building

Chor Police is not another discount mechanic. It inverts the relationship between speed and story.

| Every QC App Today | Chor Police |
|--------------------|-------------|
| Speed is a number (10 min) | Speed is a chase (craving vs. cop) |
| Tracking is a progress bar | Tracking is a live pursuit |
| Delivery = transaction complete | Delivery = craving arrested. Case closed. |
| Output: receipt | Output: official FIR — personalised, absurd, shareable |

**Architecture in one sentence:** A campaign copy layer sits on top of Zepto's existing ordering flow, reframing every touchpoint (notification → banner → listing → tracking → delivery) through the Chor Police lens, and producing a shareable FIR card as the terminal output.

### Non-Negotiables

| Constraint | What It Means | Research Basis |
|-----------|--------------|---------------|
| Zero ops change | No sensor, no warehouse mod, no SLA guarantee | Brief + verified constraint |
| Ships inside existing app | No separate APK, no external URL required | Brief |
| Delivery time = estimate, never promise | Shown as range (7:42–9:28), never a specific minute | SLA risk + legal |
| Brand reads as Zepto | Purple system throughout; campaign IS Zepto, not a sub-brand | Brief judging criteria |

---

## 9. Before and After

### Before — An Ice Cream Order on Zepto Tonight

| Step | Action | Experience | Emotional state |
|------|--------|------------|----------------|
| 10:43 PM | Feels craving. Opens phone. | 3 apps. 2 second decision. Opens Blinkit. | Blinkit = fun memory |
| 10:44 PM | Searches ice cream on Blinkit | Same products as Zepto | Neutral |
| 10:44 PM | Sees Scream banner. Tries it. | Screams. Gets 30% off. | Delighted |
| 10:52 PM | Gets delivery | Ice cream arrives | Satisfied |
| 10:53 PM | Sends Scream video to 3 friends | Organic distribution for Blinkit | Blinkit wins session + 3 impressions |

### After — Same Order on Zepto with Chor Police

| Step | Action | Experience | Emotional state |
|------|--------|------------|----------------|
| 10:43 PM | Feels craving. Gets Zepto push notif. | "Gopal, teri craving bhaag rahi hai!" | Hooked immediately |
| 10:44 PM | Opens Zepto | Chor Police banner live | Curious, amused |
| 10:44 PM | Taps banner → ice cream listing | "Pakad lo pehle bhaag jaaye" | Urgency + fun |
| 10:45 PM | Adds Magnum Gold | Craving meter at 94%, rider assigned | Invested in the chase |
| 10:45 PM | Pays | "Operation authorize karo" | Part of the story now |
| 10:46 PM | Tracking: 800m → 200m → PAKAD LIYA | Live chase, 5 states, rider named | Watching it happen |
| 10:53 PM | Gets FIR card | Personalised. Absurd. "Rider Ramesh. 8 min 17 sec. Case closed." | Screenshots immediately |
| 10:53 PM | Sends to group chat before opening ice cream | Zero effort forward | Zepto wins session + organic distribution |

---

## 10. Goals

**We will know this worked when:**
- [ ] Aanya downloads the FIR card without being prompted to
- [ ] The FIR card travels to at least 1 other person per order
- [ ] Zepto is mentioned in social posts without a discount as the hook

**North star metric:** FIR cards downloaded per 100 ice cream orders

**Input metrics:**
- Campaign banner tap rate (screen 3 → 4)
- Chor Police flow completion rate (banner tap → FIR card)
- FIR card download rate (screen 10)
- Organic social mentions with #ChorPolice or FIR card screenshot

**Guardrail metrics:**
- Average delivery time maintained (campaign copy must not create SLA pressure)
- No new ops infrastructure introduced (zero warehouse change)
- App rating maintained (campaign must not feel intrusive)

### Targets and Kill Signals

| Metric | Target | Kill Signal |
|--------|--------|-------------|
| Flow completion rate | > 80% | < 50% |
| FIR card download rate | > 35% | < 10% |
| Brief criteria pass rate | 4/4 | < 3/4 |
| Brand recognition (no logo) | 100% | < 80% |

### What Does Good Look Like

**Minimum acceptable:** FIR card download rate > 15% of Chor Police orders. Campaign runs without ops escalation.

**Target:** FIR card download rate > 35%. Organic social posts with FIR card screenshots visible within first week without paid seeding.

**Exceptional:** FIR card becomes the default shareable format for late-night orders across categories. Rider name recognition ("Rider Ramesh") becomes a meme.

**Leading indicators (visible in week 1):**
- Campaign banner tap rate — does the hook work at the top of the funnel?
- Order completion rate vs. control — does Chor Police improve conversion?

---

## 11. Non-Goals

**We are explicitly NOT building:**
- A loyalty points system — because it contradicts the campaign format and is out of scope per brief
- A permanent feature with its own nav item — because it launches as campaign, quietly persists; never a separate product
- AR/VR elements — because explicitly out of scope per brief
- Multi-city support (V1) — because Mumbai is the prototype market; city-specific copy would need localisation
- A separate app or microsite — because it ships inside the existing Zepto experience, no separate APK
- Catalogue depth improvements — sourcing and ops problem, not a campaign problem
- Tier-2 city presence — geographic strategy, out of scope

---

## 12. User Stories

*Organised by job-to-be-done.*

### JTBD 1: Trigger the craving and choose Zepto

| # | Story | Acceptance Criteria | Pain Point |
|---|-------|-------------------|------------|
| U1 | As Aanya, I want to receive a notification that feels different from every other delivery app push, so I open Zepto instead of Blinkit on instinct. | Push notification shows personalised name + "craving bhaag rahi hai" copy. Tap opens app to Chor Police state. | Zepto notifications are generic and ignored |
| U2 | As Aanya, I want to see the campaign banner immediately on home, so I understand what's happening without effort. | Banner is first content below search bar. Tap takes me directly to ice cream listing in Chor Police mode. | Campaign context lost if buried in home feed |

### JTBD 2: Experience the chase

| # | Story | Acceptance Criteria | Pain Point |
|---|-------|-------------------|------------|
| U3 | As Aanya, I want the ordering flow to feel like I'm part of a story, so the wait feels alive instead of dead. | Every screen (listing, detail, cart, payment, confirmed, tracking) has Chor Police framing — no screen breaks the narrative. | Standard order tracking is passive and boring |
| U4 | As Aanya, I want to know my rider's name and see the chase progress in real time, so I feel connected to the delivery. | Rider name randomised and shown from screen 8 onwards. Tracking map shows rider moving, 5 tap-through states. | Anonymous "rider on the way" is unmemorable |
| U5 | As Aanya, I want the craving meter to feel urgent, so the FOMO of the 10-minute window is real. | Craving bar animates to 73–98% on product detail. Status text escalates (CRITICAL / HIGH / DANGEROUS). | No urgency signal in current ordering flow |

### JTBD 3: Capture and share the moment

| # | Story | Acceptance Criteria | Pain Point |
|---|-------|-------------------|------------|
| U6 | As Aanya, I want to receive an FIR card that is specifically about me, so it feels personal enough to share. | Card shows: my name, my product, rider name, exact delivery time, FIR number, time-sensitive verdict line. No two cards identical. | Generic order receipts have zero share value |
| U7 | As Aanya, I want to download the FIR card as a PNG in one tap, so I can send it to my group chat immediately. | html2canvas renders card at 3x resolution. Download triggers without error. Screenshot fallback if download fails. | Friction in sharing = no sharing |
| U8 | As Aanya, I want the FIR card to be funny without trying too hard, so I feel like I discovered it rather than that a brand pushed it at me. | Card uses absurdist official format (government notice aesthetic), Hinglish verdict, purple stamp — reads as found content, not ad content. | Branded shareable content feels like marketing |

---

## 13. MVP Scope

**MVP in one sentence:** A 9-screen Next.js prototype that takes a user from name entry to a personalised downloadable FIR card, with Chor Police framing on every screen — FIR revealed as a reward after the tracking chase completes.

### Hypotheses with Kill Signals

| H# | Hypothesis | Kill Signal | Gates |
|----|-----------|-------------|-------|
| H1 | The Chor Police framing makes the ordering flow more entertaining than a standard Zepto order | Users complete the full flow without dropping off at any screen | Entire mechanic |
| H2 | The FIR card is share-worthy without prompting | < 10% download rate on prototype demo = mechanic needs redesign | Output format |
| H3 | Personalisation (name, rider, time) drives share behaviour | Users screenshot/download without being told to | Personalisation investment |
| H4 | Zepto brand recognition holds without explicit logo on every screen | Evaluators identify it as Zepto from screenshot alone | Brand system |

Kill condition: if the evaluator's first response to the FIR card is "what is this?" rather than "I would send this" — rethink the format.

### In Scope

| Feature | Description | Priority |
|---------|-------------|----------|
| 9-screen flow | All screens interactive, back button on each | P0 |
| Personalised FIR card | Name, product, rider, time, charge, verdict — no price | P0 |
| PNG download | html2canvas, 3x resolution, inline on tracking screen | P0 |
| Zepto brand system | #8B2FC9 purple, #FF2D55 hot pink, DM Sans | P0 |
| Hinglish body copy, English CTAs | Aanya's voice without friction | P0 |
| 5-state tracking | Auto-advance (3500ms per state), Skip button for demos | P0 |
| Multi-item cart | Per-product +/- controls, bill summary, sticky View Cart bar | P0 |
| Craving meter animation | Product detail screen | P1 |
| Randomised variables | Rider name, delivery time, FIR number, charge, order time | P1 |
| Time-sensitive verdict + charge | Weekday/weekend/hour-of-day logic | P1 |
| Locked FIR preview on confirmed screen | Blurred skeleton, unlocks after tracking completes | P1 |

### What We Left Out and Why

| Feature | Why Excluded | Phase |
|---------|-------------|-------|
| Real Zepto API / data | Prototype — no backend needed | Never (prototype) |
| Push notification (real) | Demo simulates it via screen 2 | V1 if shipped |
| Multi-city copy | Mumbai only. Localisation cost vs. demo value | V2 |
| Category reusability (Maggi, chips) | Ice cream is the brief; other categories are extension play | V2 |
| Share to WhatsApp/Instagram native | html2canvas download + screenshot is sufficient for demo | V2 |
| Sound / haptics | Out of scope for prototype | V2 |

---

## 14. Trade-offs

### Known Trade-offs

| Trade-off | What We Gave Up | Why |
|-----------|----------------|-----|
| Campaign format (time-limited) vs. permanent feature | Permanent brand investment | Brief format is campaign-first; permanent is the V2 quiet persistence |
| Web prototype vs. native app | Native interactions, real push notifications | Brief allows web prototype; maximises shareability of demo |
| Hinglish throughout vs. bilingual option | Non-Hindi speakers (South India) | Aanya is the target; Mumbai metro is the launch market |

---

## 15. Open Questions

| Question | Owner | Due date | Status |
|---|---|---|---|
| Does the FIR card format test well with 3 guerrilla users? | Gopal | Before submission | Open |
| Should verdict lines be expanded (more time-of-day conditions)? | Gopal | Before build | Open |
| Should rider photo/avatar be added to the FIR card? | Gopal | Before build | Open |
| Does the craving meter feel like urgency or gimmick? | Gopal | After first prototype run | Open |

---

## 16. Rollout Plan

**Approach:** Design brief submission — prototype demo + strategy memo + screen recording.

- **Prototype:** Complete 10-screen Next.js app, deployed on Vercel
- **Strategy memo:** One-page `docs/strategy-memo.md` — opinionated, one mechanic, no hedging
- **Screen recording:** 30 seconds, landscape, recorded on phone running the prototype in mobile browser
- **Submission:** 23 March, 11:59 PM (brief deadline)

If selected and moved to production:
- Phase 1: Mumbai soft launch, Chor Police banner on ice cream category
- Phase 2: Full Mumbai campaign with push notification trigger
- Phase 3: Category extension (Maggi, chips, chocolate) with modified FIR copy

---

## 17. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| FIR card format doesn't read as shareable to evaluators | Low | High | Guerrilla test with 3 users before submission |
| html2canvas fails to render card in demo | Medium | High | Screenshot fallback copy on screen 10 |
| Brand system doesn't read as Zepto without logo | Low | High | Hot pink CTAs + deep purple bg are unmistakable |
| Copy feels forced/cringey rather than natural Hinglish | Medium | Medium | Run copy by 1–2 native Hinglish speakers before submission |
| Brief evaluators prefer a safer, less absurdist mechanic | Low | Medium | Strategy memo makes the opinionated case — this is the right call |
| Google Fonts CDN fails to load | Low | Low | Inter fallback maintains readability |
| Evaluator demos on desktop instead of mobile | Medium | Medium | Prototype is mobile-first 390px — test on mobile only |

---

## 18. The Moonshot (Phase 2+)

Chor Police starts as an ice cream campaign. Its real potential is as Zepto's permanent brand language for every impulse category.

Every late-night craving — Maggi, chips, chocolate, medicine, phone charger — is a chase. Every rider is a cop. Every delivery is a case closed. The FIR card becomes Zepto's native shareable format the way the Spotify Wrapped card became Spotify's.

### How It Works

| Track | What Happens | Output |
|-------|-------------|--------|
| Ice cream (launch) | Chor Police campaign — summer 2026 | FIR card, Hinglish, viral |
| All impulse categories | Copy adapts per category — "Bhook ka attempted escape", "Sar dard neutralised" | Category-native FIR cards |
| City expansion | OOH triggers in new cities — local Chor Police station names | Geo-specific FIR cards |
| Personalisation depth | Order history used for craving count ("Your 7th ice cream this month") | Identity-level personalisation |

### Why Not Now

Prototype must prove the core mechanic. FIR card format must validate as shareable. Category extension requires copy investment. Core hypotheses H1–H4 must pass first.

### If Validated

Zepto owns the only brand language in Indian QC that makes speed emotional. Every category, every city, every late-night craving becomes Zepto's story to tell. Blinkit's Scream is a campaign. Chor Police is an identity.

---

*Research sources: `~/zepto-scream-research.md` — 25+ sources, full citations available*
*Last updated: 2026-05-25 | Author: Gopal Singh Lora*
