# Issue 22 — Run Plan (Phase 2: Inventory & Rank)

**Date window:** 8 – 14 August 2026
**Publication:** Friday 14 August 2026
**Spec version:** v1.38
**Format:** **Standard Weekly**
**Projected body copy:** ~3,295 words (budget 2,600–3,700)

This document is the contract for Phases 3 and 4. Phase 4 may not silently re-promote, demote or substitute any candidate. Any change goes back to Phase 2.

---

## 1. Format decision — the deep-dive trigger fires, and is declined

`consecutive_non_deepdive` is 3. The trigger fires at this issue. **A trigger is not a mandate**, and the spec is explicit that format falls out of the inventory: *"One story dominates and supports a deep dive with 2–3 SVG-worthy data threads → Deep Dive."* Both halves of that test have to hold. Neither does.

### 1.1 Does one story dominate?

No. The pool's strongest candidate — Oracle's planned August round — is **reported planning, not a company-confirmed event**. Business Insider sourced it to people and an internal document; Oracle declined to comment. Its UK/ME relevance is graded medium. The rest of the "org shape under AI" cluster is a survey write-up, a conference-talk interview, and two layoff trackers. There is no single event that could carry a cover, an executive summary and six source sections.

### 1.2 Do the data threads verify?

This is where the call is actually made. Phase 1 flagged three chartable threads. Audited against what is in the pool:

| Thread | Figures | Source quality | Verifies? |
|---|---|---|---|
| **A — Oracle capex vs headcount** | $21.2bn → $55.7bn capex; −21,000 roles (−13%); OCI +77%; $43bn debt + $5bn equity; restructuring charge $1.8bn → ~$2.1bn | Oracle's own fiscal-2026 reporting, reached via secondary coverage | **Probably** — pinnable to the 10-K, but not yet pinned |
| **B — span of control** | Meta 50-to-1; Amazon +15% IC-to-manager ratio; average span 8.1 (2013) → 12.1 (2025) | **No primary source anywhere in the pool.** These three figures appear only inside the prose of a rabbit-hole entry whose link is a 2020 academic paper | **No** |
| **C — LeadDev 2026 survey** | 37% doing more hands-on work; tech leads 41% / managers 31% / MoM 30% / CTOs 44%; EMs 20% → 35% | LeadDev's own Engineering Leadership Report 2026, 600+ leaders, published June 2026 | **Yes** |
| **D — progression pipeline** | METR 19% slower vs 20% believed faster; Anthropic 17% lower mastery; 59% assisted vs ~20% delegated | Third-party findings cited second-hand inside an InfoQ interview about a QCon talk | **Only after pinning to METR / Anthropic primaries** |
| **E — layoff aggregates** | 205,832 workers / 322 events; 65,532 finance & banking across 17 companies; HSBC 20,000 | Aggregator trackers. Phase 1 flags every figure as search-result reported and unverified | **No** |

One thread verifies cleanly. One probably verifies with work. Two do not — and **B and E are precisely the threads that would have to carry the deep dive's argument.** A deep dive built on B and E is a deep dive built on unverified aggregates.

### 1.3 The adjacency that settles it

The proposed cluster is adjacent to the **retired** "payments-sector engineering org shape under AI attribution" thread. That thread was retired at Issue 21 for exactly this failure: sector aggregates that could not be verified, a Block figure internally contradictory across sources, Mastercard and PayPal figures search-result reported only. Building an entire issue on the same class of evidence, one issue after retiring a two-section thread for it, would be the same mistake at ten times the size. Issue 21 also demonstrated the downstream cost — Phase 3 withdrew four Klarna claims at verification, which a Standard Weekly absorbs by re-scoping one section and a Deep Dive cannot absorb at all.

### 1.4 Third reason: the Leadership Read is mandatory

Deep Dives structurally carry **no Leadership Read and no Outside In**. The Leadership Read was omitted at Issue 21; the limit is two consecutive. Choosing a format that cannot carry one would honour the two-skip limit on a technicality while producing the outcome it exists to prevent. That is not a decisive argument on its own — it is the third of three.

### 1.5 Ruling

**Standard Weekly.** The deep-dive trigger fired, was worked in full, and is declined on evidence quality rather than on convenience.

**Carry forward:** `consecutive_non_deepdive` → **4**. The org-shape cluster is a genuine future deep dive and should be re-tested at Issue 23 **only if** two things appear: (a) Oracle's fiscal-2026 figures pinned to the 10-K, and (b) a primary, citable span-of-control dataset to replace thread B. Without those, decline again and say so again.

### 1.6 Light-edition check (v3.0) — zero of three signs fire

| Sign | Status |
|---|---|
| Lead is a routine version release with no controversy | No — a published RFC with a five-step reporting clock, 120+ named organisations, and two conspicuous non-members |
| A quick take is a single-source funding number with no follow-on analysis | No — the candidate of that shape (Cognition at $40bn) is the mid-issue accent, not a quick take |
| Outside In is filling the slot rather than illuminating | No — Duolingo carries a real before/after (weeks → ~10 minutes) and a transferable platform-vs-tooling decision |

### 1.7 Word budget projection (v1.38)

| Section | Words |
|---|---|
| Foreword | 75 |
| Editorial Moment | 70 |
| Week at a Glance (6 items, 2 expanded) | 300 |
| Lead — SAFE | 400 |
| QT1 — Oracle | 250 |
| QT2 — Zoom | 230 |
| Mid-issue accent | 55 |
| In Practice — Rungta | 420 |
| Other News (3–4 items) | 200 |
| Platform Updates (1 row) | 35 |
| Outside In — Duolingo | 420 |
| On the Radar (4 items) | 150 |
| The Leadership Read — Larson | 500 |
| Recommended Reading | 70 |
| Takeaway lines + source attributions | 120 |
| **Total** | **~3,295** |

Sits mid-band: 695 clear of the floor, 405 clear of the ceiling. Contingency at §11.

---

## 2. The slate

| Slot | Story | Concern | Substrate | Event/essay | Urgency |
|---|---|---|---|---|---|
| **Lead** | SAFE — 120+ organisations propose a fixed-deadline reporting scheme for AI agent security incidents | Ways of working | AI | News event (traction exception) | `decide_this_month` |
| **QT1** | Oracle plans another August reduction and asks managers to name the people, against capex that nearly tripled | Management & teams | AI | News event | `decide_this_month` |
| **QT2** | Zoom's zero-click meeting takeover — fixes shipped quietly in June and July, disclosed 11 August | Operating at scale | **Non-AI** | News event | `act_this_week` |
| **Editorial Moment** | "Number of the week" — of ~1,000 Microsoft engineers offered overseas transfers, about a third accepted | — | **Non-AI** | — | — |
| **In Practice** | Jay Rungta (YouTube) on why he started building again, and what "taste" means when code is cheap | — | **Non-AI** (ruling at §5.3) | Essay | — |
| **Outside In** | Duolingo — one agent registry instead of every team rebuilding the plumbing | — | AI | Essay | — |
| **The Leadership Read** | Will Larson — middle management is a trap, because its filters select against executive skills | — | **Non-AI** | Essay | — |

**AI as substrate across the six featured sections: 3 of 6.** Cap is 4. Three featured sections have AI as *not* the substantive driver, against a spec minimum of two — and the count survives at 4 of 6 even if Phase 5 reclassifies In Practice.

---

## 3. Why this lead

On 4 August the Linux Foundation published an RFC for the **Shared AI Findings Exchange (SAFE)**, drafted under the Open Secure AI Alliance by contributors from Cisco, CrowdStrike, Hugging Face, NVIDIA and Red Hat. Members would notify affected organisations as soon as possible, tell customers of credible data exposure within **72 hours**, file a confidential incident report within **four business days**, publish a preliminary factual report within **30 days** and a remediation update within **90**. Scope covers agents accessing or exploiting third-party systems, disclosing confidential information, continuing to probe production targets after operators suspect unauthorised activity, and near-misses. NVIDIA's Justin Boitano describes the model as NASA's Aviation Safety Reporting System with the agent as a flight recorder. **OpenAI and Anthropic are not members.**

It leads for four reasons.

1. **The operational question it creates is squarely a leadership one.** Not whether an organisation trusts its agents — whether it could produce a factual incident report about one inside four business days. That is an observability, logging and on-call design question, and it lands on whoever owns incident response, which in most orgs is nobody for agents specifically.
2. **It is cross-industry by construction.** The "would it matter at Mozilla, Spotify or GitHub?" test is comfortably passed — any organisation running agents against third-party systems is in scope. It is an industry consortium proposal, not a regulator action, so the v1.31 bank-regulator block does not apply and the v1.32 scope-conditional test is not the governing gate. Stated so Phase 5 does not mis-apply either.
3. **It has a concrete, chartable shape.** A five-step clock the source describes explicitly. That is the issue's first real diagram and it does work prose cannot.
4. **Breadth.** *Ways of working* is the one operational concern absent from the last three leads. Taking it puts all four concerns across the rolling 4 (see §6.6).

### 3.1 News-event Lead test — the traction exception, worked

The RFC published **4 August**, four days before the window opens. It qualifies under the new-in-window rule (b), not (a): the industry coverage, the 120-organisation count and the Black Hat reception broke **11–12 August**, inside the window (Axios, 11 August). The spec's condition on case (b) is binding here — **the Lead must explicitly state that the RFC was published on 4 August and must frame its coverage on what is new this week**: the membership count, the reception, and the absence of the two largest model vendors.

**Contingency, binding.** If Phase 3 cannot pin the 120-organisation count and at least one substantive development to a dated in-window source, the traction exception fails and the Lead changes: **Oracle moves to the Lead, SAFE moves to QT1, Zoom stays at QT2.** Concern diversity survives that swap intact (Management & teams / Ways of working / Operating at scale). Phase 3 must resolve this before Phase 4 begins and report the ruling; Phase 4 may not make the swap on its own.

### 3.2 Binding constraints on the Lead copy

- **It is a proposal, not a standard.** RFC stage. No adoption, no enforcement, no signatory obligations in force. Every sentence must carry that state.
- **The five deadlines are the substance.** Get them exactly right; they are the diagram.
- **OpenAI and Anthropic's absence is a fact, not a motive.** State that they are not members. Do not speculate about why.
- **Agent-terminology precision (v3.0).** SAFE's scope is production agents with action authority against third-party systems. Name that end of the spectrum on first use.
- **Primary sourcing.** Phase 3 pins the deadline set against the Linux Foundation RFC itself, not against the trade coverage. Cybersecurity Dive and Axios are the in-window write-ups.
- Sources: https://www.cybersecuritydive.com/news/ai-agent-security-exchange-linux-foundation/826940/ · https://www.axios.com/2026/08/11/open-source-security-ai-agent-reporting · https://www.unite.ai/ai-alliance-drafts-confidential-incident-reporting-rules-with-public-deadlines/

### 3.3 Lead sanity check (v3.1)

Ranked across all concerns on combined so-what + narrative tension + operational-decision fit: **(1) SAFE, (2) Oracle, (3) Zoom.** The Lead ranks first. PASS, no exception needed.

---

## 4. Why this combination

The three anchors answer three different questions a leader is holding: *could we account for what our agents did* (Lead), *what happens to the org when the infrastructure bill goes up and the headcount goes down* (QT1), *how long were we exposed before the vendor told us* (QT2). None is a tool release. None requires the reader to run a system.

There is a throughline and it should be stated once, not laboured: **this week is about accounting for things after the fact.** A scheme that puts a clock on explaining what an agent did. A restructure where the accounting is pushed onto line managers who have to name people. A vendor that fixed a zero-click flaw in June and explained it in August. Phase 4 may surface this in the Foreword and echo it at most once. It must not be imposed on every section, and it must not be written as a "the question is not X — it's Y" construction (§9.4).

The back of the book deliberately runs elsewhere. In Practice is about a manager's judgement staying calibrated. Outside In is about platform-versus-tooling. The Leadership Read is about why good line managers stall after promotion. Three different aspects of engineering leadership, none of them the front-of-book theme.

**QT2 is the load-bearing balance decision in this plan.** It is the only anchor with AI as neither subject nor substrate, and it is what keeps the featured AI count at 3 of 6 rather than 4. It is also the closest gate call in the issue (§5.2).

---

## 5. Run-specific risks — explicit resolutions

### 5.1 Risk — the deep-dive trigger

Worked in full at §1. Declined on evidence quality. **This is the single item most likely to be second-guessed, so the audit trail is deliberately long.**

### 5.2 Risk — QT2 and the audience-fit gate (the closest call in the issue)

Zoom disclosed four flaws on 11 August, headed by CVE-2026-53413: a memory-corruption bug in the annotation feature allowing zero-click remote code execution, letting any meeting participant take over another participant's machine with no victim action. **Fixed client builds shipped quietly in June and July**; disclosure came on 11 August. No in-the-wild exploitation is reported.

**The gate: "what does the reader do with this on Monday?"** If the answer is patch mechanics, this fails and belongs in Week at a Glance — that is the spec's own Mini Shai-Hulud worked rejection.

**The answer that clears the gate is the disclosure asymmetry.** An organisation whose patch policy triggers on *disclosure* was exposed for roughly two months while an organisation that patches on *release* was not. That is a vendor-assurance and patch-policy conversation a director has with their security lead and with their suppliers. It requires no system operation and it generalises past Zoom to every SaaS vendor in the estate.

**Binding constraints, non-negotiable:**
- **No CVE forensics, no exploit mechanics, no patch commands, no build-number lists in prose.** Fixed builds may appear once in a compact reference form and nowhere else.
- The **"found and weaponised with public AI models in under 24 hours and fewer than 20 prompts"** claim comes from the finding vendor, A Security, and is not independently confirmed. It is **attributed in a single sentence, secondary to the disclosure story, and never the spine of the section.** If Phase 3 cannot attribute it cleanly, cut it — the section stands without it.
- Because AI is not the spine, **QT2 is classified non-AI substrate**. Applying the Issue 21 test: remove AI from the story and a zero-click takeover in a ubiquitous meeting client with silent fixes and delayed disclosure is still a complete story. That is the test passing, not being waved through.

**The gate is doing work this week, demonstrably.** The actual Shai-Hulud npm worm is in this pool and is sent to Week at a Glance, Action Required, one line — because its useful takeaway does require running the build pipeline. Two security stories, opposite rulings, same gate.

### 5.3 Risk — AI saturation and the long-form variety rule

**Reader-experience count (v1.32), six featured sections, cap 4:**

| Featured section | Story | AI as substrate? |
|---|---|---|
| Lead | SAFE agent incident reporting | **Yes** |
| QT1 | Oracle capex against headcount | **Yes** |
| QT2 | Zoom zero-click / disclosure asymmetry | No — vendor assurance (§5.2) |
| Editorial Moment | Microsoft relocation acceptance rate | No — talent mobility |
| In Practice | Rungta on taste and managerial judgement | No — see ruling below |
| Outside In | Duolingo agent registry | **Yes** |
| | **Total** | **3 of 6** |

**In Practice classification ruling, stated explicitly because Phase 1 asked Phase 2 to make it.** Rungta's subject is what a manager's durable contribution is, and his answer is judgement — the ability to tell good work from plausible-looking work. AI is the condition that prompted the question, not the substance of the answer. This is the same reading applied to Kent Beck at Issue 17 ("AI as backdrop, not subject"). **Ruled non-AI-primary.** It is a genuine borderline and it is flagged: **if Phase 5 reclassifies it, the count moves to 4 of 6, which still passes.** Nothing in this plan depends on the ruling going one way.

**QT1 classification ruling.** Oracle is counted **as** AI substrate, deliberately conservatively. The capex is AI-infrastructure capex and the story does not survive with AI removed. Counting it the other way would have been available and is declined.

**Long-form variety rule (v1.35) — at most ONE AI-primary of three:**

| Long-form section | Piece | AI-primary? | Aspect of engineering leadership |
|---|---|---|---|
| In Practice | Rungta — taste, judgement, building again | No | Technical leadership for managers |
| Outside In | Duolingo — agent registry | **Yes** | Platform vs tooling investment |
| The Leadership Read | Larson — middle management as a trap | No | Org structure and career progression |

**One AI-primary of three. Three distinct aspects, against a floor of two. PASS.** This is the rule that broke Issue 21 and forced the Leadership Read to be dropped; it holds comfortably this week because Larson published a non-AI piece inside the window on 8 August.

### 5.4 Risk — the mandatory Leadership Read

Mandatory at Issue 22: Issue 21 skipped, the limit is two consecutive. `last_leadership_read` = The Pragmatic Engineer, so no consecutive-outlet conflict exists with any candidate.

**Selected: Will Larson, "Middle management roles were also a trap" (lethain.com, 8 August 2026).**

- **In window** — 8 August, the only Leadership Read candidate that is.
- **Non-AI**, which is what makes the v1.35 arithmetic work against an AI-primary Outside In.
- **Clears the 400–600 substance floor without padding**: a named framework (three middle-management functions — balancing pressures, defining organisational process, competing for resources — against three executive skills: domain expertise, driving execution, translating both into durable culture), two concrete mechanisms (the manager who goes deep is told they are neglecting stakeholder management; the manager who drives execution closely is accused of micromanaging), and a quotable central claim about negative selection.
- **Rotation:** Larson last held the slot at Issue 17, not consecutive. Anti-overlap with Outside In (Duolingo) and In Practice (LeadDev) both clear.
- **It sits on the issue's org-shape material without being any of it** — which is the right relationship for the slow close.

**Rejected, with reasons:**

- **Ludicity, "AI mania is eviscerating global decision-making" (18 July).** The standing candidate, verified real, never used. Rejected on two grounds. **(1) It is AI-primary**, and taking it alongside the AI-primary Outside In breaks v1.35 — the only way to run it would be to drop Duolingo, and Duolingo is effectively the entire eligible Outside In pool this week. **(2) Evidence quality**: the central claim — every AI project observed across ~300 conversations failing — is explicitly anecdotal and unverifiable, which is a weak spine for the issue's deepest curated piece. **Carried forward to Issue 23**, still never used, still standing.
- **Canva / Rob Giglio (28 May).** AI-primary, same v1.35 block. Independently the weakest of the three on the substance floor: Giglio is Chief Customer Officer rather than an engineering leader, and the piece is company narrative in a business outlet. Rank third; not used.
- **Allan / InfoQ progression piece.** AI-primary, same block. Genuinely strong and it gets a real placement in Other News.
- **LeadDev / Kapani survey.** Data-led rather than argument-led, hard to reach 400 words without padding, and LeadDev has held the slot four times already. Better used in Week at a Glance, where it goes.
- **Larson, "Decisions not dates" (11 August).** The second Larson piece. **Excluded from the issue entirely, including Recommended Reading** — one Larson piece per issue, and the Leadership Read is the better use. Carried forward to Issue 23.

### 5.5 Risk — the In Practice season

**Ruling: cut the season short at one issue. Open a new season. Run Rungta.**

Phase 1 ran nine themed queries against *"Handling reorgs and ambiguous mandates"* and returned only normative framework writing ("how to handle a reorg", "4 steps to rebuild confidence after a reorg"), material far outside the window, or org-design recommendation rather than lived account. Stephane Moreau's 2 August piece is the closest and is structurally normative, which the v3.5 explicit disqualifiers rule out by name.

**The brief asked whether the reorg-heavy news week makes a pool piece fit closer than the null suggests. Tested honestly against the three required qualities, and no.** Rungta is about a manager returning to hands-on building; Duolingo is about platform consolidation. Neither is about reorgs or ambiguous mandates. A reorg-heavy *news* week does not create an on-theme *first-person operational account*, and pretending otherwise is exactly the drag the v3.5 rule exists to prevent.

**The three options, worked:**

| Option | Ruling |
|---|---|
| (a) Run Rungta off-theme under the existing season label | **Rejected.** The theme label would say "handling reorgs" above a piece about a manager writing code. That is a broken promise to the reader — the same reasoning that banned the visible week count at v1.34 |
| (b) Cut the season short, open a new theme, run Rungta under it | **Selected** |
| (c) Omit In Practice with the footer note | **Rejected.** The strongest In Practice candidate in the pool passes all three qualities cleanly. Omitting a qualifying piece to protect a season with no material is protecting the wrong thing — and it would leave the issue at two long-form sections one week after the Leadership Read was already dropped |

**"Handling reorgs and ambiguous mandates" ends at one issue** (Issue 21, Ben Balter).

**New season: "Making technical decisions when you're not the SME"** — from the v1.35 technical-leadership-for-managers pool. Week 1 is Rungta. The fit is direct: his argument is that taste, the ability to tell good work from plausible-looking output, is the judgement a manager needs to evaluate work they did not do, and staying near the work is how it is preserved.

**Named explicitly, as the brief asks: this is the second consecutive season cut short.** "Technical strategy under uncertainty" ended at two issues (19–20); "Handling reorgs and ambiguous mandates" now ends at one. Two early cuts in a row is a signal about the theme catalogue rather than about any single week — the seasons that fail are the ones whose subject matter attracts normative writing rather than lived accounts. **Recommendation carried to state:** prefer themes with a strong first-person publication culture when opening the next one, and do not open a fourth season until a week 1 *and* a plausible week 2 candidate are both visible.

**Format constraint (v1.34, grep-verifiable):** the `.ip-theme` element carries the theme name only. It must not contain "week", "of 3", "of 4", "part", or any count.

**Recency:** Rungta published 13 August, inside the 30-day window. **No evergreen sub-label.**

### 5.6 Risk — no-repeat-featured-anchor (v1.31)

Excluded anchors from Issues 20–21: 27 July UK multi-bank failure; Visa restructure / offer layer; arXiv 79% self-review; card networks in offer design; EU AI Act Article 50; Microsoft token budgets; Temenos / Google leadership splits.

| This issue | Ruling |
|---|---|
| **SAFE (Lead)** | **Clear.** Same broad territory as Issue 21's Article 50 lead — AI governance — but a different actor (industry consortium, not a regulator), a different obligation (incident reporting, not transparency marking) and a different mechanism. The rule blocks a *story*, not a *theme* (the Issue 21 AISI precedent). Stated here so Phase 5 does not have to infer it |
| **Oracle (QT1)** | **Clear.** Issue 20 anchored Visa's 7% cut. Same theme — restructuring against AI capex — different company, different event, different mechanism (managers naming individuals). Distinct story |
| **Zoom (QT2)** | **Clear.** Nothing adjacent in Issues 20–21 |
| **Microsoft (Editorial Moment)** | **Clear.** Issue 21's QT1 was Microsoft token budgets — a different story, and the Editorial Moment is not an anchor slot. Microsoft appears exactly once in this issue |
| **Google (Week at a Glance)** | **Clear.** Issue 21's QT2 covered the DeepMind leadership split. The WARN notice is a different event, in a non-anchor slot |
| **27 July UK multi-bank failure** | **Blocked from anchoring.** No root cause published — confirmed again this window. On the Radar, one line |
| **Visa AI Financial Assistant** | Not an anchor by placement. See §5.7 |

### 5.7 Risk — Visa, and the retired thread

**Visa's AI Financial Assistant is the pool's closest story to the reader's own patch and it does not anchor.** Three independent reasons: the announcement is **14 July**, outside the window; the in-window peg (the US pilot opening in August) is **unverified**, and the spec's "when in doubt, demote" rule governs; and Visa anchored in both of the previous two issues, so anchoring it again on a thin peg would read as recycling whatever the letter of the rule says. **Placement: Other News, one sentence, conditional on Phase 3 verifying the pilot has actually opened. If unverified, cut entirely.** This is Visa's only appearance in the issue.

**Binding prohibitions carried from the retired thread:**
- The **finance-and-banking layoff aggregate (65,532 across 17 companies, HSBC 20,000, Citi, ANZ 3,500)** does **not appear anywhere in this issue, in any section, in any form.** Phase 1 flagged it as aggregator-and-secondary-sourced only; it is the exact class of figure that retired the previous thread.
- The **2026 tech layoffs tracker (205,832 / 322 events)** may appear as **one Week at a Glance line only**, explicitly characterised as a tracker's count and attributed to the tracker. It is not charted, not put in a stat tile, and not used as the Editorial Moment number.
- No sector-pattern article, quick take or feature.

### 5.8 Risk — binding facts carried forward

Verified unchanged this window and binding on Phase 4:

- **27 July UK multi-bank degradation.** No shared root cause has ever been published — no Pay.UK report, no Lloyds post-incident publication, no regulator statement. Simultaneity is documented; causation is not, and must not be upgraded. **Faster Payments the rail did not fail.** The press-reported attribution to Lloyds' connection into the rail is reporting, not a published finding, and must not be hardened.
- **The "July 2026 AWS mega-outage" is unverified and is not resurrected.** Phase 1 confirms no primary or major-outlet source surfaced in any beat query. Fifth consecutive demotion. It does not appear.
- **AWS ME-CENTRAL-1 / ME-SOUTH-1** remain open with AWS's last public update dated **30 April 2026**. The dashboard could not be re-verified this week. Say nothing stronger, and do not conflate with the standing us-east-1 concentration watch.
- **The agentic-payments deep-dive cluster stays retired.**

### 5.9 Risk — soft breadth guardrail

The brief notes any concern is eligible and asks for documentation. Last three leads: Wider engineering landscape (21) · Management & teams (20) · Operating at scale (19). **Ways of working is the one concern absent from the window**, and the Lead takes it. Rolling-4 leads become all four distinct concerns — the guardrail asks for three of four and gets four. Not the reason SAFE leads (§3 is), but it is a clean corroboration rather than a conflict, and it is worth recording that no tension existed between the breadth guardrail and the substance ranking this week.

---

## 6. Balance rules — compliance ledger

Each gate worked explicitly.

**6.1 Audience-fit gate (v3.2).** Lead: can the organisation account for an agent's actions inside four business days, and who owns that — no system operation required. QT1: an org-shape and capacity conversation. QT2: vendor assurance and patch policy — the closest call, worked in full at §5.2. **All three PASS.** Two candidates were **rejected on this gate** and are recorded at §7: the Shai-Hulud npm worm (the spec's own worked rejection, repeated exactly) and the Black Hat agent-framework runtime research at anchor weight (framework internals are IC-level; only the ownership question survives, sized to a Week at a Glance item).

**6.2 Operational-concern lead test (v3.4).** Lead connects to *Ways of working* (incident-response culture, observability as practice) with a clear what-changes: agent incident reporting acquires deadlines, which makes it a logging and on-call design requirement rather than a policy statement. Not a tool release. **PASS.**

**6.3 News-event Lead test (v1.32).** A published RFC from a standards body with 120+ named organisations is a research/industry publication event, which the spec names as qualifying. The event is 4 August, four days pre-window, qualifying under the **new-in-window traction exception (b)** with in-window coverage dated 11–12 August. Framing conditions and the failure contingency are binding at §3.1. **PASS, conditional.**

**6.4 Anchor balance (v1.32) — ≥2 of 3 news events.** Lead, QT1 and QT2 are all news events. **3 of 3.** PASS above the floor. No analysis anchor was needed this week, which is why the two strongest essays (Allan, Kapani) sit in non-anchor slots.

**6.5 Within-issue concern diversity (v1.31) — at most one anchor per concern, ≥2 concerns.** Lead = Ways of working · QT1 = Management & teams · QT2 = Operating at scale. **Three concerns, one anchor each.** PASS at the preferred level, not the minimum.

**6.6 Soft breadth guardrail (v3.4).** Rolling 4 becomes Ways of working (22) · Wider engineering landscape (21) · Management & teams (20) · Operating at scale (19) — **four distinct concerns**. PASS. See §5.9.

**6.7 Lead sanity check (v3.1).** Top 3 ranked across all concerns: (1) SAFE, (2) Oracle, (3) Zoom. Lead is ranked first. **PASS**, no exception needed.

**6.8 AI-substrate ceiling — reader-experience count (v1.32).** **3 of 6**, cap 4. PASS with headroom, and PASS at 4 of 6 even under the adverse In Practice reclassification. Full table and both classification rulings at §5.3.

**6.9 Long-form variety (v1.35).** **1 AI-primary of 3**, cap 1. Three distinct aspects of engineering leadership, floor 2. **PASS.** Table at §5.3.

**6.10 No-repeat-featured-anchor (v1.31).** No Issue 20 or Issue 21 anchor anchors this issue. Six named rulings at §5.6. **PASS.**

**6.11 Adjacent-source rule (v1.32).** Featured sections in reading order:

| Order | Section | Source / outlet |
|---|---|---|
| 1 | Editorial Moment | Reuters |
| 2 | Lead | Linux Foundation RFC / Cybersecurity Dive / Axios |
| 3 | QT1 | Business Insider (via Yahoo Finance / Quartz) |
| 4 | QT2 | SecurityWeek |
| 5 | In Practice | LeadDev (Rungta) |
| 6 | Outside In | Duolingo Blog |
| 7 | The Leadership Read | lethain.com (Larson) |

No two consecutive featured sections share a source or outlet. **PASS.** Note that In Practice → Outside In and Outside In → Leadership Read are not adjacent in the rendered issue either (Other News and Platform Updates sit between the first pair, On the Radar between the second) — the sources differ regardless.

**6.12 Source diversity (v2.0) — max 2 sections per publication.**

| Source | Sections | Status |
|---|---|---|
| **LeadDev** | In Practice (Rungta) + Week at a Glance (Kapani) | **AT CAP.** No third LeadDev citation anywhere — including Recommended Reading. **The LeadDev Engineering Leadership Report 2026 must not be added to Recommended Reading**; attribute the survey figures to LeadDev inside the Week at a Glance item and stop there |
| **lethain.com** | The Leadership Read | 1. "Decisions not dates" is excluded entirely (§5.4) |
| InfoQ | Other News (Allan) | 1 |
| Reuters | Editorial Moment | 1 |
| SecurityWeek | QT2 | 1 |
| Business Insider / Yahoo / Quartz | QT1 | 1 |
| Duolingo Blog | Outside In | 1 |
| Cybersecurity Dive / Axios | Lead | 1 each |

**PASS.** One source at the cap, flagged.

**6.13 Urgency anchor gate (v3.2).** Lead `decide_this_month` (high impact — a proposed four-business-day clock with 120+ organisations behind it); QT1 `decide_this_month` (high impact); QT2 `act_this_week`. **No `general_awareness` story anchors.** Six candidates were rejected on this gate and are recorded at §7 — including the pool's single best non-AI story (Microsoft's China retreat), which is why it gets a real placement in the Editorial Moment rather than a burial.

**6.14 "Worth reading" test (v2.0).** Lead: an industry body putting a four-day clock on agent incidents, with the two largest model vendors outside it. QT1: managers being asked to name the people, while capital spending nearly tripled. QT2: the fixes shipped in June and the explanation came in August. All three carry tension. **PASS.**

**6.15 Section spread (v1.32) — no two long-form sections adjacent.** In Practice at position 11 · Outside In at position 15 · Leadership Read at position 18. Separated by Other News + Platform Updates, and by On the Radar. **PASS.** All three long-form sections run this week; none is squeezed.

**6.16 Bank-regulator scope-conditional test (v1.32).** **Not engaged.** No bank-regulator decision appears in an anchor or featured slot. The GCC open-finance piece is omitted entirely (§7); the ECB deadline is a single On the Radar line carried from Issue 21, where it was the worked negative control. Recorded so Phase 5 sees the test was considered rather than skipped.

**6.17 In Practice three required qualities (v3.5).** Rungta: (1) named operator at a named org — engineering manager, YouTube financial systems; (2) journey not framework — first-person account of a change he made and why; (3) technical content at implication level — the transferable artefact is a decision rule about where a manager's judgement comes from, not the automation itself. **PASS on all three.** Anti-overlap with the Leadership Read (different author, different outlet): **PASS.** No-recycle against `in_practice_history`: **PASS**, never used.

**6.18 Outside In rotation (v2.2 / v2.3).** Duolingo does not appear in `outside_in_history` and is not `last_outside_in_company` (Klarna). Sector category (3) consumer tech at scale; across the rolling 4 the section draws Klarna (banking/fintech), Shopify (consumer tech), Kent Beck (author), Duolingo (consumer tech) — **two or more categories, no category anchoring more than 2 of 4.** Substitution test: *"A large engineering org built one shared platform so teams stopped rebuilding agent infrastructure, cutting creation time from weeks to minutes."* Still meaningful. **PASS.** Anti-overlap with the Leadership Read: different companies. **PASS.**

---

## 7. Rejected for the Lead slot — with reasons

Ranked roughly by how close each came.

1. **Oracle's planned August round** *(Business Insider via Yahoo/Quartz, 11–12 Aug)* — the strongest runner-up, promoted to QT1. Not the Lead because the in-window news element is **reported planning unconfirmed by Oracle**, and the Issue 21 precedent (Mechanize: "cannot anchor on a maybe") cuts directly against leading on it. The verified spine — 21,000 roles gone, capex $21.2bn → $55.7bn, OCI +77% — is Oracle's own fiscal-2026 reporting and is *context*, not a this-week event. Also medium UK/ME relevance against the Lead's high. **Standing contingency: becomes the Lead if the SAFE traction exception fails (§3.1).**
2. **Zoom "Zoomsday"** *(SecurityWeek, 11 Aug)* — promoted to QT2. The only `act_this_week` candidate that clears the audience-fit gate, but the leadership conversation it creates is narrower than the Lead's, and its most striking claim is vendor-sourced and unverified. Full ruling at §5.2.
3. **Microsoft's China retreat** *(Reuters, 13 Aug)* — the best non-AI story in the pool and, on narrative tension and source quality (a Reuters exclusive built from corporate filings), a genuine contender. **Fails the urgency anchor gate**: `general_awareness`, no decision inside 30 days. Rejected on that alone, honestly and reluctantly. → **Editorial Moment, "Number of the week"**, which is a real placement, not a burial. Its only appearance in the issue.
4. **LeadDev's 2026 leadership survey** *(LeadDev / Kapani, 10 Aug)* — in window, high UK/ME relevance, genuinely chartable. Barred from the Lead by the **news-event test** (a write-up of LeadDev's own June report is analysis, not an event), and the anchor-balance allowance for one analysis anchor was not needed because three news events were available. → Week at a Glance, expanded to three sentences with the 20% → 35% figure.
5. **Alasdair Allan on engineering progression** *(InfoQ, 13 Aug)* — the week's most substantial argued piece. Barred from the Lead by the news-event test (a QCon-talk interview). Blocked from the Leadership Read by v1.35, being AI-primary alongside an AI-primary Outside In. Its research citations are all second-hand. → Other News, one sentence.
6. **Visa's AI Financial Assistant** *(Visa IR, 14 Jul)* — three independent blocks. Full ruling at §5.7. → Other News, conditional.
7. **Cognition in talks at $40bn** *(TechCrunch, 12 Aug)* — `general_awareness`, and reported talks rather than a closed round. Cannot anchor on a maybe. The v3.0 Light-signs list names the single-source funding number as a weak quick take by shape. → Mid-issue accent, mini-highlight, framed as reported talks.
8. **Shai-Hulud npm worm** *(Datadog Security Labs, 4 Aug, spreading in window)* — **rejected on the audience-fit gate.** This is the spec's own worked rejection (Issue 10, Mini Shai-Hulud) recurring almost verbatim: the useful takeaway requires running the build pipeline. → Week at a Glance, Action Required, one line, framed as a credential-scope and ownership call.
9. **Black Hat agent-framework runtime research** *(Redmond Magazine, 5 Aug, recap coverage in window)* — the framework internals (LangChain, CrewAI, AutoGen, Semantic Kernel) are IC-level and fail the audience-fit gate at anchor weight; only the ownership question generalises. It is also the Lead's natural companion and would have duplicated it. → Week at a Glance, two sentences.
10. **GitHub Copilot credit-pool reversion** *(GitHub Blog, 27 Apr; effective 1 Sep)* — a real budget conversation and `decide_this_month`, but the primary announcement is 27 April and **no in-window peg could be verified.** The strict date filter governs. → Platform Updates, one row.
11. **2026 tech layoffs tracker** *(SkillSyncer, 13 Aug)* — aggregator, `general_awareness`, low narrative tension. Constrained by §5.7. → Week at a Glance, Watching, one line, attributed to the tracker.
12. **Finance & banking layoff aggregate** *(LayoffHedge, 13 Aug)* — **excluded from the issue entirely.** Unverified aggregate of exactly the class that retired the prior thread at Issue 21. Not demoted; excluded.
13. **27 July UK multi-bank failure** — blocked by v1.31 (anchored in Issues 20–21) and independently by the absence of any published root cause. → On the Radar, one line.
14. **AWS ME-CENTRAL-1 / ME-SOUTH-1** — no change since 30 April. → On the Radar, standing watch.
15. **Perforce 2026 platform engineering report** *(InfoQ, 4 Aug)* — out of window, vendor-sponsored, `general_awareness`. → Other News fallback or Recommended Reading, attributed to Perforce and characterised as vendor-sponsored.
16. **OpenAI pausing Astra work** *(Tech Startups roundup, 10 Aug)* — single-sourced to a daily roundup. → Other News, conditional on primary sourcing; otherwise cut.
17. **CEVA Logistics / Uber Freight** *(Tech Startups roundup, 13 Aug)* — roundup-sourced, low UK/ME relevance, weak on worth-reading. → Other News, conditional on primary sourcing; otherwise cut.
18. **Google Washington WARN notice** *(GeekWire, 5 Aug)* — pre-window, low UK/ME relevance, `general_awareness`. → Week at a Glance, with the 5 August notice date stated.
19. **Loyalty Newswire roundup** *(The Wise Marketer, 10 Aug)* — the v1.27 loyalty sweep result. Real but individually below article weight; wider engineering news is explicitly not crowded out for it. → Week at a Glance, Watching, one line.
20. **GCC banks modernisation** *(Gulf Times, 5 Aug)* — **omitted entirely.** Out of window, vendor-led with a vendor CMO as the only named source, no figures. Fails the worth-reading test. Recorded so the ME sweep is visible in the audit trail.
21. **Moreau, "Product is the new bottleneck"** *(blog4ems, 2 Aug)* — out of window; structurally normative, which the v3.5 disqualifiers rule out for In Practice; and the author already carried both Issue 15 slots. **Omitted.**
22. **Ludicity** · **Canva / Giglio** · **Larson "Decisions not dates"** — Leadership Read rejections, full reasons at §5.4. Ludicity → Recommended Reading. Canva and the second Larson piece are not used.
23. **Duolingo** and **Rungta** — essays, barred from the Lead by the news-event test; placed at Outside In and In Practice respectively.

---

## 8. Section-by-section plan

Order follows the v1.32 default: news block → In Practice → Other News → Platform Updates → Outside In → On the Radar → Leadership Read.

**Cover.** `.cover-lead-stat` variant. Stat: **4 days** — *"the window a proposed industry scheme would give members to file a confidential report after an AI agent security incident."* Authorised alternative if Phase 3 prefers a harder number and can pin it to Oracle's 10-K: **$55.7bn**. Reading time calculated from the final word count at 200 wpm (~16 min at projection). Archive bar shows the last five issues with Issue 22 highlighted teal. Vol. II markers per v1.31 — identity strap with the teal pill badge, cover tagline, bordered week badge, footer pill. **No editor's note** (Issue 12 only).

**Foreword.** 50–80 words, drop cap, one editorial point. Lead on what happened. **Must not** frame the week relative to AI's noisiness or quietness (v2.9), must not list stories, must not use "meanwhile" / "elsewhere" / "also this week".

**P0 status card.** None. `p0_active` is empty and the AWS ME regions item is carried as a standing On the Radar line rather than promoted to a P0 card — its state has not changed since 30 April, and a status card implying live movement would overstate it.

**Editorial Moment — "Number of the week".** **One in three.** Of roughly 1,000 top engineers Microsoft offered overseas transfers in 2024, about a third accepted. Why it matters, one line: relocating a talent pool is not the same as retaining one, and two-thirds declining is the planning assumption for anyone moving engineering capacity across borders. `.stats-tile` treatment. Context sentence must carry the Reuters attribution and that the figure comes from a 13 August exclusive built on corporate filings.

*Craft note, flagged:* this is the third consecutive "number of the week". Phase 3 is authorised to switch to **"Quote of the week"** using Paul Williams (Bloomberg) from the LeadDev survey — *the manager's core value, vision, consensus, growing the team, has not changed* — if it judges the slot is going mechanical. Either variant stays **non-AI**, which the count at §5.3 depends on. If the quote variant is taken, Phase 3 must verify the wording verbatim and the Microsoft figure moves to a one-line Other News item instead.

**Week at a Glance.** 6 items across three tiers.

- *Action Required* — **Shai-Hulud npm worm.** Still spreading through the keyv / cacheable / flat-cache family; a credential-stealing preinstall hook targeting build-machine tokens. One line, framed as scope and ownership: whether credentials on build machines are being treated as compromised and who owns that call. **No remediation steps.**
- *Worth Knowing* — **LeadDev's 2026 leadership survey**, three sentences: 37% of engineering leaders doing more hands-on technical work than in 2025, with engineering managers specifically moving from 20% to 35%. Attribute to LeadDev's Engineering Leadership Report 2026 (600+ leaders, published June 2026) and state that the report predates this week's write-up. **LeadDev's second and final section.**
- *Worth Knowing* — **Black Hat agent-runtime research**, two sentences: injected content can hijack agents through memory stores, planning loops and serialisation layers even where the agent has no direct tool access. Keep at the ownership level — who in the organisation owns the agent threat model. **Do not list framework names in prose beyond a single parenthetical.**
- *Worth Knowing* — **Google WARN notice**: 52 roles in Washington state effective 5 October, covering software engineering managers and senior engineers; Google describes it as a team-level reorganisation rather than a company-wide round. **State the 5 August notice date.**
- *Watching* — **2026 tech layoffs pass the 2025 full-year total.** One line. Attributed to the tracker and characterised as a tracker's count of publicly reported events. Constrained by §5.7.
- *Watching* — **The loyalty patch**: Revolut's Australian ADI licence, and Miles & More / Pointspay putting earn-and-redeem into the checkout payment method. One line. Revolut appears here as a licensing item only; it remains excluded from Outside In.

**Section breather.**

**Lead — SAFE.** ~400 words. Opener: **summary-first**. h3 subheadings every one to two paragraphs. Content and binding constraints at §3.2. Visual: **`.process-flow` — the five-step reporting clock** (notify → 72-hour customer notice → four-business-day confidential report → 30-day preliminary public report → 90-day remediation update). **REAL DIAGRAM #1.** Jargon Watch candidate: **SAFE / Shared AI Findings Exchange** — the article's central named thing. Inline glosses: *Open Secure AI Alliance*, *RFC*, *near-miss*. Section label: **default teal** (Ways of working). Optional single-sentence cross-issue throughline: Issue 21 covered a regulator putting transparency obligations on AI output; this is the industry proposing its own clock where no regulator has set one. **One sentence, not a frame.**

**Quick Takes — layout QT-A (equal grid).** Comparable weight, strong anchor stat each. Each ends with a bold **"The takeaway"** line stating what has changed — not an instruction.

- **QT1 — Oracle.** ~250 words. Header bar **orange** (Management & teams). Opener: **stat-first**. Anchor stat: **$55.7bn** capital spending, against 21,000 roles gone. Content: a further reduction planned before the fiscal second quarter opens on 1 September, with managers asked to identify affected employees and some teams facing double-digit percentage cuts; roughly 21,000 roles (about 13% of headcount) left between May 2025 and May 2026; capex rose from $21.2bn to $55.7bn; OCI grew 77%. The leadership conversation is what it means to push the naming decision onto line managers rather than through an HR process. Visual: **inline SVG two-series or paired-bar chart — capex against headcount. REAL DIAGRAM #2.** Jargon: *capex*, *OCI*, *fiscal second quarter* — inline glosses, one clause each.
  - **Binding:** the August round is **reported and unconfirmed by Oracle** and must be framed that way in every sentence that touches it. Oracle declined to comment — say so. The fiscal figures are the verified spine and must be pinned to Oracle's own reporting by Phase 3 before either appears in the chart. **If the chart figures cannot be pinned, substitute a `.stats-tile` on the single pinnable number** and do not chart unverified data.
- **QT2 — Zoom.** ~230 words. Header bar **red** — `.section-label.alert` is permitted here under the v1.32 guardrail on the active-upgrade-window condition (fixed builds are available and estates are not yet on them). If Phase 4 judges the absence of reported in-the-wild exploitation makes red overstated, **default teal is the authorised fallback.** Opener: **narrative-first** — fixes in June and July, disclosure in August. Content and the full set of binding constraints at §5.2. Visual: compact disclosure timeline (client fixes shipped June/July → public disclosure 11 August) or a `.stats-tile`; Phase 3 picks. Jargon: *zero-click* and *remote code execution* need one clause each and nothing more.

**Section breather.**

**Mid-issue accent — `.mid-accent-highlight`.** Cognition reported in talks at $40bn or more, three months after raising at $26bn, with Devin's annualised run rate roughly doubling toward $1bn and Goldman Sachs among named customers. ~55 words. **Binding: reported talks, not a closed round — the framing stays conditional throughout.** The point is supplier concentration: a coding-agent vendor doubling revenue in a quarter with a tier-one bank named as a customer moves agent procurement from an experiment line to a concentration question. **This is Cognition's only appearance — it does not also run in Other News.**

**`<hr class="feature-break">`**

**In Practice — Jay Rungta, "Engineering managers who build are pulling ahead".** Theme label: *Making technical decisions when you're not the SME*. **No week count.** No evergreen sub-label (published 13 August, in the 30-day window). Author card: Jay Rungta · Engineering Manager, YouTube · August 2026. Opener: **quote-first**. ~420 words.

Substance floor — all three elements required: **(1) the named claim** — prototyping speed has collapsed the old speed-versus-quality trade-off, and the durable managerial contribution is taste, the ability to tell good work from plausible-looking output; **(2) the concrete mechanism** — he leads YouTube's financial systems team handling billions in music royalties and streaming revenue, and describes automating workflows handling hundreds of millions of dollars in annual royalty payouts, which is what puts his judgement claim on real ground rather than preference; **(3) the takeaway without clicking** — hands-on work as a judgement-preserving activity rather than a failure to delegate, and what that changes about how a director reads a manager who is still close to the code.

Visual: **`.compare-table` — when a manager builds versus when they delegate, 3 rows. REAL DIAGRAM #3.** **Binding: the distinction must be Rungta's own, drawn from the piece. If the piece does not support a clean two-column split, substitute the pulled quote treatment and do not invent his framework** (v3.6 attribution fidelity). Quote candidates: *"the cost of doing it the right way has never been lower"* and *"you will never be able to type the many layers of your brain"* — **one quote, one slot; pick one for the opener and, if the second is used, it may appear only once elsewhere in this section.** Jargon: *taste* is used as a named concept and needs glossing; *prototyping* needs one clause.

**Note for Phase 3:** summarise the **journey** — what he changed and what he observed — not any advice layered on top. That is what keeps it inside the v3.5 "journey not framework" quality.

**Other News This Week.** 3–4 items, one sentence plus link each.

- **Alasdair Allan on engineering progression** (InfoQ, 13 Aug). One sentence on the entry-rung argument: AI raises the apparent floor of what people can produce while removing the work that built the judgement to evaluate it. **Do not restate the five research findings** — they are second-hand and would need pinning.
- **Visa's AI Financial Assistant** — *conditional*. One sentence, only if Phase 3 verifies the US pilot has actually opened. Must state the 14 July announcement date. **If unverified, cut entirely — do not relocate to Week at a Glance as a hedge.**
- **OpenAI pausing internal work on Astra** — *conditional*. Only if Phase 3 finds the primary OpenAI statement or major-outlet reporting. **If not, cut entirely.**
- **CEVA Logistics / Uber Freight** — *conditional*. Only with primary or major-outlet sourcing for at least one of the two incidents. **If not, cut entirely.**
- *Fallback:* if fewer than three items survive, add the **Perforce 2026 platform engineering report** (attributed to Perforce, characterised as vendor-sponsored, dated 4 August). **No item may appear in both Other News and Week at a Glance.**

**Platform Updates.** **1 row.** GitHub Copilot AI Credits — status: *scheduled, 1 September*. What changed: the promotional credit pools carried through June, July and August revert, taking Business organisations from 3,000 to 1,900 credits per user per month and Enterprise from 7,000 to 3,900, at unchanged seat prices, with usage above the pool enabled by default rather than opt-in. **Binding: state that the change was announced on 27 April 2026 and that the underlying move to usage-based billing happened on 1 June. This is not presented as this week's news.**

**`<hr class="feature-break">`**

**Outside In — Duolingo. Format A (full feature), position 15.** ~420 words. Opener: **stat-first** — see the flagged opener collision at §9.1. Author card: Guadalupe Aliseda-Canton · Duolingo · August 2026.

Content: three organisational problems — agent infrastructure that could not be reused across projects, agents rebuilt for each surface they appeared on (Slack, CLI, internal sites, workflows), and no standard approach to orchestration, evaluation and observability. The answer was a registry where a developer defines an agent once — system prompt, required tools, workspace access — with a workflow wrapper handling execution. Agent creation went from weeks to roughly ten minutes, and every agent inherits durability, observability, orchestration and evaluation by default. Agents now fix CI failures, address code review comments and drive a release-manager bot that investigates crashes.

The transferable lesson, for the `.oi-callout`: **the durable investment is the shared execution and evaluation layer the org owns, not the individual agents built on top of it** — which makes agent adoption a platform funding decision rather than a tooling one.

Visual: **before/after panel** (weeks → ~10 minutes) with the four inherited capabilities. Not a compare-table — one is already in use at In Practice.

**Agent-terminology precision:** these are internal agents with tool access running inside a platform-owned execution layer, not autonomous production agents with external action authority. Name that on first use, and note it is a different end of the spectrum from the Lead's. Jargon: *agent registry*, *orchestration*, *evaluation*; **Temporal needs glossing** under v3.7 if it is named at all — Phase 3 should consider whether it can be described generically as a workflow engine instead, since the vendor name adds nothing for this reader.

**Rotation checks:** Duolingo is not in `outside_in_history`, is not `last_outside_in_company`, and keeps the v2.3 sector rotation clean. Substitution test passes. Full ledger at §6.18.

**On the Radar.** Timeline treatment, deadlines first.

- **31 October 2026** — ECB deadline for the 110 banks it directly supervises to submit AI cyber-threat action plans. One line. Carried from Issue 21, where it was the worked negative control on the regulator scope-conditional test.
- **2 December 2026** — EU AI Act transitional backstop: generative systems already on the market must meet the machine-readable marking and detection obligation. One line. **Binding: this is a date reference only. Article 50 was Issue 21's Lead and is blocked from anchoring; do not re-explain the regime.**
- **AWS ME-CENTRAL-1 / ME-SOUTH-1** — standing watch. Both open, AWS's last public update dated 30 April 2026, dashboard not re-verified this week. **Say nothing stronger.**
- **27 July UK multi-bank degradation** — one line, open item, no published cause after eighteen days. Binding facts at §5.8.

**`<hr class="feature-break">`**

**The Leadership Read — Will Larson, "Middle management roles were also a trap".** Navy `.mgmt-section`, drop cap, 500 words. Opener: **summary-first** — see the flagged collision at §9.1. Author card: Will Larson · lethain.com · 8 August 2026.

Substance floor — all three required: **(1) the named argument** — the three functions a middle manager performs (balancing pressures, defining organisational process, competing for resources) set against the three skills Larson says make an effective executive (developing domain expertise, driving execution, translating both into a culture that outlasts you), with the claim that the executive skills are more easily practised as a line manager; **(2) at least two concrete mechanisms** — the middle manager who goes deep on domain expertise is told they are neglecting stakeholder management, and the one who drives execution closely is accused of micromanaging; **(3) the takeaway without clicking** — a negative selection effect, in which the filters that produce good middle managers select against the line managers most likely to become excellent executives.

Visual: the mandated centred `.pull-quote` blockquote card on the negative-selection line, which is the section's own visual anchor and satisfies the per-section floor. **A compare-table of the three functions against the three skills is available and would be strong** — Phase 3 may add it if it keeps the counted visual budget at or below 6 (§9.2).

**Concept of the week candidate: *span of control*** — a management-craft term the section leans on and the year-one EM from a non-technical route may not know cold. Also gloss *Tech Lead Manager* and the *line manager / middle manager* distinction, which is load-bearing for the whole argument.

**End with the discussion prompt** — *"This could be worth talking about:"* plus one specific question anchored in the negative-selection claim. Not an action item.

**Recommended Reading.** Linked list, no items given article treatment.

- Ludicity, *"AI mania is eviscerating global decision-making"* (18 July) — carried as reading, not as the Leadership Read.
- The Linux Foundation SAFE RFC itself.
- *"Journey of a concept: span of control"*, Journal of Management History — the long view behind the week's flattening stories. **Phase 3 must confirm the abstract is publicly readable before linking; if it is paywalled, drop it.**
- The Perforce 2026 Platform Engineering Report, if not used in Other News.

**Binding: no LeadDev link here** (§6.12, at cap). **No second lethain link here** (§5.4).

**Down the Rabbit Hole. Omitted this issue.** `last_rabbit_hole_date` is 2026-08-07 — it ran last week, and the 1–2 issue cadence permits skipping. Both candidates are weak on verification: the span-of-control paper is a paywalled abstract, and the backup long-read has an unconfirmed publication date. The paper is better used as a Recommended Reading line. **Phase 3 may reinstate it as a rabbit hole (~55 words) if the abstract verifies and the word budget allows — but not both there and in Recommended Reading.**

**Footer.** Archive bar, last five issues, Issue 22 highlighted teal. Vol. II pill badge. **No "returns next week" note is needed** — every recurring section runs this issue except Down the Rabbit Hole, which is on cadence rather than omitted for thinness.

---

## 9. Craft allocations and cautions

### 9.1 Article openers — two flagged, deliberate collisions

Six article sections, four opener styles. Two collisions are arithmetically unavoidable; both are placed at maximum separation.

| Section | Position | Opener |
|---|---|---|
| Lead | 7 | Summary-first |
| QT1 | 8 | Stat-first |
| QT2 | 8 | Narrative-first |
| In Practice | 11 | Quote-first |
| Outside In | 15 | Stat-first — **flagged collision with QT1** |
| The Leadership Read | 18 | Summary-first — **flagged collision with the Lead** |

Both pairs are separated by at least four intervening sections. Documented so Phase 5 records deliberate calls rather than drift.

### 9.2 Visual budget (v1.30)

**Counted visuals: 6.** Target is 4–6.

1. Cover lead-stat (4 days).
2. **Lead — `.process-flow`, the five-step reporting clock. REAL DIAGRAM #1.**
3. **QT1 — inline SVG chart, Oracle capex against headcount. REAL DIAGRAM #2.** *(Conditional on pinning; substitution specified at §8.)*
4. QT2 — compact disclosure timeline or `.stats-tile`.
5. **In Practice — `.compare-table`, build vs delegate. REAL DIAGRAM #3.** *(Conditional on the distinction being Rungta's own; substitution at §8.)*
6. Outside In — before/after panel (weeks → ~10 minutes, four inherited capabilities).

**The Leadership Read's centred `.pull-quote` blockquote card is mandated by the Leadership Read rules for every issue.** It satisfies that section's per-section floor and is treated as section-native rather than a counted budget item. **This is stated explicitly so Phase 5 can audit the reasoning rather than infer it:** with all six major sections running plus the cover lead-stat, the per-section floor mechanically requires seven visual elements against a budget ceiling of six. That is an arithmetic conflict inside the spec, not a drift, and it is resolved by not double-counting a component the Leadership Read rules already mandate. If Phase 3 adds the Larson compare-table, it must drop one of items 4 or 6 to stay at six counted.

**Real diagrams: three**, against a floor of 1–2. Deliberately varied — one process flow, one SVG chart, one table, one panel, one timeline. **Items 2 and 5 must survive any trim.** `.pq-bar` is capped at once per issue and is **not used**; the In Practice quote is handled inside the section rather than as a full-width band, leaving the band unspent.

### 9.3 Components (standard weekly cap 3–5)

Rotating components this issue: **(1) `.process-flow`, (2) `.compare-table`, (3) inline SVG chart, (4) mid-issue accent mini-highlight.** **Four, inside the cap.** Jargon Watch, Concept of the week, In Practice and author cards are off-cap. Stats tiles, `.oi-callout`, before/after panels and the Platform Updates table are section-native primitives. Phase 3 confirms the final count.

### 9.4 Prose rules to hold

- **Epistemic reframing: hard cap of 2, structural test not lexical.** This material invites it badly — *"the question is not whether agents fail, it's whether you can report it"*, *"the real story isn't the vulnerability"*, *"less a layoff than a re-shaping"*. Budget two at most across the whole issue and scan for the **structure** (does this sentence negate one framing to introduce another?), not for the six literal patterns. Issue 21's Phase 4 lexical scan returned zero while shipping violations; do not repeat that.
- **Third-person editorial voice.** No "the reader", "your team", "your firm", "you should", no rhetorical questions to the audience.
- **Readability (v1.36).** Break any sentence past roughly 30 words or three clauses with a parenthetical.
- **One quote, one slot (v3.6).** Boitano's flight-recorder line belongs to the Lead and appears nowhere else. Rungta's two candidate lines: one for the opener, at most one more inside In Practice, neither anywhere else. Larson's negative-selection line belongs to the Leadership Read blockquote.
- **Attribution fidelity (v3.6).** Larson's terms are his — *middle management*, *line manager*, *negative selection*. Rungta's term is *taste*. Do not invent labels and attribute them.
- **Agent-terminology precision (v3.0).** Three sections use "agents" for three different things: the Lead means production agents with action authority against third-party systems; Outside In means internal agents inside a platform-owned execution layer; the Black Hat Week at a Glance item means agent framework runtimes. Name the end of the spectrum on first use in each.
- **Palette guardrail (v1.32).** Lead label **default teal** (Ways of working). QT1 **orange** (Management & teams). QT2 **red permitted** on the active-upgrade-window condition, teal authorised as fallback (§8). Outside In **orange**. **Structural landmarks — Week at a Glance, Foreword, In Practice header — always default teal regardless of content.**
- **No action items anywhere**, including the In Practice "What to try" line and the Leadership Read discussion prompt, both of which inform rather than instruct.

### 9.5 Jargon to gloss

**Must gloss:** *SAFE / Shared AI Findings Exchange* (Lead — **Jargon Watch candidate**, the article's central named thing), *Open Secure AI Alliance*, *RFC*, *near-miss*; *capex*, *OCI*, *fiscal second quarter* (QT1, one clause each); *zero-click*, *remote code execution* (QT2, one clause each, nothing more); *taste* as a named concept, *prototyping* (In Practice); *agent registry*, *orchestration*, *evaluation*, and *Temporal* if named at all (Outside In); *span of control* (Leadership Read — **Concept of the week candidate**), *Tech Lead Manager*, *line manager vs middle manager*.

**Do not stack more than two sidebar boxes** — one Jargon Watch (SAFE) and one Concept of the week (span of control) is the intended allocation, and they sit at opposite ends of the issue.

---

## 10. Conditional items — Phase 3 must resolve or drop

1. **SAFE in-window traction (HIGHEST RISK).** Phase 3 must pin the 120-organisation count and at least one substantive development to a dated in-window source. **If it cannot, execute the swap at §3.1 — Oracle to Lead, SAFE to QT1 — and report it.** Phase 4 may not make this call.
2. **Oracle fiscal figures.** $21.2bn → $55.7bn, −21,000 / −13%, OCI +77% must be pinned to Oracle's own fiscal-2026 reporting before any of them is charted. **If unpinnable, no chart** — substitute a stats tile on whatever single figure verifies.
3. **Zoom discovery claim.** The "under 24 hours, fewer than 20 prompts" figure is the finding vendor's and unverified. Attribute in one sentence or cut. **Never asserted.**
4. **Visa pilot.** Verify the US pilot has opened. If not, cut the item entirely.
5. **OpenAI Astra** and **CEVA / Uber Freight.** Both single-sourced to a daily roundup. Find primary or major-outlet sourcing, or cut. Do not hedge into Week at a Glance.
6. **In Practice compare-table.** Only if the build-vs-delegate distinction is genuinely Rungta's. Otherwise substitute.
7. **Span-of-control paper.** Confirm the abstract is publicly readable before linking anywhere.
8. **Editorial Moment variant.** If Phase 3 takes the "Quote of the week" alternative, verify Williams's wording verbatim and relocate the Microsoft figure per §8.

**Whole-source rule (v1.37) applies.** Phase 3 will have the Linux Foundation RFC, Oracle's fiscal reporting and Zoom's bulletin open. Read each for all material news it contains, not only the figure being pinned, and route anything material and unrecorded back here for a slot decision.

---

## 11. Word-budget contingency

Projection ~3,295 against 2,600–3,700. Both margins are comfortable, so neither cut nor pad is expected.

**If the draft exceeds 3,700**, apply the v1.38 cut order: (1) shorten Outside In, (2) drop the mid-issue accent, (3) demote the weakest Other News items, (4) tighten the Lead to 400, (5) shorten the Leadership Read toward its 400-word floor — **not below**. ***In Practice* is not a cut lever** — it either earns its 300–450 words or is omitted entirely.

**If the draft falls short of 2,600**, do not pad. In order: (1) expand In Practice to 450 and Outside In to 450; (2) reinstate Down the Rabbit Hole (~55) if the abstract verifies; (3) add the surviving conditional Other News items; (4) expand the Leadership Read toward 600, which the source supports. If it still cannot clear 2,600, it is a Light Edition that has not admitted it — **flag back to Phase 2, do not ship a padded weekly.**

---

## 12. Notes for the state file (on Deliver only — v1.34)

- `last_issue_number` → 22 · `last_issue_date` → 2026-08-14 · `last_issue_format` → weekly
- `last_lead_topic` → **Ways of working**
- `last_lead_topics_3issues` → ["Ways of working", "Wider engineering landscape", "Management & teams"]
- `consecutive_non_deepdive` → **4.** The trigger fired at this issue and was declined on evidence quality (§1). Re-test at Issue 23 only against the two conditions at §1.5
- `last_outside_in_company` → **Duolingo**; append to `outside_in_history`
- `last_leadership_read` → **lethain (Will Larson)** — the mandatory slot is filled; the two-consecutive-skip limit is cleared
- `current_in_practice_season` → **"Making technical decisions when you're not the SME"**; `in_practice_season_progress` → **1**; append Jay Rungta / *"Engineering managers who build are pulling ahead"* to `in_practice_history`
- `last_rabbit_hole_date` → unchanged at 2026-08-07 unless the rabbit hole is reinstated
- Carry forward unchanged: the 27 July UK multi-bank binding facts; the unverified "July 2026 AWS mega-outage" (fifth consecutive demotion); AWS ME-CENTRAL-1 / ME-SOUTH-1 open with a 30 April 2026 last update; the retired agentic-payments cluster; the retired payments org-shape thread
- **Season-catalogue note for the next opener:** two consecutive seasons have been cut short. Prefer themes with a strong first-person publication culture, and do not open a new season until a week 1 and a plausible week 2 candidate are both visible
- **Issue 23 standing candidates:** Ludicity, *"AI mania is eviscerating global decision-making"* (Leadership Read, never used, non-consecutive outlet); Will Larson, *"Decisions not dates"* (Leadership Read); Canva / Rob Giglio (third-ranked, AI-primary)

---

## 13. Phase 5 flag

**This run requires FULL Phase 5 review, not lightweight.** Four triggers fire:

1. **A fired deep-dive trigger was declined.** The format decision is the most consequential call in the plan and must be audited against §1 rather than accepted.
2. **The Lead depends on the new-in-window traction exception** and carries a documented swap contingency (§3.1). Phase 5 must confirm which Lead actually shipped and that the 4 August publication date is stated in the copy.
3. **The audience-fit gate is the closest call in the issue** (Zoom at QT2, §5.2). Phase 5 must verify the shipped copy is the disclosure-asymmetry story and contains no patch mechanics or CVE forensics.
4. **Eight conditional items** are unresolved at plan time (§10).

Phase 5 should verify §6 line by line and specifically **re-derive the AI-substrate count at §5.3 from the shipped HTML** rather than trusting the table — including a fresh judgement on the In Practice classification, which is flagged as borderline and which the plan is built to survive either way.
