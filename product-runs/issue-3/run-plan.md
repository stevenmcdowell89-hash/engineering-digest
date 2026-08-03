# Run Plan — Product Edition Issue 3 (August 2026)

Window: 1 July – 3 August 2026. State read at start: `last_issue_number` 2, `last_issue_month` 2026-07. `trend_history` carries eight trends across Issues 1–2 (agentic trust layer, Pay-by-Bank/A2A operational, OS wallet as loyalty surface, UK rewards re-gated; UK retail media consolidates, agent checkout opens to every merchant, Gulf banks build the rewards hub, reward value re-priced). `roadmap_threads_history`: A2A coverage gap, loyalty absent from agent rails, retail media's audited yardstick, opening agent rails have no loyalty object. `source_map.last_reviewed_issue` = 1. 17 candidates in `candidates.json`.

**Window note (deliberate, stated in the issue).** Issue 2 declared 10 June – 10 July. Two significant items landed in the 1–10 July band and were not covered there: Visa's European agentic-commerce launch (3 Jul) and the European Media Marketplace (8 Jul). Rather than let a boundary artefact bury them, Issue 3 opens at 1 July — a clean calendar-July issue published 3 August. Both items carry their original dates in the copy. This is not recycling: neither has run before.

## Through-thread

The offer's home address is being renegotiated. This month a named competitor's card-linked stack shipped inside a payments app rather than a bank app, Mastercard opened wallet-building to any fintech and named rewards as the reason to bother, and an airline made banks the issuing rail for its own points — while on the new agent rails, every major UK bank went live with Visa and not one announcement named an offer, a reward or a loyalty balance.

## Recurrence handling (checked against `trend_history`)

- **Agentic commerce (Issue 1 Trend 01, Issue 2 Trend 02)** — recurs for a third issue and is earned. Issue 1: the *networks* specified the trust layer. Issue 2: the *commerce platform* (Shopify) opened the checkout. This month: **the reader's own bank customers went live** — Visa completed real agent-driven purchases with 30+ European banks including Barclays, HSBC UK, Lloyds, Nationwide, NatWest, Revolut and Klarna (3 Jul), and the protocol work moved identity linking from a capability to the transactability layer. Runs as Trend 02, evolution-first. Explicitly checked against the six-months-of-the-same failure mode: the feeding pieces are new, dated in-window, and the framing has changed from "the object is missing" to "the hook is identity, and it is live at 15 stores out of 11,414."
- **UK retail media consolidates (Issue 2 Trend 01)** — no fresh *UK* movement in the window; the John Lewis–Kevel deal (29 Jun) and Co-op's DOOH network (14 May) both fall outside it. The one in-window move is the European Media Marketplace (8 Jul), which is the same story one level up. Not enough for a section on its own → *Also moving*, framed as the delta.
- **Gulf banks build the rewards hub (Issue 2 Trend 03)** — no second UAE bank hub this month. The GCC material that did land (Riyadh Air RX Pay) is a different argument — an airline owning the programme and banks issuing — and feeds Trend 01 rather than reviving the Gulf trend.
- **Reward value re-priced (Issue 2 Trend 04)** — no in-window pricing or tiering move of comparable weight. Dropped; the consumer-preference evidence that did land (Dotdigital) feeds Trend 03 on different terms.
- **UK rewards re-gated around behaviour (Issue 1 Trend 04)** — second consecutive quiet month. *Also moving*, recorded as quiet.
- **Pay by Bank / A2A (Issue 1 Trend 02)** and **OS wallet (Issue 1 Trend 03)** — no new in-window movement. UKPI Wave 2 stays in *What's next*; wallet material appears in Trend 01 through Mastercard Wallet Services, which is a new development, not a restatement.

## Trends (3, ordered by significance)

Three, not four or five. The month produced three arguments with genuine in-window material behind them; the fourth candidate (retail media) had one piece and goes to *Also moving* rather than being inflated. A shorter issue is the honest outcome.

### Trend 01 — The offer follows the wallet, not the bank
Ordered first because it moves the reader's own product decisions now, not eventually, and because every piece is in the reader's exact category.
- **Rezolve Ai × Zilch** (21 Jul) — Reward's engagement and commerce-media platform embedded in a payments app serving nearly 6m customers and driving $3.3bn a year to merchants. Reward operates in 15+ markets, has returned $2bn in cashback and targets $4bn by 2030. A direct competitor's stack, distributed by a fintech rather than a bank.
- **Mastercard Wallet Services** (15 Jul) — SDKs, a Secure Element applet and MDES tokenisation let any bank, fintech or merchant build contactless into its own app without separate OS integrations or EMVCo certification. Chief Digital Officer Pablo Fourez frames it in rewards terms: companies "will be able to offer new benefits, rewards, discounts, points or features to encourage users to start using their wallets." iOS first in the US, UK and Europe; first consumer products before end-2026.
- **Riyadh Air RX Pay** (late Jul, Saudi Arabia) — the airline owns the programme and the currency; Saudi banks issue. Sfeer Points now redeemable against any Mastercard purchase globally, not just flights. Multi-currency, split payments, instalments; phased rollout from Saudi under a Mastercard exclusivity.
- Statline: nearly 6m Zilch customers / $3.3bn annual merchant flow / 200+ countries of MDES coverage.
- Closer: **investigate** (roadmap 1) — sourced instantiation. Not a prediction: Reward's card-linked stack is already running in a payments journey, and the network has opened wallet-building to anyone with an app and named rewards as the hook.

### Trend 02 — The agent rails went live at the UK's banks, without the offer
Recurring-but-evolved, third issue running, delta-framed throughout.
- **Visa's European agentic launch** (3 Jul) — live agent-driven purchases within user-defined parameters, 30+ banks including Barclays, HSBC UK, Lloyds, Nationwide, NatWest, Revolut and Klarna; merchants lastminute.com, Frasers, Cleverbridge, BrickDepot; Payment Passkeys, Trusted Agent Protocol and an Agent Directory underneath, with Cloudflare and Akamai supporting. No offer, reward or loyalty object anywhere in it.
- **Identity becomes the transactability layer** (July protocol state, UCP Checker) — the UCP Technical Council put saved payment methods on identity-linking infrastructure rather than a separate extension. Identity linking is the capability that carries member and loyalty benefits to an agent, so the loyalty hook and the payment hook are now the same hook. Adoption: identity live at 15 stores, three further vendors declaring identity-flavoured extensions, 99.7% of verified stores on a single spec revision, and 0 of 11,414 verified stores exposing payment capabilities.
- **Nothing shipped on the incentive side** — an independent protocol tracker records no prominent loyalty-programme integrations and no dedicated discount protocols announced in the period. Background, dated: Talon.One's UIP (28 Jan) and UCP's identity-linking capability (19 Mar) remain the standards that would carry incentives.
- Statline: 30+ European banks live / 15 stores with identity capabilities / 0 of 11,414 exposing payment.
- Closer: **investigate** (roadmap 2) — evidenced gap, delta-framed. The gap has moved: it is no longer that no object exists, it is that the object rides on identity linking and almost nobody has turned it on.

### Trend 03 — Everyone is selling the engagement layer
The craft-and-competition counterweight, per the spec's rails-vs-craft calibration note. Three in-window pieces, three different kinds of seller competing for the same bank and retailer budget.
- **Visa Q3** (call 28 Jul, reported 30 Jul) — value-added services grew 34% to $3.8bn, close to a third of revenue, positioned as a loyalty and engagement engine. Named outcomes: a Brazilian bank's World Cup promotion drew a million participants, an 8% card-activation lift and $400m of incremental payment volume; a Mexican co-brand saw a fivefold rise in average transaction size on match days; Visa Direct powers DoorDash's Crimson rewards-and-banking programme; a white-label AI financial assistant is being rolled out inside issuer apps.
- **Dotdigital** (16 Jul) — Customer Trends Index, 4,000 consumers across the UK, US, Australia and Singapore: 62% prefer points-based programmes, 53% free shipping, 52% cashback, 45% raised spend to reach a tier, 53% say loyalty programmes matter to a future brand relationship — and only 15% find the marketing they receive "very relevant". Launched alongside Dotdigital Loyalty, a native programme-building product.
- **Eagle Eye × Central Retail Vietnam** (27 Jul) — an AI-personalised programme past 5.8m members within months, in the reader's Asian footprint.
- Statline: 34% VAS growth / 15% who find marketing very relevant / 5.8m members in months.
- Closer: **why it matters** (context). No sourced instantiation of a buildable thing and no evidenced gap — this is competitive awareness, and it stays awareness. Deliberately not a third roadmap thread.

## Roadmap strip (2 threads — both sourced, no invention, no instruction)

1. **The card-linked stack has left the bank app** (→ Trend 01). Reward's engagement and commerce-media platform is running inside Zilch's payments journey (21 Jul), and Mastercard's Wallet Services (15 Jul) lets any fintech hold the contactless credential, with the network itself naming "benefits, rewards, discounts, points" as the reason to build one. Sources: Rezolve Ai/Zilch release; Mastercard via PYMNTS.
2. **On the agent rails the loyalty hook is identity, and it is barely switched on** (→ Trend 02). Visa's European launch put 30+ banks including the major UK groups into live agent purchases with no offer object named (3 Jul), while the protocol work made identity linking — the capability that carries member and loyalty benefits — the foundation for transactability, live at 15 stores against 11,414 verified and none payment-capable. Sources: FStech on Visa; UCP Checker July state report; agenticplug protocol tracker. *Evolution of the Issue 1 and Issue 2 versions: the object exists now, the adoption does not.*

## Also moving
- **European Media Marketplace launches** (8 Jul) — Vinted, Deutsche Telekom's T Advertising Solutions, Equativ, Experian, lastminute.com, leboncoin, Kleinanzeigen, Orange Advertising, Virgin Media O2 and Vodafone, spanning CTV, video, display, native and retail media, UK among the first five markets, campaigns from September. Issue 2's UK retail-media consolidation, one level up.
- **UK bank rewards quiet for a second month.** The full named bank sweep and the catch-all patterns returned no new UK rewards programme in the window; Lloyds Rewards continued bedding in with summer merchant offers and Chase's behaviour-gated 2% took effect from 1 July as previously announced. HSBC's £500 Premier switching incentive appears in July offer round-ups but was announced on 14 April.
- **Visa Stablecoin Platform enters beta** (16 Jul) — settlement infrastructure for banks and fintechs, not an offer surface.
- **Linux Foundation launches the x402 Foundation** (14 Jul) — machine-payment standardisation moves to neutral governance with 40 members.
- **Mastercard examines a sale of Vocalink** (20 Jul) — UK payments infrastructure ownership in play.
- **Card-linked offer vendors quiet on product.** No in-window product or partnership news from Cardlytics or Fidel API; Cardlytics' Q2 results land 5 August, the first clean read since the Bank of America relationship ended in February.

## What's next (variety: 4 product/competitive, 1 infrastructure/regulatory)
- Watch — Cardlytics reports Q2 on 5 August, the first full quarter without Bank of America. StockTitan.
- Watch — Mastercard Wallet Services reaches consumers in selected markets before the end of 2026, iOS first in the US, UK and Europe. PYMNTS.
- Watch — European Media Marketplace campaigns start running from September across five markets. Retail Gazette.
- Watch — whether identity linking spreads past the handful of UCP stores that have it, and whether any store flips payment capabilities on. UCP Checker.
- Open — UKPI Wave 2 brings general e-commerce onto the A2A scheme in H2 2026. Open Banking Expo.

## Cover plan
- Dek: the offer's home address is up for renegotiation — out of the bank app into payments apps and wallets, while the agent rails went live at the banks with no offer on them.
- Lead stat: **30+** — European banks, the major UK groups among them, that completed live agent-driven purchases with Visa this month. None of the announcements names an offer, a reward or a points balance.
- Contents rail: three trends + the "+" line.

## Rejected / demoted (with reasons)
- **Retail media as a trend section** — only one in-window piece (European Media Marketplace, 8 Jul). Substance floor fails; *Also moving*.
- **HSBC £500 Premier switching offer** — surfaced in July round-ups, announced 14 April. Out of window; excluded from the trend set and handled honestly in *Also moving*.
- **Reward–Visa European partnership, RewardIQ, Mastercard Commerce Media, SAS financial-media-network research, Europe Cashback Programs report, Kroger rewards expansion, John Lewis–Kevel, Co-op DOOH** — all surfaced in July result sets, all verified out of window (2020, Sep 2025, Oct 2025, Jan 2026, Apr 2026, Jun 2026, Jun 2026, May 2026). Dropped. See `rejected_on_date_verification` in `candidates.json`.
- **"Loyalty Has Entered The Utility Phase"** — a genuinely useful argument, but undatable to the window and resting on December 2025 and February 2026 research. Dropped rather than dressed as new.
- **Cardlytics Q2 scheduling, inducement grants; Rezolve's FY26 revenue guidance** — reject up. The Zilch partnership is used for what it does to distribution, not for the guidance line attached to it.
- **Mastercard Wallet Services' SDK and applet mechanics** — reject down. Kept at the altitude of which apps can now hold a credential.
- **Visa Q3 revenue and payments-volume records** — reject up. Only the value-added-services product substance is used.
- **Revolut breach reports (27 Jul)** — off-category and secondary-sourced. Omitted.
- **Amex UK referral bonus boost; Robinhood Platinum Card; RewardPay Australia; Starbucks–Delta earn change** — promotions or US/AU-specific; below the bar even for *Also moving* this month, with the exception noted above.

## UK-first check
- Trend 01 leads on a UK deal (Zilch, ~6m UK customers) and flags Riyadh Air as Saudi Arabia.
- Trend 02 is anchored on the UK's own banks; the protocol adoption figures are global and stated as such.
- Trend 03 flags Visa's named outcomes as Brazil and Mexico, notes Dotdigital's sample as UK/US/AU/SG, and flags Eagle Eye as Vietnam.
- No interchange-squeeze framing anywhere. The Europe Cashback report, which does carry the "EU interchange cap makes cashback unsustainable" argument, was excluded on date — and would in any case have needed the UK-first treatment.

## Source-map notes (v1.2)
- **Six-issue review:** not due (`last_issue_number + 1 − last_reviewed_issue = 3 − 1 = 2 < 6`). Next due at Issue 7.
- **Unlisted entrants seen this issue** (candidate-pool companies not on the spec's named competitor or bank lists):
  - Zilch (UK payments platform now distributing card-linked engagement)
  - Riyadh Air (airline programme owner, Saudi Arabia)
  - Eagle Eye (loyalty platform vendor)
  - Dotdigital (martech vendor entering loyalty)
  - Equativ / European Media Marketplace coalition
  - UCP Checker (protocol adoption tracker — source, recorded for the map)
- **Promotions due on publish (seen in a second issue):**
  - **Rezolve Ai** — seen Issue 2 (Mashreq Everyday Cashback) and Issue 3 (Zilch). Promote to the named competitor list; clear from watchlist.
  - **Shopify** — seen Issue 2 (Spring '26 agent checkout) and Issue 3 (as UCP co-developer background in Trend 02). *Judgement: this issue's appearance is dated background, not a finding. Not promoted — recurrence should be evidenced by new findings, not by citation. Kept on the watchlist with `seen_issues` unchanged at [2].*
  - **Talon.One (UIP)** — same treatment as Shopify: cited as dated background, no in-window finding. Watchlist unchanged.
- Carried forward unchanged (first sightings, Issue 2): dunnhumby, SMG/Plan-Apps, Kevel, Vernost, IAB Europe, Emirates NBD, Mashreq.
