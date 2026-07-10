# Issue 18 — Section Briefs (Phase 3 planning contract)

**Format:** Deep Dive · **Window:** 2026-07-03 → 2026-07-10 · **Generated:** 2026-07-10 (Phase 3)
**Topic:** Agentic commerce + programmable money — the rails go live, the money gets rewritten.
**Template:** `assets/deepdive-template.html`. Phase 4 executes this brief + `run-plan.md`; no re-deciding lead/format/section order (locked in run-plan.md).

---

## 0. Cadence-gate check (state file, read 2026-07-10)

- `last_feature_date: null`, `last_stack_date: null`, `last_rabbit_hole_date: 2026-06-26`. **Moot** — Deep Dive uses none of the occasional Standard-Weekly sections (Feature, Stack, Rabbit Hole, In Practice, Outside In, Leadership Read). No rotation trackers apply.
- **In Practice season does NOT advance** this issue (deep dive has no In Practice). Carry the CUT + technical-leadership pivot to the next Standard Weekly per run-plan state note.
- `consecutive_non_deepdive: 9 → 0` on deliver; `last_issue_format → "deepdive"`; `last_lead_topic → "Banking, fintech & loyalty"`.

---

## 1. Named failure modes to hold this issue (front-loaded)

1. **Attribution fidelity (v3.6):** the delivery-metrics figures are **Faros**, NOT DORA/GetDX. Run plan mislabels the source. Correct it. (See §Meanwhile item 1 + §Verification.)
2. **Agent-terminology precision (mandatory):** name the spectrum end on **first use** — *consumer-authorised agent-mode checkout operating within user-defined parameters*, **not** an autonomous production agent with standing money-movement authority. First use is in the Foreword; reinforce in Source 1.
3. **AWS us-east-1: do NOT assert a July 2026 outage as fact.** Radar-only, carried by the documented Oct-2025 + May-2026 pattern.
4. **Meanwhile in-window discipline:** every Meanwhile item needs an in-window (3–10 Jul) primary source. Several run-plan items are out-of-window on their primary event and are relocated/softened below — read §Meanwhile carefully.
5. **Stat discipline (v1.9.2):** each headline stat gets full context once, in its home section. Circle −17.55% lives on the cover; everywhere else it is shorthand ("Circle's 17.55% drop").
6. **No AI-default foreword framing (v2.9); third-person editorial voice only (no "the reader"/"your team").**

---

## 2. Component manifest (deep dive: 4–6 rotating layout components; Meanwhile + baseline structure not counted)

**Rotating layout components used (6):**
1. **Article-with-sidebar** (`.article-with-sidebar`) — Source 1 (Rails). Grid sidebar permitted in deep dives only. Carries the TAP/Agent Directory gloss box + an "urgent"-variant signal box.
2. **By-the-numbers callout** (`.by-the-numbers`) — Source 2 (Money) opening. Distinct layout from Source 1 (source-section rotation rule: never two consecutive source sections in the same layout — satisfied, only 2 source sections and they differ).
3. **Counterpoint + comparison grid** (`.counterpoint-section` / `.comparison-grid`) — "Real, or premature?"
4. **Case-study timeline** (`.timeline-box` / `.timeline-track`) — Visa's live European pilot transaction path.
5. **Lessons navy section** (`.lessons-section`) with **verdict box** (`.verdict-box`) + **key-takeaway box** (`.key-takeaway`).
6. **Full-width pull-quote bar** (`.pq-bar`) — max once per issue; placed between Source 1 and Source 2.

**Baseline deep-dive structure (not counted toward the cap):** progress bar, section markers (1..5 of N), scope indicator (cover), cover lead-stat band, how-to-read guide, Meanwhile section (replaces Other News), compact two-column On the Radar, footer archive bar.

**Inline SVGs (4 — meets v1.30 deep-dive floor of 3–4):** see §3. Two live in Source 1, two in Source 2/bridge.

**Visuals sanity:** SVG1 process-flow + SVG2 timeline + SVG3 horizontal bar + SVG4 architecture = 4 real diagrams (well above the "real-diagram floor"). Plus stats-row (exec summary), by-the-numbers (Source 2), comparison grid (counterpoint), timeline box (case study), verdict/key-takeaway boxes. No section is pure prose.

---

## 3. The 4-SVG spec (hand-built `<svg>`, digest palette only — navy #0A1628, teal #00B4D8, deep-teal #0077B6, alert-red #DC2626, coral #FF4D6D, green #00D4AA, med-gray #8899AA)

### SVG 1 — Agentic-commerce flow (Source 1) · process-flow, `viewBox="0 0 900 210"`
Horizontal 6-node flow with teal connecting arrows. Nodes L→R:
1. **Consumer** — "authorises, sets parameters" (navy box)
2. **AI agent** — "agent-mode, within parameters" (navy box)
3. **TAP + Agent Directory** — "verifies agent to merchant" (**highlight in deep-teal** — this is the novel layer)
4. **Merchant** — "recognises verified agent" (navy box) — footnote: lastminute.com · Frasers · BrickDepot
5. **Settlement** — "Visa network" (navy box)
6. **Issuer in the loop** — "30+ European banks" (navy box)
Caption under diagram: "The consumer authorises; the agent acts within set limits; nobody hands standing spend authority to a bot." Reinforces the agent-terminology precision rule visually.

### SVG 2 — Protocol race timeline (Source 1) · `viewBox="0 0 900 230"`
Single horizontal axis, 3 milestone markers, dates below / labels above:
- **Apr 2026 — Mastercard Agent Pay** (context node, med-gray; note "Issue 15 anchor — context, not re-featured")
- **Mid-2026 — Visa Trusted Agent Protocol (TAP) + OpenAI Agentic Commerce Protocol (ACP)**; annotate "TAP aligns with ACP" (teal)
- **2 Jul 2026 — Visa first LIVE settlement, Europe** (climax marker, **alert-red/coral**, enlarged dot)
Visual point: two years of announcements resolve into one spec→reality crossing.

### SVG 3 — Stablecoin landscape (Source 2) · horizontal bars, `viewBox="0 0 720 340"`
Horizontal bar chart, approximate incumbent market share (label axis "approx., mid-2026"):
- **USDT ~62%** (navy bar)
- **USDC ~25%** (deep-teal bar)
- **Other ~13%** (med-gray bar)
- **OUSD — entrant** (teal **outline/dashed** bar at ~0%, annotated "0 volume today · 140+ launch partners · live later 2026")
Side callout block: "Circle −17.55% on launch day (four-month low)" in alert-red — the market pricing the threat.
⚠ **Phase 4:** the 62%/25% incumbent split is illustrative and NOT verified in-window — either confirm against a current source or keep the "approx., mid-2026" axis label. The load-bearing, verified numbers are 140+ partners, 0 current OUSD volume, and Circle −17.55%.

### SVG 4 — Rails + money convergence architecture (bridge, Source 2) · `viewBox="0 0 820 500"`
Layered stack diagram — the single image tying both halves. Five stacked bands, agent-checkout flowing top→bottom, with a fork at the settlement layer:
1. **Buyer layer** — Consumer + AI agent (agent-mode)
2. **Verification layer** — TAP / Agent Directory / ACP interop (deep-teal — the interop layer to watch)
3. **Commerce layer** — Merchant checkout
4. **Settlement layer** — **fork**: incumbent rail (USDC/USDT) **vs** OUSD (programmable, revenue-shared). Annotate "x402 / programmable settlement". Highlight OUSD path in teal.
5. **Issuer & loyalty layer** — card-linked-offer / rewards attribution touchpoint (green accent — the reader-vertical seam)
Caption: "Rails (Source 1) and money (Source 2) are two layers of one stack." Gloss x402 inline near the diagram (see §Jargon).

---

## 4. Stat home-section assignments (v1.9.2 — full context once, then shorthand)

| Stat | Home section | Elsewhere (shorthand only) |
|---|---|---|
| **Circle −17.55% single-day** (four-month low) | Cover lead-stat band | Source 2 + Counterpoint: "Circle's 17.55% drop" |
| 140+ OUSD launch partners | Source 2 | Cover scope row (number only); Exec summary (scale ref) |
| 30+ European issuers live | Source 1 | Cover scope row; Case study |
| 4 live merchants (lastminute.com/Frasers/BrickDepot) | Source 1 / Case study | Counterpoint ("four merchants = pilot scale") |
| Zero-fee mint/redeem · near-all reserve revenue shared | Source 2 | Lessons (shorthand) |
| 4 settlement chains — **Solana/Polygon/Stellar/Aptos** | Cover scope row / Source 2 | — |
| Faros: +441.5% time-in-review, +242.7% incidents/PR | Meanwhile item 1 only | — |

Cover scope-row relabel (template slots): **"2 · Source sections" | "140+ · OUSD partners" | "30+ · EU issuers live" | "4 · Settlement chains"**.
Cover lead stat: **−17.55%** with context "Circle (USDC issuer) on the day Open USD launched — the market's verdict on how real the money-layer shift is." (Do NOT also print −17.55% at full weight in a source section.)

---

## 5. Jargon allocation (gloss inline vs sidebar)

**Sidebar (Source 1 grid sidebar-box — "What the rails are"):** bundle **Trusted Agent Protocol (TAP)**, **Agent Directory**, **Visa Intelligent Commerce** in one `.sidebar-box` (2–4 sentences): TAP = the standard that lets a merchant recognise and trust a verified AI agent; Agent Directory = the registry of those agents; Visa Intelligent Commerce = Visa's umbrella programme enabling agent-initiated payments on its network.

**Inline gloss on first use (em-dash / parenthetical):**
- **agentic commerce** — first use in Foreword: "commerce where an AI agent, acting for a person within limits they set, completes the checkout."
- **Agentic Commerce Protocol (ACP)** — Source 1: "OpenAI's open spec for agent-run checkout; Visa's TAP is built to align with it."
- **stablecoin** — Source 2 first use: "a digital token pegged 1:1 to a currency — here the US dollar — and backed by reserves held against it."
- **mint / redeem** — Source 2: "creating new tokens against dollars paid in, and destroying them to pay dollars back out."
- **reserve revenue-sharing** — Source 2: "the interest earned on the dollars backing the token — the core question is who keeps it. Circle keeps USDC's; OUSD hands nearly all of it to its partners."
- **OUSD** — always spell **Open USD** on first use.
- **x402** — near SVG 4: "an emerging open standard for machine-to-machine payments over the web, reviving the long-dormant HTTP 402 'Payment Required' response so agents can pay programmatically."
- **us-east-1 / single-region concentration risk** — On the Radar: "AWS's oldest and busiest region, in Northern Virginia; when it wobbles, a large slice of the internet wobbles with it."

**Agent-terminology precision sentence (mandatory, first use in Foreword, reinforce Source 1):**
"These are consumer-authorised, agent-mode checkouts operating within parameters the buyer sets — not autonomous production agents with standing authority to move money on their own."

---

## 6. Per-section briefs

### Cover
- Left-aligned investigative cover (red gradient bar, Deep Dive badge). Headline direction (run-plan): *"The rails go live"* — Phase 4 writes final headline ≤700px, e.g. **"The rails go live"** / subhead *"AI agents settled their first real European purchases this week — and the money underneath is being rewritten."*
- Scope row + lead-stat band per §4. Date: July 10, 2026.

### Foreword — 2 paragraphs, ~90–120 words total
- Opener style: **summary-first** (thesis, not stat — the cover already carries the stat). Para 1: what happened — in one week, consumer-authorised AI agents completed their first real settled purchases at live European merchants, and a 140-firm consortium moved to rewrite the dollar-settlement layer those purchases run on. **Name the agent-terminology precision sentence here.** Para 2: why a full issue — checkout flow and the money underneath are converging into one commerce stack, and the card-linked-offer / rewards vertical sits directly in its path. Drop-cap auto via `.foreword`. No AI-default framing.

### How to Read This — 3 cards, ~25 words each
- 2 min: Foreword + Executive summary + the two verdict lines. 10 min: add Source 1 and Source 2. 30 min: add Counterpoint, Case study, Lessons, Meanwhile.

### Executive Summary (section marker 1 of 5) — ~180–250 words
- Opener: **summary-first thesis** framing the central tension: *the rails are live but at pilot scale; the money is consolidating but not yet in production — a new commerce stack forming, or a premature convergence?* Map the two source sections + counterpoint. Reference scale ("140+ firms, 30+ issuers, four live merchants") **without** spending any stat's full-context appearance here.
- Visual: `.stats-row` (4 cells) — teasers only, numbers that get full context downstream: e.g. "2 Jul · first live" / "140+ · partners" / "30+ · issuers" / "−17.55% · Circle". (These are index pointers; Source sections own the context.)

### Source 1 — The rails go live (section marker 2 of 5) — ~450–550 words
- Layout: **article-with-sidebar**. Opener style: **narrative-first** (the transaction as it happened, Visa Payments Forum, Paris, 2 Jul).
- Content: consumer-authorised agents browsed, selected and completed checkout within user-set parameters at live merchants **lastminute.com, Frasers, BrickDepot** across **30+ European issuers**, enabled by **Visa Intelligent Commerce** + **TAP** + **Agent Directory**; **TAP aligns with OpenAI's ACP**. Mastercard Agent Pay (Apr, Issue 15) + ACP are **context, not re-featured anchors** — one throughline sentence max.
- Reinforce the agent-terminology precision framing (second touch).
- Sidebar: `.sidebar-box` "What the rails are" (TAP/Agent Directory/Visa Intelligent Commerce gloss) + `.sidebar-box.urgent` signal box ("First live settlement — spec→reality crossing").
- Visuals: **SVG 1** (flow) + **SVG 2** (protocol timeline).
- Home stats: "first live", merchant list, 30+ issuers.
- Thread-forward closing sentence: hand off to Source 2 — "the agents are live; the question is what they'll settle over."
- Source tag (verified): Visa newsroom + Worldline/ING GlobeNewswire (see §7). **Do NOT use paymentexpert (403).**

### Pull-quote bar (`.pq-bar`, once per issue) — between Source 1 and Source 2
- Candidate (verify verbatim before print): a line from the Visa press release / Worldline-ING GlobeNewswire about agents transacting on the cardholder's behalf at independent merchants. **If not verbatim-verifiable, substitute** per v1.31: use a stats-tile or a verified line from Fortune ("Circle was the news's clearest casualty" — attributable to Fortune, works as the Source 2 pull-quote instead). One quote, one slot — don't reuse across sections.

### Source 2 — The money gets rewritten (section marker 3 of 5) — ~450–550 words
- Layout: **by-the-numbers opening** (`.by-the-numbers`, 3 cells: "140+ partners" / "0 volume today" / "zero-fee mint/redeem"). Opener style: **stat-first** (distinct from Source 1's narrative-first — no two sections open the same way).
- Content: **Open USD (OUSD)** launched **30 Jun** by Open Standard — a 140+-firm consortium (Visa, Mastercard, Stripe, BlackRock, BNY, Standard Chartered, Coinbase). Zero-fee mint/redeem, no volume caps, **near-all reserve revenue shared with partners** after a management fee, governed by an independent partner board; live later 2026 on **Solana/Polygon/Stellar/Aptos** (see correction §7 — NOT Base). In-window developments: Mastercard confirmed; **Stripe positioning OUSD as the base stablecoin for its commerce ecosystem**; **Circle −17.55%** on the day. Analysts reframe the contest as ecosystem-vs-ecosystem.
- Gloss stablecoin / mint-redeem / reserve-revenue-sharing inline (§5).
- Tie to Source 1: OUSD is the settlement substrate agentic flows plug into; revenue-share economics reshape the merchant/partner (and therefore loyalty/commerce-media) model.
- Visuals: **SVG 3** (landscape bar) + **SVG 4** (convergence architecture) — SVG 4 glosses x402.
- Pull-quote candidate (verified): Fortune — *"Circle was the news's clearest casualty"* (attribute to Fortune). Use here if not used in the pq-bar.
- Source tag: Fortune + Genfinity (see §7).

### Counterpoint — "Real, or premature?" (section marker 4 of 5) — ~250–320 words
- `.counterpoint-section` green border + `.comparison-grid` (max 2–3 metrics/column — no stat replay). Left (red, "The momentum"): 140+ names; first live settlement. Right (green, "The reality"): four merchants (pilot scale); OUSD **0 settlement volume today**, not live until later 2026; stablecoin regulatory treatment unsettled; 140-firm partner-board governance unproven; Circle's drop may be sentiment.
- Reconciliation subhead (the editorial leap): the architecture is being *set* now even though volume lags — platform standards are chosen before they scale. For a commerce-media/loyalty org the signal is directional: map the change, don't bet the roadmap on this quarter.
- Opener style: **summary-first** is taken; use **quote-first or narrative-first** here to preserve within-issue opener variety — recommend a short framing line contrasting "huge names / negligible volume."

### Case Study — Visa's live European pilot (no marker; `.timeline-box`) — ~200–280 words
- Timeline treatment of the real path: consumer authorises → agent browses & selects within parameters → **TAP verifies the agent to the merchant** → transaction settles → one of 30+ issuers in the loop. Merchants lastminute.com / Frasers / BrickDepot.
- `.tl-teal` for the verification/settlement steps, `.tl-navy` for consumer/agent steps. This is the concrete "what actually happened" anchor that separates Issue 18 from the earlier announcement-stage coverage.
- Optional `.pull-quote` (section-level, distinct from the pq-bar) from the GlobeNewswire release — verify verbatim or omit.

### Lessons & Implications (section marker 5 of 5; `.lessons-section` navy) — ~350–450 words
- **Verdict box** (thesis, italic serif): for a fintech in the loyalty / commerce-media patch serving banks, two assumptions just weakened — that the buyer is human, and that the settlement rail is a fixed, single-issuer utility. Card-linked-offer attribution, rewards logic and verification/fraud posture now have to account for an agent-initiated buyer and a programmable, revenue-shared settlement option.
- 3 implication subheads (teal Source-Sans): (1) where a non-human buyer changes CLO/rewards attribution + agent-verification; (2) the settlement layer is now a strategic *choice* (incumbent USDC/USDT vs partner-revenue-share OUSD); (3) protocol interoperability (TAP ↔ ACP) is the thing to watch, not any single vendor.
- **Key-takeaway box** (teal arrows, 4 bullets): the three above + "(4) it's early — track and prototype, don't re-platform on pilot-stage evidence."
- Shorthand stat references only (no re-introduction).

### Meanwhile… (`.meanwhile-section`, replaces Other News) — see §Meanwhile below

### On the Radar (compact two-column `.radar-compact`) — 4 items
1. **AWS us-east-1 concentration-risk watch** — standing single-region fragility, carried by the **documented** Oct-2025 (DynamoDB/DNS) + May-2026 (thermal) pattern. Gloss us-east-1 inline (§5). **Do NOT state a July 2026 outage as fact.** Source: technical.ly (correctly dated Oct 2025).
2. **Jellyfish 2026 State of Engineering Management** — relocated here from Meanwhile (out of window; report is May 12, see §7). AI adoption gap as a management variable: high vs low adopters. Use a **confirmed** figure — 92% vs 69% (growth-outlook) or 64% ≥25% velocity — unless Phase 4 pins 97% vs 60% to a specific Jellyfish page.
3. **Engineering roles proving resilient** (SignalFire/TechCrunch, 24 Jun, out of window — Radar context) — 55% of 2025 Tech-Major hires were engineers (up from 46% in 2019).
4. **Middle East consumer-loyalty market** ~$3.4bn (2026) → ~$5.6bn (2030) — reader-vertical context stat (out-of-window market report; a stat, not a story). Optional 5th: Meta AI-usage-in-reviews (Feb 2026 policy) as calibration awareness.

### Recommended Reading — linked list
OUSD analyses (Fortune, Genfinity, Blockhead); Visa agentic-commerce explainers (FinTech Magazine, Retail Systems, Intelligent Fin.tech); the Faros AI Engineering Report 2026; the technical.ly us-east-1 dependency explainer (correctly dated Oct 2025).

---

## 7. Meanwhile… — item-by-item with in-window sources + corrections

Intro (italic, wry): *"While the rails went live, the rest of the week kept moving."* No analysis — one sentence + link each ("would have led" gets 2–3).

### "Would have led" (full-width, teal border, 2–3 sentences each)

**1. The 2026 delivery-metrics reckoning — CORRECTED SOURCE + FIGURES.**
- **Source is Faros, NOT DORA/GetDX.** Attribute to the **Faros AI Engineering Report 2026 ("The AI Acceleration Whiplash")** — telemetry from **22,000 developers across 4,000+ teams**. The run plan's "DORA" label is wrong; do not repeat it (attribution-fidelity v3.6).
- **Verified figures** (Faros): median **time-in-review +441.5%**; **incidents-per-PR +242.7%** ("more than tripled"); **epics/developer +66%**; **bugs/developer +54%**; **PR-merge-rate/developer +16.2%**.
- **DROP "98% more merged PRs"** — unverified, contradicts the Faros +16.2% merge-rate figure. Use +441.5% / +242.7% as the headline pair, with +66% epics and +54% bugs as the "individual output soars while the system strains" contrast.
- **In-window caveat:** the Faros report itself is dated **April 12, 2026** (out of window). Keep it as a Meanwhile item only under the **new-in-window traction exception** — frame as resurfacing this week via fresh July coverage, and cite an in-window secondary (dev.to "PR Review Time Is Up 441%"). If Phase 4 cannot establish genuine in-window traction, **soften to a one-line "also this week" or drop.** Ways of working.
- Sources: Faros research `https://www.faros.ai/research` · takeaways `https://www.faros.ai/blog/ai-acceleration-whiplash-takeaways` · in-window reaction `https://dev.to/code-board/pr-review-time-is-up-441-the-real-cost-of-ai-accelerated-development-1ho6`

**2. Fable 5 / Mythos 5 return after a 19-day export-control shutdown — CONFIRMED.**
- Anthropic's **Claude Fable 5** and **Mythos 5** launched 9 Jun, went dark worldwide 12 Jun on a US export-control order (triggered by an Amazon-reported jailbreak of a cybersecurity safeguard), and were **restored 1 Jul** after the Commerce Department lifted controls — a 19-day frontier-model blackout. Nuance to include: **Fable 5 returned globally; Mythos 5 came back US-only** pending government review. Lesson = single-vendor AI-dependency / model-portability. In-window traction: coverage continued 3–7 Jul (National Interest 3 Jul; "July 7 cutoff" reporting). Wider landscape / Operating at scale.
- Sources: Anthropic statement `https://www.anthropic.com/news/fable-mythos-access` · MarketScale `https://www.marketscale.com/industries/software-and-technology/us-lifts-export-controls-on-anthropics-claude-fable-5-and-mythos-5-ending-19-day-shutdown` · National Interest (3 Jul) `https://nationalinterest.org/blog/buzz/anthropics-fable-5-platform-back-online-after-export-control-cutoff-ps-070326`

### "Also this week" (compact grid, one sentence each)

- **Metered AI-coding pricing beds in** (Copilot flex, Cursor, Claude Code) — the fixed-seat licence becomes a variable cost centre (a finance conversation). *Cross-issue throughline: Issue 17 candidate — one sentence, not a re-feature.* **Fold Claude Sonnet 5 in here** rather than as its own item: Sonnet 5 shipped **30 Jun** (not 4 Jul — the 4 Jul date was a Claude Code session-fix, corrected §Verification) at introductory pricing ($2/$10 per M tokens through 31 Aug), a datapoint for the same metered-economics thread. Source: Anthropic `https://www.anthropic.com/news/claude-sonnet-5` · TechCrunch `https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/`
- **Active-exploitation week** (delegate-and-be-aware one-liner, per audience-fit gate) — anchor on the **in-window** KEV additions: **SharePoint RCE CVE-2026-45659** (added to CISA KEV **1 Jul**; deserialization RCE, CVSS 8.8) and CISA's **7 Jul** three-CVE KEV batch, with **SimpleHelp CVE-2026-48558** (CVSS 10.0 OIDC auth-bypass, exploited for infostealer delivery) as the standout critical. **Drop from the in-window cluster: Ivanti Sentry (correct CVE is CVE-2026-10520, but its KEV add was 11 Jun — out of window) and Chrome V8 CVE-2026-11645 (disclosed/patched 9 Jun — out of window).** See §Verification. Sources: SharePoint `https://thehackernews.com/2026/07/sharepoint-rce-cve-2026-45659-added-to.html` + CISA `https://www.cisa.gov/news-events/alerts/2026/07/01/cisa-adds-one-known-exploited-vulnerability-catalog` · SimpleHelp `https://www.helpnetsecurity.com/2026/06/30/simplehelp-vulnerability-exploited-cve-2026-48558/` · CISA 7 Jul batch `https://www.cisa.gov/news-events/alerts/2026/07/07/cisa-adds-three-known-exploited-vulnerabilities-catalog`
- **~~Payit UAE rewards~~ — REMOVED from Meanwhile (out of window).** The Payit–Rewardz in-app rewards programme was announced **19–20 May 2026**, not 6 Jul — no in-window primary source exists. **Relocate as reader-vertical context to On the Radar's ME consumer-loyalty line, or drop.** If Phase 4 wants an in-window ME loyalty item, it must source a genuinely 3–10 Jul story; otherwise omit. (Khaleej Times, 20 May: `https://www.khaleejtimes.com/business/uae-fintechs-ramp-up-loyalty-push-as-payit-rolls-out-in-app-rewards-scheme`.)

**Meanwhile net after corrections:** 2 "would have led" (Faros delivery metrics — corrected; Fable/Mythos — confirmed) + ~2 "also this week" (metered pricing incl. Sonnet 5; security cluster). This keeps every printed Meanwhile item on an in-window primary source. Jellyfish and Payit move out (Radar/drop).

---

## 8. Verification-before-print — resolution log (all 5 items resolved)

1. **Visa first-live EU agentic settlement — CONFIRMED.** 2 Jul, Visa Payments Forum Paris; consumer-authorised agent-mode checkouts at **lastminute.com, Frasers, BrickDepot**; **30+ issuers**; TAP + Agent Directory; TAP↔ACP. **Citable URLs:** Visa newsroom `https://www.visa.co.uk/about-visa/newsroom/press-releases.3457328.html` · Worldline/ING/Visa GlobeNewswire `https://www.globenewswire.com/news-release/2026/07/02/3321259/0/en/WORLDLINE-Worldline-ING-and-Visa-complete-a-live-agentic-payment-transaction-in-Europe-Press-release.html`. **Correction:** search confirms only three merchants (lastminute.com/Frasers/BrickDepot); **"Cleverbridge" is NOT confirmed** — Phase 4 confirms or drops it. **paymentexpert 403 — do not cite.**
2. **Faros delivery metrics — VERIFIED WITH CORRECTIONS.** +441.5% time-in-review ✓, +242.7% incidents/PR ✓, +66% epics/dev ✓, +54% bugs/dev ✓, +16.2% merge rate ✓. **"98% more merged PRs" fails — drop it. Source is Faros, not DORA/GetDX — re-attribute.** Report dated 12 Apr (out of window) — keep only under traction exception or soften.
3. **Jellyfish 2026 SoEM — NOT IN WINDOW → moved to On the Radar** per run-plan instruction. Report/blog dated **12 May 2026**. The 97% vs 60% figure could not be confirmed on the primary blog (it shows 92% vs 69% growth-outlook and 64% ≥25% velocity for 600+ leaders) — use a confirmed figure or pin 97/60 to a specific page before printing.
4. **CVE IDs — CHECKED.** SharePoint **CVE-2026-45659** ✓ (KEV 1 Jul, in-window). SimpleHelp **CVE-2026-48558** ✓ (CVSS 10.0 OIDC bypass, in-window-adjacent). **Ivanti Sentry: run-plan gave no CVE; the real ones are CVE-2026-10520/-10523 (CVSS 10.0), but KEV add was 11 Jun — OUT of window → drop.** **Chrome V8 CVE-2026-11645 ✓ as a real CVE but disclosed 9 Jun — OUT of window → drop from the in-window cluster.**
5. **Claude Sonnet 5 & Payit — CORRECTED.** Sonnet 5 shipped **30 Jun** (not 4 Jul; 4 Jul was a Claude Code session-fix) — fold into the metered-pricing throughline. **Payit rewards = 19–20 May (not 6 Jul) → removed from Meanwhile**, relocate to Radar or drop.

**Bonus correction (OUSD chains):** run plan said Solana/Stellar/**Base**/Polygon; primary sources (Fortune + Solana) say **Solana/Polygon/Stellar/Aptos** — use these four; **drop Base** unless Phase 4 confirms it. Circle **−17.55% single-day** confirmed (four-month low); "monthly −39%" not re-confirmed here — Phase 4 verifies or leads with the confirmed day figure (which the cover already uses).
