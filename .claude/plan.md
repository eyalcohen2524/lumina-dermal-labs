# Implementation Plan: Website Feedback Items (SCOPE EXPANSION)

## Summary of Decisions
- **Mode:** SCOPE EXPANSION — fix all feedback + cut the cord from charmetique.com
- **Old domain:** Full migration — zero links to charmetique.com
- **Newsletter:** Mailto fallback on submit
- **Scar images:** Deferred — waiting for WhatsApp files
- **Social URLs:** Use instagram.com/charmetique and tiktok.com/@charmetique
- **Shopify:** Add direct checkout link alongside existing Add to Cart
- **Our Story:** Combined section (Story + Mission + Vision) on homepage
- **Footer i18n:** Full i18n across all 5 languages

---

## Work Items (ordered by implementation sequence)

### 1. Create "Our Story" section component
**File:** `components/OurStory.tsx` (new)
**What:** New homepage section with id="story" combining:
- **Our Story:** "Driven by a passion for innovation..." (from old site)
- **Mission:** "At Charmétique, our mission is to deliver luxurious..." (from old site)
- **Vision:** "At Charmétique, the vision is to create a future..." (from old site)
**Design:** Elegant 2-column layout. Story on left, Mission+Vision stacked on right. Serif headings, matching the site's luxury aesthetic.
**Integration:** Add to `App.tsx` between `<Hero>` and `<Ingredients>` in the home view.
**i18n:** Add `story` keys to all 5 locale files (en, nl, de, fr, es).

### 2. Create Shipping page
**File:** `components/ShippingPolicy.tsx` (new)
**What:** New view with shipping policy content from old site:
- Shipping Destinations
- Costs and Delivery Times
- Order Tracking
- Delays
- Contact info for questions
**Integration:** Add `'shipping'` to `currentView` union type in `App.tsx`. Add route.
**i18n:** Add `shipping` keys to all 5 locale files.

### 3. Create Returns page
**File:** `components/ReturnsPolicy.tsx` (new)
**What:** New view with return policy content from old site:
- Eligibility (14 days, unused/unopened)
- How to Return (email process)
- Refunds (30 working days)
- Exclusions
- Return Shipping Costs
**Integration:** Add `'returns'` to `currentView` union type in `App.tsx`. Add route.
**i18n:** Add `returns` keys to all 5 locale files.

### 4. Update Footer
**File:** `components/Footer.tsx`
**Changes:**
- a) **Remove WhatsApp and LinkedIn icons** — delete the 2 SVG `<a>` elements
- b) **Add real URLs** to Instagram (`https://instagram.com/charmetique`) and TikTok (`https://tiktok.com/@charmetique`), open in new tab with `target="_blank" rel="noopener noreferrer"`
- c) **Update Shipping/Returns links** — change from external `charmetique.com` links to internal `onNavigate('shipping')` / `onNavigate('returns')` buttons
- d) **Remove the 10 redundant legal links** section (Your Rights, Cookie Policy, Disclaimer, Terms and Conditions, etc.) — these are already covered in Privacy and Policy
- e) **Fix Newsletter form** — add `onSubmit` handler that opens `mailto:info@charmetique.com` with subject "Newsletter Signup" and body containing name/email. Add form validation (required fields, email format). Show success message after submission.
- f) **Add full i18n** — replace all hardcoded English strings with `t()` calls
- g) **Update `onNavigate` prop type** to include `'shipping'` and `'returns'`

### 5. Add direct Shopify checkout link
**File:** `components/OfferStack.tsx`
**What:** Add a "Buy Now" direct link button below the Shopify Buy Button that goes straight to Shopify checkout URL in a new tab. Text: "Buy Now — Direct Checkout" (translated).
**URL:** `https://11ze23-ty.myshopify.com/products/charmetique-hydrating-scar-cream-30-ml`
**i18n:** Add `offer.buyNow` key to all 5 locale files.

### 6. Brighten "Factors Influencing Scar Formation" background
**File:** `components/UnderstandingScars.tsx`
**What:** Change the background of the Factors section from the current dark/gray to a lighter, brighter tone (e.g., `bg-amber-50` or `bg-stone-100` with warm tint). Adjust text colors for contrast.

### 7. Update App.tsx routing
**File:** `App.tsx`
**Changes:**
- Add `'shipping' | 'returns'` to `currentView` type
- Import `ShippingPolicy` and `ReturnsPolicy` components
- Add conditional renders for new views
- Update `handleNavigate` type signature
- Import `OurStory` component and add to home view

### 8. Update Navbar
**File:** `components/Navbar.tsx`
**What:** Ensure the "Our Story" nav link scrolls to `#story` section on homepage (it should already work via the existing anchor system, but verify).

### 9. Update all locale files with new translations
**Files:** `locales/en.json`, `locales/nl.json`, `locales/de.json`, `locales/fr.json`, `locales/es.json`
**New keys needed:**
- `story.*` — Our Story, Mission, Vision content
- `shipping.*` — Shipping policy page content
- `returns.*` — Returns policy page content
- `footer.*` — All footer section headers and labels
- `offer.buyNow` — Direct checkout button text
- `newsletter.*` — Newsletter form labels and success message

---

## NOT in Scope
- Scar illustrations (Surgical/Hypertrophic) — waiting for WhatsApp image files
- Real newsletter backend (Mailchimp, SendGrid, etc.) — mailto is the agreed solution
- Shopify Buy Button refactor — keeping existing Add to Cart alongside new direct link
- SEO metadata/og tags — separate concern
- Analytics/tracking — separate concern

## Deferred TODOs
1. **Add scar illustrations** when WhatsApp image files are received (P1)
2. **Replace mailto newsletter** with proper email service when ready (P2)
3. **Verify social media URLs** match actual brand accounts (P1)
4. **Add Shopify direct checkout variants** per bundle (1/2/3 units) if Shopify supports it (P2)

## Architecture Diagram
```
  App.tsx
  ├── Navbar (+ Our Story anchor link)
  ├── Home View
  │   ├── Hero
  │   ├── OurStory (NEW) ←── id="story"
  │   ├── Ingredients
  │   ├── BeforeAfter
  │   ├── OfferStack (+ direct checkout link)
  │   ├── Reviews
  │   └── FAQ
  ├── Scars View (UnderstandingScars — brighter Factors bg)
  ├── Contact View
  ├── Privacy View
  ├── Shipping View (NEW)
  ├── Returns View (NEW)
  ├── Footer (UPDATED: i18n, social links, no legal grid, newsletter works)
  ├── StickyCTA
  ├── CartDrawer
  └── ExitIntentModal
```

## Files Touched
| File | Action | Scope |
|------|--------|-------|
| `components/OurStory.tsx` | CREATE | New component |
| `components/ShippingPolicy.tsx` | CREATE | New component |
| `components/ReturnsPolicy.tsx` | CREATE | New component |
| `components/Footer.tsx` | EDIT | Major rewrite |
| `components/OfferStack.tsx` | EDIT | Add direct checkout link |
| `components/UnderstandingScars.tsx` | EDIT | Brighten Factors bg |
| `App.tsx` | EDIT | Add routes + imports |
| `locales/en.json` | EDIT | Add new translation keys |
| `locales/nl.json` | EDIT | Add new translation keys |
| `locales/de.json` | EDIT | Add new translation keys |
| `locales/fr.json` | EDIT | Add new translation keys |
| `locales/es.json` | EDIT | Add new translation keys |

**Total: 12 files (3 new, 9 edited)**
