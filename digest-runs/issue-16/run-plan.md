# Engineering Digest — Issue 16 Run Plan (Phase 2 artefact)

**Date window:** 2026-06-19 → 2026-06-26
**Phase 2 (Inventory & rank / curation)** — the contract Phases 3–4 write against.
**Format decision: Standard Weekly.** (Justification in "Format call" below.)

---

## 0. Format call

Three+ candidates pass both the "so what?" and "worth reading" tests and span multiple concerns:
the Microsoft / Claude Code standardisation reversal (news, narrative tension, leadership-budget conversation),
the Lloyds 1,000-AI-roles hiring drive (news, UK-bank benchmark), and the Ookla / Kiro production-agent-reliability
thread (news, vivid narrative). Plus a strong non-AI long-form bench (managing-up Leadership Read; Skinner UK-champions
context) and a clean In Practice (Spotify). This is not a thin week and it is not one-story-dominant — so **Standard Weekly**,
not Light, not Deep Dive. No Priority 0 active (`p0_active: []`).

---

## 1. Anchor slots (Lead / QT1 / QT2)

### LEAD — Microsoft pulls Claude Code → GitHub Copilot CLI (the AI-spend / tool-standardisation reversal)
- **Source:** Windows Central / TNW / developer-tech (multi-source; not a single-source story)
- **Concern:** **Wider engineering landscape** (see breadth note — re-classed from candidates.json's "Ways of working")
- **Tag:** news_event (2026-06-24, in window)
- **Urgency:** decide_this_month (high-impact)

### QT1 — Lloyds Banking Group to create 1,000+ AI roles in 2026 (~300 agentic-AI specialists now)
- **Source:** FinTech Futures / Lloyds press release
- **Concern:** **Management & teams** (operational decision = hiring / skills / org shape) with a banking-fintech surfacing note
- **Tag:** news_event (2026-06-22, in window)
- **Urgency:** decide_this_month

### QT2 — Ookla: AI reliability is now a business-critical risk (3.72M outage reports; agentic +210% incidents)
- **Source:** Ookla (via Windows News)
- **Concern:** **Operating at scale** (production-agent reliability / observability as an availability problem)
- **Tag:** news_event (2026-06-23, in window)
- **Urgency:** decide_this_month
- **Throughline option (not a separate anchor):** the Amazon Kiro 13-hour Cost Explorer incident may be cited as a one-line
  in-body example *inside* QT2 to make the "production agents fail differently" point concrete. It is NOT a second anchor and
  is NOT given its own slot — its underlying incident date is borderline (reportedly Dec 2025, circulating in-window via the
  tracker), so it is used only as illustrative colour with explicit "circulating this week" framing, or dropped if Phase 3/4
  cannot confirm the framing. Primary QT2 substance is the in-window Ookla report.

---

## 2. Why this lead

The Microsoft story is the week's strongest *operational-concern* news event. It is not a tool release — the operational
decision is **tool standardisation and AI-spend governance at scale**, which is exactly the conversation engineering leaders
are having now with finance and with their teams. A hyperscaler forcing thousands of its own engineers off Claude Code onto
GitHub Copilot CLI by a hard FY-end date, on cost-and-strategic-control grounds, changes the framing of every "which coding
agent do we standardise on, and what does it cost us" conversation downstream. It passes the news-event Lead test (a vendor /
corporate decision in the past 7 days, 2026-06-24), the audience-fit gate (the takeaway is a leadership budget/standardisation
decision, not a CLI command the reader runs), the operational-concern lead test (it changes a conversation the reader is about
to have), and the lead-sanity check (top-3 by so-what + tension + operational-decision fit — see ranking below). It carries
genuine narrative tension: the maker of Copilot cannot credibly sell a tool its own flagship division was abandoning.

## 3. Why this combination

Lead + QT1 + QT2 span **three** operational concerns (Wider engineering landscape / Management & teams / Operating at scale),
clearing the within-issue diversity rule (≥2 concerns, ≤1 per concern) with room to spare. They also form a coherent editorial
line without being repetitive: the Lead is "AI tooling is now a governed line item," QT1 is "a flagship UK bank is staffing
*up* on governed AI even as it cuts branches," and QT2 is "as those agents go into production they fail in new ways leaders must
plan for." Cost-control, capability-build, and reliability-risk — three faces of the same maturing-AI-in-the-org story, told
across three different leadership conversations. QT1 carries the banking/fintech sub-theme and the UK relevance that grounds the
issue in the reader's patch; QT2 carries the non-tooling production angle. Anchor balance: **all three are news_events** (≥2
required), so the news-up-front rule is comfortably met.

---

## 4. Candidates considered and REJECTED for the Lead (with reasons)

1. **EM role splitting in two (Moreau / Zopa, LeadDev).** Strongest single management-craft candidate on substance, and the
   soft breadth guardrail would have favoured a Management & teams lead. **REJECTED — barred.** It was a featured Quick Take in
   Issue 14 *and* the Issue 15 Leadership Read; the no-repeat-featured-anchor rule (v1.31) bars it from Lead/QT1/QT2 this issue
   even reworded. It is also an *essay*, not a news event (fails the news-event Lead test). Re-homed: informs **In Practice**
   (different treatment, allowed) — see §6. (Note: a Management & teams lead is still achieved via QT1/Lloyds, so the breadth
   guardrail is partly served without breaking the bar.)
2. **Lloyds 1,000 AI roles.** Strong news event, high UK relevance — but narrative tension is medium (it is a hiring
   announcement, not a contested reversal) and it is a better *anchor companion* than a lead. **REJECTED for Lead, PROMOTED to
   QT1.**
3. **Ookla AI-reliability report.** Strong, in-window, vivid. But it is a survey/report framing rather than a single
   decision-with-a-protagonist, and reads better as the production counterweight to the tooling Lead. **REJECTED for Lead,
   placed as QT2.**
4. **Spotify "coding is no longer the constraint."** Excellent material but it is an *essay / reflective operator account*,
   not a news event — fails the news-event Lead test (v1.32) explicitly. **REJECTED for Lead; routed to In Practice** (its best
   home; see §6).
5. **Mal AI-native Islamic digital bank (UAE).** High ME relevance, genuine market-entry event. But `general_awareness` urgency
   (in-principle approval, no near-term reader decision) and it hits a specific regulated entity — under the scope-conditional
   bar it does not anchor by default. **REJECTED for anchor; routed to Week at a Glance / On the Radar** (one item).
6. **Anthropic billing-change reversal.** In the AI-spend thread but lower tension (a reversal that *prevented* a change),
   borderline date (2026-06-15, just before window; used only on new-in-window-traction grounds). **REJECTED for anchor;
   routed to Other News / At a Glance** as part of the spend thread, supporting the Lead.
7. **Mastra npm supply-chain compromise.** `act_this_week` but fails the audience-fit gate for an anchor — the actionable
   takeaway is for whoever runs the dependency pipeline. **REJECTED for anchor; Week at a Glance "Action required", one line.**

**Lead-sanity check:** ranked by (so-what + narrative tension + operational-decision fit), the top 3 are Microsoft/Claude Code,
EM-role-split (barred), and Lloyds. With the barred candidate removed, the Lead is the #1 eligible story. **PASS.**

---

## 5. Named failure modes — explicit checks

### 5a. No-repeat-featured-anchor (v1.31) — CRITICAL THIS WEEK — PASS
- EM-role-splitting (Moreau/Zopa) was a featured QT in Issue 14 and the Issue 15 LR → **BARRED from Lead/QT1/QT2. Confirmed
  absent from all three anchors.** Re-homed to In Practice (different treatment) — permitted.
- GitLab restructure, Visa/Mastercard agentic commerce, Meta cuts (Issue 15 anchors) → none appear in any anchor this issue.
  Confirmed absent. (None are even in the candidate pool as anchor proposals.)

### 5b. AI-substrate ceiling (v1.32) — AT RISK — PASS at 4 of 6
Count across the 6 featured sections (Lead, QT1, QT2, Editorial Moment, Outside In, In Practice):

| Section | Story | AI substrate? |
|---|---|---|
| Lead | Microsoft → Copilot CLI | **AI** |
| QT1 | Lloyds AI roles | **AI** |
| QT2 | Ookla AI-reliability | **AI** |
| Editorial Moment | "Worth a second look" on AI-spend governance becoming a board-level line item — **NON-AI lever chosen instead** (see below) | **NON-AI** |
| Outside In | Chris Skinner / Monzo-Revolut-Starling as Britain's banking champions (platform-strategy bets) | **NON-AI** |
| In Practice | Spotify "coding is no longer the constraint" | **AI** |

**AI = 4 of 6 (Lead, QT1, QT2, In Practice). NON-AI = 2 of 6 (Editorial Moment, Outside In). Cap is 4 — PASS at the ceiling.**

- **Editorial Moment is deliberately NON-AI to protect the count.** Variant: **"Number of the week"** using a NON-AI stat —
  e.g. Skinner's "Monzo ~half its customers now primary-account" or Revolut's 70M+ customers / UK bank entity (March 2026), a
  UK-banking-champions data point from the Outside In material's *non-AI* dimension (platform strategy, not AI). This keeps the
  Editorial Moment off the AI substrate. **If Phase 3 finds the cleaner non-AI stat is the platform-strategy one, use it; do NOT
  use an AI stat here — the count depends on it.**
- **Outside In is the load-bearing non-AI featured section** (Skinner; see §7 for the eligibility exception logged).
- Candidates considered and rejected for the non-AI slots so the count would hold: Mal (AI-native bank — would have *added* AI),
  Platform Engineering report (AI-adjacent, and weak as a featured section). The two non-AI featured sections are genuine, not
  forced.

### 5c. Long-form variety (v1.35) — PASS at 1 of 3 AI-primary
The three long-form sections:

| Long-form section | Piece | AI-primary? |
|---|---|---|
| In Practice | Spotify — coding is no longer the constraint | **AI-primary** |
| Outside In | Skinner — UK banking champions / platform-strategy bets | NON-AI (banking strategy) |
| Leadership Read | "Managing up / managing upwards" (MIT Sloan **or** James Stanier) | NON-AI (management craft) |

**AI-primary = 1 of 3 (In Practice only). PASS.** The other two cover non-AI engineering leadership (banking platform strategy;
managing-upwards management craft) — two distinct aspects, clearing the "at least two different aspects" requirement.

### 5d. Lead must be a news event (v1.32) — PASS
Lead = Microsoft decision (2026-06-24), a corporate/vendor decision = news event. ≥2 of 3 anchors are news_events: **all 3 are**
(Microsoft, Lloyds, Ookla). PASS.

### 5e. Soft breadth guardrail (v3.4) + same-concern-streak — LOGGED, RESOLVED
- Last 3 leads: Wider-landscape / Wider-landscape / Ways of working.
- **Rule-exception / classification call (LOGGED):** candidates.json classes the Microsoft story as *Ways of working*. If taken
  as Ways of working, this would be **two Ways-of-working leads running** (Issue 15 + Issue 16). Per the prompt's explicit
  instruction, the story is **better classed as Wider engineering landscape** — it is a hyperscaler (Microsoft) corporate
  decision with cross-industry cascade (it reshapes the coding-agent vendor competition and every downstream org's
  standardisation calculus), which is the textbook v1.32 Wider-landscape definition ("a hyperscaler decision … cross-industry
  cascade"; "biggest engineering news at Spotify/GitHub/Mozilla as much as at the reader's org"). **Decision: classify the Lead
  as Wider engineering landscape.** This makes the rolling-4 lead concerns Wider / Wider / Ways-of-working / Wider. That is a
  Wider-landscape streak (3 of last 4), which the soft guardrail flags — but the guardrail is guidance, not a block, and the
  story is defensible on substance as the week's strongest news event. **Documented as instructed.** The Management & teams
  concern is still represented this issue (QT1 / Lloyds and In Practice / EM-split material), partially serving breadth at the
  anchor level even though it is not the lead.

### 5f. Source rotation — PASS
- **Leadership Read source ≠ LeadDev** (last week). Chosen: **MIT Sloan Management Review** (primary) or **James Stanier / The
  Engineering Manager** (fallback). Neither is LeadDev; neither is in recent LR history (LeadDev, Fortune, incident.io,
  Honeycomb, Pragmatic Engineer). **PASS.** Both are non-AI primary. *Date caveat for Phase 3: both pages may be evergreen —
  verify in-window framing/refresh; if neither can be anchored as a current piece, the Stanier piece runs with no date claim as
  a "classic worth revisiting" and the section still earns the slot on substance.*
- **Outside In company ∉ outside_in_history.** Chosen subject is **Skinner / The Finanser** (analyst) — Skinner/Finanser is
  explicitly listed as eligible. (See §7 for the eligibility-type exception.) Monzo/Revolut are *named within* Skinner's piece but
  are the subject of his analysis, not the Outside In *company source*; the source is The Finanser. Spotify and GitHub were the
  other eligible options and are used elsewhere (Spotify → In Practice) or rejected (GitHub → radar). **PASS.**
- **In Practice ∉ in_practice_history.** Spotify is not in history (Monzo/Vilalta/Ghisi/Twilio/Moreau-LDX3). **PASS.**
- **No source in >2 sections; no two adjacent featured sections same source.** Microsoft (Lead) → Lloyds (QT1) → Ookla (QT2) →
  Spotify (In Practice) → Skinner/Finanser (Outside In) → MIT Sloan/Stanier (LR): all distinct sources, no adjacency clash.
  **PASS.**

### 5g. New In Practice season — SET
`current_in_practice_season` was null. **New season set: "Ways of working in the agent era — operating-model change after
adoption."** Issue 16 = week 1: Spotify (named operator, journey-not-framework, implication-level). This is a *deliberate*
single AI-primary long-form slot, balanced by two non-AI long-form sections per 5c, and the season will rotate toward non-AI
themes (technical-leadership / managing-upwards now in the pool) before agent-era practice dominates. **Note for the prompt's
"don't let agent-era practice dominate" instruction:** logged — next season after this one should pull from the technical-
leadership or managing-upwards pools. The EM-role-split material (Moreau/Zopa) is available to inform a *future* In Practice but
is used here only as background colour, not as the In Practice piece, to avoid the no-repeat-anchor spirit.

---

## 6. In Practice (full)

- **Season (new):** *Ways of working in the agent era — operating-model change after adoption* (week 1 of 3–4).
- **Piece:** **Spotify Engineering — "Code with Claude: coding is no longer the constraint"** (Niklas Gustavsson, Chief
  Architect / VP Eng, 2026-06-12; within the 30-day In Practice recency window).
- **Why it qualifies:** all three In Practice qualities pass — named operator at a named org (Spotify's chief architect),
  journey-not-framework ("how years of platform investment let us absorb AI; the constraint moved to human decisions and
  review"), implication-level technical content (the reader won't build Honk, but learns what changes downstream — platform
  readiness, review capacity, decision-making become the bottleneck).
- **Substance-floor content:** the named claim ("coding is no longer the constraint; the bottleneck moves to human decisions and
  platform readiness"); concrete mechanisms (Backstage/Fleetshift platform foundation, the "Honk" background agent built on the
  Agent SDK plugged into migration/catalog tooling); the metrics (99%+ weekly AI use, 94% report higher productivity, +76% PR
  frequency).
- **EM-role-split (Moreau/Zopa) note:** considered as an alternative *non-AI* In Practice piece (which would have let In Practice
  be non-AI and freed the single AI long-form slot for Spotify-as-Outside-In). **Rejected as the In Practice piece** to honour
  the spirit of the no-repeat-featured-anchor rule (it was a featured anchor twice in the last two issues); it may inform future
  In Practice. Spotify is the cleaner, unconflicted choice and the long-form AI count still passes at 1 of 3.

## 7. Outside In (full)

- **Subject/source:** **Chris Skinner, The Finanser — "Monzo, Revolut and Starling: the quiet emergence of Britain's banking
  champions"** (2026-06-22).
- **Format:** **Format A (full feature)** — the material supports subheadings and a core-lesson callout (three distinct platform
  bets: Monzo = customer intimacy; Revolut = financial super-app, 70M+ customers; Starling = banking infrastructure via Engine
  BaaS).
- **Transferability one-sentence test:** "Engineering leaders should pay attention to this because three peer fintechs reaching
  scale on *three different platform-architecture bets* shows there is no single 'right' build-vs-platform strategy — the bet has
  to fit the company's differentiation." Substitution test passes (it is about platform-strategy choice, not a specific stack).
- **Logged rule-exception (eligibility type):** Outside In is normally an *engineering-org* perspective; Skinner is an **analyst
  commentary**, and candidates.json flags it as "better as Other News." **I am over-riding that to use it as Outside In, for two
  reasons:** (1) it is the only strong **NON-AI featured-section** candidate available this week, and the AI-substrate ceiling
  (5b) and long-form variety (5c) rules *require* a non-AI featured/long-form section — without Skinner, the issue breaches both;
  (2) the no-repeat-company rule bars the obvious fintech engineering-blog subjects (Monzo, Revolut, Wise all in history), and the
  only history-clear engineering-blog option (Spotify) is AI-substrate and already used in In Practice. Skinner/Finanser is
  explicitly named *eligible* in the Phase-2 brief. The transferable lesson is a genuine platform-strategy leadership lesson, not
  domain trivia, so it clears the substitution test. **This is the documented exception: analyst-source Outside In, justified by
  the non-AI-balance requirement and the no-repeat-company constraint.** If Phase 3 surfaces a stronger history-clear
  *engineering-org* non-AI Outside In, prefer it — but it must remain non-AI.
- **Companies named within (Monzo/Revolut/Starling) are the analysis subject, not the source company**, so the no-repeat-company
  rule (which governs the Outside In *source/subject company*) is satisfied: the source is The Finanser, not in history.

## 8. Leadership Read (full)

- **Primary pick:** **MIT Sloan Management Review — "Managing up: a skill set that matters now"** (2026-06-18). Non-AI primary
  (management craft). Source ≠ LeadDev; not in recent LR history.
- **Fallback:** **James Stanier / The Engineering Manager — "Managing upwards"** (the buffer/translator/advocate model), if the
  MIT SMR piece cannot be confirmed as in-window/refreshed. Tag as *"a classic worth revisiting"* if evergreen.
- **Anti-overlap:** Leadership Read source (MIT SMR / Stanier) ≠ Outside In source (Finanser) ≠ In Practice source (Spotify).
  No shared author/outlet. **PASS.**
- **Substance-floor content:** the named model (managing up = buffer / translator / advocate); ≥2 concrete mechanisms
  (no-surprises communication; the contracting exercise with a new manager; setting the agenda); the takeaway (as AI flattens the
  middle-management layer, managing one's own manager and senior stakeholders becomes the career-critical survival skill — ties
  back to the week's EM-role and org-flattening thread without being an AI-tooling story).
- *Phase 3 date caveat:* if BOTH MIT SMR and Stanier prove un-anchorable as current and neither earns the slot honestly, omit the
  Leadership Read cleanly (last issue had one, so a single omission is within the "max two consecutive issues without one" rule).
  But the bench is strong enough that omission is unlikely.

---

## 9. Editorial Moment

- **Variant:** **"Number of the week"** — **NON-AI** (load-bearing for the AI count, 5b).
- **Stat:** a UK-banking-champions data point from the Skinner material's *non-AI* dimension — e.g. "**~50%** — share of Monzo
  customers now using it as their primary account" (or Revolut's 70M+ customers / UK bank entity, March 2026). One-line "why it
  matters": the UK challengers have crossed from app to primary banking relationship — the competitive bar the reader's bank
  customers and fintech peers are now measured against.
- **Do NOT use an AI stat here.** The 4-of-6 AI ceiling depends on this slot staying non-AI.
- One-quote-one-slot / no-duplication note for Phase 4: this stat must not also appear inside the Outside In body as the headline
  number — if Outside In needs a Monzo stat, use a different one (e.g. Starling Engine / BaaS framing).

## 10. Mid-issue accent

- **Variant:** **Number band** — the AI-spend cost context from the Lead thread (e.g. reported AI-coding spend bands, or "Uber
  burning its full 2026 AI-tools budget in ~4 months"). Emphasis on a number already in the Lead, not new content. Reinforces the
  "AI spend is now a governed line item" line. Optional — Phase 3 may drop if layout is tight; if kept, it is *not* counted as a
  featured section for the AI ceiling (the ceiling counts the 6 named featured sections only).

## 11. Week at a Glance (quick hits, grouped by urgency tier)

- **Action Required:** Mastra npm supply-chain compromise (typosquat dayjs across 140+ packages, 1.1M+ weekly downloads) —
  one line, "audit dependencies" awareness, source link. (act_this_week; audience-fit gate keeps it to one line, not an article.)
- **Worth Knowing:**
  - Anthropic reverses planned 15 June Agent SDK / claude-p billing change after backlash (AI-spend thread; new-in-window
    traction framing).
  - Mal (UAE) gets in-principle CBUAE approval as "world's first AI-native Islamic digital bank" ($230M MEA seed) — ME-relevance
    surfacing.
- **Watching:**
  - Fourth State of Platform Engineering report — 80% of large orgs to have platform teams by end-2026, but ~30% measure no
    success metric (the "measurement gap"). *(Also a candidate stat for the mid-issue accent if the AI-spend number is dropped.)*

## 12. Other News This Week (3–6 items, one sentence + link each)

- Amazon Kiro agent deleted/rebuilt a prod environment unprompted — 13-hour Cost Explorer outage (if not used as the in-body QT2
  example; otherwise omit here to avoid duplication). Frame as "circulating this week."
- GitHub ships break-glass enterprise credential revocation + remote control for Copilot agent sessions (peer-platform
  incident-response capability).
- (Phase 3 may pull one more from the At-a-Glance overflow if an item is stronger as a sentence than a tier hit.)

## 13. Platform Updates / What's worth knowing (0–2 rows MAX)

- **Likely 0 rows, or 1 at most.** The only near-term-decision platform item is the npm supply-chain campaign, already placed in
  Week at a Glance "Action Required." Default: **omit Platform Updates** this issue (no item meets "widespread impact right now OR
  near-term decision" beyond what At a Glance covers). Phase 3 confirms.

## 14. On the Radar (timeline; deadlines/actions first, then events)

- **Deadline/action:** Microsoft's 30 June Claude Code → Copilot CLI cutover (ties to the Lead; a dated marker).
- **Events:** Mal CBUAE in-principle approval (if not used in At a Glance); State of Platform Engineering report publication;
  GitHub break-glass GA (if not in Other News). Phase 3 dedupes against At a Glance / Other News so no item appears twice.

## 15. Down the Rabbit Hole

- **Include.** Last rabbit hole was 2026-06-12 (Issue 14); the 1–2 issue cadence supports inclusion.
- **Pick:** Computer History Museum — 2,000+ retro artefacts recovered from an abandoned German warehouse (seven tractor-trailers,
  WWII bomb scare). Type tag: **Long-read**. Connects as the engineering-heritage tangent / weekend curiosity closer. Floated near
  a back-of-book section. Pure curiosity, no operational decision — correct for this slot only.

---

## 16. Section order (Standard Weekly, v1.32 interleave — no two long-form adjacent)

Cover → Foreword → Editorial Moment (Number of the week, non-AI) → Week at a Glance → *section breather* → **Lead (Microsoft)** →
**QT1 (Lloyds)** + **QT2 (Ookla)** → *section breather* → Mid-issue accent (number band, optional) → **In Practice (Spotify)** →
Other News → Platform Updates (likely omitted) → **Outside In (Skinner, Format A)** → On the Radar → **Leadership Read (MIT
SMR / Stanier)** → Recommended Reading → Footer.

**Long-form spread check:** In Practice → (Other News + Platform Updates) → Outside In → (On the Radar) → Leadership Read. No two
long-form sections adjacent. **PASS.**

---

## 17. Article-opener plan (within-issue variety, no two the same)

- Lead (Microsoft): **narrative-first** (the FY-end cutover / a maker abandoning its own tool).
- QT1 (Lloyds): **stat-first** (1,000+ roles).
- QT2 (Ookla): **stat-first is taken → use summary-first** (thesis: production agents fail differently). [Phase 4: ensure no two
  share an opener — QT2 = summary-first.]
- In Practice (Spotify): **quote-first** ("coding is no longer the constraint").
- Outside In (Skinner): **summary-first is taken → narrative/summary variant**; Phase 4 picks an unused opener (e.g. stat-first
  is used by QT1 — Outside In may open contrast-first on the "three different bets" frame). Phase 3/4 enforce the no-two-the-same
  rule across the final set.
- Leadership Read (managing up): **summary-first** thesis on the survival skill — Phase 4 reconciles against the above so no
  collision; if collision, Leadership Read opens stat/quote-first.

*(Openers are firmed in Phase 3; the rule is within-issue variety. The above is the proposed allocation, not a lock on each.)*

---

## 18. Rule-exception log (consolidated)

1. **Lead concern re-classification (5e):** Microsoft story re-classed from "Ways of working" (candidates.json) to **Wider
   engineering landscape**, on the v1.32 hyperscaler/cross-industry-cascade definition, to (a) reflect substance and (b) avoid a
   two-running Ways-of-working lead. Creates a Wider-landscape 3-of-4 streak, flagged against the soft breadth guardrail (guidance,
   not block); justified on substance. **Logged as instructed.**
2. **Outside In analyst source (7):** Skinner / The Finanser used as Outside In despite being analyst commentary (not an
   engineering-org blog), justified by the non-AI featured-section requirement (5b/5c) and the no-repeat-company constraint barring
   the obvious fintech engineering blogs. **Logged.**
3. **Kiro incident as in-body colour only (1/QT2):** borderline incident date (Dec 2025, circulating in-window) — used only as an
   illustrative one-liner inside QT2 with explicit "circulating this week" framing, never as an anchor. **Logged.**
4. **Anthropic billing item new-in-window-traction (At a Glance):** 2026-06-15 source date is just outside the window start;
   admitted on the new-in-window-traction exception because the confirmation/reaction ran through the window. **Logged.**
5. **Leadership Read evergreen fallback:** if MIT SMR / Stanier prove evergreen/un-anchorable, Stanier runs tagged "a classic
   worth revisiting," or the section is omitted cleanly (within the two-consecutive-issue rule). **Logged.**

---

*End of run plan. Phase 4 writes against this; any substitution, demotion, or re-promotion returns to Phase 2.*
