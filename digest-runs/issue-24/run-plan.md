# Issue 24 — Run Plan (Phase 2: Inventory & Rank)

**Date window:** 29 August – 4 September 2026
**Publication:** Friday 4 September 2026
**Spec version:** v1.38
**Format:** **Standard Weekly**
**Projected body copy:** ~3,505 words (budget 2,600–3,700)

This document is the contract for Phases 3 and 4. Phase 4 may not silently re-promote, demote or substitute any candidate. Any change goes back to Phase 2. Every rejection at §7 is binding.

---

## 1. Format decision

`consecutive_non_deepdive` is **0** — Issue 23 was the deep dive. **The trigger has not fired**, and the spec is explicit that format falls out of the inventory rather than being chosen up front. The question is therefore only whether the pool supports a Standard Weekly honestly, or whether this is a Light Edition that has not admitted it.

### 1.1 Does the pool support a Standard Weekly?

Yes, comfortably. Four candidates are independently anchor-grade news events inside the window: Uber's 3,300-role restructure (2 Sep), Nvidia's $12.93bn agreement to buy Hugging Face (3 Sep), Unit 42's agent-run ransomware investigation (2 Sep) and Tottenham Hotspur's VMware exit (3 Sep). A fifth, METR's $600,000 stolen-key incident (1 Sep), is stronger than most weeks' quick takes. The back of the book has a genuinely fresh Leadership Read from an outlet never used in the run (Rachel Laycock, martinfowler.com, 2 Sep). Three of the four operational concerns are covered by news events rather than essays.

The pool is deep enough that the binding problem this week is **not scarcity but crowding** — too much AI-substrate material, and three outlets (InfoQ, The Register, martinfowler.com) supplying most of it. That is a curation problem, worked at §5.1 and §5.2, not a format problem.

### 1.2 Light-edition check (v3.0) — zero of three signs fire

| Sign | Status |
|---|---|
| Lead is a routine version release with no controversy | **No** — a 10% workforce reduction in which the manager layer, the minimum viable team size and the remote-working policy are all named as the objects being redesigned |
| A quick take is a single-source funding number with no follow-on analysis | **No** — QT1 is a signed acquisition agreement with a published deal structure; QT2 is a named CTO on the record with a figure and a timescale |
| Outside In is filling the slot rather than illuminating | **No** — Outside In is **omitted** rather than filled, on a worked eligibility ruling (§5.4). Omitting is the spec's own option; padding it would have been the failure |

### 1.3 Ruling

**Standard Weekly.** No deep-dive trigger, no Light-edition signs, and a word projection sitting 905 clear of the floor.

**Carry forward:** `consecutive_non_deepdive` → **1**.

### 1.4 Word budget projection (v1.38)

| Section | Words |
|---|---|
| Foreword | 75 |
| Editorial Moment | 70 |
| Week at a Glance (6 items, 2 expanded) | 320 |
| Lead — Uber | 400 |
| QT1 — Nvidia / Hugging Face | 250 |
| QT2 — Tottenham Hotspur / VMware | 240 |
| Mid-issue accent — PayPal | 60 |
| **Feature — "Nobody noticed"** (Unit 42 + METR) | 500 |
| In Practice — Trokis / Monzo | 400 |
| Other News (4–5 items) | 220 |
| Platform Updates (2 rows) | 60 |
| On the Radar (4 items) | 150 |
| The Leadership Read — Laycock | 500 |
| Down the Rabbit Hole | 60 |
| Recommended Reading | 70 |
| Takeaway lines + source attributions | 130 |
| **Total** | **~3,505** |

905 clear of the floor, 195 clear of the ceiling. Two sections in this projection are conditional (Feature, In Practice); both branches are worked at §11 and both stay inside the band. Outside In is not in the projection because it is omitted.

---

## 2. The slate

| Slot | Story | Concern | Substrate | Event/essay | Urgency |
|---|---|---|---|---|---|
| **Lead** | Uber cuts 3,300 roles and redesigns the org chart around fewer layers, fewer managers and almost no one- or two-person teams | Management & teams | **Non-AI** | News event | `decide_this_month` |
| **QT1** | Nvidia agrees to buy Hugging Face for $12.93bn, putting the open-model registry inside a chip company | Wider engineering landscape | AI | News event | `decide_this_month` |
| **QT2** | Tottenham Hotspur leaves VMware for HPE and puts the licensing saving north of 85% | Operating at scale | **Non-AI** | News event | `decide_this_month` |
| **Editorial Moment** | "Quote of the week" — Martin Fowler's Paracelsus Maxim: the difference between a medicine and a poison is dosage | — | **Non-AI** (borderline, §5.1) | — | — |
| **Mid-issue accent** | `.mid-accent-highlight` — PayPal's 31 August cuts across three Indian cities and Ireland, and the disputed headcount | — | **Non-AI** | News event | — |
| **Feature** (occasional, `last_feature_date` null) | "Nobody noticed" — Unit 42's ten-hour agent-run intrusion and METR's $600,000 of unbilled credits | Operating at scale | AI | News event | `decide_this_month` |
| **In Practice** | Jarryd Trokis (Monzo) — a frontend engineer handed the Backend Platform Squad. Evergreen, *"a classic worth revisiting"* | — | **Non-AI** | Essay | — |
| **Outside In** | **OMITTED** — worked ruling at §5.4 | — | — | — | — |
| **The Leadership Read** | Rachel Laycock (CTO, Thoughtworks) — code review is the wrong place to catch problems now | — | AI | Essay | — |

**AI as substrate across the featured sections (Lead, QT1, QT2, Editorial Moment, Outside In, In Practice): 1 of 5 present.** Cap is 4 of 6. Full table and rulings at §5.1.

---

## 3. Why this lead

On 2 September Uber announced it is cutting about **3,300 roles, roughly 10% of global headcount** — its largest reduction since the pandemic. What makes it the lead is not the number. It is that the memo names the org chart itself as the thing being redesigned, and names four levers explicitly:

1. **Manager roles fall by about 20%.**
2. **Teams of only one or two people are cut by half.**
3. **Staff more than seven layers from the CEO are reduced.**
4. **Fully remote working drops to about 1% of staff**, with remaining remote employees asked to relocate nearer offices and the existing three-days-a-week policy enforced more strictly.

Structurally, **Core Services Engineering and Science are merged into one organisation**, and delivery operations across restaurants, retail and direct are consolidated into single global, regional and country teams. Dara Khosrowshahi framed the result as *"a simpler org chart geared toward building versus managing"*, and stressed the cuts reflect structure rather than individual performance.

It leads for four reasons.

1. **It is the clearest published example this year of span of control being treated as a design object.** Almost every engineering director will at some point be asked to flatten a structure, justify a manager ratio, or defend a three-person team. This is a large engineering organisation doing all three at once, in public, with numbers attached. The "what changes" is immediate and entirely at the reader's altitude: the conversation moves from *how many people do we cut* to *what is the smallest team we are prepared to run, and how many layers can we defend*.
2. **The location policy and the org-shape policy arrived in the same memo.** That is the part a leader has to be ready to explain, because the two get read as a single message about trust whether or not that was intended. It is a communications problem before it is a structural one.
3. **AI is not the stated driver.** Uber cites complexity and scale. In a candidate pool where nearly everything else is AI-substrate, the strongest Management & teams story of the window happens to be the one that is not about agents — which is worth stating plainly rather than treating as a happy accident.
4. **Breadth.** The last three leads were Ways of working (23), Ways of working (22) and Wider engineering landscape (21). **Management & teams is the concern most conspicuously absent**, and it is also where the week's strongest story sits. The guardrail and the substance ranking point the same way this week (§5.9).

### 3.1 News-event Lead test (v1.32)

A corporate restructure announced **2 September**, inside the window, reported the same day by TechCrunch and the following day by HR Executive, Al Jazeera and Quartz. Case (a) of the new-in-window rule — no traction exception is needed and none should be invoked. **PASS.**

### 3.2 Binding constraints on the Lead copy

- **A discrepancy Phase 3 must pin before either version is printed.** TechCrunch renders the 20% as a cut to *manager roles*, with the removal of staff more than seven layers from the CEO as a separate lever. HR Executive renders it as a 20% reduction in *employees seven or more layers from the CEO*. These are different claims. **Phase 3 verifies against Khosrowshahi's email text (or Uber's own communication) and Phase 4 prints only the verified version.** If neither can be pinned, the Lead drops the 20% entirely and runs on 3,300 / 10%, the halving of one- and two-person teams, the Core Services merger and the ~1% remote figure — all of which are consistently reported.
- **Structure, not performance.** Khosrowshahi's framing that the cuts reflect structure rather than individual performance is a stated claim and should be reported as his framing, not endorsed.
- **No speculation about AI.** Uber does not cite AI. Do not supply the motive the company did not.
- **One cross-issue throughline is permitted, one sentence, not a frame:** Issue 22 covered Oracle reducing headcount against near-tripled capital spending; Uber's restructure is notable for making no such argument. **This is the only permitted reference to the Oracle capex-vs-headcount material, which is on the no-repeat-anchor set (§5.5).**
- **Third-person voice throughout.** No "your team", no "the reader's org", no rhetorical questions.
- Sources: https://techcrunch.com/2026/09/02/uber-is-laying-off-10-of-staff-or-3300-people/ · https://hrexecutive.com/uber-cuts-10-of-workforce-tightens-return-to-office-rules/ · https://www.aljazeera.com/economy/2026/9/2/uber-lays-off-3300-employees-in-largest-cuts-since-the-pandemic · https://qz.com/uber-layoffs-management-restructuring-3300-jobs-090226
- **Binding on attribution: TechCrunch is the Lead's write-up source and must not also be cited in QT1** (adjacency, §6.11).

### 3.3 Lead sanity check (v3.1)

Ranked across all four concerns on combined so-what + narrative tension + operational-decision fit + UK/ME relevance:

| Rank | Candidate | So-what | Tension | Operational-decision fit | UK/ME |
|---|---|---|---|---|---|
| **1** | **Uber restructure** | High | High | **Very high** — span of control, minimum team size, RTO | Medium |
| 2 | Nvidia / Hugging Face | High | High | High — model supply-chain risk | High |
| 3 | Unit 42 agent-run ransomware | High | High | High — detection and escalation design | High |
| 4 | Tottenham Hotspur / VMware | Medium-high | Medium | High — licensing and vendor-exit budget | High |
| 5 | METR $600,000 stolen key | High | High | High — spend governance on unbilled compute | High |
| 6 | Anthropic zero data retention | High | Medium | Medium-high — procurement and monitoring ownership | High |
| 7 | DoorDash Flux | High | High | High — but essay-shaped, peer-org decision | High |
| 8 | PayPal cuts | Medium | Medium | Medium | High |

**The Lead ranks first. PASS, no exception needed.** Candidates 2 and 3 both take real slots (QT1 and the Feature); candidate 4 takes QT2 as a deliberate balance call documented at §5.1.

---

## 4. Why this combination

The three anchors answer three different questions a leader is holding this week: *what shape is the organisation supposed to be* (Lead), *who owns the things we depend on* (QT1), and *what does it cost to stop depending on someone* (QT2). None is a tool release. None requires the reader to run a system. All three are news events inside the window.

There is a throughline and it should be stated once, not laboured: **this week is about what an organisation actually owns.** Uber redraws what it owns — layers, manager ratios, the minimum size of a team. Nvidia buys something eighteen million developers depend on and do not own. A football club stops renting a hypervisor licence and finds the exit takes three months. And the Feature covers two organisations that owned neither the detection window nor the bill. Phase 4 may surface this in the Foreword and echo it at most once. **It must not be imposed on every section, and it must not be written as a "the question is not X — it's Y" construction** (§9.4).

The back of the book runs elsewhere on purpose. In Practice is about a manager leading a team whose work he could not do. The Leadership Read is about whether reviewing every change is still the right ritual. Two different aspects of engineering leadership, neither of them the front-of-book theme.

**The load-bearing balance decision in this plan is QT2.** Tottenham ranks fourth on substance and takes an anchor slot over the third-ranked Unit 42 story because it is the only non-AI candidate strong enough to anchor, and because its sourcing is better: a named UK CTO on the record with figures, against an unnamed victim and no quoted researcher. Unit 42 is not buried for it — it takes the Feature, at 500 words, which is more space than a Quick Take would have given it.

---

## 5. Run-specific risks — explicit resolutions

### 5.1 Risk — AI saturation (the run's named risk #1)

**Reader-experience count (v1.32), six featured sections, cap 4:**

| Featured section | Story | AI as substrate? | Non-AI candidate considered for this slot |
|---|---|---|---|
| Lead | Uber restructure | **No** | — (the non-AI candidate won the slot outright) |
| QT1 | Nvidia / Hugging Face | **Yes** | PayPal's India + Ireland cuts (blocked by concern diversity — Management & teams already anchors); Mozilla's cadence change (`general_awareness`, Platform Updates tier) |
| QT2 | Tottenham Hotspur / VMware | **No** | This *is* the non-AI candidate; Unit 42 and METR were the AI alternatives and were declined for the anchor |
| Editorial Moment | Fowler, Paracelsus Maxim | **No** (borderline — see ruling) | — |
| In Practice | Trokis / Monzo | **No** | This *is* the non-AI option; the AI alternative (Edwards-Alexander) is blocked twice over (§5.3) |
| Outside In | **Omitted** | — | Tottenham was tested for this slot and failed on eligibility (§5.4); DoorDash was tested and is blocked by v1.35 |
| | **Total** | **1 of 5 present** | |

**Editorial Moment classification ruling.** Fowler's maxim — *"The difference between a medicine and a poison is dosage"* — is a general statement about software practice. The one-line "why it matters" connects it to the week's code-review argument, which is AI-driven. **Ruled non-AI-primary**, on the same reading applied to Kent Beck at Issue 17: AI is the backdrop, not the subject. It is genuinely borderline and is flagged. **If Phase 5 reclassifies it, the count moves to 2 of 5, which still passes with headroom.** Nothing in this plan depends on the ruling going one way.

**Feature classification ruling, stated because the Feature sits outside the counted six.** The Feature is **AI-substrate** and is counted as such wherever it matters. It is named here so Phase 5 sees the honest reader experience rather than only the six-section arithmetic: across the whole issue, AI drives QT1, the Feature, the Leadership Read and most of Other News, and does not drive the Lead, QT2, the Editorial Moment, the mid-issue accent or In Practice. **That is a balanced issue, not a padded count.**

**Long-form variety rule (v1.35) — at most ONE AI-primary of three:**

| Long-form section | Piece | AI-primary? | Aspect of engineering leadership |
|---|---|---|---|
| In Practice | Trokis — leading a platform team he was not the expert in | **No** | Technical leadership for managers |
| Outside In | **Omitted** | — | — |
| The Leadership Read | Laycock — code review as the wrong catch point | **Yes** | Ways of working / engineering practice |

**One AI-primary of the two running, against a cap of one. Two distinct aspects, against a floor of two. PASS.** The rule is the reason Outside In is omitted rather than filled with DoorDash — full working at §5.4.

**Non-AI material considered across the whole issue and where it landed:** Uber (Lead), Tottenham (QT2), PayPal (mid-issue accent), Mozilla (Platform Updates row 1), Trokis / Monzo (In Practice), Fowler (Editorial Moment), jQuery at twenty (Down the Rabbit Hole), Zalando's experimentation method (Week at a Glance). The pool's non-AI material is not thin and it is not decorative — it carries the Lead, an anchor, the accent, the craft section and the rabbit hole.

### 5.2 Risk — adjacent-source rule and the 2-section cap (the run's named risk #2)

Three outlets supply most of the pool: **The Register** (ten candidates), **InfoQ** (eight) and **martinfowler.com** (three). The 2-section cap is the binding constraint on this issue and every allocation below is deliberate.

| Outlet | Sections | Status |
|---|---|---|
| **The Register** | QT2 (Tottenham) + **Feature fallback only** | **RESERVED.** The Register's second section is held for the Feature *if and only if* Phase 3 cannot pin the Unit 42 and METR primaries. If both primaries pin, Register sits at 1 and the second section becomes available for the Hugging Face dissent in Recommended Reading. **In no branch may The Register appear in Week at a Glance, Other News, Platform Updates or On the Radar.** |
| **InfoQ** | Other News + Down the Rabbit Hole | **AT CAP.** No InfoQ in Week at a Glance, Platform Updates or Recommended Reading. The Microsoft Foundry item is therefore pinned to Microsoft's own announcement, not to InfoQ (§8). |
| **martinfowler.com** | Editorial Moment + The Leadership Read | **AT CAP.** *"An Accidental Blackboard"* (Edwards-Alexander) is excluded from the issue entirely — it is blocked independently by the In Practice / Leadership Read anti-overlap rule (§5.3). No martinfowler link in Recommended Reading. |
| Anthropic (own posts) | Week at a Glance (two items, one section) | 1 |
| TechCrunch | Lead | 1 — **must not be cited in QT1** |
| NVIDIA Newsroom | QT1 | 1 |
| Zalando | Week at a Glance + Recommended Reading | 2, at cap |
| Palo Alto Networks / Unit 42 | Feature + Recommended Reading | 2, at cap (conditional) |
| Monzo | In Practice | 1 |
| Everything else | 1 each | — |

**Anti-overlap (v2.5), stated explicitly because the brief flagged it:** Thoughtworks / martinfowler.com **cannot serve both In Practice and the Leadership Read**. It serves the Leadership Read. In Practice comes from Monzo. **Resolved.**

**Adjacent-source rule (v1.32) — no two consecutive featured sections from the same outlet.** Full ledger at §6.11. The one live risk is Lead → QT1 (both would be TechCrunch if QT1 cited TechCrunch's acquisition write-up); the binding fix is at §3.2 and §8 — **QT1 cites the NVIDIA newsroom plus CNBC / Axios, and not TechCrunch.**

### 5.3 Risk — In Practice, season week 2 NOT FOUND (the run's named risk #3)

**Ruling: keep the season. Run week 2 as an evergreen, tagged *"a classic worth revisiting"*. Do not open a new season. Conditional on a substance-floor check by Phase 3, with a clean omission as the fallback.**

Phase 1 ran five themed queries for *"Making technical decisions when not the SME"* and returned SEO listicles, vendor frameworks and generic skills guides. The only genuinely on-theme first-person piece it found is the Ferit Topcu / Zenjob article **already used at Issue 20** and therefore barred by the no-recycle rule.

**Phase 2 searched again, as the brief permits, and found one qualifying evergreen.**

**Selected: Jarryd Trokis, "My first 3 months at Monzo as an engineering manager" (monzo.com, 3 April 2022).** A frontend engineer given the Backend Platform Squad — *"a team whose skills are far beyond my domain of expertise"* — writing in the first person about being out of his depth: *"As a humble frontend engineer … I could not have felt more out of place and out of my depth"*, and *"What did I know about Kubernetes, deployment manifests, metrics ingestion … or canary deployments with an automated rollback capability?"*

Tested against the three required qualities (v3.5):

1. **Named operator at a named organisation** — Jarryd Trokis, Engineering Manager, Monzo. **PASS.**
2. **Journey not framework** — a first-person account of a transition, not a normative "how to manage outside your domain" piece. **PASS.**
3. **Technical content at implication level** — the technologies (Kubernetes, canary deployments, metrics ingestion) appear as the shape of what he did not know, not as instruction. **PASS.**

**Recency:** the v3.5 source rules make evergreen pieces *explicitly eligible when recent material on the season's theme is thin*, with the *"a classic worth revisiting"* sub-label. That is precisely this case, and Issue 21 (Ben Balter, *"Reorgs happen"*) is the precedent. **The publication date must be stated honestly in the author card: *Jarryd Trokis · Monzo, April 2022*.**

**No-recycle check:** `in_practice_history` contains a *different* Monzo piece (Diogo Matias, Issue 11). The rule is per-piece, not per-company, and the archetype section explicitly calibrates the voice against Monzo. **PASS.** Monzo's presence in `outside_in_history` (Issue 1) is irrelevant — that exclusion governs Outside In, which is omitted this week.

**The three options, worked:**

| Option | Ruling |
|---|---|
| (a) Open a new season with the Edwards-Alexander piece | **Rejected, three times over.** It is off-theme (agent-era practice, not SME-adjacency); it is AI-primary alongside an AI-primary Leadership Read, which breaks v1.35; and it shares an outlet *and an employer* with the Leadership Read, which the anti-overlap rule forbids outright. It also opens a fourth season with no visible week 2, against the standing instruction |
| (b) Cut the season short at one issue and omit In Practice | **Rejected as the primary plan, retained as the fallback.** This would be the third consecutive short season, and a qualifying on-theme piece exists |
| (c) **Keep the season, run the evergreen as week 2** | **Selected** |

**Why this matters beyond one slot:** the standing instruction from Issue 22 is not to open a new season until a week 1 *and* a plausible week 2 are both visible. Option (c) honours that instruction by not opening one at all — the existing season simply continues with an evergreen. **A plausible week 3 is also now visible and recorded for the state file:** Bruno Siqueira, *"Four things I learned as an interim engineering manager"* (Atlassian, March 2024) — named operator, named org, first-person, non-AI, on the same theme of leading outside one's expertise. That is not used this week and is not a commitment; it is recorded so the next season decision is not made blind again.

**Binding conditional.** The Trokis piece is reflective and its named mechanisms are soft (an impostor-syndrome narrative, a "problems find you" observation). **Phase 3 must read the full text and confirm the In Practice substance floor: (1) a specific named claim, (2) at least one concrete example, mechanism or distinction, (3) a takeaway that survives the strip-link test.** If it cannot, **In Practice is omitted cleanly with the standard footer note *"In Practice returns next week"*, the season ends at one issue, and the word budget absorbs it (§11).** Do not substitute another piece; do not pad.

**Format constraint (v1.34, grep-verifiable):** the `.ip-theme` element carries the theme name — *Making technical decisions when not the SME* — and the evergreen sub-label only. It must not contain "week", "of 3", "of 4", "part", or any count.

### 5.4 Risk — Outside In is omitted, and the eligibility tests that produced that

**Ruling: omit.** Three candidates were tested in full.

**DoorDash Flux (InfoQ, 31 Aug).** The strongest Outside In candidate in the pool on substance. Fresh company — not in `outside_in_history` and not on the exclusion list. Substitution test: *"A large engineering org moved agent execution off developer laptops into a governed, observable platform it owns, and ran 130,000 engineering tasks through it in a month."* → still meaningful, still actionable. **Passes the transferability, substitution and one-sentence tests.** **Blocked by v1.35**: it is AI-primary, and the Leadership Read is already the one AI-primary long-form the rule allows. The only way to run it would be to drop Laycock — the best Leadership Read candidate of the run, from an outlet never used — which would also be the second consecutive issue without a Leadership Read. **Declined. DoorDash takes a real placement in Other News at two sentences.**

**Tottenham Hotspur / VMware (The Register, 3 Sep).** Tested for Outside In and **rejected on eligibility**, then promoted to QT2 where it is genuinely strong.
- *Sector rotation (v2.3):* would have been fine — a fresh category, and the rolling 4 (Klarna, Duolingo, — , Spurs) would have held.
- *Substitution test (v2.4):* *"A large engineering org left an incumbent virtualisation vendor for a competitor, cut licensing costs by more than 85% in about three months, and judged the consolidation onto a single operations stack more valuable than the saving."* This carries **some** meaning as a total-cost argument — it is not empty.
- *The migration test is what fails it.* The spec bars "migration stories where the headline is the technology" and admits them "only if the *people and process* — how the org decided, staffed, sequenced, communicated, or measured the change — is the actual subject." The source is a short news piece built from CTO quotes about savings and stack consolidation. **How the org decided, staffed and sequenced is not the subject.** There is also not 420 words of engineering-leadership substance in it. **Rejected for Outside In; correct at 240 words as QT2, where the subject is the licensing decision itself.**

**Zalando agentic engineering snapshot (14 Aug).** Exceptional material and a fresh European organisation. **Rejected on three independent grounds:** it is dated 14 August, which falls before *both* this window and Issue 23's, so it does not even reach the gap-week traction exception; it is AI-primary and would collide with v1.35 exactly as DoorDash does; and running it would put a second August-dated evergreen in the same issue as the In Practice evergreen. **→ Recommended Reading, dated honestly.**

**Consequence, stated plainly:** the issue carries two long-form sections rather than three. The spec's section-spread rule anticipates this — *"If only two of the three long-form sections are warranted this week, drop the third — don't squeeze them adjacent."* The word budget survives comfortably (§1.4), the Feature fills the mid-issue space Outside In would have occupied, and no slot is padded.

### 5.5 Risk — no-repeat-featured-anchor (v1.31), Issues 22–23

Excluded anchor set: **SAFE agent-incident RFC · Oracle capex-vs-headcount · Zoom disclosure asymmetry · the Issue 23 deep-dive core datasets** (JetBrains 15k-dev survey, DX DXI figures, Veracode 56%, GitClear duplication, the METR randomised controlled trial, the Monzo Agent Chip case study).

| This issue | Ruling |
|---|---|
| **Uber (Lead)** | **Clear.** No adjacency to any Issue 22 or 23 anchor. The single permitted Oracle throughline sentence (§3.2) is the spec's cross-issue throughline device, not a re-anchoring |
| **Nvidia / Hugging Face (QT1)** | **Clear.** Hugging Face appeared in Issue 22 only as one of five named SAFE contributors — not as a story, and not as an anchor |
| **Tottenham (QT2)** | **Clear.** Nothing adjacent |
| **Feature — METR** | **Clear, but requires an explicit disambiguation.** The Issue 23 deep dive used the **METR randomised controlled trial** (developers 19% slower). The Feature uses a **completely different story**: METR the research organisation had an API key stolen and $600,000 of model credits consumed. **Binding: the Feature must not cite, reference or allude to the METR RCT at all**, and must gloss METR as a research organisation on first use so the reader is not left connecting the two |
| **Oracle** | **Blocked from anchoring.** On the excluded set and independently unconfirmed. On the Radar, one line (§8) |
| **SAFE / Zoom** | Not used anywhere in the issue |

### 5.6 Risk — out-of-window items and the traction exception

Four items in the pool sit outside the 29 Aug – 4 Sep window. Each is ruled here so Phase 3 and Phase 4 do not have to re-derive it.

1. **OpenAI's rogue-agent / reward-hacking report — 27 August, out of window** (inside the uncovered 22–28 August gap week). **The 1 September Anthropic response is the in-window peg.** Ruling: **usable, in Week at a Glance only, under the new-in-window traction exception (b), with the framing condition applied explicitly.** The item must state that OpenAI published on 27 August and must frame the coverage on **what is new this week**: Anthropic's 1 September commitment to real-time escape classifiers, automated transcript monitoring and tighter isolation, and its request that every organisation testing pre-release models with reduced cyber safeguards commit to a named set of practices. **The 12 May – 19 July escalation timeline, the 1,200 agents, the 70,000 messages and the Hugging Face zero-days are NOT the story this week and must not be retold at length.** One line of context, no more. OpenAI's own post returns HTTP 403 and must not be cited as fetched.
2. **OpenAI's decision to slow model development — 24 August, out of window**, also gap-week, with no in-window peg. **Not used.**
3. **Lloyds / Halifax / Bank of Scotland outage — 26 August, out of window.** Phase 1 swept specifically for in-window traction and found none: no FCA or PRA statement, no Treasury Committee action, no further Lloyds statement, no third outage. A community claim of a 1 September outage could not be corroborated. **Fails the traction exception. On the Radar, one line, out-of-window date stated. Not an anchor, not a Quick Take, not a Week at a Glance item.**
4. **Agentic Payments Alliance — launched 18 August; 31 August coverage is secondary analysis of the same launch, same 26 members, no new alliance action.** **Fails the traction bar. On the Radar, one line.** The loyalty detail — that loyalty processing is named as one of the problems the alliance has not solved — is the one genuinely useful fact and is the reason it appears at all.

**Zalando's agentic snapshot (14 Aug)** and the **In Practice evergreen (April 2022)** are handled at §5.4 and §5.3 respectively: both are dated honestly, neither is presented as news.

### 5.7 Risk — paywalls, 403s and the substance floor

**Verified by Phase 2 this run:** `careersatdoordash.com/blog/delegating-engineering-work-to-cloud-based-agents/` **returns HTTP 403 to automated fetches — confirmed, not assumed.** It resolves in a browser but cannot be verified in-pipeline.

**Binding rulings:**

- **DoorDash: InfoQ is the primary.** The DoorDash post may be named as the original but every figure is attributed to InfoQ's write-up. This is one reason DoorDash sits in Other News at two sentences rather than in a featured slot — a primary that cannot be fetched cannot carry a featured section's substance floor, and the brief's instruction to check this is discharged here.
- **The Pragmatic Engineer Pulse (3 Sep) is paywalled.** Only the headline, intro and section headers are publicly readable. **It cannot anchor.** It may run as **one sentence in Other News**, carrying only the publicly visible claim — roughly 50% savings from routing simpler workloads to open models — explicitly characterised as behind a paywall. **The named company list must not be printed** unless Phase 3 can see it without a subscription. If Phase 3 cannot confirm even the headline figure publicly, **cut the item**.
- **Finextra, Parliament, Computer Weekly return 403.** None is load-bearing anywhere in this plan. The Lloyds radar line is attributed to City A.M.; the Agentic Payments Alliance line to The Motley Fool or PYMNTS, not Finextra.
- **OpenAI's incident post returns 403** — see §5.6.

### 5.8 Risk — the Leadership Read

**Selected: Rachel Laycock, CTO at Thoughtworks, on code review (martinfowler.com, 2 September 2026).**

- **In window** — 2 September, the only Leadership Read candidate that is.
- **Outlet entirely fresh.** `leadership_read_history` contains LeadDev (×4), Pragmatic Engineer (×2), Honeycomb, Fortune, incident.io, MIT Sloan, The Signal and lethain (×2). **martinfowler.com has never held the slot.** lethain is excluded this issue as last used; it is not needed.
- **Clears the 400–600 substance floor without padding.** (1) The named argument: mandating review of every change conflates several distinct responsibilities and has become a bottleneck now that more code is produced than can realistically be read. (2) At least two concrete mechanisms: move quality work earlier through pairing, mobbing and collaborative design; automate the deterministic checks; reserve human review for architectural decisions, security boundaries and unfamiliar critical systems. (3) The takeaway without clicking: review is not one activity but several, and the ones that need a human are a minority of the ones currently mandated. Quotable central claim: *"We need engineers to understand systems, not diffs."*
- **It is the one AI-primary long-form the v1.35 rule allows** (§5.1).
- **Rotation and overlap:** no consecutive-outlet conflict; anti-overlap with In Practice (Monzo) clear; Outside In omitted, so no company clash.

**Rejected, with reasons:**

- **Ludicity, "AI mania is eviscerating global decision-making" (18 July).** The standing candidate carried from Issues 22 and 23, verified real, never used, outlet clear. **Rejected again on the same two grounds and they have not weakened.** (1) **Evidence quality**: the central claim — every AI project observed across roughly 300 conversations failing, 0% success in eighteen months — is explicitly one consultant's observation of his own client base, unverifiable and unverified. That is a weak spine for the issue's deepest curated piece. (2) It is **AI-primary**, so taking it changes nothing about the v1.35 arithmetic while losing Laycock's freshness and specificity. **→ Recommended Reading, characterised honestly as one consultant's account.** Carried forward to Issue 25, still never used.
- **The Register, "Hugging Face is too important to fall into Nvidia's hands" (3 Sep).** Opinion, not reporting. Running it as the Leadership Read would double up on QT1's event, and The Register's second section is reserved (§5.2). **→ Recommended Reading, conditional on Register capacity; otherwise not used.**
- **Canva / Rob Giglio.** Standing candidate from Issues 22–23. AI-primary, same block, and independently the weakest of the three on the substance floor — Giglio is Chief Customer Officer rather than an engineering leader. **Not used. Recommend retiring it from the standing list at Issue 25 if it has still not been taken.**

### 5.9 Risk — soft breadth guardrail (v3.4)

Last three leads: Ways of working (23) · Ways of working (22) · Wider engineering landscape (21). **Management & teams is the concern absent from all three, and it is where the week's strongest story sits.** Rolling-4 leads become Management & teams (24) · Ways of working (23) · Ways of working (22) · Wider engineering landscape (21) — **three distinct concerns against a floor of three.**

Recorded because the brief asked for it: **no Ways-of-working lead is taken this week**, so no same-concern repeat needs documenting. The Ways-of-working material in the pool (DoorDash, Laycock, Shevchenko, HashiCorp, Kiro Crew) is substantial and is deliberately placed in Other News and the Leadership Read rather than at the front — a fourth consecutive Ways-of-working lead would have been indefensible against a Management & teams story this strong. The guardrail and the substance ranking agree this week; that agreement is a corroboration, not the reason (§3 is the reason).

### 5.10 Risk — binding facts carried forward

Verified unchanged this window and binding on Phase 4:

- **No shared cause has ever been published for the 27 July 2026 UK multi-bank degradation.** No Pay.UK report, no Lloyds post-incident publication, no regulator statement. Simultaneity is documented; causation is not, and must not be upgraded.
- **The "July 2026 AWS mega-outage" remains UNVERIFIED.** Phase 1 found no primary or major-outlet source in any beat query. **Seventh consecutive demotion. It does not appear anywhere in this issue.**
- **AWS ME-CENTRAL-1 / ME-SOUTH-1 remain OPEN**, with AWS's last public update dated **30 April 2026**. Standing On the Radar line. Say nothing stronger; do not conflate with the us-east-1 concentration watch.
- **The agentic-payments deep-dive cluster and the payments org-shape thread stay retired.** The PayPal item at the mid-issue accent is a single company's restructure, reported to its own sources — it is **not** a sector aggregate and must not be written as one. **No finance-sector layoff aggregate appears anywhere in this issue.**
- **The Oracle 141,000 headcount figure traces to Oracle's own filings and is sound; the 7,000–10,000 September figure does not.** Radar only, framed as unconfirmed.

---

## 6. Balance rules — compliance ledger

Each gate worked explicitly.

**6.1 Audience-fit gate (v3.2).** Lead: what shape the organisation should be, and how a manager-ratio change gets explained — no system operation. QT1: a supplier-risk and model-supply-chain conversation. QT2: a licensing and vendor-exit budget conversation. **All three PASS.** Three candidates were **rejected on this gate** and are recorded at §7: PaperCut (the spec's own Mini Shai-Hulud worked rejection, repeated — the useful takeaway requires running the print server), Zalando's concurrent-experiment method (experiment-design work the reader delegates), and Cloudflare's optional OAuth scopes at anything above a one-line mention.

**6.2 Operational-concern lead test (v3.4).** The Lead connects to *Management & teams* — span of control, manager ratios, minimum viable team size, location policy — with a clear what-changes: the levers a large engineering org pulled are now public and numbered, which changes what a director can be asked to justify. Not a tool release. **PASS.**

**6.3 News-event Lead test (v1.32).** A corporate restructure announced 2 September, in window. Case (a), no traction exception invoked. **PASS.**

**6.4 Anchor balance (v1.32) — ≥2 of 3 news events.** Lead, QT1 and QT2 are all news events. **3 of 3.** PASS above the floor. No analysis anchor was needed, which is why the week's two strongest essays (Laycock, Shevchenko) sit in the Leadership Read and Other News.

**6.5 Within-issue concern diversity (v1.31) — at most one anchor per concern, ≥2 concerns.** Lead = Management & teams · QT1 = Wider engineering landscape · QT2 = Operating at scale. **Three concerns, one anchor each.** PASS at the preferred level. This is also the rule that keeps PayPal out of an anchor slot despite its high UK/ME relevance (§7).

**6.6 Soft breadth guardrail (v3.4).** Rolling 4 = Management & teams (24) · Ways of working (23) · Ways of working (22) · Wider engineering landscape (21) — **three distinct concerns, floor of three.** PASS. See §5.9.

**6.7 Lead sanity check (v3.1).** Top 3 ranked across all concerns: (1) Uber, (2) Nvidia / Hugging Face, (3) Unit 42. Lead ranks first. **PASS**, no exception needed. Full table at §3.3.

**6.8 AI-substrate ceiling — reader-experience count (v1.32).** **1 of 5 featured sections present**, cap 4 of 6. PASS with the largest headroom in recent issues, and PASS at 2 of 5 under the adverse Editorial Moment reclassification. Full table and both classification rulings at §5.1.

**6.9 Long-form variety (v1.35).** **1 AI-primary of 2 running**, cap 1. Two distinct aspects of engineering leadership, floor 2. **PASS.** This rule is load-bearing this week — it is the reason Outside In is omitted (§5.4).

**6.10 No-repeat-featured-anchor (v1.31).** No Issue 22 or Issue 23 anchor anchors this issue. Six named rulings, including the METR disambiguation, at §5.5. **PASS.**

**6.11 Adjacent-source rule (v1.32).** Article and featured sections in reading order:

| Order | Section | Source / outlet |
|---|---|---|
| 1 | Editorial Moment | martinfowler.com |
| 2 | Week at a Glance | Rapid7 / CISA · Anthropic · Zalando · Business Today · Cloudflare |
| 3 | Lead | TechCrunch (+ HR Executive) |
| 4 | QT1 | NVIDIA Newsroom (+ CNBC / Axios) — **not TechCrunch** |
| 5 | QT2 | The Register |
| 6 | Mid-issue accent | Storyboard18 (+ PayPal statement) |
| 7 | Feature | Palo Alto Networks / Unit 42 + METR *(Register only in the fallback branch)* |
| 8 | In Practice | Monzo |
| 9 | Other News | InfoQ (+ Pragmatic Engineer) |
| 10 | Platform Updates | Mozilla · Microsoft |
| 11 | On the Radar | City A.M. · Motley Fool · India TV |
| 12 | The Leadership Read | martinfowler.com |

No two consecutive sections share an outlet in any branch. **PASS**, with two binding constraints that make it hold: **TechCrunch must not appear in QT1** (§3.2), and **the mid-issue accent sits between QT2 and the Feature** so that the Register-fallback branch does not create a Register → Register adjacency (§8). The Editorial Moment (martinfowler) and the Leadership Read (martinfowler) are at opposite ends of the issue, separated by ten sections.

**6.12 Source diversity (v2.0) — max 2 sections per publication.** Full ledger at §5.2. Three outlets are at or held at cap (The Register held at 1–2, InfoQ at 2, martinfowler.com at 2). **PASS**, and the cap is what shapes several placements — it is doing real work this week rather than passing by luck.

**6.13 Urgency anchor gate (v3.2).** Lead `decide_this_month` (high impact — a published set of org-design levers); QT1 `decide_this_month` (high impact — a dependency changing owner); QT2 `decide_this_month` (high impact — an active licensing decision). **No `general_awareness` story anchors.** Nine candidates were rejected on or partly on this gate and are recorded at §7, including the pool's most-covered tool releases (Kiro Crew, Meta Muse Spark 1.3, OpenClaw 2.0, pnpm 12, C# union types).

**6.14 "Worth reading" test (v2.0).** Lead: a company publishing the number of layers it will tolerate and halving its smallest teams. QT1: the registry eighteen million developers depend on, bought by the company whose chips they run on, with an openness commitment attached. QT2: a football club's CTO putting 85% and three months on the exit everyone else is modelling privately. All three carry tension. **PASS.**

**6.15 Section spread (v1.32) — no two long-form sections adjacent.** In Practice at position 11 · Outside In omitted · The Leadership Read at position 18. Separated by Other News, Platform Updates and On the Radar. **PASS.** Only two long-form sections run; neither is squeezed and neither is padded (§5.4).

**6.16 Bank-regulator scope-conditional test (v1.32).** **Not engaged.** No bank-regulator decision appears in any anchor or featured slot. The Lloyds material is a single On the Radar line about an out-of-window outage with no regulator action attached; no FCA, PRA, PSR or Treasury Committee decision is covered anywhere. Recorded so Phase 5 sees the test was considered rather than skipped.

**6.17 In Practice three required qualities (v3.5).** Worked in full at §5.3 — all three PASS, with a binding substance-floor conditional. Anti-overlap with the Leadership Read (Monzo vs martinfowler.com / Thoughtworks): **PASS.** No-recycle against `in_practice_history`: **PASS**, this piece has never been used.

**6.18 Outside In rotation (v2.2 / v2.3).** **Not engaged — the section is omitted.** The exclusion list (Monzo, Revolut, Ramp, Cloudflare, Wise, Linear, incident.io, Vercel, Honeycomb, Datadog, The Finanser, Kent Beck, Shopify, Klarna, Duolingo) was checked against all three candidates: DoorDash, Tottenham Hotspur and Zalando are all fresh. **None was blocked by rotation.** The omission is on eligibility and the v1.35 long-form rule, worked in full at §5.4 — recorded so Phase 5 does not read the omission as a rotation failure.

**6.19 Feature Article cadence (v2.1).** `last_feature_date` is **null** — the Feature has never run. The minimum 1-issue gap is satisfied trivially. The Feature topic (an intrusion timeline and a spend-governance failure) differs from the Lead topic (org shape). The issue is 195 words below the ceiling with the Feature included, so it is not being run against a tight budget. **PASS.** Full justification at §8.

**6.20 Down the Rabbit Hole cadence (v2.1).** `last_rabbit_hole_date` is **2026-08-07** — three issues ago, well inside the 1–2 issue cadence, and eligible. **PASS.**

---

## 7. Rejected for the Lead slot — with reasons

Ranked roughly by how close each came. **Phase 4 may not re-promote any of these.**

1. **Nvidia agrees to buy Hugging Face for $12.93bn** *(NVIDIA Newsroom, 3 Sep)* — the strongest runner-up, promoted to **QT1**. Not the Lead for three reasons: the deal is expected to close in the **first half of 2027 subject to regulatory approval**, so what changes for a leader this month is a supplier-risk watch rather than a decision; *Wider engineering landscape* led as recently as Issue 21 while Management & teams has not led in four issues; and leading with it would have put AI at the top of an already AI-saturated issue when the strongest story in the pool happens not to be AI at all.
2. **Unit 42's agent-run ransomware investigation** *(The Register, 2 Sep)* — third on the ranking, promoted to the **Feature** at 500 words. Not the Lead because the victim is unnamed, no researcher is quoted in the available write-up, and the primary report has not yet been fetched — an anchor cannot rest on a substance floor that is still conditional. Independently, the leadership conversation it creates (detection windows and escalation design) is narrower than the org-shape story, and taking it would have made the Lead AI-substrate.
3. **METR's stolen API key and $600,000 of unbilled credits** *(The Register, 1 Sep)* — paired into the **Feature**. Excellent leadership material — every control that should have caught it was defeated by the same condition, that the compute was not being invoiced — but it is one organisation's incident, and it is stronger as the second half of a synthesis than alone. **Binding disambiguation from the Issue 23 METR dataset at §5.5.**
4. **Tottenham Hotspur's VMware exit** *(The Register, 3 Sep)* — promoted to **QT2**. Fourth on substance, taken over the third-ranked story as the deliberate AI-balance call documented at §4 and §5.1. Also **rejected for Outside In** on the migration test (§5.4).
5. **PayPal's 31 August cuts across Chennai, Bengaluru, Hyderabad and Dublin** *(Storyboard18 / Business Today, 3 Sep)* — high UK/ME relevance and surfaced by the v1.37 name-agnostic catch-all rather than any named query, which is exactly the recall path that lost Visa at Issue 20. **Barred from an anchor by within-issue concern diversity** — Management & teams already anchors at the Lead, and the spec permits at most one anchor per concern. **→ Mid-issue accent, `.mid-accent-highlight`, ~60 words.** **Binding: report both figures — the reported ~600 in India and PayPal's own ~220 — never one alone.**
6. **DoorDash Flux** *(InfoQ, 31 Aug)* — the best Outside In candidate in the pool and blocked by v1.35 (§5.4); barred from the Lead independently by the news-event test, since the substance is a platform-engineering account rather than an event. **→ Other News, two sentences.** **Binding: cite InfoQ, not careersatdoordash.com (403, verified §5.7).**
7. **Rachel Laycock on code review** *(martinfowler.com, 2 Sep)* — barred from the Lead by the news-event test (a reflective essay; the publication is the event, the substance is not). **→ The Leadership Read** (§5.8).
8. **Anthropic's zero-data-retention offer** *(Anthropic / The Register, 2 Sep)* — the highest-relevance banking-adjacent item in the window and a genuine architecture-review changer for anyone selling into UK and Gulf banks. Not an anchor: it is a change to vendor product terms rather than an event with narrative tension, and The Register's second section is reserved (§5.2). **→ Week at a Glance, Worth Knowing, two sentences**, attributed to Anthropic's own announcement. **Binding: the trade-off is the story — enterprises must apply for ZDR and take on the safety-signal triage Anthropic previously did.**
9. **Anthropic's containment commitments and OpenAI's rogue-agent report** *(Anthropic, 1 Sep; The Hacker News, 27 Aug)* — the 27 August report is **out of window**; the 1 September response is the peg. **→ Week at a Glance, Watching, two to three sentences, with both dates stated and the traction framing applied explicitly** (§5.6). Not an anchor: the substance is vendor-to-vendor testing practice, which sits at the edge of the reader's altitude.
10. **Artie Shevchenko on sustainable code review** *(InfoQ, 3 Sep)* — the second half of the week's strongest thematic convergence with Laycock. Barred from the Lead by the news-event test (a conference-talk report). Barred from In Practice because the report does not name his employing organisation, so it fails the "named operator at a named org" quality. **→ Other News, one sentence.**
11. **AWS open-sources Kiro Crew** *(InfoQ, 30 Aug)* — `general_awareness` tool release. The only genuinely interesting element is the reported 39,000 internal Amazon developers, which is **Amazon's own claim and must be attributed as such**. **→ Other News, one sentence.**
12. **HashiCorp repositions HCP Terraform as an agent control plane** *(InfoQ, 1 Sep)* — **vendor positioning, not independent research**, and must be framed as HashiCorp's argument. Real UK/ME relevance (blast radius, short-lived credentials) but not an anchor. **→ Other News, one sentence.**
13. **The Pragmatic Engineer Pulse on model routing** *(3 Sep)* — a genuinely budget-shaped AI decision, and **paywalled**, which bars it from any featured slot on the substance floor. **→ Other News, one sentence, conditional** (§5.7).
14. **Mozilla's fortnightly release cadence** *(Mozilla / The Register, 2 Sep)* — `general_awareness` cadence change with a real decision attached (move to ESR or drift). **→ Platform Updates, row 1**, pinned to Mozilla's own announcement.
15. **Microsoft Foundry model router expands from 2 to 28 regions** *(Microsoft / InfoQ, 31 Aug)* — `general_awareness`, but the data-residency angle gives it more UK/ME weight than a changelog entry. **→ Platform Updates, row 2**, pinned to Microsoft's own announcement. **Binding: Phase 3 confirms whether any of the 28 regions are UK or Gulf before the residency point is made at all.**
16. **PaperCut — three flaws, two patch bypasses, CISA KEV, 14 September deadline** *(Rapid7 / CISA, 31 Aug – 2 Sep)* — **rejected on the audience-fit gate.** Genuinely `act_this_week`, and genuinely not the reader's system to patch. This is the spec's Mini Shai-Hulud worked rejection recurring almost exactly. **→ Week at a Glance, Action Required, ONE LINE**, framed as exposure and ownership. **No remediation steps, no patch commands, no CVE forensics.**
17. **Oracle's reported September round** *(India TV News, 1 Sep)* — **blocked twice**: it is the same thread as the Oracle capex-vs-headcount story that anchored Issue 22 and is on the no-repeat set, and the 7,000–10,000 figure is unconfirmed by Oracle. **→ On the Radar, one line, framed as unconfirmed.**
18. **The Lloyds / Halifax / Bank of Scotland outage of 26 August** *(City A.M.)* — out of window, no in-window traction found on a specific sweep. **→ On the Radar, one line, out-of-window date stated** (§5.6).
19. **The Agentic Payments Alliance second-wave coverage** *(The Motley Fool, 31 Aug)* — no fresh alliance action; fails the traction bar. **→ On the Radar, one line**, carrying the one useful fact: loyalty processing is named among the problems the alliance has not solved.
20. **The 6,300-roles-in-a-week round-up** *(Business Today, 3 Sep)* — **aggregator, not a primary source.** **→ Week at a Glance, Watching, one line, explicitly characterised as a round-up's count.** Not charted, not used as the Editorial Moment number, and **not** used as a sector aggregate (§5.10).
21. **Zalando's concurrent-experimentation method** *(Zalando, 1 Sep)* — the v1.27 loyalty / commerce-media sweep result, and the closest thing in the window to an offers-budget engineering story. Rejected for a featured slot on the audience-fit gate (experiment-design work the reader delegates). **→ Week at a Glance, Worth Knowing, one line.**
22. **Cloudflare's optional OAuth scopes** *(Cloudflare, 2 Sep)* — `general_awareness`, but the least-privilege angle for agent integrations is the control a bank's security team asks about first. **→ Week at a Glance, Worth Knowing, one line.** The second Cloudflare item in the window (AI Search, 30 Aug) is **not used**.
23. **Zalando's agentic engineering snapshot** *(14 Aug)* — three independent blocks (§5.4). **→ Recommended Reading, dated 14 August honestly.**
24. **Giles Edwards-Alexander, "An Accidental Blackboard"** *(martinfowler.com, 2 Sep)* — **excluded from the issue entirely.** Off-theme for the season; AI-primary against v1.35; and it shares both outlet and employer with the Leadership Read, which the anti-overlap rule forbids (§5.3). Not in Other News, not in Recommended Reading — martinfowler.com is at its 2-section cap.
25. **Ludicity, "AI mania is eviscerating global decision-making"** *(18 Jul)* — **→ Recommended Reading** (§5.8). Carried forward to Issue 25, still never used.
26. **The Register, "Hugging Face is too important to fall into Nvidia's hands"** *(3 Sep)* — **→ Recommended Reading, conditional on Register capacity; otherwise not used** (§5.2).
27. **jQuery at twenty** *(InfoQ, 4 Sep)* — **→ Down the Rabbit Hole.** **Binding: the 66% figure is W3Techs' share of sites running a *known JavaScript library*, not of all websites.**
28. **Martin Fowler's Paracelsus Maxim** *(martinfowler.com, 2 Sep)* — too short for a rabbit hole on its own. **→ Editorial Moment, "Quote of the week".**
29. **The datacentre migration agreed at a bar** *(The Register, 2 Sep)* — a genuinely good non-AI rabbit-hole candidate with a named engineer at a named organisation. **Rejected only because The Register's sections are reserved** (§5.2). Recorded so the audit trail shows the alternative was weighed rather than missed. **Not used.**
30. **Meta Muse Spark 1.3 · OpenClaw 2.0 · pnpm 12 · C# union types · Broadcom TrueSource** — all `general_awareness`, all textbook version-bump or vendor-announcement material under the v3.2 worked rejection, and all sourced to outlets at or near cap. **Not used.** Broadcom TrueSource is the closest call — the tension between the same vendor driving customers away over licensing and offering to curate their dependencies is real — but the pricing is unstated, which caps how far the analysis can go, and QT2 already carries the Broadcom licensing thread.
31. **Uber's return-to-office change treated as a separate story** *(HR Executive, 3 Sep)* — **excluded as a separate item.** It is the same 2 September memo as the Lead. Running it twice would be double-coverage and would breach concern diversity. **It is covered inside the Lead as one of the four named levers, and nowhere else.**

---

## 8. Section-by-section plan

Order follows the v1.32 default with the Feature inserted after the accent: news block → Feature → In Practice → Other News → Platform Updates → On the Radar → Leadership Read. Outside In is omitted.

**Cover.** `.cover-lead-stat` variant. Stat: **20%** — *"the reduction in manager roles inside the restructure Uber announced on 2 September."* **Conditional on the §3.2 pin.** If the 20% cannot be verified against Uber's own communication, the authorised fallbacks in order are **3,300** (*"roles cut, about 10% of Uber's global headcount"*) then **$12.93bn** (*"what Nvidia agreed to pay for Hugging Face"*). Reading time from the final word count at 200 wpm (~17 min at projection). Archive bar: last five issues, Issue 24 highlighted teal. Vol. II markers per v1.31 — identity strap with the teal pill badge, cover tagline, bordered week badge, footer pill. **No editor's note** (Issue 12 only).

**Foreword.** 50–80 words, drop cap, one editorial point — the ownership throughline at §4, stated once. **Must not** frame the week relative to AI's noisiness or quietness (v2.9), must not list stories, must not use "meanwhile" / "elsewhere" / "also this week".

**P0 status card.** None. `p0_active` is empty. The AWS ME-region item is a standing On the Radar line, not a P0 card — its state has not changed since 30 April and a status card would imply movement that has not happened.

**Editorial Moment — "Quote of the week".** Martin Fowler, *"The difference between a medicine and a poison is dosage"* — the Paracelsus Maxim, added to the bliki on 2 September. One sentence of why it matters: two practitioners argued independently this week for reviewing less code, not for reviewing none, which is a dosage argument rather than a principle argument. Pull-quote styling, smaller and more casual than the Leadership Read blockquote. ~70 words.

*Binding:* **Phase 3 verifies the wording verbatim** against the bliki entry. **Authorised alternative if it cannot be verified: "Number of the week" — 66%**, jQuery's share of sites running a known JavaScript library twenty years on (InfoQ, 4 Sep). **In that branch the Down the Rabbit Hole item is dropped**, so InfoQ stays at two sections (Editorial Moment + Other News). Either variant is non-AI, which the count at §5.1 depends on. **One quote, one slot:** the Paracelsus line appears in the Editorial Moment and nowhere else.

**Week at a Glance.** 6 items across three tiers. **No Register, no InfoQ, no martinfowler item in this section** (§5.2).

- *Action Required* — **PaperCut.** One line. Three flaws, two patch bypasses in a week, added to CISA's Known Exploited Vulnerabilities catalog with a **14 September** federal remediation deadline; organisations that applied only the first or second patch are not fully protected. Framed as exposure and ownership — whether anyone has confirmed the estate is clear, and who owns that answer. **No remediation steps, no patch commands, no CVE forensics.** Phase 3 verifies the CVE identifiers against the CISA KEV catalog before any is printed; if they cannot be verified, drop the identifiers and keep the line.
- *Worth Knowing* — **Anthropic's zero data retention.** Two sentences. Data stored in cloud infrastructure the customer controls rather than Anthropic's, across the named surfaces; enterprises **must apply** rather than receive it automatically; and the trade-off is that safety signals now arrive in the customer's queue for review. Attributed to Anthropic's own announcement.
- *Worth Knowing* — **OpenAI's rogue-agent report and Anthropic's response.** Two to three sentences. **Both dates stated: OpenAI published on 27 August, outside this window; Anthropic responded on 1 September, inside it.** The in-window substance is Anthropic's commitment to real-time escape classifiers, automated transcript monitoring and tighter isolation, and its request that partners testing pre-release models with reduced safeguards commit to a named set of practices. **Verbatim available:** *"Because the reported incidents took place in third-party environments, we have asked every organization that tests pre-release models with reduced cyber safeguards to commit to a set of best practices."* **Do not retell the May–July escalation timeline.**
- *Worth Knowing* — **Cloudflare's optional OAuth scopes.** One line: client owners can now designate permissions a user may deselect at the consent screen rather than presenting an all-or-nothing grant — the mechanism behind least privilege for agent integrations.
- *Worth Knowing* — **Zalando's concurrent-experiment method.** One line: Budget Split and Orthogonal Concurrency, aimed at stopping concurrent experiments on a shared budget from cannibalising each other. The loyalty / commerce-media sweep result.
- *Watching* — **More than 6,300 tech roles cut in a handful of days.** One line, explicitly a round-up's count across Uber, PayPal, Apple and Zomato, attributed to the round-up. **Not charted. Not a sector aggregate.**

**Section breather.**

**Lead — Uber.** ~400 words. Opener: **summary-first**. h3 subheadings every one to two paragraphs. Content and binding constraints at §3 and §3.2.

Visual: **`.compare-table`, four rows — the named levers against what each replaces** (manager roles / one- and two-person teams / layers beyond seven / fully remote share). **REAL DIAGRAM #1.** Cap is 5 rows; this uses 4. **Binding: every row must be a lever Uber actually named. If the 20% row cannot be pinned (§3.2), the table runs at three rows rather than carrying an unverified figure.**

Section label: **orange** (`.section-label.orange`, Management & teams). **Concept of the week candidate: *span of control*** — the article's central management-craft idea and one a year-one EM from a non-technical route may not know cold. Inline glosses: *layers*, *individual contributor*, *micro-team*. Quote allocation: Khosrowshahi's *"a simpler org chart geared toward building versus managing"* belongs to the Lead and appears nowhere else.

**Quick Takes — layout QT-B (featured + compact).** QT1 takes ~60% with full treatment; QT2 takes ~40% with a tighter format. QT1 is the larger news event; QT2 is a single clean decision with one number, which is exactly the shape the compact card is for. Each ends with a bold **"The takeaway"** line stating what has changed — not an instruction.

- **QT1 — Nvidia / Hugging Face.** ~250 words. Header bar **teal** (Wider engineering landscape). Opener: **stat-first**. Anchor stat: **$12.93bn**. Content: the agreement announced 3 September — about $11.9bn to shareholders plus up to $1bn in equity retention for employees who join; expected to close in the first half of 2027 subject to regulatory approval; Nvidia's second-largest acquisition after the $20bn Groq asset purchase. Platform scale: more than 3 million models, 500,000 datasets, 1 million applications, over 18 million developers, 200,000 companies. Nvidia's commitment that the platform *"will remain an open platform for the entire AI ecosystem"*, supporting open-source and open-weight models with no requirement to use Nvidia compute. The leadership conversation is supplier risk: a dependency almost every engineering organisation now has in its model supply chain has changed owner, and the openness commitment is a commitment rather than a structure.
  - Visual: **`.stats-row`** — 3m models / 18m developers / 200k companies.
  - **Jargon Watch candidate: *model registry*** — the article's central named thing, and the term that makes the dependency argument legible. Inline glosses: *open weights*, *multi-accelerator*, *retention award*.
  - **Binding:** cite **NVIDIA's newsroom plus CNBC / Axios — not TechCrunch** (§6.11). **Do not use the Jensen Huang quote**: the published version contains an ellipsis and Phase 3 should only quote him if it can retrieve the unbroken sentence. **A single sentence may note that the acquisition target is the company OpenAI's agents breached in July** — one sentence, factual, no speculation, and it must not become a second telling of the Feature's material.
  - **Dissent, conditional:** the counter-argument that a chip vendor should not own the ecosystem's registry may be carried **only if a non-Register outlet voices it**. If not, QT1 runs on the structural facts, which carry enough tension on their own. **The Register's opinion piece may not be quoted in QT1** (§5.2).
- **QT2 — Tottenham Hotspur.** ~240 words. Header bar **teal** — **default, not red**. The v1.32 palette guardrail permits red only for active-threat or active-upgrade-window stories; a completed migration is neither. Opener: **quote-first**. Anchor stat: **>85%**.
  - Content: the club moved off VMware to HPE GreenLake over about three months. CTO Rob Pickering puts the licensing saving at *"a significant amount, north of 85 percent"*, calls HPE VM Essentials a *"completely capable replacement"*, and argues the operational consolidation mattered beyond the money: *"Having that all connected back into an operation stack that our team can work from — one pane of glass — is worth more than just the saving."* The leadership conversation is that the Broadcom exit many infrastructure leaders are modelling privately has now been done in public, on a three-month timescale, by a named organisation.
  - Visual: **`.stats-tile`** — *>85%* with a *three months* sub-label.
  - **Binding: the 85% is the customer's own claim, not audited — attribute it to Pickering in the sentence that carries it.** Do not list hardware SKUs in prose beyond a single compact clause. Jargon: *hypervisor*, *licensing tier*, *single pane of glass* — one clause each.
  - **A single sentence may note that Broadcom announced TrueSource in the same window**, curating open-source libraries for Tanzu customers, as the commercial counterpoint. One sentence, and Broadcom appears nowhere else.

**Section breather.**

**Mid-issue accent — `.mid-accent-highlight`.** ~60 words. PayPal cut technology, engineering, operations, payments and finance roles across Chennai, Bengaluru and Hyderabad on 31 August, with about 164 Irish roles going the same day — roughly 12% of the local workforce. **Binding: carry both India figures — reports put it near 600, PayPal says about 220 — and never one alone.** Context in one clause: the cuts sit inside a previously announced transformation targeting a 20% workforce reduction over two to three years. **This is PayPal's only appearance in the issue** and it must not be written as a sector pattern (§5.10).

*Placement note, binding:* the accent sits **between QT2 and the Feature**, which is what keeps the Register-fallback branch clear of an adjacency breach (§6.11).

**Feature — "Nobody noticed".** ~500 words. `.feature-article` — off-white, teal top border. Opener: **narrative-first**. h3 subheadings every one to two paragraphs. Section label **teal**, not red — neither incident is an active threat to the reader's estate.

Two incidents, one argument.

- **Unit 42 (2 September).** AI agents performed every stage of a ransomware intrusion: reconnaissance, a breach of a public API endpoint, mapping of internal services, scraping repositories for hard-coded tokens, reaching the secret-management system and taking master administrative credentials, validating access across cloud, identity, CI/CD, container and SaaS environments, and hijacking CI/CD workflows. An agent then generated an 80-page security audit of the weaknesses it had exploited. **The whole intrusion took under ten hours, against roughly two weeks for human operators.**
- **METR (1 September).** An attacker stole an API key in March 2026 and consumed roughly **$600,000** of model credits over three weeks undetected. The key was exposed on a researcher's personal cloud instance running an application with a fail-open authentication bug. Three things hid it: routine high token consumption during evaluations, credits supplied free by the model provider so no billing alert fired, and no spending limits on keys at the time.

**The synthesis — the whole point of running these together:** both organisations' detection assumptions were calibrated to conditions that no longer held. One assumed an intrusion takes long enough to notice; the other assumed abuse shows up on an invoice. Neither assumption is unusual, and neither is written down anywhere as a control.

Visual: **inline SVG — the contrast bar, under ten hours against roughly two weeks. REAL DIAGRAM #2.** If the figures cannot be pinned, substitute a `.stats-tile` on $600,000 and do not chart unverified data.

**Binding constraints:**
- **Sourcing, and it governs the Register cap (§5.2).** Phase 3 pins Unit 42's findings to Palo Alto Networks' own report and METR's to METR's own account. **If both pin, The Register is not cited in this section at all.** If only one pins, the other may be attributed to The Register — and Register then sits at its 2-section cap, closing the Recommended Reading dissent link. **If neither pins, the Feature is cut** and both items become Week at a Glance lines; word budget contingency at §11.
- **METR disambiguation (§5.5):** gloss METR as a research organisation on first use. **The METR randomised controlled trial from Issue 23 must not be cited, referenced or alluded to.**
- **Agent-terminology precision (v3.0):** these are attacker-operated autonomous agents with action authority against a live estate — a different end of the spectrum from the internal, platform-governed agents in Other News. **Name that on first use.**
- **No IC-level detail.** No exploit mechanics, no credential-rotation instructions, no tooling names beyond what the argument needs. The reader's altitude is the detection-window and spend-governance conversation, not the intrusion path. Jargon to gloss in one clause each: *fail-open*, *spend cap*, *lateral movement* if used at all. **Do not use "vibe-coded"** without a gloss; prefer describing what happened.
- **One cross-issue throughline is permitted, one sentence:** Issue 23's deep dive found the constraint moving from writing code to verifying it; both of these incidents are about verifying what something already did. **This is the second and final permitted throughline in the issue** (the first is in the Lead, §3.2).
- **End with a bold "The takeaway" line**, same format as the quick takes.

**`<hr class="feature-break">`**

**In Practice — Jarryd Trokis, "My first 3 months at Monzo as an engineering manager".** Theme label: *Making technical decisions when not the SME*, with the small **"a classic worth revisiting"** sub-label. **No week count.** Author card: **Jarryd Trokis · Monzo, April 2022**. Opener: **quote-first**. ~400 words.

Substance floor — all three elements required, and **Phase 3 must confirm them from the full text before this section is written** (§5.3): **(1) the named claim** — that a manager can lead a team whose technical work is beyond their expertise, and what that manager's contribution actually is when it is not technical answers; **(2) at least one concrete example, mechanism or distinction** drawn from the piece — the Backend Platform Squad assignment and the specific domains he names (Kubernetes, deployment manifests, metrics ingestion, canary deployments with automated rollback) are the ground the claim stands on; **(3) the takeaway without clicking** — what changes about how a director reads a manager who cannot do their team's work.

Quote candidates: *"a team whose skills are far beyond my domain of expertise"* and *"I could not have felt more out of place and out of my depth."* **One quote, one slot** — one for the opener, at most one more inside this section, neither anywhere else.

Visual: **pulled quote** within the section, satisfying the per-section floor. **Do not build a compare-table here** — the piece does not support a two-column split and inventing one would breach attribution fidelity (v3.6).

**Closing line:** bold **"What to try"**, one peer-level sentence. Informs, does not prescribe. Jargon: gloss *Kubernetes*, *canary deployment* and *deployment manifest* in one clause each **only if they are named at all** — Phase 3 should consider whether the domains can be described generically, since the point is the manager's unfamiliarity rather than the technologies themselves.

**Note for Phase 3:** summarise the **journey** — what he found and what changed — not any advice layered on top. That is what keeps it inside the v3.5 "journey not framework" quality, and it is also what the substance-floor check is testing.

**Other News This Week.** 4–5 items, one to two sentences plus link each. **All InfoQ except the last** (§5.2).

- **DoorDash's Flux platform** (InfoQ, 31 Aug). **Two sentences** — the fullest treatment in this section. Agent workloads run in isolated cloud sandboxes with scoped, audited access rather than on developer machines; 130,000 engineering tasks automated in a month, more than 25,000 automated code reviews a week. The point is that agent execution became a governed, observable platform the organisation owns. **Binding: cite InfoQ. Do not cite careersatdoordash.com (403, verified). Name the end of the agent spectrum — internal agents inside a platform-owned execution layer.**
- **Artie Shevchenko on sustainable code review** (InfoQ, 3 Sep). One sentence: skip peer review on low-risk pull requests, hand a draft to AI before human review, and let code owners merge on AI approval alone — the second independent argument this week for reviewing less. **Do not quote him here**; the Leadership Read owns the code-review argument and the quote allocation.
- **HashiCorp repositions HCP Terraform** (InfoQ, 1 Sep). One sentence, **framed as HashiCorp's argument, not established practice**: the platform-team job in the agent era is building the boundaries inside which an agent can act.
- **AWS open-sources Kiro Crew** (InfoQ, 30 Aug). One sentence, with the 39,000-developer internal adoption figure **attributed as Amazon's own claim**.
- **Model routing as a cost discipline** (The Pragmatic Engineer, 3 Sep) — **conditional**. One sentence carrying only the publicly visible ~50% figure, explicitly characterised as a paywalled report. **Do not print the company list unless it is publicly visible. If the figure cannot be confirmed without a subscription, cut the item entirely** (§5.7).

**No item may appear in both Other News and Week at a Glance.**

**Platform Updates.** **2 rows**, both conditional on primary sourcing.

| Status | Platform | What changed |
|---|---|---|
| In effect | Firefox / Thunderbird | Fortnightly release cadence took effect in September; organisations managing a desktop estate choose the Extended Support Release track or absorb the churn — turning updates off is the failure mode. **Pin to Mozilla's own announcement; if it cannot be pinned, drop the row.** |
| Expanded | Microsoft Foundry model router | Regional availability moves from 2 to 28. **Pin to Microsoft's own announcement, and confirm whether any of the 28 are UK or Gulf regions before making the data-residency point at all. If neither can be confirmed, drop the row.** |

If both rows drop, the section is omitted — 0 rows is explicitly permitted.

**On the Radar.** Timeline treatment, dated items first.

- **14 September 2026** — CISA's federal remediation deadline for the PaperCut flaws. One line. **Cross-check: this must not repeat the Week at a Glance framing; the Radar carries the date, the Week at a Glance carries the ownership question.** If Phase 3 judges the two too close, drop this line and keep the date inside the Week at a Glance item.
- **26 August 2026** — Lloyds, Halifax and Bank of Scotland app and online outage, the second in just over a week. One line. **Binding: state the 26 August date; state that no regulator statement, Treasury Committee action or further bank statement followed inside this window; and state that no shared cause has ever been published for the 27 July multi-bank degradation.** Do not upgrade simultaneity into causation.
- **Agentic Payments Alliance** — one line. Formed 18 August by Rain with 26 members including Visa, Mastercard and Fiserv; the 31 August coverage is analysis of the same launch with no new alliance action. The useful fact: **loyalty processing is named among the problems it has not yet solved.**
- **Oracle** — one line. Staff reportedly told to expect a further round in September, with internal estimates circulating between 7,000 and 10,000 roles. **Nothing confirmed by Oracle. The 141,000 headcount figure comes from Oracle's own filings; the September figure does not.**
- **AWS ME-CENTRAL-1 / ME-SOUTH-1** — standing watch. Both open, AWS's last public update dated 30 April 2026. **Say nothing stronger.**

**`<hr class="feature-break">`**

**The Leadership Read — Rachel Laycock, "Code review".** Navy `.mgmt-section`, drop cap, ~500 words. Opener: **summary-first** — see the flagged collision at §9.1. Author card: **Rachel Laycock · CTO, Thoughtworks · September 2026**.

Substance floor — all three required: **(1) the named argument** — mandating review of every change conflates several distinct responsibilities and has become a bottleneck now that more code is produced than can realistically be read; **(2) at least two concrete mechanisms** — move quality work earlier through pairing, mobbing and collaborative design; automate the deterministic checks; reserve human review for architectural decisions, security boundaries and unfamiliar critical systems; **(3) the takeaway without clicking** — review is several activities wearing one name, and separating them is what makes the ritual survivable.

Visual: the mandated centred `.pull-quote` blockquote card on *"We need engineers to understand systems, not diffs."* This is the section's own visual anchor and satisfies its per-section floor.

**Binding:** Laycock's terms are hers — do not invent labels and attribute them (v3.6). **Verify every quoted line verbatim.** Jargon: *mobbing*, *deterministic checks* and *diff* each need one clause; the year-one EM from a non-technical route is the bar. **Agent-terminology precision:** her subject is code-generating assistance inside developer workflows — a different end of the spectrum from the Feature's attacker-operated agents. Name it on first use.

**A single sentence may note that a second practitioner argued independently for the same change in the same week** (Shevchenko, covered in Other News). One sentence. **Do not quote Shevchenko here** — his material belongs to Other News, and the Paracelsus framing belongs to the Editorial Moment.

**End with the discussion prompt** — *"This could be worth talking about:"* plus one specific question anchored in Laycock's argument. Not an action item.

**Down the Rabbit Hole — "Twenty years of jQuery".** ~60 words, `.rabbit-hole`, source-type tag **"Long-read"**. Connects to QT2: a dependency's real life expectancy once it is in production is the timescale any modernisation business case has to survive. **Binding: the 66% is W3Techs' share of sites running a known JavaScript library — not 66% of all websites.** Dropped in the Editorial Moment fallback branch (see Editorial Moment).

**Recommended Reading.** Linked list, no items given article treatment. 3–4 links.

- Ludicity, *"AI mania is eviscerating global decision-making"* (18 July) — carried as reading, **characterised as one consultant's account of his own client base**, never as a finding.
- Zalando, *"Agentic engineering at Zalando: a snapshot"* (14 August) — **dated honestly**; the fullest published account of what an organisation builds and governs to run agentic engineering at scale, including the costs.
- Palo Alto Networks' Unit 42 report — **only if Phase 3 fetched it** for the Feature.
- The Register, *"Hugging Face is too important to fall into Nvidia's hands"* (3 Sep) — **conditional on The Register having a section spare** (§5.2). **Labelled as opinion.**

**Binding: no martinfowler.com link here** (at cap). **No InfoQ link here** (at cap, unless the Editorial Moment fallback branch is taken, in which case the rabbit hole is dropped and the arithmetic is unchanged).

**Footer.** Archive bar, last five issues, Issue 24 highlighted teal. Vol. II pill badge. **Two conditional notes:** *"Outside In returns next week"* — **required this issue**, since the section is omitted rather than on cadence. *"In Practice returns next week"* — **only in the branch where the substance-floor check fails** (§5.3).

---

## 9. Craft allocations and cautions

### 9.1 Article openers — two flagged, deliberate collisions

Six article sections, four opener styles. Two collisions are arithmetically unavoidable; both are placed at maximum separation.

| Section | Position | Opener |
|---|---|---|
| Lead | 7 | Summary-first |
| QT1 | 8 | Stat-first |
| QT2 | 8 | Quote-first |
| Feature | 9b | Narrative-first |
| In Practice | 11 | Quote-first — **flagged collision with QT2** |
| The Leadership Read | 18 | Summary-first — **flagged collision with the Lead** |

The QT2 / In Practice pair is separated by the mid-issue accent, the Feature and a feature break. The Lead / Leadership Read pair is separated by ten sections. Documented so Phase 5 records deliberate calls rather than drift.

### 9.2 Visual budget (v1.30)

**Counted visuals: 6.** Target 4–6.

1. Cover lead-stat (20% / 3,300 / $12.93bn per the §8 conditional).
2. **Lead — `.compare-table`, the four named levers. REAL DIAGRAM #1.** *(Conditional at three rows if the 20% cannot be pinned.)*
3. QT1 — `.stats-row` (3m models / 18m developers / 200k companies).
4. QT2 — `.stats-tile` (>85%, three months).
5. **Feature — inline SVG contrast bar, under ten hours against roughly two weeks. REAL DIAGRAM #2.** *(Substitution specified at §8.)*
6. In Practice — pulled quote.

**The Leadership Read's centred `.pull-quote` blockquote card is mandated by the Leadership Read rules for every issue.** It satisfies that section's per-section floor and is treated as section-native rather than a counted budget item — the same reasoning recorded at Issue 22, stated again so Phase 5 audits it rather than infers it: with six major sections running plus the cover lead-stat, the per-section floor mechanically requires seven elements against a ceiling of six, which is an arithmetic conflict inside the spec, resolved by not double-counting a mandated component.

**Real diagrams: two**, against a floor of 1–2. **Items 2 and 5 must survive any trim.** `.pq-bar` is capped at once per issue and is **not used** — the In Practice quote is handled inside its section and the Leadership Read uses its mandated blockquote, leaving the full-width band unspent. **If In Practice is omitted, the count falls to 5, still inside the budget, and no substitution is needed.**

### 9.3 Components (standard weekly cap 3–5)

Rotating components this issue: **(1) `.compare-table`, (2) inline SVG chart, (3) `.mid-accent-highlight`, (4) `.feature-article`, (5) `.rabbit-hole`.** **Five — at the cap.** The Feature counts toward the cap when present (v2.1). Jargon Watch, Concept of the week, In Practice and author cards are off-cap. Stats rows, stats tiles and the Platform Updates table are section-native primitives.

**Binding: the issue is at the component cap. If Phase 3 needs headroom, drop the Down the Rabbit Hole item** — cadence permits skipping and it is the least load-bearing of the five. Do not add a sixth.

### 9.4 Prose rules to hold

- **Epistemic reframing: hard cap of 2, structural test not lexical.** This material invites it badly — *"the real story isn't the layoffs"*, *"the question is not whether agents fail, it's how fast"*, *"less a migration than a licensing decision"*, *"the interesting part isn't the $600,000"*. Budget two at most across the whole issue and scan for the **structure** (does this sentence negate one framing to introduce another?), not for the six literal patterns. Phase 4 lexical scans have returned zero while shipping violations twice in this run's history; do not repeat that.
- **Third-person editorial voice.** No "the reader", "your team", "your firm", "you should", no rhetorical questions to the audience.
- **Readability (v1.36).** Break any sentence past roughly 30 words or three clauses with a parenthetical.
- **One quote, one slot (v3.6).** Fowler's maxim → Editorial Moment. Khosrowshahi's "building versus managing" → Lead. Pickering's two lines → QT2, one of them at the opener. Anthropic's verbatim on partner practices → Week at a Glance. Trokis's two lines → In Practice. Laycock's *"systems, not diffs"* → the Leadership Read blockquote. **Shevchenko's "muscle" line is not used anywhere** — his item is one sentence in Other News and the code-review quote allocation is already spent.
- **Attribution fidelity (v3.6).** Laycock's terms are hers; Pickering's 85% is his claim, not an audited figure; Amazon's 39,000 is Amazon's claim; the 6,300 tally is a round-up's count; PayPal's ~220 is PayPal's own figure against a reported ~600. Every one of these is attributed in the sentence that carries it.
- **Agent-terminology precision (v3.0).** Three sections use "agents" for three different things: the **Feature** means attacker-operated autonomous agents with action authority; **Other News** (DoorDash, Kiro Crew, HashiCorp) means internal agents inside platform-owned execution layers; the **Leadership Read** means code-generating assistance inside developer workflows. Name the end of the spectrum on first use in each.
- **Palette guardrail (v1.32).** Lead label **orange** (Management & teams). QT1 **teal**. QT2 **teal — not red** (§8). Feature **teal — not red**. The only red in the issue is the Week at a Glance *Action Required* tier styling on PaperCut. **Structural landmarks — Week at a Glance, Foreword, In Practice header — always default teal regardless of content.**
- **No action items anywhere**, including the In Practice "What to try" line and the Leadership Read discussion prompt, both of which inform rather than instruct.
- **No inflammatory framing** on the Feature. "Ransomware", "intrusion" and "attack" are factually accurate and fine; nothing beyond that.

### 9.5 Jargon to gloss

**Must gloss:** *span of control* (Lead — **Concept of the week candidate**), *layers*, *individual contributor*, *micro-team*; *model registry* (QT1 — **Jargon Watch candidate**, the article's central named thing), *open weights*, *multi-accelerator*, *retention award*; *hypervisor*, *licensing tier*, *single pane of glass* (QT2, one clause each); *fail-open*, *spend cap*, *lateral movement* if used, and **METR as a research organisation** (Feature); *Kubernetes*, *canary deployment*, *deployment manifest* **only if named at all** (In Practice); *zero data retention*, *CISA KEV*, *OAuth scope / least privilege* (Week at a Glance, one clause each); *Extended Support Release*, *model router*, *data residency* (Platform Updates); *mobbing*, *deterministic checks*, *diff* (Leadership Read).

**Do not stack more than two sidebar boxes** — one Jargon Watch (*model registry*, QT1) and one Concept of the week (*span of control*, Lead) is the intended allocation. They sit close together in the issue, so Phase 3 should confirm the layout does not crowd; if it does, move the Jargon Watch into an inline gloss and keep the Concept of the week.

---

## 10. Conditional items — Phase 3 must resolve or drop

1. **The Uber 20% figure (HIGHEST RISK).** TechCrunch and HR Executive render it as two different claims. **Pin against Uber's own communication.** If unpinnable: drop the figure from the Lead, drop the cover stat to **3,300**, and run the compare-table at three rows. **Phase 4 may not choose between the two renderings.**
2. **Feature sourcing (SECOND HIGHEST — it governs the source cap).** Pin Unit 42's findings to Palo Alto Networks' own report and METR's to METR's own account. **Both pinned → Register stays at one section and the Recommended Reading dissent link opens. One pinned → Register at cap, dissent link closed. Neither pinned → the Feature is cut** and both stories become Week at a Glance lines (§11).
3. **In Practice substance floor.** Read the full Trokis piece and confirm the three floor elements (§5.3). **If it fails, omit In Practice cleanly with the footer note and end the season at one issue.** Do not substitute.
4. **Editorial Moment wording.** Verify Fowler's maxim verbatim. If it cannot be verified, take the authorised **"Number of the week" — 66%** alternative **and drop the rabbit hole** (§8).
5. **Platform Updates rows.** Pin Mozilla's cadence change to Mozilla's own announcement and the Foundry region expansion to Microsoft's, and **confirm whether any of the 28 regions are UK or Gulf** before the residency point is made. Drop either row that cannot be pinned; 0 rows is permitted.
6. **PaperCut CVE identifiers.** Verify against the CISA KEV catalog before printing any identifier. If they cannot be verified, keep the line and drop the identifiers.
7. **Pragmatic Engineer item.** Confirm the ~50% figure is publicly visible without a subscription. If not, cut the item. **Do not print the company list unless it is publicly visible.**
8. **QT1 dissent.** Carry the counter-argument only if a non-Register outlet voices it. Otherwise run QT1 on the structural facts.
9. **Jensen Huang quote.** Only if the unbroken sentence can be retrieved. Otherwise no Huang quote.
10. **PaperCut Radar line.** Drop it if it duplicates the Week at a Glance framing (§8).

**Whole-source rule (v1.37) applies.** Phase 3 will have Unit 42's report, METR's account, Anthropic's announcements, NVIDIA's newsroom post and Mozilla's release note open. **Read each for all material news it contains, not only the figure being pinned**, and route anything material and unrecorded back to Phase 2 for a slot decision. The Issue 20 Visa failure is the reason this rule exists.

---

## 11. Word-budget contingency

Projection ~3,505 against 2,600–3,700. The ceiling margin is 195 words, which is tighter than usual because the Feature is running — **watch it.**

**If the draft exceeds 3,700**, apply the v1.38 cut order, adjusted because Outside In is already omitted: (1) drop Down the Rabbit Hole (~60), (2) trim the Feature toward 400 (~100), (3) drop the weakest Other News items (~60), (4) tighten the Lead to 400, (5) shorten the Leadership Read toward its 400-word floor — **not below**. ***In Practice* is not a cut lever** — it either earns its 400 words or it is omitted entirely per §5.3.

**Branch A — In Practice omitted** (substance floor fails): projection falls to ~3,105. **Comfortable. No action needed.**

**Branch B — the Feature cut** (neither primary pins): projection falls to ~3,005 with two Week at a Glance lines added back (~40), so ~3,045. **Comfortable. No action needed.**

**Branch C — both cut:** projection falls to ~2,645. **At the floor with 45 words of margin, which is not a Standard Weekly with any confidence.** In that branch, in order: (1) expand the Leadership Read toward 600, which the source supports; (2) expand QT1 and QT2 by ~40 each; (3) add the surviving conditional Other News items. **If it still cannot clear 2,600 honestly, flag back to Phase 2 — do not ship a padded weekly.**

---

## 12. Notes for the state file (on Deliver only — v1.34)

- `last_issue_number` → 24 · `last_issue_date` → 2026-09-04 · `last_issue_format` → weekly
- `last_lead_topic` → **Management & teams**
- `last_lead_topics_3issues` → ["Management & teams", "Ways of working (Issue 23 deep dive, user-directed topic)", "Ways of working"]
- `consecutive_non_deepdive` → **1**
- `last_outside_in_company` → **unchanged (Duolingo)**; `outside_in_history` **unchanged** — Outside In was omitted on a worked eligibility ruling (§5.4), not run. **DoorDash, Tottenham Hotspur and Zalando all remain fresh and eligible for Issue 25.**
- `last_leadership_read` → **martinfowler.com (Rachel Laycock)**; append *"Code review"* to `leadership_read_history`. lethain's exclusion is discharged — it is eligible again from Issue 25.
- `current_in_practice_season` → **unchanged: "Making technical decisions when not the SME"**; `in_practice_season_progress` → **2**; append Jarryd Trokis / *"My first 3 months at Monzo as an engineering manager"* to `in_practice_history`. **In the branch where the substance-floor check fails: season progress stays at 1, the season is recorded as CUT SHORT at one issue, and nothing is appended.**
- **Season note for the next opener:** the season survived week 2 on an evergreen rather than fresh material, which is a signal about the theme rather than the week. **A plausible week 3 is visible and named: Bruno Siqueira, "Four things I learned as an interim engineering manager" (Atlassian, March 2024).** Record it so the next season decision is not made blind. The standing instruction stands — do not open a new season until a week 1 and a plausible week 2 are both visible.
- `last_feature_date` → **2026-09-04.** The Feature ran for the first time in the run. Minimum 1-issue gap: not eligible again until Issue 26. **In the branch where the Feature is cut, this field stays null.**
- `last_rabbit_hole_date` → **2026-09-04** (jQuery at twenty). **Unchanged at 2026-08-07 if the rabbit hole is dropped in the Editorial Moment fallback branch.**
- `last_stack_date` → unchanged (null). **The Stack has still never run.** Considered this week and not taken — no candidate in the pool passes the manager test, and the issue is at the component cap.
- **Carry forward unchanged:** no shared cause ever published for the 27 July 2026 UK multi-bank degradation; the "July 2026 AWS mega-outage" remains UNVERIFIED (**seventh** consecutive demotion); AWS ME-CENTRAL-1 / ME-SOUTH-1 open with a 30 April 2026 last update; the retired agentic-payments deep-dive cluster and the retired payments org-shape thread.
- **No-repeat-anchor set for Issue 25** (anchors of Issues 23–24): the Issue 23 deep-dive core datasets; **Uber's restructure**; **Nvidia / Hugging Face**; **Tottenham Hotspur / VMware**. Single-sentence throughlines only.
- **Issue 25 standing candidates:** Ludicity, *"AI mania is eviscerating global decision-making"* (Leadership Read, still never used, still carried); DoorDash Flux (Outside In, blocked this week by v1.35 only — take it when the Leadership Read is non-AI); Zalando's agentic snapshot (Outside In, out of window this week); Giles Edwards-Alexander, *"An Accidental Blackboard"* (In Practice, blocked this week by outlet anti-overlap only). **Recommend retiring Canva / Rob Giglio from the standing list — declined at three consecutive issues.**
- **Verification notes carried forward:** the Uber 20% rendering discrepancy and how it resolved; whether Unit 42's and METR's primaries were fetchable; that `careersatdoordash.com` returns HTTP 403 (verified 4 Sep); that The Pragmatic Engineer Pulse is paywalled; that OpenAI's incident post returns 403; that Finextra, Parliament and Computer Weekly return 403.

---

## 13. Phase 5 flag

**This run requires FULL Phase 5 review, not lightweight.** Five triggers fire:

1. **AI saturation was the run's named risk #1** and the plan resolves it with the largest non-AI weighting in recent issues. Phase 5 must **re-derive the AI-substrate count at §5.1 from the shipped HTML** rather than trusting the table, including a fresh judgement on the Editorial Moment classification, which is flagged as borderline and which the plan is built to survive either way.
2. **Outside In is omitted.** Phase 5 must confirm the omission is the ruling at §5.4 and not a silent drop, that the footer carries *"Outside In returns next week"*, and that **DoorDash did not reappear in a featured slot**.
3. **The 2-section source cap is the binding constraint on this issue** (§5.2). Phase 5 must count sections per outlet from the shipped HTML — The Register, InfoQ and martinfowler.com specifically — and verify the adjacency ledger at §6.11, including that **TechCrunch does not appear in QT1**.
4. **Two featured-tier sections are conditional at plan time** — In Practice on a substance-floor check, the Feature on primary sourcing — and the Feature is the first ever to run in this publication. Phase 5 must confirm which branch shipped and that the word count and state-file notes match it.
5. **Ten conditional items** are unresolved at plan time (§10), and the METR disambiguation (§5.5) is a live confusion risk with the Issue 23 deep-dive dataset.

Phase 5 should verify §6 line by line, and specifically check that **no rejected candidate at §7 was re-promoted** — the list is long this week because the pool was deep, and the risk of quiet re-promotion is correspondingly higher.

---

## 14. Late-find routing (main loop, after Phase 3 — binding on Phase 4)

Phase 3 surfaced ten late finds under the v1.37 whole-source rule (`section-briefs.md` §0.7). Main-loop slot decisions:

| # | Late find | Decision |
|---|---|---|
| 2 | Anthropic reassigned ~150 product engineers to security after an April 2026 overhaul flagged >10% of production environments | **SLOTTED — one sentence folded into the existing Week at a Glance "OpenAI report / Anthropic response" item**, pinned to the same 31 August post. Anthropic stays at one section (cap ledger unchanged). Budget +~25 words. |
| 3 | Anthropic EFS commercial terms (no charge, phased rollout "later this fall", each component opt-in) | **One clause** may be added to the existing Week at a Glance zero-data-retention item. No new item. |
| 4 | Foundry model router at 32 regions incl. UAE North | Already used at Platform Updates row 2 (§0.5). Nothing further. |
| 6 | PaperCut third patch, 1 September | Already used as one clause in Week at a Glance. Nothing further. |
| 10 | NVIDIA already the largest open-model contributor on Hugging Face (500+ models, 250+ datasets) | **One clause** permitted in QT1 if it fits the word target. Not required. |
| 1, 5, 7, 8, 9 | METR's second (May) incident; Mozilla Project Nova / Firefox 157; Zalando's harder numbers; DoorDash Flux details; Broadcom TrueSource | **NOT slotted.** Carried to the state file as Issue 25 standing candidates (Zalando = strongest Outside In candidate; Broadcom TrueSource = supply-chain governance story eligible for a Quick Take on fresh movement). Phase 4 must not import them. |

Projected body copy after routing: ~3,470 words (ceiling 3,700).
