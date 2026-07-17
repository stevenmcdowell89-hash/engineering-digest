# Issue 19 — Phase 5 Compliance Review (FULL)

**Run:** Issue 19 · Standard Weekly · window 11–17 Jul 2026
**Mode:** Full review (first run under spec v1.36; multiple named-failure flags)
**Reviewer verdict: FIX** — one blocker (epistemic-reframing cap exceeded). Everything else PASSES. The fix is a low-cost reword of 3 sentences; no re-curation, no re-sourcing.

---

## Workflow pipeline (v3.1)
- PASS — Run dir `digest-runs/issue-19/` present with run-plan.md, section-briefs.md, issue-19.html, review.md.
- PASS — Phase 2 lead justification + rejected candidates present in run-plan.
- PASS — Phase 4 cross-check: HTML lead = agentic-attacker cluster (matches plan); QT1 = FDE; QT2 = Circle OCC; Editorial Moment = METR; In Practice = Slack SSH→REST; Outside In omitted; Leadership Read = Brendan Short (authorized paywall fallback for Ojstersek). Format = Standard Weekly. All match.
- PASS — No silent re-promotion: no phase-2 rejected lead candidate (FDE, METR, Circle, ECB, Meta/Gartner, Ant Group standalone) appears as the lead. FDE correctly sits at QT1; ECB confined to Radar.
- PASS — Jargon coverage: every flagged term glossed (see below).

## Lead-sanity cross-check (contract)
- PASS — Lead = agentic-attacker cluster (Operating at scale). QT1 FDE, QT2 Circle OCC, Editorial Moment METR, In Practice Slack fresh season, Outside In OMITTED, Leadership Read Short fallback. Matches the contract exactly.

## Named failure modes (this issue)
1. **AI-substrate ceiling (≤4 of 6 featured)** — PASS. Featured = Lead(AI), QT1(AI), QT2(non-AI, Circle), Editorial Moment(AI), Outside In(omitted), In Practice(non-AI, Slack). **Measured: 3 AI of 5 present.** Two required non-AI present. Under ceiling with margin.
2. **Long-form variety (≤1 of 3 AI-primary)** — PASS. In Practice(non-AI) + Leadership Read(AI, build-vs-buy) + Outside In(omitted) = **1 of 2 AI-primary.** Two distinct aspects (technical strategy vs build-vs-buy/leadership craft).
3. **In Practice fresh season, no week count** — PASS. `.ip-theme` = "Technical strategy under uncertainty" only. Grep for week/of 3/of 4/part/#1/#2 returns 0 in the `.ip-theme` element (matches were archive-pill issue numbers only).
4. **Regulator rule** — PASS. ECB AI-cyber story appears ONLY in On the Radar (deadline-first, 31 Oct). Never Lead/featured QT.
5. **AWS mega-outage not asserted** — PASS. Radar item: "Forrester predicts… a Forrester prediction only; status pages are healthy this week and no outage has occurred." Attributed prediction, status-healthy framing intact.
6. **Agent-terminology precision** — PASS. Lead first use: "an autonomous production agent with action authority… calling [tools] without per-step human approval," reinforced by Jargon Watch distinguishing it from "agent mode inside a developer tool." Not agent-mode-in-a-tool.
7. **Third-person voice** — PASS. Zero direct-address in editorial voice. All 5 "you/your" hits are inside quotation marks (Slack SSH quote, Norton quote, quoted vendor framing, the "buy your infrastructure" framework name). No rhetorical questions to the audience. Discussion prompt is third-person.
8. **Epistemic-reframing cap ≤2** — **FAIL (over cap).** Structural scan below.
9. **Palette** — PASS. `.section-label.alert` (red) used ONLY on the Lead label ("Operating at Scale · Active Threat", active-threat justified). QT1 header teal (deep-teal `devex`), QT2 header green (accent-green). All other structural labels teal. Note: the ECB Radar item carries `.radar-item.urgent` (red dot) — this is the timeline hard-deadline indicator, not a structural section label, and is within template design; acceptable.
10. **Visual density** — PASS. 6 content visuals; 3 real diagrams/tables (Lead `.process-flow`, QT1 `.compare-table`, In Practice before/after `.compare-table`). Process-flow renders as a real 4-step diagram with `.pf-step`/`.pf-arrow` (not a degraded text list). ≥1 visual per major section. 0 `<svg>` acceptable (no chart planned).
11. **Links / facts** — PASS. All 16 external source URLs match the Phase-3 verified list; none fabricated. FDE clients named = **only LSEG and Unilever** (no Southwest/NBA/NFL). Circle **~$73B attributed to CoinDesk/secondary**; Circle release phrasing "world's largest regulated stablecoin" used. Slack = **"700+ jobs across 7 operator types… 5 teams and 8 data regions… no downtime."** Lead `.pq-bar` is an editorial stat-pull attributed to the disclosure, NOT a fabricated verbatim person-quote.
12. **Foreword** — PASS. 66 words (50–80). Single thread (the forecast became an incident). No AI-default framing, no story list, no "meanwhile/elsewhere". Drop-cap via `.foreword p:first-of-type`.
13. **Editor's note absent** — PASS. 0 `.editor-note` blocks in body (CSS def remains, fine).
14. **Opener variety** — PASS. Lead narrative-first, QT1 summary-first, QT2 stat-first, In Practice quote-first, Leadership Read narrative-first (the forced pigeonhole reuse). The two narrative-first sections are maximally separated (front vs back) and read distinctly (weekend-intrusion scene vs Owner.com org-decay scene). No two ADJACENT sections share an opener.
15. **Section spread** — PASS. In Practice and Leadership Read are NON-adjacent, separated by Other News + On the Radar. No two long-form sections adjacent (Outside In omitted).

## Epistemic-reframing structural scan (item 8 — FAIL)

Structural test applied ("does the sentence name what something is NOT to introduce what it IS?"), not lexical. **Measured count: 5 contrastive constructions; at minimum 3 are true epistemic reframes — over the ≤2 cap.**

Over-cap instances (quoted):
1. Lead (l.378): *"capable models on owned infrastructure before an incident, not scrambled for during one."*
2. QT1 (l.395): *"the vendor is paid for a result, not for hours."* (mild/descriptive)
3. In Practice (l.457): *"The security posture is only part of the payoff."*
4. Leadership Read (l.543): *"launch is the starting line, not the finish line."*
5. Leadership Read (l.546): *"keep the data, the logic, and the memory where they compound in-house — not on the balance sheet of the vendor."*

Even discounting the two most descriptive/factual contrasts (#1, #2), the remaining three (#3, #4, #5) are genuine reframes and still exceed 2. The construction clusters in the back half (In Practice + Leadership Read), making the back-of-book read contrastive-heavy.

## Other checklist sections (spot summary)
- Word counts — PASS. Foreword 66 (50–80); Lead body prose 367 (300–400); QT1 196 excl table / 236 incl (150–250); QT2 169 (150–250); In Practice 326 (300–450); Leadership Read 476 (400–600); Editorial Moment 70.
- Jargon/terms — PASS. Jargon Watch (agentic attacker); inline glosses for JadePuffer, SingGuard-NSFA, Langflow, prompt injection, EMR, Airflow, Quarry, SSH, USDC, OCC national trust bank, FDE, METR, code custody; Concept of the Week = span of control.
- Quote allocation / attribution fidelity — PASS. One-quote-one-slot holds (Slack SSH line, Norton pull-quote, Allaire QT2 quote — each once). No invented labels put in a source's mouth; "buy infrastructure, build intelligence" is the source's actual wording.
- Structure/pacing — PASS. Order: Cover → Foreword → Editorial Moment → WAG → breather → Lead → QTs → breather → In Practice → Other News → Radar → Leadership Read → Recommended Reading → Footer. 2 section breathers (≤2). Editorial Moment before WAG. In Practice header treatment (off-white, deep-teal borders, `feature-break` above) correct.
- Visual identity (Vol. II) — PASS. `.cis-vol` + `.footer-vol` teal pills, italic tagline, bordered-orange week badge, cover-lead-stat variant (17,000+), 7-min read time, drop caps on Lead + Leadership Read. Archive bar: 15w · 16w · 17w · 18 Deep Dive · 19w (current). Correct.
- Adjacent-source rule — PASS. HF → CNBC/GeekWire → Circle/CoinDesk → Slack → …; no consecutive same-source.
- Leadership Read source rotation — PASS. The Signal/Short is fresh vs prior issues; anti-overlap with In Practice (Slack) holds.

---

## Verdict: FIX

**Blocker (1):**
1. **Epistemic-reframing over cap (item 8).** Bring the structural count from 5 (min. 3 true reframes) down to ≤2 by rewording at least three of the quoted constructions into plain declarative sentences. Recommended targets — the three clustered in the back half:
   - In Practice l.457: replace *"The security posture is only part of the payoff. By decoupling…"* with an additive declarative, e.g. *"Security was the driver, but the payoff went wider: decoupling Airflow from EMR's internals unblocked future moves such as Spark-on-Kubernetes."*
   - Leadership Read l.543: replace *"launch is the starting line, not the finish line"* with e.g. *"a launched system still needs an owner, or it quietly decays."*
   - Leadership Read l.546: replace *"where they compound in-house — not on the balance sheet of the vendor"* with e.g. *"so the learning compounds in-house."*

   Leaving the two mild Lead/QT1 factual contrasts (l.378, l.395) untouched yields a compliant count of ≤2. No other section is affected; re-check the structural count after the edit.

All other compliance items PASS. Once the reword lands, the issue is SHIP-ready.

---

## Fix applied (orchestrator, post-review)

Phase 5 returned **FIX** on the single item: epistemic-reframing cap exceeded (5 constructions vs ≤2). Three back-half reframes were reworded into plain declaratives, leaving the two mild Lead/QT1 factual contrasts the review approved:

1. In Practice — "The security posture is only part of the payoff." → "The security gain came with a second benefit."
2. Leadership Read — "launch is the starting line, not the finish line." → "launch is where the maintenance work begins." (recast as declarative)
3. Leadership Read — "...where they compound in-house — not on the balance sheet of the vendor..." → "...in-house, where they compound for the organisation over time. The vendor hands the team back and moves on; the accumulated judgement stays behind."

Post-fix structural re-scan confirms 2 remaining contrastive constructions (Lead "defensive-model readiness... not scrambled for during one"; QT1 "paid for a result, not for hours") — at cap. **Verdict: SHIP.** PDF regenerated (9pp) from the corrected HTML.
