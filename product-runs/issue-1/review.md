# Phase 5 Review — Product Edition Issue 1 (June 2026)

Mode: **full** (first run under the spec). Verdict: **PASS** after two in-review fixes (Chase criteria precision; Mastercard corroborating link). Detail below.

## Workflow pipeline — PASS
- `product-runs/issue-1/` exists; `candidates.json` parses (23 candidates, 50 recorded queries incl. named non-AI queries per lens); `run-plan.md` (4 trends, order, 2 roadmap threads, 8 documented rejections + Phase 4 addendum); `section-briefs.md` present; this `review.md` is the Phase 5 artefact.
- Phase 4 cross-check: HTML trends match run-plan titles/order/count (01 agentic trust layer · 02 Pay by Bank · 03 OS wallet · 04 rewards re-gated). One planned-and-documented change: Tesco demoted from Trend 04 to Also moving (date unverifiable) — recorded in the run-plan addendum before writing, not a silent substitution.
- State read at start (`last_issue_number: 0`, empty histories); written on publish only.

## Audience & gate — PASS
- Double-reject: Cardlytics split and Klarna Q1 rejected up to one-liners; no engineering-implementation items ran. Every section ties to a product decision (where offers surface / what they can measure / what they're benchmarked against).
- UK-first: UKPI/FSM Bill framing is UK-native; Cardlytics flagged *US*; commerce-media-passes-TV and PayPal Curated Ads (US, pre-window) cut entirely. **Interchange trap scanned**: Trend 02's closer explicitly states UK interchange is capped and offers are merchant-funded — "a visibility story, not a US-style funding story".
- No corporate language (grep: 0). No instruction (grep for "you should / your team / worth scoping / should build": 0). No second person (grep -w you/your: 0). No rhetorical questions ("?" appears only in URLs).
- Epistemic-reframing count: 2 (foreword; Trend 02 closer) — at the ≤2 cap, not over.

## Structure — PASS
- 4 trend sections, ordered by significance; no engineering-edition departments. Foreword: one paragraph, ~75 words, UK-framed thread, not a contents list. Cover: left-aligned, dek = through-thread (not a list), one lead stat (2008), numbered rail matches the 4 sections + "+" line.
- Substance floor: every trend has ≥2 sourced in-window pieces (Trend 03's second piece is 12 May, one day pre-window, with the original date stated in the section body — the disclosure the spec requires). Thin/undatable items (Tesco) sit in Also moving.
- Breadth: AI/agentic bounded to Trend 01 only; 02 is payments-scheme, 03 is platform/wallet, 04 is rewards mechanics. Monetisation produced no trend this month — Also moving carries Co-op DOOH honestly instead of an inflated section.

## Recurrence & evolution — PASS (vacuous)
- First issue; `trend_history` empty. All feeding pieces dated in-window except the two disclosed cases (VFC 12 May, stated; Tesco demoted out of trends).

## Roadmap mechanism — PASS
- Exactly 2 closers, both **evidenced gaps**: (1) A2A coverage — card-linked offers read card transactions, UKPI recurring payments produce none (FCA + IT Brief UK); (2) loyalty absent from agent rails — three 10 June releases specify credentials/directories/scores with zero mentions of offers/rewards (the releases themselves; AP4M corroborated by The Paypers). No invention: no closer describes an unattested product. No instruction: closers state facts and stop; the strip mirrors them.

## What's next — PASS
- 5 items: 3 product/competitive (UKPI Wave 2, iOS 27 ship, Agentic Directory rollout) + 2 regulatory (FCA AI Input Zone, open-finance sprint). Variety rule satisfied; all sourced and forward-looking.

## Sourcing & links — PASS
- 22 content links checked: 17 return 200 via curl; 5 are bot-blocked with verified-real content — Mastercard newsroom (403; corroborated by The Paypers link added in-review and same-day coverage), MoneySavingExpert ×3 (403 to curl; fetched successfully via WebFetch — Chase article confirmed 1 June 2026, facts refined in-review), TipRanks (403; reverse split corroborated in research), Klarna IR (429 rate-limit), Business Wire (503 bot-wall; Visa Forum announcement corroborated in research).
- Web searched this issue (50 queries in Phase 1 + 2 verification searches in Phase 4/5); foreword and trend framing are the only original writing; the one near-quote ("financed, optimised and rewarded in real time") is short and attributed to Visa.
- Facts verified beyond research: TrueLayer date (3 June) + first-live-payments claim; Nationwide £100/£440m/4.4m (newsroom + MSE); Chase criteria (15 transactions **or Direct Debits**, £1,000 held continuously — corrected in-review).

## Visual identity — PASS
- Template CSS verbatim from `product-template.html` (gold/cream, Playfair + Source Sans 3, left-aligned cover). Two statlines (Trends 01, 02) — real sourced figures, no AI imagery. HTML tag-balance validated.

## Format honesty — PASS
- A 4-trend issue from a busy month; the absent monetisation trend was dropped, not padded.

## Residual caveats (accepted)
- Trend 03 runs on two pieces, one near-window (disclosed). Acceptable under the substance floor; flagged for the next curator.
- Mastercard newsroom and Business Wire cannot be machine-fetched; both verified through secondary coverage.

## Amendment review (12 Jun)

Trend 04 amended post-publish to add Lloyds Rewards (operator-flagged Phase 1 miss; see run-plan addendum). Checks re-run on the amended section: dates in-window (first draw 1 June; coverage 9 June); two sources (Lloyds Banking Group newsroom — bot-blocked to automated clients like other bank newsrooms, corroborated by Brit Brief, fetched and confirmed 9 June); no instruction language; closer remains a third-person "Why it matters" (Trend 04 carries no roadmap closer — roadmap count stays 2); standfirst still leads with the month's movement; HTML re-validated; PDF regenerated. PASS.
