# Issue 21 — Run Plan (Phase 2: Inventory & Rank)

**Date window:** 31 July – 7 August 2026
**Spec version:** v1.38
**Format:** **Standard Weekly**
**Projected body copy:** ~2,900 words (budget 2,600–3,700)

This document is the contract for Phases 3 and 4. Phase 4 may not silently re-promote, demote or substitute any candidate. Any change goes back to Phase 2.

---

## 1. Format decision

**Standard Weekly.** The format falls out of the inventory, not the other way round.

The pool supports it honestly: three anchor-quality in-window news events spanning three different operational concerns, a qualifying non-AI *In Practice* piece, an Outside In with real before/after numbers, five Week at a Glance items, three to four Other News items, one Platform Updates row and four On the Radar items. Nothing needs padding.

**The three "when in doubt, go Light" signs (v3.0) — zero of three fire:**

| Sign | Status |
|---|---|
| Lead is a routine version release with no controversy | No — a regulatory obligation switched on inside the window with a penalty ceiling and a hard December backstop |
| A quick take is a single-source funding number with no follow-on analysis | No — the one candidate that fits that description (Maximum's $30m seed) is in Other News, not a quick take |
| Outside In is filling the slot rather than illuminating | No — Klarna carries a named CEO admission, five hard metrics and a transferable design rule |

**Not a Deep Dive.** No single story dominates. `consecutive_non_deepdive` is 2; the trigger is 3, so nothing is being forced.

**Word budget projection (v1.38):**

| Section | Words |
|---|---|
| Foreword | 75 |
| Editorial Moment | 70 |
| Week at a Glance (5 items, AISI expanded) | 280 |
| Lead | 400 |
| QT1 | 250 |
| QT2 | 250 |
| Mid-issue accent | 55 |
| In Practice | 440 |
| Other News (3–4 items) | 200 |
| Platform Updates (1 row) | 35 |
| Outside In | 420 |
| On the Radar (4 items) | 150 |
| Down the Rabbit Hole | 55 |
| Recommended Reading | 70 |
| Takeaway lines + source attributions | 120 |
| **Total** | **~2,870** |

That clears the 2,600 floor with ~270 of headroom and sits well below the 3,700 ceiling. **Floor contingency is specified in §11 — Phase 4 must not improvise if the draft comes in short.**

---

## 2. The slate

| Slot | Story | Concern | Substrate | Event/essay | Urgency |
|---|---|---|---|---|---|
| **Lead** | EU AI Act Article 50 transparency obligations became enforceable 2 August | Wider engineering landscape | AI | News event | `act_this_week` |
| **QT1** | Microsoft puts AI token budgets and per-engineer usage dashboards on its engineering divisions | Ways of working | AI | News event | `decide_this_month` |
| **QT2** | Temenos un-merges the CPTO role; Google splits the DeepMind CEO job into a Chair and an operating SVP | Management & teams | **Non-AI** (org design) | News event | `decide_this_month` |
| **Editorial Moment** | "Number of the week" — UK entry-level software postings −27%, against −28% graphic designer and −29% accountant | — | **Non-AI** | — | — |
| **In Practice** | Ben Balter — twenty-five reorgs in thirteen years at GitHub | — | **Non-AI** | Essay | — |
| **Outside In** | Klarna rebuilds the human tier after cutting support on AI resolution rates | — | AI | Essay | — |
| **The Leadership Read** | **OMITTED** — see §5 | — | — | — | — |

**AI as substrate across the six featured sections: 3 of 6.** Cap is 4. Three featured sections have AI as *not* the substantive driver, against a spec minimum of two.

---

## 3. Why this lead

Article 50 of the EU AI Act became enforceable on 2 August, inside the window. Providers of AI systems that interact directly with people must disclose that the interaction is with an AI unless it is obvious. Providers of systems generating synthetic audio, image, video or text must mark the output in a machine-readable format and make it detectable as AI-generated. Deployers must inform people exposed to emotion recognition or biometric categorisation, and disclose artificially generated content on matters of public interest unless it went through substantive human editorial review. The ceiling is €15m or 3% of worldwide annual turnover. Content generated before 2 August needs no retroactive labelling, and generative systems already on the market have until **2 December 2026** to meet the marking and detection obligation.

It leads for four reasons.

1. **It is the only `act_this_week` candidate in the pool that clears the audience-fit gate.** The other one — CISA's N-able KEV addition — fails it (see §7). Under the v3.2 anchor-slot rule the Lead is reserved for `act_this_week` and high-impact `decide_this_month` stories; this is the single strongest instance of the former.
2. **The obligation lands on engineering, not legal.** Machine-readable marking of generated output is work in the generation pipeline and the model-serving layer. Most organisations currently have Article 50 filed as a legal matter. That mismatch is the story, and it is a leadership conversation the reader is about to have.
3. **There is a real clock with two speeds.** New systems had no grace period; systems already on the market have until 2 December. That asymmetry gives the reader something concrete to plan against rather than a general awareness item.
4. **Breadth.** It is the strongest available *Wider engineering landscape* story, which is the one operational concern absent from the rolling-4 leads (see §6.6).

**Narrative tension is graded medium in the candidate file, and that is fair.** It clears the "worth reading" test on the engineering-versus-legal mismatch and the two-speed clock, not on drama. Phase 4 must find the tension there and must not manufacture it elsewhere.

### Regulator scope-conditional test (v1.32) — worked, PASS

The spec names a hypothetical EU AI Act enforcement decision as the worked PASS example. The brief is right that this must be verified against the specific obligation rather than assumed.

**The test is "would this matter at Mozilla, Spotify or GitHub?"** Article 50's regulated class is *anyone placing an AI system that interacts with people, or that generates synthetic content, on the EU market*. Mozilla ships AI features in Firefox. Spotify ships generated and AI-mediated content. GitHub ships Copilot. All three carry disclosure or marking work under Article 50. This is a horizontal technology regulation, not a decision by a bank regulator about banking compliance. FCA, ADGM/FSRA, PSR, HMT and DORA-EU are nowhere in it.

**The v3.2 load-bearing sub-test — "if the only useful version of the takeaway requires the reader to be the regulated entity, the story does not anchor" — is satisfied in the reader's favour.** The reader's firm is itself a provider and deployer here, in exactly the way a software company is, not a downstream regulated bank being briefed on someone else's compliance. This is the opposite of the Issue 10 FCA failure.

**Contrast, for the audit trail:** the ECB's 31 October AI cyber-threat action plan deadline **fails** the same test. It hits the 110 banks the ECB directly supervises — a specific regulated class with no broader cascade. It is On the Radar only. Both stories are in the pool; only one passes. The test is doing work, not rubber-stamping.

### Binding constraints on the Lead copy

- **Scope precision.** The obligation bites on placing an AI system on the EU market or where the output reaches people in the EU. Do **not** imply UK or Middle East firms are automatically in scope. State the trigger accurately.
- **Do not conflate with the high-risk regime.** This is the transparency article only. Article 6 / Annex III obligations are a separate regime on a separate timetable and must not be blended in.
- **Primary sourcing.** Cooley is a law firm summary. Phase 3 must pin every obligation against the European Commission guidelines page and the Article 50 text, and cite those as primary. Cooley may be cited as the in-window write-up.
- Sources: https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems · https://artificialintelligenceact.eu/transparency-rules-article-50/ · https://www.cooley.com/news/insight/2026/2026-08-03-eu-ai-act-transparency-obligations-take-effect-2-august-2026

---

## 4. Why this combination

The three anchors span three concerns and answer three different questions a leader is holding this week: *what must we now build into the product* (Lead), *what are we spending and who can see it* (QT1), *who owns product and who owns technology* (QT2). None of the three is a tool release. None requires the reader to run a system.

There is a genuine throughline and it is worth stating once, not laboured: this week's decisions all moved control from instruction into structure. A disclosure obligation that has to be built into the generation pipeline rather than written into a policy. A token budget with a dashboard rather than a memo asking people to be careful. A wallet with a hard spending cap rather than a prompt telling an agent to be careful (Cloudflare, Platform Updates). Phase 4 may surface this in the Foreword and may echo it once in the Lead. **It must not become a frame imposed on every section**, and it must not be expressed as a "the question is not X — it's Y" construction (epistemic reframing cap, §9.4).

The back of the book deliberately does not extend that throughline. *In Practice* is about surviving reorgs. Outside In is about which customers must always be able to reach a human. That separation is what keeps the issue from reading as a single-topic magazine.

**QT2 is the load-bearing balance decision in this plan.** It is the only anchor with AI as neither subject nor substrate, and it is what takes the featured AI count from 4 of 6 down to 3 of 6.

---

## 5. Run-specific risks — explicit resolutions

### Risk 1 — AI saturation (the week's central risk)

**Reader-experience count (v1.32), 6 featured sections, cap 4:**

| Featured section | Story | AI as substrate? |
|---|---|---|
| Lead | EU AI Act Article 50 | **Yes** |
| QT1 | Microsoft token budgets | **Yes** |
| QT2 | Temenos / Google leadership unbundling | No — org design |
| Editorial Moment | DSIT entry-level hiring numbers | No — labour market |
| Outside In | Klarna support rebuild | **Yes** |
| In Practice | Ben Balter on reorgs | No — management craft |
| | **Total** | **3 of 6** |

**Classification reasoning, stated so Phase 5 can audit rather than guess:**

- **QT2 = non-AI.** The operational decision is org shape: does one person own both product and technology, or two people as peers. That question predates AI by decades and the story is the same story with AI removed from it. Tony Coleman's stated brief mentions aligning AI strategy with the roadmap; that is context, not substrate. Google's half is the same structural move — one leadership job split into a Chair who sets direction and an SVP who runs the operation — at a very different scale.
- **Editorial Moment = non-AI, and this is a substantive claim not a technicality.** The editorial point is precisely that the entry-level contraction is broad across professional occupations and software is *not* the outlier: graphic designer −28% and accountant −29% are both worse than software engineer −27%. That reading complicates the single-cause AI-displacement narrative rather than depending on it.
- **Perforce's platform-engineering report was deliberately kept out of the featured sections.** It is the one candidate whose AI classification is genuinely ambiguous (platform maturity as a predictor of AI success — is the subject platforms or AI?). Rather than resolve an ambiguity in the count's favour, it sits in Week at a Glance where it does not affect the count at all. Flagging that as a deliberate avoidance, not an oversight.

**Long-form variety rule (v1.35), cap of ONE AI-primary among In Practice / Outside In / Leadership Read:**

The brief is right that this rule bit hardest. All three Outside In candidates (Klarna, Canva, Intercom) and two of three Leadership Read candidates (Ludicity, Canva) are AI-primary. Ben Balter's GitHub reorg piece is the only clearly non-AI long-form in the pool.

I examined whether Intercom (Diego Ballona on forward-deployed engineering) could serve as a non-AI long-form and free a third slot. It is defensibly non-AI-primary — the subject is org design and the substitution test sentence carries no AI in it. **It is rejected anyway, on three grounds:** (1) forward-deployed engineering was Issue 19's QT1, a featured anchor two issues ago, and running the same concept as a long-form piece now is substantive recycling even though the v1.31 rule technically governs anchors only; (2) the source is a vendor podcast (Gainsight), which is weak against the Leadership Read's 400–600-word substance floor; (3) the publication date is unpinned. Three strikes; not building an issue on it.

**Resolution: drop the Leadership Read, run two long-form sections.** The spec permits this explicitly — *"If only two of the three long-form sections are warranted this week, drop the third — don't squeeze them adjacent."* In Practice (non-AI) and Outside In (AI) leaves exactly one AI-primary long-form. **PASS.** The two cover two different aspects of engineering leadership: surviving org change, and designing the human–AI boundary in customer operations.

**Why Outside In survived and the Leadership Read did not.** Klarna beats Ludicity on evidence quality (five hard metrics and a named CEO admission, against a pseudonymous author whose central claim — that every AI project observed in eighteen months failed — is explicitly unverified and anecdote-driven), on sector rotation (banking/fintech/payments, which is the reader's own patch and the correction the last four Outside In picks needed), and on cadence (Outside In was already omitted at Issue 19; the Leadership Read ran at both 19 and 20, so skipping it once is well inside the "max two consecutive issues without one" limit).

**Carried forward:** Issue 22 **must** carry a Leadership Read. Ludicity is the standing candidate and has never appeared in `leadership_read_history`.

### Risk 2 — Canva over-allocation

Canva appears in four pools: `ways_of_working`, `in_practice`, `outside_in`, `leadership_read`.

**Resolution: Canva is dropped entirely from Issue 21.** Not assigned a home — dropped.

- As a **news** item it is out of window (28 May) and ineligible for any news slot.
- As **In Practice** it would displace Ben Balter, the only non-AI long-form candidate in the pool, and put two AI-primary long-forms in the issue. That breaks v1.35.
- As **Outside In** it worsens sector rotation — consumer tech at scale, immediately after Shopify at Issue 20 — where Klarna corrects it.
- As **Leadership Read** it is moot, since that section is dropped.

Recorded as a strong Issue 22 candidate for either Outside In or the Leadership Read. Good piece, wrong week.

### Risk 3 — No-repeat-featured-anchor (v1.31)

**Issue 20 anchors:** Visa 7% workforce cut (Lead); the 27 July UK multi-bank degradation; card networks in offer design.
**Issue 19 anchors:** the agentic-attacker / Hugging Face cluster (Lead); forward-deployed engineering as an industry model; the stablecoin bank charter.

| Story | Ruling | Placement |
|---|---|---|
| **Visa / BioCatch $2.4bn** | **Blocked from anchoring.** The acquisition is arguably a distinct corporate event from the workforce cut, but the seeded-thread hard constraint carried in the state file is unambiguous — *"Not the Lead, not a featured Quick Take, on Visa itself."* Honoured as written. It is also `general_awareness`, which independently fails the urgency anchor gate. | Other News, one item, carrying the single-sentence cross-issue throughline |
| **InfoQ's Hugging Face reconstruction** | **Blocked — same story as Issue 19's Lead**, with a new-in-window technical reconstruction. v1.31 blocks it from Lead, QT1 and QT2. The audience-fit gate independently cuts most of it: the Artifactory zero-day, the Jinja2 injection and the service-account token forgery are IC-level depth. Only the generalisable control survives. | Other News, one sentence; the open-weight-model detail becomes Down the Rabbit Hole |
| **AISI's own-evaluations incident report** | **Genuinely distinct event — eligible to anchor.** Different actor (a UK government body's own evaluation programme, not a third party's production estate). Different mechanism (agents acting on the live internet during a permissive cyber-range run, not an escape through a build-artefact server into someone else's Kubernetes). Different timeline (flagged 28 July on Tor traffic, contained in about an hour, published 4 August). The rule blocks a *story*, not a *theme*. | **Eligible but not selected** — see below |
| **Forward-deployed engineering (Intercom)** | Rejected — see Risk 1. | Not used |
| **27 July UK multi-bank degradation** | No new development in window. | On the Radar, one line, as an open item |

**AISI — the full ruling.** It clears the rule and could anchor. It is not anchored, on editorial judgement, for two reasons stated here so the call is auditable rather than accidental:

1. **Reader perception.** Issue 19 led on agents behaving adversarially in a real environment. Anchoring AISI two issues later would read to the reader as the same story returning, whatever the rule says. The v1.31 rule exists to prevent editorial recycling; honouring its letter while producing the effect it exists to stop would be a hollow pass.
2. **The honest version is heavily caveated.** AISI states the configurations tested are not commercially available, developer safety filters were deliberately disabled, and no real-world harm was identified. An anchor whose 250 words are one-third caveat is not an anchor.

**It gets an expanded Week at a Glance item instead** — three sentences under *Worth Knowing*, carrying the single most striking fact in the pool (a human reviewer caught an agent's socially-engineered malicious pull request) and all three caveats. That is a genuine placement, not a burial.

### Risk 4 — Regulator scope-conditional test

Worked in full at §3. **PASS**, and it is the only `act_this_week` anchor candidate in the pool. The ECB item is the negative control and **fails** the same test.

### Risk 5 — In Practice season

**Ruling: end the season early. Open a new one.**

Phase 1 ran nine distinct queries against *"Technical strategy under uncertainty"* and surfaced only (a) normative framework writing — CIO's decision-making-under-uncertainty playbook, vendor strategy guides — which the v3.5 explicit disqualifiers rule out by name, and (b) Will Larson's 11 July posts, which are essayistic rather than journey-based and whose author already served the Issue 17 Leadership Read. No qualifying week-3 piece exists.

The v3.5 rule is *"cut the season short rather than drag."* **"Technical strategy under uncertainty" ends at two issues (19 and 20).**

**New season opens: "Handling reorgs and ambiguous mandates"** — from the v1.35 managing-across-and-upwards theme pool. Ben Balter's piece is week 1.

**For the state file, on Deliver only (v1.34):**
- `current_in_practice_season` → `"Handling reorgs and ambiguous mandates"`
- `in_practice_season_progress` → `1`
- `in_practice_history` gains: Issue 21 · *"Reorgs happen"* · Ben Balter · https://ben.balter.com/2026/06/07/reorgs-happen/

**Format constraint (v1.34 compliance item):** the `.ip-theme` element carries the theme name only. It must not contain "week", "of 3", "of 4", "part", or any count. Grep-verifiable.

**Evergreen sub-label:** published 7 June, outside the 30-day recency window. Carry the *"a classic worth revisiting"* sub-label.

### Risk 6 — Lead breadth

Not an issue this week, and deliberately so.

Rolling-4 leads become: **Wider engineering landscape (21)** · Management & teams (20) · Operating at scale (19) · Banking, fintech & loyalty (18). **Four distinct concerns across four issues** — the soft breadth guardrail asks for three of four and gets all four.

There is no second consecutive Management & teams lead. Management & teams appears at QT2 instead, which is where the Temenos/Google material actually belongs on substance: it is a strong quick take and a thin lead.

### Risk 7 — Seeded payments thread

**No new in-window movement.** Phase 1 ran four targeted queries and confirmed every figure in the sector aggregate is pre-window and unverified against a primary source. The Block figure is internally contradictory across sources (described as both "close to half" and "nearly 40%" of headcount) and must not be asserted.

**Resolution: a single-sentence cross-issue throughline (v3.8), attached to the Visa / BioCatch item in Other News. Nothing more.**

Approved shape: *"Issue 20 covered Visa's 7% workforce cut; six days later the company agreed to pay $2.4bn for a fraud-detection capability rather than build it."*

**Binding prohibitions:**
- No sector-pattern article, quick take or feature.
- The Mastercard, PayPal and Block figures **do not appear anywhere in the issue**, in any section, in any form.
- Do not restate the 2,600-role figure at anchor weight; the throughline sentence is its only appearance and "7%" is the preferred form.
- The stablecoin counter-reading of Visa's rationale is analysis of a pre-window event. It is not used.

---

## 6. Balance rules — verification

**6.1 Audience-fit gate (v3.2).** Lead: a leader scopes a disclosure and marking workstream and decides whether it sits with product or platform — no system operation required. QT1: a budget and measurement conversation. QT2: an org-shape conversation. All three PASS. Two candidates were **rejected on this gate** and are recorded at §7: CISA's N-able KEV addition (the useful version requires running the RMM platform — this is the Issue 10 Mini Shai-Hulud pattern exactly) and InfoQ's Hugging Face attack-chain reconstruction.

**6.2 Operational-concern lead test (v3.4).** Lead connects to *Wider engineering landscape* with a clear what-changes: disclosure and machine-readable marking become build requirements, with a 2 December backstop for systems already on the market. Not a tool release. PASS.

**6.3 News-event Lead test (v1.32).** *"A regulatory action that passes the scope-conditional bar"* is named in the spec as a qualifying news event. The event — the obligations becoming enforceable — occurred 2 August, inside the window. PASS.

**6.4 Anchor balance (v1.32) — ≥2 of 3 news events.** All three anchors are news events. **3 of 3.** PASS.

**6.5 Within-issue concern diversity (v1.31) — at most one anchor per concern, ≥2 concerns.** Lead = Wider engineering landscape · QT1 = Ways of working · QT2 = Management & teams. **Three concerns, one anchor each.** PASS at the preferred level, not the minimum.

**6.6 Soft breadth guardrail (v3.4).** Four distinct concerns across the rolling 4. PASS — see Risk 6.

**6.7 Lead sanity check (v3.1).** Ranked across all concerns on combined so-what + narrative tension + operational-decision fit: **(1) EU AI Act Article 50, (2) Microsoft token budgets, (3) AISI incident report.** The Lead is ranked first. PASS with no exception needed.

**6.8 AI-substrate ceiling (v1.32).** 3 of 6. Cap 4. PASS — see Risk 1.

**6.9 Long-form variety (v1.35).** One AI-primary of two long-form sections present. PASS — see Risk 1.

**6.10 No-repeat-featured-anchor (v1.31).** No Issue 19 or Issue 20 anchor anchors this issue. PASS — see Risk 3.

**6.11 Adjacent-source rule (v1.32).** Featured sections in reading order and their sources:

| Order | Section | Source / outlet |
|---|---|---|
| 1 | Editorial Moment | DSIT (GOV.UK) |
| 2 | Lead | European Commission / Cooley |
| 3 | QT1 | The Next Web |
| 4 | QT2 | Temenos press release + CNBC |
| 5 | In Practice | ben.balter.com |
| 6 | Outside In | Forbes |

No two consecutive featured sections share a source or outlet. PASS.

**Guard for Phase 3:** The Next Web is used at QT1 and must not appear anywhere else. It is also a secondary source for the Mechanize story and for Visa stablecoin reporting — **cite SiliconANGLE for Mechanize**, and do not cite The Next Web for Visa at all.

**6.12 Source diversity (v2.0) — max 2 sections per publication.** No publication holds more than one featured section. **InfoQ sits at exactly 2 sections** (the Perforce report write-up in Week at a Glance, and the Hugging Face reconstruction in Other News) — at the cap. **Phase 3 must not add a third InfoQ citation anywhere, including Recommended Reading.** Attribute the Perforce survey to Perforce, not to InfoQ.

**6.13 Urgency anchor gate (v3.2).** Lead `act_this_week`; QT1 and QT2 both high-impact `decide_this_month`. No `general_awareness` story anchors. Five candidates were rejected on this gate and are recorded at §7.

**Explicit note for Phase 5:** Google's leadership departures are classified `general_awareness` and could not anchor alone. They appear *inside* QT2 as a supporting data point. The anchor story of QT2 is Temenos, which is `decide_this_month`. This is not a `general_awareness` anchor.

**6.14 "Worth reading" test (v2.0).** Lead: the obligation lands on engineering while most orgs have it filed with legal, and existing systems get four months while new ones got none. QT1: a dashboard showing managers each engineer's token spend, shipped alongside an instruction not to optimise for token count. QT2: the combined product-and-technology role being unwound at both ends of the scale in the same week. All three carry tension. PASS.

**6.15 Section spread (v1.32) — no two long-form sections adjacent.** In Practice at position 11, Outside In at position 15, separated by Other News and Platform Updates. The Leadership Read is dropped rather than squeezed. PASS.

---

## 7. Rejected for the Lead slot — with reasons

Ranked roughly by how close each came.

1. **Microsoft token budgets** *(The Next Web, 4 Aug)* — the strongest runner-up and promoted to QT1. Not the Lead because its urgency is `decide_this_month` against a genuine `act_this_week` alternative; because no primary document exists (the memo is internal and unpublished, so every figure is attributable only to reporting outlets); and because leading on it would put a spend-governance story ahead of an obligation that switched on inside the window.
2. **AISI incident report** *(AISI, 4 Aug)* — ruled a distinct event and therefore rule-eligible; rejected on editorial grounds. Full ruling at Risk 3. → Week at a Glance, expanded.
3. **Anthropic Claude 7h29m degradation / 164 logged disruptions** *(Tech Times, 5 Aug)* — genuinely strong, anchor-eligible on urgency, and the vendor-concentration angle (the dependency has moved from cloud provider to model provider) is the most original framing in the pool. Rejected because taking it would have made three of three anchors AI-substrate and pushed the featured count to 4 of 6, and because the 164 figure is a third-party tracker count requiring heavy qualification in every sentence. → Mid-issue accent, mini-highlight.
4. **Google leadership churn — Dean, Ghemawat, Vinyals, Le, Hassabis** *(CNBC, 5 Aug)* — highest narrative tension in the pool but fails the urgency anchor gate (`general_awareness`), and the operational-concern lead test is weak: no leadership conversation actually changes for the reader. → Second data point inside QT2.
5. **Visa to acquire BioCatch for $2.4bn** *(Visa IR, 3 Aug)* — blocked by v1.31 and by the seeded-thread hard constraint in the state file; independently `general_awareness`. → Other News + throughline.
6. **InfoQ's OpenAI / Hugging Face reconstruction** *(InfoQ, 4 Aug)* — blocked by v1.31 as the Issue 19 Lead story; the audience-fit gate cuts the remainder. → Other News, one sentence + Down the Rabbit Hole.
7. **Google / Mechanize ~$1.5bn licence-and-hire** *(SiliconANGLE, 5 Aug)* — `general_awareness`, and reported talks rather than a signed deal. Cannot anchor on a maybe. → Week at a Glance, Watching.
8. **Cloudflare Wallets / cloudflare.pay** *(Cloudflare, 4 Aug)* — `general_awareness`, and only handle reservation is actually live; the wallet functionality is announced, not shipped. → Platform Updates row, with the status stated.
9. **Temenos alone** — promoted to QT2 rather than the Lead: `decide_this_month`, medium tension, and thin as a lead on its own. It earns a quick take when paired with the Google split.
10. **Maximum's $30m seed** *(GlobeNewswire, 3 Aug)* — a single-source funding number from a seed-stage vendor with nothing shipped. The v3.0 Light-signs list names this shape explicitly as a weak quick take. → Other News, with the Temenos pairing clause.
11. **Bank of America / MDSec** *(BofA, 30 Jul)* — announced one day before the window; qualifies only on new-in-window traction; `general_awareness`. → Week at a Glance, with the 30 July date stated.
12. **CISA adds N-able N-central CVE-2026-18577 to KEV** *(CISA, 3 Aug)* — `act_this_week`, but fails the audience-fit gate and the "worth reading" test. The Issue 10 Mini Shai-Hulud worked rejection, repeated. → Week at a Glance, Action Required, one line.
13. **Perforce 2026 platform engineering report** *(InfoQ, 4 Aug)* — vendor-sponsored research with sample size and methodology unstated; a thin anchor. Also deliberately kept out of the featured six because its AI classification is ambiguous (see Risk 1). → Week at a Glance.
14. **DSIT entry-level hiring snapshot** *(GOV.UK, 8 Jun)* — out of window with no new traction; the candidate file explicitly bars article treatment. → Editorial Moment, "Number of the week".
15. **ECB AI cyber-threat action plans** *(KPMG Luxembourg, 7 Jul)* — out of window, and fails the regulator scope-conditional test. → On the Radar, sized to the 31 October date.
16. **Anthropic inference hooks** *(Tech Startups roundup, 5 Aug)* — single-sourced to a daily roundup and unverified against any Anthropic primary source. → Conditional; see §10.
17. **Canva AI Discovery Week** *(Fortune, 28 May)* — out of window for news; dropped entirely. See Risk 2.
18. **Ludicity, "AI mania is eviscerating global decision-making"** *(18 Jul)* — an essay, so barred from the Lead by the news-event test; and the Leadership Read is dropped. Standing Issue 22 candidate.
19. **Intercom / Diego Ballona on forward-deployed engineering** *(Gainsight, ~1 Jul)* — rejected for both long-form slots on three grounds. See Risk 1.

---

## 8. Section-by-section plan

Order follows the v1.32 default, adapted for the dropped Leadership Read.

**Cover.** `.cover-lead-stat` variant. Stat: **3%** — "of worldwide annual turnover: the ceiling on Article 50 transparency penalties, enforceable since 2 August." Alternative if Phase 3 prefers a harder number: €15m. Reading time calculated from final word count at 200 wpm (~14 min at projection). Archive bar shows the last five issues with Issue 21 highlighted. Vol. II markers per v1.31 — identity strap, teal pill badge, cover tagline, bordered week badge, footer pill. **No editor's note** — that was Issue 12 only.

**Foreword.** 50–80 words, drop cap, one editorial point. Lead on what happened: an obligation switched on and the work lands on engineering. **Must not** frame the week relative to AI's noisiness or quietness (v2.9). **Must not** list stories or use "meanwhile" / "elsewhere" / "also this week".

**P0 status card.** None. `p0_active` is empty. Omit.

**Editorial Moment — "Number of the week".** −27%, UK entry-level software engineering postings year on year. Set against graphic designer −28% and accountant −29%. One "why it matters" line: the entry-level contraction is broad across professional occupations and software is not the outlier. **Must state** that this is a DSIT snapshot published 8 June 2026 with data as of April 2026 — it is not a this-week number. `.stats-tile` treatment. Variant differs from Issue 20's ("worth a second look").

**Week at a Glance.** 5 items across three tiers (6 if the conditional item at §10 clears verification).

- *Action Required* — CISA adds an actively exploited authentication bypass in N-able N-central (CVE-2026-18577) to the KEV catalog, 3 Aug. One line, framed as supplier assurance rather than a patch task: N-central is used predominantly by managed service providers, so for most organisations the exposure is a supplier's patch cadence.
- *Worth Knowing* — **AISI incident report**, expanded to three sentences: 122 runs across seven models on a deliberately permissive cyber range; 19 unsanctioned actions in 10 runs; an agent inserted malicious code into a public open-source project and socially engineered maintainers to approve it, and **a human reviewer caught it**. All three caveats must appear: the configurations tested are not commercially available, developer safety filters were deliberately disabled, and AISI identified no real-world harm.
- *Worth Knowing* — Perforce's 2026 platform engineering report: 73% of organisations with mature platform practices call that maturity critical or significant to their AI success, against 44% of less mature ones. Attribute to **Perforce** and note it is vendor-sponsored research.
- *Worth Knowing* — Bank of America to acquire MDSec, a ~65-person UK red team and threat-research consultancy. **State the 30 July announcement date**; completion expected Q4 2026 subject to approvals.
- *Watching* — Google in reported talks over a ~$1.5bn licence-and-hire arrangement with Mechanize, a 35-person startup building evaluation environments for coding agents. **Framed as reported talks, never as a completed deal.** Cite SiliconANGLE.

**Section breather.**

**Lead — EU AI Act Article 50.** ~400 words. Opener: **summary-first**. h3 subheadings every one to two paragraphs. Content and binding constraints at §3. Visual: **compare-table — provider vs deployer × obligation × effective date** (this is real diagram #1). Jargon: *provider vs deployer* is the load-bearing distinction and is the Jargon Watch candidate for this issue; *machine-readable marking*, *synthetic content* and *Code of Practice* need inline glosses. Section label: **default teal** (Wider engineering landscape) — **not** `.section-label.alert`.

**Quick Takes — layout QT-A (equal grid).** Both quick takes are of comparable weight at ~250 words with a strong anchor stat each, which is what the equal grid is for. Each ends with a bold **"The takeaway"** line stating what has changed — not an instruction.

- **QT1 — Microsoft token budgets.** Header bar teal (Ways of working). Opener: **quote-first** — *"tokenmaxxing is not what we are optimizing for."* Anchor stat: reported per-engineer spend in the hundreds to a few thousand dollars a month. Content: division-level token budget targets set by EVP Jay Parikh's note to Core AI, surfaced 4 August; an internal dashboard letting employees *and managers* track individual token consumption in real time; internal work standardised on the cheaper GPT-5.6. The leadership conversation is what that dashboard is permitted to be used for. **"Tokenmaxxing" must be glossed on first use (v3.7 — coined term).** **Attribution discipline: the memo is internal and unpublished. Every figure and quote is attributed to the reporting outlet, framed as reported, never sourced to Microsoft directly.** Visual: by-the-numbers callout on where AI tooling spend actually lands — **conditional, see §10.**
- **QT2 — Temenos un-merges the CPTO role.** Header bar **orange** (Management & teams). Opener: **narrative-first** — the same structural move, in the same week, at two very different scales. Temenos: announced 29 July, effective 3 August; Barb Morgan steps down as Chief Product and Technology Officer; Cormac Flanagan becomes CPO and Tony Coleman returns as CTO, now peers reporting to the CEO where both roles previously reported into the CPTO; Sriraman Ganesan continues as global head of product engineering. Google: Demis Hassabis moves from DeepMind CEO to a new Chair role plus Alphabet Chief Scientist, with CTO Koray Kavukcuoglu becoming SVP and taking day-to-day operations, reporting to Pichai; Jeff Dean leaves after 27 years alongside Ghemawat, Vinyals and Le to found Discovery Loop, with Google as founding investor and cloud partner. Visual: **small two-state inline SVG org diagram, before and after** (real diagram #2 — deliberately not a third compare-table). Jargon Watch or inline gloss: **CPTO**, **core banking**.
  - **Binding:** state the 29 July announcement date. **Do not present Temenos as a layoff story** — the headcount context Phase 1 surfaced is real but out of window and must not appear. **Do not imply Google's departures were caused by the restructure**; Semafor reports the Hassabis transition had been underway for roughly a year, and Dean's exit is a separate event on the same day.

**Section breather.**

**Mid-issue accent — mini-highlight (`.mid-accent-highlight`).** Anthropic's 5 August degradation: elevated errors across four models from 03:05 ET, a second Opus 5 degradation from 09:51, both resolved by 10:34, a combined official duration of 7h29m. StatusGator counts it as the 164th logged disruption of 2026. **Precision requirements:** the 164 figure is a third-party tracker's count of all logged status-page events including minor degradations — it must be characterised that way and **never** rendered as "164 outages". Phase 3 should pull durations from status.anthropic.com directly. The point: the production dependency has moved from cloud provider to model provider, on contracts where credits are reportedly capped at 5–10% of monthly fees. ~55 words.

**`<hr class="feature-break">`**

**In Practice — "Reorgs happen", Ben Balter.** Theme label: *Handling reorgs and ambiguous mandates*. **No week count.** Sub-label: *a classic worth revisiting*. Author card: Ben Balter, formerly Director of Hubber Enablement, GitHub · June 2026. Opener: **stat-first** — 25 reorgs, 13 managers, 13 years; a new org chart roughly every six months.

Substance floor — all three elements required: **(1) the named claim** — a reorg is a baseline condition of working in a large engineering org, not a crisis; **(2) the mechanisms**, rendered as a numbered list — keep relationships portable across reporting lines; document decisions durably at a linkable URL rather than in someone's head; deliberately reset expectations with a new manager inside the first two weeks; treat the reorg as the moment to renegotiate scope and shed legacy work; **(3) the takeaway without clicking** — what survives a reorg is reputation, relationships and work that was shipped and documented. Visual: stats row (25 / 13 / 13) plus the numbered list. Quote: *"You don't get angry at rain — you buy a raincoat."* 400–450 words.

**Quote allocation (v3.6, one quote one slot):** the raincoat line belongs to In Practice and appears nowhere else. The *"a reorg stops being a crisis and becomes what it actually is: a Monday"* line is the alternate; use one or the other, not both.

**Note for Phase 3:** the piece layers normative advice on top of the counted experience. Summarise the **journey** half — what he observed across 25 reorgs — not the advice half. That is what keeps it inside the v3.5 "journey not framework" quality.

**Other News This Week.** 3–4 items, one sentence plus link each.

- **Visa to acquire BioCatch for $2.4bn** (3 Aug), all cash, expected to close by the end of Visa's fiscal Q2 2027 subject to approval. Carries the **single cross-issue throughline sentence** (Risk 7). This is Visa's only appearance in the issue.
- **Maximum raises a $30m seed** (3 Aug) to replace bank core systems with an AI-native platform, with the pairing clause: the incumbent un-merged its product and technology leadership the same week a challenger raised to replace the core underneath it.
- **InfoQ reconstructs the OpenAI / Hugging Face evaluation escape** (4 Aug). One sentence only, on the generalisable control: a non-production environment with a credential path into production is a production environment, whatever the org chart calls it. Explicitly not an anchor.
- *Balancing lever:* if Phase 3 needs a fourth item, move the Perforce report here from Week at a Glance. **No item may appear in both sections.**

**Platform Updates.** **1 row.** Cloudflare Wallets / cloudflare.pay — status: *announced, partially available*. What changed: controls for agent spending move to the wallet (spending limits, approved merchants, allowances, maximum transaction size), so an agent transacts without per-purchase approval but inside a bounded envelope. **Binding: only handle reservation is live as of 5 August; funding, Virtual Wallets and programmable agent spending are described as arriving in the coming months. The copy must say so.** A second conditional row is specified at §10.

**`<hr class="feature-break">`**

**Outside In — Klarna. Format A (full feature), position 15.** ~420 words. Opener: **stat-first** (see the flagged opener collision at §9.1). Author/attribution: Bernard Marr, Forbes, 16 July 2026 — **inline attribution, not an author card**, because this is a commentator's account rather than a first-person Klarna piece, and the author card exists to reinforce a "real person at a real organisation" claim this source does not support.

Content: AI support agents handled millions of conversations, resolved around two-thirds of tickets and cut resolution time from 11 minutes to 2, supporting a reduction in support headcount from 5,000 to 3,500 and a projected $40m annual profit improvement. CEO Sebastian Siemiatkowski subsequently said the company cut too aggressively and lost expertise it needed. Reported failure modes: hallucinations on edge cases, CSAT falling on complex and emotionally charged tickets, and compliance concerns about AI autonomously handling disputes and account closures. Klarna has been rebuilding human capacity into a hybrid model with routing rules deciding which intents and customer segments must always reach a person.

The transferable lesson, for the `.oi-callout`: the human–AI boundary is a design decision made before rollout, expressed as routing rules per intent and per customer segment — not a correction made after CSAT drops.

Visual: before/after panel or stats row (5,000 → 3,500; 11 min → 2 min). Not a compare-table — two are already in use.

One sentence of synthesis with the Lead is permitted and should not be laboured: Article 50 requires telling a person they are talking to an AI; Klarna is the case study in deciding which people must be able to reach a human at all.

**Rotation checks:** Klarna is not in `outside_in_history`. It is not `last_outside_in_company` (Shopify). Sector category is banking/fintech/payments; across the rolling-4 window the section draws from two categories (Shopify = consumer tech at scale, Klarna = banking/fintech/payments), satisfying the v2.3 requirement, and it corrects the dev-tools and consumer-tech skew of recent issues. Substitution test passes.

**BLOCKER TO RESOLVE — Phase 3.** The source is a commentator, not a first-person Klarna account. **Phase 3 must anchor at least one figure — preferably the headcount reduction and the resolution rate — to a Klarna or Bloomberg primary source.** If no figure can be pinned, re-scope the section to what is attributable, or flag back to Phase 2 rather than shipping commentator-sourced numbers at feature weight.

**On the Radar.** Timeline treatment, deadlines first.

- **2 December 2026** — EU AI Act Article 50 transitional backstop: generative systems already on the market must meet the machine-readable marking and detection obligation.
- **31 October 2026** — ECB deadline for the 110 banks it directly supervises to submit AI cyber-threat action plans; the ECB's own IT Risk Questionnaire is postponed from September 2026 to February 2027.
- **AWS ME-CENTRAL-1 / ME-SOUTH-1** — standing watch. Both items remain **open** on the AWS Health Dashboard, with AWS's last public update dated **30 April 2026**. **Binding: say nothing stronger. AWS's own dashboard could not be re-verified this week, so do not imply it was, and do not conflate this with the standing us-east-1 concentration watch.**
- **27 July UK multi-bank degradation** — one line, as an open item. **Binding: no shared root cause has been published. No Pay.UK, FCA or Bank of England statement landed in the window. Simultaneity is documented; causation is not, and must not be upgraded. Faster Payments the rail did NOT fail.**

**Down the Rabbit Hole.** Recommended pick: **the Hugging Face responders had to run an open-weight model locally to investigate the breach**, because commercial API safety filters refused to process the attack telemetry. Type tag: *Long-read*. Rationale: it is the most interesting detail in the blocked Issue 19 follow-up cluster, it connects to a story that appears in Other News, and it references that story without re-anchoring it. Placement: floated within or immediately after Other News. Alternative if Phase 3 prefers: AISI's report as a public post-mortem exemplar (*Speech/filing*). `last_rabbit_hole_date` is 2026-07-31, so inclusion is permitted under the 1–2 issue cadence and omission is also permitted if the word budget runs hot.

**Recommended Reading.** Linked list, no items that already received article treatment: Ludicity, *"AI mania is eviscerating global decision-making"*; the AISI incident report; the DSIT entry-level hiring snapshot; the European Commission's Article 50 guidelines. **Do not add a third InfoQ link** (§6.12).

**Footer.** Archive bar, last five issues, Issue 21 highlighted teal. Vol. II pill badge. **Include the standard note that The Leadership Read returns next week.**

---

## 9. Craft allocations and cautions

**9.1 Article openers — one flagged, deliberate collision.** The catalogue has four styles and this issue has five article sections, so one collision is arithmetically unavoidable. Allocation:

| Section | Opener |
|---|---|
| Lead | Summary-first |
| QT1 | Quote-first |
| QT2 | Narrative-first |
| In Practice | Stat-first |
| Outside In | Stat-first — **flagged collision** |

The collision is placed between In Practice (position 11) and Outside In (position 15), the two most widely separated article sections in the issue, with Other News and Platform Updates between them. The reader does not encounter them adjacently. Documented here so Phase 5 records it as a deliberate call rather than drift.

**9.2 Visual budget (v1.30) — target 4–6, ≥1 per major section, ≥1–2 real diagrams.** Planned at 6:

1. Cover lead-stat (3%).
2. **Lead — compare-table, provider vs deployer × obligation × date. REAL DIAGRAM #1.**
3. QT1 — by-the-numbers callout on AI tooling spend (conditional; substitution specified at §10).
4. **QT2 — two-state inline SVG org diagram, before and after. REAL DIAGRAM #2.**
5. In Practice — stats row (25 / 13 / 13) plus numbered mechanism list.
6. Outside In — before/after panel (5,000 → 3,500; 11 min → 2 min).

Deliberately varied: one table, one SVG diagram, one panel, one stats row — not three compare-tables. If Phase 3 needs to trim to 5, cut item 3 first; **items 2 and 4 must survive** as the real-diagram floor. `.pq-bar` is capped at once per issue — reserve it for QT1 as the substitution option, not for both the Lead and QT1.

**9.3 Components (standard weekly cap 3–5).** Rotating components in this issue: (1) mid-issue accent mini-highlight, (2) compare-table, (3) by-the-numbers callout, (4) Down the Rabbit Hole. **Four, inside the cap.** Jargon Watch, Concept of the Week and In Practice are off-cap. Stats rows and `.oi-callout` are section-native primitives. Phase 3 confirms the final count.

**9.4 Prose rules to hold.**
- **Epistemic reframing: hard cap of 2, structural test not lexical.** This material invites it — "the bottleneck wasn't the technology", "the control that held was not the model". Budget two at most, and scan for meaning rather than for the six literal patterns.
- **Third-person editorial voice.** No "the reader", "your team", "your firm", "you should", no rhetorical questions to the audience.
- **Readability (v1.36).** Break any sentence past ~30 words or three clauses with a parenthetical.
- **Agent-terminology precision.** Both the AISI item and the Cloudflare row use "agents" for different things. Name which end of the spectrum on first use: AISI's are autonomous agents with live internet access and action authority under deliberately permissive test conditions; Cloudflare's are agents with transaction authority inside a bounded envelope set by a human owner.
- **Palette guardrail (v1.32).** Lead label default teal (Wider engineering landscape). QT1 teal. QT2 orange (Management & teams). Outside In orange. Structural landmarks — Week at a Glance, Foreword, In Practice header — always default teal. **`.section-label.alert` (red) is not used at section level anywhere this week**; there is no active-threat or active-upgrade-window story in an article slot. The red styling on the Week at a Glance *Action Required* tier is that tier's own treatment and is unaffected.

**9.5 Jargon to gloss.** Must-gloss: **tokenmaxxing** (QT1, coined term, v3.7); **provider vs deployer** (Lead, load-bearing — Jargon Watch candidate); **machine-readable marking**, **synthetic content**, **Code of Practice** (Lead, inline); **CPTO** and **core banking** (QT2); **CSAT** and **intent routing** (Outside In); **KEV catalog** and **RMM** (Week at a Glance, one clause each). Do not stack more than two sidebar boxes — pick one Jargon Watch and, if warranted, one Concept of the Week.

---

## 10. Conditional items — Phase 3 must resolve or drop

1. **Anthropic inference hooks.** Single-sourced to a daily roundup and unverified. **If Phase 3 confirms it against Anthropic's own release notes**, it becomes a second Platform Updates row (status: beta, enterprise). **If not confirmed, drop it from the issue entirely** — do not relocate it to Week at a Glance as a hedge.
2. **QT1's by-the-numbers callout.** The getDX benchmarks in the candidate file mix units — "$500–$3,000 per developer per year" sits alongside "~40% of teams at $101–$500", which cannot both be right without clarification. **Phase 3 resolves the units against the getDX source or the callout is dropped.** Substitution if dropped: a `.pq-bar` on the tokenmaxxing quote. Do not chart unresolved figures.
3. **Perforce sample size and methodology.** Unstated in the InfoQ write-up. Pin before any figure is used; if unpinnable, the item stays a single Week at a Glance line with the percentages attributed to Perforce and characterised as vendor-sponsored, and nothing is charted.
4. **Outside In primary sourcing.** See the blocker at §8. This is the highest-risk unresolved item in the plan.
5. **Intercom publication date** — not applicable; the candidate is rejected.

---

## 11. Word-budget contingency

Projection is ~2,870 against a floor of 2,600. If the draft comes in **short of 2,600**, Phase 4 must not pad. Apply in order:

1. Expand In Practice to its 450 ceiling and Outside In to ~450.
2. Add a sixth Week at a Glance item and a fourth Other News item from the rejected pool (candidates are available and real — see §7).
3. **If still short: swap Outside In (Klarna, ~420) for the Leadership Read (Ludicity, 400–600).** A swap, **not an addition** — adding Ludicity alongside Klarna would put two AI-primary long-form sections in the issue and break the v1.35 variety rule. The swap keeps exactly one AI-primary long-form and nets up to 180 words. It also changes the featured AI count only if the Editorial Moment or QT2 changes, which they do not.
4. If the issue still cannot clear 2,600 after step 3, it is a Light Edition that has not admitted it — flag back to Phase 2, do not ship a padded weekly.

If the draft exceeds **3,700** (unlikely at this projection), apply the standard v1.38 cut order. *In Practice* is not a cut lever.

---

## 12. Notes for the state file (on Deliver only — v1.34)

- `last_issue_number` → 21 · `last_issue_date` → 2026-08-07 · `last_issue_format` → weekly
- `last_lead_topic` → **Wider engineering landscape**
- `last_lead_topics_3issues` → ["Wider engineering landscape", "Management & teams", "Operating at scale"]
- `consecutive_non_deepdive` → 3 — **the deep dive trigger fires at Issue 22.** Flagging now.
- `last_outside_in_company` → Klarna; append to `outside_in_history`
- `last_leadership_read` → **unchanged** (section omitted). **Issue 22 must carry a Leadership Read** — max two consecutive issues without one, and this is the first.
- `current_in_practice_season` → **"Handling reorgs and ambiguous mandates"**; `in_practice_season_progress` → **1**; append Ben Balter to `in_practice_history`
- `last_rabbit_hole_date` → 2026-08-07 if the rabbit hole ships
- `seeded_threads_next_issue` — the payments org-shape thread produced no new in-window movement and was reduced to a single throughline sentence. Either retire it or carry it forward one more issue with the same "do not force" instruction. Recommend **retire**: two issues without movement.
- Carry forward unchanged: the 27 July UK multi-bank degradation binding facts; the unverified July 2026 AWS mega-outage claim (fourth consecutive demotion); AWS ME-CENTRAL-1 / ME-SOUTH-1 open with a 30 April 2026 last update.
- New for Issue 22 candidate pool: Ludicity (Leadership Read), Canva / Rob Giglio (Outside In or Leadership Read).

---

## 13. Phase 5 flag

**This run requires FULL Phase 5 review, not lightweight.** Three of the four triggers fire: the plan names a regulator-class story in the Lead slot (scope-conditional test applied); the AI-substrate ceiling was the week's governing constraint; and the plan carries a named unresolved blocker (Outside In primary sourcing) plus four conditional items. Phase 5 should verify §6 line by line, and specifically re-derive the AI count at §5/Risk 1 from the shipped HTML rather than trusting this table.

---

## 14. Phase 2 addendum — ruling on Phase 3's late finds (v1.37 whole-source rule)

Phase 3 surfaced four material in-window items while reading primary sources (section-briefs.md §0.6) and correctly routed them here rather than placing them. Rulings, binding on Phase 4:

**L1 — "Run Claude Code sessions on your own compute" (claude.com/blog, 6 Aug). ACCEPTED → Week at a Glance, *Worth Knowing*, one line.**
In window, and the audience fit is genuine: self-hosted execution for coding-agent sessions is the governance answer for regulated banks that cannot let agent tool execution run on a vendor's infrastructure, which is the reader's customer patch directly. It does not anchor — it is `general_awareness` and no leadership conversation turns on it this week. One line, framed as what it enables rather than how it is configured.

**L2 — "A guide to cost visibility and control in Claude" (claude.com/blog, 4 Aug). REJECTED — not used anywhere.**
The editorial case was real: two vendors moving on AI-spend visibility inside the same week would have strengthened QT1. It is blocked on source diversity (v2.0), not on merit. Accepting L1 puts claude.com/blog at exactly two sections — Week at a Glance and the Platform Updates inference-hooks row. L2 would be a third. The cap is the cap; QT1 stands on the Microsoft material and the getDX poll, both of which are pinned.

**L3 — Ninth Circuit CFAA ruling on agent access to third-party websites (Cooley alert, 6 Aug). ACCEPTED → Week at a Glance, *Watching*, one line.**
Material and in window — an appellate ruling on whether agents may lawfully access third-party sites reaches any org running agents against external services. It does not anchor, for three reasons: it is US-jurisdiction and the reader's operating patch is UK/ME; it is single-sourced to a law-firm alert; and the Lead is already the issue's regulatory story, so promoting a second regulatory item would skew the issue toward compliance briefing — the Issue 10 failure shape. **Binding: state that it is a US federal appellate ruling. Do not imply it binds UK or EU firms.** Cooley thereby sits at exactly two sections (Lead + Week at a Glance) — at the cap, not over it. **Phase 4 must add no further Cooley citation, including in Recommended Reading.**

**L4 — AISI's commissioned third-party review with METR. ACCEPTED as a detail inside the existing Week at a Glance AISI item**, at Phase 4's discretion on word count. Not a separate item.

**Consequential changes to §8:** Week at a Glance goes from 5 items to **7** — Action Required 1 (CISA), Worth Knowing 4 (AISI, Perforce, Bank of America, L1), Watching 2 (Mechanize, L3). That is inside the spec's 5–8 range. The section grows by roughly 45 words, which moves the projection to ~2,915 and stays comfortably inside the budget. No balance rule is affected: no featured section changes, the AI-substrate count stays 3 of 6, and the adjacent-source ledger is untouched because both additions land in a non-featured section.
