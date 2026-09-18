# Issue 26 — Phase 5 Review (FULL)

**Reviewed:** 18 September 2026 · **Artefact:** `digest-runs/issue-26/issue-26.html` · **Format:** Deep Dive (user-directed) · **Spec:** v1.38
**Mode:** FULL per `run-plan.md` §11 rule 13 and `section-briefs.md` §4. Every check re-derived from the shipped HTML with grep/python. Phase 4's self-report was treated as a claim to be tested, not as evidence; the run plan's and briefs' tables were treated the same way.
**Verification regime:** fetch-verified run (briefs §0.0). Figures are audited against the §0.2 ledger under the §0.0 standard as amended by the §0.3 binding corrections and the run-plan §13 main-loop rulings. **One primary was re-fetched live for this review** — forrester.com returned HTTP 200 and carries ledger row 7 verbatim (*"Coding may improve by 30% to 40%, but if planning, testing, and release remain manual, overall team productivity often increases by less than 10%. The bottlenecks simply move."*, Diego Lo Giudice, VP, Principal Analyst, Jun 8 2026). The ledger's most load-bearing row is sound.

---

## VERDICT: **FAIL** — 5 blocking, 10 secondary

This is a strong issue and it passes the checks the run plan was most worried about. The Issue 23 differentiation rule holds: none of the sixteen barred sources appears (grep returns zero for JetBrains, DX, DORA, GitClear, Veracode, Capgemini, Octoverse, PagerDuty, Deloitte, Perforce, Bessemer, Monzo, Atlassian, Agent Chip), the issue argues ownership and gating rather than the adoption arc, and Issue 23's own headings do not rhyme with these. The Figma hard bar holds absolutely — *alert triage*, *on-call*, *71%*, *20% fewer*, *25% fewer* and *draft* all return **zero**. All 25 binding corrections at §0.3 executed, including the seven §4 spot-checks: *Gartner* 0, *McKinsey* 0, *delegation gap* 0, *AI Control Plane* / *Agent Fabric* / *Trusted Agent Identity* 0, *Wickham* 0, *provisional agreement* 0, *feedforward* attributed to the Radar and never to Böckeler. The three main-loop rulings executed exactly: `60%` on the cover, `0–20%` nowhere, S2 re-weighted with no substitute source, Meanwhile at four items unpadded. Third-person voice is clean — *the reader*, *reader's*, *your team*, *your firm*, *your org*, *your customers*, *you must*, *you should*, *you need to* each return **zero**. Every quote appears in exactly one slot. Every `href` is real and in the briefs' list. Attribution fidelity passes on all six named tests.

It fails on five things, four of them mechanical.

---

# BLOCKING FINDINGS

## B1 — Epistemic reframing: **13 against a hard cap of 2**

Phase 4 self-reported **one** structural reframe. That is the failure mode the compliance checklist names in advance (*"Phase 4 self-counts that report 0 should be reviewed sceptically; the reviewer recounts"*) and briefs §4 item 7 repeats. The structural test is *does this sentence name what something is NOT in order to introduce what it IS?* — and the issue's dominant sentence rhythm is `X rather than Y` / `X, not Y`, used as the vehicle for the analytical point.

I excluded every instance where the negation is a **source-quality disclosure the spec itself mandates** — *"self-reported rather than independently audited"*, *"practitioner-produced rather than vendor marketing"*, *"a member contribution rather than a CNCF position"*, *"a vendor framework rather than an industry standard"*, *"this digest's arithmetic rather than Okta's phrasing"*, *"consolidates other people's figures rather than producing its own"*, *"not peer-reviewed"*, and the build-or-buy factual contrasts (*"community extensions rather than platform features"*, *"built in-house with a hyperscaler partner rather than bought whole"*, *"inherited rather than reinvented"*, *"maintained centrally rather than per team"*, *"increasingly bought rather than built"*). Those are disclosures, not reframes.

**Thirteen remain, of which one is the allocated instance. Eleven must go.** Instance 1 is the Counterpoint's, allocated at briefs §1.11 — **keep it**.

| # | Section | The exact sentence | The exact fix |
|---|---|---|---|
| **1** | Counterpoint | "These are not contradictory readings; they are readings taken at different points of the same redesign." | **KEEP** — allocated instance #1 (§1.11). |
| **2** | Executive summary | "and a third category that is a measurement caveat rather than a capability position, covering the sources that do not separate the first two and whose headline numbers mix them." | "and a third category covering the sources that do not separate the first two and whose headline numbers mix them, which makes it a caveat about measurement." |
| **3** | S1 | "— a spread that is a statement about measurement rather than a finding about productivity." | "— a spread wide enough to show how unsettled the measurement still is." |
| **4** | S2 | "That is a decision-rights question rather than a tooling one: each of the four has to belong to somebody, and in most organisations only the last one does." | "Each of the four has to belong to somebody, and in most organisations only the last one does." |
| **5** | S2 | "The ownership pattern the guidance describes is a control rather than a job title: key provisioning requires a named owner…" | "The ownership pattern the guidance describes is a control: key provisioning requires a named owner…" |
| **6** | S3 | "…which makes it the control point rather than the convenience layer." | "…which makes it the control point." |
| **7** | S3 | "The control is a release gate rather than a tool policy." | "The control sits on the release gate." |
| **8** | S3 (chart note) | "…because it is the only published statement in the pool that treats evidence as an output of the system rather than a report written about it." | "…because it is the only published statement in the pool that treats evidence as an output of the system." |
| **9** | S5 | "One preprint answers which gate, for which change, and what evidence it leaves, as a design rather than a principle." | "One preprint answers which gate, for which change, and what evidence it leaves, and answers it as a design." |
| **10** | Case study (`<h3>` and closing line) | "The second limb: measurement bought, not asserted" / "One bank's platform, one bank's checks, and four years of independent evidence bought rather than asserted." | "The second limb: four years of bought measurement" / "One bank's platform, one bank's checks, and four years of independent evidence it paid an outside party to produce." |
| **11** | Lessons — Key Takeaway | "Regulated customers ask for evidence the lifecycle produced, not assurance written about it — and most of those expectations pre-date agents by years." | "Regulated customers ask for evidence the lifecycle itself produced — and most of those expectations pre-date agents by years." |
| **12** | Lessons — Key Takeaway | "The precision bar a review gate must clear before it addresses developers is a leadership decision, not a tuning parameter." | "The precision bar a review gate must clear before it addresses developers is a leadership decision." |
| **13** | Recommended Reading | "Listed with an honest framing: it is a position to hold rather than a decision to make." | "Listed with an honest framing: it is a position to hold." |

**Also recommended, borderline and cheap to clear** (not counted above, but each is one `X, not Y` away from counting): S5 "A named person, not a committee." → **"The responsibility lands on a named individual."**; S5 "Two details make it live rather than historical." → **"Two details keep it live."**

**Note on provenance:** instances 11 and 12 are reproduced verbatim from briefs §2.12, and the Case-study handoff at 10 is verbatim from §2.11. Phase 4 executed the brief faithfully; the reframes were authored at Phase 3. The cap is on the issue, so they still have to go — but this is a Phase 3 drafting failure as much as a Phase 4 one, and §1.11's own allocation table should have caught it.

**Phase 4 must not echo the Laycock quote's structure in the surrounding prose** (run plan §11 rule 5) — checked separately and **PASS**: no *"isn't so much X as Y"* construction appears anywhere in S4.

---

## B2 — Stat discipline: the cover-homed 60% is re-explained at full context in S1

Run plan §5 is explicit — *"AI across ~60% of developer work … Every later mention is shorthand, including in S1"* — and briefs §2.1 repeats it: *"the 60% figure is homed here and **nowhere else at full weight**. S1 refers to it in shorthand only."* Briefs §2.5 specifies the opener as *"the gap the cover names, in shorthand"*.

**The exact sentences, S1 paragraph 1:**

> "That is the gap the cover names, in Anthropic's own measurement, published on 21 January 2026 by a company that sells the category it is measuring — which makes a finding that its own tools cannot yet be fully delegated a finding against commercial interest, and worth naming as such. Anthropic's label for the mismatch is the collaboration paradox, and the research behind the 60% limb comes from its Societal Impacts team."

That reproduces three of the four elements the cover band already carries at full weight — the 21 January 2026 date, the against-interest framing (the cover's *"An AI vendor reporting that its own category cannot yet be handed over is a finding against interest"* restated almost word for word ~120 words later), and the *collaboration paradox* label. That is a second full-context appearance of a stat with a single assigned home, which Deep Dive Stat Discipline v1.9.2 rules 2 and 3 forbid.

**The exact fix — replace both sentences with:**

> "That is the gap the cover names, in Anthropic's own measurement — the collaboration paradox, its label for the mismatch."

The Societal Impacts attribution (ledger row 2) can stay if it moves to the cover band, where the stat is homed; it should not appear in both places.

Everything else in the stat audit passes. I mapped every percentage and multiplier in the shipped HTML to its section: Forrester's pair, LeadDev's four, Okta's six, Zalando's two, DoorDash's four, Figma's six, LinearB's nine, the BoE/FCA four, Article 25's penalty band and Paulsen's 100% each appear at full context in exactly one section. The Counterpoint carries **six cells, all shorthand, none new**. The Lessons carry **zero numbers**. The executive summary carries **zero stats** and is a true index.

---

## B3 — Section numbering contradicts itself, and the How to Read card routes the reader to the wrong sections

The sections are **labelled** "Section One" through "Section Five" (`.section-label.alert`) but carry `.section-marker` values **2 of 9** through **6 of 9**. Every cross-reference in the issue uses the **marker** number, so every cross-reference names a section whose visible label is one lower.

The worst instance is on the navigation component itself:

> "**10 min · The Full Picture** — The two-minute path plus Section 3 on who owns what, Section 4 on the control layer, and the Counterpoint."

"Section 3" is labelled **Section Two**; "Section 4" is labelled **Section Three**. A reader on the ten-minute path is sent to the wrong two sections. Briefs §2.3 specifies the route as **S2** and **S3** — i.e. the labelled sections, not the markers.

**The exact fixes — seven strings:**

| Where | Current | Replace with |
|---|---|---|
| How to Read, 10-min card | "plus Section 3 on who owns what, Section 4 on the control layer" | "plus Section Two on who owns what, Section Three on the control layer" |
| Executive summary, ¶4 | "Sections 2 to 6 take the argument in order" | "Sections One to Five take the argument in order" |
| Executive summary, `.source-tag` | "28 sources given body treatment across Sections 2 to 6 and the case study" | "28 sources given body treatment across Sections One to Five and the case study" |
| S3, Salesforce paragraph | "a vendor borrowing a word Section 5 is about to use" | "a vendor borrowing a word Section Four is about to use" |
| Case study, "The platform decision" | "the same claim Section 4 found in a vendor architecture" | "the same claim Section Three found in a vendor architecture" |
| Lessons, "Evidence is an output…" | "The regulated expectations described in Section 6" | "The regulated expectations described in Section Five" |
| Lessons, `.source-tag` | "Drawn from the sources carried in Sections 2 to 6 and the case study above" | "Drawn from the sources carried in Sections One to Five and the case study above" |
| Recommended Reading, item 2 | "The full account behind Section 5's build-stage argument" | "The full account behind Section Four's build-stage argument" |

The `.section-marker` "N OF 9" chips are correct as they stand — they count all nine content sections including the executive summary, Counterpoint and Lessons, which is the deep-dive template's own convention. Only the prose references need to move.

---

## B4 — Meanwhile prints a dropped claim with a hedge attached

Ledger row 98: *"Amodei — named responses within two days. **D.** No respondent quote pinned to a fetchable primary. The item paraphrases and names no respondent quotes."* Briefs §2.13 item 1 drafts the item **without any responses sentence at all**. Run plan §6 item 1 adds: *"Do not characterise the responses beyond supportive / divergent without a pinned source."* The §0.0 standard is unambiguous: *"**Dropped means dropped** — not hedged, not attributed to 'reports'."*

**The exact sentence, Meanwhile item 1:**

> "Named responses landed on both sides within days; they are paraphrased here, none having been pinned to a primary source."

It asserts a dropped claim, characterises its timing (*"within days"*) against a row that failed on exactly that, and the hedge is self-contradicting — nothing is paraphrased, because no response is named or summarised anywhere in the item.

**The exact fix: delete the sentence.** The item ends on *"…in which a swarm of agents attacked targets they had not been asked to attack."* followed by the `.mw-src` link. No replacement text is needed; it runs to 2 sentences plus the headline, inside the spec's 2–3.

---

## B5 — The issue's own scale claim does not reconcile with its own breakdown

**The exact sentence, executive summary ¶3:**

> "This issue reads twenty-eight sources together: three preprints, three regulator primaries, twelve vendor or vendor-adjacent publications, four self-reported engineering accounts, one paid analyst house and one UK bank's own internal platform."

The colon presents the breakdown as a partition of 28. It sums to **24** — and only because Lloyds Envoy is counted twice, once in the four self-reported accounts and once as the bank's platform, so the distinct total is **23**. Missing from the enumeration: LeadDev, FinOps *Tokenomics*, *State of FinOps 2026*, The Pragmatic Engineer and the University of Glasgow. The same composition line is carried, uncorrected, from briefs §1.0, where it was written as a characterisation rather than a partition.

Twenty-eight is printed four more times (cover subtitle, `.cover-scope`, the executive-summary `.source-tag`, and S4's *"twenty-eight sources at once"*), so the number itself is right and consistent — but the one place the issue shows its working, the working is wrong. In a deep dive whose entire editorial stance is source discipline, this is the sentence a sceptical director checks.

**The exact fix:**

> "This issue reads twenty-eight sources together, among them three preprints, three regulator primaries, twelve vendor or vendor-adjacent publications, four self-reported engineering accounts and one paid analyst house, one of those accounts being a UK bank's own internal platform."

Briefs §1.0 should be corrected in the same pass so the error does not travel to a future issue.

---

# SECONDARY FINDINGS

**S1 — The Counterpoint does not hand off to the case study, and three consecutive handoffs use one formula.** Stat Discipline rule 5 requires each section's close to hand the next a question or tension. Seven of eight do. The Counterpoint's final paragraph ends *"…neither is a forecast — this issue prints none"*, which closes the section rather than opening the case study; run plan §1.3 specified *"Reconciled, what does the whole thing look like inside one UK bank that has published it?"* Separately, S2→S3, S3→S4 and S4→S5 all close with the identical construction — *"…is the next question."* / *"…is the next question."* / *"…is the next question."* Suggested: vary two of the three, and add a closing sentence to the Counterpoint such as *"One organisation has published the whole of it, controls included, and it is a UK bank."*

**S2 — The CNCF member post carries no agent-spectrum band tag.** Run plan §11 rule 2 requires the band on first use of **each** source; §2.7 specifies *"CNCF post = band-agnostic"*, while §1.7 files it under band 3 (*"does not separate the bands. Say so"*). The sidebar carries the affiliation disclosure and the verified wording but no band statement. It is the only body source of the twenty-eight without one — every other source is tagged, and eleven carry an explicit *"does not separate"*. Fix: add to the sidebar's attribution line — *"The post argues at the level of platform architecture and takes no position on how much authority an agent holds."* (The briefs' internal disagreement on the band should be resolved before Issue 27 reuses the tagging table.)

**S3 — Salesforce carries no vendor-interest disclosure on first use.** Briefs §1.8 requires it of Microsoft, Salesforce and Okta alike (*"Each sells the control surface its material describes"*). Okta gets *"Okta sells that control surface, which is the reason to read its research carefully"*; Microsoft gets *"Microsoft sells the control surface it describes"*; Salesforce gets none. The make-or-buy paragraph implies the interest but never states it. Fix: in the AIforce sentence, after *"the only in-window body source in this issue"*, add *"and, like Microsoft and Okta above, a vendor selling the control surface its material describes"*.

**S4 — Figma's adjudicator figure drops the ledger's approximation marker.** Ledger row 61's printable wording is *"adjudication raised pass-rate recall by a relative ~30%"*. The HTML prints *"raised pass-rate recall by a relative 30%"*. A tilde is not decorative in a run that fetch-verified every figure. Fix: *"raised pass-rate recall by roughly 30% in relative terms"*.

**S5 — Jargon gaps against the v3.7 four-category scan.** The 3+-uses-per-section trigger passes everywhere I could test it: *harness* ×5 in S4 (glossed in Böckeler's own words), *spec-driven* ×3 in S4 (glossed), *observability* ×3 in S3 (glossed), *tokenomics* ×3 in S2 (glossed and attributed), *token* ×7 in S2 (glossed), *SS1/23* ×3 in S5 (Jargon Watch), *precision* ×3 in S4 (glossed), *decision right* ×6 in S2 (Concept of the Week). Both `.jargon-watch` sidebars and the `.concept-of-week` are present and carry what §1.6 specified. Six category-1/2 terms slip through:
- **"control plane"** — on run plan §9's gloss list and allocated at §1.6 to S3's Jargon Watch sidebar, which does not mention it. The term then appears only in the **Lessons** (Verdict and Key Takeaway), where a year-one EM from a non-technical route meets it cold, 6,000 words after the sidebar. Fix: in the Verdict, *"the control plane — the layer that registers agents, sets their permissions and watches what they do — is a purchase order."*
- **"CVE"** — three uses in Meanwhile, never expanded. §1.6 allowed one clause for the KEV line; the KEV gloss is there, the acronym is not. Fix: *"Cisco Identity Services Engine (CVE-2026-76460 — a numbered public identifier for a specific flaw)"*.
- **"MAS"** — printed as *"MAS in Singapore"*, never expanded. §1.6 assigned it to S5's Jargon Watch sidebar, which does not carry it. Fix: *"the Monetary Authority of Singapore"*.
- **"ring-fenced"**, **"hyperscaler"**, **"ISO/IEC 42001"**, **"Agent Skills"**, **"Hyperforce"** — each used once, unglossed. *Ring-fenced* and *hyperscaler* are the two that matter for the stated reader bar.

**S6 — The AWS Middle East Radar line is the only printed date with no ledger row and no link.** *"the provider's last public update on the Middle East regions is dated 30 April 2026, and a dedicated sweep this week surfaced nothing newer."* It traces to run plan §8 item 4 and briefs §2.14, but not to §0.2 — and §0.0's bar is *"Every figure and every quote in the issue traces to a ledger row."* It is a null-finding rather than a source claim, which is why I am not blocking on it, but it should either gain a row or lose the date. It is also the only Radar item with no source link.

**S7 — Repetition across sections.** The issue runs ~40% over its projection and carries three visible restatements:
- **The four ownership questions appear near-verbatim three times.** Executive summary: *"who may approve an agent, who sets the bar a review gate must clear before it speaks to a developer, who holds the token budget, and who signs off a change an agent produced."* Concept of the Week: *"who approves an agent, who sets the precision bar a review gate must clear, who holds the token budget, who signs off a change an agent wrote."* Verdict: *"who approves an agent, who sets the bar a gate must clear before it speaks to a developer, who holds the token budget, and who signs off a change nobody wrote."* Two of the three should go. Recommendation: cut the list from the **executive summary** (it is an index, and §2.4 asks it to map rather than enumerate) and keep the Concept of the Week's version, which does teaching work, and the Verdict's, which is the payoff.
- **"Oversight is four activities, not one" appears three times** — S2 (*"A capacity plan that budgets 'review' as one task is short by three activities"*), Lessons `<h3>` (*"Oversight is four activities, not one, and three of them happen before any code exists"*), Key Takeaway bullet 1 (*"Oversight is at least four distinct activities, not one review step"*). The Lessons paragraph and the bullet say the same thing twenty words apart. Cut the paragraph's opening sentence.
- **The Lessons' first implication is the Counterpoint's thesis reworded.** *"Ownership comes before procurement"* — "Every organisation in this issue that can publish a number had assigned the decision first" is the Counterpoint's "Every number on the left has an organisational answer sitting behind it… Each of those numbers is the output of an ownership decision taken before the tool arrived." This is the closest thing in the issue to a pure-restatement paragraph. It earns its place only if it adds the negative case, which its second half does; the first two sentences should go.

**S8 — Proportionality: the Counterpoint is the only section under its floor, and it is on the ten-minute path.** Independent per-section counts (SVG contents excluded): Counterpoint **357** against a 400–480 target, while S3 runs **1,481** against 800–900, S4 **1,496** against 800–900 and S5 **1,224** against 650–750. The analytical reconciliation — the section the stat-discipline rules make responsible for all cross-source comparison, and one of only four components on the ten-minute route — is the shortest content section in the issue. The source sections absorbed the growth; the reconciliation did not. Deep dives have no hard word limit (v1.38), so the length is not itself a failure, but the shape is worth correcting: roughly 80 words back into the Counterpoint, ideally the missing handoff (S1) and one sentence on which of the six cells a reader should distrust first.

**S9 — The executive summary is 510 words against a 280–320 target and has started to pre-digest.** §2.4's binding is *"index, not preview"*. It still prints no stat, which is the rule that matters most, and the §1.4 signpost is mandatory — but the three-band framing is now set out at full length (117 words) rather than signposted, which is preview behaviour. Fix: compress the band paragraph to its caveat function (*"a third category that is a caveat about measurement, covering sources whose headline numbers mix the first two"*) and let S1–S5 tag their own sources, which they already do.

**S10 — One line reads as an instruction.** Lessons, "Evidence is an output of the lifecycle": *"The banks and the frameworks converge on the same design: instrument the lifecycle, and answering an audit becomes a query."* The imperative *"instrument the lifecycle"* is the only imperative verb addressed outward in the issue. Everything else passes cleanly — Forrester's four recommendations are rendered in third person (*"Its recommendations to the organisations it advises are that they evolve…"*), Paulsen's five metrics as *"His five metrics"*, the Key Takeaway bullets as declaratives. Fix: *"The banks and the frameworks converge on the same design: where the lifecycle is instrumented, answering an audit is a query."*

---

# INDEPENDENT COUNTS

## Word count

```
python3: strip <style>, <script>, <svg>, HTML comments; unescape entities;
         strip tags; count whitespace-delimited tokens
```

**Total body copy: 9,348 words** (Phase 4 self-reported 9,394 — within method noise). Deep dives have **no hard limit** (v1.38), so this is not a failure. It is **36–58% over** the briefs' §3 projection of 5,900–6,880. Derived page count ~31–37 pages.

| Section | Words | §3 target | Verdict |
|---|---|---|---|
| Cover | 152 | — | — |
| Foreword | 174 | 150–180 | **PASS** |
| How to Read This | 80 | 90 | PASS |
| Executive summary | **510** | 280–320 | **Secondary finding 9** |
| S1 | 810 | 550–650 | Over |
| S2 | 1,046 | 650–750 | Over |
| S3 | 1,481 | 800–900 | Over |
| S4 | 1,496 | 800–900 | Over |
| S5 | 1,224 | 650–750 | Over |
| **Counterpoint** | **357** | **400–480** | **UNDER — secondary finding 8** |
| Case study | 618 | 500–600 | Slightly over |
| Lessons | 651 | 450–550 | Over |
| Meanwhile | 397 | 300–360 | Slightly over |
| On the Radar | 122 | 130–160 | Slightly under |
| Recommended Reading | 215 | 150–190 | Slightly over |

**Cover reading time:** 47 min. 9,348 ÷ 200 = 46.7 → 47. ✅ Correct against §2.1's method.
**Per-section chips:** 1+3+4+5+7+7+6+2+3+3+2+1+1 = **45** against a cover of 47. Two minutes unattributed (cover and foreword carry no chip). Cosmetic; no fix required.

## Visuals — 6 inline `<svg>`, all real charts

| # | Section | Chart | Data | Ledger |
|---|---|---|---|---|
| 1 | S1 | Two-bar contrast, one source labelled | Forrester 30–40% v under 10%; caption carries *"The bottlenecks simply move."* | 7 · **live re-fetch confirms** |
| 2 | S2 | Four horizontal bars + annotation | LeadDev 37 / 41 / 45 / 84%; one-in-three drawn as an annotation, not a bar, exactly as §1.2 required | 13 |
| 3 | S3 | Closed-loop architecture + nine-domain ring | Microsoft's four functions and nine domains, no figures attached | 36 |
| 4 | S3 | Stacked bar + threshold annotation | Zalando 33% / 67%, 20–40% lead-time cut, self-reported note in-chart | 31 |
| 5 | S4 | Slope with horizontal threshold rule | Figma 15% → 80%, 70% enable rule labelled, ≈$0.50 annotation, schematic-curve note | 60, 61 |
| 6 | S4 | Paired bars + separated annotations | LinearB 84.4% v 32.7%; 5.3× and 4.6× kept apart with *"Two separate measurements, kept separate"* | 65, 66 |

**Against the v1.30 deep-dive floor of 3–4: PASS at 6.** All are genuine `<svg>` elements — zero CSS-box approximations, zero raster images, zero AI-generated imagery. Every plotted value traces to a cleared ledger row, every chart names its source and date in-chart, and four of the six carry an explicit limitation note. This is the strongest visual set of any issue in the run to date.

Per-section visual coverage: S1 by-the-numbers + SVG · S2 SVG + process-flow + concept box · S3 two SVGs + sidebar + Jargon Watch · S4 two SVGs · S5 sidebar + Jargon Watch · Counterpoint comparison grid · Case study timeline + pull quote · Lessons verdict + key takeaway. **Only the executive summary is pure prose**, which §2.4 specifies deliberately. **PASS.**

## Components — 6, at the cap

`.by-the-numbers` (S1) · `.process-flow` (S2) · `.article-with-sidebar` ×2 instances (S3, S5) · `.comparison-grid` (Counterpoint) · `.timeline-box` (case study) · `.verdict-box` + `.key-takeaway` (Lessons) = **6, inside the 4–6 deep-dive cap.** Off-cap as specified: two `.jargon-watch`, one `.concept-of-week`, one `.pq-bar`, one `.pull-quote`, `.how-to-read`, `.cover-scope`, `.cover-stat-band`, `.radar-compact`, `.reading-list`, nine `.source-tag`, `.progress-bar`.

**`.other-news-grid` returns 0.** ✅ Meanwhile replaces Other News, and both do not appear.

## Layout rotation, S1–S5

by-the-numbers → standalone-with-SVG → article-with-sidebar → standalone-with-SVG → article-with-sidebar. **No two consecutive source sections share a treatment. PASS.** At least one section uses `.article-with-sidebar` ✅; at least one opens with `.by-the-numbers` ✅ (deep-dive design checklist v1.2).

---

# PART 1 — Phase 4's four flagged deviations, ruled

## Flag 1 — executive summary uses `.section-label.alert`: **PASS, no change**

Seven `.section-label.alert` in the shipped HTML: the executive summary, S1–S5 and the case study. Briefs **§1.12** enumerates red for *"the five numbered source sections and the Case Study"* — six — while briefs **§2.4** explicitly specifies `.section-label.alert` for the executive summary. The briefs contradict themselves.

**Ruling: §2.4 governs, and the shipped markup stands.** The v1.32 palette guardrail reserves default teal for *structural landmarks* and names them exhaustively — Week at a Glance, Foreword, In Practice header, Editorial Moment. The executive summary is none of those. It is a numbered content section carrying `.section-marker` 1 of 9 and the issue's central tension; it is not a navigational signpost, and the Foreword, How to Read This, Meanwhile, On the Radar and Recommended Reading labels — which *are* signposts — all correctly render teal. The guardrail passes. §1.12's enumeration should be corrected to say seven, not six, so Issue 27 does not inherit the conflict.

## Flag 2 — length ~40% over the briefs' projection: **PASS as length, PARTIAL on shape**

v1.38 gives deep dives no hard limit and the projection is explicitly *"for Phase 4's planning only — nothing is cut to hit a number."* No word-budget rule is broken. But see **secondary finding 8**: the growth landed entirely in the source sections while the Counterpoint fell below its own floor, which inverts the stat-discipline division of labour. No cut is required; roughly 80 words should move into the Counterpoint, and the three restatements at **secondary finding 7** would return ~120 words at no cost.

## Flag 3 — S5→Counterpoint handoff rewritten after Gartner dropped: **PASS, no change**

The run plan's handoff (*"So why is a large share of this work still expected to be abandoned?"*) rested entirely on Gartner's 40% cancellation prediction, which C22 drops in full. Rewriting it was **mandatory**, not discretionary, and the replacement (*"What they sit against is a small set of published results from organisations that have finished the work, and a very different set of measurements across everyone else"*) hands forward a tension rather than a question, which Stat Discipline rule 5 permits. Correctly handled. The handoff that is actually missing is the Counterpoint's, not S5's — see secondary finding 1.

## Flag 4 — extra CSS ported (`.rl-head`, `.rl-note`, `.btn-grid.four`): **PASS, no change**

§1.12 lists the classes Phase 4 **must** port; it does not bar classes needed to render content the briefs themselves specified. `.rl-head` / `.rl-note` render the five-entry Recommended Reading list at §2.15; `.btn-grid.four` renders the four-cell `.by-the-numbers` panel at §2.5, which the base template's three-cell grid could not hold. Both are structural necessities, both follow the template's own naming and token conventions, and neither introduces a new colour, typeface or component. Record them in the state file's template-delta note so Issue 27 inherits rather than re-derives them.

---

# PART 2 — Briefs §4 compliance carry-forward, item by item

| # | Item | Result |
|---|---|---|
| 1 | **Issue 23 differentiation** | **PASS.** All sixteen barred sources return 0 (JetBrains, DX, DORA, GitClear, Veracode, the Anthropic RCT, Capgemini, Octoverse, the co-active-PR paper, PagerDuty, Deloitte, Perforce, Bessemer, Monzo/Agent Chip, Lloyds' hiring release, Atlassian). Paragraph-by-paragraph test applied against Issue 23's own headings: Issue 23 runs the five-stage adoption arc (*Experimenting → honeymoon → wall → rebuild → settled practice*); Issue 26 runs role shape, decision rights, identity, execution boundary, runtime policy, lifecycle gates and evidence. No paragraph describes what happens to a team as it adopts. `Laycock` returns 1 — the Radar v34 line, a different piece from the barred Issue 24 Leadership Read, cleared at ledger row 56. |
| 2 | **Figma hard bar** | **PASS, absolute.** *alert triage* 0 · *alert-triage* 0 · *on-call* 0 · *on call* 0 · *71%* 0 · *20% fewer* 0 · *25% fewer* 0 · *draft* 0. The single *incident* hit is Amodei's OpenAI–Hugging Face incident in Meanwhile. S4 carries only precision, the enable threshold, cost per pull request, the latent-vulnerability audit and the merge requirement — and C10's replacement line (*"Nothing merges without human review…"*) is used, not the barred draft-by-default detail. |
| 3 | **The three §0.4 decisions** | **PASS.** D1: cover band reads `60%` with §2.1's exact context line; `0–20` returns 0 in both dash forms; SVG #1 plots Forrester alone. D2: S2 states *"Nobody credible has published the new org chart"* and *"the consultancy inventory that circulates second-hand could not be opened against its own primary"* — no McKinsey, no substitute, no role inventory. D3: Meanwhile runs four — two `.meanwhile-lead`, two `.mw-item` — with no padding and L12 not promoted. |
| 4 | **The 25 binding corrections** | **PASS on all seven spot-checks and on the eighteen I re-derived.** *delegation gap* 0 · *AI Control Plane* / *Agent Fabric* / *Trusted Agent Identity* 0 (the two `control plane` hits are the digest's own generic noun in the Lessons) · *feedforward* ×3, all attributed to the Radar, with Böckeler correctly carrying *"guides and sensors, computational or inferential"* · Bartolo named in the `.pq-bar` cite with the LinkedIn-and-InfoQ route · no *provisional agreement* framing, the Omnibus stated as in force 27 July 2026 · *Gartner* 0 · *Wickham* 0 · AIforce dated 15 September · CISA at three CVEs · scope indicator 28 · SS1/23 as SMF holder not board, with the April 2026 republication · Bank of Thailand named · five-band LinearB confidence split · DoorDash's fourth reason (monitoring) present · Pragmatic Engineer dated 14 April with no percentages and no accountability claim · Postman sponsorship and the WSO2/OpenChoreo disclosure both on first use. |
| 5 | **Every figure and quote traces to §0.2** | **PARTIAL — B4 and secondary findings 4 and 6.** Every figure in every SVG, every stat in every body paragraph, every comparison-grid cell and every date in every `.source-tag` traces to a cleared or softened row in the permitted wording. Three exceptions: the Amodei responses sentence prints a **dropped** row (B4); *"a relative 30%"* drops row 61's approximation marker (S4); the AWS 30 April 2026 Radar date has no row (S6). |
| 6 | **Stat discipline** | **FAIL — B2**, the cover-homed 60% re-explained in S1. Everything else passes: executive summary indexes with zero stats; no source section cross-references another's numbers; the Counterpoint carries six shorthand cells and no new full-context stat; the Lessons carry no numbers at all. |
| 7 | **Epistemic reframing** | **FAIL — B1**, 13 against a cap of 2. Laycock-echo check passes. |
| 8 | **Third-person voice** | **PASS, all nine greps return 0.** The four question marks in the issue are inside the S5 sidebar and are the Oversight Classification Model's own scoring dimensions rendered in the third person, not rhetorical questions to the audience. |
| 9 | **No action items** | **PASS with one line to fix (S10).** Forrester's recommendations and Paulsen's metrics are both reported in the third person as the sources' own positions; the Key Takeaway bullets are declaratives; the Verdict states a condition, not an instruction. |
| 10 | **Jargon coverage** | **PASS on the frequency trigger, six gaps at category 1/2 — secondary finding 5.** Both `.jargon-watch` sidebars and the `.concept-of-week` are present and carry §1.6's specified content. |
| 11 | **Visuals** | **PASS — 6 real `<svg>`**, every section but the executive summary carries a visual, no substitution was needed. |
| 12 | **Components** | **PASS — exactly 6, at the cap; Jargon Watch and Concept of the Week off-cap; rotation holds.** |
| 13 | **Meanwhile** | **PASS on structure, FAIL on one sentence (B4).** Placed after Lessons and before On the Radar ✅ · four items ✅ · two "Would have led" in `.meanwhile-lead`, two "Also this week" in the two-column `.meanwhile-grid` ✅ · italic `.meanwhile-intro` present ✅ · every item in-window (12, 16, 16, 15 September) with a primary ✅ · **no duplication with body content — Salesforce returns 0 inside the Meanwhile block** ✅ · `.other-news-grid` absent ✅ · no analysis in any item ✅. |
| 14 | **Date honesty** | **PASS.** Salesforce 15 September and the four Meanwhile items are the only in-window material and are the only material framed as this week's. Every out-of-window source states its date plainly, and the GitHub changelog goes further — *"out of window by nine days, and stated as such"*. The 2024 BoE/FCA survey is flagged *"dated 2024, and not this week's news"*; SS1/23 carries all three of its dates. |
| 15 | **DO-NOT-PRINT list** | **PASS — all five return 0.** PayPal 0 · Oracle 0 (the two `30,000` hits are DoorDash's *"more than 10,000 weekly invocations"* and the `130,000` cell) · Copilot credit figures 0 · *seven China-based labs* 0 · *7h47m* and *64.3%* 0. |
| 16 | **Whole-source rule / late finds** | **PASS.** Every late find in the shipped HTML is one the briefs marked *optional* inside its own section brief — L1 and L7/L8 at §2.7, L10 at §2.7, L16 and L17 at §2.8, L2–L5 at §2.9, L13 at §2.14, L18 folded into §2.5. None was placed on Phase 4's initiative. L12 correctly not promoted (D3); L14 and L15 correctly declined; L19 correctly recorded and not printed. |
| 17 | **State file** | **Not written by this phase.** Correct — state writes only on Deliver (v1.34). |

---

# PART 3 — Compliance checklist, section by section

**Workflow pipeline (v3.1): PASS.** Run directory, `candidates.json`, `run-plan.md`, `section-briefs.md` with a top-level component manifest, and this file all present. Lead/format/central-question cross-check: the HTML's headline, subtitle, section order and case study match run plan §2 as amended by §0.3 and §13. No rejected candidate from §10 was re-promoted. Every term flagged at §1.6 is glossed inline or carried by a sidebar, with the six exceptions at secondary finding 5.

**Foreword: PASS.** Two paragraphs (deep-dive allowance), 174 words against §2.2's 150–180, drop cap via `.foreword` CSS, single editorial thread. No *meanwhile*, *elsewhere* or *also this week*. Does not restate the cover. **No AI-default framing** — it opens on what shipped and what was published, on their own merits, and never frames the week relative to AI's noisiness in either direction. The issue-wide v2.9 scan is clean: no section intro, transition or handoff frames any topic against AI's presence or absence.

**Article depth: PASS.** Leadership altitude holds throughout. The altitude guard at run plan §11 rule 1 is respected — no prompt patterns, no CLI, no config, no OAuth/PKCE mechanics, no RBAC syntax, no CVE remediation, no benchmark tables. Where a technical noun is load-bearing it gets one glossed clause (MCP, micro virtual machines, mutation testing, cyclomatic complexity, SAST) and nothing more. No corporate language — *leverage*, *synergy*, *best-in-class* all return 0.

**Explain key terms (v3.7): PASS with six gaps** — secondary finding 5.

**Format & length: PASS.** Deep dive, no hard limit; not a disguised Light Edition.

**Topic & lead selection: N/A (deep dive).** Deep dives are exempt from the AI-substrate ceiling (v1.32) and long-form variety (v1.35); the format is user-directed and recorded at run plan §0.

**Structure: PASS.** Section order matches the deep-dive spec. Meanwhile sits after Lessons and before On the Radar. Components rotated and at the cap.

**Ongoing stories: PASS (not engaged).** No P0; `.p0-status-card` returns 0; no progress bar used for an incident.

**Leadership Read / Outside In / In Practice: PASS (not present).** Deep dives carry none, per run plan §0. `.ip-theme` returns 0, so the "no week count" grep is satisfied vacuously — and `week 1`, `of 3`, `of 4`, `part 1` all return 0 across the whole file. Cadence state untouched: the *In Practice* season stays closed, Edwards-Alexander and the Nii rabbit hole stay held, Moghe stays reserved.

**Source diversity (v2.0): PASS.** martinfowler.com appears in exactly two sections (S4 and Recommended Reading), at the cap, with Moghe correctly held back to keep it there. Thoughtworks' four outputs sit in one section and the shipped text names the shared parent explicitly — *"Böckeler, Ford, the Radar and Thoughtworks' chief technology officer are four outputs of one company rather than four independent voices."* InfoQ appears three times and is named as the citation route every time, never as the originating source. GitHub's two products sit in one section. No two consecutive sections share an owning source.

**Quote allocation & attribution fidelity (v3.6): PASS.** Seven distinct quoted strings in the issue; a Counter over all of them returns **1 each** — no quote appears in two slots. Bartolo's line is attributed to Bartolo as a Microsoft principal cloud advocate writing on LinkedIn, reported by InfoQ, and never to Microsoft the organisation. Laycock's line runs to its permitted extent (the final sentence alone). Van Kemenade's line is introduced as the bank's own framing. Böckeler's vendor-interest line is the permitted optional fourth. Every named concept sits with its owner: *harness engineering* and *guides and sensors* → Böckeler · *cognitive debt* and *feedforward / feedback controls* → the Radar · *tokenomics* → the FinOps Foundation · *the collaboration paradox* → Anthropic · *Oversight Classification Model*, *human-in-the-loop*, *human-over-the-loop*, *automated-with-monitoring* → Kang · *AIforce* → Salesforce · *shadow AI* → Okta. The three-band ladder is labelled the digest's own three times (*"This digest uses a three-band framing of its own"*, *"The framing is the digest's own, no source below publishes it, and it goes in no source's mouth"*), and Okta's inverse is explicitly flagged as the digest's arithmetic, not Okta's phrasing. No label is invented and placed in a source's mouth anywhere.

**Audience framing & voice (v1.31): PASS.** All nine banned constructions return 0. The reader is never located inside a bank; S5 is written as what a bank's assurance function asks a *supplier* for, which keeps the reader upstream of the regulated entity exactly as run plan §12 required. Banking material is third-person editorial about engineering content throughout, never a compliance briefing.

**Agent terminology precision (v2.6): PASS with one gap (secondary finding 2).** Twenty-seven of twenty-eight body sources carry a band tag on first use. Eleven carry an explicit *"does not separate"* statement, which is the harder half of the rule and is done well. The deep-dive requirement for at least one paragraph distinguishing the spectrum is met in the executive summary.

**Vendor-interest attribution: PASS with one gap (secondary finding 3).** Anthropic (against-interest, named as such), Forrester, Okta, Microsoft, LinearB, GitHub, Paulsen/Coder, LeadDev/Postman, CNCF/WSO2, FinOps, the three preprints and the four self-reported accounts all carry their disclosure on first use.

**Sources & links: PASS.** 39 content `href`s, all real and all in the briefs' lists — including `cisa.gov/known-exploited-vulnerabilities-catalog` (briefs §2.13) and the GitHub changelog (briefs §2.8). No fabricated URL. No `http://`. Every section carries a `.source-tag`.

**Date-range enforcement (v1.4): PASS** — see Part 2 item 14.

**Design: PASS.** Single complete HTML file. Deep-dive template CSS preserved. Six real `<svg>` elements. No AI-generated imagery, stock photography or decorative illustration. No inflammatory headline — *Who Signs It Off* is a question the issue answers.

**Deep-dive design enhancements (v1.2): PASS.** Left-aligned cover, `.deep-badge` reading **"Deep Dive"** ✅, four-cell `.cover-scope`, single-figure `.cover-stat-band`, three-card `.how-to-read`, `.section-marker` on all nine content sections, sticky `.progress-bar` with its script present, distinct layouts on consecutive source sections, one section with `.article-with-sidebar` and one opening with `.by-the-numbers`, `.counterpoint-section` with pill badge and a mandatory reconciliation `<h3>` (*"Why both columns are true"*), `.timeline-box` with colour-coded dates, navy `.lessons-section` opening on `.verdict-box` and closing on `.key-takeaway`, `.radar-compact` two-column with the urgent item in red, and the footer archive bar.

**Archive bar: PASS, exact.** `#22 · Weekly` · `#23 · Deep Dive` · `#24 · Weekly` · `#25 · Weekly` · `#26 · Deep Dive` with `class="archive-pill current"` on the last. Footer reads *18 September 2026 · Deep Dive*, next edition Friday 25 September 2026, no branding, no company names.

**Palette guardrail (v1.32): PASS** — see Part 1, Flag 1.

**Template compliance: PASS.** Cover badge matches the format (red "Deep Dive"). All classes used as the template defines them; the three ported additions are ruled at Part 1, Flag 4.

---

# PART 4 — Caveats on this review

1. **One primary was re-fetched, not all twenty-eight.** forrester.com was chosen because it carries the issue's spine (S1's measurement, the Counterpoint's right column and SVG #1) and because ledger row 7 is quoted verbatim in the shipped HTML. It confirmed exactly. The other twenty-seven rest on the §0.2 ledger, which I treated as reliable on the strength of that check plus its internal discipline — 21 dropped rows and 9 softened rows in a 108-row ledger is a ledger that was actually run, not one that was written to justify a draft.
2. **The epistemic-reframing count is a judgement, and I have shown my exclusions.** A reviewer applying the test more loosely would count 18; more strictly, 9. At every setting the issue is far over a cap of 2, so the finding does not turn on where the line falls. The thirteen I list are the ones where the negation carries the analytical point rather than a disclosure.
3. **Two of the blocking findings originate at Phase 3, not Phase 4.** B1's instances 10–12 and B5's composition line are reproduced verbatim from briefs §2.11, §2.12 and §1.0. Phase 4 executed the brief. The fixes below still have to land in the HTML, but §1.0, §1.11 and §1.12 should be corrected in the same pass so Issue 27 does not inherit them.
4. **The `.btn-grid.four` four-cell panel was not tested at phone width.** It is a new grid variant; confirm it wraps before delivery.
5. **`digest-state.json` must not be written until B1–B5 land.**

---

# SUMMARY OF FIXES

**Blocking — all five must land before delivery:**

1. **B1** — rewrite eleven sentences (table above) to bring epistemic reframing from 13 to 2.
2. **B2** — replace S1's two opening sentences with the shorthand reference; the 60% is homed on the cover.
3. **B3** — change seven numeric section cross-references to the section labels, starting with the How to Read card.
4. **B4** — delete the *"Named responses landed on both sides within days…"* sentence from Meanwhile item 1.
5. **B5** — reword the executive summary's composition line so twenty-eight reconciles with its own breakdown.

**Secondary — recommended in the same pass:** the Counterpoint's missing handoff and the three repeated *"is the next question"* closes (1) · the CNCF band tag (2) · Salesforce's vendor disclosure (3) · Figma's *~30%* (4) · six jargon glosses, *control plane* first (5) · the AWS Radar date's provenance (6) · three restatements cut (7) · ~80 words back into the Counterpoint (8) · compress the executive summary's band paragraph (9) · de-imperative *"instrument the lifecycle"* (10).
