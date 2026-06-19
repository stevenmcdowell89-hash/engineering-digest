# Issue 15 — Section Briefs (Phase 3: Slot Detail & Component Allocation)

**Date window:** 2026-06-12 → 2026-06-19
**Format:** Standard Weekly
**Spec version:** v1.36 (SKILL v1.35 rules in force)
**Contract:** executes against `run-plan.md` + `candidates.json`. No re-curation. Slot picks are fixed by Phase 2.

---

## RUN-SPECIFIC RISK FLAGS (Phase-4 instructions — read first)

1. **Meta QT2 hard numbers (8,000 cuts / 1,400 management) are from LatestLY, a secondary outlet.** Before shipping either figure as a stated number, corroborate against a primary source (Meta statement / Reuters / Bloomberg / SEC filing). If corroborated, cite the primary source alongside. **If NOT corroborated, frame qualitatively** — "roughly 8,000" → "a cut in the thousands, with management roles hit disproportionately"; lead the section on the *sector pattern* (Meta + GitLab + Atlassian), not the precise count. Apply the visual-substitution rule: if the anchor stat can't be verified, the QT2 anchor stat tile becomes a qualitative pull (e.g. the sector-pattern observation) or a different verified number.
2. **In Practice (Moreau LDX3, blog4ems) is partly paywalled.** Phase 4 must confirm the cited operator detail (Meta's Danit Nativ Navon interview rebuild across 9,000 interviews; Forsgren's three friction types; Wise's Rick Clegg legibility point) is in the **readable / non-paywalled portion** before writing it up. **If the cited detail sits behind the paywall, SUBSTITUTE the Monzo Ops Agent** (`https://monzo.com/blog/engineering-the-future-of-customer-operations-the-monzo-ops-agent`) as In Practice. The Monzo substitution makes In Practice the single AI-primary long-form section — still compliant (exactly one of IP/OI/LR AI-primary, v1.35). If substituting, note the long-form-variety rebalance in the run and define the assistive→action-taking agent spectrum on first use.
3. **GitLab Lead is in-window via the traction exception** (announced 11 May; financial scope 2 June; reaction continuing this week). **Frame around what is NEW this week** — the financial scope / continued reaction / the org-shape question it crystallises — NOT a re-report of the May announcement. The Lead's first sentence states explicitly when the original announcement occurred, then frames coverage on the current reaction.
4. **Hold Moreau non-adjacency.** Moreau authors both In Practice (blog4ems) and Leadership Read (LeadDev). Section order keeps IP at ~pos 11 and LR at ~pos 18, separated by Other News / Platform Updates / Outside In / On the Radar. Phase 4 must NOT reorder them adjacent. Different outlets, so the 2-section source cap is not breached.
5. **One quote, one slot.** Staples' *"software built by machines, directed by people"* is RESERVED to the Editorial Moment. The Lead `.pq-bar` uses a DIFFERENT sentence (see Lead brief).
6. **Voice:** third-person editorial only. No "the reader", "your team", "you should". Grep these to 0 before delivery.
7. **DORA must not anchor.** It is On the Radar, one line, traction-dependent (out-of-window 28 May + prior-anchor caution). Do not promote.
8. **Mastra npm is At a Glance / Action Required only** — one line. Not a Quick Take, not the Lead (audience-fit gate; remediation is the pipeline-owner's job).

---

## TOP-LEVEL COMPONENT MANIFEST

### The 3–5 layout components in this issue (and why)

| # | Component | Where | Why this issue |
|---|---|---|---|
| 1 | **`.compare-table`** (v1.30, ≤5 rows × 2 cols) | QT1 — Visa vs Mastercard agentic-commerce approaches | Two named approaches with directly comparable attributes (tokenisation model, rails, launch partners, consent binding) — a real diagram, the cleanest fit for the QT1 race narrative. |
| 2 | **`.process-flow`** (v1.30, `.pf-step` / `.pf-arrow`) | Lead — GitLab before/after org shape | GitLab restructure is an explicit org-shape sequence (3 mgmt layers removed → R&D into ~60 autonomous teams → agents automate internal review/approval). A real diagram. |
| 3 | **`.pq-bar`** (pull-quote bar) | Lead (mid-article) | Default for the Lead; a striking sentence that is NOT the reserved Staples line. |
| 4 | **`.stats-tile`** | Leadership Read — span-of-control stat (Meta 50:1; 15+ reports = 20% engagement delta) | Gives the LR its required visual; the numbers earn emphasis. |
| 5 | **`.author-card`** (v1.28) | In Practice, Leadership Read, Outside In (Format A) | Mandatory on all three long-form sections — reinforces "real person, real org." Not counted toward the 3–5 cap but allocated here. |

**Jargon Watch sidebar** (`.jargon-watch`) is allocated to the Lead (agentic era / team topology cluster) and QT1 (agentic commerce / AP4M / agentic tokens cluster). Off-cap per spec — does not count toward the 3–5 component budget.

**Why this combination:** the issue is news-led with three anchors spanning three concerns. Two real diagrams (process-flow + compare-table) carry the two AI-substrate anchors visually; the pull-quote bar and stats tile cover the Lead and the back-of-book reflective LR. Author cards anchor the long-form trio. This rotates away from Issue 14's set (which leaned on a number band / sparkline) — within-issue craft, not state-tracked.

### Per-issue VISUAL BUDGET (target 4–6, ≥1–2 real diagrams)

| # | Visual | Section | Real diagram? |
|---|---|---|---|
| 1 | Cover lead-stat band (`.cover-lead-stat`) | Cover | counts toward budget |
| 2 | **Process-flow: GitLab org before/after** | Lead | **YES — real diagram** |
| 3 | Lead `.pq-bar` (non-Staples sentence) | Lead | no (pull quote) |
| 4 | **Compare-table: Visa vs Mastercard** | QT1 | **YES — real diagram/table** |
| 5 | QT2 anchor stat tile (or qualitative substitute per Flag 1) | QT2 | no (stat tile) |
| 6 | Leadership Read `.stats-tile` (span-of-control) | LR | borderline — stat tile, counts toward budget |

**Budget = 6 visuals, 2 real diagrams** (process-flow + compare-table). Meets the v1.30 floor (4–6 total, ≥1–2 real diagrams). Per-section visual floor: every major section (Lead, QT1, QT2, In Practice, Outside In, Leadership Read) carries at least one visual — confirmed below. If QT2's stat can't be verified (Flag 1), the QT2 tile substitutes to a qualitative pull or sector-pattern callout; budget stays ≥4 with 2 real diagrams intact. In Practice and Outside In carry their visual via author-card + a verified pull/callout (see briefs); if either lacks a clean visual, substitute per the v1.31 rule (different verified quote → stats tile → sidebar callout).

### SECTION ORDER (v1.32 interleave — no two long-form adjacent; Moreau IP/LR non-adjacent)

1. Cover
2. Foreword
3. (No P0 — `p0_active` empty)
4. Editorial Moment (Quote of the week — Staples)
5. The Week at a Glance (Action Required → Worth Knowing → Watching)
6. Section breather
7. **Lead** — GitLab restructure (Ways of working) — *long-form-adjacent: news*
8. Quick Takes: **QT1** Mastercard AP4M (Wider landscape) + **QT2** Meta cuts (Management & teams) — layout QT-B (featured + compact)
9. Section breather
9a. Mid-issue accent — **omit** (nothing earns it beyond the planned visuals; keeps within 6-visual budget)
10. `<hr class="feature-break">`
11. **In Practice** (long-form #1) — LDX3 recap / Moreau (or Monzo Ops Agent fallback)
12. Other News This Week (3–6 items)
13. Platform Updates — **omit** (no widespread-right-now runtime/platform decision)
14. `<hr class="feature-break">`
15. **Outside In** (long-form #2) — Datadog postmortem governance, Format A
16. On the Radar (deadlines/actions first, then events)
17. `<hr class="feature-break">`
18. **The Leadership Read** (long-form #3) — EM role splitting / Moreau / LeadDev
19. Recommended Reading
20. Footer (archive bar, Vol. II pill)

**Long-form spacing check:** IP (11) → Other News (12) → [Platform omitted] → OI (15) → On the Radar (16) → LR (18). No two long-form adjacent. Moreau IP (11) and Moreau LR (18) separated by four sections. ✅

### COVER VARIANT

**`.cover-lead-stat`** — Vol. II identity strap (teal pill "Vol. II" + Issue 15 + 2026-06-19 + N min read), cover tagline ("Engineering decisions, every Friday."), bordered orange week badge, 40px dot-grid motif at ~7% opacity. **Stat choice:** the GitLab org-shape number is the issue's strongest single signal — use **"~60"** (R&D reorganised into ~60 autonomous teams) OR **"3"** (management layers removed), with the GitLab restructure as the one-line context. Stat over quote because the reserved Staples quote already carries the Editorial Moment — putting it on the cover too would burn the one-quote-one-slot allocation. **NO editor's note** (Issue 12-only; removed from Issue 13 onward).

---

## SECTION BRIEFS

### Cover
- **Component:** `.cover-lead-stat` band. Vol. II strap, tagline, bordered week badge, dot-grid.
- **Lead stat:** GitLab "~60 autonomous teams" (or "3 management layers removed") + one-line context.
- **Reading time:** calculate from final word count at ~200 wpm; place next to issue badge.
- **Contents grid:** Lead (GitLab), Quick Takes (Mastercard / Meta), In Practice, Outside In, Leadership Read.
- **Word count:** n/a (structural).

### Foreword
- **Opener style:** single editorial thread — the org-shape squeeze (GitLab + Meta + the EM-role split running underneath the whole issue). One point, a hook, not a contents list.
- **Drop cap** on first letter. No "meanwhile" / "elsewhere". No AI-default framing.
- **No editor's note.**
- **Target word count:** 50–80 words.
- **Voice:** third-person editorial.

### Editorial Moment — "Quote of the week"
- **Variant:** Quote of the week (varies from last issue's `number_of_the_week`).
- **Material:** Bill Staples (GitLab CEO) — *"software built by machines, directed by people."* Casual pull-quote style, smaller than a `.pq-bar`. One-line "why it matters" framing tying it to the org-shape theme.
- **RESERVED QUOTE — one-quote-one-slot.** This line lives ONLY here. Do not reuse in the Lead.
- **Source:** GitLab Act 2 blog `https://about.gitlab.com/blog/gitlab-act-2/` (verify the exact wording in the readable source before shipping as a direct quote; if unverifiable verbatim, render as attributed paraphrase, not double-quoted).
- **AI-primary:** yes (counts toward 6-featured ceiling; total 3 of 6).
- **Label:** structural landmark → default teal.
- **Target word count:** 30–50 words.

### The Week at a Glance
- **Three tiers:**
  - **Action Required (red):** Mastra npm scope takeover / easy-day-js typosquat (BlueNoroff). ONE line. Note the AI-framework-targeting + nation-state angle. Source: `https://www.stepsecurity.io/blog/mastra-npm-packages-compromised-using-easy-day-js`. Reader action = be aware / delegate.
  - **Worth Knowing (teal):** GitLab cross-ref (covered as Lead — one line pointer); Mastercard/Visa cross-ref (covered as QT1 — one line pointer); Meta-cuts sector pattern if not fully carried in QT2.
  - **Watching (grey):** DORA 2026 follow-up as trend context (also On the Radar — keep to one tier); banks-as-media / card-linked-offers context (ACHIVX — framing only, secondary outlet).
- **Source links** on any item not covered by a full article.
- **Label:** structural landmark → default teal.
- **Target word count:** ~120–180 words total across tiers (one line each).

### Section breather
- `.section-breather` band between Week at a Glance and the Lead.

### Lead — GitLab restructures for the agentic era
- **Concern:** Ways of working (org design / team topology). Section label → **default teal** (NOT alert-red; this is org design, not active-threat).
- **Opener style:** **summary-first** is barred? No — `last_lead_opener` is retired (v3.5); within-issue variety is the rule. Use **narrative-first** (open on the org-shape decision GitLab made and the question it forces), distinct from the QT openers. State in the first sentence WHEN the original announcement occurred (11 May; financial scope 2 June) and frame on what is new this week (Flag 3).
- **Structure:** h3 subheadings every 1–2 paragraphs. Render the org change as an explicit sequence where it appears (3 layers removed → ~60 autonomous teams → agents automate internal review).
- **Visual:** **`.process-flow`** — before/after org shape (3 management layers removed; R&D → ~60 teams; 7% headcount; 30% country reduction). Real diagram. `chartable_data` flagged in candidates.
- **Pull quote (`.pq-bar`):** a DIFFERENT sentence from the reserved Staples line. Candidates (pick one, verify verbatim against source):
  - the framing of R&D into ~60 small autonomous teams as the new unit of delivery, OR
  - a sentence on agents automating internal reviews/approvals.
  - **DO NOT use** *"software built by machines, directed by people"* (reserved to Editorial Moment).
- **Jargon Watch sidebar (`.jargon-watch`):** gloss **"agentic era"**, **"team topology"**, **"RIF"** (reduction in force — expand the acronym). Cluster ≥2 terms → sidebar is the right treatment. Define agent-spectrum end on first use: GitLab's agents automate *internal review/approval workflows* (assistive-to-the-org, human-directed) — name which end.
- **Drop cap** via `.lead-article` class.
- **AI-primary:** yes.
- **Source:** `https://thenextweb.com/news/gitlab-cuts-7-of-workforce-and-flattens-management-in-sweeping-agentic-era-restructuring`; primary `https://about.gitlab.com/blog/gitlab-act-2/`.
- **Target word count:** 300–400 words.

### Quick Takes — layout QT-B (featured + compact)
QT-B chosen: QT1 (Mastercard AP4M) is the stronger, fuller story → wider column (~60%); QT2 (Meta cuts) is the tighter, punchier read (~40%) and carries the corroboration caveat → compact column. Each ends with a bold **"The takeaway"** line (implication, not instruction).

#### QT1 — Mastercard Agent Pay for Machines (featured, ~60%)
- **Concern:** Wider engineering landscape (cross-industry agentic commerce) **with a loyalty / commerce-media surfacing note** (the reader's vertical) — framed positively as "the world the reader operates in."
- **Opener style:** **stat-first** (anchor stat in the coloured header card) — distinct from the Lead's narrative-first.
- **Coloured header bar:** orange (Banking/Fintech topic colour).
- **Anchor stat:** 31 launch partners, OR sub-cent micropayment capability, OR the Visa-vs-Mastercard race framing number. Pick the most striking verified figure.
- **Visual:** **`.compare-table`** — Visa vs Mastercard agentic-commerce approaches: rows = tokenisation model / rails / launch partners / consent binding (≤5 rows × 2 cols). Real diagram.
- **Jargon Watch / inline gloss:** gloss **"agentic commerce"**, **"Agent Pay for Machines / AP4M"**, **"agentic tokens"**, **"AP2"**, **"stablecoin rail"** on first use. Cluster → `.jargon-watch` sidebar acceptable, or inline glosses. **Name the agent-spectrum end:** these are **production agents with action authority** (autonomous money movement) — say so explicitly on first use.
- **Throughline:** none required.
- **AI-primary:** yes.
- **Source:** `https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html`.
- **Target word count:** 200–250 words.
- **The takeaway:** the trust/consent layer for agent-initiated transactions is becoming real infrastructure; the conversation bank customers will open is how the loyalty/commerce-media stack handles agent-initiated, tokenised-consent transactions.

#### QT2 — Meta cuts ~8,000 roles, management hit hardest (compact, ~40%)
- **Concern:** Management & teams (org-shape / management-layer economics). **NON-AI-primary** — the substantive driver is management-layer economics; AI is the cited cause, not the subject. (This is the issue's needed non-AI featured section.)
- **Opener style:** **summary-first / sector-pattern** — open on the pattern (Meta + GitLab + Atlassian), not the single-company count. Distinct from QT1 and Lead.
- **Format:** compact — anchor stat + 2–3 sentences + takeaway. No subheadings.
- **Anchor stat:** **CORROBORATION REQUIRED (Flag 1).** If 1,400 management roles (~⅓ of cuts) / 8,000 total verify against a primary source, use as the stat tile. If NOT, substitute a qualitative anchor (the sector-pattern observation) — apply visual-substitution.
- **Visual:** stat tile (or qualitative substitute per Flag 1).
- **Jargon:** none triggering (general-business terms only).
- **AI-primary:** no.
- **Source:** `https://www.latestly.com/technology/meta-layoffs-2026-8000-jobs-cut-as-zuckerberg-shifts-focus-to-ai-middle-managers-and-software-developers-face-largest-reductions-7469748.html` + primary corroboration source to be added by Phase 4.
- **Target word count:** 120–160 words.
- **The takeaway:** the middle-management squeeze is a sector pattern now, not one company — it changes how leaders justify management layers and plan org shape.

### Section breather
- `.section-breather` band between Quick Takes and the next block. (Second and final breather — max 2 per issue.)

### Mid-issue accent — OMIT
- Nothing earns it; the two real diagrams already carry the visual load and the 6-visual budget is full. Optional component, omit cleanly.

### `<hr class="feature-break">` (above In Practice)

### In Practice (long-form #1) — Hiring loops in the agent era
- **Theme label (`.ip-theme`):** *"Hiring loops in the agent era"* — **theme name only, NO week count** (grep for "week" / "of 3" / "part" must return 0).
- **Season note:** the "Career frameworks & ladder design" season is CUT SHORT at week 1 (no fresh qualifying journey piece); this off-theme piece runs in its place. State writes only on Deliver — do NOT increment season progress for an off-theme piece.
- **Chosen piece:** LDX3 2026 recap (blog4ems, Stephane Moreau) — `https://www.blog4ems.com/p/engineering-leadership-lessons-from-ldx3-2026`.
- **PAYWALL CHECK (Flag 2):** confirm cited operator detail is in the readable portion. **If not, SUBSTITUTE Monzo Ops Agent** (`https://monzo.com/blog/engineering-the-future-of-customer-operations-the-monzo-ops-agent`) — then IP becomes the single AI-primary long-form section (still compliant); define assistive→action-taking agent spectrum on first use.
- **Three-quality filter (LDX3 pick):** named operators (Meta's Danit Nativ Navon; Nicole Forsgren; Wise's Rick Clegg) ✅; journey not framework (interview rebuild across 9,000 interviews) ✅; technical at implication level ✅.
- **Concern/subject:** Management & teams — hiring-loop craft. **NON-AI-primary** (interview redesign / management craft is the subject; AI is the context). Protects the long-form variety rule.
- **Author card (`.author-card`):** Stephane Moreau, Senior EM at Zopa Bank (text initials avatar), date. (Monzo fallback: Monzo Engineering, dated.)
- **Visual:** author card + a verified pull or stats callout (the 9,000-interviews figure as a small callout, OR Forsgren's three friction types as a `.compare-table`-adjacent list). If no clean visual, substitute per v1.31 order.
- **Jargon / gloss:** gloss **"AI-native assessment"**, **"velocity / cognitive / knowledge friction"** (Forsgren's taxonomy) on first use. Numerical-frequency check: if any specialist term recurs 3+ times, gloss it.
- **Structure:** off-white `.in-practice-header` (deep-teal top + left borders) flowing into `.in-practice` body; ends with bold **"What to try"** one-sentence framing.
- **Substitution test (Monzo fallback):** "a large regulated org set the evaluation bar before letting an agent take action" — holds.
- **AI-primary:** no (LDX3) / yes (Monzo fallback — still ≤1 of 3 long-form).
- **Target word count:** 300–450 words.

### Other News This Week (3–6 items)
- **Items (one sentence + source link each):**
  - Atlassian 1,600-cut / 800-AI-hire datum (corroborate; sector-pattern callback to QT2). 
  - Banks-as-media / card-linked-offers context (ACHIVX/Olive) — **framing only, secondary outlet, treat as context not fact**; source `https://medium.com/@achivx/card-linked-offers-in-2026-why-banks-as-media-is-happening-now-bf0a5a1692cf`.
  - Visa / OpenAI agent-tokenisation partnership (if not fully carried in QT1) — one line.
  - Any spillover (GitLab/Meta secondary reaction).
- **News between long-form sections** (v1.32 — breaks the back-of-book essay cluster).
- **Target word count:** ~30–50 words per item.

### Platform Updates — OMIT
- No widespread-right-now runtime/platform decision in the pool. Datadog is handled as Outside In, not a platform row. Omit the section (0 rows).

### `<hr class="feature-break">` (above Outside In)

### Outside In (long-form #2) — Datadog postmortem governance, Format A
- **Format:** A (full feature) — LR is present and back-of-book, so A (places after Lead, before LR is fine given the interleave) with author card.
- **Story:** Datadog instruments post-incident review as a reportable governance metric (DASH 2026).
- **Concern/sector:** Operating at scale; sector = platform/cloud (dev-infra). **NON-AI-primary.**
- **Opener style:** must differ from all prior openers in the issue — use **quote-first** or a clean declarative scene-set on the governance shift (not narrative-first / stat-first / summary-first already used).
- **Author card (`.author-card`):** Datadog (DASH 2026), dated.
- **`.oi-callout`:** render the core lesson — reliability maturity made visible to leadership as data, not assertion — in a shaded callout box (mandatory for Outside In).
- **`.oi-stats-row`:** if a benchmark/metric is available (e.g. % of SEV-1s with completed postmortem), use it; else omit.
- **Visual:** oi-callout + optional stats row, or the postmortem lifecycle as a 3-state mini process-flow (Draft → In Review → Completed) if a second real diagram is wanted (budget permits dropping to it if QT2 stat fails verification).
- **Jargon / gloss:** gloss **"postmortem"**, **"SEV-1"**, **"incident facets"** on first use.
- **Throughline (single sentence):** contrast with Issue 14's Honeycomb/Lex Neva Outside In (which argued for dropping action-item tracking) — genuine tension, warranted.
- **Transferability/substitution test:** "a large engineering org made reliability maturity visible to leadership as data, not assertion" — holds. ✅
- **Anti-overlap:** Datadog ≠ LeadDev/Moreau (LR). ✅ Not in `outside_in_history`. ✅
- **Ends with** bold **"The takeaway"** line.
- **AI-primary:** no.
- **Source:** `https://www.datadoghq.com/blog/dash-2026-new-feature-roundup-scale/`.
- **Target word count:** 250–350 words.

### On the Radar (timeline — deadlines/actions first, then events)
- **Deadlines / required actions first**, then events. `.radar-timeline` with connector dots; urgent items `.radar-item.urgent`.
- **Items:**
  - **DORA 2026 follow-up** (+66.2% epics/dev vs +441% PR review time) — ONE line, traction-dependent. Out-of-window (28 May) + prior-anchor caution → does not anchor. Source `https://www.infoq.com/news/2026/05/dora-roi-ai-assisted-dev-report/`.
  - Mastercard AP4M rollout timeline (event).
  - Visa / OpenAI partnership (event).
- **Gloss:** if DORA appears, gloss **"DORA"** (the AI-assisted-dev report, not the EU regulation), **"PR review time"** briefly.
- **Target word count:** ~20–30 words per item.

### `<hr class="feature-break">` (above Leadership Read)

### The Leadership Read (long-form #3) — The EM role is splitting in two
- **Story:** the engineering manager role is splitting into a tech-lead-manager track and a multi-team-scope track; choosing a span-of-control model deliberately.
- **Source:** LeadDev (Stephane Moreau, Senior EM at Zopa Bank) — `https://leaddev.com/career-development/the-engineering-manager-role-is-splitting-in-two`.
- **event_or_essay:** essay (correct for the reflective back-of-book close).
- **Concern:** Management & teams (career frameworks / span of control). **NON-AI-primary** (AI-driven flattening is the backdrop, not the subject).
- **`.mgmt-section`** navy, teal drop cap (auto via CSS). h3 subheadings.
- **Opener style:** distinct from all prior openers — narrative or thesis-first on the role fragmentation.
- **Author card (`.author-card`):** Stephane Moreau, Senior EM at Zopa Bank, dated. (Same author as IP — different outlet, non-adjacent, compliant.)
- **Visual:** **`.stats-tile`** — span-of-control numbers: Meta applied-AI team 50:1 employee-to-manager ratio; managers with 15+ reports score 20% lower on team engagement than those with ≤7. Render as the LR's visual.
- **Jargon / gloss:** gloss **"tech-lead-manager"**, **"span of control"**, **"50:1 ratio"** on first use (numerical-frequency trigger if any recurs 3+ times).
- **Substance floor:** name the tech-lead-manager vs multi-team-scope split; carry the Meta 50:1 ratio and the 15+-reports / 20%-engagement-delta stats; takeaway in our own words.
- **Discussion prompt:** **"This could be worth talking about:"** + one sentence, **third-person editorial** (no direct address — e.g. "Engineering leaders are now choosing which EM model to fund deliberately rather than letting it drift…").
- **Source-rotation:** `last_leadership_read` = incident.io → LeadDev eligible (not consecutive). ✅
- **Anti-overlap:** LeadDev ≠ Datadog (OI). ✅
- **AI-primary:** no.
- **Target word count:** 400–600 words.

### Recommended Reading
- Linked list. Candidates: Pragmatic Engineer / Grady Booch "third golden age" (`https://newsletter.pragmaticengineer.com/p/the-third-golden-age-of-software`); JFrog easy-day-js forensic write-up (`https://research.jfrog.com/post/easy-day-js/`); any unused strong candidate. Verify links resolve.

### Down the Rabbit Hole — SUPPRESS
- `last_rabbit_hole_date` = 2026-06-12 (Issue 14 used one). Cadence + back-to-back avoidance → **omit this week.** (Candidate would have been the JFrog easy-day-js forensic write-up — moved to Recommended Reading instead.)

### Footer
- Archive bar (`.archive-pill`) — last 5 issues by date + format, current (Issue 15) highlighted teal. Vol. II teal pill badge (`.footer-vol`). Next-edition line.

---

## CADENCE GATES APPLIED (against state file)

| Gate | State value | Decision |
|---|---|---|
| `last_rabbit_hole_date` | 2026-06-12 | **Suppress Rabbit Hole** (back-to-back; Issue 14 used one). |
| `last_feature_date` | null | No Feature this issue (not warranted by material; optional). |
| `last_stack_date` | null | No Stack this issue (not warranted). |
| In Practice season | "Career frameworks & ladder design", progress 1 | **Cut short** (week 1) — off-theme piece runs; state closes season on Deliver only. |

Per-rotation trackers (`last_qt_layout`, `last_oi_format`, `last_editorial_moment`, `last_lead_opener`) are retired (v3.5) — within-issue variety is the rule. Within-issue opener variety confirmed: Lead = narrative-first, QT1 = stat-first, QT2 = summary-first/sector-pattern, Outside In = quote-first, LR = thesis-first. No two articles share an opener. ✅
