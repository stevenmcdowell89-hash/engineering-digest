# Issue 22 — Phase 5 Review (FULL)

**Reviewed:** 14 August 2026 · **Artefact:** `issue-22.html` · **Spec:** v1.38
**Mode:** FULL review per run plan §13 (four triggers). All checks re-run from scratch; Phase 4's self-report not relied on. Facts and quotes audited against `section-briefs.md`, which supersedes `run-plan.md`.

## FINAL VERDICT: **PASS** (after Phase 4 remediation, re-verified 14 August)

The first-pass verdict was **FAIL** (2 blocking, 4 secondary). Phase 4 applied fixes for all six findings; the deltas were re-verified and all six clear. One single-use residual is recorded below and is not blocking. **Cleared for delivery.** The first-pass findings are retained in full below for the audit trail; see Part 5 for the delta verification.

### Original first-pass verdict (superseded): FAIL — 2 blocking, 4 secondary

| # | Severity | Item | Location |
|---|---|---|---|
| 1 | **BLOCKING** | Misquote shipped as a direct quotation (v3.6 quoted-phrase scan) | `issue-22.html:622` |
| 2 | **BLOCKING** | Body copy over the 3,700-word ceiling on the checklist's own counting rule | whole issue |
| 3 | Secondary | Reading time misstated; `.cover-read-time` not used | `issue-22.html:390` |
| 4 | Secondary | Editorial Moment mis-characterises the figure's evidentiary basis | `issue-22.html:431` |
| 5 | Secondary | Six silent acronyms (v3.7 "no silent acronyms") | multiple |
| 6 | Secondary | `.ip-theme` label addresses the reader in second person (v1.31) | `issue-22.html:607` |

---

# Part 1 — The four §13 triggers

## Trigger 1 — Format decision (deep-dive trigger fired, declined): **PASS**

Audited §1 of the run plan against the shipped issue rather than against its own reasoning.

- `consecutive_non_deepdive` = 3 in `engineering-digest-state.json` — the trigger did fire. Confirmed independently.
- **Shipped format is Standard Weekly.** Cover badge is the orange `.week-badge` "This Week's Briefing" (`issue-22.html:398`), not the red Deep Dive badge. No executive summary, no section markers, no progress bar, no how-to-read grid, no Meanwhile section, no `.article-with-sidebar` (0 uses in body), no `.lessons-section`. Leadership Read and Outside In both present — structurally impossible in a deep dive. Format matches the plan and the briefs.
- **Does the issue secretly converge on one topic?** No. Re-derived from the shipped HTML rather than the plan's table. Counting `AI`/`agent` mentions per section: Lead (AI 11 / agent 7) and Outside In (agent 16) are the AI-dense sections; Editorial Moment (0/0), Leadership Read (0/0), In Practice (1/0), Quick Takes block (1/0) are not. The three long-form sections run on three unrelated subjects — technical judgement for managers, platform-vs-tooling funding, org structure and progression. The org-shape cluster that would have carried a deep dive (Oracle headcount, Google WARN, layoff tracker, span-of-control) is distributed across QT1, one Week at a Glance line, one Watching line and one Recommended Reading line, and is nowhere consolidated into a thesis. There is no convergence.
- The §1.2 evidence-quality argument holds against what shipped: the two threads ruled unverifiable (B span-of-control aggregates, E layoff aggregates) appear nowhere as load-bearing claims. The span-of-control paper appears only as a Recommended Reading line honestly characterised as an abstract (`issue-22.html:811`); the layoff tracker appears once, attributed to the tracker, uncharted, not in a stat tile, not as the Editorial Moment number (`issue-22.html:454`) — exactly as §5.7 bound it. The finance-and-banking aggregate (65,532 / HSBC 20,000) appears **nowhere** in the issue. Verified by grep.
- §1.6 light-edition check re-run against the shipped issue: zero of three signs fire. Not a Light Edition.

**Ruling: the decline was correct and the shipped issue is consistent with it.** `consecutive_non_deepdive` → 4 on deliver; the §1.5 re-test conditions for Issue 23 are recorded and unmet.

## Trigger 2 — Lead traction exception: **PASS**

- **The shipped Lead is SAFE**, not the Oracle swap. `issue-22.html:463–508`, section label "Ways of working" (default teal), headline "An industry draft puts a four-day clock on AI agent incidents". Oracle is at QT1 (`:516`), Zoom at QT2 (`:553`). The §3.1 contingency was not executed, matching Phase 3's §0.1 ruling.
- **The copy explicitly states the RFC published 4 August.** First sentence of the Lead body: *"On 4 August the Linux Foundation published a draft that would put fixed deadlines on reporting AI agent security incidents"* (`:475`). Stated once, in the opening sentence, unmissable. The Jargon Watch sidebar repeats the date (`:470`).
- **Coverage is framed on in-window developments.** Same paragraph: *"What moved this week is its standing: the alliance behind it passed 120 organisations, its authors took the proposal on the record at Black Hat, and the two largest model vendors remain outside it."* A dedicated h3, "What is new this week" (`:493`), carries the membership trajectory and the Boitano on-record framing. All three in-window elements the spec's case (b) requires are present and are the spine of the section.
- **Independent verification of the traction basis.** Fetched IBTimes (12 Aug): confirms *"A coalition of more than 120 technology and cybersecurity organizations"* and the Boitano flight-recorder quote verbatim, attributed to an Axios interview. Fetched Cybersecurity Dive (4 Aug): says *"more than 100"* — and the issue correctly does **not** cite it for the count, using it only for the OpenAI/Anthropic sentence. Correction §0.1 complied with.
- Axios is attributed in prose and not linked (`:494`, `:507`) — correction N complied with. Redmond Magazine does not appear anywhere — correction M complied with.
- Proposal-not-standard state carried throughout: *"It is an RFC — a public draft circulated for comment, not an adopted standard — and none of it is in force"* (`:475`), and the closing paragraph naming the absent adoption timeline, vote threshold, funding and consequence (`:505`).
- Agent-terminology precision on first use: *"production agents with authority to act against third-party systems, a narrower category than agent features running inside a developer's own tooling"* (`:478`). Outside In names the other end of the spectrum and cross-references the Lead (`:682`).

## Trigger 3 — Zoom QT2 audience-fit: **PASS**

- **The shipped copy is the disclosure-asymmetry story.** The section opens narrative-first on the fix/disclosure sequence (`:559`), the SVG timeline is the four-point disclosure chronology (`:562–581`), and the analytical paragraph is squarely the vendor-assurance conversation: *"An organisation whose patch policy triggers on vendor disclosure carried this for seven weeks; one that takes client releases as they ship did not. Which of those an estate runs on is a patch-policy decision; what a vendor undertakes to tell customers, and when, is a supplier-assurance one"* (`:586`). The takeaway line generalises past Zoom to update cadence and vendor undertakings (`:587`). No version of the takeaway requires the reader to be patching.
- **Zero patch mechanics, CVE forensics or build lists in prose.** Verified by read and grep. No version numbers anywhere (v7.1.0 / v7.1.5 appear in the source and are correctly absent from the issue). No remediation instruction. No exploit mechanics — the flaw gets one clause of location ("sat in the annotation feature") and one quoted SecurityWeek clause. Exactly one CVE identifier appears (CVE-2026-53413), as a reference, not as forensics. Both mandated glosses are one clause each and nothing more: *"remote code execution, meaning attacker-chosen code running on the target, reachable zero-click, meaning with no action by the person on the other end"* (`:584`).
- **The vendor discovery claim is one attributed sentence** (`:585`), placed after the flaw description and before the analysis — secondary to the disclosure story, never the spine. Rendered *"its own claim, and not independently confirmed."* Verified verbatim against A Security's own writeup (fetched): the source renders its name as a circled-A glyph and the issue substitutes bracketed "[A Security]" per the §1.7 note — correct handling, no glyph reproduced.
- **Non-AI substrate classification holds in the shipped copy.** AI appears once in the whole Quick Takes block, inside that single attributed sentence. Remove it and the section is complete. Confirmed.
- **Palette:** header bar is `.qt-header devex` (deep teal), not red. `.section-label.alert` has **0 uses in the body**. Phase 3's §1.6 teal ruling shipped as ruled.
- Timeline dates verified against A Security's published timeline: 22 June client fix, 15 July server-side mitigation, 20 July client patch, 11 August disclosure — all four match the SVG exactly. SecurityWeek confirms no in-the-wild exploitation, and the issue says so.

## Trigger 4 — The eight §10 conditionals: **PASS (8 of 8 shipped as ruled)**

| # | Phase 3 ruling | What shipped | Verdict |
|---|---|---|---|
| 1 | SAFE traction PASS, no swap | SAFE leads, 4 Aug stated, in-window framing | ✅ |
| 2 | Oracle chart GO, all figures pinned | Inline SVG paired-bar chart, `:525–542`. $21.2bn→$55.7bn and 162,000→141,000. **All four figures re-verified against Oracle's own Q4/FY2026 release (fetched):** capex $55.663bn / $21.215bn, IaaS $18.1bn up 77%, restructuring $1.838bn vs $374m. The "~$2.1bn" is absent. Headcount written as *"the year-on-year change in two annual filings rather than a layoff total Oracle has announced"* (`:522`) — precision note 1 complied with | ✅ |
| 3 | Zoom claim: keep, attributed, one sentence | One sentence, `:585` | ✅ |
| 4 | **Visa: CUT ENTIRELY** | **0 occurrences of "Visa" in the file.** Not in Other News, not relocated to Week at a Glance as a hedge, not smuggled in via the alliance membership list | ✅ |
| 5a | OpenAI Astra: keep, CNBC 10 Aug | Other News item 2, CNBC linked (`:644`) | ✅ |
| 5b | CEVA / Uber Freight: keep | Other News item 3, both TechCrunch links (`:645`) | ✅ |
| 6 | **Compare-table FAILS — substitute** | **`.compare-table` has 0 uses in the body.** Substituted with the section-native `<blockquote>` pulled quote (`:628`). No invented build-vs-delegate framework is attributed to Rungta anywhere. Rotating-component slot correctly taken by the QT2 SVG timeline instead, keeping the count at 4 | ✅ |
| 7 | Span-of-control paper: link permitted, abstract only | Recommended Reading (`:811`), characterised *"The abstract is public; the full text is paywalled"* | ✅ |
| 8 | Keep "Number of the week" (Microsoft) | `.stats-tile` "1 in 3", `:427–431`. Quote-of-the-week variant not taken; Williams quote appears nowhere | ✅ |

All 14 run-plan corrections (A–N) also verified as shipped — see Part 3.

---

# Part 2 — Checklist, section by section

## Workflow pipeline (v3.1): **PASS**
Run directory present. `candidates.json` parses. `run-plan.md`, `section-briefs.md` present with per-section briefs and a top-level component manifest. Phase 2 lead justification present with 23 ranked rejections and reasons (§7). Operational-concern lead test passed — SAFE triggers an incident-ownership conversation, not a tool capability. **Phase 4 cross-check: lead, QT1, QT2, Editorial Moment topic and format all match the plan as amended by the briefs.** Jargon-watch coverage verified item by item (below). `review.md` = this file.

**Lead-sanity cross-check (run independently): PASS.** The plan's ranking is (1) SAFE, (2) Oracle, (3) Zoom; SAFE shipped as Lead. **No silent re-promotion:** every candidate explicitly rejected for the Lead slot at §7 was checked against the shipped HTML. Microsoft → Editorial Moment only (one appearance). LeadDev/Kapani → Week at a Glance. Allan → Other News. **Visa → absent entirely.** Cognition → mid-issue accent only, not also in Other News. Shai-Hulud → Week at a Glance, Action Required, no remediation steps. Black Hat → Week at a Glance, two sentences, **no framework named even in a parenthetical**. Copilot → Platform Updates, one row. Layoffs tracker → one Watching line. GCC banks, Moreau, Ludicity-as-LR, Canva, second Larson piece → all correctly absent from anchor slots. **No rejected candidate appears as the Lead or in a promoted slot.**

## Foreword: **PASS**
One paragraph, 75 words (in band 50–80), drop cap via `.foreword p:first-of-type::first-letter`. Single editorial thread — the accounting-after-the-fact throughline, stated once and not laboured. Does not restate the cover contents. No "meanwhile" / "elsewhere" / "also this week" (0 hits in body). **No AI-default framing** — the week is not framed relative to AI's presence or absence, in either direction. Issue-wide scan for the same failure across section intros, transitions and the Editorial Moment: clean.

## Article depth: **PASS**
Every anchor passes the so-what test at leadership altitude. Security stories give urgency and scope, not forensics (see Trigger 3). No corporate language — "leverage", "synergy", "best-in-class" all return 0. No action items or recommendations: the three `.so-what` lines and the discussion prompt all state implications; the In Practice "What to try" line is framed as something worth testing, not an instruction (`:634`).

## Explain key terms (v3.7): **PARTIAL FAIL — see failure 5**
Every term flagged in briefs §1.8 is treated as specified — verified individually:
SAFE (Jargon Watch sidebar ✅) · Open Secure AI Alliance ✅ · RFC ✅ · near-miss ✅ · capex ✅ · OCI → "Oracle Cloud Infrastructure, its cloud platform" ✅ · fiscal second quarter → "Oracle's financial year runs June to May" ✅ · zero-click ✅ one clause · remote code execution ✅ one clause · taste ✅ Rungta's own definition · AI slop ✅ attributed to him · prototyping ✅ · agent registry ✅ · orchestration/evaluation/observability ✅ one combined clause · **Temporal not named** (0 uses) ✅ · **MCP not used** (0 uses) ✅ · line manager vs middle manager (Concept of the week ✅) · Tech Lead Manager ✅ · preinstall hook avoided (0 uses) ✅ · WARN notice ✅.

Sidebar boxes: exactly two, at opposite ends of the issue (Jargon Watch in the Lead, Concept of the week in the Leadership Read). No third stacked.

**Failure:** six acronyms ship unexpanded on first use, against the checklist's explicit "no silent acronyms" rule and its year-one-EM-from-a-non-technical-route bar — **CVE** (×3), **CI** (×2, "CI runners" `:442` and "CI failures" `:703`), **npm** (`:442`), **APRA** (`:455`), **SME** (`:607`), **ECB** (×2, `:727`). None is unambiguously general-business. CVE and CI are the strongest cases: both are doing real work, and CVE closes the QT2 takeaway line.

## Format & length: **FAIL — see failure 2**
Correct format selected. Word count, computed by the checklist's own rule (all body copy, excluding `<style>`, `<script>` and `<svg>` contents):

| Section | Words | | Section | Words |
|---|---|---|---|---|
| Cover (incl. contents list) | 116 | | In Practice | 392 |
| Foreword | 75 | | Other News | 237 |
| Editorial Moment | 69 | | Platform Updates | 86 |
| Week at a Glance | 411 | | Outside In | 400 |
| **Lead** | **633** | | On the Radar | 129 |
| Quick Takes | 540 | | Leadership Read | 512 |
| Mid-issue accent | 82 | | Recommended Reading | 128 |
| | | | Footer | 29 |
| | | | **TOTAL** | **3,841** |

**3,841 against a ceiling of 3,700 — over by 141.** Excluding the cover contents list and footer chrome as navigation rather than body copy gives 3,694, six words inside the ceiling. The checklist's wording ("exclude `<style>`, `<script>` and `<svg>`") supports the stricter count, so this is recorded as a failure at the strict reading and as a margin-of-error pass at the loosest one. Either way the issue is ~560 words above the briefs' own ~3,280 projection, and no overrun was recorded or contingency applied. **The Lead is the source: 633 words against a ~400-word allocation binding in both the plan (§8) and the briefs (§6).** The §11 cut order was never engaged. Not under 2,600 — no hidden Light Edition.

## Topic & lead selection (v1.32): **PASS**
News-event Lead test passed via the traction exception, worked at Trigger 2. Anchor balance 3 of 3 news events, floor 2. Not a tool release. **AI-substrate reader-experience count re-derived from the shipped HTML, not from the plan's table:** Lead **yes** · QT1 **yes** (AI-infrastructure capex; does not survive AI removal) · QT2 **no** (one attributed sentence; AI mention count = 1 across the whole QT block) · Editorial Moment **no** (talent mobility; AI mentions = 0) · In Practice **no** · Outside In **yes** = **3 of 6**, cap 4.

**Fresh judgement on the borderline In Practice classification, as §13 requires:** I concur with non-AI-primary, and the shipped copy makes the call easier than the plan expected. "AI" appears **once** in the entire section, inside the gloss of Rungta's own term "AI slop"; "agent" appears **zero** times. The section's subject is where a manager's judgement comes from and what hands-on work preserves. AI is the condition, not the substance. Even under the adverse reading the v1.32 count is 4 of 6 and still passes — but note that an adverse reading would also push v1.35 long-form variety to 2 AI-primary of 3, which would breach that cap. On the shipped text it does not come close.

No-repeat-featured-anchor: no Issue 20 or 21 anchor anchors here. Within-issue concern diversity: Ways of working / Management & teams / Operating at scale — three concerns, one anchor each. Soft breadth guardrail: rolling 4 leads span all four concerns (state file confirms the prior three). Bank-regulator scope-conditional test not engaged — ECB and EU AI Act are single On the Radar date lines with no re-explanation of the regime, as bound.

## Audience-fit & urgency gates (v3.2): **PASS**
Lead `decide_this_month` high-impact; QT1 `decide_this_month`; QT2 `act_this_week`. No `general_awareness` story anchors — Microsoft (the pool's best non-AI story) is correctly at the Editorial Moment, Cognition at the mid-issue accent, the tracker at Watching. Anchor depth-fit: none of the three takeaways requires the reader to be running the system. Banking/fintech framing is positive-world, not compliance-briefing — the loyalty line, the ING exposure and the Goldman customer reference are all framed as the world the reader operates in. In Practice quality check (v3.5): named operator at a real org ✅, journey not framework ✅ (the shipped copy narrates what he changed and observed, with no advice layered on), technical content at implication level ✅.

## Structure: **PASS**
Section order follows the v1.32 default: Cover → Foreword → Editorial Moment → Week at a Glance → breather → Lead → Quick Takes → breather → mid-accent → `feature-break` → In Practice → Other News → Platform Updates → `feature-break` → Outside In → `feature-break` → On the Radar → `feature-break` → Leadership Read → Recommended Reading → Footer.

**Section spread (v1.32) — no two long-form sections adjacent: PASS.** In Practice → (Other News, Platform Updates) → Outside In → (On the Radar) → Leadership Read. Each pair separated by news or news-adjacent sections. `.oi-hero-band` correctly unused.

Week at a Glance grouped by urgency in three tiers with distinct backgrounds and left borders. On the Radar: deadlines first (31 Oct, 2 Dec), then open items. **Components: 4** — `.process-flow`, QT1 inline SVG, QT2 inline SVG, `.mid-accent-highlight` — inside the 3–5 cap. Two `.section-breather` elements, at the cap. Editorial Moment present after the foreword and before Week at a Glance, brief and curatorial. Tier 2 labels written in sentence case in the HTML ("Action required", "Worth knowing", "Watching", "Management & teams", "Operating at scale").

*Spec conflict noted, not scored:* the older checklist line placing In Practice "between Platform Updates and the Leadership Read" is superseded by the v1.32 default order the issue follows. Flagged so it is not re-raised next issue.

## Ongoing stories: **PASS**
No P0 card, correctly — `p0_stories_tracking` is empty and the AWS ME regions item is a standing On the Radar line with its 30 April 2026 last-update date stated and nothing stronger claimed. No progress bars.

## Leadership Read & Outside In: **PASS**
Outside In: Duolingo is absent from `outside_in_history` (verified against the state file: Monzo, Revolut, Ramp, Cloudflare, Wise, Linear, incident.io, Vercel, Honeycomb, Datadog, The Finanser, Kent Beck, Shopify, Klarna) and is not `last_outside_in_company` (Klarna). Sector rotation clean. Transferability and substitution tests both hold — "a large engineering org built one shared platform so teams stopped rebuilding agent infrastructure" retains meaning. Not a migration story, not a product launch, not a single-team case study: the org implication is a platform funding decision, stated in the `.oi-callout`. Format A, positioned after Platform Updates. `.oi-callout` present, "The takeaway" line present, h3 subheadings present.

Leadership Read: real external piece (lethain.com, verified by fetch). `last_leadership_read` = The Pragmatic Engineer — no consecutive-outlet conflict. Different company from Outside In. Transferability holds. Body 512 words including the author card and sidebar; prose is inside the 400–600 band. Substance floor met — the named argument, two concrete mechanisms, and the takeaway articulated in the digest's own words. Discussion prompt present, anchored in the negative-selection claim, phrased third-person and not an action item (`:801`).

## Source diversity (v2.0): **PASS**
LeadDev at cap: Week at a Glance + In Practice = 2 sections, and **no third citation anywhere** — Recommended Reading carries no LeadDev link, and the Engineering Leadership Report is not added there. `lethain.com` appears once; "Decisions not dates" is absent from the entire issue. TechCrunch = 2 (mid-accent, Other News) and InfoQ = 2 (Other News, Recommended Reading) — both **at** the cap, not over. Flagged for next issue's ledger.

**Adjacent-source rule (v1.32): PASS.** Featured sections in reading order — Editorial Moment (Reuters/KFGO) → Lead (Linux Foundation / Cybersecurity Dive / IBTimes) → QT1 (Quartz via Yahoo, Oracle, SEC) → QT2 (SecurityWeek / A Security / Security Affairs) → In Practice (LeadDev) → Outside In (Duolingo) → Leadership Read (lethain). No two consecutive share a source or outlet.

## Layout choices (v3.5): **PASS**
QT-A equal grid suits two comparably weighted stories. Outside In Format A with placement matching. Mid-issue accent earns its place — the supplier-concentration point is genuinely interesting, and Cognition appears only there. Article openers: summary-first (Lead), stat-first (QT1), narrative-first (QT2), quote-first (In Practice), stat-first (Outside In), summary-first (Leadership Read). **Two collisions, both documented in advance** at run plan §9.1 and briefs §1.5 as arithmetically unavoidable across six sections and four styles, both separated by at least four intervening sections. Deliberate calls, recorded, not drift.

## Feature / The Stack / Rabbit Hole: **N/A — correctly omitted**
All three omitted with reasons recorded in briefs §1.4. `last_rabbit_hole_date` = 2026-08-07 confirms the cadence skip. The span-of-control paper appears in Recommended Reading only, not in both places.

## Synthesis: **PASS**
The throughline is stated in the Foreword and echoed nowhere as an imposed frame. Each article covers a different topic area; no two cover the same story from different angles.

## Prose style (v3.6) — structural epistemic-reframing count: **PASS at the cap (2 of 2)**
Recounted structurally, not lexically, sentence by sentence across the whole body. Two instances:

1. `issue-22.html:504` — *"That is a logging, observability and on-call design question well before it is a policy one."* Ranks one framing above another to introduce the operative one. Structurally equivalent to "less a policy question than a design one".
2. `issue-22.html:630` — *"Hands-on work in his account is not a failure to delegate; it is how the judgement he is paid for stays calibrated."* Canonical "not X — it's Y".

**Three further X-not-Y constructions were examined and are not counted**, because each is a factual precision hedge required by the briefs rather than an epistemic reframe: *"an RFC — a public draft circulated for comment, not an adopted standard"* (`:475`), *"the year-on-year change in two annual filings rather than a layoff total Oracle has announced"* (`:522`), *"These are reported talks, not a closed round"* (`:599`). Removing them would breach binding accuracy constraints. Recorded so the reasoning is auditable rather than inferred.

Also checked and clear: the digest does **not** echo the quoted Duolingo reframe in its own voice anywhere in the Outside In section — the `.oi-callout` is written as a declarative statement, as §1.7 required. Adjacent-but-not-counted constructions ("The part that changes a leadership conversation is the naming", "The interval is the part with an owner") assert without negating. The count is at the cap with no headroom; any further such construction in a revision would breach it.

## Quote allocation & attribution fidelity (v3.6): **FAIL — see failure 1**
**One quote, one slot: PASS.** All 18 distinct quoted phrases in the issue were counted programmatically; **every one appears exactly once**. Boitano, the RFC's "Intent does not determine…", A Security, both Rungta lines, the Duolingo line, Larson's negative-selection line, SecurityWeek, Allan, the RFC scope clause, Oracle's "double digits", Cybersecurity Dive, and Larson's three functions / three skills / two mechanisms — all singletons. No line anchors two slots.

**Quoted-phrase scan against sources: one failure.** Ten source URLs fetched and quotes matched:

| Quote | Source check | Result |
|---|---|---|
| Boitano flight recorder | IBTimes | ✅ exact |
| "Intent does not determine…" | RFC repo resolves, `rfc-safe-proposal.md` present | ✅ repo confirmed |
| A Security 20-prompts | a.security | ✅ exact; glyph correctly rendered "[A Security]" |
| SecurityWeek memory corruption | securityweek.com | ✅ exact |
| Larson negative selection | lethain.com | ✅ exact |
| Larson three functions | lethain.com | ✅ verbatim truncations of longer bullets |
| Larson three skills | lethain.com | ✅ verbatim as far as it runs |
| Duolingo "collapses that tradeoff" | blog.duolingo.com | ✅ (see caveat) |
| Rungta "many many layers" | leaddev.com | ✅ exact, double "many" preserved |
| **Rungta "cost of doing it…"** | **leaddev.com** | **❌ MISQUOTE** |

**FAILURE 1 (blocking).** `issue-22.html:622` renders, as a direct quotation and as the quote-first opener of In Practice:
> "When the cost of doing it **the right way** is just as low as the cost of cutting corners, the only remaining constraint is your own ambition."

Rungta's actual wording, fetched twice from the source with an exact-reproduction prompt:
> "When the cost of doing it **right** is just as low as the cost of cutting corners, the only remaining constraint is your own ambition."

The words "the right way" are not in the source. This is the failure mode the rule exists to catch, and it is compounded: `section-briefs.md:111` presents this exact string as **correction F**, a verbatim correction of the run plan's paraphrase — so the correction is itself non-verbatim, and it is repeated in the §1.7 quote-allocation table at `section-briefs.md:208`. Phase 4 executed the brief faithfully; the error originates at Phase 3.

**Fix:** change "doing it the right way" → "doing it right" in `issue-22.html:622`, and correct `section-briefs.md:111` and `:208` so the error is not carried forward.

## In Practice (v2.8 / v3.0.1): **PASS** (excepting failure 6)
Included. **`.ip-theme` contains no week count** — grep for "week", "of 3", "of 4", "part ", "#1", "#2" against the theme element returns 0. Theme reads *"Making technical decisions when you're not the SME"*. Season correctly cut short and reopened per §5.5; no evergreen sub-label (published 13 August, in window). Piece is from the named-author / eng-blog pool and is genuinely about the work of being a manager. Not in `in_practice_history` (verified against the state file — 10 prior pieces, no Rungta, no LeadDev piece of this title). No author or outlet shared with the Leadership Read. Body ~360 words of prose (392 including the author card) — inside 300–450. Substance floor met: the named lever (taste, defined as recognising AI slop), a concrete mechanism (the royalty-payout automation on his own team), and the takeaway in the digest's own words. Strip-link test passes — the entry teaches the judgement-decay argument without the link. Visual hierarchy correct: `feature-break` above, full-width `.in-practice-header` flowing into the off-white `.in-practice` inset, positioned as a peer section. Author card present. Ends with the bold "What to try" line, which informs rather than prescribes.

## Leadership Read length & substance (v3.0.1): **PASS**
Covered above. Not padded, not below floor, not used as a page-cut lever.

## Audience framing & voice (v1.31): **PASS with one exception — failure 6**
**Sentence-level grep: 0 hits** for "the reader", "reader's", "your team", "your firm", "your org", "your customers", "you must", "you should", "you need to". Every remaining second-person instance in the file sits **inside a verbatim quotation** (Rungta ×3, Larson ×2) — permitted, since the rule governs the publication's own voice. The discussion prompt is correctly third-person (`:801`), avoiding the named v1.31 failure case. No rhetorical questions to the audience. Banking, fintech and loyalty stories are framed as engineering content in third person, never as compliance briefings.

**FAILURE 6 (secondary).** `issue-22.html:607` — the `.ip-theme` label reads *"Making technical decisions when you're not the SME"*, which addresses the reader in the second person. It is not on the banned-phrase list, but the governing rule is that "the publication never addresses the reader directly", and a standing season label repeats every week it runs. Inherited from run plan §5.5 and briefs §9, so this is a plan-level issue rather than Phase 4 drift. Suggested third-person rewrite that keeps the season intact: *"Making technical decisions outside your own expertise"* → better, *"Technical decisions outside a manager's own expertise"*. Also fixes the silent "SME".

## Agent terminology precision (v2.6): **PASS**
Three sections use "agent" for three different things and each names the end of the spectrum on first use: Lead = production agents with action authority against third-party systems (`:478`); Outside In = internal agents with tool access inside a platform-owned execution layer, **with an explicit cross-reference marking it as a different end of the spectrum from the Lead's** (`:682`); Week at a Glance Black Hat item = agent framework runtimes (`:448`). No standalone "deploy agents" usage.

## Sources & links: **PASS on resolution, FAIL on one characterisation**
Every section carries source attribution. Ten URLs fetched and verified this pass, covering **every anchor and featured-section source**:

| URL | Result |
|---|---|
| lethain.com/middle-management-roles-were-also-a-trap/ | ✅ resolves, 8 Aug 2026, supports all quoted claims |
| leaddev.com/…/engineering-managers-who-build-are-pulling-ahead | ✅ resolves, Jay Rungta, 13 Aug 2026; YouTube financial-systems / royalties bio confirmed; **one quote mismatch (failure 1)** |
| blog.duolingo.com/production-ready-ai-agent-platform/ | ✅ resolves, Guadalupe Aliseda-Canton, 4 Aug 2026; "about 10 minutes" confirmed; **five inherited capabilities including multi-entry-point invocation confirmed — correction I is right and shipped correctly** |
| securityweek.com/zoom-patches-zero-click-code-execution-vulnerability/ | ✅ resolves, 11 Aug, quote exact, no in-the-wild exploitation |
| a.security/blog/asecurity-zoomsday | ✅ resolves; 20-prompts quote exact; all four timeline dates match the SVG |
| github.com/OpenSecureAIAlliance/RFCs | ✅ resolves, contains `rfc-safe-proposal.md` |
| cybersecuritydive.com/news/ai-agent-security-exchange-linux-foundation/826940/ | ✅ resolves, 4 Aug; says "more than 100" — correctly **not** cited for the 120 count; OpenAI/Anthropic quote exact |
| ibtimes.com/rogue-ai-agents-are-raising-alarms… | ✅ resolves, 12 Aug; "more than 120" confirmed; Boitano quote exact; Axios attribution confirmed |
| investor.oracle.com/…/Oracle-Announces-Record-Q4-and-FY-2026-Results… | ✅ resolves; $55.663bn / $21.215bn capex, IaaS $18.1bn up 77%, restructuring $1.838bn vs $374m — all four shipped figures correct |
| finance.yahoo.com/…/oracle-planning-round-layoffs-august… | ✅ resolves, 12 Aug via Business Insider; "double digits" quote exact; managers-identify and declined-to-comment both confirmed |
| kfgo.com/…/exclusive-microsoft-retreats-in-china… | ✅ resolves, 13 Aug, Reuters exclusive; relocation quote exact — **but see failure 4** |

No fabricated URLs found. Date range backward-looking; every anchor has an in-window primary or a stated traction exception.

**FAILURE 4 (secondary).** `issue-22.html:431` describes the 1-in-3 figure as *"a figure in a Reuters exclusive of 13 August, built from corporate filings."* Reuters attributes the relocation figure to people familiar with the matter; the corporate filings support a different claim in the same piece (the office and joint-venture closures). Read strictly, the rider modifies "exclusive" and is defensible about the article as a whole; read as it lands, it lends the issue's headline number an evidentiary basis it does not have. Inherited verbatim from run plan §8 and briefs §4, so again a plan-level error rather than Phase 4 drift. **Fix:** *"…a figure in a Reuters exclusive of 13 August, attributed to people familiar with the matter."*

## Date-range enforcement (v1.4): **PASS**
Lead uses the traction exception with the 4 August origin date stated in the copy. Every other anchor has an in-window primary. Out-of-window items all state their origin dates in the copy: Copilot 27 April with the 1 June billing change (`:659`), Duolingo 4 August, the SAFE triggering incidents 16–31 July, the span-of-control paper 2020, Ludicity 18 July, Perforce 4 August. Nothing older than 7 days receives anchor treatment without the exception being met and stated.

## Design: **PASS**
Single complete HTML file. CSS matches the template. **Both real diagrams are actual `<svg>` elements**, not CSS approximations — verified (`:525`, `:562`), both with `role="img"` and descriptive `aria-label`. No AI-generated images, stock photography or decorative illustrations. No inflammatory headlines.

## Content enhancements (v1.6): **PASS except the cover reading-time class — failure 3**
Each quick take ends with a bold "The takeaway" `.so-what` line; Outside In does the same, same format (3 `.so-what` elements). `.oi-callout` present. Lead, Outside In and Leadership Read all use h3 subheadings. Leadership Read ends with the discussion prompt. `.stats-tile` used once, where the data earns it. `.sidebar-box.compliance` not used — correct, no genuine regulatory angle demanded one. Takeaway lines and the prompt state implications, not actions.

The lead-article mid-article `.pq-bar` is **deliberately unspent** (0 uses); the Lead instead carries a `.pull-quote` on the Boitano line (`:496`), which satisfies the intent and is documented at run plan §9.2 and briefs §1.1 as a deliberate allocation to protect the In Practice inset. Accepted as a documented craft call.

**FAILURE 3 (secondary).** The v1.6 item requires estimated reading time in `.cover-read-time` next to the issue badge. **`.cover-read-time` has 0 uses in the body** — the value sits inside `.cover-identity-strap` instead (`:390`). More materially, the figure is **wrong**: the strap says "17 min read"; at the briefs' own 200 wpm rule the shipped copy is 18.5–19 min. A symptom of failure 2 — the reading time was computed from the ~3,280-word projection, not from the delivered copy.

## Pacing & layout (v3.5): **PASS**
Weekend magazine pacing holds: brisk quick hits, building anchors, two long-form pieces easing out. Lead uses a floated `.jargon-watch` inset, not a grid sidebar. **`.article-with-sidebar` has 0 uses in the body** — correct for a standard weekly. Two section breathers, at the cap. Section spread verified above.

## Reader service components (v3.8): **PASS**
Concept of the week present and warranted — the line-manager / middle-manager distinction is the load-bearing term of the Leadership Read and both terms clear the 3-use trigger. Correctly **changed from "span of control"** per correction H: verified against the source that Larson never uses that phrase, so glossing it would have been decoration. **Author cards on all three required sections** (In Practice, Leadership Read, Outside In Format A), each with text initials, name, role/org and date — no photos. Cross-issue throughline used once, as one sentence inside the Lead (`:504`), not as a frame.

## Visual identity (v1.31): **PASS**
`.cover-identity-strap` at 22px padding with teal-tinted background and the `.cis-vol` teal pill badge (solid teal, navy text, bold) ✅. `.cover-tagline` italic teal strapline ✅. `.week-badge` bordered orange, transparent fill ✅. Cover dot-grid motif at 7% opacity, 40px tile ✅. `.cover-lead-stat` variant chosen on substance — the four-day clock is the Lead's number and the issue's hook ✅. `.section-time` on the six major section h2s ✅. Drop caps: `.lead-article` navy 56px and `.mgmt-section` teal 52px, both rendering via CSS ✅. `.footer-vol` teal pill badge ✅. In Practice header off-white with deep-teal top and left borders flowing into the inset ✅. `feature-break` immediately above In Practice ✅. **No editor's note** — the `.editor-note` CSS is retained but there are 0 uses in the body, correct from Issue 13 onwards ✅. Thumbnail-distinguishability: the Vol. II markers plus the "4 days" lead stat make this visibly distinct from Issue 10's cover.

**Palette guardrails (v1.32): PASS.** `.section-label.alert` has **0 uses in the body** — no red section label anywhere. Lead label default teal (Ways of working) ✅. QT1 header orange (Management & teams) ✅. QT2 header deep teal, **not** red, per Phase 3's §1.6 ruling that neither the active-threat nor active-upgrade-window condition is cleanly met ✅. Outside In label orange ✅. **Structural landmarks all default teal** — Week at a Glance, Foreword, In Practice header ✅. The only red in the issue is the Action Required urgency-tier border in Week at a Glance and the disclosure endpoint in the QT2 SVG, both of which are urgency-tier and data treatments rather than concern cues.

## Visual density (v1.30): **PASS**
**Per-section visual floor:** Lead (`.process-flow` + Jargon Watch + pull quote) · QT1 (inline SVG chart) · QT2 (inline SVG timeline) · In Practice (blockquote pulled quote) · Leadership Read (centred `.pull-quote` + Concept of the week) · Outside In (before/after panel + `.oi-callout`). **No major section is pure prose.**

**Per-issue counted budget: 6, at the ceiling of 4–6** — cover lead-stat, `.process-flow`, QT1 SVG, QT2 SVG, In Practice pulled quote, Outside In before/after panel. The two uncounted components (the Leadership Read's mandated blockquote, the Editorial Moment's variant-defining `.stats-tile`) are excluded on reasoning documented at run plan §9.2 and briefs §1.1: with all six major sections running plus the cover, the per-section floor mechanically demands more elements than the ceiling allows, and the conflict is resolved by not double-counting components other rules already mandate. **I have audited that reasoning rather than inferring it, and accept it** — it is a genuine arithmetic conflict inside the spec, consistently resolved, and disclosed in advance rather than discovered after the fact.

**Real diagrams: 3, against a floor of 1–2**, in three distinct forms — process flow, paired-bar chart, horizontal timeline. Compare-table cap not engaged (0 uses). Process-flow used where warranted, for the five-step clock, with the prose clause noting the 14-day and weekly obligations the five-step primitive cannot show (`:491`) — the briefs' binding requirement, correctly executed. Sparkline not used. **Phase 4 visual substitution executed correctly**: the failed In Practice compare-table was substituted with a section-native pulled quote rather than shipped as pure prose, and the vacated rotating-component slot was filled by the QT2 SVG timeline.

## Template compliance: **PASS**
Structure matches the standard weekly template. Cover badge is the orange "This Week's Briefing". Archive bar shows **#18 (Deep Dive), #19, #20, #21, #22**, with #22 carrying `.archive-pill.current` in teal — **18–22 with 22 current, as required**. Footer Vol. II pill present.

---

# Part 3 — Corrections A–N compliance

All 14 Phase 3 corrections verified against the shipped HTML.

| # | Verified in the issue | ✓ |
|---|---|---|
| A | "Google gave no explanation." No "team-level reorganisation" anywhere | ✅ |
| B | Roles list correct (software engineers, engineering and product managers, mechatronics engineers, UX designers, recruiters); "September and early October"; 5 August as the notice-filing date | ✅ |
| C | "$30 to $19" and "$70 to $39" dollar-denominated; the 3,000/1,900 and 7,000/3,900 figures appear nowhere | ✅ |
| D | "enabled by default" absent | ✅ |
| E | "150 million weekly downloads"; keyv, cacheable, flat-cache, ecto; the two-billion and 1,300+ figures absent; "preinstall hook" absent | ✅ |
| F | Correction applied — **but the corrected string is itself non-verbatim (failure 1)** | ❌ |
| G | Double "many" preserved exactly | ✅ |
| H | Concept of the week is line manager vs middle manager; "span of control" appears only as the title of the Recommended Reading paper | ✅ |
| I | **Five** inherited capabilities, including multi-entry-point invocation — independently re-verified against the Duolingo post | ✅ |
| J | Revolut APRA + Miles & More / Pointspay; Wero and Zilch absent | ✅ |
| K | Reframed onto the rate; "level with 2025" not "passed"; 59-person margin stated; 911 vs 564/day (see caveat) | ✅ |
| L | "the significant institutions the ECB directly supervises"; "110" absent | ✅ |
| M | Check Point Research linked; Redmond Magazine absent; 12 CVEs across four frameworks; **no framework named** | ✅ |
| N | Axios attributed in prose, not linked; IBTimes linked instead | ✅ |

---

# Part 4 — Caveats (recorded, not scored as failures)

1. **`issue-22.html:481`** — the process-flow's first step reads "Immediately"; the RFC's wording is "as soon as possible". A hardening of source language inside the diagram the briefs called "the substance". Recommend "As soon as possible".
2. **`issue-22.html:454`** — "at nearly double the pace" for 911 vs 564 a day, which is 1.61×. "Nearly double" overstates it; "well over half again" or the bare figures would be safer, especially in a line the briefs specifically told Phase 4 not to oversell.
3. **`issue-22.html:501`** — the triggering incidents are asserted as fact ("The events behind it are recent: sandbox escapes … at OpenAI on 21 July and Anthropic on 31 July"). Briefs §6 required them "framed as reported and dated". They are dated but not marked as reported. One word fixes it.
4. **`issue-22.html:703`** — the Duolingo quotation ends at "collapses that tradeoff." where the source has a colon and continues. A clean truncation, but the full stop is the digest's, not the source's.
5. **`issue-22.html:787`** — Larson's three executive skills are quoted as one string; in the source they run as a mid-sentence list ending "…that extends beyond you (in any of innumerable different ways)". Verbatim as far as it runs, and the truncation does not distort the claim.
6. `.section-time` is absent from the Other News, Platform Updates, On the Radar and Recommended Reading h2s. Present on all six major sections, so the v1.31 requirement is met on the reading it intends.
7. TechCrunch and InfoQ each occupy 2 sections — at the source-diversity cap, not over. Carry to next issue's ledger.
8. The epistemic-reframing count sits **at** the cap of 2 with no headroom. Any construction added in a revision breaches it.
9. Failures 4 and 6 both originate in `run-plan.md` and were carried through `section-briefs.md` unchallenged. Phase 4 executed the contract correctly in both cases. Worth noting that Phase 3 caught 14 factual errors in the plan but did not catch these two, and introduced failure 1 while correcting a third.

---

# Required fixes before delivery

**Blocking:**
1. `issue-22.html:622` — "doing it the right way" → **"doing it right"**. Also correct `section-briefs.md:111` and `section-briefs.md:208` so the misquote is not carried forward.
2. Trim ~150–250 words to bring the strict count clear of 3,700 with margin. The Lead at 633 words against a 400-word allocation is the obvious source; §11's cut order also permits shortening Outside In. Do not touch In Practice (not a cut lever) and do not take the Leadership Read below 400.

**Should fix:**
3. Recompute the reading time from the final word count at 200 wpm and move it into a `.cover-read-time` element beside the issue badge.
4. `issue-22.html:431` — "built from corporate filings" → "attributed to people familiar with the matter".
5. Expand CVE, CI, npm, APRA, SME and ECB on first use.
6. Rewrite the `.ip-theme` label in the third person, which also resolves the silent "SME".

**Re-review scope after fixes:** items 1 and 3–6 are localised text edits requiring no re-check beyond the edited lines. Item 2 requires a fresh word count and a re-derived reading time, and — if the Lead is trimmed — a re-check that the 4 August date, the in-window framing, the proposal-not-standard state and the process-flow prose clause all survive, since all four are binding.

---

# Part 5 — Delta verification after Phase 4 remediation

Scope: the six findings plus a regression sweep. The full checklist was **not** re-run.

## The six findings

| # | Finding | Fix verified | Status |
|---|---|---|---|
| 1 | Rungta misquote | Reads *"When the cost of doing it right is just as low as the cost of cutting corners…"*. **"the right way" returns 0 hits** in the file; "doing it right" returns 1. Matches the source exactly | **CLEARED** |
| 2 | Word budget | **3,671 words** by my inclusive rule (full body, `<style>`/`<script>`/`<svg>` excluded) — matches Phase 4's self-report exactly. Inside 2,600–3,700 with 29 words of headroom, and no longer dependent on how cover and footer chrome are treated. Lead cut 633 → 456 | **CLEARED** |
| 3 | Reading time | `.cover-read-time` class now used, inside the identity strap: *"18 min read"*. 3,671 ÷ 200 = 18.4 → 18 min. Correct | **CLEARED** |
| 4 | Editorial Moment attribution | Now *"…people familiar with the matter."* **"corporate filings" returns 0 hits.** Matches how Reuters sources the figure | **CLEARED** |
| 5 | Silent acronyms | **CVE** glossed on first use in Week at a Glance — *"12 CVEs — the public identifiers given to disclosed vulnerabilities —"*, which precedes the QT2 usage in document order ✅ · **npm** — *"npm is the registry JavaScript projects pull their libraries from"* ✅ · **APRA** — *"APRA, Australia's banking regulator"* ✅ · **ECB** — *"European Central Bank"* in the radar item heading ✅ · **SME** — expanded inline in In Practice: *"a claim about judging work a manager is not the SME, the subject-matter expert, on"* ✅ · **CI** — see residual below | **5 of 6 cleared** |
| 6 | `.ip-theme` second person | Now *"Making technical decisions when not the SME"*. No second person; grep for "week", "of 3", "of 4", "part", "#1", "#2" against the element returns 0 | **CLEARED** |

**Residual (minor, not blocking).** "CI" is still unexpanded, at `issue-22.html` in the Outside In line *"address CI failures and code-review comments"*. The Week at a Glance "CI runners" phrasing was removed in the rewrite, so CI is now a **single use** in the whole issue, in a sentence whose meaning survives without it. Recorded rather than blocked; worth a two-word gloss ("continuous-integration") if the file is touched again.

## Lead compression — mandated elements re-checked (633 → 456 words)

All five binding elements survive:

1. **4 August publication date** — stated in the opening sentence (*"On 4 August the Linux Foundation published a draft…"*) and again in the Jargon Watch sidebar. ✅
2. **In-window framing** — *"What moved this week is its reception: 120 organisations behind it, an on-the-record airing at Black Hat, and the two largest model vendors still outside."* The dedicated "What is new this week" h3 survives with the membership trajectory and the Boitano on-record framing. ✅
3. **Proposal-not-standard status** — *"an RFC, a public draft circulated for comment rather than an adopted standard"*, and the closing paragraph is intact: *"no adoption timeline, no vote threshold, no funding for the receiving body, and no consequence for missing a deadline."* ✅
4. **Agent-terminology precision on first use** — *"production agents with authority to act against third-party systems, a narrower category than agent features inside a developer's own tooling."* ✅
5. **Five-deadline `.process-flow`** — intact, and the prose clause naming the 14-day advisory and weekly machine-readable updates survives beneath it. ✅

Also surviving: the near-miss and RFC glosses, the Open Secure AI Alliance gloss (moved into the sidebar), the Boitano quote with Axios attributed in prose and not linked, the Cybersecurity Dive OpenAI/Anthropic quote, and the full source list.

**Two first-pass caveats were fixed in passing:** the process-flow's opening step now reads *"As soon as possible"* rather than "Immediately", matching the RFC's wording (caveat 1); and the triggering incidents are now framed as reported — *"It follows reported sandbox escapes…"* (caveat 3).

**Dropped in compression, both permissible:** the optional cross-issue throughline sentence, and the RFC's verbatim scope clause. Neither was mandated; the scope is still conveyed in the retained near-miss and "Intent does not determine…" material.

## Regression sweep

- **Epistemic reframing: now 1, cap 2.** Phase 4's claim confirmed. The Lead instance is gone — *"a logging, observability and on-call design question well before it is a policy one"* was rewritten to *"…a logging, observability and on-call design question that, for agents, usually has no owner"*, which asserts without negating. The only remaining instance is the In Practice line *"Hands-on work in his account is not a failure to delegate; it is how the judgement he is paid for stays calibrated."* The three mandated accuracy hedges are unchanged and still not counted. **No new constructions introduced by the rewrite** — the full sentence-level structural scan was re-run, not a lexical pass.
- **Voice greps: clean.** "the reader", "reader's", "your team", "your firm", "your org", "your customers", "you must", "you should", "you need to" — all 0. Every remaining second-person instance sits inside a verbatim quotation. The `.ip-theme` label no longer contributes one.
- **One quote, one slot: PASS.** All 17 tracked quoted phrases re-counted; **every one is still a singleton.** No quote was duplicated or orphaned by the Lead and In Practice rewrites.
- **Section order intact.** Foreword → Editorial Moment → Week at a Glance → Lead → Quick Takes → mid-accent → In Practice → Other News → Platform Updates → Outside In → On the Radar → Leadership Read. Long-form non-adjacency holds unchanged.
- **Visual budget unchanged at 6**, real diagrams still 3. Verified element by element: cover `.cover-lead-stat` ("4 days"), `.process-flow`, 2 inline `<svg>` elements, the In Practice `<blockquote>`, and the Outside In Before/After panel ("Weeks" → "About 10 minutes"). Components still 4. `.compare-table` 0, `.pq-bar` 0, `.section-label.alert` 0, `.stats-tile` 1, `.jargon-watch` 1, `.concept-of-week` 1, author cards 3, `.so-what` 3, `.section-breather` 2, `feature-break` 4 — all identical to the first pass.
- Cover stat, Editorial Moment stat and archive bar unchanged.

**Nothing regressed. All six findings cleared bar one single-use acronym. Final verdict: PASS.**
