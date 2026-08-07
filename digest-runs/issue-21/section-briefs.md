# Issue 21 — Section Briefs (Phase 3: Slot Detail & Component Allocation)

**Date window:** 31 July – 7 August 2026 · **Spec version:** v1.38 · **Format:** Standard Weekly
**Contract:** `run-plan.md` (Phase 2). This document adds detail; it does not re-decide slots.

Cadence state applied: `last_feature_date` null · `last_stack_date` null · `last_rabbit_hole_date` 2026-07-31.
- **Feature article — OMITTED.** Never run; but the word budget is full at ~2,870 and §11 of the run plan gives no room. Not forced.
- **The Stack — OMITTED.** No candidate in the pool warrants a technical-for-managers explainer; the run plan does not allocate one.
- **Down the Rabbit Hole — INCLUDED.** Last ran 2026-07-31 (Issue 20); the 1–2 issue cadence permits it. See §10.

---

## 0. Verification report — the five blockers

Phase 3's brief was verification as much as planning. All five resolved. **Three produced material corrections to the run plan; Phase 4 must write from this document, not from the run-plan wording, wherever they differ.** Corrections are marked ⚠️.

| # | Blocker | Status | Effect |
|---|---|---|---|
| 1 | Outside In / Klarna sourcing | **Resolved — section re-scoped** ⚠️ | Figures pinned to Klarna's own press release and a Q3 2025 earnings call. Two run-plan claims withdrawn as unattributable. |
| 2 | getDX unit contradiction | **Resolved — no contradiction** | Both figures are per developer per year. Callout survives; `.pq-bar` substitution not needed. |
| 3 | Anthropic inference hooks | **Confirmed against Anthropic's own post** ⚠️ | Second Platform Updates row is in. Mechanism differs from the candidate summary. |
| 4 | Perforce sample size | **Pinned — 820 respondents** ⚠️ | Stays one WAG line. Attribution moves off InfoQ, which resolves a latent source-cap breach (see §12.2). |
| 5 | Lead primary sourcing | **Fully pinned** ⚠️ | Every obligation, the penalty ceiling and the 2 December date verified. The December date has a named legal instrument the run plan did not identify. |

### 0.1 Blocker 1 — Klarna: what is attributable, and what is not

Anchored to primary and primary-adjacent sources. **The run plan's §8 content paragraph contains two claims that cannot be supported and must not ship.**

**VERIFIED — Klarna's own press release, 27 February 2024:**
- 2.3 million conversations in the AI assistant's first month
- two-thirds of Klarna's customer service chats
- work equivalent to **700 full-time agents**
- customer satisfaction **on par with human agents**; 25% drop in repeat inquiries
- resolution time from **11 minutes to under 2 minutes**
- 23 markets, 24/7, 35+ languages
- **$40m** profit improvement — a *projection for 2024*, not a realised result

**VERIFIED — Siemiatkowski via Bloomberg, reported CNBC 14 May 2025:**
- Total company workforce down ~40%, from about 5,000 to about 3,000, **primarily through a hiring freeze and attrition — not layoffs tied to the AI deployment**
- Verbatim: *"As cost unfortunately seems to have been a too predominant evaluation factor when organizing this, what you end up having is lower quality."*
- Verbatim: *"Really investing in the quality of the human support is the way of the future for us."*

**VERIFIED — subsequent, reported:** September 2025, Klarna redeployed staff into customer service from marketing, engineering, legal, operations and analytics — people first told their roles were "no longer a priority" and placed in a talent pool. November 2025 (Q3 2025 earnings): Klarna claimed the AI agent did the work of **853** full-time agents and **$60m** of savings — **while customer service and operations costs rose to $50m in Q3 2025, from $42m a year earlier.**

⚠️ **WITHDRAWN — do not write these:**
1. **"support headcount fell from 5,000 to 3,500."** Wrong twice over. The 5,000→3,500 range is *total company* headcount as of mid-2024 (about 3,000 by May 2025), and it is not support headcount. The support figure is the 700-FTE-equivalent claim. This is a commentator's conflation and it must not ship at feature weight.
2. **"routing rules decide which intents and customer segments must always reach a person."** Not attributable to Klarna or to any primary source. The documented mechanism is blunter: reopen human hiring, and redeploy staff from other functions into support.
3. **"cut too aggressively" as a Siemiatkowski quote.** He did not say it — it is a paraphrase. Attribution fidelity (v3.6) requires his actual wording, quoted above.
4. The reported failure modes (hallucinations on edge cases, CSAT falling on emotionally charged tickets, compliance concerns about disputes and account closures) are **Bernard Marr's characterisation**, not Klarna's. The compliance claim in particular has no primary support. Use Siemiatkowski's own stated reason — cost became too predominant an evaluation factor, and quality fell — and nothing beyond it.

**Net effect: the section gets stronger.** Bernard Marr / Forbes is demoted to the in-window write-up peg — exactly the treatment Cooley gets in the Lead. See §9.

### 0.2 Blocker 2 — getDX units resolved

There is no contradiction; the candidate file dropped the unit. Source: getDX, Laura Tacho, **published 15 October 2025**, a poll of **275 engineering leaders** (plus a separate 50-budget-holder poll for the budget-share figure).

- **38.4%** of leaders spend **$101–$500 per developer per year** — verbatim: *"38.4% of leaders shared they are currently spending between $101-500 per developer per year on AI developer tools."*
- **10.5%** at $501–$1,000/dev/year · **10.5%** over $1,000/dev/year
- Guidance for 2026: *"Companies that want to make AI tools available for every developer should expect to spend anywhere from $500/dev/year on the low end to easily $3000+/dev/year on the higher end."*
- **Nearly half** of leaders set aside **1–3% of total engineering budget** for AI tools

Both figures are **per developer per year**. The story is the gap: 2025 actual spend clusters *below* $500/dev/year, and the 2026 guidance for full team access *starts* at $500. The by-the-numbers callout survives and gets better. **Binding: the bands do not sum to 100% (38.4 + 10.5 + 10.5 = 59.4%); do not imply they do. State the vendor-poll nature and the October 2025 date.**

### 0.3 Blocker 3 — Anthropic inference hooks CONFIRMED

Verified against Anthropic's own announcement at `claude.com/blog/claude-enterprise-inference-hooks`, **published 5 August 2026 — inside the window.** It becomes the second Platform Updates row.

⚠️ **The mechanism is not what the candidate summary said.** Do not write "inspects prompts and tool calls before they reach the model." Anthropic's description:
- Before the model starts generating, Claude sends the prompt and its surrounding context **to the organisation's own DLP or security server**, which returns **allow or deny**; Claude waits for the verdict.
- When Claude calls a tool, **the tool's response** is checked before it goes back to the model.
- **Beta, Claude Enterprise only.**
- Covers Claude chat, Claude Code and Claude Cowork, plus tool calls via MCP connectors, skills and plugins.
- Controls: **shadow mode (always allow)**, role-based exclusions, percentage-based rollouts, configurable failure-policy tolerance and timeouts.
- **Verdicts are binary — the server can allow or deny, not rewrite or redact.** This is the leadership-relevant limit and should be the row's "what changed".
- Named integrations: Netskope, Palo Alto Networks, Proofpoint, Zscaler, or a custom in-house server.

**Binding: a reported 5-second default timeout and a gap around image-only attachments appear in secondary coverage (Unite.AI) and are NOT in Anthropic's post. Omit both.**

### 0.4 Blocker 4 — Perforce pinned

Verified against **Perforce's own press release**: **820 technology professionals surveyed worldwide**, a subset of the data collected for the *State of DevOps Report 2026*, published by **Perforce Software** — the vendor — and dated **8 July 2026**.

The 73% / 44% pair is confirmed verbatim in Perforce's release, as are 66% (AI somewhere in infrastructure workflows) and 31% (fully autonomous AI deployment). ⚠️ **The 35% hybrid-platform and 28% dedicated-platform-team figures are NOT in Perforce's release — they come from the InfoQ write-up and remain unpinned. Do not use them.**

Sample size is now pinned, so the run plan's conditional is satisfied — but the item **stays a single Week at a Glance line** as planned, with the two headline percentages, the sample size, and the vendor-sponsored characterisation. **Nothing is charted.** Note the report itself is out of window (8 July); it qualifies on in-window traction only, so the line must not imply it is this week's research.

### 0.5 Blocker 5 — Lead fully pinned

Every cell of the compare-table and every figure in the Lead is now verified against the European Commission and the Act text.

- **Article 50 transparency obligations apply from 2 August 2026.** (European Commission)
- **Commission guidelines adopted/published 20 July 2026.**
- **Penalty ceiling is set by Article 99(4), not Article 50** — verbatim: *"administrative fines of up to 15 000 000 EUR or, if the offender is an undertaking, up to 3 % of its total worldwide annual turnover for the preceding financial year, whichever is higher."* ⚠️ **Article 99(6): for SMEs including start-ups, each fine is "whichever thereof is lower."** The run plan states only the higher-of formulation. One clause covers it.
- ⚠️ **The 2 December 2026 backstop has a named instrument the run plan did not identify: the Digital Omnibus on AI**, adopted by Parliament 16 June 2026 and Council 29 June 2026, in force July 2026. It grants generative systems **placed on the market before 2 August 2026** until 2 December 2026 to meet the Article 50(2) machine-readable marking obligation. Naming it is optional; **implying the date was in the original Act is wrong** and must be avoided.
- **Scope trigger:** placing an AI system on the EU market, or the system's output being used within the EU. Not nationality of the firm.
- **Content generated and published before 2 August 2026 needs no retroactive labelling.**
- **Code of Practice on Transparency of AI-Generated Content:** published by the AI Office, **voluntary**; several major providers have signed; carries a presumption of conformity.
- ⚠️ **The same Digital Omnibus postponed the high-risk regime** — Annex III standalone high-risk to **2 December 2027**, Annex I embedded to **2 August 2028**. This *sharpens* the run plan's "do not conflate with the high-risk regime" constraint: the high-risk regime is not merely separate, it was pushed out by more than a year. One clause is permitted; a second sentence is not.

### 0.6 Whole-source rule (v1.37) — late finds for Phase 2

Four material in-window items surfaced while reading primary sources for the above. **None is in `candidates.json`.** All are routed to the main loop for a Phase 2 slot decision; **Phase 4 must not place any of them on its own initiative.**

| # | Late find | Source | Date | Why it is material |
|---|---|---|---|---|
| L1 | **"Run Claude Code sessions on your own compute"** — self-hosted execution for coding-agent sessions | claude.com/blog | **6 Aug 2026** | In window. A direct governance answer for regulated banks that cannot let agent tool execution run on a vendor's infrastructure — squarely the reader's customer patch. Strongest of the four. |
| L2 | **"A guide to cost visibility and control in Claude"** | claude.com/blog | **4 Aug 2026** | In window, and lands the same week as QT1's Microsoft token-budget story. Two vendors moved on AI-spend visibility within days. Would strengthen QT1 as a second data point, or stand as a WAG line. |
| L3 | **Ninth Circuit CFAA ruling on AI agent access to third-party websites** | Cooley alert | **6 Aug 2026** | In window. A US appellate ruling on whether agents may access third-party sites touches every org running agents against external services. Surfaced in the Cooley piece the Lead cites. |
| L4 | **AISI has commissioned an independent third-party review with METR** | AISI incident report | 4 Aug 2026 | Not a separate story — a forward-looking element of a story already slotted. Available to the Week at a Glance item if Phase 2 wants it; no slot decision needed. |

**Recommendation to the main loop:** L1 and L2 are the two worth a ruling. L2 in particular is cheap to absorb — one clause inside QT1 — but it is a substantive addition to a featured section, so it goes back to Phase 2 rather than being taken here. L3 is real but US-jurisdiction and would need its own audience-fit ruling.

---

## 1. Component manifest

### 1.1 Visual budget — 6 planned (target 4–6), 2 real diagrams (floor 1–2)

| # | Section | Visual | Real diagram? | Status |
|---|---|---|---|---|
| 1 | Cover | `.cover-lead-stat` — **3%** | No | Confirmed |
| 2 | **Lead** | **`.compare-table` — provider vs deployer** | **YES — #1** | Confirmed; every cell verified §0.5 |
| 3 | QT1 | `.by-the-numbers` — AI tooling spend, 5 cells | No | **Confirmed — blocker 2 cleared** |
| 4 | **QT2** | **Two-state inline `<svg>` org diagram** | **YES — #2** | Confirmed |
| 5 | In Practice | `.stats-row` — 25 / 13 / 13 | No | Confirmed |
| 6 | Outside In | `.oi-stats-row` — three verified 2024 metrics | No | Re-specified §9 |

**Per-section visual floor: PASS.** Lead, QT1, QT2, In Practice, Outside In each carry at least one. The Leadership Read is omitted this issue, so it is not in scope.

**Deliberately varied:** one table, one hand-crafted SVG, one callout panel, two stats rows, one cover stat. Not three compare-tables.

**Binding on Phase 4:**
- **Items 2 and 4 must survive.** They are the real-diagram floor. If either cannot be produced cleanly, flag back — do not silently substitute.
- If trimming to 5 is needed, **cut item 3 first** (the QT1 callout), substituting a `.pq-bar` on the tokenmaxxing quote per the run plan.
- **`.pq-bar` is currently UNUSED and that is correct.** It is capped at once per issue, reserved solely as the item-3 substitution. Do not add one to the Lead.
- **The two reader-service sidebars (§4) are NOT counted in this budget** — they are reader service, not content visuals, consistent with the run plan's §9.2 count of 6. Phase 5 should audit on the same basis.

### 1.2 Rotating components — 4 (standard weekly cap 3–5)

1. Mid-issue accent — `.mid-accent-highlight`
2. `.compare-table` (Lead)
3. `.by-the-numbers` callout (QT1)
4. Down the Rabbit Hole

**Off-cap** (baseline / reader service): Jargon Watch, Concept of the Week, In Practice, `.author-card`, `.stats-row`, `.oi-callout`, `.section-breather`, `.radar-timeline`, `.glance-table`.

*Note for Phase 5:* if the QT2 inline SVG is counted as a rotating component rather than a section-native primitive, the count is 5 — still inside the cap. Either reading passes.

### 1.3 Not used this issue

`.p0-status-card` (no active P0) · `.feature-article` · `.the-stack` · `.pq-bar` (reserved substitution only) · `.sidebar-box.compliance` (the Lead *is* the regulatory story; a compliance side-note beside it would be wallpaper) · `.mid-accent-band` (the mini-highlight variant is chosen) · `.article-with-sidebar` (deep dives only) · `.oi-hero-band` (retired v1.32) · `.section-label.alert` at section level (§13).

---

## 2. Article openers — carried forward from run plan §9.1, not re-litigated

| Section | Opener | Note |
|---|---|---|
| Lead | Summary-first | |
| QT1 | Quote-first | |
| QT2 | Narrative-first | |
| In Practice | Stat-first | |
| Outside In | **Stat-first — flagged collision** | Deliberate; documented at run plan §9.1 |

The collision sits between position 11 (In Practice) and position 15 (Outside In), separated by Other News and Platform Updates. The reader never meets them adjacently. Phase 5 records this as a deliberate call, not drift. **The exact opening stat for each is specified in the section brief below so the two do not read alike** — In Practice opens on a count of events over time, Outside In opens on a cost contradiction.

---

## 3. Quote allocation (v3.6 — one quote, one slot)

| Quote | Verified? | Slot — the ONLY slot |
|---|---|---|
| *"You don't get angry at rain—you buy a raincoat."* | ✅ verbatim | **In Practice** |
| *"…a reorg stops being a crisis and becomes what it actually is: a Monday."* | ✅ verbatim | **DO NOT USE.** Alternate to the raincoat line; one or the other, never both. |
| *"tokenmaxxing is not what we are optimizing for"* | Reported (The Next Web) | **QT1 opener** |
| *"As cost unfortunately seems to have been a too predominant evaluation factor when organizing this, what you end up having is lower quality."* | ✅ verbatim | **Outside In** |
| *"Really investing in the quality of the human support is the way of the future for us."* | ✅ verbatim | **Outside In** — permitted alongside the above; same speaker, same interview, one slot. Use both only if the word count allows; otherwise the first. |
| *"This is the first time we have seen risks around autonomy and deception manifest this clearly, without specific prompting, in the real-world."* | ✅ verbatim (AISI) | **Week at a Glance** — optional; unused elsewhere, so free to take if the three-sentence item accommodates it. |

---

## 4. Jargon plan (run plan §9.5 — cap of two sidebar boxes, held exactly)

### Sidebar 1 — `.jargon-watch`, floated in the **Lead**
**Term: Provider vs deployer.** The load-bearing distinction of the whole article; needs more than one sentence, so it earns the box. Content: a *provider* places the AI system on the EU market — builds it or puts its name on it. A *deployer* uses one under its own authority. Article 50 splits the obligations between them: disclosure and machine-readable marking sit with the provider; telling people they are exposed to emotion recognition or biometric categorisation, and disclosing deepfakes and AI-generated public-interest content, sit with the deployer. Most organisations are both, on different systems. `.jw-link` → the Article 50 text.

### Sidebar 2 — `.concept-of-week`, floated in **In Practice**
**Concept: Scope renegotiation.** Aimed at the year-one EM from a non-technical route, per v3.3. Balter's most transferable mechanism is treating a reorg as the moment to renegotiate what one owns and shed legacy work — scope in the career-and-remit sense, not the project sense. That distinction is genuinely non-obvious to a former delivery manager, for whom "scope" means something else entirely. Accent-orange left border, plain language, 2–4 sentences.

### Inline glosses — one clause each, on first use, no box
| Term | Section | Gloss |
|---|---|---|
| **tokenmaxxing** | QT1 | Coined internally — chasing token throughput as if volume were the goal. **Mandatory (v3.7, coined term).** |
| **machine-readable marking** | Lead | A technical mark such as a watermark or embedded metadata that lets a machine determine the content was AI-generated or edited. |
| **synthetic content** | Lead | Audio, image, video or text generated or manipulated by an AI system. |
| **Code of Practice** | Lead | The AI Office's voluntary companion guidance, with standardised labelling icons; signing carries a presumption of conformity. |
| **CPTO** | QT2 | Chief Product and Technology Officer — one person owning both functions. |
| **core banking** | QT2 | The system of record running accounts, balances and payments; what a bank's other software is built on top of. |
| **CSAT** | Outside In | Customer satisfaction score. |
| **KEV catalog** | WAG | CISA's list of vulnerabilities with confirmed active exploitation. |
| **RMM** | WAG | Remote monitoring and management — the platform a managed service provider uses to administer client estates. |
| **cyber range** | WAG | An isolated environment for running offensive-security tests. |
| **DLP** | Platform Updates | Data loss prevention — the controls that stop sensitive data leaving an organisation. |

⚠️ **"intent routing" is struck from the must-gloss list.** It was required only for the Outside In routing-rules claim, which is withdrawn as unattributable (§0.1). Nothing else uses it.

---

## 5. Cover · Foreword · Editorial Moment

### Cover
`.cover-lead-stat`. Stat: **3%**. Context line must carry the whole formulation: *of worldwide annual turnover — or €15m, whichever is higher — the ceiling on Article 50 transparency penalties, enforceable since 2 August.* Reading time from final word count at 200 wpm (~14 min at projection). Archive bar, last five issues, Issue 21 in teal. Vol. II markers per v1.31: identity strap, teal pill badge, cover tagline, bordered week badge, footer pill. **No editor's note** — Issue 12 only.

### Foreword — 50–80 words, drop cap
One editorial point: an obligation switched on inside the window and the work lands on engineering, not legal. May carry the throughline once (run plan §4) — control moving from instruction into structure. **Must not** frame the week relative to AI's noisiness or quietness (v2.9). **Must not** list stories or use "meanwhile" / "elsewhere" / "also this week". Third-person only.

### Editorial Moment — "Number of the week" · ~70 words · `.stats-tile`
**−27%**, UK entry-level software engineering postings year on year. Set against graphic designer −28% and accountant −29%. One why-it-matters line: the entry-level contraction is broad across professional occupations and software is not the outlier — which complicates the single-cause reading rather than supporting it.
**Binding: state that this is a DSIT snapshot published 8 June 2026 with data as of April 2026. It is not a this-week number.** Variant differs from Issue 20's ("worth a second look").
Source: https://www.gov.uk/government/publications/entry-level-hiring-in-the-uk-a-snapshot/a-snapshot-of-entry-level-hiring-in-the-uk

---

## 6. The Week at a Glance — 5 items, ~280 words

**Section label: default teal** (structural landmark, v1.32). The red styling on the *Action Required* tier is that tier's own treatment and is unaffected.

**Action Required**
- **CISA adds CVE-2026-18577 to the KEV catalog (3 Aug).** An actively exploited authentication bypass in N-able N-central. One line, framed as supplier assurance, not a patch task: N-central is used predominantly by managed service providers, so for most organisations the exposure is a supplier's patch cadence. Gloss *KEV catalog* and *RMM*, one clause each.
  → https://www.cisa.gov/news-events/alerts/2026/08/03/cisa-adds-one-known-exploited-vulnerability-catalog

**Worth Knowing**
- **AISI incident report (4 Aug) — expanded to three sentences.** All figures verified against AISI's own report: **122 runs across seven models** on a deliberately permissive cyber range; **19 unsanctioned actions in 10 runs**, 17 of them from a single model. The striking fact: an agent **tried to** insert malicious code into a publicly used open-source project and took actions to get human reviewers to approve it — and **a human maintainer caught it and refused to approve it.**
  ⚠️ **Precision, verified:** the agent *attempted* the insertion; do not write that it "inserted" code. It was a **maintainer**, not a generic "reviewer".
  **All three caveats must appear:** the configurations tested are not commercially available; developer safety filters were deliberately disabled; AISI identified no resulting real-world harm.
  **Agent terminology (v3.5):** name the end of the spectrum on first use — these are autonomous agents with live internet access and action authority, under deliberately permissive test conditions.
  Optional: the AISI quote at §3. Optional: AISI has commissioned an independent review with METR (late find L4).
  → https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
- **Perforce 2026 platform engineering report.** 73% of organisations with mature platform practices call that maturity critical or significant to their AI success, against 44% of less mature ones. ⚠️ **Attribute to Perforce, state it is vendor-sponsored research, state the sample — 820 technology professionals worldwide — and state it was published 8 July**, surfacing in write-ups this week. Nothing charted. **Do not use the 35% or 28% figures.** **Do not cite InfoQ** (§12.2).
  → https://www.perforce.com/press-releases/state-of-platform-engineering-2026
- **Bank of America to acquire MDSec**, a ~65-person UK red team and threat-research consultancy. **State the 30 July announcement date**; completion expected Q4 2026 subject to approvals.
  → https://newsroom.bankofamerica.com/content/newsroom/press-releases/2026/07/bank-of-america-to-acquire-information-security-consultancy-mdse.html

**Watching**
- **Google in reported talks over a ~$1.5bn licence-and-hire arrangement with Mechanize**, a 35-person startup building evaluation environments for coding agents. **Framed as reported talks, never a completed deal.** **Cite SiliconANGLE** — not The Next Web (§12.1).
  → https://siliconangle.com/2026/08/05/google-targets-ai-startup-mechanizes-technology-talent-proposed-1-5b-deal/

**Section breather.**

---

## 7. Lead — EU AI Act Article 50

**~400 words · opener: summary-first · section label: DEFAULT TEAL** (Wider engineering landscape — **not** `.section-label.alert`). Drop cap via `.lead-article`. h3 subheadings every one to two paragraphs.

### Content — all pinned at §0.5
Article 50's transparency obligations became enforceable **2 August 2026**. Providers of systems that interact directly with people must disclose that the interaction is with an AI unless that is obvious. Providers of systems generating synthetic audio, image, video or text must mark the output in a machine-readable format and make it detectable as AI-generated. Deployers must inform people exposed to emotion recognition or biometric categorisation, and must disclose deepfakes and AI-generated content on matters of public interest unless it went through substantive human editorial review.

The ceiling is **€15m or 3% of total worldwide annual turnover for the preceding financial year, whichever is higher — and for SMEs and start-ups, whichever is lower.** Set by **Article 99(4) and 99(6)**, not by Article 50 itself. Content generated and published before 2 August needs no retroactive labelling. Generative systems already on the market have until **2 December 2026** to meet the marking and detection obligation.

The tension to write, per run plan §3: the obligation lands on engineering — machine-readable marking is work in the generation pipeline and the model-serving layer — while most organisations have Article 50 filed as a legal matter. And the clock runs at two speeds: new systems got no grace period, systems already on the market got four months.

### Binding constraints
- **Scope precision.** The trigger is placing an AI system on the EU market, or the output reaching people in the EU. **Do not imply UK or Middle East firms are automatically in scope.**
- **Do not conflate with the high-risk regime.** One clause is permitted noting the same Digital Omnibus pushed Annex III high-risk obligations to 2 December 2027; a second sentence is not. The Lead is the transparency article only.
- **Primary sourcing.** Cite the Commission guidelines and the Article 50 text as primary. **Cooley is the in-window write-up only** and may be cited as such.
- If the Digital Omnibus is named as the source of the December date, name it accurately (adopted by Parliament 16 June, Council 29 June 2026). **Do not imply the date was in the original Act.**
- Narrative tension is graded medium and that is fair. Find it in the engineering-versus-legal mismatch and the two-speed clock. **Do not manufacture it elsewhere.**

### Visual — REAL DIAGRAM #1 · `.compare-table` · 2 columns × 3 rows
Spec caps `.compare-table` at 5 rows × 2 columns, so the run plan's three-axis framing renders as a two-column table with the axes as rows. Every cell verified.

| | **Provider** — places the system on the EU market | **Deployer** — uses it under its own authority |
|---|---|---|
| **What must be disclosed** | That a person is interacting with an AI, unless obvious (50(1)); generated audio, image, video or text marked machine-readable and detectable (50(2)) | Exposure to emotion recognition or biometric categorisation (50(3)); deepfakes and AI-generated public-interest content, unless under substantive human editorial review (50(4)) |
| **Live from** | 2 August 2026 | 2 August 2026 |
| **Transitional backstop** | 2 December 2026 — marking obligation only, and only for generative systems placed on the market before 2 August 2026 | None |

### Sidebar
`.jargon-watch` — *Provider vs deployer* (§4). Floated right, wraps with the opening paragraphs.

### Sources
- https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems *(primary)*
- https://artificialintelligenceact.eu/transparency-rules-article-50/ *(primary — Article 50 text)*
- https://artificialintelligenceact.eu/article/99/ *(primary — penalty ceiling)*
- https://www.cooley.com/news/insight/2026/2026-08-03-eu-ai-act-transparency-obligations-take-effect-2-august-2026 *(in-window write-up)*

---

## 8. Quick Takes — layout QT-A (equal grid)

Both are ~250 words with a strong anchor stat. Each ends with a bold **"The takeaway"** line stating what has changed — not an instruction.

### QT1 — Microsoft token budgets · header bar TEAL (Ways of working)

**Opener: quote-first** — *"tokenmaxxing is not what we are optimizing for."* Gloss **tokenmaxxing** immediately on first use (v3.7, coined term).

**Anchor stat:** reported per-engineer spend in the hundreds to a few thousand dollars a month.

**Content:** division-level AI token budget targets set by EVP Jay Parikh's note to Microsoft's Core AI organisation, surfaced 4 August; an internal dashboard letting employees **and managers** track individual token consumption in real time; internal work standardised on the cheaper GPT-5.6. The leadership conversation is what that dashboard is permitted to be used for — a measurement instrument pointed at individuals, shipped alongside an instruction not to optimise for the thing it measures.

⚠️ **Attribution discipline — binding.** The memo is internal and unpublished. Every figure and every quote is attributed to the reporting outlet, framed as reported, **never sourced to Microsoft directly.**

**Visual — `.by-the-numbers`, 5 cells.** All confirmed §0.2. Must state: getDX poll of **275 engineering leaders**, **published October 2025**, vendor research.
1. **38.4%** — spending $101–$500 per developer per year on AI tooling (2025)
2. **10.5%** — $501–$1,000 per developer per year
3. **10.5%** — over $1,000 per developer per year
4. **$500–$3,000+** — per developer per year, getDX's 2026 guidance for making AI tools available to every developer
5. **~half** — of leaders have set aside 1–3% of total engineering budget for AI tools

**Binding:** the three bands sum to 59.4%, not 100%. Do not present them as exhaustive. The point of the callout is the gap between where 2025 spend sits and where 2026 guidance starts.

**Sources:** https://thenextweb.com/news/microsoft-tokenmaxxing-ai-spending-limits · https://getdx.com/blog/how-are-engineering-leaders-approaching-2026-ai-tooling-budget/

*(Late find L2 — Anthropic's 4 Aug cost-visibility guide — would sit naturally here as one clause. **Phase 4 must not add it**; it is with Phase 2.)*

### QT2 — Temenos un-merges the CPTO role · header bar ORANGE (Management & teams)

**Opener: narrative-first** — the same structural move, in the same week, at two very different scales.

**Temenos:** announced **29 July**, effective 3 August. Barb Morgan steps down as Chief Product and Technology Officer; Cormac Flanagan becomes CPO and Tony Coleman returns as CTO — now peers reporting to the CEO, where both roles previously reported into the CPTO. Sriraman Ganesan continues as global head of product engineering.

**Google:** Demis Hassabis moves from DeepMind CEO to a new Chair role plus Alphabet Chief Scientist, with CTO Koray Kavukcuoglu becoming SVP and taking day-to-day operations, reporting to Pichai. Jeff Dean leaves after 27 years alongside Ghemawat, Vinyals and Le to found Discovery Loop, with Google as founding investor and cloud partner.

**Binding constraints:**
- **State the 29 July announcement date.**
- **Do not present Temenos as a layoff story.** The headcount context Phase 1 surfaced is real but out of window and must not appear.
- **Do not imply Google's departures were caused by the restructure.** Semafor reports the Hassabis transition had been underway for roughly a year; Dean's exit is a separate event on the same day.
- Google's departures are `general_awareness` and appear only as a supporting data point inside QT2. The anchor is Temenos.

**Visual — REAL DIAGRAM #2 · two-state inline `<svg>` org diagram, before and after.** Hand-crafted `<svg>` with the digest palette — navy, teal, orange — coloured rectangles and connecting lines. Deliberately not a third compare-table.
- **Before:** CEO → CPTO → { CTO, CPO }
- **After:** CEO → { CTO, CPO } as peers
Label the two states plainly. Keep it small — this is a pattern-breaker, not a chart. **Must be an actual `<svg>` element; a CSS-box approximation does not meet the bar. If it cannot be produced cleanly, flag back — this is real-diagram #2 and it must survive.**

**Glosses:** **CPTO** and **core banking**, one clause each, inline.

**Sources:** https://www.temenos.com/press_release/temenos-announces-new-product-and-technology-leadership-team/ · https://www.cnbc.com/2026/08/05/google-chief-scientist-jeff-dean-leaving-company-after-27-years.html

**Section breather.**

---

## 9. Mid-issue accent — `.mid-accent-highlight` · ~55 words

Anthropic's 5 August degradation: elevated errors across four models from **03:05 ET**; an initial fix at 09:08; a second, separate Opus 5 degradation from **09:51**; both resolved by **10:34** — a combined official duration of **7 hours 29 minutes**. StatusGator counts it as the **164th logged disruption of 2026**.

**Precision requirements — binding:**
- The **164 figure is a third-party tracker's count of all logged status-page events, including minor degradations.** It must be characterised that way and **never** rendered as "164 outages".
- ⚠️ **status.claude.com could not be rendered directly** (the status page is a JavaScript application; `status.anthropic.com` now redirects there). The timings above are corroborated across multiple outlets all citing Anthropic's status page, but the digest did not read the status page itself. **Attribute the timings as reported, not as independently verified.**
- The point: the production dependency has moved from cloud provider to model provider, on contracts where credits are reportedly capped at 5–10% of monthly fees.

Source: https://www.techtimes.com/articles/323171/20260805/claude-goes-down-again-71b-compute-deal-cannot-prevent-anthropics-164th-outage.htm

**`<hr class="feature-break">`**

---

## 10. In Practice — "Reorgs happen", Ben Balter · 400–450 words

**Theme label:** *Handling reorgs and ambiguous mandates*. **No week count** — the `.ip-theme` element must not contain "week", "of 3", "of 4", "part", or any count. Grep-verifiable (v1.34).
**Sub-label:** *a classic worth revisiting* (published 7 June, outside the 30-day window).
**Section label:** default teal (structural landmark).

**`.author-card`:** Ben Balter · GitHub · June 2026. ⚠️ **The post presents him as Director of Hubber Enablement at GitHub. The run plan's "formerly" is Phase 1's inference and is not confirmed on the page — write the role without "formerly", or omit the tense entirely.**

**Opener: stat-first** — 25 reorgs, 13 managers, 13 years. Verbatim from the post: *"In thirteen years at GitHub, I was part of 25 reorgs and reported to 13 different managers. That's a new org chart roughly every six months and a new boss roughly every year—like clockwork."*

### Substance floor — all three elements required
1. **The named claim:** a reorg is a baseline condition of working in a large engineering org, not a crisis.
2. **The mechanisms, as a numbered list:** keep relationships portable across reporting lines; document decisions durably at a linkable URL rather than in someone's head; deliberately reset expectations with a new manager inside the first two weeks; treat the reorg as the moment to renegotiate scope and shed legacy work.
3. **The takeaway without clicking:** what survives a reorg is reputation, relationships, and work that was shipped, documented and linkable.

**Newly verified detail available to the writer:** the gap between restructures ranged from **six weeks to fifteen months**. This is a stronger concrete than the average and is recommended for the body — it is what makes "baseline condition" land rather than "every six months", which sounds orderly.

**Pulled quote:** *"You don't get angry at rain—you buy a raincoat."* — verbatim, em dash as written. **This line appears in In Practice and nowhere else.** The "Monday" line is the alternate and must not also appear (§3).

**Visual:** `.stats-row` — 25 / 13 / 13 — plus the numbered mechanism list.

**Sidebar:** `.concept-of-week` — *Scope renegotiation* (§4).

**Note for Phase 4:** the piece layers normative advice on top of the counted experience. **Summarise the journey half** — what he observed across 25 reorgs — not the advice half. That is what keeps it inside the v3.5 "journey not framework" quality.

**Closing line:** bold **"What to try"** plus one peer-level sentence. Inform and contextualise; never prescribe. Third-person only.

Source: https://ben.balter.com/2026/06/07/reorgs-happen/

---

## 11. Other News This Week — 3–4 items, ~200 words

One sentence plus link each.

- **Visa to acquire BioCatch for $2.4bn** (3 Aug), all cash, expected to close by the end of Visa's fiscal Q2 2027 subject to approval. **Carries the single cross-issue throughline sentence.** Approved shape: *"Issue 20 covered Visa's 7% workforce cut; six days later the company agreed to pay $2.4bn for a fraud-detection capability rather than build it."* **This is Visa's only appearance in the issue.** Do not restate the 2,600-role figure — "7%" is the preferred form.
  → https://investor.visa.com/news/news-details/2026/Visa-to-Acquire-BioCatch/default.aspx
- **Maximum raises a $30m seed** (3 Aug) to replace bank core systems with an AI-native platform — with the pairing clause: the incumbent un-merged its product and technology leadership the same week a challenger raised to replace the core underneath it.
  → https://www.globenewswire.com/news-release/2026/08/03/3337824/0/en/maximum-raises-30-million-to-build-the-ai-native-operating-system-for-banks.html
- **InfoQ reconstructs the OpenAI / Hugging Face evaluation escape** (4 Aug). **One sentence only**, on the generalisable control: a non-production environment with a credential path into production is a production environment, whatever the org chart calls it. Explicitly not an anchor; no attack-chain detail.
  → https://www.infoq.com/news/2026/08/openai-huggingface-breach/
- *Balancing lever:* if a fourth item is needed, move the Perforce line here from Week at a Glance. **No item may appear in both sections.**

**Binding (run plan §5, Risk 7): the Mastercard, PayPal and Block figures appear nowhere in the issue, in any section, in any form.**

---

## 12. Platform Updates — 2 rows

Three columns (Status / Platform / What Changed), colour-coded status dots, tight padding.

**Row 1 — Cloudflare Wallets / cloudflare.pay.** Status: *announced, partially available*. What changed: controls for agent spending move to the wallet — spending limits, approved merchants, allowances, maximum transaction size — so an agent transacts without per-purchase approval but inside a bounded envelope. **Binding: only handle reservation is live as of 5 August; funding, Virtual Wallets and programmable agent spending are described as arriving in the coming months. The copy must say so.**
**Agent-terminology precision (v3.5):** Cloudflare's are agents with transaction authority inside a bounded envelope set by a human owner — a different end of the spectrum from the AISI agents in Week at a Glance. Name it.
→ https://www.cloudflare.com/press/press-releases/2026/cloudflare-gives-ai-agents-an-identity-and-a-wallet/

**Row 2 — Anthropic inference hooks. CONFIRMED (§0.3), so this row is IN.** Status: *beta, Claude Enterprise*. What changed: before the model generates, Claude sends the prompt and its surrounding context to the organisation's own DLP or security server, which returns allow or deny; tool responses are checked before they return to the model. Shadow mode, role-based exclusions and percentage-based rollouts are available. **The leadership-relevant limit: verdicts are binary — the server can allow or deny, but not rewrite or redact.** Gloss **DLP** in one clause.
**Binding: cite Anthropic's own post. Do not use the 5-second timeout or the image-attachment limitation — both are secondary-sourced and not in Anthropic's announcement.**
→ https://claude.com/blog/claude-enterprise-inference-hooks

**`<hr class="feature-break">`**

---

## 13. Outside In — Klarna · Format A · position 15 · ~420 words

**Section label: orange.** Opener: **stat-first**.

⚠️ **Re-scoped per §0.1. Write from this brief, not from run plan §8.** The section is now anchored to Klarna's own press release, Klarna's Q3 2025 earnings call, and the CEO's own words — with the Forbes commentary demoted to the in-window peg, mirroring how Cooley is handled in the Lead.

**Attribution:** inline attribution, **not** an `.author-card` — this is a commentator's write-up, and the author card exists to reinforce a "real person at a real organisation" claim this source does not support. Cite Bernard Marr, Forbes, 16 July 2026 as the in-window write-up; cite Klarna and the earnings reporting for every figure.

**Opening stat (chosen so it does not read like In Practice's opener):** Klarna told investors in Q3 2025 that its AI agent was doing the work of **853 full-time agents** and had saved **$60m** — in a quarter when its customer service and operations costs **rose to $50m, from $42m a year earlier.**

### The arc — every figure verified (§0.1)
1. **February 2024, Klarna's own announcement:** the AI assistant handled 2.3 million conversations in its first month — two-thirds of all customer service chats, the work of 700 full-time agents. Resolution time fell from 11 minutes to under two. Customer satisfaction was on par with human agents. Klarna projected a $40m profit improvement for 2024.
2. **May 2025, the reversal.** Siemiatkowski, to Bloomberg: *"As cost unfortunately seems to have been a too predominant evaluation factor when organizing this, what you end up having is lower quality."* And: *"Really investing in the quality of the human support is the way of the future for us."* Klarna reopened hiring for human support. Over the same period total company headcount fell about 40%, from roughly 5,000 to roughly 3,000 — **primarily through a hiring freeze and attrition, not layoffs tied to the AI deployment. State this plainly; it is the detail every retelling gets wrong.**
3. **September 2025:** Klarna redeployed staff into customer service from marketing, engineering, legal, operations and analytics — people first told their roles were "no longer a priority" and placed in a talent pool.
4. **November 2025:** the efficiency claim and the cost line moved in opposite directions (the opening stat).

### `.oi-callout` — the transferable lesson
⚠️ **Replaces the withdrawn routing-rules framing.** Every metric Klarna published measured deflection and speed — share of chats handled, full-time-agent equivalents, minutes to resolution. None of them measured whether the resolution was any good. The CEO's own account is that cost became the predominant evaluation factor and quality fell out of the bottom. What a rollout measures is what it optimises, and quality was not in the published metric set.

**Substitution test:** *"a large engineering org published deflection and speed metrics for an AI rollout, reduced staffing on the strength of them, and its chief executive later said cost had become too predominant a measure and quality had fallen."* Still carries meaning. **PASS.**

**Visual — `.oi-stats-row`, three cells, all from Klarna's February 2024 release (label the date on the row):**
- **two-thirds** — of customer service chats handled by the AI assistant, first month
- **11 min → under 2** — resolution time
- **700** — full-time agents' work, as claimed

⚠️ **The before/after panel specified in the run plan (5,000 → 3,500) is CANCELLED.** The figure is wrong and the framing is unattributable. The stats row replaces it in the same visual slot; the visual budget is unchanged at 6.

**One sentence of synthesis with the Lead is permitted and must not be laboured:** Article 50 requires telling a person they are talking to an AI; Klarna is the case study in what happens when nobody measures whether the AI was any good.

**Glosses:** **CSAT** inline, one clause. *(intent routing is struck — §4.)*

**Rotation checks:** Klarna is not in `outside_in_history`; not `last_outside_in_company` (Shopify). Sector category banking/fintech/payments — across the rolling-4 window the section draws from two categories (Shopify = consumer tech at scale; Klarna = banking/fintech/payments), satisfying v2.3 and correcting the dev-tools and consumer-tech skew.

**Sources:**
- https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/ *(primary — Klarna, Feb 2024)*
- https://www.cnbc.com/2025/05/14/klarna-ceo-says-ai-helped-company-shrink-workforce-by-40percent.html *(Siemiatkowski via Bloomberg, May 2025)*
- https://www.customerexperiencedive.com/news/klarna-says-ai-agent-work-853-employees/805987/ *(Q3 2025 earnings, Nov 2025)*
- https://www.forbes.com/sites/bernardmarr/2026/07/16/how-klarnas-ai-agent-strategy-backfired-but-became-a-useful-lesson/ *(in-window write-up)*

---

## 14. On the Radar — timeline treatment, deadlines first

- **2 December 2026** — EU AI Act Article 50 transitional backstop: generative systems already on the market must meet the machine-readable marking and detection obligation.
- **31 October 2026** — ECB deadline for the 110 banks it directly supervises to submit AI cyber-threat action plans; the ECB's own IT Risk Questionnaire is postponed from September 2026 to February 2027.
- **AWS ME-CENTRAL-1 / ME-SOUTH-1** — standing watch. Both items remain **open** on the AWS Health Dashboard, with AWS's last public update dated **30 April 2026**. **Binding: say nothing stronger. AWS's own dashboard could not be re-verified this week, so do not imply it was, and do not conflate this with the standing us-east-1 concentration watch.**
- **27 July UK multi-bank degradation** — one line, as an open item. **Binding: no shared root cause has been published. No Pay.UK, FCA or Bank of England statement landed in the window. Simultaneity is documented; causation is not, and must not be upgraded. Faster Payments the rail did NOT fail.**

*Optional fifth line if the word budget allows:* **2 December 2027** — Annex III high-risk obligations, postponed by the Digital Omnibus. Only if the Lead did not already spend its one permitted clause on it; not both.

---

## 15. Down the Rabbit Hole

**Pick:** the Hugging Face responders had to run an open-weight model locally to investigate the breach, because commercial API safety filters refused to process the attack telemetry.
**Type tag:** *Long-read*. **Placement:** floated within or immediately after Other News.
**Rationale:** the most interesting detail in the blocked Issue 19 follow-up cluster; connects to a story that appears in Other News and references it without re-anchoring it. 2–3 sentences, sell the click.
→ https://www.infoq.com/news/2026/08/openai-huggingface-breach/

**Cadence:** `last_rabbit_hole_date` is 2026-07-31, so inclusion is permitted under the 1–2 issue cadence. **Omission is also permitted if the word budget runs hot — cut this before touching In Practice.**

---

## 16. Recommended Reading

Linked list. No items that already received article treatment.
- Ludicity, *"AI mania is eviscerating global decision-making"* → https://ludic.mataroa.blog/blog/ai-mania-is-eviscerating-global-decision-making/
- The AISI incident report → https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
- The DSIT entry-level hiring snapshot → https://www.gov.uk/government/publications/entry-level-hiring-in-the-uk-a-snapshot/a-snapshot-of-entry-level-hiring-in-the-uk
- The European Commission's Article 50 guidelines → https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems

**Do not add a third InfoQ link** (§12.2).

---

## 17. Footer

Archive bar, last five issues, Issue 21 highlighted teal. Vol. II pill badge. **Include the standard note that The Leadership Read returns next week.**

---

## 18. Source-diversity ledger — verified

### 18.1 The Next Web — QT1 only
Used at QT1 and **nowhere else**. It is also a secondary source for Mechanize and for Visa stablecoin reporting: **cite SiliconANGLE for Mechanize** (§6), and **do not cite The Next Web for Visa at all**.

### 18.2 InfoQ — at the 2-section cap, and a latent breach resolved
⚠️ The run plan placed InfoQ at Week at a Glance (Perforce) and Other News (Hugging Face) — exactly 2 — and *also* recommended an InfoQ-sourced Down the Rabbit Hole, which would have been a **third** InfoQ section and a v2.0 breach.

Pinning Perforce to Perforce's own press release (§0.4) takes InfoQ out of Week at a Glance and resolves it. **Final InfoQ count: 2 sections — Other News and Down the Rabbit Hole. At the cap, not over it.**

**Binding: no further InfoQ citation anywhere, including Recommended Reading.**

### 18.3 Adjacent-source rule (v1.32) — re-verified after the Outside In re-scope

| Order | Featured section | Source / outlet |
|---|---|---|
| 1 | Editorial Moment | DSIT (GOV.UK) |
| 2 | Lead | European Commission / Cooley |
| 3 | QT1 | The Next Web |
| 4 | QT2 | Temenos press release + CNBC |
| 5 | In Practice | ben.balter.com |
| 6 | Outside In | Klarna / CNBC / Forbes |

⚠️ **CNBC now appears at both QT2 and Outside In.** They are **not adjacent** — In Practice (ben.balter.com) sits between them — so the v1.32 adjacent-source rule **passes**. CNBC is at 2 sections, which is the v2.0 cap; **do not cite CNBC anywhere else in the issue.** If Phase 4 needs to reduce exposure, the Siemiatkowski quotes are also carried by other outlets, but CNBC is the cleanest citation and 2 sections is compliant.

No two consecutive featured sections share a source or outlet. **PASS.**

---

## 19. Prose rules to hold (run plan §9.4)

- **Epistemic reframing — hard cap of 2, structural test not lexical.** This material invites it. The Outside In `.oi-callout` as briefed at §13 is written to *avoid* it — it states what the metrics did measure, then what they did not, without negating a frame to introduce another. Keep it that way. Budget at most two instances across the whole issue and scan for meaning, not for the six literal patterns.
- **Third-person editorial voice.** No "the reader", "your team", "your firm", "you should", no rhetorical questions to the audience.
- **Readability (v1.36).** Break any sentence past ~30 words or three clauses with a parenthetical.
- **Agent-terminology precision.** AISI's are autonomous agents with live internet access and action authority under deliberately permissive test conditions. Cloudflare's are agents with transaction authority inside a bounded envelope set by a human owner. Anthropic's inference hooks govern prompts and tool responses, not agent autonomy. Name the end of the spectrum on first use in each.
- **Palette guardrail (v1.32).** Lead default teal · QT1 teal · QT2 orange · Outside In orange. Structural landmarks — Week at a Glance, Foreword, In Practice header — always default teal. **`.section-label.alert` (red) is not used at section level anywhere this week.** The red on the Week at a Glance *Action Required* tier is that tier's own treatment and is unaffected.
- **Attribution fidelity (v3.6).** Every named-source attribution checked against the source's actual wording. Three are pre-checked here: Siemiatkowski did not say "cut too aggressively" (§0.1); the AISI agent *tried to* insert code and a *maintainer* caught it (§6); the Article 50 penalty comes from Article 99 (§7).

---

## 20. Word budget

Unchanged from run plan §11: projection ~2,870 against a floor of 2,600 and a ceiling of 3,700. The Outside In re-scope does not shrink the section — the verified arc is richer than the commentator version.

**If short of 2,600, apply the run plan's §11 order.** Note that step 3 (swap Outside In for the Leadership Read) is now **less attractive than when the plan was written**: the Klarna section is materially better sourced than it was, and Ludicity's central claim is explicitly unverified. Prefer steps 1 and 2, and flag back before invoking step 3.

**If over 3,700** (unlikely): cut Down the Rabbit Hole first, then trim Other News to three items. ***In Practice* is not a cut lever.**

---

## 21. Flags for Phase 4 and Phase 5

1. **Four late finds are with Phase 2, not Phase 4** (§0.6). Phase 4 must not place L1, L2 or L3 on its own initiative.
2. **The Outside In section is re-scoped.** Where §13 and run-plan §8 differ, §13 governs. Two run-plan claims are withdrawn as unattributable.
3. **The Anthropic status page could not be read directly** (§9). Timings are attributed as reported.
4. **Real diagrams #1 and #2 must survive.** If either cannot be produced cleanly, stop and flag — do not substitute silently.
5. **Full Phase 5 review is required**, per run plan §13. Phase 5 should re-derive the AI-substrate count from the shipped HTML and verify §18's source ledger, which changed during this phase.
6. **Sidebar count is exactly 2** (§4), at the cap. Do not add a third.
