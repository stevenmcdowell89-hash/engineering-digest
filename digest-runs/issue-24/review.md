# Issue 24 — Phase 5 Review (FULL)

**Reviewed:** 4 September 2026 · **Artefact:** `issue-24.html` · **Spec:** v1.38
**Mode:** FULL review per run plan §13 (five triggers). Every check re-run from scratch against the shipped HTML; Phase 4's self-report not relied on. Facts, quotes and rulings audited against `section-briefs.md` §0, §0.6, §1.7, §1.9, §1.10 and §19, which supersede `run-plan.md`.

## FINAL VERDICT: **PASS** (after main-loop remediation, re-verified 4 September)

The first-pass verdict was **FAIL** (1 blocking, 6 secondary). The main loop applied fixes for all seven findings; every delta was re-verified against the shipped file and all seven clear. **Independent recount after the fixes: 3,666 body words** — inside the band, 34 clear of the ceiling, cover reading time still correct at 18 minutes. Two prose residuals introduced by the remediation are recorded at Part 5 and are **not blocking**. **Cleared for delivery.** The first-pass findings are retained in full below for the audit trail; see Part 5 for the delta verification.

### Original first-pass verdict (superseded): FAIL — 1 blocking, 6 secondary

The issue is substantively in very good shape. All five §13 triggers pass, all sixteen §0.6 corrections shipped as ruled, the source cap and adjacency ledger hold exactly, no rejected §7 candidate was re-promoted, every href is in the verified ledger, and the word count clears the ceiling. **One spec ceiling is breached and it is the one the run plan and the briefs both predicted would be breached: epistemic reframing.** Four structural reframes ship against a hard cap of two (and against the briefs' own allocation of one). That is a checklist item with a numeric ceiling, so it blocks; the fix is three sentence rewrites and nothing else moves.

| # | Severity | Item | Location |
|---|---|---|---|
| 1 | **BLOCKING** | Epistemic reframing — 4 instances against the v3.6 cap of 2 (briefs §18 allocate 1) | `issue-24.html:511`, `:625`, `:654`, `:667` |
| 2 | Secondary | Five silent acronyms (v3.7 "no silent acronyms") | `:456`, `:591`, `:595`, `:619`, `:637`, `:678` |
| 3 | Secondary | Late find §0.7 #8 imported beyond run plan §14 ("300-plus playbooks") | `:676` |
| 4 | Secondary | Oracle cross-issue throughline runs to two sentences against a one-sentence binding constraint | `:507` |
| 5 | Secondary | "subject to regulatory approval" not re-confirmable in the cited source | `:529` |
| 6 | Secondary | Two sentences past the v1.36 readability line with no parenthetical break | `:531`, `:595` |
| 7 | Secondary | Anthropic 150-engineer sentence narrows the source's own wording | `:462` |

---

# Independent word count

Recomputed from scratch under the Issue 22 review rule — all body copy from `<body>` onward, excluding `<style>`, `<script>` and `<svg>` contents, comments stripped, punctuation-only tokens dropped.

| Section | Words | | Section | Words |
|---|---|---|---|---|
| Cover (incl. contents list) | 101 | | In Practice | 356 |
| Foreword | 77 | | Other News | 238 |
| Editorial Moment | 72 | | Platform Updates | 120 |
| Week at a Glance | 389 | | Down the Rabbit Hole | 63 |
| **Lead — Uber** | **455** | | On the Radar | 157 |
| Quick Takes (QT1 253 / QT2 224) | 485 | | **Leadership Read** | **455** |
| Mid-issue accent | 70 | | Recommended Reading | 96 |
| **Feature** | **490** | | Footer + nav chrome | 37 |
| | | | **TOTAL** | **3,661** |

**3,661 against a ceiling of 3,700 and a floor of 2,600 — inside the band with 39 words of margin.** My count agrees with Phase 4's to the word. Excluding the cover contents list and footer chrome as navigation gives 3,523, so the issue passes at both the strict and the loose reading. Not under 2,600 — no hidden Light Edition. The briefs' §20 projection was ~3,440; the shipped issue is 221 over that, carried almost entirely by the Lead (+55 over allocation), the Week at a Glance (+89) and Other News (+33). No §20 cut order was needed and none should be applied.

**Per-section body length against the binding bands, sidebars excluded from the body count:**

- Lead **399** words excluding the 56-word `.concept-of-week` box — inside the spec's 300–400. ✅
- Feature **434** excluding the 56-word Jargon Watch — inside 400–600. ✅
- In Practice **339** excluding the author card — inside 300–450. ✅
- Leadership Read **445** excluding the author card — inside 400–600, comfortably above the 400 floor. ✅
- Foreword **77** — inside 50–80. ✅
- Editorial Moment **72** — against a 70-word brief. ✅

**Cover reading time:** 18 min. 3,661 ÷ 200 = 18.3 → 18. ✅ `.cover-read-time` is used (`:405`) — the Issue 22 secondary failure 3 does not recur. Per-section `(N min)` times sum to 18 across the ten `<h2>`-bearing sections, matching the cover. Two individual roundings run generous (Quick Takes 485 words shown as 3 min, Leadership Read 455 shown as 3 min) and are offset by the sub-half-minute sections rounded up; the total is right and this is not recorded as a finding.

---

# Part 1 — The five §13 triggers

## Trigger 1 — AI-substrate count re-derived from the shipped HTML: **PASS**

Re-derived by reading the shipped copy, not by trusting the §5.1 or §21 tables. Mention counts computed independently per section:

| Featured section | `AI` | `agent*` | AI the substantive driver? |
|---|---|---|---|
| Lead — Uber | 0 | 0 | **No.** The section does not mention AI once. Uber's stated drivers are complexity and scale; no motive is supplied that the company did not. |
| QT1 — Nvidia / Hugging Face | 1 | 1 | **Yes.** Remove AI and there is no deal and no supplier-risk argument. |
| QT2 — Tottenham / VMware | 0 | 0 | **No.** A licensing and vendor-exit story end to end. |
| Editorial Moment — Fowler | 0 | 0 | **No** — fresh judgement below. |
| In Practice — Trokis | 0 | 0 | **No.** Zero AI or agent mentions; the subject is a manager leading outside his expertise. |
| Outside In | — | — | Omitted (Trigger 2). |
| | | **Total** | **1 of 5 present**, cap 4 of 6 |

**Fresh judgement on the Editorial Moment, as §13 requires. I concur with the run plan's non-AI-primary ruling, and the shipped copy makes the call easier than the plan expected.** The plan flagged it borderline because the one-line "why it matters" was to connect the maxim to the week's code-review argument, which is AI-driven. The shipped text does not make that connection: it reads *"few programming practices are absolute goods or evils … Two practitioners argued independently this week that fewer changes should reach a human reviewer — an argument about dosage, applied to a practice most organisations run at a fixed rate"* (`:445`). AI is not mentioned, and neither is the reason the volume of code changed. The block is a statement about dosage in software practice. **Non-AI-primary confirmed on the shipped text, not on the plan's reasoning.** Under the adverse reclassification the count is 2 of 5, still passing with headroom — the plan's claim that nothing depends on the ruling holds.

**v1.35 long-form variety, re-derived:** In Practice is non-AI (technical leadership for managers — zero AI/agent mentions); the Leadership Read is AI-primary (its subject is what changes when code-generating assistance outpaces reading capacity — 2 `agent` mentions, and the argument does not survive removing them). **1 AI-primary of 2 running, cap 1. Two distinct aspects of engineering leadership, floor 2. PASS.**

**Honest reader experience, recorded as the plan asked.** The Feature sits outside the counted six and is AI-substrate (3 `AI`, 7 `agent`). Across the whole issue AI drives QT1, the Feature, the Leadership Read and most of Other News; it does not drive the Lead, QT2, the Editorial Moment, the mid-issue accent, In Practice, Platform Updates or four of the five On the Radar lines. That reads as a balanced issue, not a count gamed to pass.

## Trigger 2 — Outside In omission: **PASS**

- **The section is absent.** `oi-` class prefixes have **0 occurrences in the body** (30 in the stylesheet, all unused). No `.outside-in-section`, no `.oi-callout`, no `.oi-hero-band`, no `.oi-stats-row`.
- **The footer carries the required note:** *"Outside In returns next week."* (`:822`), styled as a `.footer-next` line beneath the next-edition line. This is the §5.4 / §1.4 requirement and it is present.
- ***"In Practice returns next week"* correctly does NOT appear** — 0 occurrences. The substance floor passed at §0.3 and In Practice ran, so the note would have been wrong.
- **DoorDash did not reappear in a featured slot.** It appears exactly once, as Other News item 1 (`:676`), at two sentences, attributed to InfoQ. It is not in the Lead, either Quick Take, the Feature, In Practice, the Leadership Read, Recommended Reading or the Week at a Glance. `careersatdoordash.com` has **0 occurrences** — the verified 403 is honoured.
- The omission is consistent with the §5.4 eligibility ruling rather than a silent drop: the two long-form sections that ran are separated by four news sections, and no slot was padded to cover the gap (the Feature at 434 words fills the mid-issue space, exactly as §5.4 anticipated).

## Trigger 3 — Source cap and adjacency, counted from the shipped HTML: **PASS**

All 34 external hrefs extracted and attributed to sections by position. Counts are per **section**, per the v2.0 rule.

| Outlet | Sections in the shipped issue | Count |
|---|---|---|
| **The Register** | QT2 (2 links, one section) · Recommended Reading | **2 — at cap.** Absent from Week at a Glance, Other News, Platform Updates, On the Radar **and the Feature** ✅ |
| **InfoQ** | Other News (4 links) · Down the Rabbit Hole | **2 — at cap.** Absent from Week at a Glance, Platform Updates, Recommended Reading ✅ |
| **martinfowler.com** | Editorial Moment · The Leadership Read | **2 — at cap.** No martinfowler link in Recommended Reading ✅ |
| Palo Alto Networks / Unit 42 | Feature · Recommended Reading | 2 — at cap ✅ |
| Zalando | Week at a Glance · Recommended Reading | 2 — at cap ✅ |
| Business Today | Week at a Glance · On the Radar | 2 — at cap ✅ |
| **TechCrunch** | **Lead only** | **1 — and it does not appear in QT1** ✅ |
| **Anthropic** | **Week at a Glance only** (2 links, one section) | **1** ✅ |
| Uber · HR Executive · NVIDIA · Fox Business · Storyboard18 · METR · Monzo · Pragmatic Engineer · Mozilla · Microsoft · Rapid7 · CISA · City A.M. · PYMNTS · Ludicity | one section each | 1 each |

**No outlet exceeds two sections.** The Cloudflare Week at a Glance item was cut under the §5 authorisation (*"if it cannot [resolve a Cloudflare link], cut this item and run the section at five"*), which is why the section ships five items and the headline reads "Five stories in sixty seconds" — internally consistent, and it leaves the cap ledger unchanged.

**Adjacency ledger re-derived in reading order:**

| # | Section | Outlet(s) | Clash with previous? |
|---|---|---|---|
| 1 | Editorial Moment | martinfowler.com | — |
| 2 | Week at a Glance | Rapid7 · Anthropic · Zalando · Business Today | No |
| 3 | Lead | Uber · TechCrunch · HR Executive | No |
| 4 | QT1 | NVIDIA · Fox Business | No |
| 5 | QT2 | The Register | No |
| 6 | Mid-issue accent | Storyboard18 | No |
| 7 | Feature | Unit 42 · METR | No |
| 8 | In Practice | Monzo | No |
| 9 | Other News | InfoQ · Pragmatic Engineer | No |
| 10 | Platform Updates | Mozilla · Microsoft | No |
| 11 | Down the Rabbit Hole | InfoQ | No — Platform Updates separates it from Other News, as §1.10 requires |
| 12 | On the Radar | CISA · City A.M. · PYMNTS · Business Today | No |
| 13 | The Leadership Read | martinfowler.com | No |
| 14 | Recommended Reading | Ludicity · Zalando · Unit 42 · The Register | No |

**No two consecutive sections share an outlet.** All three load-bearing placements held: TechCrunch is out of QT1, the mid-issue accent sits between QT2 and the Feature, and Platform Updates sits between Other News and the rabbit hole.

## Trigger 4 — Which branch shipped, and did it ship as recorded: **PASS**

| Conditional | §0 ruling | What shipped | Verdict |
|---|---|---|---|
| 1 — Uber 20% | Pinned to Uber, referent corrected to 7+ layers | Cover stat context reads *"the reduction in the number of Uber employees sitting seven or more layers from the chief executive"* (`:417`); prose quotes Uber verbatim (`:491`); compare-table row 2 reads "Employees seven or more layers from the CEO / Reduced by 20%" (`:497`). **"manager roles" returns 0 occurrences.** Compare-table runs at **four rows**, every row Uber's own; the 3,300 count is in prose attributed to TechCrunch (`:487`), not in the table | ✅ |
| — | "single-threaded teams" wording | `:505` — *"the three Delivery Ops teams across Restaurants, Retail and Direct become single-threaded teams — one team with one owner for an end-to-end area"*, glossed in one clause. No "global, regional and country" framing anywhere | ✅ |
| 2 — Feature sourcing | Both primaries pin; Register not cited | Feature source line cites **Unit 42** and **METR** only (`:629`). The Register appears nowhere in the Feature. Register's second section correctly opens into Recommended Reading (`:812`) | ✅ |
| — | METR's own three reasons (correction C) | `:621` prints METR's three: accustomed to evaluations using large volumes of tokens; the internal usage dashboard did not show rate-limited requests; not paying for the tokens, so no natural spend ceiling. **The run plan's "no billing alert fired" does not appear** | ✅ |
| 3 — In Practice floor | Passes, runs at 400 | Section runs at 339 body words, quote-first on quote 11, two quotes only, pull quote on quote 12 with the parenthetical and emoji correctly elided | ✅ |
| — | `.ip-theme` format (v1.34, grep-verifiable) | `class="ip-theme">Making technical decisions when not the SME` — **theme name only. Grep for "week", "of 3", "of 4", "part", "#1", "#2" returns 0.** The *"a classic worth revisiting"* tag sits in the author-card date row (`:647`), exactly where §10 put it to keep the grep clean | ✅ |
| 4 — Editorial Moment | Fowler verbatim, 66% alternative not taken | `:443` prints *"The difference between a medicine and a poison is dosage."* verbatim; the rabbit hole stays in (`:705–713`) and InfoQ's two sections are Other News + rabbit hole as the primary branch assumed | ✅ |
| — | Rabbit hole 66% (correction D) | `:711` — *"W3Techs still puts it on roughly 66% of all websites, and on the overwhelming majority of those running any known JavaScript library"*. **The all-websites/library-share inversion is not repeated** | ✅ |
| 5 | Both Platform rows, 32 regions | Two rows, Firefox only (Thunderbird absent, 0 occurrences), 32 regions with the four named and UAE North on the global type only; no starting count, no UK claim ("UK South"/"UK West" 0 occurrences) | ✅ |
| 6 | CVE identifiers printable | Both printed once, in the Week at a Glance line (`:456`) | ✅ |
| 7 | Pragmatic Engineer runs | One sentence, ~50% figure, characterised as paywalled beyond a free preview; **no company list printed and Uber not named** (`:680`) | ✅ |
| 8 | QT1 dissent closed | No dissent line in QT1; the Register opinion is in Recommended Reading, labelled opinion (`:812`) | ✅ |
| 9 | Huang quote unallocated | 0 occurrences of any Huang quote | ✅ |
| 10 | PaperCut split | Week at a Glance carries exposure/ownership and cites Rapid7 (`:456`); On the Radar carries only the 14 September date and cites CISA (`:726`). Different sources, no repeated framing | ✅ |

**Branch confirmation for the state file.** The Feature ran (first in the publication's history — `last_feature_date` is `null` in `engineering-digest-state.json`, confirmed independently), In Practice ran, Outside In was omitted, the rabbit hole ran, The Stack did not, and no P0 card appears (`p0-status-card` 0 occurrences in the body). Word count 3,661 is consistent with the both-sections-ran branch, not with §11's Branch A/B/C projections. State updates should therefore follow §12 as written: `last_feature_date` → 2026-09-04, `last_rabbit_hole_date` → 2026-09-04, `in_practice_season_progress` → 2, `consecutive_non_deepdive` → 1, `last_leadership_read` → martinfowler.com, `outside_in_history` unchanged.

## Trigger 5 — Ten conditionals and the METR disambiguation: **PASS**

All ten resolved conditionals shipped as ruled (table above). The METR confusion risk is closed cleanly: METR is glossed on first use in its own terms — *"a research nonprofit that measures whether and when AI systems might threaten catastrophic harm"* (`:619`) — and the Issue 23 randomised controlled trial is neither cited, referenced nor alluded to (`randomised controlled` and `19% slower` both return 0). METR's second, May incident (late find #1) is correctly absent (`SQL` returns 0), which keeps the Feature's argument about detection assumptions unblurred.

---

# Part 2 — Checklist, section by section

## Workflow pipeline (v3.1): **PASS**
Run directory present at `digest-runs/issue-24/`. `candidates.json` parses and carries `beats` and `secondary`. `run-plan.md` present with the lead justification and 25 recorded §7 rejections with reasons. `section-briefs.md` present with per-section briefs and a top-level component manifest (§1.1–§1.10). **Phase 4 cross-check: the shipped Lead (Uber), QT1 (Nvidia/Hugging Face), QT2 (Tottenham/VMware), Editorial Moment topic (Fowler's Paracelsus Maxim) and format (Standard Weekly) all match the plan as amended by the briefs.** `review.md` = this file.

**No silent re-promotion — every §7 rejection checked against the shipped HTML.** Nvidia → QT1 only. Unit 42 and METR → Feature only. Tottenham → QT2 only. **PayPal → mid-issue accent only**, plus its authorised naming inside the Business Today round-up line; it is not written as a sector pattern and no finance-sector layoff aggregate appears anywhere. **DoorDash → Other News, two sentences.** Laycock → Leadership Read. Anthropic ZDR and containment → Week at a Glance. Shevchenko → one Other News sentence plus the one authorised cross-reference in the Leadership Read (`:797`), **not quoted anywhere**. Kiro Crew, HashiCorp, Pragmatic Engineer → one Other News sentence each. Mozilla, Microsoft → one Platform Updates row each. PaperCut → one Week at a Glance line + one Radar date. Oracle, Lloyds, the Alliance → one Radar line each. The 6,300 round-up and Zalando's experiment method → Week at a Glance. Zalando's snapshot and Ludicity → Recommended Reading. **Edwards-Alexander is absent entirely** (0 occurrences of "Edwards-Alexander" or "Blackboard"). Cloudflare's OAuth item was cut under authorisation. **No rejected candidate appears as the Lead or in any promoted slot.**

**Late-find routing (run plan §14) — one deviation, recorded as secondary finding 3.** #2 (Anthropic 150 engineers) is folded into the existing Week at a Glance item ✅. #3 (EFS terms) appears as one clause, *"each component is opt-in"* ✅ — the pricing, "over 100 customers" and "later this fall" are correctly absent. #10 (NVIDIA already the largest contributor) is one clause in QT1 ✅. **#1, #5, #7, #9 are absent as required** — no METR May incident, no Project Nova or Firefox 157, no Zalando 33% / 20–40% figures, and Broadcom's announcement is described in QT2 without the product name (TrueSource returns 0). **#8 is partly present:** "across 300-plus playbooks" ships at `:676`. See finding 3.

## Foreword: **PASS**
One paragraph, **77 words** (band 50–80), drop cap via `.foreword p:first-of-type::first-letter` (`:118`). Single editorial thread — the ownership throughline, stated once (`:436`). Does not restate the cover contents. "meanwhile" / "elsewhere" / "also this week" all return **0** in the body. **No AI-default framing** — the week is not framed relative to AI's presence or absence in either direction; the word AI does not appear. Issue-wide scan of section intros, transitions and the Editorial Moment for the same failure: clean.

## Article depth: **PASS**
Every anchor passes the so-what test at leadership altitude. The Feature gives urgency and scope without forensics — no exploit mechanics, no credential-rotation instructions, no attack-framework names (`MITRE` 0, `lateral movement` 0, `vibe-coded` 0 — the last is notable because METR's own sentence contains it and the issue correctly quotes only the clause after it). No corporate language: "leverage", "synergy", "best-in-class", "utilise", "going forward" all return **0**. **No action items:** the three `.so-what` lines, the In Practice "What to try" line (`:667`) and the Leadership Read discussion prompt (`:801`) all state implications; none carries an imperative aimed at the reader.

## Explain key terms (v3.7): **PARTIAL FAIL — see finding 2**
Every term flagged in briefs §1.8 was checked individually against the shipped copy. Glossed as specified: *span of control* (Concept of the week sidebar, and the binding condition that the prose use the phrase is met at `:511`) · *layers* ("the reporting distance between an engineer and the chief executive") · *micro-team* (Uber's own definition) · *single-threaded teams* · *model registry* (inline, as §1.3 moved it) · *open weights* · *equity-based retention award* · *hypervisor* · *single pane of glass* · *HPE GreenLake / VM Essentials* (one clause, **no SKU lists** — ProLiant, Alletra, OpsRamp, Morpheus all 0) · *autonomous agents* (Jargon Watch) · *METR* · *Unit 42* · *fail-open* · *secret-management system* · *squad* · *Kubernetes* (the single named technology, glossed; *deployment manifest*, *metrics ingestion* and *canary deployment* correctly not named) · *zero data retention* · Known Exploited Vulnerabilities catalogue · *escape classifier* · *Budget Split / Orthogonal Concurrency* · *blast radius* · *model routing* · *Extended Support Release* (in Mozilla's own words) · *model router* · the data-zone/global distinction · *mobbing* · *deterministic checks* · *diff* (**glossed at `:789`, one paragraph before the blockquote lands at `:792`**, as §15 required) · *fitness functions* (attributed to Laycock in the clause that names it). Correctly not used: *multi-accelerator*, *licensing tier*, *individual contributor*, *trunk-based development*, *MCP*, *Firecracker*, *Agent Client Protocol*, *policy-as-code*.

Sidebar boxes: **exactly two** — `.concept-of-week` in the Lead (orange) and `.jargon-watch` in the Feature (deep teal), three sections apart as §1.3 intended. No third box, no `.sidebar-box.compliance`.

**Failure:** five acronyms ship unexpanded on first use — see finding 2.

## Format & length: **PASS**
Standard Weekly. Cover badge is the orange `.week-badge` "This Week's Briefing" (`:413`) — not the red Deep Dive or grey Short Edition badge. No executive summary, no section markers, no progress bar, no how-to-read grid, no Meanwhile section, no `.lessons-section`, and **`.article-with-sidebar` has 0 uses in the body**. Word count 3,661, inside 2,600–3,700. Light-edition check re-run against the shipped issue: zero of three signs fire — the lead is a published org-design restructure with numbers, both quick takes are signed events with named sources, and Outside In was omitted on a ruling rather than filled.

## Topic & lead selection (v1.32): **PASS**
News-event Lead test: a corporate restructure announced 2 September, inside the window, stated in the opening sentence (`:487`) — case (a), no traction exception invoked. Anchor balance **3 of 3 news events**, floor 2. Not a tool release. AI-substrate reader-experience count re-derived at Trigger 1: **1 of 5 present**, cap 4 of 6. No-repeat-featured-anchor: no Issue 22 or 23 anchor anchors here — SAFE, Zoom and the Issue 23 deep-dive datasets are all absent, and the Oracle material appears only as the single permitted throughline sentence in the Lead and one unfigured Radar line. Within-issue concern diversity: **Management & teams / Wider engineering landscape / Operating at scale — three concerns, one anchor each.** Soft breadth guardrail: rolling 4 leads become Management & teams (24) · Ways of working (23) · Ways of working (22) · Wider engineering landscape (21) — three distinct concerns against a floor of three. Bank-regulator scope-conditional test not engaged: no FCA, PRA, PSR or Treasury Committee decision appears anywhere; the Lloyds material is a single dated Radar line.

## Audience-fit & urgency gates (v3.2): **PASS**
Lead, QT1 and QT2 all `decide_this_month` high-impact. No `general_awareness` story anchors — the tool releases (Kiro Crew, HCP Terraform) sit at one Other News sentence each, PaperCut sits at one Week at a Glance line, PayPal at the accent. **Anchor depth-fit:** none of the three takeaways requires the reader to be running the system. The PaperCut line is framed at exposure and ownership — *"The question is who has confirmed the estate is clear, and who owns that answer"* — with no remediation steps, patch commands or CVE forensics, which is the spec's own Mini Shai-Hulud rejection applied correctly. Banking/fintech framing is positive-world: the Lloyds Radar line, the UAE North residency point and the loyalty clause in the Alliance line are all reported as the world the reader operates in, not as compliance briefings. **In Practice quality check (v3.5):** named operator at a real org ✅ (Jarryd Trokis, Monzo, date stated honestly as April 2022) · journey not framework ✅ (the copy narrates what he found and does not layer advice on top) · technical content at implication level ✅ (one named technology, glossed, standing for what he had not operated).

## Structure: **PASS**
Section order shipped: Cover → Foreword → Editorial Moment → Week at a Glance → breather → Lead → Quick Takes → breather → mid-issue accent → Feature → `feature-break` → In Practice → Other News → Platform Updates → Down the Rabbit Hole → On the Radar → `feature-break` → Leadership Read → Recommended Reading → Footer. That is the v1.32 default with the Feature inserted after the accent (run plan §8) and the rabbit hole occupying the position the omitted Outside In would have held. Week at a Glance grouped by the three urgency tiers with the correct label classes. On the Radar leads with the dated deadline, then the dated events, then the undated standing watch. **Section breathers: exactly 2**, at the two spec positions. **Section spread (v1.32): In Practice and the Leadership Read are separated by Other News, Platform Updates, the rabbit hole and On the Radar — no two long-form sections adjacent.** `<hr class="feature-break">` sits immediately above In Practice (`:632`) and above the Leadership Read (`:763`).

## Ongoing stories: **PASS (not engaged)**
No P0 card, correctly — `p0_stories_tracking` is empty in the state file and the AWS ME-region item ships as a standing Radar line saying nothing stronger than "both open, AWS's last public update dated 30 April 2026. Nothing beyond that is claimed" (`:758`). No progress bars anywhere.

## Leadership Read & In Practice: **PASS**
Leadership Read source is a real external piece, verified live (Part 4). **Outlet differs from the previous issue's** — `last_leadership_read` in the state file is lethain (Will Larson); martinfowler.com has never held the slot. Anti-overlap with In Practice (Monzo vs martinfowler.com / Thoughtworks) clear; Outside In omitted, so no company clash. Substance floor met: the named argument (`:770`), two concrete mechanisms in her own labels (`:786`, `:789`), and a takeaway in the digest's own words (`:797`). Strip-link test passes. In Practice substance floor met: the named claim, the Backend Platform Squad as the concrete ground, and a takeaway a director can carry into a probation review. **Attribution fidelity on the §0.3 constraint is handled explicitly** — *"He points at the environment the team works in — autonomy, support and fast feedback — and at the people in it. That is Trokis describing Monzo; the reading that follows is this publication's"* (`:661`). No framework is built that he did not write, and **no compare-table appears in the section**.

## Source diversity (v2.0): **PASS** — see Trigger 3.

## Layout choices (v3.5): **PASS**
Quick Take layout QT-B (`two-col qt-featured`, QT1 at `3fr` with full treatment, QT2 at `2fr` compact) suits the material — the stronger, larger story is in the wider column. Outside In format: omitted, which the spec names as always an option. Mid-issue accent is `.mid-accent-highlight` on PayPal, a genuine detail rather than filler, with both India figures carried together and the source link present. **No two articles open the same way beyond the two flagged, documented collisions:** Lead summary-first (`:487`), QT1 stat-first (`:529`), QT2 quote-first (`:553`), Feature narrative-first (`:591`), In Practice quote-first (`:652` — flagged collision with QT2, separated by the accent, the Feature and a feature break), Leadership Read summary-first (`:770` — flagged collision with the Lead, separated by ten sections). Deliberate calls, recorded in both contract documents, not drift.

## Feature Article (v2.1): **PASS**
Present in a standard weekly. `last_feature_date` null in the state file — the minimum 1-issue gap is satisfied trivially and this is the first Feature the publication has run. Topic (an intrusion timeline and a spend-governance failure) differs from the Lead topic (org shape). **434 body words**, inside 400–600, with three h3 subheadings. Visual: the inline SVG contrast bar. **Ends with a bold "The takeaway" line** (`:627`). Uses `.feature-article` with the correct styling — off-white background, 3px teal top border, `padding:40px 48px`, teal Tier 1 label, Playfair 28px headline. Opener style (narrative-first) differs from the Lead and both quick takes. Counted against the source-diversity ledger (Unit 42 at 2 sections).

## The Stack: **PASS (not present)** — declined at §1.4 with a reason; `last_stack_date` remains null.

## Down the Rabbit Hole (v2.1): **PASS**
Exactly one external link. Connected to QT2 by the dependency-lifetime argument, stated in one sentence. Three sentences, 63 words — sells the click without summarising the destination. Source-type badge "Long-read" present. Uses `.rabbit-hole`. Placement between Platform Updates and On the Radar is the placement §1.10 made load-bearing, and it holds.

## Prose style (v3.6): **FAIL — see finding 1**
Structural scan run sentence by sentence across the whole body, not a lexical scan for the six canonical patterns. **Every candidate found is listed and ruled below**, as the run plan asked.

**Counted (4, against a cap of 2):**

| Line | Sentence | Why it counts |
|---|---|---|
| `:511` | *"Span of control becomes a figure a peer has published **rather than** an outcome of hiring history"* | Defines by contrast — structurally identical to the checklist's own listed example *"the precondition story matters more than the headline"* |
| `:625` | *"The failure in each case was **not** a missing control **but** an unwritten one"* | Canonical "not X but Y". **This is the one instance §18 allocated to the Feature's synthesis paragraph — it is the one to keep** |
| `:654` | *"he **does not** resolve the gap by going away to learn the stack. What he describes finding **instead** is that participation was available where answers were not."* | Canonical two-sentence form: names what he did NOT do to introduce what he DID |
| `:667` | *"**more usefully assessed on** the conditions they hold for the team **than on** what they know of the stack"* | Right-unit/wrong-unit comparative — the checklist's *"the wrong unit of measurement is X; the right one is Y"* |

**Examined and ruled clear, with reasons (recorded so the ruling is auditable rather than inferred):**

- `:445` Editorial Moment — *"few programming practices are absolute goods or evils, and … the useful questions are about context and dose."* Reported statement of Fowler's own thesis; no contrastive reveal in the digest's voice. Borderline; if counted, the total is 5.
- `:487` Lead — *"What sets the announcement apart sits underneath the number."* Positional, not negational. No "is not" is asserted.
- `:507` Lead — *"Uber makes no argument of that kind, offering org design as the whole of its case."* Factual contrast inside the mandated Oracle throughline rather than a reframing of the story's significance. Borderline; if counted, the total is 5.
- `:468` Week at a Glance — *"publicly reported events, not a sector measure."* Mandated attribution guard (§5.10). Excluded.
- `:505` Lead — *"structural rather than a judgement on individual performance."* Reported source framing, mandated by §0.1 and §6. Excluded.
- `:678` Other News — *"the vendor's own rather than established practice."* Mandated attribution (§7 item 12). Excluded.
- `:770` Leadership Read — *"a different thing from an agent acting on its own against a live estate."* Mandated agent-terminology precision (v3.0). Excluded.
- `:783`, `:792` — Laycock's two quotations. Direct quotations, exempt under §1.7 note 14, and **the structure is not echoed in the digest's own voice anywhere in that section**. Verified.

**Ruling: 4 counted, against a hard cap of 2 and against the briefs' own allocation of 1. Even at the most conservative reading — dropping both "rather than" comparatives — the count is 2, at the cap and double the briefs' allocation.** The plan predicted exactly this failure mode and it recurred.

## Quote allocation & attribution fidelity (v3.6): **PASS**
Every double-quoted phrase in the body extracted mechanically — **18 in total** — and checked against the §1.7 allocation and the §19 verified-facts ledger. All 18 are in the ledger; all 14 allocated quotes appear in their allocated slot and nowhere else; **no quote appears in two slots.**

Fowler → Editorial Moment (`:443`). Anthropic's partner-practices sentence → Week at a Glance (`:462`). Uber's "7+ layers … by 20%" and Khosrowshahi's "building versus managing" → Lead (`:491`, `:505`). NVIDIA's open-platform commitment → QT1 (`:539`). Pickering's three lines → QT2 opener, body and inline phrase (`:553`, `:560`) — **the truncated "one pane of glass" sentence correction K barred does not appear; only the phrase is quoted and the rest is reported.** Unit 42's "80-page, technical audit", "less than 10 hours" and "around two weeks" → Feature (`:595`). METR's "fail-open vulnerability" clause → Feature (`:619`) — **quoted from the clause after "The vibe-coded app included", so the barred neologism is not reproduced.** Trokis's two lines → In Practice opener and pull quote (`:652`, `:657`), **with the parenthetical and emoji elided exactly as §1.7 note 12 authorised.** Laycock's four → Leadership Read (`:783`, `:786`, `:789`, `:792`).

**Attribution fidelity: no invented label is put in any source's mouth.** "Shift the judgment left", "Review by exception" and "fitness functions" are attributed as Laycock's own labels and were confirmed as hers on re-fetch. The digest's own framings are marked as the digest's — *"the reading that follows is this publication's"* (`:661`). Pickering's 85% is his figure and is said to be unaudited (`:553`). Amazon's 39,000 is the announcement's own claim (`:679`). The 6,300 tally is a round-up's count (`:468`). PayPal's ~220 stands against a reported ~600 (`:575`). The 3,300 is TechCrunch's reporting, not Uber's (`:487`). HashiCorp's argument is the vendor's own (`:678`). Ludicity's 0% is characterised as one consultant's account of his own client base (`:809`). Verified but unallocated quotes stayed unallocated: **0 occurrences of any Huang quote, any Paracelsus original, or any Shevchenko quote.**

## Audience framing & voice (v1.31): **PASS**
Sentence-level grep across the body: *"the reader"* **0** · *"reader's"* **0** · *"your team"* **0** · *"your firm"* **0** · *"your org"* **0** · *"your customers"* **0** · *"you must"* **0** · *"you should"* **0** · *"you need"* **0** · **any instance of "your " 0**. No rhetorical question is posed to the audience. The Leadership Read discussion prompt is written third-person and impersonally (`:801`) — the named v1.31 failure case ("Which of *your* services…") is avoided. First-person plural appears only inside three direct quotations (Anthropic at `:462`, Laycock at `:783` and `:792`) and nowhere in the digest's own voice. Banking and fintech content is framed as the world the reader operates in, never as a compliance briefing.

## Agent terminology precision (v2.6 / v3.0): **PASS**
Three sections use "agents" for three different things and each names its end of the spectrum on first use. **Feature** (`:591`): *"AI agents ran every stage, at the far end of the spectrum: operated by an attacker against a live estate, nobody approving each step"*, reinforced by the Jargon Watch sidebar which names both ends. **Other News** (`:676`): *"internal agents inside an execution layer the organisation owns and observes"*. **Leadership Read** (`:770`): *"code-generating assistance inside developer workflows, where an engineer triggers the work and reads the result — a different thing from an agent acting on its own against a live estate"*. No section uses "deploy agents" as a standalone term across multiple paragraphs.

## Sources & links: **PASS** — see Part 4.

## Date-range enforcement (v1.4): **PASS**
Lead (2 Sep), QT1 (3 Sep), QT2 (3 Sep), Feature (2 Sep and 31 Aug), mid-accent (31 Aug), and every Week at a Glance item are all inside 29 Aug – 4 Sep. Out-of-window material is dated explicitly on the page in every case: OpenAI's postmortem *"on 26 August, outside this window"* (`:462`), the Lloyds outage under an "Aug 26" date block (`:734`), the Alliance under "Aug 18" (`:742`), Zalando's snapshot "14 August" and Ludicity "18 July" in Recommended Reading (`:809`, `:810`), and the In Practice piece dated "April 2022" in the author card with the *"a classic worth revisiting"* tag. No out-of-window story receives anchor or quick-take treatment.

## Design: **PASS**
Single complete HTML file. **Template CSS verified byte-for-byte against `assets/weekly-template.html`: the only difference is the appended `.feature-article` block** (11 lines, `:378–388`), which matches the spec's definition — off-white background, 3px teal top border, `padding:40px 48px`, teal section label, Playfair 28px `h2`, and a `@media(max-width:700px)` rule following the existing padding pattern. Nothing else in the stylesheet was touched. Every class used in the body resolves to a CSS rule except `back-to-archive`, which is inline-styled by design with a comment explaining why. **Exactly one real `<svg>` element** in the body (the Feature contrast bar) — no CSS approximations of charts. **`<img>` returns 0** — no AI-generated images, stock photography or decorative illustration. No inflammatory headlines; the Feature uses "ransomware", "intrusion" and "attack" and nothing beyond.

## Content enhancements (v1.6): **PASS**
Cover reading time present in `.cover-read-time`. Lead `.pq-bar` deliberately omitted with the reasoning recorded at §1.1 — **`pq-bar` has 0 uses in the body**, which is the intended state, not an oversight. Each quick take ends with a bold "The takeaway" (`:541`, `:562`); the Feature does the same (`:627`). Lead, Feature and Leadership Read all use h3 subheadings. The Leadership Read ends with **"This could be worth talking about:"** plus one specific question anchored in Laycock's argument. No compliance side-note (correctly — no genuine regulatory angle). One `.stats-tile`, earning its emphasis on the anchor stat.

## Pacing & layout (v3.5): **PASS**
Quick hits open briskly, the Lead and quick takes build, the Leadership Read closes slowly. Tier 2 labels are written in sentence case in the HTML ("Action required", "Worth knowing", "Watching"). The Lead's sidebar is a floated inset (`.concept-of-week`), not a grid sidebar. `.article-with-sidebar` unused. Editorial moment sits after the foreword and before the Week at a Glance, brief and curatorial.

## Reader service components (v3.8): **PASS**
`.concept-of-week` present and warranted — *span of control* is the Lead's core management idea and the binding §1.3 condition (the prose must use the phrase) is met at `:511`. **Author cards on both In Practice and the Leadership Read** — text initials avatars (JT, RL), name, role + organisation, date; no photos. Cross-issue throughlines used twice, both single-topic and both permitted: Oracle in the Lead (`:507`, see finding 4) and Issue 23's deep dive in the Feature (`:625`).

## Visual identity (v1.31): **PASS**
Identity strap with the `.cis-vol` **teal pill badge** at 22px padding (`:401–406`). Cover tagline in italic teal beneath the masthead (`:409`). **Bordered orange week badge** — transparent fill, orange border (`:22`, `:413`). Dot-grid motif at 7% opacity on the cover background (`:13`). `.cover-lead-stat` variant chosen on substance (the issue's most memorable number). Per-section `(N min)` times on all ten `<h2>`-bearing sections. Drop caps: the Lead uses `.lead-article` with `.lead-intro` on the first paragraph, matching the CSS selector; the Leadership Read uses `.mgmt-section` with `h2 + p`. **Footer `.footer-vol` teal pill badge** (`:818`). In Practice header treatment is the v1.31 off-white header flowing into the off-white inset, preceded by a `feature-break`. **No editor's note** — `editor-note` has 0 uses in the body (Issue 12 only). Thumbnail distinguishability holds: strap, tagline, bordered badge and footer pill are all present, so the reader hits a Vol. II signal four times before the foreword.

**Palette by concern (v1.32):** Lead label `.section-label.orange` (Management & teams) ✅ · QT1 and QT2 both `.qt-header.devex` deep teal, **QT2 teal not red** ✅ · Feature `.section-label` default teal, **not red** ✅ · Week at a Glance, Foreword, In Practice header, Other News, Platform Updates, On the Radar, Recommended Reading all default teal — structural landmarks carry no content cue ✅ · Leadership Read navy `.mgmt-section` ✅. **`.section-label.alert` has 0 uses in the body.** The only red in the issue is the Week at a Glance *Action required* tier label and its `qh-badge red` on the PaperCut line, which is an active-exploitation item with a federal deadline — exactly the case the guardrail permits.

## Visual density (v1.30): **PASS**

| # | Section | Visual | Real diagram? |
|---|---|---|---|
| 1 | Cover | `.cover-lead-stat` — 20% | No |
| 2 | Lead | `.compare-table`, **4 rows × 2 columns** (cap 5) | **YES — #1** |
| 3 | QT1 | `.stats-row` — 3m / 18m / 200k | No |
| 4 | QT2 | `.stats-tile` — >85%, three months | No |
| 5 | Feature | Hand-crafted inline `<svg>` contrast bar, scaled in days, with the source of both figures stated on the chart | **YES — #2** |
| 6 | In Practice | Section-native `.pull-quote` | No |

**Counted total 6, at the ceiling of 4–6. Real diagrams 2, against a floor of 1–2, in two distinct forms.** The Leadership Read's centred `.pull-quote` blockquote and the Editorial Moment's `.em-quote` are correctly not counted, for the reasons recorded at §1.1 — I audited that reasoning rather than inferring it, and it holds: six major sections plus the cover mechanically demand seven elements against a ceiling of six, and the resolution is to not double-count components other rules already mandate. **Per-section visual floor — all six major sections clear:** Lead (compare-table + Concept of the week), QT1 (stats-row), QT2 (stats-tile), Feature (SVG + Jargon Watch), In Practice (pull quote), Leadership Read (mandated blockquote). No major section is pure prose end to end. The SVG is a genuine `<svg>` element with a descriptive `role="img"` label, not a CSS approximation. `.sparkline` unused; `.compare-table` within its 5×2 cap.

## Components (standard weekly cap 3–5): **PASS**
Five, at the cap: `.compare-table` · inline `<svg>` chart · `.mid-accent-highlight` · `.feature-article` · `.rabbit-hole`. No sixth. Off-cap as recorded: Jargon Watch, Concept of the week, In Practice, two author cards, stats row, stats tile, two pull quotes, glance table, radar timeline, two section breathers, editorial moment, cover lead-stat.

## Template compliance: **PASS**
Single file, all CSS in one `<style>` block, structure matches `weekly-template.html`, template CSS untouched except the added `.feature-article` block, cover badge matches the format. Footer archive bar shows #20 Weekly, #21 Weekly, #22 Weekly, #23 Deep Dive, **#24 Weekly with `.archive-pill.current`** — five issues, current one highlighted, and the Issue 23 deep-dive label is correct.

---

# Part 3 — The sixteen §0.6 corrections, verified individually

| # | Correction | Shipped state | Line | Verdict |
|---|---|---|---|---|
| A | 20% attaches to employees 7+ layers from the CEO, not manager roles | Cover context, prose and table row all use the layers referent. **"manager roles" 0 occurrences; "a fifth of managers" 0** | `:417`, `:491`, `:497` | ✅ |
| B | "single-threaded teams", not global/regional/country | Uber's own wording, glossed | `:505` | ✅ |
| C | METR's own three reasons | All three printed; the run plan's "no billing alert fired" absent | `:621` | ✅ |
| D | jQuery 66% is the all-websites figure | Printed in InfoQ's own order, not inverted | `:711` | ✅ |
| E | Scottish Widows, not Bank of Scotland | *"Lloyds Bank, Halifax and Scottish Widows"*. **"Bank of Scotland" 0 occurrences.** ~3,000 Downdetector reports carried | `:734` | ✅ |
| F | OpenAI published 26 August | *"OpenAI published its postmortem on 26 August, outside this window"* | `:462` | ✅ |
| G | Anthropic's containment post is 31 August; ZDR is 1 September | Both dates printed, on the correct posts, as two separate items | `:461`, `:462` | ✅ |
| H | Cite PYMNTS for the loyalty point | PYMNTS linked; **"Motley" 0 occurrences** | `:742` | ✅ |
| I | No alliance member count | *"with Visa, Mastercard and Fiserv among its members"*. **"26 members"/"26 companies" 0** | `:742` | ✅ |
| J | No Oracle figure | *"reportedly told to expect a further round in September… Nothing is confirmed by Oracle."* No number. **indiatvnews.com 0 occurrences** | `:750` | ✅ |
| K | Pickering quoted only as "one pane of glass" | Phrase quoted, the rest reported. The truncated sentence does not appear | `:560` | ✅ |
| L | No Groq comparison | **"Groq" 0 occurrences** | — | ✅ |
| M | Close timing attributed to reporting | *"Reporting puts the structure at … and the close in the first half of 2027"*, followed by *"NVIDIA's own post carries neither."* | `:529` | ✅ (with finding 5 on one clause) |
| N | Storyboard18 percentages, both figures together | ~600 / ~10% and PayPal's ~220 / ~4%, then ~164 Irish roles / ~12%, then the May 20% target | `:575` | ✅ |
| O | Foundry 32 regions, no starting count, no UK claim | 32, four named, UAE North global-only. **"28 regions" 0, "from 2" 0, "UK South"/"UK West" 0** | `:699` | ✅ |
| P | No Al Jazeera, no Quartz | **Both 0 occurrences.** Lead cites Uber, TechCrunch and HR Executive only | `:513` | ✅ |

**Sixteen of sixteen shipped as ruled.**

---

# Part 4 — Links and live verification

**All 34 external hrefs extracted and cross-checked against the §19 verified-facts ledger: every one is present in the ledger.** No fabricated URL, no URL outside the ledger. The barred domains return 0 occurrences: `careersatdoordash.com`, `indiatvnews.com`, `aljazeera.com`, `qz.com`, plus the 403-marked CNBC, Axios, Finextra, Parliament, Computer Weekly and OpenAI incident-post URLs, none of which is cited.

**Ten URLs spot-checked live with WebFetch on 4 September. All ten resolve and all ten carry the content attributed to them:**

| URL | Checked | Result |
|---|---|---|
| martinfowler.com/bliki/ParacelsusMaxim.html | Maxim wording, date, author | Live. *"The difference between a medicine and a poison is dosage."* verbatim; Martin Fowler; 2 September 2026 ✅ |
| uber.com/…/simplerfasteruber/ | The three figures | Live. *"reduced the number of employees who sit 7+ layers from the CEO by 20%"*, *"micro-teams by nearly 50%"*, *"only ~1% of employees will be remote"*, 2 September ✅ |
| unit42.paloaltonetworks.com/…investigation/ | Durations, 80-page audit, victim, researchers | Live. *"less than 10 hours"* and *"around two weeks"* confirmed; the 80-page audit clause verbatim; **victim not named and no researcher quoted** — the issue's claim at `:595` is accurate ✅ |
| metr.org/blog/2026-08-31-security-update/ | Three reasons, $600k, March 2026, fail-open clause | Live, 31 August. All three reasons match the shipped copy. Source sentence reads *"The vibe-coded app included a fail-open vulnerability that silently disabled authentication"* — **the issue quotes only from "a fail-open"**, so the barred neologism is not reproduced ✅ |
| theregister.com/…/spurs-boots-vmware… | Pickering's three lines, role, timescale | Live. All three verbatim, including the full "one pane of glass" sentence the issue correctly declines to print; CTO; ~three months ✅ |
| blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/ | Deal value, scale figures, commitment, close date | Live. $12,930,300,000; 3m/500k/1m/18m/200k; open-platform sentence verbatim. **No close date and no regulatory condition in NVIDIA's own post** — the issue's attribution to reporting is correct ✅ |
| martinfowler.com/rachels-ramblings/code-review.html | Two quotes, her three labels, role, date | Live. Both quotes verbatim; "Shift the judgment left", "Review by exception" and "fitness functions" confirmed as **her own** labels; CTO, Thoughtworks; 2 September ✅ |
| monzo.com/blog/2022/04/04/… | Two Trokis quotes | Live. Both verbatim, including the parenthetical and emoji the issue correctly elides ✅ |
| infoq.com/news/2026/09/jquery-20-years/ | The 66% sentence | Live. 66% is the **all-websites** figure — the issue's rendering is right and correction D holds ✅ |
| cityam.com/lloyds-bank-and-halifax-users… | Brands named, date, Downdetector | Live, 26 August. **Scottish Widows named; Bank of Scotland not named anywhere.** "nearly three thousand complaints" ✅ |
| learn.microsoft.com/…/whats-new-model-router | Regions, UAE North deployment type | Live. September 2026: 32 regions; the four added are Canada Central, North Europe, Norway East, UAE North; **"Canada Central and UAE North support Global Standard deployments only"**; no UK region named ✅ |
| anthropic.com/news/improving-alignment-security-efforts | Date, partner-practices quote, the 150 engineers | Live, 31 August. Quote verbatim; April overhaul flagged over 10% of environments; **"roughly 150 product engineers were redirected to security, reliability, and privacy work"** — see finding 7 ✅ |
| foxbusiness.com/…hugging-face-nearly-13b | $11.9bn, $1bn retention, close, regulatory condition | Live. $11.9bn and up to $1bn confirmed; close "in the first half of 2027" confirmed; **regulatory approval not found in the returned text** — see finding 5 ⚠️ |

That is thirteen fetches against the eight-to-ten asked for. The remaining 21 URLs were not fetched this pass; all are recorded as fetched and verified by Phase 3 on the same date, and none is load-bearing for a figure that is not corroborated elsewhere in the issue.

---

# Part 4B — First-pass findings in detail, with the exact fix

## 1. BLOCKING — Epistemic reframing: 4 against a cap of 2
**Locations:** `issue-24.html:511`, `:625`, `:654`, `:667`. Rulings and the full candidate list are in Part 2 under Prose style.

**Rule:** compliance checklist, Prose Style (v3.6) — *"Count ≤ 2 per issue confirmed"*, structural test not lexical. Briefs §18 tightens it further: *"at most ONE, in the Feature's synthesis paragraph. Zero elsewhere."*

**Fix — keep `:625` (the allocated instance) and rewrite the other three as direct declaratives:**

- `:511` — replace *"Span of control becomes a figure a peer has published rather than an outcome of hiring history, and the conversation moves towards…"* with *"Span of control is now a figure a peer has published, and the conversation moves towards…"*
- `:654` — replace *"…and he does not resolve the gap by going away to learn the stack. What he describes finding instead is that participation was available where answers were not."* with *"…and the gap stays open across the three months. What he describes finding is that he could still take part in conversations he could not have led."*
- `:667` — replace *"…is more usefully assessed on the conditions they hold for the team than on what they know of the stack, and those conditions…"* with *"…can be assessed on the conditions they hold for the team, and those conditions…"*

Word-count impact: −6 words, so the ceiling margin widens to 45. No other rule moves.

## 2. Secondary — Five silent acronyms (v3.7)
**Locations:** `:456` (CVE, and CISA named but not expanded), `:591` and `:619` (API), `:595` (SaaS), `:637` (SME), `:678` (HCP).

**Rule:** *"No silent acronyms: every acronym is expanded on first use unless it is unambiguously general-business (CEO, GDP, US, UK)"*, with the year-one-EM-from-a-non-technical-route bar. This is the same failure as Issue 22 finding 5, and SME and CVE are repeat offenders. Note that all four are doing real work: SME is the In Practice season theme label the reader meets before the section body, and CVE closes the issue's only Action Required line.

**Fix:**
- `:456` — *"CVE-2026-81578 and CVE-2026-82078"* → *"CVE-2026-81578 and CVE-2026-82078 — CVE being the public catalogue number a disclosed flaw is filed under"*; and *"CISA's Known Exploited Vulnerabilities catalogue"* → *"the US Cybersecurity and Infrastructure Security Agency's Known Exploited Vulnerabilities catalogue"* (thereafter "CISA").
- `:591` — *"a public API endpoint"* → *"a public API endpoint — an interface one system exposes for others to call"*. `:619` then needs no second gloss.
- `:595` — *"cloud, identity, container and SaaS environments"* → *"cloud, identity, container and hosted-software environments"*, which removes the acronym rather than glossing it and costs no words.
- `:637` — the `.ip-theme` label must stay a theme name, so gloss it in the body instead: at `:652`, *"Jarryd Trokis was a frontend engineer when Monzo gave him that squad"* → *"Jarryd Trokis was a frontend engineer — not the subject-matter expert for anything the team did — when Monzo gave him that squad"*.
- `:678` — *"HCP Terraform"* → *"its hosted Terraform service"* on first mention, or expand once.

## 3. Secondary — Late find §0.7 #8 imported beyond run plan §14
**Location:** `:676` — *"across 300-plus playbooks"*.

**Rule:** run plan §14 routes late find #8 (DoorDash Flux details, explicitly including "more than 300 playbooks") as **NOT slotted**, with *"Phase 4 must not import them."* §14 is the main-loop routing decision taken after Phase 3 and is binding on Phase 4.

**Conflict, stated plainly:** briefs §11 item 1 explicitly instructs the clause (*"across more than 300 reusable playbooks"*), and §19 records the figure as VERIFIED against InfoQ. Phase 4 followed the briefs; the briefs and §14 disagree, and §14 is the later document. The substance is verified and harmless, so this is recorded as a contract inconsistency rather than an accuracy failure.

**Fix (either is acceptable, the first is the letter of §14):** delete *", across 300-plus playbooks"* from `:676` (−4 words); **or** record in the state file's verification notes that §14 and briefs §11 conflicted on late find #8 and that the briefs' instruction was followed, so the next run's routing table is written against the briefs rather than over them.

## 4. Secondary — Oracle throughline runs to two sentences
**Location:** `:507` — *"Issue 22 covered Oracle reducing headcount while its capital spending nearly tripled. Uber makes no argument of that kind, offering org design as the whole of its case."*

**Rule:** run plan §3.2 and briefs §6 — *"One cross-issue throughline is permitted, **one sentence**, not a frame."* The Feature's throughline (`:625`) is correctly one sentence; the Lead's is two, and the second sentence is also the borderline reframe candidate ruled clear in Part 2.

**Fix:** merge to one sentence — *"Issue 22 covered Oracle reducing headcount while its capital spending nearly tripled; Uber offers org design as the whole of its case."* (−7 words, and it removes the borderline reframe at the same time.)

## 5. Secondary — "subject to regulatory approval" not re-confirmable in the cited source
**Location:** `:529` — *"and the close in the first half of 2027, subject to regulatory approval."*

Correction M states Fox Business carries both the close date and the regulatory condition, and the ledger records the Fox Business fetch as VERIFIED. On re-fetch this pass, Fox Business confirms $11.9bn, up to $1bn in retention equity and the first-half-2027 close, but **the returned text does not carry a regulatory-approval condition**. The clause may be present in a part of the page the fetch did not return; it is not confirmed. NVIDIA's own post carries neither, as the issue correctly says.

**Fix:** either re-fetch Fox Business and confirm the clause, or cut four words — *"and the close in the first half of 2027."* The sentence already attributes the timing to reporting, so nothing else changes.

## 6. Secondary — Two sentences past the v1.36 readability line
**Locations:** `:531` (42 words: *"NVIDIA's figures put more than 3 million models … largest contributor of open models and data"*) and `:595` (54 words: the enumerated intrusion sequence, *"Reconnaissance, the breach of the endpoint, …"*).

**Rule:** briefs §18 / run plan §9.4 — *"Break any sentence past roughly 30 words or three clauses with a parenthetical."* Every other long sentence in the issue carries an em-dash or semicolon break; these two run as unbroken enumerations.

**Fix:**
- `:531` — split after "…more than 200,000 companies." Begin a new sentence: *"NVIDIA is already the platform's largest contributor of open models and data."*
- `:595` — split after "…master administrative access inside it." Begin a new sentence: *"From there the agents validated access across cloud, identity, container and hosted-software environments and hijacked the build-and-release pipeline to take cloud keys."*

## 7. Secondary — The Anthropic 150-engineer sentence narrows the source
**Location:** `:462` — *"and 150 product engineers moved to security work."*

Anthropic's own post (re-fetched) says *"roughly 150 product engineers were redirected to security, reliability, and privacy work."* The shipped sentence drops two of the three named areas and drops "roughly". Briefs §0.7 #2 rendered it the same way, so this is inherited rather than introduced, but the v3.6 attribution-fidelity rule applies to paraphrase as well as quotation.

**Fix:** *"and roughly 150 product engineers moved to security, reliability and privacy work."* (+4 words.)

---

# Observations recorded, not findings

- **Lead length.** 455 words with the sidebar, 399 without. The spec's 300–400 band applies to the article body, and the Concept of the week box is an off-cap reader-service component, so the Lead is inside its band. Recorded because Issue 22's blocking word-count failure was a Lead overrun and the same measurement question arises here — it resolves the other way.
- **Section reading times.** Quick Takes (485 words) and the Leadership Read (455 words) both show 3 min where 200 wpm gives 2.4 and 2.3. The roundings are offset by the sub-half-minute sections rounded up and the ten section times sum to the cover's 18. Not a finding.
- **In Practice placement.** The compliance checklist's In Practice section still says the piece sits *"between Platform Updates and the Leadership Read"*; the v1.32 structure rule and the run plan's §8 order place it after the news block and before Other News. The shipped order follows v1.32, which is the later rule. Recorded so the discrepancy is visible rather than re-litigated next issue.
- **Kiro Crew wording.** *"a figure Amazon has not evidenced"* (`:679`) goes one step beyond the briefs' *"attributed as the announcement's own claim"*. It is defensible — no evidence is published — and it is an attribution-strengthening rather than a claim, so it is not recorded as a finding.
- **Week at a Glance at five items.** The Cloudflare cut was pre-authorised at briefs §5 and the section headline was updated to match. Spec floor is five. No action.
- **`.pq-bar` unspent.** Deliberate, reasoned at §1.1 and consistent with the checklist's "omit only when no quote earns it". No action.

---

# What could not be verified

1. **The "subject to regulatory approval" clause at `:529`** — the cited Fox Business page did not return it this pass. Recorded as finding 5 rather than cleared.
2. **21 of the 34 hrefs were not fetched this pass.** Thirteen were checked live and all thirteen matched. The unchecked remainder are all recorded as fetched and verified by Phase 3 on 4 September, and none carries a figure that is not either attributed on the page or corroborated elsewhere in the issue.
3. **State-file updates** are Deliver-time actions and are outside the shipped artefact. The pre-Deliver state file was read to confirm the branch the issue shipped on (`last_feature_date` null, `last_rabbit_hole_date` 2026-08-07, `consecutive_non_deepdive` 0, `in_practice_season_progress` 1, `last_leadership_read` lethain) — all consistent with the §12 updates the issue now requires. Whether they are applied cannot be verified from the HTML.
4. **Thumbnail-distinguishability against Issue 10** was assessed from the markup (strap, tagline, bordered badge, footer pill all present and correctly styled) rather than by rendering the two covers side by side.

---

**Recommendation: apply finding 1, then re-verify the three rewritten sentences and re-run the epistemic scan. Findings 2–7 are secondary and can be applied in the same pass at a net cost of about −13 words, which leaves the ceiling margin at roughly 52. Nothing in the issue requires re-reporting, re-sourcing or a structural change.**

---

# Part 5 — Delta verification

**Re-read of `issue-24.html` in full on 4 September after the main loop applied all seven findings. Every check below was re-run from scratch against the amended file — no delta was accepted on the change note alone.**

## Recount

**3,666 body words**, computed under the same Issue 22 rule (all body copy from `<body>` onward, excluding `<style>`, `<script>` and `<svg>` contents, comments stripped, punctuation-only tokens dropped). **Inside 2,600–3,700, with 34 words of ceiling margin.** Net movement from the first pass is **+5**, not the −13 projected: the three epistemic rewrites and the four deletions took out 22 words, and the five inline acronym glosses put 27 back. The margin narrowed by five rather than widening by thirteen, which is worth noting for the state file — but it holds.

**Cover reading time confirmed:** 3,666 ÷ 200 = 18.33 → **18 minutes**, which is what `.cover-read-time` says (`:405`). No change needed. The ten per-section `(N min)` values are unchanged and still sum to 18.

**All section bands still hold after the edits:**

| Section | Words | Band | |
|---|---|---|---|
| Foreword | 77 | 50–80 | ✅ |
| Editorial Moment | 72 | ~70 brief | ✅ |
| Week at a Glance | 400 | — | — |
| **Lead** (387 excl. sidebar) | 443 | 300–400 body | ✅ |
| Quick Takes | 481 | — | — |
| **Feature** (446 excl. Jargon Watch) | 502 | 400–600 | ✅ |
| **In Practice** (338 excl. author card) | 355 | 300–450 | ✅ |
| **Leadership Read** (445 excl. author card) | 455 | 400–600, floor 400 | ✅ |

## Delta-by-delta verification

| # | First-pass finding | Delta shipped | Re-verified | Verdict |
|---|---|---|---|---|
| **1** | Epistemic reframing 4 → cap 2 | `:511` now *"Span of control is now a figure a peer has published"*; `:654` now *"…the gap stays open across the three months. What he describes finding is that he could still take part in conversations he could not have led."*; `:667` now *"can be assessed on the conditions they hold for the team"*; `:625` retained verbatim | **Full structural scan re-run over the whole body, not a lexical check.** `instead` and `more usefully` now return **0**. The scan surfaces one counting instance: `:625`, *"The failure in each case was not a missing control but an unwritten one"* — the instance §18 allocated. Seven `rather than` hits and two `is not` hits were each examined and ruled clear (see below). **Count = 1, against a cap of 2 and against the briefs' own allocation of 1.** As a bonus the merged Oracle sentence removed the borderline candidate at `:507` | ✅ **CLEARED** |
| **2** | Five silent acronyms | CVE glossed at `:456`; CISA expanded to *"the US Cybersecurity and Infrastructure Security Agency's (CISA)"*; API glossed at `:591`; SaaS → *"hosted-software environments"* at `:595`; SME glossed at `:652`; HCP → *"its hosted Terraform service"* at `:678` | Acronym scan re-run over the body. The remaining set is **AI, AWS, CEO, CTO, HPE, HR, METR, NVIDIA, PYMNTS, UAE, US, VM, ME-CENTRAL/ME-SOUTH, TBC, II, JT, RL** — every one an organisation name, a product name, a general-business term or already glossed (METR at `:619`). **No silent specialist acronym remains.** The `.ip-theme` label still reads "Making technical decisions when not the SME" and still greps clean for "week"/"of 3"/"of 4"/"part" — correct, since v1.34 requires the label stay a theme name and the gloss belongs in the body, which is where it went | ✅ **CLEARED** |
| — | CISA gloss clause cut for budget | *"the US list of flaws confirmed to be under active exploitation"* removed | Checked whether the urgency signal survived. It does: the item's bold opener already states the flaws *"are being chained in live attacks"*, and the catalogue's name carries its own meaning. No §0.6 correction and no §19 ledger entry depended on the cut clause. The conditional-10 split still holds — Week at a Glance carries ownership and cites Rapid7; On the Radar carries only the 14 September date and cites CISA | ✅ Acceptable |
| **3** | "300-plus playbooks" (late find #8) | Clause deleted from `:676` | `playbooks` returns **0** in the file. The item now carries only the two figures the pool held. **Run plan §14 is satisfied to the letter**; late finds #1, #5, #7, #8, #9 are all absent, and #2, #3, #10 remain in their authorised one-clause form | ✅ **CLEARED** |
| **4** | Oracle throughline two sentences | `:507` now *"Issue 22 covered Oracle reducing headcount while its capital spending nearly tripled; Uber offers org design as the whole of its case."* | One sentence, 22 words, semicolon break. The permitted cross-issue throughline count for the issue is two — this one and the Feature's at `:625` — both single sentences, both as §3.2 and §9 bind | ✅ **CLEARED** |
| **5** | Unconfirmable regulatory-approval clause | Cut from `:529`; close date retained | `regulatory approval` returns **0**. The sentence now reads *"…and the close in the first half of 2027. NVIDIA's own post carries neither."* Checked the referent of "neither" after the cut: it now points to the deal structure and the close date, and the NVIDIA re-fetch confirms the newsroom post carries neither of those — so the sentence is still accurate, and correction M's requirement to attribute timing to reporting is still met | ✅ **CLEARED** |
| **6** | Two sentences past the readability line | `:531` split after "200,000 companies."; `:595` split after "master administrative access inside it." with the *"From there the agents…"* sentence | Re-measured: `:531` longest sentence now **29 words**; `:595` longest now **30 words**. Both inside the ~30-word line. The Feature's enumeration reads better broken and the new sentence carries the SaaS replacement wording cleanly | ✅ **CLEARED** |
| **7** | Anthropic sentence narrowed the source | `:462` now *"roughly 150 product engineers moved to security, reliability and privacy work"* | Matches Anthropic's own post as re-fetched — *"roughly 150 product engineers were redirected to security, reliability, and privacy work"*. "roughly" restored, all three areas named. Attribution fidelity closed | ✅ **CLEARED** |
| — | Main-loop visual fix (not a finding) | Week at a Glance badges shortened to "Vendors" and "Loyalty" | Both render inside the pill. "Vendors" is accurate for the Anthropic enterprise-terms item. "Loyalty" is coherent with the item's own framing — the copy is unchanged and ends *"the recurring problem in a rewards programme running several experiments at once"* — so the badge matches the angle the digest takes on it rather than the source's own subject. Acceptable; a more literal "Experiments" would also have worked. The other three badges, the tier labels, the five-item count and the "Five stories in sixty seconds" headline are all unchanged and consistent | ✅ Acceptable |

## The re-run epistemic scan in full

**Counting (1):**
- `:625` — *"The failure in each case was not a missing control but an unwritten one"*. Canonical "not X but Y", in the Feature's synthesis paragraph. **This is exactly the one instance briefs §18 allocated.**

**Examined and ruled clear:**
- `:461` *"in storage the customer controls rather than Anthropic's"* — a factual statement of where data physically sits, not a reframing of significance.
- `:483` *"It is a design choice rather than an accident of hiring"* — inside the `.concept-of-week` glossary box. A definitional gloss distinguishing a craft term from its common misreading is a different act from editorial reframing, and the component is a reader-service box rather than analytical prose. **Recorded explicitly because it was not listed in the first pass's candidate table and should have been** — it is unchanged by the deltas, and it is ruled clear on the reasoning above rather than by omission. If a stricter reading counted it, the total would be 2, still inside the cap.
- `:505` *"structural rather than a judgement on individual performance"* — reported source framing, mandated by §0.1.
- `:678` *"the vendor's own rather than established practice"* — mandated attribution.
- `:786` *"held before implementation rather than after"* — temporal contrast.
- `:786` *"a property of the system as a whole rather than of one change"* — definitional gloss of *fitness functions*.
- `:456` *"an estate patched early is not necessarily covered"* — declarative warning.
- `:553` *"The 85% is his figure and is not audited"* — mandated attribution.
- `:783`, `:792` — Laycock's quotations, exempt under §1.7 note 14; the structure is still not echoed in the digest's own voice anywhere.

**Ruling: 1 counted against a cap of 2. The blocking finding is cleared, and the issue now sits at the briefs' own tighter allocation rather than merely inside the spec's.**

## Everything else re-checked and unmoved

Re-run in full against the amended file, because seven edits across nine sections can move things that were previously clean:

- **Template CSS:** diff against `assets/weekly-template.html` still shows exactly **11 added lines**, the `.feature-article` block, and nothing else.
- **Links:** **34 unique external hrefs**, identical to the first pass. All still in the §19 ledger. `careersatdoordash.com`, `indiatvnews.com`, Al Jazeera, Quartz, Motley Fool all still 0.
- **Quotes:** **18 quoted phrases**, identical set to the first pass — no quote added, removed, re-slotted or re-worded by the edits. One quote, one slot still holds; attribution fidelity still holds.
- **Corrections A–P:** re-grepped. "manager roles" 0 · "Bank of Scotland" 0 · "Groq" 0 · "26 members" 0 · "Thunderbird" 0 · "28 regions" 0 · "UK South" 0 · "vibe-coded" 0 · "MITRE" 0 · "MCP" 0 · "TrueSource" 0. **Sixteen of sixteen still shipped as ruled.**
- **Voice (v1.31):** "the reader" 0 · "your " 0 · "you should" 0 · "you must" 0. Clean.
- **Components and visuals:** unchanged — `pq-bar` 0, `article-with-sidebar` 0, `editor-note` 0, `section-label alert` 0, `<img>` 0, one `<svg>`, two section breathers, two author cards, two pull quotes, one each of compare-table / stats-tile / stats-row / rabbit-hole / mid-accent-highlight / feature-article / jargon-watch / concept-of-week. **Five rotating components at the cap, six counted visuals, two real diagrams, per-section floor met in all six major sections.**
- **Footer:** "Outside In returns next week" present; "In Practice returns next week" still 0; archive bar #20–#24 with #24 current.
- **Concept of the week binding condition:** the Lead's prose still uses the phrase "span of control" (`:511`) after the rewrite — checked specifically, because the rewritten sentence is the sentence that carries it. The box stands.
- **AI-substrate count:** unchanged by the edits. Lead still 0 AI/agent mentions, Editorial Moment still 0, In Practice still 0. **1 of 5 featured sections present, cap 4 of 6.** v1.35 long-form variety still 1 AI-primary of 2.

## Two residuals introduced by the remediation — recorded, not blocking

Both are prose polish created by the fixes themselves. Neither breaches a rule with a numeric ceiling — v1.36 asks that long sentences be broken with a parenthetical, and each of these does carry its breaks — so neither blocks delivery. Recorded so the next issue's Phase 4 sees them rather than inherits them.

**R1 — `:654` now repeats itself.** My suggested rewrite was applied but the pre-existing third sentence was kept alongside it, so the paragraph says the same thing twice: *"…he could still take part in conversations he could not have led. He could wade into conversations to offer help or insight…"*. The opening sentence also carries "three months" twice: *"His account of the first three months reads as a journey, and the gap stays open across the three months."* This is my fix's fault, not Phase 4's.
*Optional tidy (−13 words, widening the ceiling margin to 47):* replace the first two sentences with *"His account of the first three months reads as a journey, and the gap stays open throughout."* and let the existing *"He could wade into conversations…"* sentence carry the mechanism on its own.

**R2 — three sentences lengthened by the inline glosses.** `:456` is now **66 words** (was 58), `:652` **59 words** (was ~48) and `:591` **43 words** (was ~38). Each carries the em-dash breaks v1.36 requires, so each complies with the letter of the rule, but `:456` now runs two dash-parentheticals plus a semicolon in one sentence and `:652` runs two nested dash-parentheticals in a row.
*Optional tidy for the worst of them, `:652`:* move the SME gloss into its own sentence — *"Jarryd Trokis was a frontend engineer when Monzo gave him that squad — a small team owning one area — running the infrastructure everything else at the bank sits on. He was not the subject-matter expert for anything the team did."*

## Ruling

**All seven first-pass findings are cleared. No new blocking finding. Two non-blocking prose residuals recorded above. The issue is at 3,666 body words with the cover reading time correct, every §0.6 correction intact, the source cap and adjacency ledger unmoved, and the epistemic-reframe count at 1 against a cap of 2.**

**PASS. Cleared for delivery.**
