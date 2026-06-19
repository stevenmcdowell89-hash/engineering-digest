# Issue 15 — Run Plan (Phase 2: Inventory & Curation)

**Date window:** 2026-06-12 → 2026-06-19
**Format decision:** **Standard Weekly**
**Spec version:** v1.36 (SKILL v1.35 rules in force)

---

## Format justification (deep-dive trigger evaluation)

`consecutive_non_deepdive` is 6, so the deep-dive trigger is live. But the deep-dive rule requires **one story dominating the entire issue with 2–3+ SVG-worthy data threads**. Phase 1 explicitly found no single dominating story: GitLab (org restructure), Mastercard AP4M (payments rail), DORA (delivery metrics) and the Mastra npm attack are four genuinely independent strong stories across different concerns. Forcing a deep dive on GitLab would mean padding a single org-restructure announcement to issue length with thin secondary threads — exactly the "stretched issue" failure mode. **Standard Weekly is correct.** The trigger is a ceiling, not a mandate; we document the call and carry the count forward (`consecutive_non_deepdive` → 7 on deliver). Material is plentiful and varied — not a Light Edition either.

---

## Rolling-4 concern spread (breadth guardrail, v3.4)

| Issue | Lead concern |
|---|---|
| 12 | Ways of working |
| 13 | Wider engineering landscape |
| 14 | Wider engineering landscape |
| **15 (this)** | **Ways of working** |

The last two leads were BOTH Wider engineering landscape; the one before was Ways of working. The breadth guardrail demands the lead this week restore breadth — i.e. NOT Wider engineering landscape. The eligible-by-mandate concerns this week are Management & teams / Ways of working / Operating at scale / Banking-fintech-loyalty.

**Decision: Lead on Ways of working (GitLab agentic-era restructure).** This breaks the Wider-landscape streak — the primary breadth concern. Rolling-4 then spans 2 concerns (Ways of working ×2, Wider ×2). This is a same-concern repeat vs Issue 12, which the guardrail permits ("if the same concern leads and there's a genuinely stronger story, take it — document it"). It is documented here. The genuinely stronger Ways-of-working story this week (GitLab) beats every Management-and-teams / Operating-at-scale / Banking candidate on news weight + narrative tension + breadth, and critically it ends the Wider-landscape run, which was the actual stated risk. Across the rolling-4, breadth at 2 concerns is below the "3 of 4" soft target — flagged as tight (see compliance table) but the right call given the stronger-story exception and the overriding need to escape the Wider-landscape streak.

---

## THE LEAD

**Story:** GitLab restructures for the 'agentic era' — ~7% cuts, up to three management layers removed, R&D split into ~60 autonomous teams
**Source:** TNW / heise / GitLab "Act 2" blog — `https://thenextweb.com/news/gitlab-cuts-7-of-workforce-and-flattens-management-in-sweeping-agentic-era-restructuring` (primary: `https://about.gitlab.com/blog/gitlab-act-2/`)
**Concern:** Ways of working (org design / team topology) — restores breadth
**event_or_essay:** news_event
**Urgency:** decide_this_month
**AI substrate?** Yes (agentic-era restructuring is the driver)

**Why this lead.** It is a news event in-window (initial announcement 11 May; financial scope detailed 2 June with Q1 FY27 results; continued reaction this week — frame around what is new this week per the new-in-window traction exception). It is the strongest operational-concern story of the week: a named devtools vendor publicly redesigning management layers and team topology around agents gives engineering leaders a concrete external reference point for the org-shape conversation they are being forced into. It triggers a clear leadership conversation ("how many management layers do we fund, and what team shape do agents change?") — not a tool-capability release. It restores breadth by ending the Wider-landscape streak. Narrative tension is high (CEO framing "software built by machines, directed by people" + real headcount/layer cuts). Lead-sanity: top 3 by combined so-what + narrative tension + UK/ME relevance (high on all three).

**Visual:** before/after org-shape — 3 management layers removed, R&D → ~60 teams, 7% headcount, 30% country reduction. Process-flow or compare-table (chartable_data flagged).

---

## QUICK TAKE 1

**Story:** Mastercard launches Agent Pay for Machines (AP4M) — open protocol for AI agents to transact/settle micropayments across cards, accounts and stablecoin rails; Visa announces OpenAI agent-tokenisation partnership the same week
**Source:** Mastercard / Finextra / FF News — `https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html`
**Concern:** Wider engineering landscape (cross-industry agentic commerce) with a **loyalty / commerce-media surfacing note** (the reader's vertical)
**event_or_essay:** news_event
**Urgency:** decide_this_month
**AI substrate?** Yes

**Why.** Direct loyalty/commerce-media relevance — the reader's exact patch — framed positively as "the world the reader operates in." News event, high narrative tension (Visa vs Mastercard race to be the trust layer for agentic commerce). Different concern from the Lead → satisfies within-issue diversity. Visual: Visa vs Mastercard approach comparison table (tokenisation model, rails, launch partners, consent binding). Define "agentic commerce / AP4M / agentic tokens" on first use; name which end of the agent spectrum (production agents with action authority — money movement).

---

## QUICK TAKE 2

**Story:** Meta cuts ~8,000 roles with management positions hit hardest (1,400+ management roles, ~⅓ of cuts) as budget shifts to AI infrastructure — middle-management squeeze is now a sector pattern (GitLab, Atlassian)
**Source:** LatestLY / 2026 layoffs coverage — `https://www.latestly.com/technology/meta-layoffs-2026-8000-jobs-cut-as-zuckerberg-shifts-focus-to-ai-middle-managers-and-software-developers-face-largest-reductions-7469748.html`
**Concern:** Management & teams (org shape / management-layer justification)
**event_or_essay:** news_event
**Urgency:** decide_this_month (reframed — the *sector-pattern* read is a near-term org-shape decision input, not mere awareness; the single-company datum alone is general_awareness, but the synthesis across Meta + GitLab + Atlassian is a decision input)
**AI substrate?** Substrate-adjacent but **NOT AI-primary** — the substantive driver is management-layer economics and org shape; AI is the cause cited, not the subject. Counts as a non-AI featured section for the substrate ceiling.

**Why QT2 (and not DORA).** Three reasons. (1) **Within-issue concern diversity:** Lead is Ways of working; QT1 is Wider landscape; DORA is also Ways of working, which would put two anchors in one concern AND leave only two concerns across the three anchors. Meta-layoffs is Management & teams → anchors now span **three concerns** (Ways of working / Wider landscape / Management & teams), the preferred outcome. (2) **AI-substrate ceiling:** with Lead + QT1 both AI-primary, a third AI-primary anchor pushes the 6-featured count toward the ceiling fast; Meta-layoffs is management-economics-primary, giving a needed non-AI featured section. (3) **DORA is out-of-window risk** (28 May) and DORA was an anchor earlier in the year (J-Curve / verification tax) — no-repeat-featured-anchor caution. DORA moves to **On the Radar** (one line, traction-dependent) rather than anchoring.

**Sourcing caveat (carry to Phase 3/4):** LatestLY is a secondary outlet. Phase 4 must corroborate the 8,000 / 1,400-management figures against a primary source (company statement / Reuters / Bloomberg) before the numbers ship; if uncorroborated, frame qualitatively and cite the sector pattern, not hard counts. Visual substitution applies if the anchor stat can't be verified.

---

## Anchor summary (diversity + balance check)

| Slot | Story | Concern | event/essay | AI-primary? |
|---|---|---|---|---|
| Lead | GitLab restructure | Ways of working | news_event | Yes |
| QT1 | Mastercard AP4M | Wider landscape (loyalty note) | news_event | Yes |
| QT2 | Meta management cuts | Management & teams | news_event | No |

- **News-first:** 3 of 3 anchors are news_events (≥2 required). ✅
- **Concern diversity:** 3 concerns, ≤1 anchor each. ✅
- **No-repeat-featured-anchor:** none of these anchored Issues 13 or 14 (those led on Wider-landscape stories; GitLab/Mastercard/Meta-cuts are fresh). ✅
- **Adjacent-source:** GitLab → Mastercard → LatestLY → (In Practice) all different outlets. ✅

---

## EDITORIAL MOMENT

**Variant:** "Quote of the week" (vary from last issue's `number_of_the_week`).
**Material:** GitLab CEO Bill Staples' framing — *"software built by machines, directed by people."* Quote-of-the-week, casual pull-quote style. (One-quote-one-slot: this line is the Editorial Moment's; it must NOT also appear as the Lead's `.pq-bar` — Lead uses a different pulled sentence.)
**AI-primary?** Yes (substrate). Counts toward the 6-featured AI ceiling.

---

## IN PRACTICE — season decision (FLAGGED)

**Decision: CUT the "Career frameworks & ladder design" season short** (allowed under the "cut rather than drag" rule) and run a qualifying In Practice piece on a different theme this issue.

Rationale: Phase 1 found NO fresh 2026 named-author career-ladder *journey* piece — all candidates (Square 2019/2023, Dashlane 2024, Thumbtack 2019) are too old, and 2026 results were generic framework guides, not journeys. The season is only at progress=1 (started Issue 14). Cutting at week 1 is unusual but correct: dragging a thin/evergreen ladder piece in to protect the season label is exactly the failure the rule prevents. **State note (writes only on Deliver):** on deliver, close "Career frameworks & ladder design" and let Phase 3/next-issue set the next theme; do NOT increment season progress for a piece off-theme.

**Chosen In Practice piece:** **LDX3 2026 recap — Meta's AI-native interview rebuild + friction taxonomy** (blog4ems, Stephane Moreau) — `https://www.blog4ems.com/p/engineering-leadership-lessons-from-ldx3-2026`
- **Theme label:** "Hiring loops in the agent era" (theme name only — NO week count).
- **Three-quality filter:** named operators (Meta's Danit Nativ Navon; Nicole Forsgren; Wise's Rick Clegg) ✅, journey-not-framework (rebuild across 9,000 interviews) ✅, technical content at implication level ✅.
- **Concern/subject:** Management & teams (hiring-loop craft). **NOT AI-tooling-primary** — the subject is interview redesign / management craft; AI is the context. This is deliberate: it gives the long-form variety rule its required non-AI long-form anchor.
- **Caveats (Phase 3/4):** partly paywalled — Phase 4 must confirm the cited operator detail is in the readable portion; if the source can't be fully read, **substitute the Monzo Ops Agent** as In Practice (named operator, journey, AI-substrate) and re-balance the long-form variety rule (see below). **Adjacent-source rule:** Moreau also authored the LeadDev Leadership Read — In Practice (Moreau/blog4ems) and Leadership Read (Moreau/LeadDev) must NOT be adjacent. Default order separates them (IP at pos 11, LR at pos 18, with Other News / Platform Updates / Outside In / Radar between) → compliant. But Phase 1 flagged "don't place both adjacently" — confirmed handled by section order; Phase 3 must hold it.

**Rejected for In Practice:** Monzo Ops Agent (AI-substrate; would make In Practice the AI long-form slot — held as the fallback only, see variety rule).

---

## LONG-FORM VARIETY (v1.35) — at most ONE of IP/OI/LR is AI-primary

| Section | Pick | Primary subject | AI-primary? |
|---|---|---|---|
| In Practice | LDX3 recap (Moreau) | Hiring-loop / management craft | No |
| Outside In | Datadog postmortem governance | Post-incident governance / operating at scale | No |
| Leadership Read | EM role splitting in two (Moreau, LeadDev) | Span-of-control / org design / career frameworks | No |

**Zero of three long-form sections are AI-primary → comfortably passes the v1.35 "at most one" rule.** (If In Practice falls back to Monzo Ops Agent, that becomes the single AI-primary long-form section — still compliant at exactly one.)

---

## OUTSIDE IN

**Story:** Datadog instruments post-incident review as a reportable governance metric (DASH 2026)
**Source:** Datadog — `https://www.datadoghq.com/blog/dash-2026-new-feature-roundup-scale/`
**Format:** A (full feature) or C (compact inset) — Phase 3 to choose; A places after LR, C after Lead. Given LR is present and back-of-book, **Format A** is the default.
**Sector:** platform/cloud (dev-infra). Datadog is NOT in `outside_in_history` (Monzo/Revolut/Ramp/Cloudflare/Wise/Linear/incident.io/Vercel/Honeycomb) → no-repeat OK. Sector rotation: last 4 OI were incident.io / Vercel / Honeycomb / (this) Datadog — mix of consumer-tech, platform/cloud; ≥2 categories in rolling-4 ✅.
**Transferability/substitution test:** "a large engineering org made reliability maturity visible to leadership as data, not assertion" — holds. ✅
**Throughline:** contrasts with Issue 14's Honeycomb/Lex Neva piece (which argued for dropping action-item tracking) — a single-sentence throughline is warranted (genuine tension).
**Anti-overlap with LR:** Datadog ≠ LeadDev/Moreau → different company. ✅

**Why GitLab is NOT Outside In:** GitLab is the Lead. No-repeat-featured-anchor + source-diversity bar reuse. Datadog takes Outside In.

---

## THE LEADERSHIP READ

**Story:** The engineering manager role is splitting in two — choosing a span-of-control model deliberately
**Source:** LeadDev (Stephane Moreau, Senior EM at Zopa Bank) — `https://leaddev.com/career-development/the-engineering-manager-role-is-splitting-in-two`
**event_or_essay:** essay (correct for LR — back-of-book reflective)
**Concern:** Management & teams (career frameworks / span of control)
**AI-primary?** No (management craft; AI-driven flattening is the backdrop).
**Length:** 400–600 words; substance floor — names the tech-lead-manager vs multi-team-scope split, carries the Meta 50:1 ratio and the 15+-reports / 20%-engagement-delta stats.

**Source-rotation check:** `last_leadership_read` = incident.io (Issue 14) → not consecutive, LeadDev eligible. LeadDev was LR in Issues 7/10/12 — not in the last issue, so permitted. ✅
**Anti-overlap with Outside In:** LeadDev ≠ Datadog. ✅
**Discussion prompt:** third-person editorial (no direct address).
**UK relevance:** high (Zopa Bank author).

**Note on Moreau double-authorship (Phase 1 flag):** Moreau authors both In Practice (blog4ems) and Leadership Read (LeadDev). Different outlets, so source-diversity 2-section cap is not breached by these two (different publications). Adjacent-source rule is about *consecutive sections* — IP and LR are non-adjacent in the section order. **Both compliant.** Phase 3 must NOT reorder them adjacent.

---

## SUPPORTING SLOTS

- **Week at a Glance — Action Required:** **Mastra npm scope takeover / easy-day-js typosquat (BlueNoroff)** — `https://www.stepsecurity.io/blog/mastra-npm-packages-compromised-using-easy-day-js`. One line. Per the Issue-10 Mini Shai-Hulud precedent and the audience-fit gate, remediation is the pipeline-owner's job → the reader's action is "be aware / delegate" → **At a Glance, NOT a Quick Take or Lead.** Note the AI-framework-targeting + nation-state angle in the one-liner.
- **Week at a Glance — Worth Knowing:** Meta-cuts sector-pattern callback (if any spillover), GitLab cross-ref, Mastercard/Visa cross-ref as needed.
- **Other News This Week (3–6 items):** Card-linked-offers / "banks-as-media" context piece (ACHIVX/Olive — framing only, secondary outlet, treat as context not fact); Atlassian 1,600-cut / 800-AI-hire datum (corroborate); any spillover.
- **Platform Updates (0–2 rows MAX):** likely **omit** — no widespread-right-now platform/runtime decision in the pool. Datadog feature is handled as Outside In, not a platform row.
- **On the Radar:** **DORA 2026 follow-up** (+66.2% epics/dev vs +441% PR review time) — out-of-window (28 May) + prior-anchor caution → one line here, traction-dependent; Mastercard AP4M rollout timeline; Visa/OpenAI partnership as event. Deadlines/actions first, then events.
- **Down the Rabbit Hole:** **Suppress this week.** `last_rabbit_hole_date` = 2026-06-12 (Issue 14 used one); cadence + back-to-back avoidance → omit. (The JFrog easy-day-js forensic write-up would be the candidate; Phase 3 may include only if it judges cadence permits — default omit.)

---

## REJECTED LEAD CANDIDATES (with reasons)

1. **EM role splitting in two (Moreau, LeadDev)** — *essay*, not a news event → fails the v1.32 news-event Lead test. Strong, but belongs at the back of book. **Placed as Leadership Read.**
2. **Mastercard AP4M (Mastercard)** — news event and high relevance, but it's a Wider-landscape payments-rail story; leading on it would NOT restore breadth (it's cross-industry/Wider-adjacent) and would extend the Wider-landscape pattern the breadth guardrail is fighting. Stronger as **QT1**.
3. **DORA 2026 follow-up (InfoQ)** — out-of-window (28 May) absent a fresh traction hook; DORA already anchored earlier this year (no-repeat-featured-anchor caution); essay/analysis register. → **On the Radar.**
4. **Meta management cuts (LatestLY)** — single-company datum is general_awareness on its own; secondary outlet; weaker news weight than GitLab as a *lead*. Strong as a Management & teams **QT2** read through the sector-pattern lens (corroboration required).
5. **Mastra npm attack (StepSecurity)** — fails the audience-fit gate for the Lead/Quick Take: remediation is the pipeline-owner's action, reader's action is "be aware/delegate." Issue-10 Mini Shai-Hulud precedent → **Week at a Glance, Action Required.**
6. **Monzo Ops Agent (Monzo)** — essay/journey, not a news event → fails news-event Lead test; AI-substrate. → **In Practice fallback** only (held; primary In Practice is the non-AI Moreau LDX3 recap to protect the long-form variety rule).
7. **Datadog postmortem governance** — vendor feature ship; general_awareness; classified by operational decision (post-incident governance), genuine but not lead-weight. → **Outside In.**

---

## AI-SUBSTRATE CEILING — 6 featured sections (cap 4 of 6)

| Featured section | Pick | AI-primary? |
|---|---|---|
| Lead | GitLab | Yes |
| QT1 | Mastercard AP4M | Yes |
| QT2 | Meta cuts | No |
| Editorial Moment | GitLab Staples quote | Yes |
| Outside In | Datadog governance | No |
| In Practice | LDX3 recap (Moreau) | No |

**AI-primary featured = 3 of 6 (≤4 required). ✅** At least 2 non-AI featured (QT2, Outside In, In Practice = 3). Rolling-4 anchor AI count: this issue contributes 2 AI anchors (Lead + QT1) — Phase 5 should confirm rolling-4 ≤2 holds; flagged tight (see below).

---

## COMPLIANCE PRE-CHECK TABLE

| Rail | Status | Note |
|---|---|---|
| Breadth guardrail (v3.4) — lead restores breadth | PASS (tight) | Lead = Ways of working, ends the Wider-landscape streak. Rolling-4 spans 2 of 4 concerns (below 3-of-4 soft target) — documented stronger-story + escape-the-streak exception. |
| News-first Lead (v1.32) | PASS | GitLab is news_event, in-window via traction exception. |
| Anchor balance ≥2/3 news | PASS | 3 of 3 anchors news_events. |
| Within-issue concern diversity (v1.31) | PASS | 3 concerns, ≤1 anchor each. |
| No-repeat-featured-anchor (v1.31) | PASS | None anchored Issues 13/14. |
| AI-substrate ceiling 6-featured ≤4 (v1.32) | PASS | 3 of 6. |
| AI rolling-4 anchor ≤2 (v1.28) | PASS (tight) | This issue adds 2 AI anchors — Phase 5 confirm rolling-4 total ≤2. **FLAG.** |
| Bank-regulator scope-conditional (v1.32) | N/A | No FCA/ADGM/PSR/DORA-EU regulator story in anchor contention. |
| Long-form variety (v1.35) ≤1 AI-primary | PASS | 0 of 3 long-form AI-primary (1 if Monzo fallback used). |
| Adjacent-source (v1.32) | PASS | No two consecutive featured sections share an outlet; Moreau IP/LR non-adjacent. |
| In Practice season | RESOLVED | Career-ladder season cut short (week 1); off-theme qualifying piece run; state closes season on Deliver only. |
| Outside In no-repeat + sector rotation | PASS | Datadog fresh; rolling-4 ≥2 sectors. |
| Leadership Read rotation | PASS | LeadDev ≠ last issue (incident.io). |
| Deep-dive trigger | RESOLVED | Standard Weekly justified; no dominating story. |
| Source diversity (≤2 sections/source) | PASS | No source exceeds 2 sections. |

**Tight rails to watch in Phase 5:** (1) rolling-4 AI anchor count (this issue's 2 AI anchors); (2) breadth at 2-of-4 concerns rolling-4 — defensible but below soft target; (3) Meta-cuts stat corroboration (secondary outlet) — visual-substitution if unverified; (4) In Practice paywall — Monzo fallback ready.

---

## HANDOFF NOTES FOR PHASE 3

- Hold the Moreau non-adjacency (IP pos ~11, LR pos ~18).
- Editorial Moment quote (Staples) is reserved to that slot — Lead `.pq-bar` uses a different sentence (one-quote-one-slot).
- Define on first use: agentic era, team topology (Lead); agentic commerce / AP4M / agentic tokens + agent-spectrum end (QT1); tech-lead-manager / span of control (LR). Jargon-watch candidates flagged in candidates.json.
- Visuals: Lead org-shape process-flow/compare-table; QT1 Visa-vs-Mastercard compare-table; LR span-of-control stat tile. Hit per-issue 4–6 visual budget with ≥1–2 real diagrams.
- Section order (v1.32 interleave): Lead+QTs → IP → Other News → Platform Updates(likely omit) → Outside In → On the Radar → Leadership Read. No two long-form adjacent.
- Voice: third-person editorial only; no direct address.
