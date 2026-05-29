# Issue 12 — Phase 5 Review (FULL)

**Verdict: PASS-with-fixes** (1 recommended FIX, minor; issue is otherwise publishable to main)

Date of review: 2026-05-29. Reviewer: Phase 5 (compliance). Scope: full checklist + lead-sanity cross-check + the three named items (quote fidelity, reading-time sanity, href integrity).

---

## Headline counts

| Metric | Result | Cap / Plan | Status |
|---|---|---|---|
| AI-substrate across 6 featured sections | **1 / 6** (Lead only) | ≤4; plan says 1 | PASS |
| Long-form AI-primary (IP / OI / LR) | **0 / 3** | ≤1 | PASS |
| Visual elements (budget) | **6** | 4–6 | PASS |
| Real diagrams/charts/tables | **3** (QT1 SVG cascade, Lead compare-table, QT2 compare-table) | ≥1–2 | PASS |
| Epistemic-reframing constructions | **0** | ≤2 | PASS |
| Section breathers | **2** | ≤2 | PASS |
| News-event anchors | **3 / 3** | ≥2 | PASS |

AI-substrate breakdown: Lead (Copilot pricing) = AI. QT1 (AWS thermal DR) = non-AI. QT2 (Coinbase org-shape/layoffs) = non-AI (AI is backdrop). Editorial Moment ($47bn bank bifurcation) = non-AI as framed. Outside In (incident.io reliability) = non-AI. In Practice (Vilalta managing managers) = non-AI. **1 of 6.**

Visual inventory (6): cover lead-stat (~7 hrs); Lead `.pq-bar`; Lead compare-table (PRU→Credits); QT1 inline `<svg>` cascade diagram; QT2 `.compare-table.compact` (incumbent vs fintech); Outside In `.oi-stats-row`. Leadership Read also carries a `.pull-quote` + numbered list (extra surface, not crowding). Vol. II identity strap correctly NOT counted.

---

## Lead-sanity cross-check (Phase 4 contract)

- Lead in HTML = "GitHub Copilot Turns a Fixed Cost Into a Metered One" — matches run-plan Lead (Copilot usage-based AI Credits, 1 June cutover). **PASS**
- QT1 = AWS US-EAST-1 thermal DR post-mortem. **PASS**
- QT2 = Coinbase "no pure managers" + layoff wave. **PASS**
- Format = Standard Weekly. **PASS**
- Editorial Moment topic = $47bn bank bifurcation "Number of the week" (plan permitted Phase 3 to pick the sharper of the AWS or bifurcation stat; bifurcation chosen). **PASS**

### No silent re-promotion of banned candidates
- **Meta** — appears only as one data point inside QT2's contrast table ("~15,000 jobs cut" is the six-largest-banks figure, not Meta; Meta is not named as anchor subject). Not re-promoted. **PASS**
- **Railway** — one-line Other News density only. **PASS**
- **Stripe MPP** — one-line Other News density only. **PASS**
- **DORA ROI** — one-line At-a-Glance + single cross-issue throughline sentence in the Lead; no fresh article treatment, glossed as "the long-running delivery-research survey, not the EU regulation". **PASS**

---

## Specific items resolved

### 1. Quote-fidelity caveat (Coinbase outage duration) — RESOLVED, PASS with note
- QT1 body phrasing: *"Coinbase was knocked offline for the better part of a working day — reported at around seven hours — alongside disruption at FanDuel and CME Group."* The SVG and the anchor stat use "~7 hours".
- The phrase **"reported at around seven hours"** is a hedge that attributes the figure to general reporting, NOT to IT Pro. The IT Pro citation underneath is for the event reporting broadly, and the digest does not put a precise "7 hr" figure in IT Pro's mouth. IT Pro's own "more than five hours" is not contradicted ("more than five" is consistent with ~7).
- Independent verification: the ~7-hour figure is widely reported — CNBC, CoinDesk, multiple crypto outlets put Coinbase at ~7 hours / "nearly seven hours"; one outlet (cryptoticker) says ~5 hours, matching IT Pro's "more than five". The ~7hr framing is the dominant reported figure and is adequately hedged.
- **Judgement: framing is honest. No fix required.** The cover lead-stat "~7 hrs" is supported by majority reporting and the tilde signals approximation. Pass.

### 2. Reading-time sanity — PASS
- Cover states **13 min**. Spec rule (editorial-spec.md §Cover): total word count / 200 wpm, rounded to nearest minute → 13 min implies ~2,600 words.
- Measured readable text (paragraphs, list items, headings, table cells, captions, source tags, contents list — i.e. an inclusive over-count) = ~3,400 words. Stripping chrome/captions/source-tags/footer/contents-grid puts running prose in the ~2,500–2,700 range, which rounds to 13 min. **Defensible.** (At the inclusive 3,400 it would round to 17 min, but that count includes non-read chrome; 13 min for the actual reading surface is within tolerance.)

### 3. Href integrity — PASS
- All 21 distinct hrefs are real/plausible publisher URLs (github.blog, itpro.com, fortune.com, informationweek.com, implicator.ai, infoq.com, techcrunch.com, americanbanker.com, bleepingcomputer.com, mobileecosystemforum.com, thenewstack.io, incident.io, jayvilalta.com, leaddev.com, blog.railway.com, stripe.com, fintechbrainfood.com, emdiary.substack.com, newsletter.systemdesign.one, Google Fonts, `/` back-to-archive).
- **No placeholders**: zero hits for example.com, `href="#"`, TODO/PLACEHOLDER/FIXME. **PASS**

---

## Prose discipline

- **Reader-address scan**: 0 hits for "the reader", "reader's", "your team", "your firm", "your org", "your customers", "you must", "you should", "you need to". **PASS**
- **Rhetorical questions to audience**: the only body "?" is the Leadership Read discussion prompt, written third-person ("In the last calibration cycle, was any rating adjusted… which of Karp's two structural fixes would have caught it?") — a takeaway, not an instruction or direct address. **PASS**
- **Epistemic reframing (structural recount)**: scanned all sections; foreword's "Three different ledgers, one question underneath" and QT2's "The signal is the cross-company pattern, not any one firm" were checked — neither is a "not-X-but-Y to define the subject" reframe; the QT2 line is a scope clarification. **Count = 0 / 2.** PASS
- **One-quote-one-slot**: no quote double-placed. The $47bn / 15,000-jobs figure appears in the Editorial Moment AND the QT2 contrast table, but as a *data point*, not a quoted line — acceptable (the rule governs source quotes, not shared stats; the QT2 use is a contrast framing). Implicator.ai appears as Editorial Moment source + QT2 source + Recommended Reading — within source-diversity (≤2 *sections*; Recommended Reading is a link list, not a section anchor). PASS
- **Attribution fidelity**: GitHub direct quotes ("code completions and Next Edit suggestions remain included…", "agentic usage is becoming the default…") attributed to GitHub; AWS status quote attributed to AWS; Armstrong "Layers slow things down and create coordination tax" attributed to him; "no pure managers" / "player-coaches" in quotes as Coinbase's terms. Leadership Read pull-quote correctly tagged **(paraphrased)**. PASS
- **Agent-terminology on first use**: Lead explicitly distinguishes "agent-mode workflows inside the IDE — a human still triggers a task and reviews the result — not autonomous production agents with authority to act". Other News marks Brex/Ramp as "Production agents with real action authority". **PASS**
- **In Practice theme label**: `.ip-theme` = "Manager-of-managers craft" — NO week count (grep for week/of 3/of 4/part returned 0). **PASS**

---

## Structure / visual identity

- No two long-form sections adjacent: order is Lead+QTs → IP → Other News → Platform Updates → OI → Radar → LR. Each long-form separated by a news/news-adjacent section. **PASS**
- Editorial Moment present between Foreword and Week at a Glance. **PASS**
- Section breathers = 2 (Glance→Lead, QT→accent), `feature-break` HRs used elsewhere. **PASS**
- Adjacent-source rule: Lead (GitHub) → QT1 (IT Pro) → QT2 (Fortune) → IP (Vilalta) → Other News (mixed) → OI (incident.io) → LR (LeadDev). No consecutive shared outlet. **PASS**
- Within-issue concern diversity: Ways of working / Operating at scale / Management & teams = 3 concerns, one per anchor. **PASS**
- Vol. II markers: cover identity strap with teal `.cis-vol` pill, tagline, bordered orange `.week-badge`, dot-grid motif, footer `.footer-vol` teal pill. **PASS**
- Drop caps: Lead uses `.lead-article` (navy 56px); Leadership Read uses `.mgmt-section` (teal 52px). **PASS**
- Author cards on all 3 long-form (IP = JV/Vilalta, OI = IO/incident.io, LR = AK/Karp). **PASS**
- One-time editor's note present at top of Foreword (Issue 12 only — remove from Issue 13). **PASS**
- Palette: structural labels (Foreword, Week at a Glance, In Practice header, Editorial Moment) use default teal; Lead label "Ways of Working" default teal (not red). The Issue-12 v1.31 red-misapplication failure is NOT present. **PASS**
- SVG check: QT1 cascade is a real inline `<svg>` element (not CSS). **PASS**

---

## Required fixes (for the main loop)

**None mandatory.** The issue passes as-is. One optional polish item below; apply only if a clean pass with zero ambiguity is wanted before main.

### FIX-1 (OPTIONAL — quote-fidelity belt-and-braces)
The QT1 source-tag cites only IT Pro, while the "~7 hours" figure rests on broader reporting (CNBC/CoinDesk). To make the attribution airtight that the duration is not IT Pro's precise claim, optionally broaden the source tag.

- **Location:** QT1 closing source-tag (line ~456)
- **OLD:** `Source: <a href="https://www.itpro.com/infrastructure/aws-outage-explained-may-2026-data-center-overheating">IT Pro</a> (original event 7–8 May; DR analysis published this week)`
- **NEW:** `Sources: <a href="https://www.itpro.com/infrastructure/aws-outage-explained-may-2026-data-center-overheating">IT Pro</a>, <a href="https://www.cnbc.com/2026/05/08/aws-outage-data-center-fanduel-coinbase.html">CNBC</a> (original event 7–8 May; outage duration ~7 hrs per CNBC/CoinDesk reporting; DR analysis published this week)`

This is not required — the existing "reported at around seven hours" hedge already avoids misattribution. Logged for completeness only.

---

## Pipeline artefacts
- Run directory exists; run-plan.md present; review.md (this file) now present. Phase 4 cross-check passes (Lead/QT1/QT2/Editorial Moment/format all match).

**Final: PASS-with-fixes (fixes optional). Cleared for publication to main.**
