# Pre-Publish Compliance Checklist — Product Edition

Run through every item before delivering an issue. If any item fails, fix it before sharing. This is the Phase 5 gate for the Product Edition; it mirrors the Engineering Edition's checklist in form but enforces the Product Edition's rules.

## Workflow Pipeline

Structural checks first — if any fail, the issue is invalid; don't proceed to content checks.

- [ ] **Run directory exists** at `product-runs/issue-N/` for this issue number
- [ ] **Phase 1 artefact present**: `candidates.json` exists and parses; research ran explicit per-concern queries (category & competition, monetisation & models, experience & surface, product craft) **and named non-AI queries**, so the candidate pool isn't whatever was loudest
- [ ] **Named sweeps ran (v1.1)**: `queries_run` shows the competitor set queried by name (Cardlytics, Reward, Fidel, Triple, Snoop, Bink, the networks' offers stacks, Amex Offers), the **UK bank set queried by name** (v1.3: Lloyds Banking Group, NatWest Group, Barclays, HSBC/First Direct, Santander UK, Nationwide/Virgin Money, TSB, Monzo, Starling, Revolut, Chase UK — against rewards/loyalty/offers terms, incl. the groups' newsroom pages), the trade-press outlets swept (incl. the funder-side outlets for the monetisation lens), and a region sweep (ME/GCC, Europe, Asia). A named competitor or region with no findings is recorded as quiet, not skipped. If monetisation was thin last issue too, the escalation re-sweep is evidenced before the lens is called quiet
- [ ] **Phase 2 artefact present**: `run-plan.md` names the chosen trends (3–5), their ordering, and the 0–2 roadmap threads, and lists candidates considered and rejected with reasons, plus a **Source-map notes** block (v1.2: unlisted entrants seen this issue; promotions due on publish; six-issue review findings when `last_issue_number + 1 − source_map.last_reviewed_issue ≥ 6` — zero-finding names flagged for keep/cull, never auto-removed)
- [ ] **Phase 3 artefact present**: `section-briefs.md` with per-trend briefs (standfirst angle, feeding pieces, closer type) and the roadmap-strip plan
- [ ] **Phase 4 cross-check**: trends in the published HTML match `run-plan.md` (titles, order, count). No silent substitution
- [ ] **Phase 5 artefact**: `review.md` exists with pass/fail summary
- [ ] **State read & ready to write**: `product-digest-state.json` was read at start; `trend_history`, `roadmap_threads_history` and `source_map` (entrant watchlist, promotions, review marker) will be updated on publish only

## Audience & Gate

- [ ] **Double-reject gate**: every featured item changes a product decision (build / prioritise / position / price / partner / kill). Nothing whose only takeaway is a funding round, valuation, or M&A number (reject **up**); nothing whose only takeaway is engineering implementation (reject **down**)
- [ ] **UK-first lens**: every dynamic is UK-accurate, or any US-specific dynamic is explicitly flagged as US / recontextualised. **Specifically scan for the interchange trap** — do not imply a US-style "reward funding squeeze" applies to the UK (UK consumer interchange is capped; merchant-funded is already the norm; the live UK thread is the PSR cross-border cap)
- [ ] **No corporate language** ("leverage", "synergy", "best-in-class")
- [ ] **Inform, don't instruct**: no sentence tells the reader what to build. No "you should build X", no "worth scoping X" as a directive. (The roadmap bridge is sourced evidence, not a suggestion — see Roadmap mechanism.)
- [ ] **Epistemic-reframing cap**: ≤2 "the question isn't X, it's Y" constructions across the issue
- [ ] **Third-person**: no rhetorical questions posed to the reader, no "your team / your firm" framing outside the roadmap-prompt evidence

## Structure — dynamic topic-section model

- [ ] **Sections are trends**, not fixed departments or borrowed engineering slots. 3–5 trend sections, ordered by significance
- [ ] **No In Practice / Outside In / Leadership Read / Concept of the Week** — those engineering job-driven sections do not appear in the Product Edition
- [ ] **Substance floor**: every trend section has genuine in-window feeding material. A lone weak piece is in *Also moving*, not inflated into a trend
- [ ] **Breadth**: the issue is built from several distinct trends; no single cycle (including AI / agentic) occupies more than one trend section. If AI is genuinely the biggest mover it can be Trend 01 — but it is bounded to its own section, not threaded through the whole issue
- [ ] **Foreword**: one paragraph, 50–80 words, single UK-framed thread, not a contents list
- [ ] **Cover**: left-aligned magazine cover; dek captures the through-thread; one lead stat; numbered contents rail matches the trend sections

## Recurrence & Evolution

- [ ] **Recurrence allowed but earned**: any recurring trend (checked against `trend_history`) carries a **new-in-window development** this month. Recurring is fine; restating is not
- [ ] **Evolution-first**: a recurring trend's standfirst leads with *what changed this month*, not that the trend exists
- [ ] **Staleness drop**: any trend with no genuine new development in the window does NOT get a section — it's in *Also moving* ("still developing, nothing new this month") or omitted, regardless of abstract importance
- [ ] **No recycling**: every feeding piece is from this month's window (or meets the new-traction exception with the original date stated). No resurfaced months-old articles to keep a trend alive. **Six-months-of-the-same check**: if a long-running trend's material is a re-run of a prior month's framing, it failed — drop it

## Roadmap mechanism — sourced evidence, never invention, never instruction

- [ ] **0–2 roadmap closers per issue**, earned. Most trends are context ("Why it matters"), not roadmap prompts
- [ ] **Every "What it looks like in product →" closer is one of**: (a) a **real instantiation** someone has shipped or specced, sourced; or (b) an **evidenced gap** stated from sourced facts. Nothing invented
- [ ] **No invention scan**: no closer describes a product/feature that no source attests to. If there's no sourced instantiation and no factual gap, the trend has no roadmap closer — it stays "Why it matters"
- [ ] **No instruction scan**: no closer tells the reader to build, scope, or ship anything. It shows what exists (or pointedly doesn't); the reader infers
- [ ] **For the roadmap strip**: pulls the issue's roadmap closers into one place up front. If the issue has zero earned threads, the strip says so honestly rather than manufacturing one

## What's next (forward radar)

- [ ] **Variety rule**: the forward radar is NOT all regulatory/legislative items. At most one or two regulatory items; the rest are forward product / competitive / emerging-pattern signals
- [ ] Each radar item is sourced and genuinely forward-looking (forming, not already covered above)

## Sourcing & Links

- [ ] **Every link is real and resolves**. No fabricated URLs, no invented attributions
- [ ] **Curate, don't create**: the only original writing is the foreword and the trend framing
- [ ] **Searched the web this issue**: not generated from training data
- [ ] **Quotes**: any quote is short and accurately attributed; paraphrase by default

## Visual Identity (sub-brand)

- [ ] **Uses `product-template.html`** — gold/cream sub-brand, left-aligned magazine cover, numbered trend sections. NOT the engineering weekly template
- [ ] Type house is Playfair Display + Source Sans 3 (family consistency); accent is gold, ground is cream — not engineering's teal/grey
- [ ] At least one real visual element (stat line / comparison) where a trend's material earns it; no AI-generated images

## Format Honesty

- [ ] **When a month is quiet, the issue is shorter — not padded.** Fewer genuine trends is an honest issue; inventing or inflating trends to fill the structure is a fail
