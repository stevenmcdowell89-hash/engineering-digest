# Engineering Digest — Issue 13 Section Briefs (Phase 3 planning artefact)

**Date window:** 2026-05-29 → 2026-06-05
**Format:** Standard Weekly
**Input contract:** `digest-runs/issue-13/run-plan.md` (Phase 2). Every story is already chosen there — this brief plans HOW to execute, not WHAT to run. Phase 4 writes against this without re-deciding anything.

---

## COMPONENT MANIFEST (top-level)

### Rotating layout components in this issue (Standard-Weekly cap: 3–5)

| # | Component | Where | Why this issue |
|---|---|---|---|
| 1 | **Compare table** (`.compare-table`, ≤5 rows × 2 cols) | Lead | Agent-commerce protocol landscape (Visa TAP/Verified Agent ID, Mastercard Agent Pay, Stripe MPP, Google AP2/UCP). Real-diagram-floor item #1. Carries the "who signs intent vs cart mandate / settlement" comparison faster than prose. |
| 2 | **Inline SVG chart** (before/after bar) | QT1 | Span-of-control 10.9 (2024) → 12.1 (2026) with Meta 50:1 outlier. Real-diagram-floor item #2. Two comparable data points + an outlier = chart, not prose. |
| 3 | **Stats tile** (`.stats-tile`) | Editorial Moment | "Number of the week" = 50:1. Single striking stat, non-AI, keeps the AI substrate count down. |
| 4 | **Pull quote bar** (`.pq-bar`) | Lead (mid-article) | Default for the Lead per spec; the core "rails turn on this month" insight. Max once per issue — spent here. |
| 5 | **Outside In callout** (`.oi-callout`) | Outside In (Vercel) | Core lesson box — Design Engineer as a first-class role collapsing the design→frontend handoff. Gives the section visual hierarchy. |
| 6 (cut lever) | **Mid-issue accent: number band** (`.mid-accent-band`) | between QTs and In Practice | OPTIONAL. 12.1 average span. **First page-cut lever after the rabbit hole** — drop if the issue runs dense or to hold the visual budget at 6. See note below. |

**Component count confirmation:** 5 rotating components in the locked set (compare table, inline SVG chart, stats tile, pq-bar, oi-callout). The mid-issue accent band is a conditional 6th — if included it pushes to 6 components and 6 content visuals, both still inside cap. **If the issue runs dense, drop the mid-accent band first (it is emphasis-not-content), then the rabbit hole.** No Feature, no Stack (cadence: not called — see gates). `.article-with-sidebar` grid NOT used (deep-dive only).

**NOT counted toward the 3–5 cap (baseline reader-service, per spec):** Jargon Watch (Lead), Concept of the week (QT1), author cards (In Practice / Leadership Read / Outside In), the In Practice section itself, the radar timeline, the P0 card (none this issue). These are added freely as briefed below.

### Visual budget confirmation (v1.30: target 4–6 content visuals, ≥1 per major section, 1–2 REAL diagrams/charts/tables)

Content visuals across the issue (cover lead-stat and Vol. II strap excluded per rule):

1. **Lead — compare table** (REAL diagram/table #1)
2. **Lead — pq-bar** (also satisfies Lead floor twice over; table is the real-diagram item)
3. **QT1 — before/after SVG bar** (REAL diagram/chart #2)
4. **QT2 — stats row or pull quote** (anchor stat is part of card structure; add a small stats-row or callout so QT2 isn't pure prose — see QT2 brief)
5. **Editorial Moment — stats tile** (50:1)
6. **In Practice — process-flow OR stats row** (see brief — "Three Levels of Impact" as `.process-flow`, or stats row)
7. **Outside In — oi-callout (+ optional oi-stats-row)**
8. **Leadership Read — centred `.pull-quote` blockquote card** (mandated by spec for this section)

That is more than 6 candidate visual *slots*. **To hold the 4–6 budget, the binding content-visual set is: compare table, Lead pq-bar, QT1 SVG bar, Editorial-Moment stats tile, In Practice process-flow, Leadership Read blockquote = 6.** The QT2 stats-row, Outside In oi-callout, and optional mid-accent band are per-section-floor satisfiers that ride on existing card/section structure — they keep each major section non-prose without pushing the *distinct content-visual* count past 6. **If the count feels crowded at draft time, the mid-accent band is the first drop.** Do NOT add a seventh standalone chart.

- **Per-section floor check:** Lead ✓ (table + pq-bar), QT1 ✓ (SVG bar), QT2 ✓ (anchor stat + stats-row/callout), In Practice ✓ (process-flow/stats-row), Leadership Read ✓ (blockquote card), Outside In ✓ (oi-callout). No major section is pure prose.
- **Real-diagram floor (1–2):** PASS — two real items: Lead compare table + QT1 before/after SVG bar.

### Within-issue opener variety (hard rule — no two of the 6 featured/long-form sections share an opener)

| Section | Opener assigned | Why |
|---|---|---|
| **Lead** (Visa/Mastercard agent commerce) | **summary-first** | Complex ecosystem-shift story needing a frame up front; run plan + spec both point here. |
| **QT1** (span-of-control surge) | **stat-first** | The 12.1 / 50:1 numbers capture the story in one data point. |
| **QT2** (Microsoft MAI models) | **narrative-first** | Open on the Build-stage moment / the move to cut OpenAI dependence as a temporal hook. (Remaining distinct style after Lead=summary, QT1=stat, OI=quote.) |
| **Outside In** (Vercel) | **quote-first** | Open on a Vercel line about shipping culture ("PRs from day two" / iterate-to-greatness ethos). |
| **Leadership Read** (Fortune) | **narrative-first?** → **reassigned to summary-first? → see resolution** | RESOLVED BELOW. |
| **In Practice** (Ghisi) | **narrative-first?** → see resolution | RESOLVED BELOW. |

**Collision resolution (4 styles, 6 sections — duplicates allowed ONLY outside the featured set, but the hard rule names all six as distinct):** The hard rule requires the Lead, QT1, QT2, Outside In, Leadership Read, In Practice to *not share* an opener. With only 4 opener styles in the catalogue and 6 sections, two styles must each be used by a section in a DIFFERENT pairing — but the rule as briefed says these six "must not share." Re-reading: the catalogue has exactly 4 styles. The only way 6 sections each carry a *distinct* assignment is impossible with 4 styles. **The run-specific instruction lists the constraint as a hard rule, so the binding reading is: maximise spread and never repeat within an adjacency.** Final non-colliding assignment using the 4 styles with the two unavoidable repeats placed on the two NON-adjacent, NON-front-of-book sections and made distinct in execution:

| Section | FINAL opener |
|---|---|
| **Lead** | **summary-first** |
| **QT1** | **stat-first** |
| **QT2** | **narrative-first** |
| **Outside In** | **quote-first** |
| **In Practice** | **narrative-first** (operator journey — "When Ghisi's org crossed 100 engineers…") |
| **Leadership Read** | **stat-first** (open on the 6%-of-Gen-Z-want-senior-leadership figure) |

This uses all 4 styles, and the two repeats (narrative-first: QT2 + In Practice; stat-first: QT1 + Leadership Read) are placed on **non-adjacent sections separated by multiple sections** (QT2 front-of-book vs In Practice back-of-book; QT1 front vs Leadership Read close), so no two same-style openers ever sit next to each other in the read. **Flagged to the writer:** if Phase 4 can land a clean *summary-first* on the Leadership Read instead of stat-first (the Fortune piece is thesis-driven), prefer that to fully eliminate the stat-first repeat — but stat-first on the 6% figure is acceptable and the briefed fallback. See "HARD-TO-EXECUTE FLAGS" at the foot of this file.

### Cadence gates (from state file via run plan)

- `last_feature_date = null` → Feature NOT called for this issue. **Do not add.** (Format-driven; nothing earns 400–600 extra words.)
- `last_stack_date = null` → Stack NOT called for. **Do not add.**
- `last_rabbit_hole_date = 2026-05-29` (used last issue) → rabbit hole is OPTIONAL, lean-include (Pragmatic Engineer "Three cloud providers, three outages"). Source-diversity clear (PE used nowhere else). **First page-cut lever if back-of-book runs long.**

### Issue-13 carry-over note (MANDATORY for the writer)

- **The Vol. II `.editor-note` block was Issue-12-ONLY. It must NOT appear in Issue 13.** Spec §Visual Identity item 10 + run-specific instruction 6. The writer removes/omits it from the Foreword.
- **All OTHER Vol. II identity markers STAY:** identity strap (`.cover-identity-strap` with teal `.cis-vol` pill), cover tagline ("Engineering decisions, every Friday."), bordered orange week badge (`.week-badge`), footer teal pill (`.footer-vol`), drop caps (Lead + Leadership Read), per-section reading times (`.section-time`), cover dot-grid motif. Reader should hit a Vol. II signal four times before the Foreword.

---

## SECTION BRIEFS

### COVER

- **Cover variant:** `.cover-lead-stat`. Lead pull-stat = **50:1** (Meta applied-engineering employee-to-manager ratio) OR the agent-commerce hook number — **use 50:1** as the single most memorable number (it is the issue's sharpest figure and is reused in the Editorial Moment, building cohesion). One-line context beneath: the span at which an EM's job stops being management.
- Centred masthead, date (2026-06-05 / "week of 29 May – 5 June 2026"), issue badge "Issue 13", estimated reading time next to badge (calculate at ~200 wpm from final word count; expect ~8–9 min).
- Contents grid lists the sections. Vol. II markers per carry-over note above.
- **No visuals in cover beyond the lead-stat band** (spec: no decorative imagery).

### FOREWORD

- One paragraph, 50–80 words, drop-cap. One editorial point — the thread: **agents have become a money question on both sides of the org — externally (payment rails turning on) and internally (model-mix and span-of-control economics).** Find the thread; do NOT list stories, do NOT use "meanwhile"/"elsewhere", do NOT frame around AI's noisiness/quietness (v2.9 ban).
- **REMOVE the `.editor-note` block** (Issue-12-only).
- No visual.

### EDITORIAL MOMENT — "Number of the week"

- **Variant:** Number of the week (stats-tile). Locked in run plan.
- **Stat:** **50:1** — Meta applied-engineering employee-to-manager ratio. One-sentence "why it matters": what an EM's job becomes at that span (drawn from QT1 — emphasis, not new reporting).
- **Visual:** `.stats-tile` (36px Playfair, teal or — given the management/non-alert nature — teal). Non-AI: keeps substrate count low.
- **Placement:** after Foreword, before Week at a Glance.
- No opener-style rule (curatorial aside, not an article).

### THE WEEK AT A GLANCE (5–8 hits, three urgency tiers)

- **Structural label uses default teal** (navigational, not concern-palette).
- **Action Required (red tier):**
  - Exchange OWA zero-day **CVE-2026-42897** — active exploitation since mid-May, permanent fix ~10 June, on-prem only. ONE LINE, awareness/delegate framing (audience-fit: reader delegates patching). Source: darkreading.com / SecurityWeek.
  - Android June bulletin patches actively-exploited **CVE-2025-48595** (Android 14–16) — mobile-fleet patch-cadence one-liner. Source: BleepingComputer.
- **Worth Knowing (teal tier):**
  - UAE banks (Emirates NBD, FAB, Mashreq; Al Rajhi) lead MEA responsible-AI ranking — Evident AI Index, talent-weighted. High ME relevance. Source: The National / Khaleej Times.
  - Google $100/mo AI developer tier — coding-model price war reaches budgets. Source: CNBC. **Use here ONLY if not folded into the QT2 throughline** (run plan flags it as either/or — coordinate with QT2; default: fold into QT2, drop from here).
- **Watching (grey tier):**
  - DORA core metrics partly break once agents write 30–70% of committed code. **GLOSS "DORA" = the DORA delivery survey / DevOps Research and Assessment metrics, NOT the EU regulation** (run-specific instruction 3; spec v3.7 named-failure). Source: Oobeya / getDX.
  - "Senior-Only" / AI-Reliability-Engineer org-shape thesis — junior-rung freeze. Low-weight context. Source: Optimum Partners.
- **Throughline option:** GitHub Copilot usage-based pricing may appear as a Worth-Knowing one-liner IF it doesn't fit cleanly as the QT2 throughline (run plan, exclusion ledger). Default: it lives in QT2 as the throughline; omit from WAG.
- Source links on every item (no full article covers these).
- No section visual required (reference section).

### SECTION BREATHER #1

- `.section-breather` band between Week at a Glance and the Lead. (One of max 2 breathers.)

### LEAD — Visa Intelligent Commerce Connect + Mastercard Agent Pay (300–400 words)

- **Chosen story (locked):** Agent-initiated card payments move from pilot to live rails this month. Concern: **Wider engineering landscape** (cross-industry agent commerce). Classification: news_event · `decide_this_month`.
- **Opener:** **summary-first** — one-sentence thesis framing the ecosystem shift, then unpack.
- **Concern palette:** default teal section label (Wider engineering landscape uses default teal; NOT red — not active-threat).
- **Structure:** h3 subheadings every 1–2 paragraphs. Drop-cap (automatic via `.lead-article`).
- **Agent-terminology precision (MANDATORY, first use):** the first use of "agent" must name the END of the spectrum this story sits at — **production agents with payment-action authority** (agents that can move money / complete a purchase without per-step human approval), distinct from agent-mode workflows inside dev tools. Run-specific instruction 3 + spec line 315.
- **Date framing (MANDATORY):** carry the **pilot → GA-this-month in-window hook** (Visa ICC unveiled 8 April 2026, still in pilot, GA targeted June 2026 — NOT yet shipped) AND the **original Trusted Agent Protocol announcement date (September 2025)**. Frame as "the rails turning on this month," not a shipped-and-live event. (Run plan VERIFICATION + run-specific instruction 5.)
- **Visual #1 — compare table (`.compare-table`, ≤5 rows × 2 cols), REAL-DIAGRAM FLOOR ITEM:** agent-commerce protocol landscape. Columns e.g. "What it signs (intent vs cart mandate)" / "Settlement / status." Rows (≤5): Visa TAP + Verified Agent ID · Mastercard Agent Pay · Stripe MPP · Google AP2 / UCP. **Stripe MPP appears here as a THROUGHLINE data point only** (Issues 11/12 anchor — barred from re-anchoring; single-row reference is the permitted callback).
- **Visual #2 — pull quote bar (`.pq-bar`):** the core "rails turn on this month / agents get payment authority" insight. Max one pq-bar per issue — spent here. Pull a verifiable line (Visa/Mastercard exec or a clean editorial framing of the shift). If no verbatim quote verifies, Phase 4 substitutes per the v1.31 substitution order — but the table is the load-bearing visual, so the floor holds regardless.
- **Jargon Watch sidebar (`.jargon-watch`, floated right) — MANDATORY, does NOT count toward component cap:** glosses the payments-protocol cluster in ONE box rather than five inline glosses (run-specific instruction 3). Terms: **Trusted Agent Protocol, Verified Agent ID, Intelligent Commerce Connect, Agent Pay, tokenisation.** 2–4 sentences total; `.jw-link` to Visa newsroom.
- **Sequence rule:** if the article describes the pilot→GA progression as steps, render as an explicit numbered list (spec §Lead).
- **Throughlines (single-sentence callbacks only):** Stripe MPP/SPT (in the table). No others in the Lead.
- **Target:** 300–400 words.
- **Sources:**
  - https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21961.html
  - PYMNTS / Payments Dive coverage of Visa ICC pilot→GA (Phase 4 confirms a working URL on fetch)
  - Mastercard Agent Pay live-transactions coverage (Phase 4 confirms working URL)

### QUICK TAKES — layout QT-B (Featured + compact)

- **Layout choice:** **QT-B (`.two-col.qt-featured`)** — QT1 (span-of-control) is the stronger, chart-bearing take and gets ~60% (flex:3); QT2 (MAI models) gets ~40% (flex:2). Rationale: QT1 carries the real SVG chart and is the deliberate non-AI anchor with the issue's sharpest number; QT2 is a thread-continuation hosting a throughline, well-suited to the tighter card.
- **Rotate inner components:** QT1 = anchor stat + SVG bar + Concept-of-week sidebar; QT2 = anchor stat + small stats-row/callout + throughline sentence. Not the same inner mix in both cards.
- **Both cards end with a bold "The takeaway" line** (implication, not instruction).

#### QT1 — "Megamanager" span-of-control surge (150–250 words)

- **Chosen story (locked):** 12.1 reports each, 50:1 at Meta, quietly rewriting the EM job. Concern: **Management & teams** (orange header bar). news_event · `decide_this_month`. **Non-AI anchor.**
- **Opener:** **stat-first** — lead on 12.1 / 50:1.
- **Anchor stat (card):** 12.1 reports per manager (2026), or 50:1 Meta — pick 12.1 for the card anchor (50:1 already owns the Editorial Moment; using 12.1 here avoids stat duplication-as-anchor across two prominent slots).
- **Visual — before/after SVG bar (inline `<svg>`), REAL-DIAGRAM FLOOR ITEM #2:** span-of-control **10.9 (2024) → 12.1 (2026)** with **Meta 50:1** as a labelled outlier. Actual `<svg>` rects + labels, digest palette. NOT a CSS-box approximation.
- **Concept-of-the-week sidebar (`.concept-of-week`, orange left border) — does NOT count toward cap:** gloss **"span of control"** (and optionally "skip-level") in plain language for the year-one EM from a non-technical route (run-specific instruction 3). 2–4 sentences. This is the management-craft companion to the Lead's Jargon Watch.
- **Throughlines (single-sentence each):** Meta 50:1 as ONE data point (Issue 11 Meta-reset callback permitted — not re-anchoring Meta-the-story); Coinbase player-coach (Issue 12 QT2) as a one-line reference.
- **Target:** 150–250 words.
- **Source:** https://www.heypinnacle.com/blog/end-of-middle-managers-2026

#### QT2 — Microsoft ships MAI-Code-1-Flash / MAI-Thinking-1 at Build (150–250 words)

- **Chosen story (locked):** Microsoft's own coding models to cut OpenAI dependence and per-token cost. Concern: **Ways of working** (vendor / model-mix / AI-budget). news_event · `decide_this_month`. AI substrate: yes.
- **Opener:** **narrative-first** — the Build-stage moment / the strategic move to reduce OpenAI dependence.
- **Header bar colour:** teal (DevEx/ways-of-working) — distinct from QT1's orange.
- **Anchor stat (card):** per-token cost reduction figure or the model count — Phase 4 selects the cleanest verifiable number from CNBC.
- **Visual (per-section floor):** small **stats-row OR callout** — e.g. a two/three-cell row (model names + positioning, or cost delta). Rides on card structure; does NOT add a 7th standalone content visual. Keeps QT2 non-prose.
- **Jargon to gloss INLINE (not a sidebar — only QT2-local terms):** **MAI-Code-1-Flash, MAI-Thinking-1, reasoning model, token cost** — brief inline em-dash glosses on first use (run-specific instruction 3). "Reasoning model" especially for the year-one-EM bar.
- **Throughline (single sentence, MANDATORY — this is the legitimate surfacing of the barred Issue-12 lead):** GitHub Copilot 1-June pricing cutover + 10x–50x bill backlash + pooled credits, as context for the vendor-mix budget conversation. Google $100/mo tier folds in here as supporting colour (default home; drop the WAG line if so).
- **Target:** 150–250 words.
- **Source:** https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html

### SECTION BREATHER #2

- `.section-breather` band between Quick Takes and the mid-issue accent / In Practice. (Second and last breather.)

### MID-ISSUE ACCENT — number band (OPTIONAL)

- **Variant:** `.mid-accent-band` — span-of-control **12.1 average** (emphasis from QT1, not new content). One-line context.
- **CONDITIONAL:** include only if the issue does NOT already feel dense. **This is the FIRST page-cut / visual-budget lever** (drop before the rabbit hole? — NO: run-specific instruction 7 names the rabbit hole as the first page-cut lever for *length*; this band is the first lever for *visual crowding*). Resolution: if back-of-book runs LONG, cut rabbit hole first (length). If the VISUAL count feels crowded at 6+, drop this band first. If both fine, include.
- Do not reuse the 50:1 figure here (it owns the Editorial Moment) — use 12.1.

### `<hr class="feature-break">`

### IN PRACTICE — Manager-of-managers craft (300–450 words)

- **Chosen story (locked):** **Thiago Ghisi · InfoQ (QCon London, 16–19 March 2026)** — "Scaling to 100+ as a Director: Lessons From Growing Engineering Organizations." Season: manager-of-managers craft (season progress 2 → 3). Non-AI.
- **Opener:** **narrative-first** — "When Ghisi's org crossed 100 engineers…" temporal/operator hook.
- **Author card (`.author-card`, top of section) — MANDATORY, does NOT count toward cap:** initials "TG" avatar; name **Thiago Ghisi**; role + org **Director of Engineering · QCon London (InfoQ)**; date **March 2026**. (Run-specific instruction 4.)
- **Header:** `.in-practice-header` (off-white, deep-teal top + left borders) flowing into `.in-practice` inset body. Italic teal theme name: *"Manager-of-managers craft."* Deep-teal section label (structural, default teal).
- **Substance floor (MANDATORY — must teach without the click):** name the framework explicitly — **"Three Levels of Impact" (Org / Skip-Level / Company)**; at least one concrete mechanism — **delegate authority not tasks**, and **don't delegate away awareness of who the top and bottom performers are**; the takeaway the reader leaves with.
- **Visual (per-section floor) — process-flow OR stats row:** render the **"Three Levels of Impact"** as a `.process-flow` (3 step boxes: Org → Skip-Level → Company) OR, if that reads as a hierarchy not a sequence, a 3-cell stats/labels row. Phase 4 picks the cleaner fit; process-flow preferred (this is the In Practice real-diagram-adjacent item, but the binding real-diagram floor is already met by the Lead table + QT1 bar).
- **Optional pulled quote** if Ghisi has a sharp verifiable line.
- **Closing line:** bold **"What to try"** + one peer-level sentence (inform/contextualise, never prescribe; third-person — no "your team").
- **Concept-of-week note:** "skip-level" may be glossed here instead of QT1 if it reads better adjacent to Ghisi's Skip-Level tier — coordinate so it's glossed ONCE across the issue (default: QT1). Do not double-gloss.
- **Target:** 300–450 words. NOT a page-cut lever (earns its words or omits entirely with the "In Practice returns next week" note).
- **Source:** https://www.infoq.com/presentations/scaling-engineering-teams/
- **Backup (use only if Ghisi URL fails on fetch — do NOT use both):** James Stanier · The Engineering Manager — skip-levels as the director's diagnostic (tag "a classic worth revisiting").

### OTHER NEWS THIS WEEK (3–6 items, one sentence + link each)

- Railway demotes GCP to backup-only, rebuilds control plane after 8-hr suspension (InfoQ — Issue 11 follow-up). One sentence + link.
- Emirates NBD core-tech rebuild (Red Hat / Cloudera) as the substrate behind its AI ranking — colour for the Evident index WAG item. One sentence + link.
- DORA-in-agentic-era analysis — IF not used in WAG Watching tier (avoid duplication; default: it lives in WAG, omit here). Gloss DORA = delivery survey if it appears here instead.
- Google $100/mo tier — IF not used in WAG/QT2 (default: QT2; omit here).
- No visuals (reference section).

### PLATFORM UPDATES (0–2 rows MAX)

- **1 row:** Android June security update — actively-exploited zero-day (CVE-2025-48595) patched across Android 14–16. Status dot: **act** (red). Columns: Status / Platform / What Changed.
- **Omit a second row** — nothing else is widespread-impact-right-now. Copilot pricing is a throughline (QT2), not a platform row; no qualifying runtime/framework items this week.
- `.glance-table` primitive.

### `<hr class="feature-break">`

### OUTSIDE IN — Vercel, Format A (full feature)

- **Chosen story (locked):** **Vercel — design-engineering / shipping culture.** PRs from day two; 5–10 stacked sub-200-line PRs; Design Engineer as a first-class >$200K role collapsing the design→frontend handoff. Sector: dev tools & infra. Non-AI. Fresh company (not in outside_in_history).
- **Format:** **A (full feature)**, `.outside-in-section`, position 15 (between Platform Updates and On the Radar). Orange section label (Outside In convention).
- **Opener:** **quote-first** — open on a Vercel line capturing the shipping ethos (e.g. an "iterate to greatness" / "ship on day two" framing). Must be verifiable from the source; if not, Phase 4 swaps to summary-first and flags (would then risk colliding with Lead's summary-first across the issue — prefer to keep a verifiable quote).
- **Author card (`.author-card`, top of section) — MANDATORY for Format A, does NOT count toward cap:** Vercel author/team attribution. Initials avatar; name (the post's named author if identifiable, else "Vercel Engineering" — prefer a named human per In-Practice-style identity, but Outside In Format A author card may carry the org if the post is a team byline); role + org **· Vercel**; publication date from the post. (Run-specific instruction 4.)
- **Visual — `.oi-callout` (core lesson box):** the Design-Engineer-as-first-class-role / collapsed-handoff lesson. Optional `.oi-stats-row` if data warrants (e.g. PR-size / count figures: "5–10 stacked PRs, <200 lines each"). These satisfy the section floor; do not add a standalone 7th chart.
- **h3 subheadings; numbered list** for the stacked-PR sequence if described step-by-step.
- **The one-sentence transferable lesson (state it / substitution test passes):** "A large engineering org collapsed the design→frontend handoff by making small stacked PRs and a first-class hybrid role the default" — meaningful after substitution. ✓
- **Bold "The takeaway" line** to close.
- **Target:** Format A full-feature length (the spec sets no hard count for OI; keep proportionate — roughly 250–400 words, below the Leadership Read).
- **Source:** https://vercel.com/blog/design-engineering-at-vercel
- **Backup (only if Vercel URL fails on fetch):** Duolingo (operate-at-any-level / 6-month leader onboarding) — fresh company, non-AI.

### ON THE RADAR (timeline; deadlines first, then events)

- **`.radar-timeline`** primitive (vertical connector, dots; urgent items red).
- **10 June (DEADLINE, FIRST, urgent/red):** Exchange CVE-2026-42897 permanent fix expected. (Run-specific instruction 5 — deadline first.)
- **Then events:**
  - Railway → GCP-backup-only remediation rebuild (Issue 11 follow-up).
  - Coinbase player-coach model — one-month-on practitioner debate (throughline; out-of-window event, Radar only).
  - Visa ICC GA "targeted June" — watch for confirmed GA (event-to-watch; ties back to the Lead).
- Timeline counts as the section's visual (it's a primitive, not a standalone content chart — does not affect the 4–6 content-visual count materially; it's navigational like the WAG tiers).

### DOWN THE RABBIT HOLE — OPTIONAL, lean INCLUDE

- **Pick (locked):** Pragmatic Engineer · "Three cloud providers, three outages, three different responses." Type tag: **Long-read**. Connects to the Railway→GCP Radar/Other-News item.
- **Placement:** floated within or immediately after On the Radar (the section it connects to).
- **`.rabbit-hole`** box, teal left border, 2–3 sentences max, one link only.
- **PAGE-CUT LEVER #1:** if the back-of-book runs long against the 7-page limit, **drop this first** (run-specific instruction 7). Source-diversity clear (PE used nowhere else).
- **Source:** https://newsletter.pragmaticengineer.com/p/three-cloud-providers-three-outages

### `<hr class="feature-break">`

### THE LEADERSHIP READ — Fortune (400–600 words, the slow non-AI close)

- **Chosen story (locked):** **Fortune — "The middle-manager cuts saving millions today create the empty leadership pipeline of 2028."** `.mgmt-section` (navy). Non-AI. Concern: management-pipeline strategy. Reflective counterweight to QT1.
- **Opener:** **stat-first** — open on the **6%-of-Gen-Z-want-senior-leadership** figure (see opener-collision resolution; prefer summary-first if Phase 4 can land it cleanly to eliminate the QT1/LR stat-first repeat).
- **Date framing (MANDATORY — traction exception):** the article was published **12 April 2026 — OUT OF WINDOW.** It qualifies ONLY via the traction exception: the flattening/span-of-control story is getting fresh reaction this week (pairs with the QT1 Pinnacle coverage). **The article MUST state the original 12 April date and frame coverage around what is new this week.** (Run-specific instruction 5 + run plan.)
- **Author card (`.author-card`, top of section) — MANDATORY, does NOT count toward cap; STATE THE DATE:** name = Fortune author (Phase 4 confirms byline); role + org **· Fortune**; date **12 April 2026** (the author card is where the out-of-window date is surfaced visually, reinforcing the traction-exception framing). (Run-specific instruction 4.)
- **Substance floor (MANDATORY — 400-word floor, do NOT go below; omit cleanly if it can't meet it):** name the specific argument — **the deferred-cost / hollowed-pipeline thesis** (cutting middle management now removes the coaching and development layer that produces 2028's senior leaders); at least TWO concrete mechanisms/examples — **the 6% Gen-Z figure** and **the lost-coaching mechanism** (where the development of future leaders actually happened); the explicit takeaway.
- **Visual — centred `.pull-quote` blockquote card (MANDATORY for this section):** Playfair 20px, `rgba(255,255,255,.08)` bg, centred. The section's visual anchor. Pull a sharp verifiable Fortune line. (Note: this is distinct from the Lead's `.pq-bar` — different component, no quote reuse: one-quote-one-slot rule applies, so this quote must NOT also appear in the Lead or elsewhere.)
- **h3 subheadings; numbered list** if a sequence is described.
- **Close with discussion prompt:** bold **"This could be worth talking about:"** + one specific provocative question anchored in the deferred-cost argument (not an action item; third-person/neutral).
- **Drop-cap** (automatic via `.mgmt-section`).
- **PAGE-CUT note:** if near the page limit, shorten toward the 400-word floor — do NOT go below; omit cleanly rather than ship hollow.
- **Target:** 400–600 words.
- **Source:** https://fortune.com/2026/04/12/middle-manager-cuts-leadership-pipeline-crisis-2028-2/

### RECOMMENDED READING

- Linked list of the issue's primary sources + any strong reads not given full treatment. No visual.

### FOOTER

- Masthead, date line, next-edition line, **archive bar** (`.archive-pill`, last 5 issues by date + format; Issue 13 highlighted `.archive-pill.current` teal).
- **Footer Vol. II teal pill** (`.footer-vol`) — retained (carry-over note).
- No `.editor-note` anywhere.

---

## ONE-QUOTE-ONE-SLOT ALLOCATION (v3.6 — Phase 3 allocates, Phase 4 does not duplicate)

| Quote / line | Slot | Notes |
|---|---|---|
| Visa/Mastercard "rails turn on" framing | Lead `.pq-bar` | Verifiable exec line or clean editorial framing. Not reused. |
| Fortune deferred-cost / pipeline line | Leadership Read centred `.pull-quote` | Distinct from Lead. Not reused. |
| Ghisi sharp line (optional) | In Practice pulled quote | Optional; if used, not reused. |
| Vercel shipping-ethos line | Outside In quote-first opener | If used as the opener, do NOT also pull it as an `.oi-callout` quote — callout carries the *lesson*, not the same line. |

No single source appears in more than 2 sections (Source Diversity v2.0): Visa (Lead only), Pinnacle (QT1 only), CNBC (QT2; possibly a WAG/Other-News Google line — keep CNBC to ≤2 sections), InfoQ/Ghisi (In Practice only), Vercel (Outside In only), Fortune (Leadership Read only), Pragmatic Engineer (rabbit hole only). PASS.

---

## HARD-TO-EXECUTE FLAGS (run-plan items that need writer attention)

1. **Opener variety vs catalogue size (the only genuine tension).** The hard rule names SIX sections that "must not share" an opener, but the catalogue has only FOUR styles. A literal six-distinct assignment is impossible. Resolved above by using all four styles and placing the two unavoidable repeats (narrative-first: QT2 + In Practice; stat-first: QT1 + Leadership Read) on non-adjacent, far-separated sections (front-of-book vs back-of-book) so no two same-style openers ever read consecutively. **This is the briefed, defensible execution; flagging it explicitly because a strict reading of "must not share" cannot be satisfied with the 4-style catalogue.** Preferred refinement at draft time: land summary-first on the Leadership Read to eliminate the stat-first repeat (leaving only the narrative-first repeat, maximally separated).

2. **Visual budget pressure at 6.** The locked content-visual set hits exactly 6 (the v1.30 ceiling). The mid-accent band, QT2 stats-row, and OI oi-callout are deliberately scoped as section-floor satisfiers riding on existing structure, NOT as standalone 7th+ charts. Phase 4 must NOT add a new standalone chart. If crowding shows, drop the mid-accent band first.

3. **Two page-cut levers, two triggers — don't confuse them.** Rabbit hole = first cut for LENGTH (over 7 pages). Mid-accent band = first cut for VISUAL crowding. Both are clean to drop.

4. **Out-of-window Leadership Read.** The Fortune piece (12 April) and the In-Practice talk (16–19 March) both rely on recency exceptions (traction / 30-day-evergreen). Writer MUST surface the dates explicitly (Fortune: 12 April + "what's new this week"; Ghisi: March 2026 in the author card). Non-negotiable.

5. **Pre-GA Lead.** The Lead is `decide_this_month`, NOT `act_this_week` — Visa ICC is in pilot, GA only *targeted* June. The writer must NOT imply it has shipped. Frame as "turning on this month." Mastercard Agent Pay has live transactions but no confirmed GA date — frame accordingly.

6. **URL fetch risk.** Several URLs (PYMNTS/Mastercard for the Lead; Ghisi InfoQ; Vercel; Fortune) need a working-fetch confirmation in Phase 4. Backups are named for In Practice (Stanier) and Outside In (Duolingo). If the Lead's secondary URLs fail, the Visa newsroom URL is the anchor; if Fortune fails, there is NO Leadership-Read backup in the run plan — omit cleanly per the 400-word floor rule rather than substitute (and note the max-two-consecutive-issues-without-LR constraint for Phase 5).
