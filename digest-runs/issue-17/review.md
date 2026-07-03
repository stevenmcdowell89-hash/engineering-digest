# Issue 17 — Phase 5 Review (FULL mode)

**Reviewer:** Phase 5 · **Date:** 2026-07-03 · **Format:** Standard Weekly
**Overall verdict: PASS-WITH-FIXES** (one hard compliance breach — epistemic-reframing cap — plus minor voice/figure fixes; curation, links, and v1.35 variety are sound)

---

## Run-specific scrutiny points

### 1. v1.35 long-form variety — **PASS**
Of the three long-form sections, **exactly one is AI-primary**:
- **In Practice (Atlassian / Prabhakar): AI-primary** — by design (operating-model change after AI adoption).
- **Outside In (Kent Beck, "Run Out to Meet It"): NON-AI as delivered.** The *source* is AI-triggered (Beck/Majors on AI resetting engineering careers), but the delivered section **never names AI once** — it abstracts the occasion to "a discontinuity… a platform shift, a market break, a reorganisation" and foregrounds a durable craft/mindset stance (relearning, "ignorance reset to 100," senior-as-beginner). Reads as durable craft with AI as backdrop. **Correct call.**
- **Leadership Read (Larson): NON-AI as delivered (borderline).** Larson's five rules are agent-flavoured (three of five mention agents), but the digest foregrounds decision quality and team durability — "The management craft underneath." Judged craft-primary with AI as backdrop. Defensible.

**Result: 1 of 3 AI-primary. PASS** — the make-or-break item clears.

### 2. Links — **PASS (no broken/fabricated links)**
Verified 11+ including all Lead/QT1/QT2/In Practice/Outside In/Leadership Read sources and the corrected Visa URLs:
- Visa **mynewsdesk 200 OK** + Worldline/ING **globenewswire** — the 403-replacement URLs were used correctly. **No Visa 403 survived.**
- Atlassian, Kent Beck, lethain, Fortune (OUSD), Challenger, Developers Digest (QT1): all resolve 200 and match claimed content.
- CoinDesk (QT2) and Chrome-V8 Hacker News resolve (WebFetch model flagged "future-dated" but returned real content).
- **businesschief (Oliver Wyman) and TechTimes (Cisco) returned WebFetch 403 — bot-protection, not dead.** Both confirmed live with exact-matching URLs and matching facts (17%→43%; 471 Bay Area cuts effective 13 Jul) via web search. Not broken.

### 3. Figure fidelity — **PASS**
- Dropped/unverifiable figures **absent everywhere**: no `87,714`, no `38,579`, no `$30–40/session`, no `$30`/`$40`. Confirmed via grep.
- Visuals rebuilt on Oliver Wyman **17%→43%** + PwC **+35% / −10%** (Lead SVG) and **Cursor $120** tier (QT1 compare-table) — as specified.
- Surviving Challenger prose figure ("AI cited in more than 100,000 US job-cut announcements… four consecutive months") is **verifiable** — source states 101,743, ~23% of cuts, AI-led for a fourth month. Not a dropped figure.
- **Circle −13% to $66** attributed to Fortune — confirmed verbatim in Fortune. PASS.
- *Minor:* Lead/cover says "firms actively cutting" entry-level roles; the Oliver Wyman source frames 17%→43% as **CEOs *planning* to reduce**. Mild overstatement — see Fix 3.

### 4. AI-substrate featured count — **PASS (3 of 6)**
Lead (AI wrapper/borderline) · QT1 (AI) · QT2 (no) · Editorial Moment (no — ME loyalty $3.4bn) · Outside In (no — craft) · In Practice (AI). = **3 of 6 ≤ 4** (2 of 6 if Lead read as labour-market). At least two non-AI featured slots. PASS.

### 5. Third-person voice (v1.31) — **PASS with minor fixes**
No "your team / your firm / the reader / you must / you should." Two residual second-person instances:
- Line 381: Concept-of-week label **"If you're new to this"** — direct address.
- Line 632: "the cost of *working* code depends on **your** development harness" — digest-voice paraphrase using second person.
- Line 637 pull-quote ("Your team and company…") is a **verbatim Larson quote**, attributed — acceptable.

### 6. Epistemic reframing cap (≤2) — **FAIL (hard)**
Structural recount finds **≥5** constructions that name what something is NOT to introduce what it IS:
1. L398 — "Entry-level work has **not vanished so much as hardened**" ("less a X than a Y").
2. L513 — "Atlassian **stopped counting** whether people had touched AI and **started counting** super users" (wrong-unit → right-unit).
3. L513 — "the **honest picture** of adoption that raw '99% have tried it' numbers **hide**".
4. L556 — "the defensive option **feels safer while quietly being the more dangerous one**".
5. L559 — "Deep expertise can become **an anchor as easily as an asset**".
6. L565 (OI takeaway) — "durable craft **is not the expertise a leader has accumulated but the willingness** to meet a reset head-on" (textbook "not X but Y").
Cap is ≤2. **Exceeds cap — must trim to ≤2 before publish.** See Fix 1.

**One-quote-one-slot & attribution fidelity — PASS.** No quote reused across slots. Beck's "ignorance reset to 100" and Prabhakar's "AI Working Agreements" wording match sources verbatim. *Verify:* Larson pull-quote (L637) adds "Your team and company…" prefix and ", and those decisions are good" suffix to rule 5 — confirm this is the article's verbatim expanded wording or mark as paraphrase (Fix 4).

### 7. WAG advisory recency (Oracle PeopleSoft + Chrome V8) — **ACCEPTABLE (minor)**
Both advisories are ~3 weeks pre-window (Help Net Security 11 Jun; Chrome ~9 Jun) but both are **on CISA KEV with ongoing exploitation**, so "still being exploited" is accurate and Action Required is justified. The Chrome present-tense "**ships** an emergency V8 fix" mildly overstates recency (fix is ~3 weeks old). Optional tightening — see Fix 5.

### 8. Structure — **PASS**
- **No two long-form adjacent:** Lead → QTs → **In Practice** → Other News → **Outside In** → On the Radar → **Leadership Read**. Each long-form separated by a news section. No `.oi-hero-band`. PASS.
- **Visuals:** real diagrams = Lead SVG chart, QT1 compare-table, In Practice process-flow (3 ≥ 1–2 floor). Per-section floor met. *Minor:* total distinct visuals (cover stat, EM tile, SVG, pq-bar, key-takeaway, compare-table, process-flow, LR pull-quote, OI callout) runs **above the 4–6 soft ceiling** (~7–9) — crowding, not a hard fail.
- **Palette:** WAG label teal (not red), Lead label orange (M&T), In Practice header teal, security badges red only on active threats. Guardrail respected.
- **Vol. II** pill on cover + footer; **Issue 17 / 3 July 2026** correct; anchor balance 3 news events; no-repeat anchor (Open USD ≠ Issue 15 Mastercard Agent Pay); adjacent-source rule holds; In Practice theme label carries **no week count**. PASS.

---

## Required fixes (for the main loop)
1. **(HARD) Reduce epistemic reframings to ≤2.** Convert at least three of the six above to direct declaratives. Priority targets — the two adjacent Outside In ones (L556 "feels safer while… more dangerous", L565 "is not the expertise… but the willingness") and one of L513's two. Suggested: rewrite L565 takeaway as a plain claim ("Durable craft is the willingness to meet a reset head-on and relearn without penalty."); rewrite L513 to "Atlassian measures 'super users'… — a truer adoption signal than a raw '99% have tried it' figure."
2. **(Voice) L381** — replace label "If you're new to this" with a neutral third-person label (e.g. "Concept of the week"). **L632** — "your development harness" → "the development harness."
3. **(Figure framing) Lead/cover** — align "firms actively cutting entry-level roles" with the source: "CEOs planning to reduce entry-level roles rose from 17% to 43%" (Oliver Wyman surveys CEO intent, not realised cuts).
4. **(Attribution) L637** — confirm the Larson pull-quote is verbatim from the article; if the prefix/suffix are editorial, render as paraphrase (drop quote marks) or trim to the verified span.
5. **(Optional) Chrome V8 WAG item** — soften present-tense "ships" to reflect the early-June patch date while keeping the ongoing-KEV Action Required framing.

*Nothing in the fix list requires re-curation. Publish after Fix 1 (mandatory) and Fixes 2–4 applied.*
