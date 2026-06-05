# Issue 13 — Phase 5 Compliance Review (FULL)

**Verdict: FAIL** — 2 blockers, 4 minors. Issue is close but not ship-ready. All fixes are mechanical (fixable in the main loop); none requires a phase 2/3 send-back.

---

## Run-plan cross-check — PASS (with date drift, see B1)
- Lead = Visa/Mastercard agent commerce, framed Wider Engineering Landscape, pilot→GA-targeted-June. Matches plan. ✓
- QT1 = megamanager span-of-control (Pinnacle + Gallup), Management & teams. Matches. ✓
- QT2 = Microsoft MAI models (CNBC, Build 2 Jun), Ways of working. Matches. ✓
- **No barred story re-promoted to anchor.** Copilot pricing appears only as the QT2 throughline (line 418). Coinbase appears only as QT1 throughline (line 388) + On the Radar (line 573). Meta = data point inside QT1 + Editorial Moment, not anchored. Railway-GCP = Other News (477) + Radar (558). Stripe MPP = one row in the Lead comparison table (355), labelled "(Issues 11–12)". All correct. ✓

## Third-person voice (v1.31) — MINOR FAIL (B3)
Targeted grep for "the reader/your team/your firm/you must" etc. = **0**. ✓
But "your" appears 4× in the In Practice section (lines 457, 459, 463 ×1, 464). Line 464 is a verbatim Ghisi quote — acceptable. Lines 457/459 (process-flow labels "Your own org", "the teams beneath your managers") and 463 ("prove a change works in your own org") render Ghisi's framework in second person. These are not addressed to the digest's reader, but the v1.31 rule bans "your org"/"your managers" surface forms outright. **Recommend recasting to third person** ("the director's own org", "the teams beneath their managers", "act inside-out — prove a change in the home org first"). Minor, not a blocker.

## Epistemic reframing — BLOCKER (B2)
Structural recount = **3–4, exceeds cap of 2. FAIL.** Clear instances: (1) Lead pq-bar L361 "The question is no longer whether agents will pay — it is whose keys vouch for them"; (2) Outside In callout L518 "structural, not aesthetic"; (3) Leadership Read L606 "less like apathy and more like a rational read". Borderline 4th: QT2 L419 "a budget decision leaders own rather than a vendor default". **Fix:** rewrite two of these as direct declaratives (keep the strongest — the pq-bar — and the OI callout; recast L606 and L419).

## Phase-4 substitution integrity
- (a) Span-of-control figures — Gallup is named as source (L387, L408), Pinnacle as framing/analysis. 10.9→12.1, 8.2 (2013), Meta 50:1 all verified against Gallup. ✓ BUT year mislabel, see B4.
- (b) Outside In Vercel — transferable point on verified content (Design Engineer as first-class role, "Iterate to Greatness"), substitution test passes, dropped stacked-PR specifics correctly omitted. ✓
- (c) In Practice Ghisi — cited as Nubank (verified: Director of Eng, Mobile Platform, Nubank ✓), consistent throughout. No anti-overlap: Nubank (IP) ≠ Fortune (LR) ≠ Vercel (OI). ✓ BUT talk date wrong, see B1.
- (d) Leadership Read — states 12 April 2026 origin (L595), frames as resurfacing/fresh-this-week traction. ✓

## BLOCKERS
**B1 — In Practice talk date is factually wrong.** HTML says "February 2026" (author card L450, attribution L454). Verified: the talk is QCon London **2025** (InfoQ page states Feb 2025; conference was Apr 2025) — Ghisi's org grew to 100+ over the 3 years prior. Year is off by one and reads as in-window when it is ~15 months old. Fix: change "February 2026" → "QCon London, February 2025" in both the author-card date (L450) and the ip-attribution line (L454). (Run-plan's "16–19 March 2026" was also wrong; use 2025.)

**B2 — Epistemic reframing count = 3–4 > cap 2.** See above. Recast L606 and L419 to declaratives.

## MINORS
**B3 — "your" surface forms in In Practice** (L457/459/463) — recast to third person. (L464 quote is fine.)
**B4 — Gallup figure year mislabelled "2026".** Gallup attributes 12.1 to **2025**, not 2026 (10.9 was 2024). Affects cover stat-context is fine (50:1 Meta), but QT1 anchor-context L385 "per manager, 2026", body L387, mid-accent band L432, and SVG label L399 all say "2026". Change the 12.1 year reference to 2025 in those four spots.
**B5 (minor) — Lead agent-mode gloss L342** "not the assisted 'agent-mode' buttons" is a borderline 5th reframe; acceptable as agent-terminology precision (it satisfies the v2.6 first-use spectrum rule), leave it.
**B6 (minor) — Editor's note** correctly removed (none present). Spec requires removal from Issue 13. ✓

## Other checks — PASS
- AI-substrate ceiling: Lead (AI), QT2 (AI) = 2 AI-driven of 6 featured; QT1, Editorial Moment, In Practice, Outside In all non-AI. **2 of 6 ≤ 4.** ✓
- Long-form variety: In Practice (org scaling), Outside In (role shape/delivery), Leadership Read (pipeline strategy) — all non-AI, 3 aspects. 0 long-form AI-primary ≤ 1. ✓
- Visual floor: cover stat, Editorial Moment tile, Lead compare-table + pq-bar + Jargon Watch, QT1 inline SVG bar (real `<svg>` L390, confirmed) + Concept-of-week, QT2 stats, In Practice process-flow, OI callout, mid-accent band. **≥1 per major section; ≥2 real diagrams (compare-table + SVG bar).** No pure-prose section. Budget is on the high side (~6+ content visuals) but within tolerance. ✓
- Jargon: Lead payment terms glossed in Jargon Watch sidebar (TAP, Verified Agent ID, ICC, Agent Pay, tokenisation). "Span of control" = Concept-of-week. DORA glossed as "DevOps Research and Assessment survey… not the EU regulation" (L319). Agent spectrum named on first use (L342). ✓
- Lead date-framing: explicitly pilot→GA-targeted-June, "turning on this month, not already shipped" (L342, L345). Does NOT read as shipped GA. ✓
- Structure/pacing: order = WAG → breather → Lead → QTs → breather → mid-accent → IP → Other News → Platform Updates → OI → Radar → LR. No two long-form adjacent. ✓ Exactly 2 breathers. ✓ WAG three tiers (action/know/watch). ✓ Radar deadlines-first (10 Jun Exchange urgent). ✓ Foreword 1 para ~75 words single thread, no AI-default framing, no editor's note. ✓ Each QT + OI end with bold "The takeaway". ✓ LR ends third-person "This could be worth talking about:" prompt. ✓ Archive bar shows last 5 issues, issue-13 (5 Jun) current. ✓
- Palette: WAG/Foreword/IP-header labels default teal (structural). QT1 header orange (Management). OI orange. Operating-at-scale not misused as red. ✓
- Links: all section sources present and plausible (Visa, CNBC, Pinnacle, Gallup, InfoQ, Vercel, Fortune, SecurityWeek, The National, getDX). Verified Visa GA-June, Gallup figures, Ghisi/Nubank/InfoQ live. ✓
