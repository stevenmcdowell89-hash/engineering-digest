# Issue 14 — Section Briefs (Phase 3: Slot Detail & Component Allocation)

**Date window:** 2026-06-05 → 2026-06-12
**Format:** Standard Weekly
**Planned by:** Phase 3 subagent (opus)
**Contract:** executes `run-plan.md` (Phase 2). No curation re-decided. Verification flags resolved below.

---

## Run-flag resolution log (verified this phase via WebFetch / WebSearch)

| Flag | Resolution |
|------|-----------|
| **1. Twilio In Practice named-operator check** | **VERIFIED — named authors exist: Megan Allison & Kelly Jacobs.** Twilio stays In Practice. **BUT publish date is 26 Feb 2024**, not ~30 Apr 2026 → it is **evergreen**; must carry the *"a classic worth revisiting"* sub-label (spec In Practice recency rule). Larson fallback NOT triggered. The piece does treat the CDF redesign as a product and references Figma/Intercom/GDS — substitution test passes ("a large eng org ran its career-framework redesign as a product"). |
| **2. Outside In must be Honeycomb-AUTHORED** | **RESOLVED.** A Honeycomb-authored post exists: **Lex Neva, "Incident Retrospective Ground Rules," honeycomb.io (Aug 2024).** It carries the action-items-surface-organically / learning-not-compliance story with verbatim quotes. Outside In sources from THIS, not from incident.io. Source-collision flag cleared. (Note: the Fred Hebert "Working as Designed, But Still Failing" post is a *different* Honeycomb piece and does NOT carry the action-item story — do not use it for this angle.) |
| **3. OI/LR distinct angles, zero shared quotes** | Held. OI (Honeycomb/Neva) = *journey of de-emphasising action-item tracking so reviews became learning.* LR (incident.io) = *argument that post-mortems fail because they became compliance artifacts not communication.* incident.io's essay cites Honeycomb as ONE example among several (CrowdStrike 2024 is its other) — it does NOT centre on Honeycomb, so no flag-back needed. Quote allocation below keeps them disjoint. |
| **4. Quote verification (Mastercard/Salesforce 403s)** | Visa lead quotes verified verbatim from the primary newsroom. **Mastercard "Agent Pay for Machines" corroborated** (June 10 2026; multi-rail cards/accounts/stablecoins; 30+ partners incl. Adyen, Checkout.com, Stripe, Coinbase, Cloudflare) via Blockonomi/AMBCrypto/CryptoTimes secondaries — cite the press URL backed by a secondary. **Salesforce** stays a no-quote At-a-Glance line (marketing source, not corroborated) — visual substitution N/A (it carries no visual). |
| **5. Editorial Moment non-AI** | Held — "Number of the week" (Gallup 12.1 reports / ~21% engagement), non-AI. Keeps AI count at 2 of 6. |
| **6. Azure must state 29-May event date** | Held — Other News copy MUST state original event 29 May 2026 (traction exception). Link the specific tracking-ID post-mortem, not the status-history landing page. |
| **7. Concept of the week / Jargon Watch candidates** | `.concept-of-week` allocated to QT1 ("levelling / career framework" for the year-one EM). Jargon Watch allocated to Lead (agentic commerce / tokenization cluster) and a second on A2A/VRP in QT2. |

### Additional verification finding (NEW — flag to Phase 4)
- **Fiserv "adopts Visa + Mastercard agentic-commerce protocols" is OUT OF WINDOW.** The Digital Transactions piece dates to **22 Dec 2025**, not 10 June 2026. **Do NOT use Fiserv as an in-window "Worth Knowing" item.** Replace that At-a-Glance slot with the Mastercard "Agent Pay for Machines" 30+-partner ecosystem note (in-window, June 10) OR drop to one fewer Worth-Knowing item. Run-plan WAG item #4 is amended accordingly.
- **Visa "$200 grocery cap / one-use-case token" example is NOT in the Visa primary source.** It was a Phase 1 paraphrase. Phase 4 must NOT attribute that specific example to Visa as a verbatim claim. The token-scoping diagram may illustrate the *concept* (per-agent / per-use-case / per-limit) but label it as the digest's illustration, not a Visa-stated example. Verified Visa claims: tokenized credentials, real-time authorization & fraud monitoring, spending limits / merchant categories / required approvals, Codex developer experiences.

---

## TOP-LEVEL COMPONENT MANIFEST

### Rotating layout components in this issue (target 3–5; using **4**)
Baseline sections (In Practice, Jargon Watch, Concept of the Week, author cards, Down the Rabbit Hole) do NOT count toward the 3–5 cap per spec.

1. **Inline SVG chart** (Lead) — Visa-vs-Mastercard agent-commerce **compare-table** + a hand-crafted **process-flow / token-scoping diagram**. Carries the real-diagram floor.
2. **Quick-take cards** (QT1 + QT2, `.two-col` QT-A equal grid) — both anchors are substantial; equal grid is the honest layout. Each card carries a coloured header bar + anchor stat.
3. **Mid-issue accent — number band** (`.mid-accent-band`) — the AI PR-throughput stat ("98% more PRs merged / review time +91%") surfaced from a covered-but-demoted story (Faros/LinearB). Pattern-breaker between Quick Takes and Other News.
4. **Radar timeline** (`.radar-timeline`) — On the Radar, deadlines-first vertical connector.

**Why this combination.** The issue's spine is a data-rich payments Lead, two equal news anchors, and an AI-free back-of-book. The four rotating components front-load the visual weight where the news is (Lead chart + QT cards), give one mid-issue stat breather, and close on the timeline — without crowding the reflective long-form trio, which carries its own baseline visuals (author cards, compare-table, pull quotes). Feature and Stack are **omitted** (last_feature_date / last_stack_date are null, but the run plan does not call for either and nothing this week earns them — not forced).

### Baseline reader-service components (not counted toward cap)
- **Jargon Watch ×2** — Lead (agentic commerce / tokenization / network token / merchant-category controls / Codex) and QT2 (A2A / VRP / open-banking rulebook).
- **Concept of the Week ×1** — QT1 ("levelling / career framework" for the year-one EM from a non-technical route).
- **Author cards ×3** — In Practice (Allison & Jacobs · Twilio), Outside In (Lex Neva · Honeycomb), Leadership Read (incident.io).
- **Down the Rabbit Hole ×1** — Gallup span-of-control (verified resolves).
- **Compliance side-note** — NOT used this issue (QT2 is an industry-scheme launch, not a regulatory compliance action; no genuine regulator angle earns it). Kept off to avoid wallpaper.

### Visual budget (target 4–6; planned **5**, with a 6th in reserve)
1. Lead — Visa-vs-Mastercard **compare-table** *(real diagram/table ✓)*
2. Lead — token-scoping **process-flow / SVG diagram** *(real diagram ✓)*
3. QT1 — **stats row / simple bar** (Meta 50:1 · Amazon +15% · Gartner 20%/50%) *(real chart ✓)*
4. Mid-issue accent — **number band** (PR-throughput stat)
5. Leadership Read — **centred pull-quote card** (`.pull-quote`, navy) — the section's visual anchor
- **Reserve (6th if a section needs a breaker):** QT2 A2A participant **stats tile** or Outside In **`.oi-callout`**. Per-section floor met without it; hold as Phase-4 substitution capacity.

**Real-diagram floor (≥1–2):** satisfied **3×** (Lead compare-table, Lead process-flow, QT1 bar/stats row). Comfortably clears.

**Per-section visual floor check (every major section has ≥1 visual):**
- Lead → compare-table + process-flow ✓
- QT1 → stats row/bar + Concept-of-Week box ✓
- QT2 → Jargon Watch + (reserve stats tile) — Jargon Watch counts as a visual breaker ✓
- In Practice → process-flow (CDF redesign sequence) OR compare-table (old vs new ladder) + author card ✓
- Outside In → `.oi-callout` + author card ✓
- Leadership Read → centred pull-quote card + author card ✓

### Section order (confirm no two long-form adjacent)
Cover → Foreword → Editorial Moment → Week at a Glance → *breather* → **Lead** → **QT1 → QT2** → *breather* → mid-issue accent → `<hr>` → **In Practice (LF)** → **Other News** → **Platform Updates** → `<hr>` → **Outside In (LF)** → **On the Radar** → `<hr>` → **The Leadership Read (LF)** → Recommended Reading → Footer.

The three long-form sections (In Practice → Outside In → Leadership Read) are each cushioned by news: IP→Other News+Platform Updates→OI→Radar→LR. **No two long-form adjacent ✓.** Matches the v1.32 default order specified in the brief (IP → Other News → Platform Updates → OI → Radar → LR).

### Opener allocation (no two articles share an opener)
| Section | Opener |
|---------|--------|
| Lead (Visa–OpenAI) | **Summary-first** (state the trust-layer thesis, then unpack) |
| QT1 (EM role-split) | **Stat-first** (Meta 50:1 archetype) |
| QT2 (UK A2A scheme) | **Narrative-first** (Money20/20 launch scene, 2 June) |
| In Practice (Twilio) | Narrative/journey ("how we redesigned our CDF as a product") — long-form, distinct from the three above |
| Outside In (Honeycomb) | **Quote-first** (Neva's "action items usually surface organically") |
| Leadership Read (incident.io) | Summary-first thesis (post-mortems became compliance, not communication) — long-form; the only repeat of summary-first is with the Lead, but the hard "no two *articles* same opener" rule governs the four news/feature articles, which are all distinct; LR as the reflective close may echo. If Phase 4 wants strict distinctness, open LR narrative-first on the CrowdStrike example. |

---

## ISSUE-WIDE v3.7 JARGON / CONCEPT SCAN (done now, not during writing)

Four-category scan (proper nouns · acronyms/abbreviations · hyphenated neologisms · 3+-frequency terms). Gloss method noted per term.

| Term | Category | Where | Treatment |
|------|----------|-------|-----------|
| agentic commerce | hyphenated/neologism + 3+ uses (Lead) | Lead | **Jargon Watch (Lead)** + inline gloss on first use; name the agent end of spectrum — *production agents with action authority (they move money)*, not agent-mode-in-tools |
| tokenization / network token | proper-concept | Lead | Jargon Watch (Lead) — "a token is a stand-in card number scoped to rules, not the real PAN" |
| merchant-category controls | specialist | Lead | inline gloss (one line) |
| Codex | proper noun | Lead | inline gloss — "OpenAI's coding agent product" |
| real-time authorization / fraud monitoring | standard | Lead | no gloss needed (audience-known) |
| tech-lead-manager (TLM) | hyphenated neologism + 3+ uses | QT1 | inline gloss on first use |
| span of control | management term | QT1 / Rabbit Hole | gloss inline in QT1 (also the Rabbit Hole subject) |
| IC-to-manager ratio | acronym (IC) | QT1 | spell out "individual contributor (IC)" on first use |
| levelling / career framework | management-craft concept | QT1 | **Concept of the Week (QT1)** — for the year-one EM from a non-technical route |
| agent-mode vs autonomous/production agents | spectrum (mandatory agent-terminology rule) | QT1 (coordination work) + Lead | name the end on first use in EACH section (Lead = production/action-authority; QT1 = agent-mode-inside-tools absorbing coordination) |
| A2A (account-to-account) | acronym + 3+ uses | QT2 | **Jargon Watch (QT2)** |
| VRP (variable recurring payments) | acronym | QT2 | Jargon Watch (QT2) |
| open banking / rulebook | concept | QT2 | inline gloss — "a shared rulebook = common commercial + operational standards all participants follow" |
| CDF (career development framework) | acronym | In Practice | spell out on first use |
| post-mortem / retrospective | standard but central | OI + LR | gloss once in OI (first long-form use); LR uses "post-mortem" assuming the OI gloss is upstream — but each section stands alone, so LR also gives a one-clause gloss |
| blameless (culture) | concept | LR | inline gloss |
| action items (as a tracked artifact) | central concept | OI + LR | OI frames it concretely; no gloss needed beyond context |
| retry amplification / blast radius / shared inference stamp | specialist | Other News (Azure) | one-line inline gloss for "retry amplification" and "blast radius"; this is Other News (one sentence) so keep to a single clause |
| zero-day / CVE / KEV / BOD 22-01 | acronyms | WAG Action Required | one-line gloss for KEV ("CISA's Known Exploited Vulnerabilities list"); zero-day/CVE audience-known |
| SD-WAN | acronym | WAG Action Required | spell out once ("software-defined WAN edge networking") |

**Scan conclusion:** two Jargon Watch boxes (Lead, QT2) + one Concept of the Week (QT1) + inline glosses elsewhere. No term left to surface during writing.

---

## EPISTEMIC-REFRAMING BUDGET (≤2 per issue)
Phase 4 reminder: the structural cap is 2. The natural temptation spots this issue are the Lead ("the question is no longer whether agents transact, but…") and Outside In ("the fix wasn't a better template — it was removing one"). **Allocate at most ONE of these as an intentional reframe; write the other as a direct declarative.** Suggest keeping the Outside In reframe (it lands the section's whole point) and writing the Lead frame straight.

---

# SECTION BRIEFS

## 1. Cover
- **Lead pull-stat:** the single most memorable number. Use the QT1 archetype **"50:1"** (Meta's reported employee-to-manager ratio) OR the Mastercard **"30+"** ecosystem partners. **Recommend 50:1** — it's the issue's most arresting human number and ties to the management thread the back-of-book reinforces. One-line context: "the manager-to-IC ratio that is becoming the archetype as AI absorbs the coordination layer."
- Cover variant: `.cover-lead-stat`.
- Vol. II markers all present (identity strap with teal pill, tagline, bordered week badge, footer pill). Editor's note: **REMOVED** (Issue 13+ rule).
- Reading-time estimate next to issue badge (compute from final word count ~200 wpm in Phase 4).

## 2. Foreword
- 50–80 words, one paragraph, drop-cap. One editorial point: the thread is **control** — who sets the rules agents and managers operate under (Visa/OpenAI scoping agent spend; the EM role splitting around what AI now coordinates; UK banks writing a shared A2A rulebook). Do NOT list the stories; find the thread. No AI-default framing. Third-person voice.

## 3. Editorial Moment — "Number of the week"
- **Stat:** Gallup — the average manager now carries **12.1 direct reports** (up from 8.2 in 2013); global engagement ~21%.
- One-line "why it matters": ties to the QT1 role-split — the flattening wave is now hitting the managers themselves, not just their teams.
- Non-AI. Stats-tile styling. `.editorial-moment`.
- **Quote/stat allocation:** the 12.1 / 21% figures live HERE. The Rabbit Hole (also Gallup span-of-control) uses the *qualitative* finding (one meaningful weekly conversation per report) — NOT the 12.1 number — to keep them disjoint.

## 4. The Week at a Glance (urgency tiers)
**Action Required (act_this_week):**
1. Actively exploited Chromium V8 zero-day **CVE-2026-11645** — on CISA KEV (added 9 June); federal mitigate-by **23 June**. One line; awareness/delegate. Gloss KEV.
2. Cisco **SD-WAN** (software-defined WAN edge) critical flaw exploited as a zero-day. One line; awareness/delegate. *(Verify exact CVE — Phase 4.)*

**Worth Knowing (decide_this_month / general_awareness):**
3. **Mastercard "Agent Pay for Machines"** — multi-rail (cards/accounts/stablecoins) agent-to-agent settlement, 30+ partners (June 10). The competing half of the trust-layer contest; deliberately demoted from anchor. *(Press URL 403 — back with Blockonomi/AMBCrypto secondary.)*
4. ~~Fiserv adopts Visa+Mastercard protocols~~ **REPLACED — out of window (Dec 2025).** Use instead: a one-line note that the agent-commerce ecosystem is broadening (Mastercard's 30+ launch partners incl. Adyen, Checkout.com, Stripe, Coinbase, Cloudflare), OR drop to one fewer item.
5. DORA ROI / "adoption trap" — 100% tool coverage vs 30–40% weekly-active use. AI-throughput context; demoted from QT to hold AI count + DORA fatigue.

**Watching (general_awareness):**
6. Salesforce "truly agentic" engineering operating model — peer-org context; marketing-adjacent, no quote, no link beyond newsroom. One line.
7. Skinner: UK neobank champions diverge (Revolut super-app / Starling Engine / Monzo relationships) — strategy colour.

- Source links on every item not covered by a full article. No visuals in WAG (spec).

## 5. Section breather (between WAG and Lead).

## 6. LEAD — Visa partners with OpenAI: tokenized, permission-bound card payments inside ChatGPT
- **Concern:** Wider engineering landscape (agent-commerce facet) · loyalty/commerce-media surfacing note.
- **Opener:** Summary-first — the deal sets the default trust layer for agent-initiated commerce.
- **Target word count:** **350–400** (lead floor 300, cap 400).
- **Subheadings (h3 every 1–2 paras):** suggest — "The deal" / "How the controls work" / "The trust-layer contest" / "What changes in the reader's patch."
- **Agent-spectrum rule:** on first use, name this as **production agents with action authority — they initiate and move money** (not agent-mode-in-tools).
- **Visuals:**
  - **Process-flow / inline SVG — token-scoping model** (per-agent → per-use-case → per-limit). *Real diagram.* Label the per-use-case example as the digest's illustration (NOT a Visa-stated $200 grocery example — see verification finding).
  - **Compare-table (`.compare-table`, ≤5 rows ×2 cols) — Visa(+OpenAI) vs Mastercard(Agent Pay for Machines)**: rows = mechanism (tokenized card creds vs multi-rail incl. stablecoins), distribution (inside ChatGPT vs 30+ partner ecosystem), settlement (card network vs cards/accounts/stablecoins), control model (spend limits/MCC/approvals vs programmatic permissioning + Verifiable Intent). *Real table.*
- **Jargon Watch (Lead):** agentic commerce; tokenization / network token; merchant-category controls; Codex.
- **Pull-quote bar (`.pq-bar`) — ONE, allocated here (max once per issue):** verbatim Visa — *"Transactions will operate within clearly defined user permissions, policies and controls, such as spending limits, merchant categories or required approvals."* (verified). **This quote is allocated to the Lead `.pq-bar` only.**
- **Cross-issue throughline (optional, one sentence):** callback to Issue 13's agent-commerce protocol GA — "We covered the protocol's general availability in Issue 13; this is the consumer-distribution layer landing on top of it."
- **Epistemic reframe:** write the Lead frame as a direct declarative (reserve the issue's one reframe for Outside In).
- **Source URLs:**
  - https://investor.visa.com/news/news-details/2026/Visa-Partners-with-OpenAI-to-Power-the-Next-Generation-of-AI-Commerce/default.aspx (verified)
  - https://corporate.visa.com/en/sites/visa-perspectives/innovation/visa-openai-partnership.html
  - https://siliconangle.com/2026/06/10/visa-partners-openai-let-ai-agents-make-payments-users/
  - (compare-table Mastercard side) https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html + secondary https://blockonomi.com/mastercard-agent-pay-adds-stablecoin-rails-for-machines/

## 7. QUICK TAKES — layout QT-A (equal grid, `.two-col`)
Both anchors are substantial; equal grid confirmed (run plan left QT-A/QT-B to Phase 3 → **QT-A**).

### QT1 — The engineering-manager role is splitting in two
- **Concern:** Management & teams. AI substrate (coordination layer).
- **Opener:** Stat-first — Meta's reported **50:1** employee-to-manager ratio as the archetype.
- **Header bar colour:** orange (Management & teams palette).
- **Anchor stat (card):** **50:1** (Meta) — context label "the manager-of-many archetype."
- **Target word count:** **180–230**.
- **Visual:** **stats row / simple bar** — Meta 50:1 · Amazon +15% IC-to-manager mandate · Gartner "20% of orgs cut >50% of middle management by 2026." *Real chart.*
- **Agent-spectrum rule:** AI here = **agent-mode inside tools absorbing coordination work** (status, tracking, summaries) — explicitly NOT autonomous production agents.
- **Concept of the Week (`.concept-of-week`, orange border):** **"levelling / career framework"** — plain-language gloss for the year-one EM from a non-technical route. (Ties forward to the Twilio In Practice.)
- **Glosses:** tech-lead-manager (TLM); individual contributor (IC); span of control.
- **Quote allocation:** NO pull-quote bar here (the one `.pq-bar` is the Lead's). If a sharp Moreau line is wanted, render as a short inline body quote, not a bar — and it must be verbatim-verifiable in Phase 4 from the LeadDev piece. **Do NOT reuse the Gallup 12.1 stat here** (it lives in the Editorial Moment).
- **Bold "The takeaway" line.**
- **Source:** https://leaddev.com/career-development/the-engineering-manager-role-is-splitting-in-two ; secondary https://fortune.com/2026/06/09/ai-agents-flattening-corporate-hierarchies-companies-managers-develop-new-playbook/

### QT2 — UK Payments Initiative: shared open-banking scheme for recurring A2A / VRP
- **Concern:** Banking, fintech & loyalty. Non-AI (the deliberate non-AI anchor holding AI count at 2/6).
- **Opener:** Narrative-first — the Money20/20 launch scene (2 June).
- **Header bar colour:** orange (Banking/Fintech) — but distinct from QT1's by context; acceptable in QT-A grid.
- **Anchor stat (card):** the participant roster size, or "14+ banks & fintechs" (Barclays, HSBC, Lloyds, NatWest, Santander, Nationwide, Monzo, Revolut, Starling, GoCardless, Plaid, TrueLayer, Yapily…). Context label "one shared rulebook."
- **Target word count:** **170–220**.
- **Visual:** **Jargon Watch (QT2)** serves as the visual breaker (counts toward per-section floor). Reserve a **stats tile** (participant count) if the card reads prose-heavy.
- **Jargon Watch (QT2):** A2A (account-to-account); VRP (variable recurring payments); open-banking rulebook.
- **Explicit framing:** this is an **industry-scheme launch (banks + fintechs collaborating)**, NOT a bank-regulator compliance action — so it clears the regulator-anchor rule. State this so the reader doesn't misread it as an FCA action.
- **Bold "The takeaway" line.**
- **Source:** https://www.fintechfutures.com/open-banking/uk-banks-and-fintechs-unite-to-launch-new-open-banking-payment-framework ; secondary https://thepaypers.com/payments/news/uk-banks-and-fintechs-launch-open-banking-payment-scheme

## 8. Section breather (between Quick Takes and mid-issue accent).

## 9. Mid-issue accent — Number band (`.mid-accent-band`)
- **Stat:** the AI PR-throughput figure — **"98% more PRs merged, review time up 91%"** (Faros/LinearB), surfacing the human-approval-bottleneck point not otherwise featured.
- One-line context. Emphasis from covered material (the DORA/AI-throughput thread sits in WAG), not new analysis.
- Optional — keep unless the page is crowded (it is the 4th rotating component and helps pacing; retain).

## 10. `<hr class="feature-break">`

## 11. IN PRACTICE — Twilio: redesigning the career-development framework like a product
- **Theme (italic):** *"Career frameworks & ladder design."* Season "Manager-of-managers craft" **ENDED at 3 issues** (per run plan; new theme starts here).
- **Sub-label:** **"a classic worth revisiting"** (evergreen — Feb 2024, outside the 30-day window).
- **Author card:** **Megan Allison & Kelly Jacobs · Twilio · February 2024.** (Initials avatar, no photo.)
- **Target word count:** **320–420** (floor 300, cap 450).
- **Substance floor (must include all three):**
  1. Named model/claim: they ran the CDF redesign as a **product** — research → analysis → exploration → iteration → design critique → usability testing → packaging/rollout; they studied Figma, Intercom, and GDS ladders and found all wove increasing **scope, autonomy, leadership, strategic impact** into the levels.
  2. Concrete example/distinction: the old CDF "felt like an unobtainable checklist" (verbatim, see quote) and over-emphasised craft at lower levels — they rebalanced "craft, then strategy."
  3. Takeaway without clicking: treating levelling as a product (research the field, prototype, test with users) is the transferable mechanism — applicable to any eng org reworking its ladder.
- **Visual:** **process-flow (`.process-flow`, 3–5 steps)** of the redesign sequence (Research → Analyse → Prototype → Critique/Test → Roll out). *Real diagram, contributes to the floor.* (Alternative: a `.compare-table` old-ladder vs new-ladder — pick process-flow as primary.)
- **Quote allocation (verbatim-verified):** *"The CDF was too long and felt like an unobtainable checklist."* — allocated to In Practice (optional pulled quote). Second verified line available: *"Craft, then strategy."* Both are In-Practice-only; not shared with any other section.
- **Substitution test:** passes — "a large eng org ran its career-framework redesign as a product" stays meaningful.
- **Closing:** bold **"What to try"** — one peer-level sentence (e.g. about treating the next ladder revision as a product with users, not a policy edit). Non-prescriptive, third-person.
- **Anti-overlap with Leadership Read:** different author + outlet (Twilio vs incident.io) ✓.
- **Source:** https://www.twilio.com/en-us/blog/company/inside-twilio/design-team-cdf-revamp-process (verified; named authors; evergreen)

## 12. Other News This Week (3–6 items, one sentence + link)
- **Azure OpenAI retry-amplification post-mortem** — **MUST state original event date 29 May 2026** (traction exception: formal post-mortem detail surfaced in-window). One sentence; gloss "retry amplification" in a clause. **Link the specific tracking-ID post-mortem URL, not the status-history landing page** (Phase 4 to locate the tracking ID).
- **Faros/LinearB AI productivity benchmarks** — if not fully consumed by the mid-accent number band, one line on the review-bottleneck data.
- One UK/fintech item as needed (e.g. the Mastercard 30+-partner ecosystem note if not used in WAG, or a Monzo/Starling line).

## 13. Platform Updates (0–2 rows MAX)
- **Decision: 0 rows (omit).** The Chromium zero-day and Cisco SD-WAN are better placed in WAG Action Required (done). Nothing else has widespread-right-now impact warranting the Status/Platform/What-Changed treatment. Do not pad. (If Phase 4 insists on visual continuity, a single Chromium row is the only candidate — but default is omit.)

## 14. `<hr class="feature-break">`

## 15. OUTSIDE IN — Honeycomb: de-emphasising post-mortem action-item tracking (Format A, full feature)
- **Company:** Honeycomb — NOT in `outside_in_history` (Monzo, Revolut, Ramp, Cloudflare, Wise, Linear, incident.io, Vercel) ✓. Sector: dev tools & infrastructure (rotation OK; last was Vercel = also dev tools, but the 4-issue 2-category rule still holds across the window — fine).
- **Source RESOLVED to Honeycomb-AUTHORED post** (source-collision flag cleared): Lex Neva, "Incident Retrospective Ground Rules," honeycomb.io.
- **Author card:** **Lex Neva · Honeycomb · August 2024.**
- **Opener:** Quote-first.
- **Target word count:** **280–350** (Format A).
- **Angle (distinct from LR):** the **journey of treating retrospectives as learning, not compliance** — action items aren't raised live; they "surface organically" once the team understands the incident; Honeycomb noted the items were mostly things the team would do anyway. This is the *practice/ground-rules* angle, NOT the incident.io *why-post-mortems-fail* argument.
- **Visual:** **`.oi-callout`** for the core lesson (the ground rule: note action items for later, don't drive the review with them). Per-section floor met via callout + author card.
- **Epistemic reframe (the issue's ONE allocated reframe):** "the fix wasn't a better template — it was removing the ritual that crowded out learning." Write the Lead frame straight to keep the issue at ≤2 (this is #1; leave #2 unused or for a single natural instance Phase 4 may catch in scan).
- **Quote allocation (verbatim, Honeycomb-only):**
  - *"If you have improvement ideas or action items, I would encourage you to note them down for later rather than raising them during this meeting."*
  - *"Once we have a better understanding of this incident, action items usually surface organically."*
  - Both allocated to Outside In ONLY. **Zero overlap with Leadership Read** (which uses incident.io's own lines + the CrowdStrike example).
- **One-sentence transferable test:** "Engineering leaders should pay attention because a peer org improved its incident reviews by removing a ritual, not adding one." Substitution passes.
- **Bold "The takeaway" line.**
- **Source:** https://www.honeycomb.io/blog/incident-retrospective-ground-rules (verified; Honeycomb-authored; Lex Neva)

## 16. On the Radar (timeline, `.radar-timeline`)
- **Deadlines first:** Chromium V8 CVE-2026-11645 patch deadline **23 June** (urgent/red).
- Cisco SD-WAN active exploitation (event).
- Mastercard Agent Pay for Machines / agent-commerce ecosystem momentum (event, June 10).
- Azure dedicated-routing migration completion (targeted June 2026) — if not fully covered in Other News.
- (Optional) AI SRE governance — background, omit if crowded.

## 17. `<hr class="feature-break">`

## 18. THE LEADERSHIP READ — incident.io: why post-mortems fail (compliance artifacts, not communication)
- **Outlet:** incident.io. NOT Fortune (last issue) ✓; NOT LeadDev (anchors QT1; barred anyway) ✓. incident.io was Issue 12 Outside In — different section, permitted. Non-AI.
- **Author card:** **incident.io · (named author if the post carries one; else "incident.io engineering") · March 2026.** Phase 4: confirm byline; the post had no named author on Phase-1 fetch, which is fine for Leadership Read (named-operator rule is In-Practice-only).
- **Opener:** Summary-first thesis (post-mortems shifted from communication to compliance filing). *(If strict opener-distinctness from the Lead is wanted, open narrative-first on the 2024 CrowdStrike incident.)*
- **Target word count:** **420–520** (floor 400, cap 600). Do NOT go below 400 — omit cleanly rather than ship a teaser.
- **Substance floor (must include all three):**
  1. Named argument: post-mortems underperform because they became **compliance artifacts**, not communication; the fix is honest writing while the incident is fresh, **narrative over bare timelines**, and **concrete ownership** — not better templates.
  2. Two+ concrete examples/distinctions: (a) the **2024 CrowdStrike** incident — interconnected failures matter more than a single root cause; (b) the communication-vs-compliance distinction itself, operationalised (write while fresh; narrative explanation; named ownership). **Honeycomb may be named in ONE sentence as one of incident.io's examples** — but use incident.io's framing of it, and do NOT reuse the Neva ground-rules quotes (those are Outside In's). Keep the Honeycomb mention to a single passing line so the two sections don't re-tell the same material.
  3. Explicit takeaway: a post-mortem's value is whether someone learns from it later, not whether the template was filled.
- **Visual:** **centred pull-quote card (`.pull-quote`, navy, 20px Playfair)** — the section's visual anchor. Use a verbatim incident.io line about compliance-vs-communication (Phase 4 to pull verbatim from the post; the candidate summary attributes the compliance-artifact framing to incident.io). **Verbatim-verify before rendering.** This quote is Leadership-Read-only.
- **Attribution fidelity:** use incident.io's actual terminology ("compliance artifact" / "communication"); the CrowdStrike example is incident.io's own — represent it as they framed it.
- **Glosses:** post-mortem (one clause, section stands alone); blameless (one clause).
- **h3 subheadings** for scannability; render any sequence as a numbered list.
- **End with:** **"This could be worth talking about:"** + one specific provocative question anchored in the argument (e.g. whether the team's last incident review was written to be read or to be filed).
- **Anti-overlap:** different company from Outside In (incident.io vs Honeycomb) ✓; different author/outlet from In Practice ✓.
- **Source:** https://incident.io/blog/the-post-mortem-problem (verified Phase 1)

## 19. Down the Rabbit Hole (`.rabbit-hole`, floated near QT1 / Editorial Moment)
- **IN** (last was Issue 13, 2026-06-05; every 1–2 issues; eligible). Verified the link resolves.
- **Title:** Gallup — "Span of Control: What's the Optimal Team Size for Managers?"
- **Source-type tag:** **Paper/Report** (use "Paper").
- **2–3 sentences:** the optimal span isn't a fixed number; the strongest predictor of engagement is whether the manager holds **one meaningful weekly conversation per report** — true regardless of team size. Connects to the QT1 role-split / Editorial Moment management thread.
- **Quote allocation:** uses the *qualitative* finding only — NOT the 12.1 stat (that's the Editorial Moment). Disjoint ✓.
- **Source:** https://www.gallup.com/workplace/700718/span-control-optimal-team-size-managers.aspx (verified resolves)

## 20. Recommended Reading — linked list (3–5 items). Candidates: d4b "why AI adoption is still hard," LinearB 2026 benchmarks, Skinner neobank piece, The Engineering Manager "managing managers." Do not reuse any URL already used as a section's primary source in a way that breaches the 2-section source cap.

## 21. Footer — Vol. II teal pill, next-edition line, archive bar (last 5 issues; Issue 14 highlighted `.archive-pill.current`).

---

## QUOTE ALLOCATION LEDGER (one-quote-one-slot — enforced)
| Quote / stat | Verbatim status | Allocated slot (ONLY) |
|---|---|---|
| "Transactions will operate within clearly defined user permissions, policies and controls, such as spending limits, merchant categories or required approvals." | Verified (Visa) | **Lead `.pq-bar`** |
| Visa: tokenized credentials + real-time authorization & fraud monitoring | Verified (Visa) | Lead body (not the bar) |
| Meta 50:1 / Amazon +15% / Gartner 20%/50% | from LeadDev (verify exact wording Phase 4) | **QT1 stats row** + Cover stat (50:1) |
| Gallup 12.1 reports / ~21% engagement | from Gallup/Fortune | **Editorial Moment** |
| Gallup "one meaningful weekly conversation per report, regardless of team size" | Verified (Gallup) | **Down the Rabbit Hole** |
| "The CDF was too long and felt like an unobtainable checklist." / "Craft, then strategy." | Verified (Twilio) | **In Practice** |
| "...note them down for later rather than raising them during this meeting." / "...action items usually surface organically." | Verified (Honeycomb/Neva) | **Outside In** |
| incident.io compliance-artifact-vs-communication line + CrowdStrike 2024 example | candidate (Phase 4 verbatim-verify the pull line) | **Leadership Read** |
| Mastercard Agent Pay for Machines (multi-rail / 30+ partners) | Corroborated (secondary) | WAG + Lead compare-table (data point, not a quote) |

No quote appears in two slots. OI and LR draw on entirely separate verified lines.

---

## OPEN ITEMS FOR PHASE 4 (blockers / must-verify-at-write)
1. **Fiserv out of window (Dec 2025)** — do not use as in-window; amend WAG item #4 (see above). (Resolved here; just don't reintroduce.)
2. **Visa $200/grocery token example** — not in primary source; illustrate the concept, don't attribute the example to Visa.
3. **Azure post-mortem** — locate and link the specific tracking-ID URL; state 29 May 2026 event date.
4. **Mastercard own URL 403** — cite press URL backed by Blockonomi/AMBCrypto secondary.
5. **Cisco SD-WAN CVE** — confirm exact CVE + date before publishing the WAG line.
6. **LeadDev Meta/Amazon/Gartner figures** — verify exact wording verbatim before the QT1 stats row.
7. **Leadership Read pull-quote** — verbatim-verify the incident.io compliance-artifact line before rendering the centred card; if unverifiable, substitute another verified incident.io line or a stats/callout breaker (per v1.31 visual-substitution order) — do NOT drop the section's only visual.
8. **AI count holds at 2 of 6** (Lead, QT1). All long-form is non-AI. No swap reintroduced AI. ✓
