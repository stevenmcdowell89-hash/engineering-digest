# Pre-Publish Review — Product Edition Issue 3 (August 2026)

Checklist: `references/compliance-checklist.md`, run end to end. **Result: PASS.** Two items were failed on first pass and fixed before this write-up; both are recorded below.

---

## Workflow Pipeline

| Check | Result |
|---|---|
| Run directory `product-runs/issue-3/` | PASS |
| `candidates.json` exists and parses; per-lens queries plus named non-AI queries | PASS — validated with `json.tool`. All four concern lenses queried explicitly; `queries_run` records 45 named queries |
| Named sweeps ran (v1.1/v1.3/v1.4) | PASS — competitor set by name (12 queries incl. Cardlytics, Reward/Rezolve, Fidel, Bink/Snoop/Triple, the networks' offers stacks, Amex Offers); UK bank set by name (8 queries covering Lloyds group, NatWest, Barclays, HSBC/First Direct, Santander, Nationwide/Virgin Money, TSB, Monzo, Starling, Revolut, Chase, plus the groups' newsroom pages); name-agnostic catch-alls (6); trade press by outlet incl. funder-side (10); region sweep ME/GCC, Europe, Asia (5). Quiet names recorded as quiet — Cardlytics, Fidel and the UK bank set all appear in *Also moving* as findings of silence, not omissions |
| Two-thin-months escalation | N/A — monetisation was Issue 2's lead trend and produced in-window material again (European Media Marketplace, 8 Jul). Recorded in `candidates.json` |
| `run-plan.md` names trends, ordering, roadmap threads, rejections with reasons, Source-map notes | PASS |
| `section-briefs.md` with per-trend briefs and roadmap-strip plan | PASS |
| Phase 4 cross-check: HTML trends match run plan (titles, order, count) | PASS — 3 trends, same titles, same order. No silent substitution |
| `review.md` with pass/fail summary | PASS (this file) |
| State read at start; written on publish only | PASS — `product-digest-state.json` read before Phase 1; unmodified until the publish step |

## Audience & Gate

- **Double-reject gate** — PASS. Every featured item changes a build/prioritise/position/partner decision. Reject-up cases were actively trimmed: Rezolve's FY26 revenue guidance is attached to the Zilch release and is not used; Visa's Q3 revenue and payments-volume records are not used, only the value-added-services product substance; Cardlytics' earnings scheduling and inducement grants are in *Also moving* as a silence marker, not as news. Reject-down cases trimmed too: Mastercard Wallet Services is held at "which apps can hold a credential", not SDK mechanics; the UCP signature-algorithm and 3-D Secure work is named in one clause to make the point that July's movement was plumbing, not incentives.
- **UK-first lens** — PASS. Trend 01 leads on a UK deal and flags Riyadh Air as Saudi Arabia; Trend 02 is anchored on UK banking groups with global adoption figures stated as global; Trend 03 flags Brazil, Mexico and Vietnam inline and states Dotdigital's four-market sample. **Interchange-trap scan: clean** — no "reward funding squeeze" framing appears. The one source carrying that argument (Europe Cashback Programs report, "the EU's interchange cap makes generous cashback financially unsustainable from bank margins alone") was excluded on date, 27 April 2026, and would have needed recontextualising regardless.
- **No corporate language** — PASS. Grepped for leverage/synergy/best-in-class/seamless/robust: no hits.
- **Inform, don't instruct** — PASS. Both `.investigate` closers state what shipped or what has not been switched on. Closer 01 ends "Neither is a forecast; both shipped in July"; closer 02 ends on the fifteen-stores contrast. No "worth scoping", no "should build", no second-person imperative anywhere in the issue.
- **Epistemic-reframing cap (≤2)** — PASS. One instance: "It is more specific now" in the Trend 02 closer. No "the question isn't X, it's Y" constructions.
- **Third person** — PASS. No rhetorical questions to the reader. "The reader's" appears twice, in the standard editorial framing used since Issue 1 ("the reader's Gulf region", "the reader's own bank customers"), not as "your team".

## Structure

- **Sections are trends** — PASS. Three numbered trends, no fixed departments.
- **No engineering job-driven sections** — PASS. No In Practice / Outside In / Leadership Read / Concept of the Week.
- **Substance floor** — PASS. Each trend carries three in-window, separately sourced feeding pieces. The fourth candidate (retail media) had exactly one in-window piece and went to *Also moving* rather than being inflated into a section.
- **Breadth / no single-cycle domination** — PASS. Agentic commerce is bounded to Trend 02. Trend 01 is distribution, Trend 03 is competitive set; neither runs on an AI premise.
- **Foreword** — PASS. One paragraph, 71 words, UK-framed, a single thread, not a contents list.
- **Cover** — PASS. Left-aligned magazine cover; dek carries the through-thread; one lead stat (30+); the numbered rail matches the three trend titles exactly.

## Recurrence & Evolution

- **Recurrence earned** — PASS. Agentic commerce recurs for a third consecutive issue and carries a genuine new-in-window development: Visa's live European agent purchases with 30+ banks (3 Jul) and the technical council's July decision to put saved payment methods on identity-linking infrastructure.
- **Evolution-first** — PASS. The Trend 02 standfirst opens on the delta ("In June the networks specified who an agent may pay; last month a commerce platform opened the checkout… This month the reader's own bank customers started transacting"), and the closer explicitly restates how the gap has changed shape since Issue 1.
- **Staleness drop** — PASS. Four prior trends with no in-window movement were dropped, not recycled: UK retail media (to *Also moving*, one level up), Gulf bank rewards hubs (omitted; the GCC material this month makes a different argument), reward value re-priced (omitted), UK rewards re-gated (to *Also moving* as a recorded silence). Pay-by-Bank stays in *What's next*.
- **No recycling / six-months-of-the-same check** — PASS, and this was the sharpest test of the issue. **Eleven candidates that surfaced in July result sets were killed on date verification** — Reward–Visa Europe (Aug 2020), RewardIQ (Sep 2025), Mastercard Commerce Media (Oct 2025), SAS financial-media-network research (Jan 2026), HSBC's £500 Premier switch (14 Apr 2026), Europe Cashback Programs report (27 Apr 2026), Co-op DOOH (14 May 2026), Kroger rewards expansion (25 Jun 2026), John Lewis–Kevel (29 Jun 2026), plus the Talon.One UIP and UCP identity-linking specs, which are used only as explicitly dated background inside the July delta and never as this month's movement. The "Loyalty Has Entered The Utility Phase" argument was dropped outright because it could not be dated to the window and rests on December 2025 and February 2026 research.
- **Window boundary** — noted, not hidden. Issue 2 declared 10 June – 10 July but did not cover two significant items in the 1–10 July band (Visa's European agentic launch, 3 Jul; European Media Marketplace, 8 Jul). Issue 3 opens at 1 July to close that gap; both carry their original dates in the copy, and the decision is recorded in the run plan and `candidates.json`. Neither item has run before, so this is coverage of a gap, not recycling.

## Roadmap mechanism

- **0–2 closers, earned** — PASS. Two `.investigate` closers, one `.why`. Trend 03 was deliberately left as context: it has no sourced instantiation of a buildable thing and no evidenced gap.
- **Each closer is an instantiation or an evidenced gap** — PASS. Closer 01 is a real instantiation (Reward's platform running in Zilch's payments journey; Mastercard's wallet SDK with the network's own rewards framing). Closer 02 is an evidenced gap built from three sourced facts: the Visa announcement names no offer object; identity linking is the capability that carries member benefits; identity is live at 15 stores against 11,414 verified, none payment-capable.
- **No-invention scan** — PASS. Every closer clause traces to a fetched source. No imagined feature appears. The Fourez quote was taken from the fetched PYMNTS/Fintech News reporting and is quoted verbatim and short.
- **No-instruction scan** — PASS. Re-read both closers line by line for imperatives; none present.
- **Roadmap strip** — PASS. Two threads, both pulled from the closers, surfaced above the trends, with `→ Trend 0N` references.

## What's next

- **Variety rule** — PASS. Five items: four product/competitive (Cardlytics Q2, Mastercard Wallet Services consumer launches, European Media Marketplace campaigns, identity-linking spread) and one infrastructure/regulatory (UKPI Wave 2, tagged Open). Not legislative-heavy.
- **Forward-looking and sourced** — PASS. Each is a dated future event with a link, and none duplicates a trend section's argument.

## Sourcing & Links

- **Every link real and resolving** — PASS with a noted caveat. 21 unique external links. All were reached during research via WebFetch or confirmed 200 by request. Four return 403 to automated requests and resolve normally in a browser (Gulf Business, Finextra, StockTitan, Businesswire) — the same anti-scraping pattern recorded in the Issue 2 review. `agenticplug.ai` refuses non-browser TLS fingerprints (curl 000) but was fetched successfully twice and reports itself current as of 1 August 2026. No fabricated URLs; no invented attributions.
- **Curate, don't create** — PASS. Original writing is confined to the foreword, the standfirsts, the closers and the through-thread framing.
- **Searched the web this issue** — PASS. 45 queries plus 14 verification fetches; nothing written from training data.
- **Quotes** — PASS. One direct quote in the issue (Fourez, 22 words), attributed and linked. Everything else paraphrased.

## Visual Identity

- **Uses `product-template.html`** — PASS. The `<style>` block was diffed against the template and is byte-identical. Gold/cream sub-brand, left-aligned magazine cover, numbered trend sections, `.investigate` vs `.why` closers all as specified.
- **Type house / palette** — PASS. Playfair Display + Source Sans 3; gold accent, cream ground, clay secondary. Not the engineering teal/grey.
- **At least one real visual element** — PASS. Three statlines, one per trend, every figure drawn from a feeding piece in the same section. No AI-generated images.

## Format Honesty

- **Quiet month runs shorter, not padded** — PASS, and this is the issue's defining editorial call. Three trends rather than Issue 2's four, because only three arguments had genuine in-window material once eleven date-failing candidates were removed. The retail-media candidate was left at one *Also moving* line rather than being padded into a fourth section.

---

## Fixes applied before publish

1. **Trend 03 originally ran as "loyalty's utility turn"**, anchored on The Wise Marketer's "Utility Phase" argument. Failed the no-recycling check: the piece could not be dated to the window and its underlying research is from December 2025 (Engage People) and February 2026 (Antavo). The trend was rebuilt around three in-window pieces on the competitive set instead, and the Utility Phase material was dropped entirely rather than cited with a hedge.
2. **HSBC's £500 Premier switching offer was shortlisted as the window's UK bank story** on the strength of round-ups saying it "started 27 July 2026". Fetching HSBC's own newsroom put the announcement at 14 April 2026. Removed from the trend set; the correction is stated in the *Also moving* line so the second consecutive quiet month for UK bank rewards reads as a finding rather than a gap in the sweep.
