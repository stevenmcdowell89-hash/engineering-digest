# Issue 21 — Phase 5 Review (FULL)

**Reviewed:** `issue-21.html` (814 lines, 82,626 bytes) · **Spec:** v1.38 · **Format:** Standard Weekly
**Review depth:** FULL per run plan §13 (three of four triggers fire)
**Method:** every figure re-derived from the shipped HTML. Phase 4's self-report was not used as evidence for any check.

## VERDICT: **FAIL** — 2 blocking failures, both fixable in place. Everything else passes.

| Blocker | Section | Severity |
|---|---|---|
| **B1** — Epistemic reframing at 4 instances against a hard cap of 2 | Editorial Moment + Outside In headline | Blocking |
| **B2** — Ninth Circuit item cites a URL that does not support its claim | Week at a Glance / *Watching* | Blocking |

Everything the brief asked me to independently re-derive **holds**: the AI count is genuinely 3 of 6, the withdrawn Klarna claims genuinely stayed out, the word count genuinely lands in range, and no rejected candidate silently re-promoted. The two blockers are prose-craft and citation hygiene, not curation failures.

---

## 1. Independently derived headline numbers

| Metric | Phase 4 reported | **Phase 5 re-derived** | Verdict |
|---|---|---|---|
| AI-substrate across 6 featured sections | 3 of 6 (cap 4) | **3 of 6** | **PASS** — confirmed |
| Epistemic reframing instances | 2 | **4 confirmed + 2 borderline** (cap 2) | **FAIL** |
| Body-copy words | 3,308 | **3,448** (range 2,600–3,700) | **PASS** |

---

## 2. AI-substrate ceiling (v1.32) — re-derived from shipped HTML

Not read off the plan's table. Each classification is made from what actually shipped in the rendered section.

| # | Featured section | Shipped subject | AI the substantive driver? | Evidence in the HTML |
|---|---|---|---|---|
| 1 | Lead | EU AI Act Article 50 | **YES** | Entire article is AI-system transparency obligations |
| 2 | QT1 | Microsoft token budgets | **YES** | Token spend, GPT-5.6, per-engineer AI consumption dashboard |
| 3 | QT2 | Temenos / Google leadership unbundling | **No** | Shipped copy is org shape end to end — CPTO split, reporting lines, `1 → 2` anchor stat, the SVG is a reporting-line diagram. AI appears nowhere in the section. The plan's claim that Coleman's AI-strategy brief is "context not substrate" did not even need to be adjudicated: Phase 4 left it out entirely. |
| 4 | Editorial Moment | DSIT entry-level postings −27% | **No** | Labour-market data across three occupations. AI is not named in the section at all; the copy explicitly positions the data as *complicating* a single-cause reading. |
| 5 | In Practice | Ben Balter, 25 reorgs | **No** | Management craft. Zero AI content. |
| 6 | Outside In | Klarna AI support rollout | **YES** | AI customer-service agent is the subject |

**Result: 3 of 6 AI-substrate. Cap is 4 — PASS. Three featured sections have AI as not the primary force, against a spec minimum of two — PASS at better than the minimum.**

Perforce was indeed kept out of the featured six (it ships as a single Week at a Glance line, `.tier-know`), so the ambiguous case never touched the count. Confirmed as a deliberate avoidance, exactly as §5/Risk 1 claimed.

### Leadership Read omission — legitimate

- **Cadence.** Issues 19 and 20 both carried a Leadership Read. This is the **first** consecutive skip, inside the "max two consecutive issues without one" limit. **PASS.**
- **Footer note present.** Line 803: *"The Leadership Read returns next week."* Required when the section is cut. **PASS.**
- **Long-form variety (v1.35).** Two long-form sections present: In Practice (non-AI) and Outside In (AI). **Exactly one AI-primary of the long-form sections present. PASS.**
- **Section spread (v1.32).** In Practice → Other News → Platform Updates → Outside In. Not adjacent. **PASS.**
- The omission is not a word-budget dodge: the issue came in at 3,448 words, 848 above the floor, so the Leadership Read was cut on variety grounds with room to spare rather than to make space.

---

## 3. Epistemic reframing — **BLOCKING FAILURE (B1)**

Structural scan of every sentence in the rendered body: *does this sentence name what something is NOT in order to introduce what it IS?* Lexical grepping for the six canonical patterns was not used as the test; it was used only to build a candidate list, which was then judged on meaning.

### Confirmed instances — 4 against a hard cap of 2

| # | Section | Offending text | Why it counts |
|---|---|---|---|
| 1 | Lead, *Where the work lands* | "Article 50 **is not** a disclosure policy to be written; **it is** a marking capability to be built." | Canonical "not X — it's Y". Unambiguous. |
| 2 | In Practice | "In Balter's account a reorg **is not** a crisis; **it is** the baseline condition of working in a large engineering org." | Canonical "not X — it's Y". Unambiguous. |
| 3 | Editorial Moment | "Software sits inside a contraction running across professional occupations, which complicates the single-cause reading **rather than supporting it**." | The "less a X than a Y" family. Names what the data does *not* do (support a single-cause reading) to establish what it does. Structurally equivalent — v3.6 says the six patterns are illustrative, not exhaustive. |
| 4 | Outside In, `<h2>` | "Klarna measured everything about its AI support **except whether it worked**" | Negation-to-reveal, and it is the section's organising frame, not an aside. Reinforced twice in the body: "**None of them measured** whether the resolution was any good" (`.oi-callout`) and "the case study in what happens when **nobody measures** whether the AI was any good". |

**These are the two Phase 4 missed.** Its self-report named #1 and #2 and stopped — precisely the failure mode the v3.6 note predicts, because #3 and #4 contain none of the six literal patterns.

### Borderline — flagged, not counted, but fix while in there

| # | Section | Text | Note |
|---|---|---|---|
| 5 | Other News | "…is a production environment, **whatever the org chart calls it**." | "The real X is Y" family — dismisses the nominal label to assert the actual category. |
| 6 | In Practice | "…which is the detail that makes the average **misleading** — an average of six months **describes none of them**." | "The wrong unit of measurement is X; the right one is Y" family. |

### Required fix

Keep #1 and #2 — they are the issue's two strongest editorial moves and the Lead one is the article's whole point. Rewrite #3 and #4 to declarative. Suggested:

- **#3 →** *"Graphic designer postings were down 28% over the same period and accountant postings down 29%. The contraction runs across professional occupations, and software sits inside it."* (Drops "rather than supporting it"; the point survives intact — arguably lands harder without the editorialising clause.)
- **#4 →** retitle the Outside In `<h2>` to a declarative, e.g. *"What Klarna's AI support rollout counted"* or *"Klarna's support metrics counted deflection and speed"*. The `.oi-callout` then carries the observation as a supporting sentence rather than the section's organising negation, which is what section-briefs §19 intended when it wrote the callout to avoid the pattern. The headline reintroduced what the callout was carefully built to dodge.

Recommended while in there: soften #5 to *"…is a production environment regardless of how it is classified"* and #6 to *"…the gaps ran from six weeks to fifteen months, so the six-month average sits between two very different experiences."*

**After these fixes the confirmed count lands at exactly 2. PASS.**

---

## 4. Word count — **PASS**

**Method (stated as requested):** parsed the shipped HTML; took everything inside `<body>`; stripped `<style>`, `<script>`, `<svg>` contents and HTML comments per the v1.38 rule; stripped the sticky "All Issues" nav chrome, the `<header class="cover">` masthead furniture and the `<footer>` archive bar as non-body-copy; stripped remaining tags; unescaped entities; counted whitespace-delimited tokens containing at least one alphanumeric character.

**Result: 3,448 words.** Range 2,600–3,700. **PASS** with 848 above the floor and 252 below the ceiling.

Sensitivity, so the number is not method-dependent — every variant passes:

| Definition | Words |
|---|---|
| Including cover + footer furniture | 3,586 |
| **Editorial body only (headline figure)** | **3,448** |
| Minus source-attribution lines | 3,403 |
| Minus Recommended Reading as well | 3,364 |

Phase 4's 3,308 is a defensible under-count on the tightest possible definition, ~4% below mine. The discrepancy is immaterial — no method puts the issue near either boundary.

**Page count is not raised as a finding** (v1.38 retired it as a constraint).

Per-section, for the record: Foreword 78 (floor 50, ceiling 80 — **inside, but one word of headroom**); Editorial Moment 74; Week at a Glance 464; Lead 663; In Practice 424 (range 300–450, **PASS**); Outside In 468.

**Non-blocking observation on projection drift:** the plan projected ~2,915 after the §14 addendum; the issue shipped 18% over that. The overrun is concentrated in the Lead (663 against a planned ~400) and Week at a Glance (464 against a planned ~325). No spec cap governs either section and the total is comfortably in range, so this is not a failure — but the Lead at 663 words is now 1.6× its plan and carries proportionally more of the issue than intended. Worth Phase 2 knowing for calibration; not a fix.

---

## 5. Withdrawn claims — **ALL STAYED WITHDRAWN. PASS.**

### §0.1 — the four barred Klarna claims

| Barred claim | Grep / read result | Verdict |
|---|---|---|
| "support headcount fell from 5,000 to 3,500" | `3,500` / `3500`: **0 hits.** Shipped copy reads *"total company headcount fell about 40%, from roughly 5,000 to roughly 3,000 — the product of a hiring freeze and attrition, which is the detail most retellings of this story drop."* This is the corrected, verified version, and it correctly labels it as *total company* headcount, not support. | **PASS** |
| Routing-rules framing | `routing rule`: 0. `intent routing`: 0. The `.oi-callout` carries the replacement metrics framing from §13, not the withdrawn one. | **PASS** |
| "cut too aggressively" as a Siemiatkowski quote | `cut too aggressive`: **0 hits.** Both quotes shipped are the verbatim §0.1 forms: *"As cost unfortunately seems to have been a too predominant evaluation factor…"* and *"Really investing in the quality of the human support…"* | **PASS** |
| Marr's characterised failure modes | `hallucinat`: 0. `dispute`: 0. `account closure`: 0. CSAT appears once (line 726) and only as Klarna's own verified February 2024 claim — *"on par with human agents"* — not as a fall. | **PASS** |

The `.oi-stats-row` also correctly ships the three verified February 2024 figures (two-thirds / 11→<2 min / 700 FTE-equivalent) with the date labelled beneath it. The cancelled 5,000→3,500 before/after panel did not reappear.

### §0.3 — inference hooks mechanism

Platform Updates row 2 states allow/deny before generation, tool responses checked on return, shadow mode / role-based exclusions / percentage rollouts, and — correctly foregrounded as the leadership-relevant limit — *"verdicts are binary: the server can allow or deny, but cannot rewrite or redact."* `5-second` / `5 second`: **0 hits.** `image attachment`: **0 hits.** DLP glossed inline. **PASS.**

### §0.4 — Perforce figures

`35%`: **0 hits.** `28%`: 1 hit, and it is the Editorial Moment's graphic-designer figure, not the Perforce hybrid-platform figure. Only 73% / 44% ship, with the 820-respondent sample, the 8 July date, and an explicit vendor-sponsorship disclosure (*"Perforce sells platform tooling and published the research itself"*). Attributed to Perforce, not InfoQ. **PASS.**

---

## 6. Binding factual constraints — **ALL HELD. PASS.**

| Constraint | Shipped text | Verdict |
|---|---|---|
| 27 July UK degradation — no published cause, Faster Payments did not fail | *"No shared root cause has been published, and no Pay.UK, FCA or Bank of England statement landed in the window. The simultaneity is documented; the causation is not. Faster Payments the rail did not fail."* | **PASS** — verbatim to the constraint |
| AWS ME-CENTRAL-1 / ME-SOUTH-1 — 30 April 2026, not re-verified | *"both items remain open on the AWS Health Dashboard, with AWS's last public update dated 30 April 2026. The dashboard could not be re-verified this week, so nothing beyond that is claimed here."* No conflation with the us-east-1 concentration watch. | **PASS** — exemplary; states the limit of its own verification |
| "July 2026 AWS mega-outage" must not appear | `mega-outage`: 0 hits. `July 2026 AWS`: 0 hits. | **PASS** |
| 164 = tracker count of all logged status events, never "164 outages" | *"StatusGator logs it as the 164th status-page event of 2026, a tracker count that includes minor degradations."* `164 outages`: 0 hits. Timings correctly hedged as *"as reported"* per §9. | **PASS.** Note: the Tech Times *URL slug* contains `anthropics-164th-outage`, but the rendered link text is "Tech Times →" and no reader-visible string says "outages". Acceptable. |
| Mastercard / PayPal / Block figures absent | `Mastercard`: 0. `PayPal`: 0. `Block` as a company: 0 (the six case-insensitive hits are all `blockquote`). | **PASS** |
| Visa once only, in Other News | 5 in-text occurrences, all inside the single Other News `<li>` plus its link. Zero elsewhere. Throughline sentence shipped in the approved shape; "7%" used, the 2,600-role figure absent. | **PASS** |
| Temenos not a layoff story | `layoff`: 0. `redundanc`: 0. QT2 is reporting lines and role ownership only. 29 July announcement date stated. | **PASS** |
| Google departures not caused by the restructure | *"Semafor reports that transition had been in train for roughly a year. **Separately, on the same day**, Jeff Dean left…"* | **PASS** — the separation is explicit, not implied |
| Ninth Circuit identified as US federal | *"A US federal appellate ruling… It is a US federal appellate ruling, so the direct effect sits with US-jurisdiction organisations"* — stated twice, no implication it binds UK/EU. | **PASS on framing** (but see B2 on its citation) |

---

## 7. Lead sanity cross-check — **PASS**

| Check | Result |
|---|---|
| Lead matches plan | EU AI Act Article 50. **Matches §2.** |
| Anchors match | QT1 = Microsoft token budgets ✓. QT2 = Temenos / Google ✓. |
| Editorial Moment matches | DSIT −27% "Number of the week" ✓ |
| Format matches | Standard Weekly, `.week-badge` "This Week's Briefing" (orange bordered) ✓ |
| Opener matches | Lead is summary-first ✓ |
| Section label | Default teal `Wider engineering landscape` — **not** `.section-label.alert` ✓ |

### No silent re-promotion — all four checked specifically

| Rejected candidate | Where it actually shipped | Verdict |
|---|---|---|
| **Visa / BioCatch** | Other News, one item + throughline. Not an anchor, not featured. | **PASS** |
| **InfoQ Hugging Face reconstruction** | Other News, one sentence (generalisable control only, no attack-chain detail) + Down the Rabbit Hole. | **PASS** |
| **AISI incident report** | Week at a Glance, *Worth Knowing*, expanded. All three caveats present. Precision held: agent *"tried to insert"*, and it was a *"human maintainer"* — both §6 corrections applied. METR review (late find L4) folded in as a clause, as authorised. | **PASS** |
| **Canva** | `Canva`: **0 hits.** Dropped entirely, as ruled at Risk 2. | **PASS** |

---

## 8. Source ledger — **PASS**

Derived by enumerating every `href` and every `.on-source` / `.source-tag` in the shipped HTML.

| Publication | Sections | Cap | Verdict |
|---|---|---|---|
| claude.com/blog | Week at a Glance (L1 Claude Code item) + Platform Updates row 2 | 2 | **At cap — PASS.** L2 correctly absent. |
| Cooley | Lead + Week at a Glance | 2 | **At cap numerically — PASS** (but the WAG citation is wrong; see B2) |
| InfoQ | Other News + Down the Rabbit Hole | 2 | **At cap — PASS.** No third citation; Recommended Reading is InfoQ-free. |
| The Next Web | QT1 only | QT1 only | **PASS.** Mechanize cited to SiliconANGLE, Visa cited to Visa IR. |
| CNBC | QT2 + Outside In | 2 | **At cap — PASS.** Non-adjacent (In Practice sits between). |

**Adjacent-source rule across the six featured sections:** Editorial Moment (DSIT/gov.uk) → Lead (European Commission / AI Act / Cooley) → QT1 (The Next Web / getDX) → QT2 (Temenos / CNBC) → In Practice (ben.balter.com) → Outside In (Klarna / CNBC / Customer Experience Dive / Forbes). **No two consecutive featured sections share a source. PASS.**

**Minor, non-blocking:** Week at a Glance carries a Cooley citation and is immediately followed by the Lead, which also carries Cooley. WAG is not one of the six featured sections so the v1.32 rule does not strictly bite, but the plan's §14 ruling ("Cooley sits at exactly two sections — at the cap") considered the count and not the placement. The B2 fix below dissolves this as a side effect.

**All 27 distinct `href`s traced to `section-briefs.md` or `run-plan.md`. Zero fabricated URLs.** One item — the Claude Code / own-compute WAG line — ships attribution as unlinked text (*"Anthropic, claude.com/blog"*) because the briefs recorded no URL for late find L1. That is the correct call: Phase 4 declined to invent one. Non-blocking, and preferable to a guessed link.

---

## 9. Mechanics — PASS with one blocker

### Visuals — **PASS**

All 6 planned visuals shipped, one per major section:

| # | Section | Visual | Real diagram? | Present |
|---|---|---|---|---|
| 1 | Cover | `.cover-lead-stat` — 3% | No | ✓ |
| 2 | **Lead** | `.compare-table` — provider vs deployer | **YES #1** | ✓ (see §10 on `cmp-wide`) |
| 3 | QT1 | `.by-the-numbers`, 5 cells | No | ✓ |
| 4 | **QT2** | Two-state inline `<svg>` org diagram | **YES #2** | ✓ — a genuine `<svg>` element with `role="img"` and a full descriptive `aria-label`, not a CSS approximation |
| 5 | In Practice | `.stats-row` 25/13/13 | No | ✓ |
| 6 | Outside In | `.oi-stats-row`, three Feb-2024 metrics | No | ✓ |

**Both real diagrams survived. Per-section visual floor met — no major section is pure prose. Budget of 6 is at the top of the 4–6 band, not over. PASS.**

### Remaining mechanical checks

| Check | Result |
|---|---|
| `.ip-theme` carries no week count | `"Handling reorgs and ambiguous mandates"`. `week` / `of 3` / `of 4` / `part 1` / `#1` / `#2`: **0 hits.** **PASS** |
| `.section-label.alert` in section markup | **0 occurrences in markup** (CSS definition only). The red on the WAG *Action required* tier is `.tier-action` / `.tier-label`, that tier's own treatment. **PASS** |
| Sidebars exactly 2 | `.jargon-watch` ×1 (Lead, provider vs deployer) + `.concept-of-week` ×1 (In Practice, scope renegotiation). **PASS** — at the cap, not over. `.rabbit-hole` is a rotating component, not a sidebar. |
| `.pq-bar` unused | `pq-bar`: **0 hits in markup.** Correctly reserved as the unfired item-3 substitution. **PASS** |
| Banned second-person | `your `, `you should`, `you must`, `you need`, `the reader`, `reader's`: **0 hits each.** No rhetorical questions to the audience. **PASS.** The sole "you" is inside the verbatim Balter blockquote — *"You don't get angry at rain—you buy a raincoat."* — which is quoted source speech, not the publication addressing the reader. Not a violation. |
| Every `href` real and traceable | 27/27 traced to a brief. **PASS** — but see B2 for one that is traceable yet misapplied. |
| No AI-generated images | `<img>`: **0.** One `<svg>`, hand-authored, digest palette. **PASS** |
| Openers per plan, collision documented | Lead summary-first ✓ · QT1 quote-first ✓ (opens on the tokenmaxxing quote) · QT2 narrative-first ✓ · In Practice stat-first ✓ ("Twenty-five reorgs. Thirteen managers. Thirteen years.") · Outside In stat-first ✓ (853 FTE / $60m / $50m-from-$42m). The one collision is In Practice ↔ Outside In, at positions 11 and 15 with Other News and Platform Updates between. **Recorded here as a deliberate, pre-documented call (run plan §9.1, briefs §2), not drift.** The two openers read differently in practice — a count of events over time vs a cost contradiction — as §2 required. **PASS** |

### Other checklist items verified in passing (all PASS)

Foreword 78 words, one paragraph, drop cap, single thread, no `meanwhile`/`elsewhere`/`also this week`, no AI-default framing in either direction · Editorial Moment variant (`.em-number`) differs from Issue 20's (`.em-second-look`) · section order matches the v1.32 default adapted for the dropped Leadership Read · 2 section breathers, correctly placed (after WAG, after Quick Takes) · Week at a Glance grouped by urgency tiers, 7 items per the §14 addendum, inside the 5–8 range · On the Radar deadlines-first with `.radar-timeline` · Tier 2 labels written in sentence case ("Action required", "Worth knowing", "Watching", "Ways of working", "Management & teams") · both Quick Takes end with a bold `.so-what` "The takeaway" stating an implication, not an instruction · Outside In ends with the same, and renders its lesson in `.oi-callout` · Lead and Outside In use h3 subheadings · In Practice ends with a bold "What to try" that describes rather than prescribes · the four Balter mechanisms are a genuine numbered `<ol>`, not buried in prose · `.author-card` on In Practice · no P0 card (correctly — `p0_active` empty) · no `.article-with-sidebar` · no `.oi-hero-band` · rotating components = 4 (mid-accent, compare-table, by-the-numbers, rabbit hole), inside the 3–5 cap · cover read-time "17 min" is consistent with the true 3,448-word count at 200 wpm.

**Jargon coverage — every term flagged in briefs §4 is glossed inline on first use:** tokenmaxxing ✓ · machine-readable marking ✓ · synthetic content ✓ · Code of Practice ✓ · CPTO ✓ · core banking ✓ · CSAT ✓ · KEV catalog ✓ · RMM ✓ · cyber range ✓ · DLP ✓ · provider vs deployer ✓ (sidebar). 12 of 12. "intent routing" correctly struck along with the withdrawn claim it served.

**Agent-terminology precision (v2.6):** all three uses distinguish the end of the spectrum on first use — AISI's are *"autonomous agents with live internet access and authority to act, under test conditions set deliberately wide"*; Cloudflare's have *"transaction authority within limits, a narrower thing than an agent operating unsupervised on the open internet"*; Anthropic's inference hooks are scoped to prompts and tool responses with no autonomy claim. **PASS.**

**Quote allocation (v3.6, one quote one slot):** raincoat line in In Practice only; the "Monday" alternate absent; tokenmaxxing in QT1 only; both Siemiatkowski quotes in Outside In only; the AISI quote unused. No quote appears twice. **PASS.**

**Attribution fidelity (v3.6):** the Microsoft memo is framed as reported throughout and explicitly disclaimed (*"The memo is internal and unpublished… none of it is sourced to Microsoft directly"*); the penalty ceiling is attributed to Article 99, not Article 50; the Digital Omnibus is named accurately with both adoption dates and the correction that the December date was *"not present in the original Act"*. **PASS.**

---

## 10. Adjudication of Phase 4's three template deviations

I checked each against `assets/weekly-template.html`, `assets/deepdive-template.html`, the compliance checklist, and prior shipped issues.

### (a) `.rabbit-hole` CSS ported from Issue 20 — **ACCEPTABLE**

The compliance checklist has a whole *Down the Rabbit Hole* section that mandates *"Uses `.rabbit-hole` CSS class with correct styling"*, yet the weekly template contains zero occurrences of it. The class has shipped in Issues 11, 13, 14, 16 and 20. I diffed Issue 21's block against Issue 20's: **byte-identical**. This is a faithful port of an established, spec-required component into a template that has a gap. **Not a violation.** The defect is in the template, not the issue — recommend the class be folded into `weekly-template.html` so the next run does not have to re-port it.

### (b) `.by-the-numbers` CSS ported from Issue 18 — **ACCEPTABLE, with a naming note**

The checklist names `.by-the-numbers` as a satisfier of the v1.30 real-diagram floor and as a deep-dive layout primitive; it exists verbatim in `deepdive-template.html` and Issue 18. Again absent from the weekly template. **Not a violation.**

Phase 4 did not port it byte-identically — it narrowed the primitive for the half-width Quick Take column: padding 24/28 → 18/20, grid `1fr 1fr 1fr` → `1fr 1fr`, `.btn-num` 28px → 24px, plus two additive subclasses (`.btn-item.span2`, `.btn-note`). That adaptation is **correct and necessary** — a three-column grid at ~380px would have broken, and the `.btn-note` is what carries the mandatory getDX sample-size and vendor-research disclosure. The additions are additive, not overriding.

**One design-system note, non-blocking:** the template already establishes a modifier convention for exactly this — `.compare-table.compact`. The narrowed variant should have been expressed as `.by-the-numbers.compact` rather than by silently redefining the base class, so that a future full-width use does not inherit the Quick Take geometry. Recommend refactoring on the next touch.

### (c) `.compare-table.cmp-wide` — **DESIGN-SYSTEM VIOLATION**

This one does not pass. It has no precedent anywhere: zero occurrences in either template, in the deep-dive template, or in any prior issue (17 issues checked).

The checklist states: *"**Compare-table cap**: `.compare-table` is capped at 5 rows × 2 columns. Larger tables are slide-deck territory."* The shipped table is **3 rows × 3 columns** (Obligation / Provider / Deployer). The template CSS makes the intended geometry unambiguous — `.compare-table tbody td:first-child{…width:42%}` only makes sense with a label column plus **one** content column, and `max-width:480px` sizes it for exactly that.

`cmp-wide` exists purely to defeat both constraints: it overrides `max-width` to 100% and rewrites the label column from 42% to 20% to make room for a third column. **A bespoke modifier whose only function is to override a documented cap is not a template extension; it is a cap breach with CSS cover.** The distinction from (a) and (b) matters: those port a spec-named component the template forgot, whereas this invents a component the spec deliberately bounded.

**Fix — the content is fine, the primitive is wrong.** Transpose so provider/deployer are the row labels and the obligations are the single content column:

| | |
|---|---|
| **Provider** — places the system on the EU market | Must disclose that a person is interacting with an AI unless obvious (50(1)); must mark generated audio, image, video or text machine-readable and detectable (50(2)). Live 2 Aug 2026; systems already on the market have to 2 Dec 2026 for marking. |
| **Deployer** — uses it under its own authority | Must inform people exposed to emotion recognition or biometric categorisation (50(3)); must disclose deepfakes and AI-generated public-interest content unless under substantive human editorial review (50(4)). Live 2 Aug 2026, no backstop. |

That is 2 rows × 2 columns, drops `cmp-wide` entirely, restores `max-width:480px`, preserves every verified cell from briefs §7, and keeps real diagram #1 intact. **This is a must-fix, but it is a template-compliance fix and does not require re-verification of any fact.**

### (d) `.section-time` dropped from the In Practice header — **NOT A DEVIATION; Phase 4 over-reported it**

Phase 4 flagged this against itself unnecessarily. The weekly template's own In Practice header markup is:

```
<header class="in-practice-header">
  <span class="section-label">In Practice</span>
  <span class="ip-theme">[Season theme]</span>
</header>
```

— no `.section-time`. Issue 20 shipped the same way. The `.in-practice-header .section-time` CSS rule is latent styling with no markup usage anywhere in the design system. Separately, the checklist item *"each major section `<h2>` carries `.section-time`"* cannot bite here: the In Practice header has no `<h2>` at all (it uses `.ip-theme`, and the piece headline is an `<h3>`).

Issue 21 carries `.section-time` on four `<h2>`s (WAG 2 min, Lead 3 min, Quick Takes 3 min, Outside In 3 min) against Issue 20's three and Issue 19's two. **Conformant, and slightly more thorough than precedent. No action.**

---

## 11. Blocking failure B2 — the Ninth Circuit citation

**Section:** Week at a Glance → *Watching* (line 459)

**Offending markup:**
```
<span class="on-source"><a href="https://www.cooley.com/news/insight/2026/
2026-08-03-eu-ai-act-transparency-obligations-take-effect-2-august-2026">Cooley</a></span>
```

**The problem:** this is the URL of Cooley's **3 August EU AI Act transparency alert** — the same URL cited in the Lead's `.source-tag`. It is attached to a claim about a **6 August Ninth Circuit CFAA ruling on agent access to third-party websites**. The linked document does not contain the claim it is cited for. A reader who follows the link lands on an article about Article 50 transparency obligations.

The URL is not fabricated — it appears in the briefs — but it is **misapplied**, which fails *"All links are real, working URLs"* in substance and fails the Quoted-phrase / attribution-fidelity discipline: the citation asserts source support that does not exist. `section-briefs.md` §0.6 lists L3 as *"Cooley alert, 6 Aug"* with **no URL recorded**, so Phase 4 had no correct link available and reached for the nearest Cooley URL rather than flagging the gap.

**Fix — pick one:**
1. **Preferred:** substitute the correct URL for Cooley's 6 August CFAA alert. If it cannot be pinned, do not guess.
2. **Fallback:** drop the hyperlink and attribute in plain text — `<span class="on-source">Cooley alert, 6 August</span>` — exactly as the Claude Code / own-compute item on line 453 already handles an unpinned URL. This is consistent with how the issue already treats a source it cannot link, and it additionally dissolves the WAG→Lead Cooley adjacency noted in §8.

Option 2 is available immediately and requires no further research.

---

## 12. Workflow pipeline checks

| Check | Result |
|---|---|
| Run directory, `candidates.json`, `run-plan.md`, `section-briefs.md` all present | ✓ |
| Phase 2 lead justification, ≥2 rejected candidates with reasons | ✓ — 19 rejections documented at §7 |
| Phase 2 operational-concern lead test | ✓ — regulatory obligation, not a tool release |
| Phase 3 whole-source rule (v1.37) | ✓ — four late finds recorded at §0.6 and routed back to Phase 2 rather than placed. §14 addendum rules on all four. Phase 4 placed L1 and L3 as authorised and correctly did **not** place L2 (`cost visibility` guide: 0 hits). Exemplary. |
| Phase 4 cross-check — lead/QT1/QT2/editorial-moment/format all match the plan | ✓ |
| No silent re-promotion | ✓ — §7 above |
| Jargon-watch coverage | ✓ — 12 of 12 |
| Phase 5 artefact | This document |

The scope-conditional test at §3 and the negative control (ECB, correctly demoted to On the Radar sized to its 31 October date) both hold in the shipped issue.

---

## 13. Summary of required fixes

| # | Severity | Fix |
|---|---|---|
| **B1a** | **Blocking** | Editorial Moment: remove `"rather than supporting it"`. Suggested replacement in §3. |
| **B1b** | **Blocking** | Outside In `<h2>`: replace `"Klarna measured everything about its AI support except whether it worked"` with a declarative headline. Suggested replacements in §3. |
| **B2** | **Blocking** | Week at a Glance / Ninth Circuit: replace the mis-applied Cooley EU-AI-Act URL with the correct 6 August CFAA alert, or drop the hyperlink and attribute in plain text. |
| **T1** | Must-fix (template) | Drop `.compare-table.cmp-wide` and transpose the Lead table to 2 rows × 2 columns. Replacement table supplied in §10(c). |
| R1 | Recommended | Soften the two borderline reframings (Other News "whatever the org chart calls it"; In Practice "makes the average misleading"). |
| R2 | Recommended | Express the narrowed by-the-numbers as `.by-the-numbers.compact` rather than redefining the base class. |
| R3 | Recommended (housekeeping) | Fold `.rabbit-hole` and `.by-the-numbers` into `weekly-template.html` so future runs stop re-porting them. |
| R4 | Note only | Documented exception: Outside In Format A ships inline attribution instead of an `.author-card`, contrary to the v3.8 item. Pre-reasoned at briefs §13 — the author card asserts "real person at a real organisation", which a commentator write-up does not support. Accepted as a justified deviation, recorded so it is not read as drift. |
| R5 | Note only | Foreword is 78 words against an 80-word ceiling. Fine as shipped; no headroom if it is edited. |

**Once B1a, B1b, B2 and T1 are applied, this issue passes every item on the checklist.** The curation is sound, the verification discipline in Phase 3 was unusually strong, and the Klarna re-scope in particular turned the issue's highest-risk section into its best-sourced one.
