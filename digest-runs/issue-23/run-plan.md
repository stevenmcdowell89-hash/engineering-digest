# Issue 23 — Run Plan (Phase 2: inventory, curation & structure)

**Issue:** 23 · **Window:** 2026-08-15 → 2026-08-21 · **Publication date:** Friday 21 August 2026
**Format:** **DEEP DIVE** (user-directed — not re-litigated here)
**Template:** `assets/deepdive-template.html`
**Phase 2 artefact status:** this file is the contract for Phases 3 and 4. No candidate may be silently promoted, demoted or substituted after this point.

---

## 0. Format note (recorded, not re-argued)

The format is user-directed: a deep dive on **AI in software engineering** — current state, tooling usage, expected outcomes, implementation, and day-to-day usage across the lifecycle (spec, coding, testing, review, operations), primarily agentic but covering all types.

Two supporting facts worth recording for the audit trail:

- `consecutive_non_deepdive` stood at **4** entering this issue. The Issue 22 deep-dive trigger was declined on evidence quality (issue-22 run-plan §1.5: a dominating story AND verifying data threads). Both conditions are now met — the dominating story is user-set, and the data threads verify: of the 16 sources carried, 13 are primary (publisher's own report, paper, or engineering blog) and the three that are not are either dropped or explicitly caveated in §7.
- Deep dives are **exempt** from the AI-substrate ceiling (v1.32) and the long-form variety rule (v1.35). There is **no Leadership Read, no Outside In, no In Practice, no Editorial Moment and no Week at a Glance** in this issue. Their material is redirected in §6 and §8.

---

## 1. Central question, tension and through-line

### 1.1 The central question

**What has near-universal agent adoption actually produced, and where did the work go instead?**

### 1.2 The central tension (one paragraph — this is the issue's spine)

Adoption is settled; outcomes are not. Every **input** measure is rising steeply — weekly agent use, daily agent use, share of merged code that is AI-authored, pull-request volume, pull-request size, AI spend. Every **outcome** measure that has been independently observed is flat, falling, or unmeasured — developer experience, change confidence, code maintainability, the security pass rate of generated code, junior skill formation, and the share of organisations running agentic AI in production rather than in a pilot. The constraint on software delivery has moved from writing code to verifying, reviewing and maintaining it. Most rollouts are still resourced as though it has not moved.

### 1.3 The editorial through-line (thread-forward handoffs — Stat Discipline rule 5)

Each section closes by handing the next section a question. This is the connective tissue; it replaces stat repetition.

| From | Hands off | To |
|---|---|---|
| Executive summary | "Adoption is settled. What is it producing?" | S1 |
| S1 Current state & the spectrum | "These five numbers are not counting the same activity. Once 'agent' is pinned down, where in the working week does it actually sit?" | S2 |
| S2 Across the lifecycle | "The work has moved downstream into review and verification. Does the money show it?" | S3 |
| S3 Expected vs measured outcomes | "Spend and throughput are up; experience and confidence are down. What is being produced?" | S4 |
| S4 What it does to the code and the people | "The code carries a maintenance and security bill; the people carry a skill bill. Some organisations are paying it more slowly — what did they build first?" | S5 |
| S5 Implementation | "The enablement layer explains the spread between organisations. It does not explain why the surveys disagree with each other." | Counterpoint |
| Counterpoint | "Reconciled, what does a real rollout look like from inside a regulated engineering org?" | Case study |
| Case study (Monzo) | "One bank's numbers, one bank's bottleneck, published." | Lessons |

### 1.4 The agent-terminology spectrum (this issue's precision spine)

The conflation **is** part of the story and must be surfaced, not smoothed over. Every source is tagged in §5 with the end of the spectrum it measures. The three bands, as used throughout:

1. **Assistant / autocomplete / chat** — human writes, AI suggests or answers (Veracode's raw model generation; Anthropic's RCT; the "AI tools" half of Pragmatic Engineer's split).
2. **Agent-mode** — the agent plans and executes multi-step work, a human still initiates, reviews and merges (JetBrains; Monzo's Agent Chip; Meta's Muse Code; GitHub's agent PRs).
3. **Autonomous / production agents** — the agent acts with action authority and without per-step human approval (GitKraken's 28%; Deloitte's 11%; Perforce's self-reported 31%; the far side of PagerDuty's human-in-the-loop boundary).

Deloitte's published taxonomy — **augmentation → automation → true autonomy** — is the cleanest in the pool and anchors the terminology in S1. Attribute it to Deloitte; do not invent an alternative label (v3.6 attribution fidelity).

---

## 2. Section plan

Mapped to the Deep Dive Structure in the spec. Layout rotation is enforced: **never the same layout in two consecutive source sections.**

| # | Section | Layout treatment | Owning sources | Target words |
|---|---|---|---|---|
| — | Cover | Deep-dive cover: red gradient bar, Deep Dive badge, left-aligned headline, scope indicator, lead stat band | — | — |
| — | Foreword | 2 short paragraphs | — | 150–180 |
| — | How to Read This | `.how-to-read` 3-card grid (2 / 10 / 30 min) | — | 90 |
| — | Executive summary | Prose, index-not-preview | — | 280–320 |
| **S1** | **Current state: how many, and of what** | **By-the-numbers opening** (`.by-the-numbers`) + 2 SVGs | JetBrains · Pragmatic Engineer · GitKraken · Deloitte | 650–750 |
| **S2** | **Across the lifecycle: spec, code, test, review, run** | **Standalone with inline SVG** | Capgemini (test) · GitHub Octoverse + arXiv (review/merge) · PagerDuty (ops) · Spec Kit/Kiro/Tessl (spec, qualitative) · Dynatrace (one qualitative sentence) | 750–850 |
| **S3** | **Expected outcomes against measured outcomes** | **Article with sidebar** (`.article-with-sidebar`; sidebar = DORA's ROI model + methodology) | DORA · DX Q2 2026 benchmarks · DX plateau study · Atlassian State of Teams | 750–850 |
| **S4** | **What it does to the code, and to the people** | **Standalone with inline SVG** (diverging bars; optional second chart) | Veracode · GitClear · Anthropic RCT · Harvard/SSRN | 700–800 |
| **S5** | **Implementation: what the organisations getting value built first** | **Article with sidebar** (sidebar = the four named blockers) | Perforce · Bessemer/Ramp/Shopify · LeadDev (Socol) · Lloyds Banking Group | 650–750 |
| — | **Counterpoint** | `.counterpoint-section` + `.comparison-grid` (3 metrics per column, shorthand only) | Synthesis — no new full-context stats | 400–480 |
| — | **Case study: Monzo's Agent Chip** | `.timeline-box` + `.timeline-track` + pull quote | Monzo (Deshayes & Haley) | 500–600 |
| — | **Lessons & implications** | `.lessons-section` navy + `.verdict-box` + `.key-takeaway` | Shorthand references only | 450–550 |
| — | **Meanwhile…** | `.meanwhile-section`, `.meanwhile-lead` + `.meanwhile-grid` | §6 | 380–450 |
| — | **On the Radar** | `.radar-compact` two-column | §8 | 180–220 |
| — | **Recommended Reading** | Linked list | §9 | 140–180 |
| — | Footer | Archive bar, current issue pill | — | — |

Layout rotation check: by-the-numbers → standalone-SVG → article-with-sidebar → standalone-SVG → article-with-sidebar. **No consecutive repeats. Pass.**

### 2.1 Cover

- **Headline (left-aligned, 52px):** **The Constraint Moved**
- **Subtitle:** *Nine in ten professional developers now use a coding agent every week. Sixteen studies, 30,000-plus developers and one UK bank's own published numbers on what that changed across the lifecycle — and where the work landed instead.*
- **Scope indicator (3–4 stats, Playfair 36px, alert-red).** These are **reach descriptors, not headline stats**, and deliberately do not double-home any stat owned by a section:
  1. **16** — studies, surveys and datasets
  2. **30,000+** — developers surveyed
  3. **5** — lifecycle stages examined
  4. **1** — named bank rollout, with published numbers
  *(Phase 3: recount 1 and 2 against the final source list in §5 before printing. The 30,000+ derives from JetBrains 15,000+ / Atlassian 12,035 / PagerDuty 1,000 / Pragmatic Engineer 906 / Perforce 820 / GitKraken 554 / Anthropic RCT 52 — samples with an undisclosed n are excluded from the total.)*
- **Lead stat band (56px, alert-red — the single most memorable number in the issue):**
  **90%**
  Context line: *Nine in ten professional developers use a coding agent at least weekly; 68% use one every day. JetBrains, 15,000+ developers, fielded May–July 2026.*

**Why 90% and not the alternatives.** It is the freshest large-sample primary in the pool, it is in-window, it settles the adoption question in one number, and every subsequent section is a qualification of it. The runners-up were Atlassian's 89%-believe / 6%-can-show pair (cross-industry knowledge work, not engineering-specific, and April-dated) and DX's 28-fold spend rise (carries the tension better but needs a sentence of setup the band cannot hold). The 28× is homed in S3; the 89/6 is homed in S3.

### 2.2 Foreword (two short paragraphs)

Para 1 — what happened: the week produced the largest fresh sample yet on agent use, and it lands on top of a year of studies that have been measuring the other side of the ledger. Para 2 — why it warrants a full issue: the adoption question is closed and the outcome question is wide open, and those two facts are being reported as if they were one. No AI-default framing violation risk here — AI *is* the declared subject (v2.9 bans framing a week *relative to* AI's noisiness, not covering AI directly). Third-person voice throughout; no "your team", no rhetorical questions.

### 2.3 How to Read This (2 / 10 / 30 min)

| Path | Route |
|---|---|
| **2 minutes** | Cover lead stat → Executive summary → the Verdict box in Lessons & implications. |
| **10 minutes** | The 2-minute path plus **S1** (the spectrum ladder — what the adoption numbers are actually counting), **S3** (expected against measured outcomes) and the **Counterpoint**. |
| **30 minutes** | The full issue: all five source sections, the Monzo case study, Lessons & implications, then Meanwhile, On the Radar and Recommended Reading. |

### 2.4 Executive summary — index, not preview

Frames the central tension in §1.2, names the **scale** of the evidence ("sixteen studies and datasets, more than 30,000 developers surveyed, one bank's own telemetry") and maps what each section covers. **No stat appears at full weight here** — a stat given full context in the executive summary has spent its one full-context appearance (Stat Discipline rule 2). Explicitly signposts the terminology problem: the sources are not all measuring the same thing, and §1.4's three bands are the reader's decoder.

---

## 3. Section detail

### S1 — Current state: how many, and of what
**Layout: by-the-numbers opening, then prose, then two SVGs.**
Opens with a `.by-the-numbers` panel of the adoption ladder, then unpacks why the five headline adoption figures in the pool differ by a factor of eight. Establishes the three-band spectrum (§1.4) with Deloitte's augmentation/automation/autonomy taxonomy as the named frame. Covers the tooling churn — the practical finding is that the tool shares moved by tens of points inside eight months, which shortens the horizon of any standardisation commitment.
**Spectrum tags:** JetBrains = agent-mode and remote/cloud agents (not autocomplete). Pragmatic Engineer = splits assistant from agent explicitly, the cleanest split available. GitKraken = far end, "primary way of working is autonomous AI". Deloitte = organisational deployment ladder, cross-industry not engineering-specific.
**Hands off:** where in the working week does this sit?

### S2 — Across the lifecycle: spec, code, test, review, run
**Layout: standalone with a prominent inline SVG.**
Walks the lifecycle stage by stage. **Spec** — spec-driven development has consolidated into a tool category with three distinct positions (Spec Kit, Kiro, Tessl); **covered qualitatively, with no numbers** (see §7). **Code** — the volume shift, handed a shorthand reference to Bessemer's 92% which is homed in S5. **Test** — Capgemini's quality-engineering funnel is the widest-adoption / rarest-scale stage in the pool. **Review and merge** — Octoverse volume plus the arXiv collision result, which is the most directly actionable finding in the issue and the evidence-based argument for one agent per codebase. **Run** — PagerDuty's human-sign-off boundary, plus one qualitative sentence on Dynatrace shipping autonomous SRE agents as product.
**Hands off:** the work has moved downstream. Does the money show it?

### S3 — Expected outcomes against measured outcomes
**Layout: article with sidebar. Sidebar (`.sidebar-box`) = DORA's published sample ROI model and its methodology caveats.**
The section that carries the money conversation. DORA supplies the *expected* shape — a J-curve, a named verification tax, a modelled first-year ROI and payback period. DX supplies the *measured* shape from telemetry across its customer base, including the first decline in its Developer Experience Index. The DX plateau study supplies the *time* dimension: the uplift decays for two-thirds of developers after peak. Atlassian supplies the belief-versus-evidence gap at executive level, using its own term for it.
**Cross-issue throughline (single sentence, v3.8):** DORA's J-Curve led Issue 11 and was QT1 in Issue 12 — Phase 4 carries **one** sentence acknowledging prior coverage and does **not** re-introduce it as new. This is a source section here, never an anchor.
**Hands off:** spend and throughput up, experience and confidence down. What is being produced?

### S4 — What it does to the code, and to the people
**Layout: standalone with inline SVG (diverging bars). Optional second chart if space allows.**
Two halves. The code: Veracode's four-snapshot trend shows syntax correctness and security correctness have decoupled, and GitClear's four years of commit data quantify the maintainability bill. The people: Anthropic's randomised trial — a vendor publishing a result against its own commercial interest — turns "how juniors use AI" into a measurable skill-formation variable, and the Harvard working paper shows the seniority shape of adopting firms' headcount.
**Discipline:** Harvard is reported as **direction only** unless Phase 3 reads the paper (§7). The InfoQ/Allan piece is cited qualitatively for its argument and its figures are **not** printed.
**Hands off:** some organisations pay this bill more slowly. What did they build first?

### S5 — Implementation: what the organisations getting value built first
**Layout: article with sidebar. Sidebar = Bessemer's four named blockers (52 / 46 / 38 / 29).**
The "how orgs actually roll it out" section the user's scope asks for. Perforce supplies the precondition argument with a number attached — the platform investment made before the agents arrive. Bessemer supplies the concrete enablement layer at two named organisations: a central LLM proxy for cost and usage visibility without mandating a tool, a human review gate on production code, a tiered release system and a templated evidence checklist with a 48-hour review clock. Socol supplies the organisational cost nobody budgets for — parallelised agent work dissolves the three conditions that make a group a team, and rebuilding that is deliberate work. Lloyds supplies the UK counter-example: a bank treating agentic AI as a hiring, apprenticeship and training programme.
**Ramp carries the named-operator weight, not Shopify** — Shopify was the Issue 20 Outside In with a near-identical thesis, and the reversion-rate claim is Shopify-reported and unaudited.
**Hands off:** this explains the spread between organisations, not the disagreement between surveys.

### Counterpoint — adoption against outcome, perceived against measured
**Layout: `.counterpoint-section` (green left border, off-white, pill badge) with a `.comparison-grid`, 3 metrics per column, shorthand only.**

| Left column (red tint) — the adoption reading | Right column (green tint) — the measured reading |
|---|---|
| JetBrains' 90% weekly | Deloitte's 11% in production |
| GitKraken's 28% primarily autonomous | DX's first DXI decline |
| Bessemer's 92% code generation | Veracode's 56% pass rate |

**Reconciliation subheading is mandatory.** The argument: the two columns are not contradicting each other, they are counting different bands of the spectrum over different time horizons. Weekly tool use is not production autonomy. The J-curve and the plateau are both true because one measures the trough at organisational scale and the other measures individual savings after peak. And the perceived-versus-measured gap — Atlassian's belief-versus-evidence pair, and METR's slower-but-felt-faster result if Phase 3 pins it — is first a measurement failure, not automatically a value failure. **No stat boxes replaying earlier numbers; shorthand only. No new full-context stats.**

### Case study — Monzo's Agent Chip
**Layout: `.timeline-box` + `.timeline-track` with colour-coded dates, plus one pull quote.**
The strongest like-for-like reference point in the pool for this reader: a UK bank, primary-sourced, two named engineers, hard numbers, and a named bottleneck. Covers the build decision (in-house rather than buy, to avoid vendor lock-in), the guardrail architecture at implication level, the human review gate that was never removed, and the finding that removing the generation constraint moved the constraint to reviewer availability — which is the issue's title in one org's words.
**Altitude guard:** the MCP gateway gets one glossed sentence at architecture level. No configuration, no commands, no code.
**Date honesty:** published 13 August 2026, two days before the window opens. State the date; do not present it as in-window news.
**Adjacency flag for Phases 3/4:** Monzo also appears in Meanwhile as an outage item (19 Aug, stand-in engaged). These are two different stories about the same company. **Do not connect them, do not imply causation, do not cross-reference between the sections.** No published evidence links the outage to agent adoption and none may be implied.

### Lessons & implications
**Layout: `.lessons-section` navy, opening `.verdict-box`, closing `.key-takeaway`.**
**The verdict (one italic paragraph, the issue's thesis):** adoption is finished as a question and the rollout budget is still being written as though it were the only one. The measurable effect of near-universal agent use is that the same amount of judgement now has to be applied to several times as much output, by the same number of people, in the same week. Organisations that built a verification layer before they built an adoption plan are the ones whose numbers hold up.
**Key takeaways (`.key-takeaway`, teal arrow bullets, shorthand stat references only — never re-explain):** review capacity is the planning variable; the spectrum bands must be named in any internal target ("90% adoption" and "28% autonomous" are not the same commitment); tool standardisation is a shorter-horizon bet than it looked in January; the security review layer is a permanent cost line, not a transitional one; the junior-pipeline decision made this year sets the supervision capacity available in three; the platform investment precedes the payback.

---

## 4. SVG-worthy data threads (v1.30 minimum 3–4 — four confirmed, one optional)

| # | Thread | Chart form | Owning section |
|---|---|---|---|
| 1 | **The spectrum ladder** — 95% weekly AI use (Pragmatic Engineer) · 90% weekly agent use (JetBrains) · 55% regular agent use (Pragmatic Engineer) · 28% primarily autonomous (GitKraken) · 11% agentic AI in production (Deloitte) | Horizontal bars, five named sources, banded by spectrum position | **S1** |
| 2 | **Tool-share churn in eight months** — Claude Code 18→39, Codex 3→16, Copilot 29→21, Cursor 18→12 (plus JetBrains AI 9, OpenCode 7, Antigravity 6) | Slope chart (Jan 2026 → May–Jul 2026) or paired grouped bars | **S1** |
| 3 | **The divergence** — AI spend ×28 · self-reported time saved 3.3→6.1 h/wk · median PR size 42→72 lines · DXI 67→65, across the same five quarters | Indexed multi-line, four series on one baseline | **S3** |
| 4 | **The maintainability ledger** — reuse signals falling (cross-file calls −35%, refactoring −82%, legacy maintenance −74%) against risk signals rising (block duplication +81%, copy/paste +41%, error-masking +47%, two-week churn +15%) | Diverging horizontal bars, left/right of a zero axis | **S4** |
| 5 *(optional 5th)* | **Capability against safety** — syntax pass rate climbing toward ~100% against security pass rate flat at 55–56% across four snapshots | Two-line chart | **S4** |

Non-SVG visuals already carried by the format: cover scope row, lead stat band, `.by-the-numbers` panel (S1), two `.sidebar-box` panels (S3, S5), `.comparison-grid` (Counterpoint), `.timeline-box` (Case study), `.verdict-box` and `.key-takeaway` (Lessons), `.radar-compact`. **Phase 4: if any planned SVG cannot be produced cleanly from verified figures, substitute another visual — do not ship a section as pure prose (v1.31).**

---

## 5. Stat home-section assignments (Deep Dive Stat Discipline v1.9.2, rule 7)

Every headline stat below has **exactly one** home section where it gets full context. Everywhere else it appears in shorthand ("JetBrains' 90%", "the DXI decline", "the 56% pass rate") with no re-explanation. Spectrum band is tagged per source.

### Cover — lead stat band (home for one stat only)
- **90% weekly coding-agent use; 68% daily** — JetBrains. *Every later mention is shorthand, including in S1.*
- Scope-row figures (16 / 30,000+ / 5 / 1) are reach descriptors and are not homed stats.

### Executive summary — home for nothing
Frames the tension and the scale ("sixteen studies, 30,000+ developers"). No full-weight stats.

### S1 — Current state & the spectrum
- **JetBrains** *(agent-mode + remote/cloud agents)* — 15,000+ professional developers, fielded May–July 2026; tool shares: Claude Code 39% worldwide (18% in January, 47% US, 31% naming it primary), Codex 16% (3% in January; awareness 27%→65%), GitHub Copilot 21% (29% a year earlier, 79% awareness), Cursor 12% (18% in January; China 28%→16%), JetBrains AI 9%, OpenCode 7%, Google Antigravity 6% (15% in India).
- **Pragmatic Engineer** *(splits assistant from agent)* — 906 respondents, fielded 27 Jan–17 Feb 2026; 95% using AI tools at least weekly; 75% for at least half their work; 56% for 70%+; 55% regular agent use, 63.5% among staff+; company-size split — Claude Code 75% at organisations under 10, GitHub Copilot 56% at 10,000+; agent users nearly twice as likely to feel excited (61% vs 36%).
- **GitKraken** *(far end — "primary way of working is autonomous AI")* — 554 developers and engineering leaders; 96.4% of engineering organisations using AI coding tools; 84% reporting higher productivity; primary-way-of-working autonomous AI **7.6% → 28% in nine months**.
- **Deloitte** *(organisational deployment ladder, cross-industry)* — 11% with agentic AI in production, 14% ready to deploy, 38% piloting, 30% exploring, 42% still building a roadmap, 35% with no formal agentic strategy; the augmentation / automation / true-autonomy taxonomy.

### S2 — Across the lifecycle
- **Spec stage** — **no numbers.** Qualitative only: Spec Kit (open-sourced Sept 2025, most-adopted open-source option, supports 30+ coding agents), Kiro (GA, auto-router selecting models per task), Tessl (spec-as-source, specification is the maintained artefact). See §7 for what is barred.
- **Capgemini, World Quality Report 2025-26** *(mixed band)* — ~90% of organisations piloting or deploying GenAI in quality engineering; 52% in pilot; 37% with GenAI-augmented workflows in production; **15% at enterprise-scale deployment**; GenAI now the top-ranked QE skill at 63% against core QE skills at 60%; synthetic test data use 14% (2024) → 25% (2025).
- **GitHub Octoverse** *(agent-mode)* — 1,000,000+ coding-agent pull requests created May–September 2025; 80% of new developers using Copilot within their first week; 43.2m pull requests merged monthly (+23% YoY); 4.3m AI-related repositories.
- **arXiv (Xu, Subramanian, Karthik)** *(agent-mode)* — 33,596 agent-authored PRs across 2,807 repositories; 40.2% of repositories carry exactly-overlapping agent PR pairs, accounting for **79.4% of all agent PRs** (53.4% / 95.0% at a one-week window); of 747 tested pairs, **cross-agent pairs conflict 41.7% of the time against 19.8% for same-agent pairs**; 84.4% of conflict-affected files are source code; ~42% of conflicts structural.
- **PagerDuty** *(measures where autonomy stops)* — 1,000 leaders and developers across seven markets; 59% actively incorporating AI into operational workflows, 34% planning to; **44% require human involvement when AI remediates customer-facing systems, 43% for cross-functional incident coordination**; 62% expect an even human/AI mix within three years; self-described more-resilient organisations use AI at 63% vs 53%; every respondent agreed post-incident learning needs strengthening, 48% run structured improvement cycles.
- **Dynatrace** — no stats. One qualitative sentence, using the press release's own governance words ("transparent, auditable, and governed").

### S3 — Expected against measured outcomes
- **DORA, "ROI of AI-assisted Software Development" v.2026.1** *(assistant + agent, undifferentiated)* — the J-curve and its three named dip drivers (learning curve, **verification tax**, pipeline adaptation); published sample model for a 500-person organisation at a $176,000 fully loaded salary; change failure rate 5% → 6% with $344K of negative downtime impact; ~39% first-year ROI, ~$11.6m value against ~$8.4m investment, eight-month payback; Stanford research cited at 35–40% productivity gains on simple greenfield work against 10% or less on complex legacy code.
- **DX Q2 2026 benchmarks** *(whole spectrum — telemetry does not separate bands)* — 95% adoption measured by telemetry; more than half of merged code AI-authored; median PR size **42 → 72 lines** (Q3 2025 → Q2 2026); self-reported time savings **3.3 → 6.1 hours a week**; median quarterly AI spend **$1.5K → $44K (28-fold)**; **Developer Experience Index 67 → 65, the first decline DX has recorded**; code maintainability +3.8%; change confidence −6.1%; innovation ratio 57% → 58%.
- **DX plateau study (Brian Houck)** *(self-reported, all tool types)* — 500+ companies, May 2025 → April 2026; 31.4% of developers climbed from the lowest time-savings band to the highest; 69.7% of those reaching peak did so in under two quarters; **66.1% reported lower savings after their peak**; 50.5% of single-quarter peakers never reached that level again; median engineering organisation sees a 7.8% increase in PR throughput.
- **Atlassian State of Teams 2026** *(cross-industry knowledge work — say so)* — 12,035 knowledge workers and 173 Fortune 1000 executives, Jan–Feb 2026, plus 25 executive interviews; **89% of executives believe AI increases speed; 6% can identify clear organisation-wide ROI**; 85% of knowledge workers use AI at work, 29% have integrated it into daily workflows; 55% of executives observe AI widening performance gaps between teams; the top-performing 14% of teams are 5.6× more likely to credit AI with improved planning and 9.4× more likely to report better collaboration. **"AI efficiency paradox" is Atlassian Teamwork Lab's own term — use it as theirs.** The $161bn fragmentation tax and the 77% flatter-structures figure are off-topic and stay out.

### S4 — Code and people
- **Veracode 2026 GenAI Code Security Report** *(raw model generation — the assistant end, not agent-mode)* — 100+ models across four testing snapshots; average **security pass rate 56%**, i.e. nearly 44% of generated code carries a known security flaw, against syntax correctness near 100%; GPT-5.5 leads at 68%, six models cluster at 50–53%; coding-specialised models 51% against general-purpose 52%; large 53% / medium 51% / small 51%; Python 63%, C# 58%, JavaScript 57%, Java 30%; the Spring 2026 snapshot had the headline figure at 55%.
- **GitClear maintainability research** *(whole spectrum)* — 623 million changes, 2023–2026, eight quality signals; cross-file function calls −35% since 2023; refactoring ("moved" code) 21% of changes in 2022 → 3.8% in 2026; legacy maintenance 1.7% → 0.46% (−74%); block duplication +81% (40.3 → 73.0 per million changed lines); within-commit copy/paste +41%; error-masking constructs +47%; two-week churn +15%; copy/paste now roughly five times more common than refactoring, having been the rarer choice in 2022.
- **Anthropic randomised controlled trial** *(chat/assistant use, not agent-mode)* — 52 mostly junior engineers, all with a year+ of weekly Python, learning an unfamiliar async library; AI-assisted group averaged **50% against 67%** for the hand-coding group (Cohen's d = 0.738, p = 0.01), described by Anthropic as nearly two letter grades; the AI group finished ~2 minutes faster, not statistically significant; within the AI group, participants who asked conceptual questions and worked through errors themselves averaged 65%+, those who delegated generation and debugging averaged under 40%.
- **Harvard / SSRN, "Generative AI as Seniority-Biased Technological Change"** — **direction only, no magnitude** (see §7): US résumé data covering roughly 62–65 million workers at more than 280,000 firms; after GenAI adoption, junior employment declines at adopting firms relative to non-adopters while senior employment trends stay largely unchanged. Working paper, not peer-reviewed; posted 8 Sept 2025, last revised 6 June 2026; US labour data, UK/ME transfer is inferential.

### S5 — Implementation
- **Perforce 2026 Platform Engineering Report** — 820 technology professionals; **73% of organisations with mature platform-engineering practices call platform maturity critical or significant to AI success, against 44% of less mature organisations — a 29-point gap**; 66% already use AI in infrastructure workflows; 31% report fully autonomous AI implementation *(self-reported, definition soft — say so)*.
- **Bessemer Atlas, with Ramp and Shopify** — 90% of tech and engineering teams deploying AI in core operations; adoption by use case: code generation **92%**, code-review augmentation 79%, AI product features 75%, documentation 69%, **agentic development 60%**; named blockers: evaluating code quality **52%**, measuring productivity gains 46%, managing token costs 38%, security and IP 29%; Shopify's central LLM proxy (cost control and usage analytics, no mandated tool), human review still required on production code, AI-assisted reversion rates matching pre-AI baselines *(Shopify-reported, unaudited)*; Ramp's tiered release with a 5,000-customer early-access group and a templated evidence checklist reviewed within 48 hours.
- **LeadDev (James Socol)** — no numbers. The three conditions that make a group a team (shared goals, interdependent work, stability), Tuckman's stages as the frame, and the reconstruction mechanisms (celebrations, written charters, modelled behaviour). Flag that the author is currently on sabbatical.
- **Lloyds Banking Group** — almost 300 agentic-AI roles in the coming months within 1,000+ AI roles planned for 2026; 700+ colleagues already on AI use cases; a Level 6 AI Engineering apprenticeship with a 33-person cohort; AI Academy at 400,000+ course completions and 65,000+ responsible-AI module completions against a 67,000-strong workforce. Dated **22 June 2026** — state the date. **The "£50m of GenAI benefit" figure does not appear on the Lloyds release and must not be printed.**
  **Adjacency flag:** Lloyds also appears in Meanwhile as an outage item (18 Aug). Two different stories, same company. No linkage, no implied causation, no cross-reference.

### Counterpoint — home for nothing
Shorthand references only; 3 metrics per comparison column; the value is the reconciliation argument.

### Case study — Monzo
- **Monzo Agent Chip** *(agent-mode with a human review gate — explicitly not autonomous)* — MVP in roughly three weeks; MCP gateway architecture with remote infrastructure; integrations across Slack, Linear, GitHub and local environments; **~10% of all merged pull requests**; **1,800+ tasks a day**; nearly all Monzo engineers now using at least one coding agent regularly; guardrails (sandboxed container isolation, isolated proxy for external communication, per-task access configuration, environment-specific images, secrets isolation); engineers still review and merge; the bottleneck moved from engineer capacity to reviewer availability. Self-reported and unaudited — attribute as Monzo's own measurement.

### Lessons — home for nothing
Shorthand only (rule 6). "The 56% pass rate makes the review layer permanent", not a re-explanation of Veracode's methodology.

---

## 6. Meanwhile… — selection

Five items (four required minimum, eight maximum). Every item is **in-window (15–21 Aug)** with a real source, **none duplicates deep-dive body content**, and none re-anchors an Issue 21–22 featured anchor (EU AI Act Article 50, Microsoft token budgets, Temenos/Google splits, SAFE RFC, Oracle capex-vs-headcount, Zoom disclosure — all barred from the "Would have led" framing and all absent below). **No analysis** — what happened, one sentence of context, link.

### "Would have led" (2 — honest, not inflated)

1. **Two days of UK retail-banking degradation, and two different failure responses.**
   18 August: a technical fault locked Lloyds, Halifax and Bank of Scotland customers out of mobile and online banking for roughly two hours (2,450+ Downdetector reports for Lloyds, 1,300+ across Halifax and Bank of Scotland, about 67% app-related; service back by mid-afternoon). 19 August: 3,000+ Monzo customers reported problems after midday and Monzo moved into its published stand-in system, under which transfers, card payments and cash withdrawals continued while other app features were unavailable. 2–3 sentences, teal left border.
   **Binding constraints:** neither bank has published a cause for either incident — say so, speculate about neither. The 18 August Lloyds event must **not** be merged with the earlier July Faster Payments problem, and must **not** be presented as the 27 July UK multi-bank degradation, for which no shared cause has ever been published. Phase 3 pins the Lloyds figures to a bank statement, the BBC or a status page (Finextra returned 403 twice).
   Source: AOL/Evening Standard (Monzo); Yahoo Finance / TechRadar (Lloyds), pending Phase 3 re-pinning.

2. **Visa, Mastercard and around two dozen others form an Agentic Payments Alliance — and name loyalty as unsolved.**
   Rain launched the alliance on 18 August with roughly 25 founding members including Visa, Mastercard, Fiserv, Circle, Remitly, Shift4, Sardine, Lithic, Evertec, Episode Six and Chainalysis, to work on shared frameworks and test emerging standards for agent identity and authorisation. Its stated open problems include how to authorise an agent to transact, how to detect fraud in agent-initiated payments, and **how to extend loyalty and rewards programmes to agent-based transactions**. 2–3 sentences, teal left border. The loyalty admission is why this ranks second (standing v1.27 loyalty emphasis).
   **Constraint:** this is a fresh, dated, primary-confirmed news event and **not** a revival of the retired agentic-payments deep-dive cluster. Treat as week news only. One quote available if Phase 3 verifies verbatim (Mastercard's Sherri Haymond on innovation outpacing alignment).
   Source: American Banker; Rain via PR Newswire.

### "Also this week" (3 core + 1 contingent — one sentence each, two-column grid)

3. **McDonald's loyalty programme hands a reporter a 515-page prediction file.** A Wired reporter's data request to the loyalty programme returned an algorithmic dossier predicting future purchases. *Contingent: Phase 3 must locate the Wired original and confirm the 515-page figure; the "$50 billion behavioural-prediction race" framing is the Loyalty Newswire's characterisation and is not printed unless Wired carries it. If Wired cannot be found, drop the item.* Source: Wired via The Loyalty Newswire, 17 Aug.
4. **Apple patches an ImageIO code-execution flaw reported by Meta's red team.** Security updates for recent iPhones, iPads and Macs address an integer-overflow vulnerability triggered by processing a malicious image. *Phase 3 pins CVE-2026-65346 to Apple's own security-releases page before printing the identifier. No active exploitation was found — imply none.* Source: Apple security releases (via Tech Startups roundup, 19 Aug).
5. **Gen Z is treating debit as a daily financial control panel rather than a payment instrument.** PYMNTS/FIS research carried in the 17 August Loyalty Newswire, framed as a loyalty opening for banks. *Contingent on Phase 3 pinning the PYMNTS or FIS primary; drop if not pinned.*

If both contingent items (3 and 5) fail verification, Meanwhile ships at three items, which is below the four-item floor — in that case Phase 3 promotes **Meta's Muse Code** from On the Radar into "Also this week" with an explicit pre-window date statement, or flags back to Phase 2.

**Explicitly excluded from Meanwhile and why:** the LeadDev/Socol piece (18 Aug) is on-topic for the deep dive and is used in S5 — an AI-in-engineering essay is not "meanwhile"; the JetBrains survey, the Monzo Agent Chip post and the InfoQ junior-pipeline piece are all deep-dive body content; Meta Muse Code, the npm keyv/cacheable compromise and the EU AI Act are all pre-window and route to On the Radar.

---

## 7. Attribution fidelity — verification decisions (one per flagged blocker)

Phase 1 flagged four blockers plus a set of secondary-only figures. Each gets a decision: **drop**, **caveat**, or **send to Phase 3 for primary-source pinning**.

| Item | Decision |
|---|---|
| **Gartner — 60% of organisations on smaller engineering teams by 2029, up from 15%** (gartner.com returned HTTP 403) | **DROP.** Same unverifiable class as the retired payments aggregates. It is also a forecast, not a measurement. Phase 3 may reinstate it as a **single On the Radar line only** if it opens the Gartner newsroom page or a Gartner-published PDF and confirms both figures, the date and the framing. Default is omission. It appears in no source section under any circumstance. |
| **Spec-driven development figures — "93,000+ stars", "v0.8.7 (7 May 2026)", "3–10× higher first-pass success rate"** (aggregator-only) | **DROP the numbers.** S2 covers the spec stage **qualitatively**. Phase 3 may pin descriptive positioning (Spec Kit's open-sourcing date and agent support, Kiro's GA and auto-router, Tessl's spec-as-source model) to github.com/github/spec-kit, the Kiro product pages and Tessl directly. No quantitative claim about spec-driven development is printed. |
| **JetBrains publication date** (page renders "August 2026"; 19 Aug inferred from search reporting) | **SEND TO PHASE 3.** Pin the day on blog.jetbrains.com. If unconfirmable, cite **"August 2026"** with no day. Do not print 19 August unconfirmed. This affects the in-window claim for the lead stat — if only "August 2026" can be established, the foreword frames it as published this month, not this week. |
| **GitClear publication date** (month without a day; 2026-01-15 is a Phase 1 placeholder) | **CAVEAT.** Cite **"January 2026"** with no day unless Phase 3 pins it. |
| **Capgemini World Quality Report date** (2025-11-01 is a placeholder) | **CAVEAT.** Cite **"the 2025-26 edition"** with no day unless Phase 3 pins it on the Capgemini report page. The **58.1% "testing workload has increased"** figure is not traced to a primary and **stays out**. |
| **METR — 19% slower while believing 20% faster** (reaches the pool only via InfoQ's aggregation) | **SEND TO PHASE 3, contingent.** Usable in the Counterpoint's perceived-versus-measured argument **only** if pinned to METR's own publication. Otherwise **drop** and let Atlassian's belief-versus-evidence pair carry that argument alone. |
| **InfoQ/Allan's carried figures — "59% of daily engineering work / ~20% delegable", "80–90% of questions go to AI", "0 of 15 AI PRs mergeable"** | **DROP.** Not independently verified. The piece is cited **qualitatively for its argument** in S4 and listed in Recommended Reading; none of its numbers are printed. |
| **Harvard/SSRN magnitude** (Forbes reports "~80% per quarter"; other write-ups report "9–10% within six quarters" — not the same claim) | **DIRECTION ONLY** unless Phase 3 reads the paper and takes the authors' own stated magnitude. Neither secondary figure is printed. |
| **danilchenko.dev — "17 million agent PRs per month", "275 million commits per week"** | **DROP.** Personal blog, no GitHub primary. |
| **PagerDuty — "17.8% average MTTR reduction"** | **DROP.** Not traced to a primary. |
| **Lloyds — "£50m of GenAI benefit last year, doubling in 2026"** | **DROP.** Not on the Lloyds press release. |
| **diginomica — "~20 lost hours per engineer annually", "change-failure rates up 75%"** | **SEND TO PHASE 3.** Pin to the DX primary or drop. Not printed unpinned. |
| **Wired — "515-page file", "$50bn behavioural-prediction race"** | **SEND TO PHASE 3.** Locate the Wired original. The $50bn framing is the newswire's and is not printed unless Wired carries it. |
| **Apple — CVE-2026-65346** | **SEND TO PHASE 3.** Pin to Apple's security-releases page. No exploitation implied. |
| **Lloyds 18 Aug outage figures** (Finextra 403 twice) | **SEND TO PHASE 3.** Pin to a bank statement, the BBC or a status page. Do not merge with the July Faster Payments problem. |
| **Dynatrace August GA** | **SEND TO PHASE 3.** Confirm whether GA landed inside 15–21 Aug. If not, S2 carries one qualitative sentence and the item stays on the Radar as an announcement, not an in-window event. |
| **RETIRED aggregates — Block / Mastercard / PayPal org-shape figures** | **STAY OUT.** No exceptions, no section, no radar line. |
| **"July 2026 AWS mega-outage"** | **STAYS OUT.** Fifth consecutive demotion; still unverified. |
| **27 July UK multi-bank degradation** | Binding prior fact: no shared cause has ever been published. The 18 August Lloyds event is a **separate** incident and must not be presented as the same story. |

**Vendor-research attribution (mandatory on first use of each).** GitKraken sells the review-and-merge tooling its report identifies as the new bottleneck — the finding is self-serving and the sample is 554. Veracode sells application security. GitClear sells code analytics. Perforce, PagerDuty, DX, Dynatrace and Atlassian are all vendor or vendor-adjacent research. Anthropic's RCT is the notable inverse — a vendor publishing a result against its own commercial interest, which is worth naming. Bessemer's piece is a venture firm's portfolio-adjacent write-up. Monzo's and Shopify's numbers are self-reported and unaudited.

---

## 8. On the Radar (compact two-column)

1. **Meta ships Muse Code in beta (5 Aug)** — a terminal coding agent that fans work out to parallel sub-agents in isolated worktrees, competing on price against Anthropic and OpenAI. Third serious price-competitive entrant; changes the negotiating position on any multi-year seat contract. *Pre-window — state the date.*
2. **keyv and cacheable npm packages hijacked (4 Aug)** — around ten widely used caching packages representing 2bn+ monthly downloads were published with a credential-sweeping preinstall hook. One line. *The leadership question is which build agents hold tokens, not which package version is installed. Affected-package counts vary widely across trackers — give a range and a source, or no number.*
3. **EU AI Act: the high-risk regime slips.** Annex III stand-alone high-risk obligations (hiring, credit scoring, education, critical infrastructure) deferred to **2 December 2027**; Annex I embedded high-risk AI to **2 August 2028**. *Barred from any featured framing by the no-repeat-featured-anchor rule (Issues 21–22). The deferral dates are the only genuinely new information and are the only thing carried.*
4. **Dynatrace's autonomous SRE agent and no-code Agent Builder** — availability window stated as August 2026. *Contingent on the Phase 3 GA check in §7.*
5. *(Contingent)* **Gartner's smaller-teams forecast** — only if §7's verification clears. Default: omit.

---

## 9. Recommended Reading (linked list, 5)

Primary reports and papers worth reading in full, none of which received full section treatment or whose full text rewards the click:

1. **Anthropic Economic Index, June 2026 "Cadences" edition** — Claude Code at roughly a sixth of code-related conversations, 54% of Claude Code sessions on the top model against 10% for chat, sessions increasingly long-running agentic tasks. *One vendor's telemetry — attributed as such. Deliberately kept out of S2 to avoid a sixth source in one section.*
2. **Harvard / SSRN, "Generative AI as Seniority-Biased Technological Change"** (Hosseini Maasoum & Lichtinger) — the working paper behind S4's direction-only finding, for anyone who wants the authors' own magnitudes.
3. **InfoQ — Alasdair Allan on AI and the engineering-progression pipeline (13 Aug)** — the argument connecting this year's hiring decision to the supervision capacity available in three. *Recommended rather than cited, because its figures are a secondary aggregation.*
4. **Bessemer Atlas — "Inside AI-pilled engineering teams"** — the full account of the enablement layer summarised in S5.
5. **DORA — "ROI of AI-assisted Software Development" (v.2026.1) and the accompanying ROI calculator** — the model behind the finance conversation in S3.

**Held back deliberately:** **Ludicity, "AI mania is eviscerating global decision-making" (Nikhil Suresh, 18 July)**. It is a strong standing candidate carried forward from the Issue 22 state note, but deep dives carry no Leadership Read and using it here would burn it in a linked list. **Reserved for the Issue 24 Leadership Read** — outlet is clear, it has never been used, and lethain is excluded from Issue 24 by the no-consecutive-outlet rule.

---

## 10. Rejected candidates and reasons

### Rejected for deep-dive prominence (a section, the case study, or the counterpoint)

| Candidate | Reason |
|---|---|
| **Gartner — smaller engineering teams by 2029** | Verification blocked (403). Forecast, not measurement. Same class as the retired unverifiable aggregates. Radar line only if §7 clears; default omit. |
| **Meta Muse Code (5 Aug)** | Pre-window tool release. Fails the operational-concern test as a section — the leadership conversation it triggers (contract negotiation) is one sentence, not a section. On the Radar. |
| **npm keyv/cacheable compromise (4 Aug)** | Pre-window, and the audience-fit gate rejects it at the altitude this issue works at — the useful takeaway only lands for someone running the pipeline (the worked "Mini Shai-Hulud" rejection in the spec). One Radar line. |
| **EU AI Act (3 Aug)** | No-repeat-featured-anchor: it anchored Issues 21–22. Radar only, deferral dates only. |
| **Commonwealth Bank — 176 technology roles cut (10 July)** | Out of window; Australian; and the state file explicitly warns against aggregating bank and payments workforce numbers, which is the retired thread. Omitted entirely. |
| **Anthropic Economic Index (26 June)** | Single-vendor telemetry, and S2 already carries five sources. Recommended Reading. |
| **Dynatrace (27 July)** | A product announcement, not evidence. One qualitative sentence in S2 plus a Radar line, contingent on the GA check. |
| **Apple ImageIO patch (19 Aug)** | Device-fleet patching. Not engineering-leadership subject matter at section weight. Meanwhile one-liner. |
| **Ludicity (18 July)** | Out of window, and reserved for the Issue 24 Leadership Read per the Issue 22 state note. Not used in Issue 23. |
| **Bessemer as an Outside In piece** | Deep dives carry no Outside In. Redirected to S5 as implementation material, with **Ramp** carrying the named-operator weight — Shopify was the Issue 20 Outside In with a near-identical thesis. |
| **Monzo Agent Chip as an In Practice piece** | Deep dives carry no In Practice, and it does not fit the current season ("Making technical decisions when not the SME"). Redirected to the case study, which is a stronger use. The In Practice season is untouched by this issue and resumes at Issue 24. |
| **InfoQ / Alasdair Allan (13 Aug)** | A secondary aggregation carrying three figures with no traceable primary. Cited qualitatively in S4 for its argument; its numbers are dropped; the piece is listed in Recommended Reading. |
| **McDonald's / Wired loyalty dossier** | Sourced at one remove, and off the issue's subject. Meanwhile, contingent on the Wired primary. |

### Rejected for Meanwhile

| Candidate | Reason |
|---|---|
| **LeadDev / James Socol (18 Aug)** | In-window and strong, but on the deep dive's own subject — an AI-in-engineering essay in a section called "Meanwhile" is a category error. Used in **S5** instead. |
| **JetBrains survey (19 Aug)** | Deep-dive body content (cover lead stat + S1). Duplication rule. |
| **Monzo Agent Chip (13 Aug)** | Deep-dive body content (case study), and pre-window. |
| **Meta Muse Code / npm compromise / EU AI Act / CBA / Lloyds AI hiring** | All pre-window or out of window. Meanwhile requires an in-window primary for every item. Routed to On the Radar (first three), omitted (CBA), or into S5 with an explicit date (Lloyds hiring). |
| **DX, GitKraken, Bessemer, Veracode, GitClear, DORA, Deloitte, Capgemini, PagerDuty, Perforce, Atlassian, Anthropic RCT, Harvard, arXiv, Octoverse** | All deep-dive body content and/or out of window. |

---

## 11. Standing rails for Phases 3 and 4

1. **Audience-fit gate.** Leadership altitude throughout: what guides the team's work, never the work itself. **Barred from every section:** prompt patterns, instruction-file contents, CLI commands, config flags, model settings, MCP configuration detail, npm remediation steps, CVE forensics, code-structure conventions for agents. Monzo's MCP gateway and guardrails are described at architecture-and-implication level in a single glossed sentence.
2. **Agent-terminology spectrum named per source, on first use** (§1.4 and the tags in §5). Where a source is ambiguous about which band it measures, say so.
3. **Stat discipline.** §5 is binding. One home section per stat; shorthand everywhere else; the executive summary indexes and does not pre-digest; source sections do not cross-reference each other's numbers; the Counterpoint carries no new full-context stats; Lessons reference without re-explaining.
4. **Third-person editorial voice (v1.31).** No "your team", no "the reader", no rhetorical questions to the audience.
5. **Epistemic reframing cap: 2 for the whole issue.** Structural test, not lexical. The chosen headline ("The Constraint Moved") deliberately avoids burning one. Phase 4 runs the structural scan before delivery.
6. **One quote, one slot.** Candidate quotes: Monzo on the bottleneck (case study), GitClear's "the throughput is real, but so is the debt it accrues" (S4 pull quote), Mastercard's Haymond line (Meanwhile, if verbatim-verified). Phase 3 allocates; Phase 4 does not duplicate.
7. **Attribution fidelity.** DORA's own labels are "verification tax" and "the tuition cost of transformation". "AI efficiency paradox" is Atlassian Teamwork Lab's. Deloitte's ladder is "augmentation / automation / true autonomy". Do not invent labels and attribute them.
8. **Jargon to gloss or sidebar** (Phase 3 allocates): coding agent · agent-mode · autonomous agent · remote/cloud agent · MCP gateway · DXI (Developer Experience Index) · J-curve · verification tax · change failure rate · DORA (the research programme, not the regulation) · spec-driven development · quality engineering · synthetic test data · security pass rate · block duplication · error-masking constructs · co-active PRs · structural vs textual conflict · stand-in processing · graceful degradation · LLM proxy · platform maturity · agentic development · Cohen's d · seniority-biased technological change · Octoverse · Antigravity / OpenCode / Codex.
9. **Visuals.** Minimum 3–4 inline SVGs (four planned, one optional fifth). Actual `<svg>` elements only; no AI-generated images. If a planned visual cannot be produced from verified figures, substitute — never ship a section as pure prose.
10. **Component budget.** Deep dive 4–6 components (Meanwhile is standard and not counted).
11. **Phase 5 mode: FULL review.** This run carries named high-risk items — a user-directed format, sixteen sources under stat-discipline assignment, four verification blockers, two companies appearing in two sections each, and a barred-anchor list. Lightweight review is not appropriate.

## 12. Named risk flags for this run

- **Double-appearance risk (two companies).** Monzo: case study (Agent Chip) and Meanwhile (19 Aug outage). Lloyds: S5 (AI hiring, 22 June) and Meanwhile (18 Aug outage). Both are legitimate — different stories, same organisation — but Phase 4 must not connect them, imply causation, or cross-reference between the sections.
- **Date honesty.** Several of the strongest sources are pre-window: DX Q2 benchmarks and GitKraken (14 Aug), Monzo (13 Aug), and everything in S3/S4 running back to January. A deep dive legitimately synthesises the recent literature, but every date is stated plainly and nothing older is framed as this week's news. The only in-window primary carrying the "this week" framing is JetBrains — and that is subject to the §7 date check.
- **The J-curve repetition.** DORA anchored Issue 11 and was QT1 in Issue 12. Here it is a source section with a single cross-issue throughline sentence. It must not read as a re-run.
- **Meanwhile floor.** Two of five items are verification-contingent. If both fail, Meanwhile drops below the four-item floor — the fallback is in §6.
- **Vendor-research density.** Eight of sixteen sources are vendor or vendor-adjacent. Every one carries its attribution on first use, and the Counterpoint's reconciliation argument depends on the reader knowing which is which.
