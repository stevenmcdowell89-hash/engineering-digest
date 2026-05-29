# Issue 12 — Section Briefs (Phase 3 artefact)

**Date window:** 2026-05-22 → 2026-05-29
**Format:** Standard Weekly
**Input contract:** `run-plan.md` (Phase 2). This brief converts the plan into per-section execution. No slot is re-decided here.
**Cadence inputs:** `last_feature_date`=null, `last_stack_date`=null, `last_rabbit_hole_date`=2026-05-22. Feature and The Stack NOT called for by the run plan → omitted. Down the Rabbit Hole included (run plan §7). No P0 active (`p0_active: []`) → no P0 status card.

---

## COMPONENT MANIFEST

### Vol. II identity finding (v1.31)
**CHECKED `issues/issue-11.html`.** Issue 11 ships the **Vol. I treatment** — its CSS/HTML comments read "COVER (Vol. I — Issue 10 pattern)" and "IN PRACTICE — Vol. I navy header pattern." Grep count for `editor-note` / `cover-tagline` / `cis-vol` / `footer-vol` / `cover-identity-strap` = **0**. The week badge is the old solid-orange pill; there is no teal Vol II pill, no tagline, no editor's note.
**Conclusion:** Issue 11 did NOT ship Vol II markers or the one-time editor's note. **Issue 12 is the genuine Vol. II debut.**
- **INCLUDE the one-time editor's note** in the Foreword (`.editor-note`), acknowledging the Vol. II refresh. (Remove from Issue 13 onwards.)
- **APPLY all Vol. II cover markers (v1.31):** `.cover-identity-strap` with teal `.cis-vol` pill, `.cover-tagline` ("Engineering decisions, every Friday." italic teal), bordered orange `.week-badge`, cover dot-grid motif, `.footer-vol` teal pill, `.section-time` per-section reading time, drop caps in Lead + Leadership Read.
- Cover variant: **`.cover-lead-stat`** — the issue's strongest single signal is a number (the ~7-hour Coinbase outage), and the Lead/anchors are stat-led, so a lead-stat cover lands harder than a quote cover.

### Visuals — budget and real-diagram floor (v1.30)
Target 4–6 distinct content visuals; ≥1 per major section; ≥1–2 real diagrams/charts/tables. Cover lead-stat counts; Vol II identity strap does NOT count.

| # | Section | Primitive | Real diagram/chart/table? |
|---|---|---|---|
| 1 | Cover | `.cover-lead-stat` — "~7 hrs" Coinbase outage | No (cover stat) |
| 2 | Lead (Copilot) | **`.compare-table`** — flat PRU vs metered AI Credits (Business vs Enterprise included credits) | **YES — compare-table** |
| 3 | QT1 (AWS thermal) | **Inline `<svg>` cascade/dependency diagram** — single-hall cooling loss → power loss → EC2/EBS damage → Coinbase/FanDuel/CME outage | **YES — real diagram** |
| 4 | QT2 (Coinbase/layoffs) | **`.compare-table.compact`** — incumbent AI-as-cost-takeout (15,000 jobs / $47bn profit) vs fintech AI-native (rev/employee), the bifurcation contrast | **YES — compare-table** |
| 5 | Mid-issue accent | `.mid-accent-band` — "the harness is the product" four-vendor pricing split, one striking figure ($0.08/session-hour) | Borderline (number band) |
| 6 | In Practice (Vilalta) | `.author-card` + **`.process-flow`** — new-manager support sequence / skip-level cadence as a 3–4 step flow | **YES — process-flow** |
| 7 | Outside In (incident.io) | `.author-card` + `.oi-stats-row` (99.99% target / <5-min latency / dual providers) | Stats row (visual floor met) |
| 8 | Leadership Read (LeadDev) | `.author-card` + centred `.pull-quote` blockquote card (the "slippery slope" line) | Pull-quote (visual floor met) |

**Budget confirmation:** 8 content visuals total. This exceeds the 4–6 target band — Phase 4 should treat #2, #3, #4, #6 as the load-bearing four (they are real diagrams/tables/charts and carry the data) and may drop the cover-stat-from-count plus trim toward 6 if any quote/data point fails verification. The **minimum viable set is the four real diagrams (#2 Lead compare-table, #3 AWS SVG cascade, #4 QT2 compare-table, #6 IP process-flow)** plus the cover stat — that is 5 distinct visuals and satisfies ≥1 per major section. The accent band, OI stats row, and LR pull-quote are the section-floor fillers that round out variety.
**Real-diagram floor: PASS — 4 real diagrams/charts/tables planned** (Lead compare-table, AWS SVG cascade diagram, QT2 compare-table, In Practice process-flow), well over the 1–2 floor. The AWS single-hall→cascade SVG is the anchor real diagram (Phase 1's strongest chartable flag).
**Per-major-section floor: PASS** — Lead, QT1, QT2, In Practice, Outside In, Leadership Read each carry ≥1 visual; no major section is pure prose.

### Rotating component cap (3–5, Standard Weekly)
In Practice, Jargon Watch, Concept of the Week, author cards, Down the Rabbit Hole do NOT count toward the cap (baseline / recurring). Counted rotating components: **(1) compare-table, (2) inline SVG cascade diagram, (3) mid-issue number band, (4) process-flow.** = 4 components → within the 3–5 cap. No Feature, no Stack.

### Opener assignments (v3.5 — no two articles open the same way)
Six articles need distinct openers across Lead / QT1 / QT2 / In Practice / Outside In / Leadership Read:

| Section | Opener | Rationale |
|---|---|---|
| **Lead** (Copilot) | **Summary-first** | Complex pricing-mechanism shift needs a one-sentence thesis frame before unpacking PRU→AI-Credits. |
| **QT1** (AWS thermal) | **Narrative-first** | Post-mortem / incident — open on the single hall losing cooling, the chronological hook. |
| **QT2** (Coinbase/layoffs) | **Stat-first** | The pattern is carried by numbers (700 / 14%, the wave counts) — lead on the number. |
| **In Practice** (Vilalta) | **Quote-first** | Vilalta's skip-level framing line ("I want to understand how we can better support you and your manager") is the sharpest entry. |
| **Outside In** (incident.io) | **Summary-first variant → declarative thesis** | NOTE: Lead is also summary-first. To keep strict within-issue variety, Outside In opens **declarative/thesis on the customer-outcome reframe** but Phase 4 MUST differentiate it from the Lead — recommend treating OI as a **distinct fourth style**: open on the *mechanism* ("good minutes / total minutes" as the unit) rather than a thesis sentence. If ambiguity remains, swap OI to a clean stat-first is blocked (QT2 holds stat-first); instead OI uses the **definitional/mechanism opener** — naming the metric first. The four catalogue styles are spread Lead=summary, QT1=narrative, QT2=stat, IP=quote; OI and LR reuse from the catalogue but in clearly different register from their twin. |
| **Leadership Read** (LeadDev) | **Narrative-first (escalation sequence)** — opens on the three-stage "slippery slope" progression as a mini-narrative, distinct from QT1's incident narrative in subject and register. |

**Resolution of the 6-into-4 problem:** the catalogue has 4 styles for 6 articles. Strict reading of v3.5 is "no two articles open the same way." Assign the four pure styles to Lead (summary), QT1 (narrative-incident), QT2 (stat), IP (quote). For OI and LR, use the two remaining distinct treatments: **OI = mechanism/definition opener** (name the metric — a stat-adjacent but structurally distinct entry from QT2's headline-number stat-first), and **LR = process/sequence narrative** (the slippery-slope stages — structurally distinct from QT1's chronological-incident narrative because it walks a conceptual progression, not a timeline). Phase 4 must keep these six visibly distinct; if any two collapse on the page, prioritise differentiating OI and LR.

### Jargon routing (v3.7 — gloss vs Jargon Watch vs Concept of the Week)
- **Lead Jargon Watch sidebar (`.jargon-watch`, deep-teal):** the Lead centres on named pricing terms repeated 3+ times — **"Premium Request Units (PRU)"** and **"GitHub AI Credits"** go in ONE Jargon Watch box (two terms in one article = sidebar treatment per v3.7). **"agentic features / agentic usage"** glossed inline in the Lead AND used as the **agent-spectrum definition point (v3.4)** — first use of agent terminology in the issue must name which end of the spectrum: "agent-mode workflows inside the IDE (a human still triggers and reviews), not autonomous production agents."
- **Inline gloss (Lead/QT1):** EC2 / EBS — one em-dash aside on first use ("EC2/EBS — AWS's core compute and block-storage building blocks"). "single-hall" / availability-zone — inline gloss in QT1. "US-EAST-1", "thermal event", "cross-region DR" — inline.
- **Inline gloss (Outside In):** **SLO** and **"good minutes / total minutes"** glossed inline on first use (SLO = service-level objective, the reliability target a team commits to). Not a full sidebar — one line each.
- **Concept of the Week sidebar (`.concept-of-week`, orange) — the management term:** route **"player-coach"** here (the QT2/Coinbase management concept the year-one EM from a non-technical route won't know cold — a manager who also carries IC delivery work). Orange box distinguishes it from the teal technical Jargon Watch. (Chosen over "calibration"/"stack-ranking" because those are glossed inline within the Leadership Read where they are the subject and self-explained; "player-coach" appears in QT2 without room to self-explain.)
- **Inline gloss (Leadership Read):** "calibration", "stack-ranking", "performance curve", "fungibility" — self-defined in the article body (the piece IS about these), so inline definition on first use, no separate box.
- **Inline gloss (Editorial Moment / Other News):** "DORA (the survey, not the EU regulation)" — one-line gloss wherever DORA is named (the throughline note). "production agents with action authority" — used as the credible-end-of-spectrum data point in Other News (Brex/Ramp), reinforcing the Lead's agent-spectrum gloss.

### One-quote-one-slot allocation (v3.6)
- Coinbase "no pure managers" / "player-coaches" → **QT2 body only.**
- incident.io reliability framing → **Outside In only** (its operating_at_scale twin is dropped, per run plan).
- LeadDev "slippery slope of performance calibrations" → **Leadership Read centred blockquote only.**
- Vilalta skip-level support line → **In Practice quote-opener only.**
- AWS ~7-hour Coinbase outage stat → **Cover lead-stat + QT1 body** (stat, not a verbatim quote — reuse permitted as a number; the *quote* one-slot rule governs source lines, not figures, but Phase 4 should not double-frame it as a pull-quote elsewhere).
- $47bn / 15,000-jobs bifurcation figure → **Editorial Moment (Number of the week) + QT2 compare-table.** Editorial Moment uses it as the headline stat-tile; QT2 uses it inside the bifurcation compare-table as data. Same number, two non-quote uses (figure, not a source quote) — acceptable, but Phase 4 must NOT also pull-quote it.

### Anti-overlap confirmation
- **In Practice (Jay Vilalta, personal blog) vs Leadership Read (LeadDev / Alex Karp):** no shared author, no shared outlet. **PASS.**
- **Outside In (incident.io) vs Leadership Read (LeadDev):** different companies. **PASS.**
- **Outside In (incident.io) vs In Practice (Vilalta):** no shared company. **PASS.**

### Section spread (v1.32) — order confirmation
Lead → QT1 → QT2 → [breather] → mid-issue accent → `<hr feature-break>` → **In Practice** → Other News → Platform Updates → `<hr feature-break>` → **Outside In** (Format A, pos 15) → On the Radar → `<hr feature-break>` → **Leadership Read** → Recommended Reading → Footer.
No two long-form sections (In Practice / Outside In / Leadership Read) adjacent — each cushioned by news. **PASS.** Two breathers max: (1) WAG→Lead, (2) QTs→accent. One feature-break before In Practice. **PASS.**

---

## Cover
- **Variant:** `.cover-lead-stat`. **Lead pull-stat:** **~7 hours** — duration Coinbase was offline in the AWS US-EAST-1 thermal event. One-line context: "A single data-centre hall lost cooling — and a $-billion exchange went dark for most of a working day."
- **Vol. II markers:** identity strap + teal `.cis-vol` pill; tagline "Engineering decisions, every Friday."; bordered orange week badge; dot-grid motif; reading time next to issue badge (calc from total word count ÷200 wpm).
- **Contents grid:** Lead (Copilot AI Credits), QT1 (AWS thermal DR), QT2 (post-AI org shape), In Practice, Outside In, Leadership Read.
- **No word count** (structural).

## Foreword
- **50–80 words, one paragraph, drop-cap.** One editorial point: the week's thread is **cost made visible** — Copilot turns a fixed AI line-item into a metered one, AWS's thermal failure put a price on single-region concentration, and the layoff wave puts a price on the management layer. Do NOT list stories; find the thread. No AI-default framing. Third-person editorial voice.
- **`.editor-note` block (Issue 12 ONLY):** include — acknowledges the Vol. II visual refresh. Short. (Drop from Issue 13.)
- **No visual** (foreword forbids visuals).

## Editorial Moment — "Number of the week"
- **Variant:** Number of the week (`.editorial-moment` + stats-tile). **Stat chosen:** **$47bn combined profit alongside ~15,000 jobs cut** (the six largest US banks, Q1) — the bifurcation figure. Chosen over the AWS ~7hr stat because the AWS number anchors the Cover and QT1, and the bifurcation stat surfaces a data point that gets no full coverage (the essay is non-anchored). Non-AI-framed: present it as a banking-economics data point, not an AI-tool stat.
- **One-line why-it-matters:** the incumbent banks the reader's firm partners with are running AI as cost takeout — the figure is the shape of that decision.
- **Gloss:** none needed; figure stands alone.
- **Source:** Implicator.ai (bifurcation analysis).

## The Week at a Glance
- **5–8 quick hits, three urgency tiers.** No article-level visual (it's the reference section; tier styling is its polish).
- **Action Required:** Microsoft Defender zero-days (RedSun CVE-2026-41091 / UnDefend CVE-2026-45498), CISA-flagged, patches rolling — one line, "confirm patching is owned." (Audience-fit: awareness/delegate, not anchor. This is the SINGLE placement for the Defender item — NOT also On the Radar; run plan §On-the-Radar said pick one slot. Placed here.)
- **Worth Knowing:** Copilot usage-based billing live 1 June (cross-link to Lead); DORA "ROI of AI" report — one line + cross-issue throughline note (was Issue 10 QT2, no fresh treatment), gloss "DORA = the delivery-research survey, not the EU regulation"; Anthropic acquires Stainless ($300M+), hosted SDK generator winding down; Visa/Mastercard expand agentic commerce (Trusted Agent Protocol / Agent Pay) toward 2026 holiday season.
- **Watching:** ME fintech frontier (UAE FIT ~85%, Saudi open finance, new cloud regions); "the harness is the product" pricing split (also the mid-issue accent).
- **Source links on every item.**

## [Section breather] — between WAG and Lead.

## Lead — GitHub Copilot moves to usage-based AI Credits (1 June cutover)
- **Concern:** Ways of working. **Word count:** 300–400. **Drop-cap** (auto via `.lead-article`).
- **Opener:** **Summary-first** — one-sentence thesis: from 1 June, Copilot turns a fixed per-seat cost into a usage-metered one, and the budget conversation changes with it.
- **h3 subheadings** every 1–2 paragraphs (scannable).
- **Visual:** **`.compare-table`** — flat PRU model vs metered AI Credits; Business ($19, included credits) vs Enterprise ($39, included credits); completions unlimited / agentic features metered. (Real-diagram floor contributor #1.)
- **Pull-quote bar (`.pq-bar`):** the core insight — the cutover converts a fixed line-item into a variable one. (Default for Lead; one `.pq-bar` per issue max — this is it.)
- **Jargon Watch sidebar (`.jargon-watch`):** "Premium Request Units (PRU)" + "GitHub AI Credits" (two terms, one box).
- **Inline gloss:** "agentic features" — AND the **agent-spectrum definition (v3.4) on first use**: name this as agent-mode workflows inside the IDE (human triggers/reviews), not autonomous production agents.
- **Cross-issue throughline (single sentence):** Issue 10's DORA ROI model — "we covered the DORA ROI model in Issue 10; the Copilot change is the moment that model meets the actual invoice." Once only, not a re-anchor.
- **Source:** https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/

## QT1 — AWS US-EAST-1 thermal-event DR post-mortem
- **Concern:** Operating at scale. **Word count:** 150–250. **Non-AI featured #1.**
- **Opener:** **Narrative-first** — open on the single data-centre hall losing cooling (chronological incident hook). MUST state original event date (7–8 May) per the traction exception.
- **Visual:** **inline `<svg>` cascade/dependency diagram** — single-hall cooling loss → power loss → physical EC2/EBS damage → Coinbase (~7hr) / FanDuel / CME outage. (Real-diagram floor contributor #2; Phase 1's strongest flag — this is the anchor real diagram.)
- **Anchor stat in card:** ~7 hours (Coinbase). Topic colour: teal (operating-at-scale default; NOT red — reflective post-mortem, not active threat, per v1.32 palette rule).
- **Inline gloss:** US-EAST-1, "thermal event", EC2/EBS (em-dash aside), "single-hall"/availability-zone, "cross-region DR".
- **The takeaway** line: bold, states what changed re single-region concentration risk.
- **Source:** https://www.itpro.com/infrastructure/aws-outage-explained-may-2026-data-center-overheating

## QT2 — Coinbase "no pure managers" + the continuing layoff wave
- **Concern:** Management & teams. **Word count:** 150–250. **Non-AI substantive driver** (org-shape/labour; AI is backdrop).
- **Opener:** **Stat-first** — lead on the number (Coinbase ~700 / 14%, then the wave counts). State Coinbase's original 5 May date (traction exception).
- **Subject is the cross-company STRUCTURAL pattern** — flattening layers, player-coach model, layer-capping. **Meta is one named data point only, never the anchor subject** (Meta banned as anchor).
- **Visual:** **`.compare-table.compact`** — the banking AI bifurcation as contrast inside the card: incumbents = AI as cost takeout (15,000 jobs cut / $47bn profit) vs fintechs = AI-native model (revenue/employee). This is where the bifurcation essay lands as framed contrast, not an anchor. (Real-diagram floor contributor #3.)
- **Concept of the Week sidebar (`.concept-of-week`, orange):** "player-coach" — for the year-one EM from a non-technical route.
- **Inline gloss:** "AI-native pods", "cost takeout", "revenue per employee".
- **The takeaway** line: bold — what changes for levelling / span-of-control / the IC-vs-management track.
- **Sources:** https://fortune.com/2026/05/05/coinbase-layoffs-14-of-employees-ai-tech-ai-job-anxiety-crypto/ ; https://www.informationweek.com/it-staffing-careers/2026-tech-company-layoffs ; bifurcation data: https://www.implicator.ai/the-banking-ai-bifurcation-incumbent-cost-takeout-vs-the-fintech-ai-native-stack/
- **QT layout for the issue:** **QT-B (featured + compact)** — QT1 (AWS, with the SVG diagram) takes ~60% as the stronger/visual-heavy card; QT2 takes ~40%. CSS `.two-col.qt-featured`. (Chosen because QT1 carries the real diagram and is the clearer story; QT-A equal-grid would crowd the SVG.)

## [Section breather] — between Quick Takes and mid-issue accent.

## Mid-issue accent — Number band
- **Variant:** `.mid-accent-band`. **Stat:** **$0.08 / session-hour** (Anthropic's Managed Agents runtime) as the striking figure of the "harness is the product" four-vendor pricing split (vs OpenAI no first-party runtime fee vs Google/Microsoft bundled primitives).
- **One context line:** standardising on a harness now sets multi-year AI cost structure and switching cost. Emphasis, not a new anchor.
- **Jargon:** "harness" glossed in the one context line (the runtime that manages agent state/retries/tool hygiene).
- **Source:** https://thenewstack.io/ai-agent-harness-pricing-split/

## `<hr class="feature-break">` — before In Practice.

## In Practice — Jay Vilalta, "Managing Managers: a director's short guide"
- **Season:** Manager-of-managers craft. **Word count:** 300–450. **Non-AI long-form.** Tag: *"a classic worth revisiting"* (Sept 2025 evergreen; fresh in-window material thin).
- **`.author-card` at top (v3.8):** initials "JV", name Jay Vilalta, role "Director of Engineering · personal blog", date Sept 2025.
- **Opener:** **Quote-first** — Vilalta's skip-level support line: "I want to understand how we can better support you and your manager."
- **Visual:** **`.process-flow`** — the new-manager support sequence / skip-level cadence as 3–4 step boxes (e.g. skip-level with every IC → frame as support → heavy structure for new managers → frequent feedback). (Real-diagram floor contributor #4.)
- **Substance floor:** name the specific model (skip-levels framed as support not surveillance; heavy scaffolding for new managers; the catalogue of org dysfunctions — unclear/shifting priorities, weak tooling, poor cross-team comms, misaligned incentives, thin planning). One concrete mechanism + the no-click takeaway.
- **Jargon:** "skip-level", "manager-of-managers", "org dysfunction" — inline gloss (skip-level = a 1:1 between a leader and someone two levels down).
- **Closing:** bold **"What to try"** — one peer-level sentence.
- **Source:** https://jayvilalta.com/blog/2025/09/02/managing-managers-a-very-short-directors-guide-to-engineering-leadership/

## Other News This Week (3–6 items, one line + link)
- Railway full post-mortem on the 19 May GCP account-suspension outage — control-plane dependency cascaded beyond GCP. (Banned as anchor; one-line throughline density only.) — https://blog.railway.com/p/incident-report-may-19-2026-gcp-account-outage
- Stripe Sessions 2026 / Machine Payments Protocol fallout — agent-commerce primitives. (Banned as anchor; context only.) — https://stripe.com/blog/everything-we-announced-at-sessions-2026
- Brex/Ramp autonomous finance agents cross 1M conversations/month; Capital One–Brex $5.15bn deal — **production agents with action authority** (agent-spectrum data point reinforcing the Lead's gloss). — https://www.fintechbrainfood.com/p/the-cfo-dashboard
- EMDiary "expectations from engineering managers" — context line feeding the QT2 management-shape narrative. — https://emdiary.substack.com/p/expectations-from-engineering-managers
- **No visual** (reference section).

## Platform Updates / What's worth knowing (0–2 rows MAX)
- **1 row:** GitHub Copilot billing model change effective 1 June. Status: action / near-term decision (orange/red dot). Platform: GitHub Copilot. What changed: flat PRU → metered AI Credits. All other platform/runtime items omitted. (The `.glance-table` itself is the section's visual.)

## `<hr class="feature-break">` — before Outside In.

## Outside In — incident.io, "Customers over control" (Format A, position 15)
- **Sector:** dev tools & infrastructure (rotation-friendly; not in banned list). **Word count:** ~300–400 (Format A full feature). **Non-AI featured #2.**
- **`.author-card` at top (v3.8, Format A):** initials per author — run plan/candidates show byline "Mike" (first name only). **Author-quality flag for Phase 4:** verify full author name before publishing the card; if only "Mike" is confirmable, use "incident.io engineering" in the role line with first-name attribution, or confirm via the post. Do NOT fabricate a surname.
- **Opener:** **Mechanism/definition opener** — name the unit first: "good minutes / total minutes" as the measure of reliability (structurally distinct from QT2's stat-first headline-number and the Lead's thesis-summary). Keeps within-issue opener variety.
- **Visual:** `.oi-stats-row` — 99.99% monthly target / <5-min notification latency / dual telecom providers. (Section visual floor met.) `.oi-callout` for the core lesson (reliability measured from the customer's outcome, not the component).
- **Inline gloss:** SLO (= service-level objective), "good minutes / total minutes", "alert ingestion".
- **Transferability one-sentence test:** "A large engineering org measures reliability by customer-experienced good minutes and refuses to accept a third-party provider's degradation as an excuse" — still meaningful. **PASS.**
- **The takeaway** line: bold.
- **Source:** https://incident.io/blog/customers-over-control

## On the Radar (timeline; deadlines first)
- **1 June** — GitHub Copilot AI Credits cutover (deadline; `.rc-date.urgent`).
- **2026 holiday season** — Visa/Mastercard agentic-commerce go-mainstream target (event).
- **Q4 2026** — Microsoft Saudi Azure region GA (event, ME relevance).
- **NOTE:** Defender zero-day patching is placed in WAG → Action Required (above), NOT duplicated here (run plan instruction to pick one slot).
- **`.radar-timeline`** is the section visual.

## Down the Rabbit Hole — "Taming time in distributed systems"
- **Type tag:** Long-read. **Placement:** floated within / immediately after QT1 (AWS) — connects to the clocks/ordering/cascade thread of the operating-at-scale spine.
- **2–3 sentences:** what it is (no global clock, logical/vector clocks paper over drift), why it connects to the AWS/Railway infrastructure thread, why worth the click.
- **`.rabbit-hole`** box (its own visual; not counted in the 4–6 content budget — recurring sidebar).
- **Source:** https://newsletter.systemdesign.one/p/distributed-systems

## `<hr class="feature-break">` — before Leadership Read.

## The Leadership Read — LeadDev (Alex Karp), "A manager's guide to performance calibration"
- **Concern:** Management & teams craft. **Word count:** 400–600 (substance floor — do NOT go below 400). **Non-AI craft read.** Navy `.mgmt-section`, drop-cap (auto).
- **`.author-card` at top (v3.8):** initials "AK", name Alex Karp, role "LeadDev", date 2022 (evergreen — quality over recency permitted for this section).
- **Opener:** **Process/sequence narrative** — walk the three-stage "slippery slope": (1) dissociation/fungibility → (2) performance curves → (3) stack ranking. (Distinct from QT1's chronological-incident narrative.)
- **h3 subheadings**; render the three stages and the seven counter-recommendations as numbered lists.
- **Visual:** centred `.pull-quote` blockquote card (the "slippery slope of performance calibrations" line, 20px Playfair, the section's visual anchor).
- **Substance floor:** name the framework (three-stage slippery slope), ≥2 concrete mechanisms (local calibrations; eliminating curves; including everyone; clear ratings), and the no-click takeaway.
- **Inline gloss:** "calibration", "stack-ranking", "performance curve", "fungibility" — self-defined in body on first use (no separate box; the article is about these).
- **Closing:** **"This could be worth talking about:"** + one specific provocative question on calibration drift.
- **Source:** https://leaddev.com/management/managers-guide-performance-calibration

## Recommended Reading
- Linked list. No visual. Pull from the issue's non-anchored strong reads: the harness-pricing essay (The New Stack), the banking AI bifurcation (Implicator.ai), the ME fintech frontier (MEF), the EMDiary expectations piece, the distributed-time long-read. Keep to a clean curated list, real URLs only.

## Footer
- Masthead "Engineering Digest" only (no branding/company names).
- **`.footer-vol` teal pill** (Vol. II, matches cover identity strap — front-to-back tie).
- Next-edition line.
- **Archive bar:** last 5 issues as `.archive-pill` badges, Issue 12 highlighted `.archive-pill.current` (teal).
