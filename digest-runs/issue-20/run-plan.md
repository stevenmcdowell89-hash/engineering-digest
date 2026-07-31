# Issue 20 — Run Plan (Phase 2, curation)

**Date:** Friday 2026-07-31
**Window swept:** 2026-07-18 → 2026-07-31 (14 days; a week was skipped after Issue 19 on 2026-07-17)
**Format:** **Standard Weekly**
**Volume:** II
**Contract status:** Phase 4 writes against this plan and may not silently substitute. One authorised fallback is defined (Leadership Read paywall) — see § Authorised fallback.

---

## 1. Format decision (falls out of the inventory)

Standard Weekly. The pool carries three anchor-grade news events, three viable long-form pieces, four separate availability incidents, two card-network results and a clean rabbit hole — comfortably 5–7 pages of material that passes both the "so what?" and "worth reading" tests. No single story dominates: the largest story of the window (the 27 July UK multi-bank payments failure) has **no published root cause**, so there is no deep dive to write — a deep dive on an unexplained event would be speculation with SVGs. The pool is nowhere near thin enough for a Light Edition. `consecutive_non_deepdive` = 1, so no forced deep dive.

---

## 2. Slot allocation

| Slot | Story | Source | Concern | Event/analysis | Urgency | AI-substrate? |
|---|---|---|---|---|---|---|
| **Lead** | Six UK banks degraded in the same Monday-afternoon window, and nobody published a cause | PYMNTS (+ Crowdfund Insider, City AM) | Operating at scale | News event | `act_this_week` | No |
| **QT1** | 79% of agent-raised pull requests are reviewed by the person who raised them | arXiv (Raida & Hou) surfaced via LeadDev, 28 Jul | Ways of working | **Analysis** (the one permitted analysis anchor) | `decide_this_month` | **Yes** |
| **QT2** | The card networks are now designing and measuring the loyalty mechanic, not just clearing the transaction | The Wise Marketer + Visa IR; Mastercard Q2 folded in as corroboration | Wider engineering landscape (loyalty / commerce-media surfacing note) | News event | `decide_this_month` | No |
| **Editorial Moment** | "Worth a second look" — restructuring on skill mix rather than on financial performance (Monday.com 22 Jul + Intel DCAI 20–21 Jul) | TechCrunch + Tom's Hardware | Management & teams | — | — | No |
| **In Practice** | Arriving as a manager without the domain: a rule for when an EM writes the code — Ferit Topcu, Zenjob SE | LeadDev, 27 Jul | Technical leadership | — | — | No |
| **Outside In** | Shopify's application-security team on why the orchestration layer, not the model, is the thing worth building — Zack Deveau | Shopify Engineering, 29 Jul | Ways of working | — | — | **Yes** |
| **The Leadership Read** | Napkin math as a leadership discipline — Simon Eskildsen with Gergely Orosz | The Pragmatic Engineer, 21 Jul | Technical leadership | — | — | No |
| **Down the Rabbit Hole** | Blacksmith's postmortem: scaling the worker pool is what exhausted the database | Blacksmith, 21 Jul | — | — | — | No |
| **Mid-issue accent** | **Omitted** — protects the visual budget and page count | — | — | — | — | — |
| **Platform Updates** | **Omitted — 0 rows.** The only qualifying item (npm) is carried as a dated deadline in At a Glance and On the Radar | — | — | — | — | — |
| **Feature / The Stack** | **Both omitted** — the issue is already at six major sections and near the page limit | — | — | — | — | — |

### Week at a Glance (7 items, three tiers)

**Action Required**
1. JFrog patched eight Artifactory zero-days after an OpenAI capability evaluation chained them to escape a test sandbox (28 Jul). Keep at delegation level: is the artifact registry patched, and who owns that decision — not the CVE mechanics.
2. npm: from early August, 2FA-bypass tokens lose the ability to perform sensitive account actions; trusted publishing (OIDC) is the route out.

**Worth Knowing**
3. The CMA opened a formal probe into how Microsoft moved 365 consumer subscribers onto Copilot pricing at renewal (29 Jul). No finding has been made.
4. Two network failures cut Claude capacity across the API, Claude Code and claude.ai on 29–30 July; Claude for Government stayed up on isolated infrastructure.
5. Anthropic shipped Claude Opus 5 with a per-request cost-versus-capability control (24 Jul). Tool release → At a Glance per v3.4.

**Watching**
6. Facebook, Instagram and Threads went down globally on 27 July while Meta's status page reported all systems operational.
7. Nvidia is reported to be in talks to guarantee up to $250bn behind OpenAI's Ohio data centre. Terms are not final — frame as "in talks" throughout.

### Other News This Week (4 items)

1. **AWS us-west-2 ↔ Seattle metro routing failure, 24 July** — a 20-minute provider fault, with the last confirmed downstream recovery more than nine hours later. AWS's first Health Dashboard update came 45 minutes after impact began.
2. **GitHub Actions runners offline for roughly five hours overnight on 19–20 July** on an expired internal certificate. Self-hosted and larger runners only — say so, or the impact reads wider than it was.
3. **The Open Secure AI Alliance formed on 27 July** with 37 members including Capital One, Cloudflare and GitHub; OpenAI, Anthropic and Google are not in it. This is the single permitted cross-issue throughline back to Issue 19's intrusion coverage — one sentence, no more.
4. **Bank of Baroda confirmed a breach traced to a compromised employee mailbox (27 Jul).** The 700GB / 1TB figure is the attacker's claim and is independently unverified; the bank's confirmation covers the incident and containment, not the volume.

### On the Radar (timeline)

1. **Early August 2026** — npm 2FA-bypass tokens lose sensitive-action capability (deadline framing, not release news).
2. **14 November 2026** — Swift CBPR+ rejects payments carrying unstructured postal addresses. RedCompass readiness figures are vendor-commissioned March research; attribute them or drop them.
3. **December 2026** — the CMA's evidence-gathering phase on Microsoft 365 concludes.
4. **~January 2027** — npm 2FA-bypass tokens lose direct publishing entirely.
5. *(Conditional)* **AWS ME-CENTRAL-1 / ME-SOUTH-1 still logged as impaired since March.** Include **only** if confirmable against the AWS Health Dashboard or a post-event summary at write time. The in-window status line comes from an aggregator outage log, not from AWS. If it cannot be confirmed, drop the row and do not replace it.

---

## 3. Why this lead

Six major UK banks — Barclays, Lloyds, Halifax, HSBC, Monzo and Revolut — degraded inside the same two-hour window on Monday 27 July, and four days later not one of them has published a cause. For a reader whose customers *are* UK banks, this is the week's story on every axis: highest UK/ME relevance in the pool, `act_this_week` urgency, and the only candidate where the reader's own customer base is the affected party. It passes the "would an engineering leader regret not knowing this on Monday morning" test more clearly than anything else in the window.

The editorial payload is not the failure — it is the silence around it. Simultaneity across six institutions is documented; causation is not. Any firm sitting downstream of several of those banks at once had no way, on the day, to tell one shared failure from six coincidences, and no way afterwards either. That is a dependency-visibility problem rather than a banking problem, and it generalises directly: it is the same conversation as the AWS us-west-2 tail and the GitHub certificate expiry, which is why those sit in Other News beneath it rather than competing with it.

It is a news event (v1.32 news-event Lead test), it connects to Operating at scale with a clear "what changes" takeaway, and on combined so-what + narrative tension + operational-decision fit it ranks first in the pool — so the v3.1 lead sanity check passes without an exception note.

### What can and cannot be claimed (named risk 4b — resolved)

**Establishable, from PYMNTS / Crowdfund Insider / City AM:**
- On Monday 27 July, customers of Barclays, Lloyds, Halifax, HSBC, Monzo and Revolut reported failed and delayed transfers, money not arriving, and problems reaching apps and online banking.
- Downdetector reports peaked roughly two hours after midday: Barclays 348, Lloyds 269, Halifax 169.
- Lloyds customers reported Faster Payments delays — **as a customer-reported symptom**.
- Revolut said it was addressing a disruption affecting GBP transfers; Barclays acknowledged issues with online banking services.
- No institution published a root cause. No institution attributed the disruption to a cyber incident.

**Must NOT be claimed:**
- That a shared dependency, shared rail, or common infrastructure caused it. The simultaneity is documented; a shared cause is **not**.
- That Faster Payments (the rail) failed, or that Pay.UK had an incident.
- That it was a cyber attack.
- Any figure for customers affected, payments delayed, or value held up. None exists.
- Any FCA / PSR / regulator angle. Per the run brief, regulator framing stays out of anchor slots entirely; if a regulator statement surfaces before publication it belongs in At a Glance at most, and the Lead does not change shape around it.

The article must state, in plain terms, that the cause has not been disclosed. That absence is the story, not a gap to be papered over.

---

## 4. Why this combination

The front half runs news, the back half runs reflection, and the two halves argue with each other productively. The Lead is an availability failure nobody has explained; QT1 is a control quietly disappearing without anyone deciding to remove it; QT2 is a commercial layer moving underneath the reader's own product. Three different kinds of thing going wrong or moving — an incident, a practice drift, a market shift — across three different operational concerns, so the anchors do not read as one theme rehearsed three times.

QT1 earns the analysis slot because it is the only candidate in the pool with a public dataset behind it: 25,264 agent-raised pull requests across 2,361 repositories, of which 79% were reviewed and modified by the same person who raised them. Code review is the control almost every engineering org relies on to hold quality and shared context, and the data says agent adoption is routing around it. That is a governance conversation directors are about to have, and it has the strongest chart in the pool.

QT2 is the loyalty / commerce-media patch surfacing on its own merits rather than being forced. Visa's Q3 call put value-added services at $3.8bn — roughly a third of net revenue and growing at 34% against 14% for the total — with named campaign results attached (Brazil: one million participants, +8% card activation, $400m incremental volume). Mastercard's Q2, reported two days later, shows the same direction at a smaller gradient. The networks are building the offer-design and attribution layer that a card-linked-offer platform sells into, which turns this into a build-versus-partner conversation rather than an earnings summary.

The back of the book deliberately does not converge. In Practice is a manager working out where his own technical involvement belongs; Outside In is a security team working out which part of an agent programme survives a model change; the Leadership Read is an engineer working out whether a system is anywhere near what physics allows. Three different answers to the same underlying question — how a leader forms a technical judgement they are not the expert on — which is the current In Practice season theme, and only one of the three is AI-primary.

The Editorial Moment picks up the two restructure stories that did not earn anchors and makes them worth more together than apart: a profitable SaaS company cutting a fifth of its staff while raising revenue guidance, and Intel cutting into the one division that grew 22% year on year. Both companies frame the cuts as skill-mix realignment rather than cost or automation substitution. That is a distinct observation from the Lead and keeps the slot non-AI.

---

## 5. Compliance ledger (explicit records)

### 5.1 Anchor news-event count (v1.32 — floor: ≥2 of 3)
**2 of 3.**
- Lead — **news event** (an outage with leadership implications, 27 July, in window).
- QT2 — **news event** (Visa's Q3 disclosure on 28 July of the loyalty-mechanic results and the value-added-services revenue mix; trade analysis published 30 July; Mastercard Q2 on 30 July corroborates).
- QT1 — **analysis**, the single permitted analysis anchor.

**Traction-exception discipline for QT1:** the underlying paper (Raida & Hou) was submitted 15 July and revised 16 July — *outside* the 18–31 July window. It is eligible only through the v3.0 new-in-window traction exception. The article must state that the study is from mid-July and that the coverage and reaction of 28 July are what is new. It must also pin the agent terminology on first use: these are agent-raised pull requests inside existing repositories, not autonomous production agents with action authority. The dataset is open-source repositories, not enterprise codebases — the generalisation caveat is mandatory.

### 5.2 Within-issue concern diversity (v1.31 — floor: ≥2 concerns)
**3 distinct concerns, one anchor each.** Lead = Operating at scale · QT1 = Ways of working · QT2 = Wider engineering landscape (with a loyalty / commerce-media surfacing note). Preferred spread of 3 achieved.

### 5.3 Soft breadth guardrail (v3.4) — **documented same-concern repeat**
`last_lead_topics_3issues` = [Operating at scale (19), Banking fintech & loyalty (18), Management & teams (17)]. Issue 20 leads **Operating at scale**, which repeats Issue 19's concern. Rolling-4 spread = **3 distinct of 4**, which meets the ≥3-of-4 guidance.

This is a deliberate, documented call under the v3.4 clause: *"If the same concern leads twice running and there's a genuinely stronger story in that concern this week, take it — document the choice in the run plan."* The alternatives that would have broken the repeat were weaker on the merits — Monday.com is nine days old against a four-day-old failure across the reader's own customer base, and the CMA probe is a live investigation with no finding. The lead *story* is entirely unrelated to Issue 19's (which anchored the agentic-attacker cluster), so there is no editorial recycling, only a shared concern label.

**Flag for Phase 5:** SKILL.md's State Tracking section still carries a legacy line reading *"the lead article topic must differ from `last_lead_topic`."* The editorial spec — the single source of truth — retired the mechanical rotation rules at v3.4 and replaced them with the soft breadth guardrail applied above. This is a known, deliberate, documented divergence, not drift.

### 5.4 No-repeat-featured-anchor (v1.31 — previous 2 issues)
Issue 19 anchors: the agentic-attacker cluster (Hugging Face intrusion, JadePuffer, Ant Group SingGuard); hyperscalers selling embedded engineers; Circle's stablecoin bank charter. Issue 18: the agentic-payments deep dive (retired). **None of Lead / QT1 / QT2 touches any of these.** ✅

Two candidates sit downstream of the Issue 19 cluster and are handled explicitly:
- **JFrog Artifactory zero-days (28 Jul)** — same cluster; blocked from anchoring. Placed in At a Glance, Action Required, at delegation level.
- **Open Secure AI Alliance (27 Jul)** — judged a **distinct news event**, not a continuation: a 37-member industry consortium forming is a different fact from the intrusion that prompted it. Not mechanically blocked. Rejected on merit anyway (a founding announcement with no shipped standard) and placed in Other News.

### 5.5 AI-substrate ceiling across the 6 featured sections (v1.32 — cap 4 of 6)
**2 of 6.**

| Featured section | AI as substantive driver? |
|---|---|
| Lead — UK bank payments failure | No |
| QT1 — agent-raised PR review | **Yes** |
| QT2 — card networks / loyalty stack | No |
| Editorial Moment — restructuring on skill mix | No |
| Outside In — Shopify agentic harness | **Yes** |
| In Practice — Zenjob / when an EM writes code | No |

Four of six have AI as *not* the substantive driver, well clear of the ≥2 requirement. The run brief's count of ~13 genuinely non-AI candidates is reflected in the outcome: the Lead, QT2, the Editorial Moment, In Practice, the Leadership Read, the Rabbit Hole, three of four Other News items and four of seven At a Glance items are non-AI.

### 5.6 Long-form variety (v1.35 — at most ONE of three may be AI-primary)
**1 of 3 AI-primary.** Three distinct aspects of engineering leadership covered (floor is two):
- **In Practice** — Zenjob / Ferit Topcu: technical leadership when you are not the SME. Non-AI.
- **Outside In** — Shopify / Zack Deveau: where the durable investment sits in an agent programme. **AI-primary.**
- **The Leadership Read** — Pragmatic Engineer / Simon Eskildsen: forming a technical judgement from first-principles arithmetic. Non-AI (AI appears only as the demand driver behind Turbopuffer).

**Anti-overlap checks:** In Practice outlet = LeadDev; Leadership Read outlet = The Pragmatic Engineer — different outlets, different authors ✅. Outside In company = Shopify; Leadership Read company = The Pragmatic Engineer / Turbopuffer — different ✅. **Noted and cleared:** Simon Eskildsen is a former Shopify engineer and the interview contains Shopify anecdotes (Toxiproxy). The anti-overlap rule targets the subject company of the piece, and the Leadership Read's subject is napkin math at Turbopuffer, not Shopify. **Instruction to Phases 3 and 4: do not build the Leadership Read around the Shopify/Toxiproxy anecdote** — use the search-benchmark example (10 seconds observed against 10 milliseconds theoretical) and the Cursor bill ($80k/month to $4k/month) as the two required concrete mechanisms, so the two sections stay visibly distinct.

### 5.7 Adjacent-source rule (v1.32 — no two consecutive featured sections share an outlet)
Reading order and source:

1. Editorial Moment — TechCrunch / Tom's Hardware
2. Week at a Glance — mixed
3. **Lead** — PYMNTS
4. **QT1** — arXiv (Raida & Hou), surfaced via LeadDev
5. **QT2** — The Wise Marketer / Visa IR
6. **In Practice** — LeadDev
7. Other News — mixed
8. **Outside In** — Shopify Engineering
9. On the Radar — mixed
10. **The Leadership Read** — The Pragmatic Engineer

No two consecutive sections share an outlet ✅. The QT1 → In Practice LeadDev pair is separated by QT2 ✅.

**Source-diversity cap (v2.0, max 2 sections per publication):** LeadDev appears in **2** sections (QT1 as the in-window coverage carrying the Courtney Miller and Sarah Wells quotes; In Practice) — at the cap, not over it. **Hard instruction: no third LeadDev item anywhere in the issue.** The "Scope, not skill / the reality of being a senior engineer" piece (27 July) is cut entirely and must not appear in Other News, At a Glance or Recommended Reading. The Pragmatic Engineer appears in **1** section; the Hillel Wayne podcast is therefore also cut (see rejections).

### 5.8 Urgency classification for anchor slots (v3.2)
- **Lead** — `act_this_week`. Anchor-eligible ✅
- **QT1** — `decide_this_month`, high impact (a control disappearing from the review loop). Anchor-eligible ✅
- **QT2** — `decide_this_month` (build-versus-partner posture as the networks move up the stack). Anchor-eligible ✅

No `general_awareness` candidate occupies an anchor slot. Opus 5, the npm cutover, ISO 20022 and the Nvidia financing report are all `general_awareness` and sit in At a Glance / On the Radar accordingly.

### 5.9 Regulator scope-conditional test (v1.32) — CMA, recorded
The CMA's 29 July probe into Microsoft 365 Copilot bundling is a **competition and consumer regulator acting on a vendor**, not a bank regulator acting on regulated entities. The v1.31 FCA-class block does not apply.

Scope test — *"would this matter at Mozilla, Spotify or GitHub?"* — **yes**. Every one of them buys bundled AI seats under default-on renewal terms, and a tier-1 regulator testing whether that pattern is lawful changes the negotiating position at renewal across the industry. The story is therefore **eligible for an anchor slot**.

It is nonetheless **rejected on merit** (see § 6): the CMA has reached no finding, the evidence phase runs to December 2026, and the scope is consumer subscriptions rather than enterprise agreements — so a Quick Take would carry more hedging than argument. Placed in Week at a Glance, Worth Knowing. **Do not repeat the "10% of global revenue" figure** that appears in some coverage: it is a theoretical statutory maximum, not a proposed penalty.

Separately: **no FCA / PSR / Pay.UK angle appears in any anchor slot**, per the run brief.

### 5.10 Unverified-claim register (binding on Phases 3 and 4)
| Claim | Status | Handling |
|---|---|---|
| A "July 2026 AWS mega-outage" | **UNVERIFIED — do not assert** | Tier-1 sources confirm only three separate smaller incidents: CloudFront / VPC Origins on 16 July; a us-east-1 operational issue on 17 July with a billing-console follow-on to 19 July; and the us-west-2 routing failure on 24 July. The "mega-outage" framing traces to opinion posts. The issue asserts the 24 July us-west-2 event only. |
| us-west-2 as evidence of us-east-1 concentration risk | **Conflation — do not make** | The standing single-region watch is us-east-1. The 24 July event was us-west-2. Do not merge them. |
| A shared cause behind the six UK bank failures | **NOT ESTABLISHED** | See § 3. Simultaneity documented; causation not. |
| Faster Payments (the rail) failed | **NOT ESTABLISHED** | Lloyds customers reported Faster Payments delays — a customer-reported symptom only. |
| Bank of Baroda 700GB / 1TB | **Attacker claim, unverified** | Attribute to the extortion group and say it is unverified. The bank confirmed the incident and containment, not the volume. |
| Nvidia's $250bn guarantee | **Reported, not confirmed** | Frame as "in talks"; terms are not final. |
| AWS ME-CENTRAL-1 / ME-SOUTH-1 still impaired in July | **Aggregator-sourced** | Radar row is conditional on confirmation against AWS's own channels at write time. Otherwise drop. |
| Tech layoffs "past 200,000" | **Inconsistent across trackers (167k vs 205k)** | **Cut entirely.** Not demoted — the digest cannot stand behind either figure. |
| RAM $2.80/GB → $12/GB | **Unverified aggregator figure** | Cut. |
| CMA "10% of global revenue" | **Statutory maximum, not a penalty** | Do not repeat. |
| Perforce platform-engineering percentages | **Vendor-sponsored, out of window** | Omitted entirely. |
| RedCompass ISO 20022 readiness figures | **Vendor-commissioned, March research** | Attribute explicitly if used on the Radar, or drop. |

### 5.11 Date-framing register (14-day window — mandatory explicit dating)
Anchors should come from 25–31 July where possible; 18–24 July material must be explicitly date-framed. The Lead (27 Jul), QT2 (28–30 Jul) and Outside In (29 Jul) are all in the 25–31 July priority half. The following carry material from the prior week and **must name their date in the copy**:

- **QT1** — study submitted 15–16 July, coverage 28 July. Traction exception must be stated (see § 5.1).
- **Editorial Moment** — Monday.com 22 July; Intel 20–21 July.
- **In Practice** — 27 July (in priority half; no framing burden).
- **Leadership Read** — 21 July. State the date in the author card.
- **Other News** — AWS 24 July; GitHub Actions 19–20 July.
- **Rabbit Hole** — Blacksmith 21 July.

---

## 6. Lead-slot candidates considered and rejected

1. **Agent code-review study / the 79% figure** (arXiv via LeadDev, 28 Jul) — fails the v1.32 news-event Lead test. The underlying paper is out of window and the in-window item is coverage and reaction, which is analysis. **Taken as QT1**, the single permitted analysis anchor.
2. **AWS us-west-2 routing failure** (24 Jul) — the strongest pure narrative in the pool (a 20-minute provider fault against a nine-hour downstream tail), but the primary source is an incident aggregator rather than AWS, the affected region is not the standing us-east-1 concentration watch, and leading on it would sit uncomfortably close to the "mega-outage" claim the digest has now demoted twice. It would also have produced a second Operating-at-scale anchor with lower UK/ME relevance than the Lead. **→ Other News.**
3. **Monday.com cuts 20% of staff** (22 Jul) — a genuine news event with the freshest angle in the layoff cycle: management explicitly rejecting both the margin reading and the automation-substitution reading, while reaffirming 19–20% revenue growth. It would also have broken the same-concern lead repeat. Rejected on recency and audience proximity — nine days old at publication, medium UK relevance, against a four-day-old failure across the reader's own customer base. **→ Editorial Moment**, paired with Intel.
4. **CMA probe into Microsoft 365 Copilot bundling** (29 Jul) — passes the scope-conditional test and is anchor-eligible (see § 5.9). Rejected on merit: no finding made, evidence phase running to December 2026, consumer-subscription scope. A Quick Take would be more hedge than argument. **→ At a Glance, Worth Knowing.**
5. **Visa Q3 / the networks moving up the loyalty stack** (28–30 Jul) — high value for this reader, but an earnings-call disclosure lacks the narrative weight a Lead needs. **→ QT2**, where it is stronger than it would be at the top.
6. **JFrog Artifactory zero-days** (28 Jul) — blocked from anchoring under the v1.31 no-repeat-featured-anchor rule (same cluster as Issue 19's Hugging Face anchor). The audience-fit gate independently puts the useful takeaway at delegation level. **→ At a Glance, Action Required.**
7. **Open Secure AI Alliance** (27 Jul) — judged a distinct news event from the Issue 19 anchor and therefore not mechanically blocked (reasoning recorded at § 5.4). Rejected on merit: a founding announcement with no shipped standard. **→ Other News.**
8. **Anthropic Claude outage** (29–30 Jul) — `act_this_week` and a real single-vendor dependency signal, but no published post-mortem and it would have made a second Operating-at-scale anchor. The isolated-infrastructure detail (Claude for Government unaffected) is the sharpest fact and survives in the At a Glance line. **→ At a Glance, Worth Knowing.**
9. **GitHub Actions certificate expiry** (19–20 Jul) — `general_awareness`, narrow blast radius (self-hosted and larger runners only), prior week. Fails the anchor-slot urgency gate. **→ Other News.**
10. **Bank of Baroda breach** (24–27 Jul) — the headline figure is the attacker's claim, the institution is outside UK/ME, and the takeaway is mailbox hygiene. **→ Other News**, with the volume attributed and marked unverified.
11. **Nvidia / OpenAI $250bn financing guarantee** (27 Jul) — reported, not confirmed; terms not final. Cannot anchor. **→ At a Glance, Watching.**
12. **Intel Data Center and AI group cuts** (20–21 Jul) — numbers never disclosed, low UK/ME relevance, `general_awareness`. **→ Editorial Moment** pairing only.
13. **Meta global outage** (27 Jul) — consumer platform, low direct relevance; the transferable part is the status page reading green. **→ At a Glance, Watching.**
14. **Tech layoff trackers passing 200,000** (30 Jul) — **cut entirely.** Aggregator with materially inconsistent figures depending on scope and date. Not demoted, cut.
15. **Perforce 2026 platform-engineering report** (8 Jul) — out of window, vendor-sponsored, no in-window traction. **Omitted entirely.**
16. **npm v12 release** (8 Jul) — out of window as a release. Only the forward-looking August and January dates are in scope. **→ At a Glance / On the Radar as deadlines.**
17. **ISO 20022 / Swift structured-address readiness** (research 12 Mar) — out of window, vendor-commissioned. The 14 November cutover is a dated deadline. **→ On the Radar.**
18. **Anthropic Claude Opus 5** (24 Jul) — tool release with no attached leadership conversation beyond the budget angle. v3.4 default applies. **→ At a Glance, Worth Knowing.**
19. **Mastercard Q2** (30 Jul) — weak alone. **Folded into QT2** as the corroborating second data point rather than given its own slot, which also avoids an adjacent-source problem with Visa.

### Rejected for the long-form slots

20. **"Inside Anthropic"** (The Pragmatic Engineer, 28 Jul) — strong and in window, but **AI-primary**. With Outside In already AI-primary, taking it for the Leadership Read would put 2 of 3 long-form sections on AI and breach v1.35. **Rejected for all long-form slots, in both the primary and the fallback configuration.** It is also partly paywalled.
21. **"Influence as the skill no title confers"** (LeadDev / Meg Adams, 20 Jul) — a good non-AI Leadership Read, but LeadDev cannot serve both In Practice and the Leadership Read (v3.5 anti-overlap on outlet), and In Practice has the stronger LeadDev piece. **Held as the authorised fallback only** — see § 7.
22. **Zalando, "From Homegrown to Flink"** (24 Jul) — **rejected for Outside In.** Tested hard against both exclusions, as instructed. It is a migration story where the headline is the technology, and the v2.3 rules exclude those unless the people-and-process decision is the actual subject; nothing in the listing suggests it is. The substitution test collapses it to *"a large engineering org migrated to a new platform"*, which the spec gives verbatim as a worked rejection. The permalink was also never resolved in the sweep. **Cut.**
23. **Cloudflare privacy-proxy CLI open-sourcing** (27 Jul) — **blocked** for Outside In; Cloudflare appears in `outside_in_history` at Issue 9. Thin regardless (index URL only, no resolved permalink). **Cut.**
24. **Monzo, "The Engineering Behind the Platform"** (13 May) — the In Practice evergreen fallback. Not needed, and carries a named-author risk: no individual byline surfaced, which would fail In Practice quality 1. **Cut.**
25. **"Formal methods with Hillel Wayne"** (Pragmatic Engineer Podcast, 29 Jul) — content unverified, and using it would put The Pragmatic Engineer in two sections. The Blacksmith postmortem is a better Rabbit Hole because it connects directly to the outage-heavy front half. **Cut.**
26. **"The reality of being a senior engineer" / scope-not-skill** (LeadDev, 27 Jul) — no quantitative content, and it would be a third LeadDev item, breaching the source-diversity cap. **Cut entirely — must not appear anywhere in the issue.**

### Outside In: not omitted this issue

Issue 19 omitted Outside In. Issue 20 **does not**, and the reasoning is recorded because the run brief flagged the slot as thin. `outside_in_history` blocks Monzo, Revolut, Ramp, Cloudflare, Wise, Linear, incident.io, Vercel, Honeycomb, Datadog, The Finanser and Kent Beck. That left Shopify and Zalando. Zalando is rejected above. **Shopify passes cleanly** and is not being forced into the slot:

- **No-repeat-company (v2.2):** Shopify has never appeared in `outside_in_history`. ✅
- **Substitution test (v2.4):** *"A large engineering org found the durable investment in its agent programme was the orchestration and verification layer it owns, rather than the model contract it renews."* Still meaningful, still actionable. ✅
- **One-sentence test:** *"Engineering leaders should pay attention to this because the durable asset in an agent programme is the harness their own team owns, not the model they license."* Not tied to Shopify's stack. ✅
- **Sector rotation (v2.3):** consumer tech at scale. Recent Outside Ins ran named-author (Kent Beck), analyst (The Finanser) and dev-tools (Datadog) — no category anchors more than 2 of any 4 consecutive issues. ✅
- **In window:** 29 July, the priority half. ✅

**Constraint honoured:** Shopify cannot serve both In Practice and Outside In. It takes **Outside In**; In Practice takes Zenjob, which has the exact season fit and is non-AI — which is what keeps the v1.35 long-form variety rule comfortable at 1 of 3 rather than tight at 2 of 3.

**Scope discipline for Phase 4:** the transferable content is the harness-versus-model argument and the cost envelope ($50–300 per full scan, $5–50 incremental; 80+ applications, 300+ findings, two critical, six weeks). The application-security scanning technique is not the subject and must not become it.

---

## 7. Authorised fallback (the only permitted substitution)

**Trigger:** Phase 3 verifies the Pragmatic Engineer napkin-math piece (21 July) and finds it paywalled below the point where the Leadership Read's 400–600-word substance floor can be met. Issue 19 lost a Leadership Read this way, so this is a live risk and is pre-authorised rather than left to improvisation.

**If triggered, swap the whole long-form set as a unit** — do not patch one slot:

| Slot | Primary | Fallback |
|---|---|---|
| In Practice | Zenjob / Ferit Topcu (LeadDev) | **Shopify / Zack Deveau** (AI-primary) |
| Outside In | Shopify / Zack Deveau | **Omitted** |
| The Leadership Read | Pragmatic Engineer / Eskildsen | **LeadDev / Meg Adams, "Influence"** (20 Jul, non-AI) |

Fallback compliance: long-form AI count 1 of 2 ✅ · In Practice and Leadership Read outlets differ (Shopify vs LeadDev) ✅ · LeadDev at 2 sections (QT1 co-source + Leadership Read), at the cap ✅ · adjacency holds (QT1 → QT2 → In Practice(Shopify) → Other News → On the Radar → Leadership Read(LeadDev)) ✅ · featured AI count becomes 2 of 6, unchanged ✅ · if Outside In is omitted, add the standard note and record the second consecutive omission for the state file.

Phase 3 must also verify the Zenjob and Shopify pieces are fully readable, and must resolve the GitHub Status source: the candidate points at an x.com post. If that link is unacceptable at write time, substitute githubstatus.com incident history and re-verify the timings.

**No other substitution is authorised.** Anything else goes back to Phase 2.

---

## 8. Steers for Phase 3 (not decisions Phase 3 must re-make)

- **Cover:** `.cover-lead-stat` = **79%**, context line *"of agent-written pull requests are reviewed by the person who raised them."* It is the number a reader remembers from the whole issue. Do not substitute.
- **Foreword thread (50–80 words, one point):** the week's thread is dependency opacity — several unrelated systems failed and the public record of why is thin. Do not list stories. Do not frame the week relative to AI's noisiness or quietness (v2.9).
- **Editorial Moment variant:** *"Worth a second look."* Not *Number of the week* — the only candidate stats come from inside the issue's own stories, which the variant forbids. Not *Quote of the week* — the strongest quotable line (Courtney Miller, *"Software development is not an isolated task, and writing new code was never the hard part"*) is allocated to QT1 under one-quote-one-slot.
- **Openers (within-issue variety is the rule; cross-issue tracking is retired):** Lead = narrative-first (the Monday afternoon window). QT1 = stat-first (79%). QT2 = summary-first. Outside In = quote-first. Phase 3 assigns In Practice and the Leadership Read from the remaining styles so no two of the six repeat where avoidable.
- **Visual plan — target 6, real-diagram floor met three times over.** Per-section floor requires one visual in each of the six major sections, which sits at the top of the 4–6 budget; hold at six and add nothing.
  1. **Lead** — inline SVG horizontal bar: Downdetector peak reports (Barclays 348 / Lloyds 269 / Halifax 169). *Real diagram.* The Lead's default `.pq-bar` is **omitted** — no quote in this story earns it, and the spec permits omission on that ground.
  2. **QT1** — inline SVG horizontal bar set: 79% same-person review / 70% of projects below one-in-five contributor participation / 12.5% multi-human workflows. *Real diagram.*
  3. **QT2** — `.compare-table` or `.stats-row`: Visa VAS +34% to $3.8bn against total net revenue +14% to $11.6bn; Mastercard VAS +20%. *Real table.*
  4. **In Practice** — `.compare-table`: the three-way allocation rule (small unplanned → the manager takes it; complex unplanned → the manager investigates, does not solve; planned roadmap → stays with the team). *Real table.*
  5. **Outside In** — `.oi-stats-row`: 80+ applications / 300+ findings / 2 critical / 6 weeks.
  6. **Leadership Read** — the required centred `.pull-quote` blockquote card, plus the 10 seconds observed against 10 milliseconds theoretical comparison rendered inline.
- **Component manifest steer (standard-weekly cap 3–5):** inline SVG chart (×2, one component type), compare-table, stats row, Down the Rabbit Hole, centred pull-quote card = 5, at the cap. **No** feature opener, floated sidebar box, key-takeaway box, by-the-numbers callout, stats tile, mid-issue accent or Platform Updates table. In Practice, Jargon Watch and Concept of the Week do not count toward the cap.
- **Jargon Watch (recommended):** *agent-raised pull request* in QT1 — this also discharges the mandatory agent-terminology precision rule (agent-mode work inside existing repositories, with a human triggering and reviewing; **not** autonomous production agents with action authority).
- **Concept of the Week (recommended):** *player-coach* in In Practice, aimed at the year-one EM from a non-technical route.
- **Other terms needing an inline gloss:** Faster Payments · Downdetector · value-added services (VAS) · card-linked offer · incremental payments volume · agentic harness · orchestrator · napkin math · unplanned work · trusted publishing (OIDC) · CBPR+ / structured address · Direct Connect · certificate lifecycle management · 529 Overloaded.
- **Epistemic reframing (cap 2, structural test):** the Lead's natural framing — *"the simultaneity is documented; the cause is not"* — is a structural instance and should be **budgeted as one of the two**. Hold the second in reserve; prefer direct declarative sentences everywhere else. The QT1 framing *"nobody decided to remove the second reviewer"* is a declarative statement, not a reframe, and is fine.
- **Voice:** third-person editorial throughout. No *"the reader"*, *"your team"*, *"you should"*, no rhetorical questions to the audience.
- **Palette:** the Lead is Operating at scale but is **not** an active-threat or active-upgrade-window story, so it uses default teal, **not** `.section-label.alert`. Structural landmarks (Week at a Glance, Foreword, In Practice header) always default teal.
- **In Practice theme label:** *"Technical strategy under uncertainty"* — the season name only, **no week count**, no *"of 3"*, no *"part"*.
- **Cross-issue throughline:** at most one sentence, in the Open Secure AI Alliance item in Other News, linking back to Issue 19's intrusion coverage.
- **Down the Rabbit Hole:** Blacksmith, source-type tag *"Post-mortem"* or *"Long-read"*. `last_rabbit_hole_date` = 2026-06-26, so the 1–2 issue cadence gate is open.
- **Reading time:** target 7–8 minutes; calculate from the final word count at ~200 wpm.

---

## 9. Risk summary for Phases 3–5

| Risk | Status | Owner |
|---|---|---|
| Lead cause is undisclosed | **Resolved** — the plan states exactly what can and cannot be claimed (§ 3). The absence of a published cause is the editorial payload. | Phase 4 copy |
| "AWS mega-outage" | **Resolved** — must not be asserted. Only the 24 July us-west-2 event is claimed, and it is not conflated with the us-east-1 concentration watch. | Phase 4 copy |
| CMA regulator scope | **Resolved** — test applied and recorded, passes, but rejected on merit and demoted to At a Glance (§ 5.9). No FCA/PSR angle anywhere in the anchors. | Recorded |
| Outside In thin / v1.35 collision | **Resolved** — Shopify takes Outside In, Zenjob takes In Practice, Pragmatic Engineer takes the Leadership Read. Long-form AI = 1 of 3. | Recorded |
| Leadership Read paywall | **Open** — Phase 3 must verify readable substance in the napkin-math piece. Authorised fallback defined at § 7; no other substitution permitted. | **Phase 3** |
| Source verification | **Open** — Phase 3 to resolve the GitHub Status x.com link, confirm the AWS ME-region status against AWS's own channels (or drop the Radar row), and pin the Visa figures to the investor-relations transcript alongside The Wise Marketer. | **Phase 3** |
| Same-concern lead repeat + SKILL.md legacy line | **Documented divergence, not drift** (§ 5.3). | **Phase 5 — flag, do not fail** |

**Phase 5 mode: FULL review.** The run plan carries a named-failure case (an unverified-claim register with ten entries, an anchor built on an unexplained incident, and a documented divergence from a legacy SKILL.md line), which meets the v1.33 criteria for full rather than lightweight review.
