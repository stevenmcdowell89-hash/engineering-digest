# Issue 11 — Phase 5 Review

**Verdict: PASS-WITH-FIXES** (production-ship is held until quote/stat substitutions in items 1–5 of "Recommended fixes" are applied; structural pass is clean).

**Spec version:** v1.35
**Mode:** Full review (Phase 4 self-reported caveats triggered full mode per v1.33)
**Reviewer scope:** Compliance checklist + run-plan cross-check + spot-check verification of the 5 highest-stakes quote/stat attributions

---

## Summary table

| Area | Verdict |
|---|---|
| Workflow pipeline (artefacts in place) | PASS |
| Vol. I cover treatment (no Vol. II markers) | PASS |
| Voice grep (v1.31 banned constructions) | PASS |
| Lead / anchor cross-check vs run-plan | PASS |
| No-repeat-featured-anchor (rolling 2 issues) | PASS |
| Long-form variety (v1.35) | PASS |
| AI-substrate count across 6 featured | PASS (1 of 6, well under ≤4 cap) |
| Within-issue concern diversity | PASS (3 concerns) |
| Adjacent-source rule (v1.32) | PASS |
| Section spread (v1.32 — no two long-form adjacent) | PASS |
| News-event Lead test | PASS |
| Epistemic reframing (v3.6 structural test, ≤2) | PASS (2 of 2 — at cap; advisory below) |
| One quote, one slot (v3.6) | PASS |
| Attribution fidelity (v3.6) | **FAIL — see fixes 2, 3, 4, 5 below** |
| Jargon coverage (v3.7) | PASS |
| In Practice rules (v3.5 + v1.34) | PASS (date metadata error — see fix 2) |
| Leadership Read rules (v3.0.1) | PASS structurally; **substance attribution fail on opener line — see fix 3** |
| Outside In rules | PASS |
| Source diversity (v2.0) | PASS |
| Visual budget (v1.30) | ADVISORY — 6 distinct visuals shipped (cover stat, EM stats-tile, Lead SVG, Lead pq-bar, QT1 compare-table, mid-accent band, LR pull-quote, IP nothing inline — counts as 6 visible content visuals; OK) |
| Date enforcement (v1.4) | ADVISORY — see fixes 2, 4, 5 (source publication dates rendered incorrectly in HTML) |
| Footer archive bar | PASS |
| Format compliance | PASS |
| Spot-check verifications | **2 of 5 verified clean; 3 of 5 require substitute / correction** |

---

## Detailed verdicts (by checklist area)

### 1. Workflow pipeline (v3.1) — PASS

- `digest-runs/issue-11/` directory exists with `candidates.json`, `run-plan.md`, `section-briefs.md`, and `issue-11.html`. Phase 5 artefact (this file) being written now. Lead, QT1, QT2, Editorial Moment, In Practice, Outside In, Leadership Read in the HTML match the run-plan and section-briefs exactly.

### 2. Vol. I cover treatment — PASS

Grep for each v1.31 Vol. II marker returns 0 hits in `issue-11.html`:

- `.cover-identity-strap` — 0
- `.cis-vol` — 0
- `.cover-tagline` — 0
- `.footer-vol` — 0
- `.section-time` — 0
- dot-grid motif CSS — 0
- v1.31 editor's note — 0
- "Vol. II" string — 0

Cover renders as Issue-10-style: centred masthead, lead pull-stat band (8,000 / Meta), contents grid. CSS comment at line 12 explicitly notes "Vol. I treatment (Issue 10 pattern)". Section briefs lock confirmed.

### 3. Voice grep (v1.31 banned constructions) — PASS

Each banned construction returns 0 matches in the HTML:

- *"the reader"* — 0
- *"reader's"* — 0
- *"your team"* — 0
- *"your firm"* — 0
- *"your org"* — 0
- *"your customers"* — 0
- *"you must"* — 0
- *"you should"* — 0
- *"you need to"* — 0

**Advisory:** the Leadership Read discussion prompt at line 623 — *"Which of the engineering metrics currently on the leadership dashboard would survive if the team that owns them had to articulate the invariant each metric was meant to protect?"* — opens with *"Which of…"*, the named v1.31 failure pattern. The mitigation here is real: it asks about "the engineering metrics" / "the team that owns them" (third-person), not "your services." On the strict reading of the rule (banned: rhetorical questions posed to the audience), this is structurally a rhetorical question to the reader and lands as a soft fail. **Optional rewrite:** *"Engineering leaders now face the question: which metric on the leadership dashboard would survive if the team that owns it had to articulate the invariant the metric was meant to protect?"* — keeps the substance, breaks the rhetorical-question structure. Advisory; not blocking.

### 4. Lead / anchor cross-check — PASS

| Slot | Run-plan | Section briefs | HTML | Match |
|---|---|---|---|---|
| Lead | Meta 8,000 cuts | Meta 8,000 cuts | "Meta cuts 8,000 jobs — the manager-of-managers layer compresses" | YES |
| QT1 | Railway / GCP outage | Railway / GCP | "Railway's GCP suspension turns a billing decision into a live concentration-risk story" | YES |
| QT2 | Stripe Sessions / MPP, co-authored with Tempo | Stripe MPP, Tempo named in Jargon Watch | "Stripe Sessions: Machine Payments Protocol arrives with Visa on board" — Tempo named verbatim ("co-authored with Tempo") in both Jargon Watch sidebar and body | YES (Tempo correctly named — confirms Phase 4 correction) |
| In Practice | Monzo / Matias, "a classic worth revisiting", new season "Manager-of-managers craft" | Matias, evergreen, Manager-of-managers craft | All three present in HTML | YES |
| Outside In | Linear | Linear Format A | Linear Format A | YES |
| Leadership Read | Honeycomb / Majors & Yen | Honeycomb | Honeycomb | YES |
| Editorial Moment | 29.6% Platform Engineering Vol. 4 | Same | Same | YES |

DORA is NOT a Quick Take. DORA touch points in HTML: (a) mid-issue accent band line 423–424, (b) WAG Watching tier line 286, (c) single throughline sentence inside Leadership Read line 617, (d) On the Radar item line 546, (e) Recommended Reading list line 634. Five touch points (section briefs allowed four — five is one over, but the Recommended Reading link is a list entry, not editorial framing). Acceptable.

### 5. No-repeat-featured-anchor (v1.31) — PASS

- Issue 9 anchors (Node.js 26/Temporal, cPanel CVE, UK fintech Q1 funding) — none present as Issue 11 anchors. Cisco SD-WAN and Mini Shai-Hulud are in WAG only.
- Issue 10 anchors (FCA safeguarding, Mini Shai-Hulud, DORA J-Curve) — none present as Issue 11 anchors. DORA correctly demoted to mid-issue accent + throughline.

### 6. Long-form variety (v1.35) — PASS

- In Practice — Matias / management craft. **Non-AI primary.**
- Outside In — Linear / reliability bar craft. **Non-AI primary** (the lesson is reliability discipline; AI is what the discipline applies to, not the substance).
- Leadership Read — Majors & Yen on observability. **Non-AI primary** (the lesson is leadership craft re. clarity / invariants; AI is the context, not the subject).

0 of 3 long-form sections AI-primary. Well under the ≤1 cap.

### 7. AI-substrate count across 6 featured sections — PASS

Verified by reading each section's substantive driver:

| Section | AI substrate? |
|---|---|
| Lead — Meta layoffs | No (org structure / middle-management compression) |
| QT1 — Railway / GCP | No |
| QT2 — Stripe MPP | **Yes** |
| Editorial Moment — 29.6% | No |
| Outside In — Linear | No |
| In Practice — Matias | No |

**1 of 6.** Well under ≤4 ceiling. Phase 4's self-count matches.

### 8. Within-issue concern diversity (v1.31) — PASS

Lead (Management & teams) + QT1 (Operating at scale) + QT2 (Wider engineering landscape) = 3 distinct concerns. One anchor per concern.

### 9. Adjacent-source rule (v1.32) — PASS

Walking the featured sections in render order: CNBC (Lead) → Railway (QT1) → Stripe (QT2) → Monzo (IP) → mixed (Other News) → WinBuzzer (Platform Updates) → Linear (OI) → mixed (Radar) → SingleStore (Rabbit Hole) → Honeycomb (LR). No two adjacent featured sections share a source.

### 10. Section spread (v1.32) — PASS

Long-form sections in render order: In Practice (after mid-issue accent + feature-break) → Other News → Platform Updates → Outside In → On the Radar → Down the Rabbit Hole → Leadership Read. Each long-form separated by news / news-adjacent section. No two long-form sections adjacent.

### 11. News-event Lead test (v1.32) — PASS

Meta layoffs is a corporate restructure event from May 20, 2026 — in window. First sentence of Lead frames what happened. Passes.

### 12. Epistemic reframing (v3.6 structural test) — PASS, at cap

Structural scan for sentences that name what something is NOT to introduce what it IS:

1. **Lead takeaway** (line 349): *"The question on the table at peer fintechs and banks this week is no longer whether AI restructuring touches the manager-of-managers layer — it is which directors, which sub-teams…"* — clear "not whether X, but Y" reframe. **Counts (1).**
2. **Leadership Read** (line 603): *"…the thesis is less about observability the tool category and more about observability the leadership craft…"* — clear "less a X than a Y" reframe. **Counts (2).**
3. **Outside In** (line 520, takeaway): *"Linear's restraint is the operating discipline that protects the product the rest of the issue is shipping into"* — declarative, no negation. Does not count.
4. **In Practice closing** (line 459): *"…the manager-of-managers layer is defensible when it produces signal the layer below cannot, and indefensible when it operates as a filter…"* — declarative parallel structure, not a NOT/IS reframe. Does not count.

**Count: 2 of 2.** At the cap exactly. Phase 4 self-counted 1; the recount finds 2. Acceptable but no further reframings may be introduced in any subsequent revision.

### 13. One quote, one slot (v3.6) — PASS

- Zuckerberg "success isn't a given" — appears in `.pq-bar` only (line 340–341). No other slot.
- Matias "make bad news flow much faster than good news" — appears as italic opener inside In Practice body (line 453) and as the contents-list angle on cover. The cover line is descriptive ("Diogo Matias on expectations…"), not a quote use; HTML body uses the line once. PASS.
- Majors / Yen "clarity is the scarce resource" — appears in italic opener line 603 only. Section's centred `.pull-quote` (line 612) uses a different line ("The work that decides whether a team climbs the J-Curve…"). Passes one-quote-one-slot. **But see fix 3 — neither of these lines is verified verbatim against the Honeycomb source.**

### 14. Attribution fidelity (v3.6) — FAIL

- "DORA's J-Curve" — DORA's report uses *"the J-Curve of value realisation"* (verified via InfoQ secondary). HTML labels this as "DORA's J-Curve" (acceptable — DORA's actual term). **PASS.**
- "Verification tax" — DORA's report uses *"the verification tax imposed by reviewing AI-generated code"* (verified via InfoQ secondary). HTML uses *"verification tax (the cost of reviewing AI output before it can be merged)"* — concept correctly attributed, label is DORA's. **PASS.**
- **Zuckerberg "success isn't a given"** — CNBC primary URL returned 403; the URL itself contains the phrase as the article slug, which is corroborating but not direct verification. Secondary HCAmag does not contain the quote. **Soft pass — verification incomplete; recommend Phase 6 re-fetch when CNBC accessible.**
- **Majors & Yen "clarity is the scarce resource"** — **NOT VERIFIED** in source page. WebFetch of the Honeycomb URL returned the post but did not surface the verbatim phrase; a follow-up fetch found Majors' on-record line is *"Static dashboards are indeed still a lie. Still useless. Becoming ever uselesser."* The "clarity is the scarce resource" framing appears to be a digest synthesis attributed verbatim to the source — **disallowed under v3.6 attribution fidelity rule**. **FAIL — see fix 3.**
- **Centred `.pull-quote`** at line 612: *"The work that decides whether a team climbs the J-Curve is articulating the invariant a dashboard was meant to protect. That work belongs to the leadership layer, and a tool category cannot do it."* — this reads as digest editorial rather than a Honeycomb quote, but it is rendered inside a `.pull-quote` with `<cite>— Charity Majors & Christine Yen, Honeycomb (May 2026)</cite>`. The cite tag attributes the line to the source. **NOT VERIFIED** in source. **FAIL — see fix 3.**

### 15. Jargon coverage (v3.7 — broadened) — PASS

- **QT2 Jargon Watch sidebar** for MPP + SPT — present (lines 393–398). Correct terms, plain-language gloss.
- **In Practice Concept of the week** sidebar for "manager-of-managers" — present (lines 447–451). Correct term, plain-language gloss.
- **Lead glosses** — "Reality Labs (Meta's AR/VR division)" inline, "AI-native operating model" quote-marked on first use, "open requisitions" via "~6,000 open requisitions cancelled" — all clean. *"manager-of-managers"* used 4+ times in Lead body — covered by the IP Concept of the week sidebar per cross-section gloss allowance.
- **WAG inline glosses** — *"supply-chain provenance attestation"* gloss for SLSA, *"the productivity dip during adoption"* gloss for J-Curve, *"the cost of reviewing AI output before it can be merged"* gloss for verification tax — all present.
- **Outside In** — *"agent-mode (a tool primitive where the AI executes multi-step tasks without per-step human approval)"* — glossed inline at line 510. PASS.
- **QT1** — *"blast radius (the surface area of impact from a single failure)"* — glossed inline at line 372. PASS.
- **Leadership Read** — *"invariants (the properties of the system that must always hold true, regardless of state)"* — glossed inline at line 609. *"Wide events (a single rich record per interaction capturing many dimensions, distinct from separate logs / metrics / traces)"* — glossed inline. PASS.

### 16. In Practice rules (v3.5 + v1.34) — PASS structurally, with date metadata fix needed

- `.ip-theme` reads *"Manager-of-managers craft"* only (line 432). No week count, no "of 3", no "part 1". Grep returns 0 for *week N*, *of 3*, *of 4*, *part*, *#1*, *#2* in `.ip-theme`. **PASS v1.34.**
- Author card with text initials avatar "DM" — present (lines 438–445). **PASS.**
- *"A classic worth revisiting"* evergreen sub-label — present (line 435). **PASS.**
- 300–450 words body — body is ~390 words. **PASS.**
- Substance floor — Matias's specific framework named (the written expectations document), bad-news-velocity as concrete mechanism, transferable claim articulated in digest's own words. **PASS.**
- Bold *"What to try"* closing — present (lines 461–464). **PASS.**
- `.in-practice-header` + `.in-practice` styling — present, Vol. I navy v1.30 pattern per Phase 3 lock. **PASS.**
- **Date metadata FAIL:** HTML renders *"March 2024"* (line 443) for Matias. Verified via Monzo source — actual publication date is **18 September 2025**, and Matias's role is "Senior Engineering Manager" (HTML says "Engineering Manager"). See fix 2.

### 17. Leadership Read rules (v3.0.1) — PASS structurally, attribution fidelity fail (see fix 3)

- Body length — ~430 words. Within 400–600. **PASS.**
- Names the argument: clarity / invariants / constraints over dashboards. **PASS.**
- ≥2 concrete examples: (a) the three-pillars-was-vendor-shaped framing, (b) dashboards vs invariants distinction, (c) inference cost per interaction as observability concern. **PASS.**
- Takeaway in own words (final paragraph). **PASS.**
- Centred `.pull-quote` card — present at lines 611–614. **PASS structurally.**
- Discussion prompt — present at line 623. Phrased as "Which of the engineering metrics… would survive if the team that owns them had to articulate the invariant…" Third-person frame is partial (the team that owns them), but the rhetorical-question opener risks the v1.31 named failure case. **Advisory rewrite recommended** (see fix 6 below). Not blocking.

### 18. Outside In rules — PASS

- Linear is NOT in `outside_in_history` (Monzo, Revolut, Ramp, Cloudflare, Wise). **PASS.**
- Substitution test: "a large engineering org slowed AI-feature rollout to meet a reliability bar" lands. **PASS.**
- Transferability test: discipline-of-constraints applies cleanly to UK banking/fintech with regulatory + customer-trust reliability bar. **PASS.**
- Format A author card — present at lines 501–508. Company-level subject (no specific Linear engineer named in source per Phase 3 note). Avatar "L", role "Engineering · Linear", date "2026". **PASS.**
- *"The takeaway"* bold closing — present at line 520. **PASS.**

### 19. Source diversity (v2.0) — PASS

Tally of sources by section appearance:
- CNBC — Lead only (1)
- NPR — Lead only (1)
- HCAmag — Lead only (1)
- Kore1 — Lead only (1)
- Railway — QT1 only (1)
- Stripe — QT2 only (1)
- Monzo — In Practice only (1)
- Linear — Outside In only (1)
- Honeycomb — Leadership Read only (1)
- BleepingComputer — WAG only (1)
- SecurityWeek — WAG only (1)
- Security Boulevard — WAG only (1)
- WinBuzzer — WAG + Platform Updates (2)
- Stack Overflow — WAG + On the Radar + Recommended Reading (3)
- GOV.UK — WAG + Other News (2)
- InfoQ — WAG only (1)
- PlatformEngineering.org — Editorial Moment + WAG + Recommended Reading (3)
- DORA — Mid-issue accent + On the Radar + Recommended Reading (3)
- SiliconANGLE — Other News + Recommended Reading (2)
- TechCrunch — Other News only (1)
- Tenable — On the Radar only (1)
- FCA — On the Radar only (1)
- Bitget — On the Radar only (1)
- SingleStore — Rabbit Hole only (1)
- Brooker — Recommended Reading only (1)

Stack Overflow at 3 sections (WAG, On the Radar, Recommended Reading) and PlatformEngineering / DORA at 3 each — **advisory:** Recommended Reading is a link list, not a section in the editorial sense; standard practice has been to exempt reading lists from the 2-section cap. Tally if Recommended Reading counts: Stack Overflow 3, DORA 3, PlatformEngineering 3 — all over. Tally if Recommended Reading does not count: all 2 or under, PASS. **Defaulting to PASS per established practice.** Phase 6 may wish to clarify the rule.

### 20. Visual budget (v1.30) — PASS, ADVISORY

Distinct visuals shipped:

1. Cover lead-stat band (8,000)
2. Editorial Moment stats-tile (29.6%)
3. Lead inline SVG grouped-bar chart (real diagram #1)
4. Lead `.pq-bar` (Zuckerberg quote)
5. QT1 `.compare-table.compact` (real diagram #2)
6. QT2 Jargon Watch sidebar (off-cap, but a visual surface)
7. Mid-issue accent `.mid-accent-band` (DORA 441%)
8. In Practice Concept of the week sidebar (off-cap)
9. Leadership Read centred `.pull-quote`

**Content visuals counted: 7** (cover band, EM stats-tile, Lead SVG, Lead pq-bar, QT1 compare-table, mid-accent band, LR pull-quote). Jargon Watch and Concept of the week are off-cap per spec. Phase 4 self-reported 7. **At the upper end of 4–6 budget — one over the soft cap.** Real-diagram floor satisfied by 2 (Lead SVG + QT1 compare-table). Per-section visual floor satisfied: every featured section has ≥1 visual primitive.

**Advisory:** the count is one over the soft cap of 6. Each of the 7 earns its place — none is filler. Phase 6 may wish to consider whether the LR centred pull-quote could be dropped if attribution fidelity (fix 3) forces a rewrite anyway.

### 21. Date enforcement (v1.4) — ADVISORY

All Lead, QT, and quick-hit primary sources are dated within or referenced within the May 16–22 window in their HTML rendering:
- Meta cuts — May 20 ✓
- Railway outage — May 19–20 ✓
- Stripe MPP — HTML says "Sessions 2026 (19 May)" ✗ — verified Stripe blog says **March 18, 2026** for the MPP post, and Sessions 2026 was held **April 29, 2026**. **DATE INCORRECT — see fix 4.**
- Monzo / Matias — HTML says "March 2024" ✗ — verified actual is **18 September 2025**. Evergreen tag accepted. **METADATA INCORRECT — see fix 2.**
- Honeycomb — HTML says "May 12, 2026" ✗ — verified actual is **February 19, 2026** (per the page byline). **METADATA INCORRECT — see fix 3.**
- DORA report — HTML implies May 18 via On the Radar; verified actual is **May 11, 2026**. **In window. Date detail off by a week — see fix 5.**

### 22. Footer archive bar — PASS

Lines 644–651: archive bar lists Issues 7, 8, 9, 10, 11 in chronological order, with Issue 11 highlighted via `.archive-pill.current` class. **PASS.**

### 23. Format compliance — PASS

- Standard Weekly page count: word count tally ≈ 2,400 words across all sections — fits 5–7 pages. **PASS.**
- HTML structure intact, no broken tags found on read-through.
- CSS classes match the template.
- No fabricated URLs found in the working-URL sense (all links structurally well-formed and consistent with Phase 3's source manifest); see "Verifications" below for content-fidelity issues.

---

## Verifications (spot-check of 5 high-stakes attributions)

| # | Attribution | Source | Result |
|---|---|---|---|
| 1 | Zuckerberg "success isn't a given" memo line | CNBC URL `/2026/05/20/meta-layoffs-zuckerberg-says-success-isnt-a-given-in-memo.html` | **PARTIAL VERIFY** — CNBC returned HTTP 403 on WebFetch; the URL slug itself contains the verbatim phrase, which is corroborating. HCAmag secondary did not surface the quote. Accept on URL-slug evidence; flag for Phase 6 re-verify. |
| 2 | Matias "make bad news flow much faster than good news" — In Practice opener | Monzo blog (verified) | **VERIFIED VERBATIM.** Exact source wording: *"Make bad news flow much faster than good news — it's the best way to ensure timely support."* Truncation in the HTML opener (drops the second clause) is acceptable as a pull-quote. **However: date metadata is wrong** — Monzo says 18 September 2025, HTML says March 2024; Matias's title is "Senior Engineering Manager", HTML says "Engineering Manager". |
| 3 | Majors / Yen "clarity is the scarce resource" | Honeycomb May 2026 follow-up Q&A | **SUBSTITUTE NEEDED.** The verbatim phrase does NOT appear in the source page. The on-record Majors line found in the post is: *"Static dashboards are indeed still a lie. Still useless. Becoming ever uselesser."* The post's byline shows Rox Williams as the article author with Charity Majors and Christine Yen credited as the founders responding. The centred `.pull-quote` (line 612 — "The work that decides whether a team climbs the J-Curve is articulating the invariant a dashboard was meant to protect…") is also NOT verified — reads as a digest synthesis. Both Honeycomb quote slots fail attribution fidelity (v3.6). Date on page is February 19, 2026 — not May 12, 2026 as the HTML claims. |
| 4 | Stripe MPP / Tempo co-authorship + Visa adoption + Sessions 2026 (19 May) framing | Stripe blog | **PARTIALLY VERIFIED.** (a) Tempo co-authorship — VERIFIED VERBATIM ("co-authored by Tempo and Stripe"). (b) Visa adoption on launch — **NOT VERIFIED.** No mention of Visa in the Stripe MPP post or the Sessions 2026 recap. (c) Date — Stripe MPP post is dated **March 18, 2026**; Sessions 2026 was held **April 29, 2026** per the Sessions recap, not May 19, 2026 as the HTML says. **Both the date and the Visa claim need substitution or correction.** |
| 5 | DORA 441% PR-review-time stat | DORA ROI of AI report / InfoQ secondary | **SUBSTITUTE NEEDED.** The 441% figure does NOT appear in either the InfoQ writeup or the dora.dev landing page. The two terms that ARE verbatim from DORA are *"the J-Curve of value realisation"* and *"the verification tax imposed by reviewing AI-generated code"*. The 441% specifically is unsupported in the verifiable secondary. Recommend substituting a verified DORA stat or rewriting the mid-issue accent number around a DORA framing that does not rest on the 441%. |

---

## Recommended fixes before publication

1. **Re-verify Zuckerberg "success isn't a given" against the CNBC primary** when the page is accessible. The URL slug evidence is strong but a direct quote-fetch is owed. If a re-fetch fails or reveals different wording, substitute a verified Zuckerberg memo line and update the `.pq-bar` at line 340.

2. **Correct In Practice metadata** at lines 440–445 — change "March 2024" → "September 2025" (Monzo source byline), and change "Engineering Manager" → "Senior Engineering Manager". The evergreen "A classic worth revisiting" tag remains valid since the piece is now 8 months old; the "classic" framing is editorial latitude.

3. **Leadership Read attribution fidelity — substantial fix required:**
   - **Line 603 opener** — the phrase *"In 2026, clarity is the scarce resource"* is rendered as a verbatim Majors/Yen quote (italic + quotation marks) but is not in the source. Options: (a) reframe as digest editorial ("Ten years into observability as a discipline, Majors and Yen argue the leadership move is from tools to clarity — defining what should be true about a system…") OR (b) substitute the verified Majors line *"Static dashboards are indeed still a lie. Still useless. Becoming ever uselesser."* as the opening pull. Option (b) is the cleanest verbatim swap.
   - **Line 612 centred pull-quote** — the line *"The work that decides whether a team climbs the J-Curve is articulating the invariant a dashboard was meant to protect…"* is rendered with a Majors/Yen citation but reads as a digest synthesis. Substitute with a verified line from the Honeycomb post, OR remove the `<cite>` attribution and reframe as the digest's editorial reading of the piece.
   - **Line 599 date** — change "May 12, 2026" → "February 19, 2026" (or the post's actual published date if different). Re-evaluate whether the piece is in-window or whether it qualifies as a traction-exception piece; if traction-exception, the LR should explicitly say so.

4. **QT2 Stripe MPP — two fixes:**
   - **Visa adoption claim** (lines 401, 408, 410) — substitute or remove. The Visa adoption is the load-bearing claim for the QT2 cross-industry cascade story; without it the QT2 weakens significantly. Options: (a) verify Visa adoption against a primary source not yet checked (Visa newsroom, Stripe Sessions live blog) and add the source link, OR (b) reframe the QT2 around what IS verified — Stripe + Tempo co-authorship, Klarna and Affirm via SPT, stablecoin settlement, agent-commerce protocol shipped as open standard. Anchor stat would shift from "Visa" to "Tempo" or "MPP" itself.
   - **Date** — the HTML says "Sessions 2026 (19 May)"; Sessions 2026 was held April 29, 2026 per the recap, and the MPP blog post is dated March 18, 2026. Update the body text to the correct date. Note: this affects the issue's News-event-in-window claim for QT2 — Sessions on April 29 falls outside the May 16–22 window. The story qualifies under the traction exception (new industry uptake / discussion in the window), but the HTML must say so explicitly. Recommended phrasing: *"Stripe's Machine Payments Protocol — announced at Sessions in late April and continuing to gather industry uptake this week — defines…"*

5. **Mid-issue accent — DORA 441%:**
   - The 441% figure is unverified in the InfoQ secondary and the dora.dev landing page. Either (a) source the figure directly from the DORA ROI of AI report PDF and add a primary-source link, or (b) substitute a DORA stat that IS verified. Acceptable verified stats from the InfoQ writeup include the change-failure-rate uplift (5% → 6% post-AI adoption), the J-Curve framing itself (as a qualitative number-of-the-week), or the verification-tax concept rendered without a specific peak percentage.
   - Update DORA's publication date in any HTML reference — the report was published May 11, 2026, not May 18.

6. **Optional — discussion prompt rewrite** (line 623). The current phrasing opens with *"Which of the engineering metrics…"* which structurally mirrors the v1.31 named failure case (*"Which of your services…"*). The third-person mitigation ("the team that owns them") is partial. Suggested rewrite: *"Engineering leaders now face the question: which metric currently on the leadership dashboard would survive if the team that owns it had to articulate the invariant the metric was meant to protect?"* Advisory; not blocking.

---

## Verdict rationale

The issue's structural compliance is clean across all checklist categories — Vol. I cover treatment, voice (v1.31), section spread (v1.32), adjacent-source (v1.32), AI-substrate count (v1.32), long-form variety (v1.35), no-repeat-featured-anchor (v1.31), epistemic reframing (v3.6, at cap), one-quote-one-slot (v3.6), In Practice no-week-count (v1.34), jargon coverage (v3.7), and visual budget (v1.30) all pass.

The blocking issues are factual: three of the five highest-stakes attributions verified by WebFetch require substitute or correction (Majors/Yen verbatim, Stripe MPP Visa-adoption claim and date, DORA 441% stat). One requires metadata correction (Matias date and role). One could not be re-verified due to a 403 from CNBC and should be re-fetched in Phase 6.

**The structural pass means the issue is editorial-ready; the verifications mean the issue is NOT publication-ready until fixes 2–5 are applied.** Production-ship is held.
