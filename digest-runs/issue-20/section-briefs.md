# Issue 20 — Section Briefs (Phase 3, slot detail & component allocation)

**Date:** Friday 2026-07-31 · **Format:** Standard Weekly · **Volume:** II
**Contract:** `run-plan.md` (Phase 2). Every editorial decision below is inherited from that plan. Phase 3 has re-made nothing; it has verified, resolved and allocated.

---

## 0. VERDICT ON THE AUTHORISED FALLBACK — READ FIRST

> ## ✅ THE LEADERSHIP READ PRIMARY **HOLDS**. THE § 7 FALLBACK **DOES NOT FIRE**.
>
> The Pragmatic Engineer napkin-math piece (Simon Eskildsen with Gergely Orosz, 21 July) was fetched and is **fully readable end to end — no paywall, no subscribe gate, no truncation.** It carries all three elements of the v3.0.1 Leadership Read substance floor:
> - **(a) the named argument** — *napkin math*, defined by Eskildsen as a maintained table of first-principles numbers used to establish what a system *should* be capable of before trusting any benchmark;
> - **(b) both required concrete mechanisms** — the search-benchmark example (**10 seconds observed against 10 milliseconds theoretical**, with the reason for the 1,000× gap given) and the Cursor bill (**$80K/month → $4K/month** after moving to turbopuffer);
> - **(c) an explicit takeaway** available (see the caveat at § 8.6 — the *source's* closing paragraphs turn to venture-funding dynamics, so the digest draws its takeaway from the napkin-math argument, not from the article's final section).
>
> **Therefore the long-form set stays as planned:** In Practice = Zenjob / Topcu · Outside In = Shopify / Deveau · Leadership Read = Pragmatic Engineer / Eskildsen. **Outside In is NOT omitted. LeadDev stays at 2 sections (QT1 co-source + In Practice). The Meg Adams "Influence" piece is NOT used and must not appear anywhere in the issue.**

---

## 1. Phase 3 verification log (all six assigned items closed)

| # | Item | Outcome |
|---|---|---|
| 1 | **Leadership Read paywall check** | **PASS — primary holds.** Fully readable; named argument + both required mechanisms + takeaway all present. Fallback not triggered. |
| 2 | **Zenjob (Topcu, LeadDev, 27 Jul) readable + three-way allocation rule** | **PASS.** Fully readable. Author *Ferit Topcu, Zenjob SE*, 27 July 2026. The three-way rule is present verbatim (quoted at § 5.5). |
| 2b | **Shopify (Deveau, 29 Jul) readable + cost envelope** | **PASS.** Fully readable. Author *Zack Deveau*, Application Security, Shopify, 29 July 2026. **All five figures verified verbatim** — $50–300 full scan, $5–50 incremental, "over 80 unique applications", "over 300 findings", "two findings would have been rated as Critical", "roughly six weeks". |
| 3 | **GitHub Status source (x.com)** | **RESOLVED — substitute found and timings re-verified.** Official permalink: `https://www.githubstatus.com/incidents/8vfyvq16hzh9`. **Drop the x.com link entirely.** See § 9.2 for the corrected timings and the impact caveat. |
| 4 | **AWS ME-CENTRAL-1 / ME-SOUTH-1 conditional Radar row** | **CONFIRMED against AWS's own Health Dashboard — KEEP THE ROW.** Both events are still **open** on AWS's public current-events feed as of 31 July 2026. **Caveat: AWS's most recent public update on both regions is dated 30 April 2026.** See § 9.3 for exact wording and the hard constraint. |
| 5 | **Visa figures pinned to investor relations** | **DONE.** Every figure now pinned to the Q3 FY2026 earnings call with named speakers (Ryan McInerney, CEO; Chris Suh, CFO) plus the official IR release. See § 5.3. |
| 6 | **Verbatim quote verification** | **DONE — 5 of 5 allocated quotes verified verbatim in source.** No quote was dropped, so no visual substitution under the v1.31 rule was required. See § 3. |

**Verification also surfaced nine corrections to run-plan detail.** These are fidelity fixes to claims the plan relies on, not editorial changes. They are binding on Phase 4 — see **§ 9, Corrections register**.

---

## 2. Component manifest (top level)

### 2.1 Layout components — **5 of the 3–5 standard-weekly cap** (at the cap)

| # | Component | CSS | Where | Why this one |
|---|---|---|---|---|
| 1 | **Inline SVG chart** (×2 instances, one component type) | hand-crafted `<svg>` | Lead, QT1 | The two anchors with genuinely comparable numeric series. Both are *real diagrams*. |
| 2 | **Compare table** (×2 instances, one component type) | `.compare-table` | QT2, In Practice | Two structurally comparative payloads — two card networks' revenue mix, and a three-way decision rule. Both are *real tables*. |
| 3 | **Stats row** | `.oi-stats-row` | Outside In | Four discrete scale figures with no comparison axis — a stats row, not a chart. |
| 4 | **Down the Rabbit Hole** | `.rabbit-hole` | Floated after Other News | Cadence gate open (`last_rabbit_hole_date` = 2026-06-26 → 1–2 issue cadence satisfied). |
| 5 | **Centred pull-quote card** | `.pull-quote` | Leadership Read | Mandatory for the Leadership Read per spec; carries the section's visual anchor. |

**Explicitly NOT used** (per run-plan § 8 steer, so the cap is not breached): feature opener · floated sidebar box (`.sidebar-box-float`) · key-takeaway box · by-the-numbers callout · stats tile · mid-issue accent (`.mid-accent-band` / `.mid-accent-highlight`) · Platform Updates table (`.glance-table`) · `.pq-bar` full-width quote band · Feature article · The Stack · compliance side-note · process-flow · sparkline · Outside In `.oi-callout`.

**Off-cap by spec** (do not count toward 3–5): *In Practice* (`.in-practice` — baseline section) · Jargon Watch (`.jargon-watch`) · Concept of the Week (`.concept-of-week`) · Author cards (`.author-card` ×3) · On the Radar timeline (`.radar-timeline` — mandated section treatment, structure item 16) · cover lead-stat band · Vol. II identity markers · section breathers (×2) · `<hr class="feature-break">` rules.

### 2.2 Visual budget — **6 visuals, at the top of the 4–6 target. Add nothing.**

| # | Section | Visual | Real diagram/chart/table? |
|---|---|---|---|
| 1 | Lead | Inline SVG horizontal bar — Downdetector peak reports | **Yes** |
| 2 | QT1 | Inline SVG horizontal bar set — three agent-adoption figures | **Yes** |
| 3 | QT2 | `.compare-table` — Visa vs Mastercard revenue mix | **Yes** |
| 4 | In Practice | `.compare-table` — the three-way allocation rule | **Yes** |
| 5 | Outside In | `.oi-stats-row` — 80+ / 300+ / 2 / 6 weeks | No (stats row) |
| 6 | Leadership Read | `.pull-quote` centred card + the 10s-vs-10ms comparison rendered inline | No (quote card) |

- **Per-issue budget (4–6):** 6 ✅ — at the ceiling. **Phase 4 must not add a seventh.**
- **Real-diagram floor (1–2):** **4** ✅ — cleared four times over.
- **Per-section floor (≥1 in each of the six major sections):** ✅ — Lead, QT1, QT2, In Practice, Outside In, Leadership Read each carry one.
- **Cover lead-stat** counts toward the budget in the spec's phrasing; it is the `.cover-lead-stat` identity band and is treated here as cover furniture, not a seventh content visual. If Phase 5 counts it, the issue is at 7 with a documented rationale — flagged deliberately.

### 2.3 Substitution protocol (v1.31)

No planned visual is at risk: every underlying number and every quote in the six visuals has been verified in source by Phase 3. **If Phase 4 nonetheless cannot render one cleanly, substitute per the v1.30 order rather than shipping prose** — and the pre-cleared substitutes are: for the Lead SVG, a `.stats-tile` carrying "348" (Barclays peak reports); for the QT2 compare-table, a `.stats-row` of the three Visa figures. Do not drop a section to pure prose.

---

## 3. Quote allocation — one quote, one slot (v3.6)

All five verified verbatim by Phase 3 against the primary source. **No quote appears in more than one slot. No quote may be re-used, re-paraphrased into a second slot, or lifted into the foreword, cover or Recommended Reading.**

| Slot | Speaker & role | Verbatim quote | Source | Status |
|---|---|---|---|---|
| **QT1** (primary) | Courtney Miller, Assistant Professor, George Washington University | "Software development is not an isolated task, and writing new code was never the hard part" | LeadDev, 28 Jul | ✅ verbatim |
| **QT1** (secondary, in-body) | Sarah Wells, software engineering consultant | "I'm worried that they're not; they can't make the judgement about whether the agent is making a sensible suggestion" | LeadDev, 28 Jul | ✅ verbatim |
| **In Practice** | Ferit Topcu, EM, Zenjob SE | "Trust built through proximity to the work is different from trust built through process and communication alone." | LeadDev, 27 Jul | ✅ verbatim |
| **Outside In** (opener, quote-first) | Zack Deveau, Application Security, Shopify | "The most durable advantage you can develop is a harness tuned to the particularities of your software development ecosystem" | Shopify Engineering, 29 Jul | ✅ verbatim |
| **Leadership Read** (`.pull-quote` card) | Simon Eskildsen | "I hate benchmarks because making design decisions based on benchmarks is not a satisfying answer to me." | The Pragmatic Engineer, 21 Jul | ✅ verbatim |

**Reserve quotes** (verified, unallocated — use only if a primary fails at write time, and only in the same slot):
- Leadership Read reserve — Eskildsen: "Napkin math was essentially just this table that I maintain on GitHub. There's probably like 50 of these numbers and then a script that generates them all."
- Outside In reserve — Deveau: "You'll keep this part as new models come and go; this is where the innovation is"
- In Practice reserve — Topcu: "The job description has evolved. Now, it's your turn to do the same."

**In-body attributed statements (not pull quotes, not counted against the one-quote-one-slot allocation, all verified verbatim):**
- Lead — Revolut: "Our dedicated team is actively addressing a service disruption that may be affecting GBP transfers" · Barclays: "We're sorry if you're having issues opening some savings accounts, including ISAs and Bonds, in Online Banking right now" · Monzo: "We're aware of an issue that is temporarily causing issues" · Lloyds: "We're investigating an issue affecting Faster Payments, which may cause delays" (**see correction § 9.1 — this is a Lloyds statement, not a customer report**).
- QT2 — Chris Suh, CFO: "Value-added services revenue grew 34% year-over-year in constant dollars to $3.8 billion" · Ryan McInerney, CEO: "net revenue was up 14% year over year to $11.6 billion".
- Editorial Moment — Intel, on the DCAI cuts: a "more focused and efficient organization".
- **Attribution fidelity (v3.6):** *napkin math*, *the harness outlasts the model*, and *player-coach* are the sources' own terms and may be attributed. Do not invent a label and attribute it to a source. The digest may coin its own framing provided it is labelled as the digest's.

---

## 4. Opener allocation (within-issue variety; cross-issue tracking retired)

Four opener styles, six article sections. Repeats are placed as far apart in the reading order as possible.

| Reading position | Section | Opener | Hook |
|---|---|---|---|
| 3 | **Lead** | **Narrative-first** | Monday 27 July, from midday: the two-hour window in which six banks degraded. |
| 4 | **QT1** | **Stat-first** | **79%.** |
| 5 | **QT2** | **Summary-first** | One-sentence thesis: the networks are now designing and measuring the loyalty mechanic, not only clearing the transaction. |
| 6 | **In Practice** | **Narrative-first** *(repeat of Lead — separated by 3 sections)* | Topcu arriving at Zenjob without the domain, and the job description changing under him. |
| 8 | **Outside In** | **Quote-first** | Deveau's harness line (§ 3). |
| 10 | **Leadership Read** | **Stat-first** *(repeat of QT1 — separated by 6 sections)* | Ten seconds against ten milliseconds. |

The Editorial Moment is a curatorial aside, not an article, and takes no opener style.

---

## 5. Per-section briefs

### 5.0 Cover, Foreword, Editorial Moment

**Cover** — `.cover-lead-stat`. Stat = **79%**. Context line: *"of agent-raised pull requests are reviewed by the person who raised them."* (Run plan fixes this; do not substitute.) Vol. II identity strap, teal `.cis-vol` pill, italic `.cover-tagline`, bordered `.week-badge`, dot-grid motif, footer `.footer-vol` pill. Contents grid. **Reading time: compute from the final word count at ~200 wpm and print the computed figure — see § 8.2, the run plan's "7–8 min" steer will not survive the section floors.**
**No `.editor-note`** — that was Issue 12 only.

**Foreword** — 50–80 words, one paragraph, drop cap, `.section-label` teal.
*Thread:* dependency opacity. Several unrelated systems failed in the same fortnight and the public record of why is thin — six banks with no published cause, a certificate that expired without anyone noticing, two AWS regions still open on the health dashboard since March. One point only. **Do not list stories. Do not name more than is needed to carry the single thread. No AI-quietness/noisiness framing (v2.9). No direct address (v1.31).**

**Editorial Moment** — variant **"Worth a second look"** (fixed by run plan; not *Number of the week*, not *Quote of the week*). 2–3 sentences, ~55–70 words, italic teal `.editorial-moment` box, teal left border. Placed after the Foreword, before The Week at a Glance.
*Substance:* Monday.com (**22 July**) cut **20% of staff, about 630 roles**, while **reaffirming full-year revenue guidance of 19–20%** and **raising its non-GAAP operating margin outlook from about 13% to about 15%**; Intel (**20–21 July**) cut into **Data Center and AI**, the group whose Q1 2026 revenue was **$5.1bn, up 22% year on year**, with the number of cuts undisclosed. Both frame the move as skill mix rather than headcount arithmetic — Intel's own words are a "more focused and efficient organization". **Both dates must appear in the copy** (18–24 July material, § 5.11 of the run plan).
**Corrections binding here — see § 9.4 and § 9.5.** Do **not** write that Monday.com "raised revenue guidance" (it reaffirmed) and do **not** write that management rejected a margin reading (it raised the margin outlook). Do not claim Intel disclosed a number.
*Visual:* none. *Word count:* 55–70. *Sources:* TechCrunch 22 Jul; Tom's Hardware 20–21 Jul.

---

### 5.1 The Week at a Glance — 7 items, three tiers

Structural landmark → `.section-label` **default teal**, never `.alert`. The tier labels themselves carry their own colours (Action Required red-tinted, Worth Knowing teal-tinted, Watching grey) per structure item 5 — that is tier styling, not concern palette, and is correct.

**Action Required**
1. **JFrog Artifactory zero-days, 28 July** — eight patched after an OpenAI capability evaluation chained them to escape a test sandbox. Keep at delegation level: is the artifact registry patched and who owns that call. **No CVE mechanics.** → *The Register, 28 Jul.*
2. **npm 2FA-bypass tokens** — from early August, they lose the ability to perform sensitive account actions; trusted publishing (OIDC) is the route out. Deadline framing, not release news. → *Socket, 8 Jul (forward-looking dates only).*

**Worth Knowing**
3. **CMA opens a formal probe, 29 July**, into how Microsoft moved 365 consumer subscribers onto Copilot pricing at renewal. **No finding has been made.** **Do not repeat the "10% of global revenue" figure** — statutory maximum, not a proposed penalty (run plan § 5.9). → *The Register, 29 Jul.*
4. **Two network failures cut Claude capacity, 29–30 July**, across the API, Claude Code and claude.ai; Claude for Government stayed up on isolated infrastructure. That isolation detail is the sharp fact. No post-mortem published. → *Newsweek, 29 Jul.*
5. **Claude Opus 5 shipped, 24 July**, with a per-request cost-versus-capability control. Tool release → At a Glance per v3.4. Date it (18–24 July material). → *TechCrunch, 24 Jul.*

**Watching**
6. **Facebook, Instagram and Threads down globally, 27 July**, while Meta's status page reported all systems operational. The transferable part is the status page reading green. → *IBTimes AU, 27 Jul.*
7. **Nvidia reported to be in talks** to guarantee up to $250bn behind OpenAI's Ohio data centre, 27 July. **Frame as "in talks" throughout; terms are not final.** → *Quartz, 27 Jul.*

*Visual:* none (tier styling only). *Word count:* ~25–30 words per item, ~190 total. Source links on every item.

---

### 5.2 LEAD — "Six UK banks degraded in the same window, and nobody published a cause"

- **Story (from run plan):** the 27 July UK multi-bank payments failure. **Concern:** Operating at scale. **Urgency:** `act_this_week`. **News event.** Non-AI.
- **Opener:** **narrative-first** — the Monday afternoon window.
- **Palette:** `.section-label` **default teal**. **NOT `.section-label.alert`.** This is not an active-threat or active-upgrade-window story (run plan § 8, v1.32 guardrail). Phase 5 will check this specifically.
- **Structure:** h3 subheading every 1–2 paragraphs. **Target 350 words (range 300–400).**
- **Visual:** **inline SVG horizontal bar chart** — Downdetector peak reports: **Barclays 348 · Lloyds 269 · Halifax 169**. Digest palette, actual `<svg>` elements. Label the axis as *reports at peak, ~2 hours after midday*, not as customers affected.
- **`.pq-bar` deliberately OMITTED** — no quote in this story earns it; the spec permits omission on that ground and the run plan fixes the call. The SVG chart satisfies the per-section visual floor.
- **Sidebar:** none (no floated sidebar box this issue — component cap).
- **Jargon to gloss inline:** *Faster Payments* (the UK interbank rail for near-instant sterling transfers) · *Downdetector* (a crowd-sourced outage-report aggregator — reports are user submissions, not a measure of customers affected).

**Establishable (all verified in source by Phase 3):**
- Customers of **Barclays, Lloyds, Halifax, HSBC, Monzo and Revolut** reported failed and delayed transfers, money not arriving, and problems reaching apps and online banking on **Monday 27 July**.
- Reports began around midday local time and peaked roughly two hours later; Downdetector showed **348 / 269 / 169** for Barclays / Lloyds / Halifax at the time of reporting.
- Bank statements as quoted at § 3 (Barclays, Revolut, Monzo, Lloyds).
- **No institution published a root cause. No institution attributed the disruption to a cyber incident.**

**Must NOT be claimed (binding):** a shared dependency, shared rail or common infrastructure caused it · that Faster Payments the rail failed, or that Pay.UK had an incident · that it was a cyber attack · any figure for customers affected, payments delayed, or value held up · any FCA / PSR / regulator angle in this slot.

**Epistemic reframing:** the framing *"the simultaneity is documented; the cause is not"* is a structural instance and is **budgeted as 1 of the 2 permitted for the whole issue.** Everywhere else in this section, direct declarative sentences.

**Sources:**
- https://www.pymnts.com/news/banking/2026/uk-banking-customers-face-transfer-and-payment-glitches/ *(primary — verified 27 Jul, all figures and statements confirmed)*
- Crowdfund Insider, City AM — corroborating (run plan § 3).

---

### 5.3 QUICK TAKE 1 — "79% of agent-raised pull requests are reviewed by the person who raised them"

- **Story:** Raida & Hou, *Early Adoption of Agentic Coding Tools by GitHub Projects*, surfaced via LeadDev 28 July. **Concern:** Ways of working. **Urgency:** `decide_this_month`. **Analysis** — the single permitted analysis anchor. **AI-substrate: yes.**
- **Layout:** the run plan does not fix a QT layout. **Assigned: QT-A equal grid (`.two-col`)** — QT1 and QT2 are comparable in weight and each carries its own visual, so neither should be compacted. Card header bar **teal** (Ways of working); anchor stat **79%** in 36px Playfair, teal.
- **Opener:** **stat-first** — 79%.
- **Target 220 words (range 150–250).** Ends with a bold **"The takeaway"** line.
- **Visual:** **inline SVG horizontal bar set** — **79%** same-person review · **70%** of projects below one-in-five contributor participation · **12.5%** (one in eight) multi-human workflows. *Real diagram.*
- **Jargon Watch (`.jargon-watch`, floated right):** term = ***agent-raised pull request***. This box **discharges the mandatory agent-terminology precision rule**: state that these are agent-mode contributions inside existing repositories, with a human triggering the run and reviewing the output — **not autonomous production agents with action authority** (tool access, memory, authority to call APIs or move money without per-step approval). Off-cap.
- **Mandatory framing in copy:**
  1. **Traction exception must be stated.** The paper was submitted **15 July** and revised **16 July** — outside the 18–31 July window. It is eligible only under the v3.0 new-in-window traction exception. Say the study is from mid-July and that **the 28 July coverage and reaction are what is new.**
  2. **Generalisation caveat is mandatory.** The dataset is **popular open-source GitHub repositories, not enterprise codebases.**
  3. The framing *"nobody decided to remove the second reviewer"* is a **direct declarative statement, not an epistemic reframe** — it is fine and does not spend the budget.
- **Correction binding here — § 9.8:** the 79% / 70% / 12.5% figures are carried by **LeadDev's 28 July coverage**, not by the arXiv abstract (the abstract states only 25,264 PRs across 2,361 repositories and characterises a "single-human oversight model"). **Attribute the three chart figures to LeadDev's reporting of the study**, and link the arXiv paper as the study itself. Do not present them as quoted from the abstract.

**Sources:**
- https://leaddev.com/ai/ai-coding-agents-kill-team-collaboration *(primary, 28 Jul — verified: all figures and both quotes confirmed verbatim)*
- https://arxiv.org/abs/2607.14037 *(the study — Maliha Noushin Raida, Daqing Hou; submitted 15 Jul, v2 16 Jul; 25,264 PRs / 2,361 repositories confirmed)*

---

### 5.4 QUICK TAKE 2 — "The card networks are designing the loyalty mechanic, not just clearing the transaction"

- **Story:** Visa Q3 FY2026 (28 July) with Mastercard Q2 (30 July) folded in as corroboration. **Concern:** Wider engineering landscape, loyalty / commerce-media surfacing note. **Urgency:** `decide_this_month`. **News event.** Non-AI.
- **Layout:** QT-A equal grid, second card. Header bar **orange** (loyalty / commerce-media surfacing). Anchor stat **$3.8bn** in 36px Playfair, orange, label *"Visa value-added services revenue, Q3 FY26"*.
- **Opener:** **summary-first** — one-sentence thesis, then unpack.
- **Target 220 words (range 150–250).** Ends with a bold **"The takeaway"** line: this is a build-versus-partner posture question for a card-linked-offer platform, not an earnings summary.
- **Visual:** **`.compare-table`** (max 5 rows × 2 cols). *Real table.* **Use only these verified rows:**

| Row | Visa (Q3 FY26, 28 Jul) | Mastercard (Q2 26, 30 Jul) |
|---|---|---|
| Value-added services revenue | $3.8bn | $3.83bn |
| VAS growth | +34% constant dollars | +20% GAAP (+18% currency-neutral) |
| Total net revenue | $11.6bn, +14% | $9.28bn, +14% as-adjusted |

- **Correction binding here — § 9.3:** **do NOT use "cross-border up 12%".** That figure is not supported. The verified Mastercard cross-border numbers are *cross-border assessments revenue +21% GAAP / +20% currency-neutral* and *cross-border volume +11% month-to-date through 28 July*. Simplest safe course: **keep cross-border out of the compare-table and out of the copy entirely.**
- **Named campaign result (verified verbatim, Ryan McInerney on the call):** in Brazil, a leading bank ran campaigns with Visa tied to World Cup ticket giveaways — **1 million cardholder participants from February to June, an 8% lift in card activation, and $400 million in incremental payments volume.** Use in prose, not in the table.
- **Jargon to gloss inline:** *value-added services (VAS)* · *card-linked offer* · *incremental payments volume* (the additional spend attributed to the campaign above a baseline, as reported by the network).
- **Quote:** none allocated to this slot — the compare-table carries it. Figures are attributed in-body to Suh and McInerney per § 3.

**Sources (Visa now pinned to investor relations, per verification item 5):**
- Visa Q3 FY2026 earnings call transcript — **Ryan McInerney (CEO) and Chris Suh (CFO)**, 28 Jul: https://www.investing.com/news/transcripts/earnings-call-transcript-visa-tops-q3-2026-estimates-raises-outlook-93CH-4818303
- Visa investor relations, official release: https://investor.visa.com/news/news-details/2026/Visa-Fiscal-Third-Quarter-2026-Financial-Results/default.aspx · release PDF: https://s1.q4cdn.com/050606653/files/doc_financials/2026/q3/Q3-2026-Earnings-Release_vF.pdf
- https://thewisemarketer.com/what-visas-q3-earnings-call-reveals-about-the-future-of-loyalty/ *(30 Jul — trade framing; retained but no longer the sole source for any figure)*
- Mastercard Q2 2026: https://www.investing.com/news/company-news/mastercard-q2-2026-slides-revenue-beats-on-crossborder-strength-93CH-4825445

---

### 5.5 IN PRACTICE — "Arriving as a manager without the domain"

- **Piece:** *Ferit Topcu, Zenjob SE — LeadDev, 27 July 2026.* **Concern:** technical leadership. Non-AI. Season fit is exact.
- **Section label:** `IN PRACTICE`, **default teal** (structural landmark). **Italic teal theme name beneath: *"Technical strategy under uncertainty"* — season name ONLY. No week count, no "week 1 of 3", no "of 3", no "part". This is a v1.34 compliance item with a grep check on `.ip-theme`.**
- **Header:** off-white `.in-practice-header` flowing into the off-white `.in-practice` inset (deep-teal top + left borders), preceded by an explicit `<hr class="feature-break">`.
- **Author card (`.author-card`, off-cap):** initials **FT** · Ferit Topcu · Engineering Manager, Zenjob SE · 27 July 2026.
- **Opener:** **narrative-first** — the job description changing under him.
- **Target 380 words (range 300–450).**
- **Visual:** **`.compare-table`** rendering the three-way allocation rule. *Real table.* **Verified verbatim in source:** *"For clear, small unplanned work, like bug fixes or support tickets, I contribute directly, leveraging AI-coding tools for speed. For complex, unclear unplanned work, I resist the urge to 'fix' immediately. Instead, I prioritize investigation... Planned work belongs to the team."*

| Kind of work | Where it goes |
|---|---|
| Clear, small unplanned work (bug fixes, support tickets) | The manager contributes directly |
| Complex, unclear unplanned work | The manager investigates — and does not solve it |
| Planned roadmap work | Stays with the team |

- **Concept of the Week (`.concept-of-week`, orange left border, floated right, off-cap):** term = ***player-coach***. Plain-language gloss for the year-one EM from a non-technical route: a manager who both leads the team and does some of the delivery work themselves, and the standing risk that the doing crowds out the leading. Topcu's own framing — attribute the term to him, per attribution fidelity.
- **Jargon to gloss inline:** *unplanned work* (work that arrives outside the planned roadmap — incidents, support escalations, interrupts).
- **Substance floor (must all be present):** the named rule (the three-way allocation) · at least one concrete mechanism or distinction (the trust distinction, quoted at § 3; and Topcu's own 37% player-coach figure if used, attributed to his framing) · the takeaway the reader gets without clicking. **Strip-link test applies.**
- **Quote:** Topcu's trust line, § 3. One quote, this slot only.
- **Closing:** bold **"What to try"** plus one peer-level sentence. Inform, never prescribe. No direct address.

**Source:** https://leaddev.com/management/engineering-managers-have-a-new-job-description *(verified fully readable, 27 Jul)*

> **Standing constraint:** this is LeadDev section **2 of 2**. LeadDev is now at its cap. **No third LeadDev item anywhere** — not in Other News, not At a Glance, not Recommended Reading. The "Scope, not skill / the reality of being a senior engineer" piece (27 Jul) is **cut entirely** and must not appear. The Meg Adams "Influence" piece (20 Jul) is **not used** — the fallback did not fire.

---

### 5.6 OTHER NEWS THIS WEEK — 4 items

One sentence plus source link each. No visuals. ~35 words per item.

1. **AWS us-west-2 ↔ Seattle metro routing failure, 24 July** — a 20-minute provider fault, with the last confirmed downstream recovery more than nine hours later; AWS's first Health Dashboard update came 45 minutes after impact began. **Binding: do not call this a "mega-outage". Do not conflate it with the standing us-east-1 concentration watch — the affected region is us-west-2.** Gloss *Direct Connect* inline only if the term is used. → https://blog.incidenthub.cloud/aws-us-west-2-outage-jul-24-2026
2. **GitHub Actions runners offline overnight 19–20 July.** **Corrected and re-sourced — see § 9.2.** Verified: **23:05 UTC on 19 July to 03:55 UTC on 20 July** (four hours fifty minutes); cause was *"a certificate lifecycle management failure in a subset of internal services, resulting in an SSL certificate expiration"*; **jobs using standard and Mac hosted runners were not affected**; reconnection traffic added 3–4 seconds of average API latency and elevated 5xx rates across GitHub APIs. Say *self-hosted and larger runners* explicitly, and do not describe the blast radius as narrow without the API-latency caveat. Gloss *certificate lifecycle management* inline. → **https://www.githubstatus.com/incidents/8vfyvq16hzh9** *(the x.com link is dropped)*
3. **Open Secure AI Alliance formed, 27 July**, 37 members including Capital One, Cloudflare and GitHub; OpenAI, Anthropic and Google are not in it. **This item carries the issue's single permitted cross-issue throughline back to Issue 19's intrusion coverage — one sentence, no more, nowhere else in the issue.** → https://blogs.nvidia.com/blog/open-secure-ai-alliance/
4. **Bank of Baroda confirmed a breach traced to a compromised employee mailbox, 27 July.** **The 700GB / 1TB figure is the attacker's claim and is independently unverified — attribute it to the extortion group and say so.** The bank's confirmation covers the incident and containment, not the volume. → https://www.theasianbanker.com/updates-and-articles/india-s-bank-of-baroda-data-breach-exposes-customer-records-after-employee-email-compromise

---

### 5.7 PLATFORM UPDATES — **OMITTED, 0 rows**

Fixed by run plan. The only qualifying item (npm) is carried as a dated deadline in At a Glance and On the Radar. No `.glance-table` in this issue.

---

### 5.8 DOWN THE RABBIT HOLE — Blacksmith

- **Placement:** floated (`float:right`, max-width 280px) immediately after Other News, connecting to the outage-heavy front half. Cadence gate open.
- **Source-type tag:** **"Post-mortem"**.
- **Body:** 2–3 sentences, ~50 words. What it is, why it connects, why it rewards the click.
- **Corrections binding here — § 9.6:** the outage was **21 July**; **the post-mortem was published 22 July** — date-frame both. The causal chain is verified verbatim: a GitHub webhook burst saturated the Redis instance behind the control plane, workers were scaled up to clear the backlog, and *"Every additional worker holds database connections, and the expanded fleet pushed us into our database's connection limit."* **The "five-hour" figure in the candidate pool is wrong** — verified duration is roughly seven and a half hours to mitigation (10:20–15:55 ET) with full recovery by 19:19 ET. Use the verified figures or avoid a duration claim. **"529 Overloaded" does not appear in the source — drop the term entirely and remove it from the gloss list.**

**Source:** https://www.blacksmith.sh/blog/blacksmith-outage-on-july-21-2026

---

### 5.9 OUTSIDE IN — Shopify, "the harness outlasts the model"

- **Piece:** *Zack Deveau, Application Security, Shopify Engineering, 29 July 2026.* **Concern:** Ways of working. **AI-primary** — the one long-form section permitted to be (v1.35).
- **Format:** **Format A, full feature** (`.outside-in-section`), off-white background, h3 subheadings. **Placement: position 15**, between Platform Updates (omitted) and On the Radar — i.e. after Other News / the Rabbit Hole and before On the Radar. **Format B is retired; do not use `.oi-hero-band`. `.oi-callout` is not used this issue (component cap).**
- **Section label palette:** **orange** (Outside In standing rule).
- **Author card (`.author-card`, off-cap):** initials **ZD** · Zack Deveau · Application Security, Shopify · 29 July 2026.
- **Opener:** **quote-first** — Deveau's harness line (§ 3).
- **Target 350 words (range 300–400).** Ends with a bold **"The takeaway"** line.
- **Visual:** **`.oi-stats-row`** — four cells, all verified verbatim: **80+** applications scanned · **300+** findings · **2** rated Critical · **6 weeks**.
- **Cost envelope (verified verbatim, use in prose):** *"A full application scan with publicly available frontier models costs between $50 and $300"*; *"Incremental diff scans are much cheaper, roughly $5 to $50."*
- **Scope discipline (binding, run plan § 6):** the transferable subject is the **harness-versus-model argument and the cost envelope**. **The application-security scanning technique is not the subject and must not become it.** No detection methodology, no vulnerability-class detail.
- **Jargon to gloss inline:** *agentic harness* (the orchestration and verification layer a team builds around a model — prompting, partitioning, test oracles, deterministic checks — as distinct from the model itself) · *orchestrator*.
- **Substitution test on record (run plan § 6):** *"A large engineering org found the durable investment in its agent programme was the orchestration and verification layer it owns, rather than the model contract it renews."* Still meaningful ✅.

**Source:** https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model *(verified fully readable, 29 Jul)*

---

### 5.10 ON THE RADAR — timeline, 5 rows

`.radar-timeline`, vertical connector, deadlines first then events. Off-cap (mandated section treatment).

1. **Early August 2026** — npm 2FA-bypass tokens lose sensitive-action capability. Deadline framing, not release news. Gloss *trusted publishing (OIDC)* inline. → Socket.
2. **14 November 2026** — Swift CBPR+ rejects payments carrying unstructured postal addresses. Gloss *CBPR+ / structured address* inline. **The RedCompass readiness figures are vendor-commissioned March research — attribute them explicitly to RedCompass Labs and to March 2026, or drop them. Do not present them as independent.** → https://www.redcompasslabs.com/insights/nearly-half-of-banks-are-behind-on-iso-20022/
3. **December 2026** — the CMA's evidence-gathering phase on Microsoft 365 concludes.
4. **~January 2027** — npm 2FA-bypass tokens lose direct publishing entirely.
5. **AWS ME-CENTRAL-1 and ME-SOUTH-1 — CONDITIONAL ROW: CONFIRMED, KEEP IT.** See § 9.3 for the exact permitted wording and the hard constraint on dating. → https://health.aws.amazon.com/health/status

---

### 5.11 THE LEADERSHIP READ — "Napkin math as a leadership discipline"

- **Piece:** *Simon Eskildsen in conversation with Gergely Orosz — The Pragmatic Engineer, 21 July 2026.* **Concern:** technical leadership. Non-AI (AI appears only as the demand driver behind turbopuffer). **PRIMARY — VERIFIED READABLE, FALLBACK NOT FIRED.**
- **Container:** navy `.mgmt-section`, drop cap (automatic via CSS).
- **Author card (`.author-card`, off-cap):** initials **SE** · Simon Eskildsen · founder, turbopuffer; formerly Shopify · The Pragmatic Engineer, **21 July 2026**. **The date must appear** — 18–24 July material, § 5.11 of the run plan.
- **Opener:** **stat-first** — ten seconds against ten milliseconds.
- **Target 500 words (range 400–600 — do not go below 400).** h3 subheadings throughout.
- **Visual:** the required **centred `.pull-quote` blockquote card** carrying the Eskildsen benchmark line (§ 3), 20px Playfair, `rgba(255,255,255,.08)` background — **plus the 10s-vs-10ms comparison rendered inline in prose**, not as a second component.
- **Substance floor — all three must be explicit:**
  1. **The named argument:** *napkin math* — Eskildsen's maintained table of roughly fifty first-principles numbers (DRAM bandwidth, S3 cost per GB, latency figures) plus a script that regenerates them, used to establish what a system *should* be capable of before any benchmark is trusted.
  2. **Mechanism one — the search benchmark.** A product team chose Database A over Database B because a benchmark showed a search query completing in **10 seconds**. Napkin math said it should take **10 milliseconds**: three terms across indexed documents, list intersection, DRAM bandwidth across multiple cores. The 1,000× gap turned out to be the benchmark measuring distributed queries across roughly 100 nodes without accounting for p99 latency — **the benchmark was measuring the wrong thing.**
  3. **Mechanism two — the Cursor bill.** Cursor was spending about **$80,000 a month** on indexing and search with another vendor; after moving to turbopuffer (a vector search database that keeps vectors cheaply in S3 and caches hot data in memory) the bill fell to about **$4,000 a month.** Eskildsen predicted the reduction from napkin math — computing actual resource consumption before adding margin — and it became the product's differentiator.
- **Explicit takeaway (correction § 9.9 binding):** the article's own closing section turns to venture-funding dynamics. **The digest's takeaway must be drawn from the napkin-math argument, not from the VC section.** Articulate it explicitly: a leader who cannot write the system can still ask what the physics allows, and the gap between that number and the observed one is where the real question sits — most often in how the thing was measured.
- **Jargon to gloss inline:** *napkin math* · *p99 latency* if used (the value below which 99 of every 100 requests complete) · *turbopuffer* named as Eskildsen's own company.
- **Hard constraint (run plan § 5.6):** **do NOT build this section around the Shopify / Toxiproxy anecdote.** The two required mechanisms above are the search benchmark and the Cursor bill. This keeps the Leadership Read visibly distinct from Outside In, which is the Shopify slot.
- **Closing:** **"This could be worth talking about:"** in bold, one italic teal sentence, anchored in the argument. Not an action item. No direct address, no rhetorical question aimed at the audience — a question about the *argument* is fine.

**Source:** https://newsletter.pragmaticengineer.com/p/pushing-software-engineering-limits *(verified fully readable end to end, 21 Jul)*

---

### 5.12 RECOMMENDED READING + Footer

**Recommended Reading** — linked list, 4 items. Suggested: the arXiv paper (Raida & Hou); the Blacksmith post-mortem; the GitHub Status incident record; the Visa IR release. **No LeadDev item** (source cap). **No Pragmatic Engineer second item** — the Hillel Wayne podcast is cut. **No "Scope, not skill".** **No Meg Adams "Influence".**

**Footer** — masthead, date line, next-edition line, **archive bar** with the last 5 issues as `.archive-pill` badges, Issue 20 highlighted `.archive-pill.current`. **`.footer-vol` teal pill badge for Vol. II.** No branding, no company names.

**Section breathers (×2, `.section-breather`):** one between The Week at a Glance and the Lead; one between Quick Takes and Other News (no mid-issue accent this issue). Never more than two.

---

## 6. Structural order (v1.32 — no two long-form sections adjacent)

Foreword → Editorial Moment → Week at a Glance → *breather* → **Lead** → **QT1 + QT2** → *breather* → `<hr>` → **In Practice** → Other News (+ Rabbit Hole floated) → *Platform Updates omitted* → `<hr>` → **Outside In** → On the Radar → `<hr>` → **The Leadership Read** → Recommended Reading → Footer.

- **No two long-form sections adjacent** ✅ — In Practice / Outside In separated by Other News; Outside In / Leadership Read separated by On the Radar.
- **Adjacent-source rule** ✅ — Lead (PYMNTS) → QT1 (LeadDev/arXiv) → QT2 (Visa IR) → In Practice (LeadDev): QT1 and In Practice are separated by QT2. Outside In (Shopify) → Radar (mixed) → Leadership Read (Pragmatic Engineer).

---

## 7. Jargon, concepts and glossing (v3.7 trigger test)

**Jargon Watch (`.jargon-watch`) — 1, in QT1:** *agent-raised pull request*. Discharges the agent-terminology precision rule.
**Concept of the Week (`.concept-of-week`) — 1, in In Practice:** *player-coach*.

**Inline glosses required on first use (only where the term is actually used):**
Faster Payments · Downdetector · value-added services (VAS) · card-linked offer · incremental payments volume · agentic harness · orchestrator · napkin math · p99 latency · unplanned work · trusted publishing (OIDC) · CBPR+ / structured address · certificate lifecycle management · Direct Connect *(conditional on use in the AWS Other News line)*.

**REMOVED from the run plan's gloss list:** ***529 Overloaded*** — the term does not appear in the Blacksmith post-mortem (verified). Do not use it; nothing to gloss.

**Numerical-frequency trigger (3+ uses in one section) — watch these:** *harness* and *orchestration* in Outside In; *napkin math* in the Leadership Read; *unplanned work* in In Practice; *agent* in QT1. All are covered by the glosses above.

---

## 8. Standing constraints carried into the briefs

**8.1 Voice.** Third-person editorial throughout. Banned: *"the reader"*, *"the reader's"*, *"your team"*, *"your firm"*, *"your org"*, *"your customers"*, *"you must"*, *"you should"*, *"you need to"*, and any rhetorical question posed to the audience.

**8.2 Reading time — flagged inconsistency.** The run plan steers "target 7–8 minutes". The section floors in this brief total roughly **2,500–2,700 words**, which is **12–13 minutes at 200 wpm**. The floors are hard spec (Leadership Read ≥400, In Practice 300–450, Lead 300–400); the 7–8 minute figure is not. **Phase 4 must print the reading time computed from the actual final word count and must not assert 7–8 minutes.** Flagged for Phase 5.

**8.3 Epistemic reframing — cap 2, structural test.** **One is budgeted:** the Lead's *"the simultaneity is documented; the cause is not"*. **The second is held in reserve and is not allocated.** If Phase 4 spends it, it must name where in its self-report. Everywhere else: direct declarative sentences. Run the **structural** scan before delivery — "does this sentence negate one framing to introduce another?" — not a search for the six literal patterns.

**8.4 Date framing (14-day window).** Every 18–24 July item must name its date in the copy: **QT1** (study 15–16 July, coverage 28 July, traction exception stated) · **Editorial Moment** (Monday.com 22 July; Intel 20–21 July) · **Leadership Read** (21 July, in the author card) · **Other News** (AWS 24 July; GitHub 19–20 July) · **Rabbit Hole** (outage 21 July, post-mortem 22 July) · **At a Glance item 5** (Opus 5, 24 July). In-window-priority items still carry their dates: Lead 27 July, QT2 28 and 30 July, In Practice 27 July, Outside In 29 July.

**8.5 Palette.** Lead = **default teal**, not `.section-label.alert` — Operating at scale but not active-threat or active-upgrade-window. Structural landmarks (Week at a Glance, Foreword, In Practice header) = **default teal** always. Outside In = **orange**. Leadership Read = navy `.mgmt-section`. QT1 card header = teal; QT2 card header = orange. The Week at a Glance "Action Required" tier label keeps its red tier styling — that is tier styling, not concern palette.

**8.6 In Practice theme label.** *"Technical strategy under uncertainty"* — **season name only. No week count. No "of 3". No "part".** v1.34 grep check on `.ip-theme`.

**8.7 Source caps.** LeadDev **2 of 2** — no third item anywhere. The Pragmatic Engineer **1** — the Hillel Wayne podcast and "Inside Anthropic" are both cut. Shopify **1** (Outside In only). Cut entirely and must not appear: *"The reality of being a senior engineer" / scope-not-skill* (LeadDev, 27 Jul); Meg Adams *"Influence"* (LeadDev, 20 Jul); Zalando *"From Homegrown to Flink"*; Cloudflare privacy-proxy CLI; Monzo *"The Engineering Behind the Platform"*; Perforce platform-engineering report; the 200,000 layoff-tracker figure; the RAM $2.80→$12/GB figure.

**8.8 Cross-issue throughline.** Exactly one sentence, in the Open Secure AI Alliance item in Other News, referring back to Issue 19's intrusion coverage. Nowhere else.

**8.9 No regulator angle in anchor slots.** No FCA / PSR / Pay.UK framing in the Lead, QT1 or QT2. The CMA sits in At a Glance, Worth Knowing, with no finding claimed and no "10% of global revenue" figure.

---

## 9. Corrections register (Phase 3 verification findings — BINDING on Phase 4)

These correct detail in the run plan and candidate pool. They are fidelity fixes, not editorial changes.

| # | Correction | Binding instruction |
|---|---|---|
| **9.1** | **Lloyds' Faster Payments line is a Lloyds statement, not a customer report.** PYMNTS attributes *"We're investigating an issue affecting Faster Payments, which may cause delays"* to Lloyds. The run plan describes it as a customer-reported symptom. | Attribute it to **Lloyds' own statement**. The register entry stands unchanged: **this still does not establish that Faster Payments the rail failed** — a bank reporting an issue affecting its Faster Payments service is not the scheme failing. Do not upgrade the claim. |
| **9.2** | **GitHub Actions incident — x.com source replaced; timings and blast radius corrected.** | Cite **https://www.githubstatus.com/incidents/8vfyvq16hzh9**. Verified: **23:05 UTC 19 July → 03:55 UTC 20 July** (4h50m, so "roughly five hours" is fine). Cause: *"a certificate lifecycle management failure … resulting in an SSL certificate expiration."* *"Jobs using standard and Mac hosted runners were not affected."* **But** reconnection traffic added **3–4 seconds of average API latency and elevated 5xx rates** across GitHub APIs, and Issues and Pages degraded. Say *self-hosted and larger runners*, and do not call the blast radius narrow without that caveat. |
| **9.3** | **AWS ME-CENTRAL-1 / ME-SOUTH-1 — CONFIRMED against AWS's own Health Dashboard. Keep the Radar row.** Both events are **open** on AWS's public current-events feed at time of writing. AWS's own words, **dated 30 April 2026**: UAE — *"The Middle East (UAE) Region (ME-CENTRAL-1) has suffered damage as a result of the conflict in the Middle East and is currently unable to reliably support customer applications … This process is expected to take several months."* Bahrain — *"The Middle East (Bahrain) Region (ME-SOUTH-1) has suffered damage due to the conflict in the Middle East and is currently unavailable."* | **Permitted wording:** both regional events remain open on the AWS Health Dashboard, and AWS's most recent public update, on **30 April**, said the regions had suffered damage from the conflict and that restoration was expected to take several months. **HARD CONSTRAINT: do not imply AWS issued a July statement. Do not use the aggregator's July status line. Do not attach a "five months" duration to an AWS statement — AWS has not said that.** Source the row to **https://health.aws.amazon.com/health/status**, not to the outage log. |
| **9.4** | **Mastercard "cross-border up 12%" is NOT supported.** Verified: VAS **+20% GAAP / +18% currency-neutral to $3.83bn**; net revenue **$9.28bn, +14% as-adjusted**; cross-border *assessments revenue* +21% GAAP / +20% currency-neutral; cross-border *volume* +11% month-to-date through 28 July. | **Drop the 12% figure. Keep cross-border out of QT2 entirely.** Use only the three compare-table rows at § 5.4. |
| **9.5** | **Monday.com detail corrected.** Verified: **20% of staff, about 630 roles** (not 620), of roughly 3,000; about 350 in Tel Aviv; **$45–55m restructuring charges**; **full-year 2026 revenue guidance reaffirmed at 19–20%**; **non-GAAP operating margin outlook raised from about 13% to about 15%**; framing is a pivot to an AI Work Platform and a *"leaner, more focused operating model"*. | Write **"reaffirmed"** revenue guidance, not "raised". **Do not claim management rejected a margin reading** — the margin outlook went up. Do not claim management explicitly rejected an automation-substitution reading; that framing is not evidenced in the source. |
| **9.6** | **Blacksmith detail corrected.** Outage **21 July**; post-mortem published **22 July**. Duration ~7h35m to mitigation (10:20–15:55 ET), full recovery 19:19 ET — **the "five-hour" figure in the candidate pool is wrong.** Causal chain verified: GitHub webhook burst saturated Redis; workers scaled up; *"Every additional worker holds database connections, and the expanded fleet pushed us into our database's connection limit."* | Date-frame both dates. Use the verified duration or make no duration claim. **"529 Overloaded" does not appear in the source — do not use it, and it is removed from the gloss list.** |
| **9.7** | **Intel figure is quarter-specific.** The 22% is **DCAI Q1 2026 revenue growth** — $5.1bn, up 22% year on year, 30.5% operating margin, $1.5bn operating income. Cut numbers are **not disclosed**. | Write it as **Q1 2026 revenue up 22% year on year**, not as an unqualified "the division grew 22%". Do not assert a headcount number for Intel. |
| **9.8** | **QT1 chart figures are from LeadDev's coverage, not the arXiv abstract.** The abstract carries only 25,264 PRs / 2,361 repositories and a characterisation of a "single-human oversight model". The 79% / 70% / 12.5% figures are reported in LeadDev's 28 July piece and the full paper. | Attribute the three chart figures to **LeadDev's 28 July reporting of the Raida & Hou study**; link the arXiv paper as the study. Do not present them as quoted from the abstract. |
| **9.9** | **Leadership Read takeaway must not come from the source's closing section.** The article's final passages turn to venture-funding dynamics and founder psychology, which is off-topic for this slot. | Draw the explicit takeaway from the **napkin-math argument** (see § 5.11). Do not summarise the VC material. |

### Unverified-claim register — carried forward intact from run plan § 5.10 (binding)

| Claim | Status | Handling |
|---|---|---|
| A "July 2026 AWS mega-outage" | **UNVERIFIED — do not assert** | Only the 24 July us-west-2 event is claimed. |
| us-west-2 as evidence of us-east-1 concentration risk | **Conflation — do not make** | Keep them separate. |
| A shared cause behind the six UK bank failures | **NOT ESTABLISHED** | Simultaneity documented; causation not. |
| Faster Payments (the rail) failed | **NOT ESTABLISHED** | See § 9.1 — attribution corrected, claim unchanged. |
| Bank of Baroda 700GB / 1TB | **Attacker claim, unverified** | Attribute to the extortion group; say it is unverified. |
| Nvidia's $250bn guarantee | **Reported, not confirmed** | "In talks"; terms not final. |
| AWS ME-CENTRAL-1 / ME-SOUTH-1 impaired | **NOW CONFIRMED against AWS's own Health Dashboard** | Row kept. **§ 9.3 governs the wording — the confirmed AWS update is dated 30 April, not July.** |
| Tech layoffs "past 200,000" | **Inconsistent across trackers** | **Cut entirely.** |
| RAM $2.80/GB → $12/GB | **Unverified aggregator figure** | **Cut.** |
| CMA "10% of global revenue" | **Statutory maximum, not a penalty** | Do not repeat. |
| Perforce platform-engineering percentages | **Vendor-sponsored, out of window** | **Omitted entirely.** |
| RedCompass ISO 20022 readiness figures | **Vendor-commissioned, March research** | Attribute to RedCompass Labs and to March 2026, or drop. |
| Mastercard cross-border +12% | **NEW — not supported** | **Cut** (§ 9.4). |
| Monday.com "raised revenue guidance" | **NEW — incorrect** | Reaffirmed, not raised (§ 9.5). |
| Blacksmith "five-hour" outage · "529 Overloaded" | **NEW — incorrect / absent from source** | Correct the duration; drop the term (§ 9.6). |

---

## 10. Resolved source URL list (all checked by Phase 3)

**Anchors and long-form**
- Lead — PYMNTS, 27 Jul: https://www.pymnts.com/news/banking/2026/uk-banking-customers-face-transfer-and-payment-glitches/ ✅ 200
- QT1 — LeadDev, 28 Jul: https://leaddev.com/ai/ai-coding-agents-kill-team-collaboration ✅ 200
- QT1 study — arXiv, 15/16 Jul: https://arxiv.org/abs/2607.14037 ✅ 200
- QT2 — Visa Q3 FY26 call transcript (McInerney, Suh), 28 Jul: https://www.investing.com/news/transcripts/earnings-call-transcript-visa-tops-q3-2026-estimates-raises-outlook-93CH-4818303 ✅ *(loads in browser; curl 403 = bot protection)*
- QT2 — Visa IR release: https://investor.visa.com/news/news-details/2026/Visa-Fiscal-Third-Quarter-2026-Financial-Results/default.aspx · PDF: https://s1.q4cdn.com/050606653/files/doc_financials/2026/q3/Q3-2026-Earnings-Release_vF.pdf ✅ 200
- QT2 — The Wise Marketer, 30 Jul: https://thewisemarketer.com/what-visas-q3-earnings-call-reveals-about-the-future-of-loyalty/ ✅ 200
- QT2 — Mastercard Q2, 30 Jul: https://www.investing.com/news/company-news/mastercard-q2-2026-slides-revenue-beats-on-crossborder-strength-93CH-4825445 ✅ *(browser; curl 403)*
- In Practice — LeadDev / Topcu, 27 Jul: https://leaddev.com/management/engineering-managers-have-a-new-job-description ✅ 200
- Outside In — Shopify / Deveau, 29 Jul: https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model ✅ 200
- Leadership Read — Pragmatic Engineer / Eskildsen, 21 Jul: https://newsletter.pragmaticengineer.com/p/pushing-software-engineering-limits ✅ 200

**Editorial Moment**
- TechCrunch, 22 Jul: https://techcrunch.com/2026/07/22/monday-com-lays-off-hundreds-to-focuses-on-ai/ ✅ 200
- Tom's Hardware, 20–21 Jul: https://www.tomshardware.com/tech-industry/policy/intel-layoffs-to-hit-data-center-group-division-focused-on-server-cpus-ai-chips-and-data-center-architecture-to-be-hit-by-an-unknown-number-of-cuts ✅ 200

**At a Glance**
- JFrog — The Register, 28 Jul: https://www.theregister.com/security/2026/07/28/looks-like-jfrogs-0-days-let-openais-models-hack-hugging-face/5280001 ✅ 200
- npm — Socket, 8 Jul: https://socket.dev/blog/npm-12 ✅ 200
- CMA — The Register, 29 Jul: https://www.theregister.com/software/2026/07/29/microsoft-faces-competition-probe-over-copilot-subscription-price-hike/5280474 ✅ 200
- Claude outage — Newsweek, 29 Jul: https://www.newsweek.com/claude-down-outage-capacity-constraints-not-working-anthropic-12262120 ✅ 200
- Opus 5 — TechCrunch, 24 Jul: https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/ ✅ 200
- Meta — IBTimes AU, 27 Jul: https://www.ibtimes.com.au/simultaneous-outages-hit-facebook-instagram-recurring-meta-issue-1873074 *(browser; curl 403)*
- Nvidia/OpenAI — Quartz, 27 Jul: https://qz.com/nvidia-openai-ohio-data-center-financing-072726 *(browser; curl 403)*

**Other News, Radar, Rabbit Hole**
- AWS us-west-2 — IncidentHub, 24–25 Jul: https://blog.incidenthub.cloud/aws-us-west-2-outage-jul-24-2026 ✅ 200
- **GitHub Actions — GitHub Status official incident record (x.com link DROPPED):** https://www.githubstatus.com/incidents/8vfyvq16hzh9 ✅ 200
- Open Secure AI Alliance — NVIDIA, 27 Jul: https://blogs.nvidia.com/blog/open-secure-ai-alliance/ ✅ 200
- Bank of Baroda — The Asian Banker, 27 Jul: https://www.theasianbanker.com/updates-and-articles/india-s-bank-of-baroda-data-breach-exposes-customer-records-after-employee-email-compromise ✅ 200
- **AWS ME regions — AWS Health Dashboard (AWS's own channel):** https://health.aws.amazon.com/health/status ✅ 200 *(confirmed open; last AWS update 30 Apr 2026)*
- ISO 20022 — RedCompass Labs, 12 Mar: https://www.redcompasslabs.com/insights/nearly-half-of-banks-are-behind-on-iso-20022/ ✅ 200
- Rabbit Hole — Blacksmith, outage 21 Jul / published 22 Jul: https://www.blacksmith.sh/blog/blacksmith-outage-on-july-21-2026 ✅ 200

**Do not link (cut by run plan or Phase 3):** x.com/githubstatus · LeadDev "the reality of being a senior engineer" · LeadDev "Influence" (Meg Adams) · Pragmatic Engineer "Inside Anthropic" · Pragmatic Engineer "Formal methods with Hillel Wayne" · Zalando · Cloudflare blog index · Monzo "The Engineering Behind the Platform" · Perforce/PR Newswire · layoffhedge tracker · isinternetup outage log.

---

## 11. Handover note to Phase 4

1. **The fallback did not fire.** Build the long-form set as planned. Do not consult § 7 of the run plan.
2. **The corrections register at § 9 is binding.** Nine fixes, all verified. The register at § 9 supersedes the corresponding run-plan detail where they differ.
3. **Six visuals, five components — both at their ceiling. Add nothing.**
4. **One epistemic reframe is budgeted (the Lead). The second is unallocated** — report if spent.
5. **Reading time will land at 12–13 minutes, not 7–8.** Compute it, print the computed figure, do not assert the run plan's number.
6. **Phase 5 mode is FULL review** (run plan § 9). Self-report grep results for: `.ip-theme` week-count · direct-address strings · `.section-label.alert` misuse · epistemic-reframe structural count · LeadDev item count · "529 Overloaded" absent · "mega-outage" absent · "10% of global revenue" absent.
