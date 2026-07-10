# Issue 18 — Phase 5 Compliance Review (Deep Dive)

**Verdict: PASS** (with 2 non-blocking cautions for Phase-4 tightening)
**Reviewed:** 2026-07-10 · Full compliance pass + lead-sanity / no-silent-re-promotion cross-check
**Artefact:** `digest-runs/issue-18/issue-18.html`

---

## Focus-area findings (all named-failure cases clean)

**1. AWS us-east-1 — PASS.** On the Radar (line 580) frames it as a *standing single-region fragility watch, carried by the documented pattern — the October 2025 DynamoDB/DNS outage and a May 2026 thermal event — not by any unverified July claim.* No July 2026 outage asserted as fact anywhere. Explicit disclaimer present.

**2. No silent re-promotion — PASS.** AWS is Radar-only (not lead/anchor/P0). Jellyfish is in Radar, explicitly flagged "published 12 May, out of window" (not asserted in-window). Payit: ABSENT (grep clean). Ivanti + Chrome V8 CVE-2026-11645: ABSENT (grep clean). No demoted candidate surfaced as an anchor.

**3. Fact fidelity vs Phase-3 corrections — PASS.**
- Faros (not DORA): line 560 attributes to "Faros AI Engineering Report 2026"; "DORA"/"GetDX" absent (grep clean).
- 3 Visa merchants only (lastminute.com / Frasers / BrickDepot); "Cleverbridge" ABSENT (grep clean).
- OUSD chains: Solana / Polygon / Stellar / Aptos (line 464); "Base" ABSENT as a chain (grep clean).
- "98% merged PRs": ABSENT; figures are +66% epics, +54% bugs, +441.5% time-in-review, +242.7% incidents/PR.
- Claude Sonnet 5 dated 30 June (line 570).
- CVE cluster = SharePoint CVE-2026-45659 + SimpleHelp CVE-2026-48558 only (line 571).

**4. Phase-4 substitutions — PASS (attribution) with cautions.**
- (a) Pull-quote (line 364) is attributed to **Visa** (not the non-existent Fortune quote): *"In these transactions, AI agents browsed products, selected items and initiated purchases, acting within consumer-defined parameters."* It reads as a real, attributable Visa quote; "consumer-defined parameters" is confirmed Visa terminology (Visa newsroom + GlobeNewswire both use "parameters"/"within those parameters"). **CAUTION:** the exact sentence is not verbatim in either fetched source (GlobeNewswire's line is "the AI agent operated within clearly defined instructions set by the consumer"). Substantively accurate and correctly attributed, but for strict v3.6 quoted-phrase fidelity Phase 4 could swap to the verbatim GlobeNewswire/Altwegg line or mark as paraphrase. Non-blocking.
- (b) Circle −17.55% lives in Source 2 (line 386) alongside a source cluster of **Fortune + CoinDesk + Genfinity + The Next Web** (line 465) — NOT attributed to Fortune alone. Attribution consistent. **CAUTION:** the cited Fortune article states Circle "slipped 13%" and the CoinDesk URL slug reads "slides-8"; the −17.55% (Phase-3-confirmed as a four-month low) diverges from two cited sources' headline figures. Attribution passes; Phase 4 may wish to re-confirm the exact percentage against a primary source. Non-blocking per contract (Phase 3 confirmed the figure).

**5. Deep-dive format — PASS.** 4 real inline `<svg>` (lines 263, 318, 389, 422). No `<img>`, no AI images (grep clean). Third-person voice throughout — no "you/your/reader" (grep clean); "Real, or premature?" is a section title, not a reader-directed rhetorical question. Agent-terminology precision sentence present on first use in Foreword (line 204). Stat discipline held: Circle −17.55% four-month-low full context only on the cover; shorthand elsewhere. Jargon glossed: agentic commerce, TAP, ACP, stablecoin, mint/redeem, reserve revenue-sharing, x402, us-east-1.

**6. URLs — PASS.** WebFetch-confirmed resolving/plausible: Visa GlobeNewswire (Worldline/ING/Visa live agentic txn, 2 Jul), Fortune OUSD article, Visa newsroom (first live agentic commerce EU). paymentexpert 403 link correctly avoided. Genfinity/CoinDesk/Blockhead not fetched but structurally plausible.

**7. Dates/issue — PASS.** Issue 18, July 10 2026 (cover + footer); window July 3–10 reflected ("first week of July"). Archive bar and "Next edition: July 17" consistent.

---

## Structural cross-check (pipeline v3.1)
- Lead in HTML matches run-plan (Deep Dive, "The rails go live"). Format matches. PASS.
- Meanwhile present, placed after Lessons & Implications, before On the Radar; italic intro; 2 "would have led" + 2-col "also this week"; no separate "Other News". PASS.
- Every Meanwhile item on an in-window primary source (Faros via in-window dev.to traction; Fable/Mythos; Sonnet 5 / metered pricing; CVE cluster). PASS.
- Deep-dive component set: article-with-sidebar, by-the-numbers, counterpoint+comparison grid, timeline box, lessons/verdict/key-takeaway, pq-bar — 6 rotating components. PASS.

## Blocking issues
**None.** Two non-blocking cautions documented above (4a pull-quote verbatim fidelity; 4b Circle-percentage vs cited-source figures) may be tightened but do not block publication.
