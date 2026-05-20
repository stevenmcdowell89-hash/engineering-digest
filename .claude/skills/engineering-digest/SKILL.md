---
name: engineering-digest
description: >
  Generate issues of the Engineering Digest, a weekly magazine-style briefing for hands-off
  engineering leadership (directors, VPs, heads of engineering) at a software company whose
  customers include UK and Middle East banks and fintechs. Covers what guides the team's
  work — rollouts, adoption, process, decisions — not the technicalities the team executes.
  Use when asked to run, generate, create, or schedule the Engineering Digest, or when the
  user mentions "digest", "engineering digest", "weekly briefing", "deep dive issue", or
  "light edition". Supports three issue formats: standard weekly, deep dive, and light
  edition. Includes HTML templates, editorial spec, and a compliance checklist.
metadata:
  author: steven-mcdowell
  version: '1.33'
---

# Engineering Digest

Generate magazine-style briefing issues for hands-off engineering leadership (directors, VPs, heads of engineering) at a software company whose customers include UK and Middle East banks and fintechs. The audience guides and directs teams, makes decisions affecting rollouts, adoption, and maintenance — they do not write code, build pipelines, or run the systems themselves. The digest covers what guides the team's work, never the technicalities of the work itself.

## Changelog

- **v1.33 (May 2026)** — Phase briefing pattern baked into the spec. Across Issues 11/12 re-runs the orchestrator (the calling agent) discovered that phase briefs were running 3,000–4,000 words with most of the content recapitulating the spec the subagent was already reading. Tightening briefs to ~500 words of run-specific context only, capping report-backs at 100–150 words, and adding a lightweight Phase 5 mode for low-risk runs cut subagent wall-time by ~25–35% with no measurable quality degradation. The pattern lived in the orchestrator's habit, not the spec. v1.33 makes it a documented rule in SKILL.md (*Phase briefing pattern* section before *Workflow*) so any future orchestrator inherits the discipline rather than reinventing the bloat. Six rules: brief is run-specific context (not spec restatement); cap at ~500 words; report-backs at 100–150 words; Phase 5 has two modes (lightweight default, full when high-risk); trust prior phase artefacts as the contract; front-load run-specific risk flags. Lightweight Phase 5 criteria: run plan flags no high-risk items AND Phase 4 self-reports clean.
- **v1.32 (May 2026)** — News-first restoration + structural fixes. After Issue 12 v1.31 shipped clean structurally but still felt like a curated essay anthology (5 of 6 featured slots were blog posts, no real news anchored), the audit surfaced a deeper spec drift: across v1.23–v1.31, the digest had narrowed scope from "software engineering news magazine" to "fintech-engineering reading list," and the curation logic had implicitly favoured blog posts over news events. v1.32 corrects eight things: (1) **Four operational concerns repositioned** — Banking/fintech/loyalty drops from primary concern to cross-cutting sub-theme; "Wider engineering landscape" takes the fourth slot (cross-industry news, vendor moves, hyperscaler decisions, peer-org engineering decisions). The reader at a fintech still gets fintech content as a consistent thread, but coverage scope widens to engineering broadly. (2) **News-event Lead test** — the Lead must be a news event from the past 7 days, not a blog post / reflective essay. Blog posts go to Leadership Read / In Practice / Outside In. (3) **Anchor balance** — ≥2 of 3 anchors are news events; ≤1 can be analysis. News up front, analysis at the back. (4) **Reader-experience AI count** — across the 6 featured sections (Lead, QT1, QT2, Editorial Moment, Outside In, In Practice), cap AI as substrate at 4 of 6, supersedes the v3.8 anchor-only count (≤2 of 3) which Issue 12 v1.31 passed while shipping 6 of 6 AI-flavoured. (5) **Adjacent-source rule** — no two consecutive featured sections from the same source/outlet, catches the Stripe→Stripe adjacency that v2.0's per-issue cap missed. (6) **Bank-regulator scope-conditional test** — replaces v1.31's blanket block; regulator stories are eligible for anchor slots when implications cross-industry (the "would it matter at Mozilla?" test). (7) **Section spread hardened** — v1.28's "at least one mid-issue" tightens to "no two adjacent"; new default order interleaves long-form with news (IP → Other News → Platform Updates → OI → Radar → LR). Outside In Format B (hero band) retired — it always placed before Leadership Read and violated the new rule. (8) **Palette guardrail** — `.section-label.alert` (red) for Operating at scale ONLY when active-threat or upgrade-window; structural landmarks (WAG, Foreword, In Practice header) always default teal. Issue 12 v1.31 misapplied red to both WAG and Brooker's reflective Lead.
- **v1.31 (May 2026)** — Issue 12 corrections. After eight versions of editorial rewrites that all set up to *not be Issue 10*, Issue 12 v1.30 led with the Issue 10 story under a "loyalty fintech upstream" framing and shipped a Vol. II refresh so subtle the reader couldn't tell two issues apart. v1.31 corrects seven things: (1) **Voice rule** — no direct address to reader; the publication speaks third-person editorial only; *"the reader"*, *"your team"*, *"your firm"*, *"you must"*, rhetorical questions to the audience are all banned. (2) **Restore the Issue 10 lesson** — bank-regulator decisions about banking compliance (FCA, ADGM/FSRA, PSR, HMT, DORA-EU) are At a Glance / On the Radar / Other News only; never Lead, never featured Quick Take. The v3.3 attempt to allow them under "positive framing" produced the Issue 10 failure again and is retired. (3) **No-repeat-featured-anchor** — a story that was an anchor in either of the previous 2 issues cannot anchor this issue, even in a different slot. (4) **Within-issue concern diversity** — Lead, QT1, QT2 span ≥2 concerns; at most one anchor per concern. Guarantees general-engineering content shows up in anchors even when banking/fintech surfaces. (5) **Bolder Vol. II identity** — taller identity strap, teal pill badge for "Vol. II", italic cover tagline beneath masthead, bordered week badge, footer Vol. II pill badge. The Issue 12 cover should be visibly distinct from Issue 10 at thumbnail size. (6) **In Practice header redesign** — was a navy bar that read as a breather; now off-white with deep-teal accents flowing continuously into the inset body, with an explicit `<hr class="feature-break">` above so the section start is unambiguous. (7) **Visual substitution rule** — when a planned visual can't be sourced (quote unverifiable, data unconfirmed), Phase 4 SUBSTITUTES another visual rather than ship pure prose; the v1.30 rule prevented degraded visuals but allowed the unintended consequence of *no* visual.
- **v1.30 (May 2026)** — Visual density expansion. The right register for an engineering-leadership audience is data-informed and diagram-friendly — not prose-memo. v1.30 adds three new visual primitives, a per-section visual floor, an issue-level visual budget, and a deep-dive minimum bump to maintain the format differential. **New CSS components**: `.compare-table` (compact 2-col comparison table, max 5 rows, scaled for inline use in Quick Takes and *In Practice* — distinct from the deep-dive `.comparison-grid` which stays larger and red/green tinted); `.process-flow` with `.pf-step` / `.pf-arrow` (3–5 step horizontal flow diagram with arrows, stacks vertically on mobile; the writer fills in step labels, CSS handles the layout); `.sparkline` wrapper (80px inline container for hand-crafted SVG trend marks within prose). **New rules**: per-section visual floor (no major section is pure prose end-to-end); per-issue visual budget (4–6 visuals total across the Standard Weekly); real-diagram floor (≥1–2 of those 4–6 must be a real chart / table / diagram — not just stats rows or pull quote bars). **Deep dive minimum bumps from 2–3 inline SVGs to 3–4** to maintain the visual heft differential as weeklies get denser. **Schema**: candidates.json gains an optional `chartable_data` field for Phase 1 to flag visualisable content. **Phase 4 rule**: if a clean visual can't be produced, the section ships prose-only and Phase 4 flags back — no degraded visuals, no fabricated data, no filler tables.
- **v1.29 (May 2026)** — Visual refresh marking the start of **Volume II**. After a run of editorial rewrites (v1.22 → v1.28) the publication needed a visible signal that something has changed without being marketing-loud. The refresh introduces a subtle, considered visual identity: (1) **Cover identity strap** — thin band above the masthead showing *Vol. II · Issue [N] · [Date] · [N] min read*, with the teal Vol. II marker as the lead element. (2) **Cover dot-grid motif** — subtle 40px dot grid at ~7% opacity tiled across the cover background, signalling *engineering* through graph-paper visual vocabulary without literalism. (3) **Cover variant** — `.cover-lead-stat` OR `.cover-lead-quote`; the cover band now responds to whether the issue's strongest signal is a number or a verifiable quote. (4) **Per-section reading time** — `(N min)` next to each major section h2, in 12px med-gray. Lets the reader budget. (5) **Drop caps in Lead + Leadership Read** — automatic via CSS when `.lead-article` / `.mgmt-section` classes are used; three drop caps per issue (foreword + Lead + Leadership Read) gives visual rhythm. (6) **Volume II marking in footer**. (7) **Palette by concern** — Management = orange, Ways of working = teal, Operating at scale = alert-red, Banking/fintech/loyalty = green; uses existing CSS classes consistently. (8) **One-time editor's note** in Issue 12's foreword (commented in template, used once, removed for Issue 13 onwards). Editorial spec gains a new "Visual Identity (v1.29)" section; compliance checklist gains matching verification items. Audience-fit, taxonomy, and structural rules (v1.23–v1.28) unchanged.
- **v1.28 (May 2026)** — Five enhancements to address audit findings on the v1.25 / v1.27 re-runs. (1) **Section spread**: the three long-form sections (*In Practice*, Outside In, The Leadership Read) MUST NOT all cluster at the back of the issue — at least one is placed mid-issue. Default is *In Practice* at position 10 (between the mid-issue accent area and Other News), with Outside In and Leadership Read at positions 14–15. Fixes the "wall of essays" pacing problem in the v1.25 re-run. (2) **AI-substrate ceiling**: across rolling 4 issues, no more than 2 anchor slots (Lead, QT1, QT2) have AI as the substantive driver. The v3.4 substrate classification is intellectually correct but the v1.25 re-run shipped 4 of 5 anchor stories AI-driven and read as "another AI issue" to the audience. (3) **Concept of the week** (`.concept-of-week`): a new recurring component, peer of Jargon Watch, but aimed at the year-one EM from a non-technical route — glosses management craft concepts (calibration, levelling, skip-levels, psychological safety, RACI, etc.) the issue uses but doesn't explain. Same frequency trigger as Jargon Watch; same off-cap status. Accent-orange left border to distinguish visually. (4) **Author card** (`.author-card`): replaces inline attribution at the top of *In Practice* / Leadership Read / Outside In Format A sections with a visually distinct block (text initials avatar, name, role + org, date). Reinforces the "real person at a real organisation" claim visually. (5) **Cross-issue throughline**: a single sentence inside an article may reference prior coverage when continuity adds substance — not a new section. Plus weekly-template.html updated with CSS for the two new components.
- **v1.27 (May 2026)** — Two targeted fixes from the v1.25 re-run audit. (1) **Jargon Watch trigger test broadened (v3.7)**: the v3.0 trigger was a "proper-noun / capitalised-term scan" which missed the Issue 11 v1.25 LLM-eval failure (the term appeared 8+ times in the In Practice section, in lowercase and hyphenated form, without a single gloss). The v3.7 trigger now scans four categories — proper nouns, acronyms/abbreviations (including lowercase), hyphenated neologisms used as named concepts in the article, AND a numerical-frequency rule (any term appearing 3+ times in the body of one section MUST be glossed, regardless of capitalisation). The reader bar now explicitly includes a year-one engineering manager from a non-technical route. (2) **Loyalty / commerce-media as research emphasis, not a new section**: the reader's specific vertical is a niche industry that doesn't surface every week. Rather than create a "Loyalty Patch" section that would either be empty or force thin material, Phase 1 now runs explicit loyalty / commerce-media queries every week, and when a story surfaces it takes a normal slot (Quick Take, Outside In, Other News, On the Radar) based on substance. Wider engineering news is explicitly NOT crowded out by forced thin loyalty pieces.
- **v1.26 (May 2026)** — Three Phase-4 failure-mode tightenings caught by the v1.25 re-run review. (1) **Epistemic reframing scan is now structural, not lexical** — the cap of 2 per issue is unchanged, but the spec now defines the cap via a structural test (*"does this sentence name what something is NOT in order to introduce what it IS?"*) rather than a list of six lexical patterns. Phase 4 was scanning for the literal patterns and returning 0 while shipping three structurally equivalent constructions. (2) **One quote, one slot** — a source quote (verified verbatim OR paraphrased) now appears in at most one slot per issue. The v1.25 re-run had the same Scanlan line anchoring both the Editorial Moment and the Outside In callout, in two different paraphrased forms. (3) **Attribution fidelity** — concepts attributed by name to a source must use that source's actual terminology. Inventing a label and putting it in the source's mouth is disallowed even when the substance is correct. The v1.25 re-run had *"DORA's 'instability tax'"* where DORA's actual labelled cost is *verification tax*. All three additions are in editorial-spec.md Audience & Tone and compliance-checklist.md Prose Style + new Quote Allocation & Attribution Fidelity section.
- **v1.25 (May 2026)** — Simplification pass. Three structural cuts: (1) ***In Practice* whitelist of 10 sources retired** — replaced with the three required qualities (named operator at a real org, journey not framework, technical content at implication level) as the sole filter; any source qualifies if it passes. The Monzo archetype remains as a voice/calibration reference, not a source restriction. (2) **Cross-issue rotation tracking retired** for Quick Take layout (`last_qt_layout`), Outside In format (`last_oi_format`), editorial moment variant (`last_editorial_moment`), and lead opener (`last_lead_opener`). Within-issue variety is now the only enforced rule; layout/format/opener choices are made on craft fit rather than rotation. (3) **Outside In format variants reduced from 6 to 3** (kept: A full feature, B hero moment, C compact inset; dropped: D omit-as-format, E contrast card, F meanwhile strip). Editorial Moment variants reduced from 4 to 3 (dropped: "What changed since last week"). Plus: Two-Tier Label Hierarchy section converted from a standalone enforced rule to a template-convention note; `current_in_practice_season` and `in_practice_history` are now load-bearing state fields. Compliance checklist trimmed accordingly. Audience-fit gate (v3.2), banking/fintech framing (v3.3), and the operational-concern taxonomy (v3.4) are all preserved.
- **v1.24 (May 2026)** — Topic taxonomy and lead-selection rewrite. The v2.0 top tier of six beats (AI tooling, Engineering leadership, DevEx, Banking & fintech, Software engineering news, Security & compliance) is **retired**, replaced by four **operational concerns**: Management & teams, Ways of working, Operating at scale, Banking/fintech/loyalty. **AI is the substrate that runs through all four — not a fifth concern.** Tool releases (Cursor, Copilot, Claude Code feature ships) are classified by the operational decision they trigger, not by being AI; a Cursor pricing change that forces a budget conversation is "Ways of working", a Cursor capability release with no associated leadership conversation is At a Glance. The mechanical rotation rules — **3-issue lookback (v2.0), topic saturation cap (v2.0), AI-balance check (v3.1)** — are all retired and replaced by the operational-concern lead test plus a soft breadth guardrail (leads span at least 3 of 4 concerns across rolling 4 issues, editorial guidance not a mechanical block). Schema beat enum updated (4 concerns, was 7 beats). Compliance checklist Topic & Lead Selection section rewritten.
- **v1.23 (May 2026)** — Audience reframe (corrects v3.2). The reader is now defined as **engineering leadership at a fintech operating in the customer-loyalty / commerce-media space, working directly with UK and ME banks as customers** — plus a wider management team including managers who came in from non-technical routes. The v3.2 "the reader is never inside a bank / software vendor serving banks as customers" framing was directionally right but lost the actual signal — the reader is at a fintech (not a generic software vendor) and operates in a specific loyalty/commerce-media patch. Banking, fintech, and loyalty stories are now first-class subject matter framed as *"the world the reader operates in"* — the v3.2 *customer-pressure gate* (regulatory stories "never the lead, never an anchor by default") is **retired**. Regulatory stories qualify for any slot they earn on operational impact, including the Lead. Topic taxonomy and lead-selection mechanical rules unchanged in this version — addressed in v1.24.
- **v1.22 (May 2026)** — Ported to a Claude Code project skill. The previous harness's subagent-type names (`research`, `general_purpose`) collapse to the single `general-purpose` type Claude Code exposes; the previous cost-driven model split (Sonnet for research/planning/writing/review, GPT-5.5 for curation, Opus only for deep-dive writing) is replaced by Opus 4.7 across every phase since cost is no longer a constraint. Curation remains the structurally most important step — splitting research, curation, planning, writing, and review into distinct phases with reviewable artefacts is the load-bearing design, not the model choice. Workspace paths are repo-relative (`digest-runs/issue-N/` under the repo root, `engineering-digest-state.json` at the repo root) rather than `/home/user/workspace/`. **Every editorial control, hard rule, version-numbered rule (v3.2 audience, v3.1 workflow, v3.0 substance floor, v2.x rules across sections), HTML template, the compliance checklist, and the candidates schema are preserved verbatim.**
- **v1.21 (May 2026)** — Audience reframe. "Banking/fintech as content lens" framing retired (it produced the Issue 10 FCA-lead failure). Audience is now defined as hands-off engineering leadership at a software company serving banks/fintechs as customers — not engineering managers AT banks. New primary curation test: "what guides the team's work vs. what the team's work is." Added `urgency_classification` field to candidates schema (act_this_week / decide_this_month / general_awareness) with anchor-slot eligibility gates. In Practice now operates against a strict whitelist (Monzo, Wise, Stripe, Cloudflare, GitHub, Shopify, Spotify, Intercom, Airbnb, Figma) plus the existing three-quality filter; Monzo archetype locked in. Platform Updates condensed from a default 5-row table to 0–2 rows MAX. Compliance checklist gained an audience-fit & urgency gates section.

## When to Use This Skill

Use when the user asks to:

- Run, generate, or create an Engineering Digest issue
- Schedule the digest to run on a recurring basis
- Regenerate or update an existing issue
- Anything referencing "the digest", "engineering digest", "weekly briefing", "deep dive", or "light edition"

## Quick Reference

| Format | When to use | Template | Page limit | Tier |
|---|---|---|---|---|
| Standard Weekly | 2–3+ stories from top-priority areas (default) | `assets/weekly-template.html` | 5–7 pages | Default (cost-effective) |
| Deep Dive | One story dominates the entire issue | `assets/deepdive-template.html` | No hard limit (but must have 2–3+ SVG visuals) | **Highest-quality** |
| Light Edition | Top-priority areas are quiet | `assets/light-template.html` | 3–4 pages | Default (cost-effective) |

## Workflow Architecture (v3.1)

The digest is produced as a **five-phase pipeline** with explicit artefacts at each handoff. Phases run in order; drafting may not begin until phases 1–3 have produced their artefacts. The full reasoning, rules, and balance checks live in `references/editorial-spec.md` under "Workflow Architecture (v3.1)" — read that section before running. This SKILL.md gives the operational summary.

The pipeline exists to fix a structural failure in earlier versions: the lead was being chosen during research (anchoring on the first strong story found) rather than after research (chosen against the full week's candidate pool). Splitting research, curation, planning, writing, and review into distinct steps with reviewable artefacts at each handoff stops that failure mode and several others.

### Default models per phase

Every phase runs on Opus 4.7. The original split (cheap models for research/planning/writing/review, premium for curation only) existed to manage cost on a different harness — cost is no longer a constraint here, so the top model is used across the board. Curation is still the structurally most important step (one bad lead-selection call ruins the issue) and benefits most from Opus's instruction-following; the others are now strictly better, not just adequate.

| Phase | What it does | Subagent type | Default model |
|---|---|---|---|
| 1. Beat sweep | Research every beat, build candidates inventory | `general-purpose` | `opus` |
| 2. Inventory & rank | Curate, choose lead and slots, apply balance rules | `general-purpose` | `opus` |
| 3. Slot detail | Per-section briefs, component allocation, jargon scan | `general-purpose` | `opus` |
| 4. Generate (Standard / Light) | Write the HTML against the plan | `general-purpose` | `opus` |
| 4. Generate (Deep Dive) | Write the HTML against the plan | `general-purpose` | premium tier from `model-catalog/text-models.md` (currently `opus`) |
| 5. Review | Compliance checklist + plan cross-check | `general-purpose` | `opus` |

If the user explicitly overrides (e.g. "run this week on the top model"), honour the override.

## Phase briefing pattern (v1.33)

How to brief each phase subagent — applies to every Step 2–6 dispatch below. Pattern was validated across Issues 11/12 re-runs; cuts subagent context by ~80% and phase wall-time by ~25–35% with no measurable quality degradation.

**1. Brief = run-specific context only, not spec restatement.** The subagent reads `editorial-spec.md` (~110 KB) and `compliance-checklist.md` (~38 KB) at the start of every phase. Do not repeat the rules in the brief — reference them by name. *"Apply the v1.32 anchor-balance rule and adjacent-source rule"* is better than restating both rules in 400 words each. The orchestrator's job is to flag what's specific to **this run** (date window, prior phase's contract, named-failure-modes-to-avoid this week, what to report back). The brief should be readable end-to-end in under a minute.

**2. Cap each brief at ~500 words.** Above that, the brief is recapitulating the spec instead of orchestrating. The pre-v1.33 baseline was Phase 4 briefs of 3,000–4,000 words; v1.33-pattern Phase 4 briefs land at 500–700 words. Spec compliance does not improve with longer briefs — the subagent's spec reading is the contract.

**3. Report-backs capped at 100–150 words.** The phase artefact (run-plan.md, section-briefs.md, issue-N.html, etc.) is the actual report; the report-back is a summary, not a re-statement. Verdict + 2–3 specific flags + blockers. The orchestrator already has the artefact on disk.

**4. Phase 5 has two modes — full review and lightweight.** Default is lightweight when the run plan flags no high-risk items AND Phase 4 self-reports clean validation. Full review is required when (a) the run plan flags a named-failure case (FCA-class regulator story, AI-substrate ceiling at risk, etc.), (b) Phase 4 reports a caveat or unresolved blocker, (c) this is the first run under a new spec version, or (d) the operator overrides.
- **Lightweight Phase 5**: trust Phase 4's grep self-reports; spot-check 6–10 highest-risk items only (the v1.32 named-failure list, the latest spec version's new rules); 150-word verdict. Wall-time ~3–5 minutes.
- **Full Phase 5**: re-run all compliance checks from scratch, full-detail `review.md`, comprehensive caveat list. Wall-time ~8–12 minutes.

**5. Trust prior phase artefacts as the contract.** Phase 4 reads `run-plan.md` + `section-briefs.md` and executes against them. Phase 5 reads the rendered HTML + `run-plan.md` and verifies. The orchestrator's brief for Phase 4 should reference *"execute the contract in run-plan.md and section-briefs.md, holding the v1.32 rails [list 2–3 named-failure cases relevant this week]"* — not re-derive what the run plan should produce.

**6. Front-load run-specific risk flags.** A clean "named failure modes specific to this run" list at the top of every brief — 2–4 bullets — is more durable than weaving warnings through. *"This week: FCA PS25/12 is in the candidate pool — regulator scope-conditional test applies; AI-substrate count is at the ceiling — Editorial Moment + Outside In must include at least one non-AI."* Specific, scoped, scannable.

The orchestrator gains nothing by re-explaining the audience definition or the four operational concerns in every brief — those are stable across runs and live in the spec. What changes per run is the candidate pool, the prior anchors, the named risks. Brief on those.

---

## Workflow

### Step 0: Read the editorial spec

Read `references/editorial-spec.md` in its entirety, paying particular attention to the "Workflow Architecture (v3.1)" section. Read `references/candidates-schema.json` so you know the phase 1 output shape. This is the single source of truth.

### Step 1: Set up the run directory

Decide the issue number from the state file (`engineering-digest-state.json`, increment `last_issue_number` by 1). Create `digest-runs/issue-N/` to hold the run artefacts. This directory is the audit trail — don't skip it, don't reuse one from a previous issue.

### Step 2: Phase 1 — Beat sweep (research subagent)

Spawn a `general-purpose` subagent on `opus`. Preload the `engineering-digest` skill. The subagent's objective is to produce `candidates.json` matching `references/candidates-schema.json`, covering every top-tier beat with 3–5 queries each, plus the secondary pools (Leadership Read, In Practice with both source pools, Outside In, rabbit hole, active P0 stories). Pass the date window and a snapshot of the relevant state-file fields in the objective.

The subagent must record an entry (or null finding with reasoning) for every top-tier beat. Empty beats are valid; "nothing came up" is not.

When the subagent returns, validate the file exists, parses as JSON, has all 7 top-tier beats, and the secondary pools. If validation fails, send back to the subagent with the specific gap.

### Step 3: Phase 2 — Inventory and rank (curation subagent)

Spawn a `general-purpose` subagent on `opus`. Preload the `engineering-digest` skill. Pass the path to `candidates.json` and the state file. The subagent's objective is to produce `run-plan.md` in the same run directory, applying:

- **Operational-concern lead test (v3.4)** — the lead must connect to one of the four operational concerns (Management & teams / Ways of working / Operating at scale / Banking, fintech & loyalty) with a clear "what changes for the reader" takeaway. Tool releases (Cursor, Copilot, Claude Code feature ships) are At a Glance unless they trigger an operating-model, budget, or org-shape conversation
- **Soft breadth guardrail (v3.4)** — across rolling 4 issues, leads span at least 3 of the 4 operational concerns. Editorial guidance, not a mechanical block — document any same-concern repeat in the run plan
- **AI is the substrate, not a beat** — classify candidates by the operational decision they trigger; the v2.0 topic saturation cap and v3.1 AI-balance check are retired
- **Lead sanity check (v3.1)** — chosen lead must be in top 3 candidates ranked across all beats by combined so-what + narrative tension + UK/ME relevance, or justified in run notes
- **Format decision** falls out of the inventory, not chosen up front

The run plan must list rejected candidates for the lead slot with reasons. This is the most expensive phase and the most important.

### Step 4: Phase 3 — Slot detail (planning subagent)

Spawn a `general-purpose` subagent on `opus`. Preload the skill. Pass `run-plan.md` and the state file. The subagent's objective is to produce `section-briefs.md`: per-section briefs naming opener style, sidebar plan, jargon terms to gloss or sidebar, pull quote candidates, target word count, and source URLs. Plus a top-level component manifest (which 3–5 layout components are in this issue and why).

Apply the cadence gates against the state file (`last_feature_date`, `last_stack_date`, `last_rabbit_hole_date` — these gate occasional sections). The v3.5 spec retired the per-rotation trackers (`last_qt_layout`, `last_oi_format`, `last_editorial_moment`, `last_lead_opener`); within-issue variety is now the rule and cross-issue rotation is no longer mechanically enforced.

### Step 5: Phase 4 — Generate (writing subagent)

Read the matching template from `assets/` (`weekly-template.html`, `deepdive-template.html`, or `light-template.html`).

Spawn a `general-purpose` subagent. **Model:** `opus` for Standard/Light. For Deep Dive, load the `model-catalog` skill, read `text-models.md`, and use the current highest-quality text/agent model (currently `opus`). Preload the `engineering-digest` skill.

Pass `run-plan.md`, `section-briefs.md`, the template path, and the spec to the subagent. The subagent generates the full HTML against the plan — no editorial decisions, just execution. If the writer hits a blocker (a source URL doesn't resolve, a quote doesn't actually exist, a word count won't fit), it must stop and flag back rather than improvise.

### Step 6: Phase 5 — Review (review subagent)

Spawn a `general-purpose` subagent on `opus`. Pass the HTML file, `references/compliance-checklist.md`, and `run-plan.md`. The subagent runs the full compliance checklist and the lead-sanity cross-check (lead in HTML matches plan, AI-balance still holds, no silent re-promotion). Returns a pass/fail report.

Fix failures in the main loop or send back to the relevant phase. Don't deliver until pass.

### Step 7: Deliver

Share the HTML with the user. Generate the PDF. Push to the GitHub Pages repo if configured. Update the state file. Save the run directory — it's the audit trail and the input to next-issue rotation rules.

## Run Directory Structure

Each issue produces a `digest-runs/issue-N/` directory containing:

```
issue-N/
  candidates.json     — phase 1 output, validates against references/candidates-schema.json
  run-plan.md         — phase 2 output, the contract for phases 3–4
  section-briefs.md   — phase 3 output, per-section writing briefs
  issue-N.html        — phase 4 output, the issue itself
  issue-N.pdf         — generated from the HTML
  review.md           — phase 5 output, compliance pass/fail report
```

This directory is preserved after the issue ships. It's the audit trail that lets us diagnose what went wrong when an issue underperforms, and it's the input to next-issue planning (e.g. checking which candidates were rejected previously).

## State Tracking

When running multiple issues over time (especially via a scheduled cron), maintain a state file at `engineering-digest-state.json` tracking:

```json
{
  "last_issue_number": 3,
  "last_issue_date": "2026-03-24",
  "last_issue_format": "weekly",
  "last_lead_topic": "Management & teams",
  "last_lead_topics_3issues": ["Operating at scale", "Ways of working", "Management & teams"],
  "consecutive_non_deepdive": 1,
  "last_outside_in_company": "Wise",
  "outside_in_history": [],
  "last_leadership_read": "Pragmatic Engineer",
  "leadership_read_history": [],
  "last_feature_date": null,
  "last_stack_date": null,
  "last_rabbit_hole_date": null,
  "current_in_practice_season": "Performance conversations",
  "in_practice_season_progress": 2,
  "in_practice_history": [],
  "p0_stories_tracking": []
}
```

This ensures:
- Issue numbering is continuous
- **No-repeat-lead rule is enforced** — the lead article topic must differ from `last_lead_topic` (see editorial spec)
- Outside In companies are not repeated consecutively
- The deep dive trigger (3 consecutive non-deep-dive issues) is tracked
- Priority 0 stories get P0 status cards (not progress bars) in subsequent issues

## Scheduling

When setting up a recurring schedule:
- The cron task should reference this skill
- Each run should: read the editorial spec → research → select format → generate → run compliance checklist → deliver
- The state file must be read at the start and updated at the end of each run

## Important Rules (always enforced)

- **No inflammatory headlines** — "drones", "attacks", "strikes" are fine when factual; "bombs" only if literally accurate and relevant
- **No corporate language** — no "leverage", "synergy", "best-in-class"
- **No action items** — inform and contextualise only
- **No AI-generated images** — SVG diagrams only, and only actual `<svg>` elements
- **No fabricated links** — every URL must be real and working
- **Always search the web** — never generate an issue from training data alone
