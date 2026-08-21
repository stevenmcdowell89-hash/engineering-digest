# Issue 23 — Phase 5 Review (FULL)

**Issue:** 23 · **Format:** Deep Dive · **Window:** 2026-08-15 → 2026-08-21 · **Reviewed:** 21 August 2026
**Mode:** FULL review, per run-plan §11.11 and section-briefs §3.12 (user-directed format · 19 sources under stat-discipline assignment · 14 Phase-3 figure corrections · 11 drops · two double-appearance flags · Issue 22 failed its first review on a non-verbatim quote).

## VERDICT: **FAIL-WITH-FIXES** — 15 failures, none structural-fatal. All are correctable in place without re-reporting.

Quote fidelity was re-verified against live primary sources for **every** quotation in the HTML (21 distinct quoted strings across 27 quotation pairs). Stat fidelity was re-verified against primaries for **26 figure clusters** covering every printed source, both scope-indicator counts, the cover lead stat and all five SVG data series. Nothing on the drop list resurfaced.

---

## 1. QUOTE FIDELITY (highest risk) — 21 quotes fetched and compared

| # | Quote | Slot | Source fetched | Result |
|---|---|---|---|---|
| 1 | "An engineer still reviews and merges, but the bottleneck moves from 'find an engineer with capacity' to 'find a reviewer'. That changes who gets to improve the product." | Case study pull quote | monzo.com/blog/building-agent-chip | **PASS — verbatim**, both sentences confirmed contiguous in source; attribution to Deshayes & Haley correct |
| 2 | "The throughput is real, but so is the debt it accrues" | S4 pull quote | gitclear.com | **PASS — verbatim** (source continues "…, and that debt concentrates among…"; fragment correctly unpunctuated) |
| 3 | "Models may be almost syntactically perfect, but they're still failing on nearly half of all tasks where security is needed." | S4 opener | businesswire.com (Veracode) | **FAIL — F1** (capitalisation altered; see below) |
| 4 | "Culture no longer builds itself." | S5 pull quote | leaddev.com | **PASS — verbatim**; Socol attribution, role and sabbatical all confirmed |
| 5 | "with collective progress and success – and failure" | S5 body | leaddev.com | **PASS — verbatim**, en dash matches |
| 6 | "any change means you have a new team" | S5 body | leaddev.com | **FAIL — F3** (words are Richard Dalton's, quoted by Socol) |
| 7 | "The risk in a moment like this is not that the industry moves too slowly — it's that innovation outpaces alignment." | Meanwhile 2 | americanbanker.com | **PASS — verbatim**; Haymond title confirmed |
| 8 | "Much of the infrastructure guiding agentic AI, such as how agents get authorized, how fraud gets caught, and how loyalty and rewards work is still being defined." | Meanwhile 2 | americanbanker.com | **FAIL — F4** (American Banker's own sentence, printed as the alliance's stated position) |
| 9 | "We've moved into our back-up system Monzo Stand-in and customers can still do most things on their Monzo app including sending bank transfers and making card payments and ATM withdrawals." | Meanwhile 1 | aol.co.uk | **PASS — verbatim** |
| 10–12 | Deloitte's augmentation / automation / true-autonomy definitions (3 strings) | S1 | deloitte.com | **PASS — all three verbatim**; taxonomy correctly attributed to Deloitte, no invented label |
| 13 | "an open source toolkit for building high-quality software with any AI coding agent" | S2 | github.com/github/spec-kit | **PASS — verbatim** |
| 14 | "30+ AI coding agents" | S2 | github.com/github/spec-kit | **PASS — verbatim** |
| 15 | "specifications become executable, directly generating working implementations rather than just guiding them" | S2 | github.com/github/spec-kit | **PASS — verbatim**, re-fetched specifically to confirm the trailing clause |
| 16 | "turn prompts into executable specs" | S2 | kiro.dev | **PASS — verbatim** |
| 17 | "picks the best model for the task based on complexity, factoring in model quality, latency, and cost" | S2 | kiro.dev | **PASS — verbatim** |
| 18 | specs "keep the fun of vibe coding, but fix some of its limitations" | S2 | kiro.dev | **FAIL — F2** (two verbs altered inside the quotation marks) |
| 19 | "80% of new developers on GitHub use Copilot in their first week" | S2 | github.blog Octoverse | **PASS — verbatim** |
| 20 | "rooted in environment-specific context and designed to be transparent, auditable, and governed" | S2 | dynatrace.com | **PASS — verbatim** |
| 21 | "imposed by reviewing AI-generated code" / "the tuition cost of transformation" / "verification tax" | S3 | infoq.com (DORA) | **PASS — all three verbatim, correctly attributed as DORA's own labels** |
| 22 | "89% of executives say AI increases speed, but only 6% of executives are sure they have clear examples of organization-wide AI ROI." | S3 | atlassian.com | **PASS — verbatim, word for word** |
| 23 | "nearly two letter grades" | S4 | anthropic.com | **PASS — verbatim** |
| 24 | "Generative AI as Seniority-Biased Technological Change" | S4 | title, per briefs §4 | **PASS** (SSRN 403 — title carried from briefs, gloss is the digest's own and marked as the authors' term) |
| 25 | "cost control, usage analytics by team and project, and the ability to switch models" | S5 | bvp.com | **PASS with note — A5** (source reads "centralized cost control…"; front-truncated without ellipsis) |
| 26 | "5,000+ businesses" | S5 opener | bvp.com | **PASS — verbatim** |
| 27 | "Claude Code sessions run on the most capable models far more often (54% are served by Opus, against 10% of chat and Cowork conversations)" | Recommended Reading | anthropic.com | **PASS — verbatim** |

### One quote, one slot (v3.6) — **PASS**
No quote appears in two slots. The case study's "which is the second half of that quote in practice" is a back-reference, not a reprint. All four reserve quotes correctly withheld: Amodio (0 hits), "comprehension debt" (0), the Anthropic RCT reserve (0), the Lloyds outage statement (0).

### Attribution fidelity (v3.6) — **2 FAILURES (F3, F4)**, otherwise pass
- DORA's labels used as DORA's ✓ · Deloitte's ladder used as Deloitte's ✓ · Bessemer's "agentic development" used as Bessemer's ✓ · GitKraken's "primary way of working" quoted as its own category wording ✓ · "seniority-biased technological change" marked as the authors' term ✓.
- **"AI efficiency paradox" correctly NOT attributed to Atlassian** (0 hits) — the §0.2 correction held.

---

## 2. STAT FIDELITY — 26 clusters checked against primaries

**All verified as printed** unless marked. Sources fetched: JetBrains · Pragmatic Engineer · GitKraken · Deloitte · Capgemini · Octoverse · arXiv · PagerDuty · DORA-via-InfoQ · dora.dev · DX newsletter · DX Q2 report · DX plateau · METR · Atlassian · Veracode · GitClear · Anthropic RCT · Perforce-via-InfoQ · Bessemer · Lloyds · Monzo · IBTimes · AOL · Dynatrace · Anthropic Economic Index.

**Highest-weight items (all PASS):**
- **Cover lead stat** — 90% weekly / 68% daily / "more than 15,000 professional developers" / fielded May–July 2026 / "published August 2026, no day": all four confirmed on blog.jetbrains.com. The post carries **no publication day**; the HTML never says "this week" (0 hits). §0.1's binding date constraint held.
- **Scope indicators** — 19 studies and 30,000+ survey respondents match the §1.3 recount; the label reads "Survey respondents", not "developers", per the §0.2 correction.
- **SVG A** — 95/90/55/28/11 all verified at source; bar widths mathematically exact (4.2px per point).
- **SVG B** — Claude Code 18→39, Codex 3→16, Copilot 29→21, Cursor 18→12, endpoints 9/7/6 all verified; y-geometry exact; Copilot's different baseline correctly dashed and footnoted.
- **SVG C** — 41.7 / 19.8 / 747 / 33,596 / 2,807 / 40.2 / 79.4 / 53.4 / 95.0 all verified on arXiv; bar heights exact. The mandated honesty note (0.5% of concurrent pairs, ~4.3% of repositories) is carried **twice** — in the SVG and in the chart note. Excellent.
- **SVG D** — ~$1.5K→~$44K, 42→72 "average", 1.42→1.94 (+37%, four quarters), DXI 67→65 all verified verbatim on the DX Q2 report; the "no shared axis" honesty line is present, as §1.2 required.
- **SVG E** — all seven GitClear deltas verified verbatim; diverging-bar geometry exact (2.6px per point).

**Other clusters verified:** Pragmatic Engineer (906, 27 Jan–17 Feb, 95/75/56/55/63.5, 75%/56% size split, 61 v 36) · GitKraken (554, 96.4, 84, 7.6→28 over nine months, 14 Aug) · Deloitte (11/14/38/30/42/35, sample undisclosed — and the HTML says so) · Capgemini (43% experimenting, 15% scaled, 63 v 60, 14→25) · Octoverse (1m+ May–Sep 2025, 43.2m +23%, 4.3m, 28 Oct 2025 / Feb 2026 update) · PagerDuty (1,000, seven markets, 59/34/44/43/62, 63 v 53, 100% agree / 48% run cycles, 17 Mar 2026) · DORA sample model (500-person, $176,000, 5→6%, $344K, ~39%, ~$11.6m, ~$8.4m, ~8 months) · DX plateau (500+ companies, May 2025–Apr 2026, 31.4/69.7/66.1/50.5/7.8, Houck) · METR (16, 246, 24/20/19, Cursor Pro + Claude 3.5/3.7, July 2025) · Atlassian (12,035, 173, Jan–Feb, 25 interviews, 85/29 "embedded"/55/14, 5.6× and 9.4×) · Veracode (100+ models, four snapshots, no security prompting, 56 avg, 68 GPT-5.5, 56 v 51, 51 v 52, 53/51/51, Python 63, Java 30) · Anthropic RCT (52, Trio, 50 v 67, d=0.738, p=0.01, ~2 min ns, 65%+ v <40%, debugging, 29 Jan 2026) · Perforce (820, 73 v 44 = 29pts, 66%, 31% self-reported, 28% dedicated team, InfoQ 4 Aug) · Bessemer (90%, 92/79/75/69/60, blockers 52/46/38/29, 48-hour clock, 10 June, all three contributors) · Lloyds (~300, 1,000+, 700+, Level 6, 33 apprentices, "over 400,000 courses have been taken since January", 65,000+, 67,000 workforce, 22 June) · Monzo (~3 weeks, ~10% merged PRs, "1,800 tasks every day" rendered without a "+", per §0.2) · npm (at least ten packages, tens of millions of weekly downloads) · EU AI Act (2 Dec 2027 / 2 Aug 2028, Article 50 not deferred).

**Failures found:** F5 (Halifax/Bank of Scotland aggregation), F6 ("six of the 11"), F7 (GitClear 4–10× qualifier stripped).

### Drop-list audit — **PASS, 11 of 11 stayed out**
`Gartner` 0 hits · Capgemini 90/52/37 funnel absent (43/15 printed instead) · `McDonald`/`Wired`/`515-page` 0 hits · `PYMNTS` 0 hits · `Tessl` 0 hits · DORA-Stanford 35–40/10 absent (`Stanford` 0 hits) · `CVE-` 0 hits · PagerDuty `17.8`/`MTTR` 0 hits · Lloyds `£50`/`50m` 0 hits and confirmed absent from the release itself · `first decline` 0 hits (and confirmed unstated on the DX report) · no in-window JetBrains publication claim (`this week` 0 hits). Also out: `3.3` h/wk baseline, `C# 58`, `JavaScript 57`, `93,000` stars, `161`bn fragmentation tax, `efficiency paradox`, danilchenko aggregates, Block/Mastercard/PayPal, AWS mega-outage. **Clean.**

---

## 3. STAT HOME-SECTION DISCIPLINE (v1.9.2)

- Rule 1, home assignments documented before writing — **PASS** (briefs §5 as amended by §0).
- Rule 2, each stat at full context in exactly one section — **FAIL (F8)**, one instance: the foreword re-states the cover's homed 90% with source, sample and fielding period. Every other homed stat holds: 56% (S4 home; shorthand in Counterpoint and Lessons), 28% GitKraken (S1 home; shorthand ×2), 92% Bessemer (S5 home; shorthand ×2), DXI 67→65 (S3 home; shorthand in Counterpoint), 11% Deloitte (S1 home; shorthand in Counterpoint), Perforce's 28% (S5 home; shorthand in Lessons).
- Rule 3, shorthand elsewhere — **PASS**.
- Rule 4, Counterpoint carries no new full-context stats — **PASS**. All six grid figures are label-only; no methodology, no sample sizes, no new numbers anywhere in its 500 words.
- Rule 5, thread-forward handoffs — **PASS**, all eight present and matching run-plan §1.3.
- Rule 6, Lessons in shorthand only — **PASS** ("the flat security pass rate", "the four years of GitClear data", "two of Bessemer's four named blockers" — no re-explanation, no re-introduced methodology).
- Rule 7, executive summary is index-not-preview — **PASS**. Names scale only (19 studies / 30,000+ respondents), maps all five sections plus Counterpoint and case study, signposts the terminology problem. No stat at full weight.
- Rule 8, source sections don't cross-reference each other's stats — **ADVISORY A2** (S2's "Code" paragraph references Bessemer's 92% and DX's merged-code finding; brief-authorised and shorthand-only).

---

## 4. VOICE & STYLE

- **Third-person editorial (v1.31)** — **PASS, zero violations.** Grep for "your team/firm/org/customers", "the reader", "reader's", "you must/should/need": 0 hits. The single `you` in the file sits inside a quotation ("any change means you have a new team"). No rhetorical questions to the audience: 0 hits.
- **Epistemic reframing (v3.6, cap 2)** — **FAIL (F13).** Structural recount: 3 clear, 5 borderline. Detail below.
- **Attribution fidelity** — 2 failures (F3, F4); no invented labels.
- **Jargon scan (v3.7, all four categories incl. 3+-frequency lowercase)** — **FAIL (F12)**, 2 flagged terms unglossed out of ~28. Glossed correctly: coding agent, agent-mode, autonomous agent, remote/cloud agent (Jargon Watch) · spec-driven development · vibe coding · quality engineering · synthetic test data · Octoverse · co-active PRs · structural vs textual conflict · DORA-the-programme (mandatory disambiguation present) · J-curve · verification tax · DXI · TrueThroughput · security pass rate · error-masking constructs · Cohen's d · seniority-biased technological change · MCP gateway · LLM proxy · platform maturity · agentic development · stand-in processing · Codex · OpenCode · Antigravity. Missing: **change failure rate**, **block duplication**.
- **Agent-terminology spectrum (v2.6)** — **PARTIAL FAIL (F11).** The deep-dive paragraph requirement is met with room to spare (S1 defines all three bands inline, the Jargon Watch adds a fourth term, SVG A colour-codes by band, and Deloitte's ladder anchors it). Per-survey tagging holds in S1 (all four tagged, Deloitte's organisation-vs-developer ambiguity stated) and S2 (PagerDuty framed as the autonomy boundary). It lapses in S3 — the v2.6 "if the source lumps both ends together, say so" clause is unmet for DX and DORA, while the executive summary promises every survey is tagged.
- **No corporate language** — **PASS**, 0 hits (leverage/synergy/best-in-class/utilise/going forward).
- **No action items** — **PASS.** Verdict, three h3 findings and six key takeaways all state implications. "The spectrum bands belong in any internal target" is normative but not an instruction to the reader; SVG C's chart note describes the argument the paper makes rather than issuing advice. Both sit inside tolerance.
- **Foreword rules** — 2 paragraphs ✓ (deep-dive allowance), 167 words against the briefs' 150–180 ✓, single editorial thread ✓, no "meanwhile/elsewhere/also this week" ✓, drop cap present via `.foreword p:first-of-type::first-letter` ✓, **no AI-default framing** ✓ (AI is the declared subject; none of the banned openers appear, in either direction). Fails only on F8.
- **Issue-wide AI-default framing scan (v2.9)** — **PASS.** No section frames its material relative to AI's presence or absence; Meanwhile's non-AI items stand on their own merits.

---

## 5. DEEP-DIVE STRUCTURE

| Element | Result |
|---|---|
| Cover: red gradient bar, Deep Dive badge, dot-grid motif | **PASS** — `.cover::before` alert-red→coral→alert-red; `.deep-badge` red; 40px radial dot grid at 7% |
| Cover: left-aligned, 52px, max-width 700px | **PASS** — all three exact |
| Cover: scope indicator row (4 stats, Playfair 36px, alert-red) | **PASS** |
| Cover: lead stat band, 56px + context sentence | **PASS** |
| Vol. II identity strap (22px padding, teal pill `.cis-vol`) · bordered week badge · footer `.footer-vol` teal pill | **PASS** on all three |
| Progress bar: sticky red-to-coral gradient + JS | **PASS** — passive scroll listener, guards a null element |
| Section markers 1 of N … N of N | **FAIL (F9)** — 8 markers, 9 major sections; case study unnumbered |
| Per-section reading time | **FAIL (F10)** — missing on Executive Summary and Counterpoint; the three stated totals disagree |
| How to Read: 3-card grid, coherent paths | **PASS** — 2/10/30 min routes match briefs exactly and name real destinations |
| Source-section layout rotation (no two consecutive alike) | **PASS** — by-the-numbers+2 SVGs → standalone+SVG → article-with-sidebar → standalone+SVG → article-with-sidebar |
| ≥1 section uses `.article-with-sidebar` | **PASS** (S3 and S5) |
| ≥1 section opens with `.by-the-numbers` | **PASS** (S1) |
| Counterpoint: green left border, pill badge, comparison grid, red/green tints | **PASS**; 3 metrics per column, at the cap |
| Counterpoint reconciliation subheading | **PASS** — "Why the two columns reconcile", and the three mandated moves run in the briefed order |
| Case study: `.timeline-box` + `.timeline-track`, colour-coded | **PASS** — `.tl-navy` build, `.tl-teal` outcomes, `.tl-red` the bottleneck |
| Lessons: navy `.lessons-section` + `.verdict-box` opening + `.key-takeaway` closing | **PASS**, arrow bullets present, verdict matches the briefed thesis |
| Meanwhile: after Lessons, before Radar; italic intro; ≥4 items; 2 "would have led"; 2-col grid for "also this week"; source link on every item; no analysis; no duplication with the body | **PASS on all**; in-window dates → **ADVISORY A1** (item 4 is 5 Aug, the documented run-plan §6 fallback, date stated) |
| "Other News This Week" not also present | **PASS** — absent |
| Radar: `.radar-compact` two-column, urgent in red | **PASS** — npm item carries `.rc-date.urgent` |
| Recommended Reading, 5 items | **PASS** — matches briefs §Recommended Reading item for item, including the Anthropic Economic Index rewrite |
| Footer archive bar, last 5 issues, current highlighted | **PASS** — verified against `/index.html`: #18 Deep Dive, #19 Weekly, #20 Weekly, #21 Weekly, #22 Weekly, #23 current Deep Dive. Formats and sequence all correct |
| ≥3–4 real inline SVGs | **PASS — 5 `<svg>` elements**, all real vector, all data-accurate (§2 above). No AI images, no CSS approximations |
| Component budget 4–6 | **PASS — 5** (by-the-numbers, article-with-sidebar ×2, comparison-grid, timeline-box, verdict+key-takeaway); Jargon Watch off-cap; Meanwhile and radar-compact are format baseline |
| Double-appearance flags (Monzo, Lloyds) | **PASS — binding constraint held.** No linkage, no implied causation, no cross-reference in either direction. Meanwhile item 1 makes no mention of agents or AI; S5's Lloyds paragraph and the Monzo case study make no mention of the outages |

---

## 6. LINKS — **PASS**

37 unique URLs. **36 of 36 content URLs match the briefs' §4 verified master list exactly**; the 37th is Google Fonts. No fabricated links, no guessed URLs, no URL invented for an unreachable source (the Wired item was dropped rather than linked, per §0.1; SSRN is linked with its unreachability disclosed in the Recommended Reading note). Twenty-two were re-fetched successfully during this review; every one resolved to the content the briefs claimed.

---

## 7. HTML SANITY — **PASS**

- Tags balanced across all 15 element types checked: section 14/14, div 152/152, p 100/100, svg 5/5, span 70/70, ul 3/3, li 14/14, a 54/54, strong 35/35, h2 13/13, h3 20/20, header 1/1, footer 1/1, style 1/1, script 1/1.
- Single `<style>` block ✓, single `<script>` ✓, no external assets beyond the Google Fonts stylesheet ✓.
- **Renders at 900px:** `.magazine` max-width 900px; `.section` padding 40px/60px gives a 780px content column; every SVG `viewBox` is 780 units wide with `width:100%;height:auto` — a 1:1 fit with no horizontal overflow. Both charts that need full width (SVG D, SVG E) sit outside the 65/35 sidebar grid. `@media(max-width:700px)` collapses all grids to one column and unfloats the Jargon Watch.
- Template classes used correctly throughout — see A7 for one cosmetic note.

---

## 8. LEAD-SANITY CROSS-CHECK — **PASS**

HTML structure matches run-plan §2 section-for-section: Cover → Foreword → How to Read → Executive summary → S1–S5 → Counterpoint → Case study → Lessons → Meanwhile → On the Radar → Recommended Reading → Footer. Format matches (Deep Dive). Central question, tension and title ("The Constraint Moved") all as contracted. **No silent re-promotion:** every candidate rejected in run-plan §10 stayed rejected — Gartner, Meta Muse Code (correctly demoted to a dated Meanwhile one-liner under the §6 fallback, not promoted to a section), npm, EU AI Act, Commonwealth Bank, Ludicity, Wired/McDonald's, Anthropic Economic Index (Recommended Reading only), Dynatrace (one qualitative sentence + Radar line). Ramp correctly carries the S5 named-operator weight with Shopify secondary, per §5. Phase 3's two allocation changes (METR homed in S3; Meanwhile at four items) are documented in briefs §0.1 and §2 and are reflected faithfully.

---

# FAILURES — location, evidence, required fix

### F1 · Quote fidelity · S4 opener
**Printed:** `&ldquo;Models may be almost syntactically perfect, but they&rsquo;re still failing on nearly half of all tasks where security is needed.&rdquo;`
**Source (Businesswire, Wysopal):** "But the root problem remains: models may be almost syntactically perfect, but they're still failing on nearly half of all tasks where security is needed."
**Problem:** the quotation begins mid-sentence and the initial "m" has been silently capitalised, presenting a fragment as a complete sentence.
**Fix:** render as `&ldquo;[M]odels may be almost syntactically perfect&hellip;&rdquo;`, or lead into it — `Veracode&rsquo;s Chris Wysopal puts it as a root problem: &ldquo;models may be almost syntactically perfect, but&hellip;&rdquo;`.

### F2 · Quote fidelity · S2, Spec
**Printed:** `specs &ldquo;keep the fun of vibe coding, but fix some of its limitations&rdquo;`
**Source (kiro.dev):** "Developing with specs keeps the fun of vibe coding, but fixes some of its limitations"
**Problem:** two verbs altered inside the quotation marks (*keeps*→*keep*, *fixes*→*fix*) to agree with the digest's own subject. This is the Issue 22 failure mode exactly.
**Fix:** quote the source sentence whole — `Kiro&rsquo;s own framing is that &ldquo;developing with specs keeps the fun of vibe coding, but fixes some of its limitations&rdquo;` — or move the words outside the quotation marks.

### F3 · Attribution fidelity · S5, "The cost nobody budgets"
**Printed:** "Socol reaches for Tuckman's forming-storming-norming-performing stages to describe what follows, **arguing that &ldquo;any change means you have a new team&rdquo;** that has to go through the stages again."
**Source (LeadDev):** "As Richard Dalton, chief design officer at Verizon, once observed: teams are immutable structures. Any change means you have a new team, one that has to go through the stages of forming-storming-norming-performing again."
**Problem:** words Socol explicitly attributes to a third party are printed as Socol's own argument.
**Fix:** "…citing Richard Dalton's observation that teams are immutable structures, so that 'any change means you have a new team'…", or drop the quotation marks and paraphrase in the digest's voice.

### F4 · Attribution fidelity · Meanwhile, item 2
**Printed:** "**Its stated open problems:** &ldquo;Much of the infrastructure guiding agentic AI, such as how agents get authorized, how fraud gets caught, and how loyalty and rewards work is still being defined.&rdquo;"
**Source (American Banker):** the sentence is the article's own reporting, attributed to no person or organisation.
**Problem:** a reporter's summary is placed in the alliance's mouth as its stated position — the v3.6 disallowed pattern.
**Fix:** "American Banker reports that much of the infrastructure guiding agentic AI — how agents get authorised, how fraud gets caught, and how loyalty and rewards work — is still being defined." (No quotation marks needed; the loyalty admission survives intact.)

### F5 · Stat fidelity · Meanwhile, item 1
**Printed:** "Downdetector logged more than 2,450 reports for Lloyds and **more than a thousand across Halifax and Bank of Scotland**"
**Source (IBTimes UK):** "Downdetector recorded more than 2,450 reports for Lloyds Bank alone, alongside **more than 1,000 for Halifax and several hundred for Bank of Scotland** within the same hour."
**Problem:** two separately reported figures are merged into one aggregate. This is the precise aggregation the briefs' §0.1 ledger corrected out of the run plan ("the run plan's '1,300+ across Halifax and Bank of Scotland' … is not what the source says"); the briefs' own §2 Meanwhile prose reproduced the error and Phase 4 printed it. **Note for the briefs:** §0.1 and §2 contradict each other on this line — §0.1 is the binding ledger.
**Fix:** "…more than 2,450 reports for Lloyds, more than 1,000 for Halifax and several hundred for Bank of Scotland."

### F6 · Stat fidelity · S4, the code
**Printed:** "GPT-5.5 leads the field at 68%; **six models cluster between 50% and 53%**."
**Source (Veracode):** "six of the 11 models cluster between 50 percent and 53 percent".
**Problem:** dropping "of the 11" leaves the reader to infer six out of the 100+ models tested, which materially understates how concentrated the cluster is.
**Fix:** "six of the eleven cluster between 50% and 53%."

### F7 · Source distortion · S4, after SVG E
**Printed:** "GitClear also compares heavy AI users against their own history rather than against anyone else's. **Those users produce four to ten times more code than non-users, and achieved roughly 25% velocity gains measured against their own pre-AI baseline. Output multiplied; delivered pace did not.**"
**Source (GitClear):** "Heavy AI users out-produce non-users by 4–10x, **but most of that gap pre-dated AI** — compared to their past selves, heavy AI users enjoyed a more modest 25% velocity gain."
**Problem:** the omitted qualifier is the point of the finding. As printed, the 4–10× reads as an AI effect set against a 25% return; GitClear says most of that gap existed before AI. "Output multiplied; delivered pace did not" is an inference the source does not support in that form. This is the most consequential fidelity defect in the issue.
**Fix:** "Heavy AI users out-produce non-users by four to ten times, but GitClear finds most of that gap pre-dated AI; measured against their own pre-AI baseline, the same users gained roughly 25%." Delete the closing epigram.

### F8 · Stat home discipline (rule 2) · Foreword, paragraph 1
**Printed:** "**JetBrains put the question to more than fifteen thousand professional developers between May and July, and nine in ten said they reach for a coding agent at least once a week.**"
**Problem:** figure + source + sample size + fielding period is full context. The stat is homed on the cover lead-stat band, which carries the identical package four lines above. Briefs bind the foreword to "No stats at full weight. One shorthand reference to the cover figure at most."
**Fix:** "The largest fresh sample yet taken of coding-agent use was published this month, and the headline figure on the cover is what it found: nine in ten professional developers now reach for a coding agent at least weekly." Drop the sample size and the fielding period — both live on the cover.

### F9 · Structure · Case study
**Problem:** the case study (`<h2>Monzo&rsquo;s Agent Chip</h2>`) carries no `.section-marker`, while the Executive Summary, S1–S5, Counterpoint and Lessons carry 1 of 8 through 8 of 8. Nine major content sections, eight markers — and the skipped one is a section the How to Read guide routes both the 10- and 30-minute readers toward.
**Fix:** renumber to 1 of 9 … 9 of 9 with the case study at 8 of 9 and Lessons at 9 of 9.

### F10 · Structure · Reading times
**Problem:** three stated totals disagree — the cover identity strap says "28 min read", the seven `.section-time` tags sum to 36 minutes (5+6+6+6+5+4+4), and the How to Read deep path says 30 minutes. Separately, `.section-time` is missing from the Executive Summary and the Counterpoint, both of which carry section markers and are therefore declared major sections.
**Fix:** add `(2 min)` and `(3 min)` respectively, then reconcile the cover figure to the sum.

### F11 · Agent-terminology spectrum (v2.6) · S3
**Problem:** the executive summary promises that Source 1 "tags every survey in this issue with the one it measures". S3 does not tag its two largest sources. DX's telemetry does not separate the bands at all (briefs: "whole spectrum — telemetry does not separate bands") and DORA's model does not differentiate assistant from agent use (briefs: "assistant and agent use undifferentiated") — v2.6 requires the article to say so explicitly where a source lumps the ends together.
**Fix:** one clause each. DX: "…measured adoption at 95% — telemetry that counts every band of the spectrum together, from autocomplete to agent-mode." DORA: "…a model that does not separate assistant use from agent use."

### F12 · Jargon coverage (v3.7) · S3 sidebar, S4 body
**Problem:** two terms flagged for inline glossing in briefs §1.5 print unglossed. (a) "Change failure rate" appears only as a sidebar row label — "Change failure rate | 5→6%" — with no explanation. (b) "Block duplication is up 81%, from 40.3 to 73.0 instances per million changed lines" carries its figures but not its meaning, while its neighbour "error-masking constructs" is properly glossed. Both fail the year-one-EM-from-a-non-technical-route bar.
**Fix:** add a `.sb-context` line to the DORA sidebar ("Change failure rate — the share of deployments that cause a failure needing a fix or rollback"), and an em-dash aside in S4 ("Block duplication — the same run of code appearing in more than one place — is up 81%…").

### F13 · Epistemic reframing cap (v3.6, ≤2 per issue) · 3 clear instances
Structural recount, scanning meaning rather than surface pattern. Confirmed:
1. **Foreword:** "Read together they describe a change in where the work sits, **rather than in how much of it there is**."
2. **Counterpoint:** "**The two columns are not in contradiction.** They count different bands of the spectrum, over different horizons, in different populations."
3. **Counterpoint:** "Fast-moving inputs and slow-moving outputs **read as a contradiction** when they are set side by side and treated as though they run on the same clock." — a second instance of the same move within the same argument.
Borderline, not counted but noted for the fixer: "a measure of organisations rather than of engineers" (S1) · "deliberate rather than ambient" (S5) · "architectural before it is procedural" (case study) · "inside the operational loop rather than alongside it" (case study) · "measuring against an intuition rather than a clock" (Counterpoint). The many other "rather than" constructions in the issue are definitional glosses or methodology descriptions and do not count.
**Fix:** rewrite one of the three to a direct declarative. Cheapest is #1 — "Read together they describe where the work now sits." Note that #2 and #3 both belong to the Counterpoint's core reconciliation job, so merging them into a single reframe would also clear the cap.

### F14 · Unpinned claims · S3, "What the model assumes" sidebar
**Printed:** "The 15% productivity drop DORA uses as the calculator's default is a placeholder input rather than a measurement." and "DORA states that the depth and duration of the dip are unpredictable, which makes the payback period the least stable number in the model."
**Problem:** neither claim appears on the InfoQ piece the briefs name as the sidebar's source, and dora.dev/ai/roi/report/ (fetched) does not carry them — it references managing "the initial 'productivity dip' of a new rollout" only in general terms. The report body is a gated PDF and the ROI calculator was not reachable, so these two lines currently have no traceable source in the verified set. The issue's own standing discipline is that unpinned figures are not printed.
**Fix:** pin both to the DORA calculator or the report PDF and cite it, or cut the two lines and let the sidebar's first sentence ("A published illustration, not a measurement") carry the caveat alone.

### F15 · Date honesty · S3, DORA
**Printed:** "…**published** version 2026.1 of its report on the return on investment of AI-assisted software development **on 22 April 2026**."
**Evidence:** dora.dev/ai/roi/report/ carries "Last updated: April 22, 2026" — an update stamp, not a publication date. InfoQ dates its report of the release 11 May 2026. Date honesty is a binding rail for this run (briefs §3.8), and no other date in the issue converts an update stamp into a publication date.
**Fix:** "…whose ROI report (v.2026.1) was last updated on 22 April 2026", or drop the day and write "published in spring 2026".

---

# ADVISORIES — no fix required, recorded for the log

- **A1 · Meanwhile item 4 is out of window.** Meta Muse Code is dated 5 August, stated plainly as "before this window opens". This is the documented run-plan §6 fallback, invoked because both contingent items (Wired, PYMNTS) failed verification and Meanwhile would otherwise sit below the four-item floor. Correctly handled, but the checklist's "all items have primary sources from the 7-day window" is not literally met — worth a line in the state note.
- **A2 · S2 cross-references two other sections' stats** (Bessemer's 92%, DX's merged-code finding). Brief-authorised, shorthand-only, explicitly signposted to their home sections. Reads against the letter of the "source sections do not cross-reference" rule; the stat-duplication risk it exists to prevent does not materialise.
- **A3 · InfoQ appears in four places** (S3 sample-model source, S4 Allan, S5 Perforce, Recommended Reading) against the v2.0 two-section cap, and S4→S5 are adjacent with InfoQ in both source tags. In each case InfoQ is a reporting conduit to a primary rather than an anchor, which is the usual deep-dive pattern, but it is the one source-diversity number that stands out.
- **A4 · Section lengths run above brief targets.** Executive summary ~345 (280–320), S1 ~950 (650–750), S2 ~1,075 (750–850), S3 ~940 (750–850), S4 ~900 (700–800), S5 ~770 (650–750), Counterpoint ~500 (400–480); On the Radar is under at ~155 (180–220). Case study, Lessons, Meanwhile, Recommended Reading and How to Read all land inside target. Deep dives carry no word budget, so this is drift rather than a breach — total body copy 7,728 words.
- **A5 · Shopify LLM-proxy quote is front-truncated** from "centralized cost control…" to "cost control…" with no ellipsis. Acceptable practice for a fragment; noted only because this run's quote bar is set high.
- **A6 · Case study, minor embellishment.** "Non-engineers at Monzo can now ship small **user-experience** fixes" — the source says the people closest to the problem "can describe a fix in plain English and get a pull request out of it", with an engineer still reviewing and merging. Neither "user-experience" nor "ship" is in the source.
- **A7 · `.article-main` and `.article-sidebar` are used but not defined** in the stylesheet. They render correctly as the two direct children of the `.article-with-sidebar` grid, so this is cosmetic only.
- **A8 · Two small grid artefacts.** `.radar-compact` holds three items in a two-column grid, leaving item 3 with a right border and no neighbour; `.meanwhile-grid`'s single row carries a bottom border inside an already-bordered container.
- **A9 · SVG D labels the PR-size series "Q3 2025 to Q2 2026"**; the verified DX wording carries the figures without a period. The period is carried forward from run-plan §5 and was not re-verified in Phase 3.
- **A10 · DORA version rendered "v.2026.1"**; InfoQ renders it "(2026.01)". Immaterial.

---

# COULD NOT VERIFY

1. **DORA's "15% productivity drop" default and the "depth and duration are unpredictable" statement** (F14) — the report body is a gated PDF and the ROI calculator was not reachable; dora.dev's landing page does not carry either claim. Recorded as a failure because the claims print; recorded here because absence from the landing page is not proof of absence from the report.
2. **Harvard/SSRN** — papers.ssrn.com returns 403, as Phase 3 found. The issue prints direction only, no magnitudes and no sample figures, and discloses the unreachability in the Recommended Reading note. The correct handling of an unverifiable source; simply not independently confirmable here.
3. **METR's "average of five years" repository familiarity** — metr.org's blog page states developers had contributed "for multiple years"; the five-year average was not re-confirmable from the page (it sits in the paper). Every other METR figure verified exactly.
4. **Monzo's "user-experience" fixes and "13 August 2026" publication date** — the post's content verified in full, but the page carries no visible date stamp in the fetched rendering; the date is carried from the briefs.
5. **Rendering** — assessed by reasoning from the markup (900px container, 780px content column, 780-unit viewBoxes, responsive breakpoint) rather than by opening a browser. No layout was visually confirmed.

---

# SUMMARY

| Area | Result |
|---|---|
| Quote fidelity (21 quotes, all fetched) | 4 failures — F1, F2, F3, F4 |
| One quote, one slot | PASS |
| Stat fidelity (26 clusters vs primaries) | 3 failures — F5, F6, F7 |
| Drop-list audit (11 items) | PASS — none resurfaced |
| Stat home discipline (v1.9.2, 8 rules) | 1 failure — F8 |
| Voice: third-person, corporate language, action items | PASS |
| Epistemic reframing cap | 1 failure — F13 |
| Attribution fidelity | covered by F3, F4 |
| Jargon scan (v3.7) | 1 failure — F12 |
| Agent-terminology spectrum (v2.6) | 1 failure — F11 |
| Foreword rules | 1 failure — F8 (shared) |
| Deep-dive structure (21 elements) | 2 failures — F9, F10 |
| Sourcing discipline / date honesty | 2 failures — F14, F15 |
| Links (37 URLs) | PASS |
| HTML sanity | PASS |
| Lead-sanity cross-check | PASS |
| Double-appearance flags (Monzo, Lloyds) | PASS |

**15 failures. Verdict: FAIL-WITH-FIXES.** Ten are single-sentence edits (F1–F8, F12, F15); five need a short rewrite or a decision (F9, F10, F11, F13, F14). None requires re-reporting, re-sourcing or a structural rebuild, and the issue's hardest disciplines — the drop list, the double-appearance flags, the Counterpoint's no-new-stats rule, third-person voice, link integrity and all five SVG data series — came through clean.

*Phase 5 complete. Return to Phase 4 for the fixes above, then re-check F1–F8 and F13 only.*

---

# DELTA RE-REVIEW — Phase 4 fix pass

**Re-reviewed:** 21 August 2026, against `issue-23.html` as amended (110,604 bytes). Scope: verify each of F1–F15, and check the touched areas for new violations. Quote wording re-compared against the same primary sources fetched in the first pass.

## Fix verification — 15 of 15 correctly applied

| # | Status | Evidence in the current file |
|---|---|---|
| **F1** | **FIXED** | `&ldquo;[M]odels may be almost syntactically perfect, but they&rsquo;re still failing on nearly half of all tasks where security is needed.&rdquo;` — bracketed initial, acceptable convention; the remaining 19 words match Businesswire word for word. |
| **F2** | **FIXED** | Now quotes the source sentence whole: `Kiro frames the whole approach against unstructured prompting: &ldquo;Developing with specs keeps the fun of vibe coding, but fixes some of its limitations&rdquo;`. Exact match to kiro.dev — both altered verbs restored. |
| **F3** | **FIXED** | `citing Richard Dalton&rsquo;s observation that teams are immutable structures, so that &ldquo;any change means you have a new team&rdquo; that has to go through the stages again`. Dalton credited; Socol no longer holds words he attributed onward. |
| **F4** | **FIXED** | `American Banker reports that much of the infrastructure guiding agentic AI &mdash; how agents get authorised, how fraud gets caught, and how loyalty and rewards work &mdash; is still being defined.` Quotation marks dropped, reporting attributed to the outlet, and the loyalty admission survives intact. |
| **F5** | **FIXED** | `more than 2,450 reports for Lloyds, more than 1,000 for Halifax and several hundred for Bank of Scotland` — disaggregated, and an exact match to briefs §0.1 and to IBTimes UK. |
| **F6** | **FIXED** | `GPT-5.5 leads the field at 68%, and in Veracode&rsquo;s own words &ldquo;six of the 11 models cluster between 50 percent and 53 percent&rdquo;` — the denominator is restored and the phrasing is now sourced rather than paraphrased. |
| **F7** | **FIXED** | `Those users out-produce non-users by four to ten times, but GitClear finds most of that gap pre-dated AI; measured against their own pre-AI baseline, the same users gained roughly 25%.` Qualifier restored; the unsupported epigram "Output multiplied; delivered pace did not" is gone (0 hits). |
| **F8** | **FIXED** (one residual, R1) | Foreword now reads `the headline figure on the cover is what it found: nine in ten professional developers now reach for a coding agent at least weekly`. Sample size and fielding period both removed — the stat is now a shorthand deferral to its home on the cover. Stat-discipline clean; still exactly two paragraphs; 150 words total, inside the briefs' 150–180. |
| **F9** | **FIXED** | Markers run **1 of 9 → 9 of 9 in document order**, with Counterpoint at 7, Case Study at 8 and Lessons at 9. All nine marked sections now also carry a `.section-time`. |
| **F10** | **FIXED** | Nine `.section-time` tags (2+4+5+4+4+3+2+2+2 = **28 min**) now sit *under* the cover's **30 min read**, with the ~1,000 words of unnumbered front and back matter accounting for the balance; the How to Read deep path also reads 30 min. Cover = deep path, and the section sum no longer exceeds the whole — the previous impossible ordering (36 > 30 > 28) is resolved. 7,757 body words at ~250 wpm corroborates 30 minutes. |
| **F11** | **FIXED** | DORA: `Its central claim, drawn from a model that does not separate assistant use from agent use…`. DX: `put measured adoption at 95% &mdash; telemetry that counts every band of the spectrum together, from autocomplete to agent-mode`. The executive summary's promise that every survey is tagged now holds. |
| **F12** | **FIXED** | `Change failure rate &mdash; the share of deployments that cause a failure needing a fix or a rollback.` added as a `.sb-context` line in the S3 sidebar; `Block duplication &mdash; the same run of code appearing in more than one place &mdash; is up 81%…` in S4. |
| **F13** | **FIXED** | See recount below — 1 clear structural instance, against a cap of 2. |
| **F14** | **FIXED** | The `.sidebar-box.urgent` "What the model assumes" panel is removed in full: `sidebar-box urgent` 0 hits, `15% productivity drop` 0, `placeholder` 0, `unpredictable` 0. **Nothing unverified replaced it** — the S3 sidebar now carries only the verified sample-model figures, the surviving `A published illustration, not a measurement` caveat, and the new change-failure-rate gloss. |
| **F15** | **FIXED** | `publishes a report on the return on investment of AI-assisted software development, version 2026.1 of which was last updated on 22 April 2026` — the update stamp is now described as one. |

## F13 — whole-issue structural recount (writer claims 1)

Full-text scan of every sentence containing a negation-or-contrast construction (`is/are not`, `isn't`, `not that/merely/just`, `rather than`, `instead of`, `less a`, `before it is`, `the real`, `not whether`), SVG text and stylesheet excluded, judged on meaning rather than surface form.

**Clear structural instances: 1.**
1. Counterpoint: *"The two columns are not in contradiction. They count different bands of the spectrum, over different horizons, in different populations."*

**Previously counted, now cleared:**
- Foreword — *"…rather than in how much of it there is"* → rewritten to the direct declarative *"Read together they describe where the work now sits."*
- Counterpoint — *"Fast-moving inputs and slow-moving outputs read as a contradiction when…"* → rewritten to *"Inputs that move in a fortnight and outputs that move over quarters produce two different pictures of the same rollout when they are set side by side on one page."* No negation, no reframe.
- S4 — *"…against their own history rather than against anyone else's"* → the trailing clause is gone as part of the F7 rewrite.

**Borderline, not counted (unchanged from the first pass):** *"measuring against an intuition rather than a clock"* (Counterpoint) · *"architectural before it is procedural"* (case study) · *"inside the operational loop rather than alongside it"* (case study) · *"deliberate rather than ambient"* (S5). Each is a short trailing qualifier rather than a sentence built to introduce X by denying Y. Even counting the two strongest as full instances, the issue lands at 3 by the most severe reading and **1 by a strict structural count** — inside the cap either way, and the one instance spent is the Counterpoint's core reconciliation move, which is the right place to spend it. **The writer's claim of 1 is accurate.**

## New-violation sweep on the touched areas — CLEAN

- **Banned second-person constructions: 0.** Grep for "your team/firm/org/customers/company", "the reader", "reader's", "you must/should/need/can/will", bare "your" — all zero. The file's only `you` remains inside the Dalton quotation, which is quoted speech.
- **Gloss regressions: none.** All 14 spot-checked inline glosses survive the edits intact — Cohen's d, error-masking constructs, MCP gateway, TrueThroughput, DXI, platform maturity, LLM proxy, stand-in processing, block duplication, change failure rate, synthetic test data, Octoverse, seniority-biased technological change, vibe coding.
- **Drop list: still clean.** All 15 probes at 0 hits, including the newly deleted "Output multiplied" epigram.
- **Quote integrity elsewhere: intact.** The 18 quotes that passed the first review are unchanged; the three rewritten ones (F1, F2, F6) now match their sources exactly.
- **Stat discipline: intact.** No stat gained a second full-context appearance. The Counterpoint still carries no new full-context stats, its grid is unchanged at 3 shorthand metrics per column, and its mandatory reconciliation subheading ("Why the two columns reconcile") is in place.
- **Structure and markup: intact.** Tags balanced across all 15 element types (div 150/150 — down 2, consistent with the removed sidebar); 5 real inline SVGs unchanged and still data-accurate; no external assets beyond Google Fonts; single `<style>`, single `<script>`. `.article-with-sidebar` is still used twice, so the removal of one `.sidebar-box` leaves the rotating-component count at **5**, inside the 4–6 deep-dive budget, and S3 retains both a sidebar and SVG D for its visual floor.

## Residual — non-blocking

**R1 · Foreword paragraph 1 is 90 words.** Against the coordinator's stricter 50–80-words-per-paragraph reading of the deep-dive foreword rule, paragraph 1 runs ten words over (paragraph 2 is 60). The briefs' own contract — two short paragraphs totalling 150–180 words — is met exactly at 150, and the stat-discipline defect that made F8 a failure is fully resolved. **Suggested trim (10 words), not a blocker:** cut "and the headline figure on the cover is what it found" to "as the cover records", or shorten the four-item list that closes the paragraph.

---

# FINAL VERDICT: **PASS**

All 15 failures from the first review are correctly fixed, and the fix pass introduced no new violations in the touched areas or anywhere else in the file. One non-blocking residual (R1, a ten-word foreword trim) is recorded above at the reviewer's discretion; it does not gate publication.

The advisories A1–A10 from the first review stand as recorded — all were logged as no-fix-required and none was affected by this pass. The items listed under "Could not verify" are unchanged: the DORA gated PDF is now moot, since the two claims that depended on it have been cut.

*Phase 5 complete. Issue 23 is cleared for publication.*

---

# REVISION REVIEW — practitioner rebuild (S2 / S5)

**Reviewed:** 21 August 2026, against `issue-23.html` as substantially revised (140,961 bytes · 11,069 body words · 6 SVGs · 9 numbered sections), the new `revision-sources.md` pack (16 sources, Bucket A ×7, Bucket B ×9), and the standing contract in `run-plan.md` / `section-briefs.md`.

**Context accepted as authorised:** owner-directed audience reshape to manager-and-down, one level more concrete than the spec's usual altitude. The altitude guard still holds in the copy — no prompt text, no CLI commands, no config. Willison's `uv run pytest` is elided from his quote with a marked ellipsis, which serves both fidelity and the guard.

## VERDICT: **FAIL-WITH-FIXES** — 2 failures, both narrow. One quote-fidelity defect inherited from the source pack; one thread-forward gap at the Counterpoint close. Everything else in the rebuild verifies.

---

## 1. New-quote fidelity — 45 quotes compared, 8 primary URLs spot-fetched

Every quotation in the rebuilt S2 and S5, the new Wells material in S4, and the three new Recommended Reading entries was compared character-by-character against the `revision-sources.md` verbatim blocks. **44 of 45 match the pack exactly.** Eight underlying primaries were then fetched to test whether the pack itself is faithful.

| Source fetched | Passages checked | Result |
|---|---|---|
| **Cloudflare** (B1) | 93% R&D · iMARS/eleven-months passage · choke-point passage · AGENTS.md passage · "The difference is the wiring" · 5,600/8,700/10,952/Q4 | **All six verbatim.** Pack faithful |
| **Figma** (B6) | 99 lines/2,560 words/68 precedents · precision & recall definitions · $0.50 median · 75.8% union catch rate · policy change control | **All verbatim.** Pack faithful |
| **Fung / Anthropic** (A6) | six-month roadmap · JIT planning · kill-old-processes | **DEFECT — see R-F1.** JIT passage and role/date verbatim; opening clause of the roadmap quote altered |
| **Cramer / Sentry** (B5) | barriers passage · top-down · $100/day · six months without code | Head and tail of each verified; fetch elided mid-passage. Consistent, see *Could not verify* |
| **Craft Docs** (B4) | "wow" moment · 3-4 months in a week · $200 / $3,000 · names · date | **All verbatim.** Pack faithful |
| **Addy Osmani** (A4, Bucket A) | 617/93.4%/four tools · 51% larger/Faros · borrowed confidence · 146 PRs | **Verbatim**, 146-PR comparison confirmed. Reconstruction sentences paraphrased by the fetch |
| **Uber / Pragmatic Engineer** (B3) | Ty Smith attribution · Chada toil quote and title · voluntary, peer-led, slower than expected | **All confirmed.** The parallel-agents quote *is* Ty Smith's, as printed |
| **Simon Willison** (A1, Bucket A) | session-opening ritual · "They're free now" · Redis/codebase-quality | **All three verbatim**, date and event confirmed |

**Attribution handling is notably careful and correct in four places that could easily have gone wrong:**
- **Boris Cherny's epigraph** is attributed to Cherny, quoted by Ronacher — exactly as `revision-sources.md` §7 requires, and against the common misattribution to Ronacher.
- **"the first human being to ever lay eyes on this code"** is correctly framed as a developer's line relayed by Osmani, not as Osmani's own.
- **QA Financial's Lloyds sentence** carries the pack's load-bearing caveat in the copy: *"Those are the outlet's words rather than the bank's"*, with Boteju and Storer explicitly presented as the outlet's paraphrase.
- **Figma's merge gate** and **Fung's kill-process permission** are paraphrased outside quotation marks rather than quoted, which is the right call where the pack's wording is a mechanism summary.

Roles, organisations and dates are correct throughout: Fung (Director of Engineering, Claude Code and Claude Cowork, Anthropic, 3 June) · Hashimoto (Vagrant/Terraform, now Ghostty) · Chada (Engineering Director, Uber) · Ty Smith (principal engineer, Uber) · Böckeler (leads AI-assisted delivery, Thoughtworks) · Willison · Osmani (engineering leader at Google) · Miller (assistant professor, George Washington University) · Wells (consultant, formerly BBC and Financial Times) · Ronacher (creator of Flask, formerly principal architect at Sentry) · Thawar (VP and head of engineering, Shopify) · Cramer (Sentry co-founder and CPO, 16 January) · Balint Orosz (founder, Craft Docs) · Reed (Priceline) · Gordon (Faros AI) · Storment (FinOps Foundation) · Embiricos (OpenAI) · Bishop (lead quality engineer, Lloyds).

## 2. No unverified figures — PASS

Every number printed in the rebuilt sections traces to a `revision-sources.md` verbatim block or to a `section-briefs.md` §0 verified figure. Checked individually: 93% · 5,600 / 8,700 / 10,952 · 79% and one-in-eight · 25,264 / 2,361 · 51% larger · 617 / 93.4% / 146 · 75.8% · $0.50 · 99 lines / 2,560 words / 68 precedents · 24% more merged PRs · $200 / $3,000 / $40,000 / $100-a-day · 120% carbon · 43% / 15% (Capgemini) · 44% / 43% (PagerDuty) · 1m+ agent PRs (Octoverse) · 33,596 / 40.2 / 79.4 / 41.7 / 19.8 / 0.5 / 4.3 (arXiv) · 820 / 73 / 44 / 29-point / 28% (Perforce) · 90 / 92 / 60 and the four blockers (Bessemer) · Lloyds June figures.

**Mechanism-only figures confirmed absent** (the writer's claim holds): the LeadDev secondary peer-effect odds (+54% / +216% / +82%), A7's "70% of projects / fewer than one in five contributors", Craft's "15–20 Linear issues to 100+" and "20–30 minutes to 2–3 minutes", Osmani's 679 combined findings and the four named review tools, Sentry's Abacus, the 116-task model-pairing experiment, and everything in the pack's unverifiable appendix (AutoScout24, Mike Mason, PagerDuty 2025, the withdrawn quotes).

**The original 11 drops are still out.** Gartner 0 · Capgemini 90/52/37 funnel 0 (43/15 printed) · McDonald's/Wired 0 (the single "Wired" hit is "wired by hand" in the MCP gloss) · PYMNTS 0 · Tessl 0 · DORA-Stanford 0 · Apple CVE id 0 · PagerDuty MTTR 0 · Lloyds £50m 0 · "first decline" 0 · no in-window JetBrains publication claim. Also still out: 3.3 h/wk, C# 58%, JavaScript 57%, the $161bn fragmentation tax, "AI efficiency paradox", and the "Output multiplied" epigram cut in the previous round.

## 3. Stat discipline after the move — PASS

Programmatic cross-section scan of 28 headline figures. Every apparent multi-section hit resolves to either a shorthand reference or a coincidental substring; **no stat carries full context in two sections.**

- Figures that moved out of the old S2/S5 are cleanly re-homed: Capgemini 43/15 and PagerDuty 44/43 sit only in the new S2; Perforce, Bessemer's use-case and blocker figures, and the Lloyds June numbers sit only in the new S5.
- Figures dropped rather than moved leave no orphans: Octoverse's 43.2m monthly merges, 4.3m repositories and the 80%-first-week line are gone entirely, and nothing elsewhere refers to them.
- Cloudflare, Figma, Böckeler and Uber each appear in both S2 and S5 with **different material and no shared figures** — practice in S2, build order and economics in S5.
- The old S2 "Code" paragraph that cross-referenced Bessemer's 92% and DX's merged-code finding is gone, which also resolves advisory A2 from the first review.
- Lessons references everything in shorthand — Osmani's reconstruction point, the LeadDev 79%, Figma's per-PR cost, Sentry's three barriers, visible peer use, the 56% pass rate, Bessemer's blockers, DORA's verification tax — with no figure re-introduced at full context. Counterpoint still carries **no new full-context stats**; its grid is unchanged at three shorthand metrics per column.

## 4. SVG F and the chart set — PASS

**SVG F, "Three published rollout sequences"** (S5). Data verified against the pack: Cloudflare eleven months / iMARS tiger team / platform → knowledge (AGENTS.md) → enforcement (AI review in CI) / 93% of R&D in the last 30 days; Craft Docs six months experimenting → internal wrapper Dec 2025 → two-week solo build → mandate Jan 2026; Sentry budget unlocked / IP restrictions relaxed / frontier tools opened / career expectation / ~half of engineering daily. All supported by B1, B4 and B5.

Magazine quality confirmed from the geometry: a three-row grid of four evenly spaced step boxes (x 96/234/372/510, width 118, 20px gutters), labels centred exactly on box centres (155/293/431/569), a 96px left label column, a 24px gutter before the outcome column at x=652, and every text baseline inside its box and inside the 350-unit viewBox. Palette uses the issue's own tokens. The chart shows three of the five rollouts and the chart note says so — an honest framing, not a contradiction of the "five rollouts" headline.

**The other five SVGs are byte-identical to the versions verified in earlier rounds** and remain data-accurate. **SVG C is now better supported than it was**: it sits inside S2's "Running several at once" and is introduced by a sentence that states exactly what it is evidence for — *"The evidence for why parallel work needs a team norm rather than an individual habit comes from a study of 33,596 agent-authored pull requests"* — with the mandated rarity caveat (0.5% / 4.3%) carried in both the SVG and the chart note.

## 5. Voice under the new framing — PASS

- **Third person held.** Every occurrence of "you", "your" or "you're" in the file sits inside verbatim quotation marks (Fung, Willison ×2, Ty Smith, Osmani, Wells, Thawar ×2, Reed, Embiricos). **Zero instances in the digest's own voice**; "the reader" returns 0.
- **Actionability is descriptive, not imperative.** The rebuilt sections carry their practical weight by reporting what named teams do — Willison's session-opening convention, Cloudflare's build order, Ramp's 48-hour clock, Figma's merge gate — rather than by instructing. No imperative sentence appears in the digest's voice in S2, S5, the verdict or the eight key takeaways.
- **Epistemic reframing: 1 clear instance**, matching the writer's claim, under the same structural standard applied in the first two review rounds — Counterpoint: *"The two columns are not in contradiction. They count different bands of the spectrum…"* Two nearest-misses now sit in revised copy and are flagged as advisories below. Under a stricter reading that counts compact negative characterisations, the total would reach 3; under the standard used consistently across this issue's reviews, it is 1 and inside the cap of 2.
- No corporate language; no action items; no rhetorical questions in the digest's voice (Embiricos's four questions are quoted speech).

## 6. Structure and arithmetic — PASS

- **Markers run 1 of 9 → 9 of 9 in document order**: Executive Summary 1, Sources 1–5 at 2–6, Counterpoint 7, Case Study 8, Lessons 9.
- **Reading-time arithmetic is exact.** The nine `.section-time` tags read 2+4+9+4+4+9+2+2+3 = **39**; plus the five unnumbered sections (foreword, How to Read, Meanwhile, Radar, Recommended Reading) the cover's **44 min read** and the deep path's **44 min** agree. The independent check corroborates it: 11,069 body words at ~250 wpm = 44 minutes. The middle path is internally consistent too — 2-minute path + Source 2 (9) + Source 3 (4) + Counterpoint (2) = **17**, exactly the figure printed.
- **How to Read paths are coherent** and name real destinations, with the 10-minute card correctly re-pointed at Source 2 for the practices.
- **Tag balance clean** across all 18 element types checked; single `<style>`, single `<script>`, and the only external asset is the Google Fonts stylesheet.
- **Template classes correct**: 5 rotating components (by-the-numbers ×1, article-with-sidebar ×2, comparison-grid ×1, timeline-box ×1, verdict-box + key-takeaway ×1) inside the 4–6 deep-dive budget, with jargon-watch off-cap and three inline `.pull-quote` blocks.
- **Jargon glosses present on first use** for every term the coordinator named and more: AGENTS.md (*"a plain-text file kept at the root of a repository that coding agents read before they begin work"*), MCP (*"the Model Context Protocol, a shared interface through which agents reach internal tools and data sources"*), evals (*"a fixed corpus of known cases, the practice teams now call evals"*), red-green (*"writing a failing test first and then making it pass"*), harness (Böckeler's own definition, quoted), LLM proxy, SAST, precision and recall (Figma's own definitions), plus the surviving Jargon Watch sidebar on the agent spectrum and the retained glosses for change failure rate, block duplication, error-masking, Cohen's d, DXI, TrueThroughput and stand-in processing.

## 7. Coherence pass — one gap (R-F2), otherwise PASS

- **Thread-forward handoffs work** at every boundary but one. S1 → *"what teams at the agent-mode rung actually do differently"*; S2 → *"Whether they show up in the outcome measures is the subject of the next section"*; S3 → *"What the extra output is made of is the subject of the next section"* (naming S4's headline exactly); S4 → *"Which organisations are paying more slowly, and in what order they built things, is the subject of the next section"*; S5 → the Counterpoint; Case study → the closing section. **The Counterpoint's close is the exception — see R-F2.**
- **Executive summary matches what the sections now contain.** Its list of Source 2's six practices maps one-to-one onto S2's six subheadings; Source 5 is described as *"five published rollouts side by side in the order each organisation took its decisions"*, which is what it is. Still index-not-preview, with no stat at full weight.
- **Cover and scope indicator were correctly re-cut for the new shape.** The old "5 — Lifecycle stages" is replaced by **16 Teams & practitioners · 19 Studies & datasets · 5 Rollouts traced · 1 Named bank rollout** — 16 matches the pack, 19 matches briefs §1.3, 5 matches the five rollouts in S5. The subtitle now previews the practitioner half accurately.
- **No orphaned references to cut material.** Spec Kit, Kiro, spec-driven development, vibe coding, synthetic test data, Socol and Tuckman all return **0 hits**; the sole Dynatrace mention is the unchanged Radar line, which stands on its own.
- **Meanwhile and On the Radar are byte-identical** to the previously cleared version, and Meanwhile still duplicates nothing in the body — Muse Code, the Agentic Payments Alliance, the Apple patch and the bank outages appear nowhere in the deep-dive sections.
- **Both binding adjacency flags still hold.** S5 now carries *two* Lloyds threads (the Glasgow programme and the June hiring release) and still makes no mention of the 18 August outage; Meanwhile makes no mention of either AI programme; the Monzo case study and the Monzo outage remain unconnected. No linkage, no implied causation, no cross-reference in either direction.
- **Foreword** is two paragraphs of **79 and 52 words** — both now inside the 50–80-per-paragraph reading, which clears residual R1 from the previous round — and its reference to the cover figure is shorthand, with no sample size or fielding period.

---

# FAILURES

### R-F1 · Quote fidelity · S2, "Slicing the work, and what happened to planning"
**Printed:** "**On the Claude Code team**, we wrote a pretty good six month roadmap, and then because of Claude Code, so many things changed that it was out of date by month three."
**Primary (claude.com, Fiona Fung, 3 June 2026):** "**When I first joined the Claude Code team**, we wrote a pretty good six month roadmap, and then _because_ of Claude Code, so many things changed that it was out of date by month three."
**Problem:** the opening clause has been rewritten inside the quotation marks. It is not a trim — five words are replaced by four different ones, and the substituted clause changes the claim from something Fung says about a specific moment (joining the team) into a general statement about the team. The defect originates in `revision-sources.md` §A6, whose verbatim block already carries the altered opening, and the HTML inherited it faithfully. This is the Issue 22 failure mode, and it is the reason the pack itself needed spot-checking.
**Fix (two options):** restore the source clause — "When I first joined the Claude Code team, we wrote a pretty good six month roadmap…" — or open the quote after it: *Fung describes what happened to the team's first roadmap:* "we wrote a pretty good six month roadmap, and then because of Claude Code, so many things changed that it was out of date by month three." **Also correct the block in `revision-sources.md` §A6**, so the error cannot be reused.

### R-F2 · Coherence · Counterpoint, closing paragraph
**Printed:** "Read that way, the six figures describe a sequence. Tools arrived at the speed at which a developer can install one. Autonomy, assurance and experience move at the speed at which a team can change how it verifies work — **which is exactly the spread the five rollouts in Source 5 are strung out along.**"
**Problem:** the section closes by pointing *back* at Source 5 rather than handing forward to the Monzo case study that follows. Every other section in the issue threads forward, and Stat Discipline rule 5 requires the close to hand a question or tension to the next section rather than repeat back. The sentence was reworded in this revision and still resolves backwards. (Disclosure: an equivalent backward close existed in the version cleared in the first review round; it was not flagged then, and is flagged now because the coordinator asked for the handoff chain to be re-checked after the rewrite.)
**Fix:** keep the backward clause and add the forward one, e.g. "…the spread the five rollouts in Source 5 are strung out along — and what that spread looks like from inside a single regulated engineering organisation is the subject of the case study."

---

# ADVISORIES — no fix required

- **A11 · SVG F's "~7 months" for Craft Docs is a derived span**, computed from the dated sequence in pack B4 rather than stated by the source. Correctly tilde-hedged, and every other figure in the chart is a source figure.
- **A12 · Craft Docs' "internal terminal wrapper built in December 2025"** — the confirming fetch rendered this as "December 2024" while stating in the same breath that the polished version was completed by 5 January 2026. December 2025 is the only coherent reading and matches the pack; recorded as a low-risk discrepancy worth one confirmation, not a finding.
- **A13 · S1's new locating sentence** says a squad with an agent open daily and a squad merging agent work unsupervised "are **four rungs apart**". On the five-rung ladder as drawn (95 / 90 / 55 / 28 / 11) those positions are three rungs apart; "four" only works if one counts the rungs spanned rather than the gaps. Consider "three rungs apart" or "at opposite ends of the ladder".
- **A14 · S4's Wells framing** — "**Asked whether** juniors can evaluate what an agent hands them, she said…" — asserts an interview question the LeadDev piece does not record. The pack annotates the quote only as "(Sarah Wells, on junior engineers)". "On whether juniors can evaluate what an agent hands them, Wells is blunt:" avoids the assumption.
- **A15 · "Comprehension debt" attributed to Thawar's worry.** Pack B2's mechanisms do say Thawar names it as the risk that worries him most, but the label appears in no verbatim block, and `section-briefs.md` §0.4 instructed that it not be put in his mouth. It is currently unquoted, so it reads as the digest's label for his stated concern — acceptable as written; the safest form is "a risk Bessemer's write-up calls comprehension debt".
- **A16 · Cloudflare's choke-point quote** ends "…Every feature described in **the bootstrap section below** exists because we had that single choke point." The referenced section exists in Cloudflare's post, not in the digest, so the phrase dangles for the reader. Trimming the quote at "…without touching any client configs" loses nothing.
- **A17 · Shopify's LLM-proxy quote** is still front-truncated from "**centralized** cost control, usage analytics…" without an ellipsis (advisory A5, carried).
- **A18 · Cramer "having not written code by hand in six months"** — the source says "more than six months". Paraphrase sits outside the quotation marks, so this is a slight understatement rather than a misquote.
- **A19 · Epistemic reframing nearest-misses**, both in revised copy: the Lessons verdict's "treated the scaffolding … **as the work, rather than as preparation for it**" and S5's "Cramer's posture is **neither a mandate nor a shrug**". Both are compact negative characterisations of the kind excluded from the count in earlier rounds; if either is rewritten, the count is unambiguous rather than merely defensible.
- **A20 · Pack typo, not printed:** `revision-sources.md` B1 gives the Cloudflare author as "Scott Roe-Meschke"; the post says "Scott Roemeschke". The issue names no individual Cloudflare authors, so nothing incorrect reaches the page.
- **A21 · Recommended Reading has grown from five items to eight** (~200 words) with the Willison, Böckeler and Osmani additions. No rule caps the list, and all three are pack sources whose descriptions are accurate; recorded for the log.

---

# COULD NOT VERIFY

1. **Osmani's two reconstruction sentences** (the S2 pull quote) and **Cramer's mid-passage wording** — both fetches paraphrased or elided rather than reproducing raw text, so those passages are *consistent with* the pack but not independently character-reconfirmed. The pack states it verified them against tag-stripped raw text.
2. **Figma's 75.8% lead-in clause** — the fetch rendered the sentence before "75.8% union catch rate" differently from the pack (a summariser splice); the load-bearing clause itself is verbatim-confirmed.
3. **David Cramer's title** (Sentry co-founder and chief product officer) is not stated on the gist itself and cannot be confirmed from that source; it is well established elsewhere.
4. **Craft Docs' terminal-wrapper month** — see A12.
5. **Harvard / SSRN** remains 403, unchanged; the issue still prints direction only and discloses the unreachability.
6. **Rendering** was assessed by reasoning from the markup (900px container, 780px content column, 780-unit viewBoxes, responsive breakpoint, SVG F geometry) rather than in a browser.

---

# FINAL VERDICT: **FAIL-WITH-FIXES**

Two failures, both narrow and both single-sentence edits: **R-F1**, a quote-fidelity defect in the Fung line that originates in the source pack and must be corrected in `revision-sources.md` as well as the HTML; and **R-F2**, a thread-forward gap at the Counterpoint close.

The rebuild is otherwise sound. Forty-four of forty-five new quotes match the pack exactly, seven of eight spot-fetched primaries confirm the pack is faithful, no unverified or mechanism-only figure reached the page, all eleven original drops stayed out, the stat-home discipline survived a substantial section move intact, the reading-time arithmetic is exact to the word count, the new SVG is accurate and well made, both binding adjacency flags held, and the attribution handling on the four highest-risk items — Cherny's epigraph, Osmani's relayed developer line, QA Financial's paraphrase of Lloyds, and Figma's mechanism summary — is better than the standard this issue has been held to so far.

*Phase 5 revision review complete. Re-check R-F1 and R-F2 only.*

## Revision fix-round (main loop, 21 Aug 2026)

- R-F1 FIXED: Fung quote opening restored to the source's "When I first joined the Claude Code team, we wrote…" in both issue-23.html and revision-sources.md §A6.
- R-F2 FIXED: Counterpoint close now hands forward to the Monzo case study instead of pointing back at Source 5.

Final verdict on the revised issue: PASS (two FAIL-WITH-FIXES items above resolved; all other checks clean per the revision-review section).
