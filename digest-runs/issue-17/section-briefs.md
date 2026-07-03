# Issue 17 — Section Briefs (Phase 3 planning contract)

**Format:** Standard Weekly · **Window:** 2026-06-26 → 2026-07-03 · **Generated:** 2026-07-03 (Phase 3)
**Input:** `run-plan.md` (Phase 2). Phase 4 writes against THIS file + the run plan. No re-curation here — slots are fixed; this document sets opener/sidebar/jargon/quote/visual/word-count detail only.

---

## COMPONENT MANIFEST (3–5 cap; baseline items excluded)

**Counted components this issue (4):**
1. **Lead inline SVG chart** (`<svg>` grouped / before-after bar) — real diagram, visual slot 1.
2. **QT1 compare-table** (`.compare-table`, ≤5 rows × 2 cols) — real table, visual slot 2.
3. **Editorial Moment stats tile** (`.stats-tile`) — the ME-loyalty number of the week.
4. **In Practice process-flow** (`.process-flow`, `.pf-step`/`.pf-arrow`) — adoption → super-user funnel, real diagram, visual slot 3.

**Baseline (NOT counted toward the cap):** In Practice section, Jargon Watch (×2), Concept of the Week (×1), author cards (×3), the once-per-issue Lead `.pq-bar`, the Leadership Read centred blockquote card, the Outside In `.oi-callout`, the `.radar-timeline`.

**Why this combination:** the four counted components are exactly the ones that carry data the prose can't (hiring-collapse trend, tool-pricing tiers, ME market size, adoption funnel). Three of the four are real diagrams/tables — comfortably clears the 1–2 real-diagram floor. Nothing decorative is added; the issue stays magazine-dense without crowding past 6 visuals.

**Rotated OUT / not used:** Feature article, The Stack, Down the Rabbit Hole (cadence decisions below), `.article-with-sidebar` (deep-dive only), `.sidebar-box.compliance` (no genuine own-firm regulatory angle — QT2 is framed as "the world the reader operates in," not a compliance briefing).

---

## CADENCE-GATE DECISIONS (vs state file)

- **Feature article** — `last_feature_date = null`. Occasional (every 2–4 issues); not required. **SKIP.** No mid-tier 400–600w candidate; the three anchors + full back-of-book already fill the page budget.
- **The Stack** — `last_stack_date = null`. Occasional (every 3–5 issues). **SKIP.** No technical-for-managers explainer earns 300–500w this week; QT1's metering mechanics are handled by inline gloss + compare-table, not a Stack.
- **Down the Rabbit Hole** — `last_rabbit_hole_date = 2026-06-26` (**ran LAST issue**). Recurring every 1–2 issues; inclusion allowed but optional. **SKIP / SPACE THIS WEEK.** The only candidate (Cloudflare fibre-cut / shared-transit) is already surfaced in On the Radar as a follow-on, and running the section back-to-back weakens its "trusted single pick" signal. Omit cleanly; it returns Issue 18. (This also keeps the component count lean at 4.)
- **In Practice** — recurring (~9 of 10 issues); week 2 of the current season. **INCLUDE** (Atlassian / Prabhakar).
- **P0 status card** — `p0_stories_tracking = []`. No P0 in flight. **OMIT.**

---

## VISUAL BUDGET (target 4–6; ≥1–2 real diagrams) — planned at 6, three real

| # | Visual | Type | Section | Real diagram? |
|---|--------|------|---------|---------------|
| 1 | Junior-hiring collapse + AI-cited cuts | inline SVG before/after bar | Lead | **REAL** |
| 2 | Entry vs power-tier AI-coding pricing | `.compare-table` (≤5×2) | QT1 | **REAL** |
| 3 | ME consumer-loyalty market ~$3.4bn | `.stats-tile` | Editorial Moment | no |
| 4 | Adoption → super-user funnel | `.process-flow` | In Practice | **REAL** |
| 5 | Core-insight pull quote | `.pq-bar` (once-per-issue) | Lead | no |
| 6 | Larson revised-rule pull | centred blockquote card | Leadership Read | no |

**Per-section floor (v1.30) check — no major section pure prose:**
- Lead ✓ (SVG chart + pq-bar) · QT1 ✓ (compare-table) · **QT2 ✓** (36px anchor-stat pullout `140+` / `−13%`; substitution insurance: a `.sparkline` of USDT ~62% vs USDC ~25% incumbent share if the anchor stat alone reads thin) · In Practice ✓ (process-flow) · Outside In ✓ (`.oi-callout` + author card) · Leadership Read ✓ (blockquote card).
- **Visual substitution (v1.31):** if a planned visual can't be sourced cleanly, Phase 4 substitutes per the spec order rather than shipping prose. Named fallbacks: Lead SVG → `.by-the-numbers` callout of the same figures; compare-table → stats row of two representative tiers; funnel → single `.stats-tile` ("~30% of staff = super users").

---

## JARGON / CONCEPT ALLOCATION (v3.7 scan + v1.28)

**Jargon Watch (technical, deep-teal border) — 2 boxes:**
- **Lead box** — glosses **"AI-washing" / "AI redundancy washing"** (layoffs dressed as automation) and **"system verifier"** (the senior role that reviews/owns agent output). Gloss **"seniorised roles"** inline (entry titles rewritten to demand 3–5 yrs). *Numerical trigger:* "AI-washing" and "system verifier" each recur 3+ times in the Lead → box is mandatory, not optional.
- **QT1 — inline gloss, no box** (compact featured card, no room): gloss **"metered / usage-based pricing"** on first use (appears 3+ times → mandatory) and **"session-hour / AI-credit billing"**. One em-dash aside each; do not stack a sidebar into a 60%-width card.

**QT2 — inline gloss, no box** (compact 40% card): gloss **"stablecoin"** on first use (recurs 3+ times → mandatory) and **"reserve revenue sharing"** (issuer returns most interest earned on reserves, minus a fee). "Open USD / OUSD" defined on first use.

**In Practice — inline gloss:** **"AI Working Agreements"**, **"AI Retros"**, **"super users"** (≈40+ AI uses/week, ~30% of staff) — the last is also a funnel label, so the visual carries it; one inline line suffices.

**Concept of the Week (management craft, accent-orange border) — 1 box, anchored to the Lead:**
- **"The junior / apprenticeship pipeline"** — plain-language gloss for the year-one EM (incl. non-technical route): why freezing graduate hiring *now* empties the senior/"system-verifier" bench in 3–5 years. This is the issue's load-bearing craft idea and belongs in orange, not teal (it's an org-design concept, not a technical term).

---

## PULL-QUOTE ALLOCATION (v1.26 — one quote → one slot; URLs verified this phase)

| Slot | Quote / pull | Attribution | Source URL | Verified |
|------|--------------|-------------|------------|----------|
| Lead `.pq-bar` | **Editorial distillation** of the pipeline argument (digest's own line, e.g. "Stop hiring juniors today and the senior verifiers of 2029 never get trained.") — **NOT attributed to a named source.** | Digest editorial (unattributed) | — | n/a — deliberately editorial to avoid inventing a source quote for "system verifier" |
| QT2 body quote | "…returns most reserve revenue minus a small management fee" / Abrams as interim CEO of the Open Standard | Zach Abrams | Fortune (Phase-2 WebFetch-confirmed) | ✓ (Phase 2) |
| Outside In `.oi-callout` | **"Everybody's ignorance has been reset to 100."** (fallback char.: "engineers who built careers on beautiful, readable code are struggling more than anyone else") | Charity Majors / Kent Beck conversation — **Phase 4 MUST confirm the speaker from the transcript before attributing; if unconfirmable, present as the piece's framing, not a named-mouth quote** | https://newsletter.kentbeck.com/p/run-out-to-meet-it | ✓ resolves (301 from tidyfirst.substack.com) |
| Leadership Read blockquote card | **"Your team and company can only benefit from this increased pace of execution if you can make durable decisions quickly, and those decisions are good."** | Will Larson (lethain) | https://lethain.com/revised-rules-of-engineering-leadership/ | ✓ verbatim confirmed |

No quote appears in two slots. The Lead pq-bar is editorial (not a source quote), so no attribution-fidelity exposure.

---

## SECTION-BY-SECTION BRIEFS

### Foreword
- 50–80w, one editorial point, drop-cap. Find the thread between the three anchors (org → delivery economics → the rail beneath both) without listing them. **No editor's note** (Vol. II refresh note retired after Issue 12).
- Opener style: **summary-first** thesis line (reserved here so the Lead can take stat-first).

### Editorial Moment — **Number of the week** (non-AI)
- **Variant call:** Number of the week, `.stats-tile`. `last_editorial_moment` was also number_of_the_week — v3.5 says pick on substance, not rotation; this is the cleanest non-issue-story number and serves the ME/commerce-media reader, so two-in-a-row is acceptable. **Variety fallback if Phase 4 prefers:** "Worth a second look" connecting Open USD's reserve-revenue-share to loyalty/commerce-media economics (still non-AI) — but that drops the stats-tile from the budget (→5 visuals, still compliant).
- **Stat:** ME consumer-loyalty market ~$3.4bn (2026), ~15%/yr → ~$5.6bn by 2030. One "why it matters" line.
- **Source:** Novus Loyalty / market report via Yahoo Finance (Phase 4 confirms the URL resolves; if not, substitute a verifiable ME-loyalty figure or fall back to "Worth a second look").

### Lead — "The AI-washing layoffs and the pipeline that isn't being built"
- **Concern:** Management & teams. **Section label palette:** orange.
- **Opener:** **stat-first** (17% → 43% of firms freezing junior hiring). Must differ from every other section — it does.
- **Structure:** h3 subheadings every 1–2 paragraphs. Target **~380w** (300–400).
- **Agent-terminology precision (mandatory):** state explicitly that "AI-cited" cuts conflate genuine automation with cost-cutting dressed as automation — name which end.
- **Visual:** inline SVG before/after bar (17%→43% freezing junior roles; 35% growth in "seniorised" entry roles; 87,714 AI-cited cuts YTD vs 38,579 in May). Multi-source → SVG warranted.
- **Components:** Lead `.pq-bar` (editorial, per table above); **Jargon Watch** box (AI-washing, system verifier); **Concept of the Week** box (junior/apprenticeship pipeline).
- **Sidebar:** the Jargon Watch + Concept boxes float right with the opening paragraphs — do NOT also add a `.sidebar-box-float` context panel (two floats would crowd a 380w article). If more context is needed, prefer inline.
- **Throughline (optional, ONE sentence):** Issue 13 Fortune Leadership Read ("empty pipeline of 2028") — same argument, now with fresh 43% data. Use only if it adds substance.
- **Sources:** TechCrunch running-layoffs list (30 Jun); PwC 2026 Global AI Jobs Barometer; Oliver Wyman / IEEE Spectrum on entry-level erosion. Phase 4 confirms each resolves.

### QT1 — "The flat-rate era of AI coding is over" (QT-B **featured**, ~60%)
- **Concern:** Ways of working. Header bar **teal** (DevEx/WoW). **Layout:** QT-B featured + compact (QT1 featured, QT2 compact). `last_qt_layout` = qt-a; v3.5 = pick on material, QT-B fits (QT1 clearly the meatier story). Target **~230w** (150–250).
- **Opener:** **narrative-first / reality-check** — the 1 Jul refresh, framed by the *decision* (open a finance conversation on metering, caps, overage ownership), not the tool release.
- **Anchor stat (36px, teal):** $30–40 per agentic session; team budget $200–500/mo before overages.
- **Visual:** `.compare-table` — entry vs power tier across Claude Code / Cursor / Copilot / Devin (≤5 rows × 2 cols). Real table.
- **Jargon:** inline gloss "metered / usage-based pricing" + "session-hour / AI-credit billing" (no box — see allocation).
- **News-event footing note:** core Copilot billing event is 1 Jun (out of window). Stand the in-window hook on the 1 Jul reality-check refresh (Cursor $120 tier, Claude Code session-hour pricing). If Phase 4 can't stand up a genuinely in-window development, treat QT1 as the single permitted analysis anchor — the Lead + QT2 keep anchor balance ≥2 news events regardless.
- **Takeaway line (`<p><strong>`):** AI coding has moved from a fixed per-seat licence to a variable cost centre.
- **Sources:** Developers Digest / GetDX (Phase 4 confirms URLs).

### QT2 — "Open USD: the payments rail rewrites its own economics" (QT-B **compact**, ~40%)
- **Concern:** Wider landscape / banking-loyalty surfacing. Header bar **orange** (Banking/Fintech). Format: anchor stat + 2–3 sentences + takeaway, **no subheadings**. Target **~110w**.
- **Opener:** **quote-first** OR stat-first — must not duplicate QT1's narrative-first or the Lead's stat-first; use **quote-first** (Abrams) to keep openers distinct across the issue.
- **Anchor stat (36px, orange):** 140+ firms; Circle −13% ($66); USDT ~62% / USDC ~25% incumbent share.
- **Frame:** "the world the reader operates in" — the settlement substrate agentic-commerce protocols plug into. Reserve-revenue-sharing = new merchant/partner economics (loyalty/commerce-media surfacing note). **NOT** a compliance briefing (no compliance side-note).
- **Body quote:** Zach Abrams (Fortune-confirmed) — see allocation table.
- **Jargon:** inline gloss "stablecoin", "Open USD / OUSD", "reserve revenue sharing".
- **Visual floor:** the anchor-stat pullout satisfies it; optional `.sparkline` (USDT 62% vs USDC 25%) as insurance.
- **Takeaway line:** the rail the reader's bank customers settle on is changing who earns the float.
- **Sources:** Fortune; The Block (Circle −13%). Phase 4 confirms.

### In Practice — Atlassian AI operating-model rebuild (season week 2)
- **Season:** "Ways of working in the agent era — operating-model change after adoption" (week 1 = Spotify). **Piece:** Avani Prabhakar (Chief People & AI Enablement Officer), 29 Jun, *Inside Atlassian*. Named operator, real org, journey-not-framework, implication-level.
- **AI-substrate** — this is the ONE AI-primary long-form; Outside In + Leadership Read are locked non-AI (see risk note re: Outside In).
- **Header:** v1.31 off-white `.in-practice-header` flowing into `.in-practice` body; preceded by `<hr class="feature-break">`. Target **~380w** (300–450). **Author card** at top (Prabhakar).
- **Visual:** `.process-flow` funnel — all staff → active users → super users (~40+ AI uses/week, ~30% of staff). Real diagram.
- **Jargon:** inline gloss AI Working Agreements, AI Retros, super users.
- **Closing:** "What to try" line (implication, not instruction).
- **Source:** https://www.atlassian.com/blog (Inside Atlassian; Phase 4 confirms the exact Prabhakar post URL resolves — if stale/unverifiable, flag back, do NOT improvise a URL).

### Other News This Week (3–6 items, between long-form sections)
- **Visa settles first live agentic-commerce payments in Europe** (2 Jul). **URL FIX (both verified resolving this phase — Phase 4 MUST use these, not the Phase-1 Payment Expert link that 403s):**
  - https://www.mynewsdesk.com/uk/visa/pressreleases/visa-and-banks-across-europe-reach-the-next-phase-of-agentic-commerce-unlocking-secure-access-to-merchants-3457328 (merchants: lastminute.com, Frasers, Cleverbridge, BrickDepot; 30+ EU issuers incl. Barclays, HSBC UK, NatWest, Revolut; Trusted Agent Protocol + Visa Payment Passkeys)
  - https://www.globenewswire.com/news-release/2026/07/02/3321259/0/en/WORLDLINE-Worldline-ING-and-Visa-complete-a-live-agentic-payment-transaction-in-Europe-Press-release.html (Worldline/ING/Visa live txn in Germany, SCA-compliant)
- **Mastercard Agent Pay for Machines** — context only (follow-on to the Issue 15 anchor; do NOT re-anchor).
- **Claude Sonnet 5** ships (if not carried by At a Glance).

### Outside In — Kent Beck, "Run Out to Meet It" (Format A, full feature)
- **Source/company:** Kent Beck × Charity Majors, *Tidy First?* / newsletter.kentbeck.com. Fresh subject (not in `outside_in_history`). **Author card** at top; **`.oi-callout`** for the core lesson; **"The takeaway"** line. Target **~320w**.
- **Opener:** **narrative-first** is taken by QT1; use **summary-first** is taken by Foreword — use a **thesis/observation opener distinct from all others** (an "everyone's ignorance reset" framing works as its own register). Ensure no two articles share an opener: Foreword=summary, Lead=stat, QT1=narrative, QT2=quote → Outside In should lean **context/observation** (a mindset thesis), Leadership Read=summary-of-rules. Keep them distinct.
- **oi-callout quote:** "Everybody's ignorance has been reset to 100." — **speaker attribution to be confirmed by Phase 4** (see allocation table); if unconfirmable, use the piece's framing unattributed.
- **URL:** https://newsletter.kentbeck.com/p/run-out-to-meet-it (301 from tidyfirst.substack.com/p/run-out-to-meet-it — Phase 4 cites the resolved newsletter.kentbeck.com URL).
- **⚠ LONG-FORM VARIETY RISK (v1.35) — FLAG:** the run plan labelled this "non-AI engineering-craft," but the piece is substantively about **AI resetting the value of engineering skill**. If read as AI-primary, that's 2 of 3 long-form on AI (with In Practice), breaching v1.35. **Mitigation for Phase 4:** frame Outside In around the *craft/mindset stance* — "run out to meet" change, the reset of expertise, why juniors may hold an edge — treating AI as the backdrop, not the subject. If Phase 5 still reads it AI-primary, escalate to Phase 2; the only logged non-AI OI backup (Forrester) was itself rejected as AI/payments-adjacent, so there is **no clean drop-in substitute** — this is the issue's thinnest sourcing point.

### On the Radar (timeline, `.radar-timeline`, between Outside In and Leadership Read)
- DORA "ROI of AI-Assisted Development" — ROI-as-capacity not headcount (awareness; out of window).
- **Cloudflare fibre-cut / shared-transit concentration risk** — dependency-mapping prompt (carries the tangent that would otherwise have been the Rabbit Hole).
- "Calibration in the AI era" practitioner cluster — velocity-based calibration breaking.

### Platform Updates — **1 row max (or omit)**
- Chrome emergency V8 update (CVE-2026-11645, actively exploited): patch now. **Omit entirely if the At a Glance "Action Required" tier fully carries Chrome — do not double-count.**

### The Leadership Read — Will Larson (lethain), non-AI
- **Piece:** "Revised rules of engineering leadership" (lethain, 15 Jun 2026 — Outside In/LR need not be in-window). navy `.mgmt-section`, drop-cap auto. **Author card** at top (Larson). Target **~480w** (400–600 floor; do not go below 400).
- **Opener:** summary/rules-first — distinct from the others.
- **Substance floor (v3.0.1):** name Larson's specific revised rules (verified verbatim this phase):
  1. Migrations can be done by an individual rather than a team.
  2. First-pass code is nearly free; the cost of *working* code depends on your development harness, and is not free.
  3. Optimise the base case of process for agents.
  4. Durable, high-ownership teams with domain context matter even more.
  5. Quick, good, durable decision-making is a prerequisite to benefit from AI.
  Use ≥2 concrete distinctions (e.g. rule 2's "1st-pass free vs working-code not free"; rule 4's "high-judgment individuals get hemmed in by lack of domain context"). Explicit takeaway.
- **Visual:** centred blockquote card with the verified Larson pull (allocation table). 
- **Non-AI framing:** Larson's rules touch AI but the *craft* is durable teams + fast decisions — frame as management craft, satisfying the "other two long-form non-AI" requirement (and shoring up the Outside In risk above).
- **Closing:** "This could be worth talking about:" prompt.
- **URL:** https://lethain.com/revised-rules-of-engineering-leadership/ (verified).

### The Week at a Glance (tiered) — best-polished section
- **Action Required:** Oracle PeopleSoft CVE-2026-35273 (CVSS 9.8, active exploitation, patch/verify) · Chrome V8 CVE-2026-11645 (actively exploited).
- **Worth Knowing:** Claude Sonnet 5 (1 Jul, lower cost) · Spotify 99% AI adoption / headcount-math (peer data point).
- **Watching:** Arista EOS zero-day — no patch planned (mitigation posture) · card-linked offers / "banks as media" reaching mainstream (reader-vertical context).
- Source links on any item not covered by a full article.

### Recommended Reading / Footer
- Linked list. Footer archive bar: last 5 issues as `.archive-pill`, Issue 17 highlighted `.current`.

---

## OPENER-DIVERSITY LEDGER (v3.5 — no two articles open the same way)
Foreword = summary-first · Lead = stat-first · QT1 = narrative-first (reality-check) · QT2 = quote-first · In Practice = scene/operator-first · Outside In = observation/thesis-first · Leadership Read = rules/summary-first (distinct register from Foreword — a numbered-rules frame, not a single thesis line). **Phase 4: confirm Leadership Read and Foreword read as visibly different openers; if they collide, shift the Foreword to a hook/observation.**

## SECTION SPREAD (v1.32) — interleave confirmed
Cover → Foreword → Editorial Moment → WAG → breather → **Lead** → QT1 → QT2 → breather → **In Practice** → Other News → Platform Updates → **Outside In** → On the Radar → **Leadership Read** → Recommended Reading → Footer. No two long-form sections adjacent (IP ↔ OI separated by Other News + Platform Updates; OI ↔ LR separated by On the Radar). PASS.

## OPEN RISKS FOR PHASE 4/5
1. **Outside In AI-primary risk (v1.35)** — highest-priority flag; framing discipline required (above). Thinnest sourcing point in the issue.
2. **Kent Beck oi-callout speaker attribution** — confirm from transcript or de-attribute.
3. **QT1 in-window footing** — 1 Jul reality-check refresh is the hook; if it won't stand up, QT1 becomes the single analysis anchor (still compliant).
4. **Editorial Moment / In Practice / Lead source URLs** — Phase 4 confirms each resolves before use; if any fails, flag back, don't improvise (esp. the Atlassian/Prabhakar and Yahoo/Novus links, not re-verified this phase).
5. **Visa EU URLs** — both replacement URLs verified resolving this phase; use them, not the Phase-1 403 link.
