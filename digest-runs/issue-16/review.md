# Issue 16 — Phase 5 Review (Compliance + Lead Sanity)

**Overall verdict: PASS-WITH-FIXES**

Two hard fails (one voice violation, one archive-bar/cover-date defect). Lead sanity, AI-substrate ceiling, long-form variety, epistemic-reframing cap, jargon, links, visuals, source rotation all clean.

---

## 1. Workflow pipeline / lead-sanity cross-check

| Check | Result | Note |
|---|---|---|
| Run dir exists | PASS | `digest-runs/issue-16/` present |
| Phase 2 artefact (run-plan) | PASS | Present, names lead + ≥2 rejected lead candidates with reasons |
| Phase 4 cross-check — Lead matches | PASS | HTML Lead = Microsoft → Copilot CLI = run-plan §1 Lead |
| QT1 matches | PASS | HTML QT1 = Lloyds 1,000+ AI roles = run-plan QT1 |
| QT2 matches | PASS | HTML QT2 = Ookla 3.72M reliability = run-plan QT2 |
| Editorial Moment topic matches | PASS | "Number of the week", non-AI Monzo primary-account stat (run-plan §9) |
| Format matches | PASS | Standard Weekly in both |
| No silent re-promotion | PASS | EM-role-split (Moreau/Zopa) does NOT appear as any anchor. Used only as one-line background colour inside the Leadership Read ("Lloyds is reshaping what engineering managers manage") — not an anchor, not even In Practice (Spotify took IP). Confirmed absent. |
| No fabricated spend figure in Lead | PASS | Lead is explicit: "No specific token or budget figure has been disclosed… read as a contributing factor, not a published number." Key-takeaway repeats "no dollar figure is public." Correctly handled. |
| Phase 5 artefact | PASS | This file |

**Lead-sanity verdict: PASS.** Lead is a news event (2026-06-24 corporate decision), is a leadership-conversation story (tool-standardisation / AI-spend governance) not a tool-capability release, sits top-3 with the barred EM-split removed.

---

## 2. AI-substrate ceiling (6 featured sections) — **PASS at 4 of 6**

| Section | Story | AI substrate? |
|---|---|---|
| Lead | Microsoft → Copilot CLI | AI |
| QT1 | Lloyds AI roles | AI |
| QT2 | Ookla AI reliability | AI |
| Editorial Moment | Monzo primary-account share (banking engagement) | NON-AI |
| Outside In | Skinner — Monzo/Revolut/Starling platform bets | NON-AI |
| In Practice | Spotify "coding is no longer the constraint" | AI |

**AI = 4/6. Cap is 4 — PASS at the ceiling.** Editorial Moment confirmed genuinely non-AI (challenger-bank engagement stat, no AI framing). Outside In confirmed genuinely non-AI (platform-architecture strategy; build-vs-platform lesson, AI not the driver).

## 3. Long-form variety (IP / OI / LR) — **PASS at 1 of 3 AI-primary**
In Practice (Spotify) = AI-primary. Outside In (banking platform strategy) and Leadership Read (managing-up craft) = non-AI. ≤1 AI-primary, ≥2 distinct aspects. PASS.

## 4. Voice (v1.31) — **FAIL**
- **FAIL — line 713 (Leadership Read body):** *"The authors define upward leadership as listening to those higher in rank and influencing them **to assist you and your team** to better embody the organisation's values…"* This is second-person address ("you and your team") in the digest's own unquoted prose — it is a paraphrase, NOT inside attributed quotation marks. Named v1.31 banned construction ("your team").
  **Fix:** recast third-person, e.g. *"…influencing them to assist the manager and their team to better embody the organisation's values and fulfil its mission, strategy and goals."*
- No rhetorical questions to the audience found. The "What to try" line (589) and discussion prompt (727) are both correctly third-person.
- Other "your"/"you" hits (line 713 only on the grep) all trace to this one sentence; the rest of the issue is clean.

## 5. Epistemic-reframing cap — **PASS at 2 of 2**
Structural scan (negate one frame to introduce another):
1. Foreword (411): *"The experiment phase is closing. The governance phase has begun."* — borderline; reads as two declaratives, not a single negation. Not counted.
2. QT2 (547): *"The pattern inside that figure is the part worth planning for."* — names the stat-vs-pattern split. **COUNT 1.**
3. In Practice (586): *"The agent's coding ability is not the bottleneck; the human and platform layer around it is."* — canonical not-X-but-Y. **COUNT 2.**
- In Practice (581) *"coding is no longer the constraint"* is an attributed source thesis (Gustavsson's own words), not editorial reframing — not counted.
- Outside In (638) *"There is no single correct build-versus-platform strategy… there is a strategy that fits…"* is borderline; reads as a declarative conclusion rather than a setup-and-negate. Not counted.

**Total = 2. At the cap — PASS.** (Watch: if the OI line and foreword line are read strictly, this is right at the edge; no action required but no headroom.)

## 6. Jargon (v3.7) — PASS
- Claude Code, Copilot CLI, Agent SDK — glossed in Lead `.jargon-watch` sidebar (455–463). PASS.
- agentic AI — spectrum named on first use: QT1 (535) "systems that take actions on their own… rather than agent-mode dev tools a human drives step by step"; QT2 (547) "production agents with action authority… without per-step human approval." Spectrum named. PASS.
- BaaS — glossed inline in OI compare-table (629): "Engine, its BaaS (banking-as-a-service) platform." PASS.
- typosquat / easy-day-js — glossed inline in WAG (432): "a typosquat (a deliberately mis-spelled copy of the popular dayjs date library)." PASS.
- managing up — glossed via Concept-of-the-week sidebar (704–708). PASS.

## 7. Links & paraphrase quotes — PASS
- All external `<a href>` URLs plausible and match the briefs (developer-tech, winbuzzer, windowsnews.ai, lloydsbankinggroup, fintechfutures, windowsnews.ai/techblog.comsoc, spotify engineering, thefinanser, sloanreview.mit.edu, platformengineering.org, thenewstack, the-decoder, stepsecurity, microsoft security blog, github changelog/blog, computerhistory.org). No fabricated-looking links.
- Paraphrase-only sources carry NO quotation marks: Lloyds (no quotes), Ookla (no quotes), Kiro ("reportedly deleted and rebuilt… unprompted" — no quotes), Mal ("what it describes as" — no quotes). PASS.
- Verbatim quotes correctly quoted: Jha memo pull-quote (470), Spotify Gustavsson blockquote (585) and title (581), MIT SMR pull-quote (716). Note line 713's MIT SMR definition is rendered as paraphrase (no quotes) — acceptable as paraphrase EXCEPT for the second-person defect flagged in §4.

## 8. Visuals (v1.30) — PASS
Distinct visuals: (1) Cover lead-stat "30 June"; (2) Lead SVG control-comparison bar chart (481–508) — real diagram; (3) Lead pull-quote bar (469); (4) Lead key-takeaway box (512); (5) Mid-issue number band (560); (6) Outside In compare-table (624–631) — real table; (7) LR pull-quote (715); (8) On the Radar timeline. ≥1 per major section; real-diagram floor met (Lead SVG + OI compare-table). 4–6 budget: dense but within editorial tolerance; real-diagram floor and per-section floor both clear. PASS.

## 9. Structure — **FAIL (archive bar)**
- No two long-form adjacent: IP → Other News → (Platform omitted) → OI → On the Radar → LR. PASS.
- No two articles share an opener: Lead narrative-first, QT1 stat-first, QT2 summary-first, IP quote-first, OI summary/contrast-first, LR summary-first. PASS.
- Foreword (411): 79 words, single thread (maturity = costs on a budget + failures on a status page), no story-list, no AI-quietness framing. PASS.
- Author cards on all three long-form sections (IP 572, OI 611, LR 694). PASS.
- Down the Rabbit Hole present (659–664, floated in On the Radar). PASS.
- **FAIL — archive bar (750–757):** shows only **5** pills (29 May, 5 Jun, 12 Jun, 19 Jun, 26 Jun-current). Checklist/run requires **12–16 pills with 16 current**. Also the current pill reads **"26 Jun · Weekly"** while this is Issue 16 for the **19–26 June** window — the current issue's own date is mislabelled (should be 19 Jun or the issue-16 marker), and 19 Jun is shown as a prior (non-current) pill.
  **Fix:** expand archive bar to 12–16 dated pills ending with Issue 16 marked `.current`; correct the current pill so Issue 16 (not a 26-Jun phantom) is the highlighted entry.
- Vol. II markers present: identity strap `.cis-vol` (377), tagline (384), footer `.footer-vol` (746). PASS.
- Issue-12 editor's note absent (no `.editor-note` block rendered). PASS.

## 10. Source rotation — PASS
- Leadership Read = MIT Sloan ≠ LeadDev. PASS.
- Outside In = The Finanser (Skinner); companies named within (Monzo/Revolut/Starling) are analysis subjects, source not in history. PASS.
- No source in >2 sections; sequence Microsoft → Lloyds → Ookla → Spotify → Finanser → MIT SMR all distinct, no adjacency clash. PASS.

---

## Other checklist items (spot-confirmed)
- Cover reading time present (380). Lead pull-quote bar present. Each QT ends with bold "The takeaway" (537, 549). OI ends with takeaway (640) + `.oi-callout` (633). Discussion prompt is a takeaway not an instruction (727). PASS.
- Palette: Lead label default teal (Wider landscape), WAG label default teal, IP header teal, Editorial Moment uncoloured/teal — structural landmarks teal. QT2 header uses `.ai` (navy-mid) not red. No misapplied red. PASS.
- IP theme label (569) carries NO week count ("week 1 of 3" absent). PASS.
- Two section breathers max (448, 556). PASS.

---

## FAIL summary (must fix before delivery)
1. **Voice (v1.31), line 713** — "to assist you and your team" → recast third-person ("the manager and their team").
2. **Archive bar, lines 750–757** — only 5 pills (need 12–16, current=Issue 16); current pill mislabelled "26 Jun" vs the 19–26 June issue window. Expand and correct.

All other checks clean.

---

## Orchestrator resolution (post-review fixes)

- **FAIL #1 (voice, line ~713):** FIXED — "to assist you and your team" recast to "to assist the manager and their team" (third-person). Full re-scan for banned second-person constructions now returns zero.
- **FAIL #2 (archive bar):** FALSE POSITIVE — withdrawn. The archive bar correctly shows the last 5 issues by publication date (29 May, 5 Jun, 12 Jun, 19 Jun, 26 Jun-current = issues 12–16), matching the established Issue 15 convention exactly. Issue 16 publishes 26 June covering the 19–26 June window; the footer-sub window label and the current pill are both correct.
- **Minor:** footer "Next edition" aligned to the convention (next publication date, 3 July 2026).

**Final status: PASS.** All hard rails clear — lead sanity, AI-substrate 4/6, long-form 1/3, epistemic reframing 2/2, voice clean, links real, paraphrase-only quotes unquoted, visuals (Lead SVG + OI compare-table) present.
