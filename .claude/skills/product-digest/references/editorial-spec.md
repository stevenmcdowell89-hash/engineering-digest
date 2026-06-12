# Product Edition — Editorial Specification (v2)

**Where this lives (as deployed).** A **standalone sibling skill** at `.claude/skills/product-digest/` — SKILL.md, this spec and the compliance checklist under `references/`, the sub-brand template under `assets/`, state at the repo root (`product-digest-state.json`), run artefacts in `product-runs/issue-N/`, published issues in `product-issues/`. The Engineering Edition's skill, files, and state are entirely untouched and stay where they are. **Do not restructure either skill to match any other layout** — an earlier draft of this spec sketched a shared `digest` skill with per-edition reference folders; that layout was deliberately not adopted, because it would have meant relocating the Engineering Edition's files.

---

## Inherited unchanged from the Engineering Edition

Audience-agnostic; reused as-is:

- **The five-phase pipeline** — research → curate → plan → write → review, one reviewable artefact per handoff.
- **Sourcing discipline** — curate don't create; real working links only; **never fabricate**; search the web every issue; strict date filtering (see Recency, below).
- **Format honesty** — when in doubt, go short. An honest light issue beats a padded one.
- **Voice basics** — third-person editorial, not press-release, not corporate; banned corporate language (leverage, synergy, best-in-class); epistemic-reframing cap of 2; the readability nudge (clean declarative sentences).

**Deliberately NOT inherited:** the visual design system (the Product Edition is a sub-brand with its own template — see Visual Identity), and the engineering edition's job-driven section types (In Practice, Outside In, Leadership Read, Concept of the Week — all dropped; see Purpose).

---

## Purpose

The Engineering Edition has three jobs (keep current · perspectives on running teams · help newer managers), which is why it has varied *section types*. **The Product Edition has effectively one and a half jobs:**

1. **Keep current** — a UK product team's one reliable monthly read on what's moving in the category and adjacent tech.
2. **Seed roadmap investigation** — a reader should finish an issue holding a *couple* of grounded "I should look into this for our roadmap/backlog" threads. **Not everything earns this** — most of an issue is awareness. The roadmap prompts are occasional and earned, never manufactured.

Because the job is (mostly) singular, the **structure is topic-driven, not section-type-driven**: sections are the month's trends, not fixed departments or borrowed engineering slots.

---

## Audience & Tone

**Reader:** Product managers and product leaders at a UK-based loyalty / commerce-media fintech that sells to banks (UK, plus ME / Europe / Asia) as customers. They own the product banks use to deliver card-linked offers, cashback, personalised rewards and engagement. They decide what to build, prioritise, position, price, partner on, or kill.

**Not** engineers (don't care about the stack) and **not** executives/investors (don't care about cap tables). The product reader sits in the middle layer — product surface and user/merchant/bank value.

**The double-reject gate (the primary curation test):** *Does this change a product decision the reader might make?* Reject in **both** directions — **up** into funding-round / valuation / M&A noise, and **down** into engineering implementation. If the only takeaway is a funding number or an architecture, it's reference-only or omitted.

**UK-first lens (v2 — standing rule).** The reader is UK-based. Many payments/loyalty dynamics are region-specific and the loudest source coverage is often US. **Any US-specific dynamic must be flagged as US, or recontextualised for the UK — never presented as if it applies here.** Worked example (the v1 error): "interchange-funded rewards are under pressure" is a US story. UK consumer interchange has been capped under the IFR for years, so UK rewards already lean on merchant funding — there is no equivalent domestic "squeeze." The live UK thread is the PSR cross-border interchange cap. If a trend's premise only holds in the US, it does not run as a UK trend; demote to a US-flagged line in *Also moving* or cut it.

**Tone:** confident editorial, third person. **Inform, don't instruct — retained.** The edition never tells the reader what to build. The bridge from awareness to buildable is made by *showing sourced market evidence* (see Roadmap mechanism), not by Claude proposing a roadmap.

---

## Research Depth (v1.1 — named sweeps and the source map)

Lesson from Issue 1: general web search surfaces the loud stories (networks, Apple, regulators) and misses the reader's own category. The direct competitive set, the funder side, and the regional footprint each need **named** queries every issue — their absence from the candidate pool must mean they were quiet, never that they weren't asked about.

- **Competitor set (query each by name, every issue):** Cardlytics · Reward (rewardinsight) · Fidel API · Triple · Snoop · Bink · Mastercard personalised offers / Dynamic Yield · Visa offers products · Amex Offers · bank in-house rewards builds. These are who the reader is displaced by or compared against in an RFP; a Cardlytics platform move matters more to this reader than most network announcements.
- **Source map (trade press, by outlet):** category/bank side — Finextra, FinTech Futures, Open Banking Expo, The Wise Marketer; funder/advertiser side — Marketing Week, Campaign, The Grocer, Retail Week. The monetisation & models lens in particular lives in marketing trade press, not general news.
- **Region sweep (every issue):** the reader sells into the UK plus ME/Europe/Asia. One named query set per region — bank loyalty programme launches, regional CLO/rewards moves, super-app loyalty (GCC banks of the Emirates NBD tier, European bank rewards, Asian super-apps). Output usually feeds *Also moving*; the sweep still runs.
- **Two-thin-months escalation:** a lens (especially monetisation) producing nothing in-window two issues running is treated first as a research failure — re-sweep through the named outlets — and only then as a quiet market.

**Calibration note — rails vs craft (not a rule, not a checklist item).** Issue 1 ran three of four trends on *where offers live* (agent rails, A2A, wallet). That was honestly the month's movement. But a steady diet of rails coverage underserves the other half of the reader's job — what the offer product itself should do: personalisation, redemption UX, engagement mechanics, measurement craft. When craft material exists it competes for sections on equal terms; if several consecutive issues are all surfaces and rails, that is calibration drift worth catching, not a market fact.

---

## The Monthly Look-Back Principle

This is a monthly that **reviews the month**, not a weekly that reports the week. Each issue synthesises ~30 days of developments into trends. The unit of relevance is **the month's movement** — how things shifted — not point-in-time news. A trend section is an argument about how something moved this month, supported by the month's pieces.

---

## Recurrence & Evolution (v2 — the inverse of the Engineering Edition's repeat rules)

The Engineering Edition **blocks** repeat topics (no-repeat-lead, no-repeat-anchor) to force variety week to week. The Product Edition does the **opposite — with a condition:**

- **Recurring trends are allowed.** If agentic commerce is genuinely the biggest thing moving for three months running, it can lead for three months. Forcing a fresh topic when the real story hasn't changed would be dishonest.
- **But recurrence must be earned by new-in-window movement, and the section must lead with the evolution — what changed this month — not restate that the trend exists.** A recurring trend's standfirst and pieces are about the delta: the new development, the shift, the thing that moved since last issue. "Agentic commerce is big" is not a section; "this month agentic commerce moved from X to Y" is.
- **Stale trends drop.** If a trend had no genuine new development in the window, it does **not** get a section this month — regardless of how important it is in the abstract. It falls to *Also moving* ("still developing, nothing new this month") or is omitted. **Resurfacing old articles to keep a trend alive is banned** (strict date filtering applies — every feeding piece must be from the window or meet the new-traction exception).
- **Six-months-of-the-same failure mode (the named risk):** a trend running many months in a row must show a *visibly different* development each time. If the curator finds themselves reaching for a months-old article to fill a recurring trend, that's the signal the trend has gone stale this month — drop it to *Also moving* rather than recycle.

**State tracking.** A `trend_history` records which trends ran in recent issues and the specific development each carried, so the curator can (a) allow recurrence, (b) require this month's delta, and (c) detect staleness. See State Model.

---

## Structure (dynamic topic-section model)

Sections are the month's trends, chosen by the curation phase — typically **3–5**, ordered by significance.

1. **Cover** — left-aligned magazine cover (see Visual Identity). Eyebrow, masthead, issue line, a one-line dek capturing the month's through-thread, one lead stat, and a numbered "This month" contents rail listing the trends.
2. **Foreword** — one paragraph (50–80 words). The thread connecting the month's trends. UK-framed. Never a contents list.
3. **For the roadmap** — consolidated strip, surfaced up front. The issue's 0–2 earned, sourced roadmap threads in one place, so a skim-reader leaves with them. If a month has none, the strip says so honestly ("mostly context this month") rather than manufacturing one.
4. **Trend sections (3–5)** — each is a numbered feature:
   - **Standfirst** — what the trend is and, crucially, **how it moved this month** (the evolution, per the recurrence rule).
   - **Feeding pieces** — the month's developments that make up the trend, each sourced. Internal visuals (stat line, comparison) where the material earns them.
   - **Closer** — one of:
     - **"What it looks like in product →"** — only where there's sourced market evidence: a real instantiation someone has shipped/specced, *or* an evidenced gap. (See Roadmap mechanism.)
     - **"Why it matters"** — the third-person implication, for context-only trends with no buildable evidence.
5. **Also moving** — short catch-all for real stories that didn't form a trend, and for trends that are still developing but had no new movement this month (the staleness pressure valve). Keeps trend sections substantive.
6. **What's next** — short forward radar. **Variety rule (v2):** must not default to regulatory/legislative items because they're easiest to find. Mix forward signals — forming product/competitive moves, emerging patterns, expected launches — with at most one or two regulatory items. Legislative-only radar reads dry; that's a fail.

**Substance floor:** a topic earns a trend section only with genuine in-window material. A lone weak piece goes to *Also moving*, not inflated into a section.

---

## The Roadmap Mechanism (v2 — sourced evidence, never invention, never instruction)

This is the device that moves a trend from "good to know" to "a PM could look at building from this" **without telling them what to build.**

- The bridge is **sourced market evidence of the productisation**, shown in a **"What it looks like in product →"** closer. Two valid forms:
  1. **A real instantiation** — someone has shipped or specced it. *Example (this month):* the networks' own agent frameworks already describe surfacing rewards and discounts to the agent (Mastercard's words). The reader sees the rails exist and the loyalty layer doesn't, and draws their own conclusion.
  2. **An evidenced gap** — stated from sourced facts, where no instantiation exists. *Example (this month):* a card-linked offer needs a card transaction to read; a Pay-by-Bank payment bypasses the card — both sourced — so A2A spend sits outside the card-linked model. The gap is the signal; it is stated as fact, not as a feature to build.
- **Hard rules:**
  - **Never invent the productisation.** No imagined feature, no "you could build X." If there's no sourced instantiation and no factual gap, the trend stays awareness ("Why it matters") — no roadmap closer.
  - **Never instruct.** The closer shows what exists (or pointedly doesn't); the reader makes the roadmap inference. "Worth scoping X" / "you should build X" is out of bounds — that's the line the v1 draft crossed and v2 pulls back.
  - **Earned and occasional** — target **0–2 per issue**, not one per trend. Most trends are context.
- The consolidated **For the roadmap** strip pulls the issue's roadmap closers into one place up front.

---

## Visual Identity (sub-brand — own template)

The Product Edition is a sibling sub-brand, not the Engineering Edition reskinned. Same **type house** (Playfair Display + Source Sans 3) so it reads as the same publishing family; everything else diverges:

- **Signature accent:** warm **gold** (`#BE8A28` / bright `#E0A93E`) replacing engineering's teal — reads as value/rewards/commerce.
- **Ground:** warm **cream** (`#FBF7EF`) rather than the cool engineering grey; warm **ink** body text.
- **Cover:** **left-aligned magazine cover** with a cover dek and a numbered contents rail — distinct at a glance from the engineering edition's centred briefing masthead. Signals "monthly trends magazine," not "weekly briefing."
- **Trend sections:** large gold numerals, a serif italic standfirst, feeding pieces, a flagged closer.
- **Secondary accent:** clay (`#B5532E`) for kickers and links.

CSS lives in `assets/product-template.html`. The design-system palette and the cover architecture are the sub-brand's load-bearing visual signals — keep them distinct from engineering.

---

## State Model

`product-digest-state.json`, read at the start of every run, written only on publish:

```json
{
  "last_issue_number": 1,
  "last_issue_month": "2026-06",
  "trend_history": [
    { "issue": 1, "trend": "Agentic commerce", "this_month_development": "Visa–OpenAI (10 Jun); Mastercard Agent Suite (26 May); Agent Pay for Machines" },
    { "issue": 1, "trend": "Commerce media passes TV", "this_month_development": "commerce media 15.6% of ad spend > TV; Cardlytics widens publishers" },
    { "issue": 1, "trend": "Pay by Bank mainstream", "this_month_development": "Amazon UK Pay by Bank via TrueLayer" }
  ],
  "roadmap_threads_history": [
    { "issue": 1, "thread": "Agent-readable offers" },
    { "issue": 1, "thread": "A2A coverage gap" }
  ]
}
```

`trend_history` drives the recurrence rule: recurrence allowed, this-month delta required, staleness detected.

---

## Failure-Mode Defences (seed the compliance checklist)

Five inherited (audience-agnostic) plus two new:

1. **Audience drift** → the double-reject gate + worked rejections.
2. **Substrate / single-cycle domination** → the dynamic topic-section structure bounds any one cycle (incl. AI) to its own section; breadth comes from the issue being built of several distinct trends.
3. **Reference vs article** → substance floor routes thin material to *Also moving*.
4. **Clustering / monotony** → several distinct trends required; no single trend dominates the issue.
5. **Mechanical-rule brittleness** → judgement tests over counting caps.
6. **(v2) Staleness / recycling** → recurring trends require this-month movement; stale trends drop; old-article resurfacing banned. The "six months of the same trend" risk.
7. **(v2) US-as-default** → the UK-first lens; US-specific dynamics flagged or recontextualised, never presented as local.

---

## Worked Rejection Examples (extend as real issues surface edge cases)

1. **Funding round** — *"[loyalty startup] raises $40m."* → Rejects up. Doesn't change a product decision this month. *Also moving* one-liner only if it signals a competitor scaling directly into the category.
2. **Engineering implementation** — *"how [neobank] rebuilt its rewards ledger."* → Rejects down (that's the weekly's lens). Take only the product consequence, if any.
3. **US-specific without UK flag** — *"interchange-funded rewards under pressure."* → Rejects for a UK reader unless flagged as US. UK interchange is capped; merchant-funded is already the norm. (The v1 error.)
4. **Stale recurring trend** — agentic commerce led last month and the only material this month is a re-run of last month's framing with an older article. → Does **not** get a section; drop to *Also moving* until there's new movement.
5. **Invented productisation** — closing a trend with "you could build an agent-readable offer feed" when no one has shipped or specced one. → Rejected. Either show a sourced instantiation / evidenced gap, or keep it as awareness.
6. **Legislative-only radar** — a *What's next* section that's three regulatory items. → Fails the variety rule; replace at least one with a product/competitive forward signal.

---

## Cadence

Monthly. Trend-led, look-back synthesis. Start monthly; only consider biweekly if the trend pool consistently overflows. When a month is genuinely quiet, run a shorter issue honestly rather than padding trends to fill the structure.
