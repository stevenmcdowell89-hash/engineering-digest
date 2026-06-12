---
name: product-digest
description: >
  Generate issues of the Product Edition of The Digest, a monthly magazine-style
  briefing for product managers and product leaders at a UK-based loyalty /
  commerce-media fintech selling card-linked-offer, cashback and rewards products
  to banks. Covers the month's movement in the category and adjacent tech — what
  changes a product decision — and seeds a couple of grounded, sourced roadmap
  threads per issue. Use when asked to run, generate, create, or schedule the
  Product Edition / product digest. Single format: a dynamic trend magazine
  (no weekly / deep-dive / light variants). Includes a sub-brand HTML template,
  editorial spec, and a compliance checklist.
metadata:
  author: steven-mcdowell
  version: '1.1'
---

# The Digest — Product Edition

Generate monthly magazine-style issues for product managers and product leaders at a UK-based fintech that sells card-linked offers, cashback, personalised rewards and engagement to banks. The reader decides what to build, prioritise, position, price, partner on, or kill. The edition keeps them current on the month's movement and seeds a couple of grounded roadmap threads — never an executive/investor read (rejects up into funding/valuation noise), never an engineering read (rejects down into implementation).

## Changelog

- **v1.1 (June 2026)** — Research depth, from the Issue 1 retro. Issue 1 nailed the rails/surfaces story but left the reader's direct competitive set nearly invisible (Cardlytics surfaced only as a stock-split one-liner; Reward, Fidel, the networks' own offers stacks not at all), produced no funder-side (merchant/advertiser) coverage, and gave the ME/Europe/Asia footprint one query. Root cause was sourcing, not curation: this category's news lives in trade press, not general web search. v1.1 adds **named sweeps** to Phase 1 (competitor set by name, trade-press outlets by name, region sweep), a **two-thin-months escalation** rule for the monetisation lens, a matching compliance-checklist item, and a rails-vs-craft **calibration note** (not a rule) in the editorial spec.

This is a **sibling edition** to the Engineering Edition, sharing the five-phase pipeline and sourcing discipline but with its own audience, structure, voice rules, and visual identity. The Engineering Edition is untouched.

## Single Format

Unlike the Engineering Edition (weekly / deep dive / light), the Product Edition has **one format**: a dynamic trend magazine. Sections are the month's trends (3–5), not fixed departments. There are no variants to select. When a month is quiet, the issue is shorter — fewer trends — not padded.

## Files

| Purpose | Path |
|---|---|
| Editorial spec (the taste bible) | `references/editorial-spec.md` |
| Pre-publish gate (Phase 5) | `references/compliance-checklist.md` |
| Sub-brand template (Phase 4) | `assets/product-template.html` |
| State (read at start, write on publish only) | `product-digest-state.json` |
| Run artefacts | `product-runs/issue-N/` |

## When to Use This Skill

Use when the user asks to:

- Run, generate, or create a Product Edition / product digest issue
- Schedule the product digest to run monthly
- Regenerate or update an existing product issue

## Workflow — five phases

Same pipeline as the Engineering Edition (research → curate → plan → write → review), one reviewable artefact per handoff, adapted for trends. Read `references/editorial-spec.md` in full before Phase 2. **State is read at the start and written only on publish** — test runs never pollute `trend_history`.

### Phase 1 — Research (the month sweep)
Sweep ~30 days, not a week. Run explicit queries across **four concern lenses**, and **named non-AI queries within each** so the candidate pool isn't whatever was loudest:
- **Category & competition** — what competitors, networks (Visa/Mastercard/Amex), and adjacent players shipped or announced.
- **Monetisation & models** — commerce/retail media, merchant-funded, CLO, funding models. *(UK-first: UK interchange is capped; do not import US "reward funding squeeze" framing.)*
- **Experience & surface** — where offers live: app, agent, A2A/Pay-by-Bank, in-store media, wallet.
- **Product craft & signals** — emerging patterns, standards, protocols, forward signals.

**Named sweeps (v1.1 — run every issue, in addition to the lens queries):**
- **Competitor set, by name.** The reader's direct competitive set rarely surfaces in general search — query each by name: Cardlytics, Reward (rewardinsight), Fidel API, Triple, Snoop, Bink; the networks' own offers/personalisation stacks (Mastercard personalised offers / Dynamic Yield, Visa offers products, Amex Offers); and bank in-house rewards builds. A quiet month for a named competitor is a valid finding to record; not querying them is not.
- **Trade press, by outlet.** Category news lives in trade press more than general search. Category/bank side: Finextra, FinTech Futures, Open Banking Expo, The Wise Marketer. Funder/advertiser side (feeds the monetisation lens): Marketing Week, Campaign, The Grocer, Retail Week.
- **Region sweep.** One named query set per region of the sales footprint — Middle East/GCC, Europe, Asia: bank loyalty launches, regional CLO/rewards moves, super-app loyalty. Most months this feeds *Also moving*; it still runs every issue.
- **Two-thin-months escalation.** If the monetisation & models lens yields no in-window UK material two issues running (check the previous issue's run-plan notes), treat it as a research failure before a market finding: re-sweep via the funder-side trade outlets above, then conclude.

Output candidates with date, source URL, concern lens, and a one-line "why it changes a product decision". Flag US-specific items as US. Write them to `product-runs/issue-N/candidates.json` — the Phase 5 checklist gates on this file existing and parsing, and on the named sweeps having run.

### Phase 2 — Curate (the load-bearing phase)
Cluster candidates into **3–5 trends**, ordered by significance. Apply, in order:
1. **Double-reject gate** — drop anything whose only takeaway is a funding number (up) or an implementation detail (down).
2. **UK-first lens** — recontextualise or flag every US-specific dynamic; cut trends whose premise only holds in the US.
3. **Recurrence & staleness** — check `trend_history`. A recurring trend is allowed **only if it has new-in-window movement**, and its angle must be *this month's evolution*. A trend with no new development drops to *Also moving* or is omitted. No resurfaced old articles.
4. **Substance floor** — a topic earns a section only with genuine in-window material; thin items go to *Also moving*.
5. **Roadmap-evidence test** — identify **0–2** trends that carry a **sourced** product instantiation OR an **evidenced** gap. Those get a "What it looks like in product →" closer and a line in the roadmap strip. Everything else is context ("Why it matters"). **Never invent; never instruct.**

Output `run-plan.md`: chosen trends + order, the 0–2 roadmap threads with their sources, and candidates rejected with reasons.

### Phase 3 — Plan
Per-trend brief: standfirst angle (leading with the month's movement), feeding pieces, closer type (`investigate` vs `why`), any inline visual. Plan the cover dek, lead stat, contents rail, roadmap strip, *Also moving*, and a **varied** *What's next* (not all regulatory). Output `section-briefs.md`.

### Phase 4 — Write
Write against `assets/product-template.html` — do not restyle the sub-brand. Rules:
- Each trend standfirst states **how the trend moved this month**; recurring trends lead with the delta.
- Roadmap closers show **sourced** evidence (instantiation or gap) — third-person, no "you should build / scope X".
- Every link real and resolving; curate, don't create; UK-accurate throughout.
Output `issue-N.html`.

### Phase 5 — Review
Run `references/compliance-checklist.md` end to end. Pay special attention to: the no-invention and no-instruction scans, the UK interchange trap, the recurrence/staleness checks, and the forward-radar variety rule. Output `review.md` with a pass/fail summary. Fix fails before delivering.

## On Publish
Only after the issue is approved: update `product-digest-state.json` — increment `last_issue_number`, set `last_issue_month`, append this issue's trends (with their this-month development) to `trend_history`, and append the roadmap threads to `roadmap_threads_history`.

**Where published issues live (repo conventions):**
- Published HTML/PDF goes to `product-issues/issue-N.html` and `product-issues/issue-N.pdf`. **Never `issues/`** — that directory belongs to the Engineering Edition, and pushes adding `issues/issue-*.html` trigger its subscriber-notification workflow.
- Run artefacts in `product-runs/issue-N/` are gitignored by default (test runs leave no footprint); when shipping a real issue, force-add the audit trail: `git add -f product-runs/issue-N/`.
- Add a row for the new issue to the archive on **`product.html`** (the Product Edition's own page, reached via the edition tabs; row template is in a comment there — note rows carry no `data-issue-id`). On the first publish, remove the `.pe-coming` placeholder. Do not touch `index.html` beyond the shared edition-tabs chrome, and never alter the Engineering Edition markup, styles, or scripts.

## Cadence
Monthly. Trend-led, look-back synthesis. Consider biweekly only if the trend pool consistently overflows; run a shorter issue honestly when the month is quiet.
