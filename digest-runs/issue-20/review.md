# Issue 20 — Phase 5 Review (FULL)

**Date:** Friday 2026-07-31 · **Format:** Standard Weekly · **Volume:** II
**Mode:** FULL review, per run plan § 9 (ten-entry unverified-claim register · an anchor built on an unexplained incident · a documented divergence from a legacy SKILL.md line).
**Artefact under review:** `digest-runs/issue-20/issue-20.html` (813 lines, 3,577 body words) and `issue-20.pdf` (12 pages).

---

## 0. Verdict

> ## ❌ **FAIL — 3 blocking defects, all localised. PASS on everything else.**
>
> The issue is substantively compliant and, on the evidence, unusually clean: **all nine § 9 corrections were applied**, **the entire fifteen-row unverified-claim register held**, structure / adjacency / source caps / long-form variety / AI-substrate / palette all pass, and **every one of the 22 content URLs matches the § 10 resolved list exactly — none invented, none altered, none on the do-not-link list.**
>
> It fails on three **attribution-fidelity** defects, which is precisely the class of error the FULL review exists to catch:
>
> 1. **The Intel quotation is misquoted** — Intel said *"company"*, the issue prints *"organization"* inside quotation marks attributed to Intel.
> 2. **The Editorial Moment carries no source attribution at all** — five factual claims, zero links; and one of them (Intel's 22%) is not supported by the source the brief assigns to it.
> 3. **The QT1 chart silently changes the source's unit** — LeadDev reports *"one in eight **workflows**"*; the chart is labelled *"**Pull requests** involving more than one human — 12.5%"*, footnoted *"as reported by LeadDev"*. LeadDev never states 12.5%.
>
> All three are one-to-three-line edits in Phase 4 copy. **No re-plan, no re-curation, no section re-write is required.** Nothing goes back to Phase 2 or Phase 3.
>
> **The 12-page length is NOT a blocker and NOT a defect. See § 1 — the recommendation is to ship at this length.**

---

## 1. HEADLINE FINDING — page count. **Recommendation (b): ship at this length.**

**The facts.** The rendered PDF is **12 pages** against the spec's *"Target 5–7 pages (hard limit)"* (editorial-spec.md line 342). Body word count is **3,577**. Every section sits at or inside its briefed range — Phase 4's self-report is accurate; I re-measured independently (§ 6.6). The overage is entirely cumulative: reference and furniture sections plus six visuals, not one bloated article.

**Why this is not an Issue 20 problem.** The comparison the run notes draw against Issue 19 is misleading. Issue 19 is the *smallest* issue in the run's history, not the baseline:

| Issue | Body words | PDF pages |
|---|---|---|
| 11 | 3,637 | 13 |
| 12 | 3,280 | 12 |
| 13 | 2,797 | 11 |
| 14 | 3,142 | 11 |
| 15 | 2,839 | 11 |
| 16 | 3,009 | 13 |
| 17 | 3,147 | 13 |
| 18 (deep dive) | 2,854 | 13 |
| 19 | 2,416 | **9** |
| **20** | **3,577** | **12** |

Nine consecutive issues have shipped at **9–13 pages**. Issue 20 at 12 pages / 3,577 words sits at the top of the established band but inside it — Issue 11 shipped 3,637 words at 13 pages. **No prior Phase 5 review has ever raised page count**; I checked issues 15–19. The 5–7 page line has never once been enforced in this publication's history.

**Why the limit is arithmetically unreachable — proof by construction.** The spec's own *mandatory* floors, all binding on a Standard Weekly:

| Element | Floor | Cuttable? |
|---|---|---|
| Lead | 300 | to 300 only |
| QT1 | 150 | to 150 only |
| QT2 | 150 | to 150 only |
| *In Practice* | 300 | **explicitly not a page-cut lever** (spec line 441) |
| Leadership Read | 400 | never below 400; omit cleanly instead |
| Outside In | ~300 (Format A) | cuttable — step 1 of the cut order |
| Foreword + Editorial Moment | ~105 | no |
| Cover + WAG (3 tiers) + Other News + Radar + Recommended Reading + footer | ~540 as built, ~450 stripped to bare minimum | partially |

Rendered density across the last ten issues is **~270 words/page** at this template's typography (16px body, 1.7 line-height, 900px column, 60px section padding, plus section chrome and visuals). Seven pages ≈ **1,890 words total**. The mandatory floors alone — **with Outside In omitted entirely, the Rabbit Hole dropped, Week at a Glance stripped to three items, Other News to two, and every long-form section pinned at its exact floor** — still total **~1,945 words ≈ 7.2 pages**.

So 7 pages is reachable only by shipping a Standard Weekly that has no Outside In, no Rabbit Hole, a gutted Week at a Glance and a gutted Other News, with every long-form section at its minimum. That is not a Standard Weekly; it is a Light Edition wearing a Standard Weekly's section labels. **The page limit and the section floors are mutually unsatisfiable.**

**Walking the spec's own cut order for this issue, to show what (a) would actually buy:**

| Cut-order step (spec line 441) | Applied to Issue 20 | Words saved | Verdict |
|---|---|---|---|
| 1. Shorten / remove Outside In | Remove Shopify / Deveau entirely (369 prose + author card + stats row = ~417) | **417** | Costs the second consecutive Outside In omission (Issue 19 also omitted it), voids the whole of run-plan § 6's slot justification, and drops long-form variety to 2 of 2 |
| 2. Drop the Feature or Down the Rabbit Hole | No Feature. Drop Blacksmith | **62** | Loses the issue's only Rabbit Hole since 2026-06-26; cadence gate was open and it connects directly to the outage-heavy front half |
| 3. Demote weakest article | QT2 → Other News | 240 | **BLOCKED.** Drops anchor news-event count to 1 of 3 (floor is ≥2) and within-issue concern diversity from 3 to 2. Cannot be taken |
| 4. Tighten lead to 400 words | Lead is already **374** | **0** | Nothing to take |
| 5. Shorten Leadership Read toward 400 | 450 → 400 | **50** | At the floor; no further |

**Total available without breaching a floor or another rule: ~529 words ≈ 1.9 pages. 12 → ~10 pages.** Still three pages over, having spent the Outside In slot, the Rabbit Hole and the Leadership Read's headroom to get there.

**Recommendation — (b), unhedged.** Ship Issue 20 at 12 pages. The overage is a property of the template and the mandatory section floors, not of this issue's editing, and it is consistent with every issue since #11. Cutting per the spec's order would remove three genuinely earned sections, breach the anchor news-event floor if carried to step 3, and still miss the target by three pages.

**Two actions that follow from this finding, neither of which blocks publication:**

- **Raise a spec amendment.** *"Target 5–7 pages (hard limit)"* is a dead letter and should be replaced with a word budget that matches the floors it coexists with — **2,800–3,600 body words (≈ 10–13 pages)** for a Standard Weekly, with the existing cut order retained as the over-budget remedy. Leave the Light Edition at 3–4 pages. Until amended, every future Phase 5 will keep logging the same non-finding.
- **Optional trim, non-blocking.** Issue 20 is at the *top* of the historical band (3,577 vs a nine-issue mean of 3,075). Roughly 150 words would bring it to the band's centre without touching any floor: the Editorial Moment is 74 words against a 55–70 brief (−9), QT1 sits at the top of its 150–250 range (−30), and the Lead's final two paragraphs restate the dependency point twice (−60 to −100). This is craft tightening, not page-count enforcement, and it is not required.

---

## 2. BLOCKERS

### B1 — Intel is misquoted. *(Quote Allocation & Attribution Fidelity, v3.6 — quoted-phrase scan)*

**Issue 20, Editorial Moment:** *…describing the result as a `"more focused and efficient organization"`.*

**Tom's Hardware, 21 July 2026, verbatim:** *"As part of our broader strategy to become a more focused and efficient **company**, (the data center group) is aligning its organization to ensure it has the right roles and skills in place…"* — Intel, in a statement.

Two defects in one clause:
- **"organization" is substituted for "company"** inside double quotation marks attributed by name to Intel. The checklist is unambiguous: *"every double-quoted phrase in the HTML attributed by name to a source has been checked against the source's actual wording. Paraphrased forms are marked as paraphrases, not rendered as direct quotes."*
- **The framing is inverted.** Intel offers this as the *broader strategy the realignment serves*; the issue presents it as Intel *"describing the result"*.

Note this error originates in section-briefs § 3, which records the in-body attributed statement as *a "more focused and efficient organization"*. Phase 4 carried Phase 3's error faithfully. Either way it ships as a misquote.

**Fix:** `…as part of a broader strategy to become, in Intel's words, "a more focused and efficient company".`

### B2 — The Editorial Moment carries no source attribution, and one of its figures is unsupported by its assigned source.

The `.editorial-moment` block has **zero links and zero source line**. It carries five factual claims: 630 roles · a fifth of staff · full-year revenue growth reaffirmed at 19–20% · a raised margin outlook · Intel DCAI Q1 2026 revenue up 22% to $5.1bn. Section-briefs § 5.10 assigns it *TechCrunch 22 Jul; Tom's Hardware 20–21 Jul*, and § 10 resolves both URLs. Neither appears in the HTML.

This fails **Sources & Links — "Every section has source attribution."** Every other content section in the issue carries a `.source-tag` or `.on-source`; the Editorial Moment is the sole exception.

Compounding it: **I could not verify the 22% against Tom's Hardware.** I fetched the article — it confirms *"the data center group reporting sales of $5.1 billion for the first quarter"* and *"unknown number of cuts"*, but the only percentages in the piece are 10%, 19% and 20%. **22% does not appear.** The figure *is* real — `candidates.json` carries a TrendForce secondary source whose own slug reads `…despite-the-units-22-1q26-revenue-growth` — but as shipped, the issue publishes a growth figure that is traceable to nothing it cites.

**Fix:** add a source line to the Editorial Moment — `<p class="source-tag">Sources: <a …techcrunch…>TechCrunch</a>, <a …tomshardware…>Tom's Hardware</a> (20–22 July 2026)</p>`. Either attribute the 22% to TrendForce as well (a new publication at 1 section — no source-cap consequence, see § 6.3) or drop the percentage and keep only the $5.1bn, which Tom's Hardware does support.

### B3 — QT1's third chart figure changes the source's unit and reports a percentage the source does not state. *(Correction § 9.8's exact failure mode)*

| | Wording |
|---|---|
| **LeadDev, 28 July (verified verbatim by me)** | *"Just one in eight **workflows** involved multiple humans."* — no percentage given anywhere in the piece; `12.5` returns **0 hits** |
| **section-briefs § 5.3 (correct)** | *"12.5% (one in eight) multi-human **workflows**"* |
| **Issue 20 body** | *"Only one **pull request** in eight — 12.5% — involved more than one human."* |
| **Issue 20 SVG bar label** | *"**Pull requests** involving more than one human"* — 12.5% |
| **Issue 20 SVG footnote** | *"Figures as reported by LeadDev, 28 July 2026."* |

Correction § 9.8 exists specifically to stop chart figures being presented as something the source did not say. Two drifts survived it: **the unit changed from *workflows* to *pull requests*** (Phase 4 diverging from a brief that had it right), and **12.5% is the digest's own arithmetic conversion of "one in eight", footnoted as a LeadDev-reported figure.** The chart then silently harmonises two different units — 79% is a PR figure, 12.5% is a workflow figure — under one axis label.

The arithmetic is exact and the substance is very likely the same thing; this is a wording defect, not a factual one. But it is a headline visual and it is the named failure mode.

**Fix:** relabel the bar *"Workflows involving more than one human"*, change the body sentence to *"Just one workflow in eight involved more than one human"*, and either drop the 12.5% or render it as *"one in eight"* with the percentage as the digest's conversion.

*(Verified clean by contrast: the other two chart figures are exact. LeadDev — "in 79% of agentic PRs, the same developer both reviewed and modified the AI's contribution, no second set of eyes" and "in 70% of projects, fewer than one in five contributors took part in an agentic workflow". Both match the issue's copy and both SVG bar geometries are proportionally accurate — 79%→190/240px, 70%→168/240px, 12.5%→30/240px.)*

---

## 3. § 9 Corrections register — **all nine verified applied**

| # | Correction | Status | Evidence in copy |
|---|---|---|---|
| **9.1** | Lloyds' Faster Payments line attributed to Lloyds' own statement; rail-failure claim NOT upgraded | ✅ **PASS** | *"Lloyds said it was 'investigating an issue affecting Faster Payments, which may cause delays'"* — attributed to Lloyds, not to customers. Followed immediately by an explicit non-upgrade paragraph: *"A bank reporting a problem with its own Faster Payments service is a different claim from the scheme itself failing, and nothing published so far establishes the second."* Handled better than the correction required |
| **9.2** | GitHub Actions 23:05 UTC 19 Jul → 03:55 UTC 20 Jul, cause quote, blast-radius caveat, githubstatus source | ✅ **PASS** | All four elements present: exact timings ✅ · *"a certificate lifecycle management failure … resulting in an SSL certificate expiration"* ✅ · *"Self-hosted and larger runners"* named ✅ · *"Standard and Mac hosted runners were unaffected, **but** reconnection traffic added three to four seconds of average API latency and elevated 5xx rates"* — the wider-blast-radius caveat is present and correctly adversative ✅ · `githubstatus.com/incidents/8vfyvq16hzh9` ✅ · **x.com absent from the file entirely** ✅ |
| **9.3** | AWS ME regions sourced to the Health Dashboard, 30 April dating, NO implied July statement | ✅ **PASS** | Radar row 5: *"AWS's most recent public update on both regions, **dated 30 April 2026**, said they had suffered damage… and that restoration was expected to take several months"*, linked to `health.aws.amazon.com/health/status`. No July statement implied; no aggregator status line; the "several months" is AWS's own April wording, not a digest-attached duration. Hard constraint honoured in full |
| **9.4** | Mastercard cross-border absent | ✅ **PASS** | `cross-border` returns exactly **1** hit in the whole file — in the Radar CBPR+ gloss, unrelated. `12%` returns **0**. Compare-table rows match § 5.4 exactly, three rows, no fourth |
| **9.5** | Monday.com "reaffirmed" not raised; no claim management rejected a margin or automation-substitution reading | ✅ **PASS** | *"while **reaffirming** full-year revenue growth of 19–20% and **raising** its margin outlook"*. No rejection framing anywhere. The run plan's original *"management explicitly rejecting both the margin reading and the automation-substitution reading"* was correctly dropped |
| **9.6** | Blacksmith dates and duration | ✅ **PASS** | Outage **21 July** (title and headline) · *"Published 22 July"* ✅ · **no duration claim made at all** — the safe course the correction permitted, and the wrong "five-hour" figure is absent · causal chain correct (webhook burst → Redis → worker scale-up → connection limit) with the verbatim fragment · **`529 Overloaded` returns 0 hits** ✅ |
| **9.7** | Intel's 22% written as Q1 2026 revenue growth | ✅ **PASS** (wording) | *"the group whose **Q1 2026 revenue** rose 22% year on year to $5.1bn"* — quarter-specific, exactly as required, and no headcount number asserted. **See B2** — the wording is right; the sourcing is missing |
| **9.8** | QT1's 79/70/12.5 attributed to LeadDev's 28 July reporting, not the arXiv abstract | ⚠️ **PARTIAL** | Attribution mechanism is correct and visible — SVG footnote *"Figures as reported by LeadDev, 28 July 2026"* and source-tag *"LeadDev (28 July 2026), **reporting the study by** Raida & Hou (arXiv, 15–16 July 2026)"* ✅. But **see B3** — the third figure's unit was changed and 12.5% is not a LeadDev-stated number |
| **9.9** | Leadership Read takeaway from the napkin-math argument, not the VC material | ✅ **PASS** | The closing h3 *"Why this is a leadership skill"* derives entirely from the arithmetic argument. **No venture funding, no founder psychology, no VC material anywhere in the section.** The discussion prompt is likewise anchored in the benchmark-vs-estimate gap |

**Eight clean, one partial (B3).**

---

## 4. Unverified-claim register — **all fifteen rows held**

| Claim | Required handling | Verified |
|---|---|---|
| Shared cause behind the six UK bank failures | Not established | ✅ *"By the end of the week no institution had published a root cause… The simultaneity is documented; the cause is not."* No shared dependency, rail or infrastructure asserted anywhere |
| Faster Payments (the rail) failed | Not established | ✅ Explicitly and actively rebutted in its own paragraph (§ 3, 9.1) |
| Cyber attribution | Must not be claimed | ✅ *"none attributed the disruption to a cyber incident"*. `cyber attack` → **0 hits** |
| "July 2026 AWS mega-outage" | Do not assert | ✅ `mega-outage` → **0 hits**. Only the 24 July us-west-2 event is claimed |
| us-east-1 / us-west-2 conflation | Do not make | ✅ **`us-east-1` returns 0 hits in the entire file.** The region is named as us-west-2 throughout. Cleanest possible handling |
| Any figure for customers affected / payments delayed / value held up | None exists | ✅ *"There is no figure in the public record… because no one has released one."* The Downdetector gloss explicitly says the figures are *"user submissions rather than a count of customers affected"*, and the SVG carries the same caveat twice — subtitle and footnote |
| Bank of Baroda 700GB / 1TB | Attribute to the extortion group, mark unverified | ✅ *"the **extortion group's own claim** and is **independently unverified**; the bank's confirmation covers the incident and its containment"* |
| Nvidia $250bn | "In talks", terms not final | ✅ *"reported to be **in talks**… **Terms are not final.**"* |
| Tech layoffs "past 200,000" | Cut entirely | ✅ `200,000` → **0 hits**. No layoff-tracker figure anywhere |
| RAM $2.80/GB → $12/GB | Cut | ✅ **0 hits** |
| CMA "10% of global revenue" | Do not repeat | ✅ **0 hits.** WAG carries *"No finding has been made"* and the Radar row repeats it |
| Perforce percentages | Omitted entirely | ✅ `Perforce` → **0 hits** |
| RedCompass ISO 20022 figures | Attribute to RedCompass Labs + March 2026, or drop | ✅ *"Research **commissioned by RedCompass Labs in March 2026**… — a **vendor-commissioned figure that pre-dates this window**."* Attributed, dated and flagged — stronger than the minimum required |
| Mastercard cross-border +12% | Cut | ✅ **0 hits** |
| Blacksmith "five-hour" · "529 Overloaded" | Correct / drop | ✅ Both absent |

**15 of 15 held. No leakage anywhere in the file, including the foreword, cover, chart labels and Recommended Reading.**

---

## 5. Lead-sanity cross-check *(Phase 4 cross-check + no-silent-re-promotion)*

| Element | Run plan | HTML | |
|---|---|---|---|
| Format | Standard Weekly | Standard Weekly (`.week-badge` = "This Week's Briefing", orange bordered) | ✅ |
| Lead | Six UK banks degraded, no published cause · PYMNTS · Operating at scale · news event | Identical, headline and framing intact, PYMNTS primary + Crowdfund Insider / City AM named as corroborating | ✅ |
| QT1 | 79% agent-raised PR self-review · LeadDev/arXiv · Ways of working · analysis | Identical, header bar teal "Ways of working" | ✅ |
| QT2 | Card networks designing the loyalty mechanic · Visa IR + Wise Marketer + Mastercard | Identical | ✅ |
| Editorial moment | "Worth a second look" — Monday.com + Intel | `.em-second-look`, both stories, both dates | ✅ |
| Cover stat | 79% — *"of agent-raised pull requests are reviewed by the person who raised them"* | Verbatim, not substituted | ✅ |
| In Practice / Outside In / Leadership Read | Zenjob-Topcu / Shopify-Deveau / Pragmatic Engineer-Eskildsen | All three as planned; § 7 fallback correctly not consulted | ✅ |
| Rabbit Hole | Blacksmith, "Post-mortem" tag | Present, tag exact | ✅ |
| Platform Updates | Omitted, 0 rows | No `.glance-table` in the file | ✅ |
| Mid-issue accent / Feature / The Stack | All omitted | None present | ✅ |

**Silent re-promotion of rejected candidates — every named exclusion verified absent:**

| Cut item | Hits |
|---|---|
| LeadDev *"the reality of being a senior engineer"* / scope-not-skill | **0** (`scope, not skill` 0 · `senior engineer` 0 · only 2 distinct LeadDev URLs in the file) |
| Zalando *"From Homegrown to Flink"* | **0** |
| Cloudflare privacy-proxy CLI | **0** — Cloudflare appears once, as a *named member* of the Open Secure AI Alliance in Other News, which the brief mandates. Not an Outside In use |
| Pragmatic Engineer *"Inside Anthropic"* | **0** |
| Pragmatic Engineer / Hillel Wayne podcast | **0** (`Hillel` 0) |
| Monzo *"The Engineering Behind the Platform"* | **0** — Monzo appears only as one of the six degraded banks in the Lead, which is the Lead's subject matter |
| Perforce | **0** |
| Meg Adams *"Influence"* | **0** (`Meg Adams` 0 · `Influence` 0) |
| Tech-layoff trackers | **0** |

✅ **No rejected candidate reappears in any slot, including Other News, At a Glance and Recommended Reading.**

---

## 6. Independent re-counts *(not trusting Phase 4's self-report)*

### 6.1 Structural epistemic reframes — **I count 2, Phase 4 self-reported 1. AT the cap, not over.**

Scanned structurally per v3.6 — *"does this sentence name what something is NOT in order to introduce what it IS?"* — not by lexical pattern-match.

| # | Sentence | Section | Verdict |
|---|---|---|---|
| 1 | *"The simultaneity is documented; the cause is not."* | Lead | **CONFIRMED** — the budgeted instance (brief § 8.3) |
| 2 | *"A bank reporting a problem with its own Faster Payments service is a different claim from the scheme itself failing, and nothing published so far establishes the second."* | Lead | **CONFIRMED** — *"X is a different claim from Y"* is the *"not X — it's Y"* family. This is the second reframe, and it was spent |
| 3 | *"Dependency registers record who a supplier is. Few record how long that supplier takes to say what happened."* | Lead | **PLAUSIBLE, not counted** — a contrast pair whose purpose is to displace the conventional frame with the article's. Structurally adjacent to *"the interesting part isn't X — it's Y"* split across two sentences. Sits close enough to the line to record |
| 4 | *"Napkin math is Eskildsen's own term, and it is more literal than it sounds."* | Leadership Read | **PLAUSIBLE, not counted** — corrects an expectation but does not negate to introduce |
| — | *"Downdetector — … the figures are user submissions rather than a count of customers affected"* | Lead | **Not counted** — a definitional gloss mandated by the brief for accuracy, not analytical framing |
| — | *"Trust built through proximity to the work is different from trust built through process and communication alone."* | In Practice | **Not counted** — Topcu's verbatim words in a `<blockquote>`, not digest voice. Structurally a reframe, but it is the source's |
| — | *"Nobody decided to remove the second reviewer."* | QT1 | **Not counted** — declarative, exactly as brief § 5.3 anticipated |

**Disagreement with Phase 4:** the cap is 2 and the issue is **at** it, so nothing needs rewriting. But brief § 8.3 and handover note 4 required Phase 4 to **name where the second was spent if spent** — it reported 1 and did not. Instance #2 is the unreported spend. Recorded, not blocking. Three concentrated in the Lead is worth noting for craft: they are all in one section.

### 6.2 Direct address in digest voice — **0. PASS.**

`the reader` · `reader's` · `your team` · `your firm` · `your org` · `your customers` · `you must` · `you should` · `you need to` → **all 0 hits.**

Whole-file scan for any `you` / `your`: **exactly 2 hits, both inside the Deveau verbatim quote** — *"The most durable advantage **you** can develop is a harness tuned to the particularities of **your** software development ecosystem."* A source's verbatim words are not the publication addressing the reader. ✅

No rhetorical questions posed to the audience. The two interrogatives both pass:
- LR discussion prompt — *"…which one should a **design review** believe — and whose job is it to notice the gap?"* Third-person, about the argument. Brief § 5.11 permits exactly this.
- IP "What to try" — *"…which of them did **a manager** pick up…"* Third-person.

Both takeaway lines and the discussion prompt state implications, not instructions. ✅

### 6.3 LeadDev sections — **exactly 2. AT the cap. PASS.**

3 `leaddev.com` hrefs but only **2 distinct URLs across 2 sections**: `/ai/ai-coding-agents-kill-team-collaboration` (QT1) and `/management/engineering-managers-have-a-new-job-description` (In Practice, linked twice — attribution line + author card, one section). **No third LeadDev item in Other News, At a Glance or Recommended Reading.** ✅

### 6.4 Source-diversity cap — **max 2 sections per publication. PASS, but four sources sit exactly at the cap.**

| Publication | Sections | |
|---|---|---|
| LeadDev | QT1, In Practice = **2** | at cap |
| arXiv | QT1, Recommended Reading = **2** | at cap |
| Blacksmith | Rabbit Hole, Recommended Reading = **2** | at cap |
| GitHub Status | Other News, Recommended Reading = **2** | at cap |
| Visa IR | QT2, Recommended Reading = **2** | at cap |
| The Register | Week at a Glance ×2 links = **1 section** | ✅ |
| investing.com | QT2 ×2 links = **1 section** | ✅ |
| Shopify · Pragmatic Engineer · PYMNTS · NVIDIA · Asian Banker · IncidentHub · Socket · TechCrunch · Newsweek · IBTimes · Quartz · Wise Marketer · AWS | 1 each | ✅ |

**None over.** Worth flagging for future issues: the four-item Recommended Reading list is what pushes four separate sources to exactly 2. It is a section for cap purposes, and it currently has no headroom left. Adding the TechCrunch/Tom's Hardware links required by **B2** does **not** breach anything — TechCrunch would move 1→2 (at cap) and Tom's Hardware would be new at 1.

Also ✅: no source used in the lead + Week at a Glance is also used as Leadership Read or quick-take anchor (PYMNTS appears in the Lead only).

### 6.5 Adjacent-source rule — **PASS.**

`Editorial Moment (TechCrunch/Tom's Hardware) → WAG (mixed) → Lead (PYMNTS) → QT1 (LeadDev/arXiv) → QT2 (Visa IR/investing.com) → In Practice (LeadDev) → Other News (mixed) → Outside In (Shopify) → Radar (mixed) → Leadership Read (Pragmatic Engineer)`

No two consecutive featured sections share an outlet. The QT1 → In Practice LeadDev pair is separated by QT2, as planned. ✅

### 6.6 Section word counts — **Phase 4's self-report is accurate. Independently re-measured.**

| Section | Measured | Brief range | |
|---|---|---|---|
| Foreword | **59** | 50–80 | ✅ |
| Editorial Moment | **74** | 55–70 | ⚠️ +4 over |
| Lead (prose) | **374** | 300–400 | ✅ |
| QT1 (prose, excl. Jargon Watch) | **~238** | 150–250 | ✅ top of range |
| QT2 (prose, excl. source tag) | **~200** | 150–250 | ✅ |
| *In Practice* (prose + blockquote + "What to try", excl. Concept of the Week) | **378** | 300–450 | ✅ |
| Outside In (prose) | **~360** | 300–400 | ✅ |
| Leadership Read (prose, excl. source tag + prompt) | **~450** | 400–600 | ✅ well clear of the 400 floor |
| **Body total** | **3,577** | — | 12 pages (§ 1) |

Only the Editorial Moment is out of range, by four words. Phase 4's claim that every section sits at or inside its briefed range is **confirmed**, with that one trivial exception. **This is the evidence that the page overage is cumulative and not attributable to any section's editing.**

### 6.7 AI-substrate across the 6 featured sections — **2 of 6. Cap is 4. PASS with margin.**

| Featured section | AI substantive driver? |
|---|---|
| Lead — UK bank failures | No |
| QT1 — agent-raised PR review | **Yes** |
| QT2 — card networks / loyalty | No |
| Editorial Moment — restructuring while growing | No — and note the HTML *dropped* the run plan's "AI Work Platform" framing entirely, which strengthens this |
| *In Practice* — Zenjob / when an EM writes code | No — the HTML also drops the source's "leveraging AI-coding tools" clause |
| Outside In — Shopify agentic harness | **Yes** |

**Four of six have AI as not the primary force**, against a floor of two. ✅

### 6.8 Long-form variety (v1.35) — **1 of 3 AI-primary. PASS.**

*In Practice* (technical leadership without the domain — non-AI) · Outside In (agent harness — **AI-primary**) · Leadership Read (first-principles technical judgement — non-AI; AI appears only as demand context behind turbopuffer). Three distinct aspects of engineering leadership against a floor of two. ✅

### 6.9 No two long-form sections adjacent (v1.32) — **PASS.**

`… QT2 → In Practice → **Other News** → Outside In → **On the Radar** → Leadership Read`. Both gaps filled by news sections. `.oi-hero-band` (retired Format B) not used. ✅

### 6.10 `.ip-theme` week-count grep — **PASS.**

`<span class="ip-theme">Technical strategy under uncertainty</span>` — season name only. `week 1` · `week 2` · `of 3` · `of 4` · `part 1` · `part 2` → **all 0 hits.** ✅

### 6.11 `.section-label.alert` misuse — **PASS.**

**10 × `class="section-label"`, 0 × `.alert`.** The Lead correctly uses default teal for an Operating-at-scale story that is not active-threat or active-upgrade-window. Structural landmarks (Foreword, Week at a Glance, In Practice header) all default teal. Outside In orange per standing rule. Leadership Read navy `.mgmt-section`. The Week at a Glance "Action required" red is *tier* styling, which is correct and not concern palette. ✅

### 6.12 Visual count and real-diagram floor — **6 content visuals, 4 real diagrams. See caveat C3.**

| # | Section | Visual | Real diagram? |
|---|---|---|---|
| 1 | Lead | Inline `<svg>` bar chart — Downdetector peaks | **Yes** |
| 2 | QT1 | Inline `<svg>` bar set — 79 / 70 / 12.5 | **Yes** |
| 3 | QT2 | `.compare-table` — Visa vs Mastercard | **Yes** |
| 4 | *In Practice* | `.compare-table` — three-way allocation rule | **Yes** |
| 5 | Outside In | `.oi-stats-row` — 80+ / 300+ / 2 / 6 | No |
| 6 | Leadership Read | `.pull-quote` centred card | No |

**Per-section floor: ✅** all six major sections carry one; no section is pure prose. **Real-diagram floor (1–2): 4 ✅**, cleared four times over. **Both SVG geometries verified proportionally accurate** — Lead: 348→539px, 269→417px, 169→262px on a 620px/400-report axis (exact); QT1: 79%→190px, 70%→168px, 12.5%→30px on 240px (exact).

Issue 19 shipped **zero** inline SVG charts; Issue 20's two are a real improvement on the real-diagram floor.

### 6.13 Component cap (3–5 standard weekly) — **5. AT the cap. PASS.**

Inline SVG chart (×2 instances, one type) · `.compare-table` (×2, one type) · `.oi-stats-row` · `.rabbit-hole` · `.pull-quote` = **5**. Off-cap by spec: `.in-practice`, `.jargon-watch`, `.concept-of-week`, `.author-card` ×3, `.radar-timeline`, cover lead-stat band, section breathers, `feature-break` rules. Verified absent: `.pq-bar`, `.stats-tile`, `.sidebar-box-float`, `.key-takeaway-box`, `.glance-table`, `.mid-accent-*`, `.process-flow`, `.sparkline`, `.oi-callout`, `.p0-status-card`, `.feature-article`, `.the-stack`, `.article-with-sidebar`.

**Rotation vs Issue 19 ✅** — Issue 19 ran `.pq-bar`, `.process-flow`, `.stats-row`, compare-table ×2, `.pull-quote` and no SVG. Issue 20 drops three of those and adds inline SVG charts and the Rabbit Hole. Not the same set.

---

## 7. URL audit — **22 of 22 match § 10 exactly. Zero invented, zero altered, zero on the do-not-link list.**

Every `href` in the file was extracted and matched character-for-character against the § 10 resolved list. Spot-fetch results:

| Resolves 200 (18) |
|---|
| pymnts.com · leaddev.com ×2 · arxiv.org/abs/2607.14037 · shopify.engineering · newsletter.pragmaticengineer.com · githubstatus.com/incidents/8vfyvq16hzh9 · health.aws.amazon.com/health/status · socket.dev/blog/npm-12 · blacksmith.sh · blogs.nvidia.com · blog.incidenthub.cloud · theregister.com ×2 · theasianbanker.com · techcrunch.com · ibtimes.com.au |

| Bot-protected, could not re-confirm (4) | Code | Note |
|---|---|---|
| investor.visa.com | 403 | Phase 3 logged 200; edge CDN now rejects non-browser clients regardless of UA |
| thewisemarketer.com | 403 | Phase 3 logged 200 |
| investing.com ×2 (Visa transcript, Mastercard) | 403 | Phase 3 pre-flagged *"browser; curl 403"* |
| newsweek.com | 406 | UA rejection |
| qz.com | 403 | Phase 3 pre-flagged |

All six are consistent 403/406 across multiple user agents — bot protection, not dead links, and five of six were pre-flagged by Phase 3. **No link is fabricated.**

**Do-not-link check — all clear:** `x.com/githubstatus` **0** · LeadDev "reality of being a senior engineer" **0** · LeadDev "Influence" **0** · PE "Inside Anthropic" **0** · PE Hillel Wayne **0** · Zalando **0** · Cloudflare blog index **0** · Monzo blog **0** · Perforce/PR Newswire **0** · layoffhedge **0** · isinternetup **0**.

**Listed in § 10 but not linked in the issue:** TechCrunch Monday.com and Tom's Hardware (→ **B2**), the RedCompass Labs URL (attributed in prose as required, link omitted — see C8), the Socket URL on Radar row 1 (linked in WAG, not on the Radar row), and the Visa release PDF (unused, fine).

---

## 8. Verbatim quote verification — **5 of 5 allocated quotes confirmed against live sources.**

I re-fetched the primary sources rather than trusting Phase 3's log.

| Slot | Quote | Verified |
|---|---|---|
| QT1 primary | Courtney Miller — *"Software development is not an isolated task, and writing new code was never the hard part"* | ✅ **verbatim** in LeadDev |
| QT1 secondary | Sarah Wells — *"I'm worried that they're not; they can't make the judgement about whether the agent is making a sensible suggestion"* | ✅ **verbatim**, attribution and role correct |
| *In Practice* | Topcu — *"Trust built through proximity to the work is different from trust built through process and communication alone."* | ✅ (Phase 3 verified; source readable) |
| Outside In | Deveau — *"The most durable advantage you can develop is a harness tuned to the particularities of your software development ecosystem"* | ✅ **verbatim** in Shopify Engineering |
| Leadership Read | Eskildsen — *"I hate benchmarks because making design decisions based on benchmarks is not a satisfying answer to me."* | ✅ **verbatim** in The Pragmatic Engineer |

**One quote, one slot ✅** — no quote appears twice, none leaks into the cover, foreword or Recommended Reading. Reserve quotes correctly unused. The Eskildsen reserve line ("this table that I maintain on GitHub… 50 of these numbers") is **paraphrased in prose, not rendered as a quote** — correct handling.

**In-body attributed statements also verified live:**
- Shopify cost envelope — *"A full application scan with publicly available frontier models costs between $50 and $300"* ✅ verbatim · *"Incremental diff scans are much cheaper, roughly $5 to $50"* ✅ verbatim · *"over 80 unique applications"* ✅ · *"produced over 300 findings"* ✅ · *"two findings would have been rated as Critical"* ✅ · *"roughly six weeks"* ✅. All four `.oi-stats-row` figures correct.
- Leadership Read mechanisms — 10 seconds vs 10 milliseconds ✅ · *"running across a hundred different nodes… of course the p99 is going to be very high"* ✅ · DRAM bandwidth across multiple cores ✅ · *"$80K/month on indexing and search; with turbopuffer in place, this dropped to $4K/month"* ✅ (rendered as *"around $80,000"* / *"roughly $4,000"* — accurate, and correctly **not** in quotation marks). The Shopify/Toxiproxy anecdote is **absent**, per the run plan's hard constraint ✅.
- Lead bank statements — Revolut, Barclays, Monzo, Lloyds all as recorded in § 3 ✅.
- Visa — Suh *"value-added services revenue grew 34% year-over-year in constant dollars to $3.8 billion"* and McInerney *"net revenue was up 14% year over year to $11.6 billion"*, both attributed by name and role ✅. Brazil campaign detail (1m participants Feb–Jun, 8% activation lift, $400m incremental volume) in prose not the table, as instructed ✅.
- **Intel — ✗ FAILS. See B1.**

**Attribution fidelity ✅** — *napkin math*, *the harness outlasts the model* and *player-coach* are all the sources' own terms and are attributed as such. No invented label is put in a source's mouth.

---

## 9. Documented divergences — **flag, do not fail**

### 9.1 Lead repeats Issue 19's operational concern (Operating at scale) — **DOCUMENTED, NOT DRIFT.**

State file: `last_lead_topic` = "Operating at scale"; `last_lead_topics_3issues` = [Operating at scale (19), Banking/fintech & loyalty (18), Management & teams (17)]. Issue 20 leads **Operating at scale** — a same-concern repeat.

- **v3.4 soft breadth guardrail (rolling 4, ≥3 of 4 concerns): rolling-4 spread = 3 distinct of 4. PASSES.**
- The repeat is documented in run plan § 5.3 with reasoning, and the alternatives that would have broken it (Monday.com, CMA) are named and rejected on the merits. That is exactly what the v3.4 clause requires.
- **The lead *story* is entirely unrelated to Issue 19's** (which anchored the agentic-attacker cluster). No editorial recycling — only a shared concern label. The no-repeat-featured-anchor rule (v1.31, previous 2 issues) is independently clean: none of Lead / QT1 / QT2 touches Issue 19's or Issue 18's anchors.

**SKILL.md line 200** still reads *"the lead article topic must differ from `last_lead_topic`"*. The editorial spec — the single source of truth — retired the mechanical rotation rules at v3.4 and replaced them with the soft breadth guardrail. **This is a stale legacy line in SKILL.md, not a rule Issue 20 breaks.** Recorded as a documented divergence per the run plan's instruction to Phase 5.

**Recommendation:** amend SKILL.md line 200 to point at the v3.4 guardrail so this stops recurring as a phantom finding every time a concern repeats.

### 9.2 Reading time — the run plan's 7–8 minute steer was correctly overridden.

Handover note 5 instructed Phase 4 to print the computed figure. Cover reads **18 min**; 3,577 ÷ 200 = **17.9**. Correctly computed from the actual final word count, and the run plan's figure is not asserted anywhere. ✅ Compliance-correct — and it is also the honest reader signal that § 1 is about.

### 9.3 Lead opener repeats Issue 19's — permitted.

`last_lead_opener` = narrative-first; Issue 20's Lead is narrative-first. **Cross-issue opener rotation was retired at v3.5** ("within-issue variety only"). Not a finding. Within-issue variety holds: Lead narrative / QT1 stat / QT2 summary are all distinct, exactly as brief § 4 allocated.

---

## 10. Comprehensive caveat list (non-blocking)

| # | Caveat | Severity | Detail |
|---|---|---|---|
| **C1** | **Per-section reading time missing on most sections** | Medium | Spec: *"each major section `<h2>` carries `.section-time` (N min)"*. Present on **3 of 9**: Lead (2 min), Outside In (2 min), Leadership Read (3 min). **Missing on** Week at a Glance, Quick Takes, *In Practice* (the `.in-practice-header .section-time` CSS rule exists and is unused), Other News, On the Radar, Recommended Reading. Also: LR is ~450 words = 2.3 min, printed as 3 min |
| **C2** | **`.cover-read-time` class not used** | Low | Spec: *"Cover includes estimated reading time (`.cover-read-time`) next to issue badge"*. The 18-min figure is a bare `<span>` inside `.cover-identity-strap`. The class is defined in the CSS and unused. Renders acceptably; template-compliance nit |
| **C3** | **Visual budget is 7 if the cover lead-stat counts — and per the spec, it does** | Low | Spec: *"the cover lead-stat / lead-quote **counts**; the Volume II identity strap does NOT"*. Six content visuals + `.cover-lead-stat` = **7** against a 4–6 budget. Phase 3 § 2.2 flagged this deliberately and treated the band as cover furniture. Reasonable reading, and it is the same call every prior issue made — but it is a documented over-count, not a pass. Same class of finding as § 1: the budget and the per-section floor (6 major sections × ≥1 visual) collide at the ceiling by construction |
| **C4** | **`.oi-callout` absent from Outside In** | Low | Checklist: *"Outside In renders its core lesson or key admission in a shaded callout box (`.oi-callout`)"*. Phase 3 § 2.1 dropped it explicitly to stay at the 5-component cap. A legitimate trade-off — Outside In still clears the per-section visual floor via `.oi-stats-row` and closes with a bold "The takeaway" — but the checklist item is unmet and should be recorded rather than silently passed |
| **C5** | **Silent acronyms: CMA, OIDC, CI** | Medium-low | *"No silent acronyms: every acronym is expanded on first use unless unambiguously general-business."* **CMA** ×2 (Week at a Glance, Radar) is never expanded to Competition and Markets Authority — the one that matters most for the year-one EM from a non-technical route, which the v3.7 bar explicitly names. **OIDC** ×2 never expanded to OpenID Connect (though "trusted publishing" itself is glossed well). **CI** ×2 unexpanded. Also unglossed: *ISO 20022* (named, with CBPR+ glossed around it), *tokenisation*, *GAAP / currency-neutral / as-adjusted* in the compare-table, *Redis* in the Rabbit Hole |
| **C6** | **Editorial Moment is 74 words against a 55–70 brief** | Trivial | +4 over. The only section outside its range |
| **C7** | **QT2 `.compare-table` is 3 columns** | Low | Spec caps `.compare-table` at *"5 rows × 2 columns"*; the CSS comment describes it as *"2-column compact"*. QT2's table is 3 rows × 3 columns (row label + Visa + Mastercard). Phase 3 § 5.4 read "2 cols" as two *comparison* columns and designed it that way. Defensible reading, renders correctly, and the *In Practice* table is a true 2-column. Interpretive divergence worth settling in the spec |
| **C8** | **On the Radar rows 1, 3 and 4 carry no source links; row 2's RedCompass research is attributed but unlinked** | Low | § 10 resolves both the Socket and RedCompass URLs. Row 2 meets the § 9 attribution requirement in prose (named + dated + flagged vendor-commissioned), so this is presentation, not fidelity. Rows 1 and 3 duplicate WAG items that *are* linked |
| **C9** | **QT1 Jargon Watch is neither floated nor ≤260px** | Low | Spec: *"small (≤260px), floated"*. Inline style overrides to `float:none;width:auto`, giving ~370px full-width inside the QT column. Justified — floating a 260px box inside a two-column QT card would break the layout — but it is a deviation from the stated component spec |
| **C10** | **QT2 header bar is orange while its concern is Wider engineering landscape** | Low | v1.32 palette guardrail: *"Wider engineering landscape concern uses default teal."* Phase 3 § 8.5 assigned orange for the loyalty / commerce-media surfacing note. Arguably card styling rather than concern palette, and two teal QT headers side by side would read flat — but it is a documented deviation from the letter of the guardrail |
| **C11** | **The foreword names three stories** | Low | Brief: *"Do not list stories. Do not name more than is needed to carry the single thread."* At 59 words it names the banks, the GitHub certificate and the AWS regions. The single thread (the public record of why is thin) genuinely holds and the closing sentence lands it — but it sits close to the line, and it restates the cover's lead item |
| **C12** | **The 79% framing is slightly tighter than the source's** | Low | LeadDev: *"in 79% of agentic PRs, the same developer both reviewed and modified the AI's contribution, no second set of eyes."* The issue (and the cover) render this as *"reviewed by **the person who raised them**"*. A reasonable reading of a single-human-oversight dataset, and it is **fixed by the run plan** (§ 8: *"Do not substitute"*), not invented by Phase 4. Recorded for precision only |
| **C13** | **Three of the issue's epistemic reframes and near-reframes are concentrated in the Lead** | Low | Both counted instances plus the strongest borderline (§ 6.1) are in one section. Within cap, but the Lead carries the issue's entire framing budget |
| **C14** | **Recommended Reading has no headroom left under the source-diversity cap** | Low | Its four links push arXiv, Blacksmith, GitHub Status and Visa IR each to exactly 2 sections. Not a breach; a constraint to be aware of when adding links (including the B2 fix, which is unaffected) |
| **C15** | **Section breather sits between Quick Takes and *In Practice*, not Quick Takes and Other News** | Trivial | Checklist wording predates the v1.32 default order, which inserts *In Practice* at that position. Count is correct (2, never more) |
| **C16** | **Four source URLs could not be independently re-confirmed** | Low | investor.visa.com and thewisemarketer.com returned 403 to me though Phase 3 logged 200; investing.com ×2, qz.com and newsweek.com were pre-flagged by Phase 3 as browser-only. All consistent bot protection across user agents. No action; recorded so the discrepancy with Phase 3's log is on the record |

---

## 11. Full checklist sweep — everything not already covered

**Workflow pipeline (v3.1):** run directory ✅ · `candidates.json` parses, 4 beats (management_teams 6, ways_of_working 7, operating_at_scale 7, banking_fintech_loyalty 9 candidates), `chartable_data` and `event_or_essay` fields present ✅ · secondary pools include `leadership_read` (3), `in_practice` (3), `outside_in` (3), plus optional `rabbit_hole` (3) and `p0_active` (0) ✅ · `run-plan.md` ✅ names lead + 26 rejected candidates with reasons ✅ · operational-concern lead test ✅ · lead-sanity (ranked first in pool) ✅ · soft breadth guardrail ✅ (§ 9.1) · `section-briefs.md` with per-section briefs and component manifest ✅ · Phase 4 cross-check ✅ (§ 5) · no silent re-promotion ✅ (§ 5) · jargon-watch coverage ✅ (below) · `review.md` — this file ✅

**Foreword:** one paragraph ✅ · 59 words ✅ · single thread ✅ · no "meanwhile"/"elsewhere"/"also this week" ✅ · drop cap via `.foreword p:first-of-type::first-letter` ✅ · **no AI-default framing** ✅ — the foreword leads on what happened; no "quiet week on the AI front", no relief, no apology. Issue-wide scan: no section frames its subject relative to AI's presence or absence ✅

**Article depth:** every article passes the "so what?" test for engineering leadership ✅ · calibrated for delivery managers, not IC detail ✅ — JFrog gives urgency and ownership with **no CVE mechanics**; the Shopify piece stays on harness-vs-model and cost, with **no detection methodology or vulnerability-class detail** (the run plan's scope discipline held); Opus 5 is framed as a budget conversation, not benchmarks ✅ · no corporate language ✅ · **no action items or recommendations** ✅

**Explain key terms (v3.7):** every term flagged in briefs § 7 that is actually used is glossed inline — *Faster Payments* ✅ *Downdetector* ✅ *value-added services* ✅ *card-linked offer* ✅ *incremental payments volume* ✅ *agentic harness* ✅ *orchestrator* ✅ *napkin math* ✅ *p99 latency* ✅ *unplanned work* ✅ *trusted publishing* ✅ *CBPR+/structured address* ✅ *certificate lifecycle management* ✅ · *Direct Connect* correctly not used ✅ · *529 Overloaded* correctly removed ✅ · Jargon Watch on *agent-raised pull request* ✅ · Concept of the Week on *player-coach* ✅. **Numerical-frequency trigger (3+ per section) re-run independently:** *harness* ×4 (Outside In) glossed ✅ · *napkin math* ×3 (LR) glossed ✅ · *unplanned* ×3 (IP) glossed ✅ · *value-added* ×3 (QT2) glossed ✅ · *agent* ×5 (QT1) covered by Jargon Watch ✅ · *Faster Payments* ×3 (Lead) glossed ✅. Gaps at **C5**

**Agent terminology precision (v2.6):** ✅ **exemplary.** The QT1 Jargon Watch names the end of the spectrum explicitly — *"a human triggers the run… **not** an autonomous production agent with action authority: no tool access, memory or standing permission to call APIs, move money or update records without per-step approval"* — and adds *"Survey and vendor figures routinely combine the two"*, which discharges the "if the source lumps both together, say so" clause

**Topic & lead selection:** news-event Lead test ✅ (27 July outage, framed in sentence one) · anchor balance 2 of 3 news events ✅ · tool releases not leads ✅ (Opus 5 → At a Glance) · within-issue concern diversity 3 concerns, one anchor each ✅ · no-repeat-featured-anchor ✅ · bank-regulator scope test recorded and CMA correctly demoted ✅ · **no FCA / PSR / Pay.UK angle in any anchor** ✅ · "worth reading" test ✅ · banking/fintech framed as the world the reader operates in, never as a compliance briefing ✅

**Audience-fit & urgency:** Lead `act_this_week` ✅ · QT1 and QT2 `decide_this_month`, high impact ✅ · no `general_awareness` in an anchor ✅ · anchor depth-fit — every takeaway works for someone not running the system ✅ · AI-substrate rolling ceiling ✅ (1 of 3 anchors)

**Structure:** section order matches the v1.32 default ✅ · WAG grouped by urgency, three tiers, 7 items ✅ · Radar deadlines-then-events, 5 rows ✅ · components rotated ✅ · 5 components ✅

**Ongoing stories:** `p0_stories_tracking` is empty and no P0 card is present ✅ · no progress bars ✅

**Leadership Read & Outside In:** Shopify absent from `outside_in_history` (12 entries checked) ✅ · angle distinct ✅ · transferability test ✅ · substitution test ✅ · not a migration / vendor-cloud / single-team / marketing story ✅ · sector rotation ✅ (recent: analyst, named-author, dev-tools; Shopify = consumer tech at scale) · LR source is a real external piece ✅ · **LR source differs from Issue 19's** (The Signal → The Pragmatic Engineer) ✅; PE last used at Issue 9 ✅ · LR transferability ✅ · **anti-overlap: LR and OI are different companies** ✅ (the Eskildsen author card's *"formerly Shopify"* is the only Shopify mention in LR, and the Toxiproxy anecdote the run plan barred is absent)

***In Practice*:** included ✅ · no week count ✅ · season state read (`current_in_practice_season` = "Technical strategy under uncertainty", progress 1 → this is issue 2) ✅ · piece from the named-author pool via LeadDev ✅ · genuinely about the work of being a manager ✅ · not in `in_practice_history` (8 entries checked) ✅ · IP and LR share neither author nor outlet ✅ · peer-level framing ✅ · **378 words** (300–450) ✅ · **substance floor ✅** — names the three-way allocation rule, carries concrete mechanisms (the trust distinction, the "eleven on a Tuesday" failure mode, the roadmap/growth exclusion rationale), and articulates the takeaway in the digest's own words · **strip-link test ✅** — remove the link and the rule, its exclusions and its rationale still teach · visual hierarchy ✅ (`.in-practice-header` flowing into `.in-practice`, full width, `<hr class="feature-break">` immediately above) · label + italic theme + bold "What to try" ✅ · positioned between the news block and Other News ✅

**Leadership Read length & substance:** ~450 words (400–600) ✅ · names the thesis ✅ · **two concrete mechanisms** (search benchmark, Cursor bill) ✅ · takeaway in the digest's own words ✅ · strip-link test ✅

**Layout choices (v3.5):** QT-A equal grid suits two comparable anchors each carrying its own visual ✅ · Outside In Format A placed after Other News, before the Radar ✅ · mid-issue accent correctly omitted ✅ · within-issue opener variety ✅ (Lead narrative / QT1 stat / QT2 summary / IP narrative / OI quote / LR stat, repeats placed 3 and 6 sections apart per brief § 4)

**Content enhancements (v1.6):** cover reading time present ✅ (class nit at C2) · Lead `.pq-bar` **omitted with documented reason** in both run plan and briefs — permitted ✅ · both quick takes end with bold `.so-what` ✅ · Outside In ends with the same ✅ · `.oi-callout` at **C4** · Lead / OI / LR all use h3 subheadings ✅ · LR ends with **"This could be worth talking about:"** + one anchored sentence ✅, not an action item ✅ · compliance side-note not used ✅ · stats tile not forced ✅

**Pacing & layout (v3.5):** weekend magazine pacing holds ✅ · Tier 2 labels in sentence case in the HTML ("Action required", "Worth knowing", "Watching", "Ways of working", "Loyalty & commerce media") ✅ · no `.article-with-sidebar` in a standard weekly ✅ · 2 section breathers ✅ · editorial moment after foreword, before WAG ✅

**Reader service (v3.8):** Concept of the Week present and warranted ✅ · **author cards on all three of In Practice, Leadership Read and Outside In Format A**, each with text initials, name, role + org, date ✅ · cross-issue throughline — **exactly one sentence**, in the Open Secure AI Alliance item, nowhere else ✅ (`Issue 19` → 1 hit)

**Visual identity (v1.31):** `.cover-identity-strap` at 22px with teal tint ✅ · `.cis-vol` teal pill ✅ · `.cover-tagline` italic teal ✅ · `.week-badge` bordered orange ✅ · 40px dot grid at 7% ✅ · `.cover-lead-stat` chosen on substance ✅ · drop caps on Lead (navy 56px) and LR (teal 52px) ✅ · `.footer-vol` teal pill ✅ · **no `.editor-note`** ✅ (Issue 12 only) · thumbnail-distinguishability ✅

**Design & template compliance:** single complete HTML file ✅ · **CSS `:root` palette byte-identical to `weekly-template.html`** ✅ · every template selector present ✅ · only addition is `.rabbit-hole`, which the template omits and which matches the spec's description (floated, 280px, teal left border, type badge) ✅ · SVGs are real `<svg>` elements with `role="img"` and descriptive `aria-label` ✅ · no AI images or stock photography ✅ · no inflammatory headlines ✅ · cover badge matches format ✅ · footer archive bar shows #16–#20 with #20 `.current`, and #18 correctly marked Deep Dive per the state file ✅

**Date-range enforcement (v1.4):** every anchor and quick hit carries a dated primary source ✅ · the two out-of-window items are explicitly date-framed — QT1 states the study was submitted 15 July, revised 16 July, *"what is new is the coverage and the reaction it drew on 28 July"* (traction exception stated in copy, as required) ✅, and the Editorial Moment names 22 July and 20–21 July ✅ · the generalisation caveat is present and given real weight: *"the dataset is popular open-source repositories, not enterprise codebases, and the two do not organise review the same way"* ✅ · all 14-day-window items named their dates: Leadership Read 21 July ✅, AWS 24 July ✅, GitHub 19–20 July ✅, Blacksmith 21/22 July ✅, Opus 5 24 July ✅, Lead 27 July ✅, QT2 28 and 30 July ✅, IP 27 July ✅, OI 29 July ✅

**Sections skipped as not applicable:** Feature · The Stack · Meanwhile · deep-dive stat discipline · deep-dive design · P0 status card.

---

## 12. Required actions before publication

| | Action | Owner | Size |
|---|---|---|---|
| 1 | **B1** — correct the Intel quotation to *"a more focused and efficient **company**"* and reframe it as the broader strategy, not a description of the result | Phase 4 copy | one clause |
| 2 | **B2** — add a `.source-tag` to the Editorial Moment linking TechCrunch (22 Jul) and Tom's Hardware (20–21 Jul); either add TrendForce for the 22% or drop the percentage and keep the $5.1bn | Phase 4 copy | one line |
| 3 | **B3** — relabel the QT1 chart bar and body sentence to *workflows*, and either drop 12.5% or mark it as the digest's conversion of "one in eight" | Phase 4 copy | two strings + one SVG label |

**Recommended, non-blocking:** add `.section-time` to the remaining major section `<h2>`s (**C1**) · expand CMA and OIDC on first use (**C5**) · trim the Editorial Moment by four words (**C6**).

**Recommended for the spec, not for this issue:** replace *"Target 5–7 pages (hard limit)"* with a 2,800–3,600-word budget (§ 1) · amend SKILL.md line 200 to point at the v3.4 soft breadth guardrail (§ 9.1) · settle whether the cover lead-stat counts toward the 4–6 visual budget (**C3**) and whether `.compare-table`'s "2 columns" means two comparison columns (**C7**).

---

## 13. State-file updates due on delivery

`last_issue_number` → 20 · `last_issue_date` → 2026-07-31 · `last_issue_format` → weekly · `last_lead_topic` → "Operating at scale" · `last_lead_topics_3issues` → ["Operating at scale", "Operating at scale", "Banking, fintech & loyalty"] · `consecutive_non_deepdive` → 2 · `last_outside_in_company` → "Shopify (Zack Deveau — building an agentic harness that outlasts the model)" · append to `outside_in_history` `{issue: 20, company: "Shopify", source: "Zack Deveau — the harness outlasts the model"}` · `last_leadership_read` → "The Pragmatic Engineer (Simon Eskildsen with Gergely Orosz)" · append to `leadership_read_history` · `in_practice_season_progress` → 2 (season "Technical strategy under uncertainty" continues) · append to `in_practice_history` `{issue: 20, piece_title: "Arriving as a manager without the domain", author: "Ferit Topcu (Zenjob SE)", url: "https://leaddev.com/management/engineering-managers-have-a-new-job-description"}` · `last_rabbit_hole_date` → 2026-07-31 · `last_editorial_moment` → "worth_a_second_look" · `last_lead_opener` → "narrative-first" · `last_qt_layout` → "qt-A" · `last_oi_format` → "A" · `last_feature_date`, `last_stack_date` unchanged (null).

---

*Phase 5 FULL review · Issue 20 · 2026-07-31*

---

## Blocker resolution (main loop, post-review)

All three blocking defects were fixed in the main loop and re-verified. No phase re-run was required.

| # | Fix applied | Verification |
|---|---|---|
| **B1** | Editorial Moment now reads *"as part of a broader strategy to become, in Intel's words, \"a more focused and efficient company\""*. The misquoted *"organization"* is gone and the inverted framing (strategy, not result) is corrected. | `grep "organization\""` → 0 hits |
| **B2** | A `.source-tag` line was added to the Editorial Moment linking TechCrunch (22 Jul) and Tom's Hardware (20–21 Jul), both from § 10. The unsupported **22%** was dropped rather than sourced to TrendForce — the clause now reads *"the group whose Q1 2026 revenue reached $5.1bn"*, which Tom's Hardware supports directly. No new publication was introduced, so the source-diversity cap is untouched. | Editorial Moment is no longer the sole section without attribution |
| **B3** | QT1 body sentence changed to *"Just one workflow in eight involved more than one human"*; SVG bar label changed to *"Workflows involving more than one human"*; the value label changed from *12.5%* to *1 in 8*; the SVG `aria-label` rewritten to match. The chart no longer harmonises two units under one axis, and the digest's own arithmetic conversion is no longer footnoted as a LeadDev-reported figure. | `grep "12.5"` → 0 hits; bar geometry (30/240px) unchanged and still proportional |

**Post-fix re-verification (main loop):** `mega-outage` 0 · `529 Overloaded` 0 · `10% of global revenue` 0 · `200,000` 0 · `us-east-1` 0 · `12.5` 0 · direct-address strings in digest voice 0 · LeadDev sections exactly 2 (the two In Practice links are the same piece — attribution line and author card) · `.ip-theme` carries the season name only, no week count · footer archive bar correct with `#20 · Weekly` as `.archive-pill.current`.

**Epistemic reframing:** Phase 5's independent re-count of **2** is accepted over Phase 4's self-reported 1. The cap is 2, so the issue ships **at** the cap, not over it. No further reframes may be introduced by any late edit.

**Page count:** Phase 5 recommendation **(b)** accepted — shipped at 12 pages. The rendered issue is 12 pages / ~3,600 words. Recorded in the state file as a known standing divergence: the spec's 5–7 page limit is arithmetically unreachable against current section substance floors, and issues 11–18 all shipped 9–13 pages. **The recommended spec amendment (a 2,800–3,600 word budget replacing the page limit) has NOT been made** — it is a spec change, out of scope for a publish run, and is left for an explicit decision.

**Status: PASS — cleared to publish.**

---

## Post-publication amendment — the Visa miss (main loop)

Raised by the operator after publication: **Visa announced a 7% workforce cut on 28 July and the issue did not carry it.**

### Verification

Multi-source confirmed (American Banker, Bloomberg via The Spokesman-Review, CNBC, Quartz, CPA Practice Advisor): ~2,600 roles, close to 7% of the workforce, concentrated in technology and product, announced 28 July, with CEO Ryan McInerney putting AI at the centre — *"AI is also helping to accelerate this evolution and shape the way work gets done at Visa."* Mastercard cut 4% earlier in 2026.

Single-sourced to American Banker, therefore **attributed rather than asserted** in copy: the $563m charge and the reorganisation of product and development teams from roughly ten people into groups of two to four. Sources also disagree on whether the announcement came via staff memo or on the earnings call, so the copy says only *"the same day"* and makes no claim about the channel.

### Root cause of the miss

Not a curation call — the story never entered `candidates.json`. Two Phase 1 patterns combined:

1. **Name-anchoring.** The *Management & teams* layoff sweep opened generically (`engineering layoffs restructure July 2026`), hit Monday.com and Intel, then went name-specific for every subsequent query (`Monday.com layoffs 20% workforce`, `Intel layoffs July 26 2026`). It stopped sweeping and started drilling.
2. **Beat siloing.** The *Banking/fintech* sweep ran 16 queries including two on the card networks, but every one was framed on loyalty, commerce media, agentic protocols or VAS revenue. **`Visa` and `layoffs` never co-occurred in a single query.**

Compounding: **Phase 3 fetched the Visa Q3 transcript** to pin the VAS figures assigned to it and read it for nothing else.

### Remedy applied — promoted to the Lead

The story was judged stronger than the incumbent Lead and merged with the Q3 loyalty angle into one article, rather than being bolted onto a Quick Take:

| | Before | After |
|---|---|---|
| **Lead** | UK multi-bank payments degradation (Operating at scale) | **Visa expands the offer layer and cuts the organisation building it** (Management & teams) |
| **QT1** | Agent-raised PR review study | unchanged |
| **QT2** | Visa Q3 / loyalty mechanic | **UK multi-bank payments degradation** |
| **Editorial Moment** | Monday.com + Intel | **Status pages against customer experience** (Meta, promoted out of At a Glance) |
| **Other News** | 4 items | **5** — Monday.com + Intel preserved here rather than dropped |
| **Cover stat** | 79% | **7%** |

**Rationale.** The incumbent Lead was built on an absence — its own register forbade claiming a cause, a rail failure, a cyber angle or any impact figure, because none is established. The Visa story carries verifiable substance, spans three concerns at once, and is a news event under the v1.32 definition (*"a corporate restructure"*). It also **dissolved the documented same-concern lead repeat** with Issue 19, which the original run plan had to write around.

### Compliance re-verified after the restructure

Anchor news events **2 of 3** ✅ · within-issue concern diversity **3 distinct, one per anchor** (Management & teams / Ways of working / Operating at scale) ✅ · soft breadth guardrail now **3 of 4 with no repeat** ✅ · AI-substrate **3 of 6** featured, cap 4 ✅ · long-form variety 1 of 3 ✅ · adjacent-source rule holds (QT1 and In Practice both LeadDev, separated by QT2) ✅ · source-diversity cap: LeadDev 2, TechCrunch 2, AWS Health Dashboard 2, none over ✅ · visuals **6**, real diagrams **4** ✅ · components 5 ✅ · `.section-label.alert` 0; Lead uses `.section-label.orange` per the Management & teams palette ✅ · direct address 0 ✅ · banned-claim register all 0 ✅ · word counts Lead 348 (300–400), QT1 238, QT2 261 (150–250, **11 over, accepted**) ✅

**Reading time recomputed: 19 min, 3,709 words, 12 pages.**

**Status: PASS — amended issue cleared to publish.**
