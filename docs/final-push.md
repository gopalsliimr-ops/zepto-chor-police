# Final Push — Zepto × Chor Police — Brief Submission

*This is the submission checklist. Work through it top to bottom. Do not submit until every item is checked.*

---

## Pre-Submission Checklist

### Prototype (`index.html`)

- [ ] Opens in Chrome without any console errors
- [ ] Full flow works: Name → Notification → Home → Listing → Detail → Cart → Payment → Confirmed → Tracking × 5 → FIR Card
- [ ] Name entered on Screen 1 appears on Screen 2 notification and Screen 10 FIR card
- [ ] Selected product name + price appear correctly in Cart and FIR card
- [ ] Rider name is random (not hardcoded "Anil K." or "Inspector Z.")
- [ ] FIR number is random (format ZPT-2026-MUM-XXXX)
- [ ] Delivery time is random (7m 42s – 9m 28s range)
- [ ] Verdict is time-of-day aware (not always the same line)
- [ ] Craving intensity bar animates on Screen 5 entry
- [ ] Rider dot moves on each tracking state advance
- [ ] 5th tracking tap goes to FIR card (not loop back)
- [ ] DOWNLOAD PNG produces an actual PNG file
- [ ] FIR card PNG contains: user name, product, rider name, FIR number, ZEPTO stamp, verdict
- [ ] Renders correctly at 390px width on desktop Chrome
- [ ] Back button present on Screens 2–10

### Hinglish Copy

- [ ] No English-only CTA buttons (should be "CHOR POLICE BULAO →" not "Call Police")
- [ ] No hardcoded "Anil K." anywhere in the HTML
- [ ] FIR verdict is italic in Courier Prime
- [ ] No "Amazing!" or "Welcome back!" anywhere

### Visual

- [ ] Background is `#1A0A2E` (deep purple) — not white, not generic dark
- [ ] CTAs are `#FF2D55` (hot pink) — not orange, not purple
- [ ] FIR card is cream `#F5F0E8` — not white, not purple
- [ ] ZEPTO purple stamp (`#8B2FC9`) appears on FIR card
- [ ] DM Sans loading correctly (not falling back to system font)
- [ ] Courier Prime loading correctly on FIR card

---

## The Three Deliverables

| Deliverable | File | Status |
|---|---|---|
| Working prototype | `index.html` | [ ] Done |
| Strategy memo | `docs/strategy-memo.md` | [ ] Done |
| 30-second recording | `zepto-chor-police-demo.mp4` | [ ] Done |

All three are required. Do not submit with any missing.

---

## Screen Recording

**Duration:** 30 seconds maximum. Landscape orientation.

**Flow to record (every second counts):**

| Second | Action |
|---|---|
| 0–3 | Type your name, tap CHOR POLICE BULAO |
| 3–6 | Tap notification screen |
| 6–9 | Tap campaign banner on home |
| 9–12 | Tap a product on listing |
| 12–15 | See craving bar animate, tap CART MEIN DAALO |
| 15–18 | Tap PROCEED KAR on cart |
| 18–21 | Tap OPERATION CONFIRM KARO on payment |
| 21–24 | See dispatch screen, tap TRACK KARO |
| 24–28 | Tap AAGE BADHAO × 5 — show rider moving |
| 28–30 | FIR card reveals. PAKAD LIYA. Done. |

**Recording setup:**
- Use QuickTime Player → New Screen Recording → iPhone Mirroring OR
- Open Chrome DevTools → Toggle device toolbar → iPhone 14 Pro (390px) → Record screen
- Landscape = rotate the device view or record in landscape mode

**Do not show:**
- Console errors
- Browser URL bar with localhost
- Cursor on mobile view (use touch simulation in DevTools)

---

## Strategy Memo

One page. Written for the Zepto Builder Series jury. Structure:

1. **The brief** — Blinkit Scream created mass participation. Zepto needs its own version.
2. **The insight** — Every Zepto order is already a 10-minute chase. We just named it.
3. **The mechanic** — Chor Police: craving = fugitive, rider = cop, 10 minutes = game clock.
4. **Why it works** — maps to Zepto's actual product (speed), zero ops changes, ships inside the existing app, FIR card is a native shareability hook.
5. **The result** — a brand moment Aanya screenshots before she opens the packaging.

---

## Deploy Steps

```bash
# 1. Confirm clean state
git status

# 2. Push to GitHub
git push origin main

# 3. Vercel auto-deploys from GitHub on every push to main
# Preview URL auto-generated — test it end to end before submitting

# 4. Promote / confirm production URL
# → https://zepto-chor-police.vercel.app (or similar)
```

**GitHub:** https://github.com/gopalsliimr-ops/zepto-chor-police
**Vercel:** Auto-deploys from main on every push — no manual deploy needed

---

## Post-Deploy Verification

After every push, open the Vercel URL and verify:
- [ ] Page loads (not a 404 or blank screen)
- [ ] Fonts load correctly (DM Sans + Courier Prime)
- [ ] Full flow works on mobile (open on phone, not just DevTools)
- [ ] FIR card PNG downloads correctly on mobile Safari + Chrome
- [ ] No console errors

---

## Submission

**Brief:** Zepto Builder Series — Brief #01 (Scream for Ice Cream)
**Format:** Submit Vercel URL + `strategy-memo.md` + attach screen recording

**Final deliverables:**
```
GitHub:  github.com/gopalsliimr-ops/zepto-chor-police
Vercel:  zepto-chor-police.vercel.app  ← live shareable URL
Memo:    docs/strategy-memo.md         ← submit this
Video:   zepto-chor-police-demo.mp4    ← attach this
```

---

## What Good Looks Like at Submission

The jury opens `index.html`, types their name, and 90 seconds later they're holding a personalised FIR card with their name on it. They screenshot it and send it to someone before they even finish reading the strategy memo.

That is the only test that matters.

---

*Last updated: 2026-05-25 | Author: Gopal Singh Lora*
