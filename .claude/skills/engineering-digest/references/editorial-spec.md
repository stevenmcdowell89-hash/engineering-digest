# Engineering Digest — Full Editorial Specification

This is the single source of truth for every issue of the Engineering Digest. Read this file completely before generating any issue. Only deviate from these rules when explicitly instructed by the user.

---

## Audience & Tone

- **Readers (v3.3):** Engineering leadership at a fintech operating in the customer-loyalty / commerce-media space, working with UK and Middle East banks as customers. Directors, VPs, and heads of engineering plus the wider management team — some of whom have come into engineering management from non-technical routes (former scrum masters, delivery managers, PMs stepping into eng leadership) and need an accessible read on the wider tech and engineering-management landscape. They guide and direct teams, make decisions that affect rollouts, adoption, and maintenance. They need awareness of process — not technicalities. They do not build CI/CD pipelines, ship code, write prompts, or patch CVEs themselves. The digest is their one reliable read for what's happening in the bank engineering orgs they partner with, the broader UK/ME fintech ecosystem, the loyalty / commerce-media engineering patch they operate in, and the management craft they need to grow into.
- **The primary curation test (v3.3 — applies to every story, every slot):** What guides the team's work vs. what the team's work is. The digest covers the first. The digest does not cover the second.
  - **Worked example — agentic coding rollout.** In scope: how to set up the team to adopt agentic coding, what pre-work is needed (repo readiness, instruction files, refinement discipline), how to plan and structure work to make adoption succeed, what changes about review/calibration/hiring/levelling. Out of scope: the exact prompt patterns developers should use, the contents of instruction files, code-structure conventions for agents, the CLI command, the config flag, the model setting. A reader may want to go deeper themselves — but not through a Friday-morning news magazine.
  - **Worked example — test automation.** In scope: how a team approached the rollout, what broke during refinement, what changed about engagement with engineers, what they learned. Out of scope: which Cypress version had which problems, the exact configuration of the test runner, code-level patterns for writing the tests.
  - **Worked example — vulnerability or version EOL.** In scope: "is this widespread now, do my teams need to act this week or this month, what conversation should I be having." Out of scope: the CVE remediation steps, the exact patch command, the migration code path, the runtime flag.
- **Banking, fintech, and loyalty as first-class subject matter (v1.31 — restores the Issue 10 lesson the v3.3 reframe overshot):** The reader is at a fintech serving UK and ME banks as customers, in the customer-loyalty / commerce-media space. First-class subject matter is **engineering content** from that patch: bank engineering blogs (Monzo, Wise, Starling, Revolut, ClearBank, Allica, Lloyds, JPMorgan, regional ME banks), broader UK/ME fintech engineering moves, payments-rail engineering (Visa, Mastercard, faster-payments work, agentic-commerce protocols), loyalty / commerce-media tech (Stripe Ledger, neobank loyalty engineering, aggregator APIs, rewards-platform engineering). The reader has no other reliable source for what bank engineering orgs and fintech peers are actually building.

  **NOT first-class: bank-regulator decisions about banking compliance.** FCA, ADGM/FSRA, PSR, HMT, DORA-EU policy actions about payment institutions, EMIs, or banks are **At a Glance / On the Radar / Other News only — never Lead, never featured Quick Take.** The reader is UPSTREAM of those institutions; regulator action affecting their customers downstream is information to surface briefly, not a leadership-conversation anchor for the reader. The v3.3 attempt to allow regulator decisions under "positive framing" produced the Issue 10 audience-fit failure again in Issue 12 v1.30, and is retired. The v3.2 audience-fit lesson — *"if the only useful version of the takeaway requires the reader to be the regulated entity, the story does not anchor"* — is the load-bearing rule and stays.
- **Tone:** Confident, opinionated editorial voice — Pragmatic Engineer, not press release. Direct. Not corporate.
- **Third-person editorial voice (v1.31 — never address the reader directly).** The publication describes what is happening, what others are deciding, what the implications are. The reader applies the implications themselves. **Banned constructions** (any instance in any section is a failure): *"the reader"*, *"the reader's [anything]"*, *"your team"*, *"your firm"*, *"your org"*, *"your customers"*, *"you must"*, *"you should"*, *"you need to"*, and any rhetorical question posed to the audience (*"does the reader's product sit inside…?"*, *"what does this mean for your team?"*, *"which of your services…?"*). **Acceptable third-person framing**: *"Firms in scope are now running daily reconciliations."* / *"Teams running coding agents face this question."* / *"The trade-off engineering leaders are navigating is…"* / *"In-scope organisations now operate under a daily reconciliation discipline."* The reader is intelligent enough to draw conclusions without being instructed. The Issue 12 v1.30 Lead and Leadership Read both violated this rule extensively (13+ instances of "the reader" / "the reader's"). v1.31 makes the rule explicit.
- **Frame everything as:** "What does this mean for engineering leadership?" Not what happened — why it matters. Framed in third-person editorial, never directed at the reader.
- **No action items.** Inform and contextualise; the reader draws their own conclusions.
- **No branding.** The publication is "Engineering Digest" only. No company names in masthead or footer.
- **Limit epistemic reframing (v3.6 — structural test, not pattern list).** The structural test is: **any sentence that names what something is NOT in order to introduce what it IS counts as epistemic reframing.** The six canonical patterns are illustrative, not exhaustive:
  1. "the question is not X — it's Y"
  2. "the real X was Y" / "the real issue is not X — it's Y"
  3. "the interesting part isn't X — it's that Y"
  4. "less a X than a Y"
  5. "not whether X, but how Y" / "not whether, but how"
  6. "not just X — it's Y"

  **All structurally equivalent constructions also count**, including (non-exhaustive): *"the precondition story matters more than the headline"*, *"not the tool, not the prompt library — it's the X"*, *"the wrong unit of measurement is X; the right one is Y"*, *"the question is no longer X"*, *"this is less about X than Y"*, *"the hardest problem here is not X"*, *"X isn't the story — Y is"*. If a sentence works by negating one frame to introduce another, it counts — regardless of whether it uses one of the six explicit patterns.

  Used once or twice per issue these land a genuinely important reframe. Used more than that, they become a rhetorical tic that flattens the prose. **Hard cap: no more than 2 epistemic reframing statements per issue.** Prefer direct declarative sentences. Say what is true — don't set up what isn't true first.

  - **Mandatory scan before delivery (v3.6 — structural, not lexical).** After generating the full issue, scan every sentence in the HTML using the **structural test** ("does this sentence negate one framing to introduce another?"), not just by searching for the six lexical patterns. Count includes close variations and synonymous constructions. If the count exceeds 2, rewrite the excess instances as direct declarative statements. Common failure: Phase 4 lexical scans return 0 because the spec used to list six patterns and the writer searched for those literal strings while writing variations on the same structure. The v3.6 scan is structural — scan the meaning, not the surface form.
- **One quote, one slot (v3.6).** A source quote — verified verbatim OR paraphrased — appears in at most one slot per issue. The same line cannot anchor both the Editorial Moment and the Outside In callout, or appear as a pull-quote bar and a body quote. If a quote works in two places, pick the strongest placement and use the second slot for a different quote or framing. Phase 3 allocates verified quotes to slots; Phase 4 executes the allocation and does not duplicate.
- **Attribution fidelity (v3.6).** Concepts attributed by name to a named source must use that source's actual terminology. Inventing labels and putting them in the source's mouth is not allowed — even when the substance is correct. If the underlying concept is from a source but you need a label the source didn't use, attribute the concept and label the framing yourself: *"DORA describes a productivity dip during AI adoption — call it the 'instability tax' if you like, the team's underlying point is that…"* (label is the digest's, concept is DORA's) — not *"DORA's 'instability tax'"* (label invented and attributed). Mandatory scan: every named-source attribution in the issue is checked against the source's actual wording.
- **Weekend magazine pacing.** Readers open the digest on a Friday or over the weekend — they are winding down, not ramping up. The pacing should reward a single uninterrupted read rather than demanding action. Open at a brisk pace (quick hits), build through the lead and quick takes, then ease into the Leadership Read and Outside In as a slower, more reflective close. Section breathers between the major blocks reinforce this rhythm. Think of it as a short magazine you finish with your coffee, not a task list you work through.

---

## Workflow Architecture (v3.1)

The digest is produced as a five-phase pipeline. Each phase has an explicit input, an explicit artefact as output, and a defined model. Phases run in order. **Drafting may not begin until phases 1–3 have produced their artefacts**, and the run plan from phase 3 is the contract that phase 4 writes against. This is a structural rule — it exists to stop the historical failure mode where the lead is chosen during research (anchoring on the first strong story found) rather than after research (chosen against the full week's candidate pool).

The phases are:

### Phase 1 — Beat sweep (research)

**Goal:** Produce a complete, structured inventory of every story candidate from the previous 7 days, organised by beat. Empty beats are valid results and must be recorded explicitly.

**Subagent type:** `general-purpose`. **Model:** `opus`.

**Inputs:** the date window, the topic priority list (top tier and lower tier), the state file (for `last_lead_topic`, `last_outside_in_company`, `last_leadership_read`, `current_in_practice_season`, `in_practice_history`, `outside_in_history`).

**Process:** for each operational concern (Management & teams, Ways of working, Operating at scale, Banking/fintech/loyalty) run 3–5 targeted queries for the past 7 days. Then run secondary queries for Leadership Read candidates, In Practice candidates, Outside In candidates, the rabbit hole, and any active Priority 0 stories. Capture every plausible candidate, including ones the writer might dismiss — the curation phase makes the cut, not the research phase. **Classify each candidate by the operational decision it triggers, not by surface topic** — a tool release that triggers a budget conversation is "Ways of working", not "AI tooling" (AI is the substrate, not a concern).

**Artefact:** `digest-runs/issue-N/candidates.json` matching the schema in `references/candidates-schema.json`. Every entry includes: `headline`, `source_name`, `source_url`, `published_date`, `beat`, `summary` (2–3 sentences — enough that curation can rank without re-fetching), `so_what` (one sentence on why an engineering leader should care), `tier_guess` (lead-worthy / quick-take-worthy / quick-hit / platform-update / radar / outside-in / leadership-read / in-practice), `uk_me_relevance` (high / medium / low), `narrative_tension` (high / medium / low), `notes` (optional).

**Empty-beat rule:** every top-tier beat must appear in the file. If a beat has no qualifying candidate, it appears with `"candidates": []` and a one-sentence `"null_finding"` explaining what was searched and why nothing qualified. "Nothing came up" is not acceptable — the null finding must reference the specific queries run.

**Hard requirement:** phase 2 will not run until this file exists, validates against the schema, and contains an entry (or null finding) for every top-tier beat.

### Phase 2 — Inventory and rank (curation)

**Goal:** From the candidate inventory, choose the lead, the quick takes, the editorial moment, the platform updates, and the supporting slots. Apply balance rules. This is the highest-judgement step in the pipeline.

**Subagent type:** `general-purpose`. **Model:** `opus`. This is the one phase where we spend up on model quality — the lead-selection failure mode is the single most damaging failure in the digest, and instruction-following plus bias-resistance matter more here than anywhere else.

**Inputs:** `candidates.json` from phase 1, the state file, the editorial spec.

**Process:** Read every candidate. Score each on: "so what" weight, narrative tension, operational-decision fit (does the story trigger a leadership conversation the reader is about to have?), recency, source quality. Then apply the constraints:

- **Audience-fit gate (v3.2 — the primary gate, runs before everything else):** for every candidate, ask "what does the reader do with this on Monday?" If the answer requires the reader to be running the system themselves (patching, deploying, configuring, writing prompts, writing code, executing a CLI command), the story does NOT qualify for the lead or a Quick Take. It may still appear in Week at a Glance or On the Radar if the reader's required action is "be aware" or "delegate." It may NEVER be the lead. **Worked rejection: Issue 10's Mini Shai-Hulud story.** The technical takeaway only lands for someone running the CI/CD pipeline themselves — the reader does not. Correct slot: Week at a Glance, "Action required" tier, one line.
- **Operational-concern lead test (v3.4 — replaces 3-issue lookback, AI-balance check, topic saturation cap):** the chosen lead must connect to one of the four operational concerns (Management & teams / Ways of working / Operating at scale / Banking, fintech & loyalty) with a clear *"what changes for the reader"* takeaway. A tool release alone does not qualify — Cursor adding Composer 2.5 is At a Glance; Cursor changing its pricing in a way that triggers a finance/budget conversation is Quick Take or Lead. The lead must change a conversation the reader is about to have with their team, peers, leadership, or customers. If the chosen lead is a tool release with no associated leadership conversation, the curation has failed — replace.
- **Banking/fintech framing (v3.3):** banking, fintech, and loyalty stories are framed positively as *"the world the reader operates in"* — never as customer-pressure briefings, never as compliance briefings for the reader's own firm. Regulatory stories (FCA, ADGM, PSR, DORA) are evaluated for any slot they earn on operational-impact tests, including the Lead.
- **Lead sanity check (v3.1, retained):** the chosen lead must be in the top 3 candidates ranked across all concerns by combined "so what" + narrative tension + operational-decision fit score. If it isn't, the run notes must justify the choice or the lead is changed.
- **Soft breadth guardrail (v3.4):** across rolling 4 issues, leads should span at least 3 of the 4 operational concerns. Guidance, not a block. If the same concern leads twice running and there's a genuinely stronger story in that concern this week, take it — document the choice in the run plan.
- **AI-substrate ceiling (v3.8):** across rolling 4 issues, no more than 2 anchor slots (Lead, QT1, QT2) can have AI as the **substantive driver**, even when the v3.4 substrate classification puts the story in a non-AI concern. At least one of the top 3 anchors in any given issue should be a story where AI is not the primary force (a security event, a payments-rail shift, a peer-bank engineering decision, a management-craft piece that isn't about AI rollout, etc.). If the only strong material this week is genuinely AI-driven, the run plan documents the call and explains what non-AI candidates were considered and rejected. Editorial guidance, not a hard block.
- **No-repeat-featured-anchor (v1.31):** Any story that was a featured anchor (Lead, QT1, or QT2) in either of the previous 2 issues cannot be a featured anchor in this issue, **even in a different slot**. Cross-issue throughline (v3.8 single-sentence callback inside another article) remains the only re-reference allowed. Example failure: Issue 12 v1.30 used DORA's J-Curve as QT1 a week after it was the Issue 11 v1.25 Lead — that's editorial recycling, not a fresh week. Check the last 2 issues' anchor stories before finalising this issue's three.
- **Within-issue concern diversity (v1.31):** Of the 3 anchor slots (Lead, QT1, QT2), **at most ONE can come from a single operational concern.** Lead + QT1 + QT2 must span at least 2 concerns; spanning 3 is preferred. Example failure: Issue 12 v1.30 had Lead (Banking/fintech/loyalty: FCA) + QT2 (Banking/fintech/loyalty: Stripe SPT) — two of three anchors in the same concern made the issue feel fintech-heavy even though three of four concerns are general engineering and half the issue (In Practice, Leadership Read, Outside In, WAG) covered them. This rule guarantees at least 2 of 3 anchors are from non-fintech-specific concerns most weeks, preserving the digest's general-engineering coverage even as the audience-specific concern stays in rotation.
- **Urgency-vs-awareness classification (v3.2):** every candidate is classified as one of three urgency levels (from the `urgency_classification` field in `candidates.json`):
  - **`act_this_week`** — the reader needs to do something, decide something, or have a conversation about this in the next 7 days. Examples: a real-time customer-impacting outage, an actively-exploited zero-day in widespread use, a regulation effective this week that hits the reader's own organisation.
  - **`decide_this_month`** — the reader has a decision to make in the next 30 days. Examples: a structural industry shift that changes hiring/levelling/team-shape decisions, a major platform deprecation with a 30-day cutover window, a meaningful new framework or model for an ongoing investment decision (e.g. agentic coding rollout strategy).
  - **`general_awareness`** — useful context, no near-term action. The reader "should be aware" but the action is "keep an eye on it" or "plan something for later." Examples: version EOLs months out, minor version bumps, monthly servicing updates, vendor changelogs, industry surveys without a near-term decision attached.

  **The anchor-slot rule:** the Lead, QT1, and QT2 are reserved for `act_this_week` and high-impact `decide_this_month` stories ONLY. Version EOLs, minor version bumps, monthly servicing updates, and most platform updates default to `general_awareness` unless impact is widespread *right now*. **Worked rejection: "Node.js 20 reaches end-of-life" or "Node.js 26 LTS path next October."** These are `general_awareness`. The reader's action is "be aware, plan something." They do NOT lead. They do NOT anchor a Quick Take. They belong in On the Radar or Week at a Glance, sized to one line. The Issues 9 and 10 prominence given to Node.js stories was a direct failure of this gate — it implied a catastrophic urgency the actual story did not have.
- **Format decision falls out of the inventory.** Strong candidates across beats with 5–7 pages of viable material → Standard Weekly. One story dominates and supports a deep dive with 2–3 SVG-worthy data threads → Deep Dive. Thin across the board, or any two of the Light triggers from the format-selection rules apply → Light Edition. Format is a consequence of the candidate pool, not a starting decision.

**Artefact:** `digest-runs/issue-N/run-plan.md`. The plan names the format, names the chosen story for every slot (lead, QT1, QT2, editorial moment, mid-issue accent, platform updates table rows, In Practice piece, Leadership Read, Outside In, Down the Rabbit Hole, On the Radar), and includes a short "why this lead" paragraph and a short "why this combination" paragraph. It also names any candidates considered and rejected for the lead slot, with reasons. Run notes for AI-balance and lead-sanity exceptions live here.

**Hard requirement:** phase 4 writes against this plan and may not silently re-promote, demote, or substitute candidates. Any change after this point goes back to phase 2.

### Phase 3 — Slot detail and component allocation (planning)

**Goal:** Convert the run plan into a per-section brief that the writer can execute against without re-deciding anything. Allocate layout components (sidebars, pull quotes, stats tiles, jargon watch boxes, mid-issue accent, the rabbit hole) so the writer doesn't make these calls inline.

**Subagent type:** `general-purpose`. **Model:** `opus`.

**Inputs:** `run-plan.md` from phase 2, the editorial spec, the state file (for cadence values: `last_feature_date`, `last_stack_date`, `last_rabbit_hole_date` — these gate occasional sections; the v3.5 spec no longer tracks `last_qt_layout`, `last_oi_format`, `last_editorial_moment`, or `last_lead_opener`, since rotation is by within-issue craft, not cross-issue state).

**Process:** for each slot, decide opener style, sidebar usage, jargon-watch terms (the proper-noun scan happens here, not during writing), pull-quote candidates, the editorial moment variant, the QT layout variant, the Outside In format variant, the rabbit hole inclusion. Also flag every term that needs glossing or a Jargon Watch sidebar. Apply the no-repeat rotations against the state file.

**Artefact:** `digest-runs/issue-N/section-briefs.md`. One section per heading, each with: chosen story (from the run plan), opener style, sidebar plan, jargon terms to gloss or sidebar, pull quote candidates, target word count, source URL list. Also a top-level component manifest: which 3–5 layout components are in this issue, why this combination, what's been rotated.

### Phase 4 — Generate (writing)

**Goal:** Produce the full HTML issue against the run plan and section briefs. No editorial decisions are made here — the writer executes the plan.

**Subagent type:** `general-purpose` for Standard Weekly and Light Edition. `general-purpose` with model override for Deep Dive (per the existing skill rule — read `model-catalog/text-models.md` and use the highest-quality text/agent model). **Model:** `opus` for Standard/Light. **Premium tier** for Deep Dive (unchanged from prior versions).

**Inputs:** `run-plan.md`, `section-briefs.md`, the editorial spec, the matching HTML template.

**Process:** generate the issue. Match template CSS exactly. Hit word counts. Apply the rules from briefs (opener style, jargon terms glossed, components allocated). If the writer encounters something that can't be executed against the plan (a source URL that doesn't resolve, a pull quote that doesn't actually exist in the source, a word count that won't fit the chosen layout), the writer **stops and flags it back to the main loop** rather than silently improvising. The main loop decides whether to send back to phase 2/3 or accept a small adjustment.

**Artefact:** the HTML issue file.

### Phase 5 — Review (compliance + lead sanity)

**Goal:** Verify the issue against the compliance checklist *and* the run plan. Catch any mid-draft drift.

**Subagent type:** `general-purpose`. **Model:** `opus`.

**Inputs:** the HTML issue, `references/compliance-checklist.md`, `run-plan.md`.

**Process:** run the full compliance checklist. Then run the lead-sanity cross-check: confirm the lead in the HTML matches the lead in the run plan, the chosen quick takes match, the format matches, the operational-concern lead test still holds (the lead is a leadership-conversation story, not a tool capability release), and the candidates rejected in phase 2 did not silently reappear. Flag every failure. Fix in the main loop or send back to the relevant phase.

**Artefact:** a short pass/fail report. Issue is not delivered until pass.

### Why this shape

The artefacts at each handoff are the load-bearing element — each one is reviewable, the input to the next phase, and each one stops a class of failure (no candidates sheet → anchoring; no run plan → mid-draft drift; no review against plan → silent re-promotion). All phases run on Opus 4.7 in this Claude Code port; curation remains the structurally most important step regardless of model.

---

## Labels (v3.5 — template convention, no longer a separate enforced rule)

The HTML templates encode label hierarchy at the CSS level — Tier 1 structural landmarks (section labels like `THE WEEK AT A GLANCE`, `QUICK TAKES`, `THE LEADERSHIP READ`, `OUTSIDE IN`, cover labels, `KEY TAKEAWAYS`) use all-caps + 3–4px letter-spacing; Tier 2 inline labels (urgency tiers, quick-take header bars, stat labels, badges, the compliance side-note label) use sentence case + 1–2px letter-spacing. **Use the template's existing classes and the rendering is correct by default.** Write Tier 2 labels in sentence case in the HTML content rather than relying on CSS to capitalise them.

---

## Sidebar Layouts (v1.8)

Two sidebar approaches exist, used in different contexts:

### Standard weeklies — floated inset sidebar (`.sidebar-box-float`)

In standard weeklies, supplementary context (methodology notes, a "What we said last week" box, a definition/context panel) should use a **floated sidebar box** that wraps with the opening paragraphs of the article. CSS: `float:right; width:280px; margin:0 0 16px 24px`. This sits alongside the first few paragraphs, then the text flows beneath it naturally. Because the sidebar floats rather than occupying a fixed grid column, the article doesn't look oddly narrow once the reader scrolls past the sidebar content.

The sidebar should contain one `.sidebar-box` with a clear purpose. Do not use it just for decoration — if nothing earns a sidebar, use the standard full-width layout.

### Deep dives — grid sidebar (`.article-with-sidebar`)

The 65% body / 35% sidebar CSS grid layout is reserved for **deep dive issues only**, where articles are long enough to fill both columns without the main body looking under-sized. In deep dives, the sidebar typically carries more substantial content (methodology panels, alert callouts, extended context) that justifies a fixed column.

Do not use `.article-with-sidebar` in standard weeklies — the article body is too short relative to the sidebar, creating an awkward length mismatch once the reader scrolls past the sidebar content.

---

## Section Breather (v1.7)

A **section breather** is a thin horizontal band (48px tall, off-white background `var(--off-white)`, no text content) placed between major editorial blocks to create visual breathing room. It replaces the idea of interstitial pages — too expensive within the 5–7 page limit — with a lightweight pause that supports the weekend magazine pacing.

Place a section breather:
- Between The Week at a Glance and the Lead Article
- Between Quick Takes and Other News

CSS class: `.section-breather`. Never place more than two breathers per issue. They are rhythm markers, not dividers — if you need to separate content structurally, use `<hr class="feature-break">` instead.

---

## Editorial Moment (v3.5 — simplified from v1.7)

A short, curatorial slot placed immediately after the Foreword (and P0 status card, if present), before The Week at a Glance. It should feel like an editorial aside — brief, slightly different in tone — but must not read as though a specific person wrote it (the reader may forward the digest to their team). Pick the variant that suits the week's material, not a rotation tracker.

Three variants:

1. **"Worth a second look"** — a 2–3 sentence editorial aside connecting a theme from the week's news to a broader observation. Not a summary; a perspective. Curatorial emphasis, not personal reflection. Italic teal text, padded box with subtle left border.
2. **"Number of the week"** — a single stat from outside the issue's main stories, with a one-sentence "why it matters" line. Stats-tile component. Good for surfacing a data point that didn't earn full coverage.
3. **"Quote of the week"** — a short, attributed quote from a public figure, conference talk, or blog post that captures the week's mood. Pull-quote style but smaller and more casual.

Vary across issues so the slot doesn't feel mechanical, but pick on substance — not by checking what last week used. CSS class: `.editorial-moment` (container) with variant-specific inner classes.

---

## Topic Priority Order (v3.4)

**Priority 0 — Cross-cutting events.** Anything that simultaneously affects multiple operational concerns and the broader operating environment: hyperscaler outages, military action on infrastructure, actively-exploited zero-days at mass-deployed scale, regulatory changes forcing immediate engineering work across industries. Priority 0 stories always lead — they are never crowded out. Most weeks nothing qualifies. Test: would an engineering leader regret not knowing this on Monday morning?

Every Priority 0 event eventually gets a deep dive. Cover it first as the lead in a standard weekly, track it in subsequent issues, then publish the deep dive when enough information exists to tell the full story.

### Four operational concerns (v3.4 — replaces v2.0 top tier of six)

The digest covers four operational concerns the reader can act on as a leader. **AI is the substrate that runs through all four — not a fifth concern.** Tool releases are not first-order subject matter; the operational decisions they trigger are.

1. **Management & teams** — the everyday craft of running engineering managers and the teams they run: 1:1s, performance conversations, calibration and levelling, career frameworks, hiring loops and interview design, structured onboarding, the manager-of-managers transition, skip-levels, coaching and feedback culture, retention, growth plans. Frame for engineering managers with 1–3 years of experience, including those who came in from non-technical routes (former scrum masters, delivery managers, PMs stepping into eng leadership). When AI shows up here, it's because rollouts are changing what managers manage (calibration of agentic IC output, hiring shifts, role-shape changes, the disappearing junior pipeline conversation).

2. **Ways of working** — how teams deliver, organise, adopt, and shift practice. Delivery metrics (DORA, SPACE), trunk-based dev rollouts, CI/CD adoption, internal developer platforms and golden paths, feature-flag practice, observability strategy as practice, incident-response culture, team topologies, agile and PM-tool shifts, engineering culture. **The whole agentic-coding rollout question lives here:** structuring the team for adoption, what changes about review / refinement / sequencing, what guardrails are in place, what the rollout looks like at month 1 vs month 6. Vendor decisions (CI, observability, incident management, feature flag, internal developer platform) belong here when the angle is *what teams do differently* — not the tool's own release notes.

3. **Operating at scale** — running production systems and the engineering organisations that keep them running. Post-mortems with narrative weight, outage analysis, cascading failure patterns, on-call design, disaster recovery, observability under load. Dependency lifecycle (EOLs, deprecations, vendor sunsets) when the upgrade work is real and the deadline is live, not "months from now." Security stories when active exploitation, mass impact, or live compliance deadlines are present — the framing is urgency and scope, never CVE forensics or exploit mechanics. AI shows up here too: production agents with action authority, agent supply-chain risk (the Mini Shai-Hulud pattern), AI-assisted SRE.

4. **Banking, fintech & loyalty (v1.31 — corrects v3.3 overshoot)** — first-class subject matter is **engineering content** from the patch the reader operates in: bank engineering blogs (Monzo, Wise, Starling, Revolut, ClearBank, Allica, Lloyds, JPMorgan, regional ME banks), broader UK/ME fintech engineering moves, payments-rail engineering work (Visa, Mastercard, faster-payments implementations, agentic-commerce protocols at the engineering level), loyalty / commerce-media tech (Stripe Ledger, neobank loyalty engineering, aggregator APIs, rewards-platform engineering), open banking technical decisions, neobank rollouts. The reader has no other reliable source for what bank engineering orgs and fintech peers are actually building.

   **NOT first-class — does not anchor.** Bank-regulator decisions about banking compliance (FCA / ADGM / FSRA / PSR / HMT / DORA-EU policy actions about payment institutions, EMIs, banks) are **At a Glance / On the Radar / Other News only — never Lead, never featured Quick Take.** The reader is upstream of those institutions; regulator action affecting their customers downstream is information to surface briefly, not a leadership-conversation anchor. v1.30's Issue 12 ran FCA PS25/12 as the Lead — that was the Issue 10 audience-fit failure repeating. The framing rails ("loyalty fintech upstream of payment institutions, here is the conversation with customers") did not redeem the choice. Regulator stories that affect the reader's customers go in On the Radar or as a one-line Other News mention with the customer-conversation context implicit, not spelled out.

   **Loyalty / commerce-media research emphasis (v3.7 — no new section).** Loyalty and commerce-media engineering is the reader's specific vertical but a niche one — some weeks nothing surfaces. The skill handles this in Phase 1 research, not via a dedicated section. Phase 1 must run explicit queries for loyalty / commerce-media engineering each week (Stripe Ledger work, neobank loyalty rollouts, agentic-commerce protocol shifts, aggregator API moves, rewards-platform engineering, Visa/Mastercard loyalty-track work, fintech loyalty case studies) but **does not force a loyalty story into the issue when the substance isn't there**. When a loyalty story surfaces, it takes a normal slot (Quick Take, Outside In, Other News, On the Radar) based on substance. **Wider engineering news must not be blocked or crowded out by a thin loyalty story** — if the choice is between a strong non-loyalty piece and a forced loyalty piece, the non-loyalty piece wins. The patch is given research attention every week, not slot space every week.

### AI as substrate, not a beat (v3.4)

The previous taxonomy treated "AI tooling & adoption" as a co-equal beat. The result: the most active news cycle is AI, so AI dominated the leads, and the corrective mechanical rules (3-issue lookback, AI-balance check, topic saturation cap) papered over the structural problem by rotating AI stories rather than asking the deeper question.

**The new rule: AI is classified by the operational decision it triggers, not as its own category.** A Cursor capability release, a Copilot pricing change, a Claude Code update — each is classified by *what changes for the reader as a leader*:
- "The reader needs to renegotiate finance budgets" → **Ways of working** or **Management & teams**.
- "The reader needs to plan a verification loop for production agents" → **Operating at scale**.
- "The reader's bank customers will start asking about it" → **Banking, fintech & loyalty**.
- "This is a tool capability my staff engineers will evaluate" → **At a Glance**, not first-order subject matter.

**Tool releases are not leads by default.** Cursor 2.5 shipping → At a Glance. Cursor changing its pricing in a way that materially alters how engineering leaders budget AI spend → Quick Take or Lead. The cleanest test: *can the reader bring this to a conversation with their team, their finance partner, their customers, or their leadership team?* If yes, eligible. If no, At a Glance.

### Cross-cutting subject matter (surfaces when warranted)

The following topics surface across the four concerns when the substance is there. They don't have a standing claim on slots:

- **Testing** (manual and automated) — surface when structural shifts apply (org-level QA reshaping, regulatory mandates making test automation a compliance obligation, the challenge of testing AI-generated code at scale).
- **Talent & labour market** — concrete UK/ME-relevant surveys, salary data, AI-driven team-size shifts.
- **Software engineering research** — empirical findings on team structure, delivery patterns, code-review practice the reader can use in their own org.

These do not need to appear every issue. They surface when the substance is there, classified into whichever of the four concerns they best fit.

### Demoted to reference-only treatment

The following never get article treatment. They live in Week at a Glance, Platform Updates rows (when v3.2 condensed rules permit), or On the Radar:

- **Hyperscaler events** (AWS, GCP, Azure) — major outages or budget-affecting pricing changes only, and these qualify as Priority 0 events when they hit, not as a standing beat. Routine launches → At a Glance or omit.
- **Platform / runtime updates** (.NET, Node.js, GitHub changelogs, framework releases) — At a Glance row or On the Radar timeline only. Never articles. The v3.2 anchor-slot rule (`general_awareness` candidates do not anchor) covers this.

### Lead selection (v3.4 — replaces 3-issue lookback, AI-balance check, topic saturation cap)

The lead is the week's strongest story about an operational concern the reader can act on as a leader. The story must change a conversation the reader is about to have with their team, their peers, their leadership team, or their customers.

A story qualifies for the lead when both:
- It connects to one of the four operational concerns with a clear *"what changes for the reader"* takeaway, AND
- It earns the lead on substance — narrative weight, breadth of impact, or a structural shift worth surfacing.

A tool release alone is not a lead. A regulatory event qualifies for the lead if it materially changes the conversation. An engineering management piece qualifies if its framing is fresh enough to land — vs being canonical.

### Soft breadth guardrail (v3.4 — replaces mechanical rotation rules)

Across rolling 4 issues, leads should span at least 3 of the 4 operational concerns. This is editorial guidance for the curator, not a mechanical block. If the same concern leads twice running and there's a genuinely stronger story in that concern this week, take it — the discipline is editorial judgment, not a lookback table. Document the choice in the run plan.

The following rules from earlier versions are **retired**:
- **3-issue lookback** (v2.0) — gone. Replaced by the operational-concern lead test plus the soft breadth guardrail.
- **Topic saturation cap** (v2.0) — gone. With AI no longer a beat, the rule has no target.
- **AI-balance check** (v3.1) — gone for the same reason.

If AI is the substrate of three anchor stories in the same issue and the curator can defend each on operational-decision grounds, that's fine. The discipline lives in the operational-decision test, not in a rotation rule.

---

## Content Rules

- **Curate, don't create.** The digest summarises and contextualises external sources. The foreword and article framing are the only original writing.
- **Real sources, real links.** Every section ends with source attribution. Every link must be a real, working URL. Never fabricate links.
- **Search the web every issue.** Do not rely on training data. Search each topic area individually.
- **Date range: look backwards.** "Run the digest" means the previous 7 days ending today. Cover what happened — never preview what's coming.

### Topic balance (v3.4 — replaces v2.0 Topic Saturation Cap)

The v2.0 mechanical cap ("no more than 2 of lead/QT1/leadership read/editorial moment share the same beat") is retired. With AI no longer a beat, mechanical caps on beat saturation have no target. The replacement is the operational-concern lead test plus the soft breadth guardrail in the Topic Priority Order section: leads span at least 3 of the 4 operational concerns across rolling 4 issues, but on any given week the curator is free to anchor multiple slots in the same concern if the substance is there. The discipline lives in the operational-decision test (does each anchor story trigger a leadership conversation?), not in a rotation rule.

### Source Diversity Rule (v2.0)

No single publication or source can appear in more than **2 sections** of the same issue. A source used in the lead article and referenced in Week at a Glance has used its 2-section allowance — it cannot also serve as the Leadership Read or anchor a quick take.

Additionally, no publication can serve as the **Leadership Read in consecutive issues**. Check `last_leadership_read` in the state file. If Pragmatic Engineer was the leadership read last week, pick a different source this week regardless of quality. Rotate across two pools (v2.5):

- **Named eng-management authors**: Pragmatic Engineer (Gergely Orosz), LeadDev, Lara Hogan, Will Larson, Charity Majors, Camille Fournier, Martin Fowler, Thoughtworks, Kent Beck, James Shore, Jessica Kerr, Marc Brooker, and similar practitioners writing specifically for eng leaders.
- **Engineering blogs from scale-tech and enterprise orgs** (examples, non-exhaustive): Monzo, Stripe, Shopify, Atlassian, Intercom, GitHub, LinkedIn, Netflix, Spotify, Cloudflare, Honeycomb, Figma, Vercel, Duolingo, Canva, Uber, Airbnb, Mozilla — plus banking/fintech-specific blogs when the post is leadership-focused rather than technology-focused.

**Source sector doesn't determine eligibility (v2.5)** — the transferability test from Outside In applies here. A Shopify post on performance reviews, a Netflix post on on-call culture, or an Atlassian post on delivery frameworks are all valid Leadership Reads provided the lesson applies to a UK banking/fintech eng leader. Apply the substitution test: swap the company name for "a large engineering org" — if the lesson still carries meaning, it's eligible.

**Anti-overlap with Outside In (v2.5):** If both Leadership Read and Outside In appear in the same issue, they must not come from the same company. Check the chosen Outside In subject before finalising the Leadership Read.

### "Worth Reading" Test (v2.0)

Every story already passes the "so what?" test (does this change how engineering managers manage, prioritise, buy, or flag risk?). Stories competing for lead article or quick take treatment must also pass the **"worth reading" test**: is there a narrative, tension, or insight that makes this genuinely interesting to read — not just important to know?

Stories that pass "so what?" but fail "worth reading" belong in Week at a Glance, Platform Updates, or On the Radar. These are the reference sections — scan-and-go. The article sections are the magazine sections — they should reward the reader's time with a story, not just information.

Examples:
- A cascading failure post-mortem with a death spiral narrative: passes both tests → article/quick take.
- A Node.js EOL deadline with cloud provider timelines: passes "so what?" but not "worth reading" → On the Radar + Platform Updates table.
- An actively exploited zero-day with a real-world incident behind it: passes both → article/quick take.
- A patch roundup with CVE counts: passes "so what?" but not "worth reading" → Week at a Glance.
  - **Strict date filtering (critical).** Before selecting any story for a lead article, quick take, or quick hit, verify that its primary source was published within the date range. Check the publication date — not the date your search engine returned it.
  - **New-in-window rule.** A story qualifies if (a) the event or announcement occurred within the 7-day window, OR (b) an older story is receiving significant new traction, reactions, or follow-up coverage within the window (e.g. a post-mortem published this week about a two-week-old outage, or a regulatory decision from last month that triggered industry reaction this week). In case (b), the article must explicitly state when the original event occurred and frame coverage around what is new this week.
  - **When in doubt, demote.** If a story's publication date is borderline or unclear, move it to Other News or Recommended Reading rather than giving it lead or quick-take treatment. Stale stories given headline treatment destroy reader trust.
  - **Search query discipline.** When searching for stories, include date constraints in queries (e.g. "this week", the specific date range). After collecting results, audit every candidate story's publication date before shortlisting. Discard results outside the window unless they meet the traction exception above.
- **Pass the "so what?" test.** Every story must answer: does this change how engineering managers manage, prioritise, buy, or flag risk? If not, demote to Other News or Recommended Reading.
- **Connect the dots.** Synthesis is the highest-value thing the digest offers. If two data points are related, state the connection and its implication explicitly — don't leave it to the reader.
- **Cross-issue throughline (v3.8).** When a current story has roots in a prior issue, a **single sentence inside an article** may reference the prior coverage — e.g. *"We covered the J-Curve in Issue 11; the DORA team has now published a follow-up that names the verification tax explicitly."* This is not a new section, not a retrospective slot, and not added for decoration. Use when the connection genuinely adds substance — when the reader benefits from knowing how a story has moved. Optional; some issues will have no throughlines. Builds the sense of an editorial line without taking slot space.
- **Define agent terminology on first use.** "Deploy agents", "agentic AI", "AI agents", and "autonomous agents" cover a wide spectrum in current industry usage — from agentic workflows inside existing tools (Copilot agent mode opening PRs, Cursor running multi-step tasks, a human still triggering and reviewing) to fully autonomous production agents with tool access, memory, and authority to take actions (call APIs, move money, update records) without per-step human approval. Survey and vendor stats routinely lump these together, which inflates deployment numbers and depresses ROI numbers. **When using agent terminology in any article, name which end of the spectrum the story sits at on first use** — e.g. "agent-mode workflows inside developer tools", "production agents with action authority", or "the survey lumps both together, which is part of why the ROI number is soft." If the source itself is ambiguous about which end it means, say so. This is a precision rule — it does not require taking a side on the technology.
- **Explain key terms on first use, every time (v3.7 — broadened from v3.0 to catch lowercase / hyphenated terms).** When an article centres on a specific technology, standard, library, framework, protocol, regulation, named concept, or **specialist neologism** that an engineering leader cannot reasonably be expected to know cold — explain it. Examples that have failed this test in past issues: *Temporal* (Node.js), *DNSSEC* (Cloudflare DNS), *DORA* (the survey, not the regulation), *Octoverse*, *MCP*, *attestation*, *kex* (key exchange), *epoll*, *PSD3*, **`LLM-eval` / `LLM-as-judge` / `funnel-not-a-fork` (Issue 11 v1.25 failure — an ML-team neologism that appeared 8+ times in a section without a single line of gloss)**. Default to **over-informed**. The reader is a director or VP of engineering managing a portfolio of work — they do not have time to open a second tab to find out what the article's central noun is. Two acceptable formats:
  1. **Inline gloss** — a parenthetical or em-dash aside on first use. Example: *"Temporal — a modern replacement for JavaScript's Date object that handles time zones and arithmetic correctly — ships in the standard library for the first time."* Use this when one sentence is enough.
  2. **Jargon Watch sidebar** (`.jargon-watch`, see Layout Components) — use when the article repeatedly references a term that needs more than one sentence to explain, or when two or more such terms appear in the same article. The sidebar is the standard treatment for a lead article whose subject is a named technology or standard.

  **Trigger test (v3.7 — broadened):** before publishing any article, scan it for:
  1. **Proper nouns** (capitalised vendor / product / framework / standard / regulation names) — the classic case.
  2. **Acronyms and abbreviations** — including lowercase or mixed-case ones (`mTLS`, `OIDC`, `eBPF`, `LLM-eval`, `LLM-as-judge`).
  3. **Hyphenated neologisms or specialist phrases that function as named concepts in the article** — e.g. `funnel-not-a-fork`, `tuition-cost-of-transformation`, `verification-tax`, `J-Curve`, `agent-mode`. If the article uses a phrase as a defined concept (often in italics, often repeated), it counts as a term that needs glossing — capitalisation is irrelevant.
  4. **Numerical-frequency trigger**: if a single term appears **3 or more times in the body of one section**, it MUST be glossed inline on first use or carry a Jargon Watch sidebar, regardless of capitalisation. This catches the lowercase / hyphenated case the v3.0 rule missed.

  For each one, ask: *would a busy VP of engineering in another org know what this is from the article alone?* If no, gloss it inline or surface it in a Jargon Watch sidebar. **The bar includes a year-one engineering manager from a non-technical route (former scrum master / delivery manager / PM stepping into eng leadership), per the v3.3 audience definition** — if the term is borderline for them, gloss it. Do not assume familiarity from the previous week's coverage — each issue stands alone.

---

## Write for the Reader

Calibrate depth to delivery managers. Concrete guidance:
- **Security articles:** Give urgency and required action, not CVE forensics or exploit mechanics.
- **Model releases:** Cover cost and tooling impact, not benchmark tables.
- **Open-source releases:** If it doesn't affect the reader's stack, demote or omit.
- **Market analysis:** Tell the story through the engineering impact — don't leave it to the reader to connect dots between funding rounds and their team's roadmap.

---

## Format Selection

**Standard Weekly** — default. Use when there are 2–3+ stories from top-priority areas that **all pass the "worth reading" test**, not just the "so what?" test. Target 5–7 pages (hard limit).

**Deep Dive** — one story dominates. Use when a single event is significant enough to fill an entire issue. No Leadership Read or Outside In. No hard page limit, but visuals must carry weight — a deep dive without SVG diagrams is just a long article.

**Light Edition** — use when top-priority areas are quiet. Target 3–4 pages. Don't promote lower-tier stories to fill space.

**When in doubt, go Light (v3.0).** A thin Standard Weekly is worse than an honest Light Edition. If the candidate stories include only one that genuinely earns a lead (rather than two–three competing for it), or if the second "quick take" is being padded to fill the slot, the issue should be Light. Signs you are about to publish a thin Standard Weekly: (1) the lead is a routine version release with no controversy, surprise, or contested reception; (2) one of the quick takes is a single-source funding number with no follow-on analysis; (3) Outside In is filling the slot rather than illuminating something. When two or more of those signs appear, drop to Light Edition. The reader will trust the digest more for an honest Light week than for a stretched Standard Weekly.

---

## Visual Identity (v1.29 → v1.31 — Volume II made actually visible)

**Why v1.31 reworked v1.29.** The v1.29 refresh shipped a 14px identity strap at 7% opacity dot grid, with a small "Vol. II" in teal text. When Issue 10 (pre-rewrite) and Issue 12 v1.30 (Vol. II debut) were placed side by side, the cover thumbnails were nearly indistinguishable — the refresh was technically present but invisible to the reader. v1.31 raises the contrast on every Vol. II marker. None of the changes are consumer-tech loud; they are *actually visible*.

### Vol. II markers (v1.31)

1. **Identity strap (`.cover-identity-strap`)** — taller (22px padding vs 14px), teal-tinted background, bordered with a deep teal underline. The *"Vol. II"* element is now a **teal pill badge** (`.cis-vol` — solid teal background, navy text, bold), not tracked uppercase text. The eye lands on it first, before the masthead.

2. **Cover tagline (`.cover-tagline`)** — new in v1.31. *"Engineering decisions, every Friday."* in italic teal beneath the masthead. Magazine-standard strapline — signals the publication's stance and marks Vol. II structurally.

3. **Week badge (`.week-badge`)** — restyled to a bordered orange treatment (transparent fill, orange border, larger letter-spacing) rather than a solid orange pill. Pairs visually with the bordered cover badge style and feels more considered.

4. **Cover dot-grid motif** — subtle 40px dot grid at ~7% opacity, retained from v1.29.

5. **Cover variant** — `.cover-lead-stat` OR `.cover-lead-quote`. Choose based on whichever lands the issue's strongest signal harder.

6. **Volume II marking in footer** — `.footer-vol` upgraded to a **teal pill badge** matching the cover identity strap treatment (solid teal background, navy text). Tied visually front-to-back.

7. **Per-section reading time** (`.section-time`) — small `(N min)` next to each major section h2.

8. **Drop caps in Lead + Leadership Read** — automatic via CSS when `.lead-article` / `.mgmt-section` classes are used.

9. **Palette by concern** — Management & teams = orange, Ways of working = teal, Operating at scale = alert-red (when warranted), Banking/fintech/loyalty = green, Outside In = orange.

10. **Editor's note (Issue 12 ONLY)** — `.editor-note` block in the Foreword acknowledging the Vol. II refresh. **Remove from Issue 13 onwards.**

### In Practice header redesign (v1.31)

The v1.30 `.in-practice-header` was a navy bar at 18px padding — visually too similar to a section breather, made it ambiguous whether In Practice was a new section or a pause inside the prior one. v1.31 replaces the navy bar with an off-white header that flows continuously into the off-white `.in-practice` inset body. The whole In Practice section now reads as ONE unit: deep-teal top border + deep-teal left border + off-white background + deep-teal section label + italic theme name + headline + body + "What to try" closing line. Preceded by an explicit `<hr class="feature-break">` so the section start is unambiguous.

### Anchored identity (the v1.31 point)

The Vol. II markers compound. Identity strap (top) + cover tagline (mid-cover) + bordered week badge (lower cover) + footer pill (bottom) means the reader hits a Vol. II signal four times before reaching the foreword. The thumbnail of an Issue 12+ cover should be visibly distinct from any Issue 0–11 cover. If a reader has both up and can't tell them apart, the spec has failed and the markers need raising further.

---

## Standard Weekly Structure

1. **Cover** — full-width dark navy header. Centred masthead (`text-align:center`), date, issue badge, contents grid. Include an **estimated reading time** next to the issue badge (e.g. "7 min read") — calculate from total word count at ~200 wpm, rounded to the nearest minute. Style: `font-size:12px; color:var(--med-gray); letter-spacing:1px`. Include a **lead pull-stat** — the single most striking number from the issue, displayed large (64px Playfair Display, teal) in a tinted band (`rgba(0,180,216,.08)` background with teal top/bottom borders) between the masthead and contents list. The stat needs a one-line context sentence beneath it. This is the hook — pick the number a reader would remember from the whole issue.
2. **Foreword** — one paragraph, 50–80 words. One editorial point — a hook, not a summary. Drop-cap. Never list multiple stories or restate the contents.
3. **P0 status card** — if a Priority 0 story is being tracked across issues, include a `.p0-status-card` here for visual continuity. **Do not use a progress/loading bar** — P0 incidents rarely have a known endpoint, so a bar implies false precision. Instead, use a status card with:
   - A **red "PRIORITY 0 — ONGOING" label** and bold incident title with duration (e.g. "Day 24+").
   - A **status badge** indicating current state: one of `UNRESOLVED`, `DEGRADED`, `RECOVERING`, or `RESOLVED` — styled as a pill (red for unresolved/degraded, orange for recovering, green for resolved).
   - A **compact event log** showing 2–4 key dated milestones as a mini-timeline (date on left, event on right, most recent first). This replaces the loading bar and communicates trajectory without implying a known endpoint.
   - A **one-sentence current status** with source link.
   CSS: `.p0-status-card` with off-white background, red left border (4px), and the compact event log as a simple `<dl>` or flex layout. The card should feel informational and grounded — not alarming or decorative.
4. **Editorial moment** — rotating personality slot (see Rotating Editorial Moment section). Place after the foreword (and P0 status card if present), before The Week at a Glance.
5. **The Week at a Glance** — 5–8 quick hits with category badges, **grouped by visual urgency tiers**. Three tiers, each with a label and distinct styling:
   - **Action Required** (red label, red-tinted background `rgba(220,38,38,.06)`, red left border) — security patches, critical vulnerabilities, anything needing immediate attention.
   - **Worth Knowing** (teal label, light teal background `rgba(0,180,216,.04)`, teal left border) — significant news that informs decisions but doesn't need action today.
   - **Watching** (grey label, no background tint, grey left border) — trends and context worth tracking.
   Each tier gets its own `<ul class="quick-hits">` block preceded by a tier label. This is the best-polished section. Include source links on any item not covered by a full article.
6. **Section breather** — `.section-breather` band between The Week at a Glance and the Lead Article.
7. **Lead article** — full treatment, 300–400 words. Feature opener, floated sidebar (see Sidebar Layouts), or full-width. **Break up the prose with h3 subheadings** — one every 1–2 paragraphs to make the article scannable. When the article involves data from multiple sources, include an **inline SVG chart** (bar, grouped bar, or line) using the digest colour palette. Visuals must be actual `<svg>` elements. The chart should tell the story at a glance for readers who won't read every paragraph. **Include a mid-article pull quote bar** (`.pq-bar`) highlighting the core insight or most striking sentence from the story. This is the default for the lead article — omit only when no quote genuinely earns it. When content describes a clear sequence (phases, steps, a progression), render it as an explicit numbered list with spacing rather than burying the sequence in prose.
8. **1–2 quick takes** — pick the layout variant that suits this week's material (no cross-issue rotation tracker):

   **QT-A: Equal grid** (default) — two-column grid, equal-width cards. Each column is a card with:
   - A **coloured header bar** across the top (full-width, 10px vertical padding, white text, 11px uppercase tracking) — use topic-appropriate colours (e.g. orange for Banking/Fintech, red for Security Alert, teal for DevEx).
   - A **bold anchor stat** pulled out at the top of the card body (36px Playfair Display, coloured to match the header bar) with a small uppercase context label beneath it.
   - Article text below, 150–250 words each.
   CSS: `.two-col` (existing class).

   **QT-B: Featured + compact** — one quick take gets ~60% width with full article treatment; the second gets ~40% with a tighter, punchier format (anchor stat + 2–3 sentences + takeaway line, no subheadings). Best when one quick take is clearly stronger than the other.
   CSS: `.two-col.qt-featured` — first child gets `flex: 3`, second gets `flex: 2`.

   **QT-C: Single full-width** — one quick take spans the full content width. Use when only one story earns quick-take treatment (the other would be padding). Do not force a second card for symmetry. 150–250 words, same card structure as QT-A but full-width.
   CSS: `.qt-single` — single card, no grid.

   **All variants share these rules:**
   - Rotate which additional components appear inside cards (pull quote, callout box, stats row — not the same every time).
   - **End each quick take with a bold “The takeaway” line** — one sentence in `<p><strong>` that states the implication for engineering leaders. This is not an action item or instruction — it states what has changed and why it matters.
9. **Section breather** — `.section-breather` band between Quick Takes and the mid-issue accent (or Other News if no accent).
9a. **Mid-issue accent** — a small visual pattern-breaker between Quick Takes and Other News. Optional — omit when nothing earns it. Pick the variant that suits this week's material; no cross-issue rotation tracker.
   - **Number band** (`.mid-accent-band`) — full-width tinted band (off-white background, teal top/bottom borders) containing one striking stat (48px Playfair Display, teal) plus a one-line context sentence. The stat should come from a story already covered — emphasis, not new content.
   - **Mini-highlight** (`.mid-accent-highlight`) — compact 2–3 sentence highlight box (off-white background, subtle teal left border) surfacing a detail too interesting to bury in Other News. 14px, italic, with source link.
10. **In Practice** (v3.8 — moved forward from position 13) — standalone craft section, peer of The Leadership Read. Full-width `.in-practice-header` bar above the off-white `.in-practice` inset box (deep-teal 4px left border). **Placed here in the news block so the three long-form sections (In Practice / Outside In / Leadership Read) are not clustered at the back of the issue** — the "section spread" rule, see below. Appears in roughly 9 of every 10 issues; omitted only when source material is genuinely thin. See § In Practice for full rules including the v3.0 substance floor and the v3.5 three-qualities filter.
11. **Other News This Week** — one sentence + source link per item. 3–6 items. Tighter vertical padding than full sections (`padding-top:32px; padding-bottom:32px`).
12. **Platform Updates / What's worth knowing this week** (v3.2 — condensed) — **0 to 2 rows MAX**. Include ONLY items where impact is widespread right now OR the audience needs to make a near-term decision (`act_this_week` or high-impact `decide_this_month`). Routine version bumps, monthly servicing updates, EOL announcements months out, and standard platform changelogs do NOT belong here. Most weeks this section will have one row; some weeks it will not render at all. When rows are present: three columns (**Status**, **Platform**, **What Changed**), colour-coded status dots (red / amber / green), tighter padding.
13. `<hr class="feature-break">`
14. **Outside In** — uses the format menu (see Outside In section). Default placement is here; Format B (hero) places before The Leadership Read; Format C (compact inset) can place earlier after the lead.
15. **The Leadership Read** — navy background (`.mgmt-section`). The slow, reflective close to the issue. Only when source material earns it; omit if nothing strong. Max two consecutive issues without one.
16. `<hr class="feature-break">`
17. **On the Radar** — **timeline treatment** with a vertical connector. Each item is a row with three parts: (1) a **date block** on the left (month abbreviation in small caps + day number in large 28px Playfair Display), (2) a **connector** column with a dot (12px circle, teal) and a vertical connecting line between items, (3) the event description on the right. Urgent/deadline items get red dot and red day number styling (`.radar-item.urgent`). Deadlines and required actions still come first, then events.
18. **Recommended Reading** — linked list.
19. **Footer** — includes an **archive bar** below the next-edition line. The archive bar shows the last 5 issues by date and format type as pill-shaped badges (`.archive-pill`), with the current issue highlighted in teal (`.archive-pill.current`). If no previous issues exist yet, show only the current issue pill.

**Section spread (v3.8):** the three long-form sections (*In Practice*, Outside In, The Leadership Read) MUST NOT all sit at the back of the issue. **At least one** is placed mid-issue, in the news block. The default is *In Practice* at position 10 (above), with Outside In and The Leadership Read at positions 14–15. Variants that also satisfy the rule: Outside In Format C (compact inset) placed after the lead, with *In Practice* and The Leadership Read both at the back; or Outside In Format A at the back with The Leadership Read also at the back AND *In Practice* mid-issue. The rule is: three long-form pieces stacked back-to-back creates a reading wall the spec wants to avoid. Spread them out.

**Page count enforcement:** If the draft exceeds 7 pages, cut in this order: (1) shorten/remove Outside In, (2) drop the Feature or Down the Rabbit Hole, (3) demote weakest article to quick take or Other News, (4) tighten lead article to 400 words, (5) shorten Leadership Read toward its 400-word floor (do not go below — see Leadership Read substance floor v3.0.1; omit cleanly if it cannot meet the floor). *In Practice* is not a page-cut lever — it either earns its 300–450 words or it is omitted entirely with the standard "In Practice returns next week" note.

---

## Feature Article (v2.1 — occasional)

A longer-form piece (400–600 words) that earns deeper treatment than a quick take but sits below the lead in editorial weight. Appears every **2–4 issues** — not every week. Track `last_feature_date` in the state file.

### When to include

- A story has genuine narrative depth — multiple angles, a tension worth exploring — but isn't dominant enough to be the lead.
- A trend has been building across several weeks and deserves a consolidated analysis.
- A topic benefits from more context than a quick take allows (e.g. a regulatory shift, a structural industry change, an engineering practice evolution).

### When to omit

- Nothing earns the extra space. Do not force a Feature to fill the slot.
- The lead article already runs long and the issue is near the page limit.
- The last issue already included a Feature — minimum 1-issue gap.

### Placement

After the quick takes (between items 8 and 9 in the standard weekly structure). The Feature sits in the transition zone between the fast-paced news sections and the quieter back sections — it rewards the reader for staying with the issue.

### Format

- **Section label**: "FEATURE" in teal, small-caps, 11px, 3px letter-spacing (Tier 1 label).
- **Headline**: Playfair Display, 28px, navy. Should read as magazine-quality — not a news headline.
- **Body**: 400–600 words. h3 subheadings every 1–2 paragraphs. At least one visual element: pull quote bar, stats row, floated sidebar box, or inline SVG if data warrants.
- **End with a bold "The takeaway" line** — same format as quick takes.
- CSS: `.feature-article` — off-white background (`var(--off-white)`), teal top border (3px), `padding: 40px 48px`.

### Topic rules

- The Feature topic must differ from the lead article topic. It contributes to topic diversity, not concentration.
- Subject to the same source diversity and topic saturation rules as other sections.

---

## The Stack (v2.1 — occasional)

A technical-for-managers explainer. Takes a specific technology, architecture pattern, or engineering concept and explains it clearly for readers who manage teams that use it but don't write the code themselves. Appears every **3–5 issues** — less frequently than the Feature. Track `last_stack_date` in the state file.

### Purpose

Engineering directors often encounter technical decisions without full context. The Stack bridges that gap — not with a tutorial, but with the minimum a manager needs to ask the right questions, spot the risks, and understand the trade-offs.

### When to include

- A technology is in the news this week and managers would benefit from a grounded explainer (e.g. a major architectural pattern shift, a widely adopted tool's internals, a concept driving engineering decisions).
- The topic connects naturally to another story in the issue — the explainer adds depth to something the reader just encountered.
- The subject can be explained in 300–500 words without oversimplifying.

### When to omit

- Nothing in this week's news warrants an explainer. Do not write one speculatively.
- The last issue included a Stack — minimum 2-issue gap.
- The issue is already near the page limit.

### Placement

Flexible — after the Feature (if present), or after the quick takes, or after the lead article if it directly relates. Place it where it creates the most natural reading flow with the surrounding content.

### Format

- **Section label**: "THE STACK" in deep-teal, small-caps, 11px, 3px letter-spacing (Tier 1 label).
- **Headline**: Playfair Display, 24px, navy. Phrased as a concept, not a question (e.g. "Service Mesh" not "What Is a Service Mesh?").
- **Subtitle**: One sentence explaining why this matters now. `font-size: 15px; color: var(--body-text); font-style: italic`.
- **Body**: 300–500 words. Structured in three implicit parts: (1) what it is, (2) why it matters for your teams, (3) what to watch for. Use h3 subheadings. No code blocks — this is for managers.
- **One visual**: either a simple SVG diagram (architecture sketch, flow, comparison) or a definition/context box. The visual should make the concept click.
- CSS: `.the-stack` — white background, deep-teal left border (4px), `padding: 32px 40px`. Compact feel — narrower than the Feature.

### Content rules

- **Never condescending.** Assume the reader is intelligent but time-constrained. They don't need to know how to implement it — they need to know what it means for their teams.
- **No jargon without explanation.** If a term is necessary, define it inline.
- **Anchored in the current issue.** The explainer should connect to something in this week's news, not exist in isolation.
- **The manager test (v2.5).** Before writing a Stack entry, articulate what the reader will do differently *as a manager* after reading it — what question they'll ask their teams, what risk they'll spot in a roadmap, what trade-off they'll recognise in a vendor or build-vs-buy review. If the honest answer is "understand how it works technically," reject — that's an IC concern and The Stack is not the place for it. If the answer is "know when to ask their staff engineer about X, recognise when a proposed architecture is taking on a risk their team can't absorb, or ask better questions when evaluating a vendor pitch," include. This is a guardrail against drift toward IC-level material and reinforces the existing "why it matters for your teams" and "what to watch for" structure.

---

## Down the Rabbit Hole (v2.1 — recurring sidebar)

A small, recurring sidebar that points to a single fascinating link for readers who want to go deeper on a tangent from the week's coverage. Think of it as the "if you found that interesting, try this" pointer.

Track `last_rabbit_hole_date` in the state file.

### When to include

- A story covered in the issue has a natural tangent — a research paper, a long-read, a conference talk, a historical parallel — that rewards curious readers.
- The link is genuinely good. This is a quality signal: if the Rabbit Hole is consistently excellent, readers learn to trust it.
- Every **1–2 issues**. This is a recurring element, not occasional — but omit rather than force.

### When to omit

- Nothing earns inclusion. A weak Rabbit Hole damages the section's credibility more than an absence does.

### Placement

Flexible — as a sidebar box floated within any article section, or as a standalone compact element between sections. Should feel like a natural aside, not a formal section. Recommended default: floated within or immediately after the section whose story it connects to.

### Format

- **Label**: "DOWN THE RABBIT HOLE" in teal, 10px, uppercase, 2px letter-spacing (Tier 2 label).
- **Title**: The name of the linked resource. Playfair Display, 16px, navy. Linked.
- **Body**: 2–3 sentences maximum. What it is, why it connects, why it's worth the reader's time.
- **Source type tag**: A small badge indicating the format — "Paper", "Talk", "Long-read", "Thread", "Podcast", "Book excerpt", "Documentary", or "Speech/filing" (for regulator speeches, published filings, or similar primary documents). Styled as a pill (`.rabbit-hole-type`) in light teal. The widened list (v2.5) signals that the rabbit hole net extends beyond tech publishing channels — a regulator's speech, a documentary segment, or a book chapter can all carry the right tangent when the link genuinely rewards curious readers.
- CSS: `.rabbit-hole` — compact box (max-width: 280px when floated, full-width when standalone), off-white background, teal left border (3px), `padding: 16px 20px`, `font-size: 13px` body text. When floated: `float: right; margin: 0 0 16px 24px`.

### Content rules

- **One link only.** The value is curation — a single strong pick, not a reading list.
- **Must connect to a story in this issue.** Not a random recommendation.
- **No AI-generated content or summaries of things the reader could just click.** The 2–3 sentences sell the click; the value is in the destination.

---

## Article Openers (v3.5 — simplified from v2.1 Entry Pattern Rotation)

Article openers set the rhythm of the issue. When every article opens the same way — stat, context, analysis — the reader's attention flattens. **Vary opener styles across the articles in this issue.** Pick whichever opener best suits each story; don't track which opener "the lead used last week" — that's craft-by-tracker rather than craft-by-judgement.

### Opener catalogue

1. **Stat-first** — open with a striking number, then context. Best when one data point captures the story.
2. **Quote-first** — open with a direct quote from a named source. Best when someone said something worth leading with.
3. **Summary-first** — open with a one-sentence thesis, then unpack. Best for complex stories needing a frame.
4. **Narrative-first** — open with a scene, anecdote, or temporal hook. Best for post-mortems, incidents, chronological stories.

### Rule (one rule, not four)

**No two articles in the same issue open the same way.** Within-issue variety is the rule. Cross-issue tracking is not — pick the opener that fits the story.

---

## Deep Dive Structure

Cover (red gradient bar, Deep Dive badge) → Foreword (two short paragraphs: what happened + why it warrants a full issue) → How to Read This guide (2 min / 10 min / 30 min paths) → P0 status card if story is ongoing → Executive summary → Source sections with visuals (**minimum 3–4 inline SVGs per deep dive, bumped from 2–3 in v1.30**) → Counterpoint (if contrasting data exists) → Case study (if a real-world example anchors the story) → Lessons & implications → **Meanwhile...** (structured catch-up on other news) → On the Radar → Recommended Reading → Footer.

### Meanwhile... (v2.1 — deep dives only)

Deep dives consume the entire issue with one topic. But the week's other news didn't stop. **Meanwhile...** is a structured catch-up section that acknowledges what else happened — giving readers the scan-and-go coverage they'd normally get from a standard weekly's front sections.

#### Purpose

Prevent deep dive readers from feeling they missed the week. The section is explicitly secondary to the deep dive — compact, fast, informational. It replaces "Other News This Week" in the deep dive structure (Other News is folded into Meanwhile).

#### Placement

After Lessons & Implications, before On the Radar. This positioning preserves the deep dive's narrative arc — the reader completes the investigation, gets the verdict, and then surfaces to see what else happened.

#### Format

- **Section label**: "MEANWHILE..." in teal, small-caps, 11px, 3px letter-spacing (Tier 1 label).
- **Intro line**: One sentence in italic, e.g. "While we were deep in [topic], the rest of the week kept moving." Sets the tone — wry, quick, no fuss.
- **Items**: 4–8 news items, each structured as:
  - **Bold headline** (one line)
  - **One sentence** of context — what happened and why it matters
  - **Source link**
- **Grouping**: Items grouped into two categories with subtle labels:
  - **"Would have led"** — the 1–2 stories that would have been the lead or quick takes in a standard weekly. These get slightly more space (2–3 sentences each) and a teal left border.
  - **"Also this week"** — the remaining items at standard quick-hit density (one sentence each).
- **Layout**: Two-column grid (`.meanwhile-grid`) for the "Also this week" items. "Would have led" items span full width above the grid.
- CSS: `.meanwhile-section` — off-white background, `padding: 40px 48px`, teal top border (2px). `.meanwhile-lead` for the "would have led" items. `.meanwhile-grid` for the compact two-column items.

#### Content rules

- **No analysis.** Meanwhile items are informational only — what happened, one sentence of context, link. The deep dive is where the editorial voice lives.
- **Date-range rules still apply.** Every Meanwhile item must have a primary source from the 7-day window.
- **"Would have led" is honest.** Only flag 1–2 stories that genuinely would have anchored a standard weekly. Don't inflate.
- **Do not duplicate.** If a story is already referenced in the deep dive (e.g. as a passing mention in a source section), it should not also appear in Meanwhile.

### Deep Dive Stat Discipline (v1.9.2)

Deep dives examine one phenomenon from multiple angles. The same data points naturally recur — but restating them with full context each time creates repetition that dilutes each section's unique value. These rules prevent that.

1. **Stat budget rule.** Each headline stat (a specific number + its meaning) gets full context exactly once, in the section where it is most impactful — its "home section." Every subsequent reference uses shorthand that assumes the reader already has it. Examples:
   - First use (home section): "Only 29% of organisations report significant ROI from generative AI."
   - Later reference: "Writer's 29% figure" or "the deployment-to-ROI gap" — no re-explanation.
   - Wrong: re-stating "Only 29% of organisations see meaningful ROI" in a second section.

2. **Executive Summary as index, not preview.** The executive summary frames the central question and maps what each section covers. It should introduce the paradox or tension — not pre-digest every stat from every source. Reference the scale of the data ("four studies, 3,300+ respondents") and the core tension, then let source sections deliver the numbers. If a stat appears in the executive summary at full weight, it has already used its one full-context appearance.

3. **Source sections own their own data.** Each source section introduces and fully contextualises its own study's findings. It must not cross-reference stats from other source sections in body text — that is the Counterpoint's job. A source section may reference another source only to hand off a question (see rule 5), never to re-present its numbers.

4. **Counterpoint assumes the reader.** By the time the reader reaches the Counterpoint, they have read both source sections. The Counterpoint's value is the reconciliation argument — explaining why apparently contradictory data doesn't actually contradict, and what the synthesis means. It should not re-present stat boxes that replay numbers already shown in source sections. If a comparison grid is used, it should contain no more than 2–3 metrics per column (the most structurally important ones), not a full replay of each source's data. The body text should drive the analytical leap, not summarise what came before.

5. **Thread forward, don't repeat back.** Each section's closing sentences should hand off a question or tension that the next section picks up. Source 1 might end with "but what does this look like at the individual level?" — Source 2 answers that. Source 2 might end with "so what's missing structurally?" — Source 3 answers that. This throughline replaces stat repetition as the connective tissue between sections.

6. **Lessons reference, don't re-introduce.** Each lesson in the Lessons & Implications section can name a stat, but must not re-explain it. "The 67% breach finding makes this urgent" — not "Sixty-seven percent of organisations reporting suspected data breaches from unapproved AI tools confirms..." The reader has the context; the lesson adds the interpretation.

7. **Stat home section assignments.** When planning a deep dive, assign each headline stat to one home section before writing. Document the assignments in the research brief so that the writing phase respects them. Typical assignments:
   - Cover/foreword: the single lead stat only (displayed in the lead stat band)
   - Executive summary: the central tension framed without full stat context
   - Source 1: all Source 1 stats at full weight
   - Source 2: all Source 2 stats at full weight
   - Source 3: all Source 3 stats at full weight
   - Counterpoint: synthesis only — shorthand references, no new full-context stats
   - Case study: its own unique data points
   - Lessons: shorthand references only

---

### Deep Dive Cover

The deep dive cover is deliberately different from the standard weekly. It is **left-aligned** with an investigative editorial feel, not centred.

1. **Red gradient bar** — `linear-gradient(90deg, alert-red, coral, alert-red)` across the top (5px).
2. **"Deep Dive" badge** — red background pill, top-left.
3. **Left-aligned headline** — `font-size: 52px`, `max-width: 700px`, flush left. This is the visual signal that the reader has entered a different format.
4. **Subtitle** — one sentence framing the central question. `font-size: 18px`, `rgba(255,255,255,.6)`, left-aligned.
5. **Scope indicator** — a row of 3–4 large stats (Playfair 36px, alert-red) showing the issue's reach: number of studies, sections, engineers surveyed, sources. Separated from the headline by a subtle `rgba(255,255,255,.1)` top border.
- **Quick take layouts** — QT-A (equal grid, `.two-col`), QT-B (featured + compact, `.two-col.qt-featured`), QT-C (single full-width, `.qt-single`). Pick the layout that suits this week's material.
- **Mid-issue accent** — number band (`.mid-accent-band`) or mini-highlight (`.mid-accent-highlight`). Between Quick Takes and Other News. Optional — omit when nothing earns it.
- **Outside In formats** — A: full feature (`.outside-in-section`), B: hero moment (`.oi-hero-band`), C: compact inset (`.oi-compact`). Pick the format that suits this week's material; omitting is always an option.
6. **Lead stat band** — full-width tinted band (`rgba(220,38,38,.08)` background) beneath the scope row. One large stat (56px Playfair, alert-red) with a context sentence in `rgba(255,255,255,.6)`. This is the single most memorable number from the entire issue.

### Deep Dive Section Markers

Each major content section gets a **section marker** — a small red circle with the section number (1 of N) displayed above the section label. This gives the reader a sense of position within the issue. The progress bar at the top of the page reinforces this with a red-to-coral gradient that fills as the reader scrolls.

### Deep Dive Source Sections — Distinct Layouts

Each source analysis section should use a **different layout treatment** to create visual variety and signal to the reader that they are encountering a new voice/dataset. Rotate between:

- **Article with sidebar** (`.article-with-sidebar`) — 65% body / 35% sidebar. Use sidebar boxes (`.sidebar-box`) for methodology, context panels, or alert callouts (`.sidebar-box.urgent` for burnout/risk signals with red border).
- **By-the-numbers opening** (`.by-the-numbers`) — teal-bordered panel with 3–6 stat cells opening the section before any prose. Good for studies with strong headline numbers.
- **Standalone with inline SVG** — full-width prose broken by a prominent SVG chart (horizontal bars, grouped bars, line chart). Good for data-heavy sources where the visual tells the story.

Never use the same layout for two consecutive source sections.

### Deep Dive Counterpoint Section

When contrasting data exists (one source says X, another says Y), give it a dedicated counterpoint section with visual weight:

- **Green left border** (5px `accent-green`) and off-white background to visually separate it from the main narrative.
- **"Counterpoint" pill badge** — green background, navy text, rounded.
- **Comparison grid** (`.comparison-grid`) — two-column layout. Left column (`rgba(220,38,38,.04)` tint, red labels) for the main narrative data. Right column (`rgba(0,212,170,.04)` tint, green labels) for the contrasting data. Each column shows 2–4 metrics with large serif numbers.
- **Reconciliation** — always include a subheading explaining why the data doesn't necessarily contradict. The editorial value is in the synthesis.

### Deep Dive Case Study Section

When a real-world incident anchors the story (e.g. a company outage, a policy change), separate it into its own **case study** section:

- **"Case Study" section label** in alert-red.
- **Timeline treatment** (`.timeline-box` + `.timeline-track`) — vertical left border with date entries. Colour-code dates: `.tl-red` for critical events, `.tl-navy` for responses, `.tl-teal` for recovery.
- **Pull quote** from the incident (internal memo, public statement, etc.).

### Deep Dive Lessons Section

The lessons section uses a **navy background** (`.lessons-section`) to visually close the issue with editorial authority.

- **Verdict callout** (`.verdict-box`) — opens the section. Red-tinted box with `THE VERDICT` label and a one-paragraph italic editorial verdict. This is the issue's thesis statement.
- **Subsection headings** — teal-coloured `.Source Sans 3` (not Playfair) for a more editorial feel within the navy background.
- **Key takeaway box** (`.key-takeaway`) — closes the section. Dark translucent background with teal arrow-prefixed bullet points summarising the issue's implications.

### Deep Dive On the Radar

Deep dives use a **compact two-column layout** for On the Radar to avoid the bottom of the issue feeling structurally identical to a standard weekly:

- **On the Radar** — compact two-column list (`.radar-compact`). Each item shows a serif date (`.rc-date`) and bold event + one sentence. Urgent items use `.rc-date.urgent` (red).

Note: "Other News This Week" is replaced by the **Meanwhile...** section in deep dives (see above). Do not include both.

### Deep Dive Footer

Same structure as the standard weekly footer — masthead, date line, next edition, and archive bar with pill badges. The current issue pill uses the `current` class.

---

## Light Edition Structure

Cover → Foreword (one paragraph) → Quick hits (5–8, grouped by urgency) → One quick take if warranted → Leadership Read (if strong — light weeks are a good opportunity) → Outside In (if relevant) → On the Radar → Footer.

---

## Foreword Rules

- One paragraph, 50–80 words. Two paragraphs only for deep dives.
- One editorial point. Find the thread connecting the week — don't list stories.
- Never use "meanwhile", "elsewhere", or "also this week" — that's a summary.
- Never restate the cover contents in prose.
- Let the week's tone come through: urgent, wry, cautious, excited — vary it.
- **No AI-default framing (v2.9).** The digest covers AI tooling as one beat among many — not as the default protagonist whose absence needs explaining. The foreword must never frame the week relative to AI's quietness or noisiness. Banned framings include "a quiet week on the AI front, but…", "with AI taking a breather…", "no major AI moves this week, so…", "setting AI aside for a moment", or any structurally similar opener that anchors the week's identity to whether AI made news. Lead the foreword on what *did* happen, on its own merits. If AI tooling genuinely dominated the week and earned the lead, frame it directly; if it didn't, simply don't mention it. The same rule applies in reverse: don't frame quiet AI weeks as a relief or a victory either — that's still anchoring on AI.

---

## In Practice (v3.5 — first-person operational writing)

A compact section surfacing **first-person operational writing from named engineering leaders at named organisations** — not editorial-team think pieces, not abstract frameworks, not vendor content marketing. Framing: *"someone at another organisation tried this, here's what they learned, here's what's transferable"* — not "here's how X should work in principle."

### The three required qualities (the filter — any source qualifies if all three pass)

1. **Source identity — a named operator at a named organisation.** A real person who did the thing they're writing about. Diogo Matias at Monzo. Lara Hogan at Wherewithall. Will Larson at Carta. Disqualified by name pattern: "Pensero editorial team," "the engineering team at X," anonymous corporate bylines, vendor blog posts without a human author. The author must have been in the room when the thing happened.
2. **Journey not framework.** The piece is operational, lived, and reflective. Pattern-match: *"How we…"*, *"What we learned when…"*, *"Why we changed…"*, *"Expectations for…"*, *"We tried X and here's what happened."* Normative pieces ("here's how X should work," "the right way to do Y") do NOT qualify, regardless of source. If the post would survive being written by an analyst who has never run an engineering organisation, it is the wrong post.
3. **Technical content at the level of implications, not instructions.** A piece can be about test automation, agentic coding adoption, observability re-architecture, deploy pipelines, calibration, hiring loops — but the takeaway must be transferable to a reader who does not run the system themselves. **The reader's filter:** *"I won't be writing any of them, but it gives an insight of what went wrong and what didn't, what they learned."* If the only useful takeaway requires running the system, the piece belongs to lead developers and architects, not a Friday-morning magazine.

**Source policy (v3.5 — replaces the v3.2 strict whitelist):** any source passes if all three qualities are met. Strong candidate pools include named eng-management authors (Pragmatic Engineer, LeadDev, Lara Hogan, Will Larson, Charity Majors, Camille Fournier, Marc Brooker, Patrick Kua, Cate Huston) and scale-tech / fintech engineering blogs (Monzo, Wise, Starling, Revolut, Stripe, Cloudflare, GitHub, Shopify, Spotify, Intercom, Airbnb, Figma, Atlassian, LinkedIn, Netflix, Twilio, etc.). Bank engineering blogs in particular are first-class given the v3.3 audience definition — when a Monzo / Wise / Starling / Revolut engineer publishes a piece that passes the three qualities, it's the strongest possible *In Practice* fit.

### The Monzo archetype (calibration reference, not a source restriction)

The section's voice is calibrated against three specific Monzo engineering blog posts:

1. **[Expectations for an Engineering Manager at Monzo](https://monzo.com/blog/expectations-for-an-engineering-manager-at-monzo)** (Diogo Matias) — a manager-of-managers writing TO EMs about how he expects them to drive their area. First-person, plain, operational. Every section is one transferable claim.
2. **[How Monzo Designers are shipping safer, faster product improvements](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements)** — named operators describing shipping production code with AI tooling, the guardrails, what changed about engineer-designer collaboration. Technical content at implication level.
3. **[Monzo's transparent engineering progression framework](https://monzo.com/blog/2018/06/25/monzos-transparent-engineering-progression-framework)** (evergreen) — how they rolled out a structural org change, what it's for, what it isn't for.

A candidate piece doesn't need to be from Monzo — it needs to pattern-match the voice of these three. The whitelist is retired; the archetype is the calibration.

### Themed seasons (year-round rotation)

*In Practice* runs in themed seasons of 3–4 issues each, building depth on one craft theme. Two seasons are calendar-anchored to the engineering performance cycle:

- **Mid-April → mid-May (4–5 issues): Year-end performance cycle** — calibration, difficult performance conversations, promotion & growth plans.
- **Mid-October → mid-November (4–5 issues): Mid-year cycle (lighter touch)** — interim conversations, recalibration.

The rest of the year rotates through other craft themes (3–4 issues each). Theme pool: 1:1s and skip-levels · hiring loops & interview design · new-manager survival · feedback culture · coaching & growth conversations · manager-of-managers transitions · retention conversations · career frameworks & ladder design · onboarding · async rituals.

### Format

- **Section label**: `IN PRACTICE` (Tier 1, deep-teal, all caps), with an italic teal theme name underneath (e.g. *"Performance conversations"*, *"Hiring loops"*). No week count.
- **Headline**: Playfair Display 22px navy.
- **Author + outlet line**: 12px Source Sans 3 (e.g. *"Diogo Matias · Monzo, March 2026"*).
- **Body**: 300–450 words. Summarise the central insight, frame for a working engineering manager, link out. Never plagiarise. Never write original advice.
- **Substance floor**: *In Practice* must be valuable on its own, even if the reader never clicks through. The summary must include (1) the specific framework / model / claim the author makes, named — not gestured at; (2) at least one concrete example, mechanism, or distinction; (3) the takeaway the reader gets without clicking. Strip-link test: after removing the source link, does the section still teach the reader something specific? If no, expand or omit.
- **Optional pulled quote** when the source has a sharp line.
- **Closing line**: bold **"What to try"** plus one peer-level sentence (e.g. *"Before your next 1:1 with an EM, ask which of Matias's nine expectations you'd score them lowest on — then consider whether that's a gap they can see."*). Inform/contextualise, never prescribe.
- **Visual hierarchy**: full-width `.in-practice-header` bar above the off-white `.in-practice` inset (deep-teal 4px left border, 28px/36px padding). Separated from Platform Updates by `<hr class="feature-break">` or `.section-breather` so it reads as a peer section to the Leadership Read, not a panel inside Platform Updates.

### Source rules

- **Recency window**: 30 days for fresh writing; evergreen pieces are explicitly eligible when recent material on the season's theme is thin. Tag evergreen issues with a small *"a classic worth revisiting"* sub-label.
- **Cut the season short rather than drag**: if a season's third or fourth issue has no qualifying candidate, end the season early and start the next theme.
- **Skip cleanly when needed**: if a week has no qualifying piece, omit with a footer note (*"In Practice returns next week"*). Don't substitute a Pensero-style abstract framework piece to fill the slot.
- **Explicit disqualifiers**: vendor content marketing; abstract frameworks dressed as practice (the Issue 10 Pensero failure mode); editorial-team / "team" bylines without a named operator; normative "here's how X should work" pieces; posts where the only takeaway requires running the system; LinkedIn-style personal-brand content; AI-generated thought pieces.
- **No-recycle rule**: track every piece used in `in_practice_history`. The same piece cannot appear twice across the run.
- **Anti-overlap with Leadership Read**: *In Practice* and the Leadership Read must not share an author or outlet in the same issue.

### Worked examples

- *Performance conversations* season, week 2: **Diogo Matias' "Expectations for an Engineering Manager at Monzo"** — named operator, journey format, implication-level technical content. Summarise his framing on driving the area, delivering impact, psychological safety; pull one quote (e.g. *"make bad news flow much faster than good news"*); link out. **What to try:** *"Before your next 1:1 with an EM, ask which of Matias's nine expectations you'd score them lowest on."*
- *Agentic coding rollout* season, week 1: **Monzo designers shipping production code with AI tooling.** Named operators, journey format, implication-level (mandatory code review, deployment stays with engineers, designer-engineer pairing structure). Takeaway is the team-design pattern, not the Cursor commands.
- *Hiring loops* season, week 4 (no qualifying candidate): season ends early at 3 issues. Omit with the standard footer note rather than substituting a framework piece.

---

## Leadership Read

External blog, talk, or article relevant to engineering management. Content doesn't need to be from the current week — quality beats recency. Never write original management advice; summarise and link.

**Body length & substance floor (v3.0.1):** 400–600 words. The Leadership Read is the digest's deepest curated piece — condensing it below 400 words turns it into a teaser, which is the failure mode the v3.0 spec exists to prevent. The summary must include: (1) **the specific argument or framework** the author advances — named, not paraphrased into vagueness; (2) **at least two concrete examples, mechanisms, or distinctions** from the source that make the argument actionable or testable; (3) **the takeaway the reader leaves with even if they never click through** — articulated explicitly. A Leadership Read summary that ends and the reader still doesn't know what the author actually claims has failed. Test the same way as *In Practice*: strip the link — does the section still teach a specific argument? If no, expand or omit. **Omit cleanly when source material is genuinely thin** — a missing Leadership Read is better than a hollow one. Max two consecutive issues without one.

**Source rotation (v2.0, widened v2.5, expanded v2.8):** No publication can serve as the Leadership Read in consecutive issues. Check `last_leadership_read` in the state file. The source diversity rule also applies: if a publication already appears in 2 sections of this issue, it cannot be the Leadership Read. Rotate across two pools — named eng-management authors (Pragmatic Engineer, LeadDev, Lara Hogan, Will Larson, Charity Majors, Camille Fournier, Marc Hedlund, Marc Brooker, Martin Fowler, Thoughtworks, Kent Beck, Cate Huston, Sarah Drasner, Patrick Kua, the *Engineering Manager's Handbook* author orbit, IEEE/ACM Queue management columns, and similar) and engineering blogs from scale-tech/enterprise orgs (Monzo, Stripe, Shopify, Atlassian, Intercom, GitHub, LinkedIn, Netflix, Spotify, Cloudflare, Honeycomb, Figma, Vercel, Duolingo, Canva, Uber, Airbnb, Square/Block, Slack, Asana, Pinterest, HubSpot, Etsy, Mozilla, and banking/fintech-specific blogs — Monzo, Wise, Starling, Revolut, ClearBank, Allica — when leadership-focused). Company-blog posts qualify on the same transferability test as Outside In: substitute the company name with "a large engineering org" — if the management lesson still carries real meaning, include.

**Relationship to In Practice (v2.8):** *In Practice* (§ above) now carries the weekly management-craft material. As a result, the v2.7 craft floor on the Leadership Read is **superseded** — the Leadership Read can be either craft or strategy depending on the week's source material. The two sections must not share an author or outlet in the same issue.

**Mandatory management-craft research queries (v2.7, expanded v2.8):** During Step 3 (research), run targeted searches for management-craft content from the past ~30 days. These serve both *In Practice* and any potential craft Leadership Read.

*Theme & author queries:* themed for the current *In Practice* season (see `current_in_practice_season` in state) plus general management-craft queries — *"running 1:1s engineering manager"*, *"performance conversation engineering manager"*, *"career framework engineering ladder"*, *"calibration engineering manager"*, *"coaching engineering manager"*, *"new engineering manager advice"*, *"giving feedback engineering manager"*, *"hiring loop engineering manager"*, plus author-name searches for Lara Hogan, Will Larson, Camille Fournier, Pragmatic Engineer, LeadDev, Cate Huston, Patrick Kua, Charity Majors.

*Engineering company blog queries (v2.8):* run dedicated queries against company engineering blogs known for management content. Examples: *"Monzo engineering blog calibration"*, *"Spotify engineering blog manager"*, *"Shopify engineering blog performance review"*, *"GitHub engineering blog hiring"*, *"Intercom engineering blog 1:1s"*, *"Atlassian engineering blog career framework"*, *"LinkedIn engineering blog promotion"*, *"Stripe engineering blog levelling"*, *"Slack engineering blog manager"*, *"Wise engineering blog engineering manager"*. Vary the theme suffix to match the current season. The goal is to surface a strong *In Practice* candidate plus, where available, a separate craft Leadership Read option.

**Transferability test (v2.5):** Source sector doesn't determine eligibility. A Shopify post on performance reviews or a Netflix post on on-call culture is eligible provided the lesson applies to a UK banking/fintech engineering leader. Substitute the company name with "a large engineering org" — if the lesson still carries real meaning, include. If the sentence collapses to something like "a large engineering org did a thing at their scale," reject.

**Anti-overlap with Outside In (v2.5):** If both Leadership Read and Outside In appear in the same issue, they must not come from the same company. Check the Outside In subject before finalising the Leadership Read.

**Break up the prose with h3 subheadings** for scannability, same as the lead article. When content describes a clear sequence, render it as a numbered list.

**Render one key quote as a centred blockquote card** within the navy background — use the existing `.pull-quote` component with slightly increased prominence (`font-size: 20px` Playfair Display, `rgba(255,255,255,.08)` background, centred text). This is the section’s visual anchor.

**End with a discussion prompt:** A single sentence prefixed with **"This could be worth talking about:"** in bold, followed by a specific, provocative question anchored in the article’s argument. Style: `font-size:14px; font-style:italic; color:var(--teal); margin-top:20px; border-top:1px solid rgba(255,255,255,.1); padding-top:14px`. This is not an action item — it highlights a takeaway a manager might choose to raise with their team.

---

## Outside In (v2.3 — widened scope + flexible format menu)

An external engineering-leadership perspective. The goal is to surface a lesson, pattern, or admission from another engineering organisation that a UK banking/fintech engineering leader can directly use — whether or not the company itself is a bank or fintech.

### Eligibility: the transferability test (v2.3)

Don't filter by company type. Filter by whether the lesson is transferable. The reader is a UK banking or fintech engineering leader; the test is:

> Would they read this and recognise their own problem, their own team, or a decision they're about to face?

If yes, the company is eligible — regardless of sector. Shopify, Atlassian, Netflix, GitHub, LinkedIn, Uber, Figma, Canva, Intercom, Honeycomb, Duolingo, Elastic, Cloudflare, Vercel, Mozilla, a university engineering org — all fair game, provided the lesson applies. Banking/fintech sources (Monzo, Stripe, Wise, Ramp, Plaid, ClearBank, Allica) remain strong defaults but should not dominate the rotation.

**Transferable themes** (non-exhaustive — this is what makes a story eligible):
- **Engineering management practice** — performance review season, calibration, levelling, career ladders, promotions, hiring bars, structured interview redesigns, onboarding, org restructures, managing managers, skip-levels, coaching frameworks.
- **Delivery and DevEx** — CI/CD adoption, trunk-based development rollouts, deployment frequency improvements, incident response culture, on-call rotations, post-mortem practice, DORA adoption, internal developer platforms, golden paths.
- **AI in the engineering organisation** — coding agent rollouts, adoption curves, guardrails, verification loops, measurement of agent impact, manager enablement for AI-assisted development, what worked and what didn't.
- **Culture and ways of working** — remote/hybrid decisions, writing culture, RFC processes, decision logs, documentation standards, post-incident learning, blameless culture, handling production outages at scale.
- **Scale transitions** — small team to large team, single-region to multi-region, monolith to services, founding team to manager-of-managers, any "we did X to get through Y" story with a clear shape.
- **Team topology and platform** — Stream-Aligned vs Platform team boundaries, cognitive load management, internal tooling investment decisions.

**What's still out of scope** (these are the rabbit holes to avoid):
- Narrow language- or framework-specific tooling stories ("how we migrated from React 17 to React 18") unless there's a structural leadership lesson.
- Single-team case studies with no organisational implication ("our one squad halved build times") unless the mechanism generalises.
- Pure infrastructure/API design posts (CDN tuning, database internals, protocol trade-offs) — those belong in The Stack or a Feature Article, not Outside In.
- Marketing or product-launch pieces dressed as engineering posts. If the company's blog tags it as "product" or "announcement", be skeptical.
- Thought-leadership that isn't grounded in a specific team's actual experience.
- **Migration stories where the headline is the technology** ("how we moved to Azure", "how we adopted Kubernetes", "our Postgres to DynamoDB migration"). These are vendor/tool narratives, not leadership lessons. Only eligible if the *people and process* — how the org decided, staffed, sequenced, communicated, or measured the change — is the actual subject. If you can swap the technology name and the story collapses, it's eligible. If the story collapses without it, reject.
- **Industry-specific operational stories** ("how McDonald's adopted Go in fast food", "how a retailer handled Black Friday", "how an airline handled a crash-day incident"). The domain context (fast food, retail, aviation) adds no leadership signal a banking/fintech reader can use. Eligible only if the lesson is explicitly about engineering management, delivery practice, or culture — not about the domain's operational quirks.
- Stories whose central artefact is a specific product, SKU, or brand outcome rather than an engineering-org outcome.

**The one-sentence test:** Before selecting, articulate the transferable lesson in one sentence starting with "Engineering leaders should pay attention to this because...". If the sentence sounds like it could only apply to that company's specific tech stack or product, reject it. If it sounds like a pattern the reader will face in their own org in the next 6–12 months, include it.

**The substitution test (v2.4):** Take the one-sentence lesson and substitute the company name with a generic placeholder ("a large engineering org"), and substitute the specific technology with a generic placeholder ("a new platform" or "a new language"). If the sentence still carries real meaning, the story is transferable. If the sentence becomes empty or tautological ("a large engineering org adopted a new language and it was challenging"), reject — the original only seemed interesting because of the specific names, not because of a real pattern.

*Worked examples:*
- "How McDonald's adopted Go in the fast food industry" → substitutes to "A large engineering org adopted a new language." → empty. **Reject.**
- "How Contoso migrated their legacy monolith to Azure" → substitutes to "A large engineering org migrated to a new platform." → empty. **Reject.**
- "How Shopify restructured performance reviews to decouple promotion from calibration" → substitutes to "A large engineering org restructured performance reviews to decouple promotion from calibration." → still meaningful, still actionable. **Include.**
- "How Ramp's coding agent reached 50% of merged PRs without a mandated rollout" → substitutes to "A large engineering org achieved 50% coding-agent adoption through voluntary uptake rather than mandate." → still meaningful. **Include.**
- "How Netflix's on-call rotation changed after a regional outage" → substitutes to "A large engineering org changed its on-call rotation after a major incident." → still meaningful. **Include.**

**Sector rotation (v2.3):** Across any rolling 4-issue window, Outside In must draw from at least 2 different sector categories. The categories are: (1) banking/fintech/payments, (2) dev tools & infrastructure (GitHub, Vercel, Honeycomb, Datadog, Modal, etc.), (3) consumer tech at scale (Netflix, Spotify, Duolingo, Shopify, Airbnb), (4) enterprise/SaaS (Atlassian, Intercom, HubSpot, Figma), (5) platform/cloud (Cloudflare, Fly.io, Render), (6) academic/public-sector engineering orgs. No single category can anchor more than 2 of any 4 consecutive issues.

**No-repeat-company rule (v2.2, retained):** Before selecting the Outside In subject, read `outside_in_history` in the state file. The chosen company must not appear anywhere in that history. If it does, pick a different company — even if the new angle would be a different talk, post, or product. Repeating a company across the run dilutes the section and has happened before (Monzo was covered in Issue 1 via Suhail Patel's QCon talk; Issue 7 was initially drafted with the same Patel/QCon source and had to be regenerated). A secondary angle on the same company is allowed only after at least 10 issues have passed, and must use a clearly different story and source. When in doubt, pick a company that has never appeared in the run.

Content doesn’t need to be from the current week. Only include when something genuinely earns it.

### Format menu

Choose the format that best fits the source material — there's no cross-issue rotation tracker. Default placement is after the Leadership Read; Format B places before, Format C places after the lead.

**Format A: Full feature** (default) — off-white background section (`.outside-in-section`), h3 subheadings, `.oi-callout` for the core lesson, stats row if data warrants, bold "The takeaway" line. Placement: after the Leadership Read.

**Format B: Hero moment** — a full-width band (`.oi-hero-band`) with a large pull quote (28px Playfair Display, centred, teal) from the source, followed by 2–3 paragraphs of context and a bold "The takeaway" line. Use when the source has a single striking admission that speaks for itself. Placement: **before** the Leadership Read, breaking the predictable end-of-issue pattern.

**Format C: Compact inset** (`.oi-compact`) — a small boxed insert (off-white background, teal left border, 14px body text) with company name, 2–3 sentence summary, and source link. No subheadings, no callout box. Use when the point can be made in a short paragraph. Placement: **after the lead article**, surfacing Outside In much earlier when the content is brief enough to sit alongside the main news flow.

**Omit** — no Outside In this issue. Use when nothing earns inclusion. The format menu is "include in one of three shapes, or skip" — don't force content to fill the slot.

### Shared rules (all formats)

- **End with a bold "The takeaway" line** — one sentence in `<p><strong>` stating the implication for engineering leaders.
- **Rotate companies** — never the same company in consecutive issues, never any company in `outside_in_history`.
- **Only include when earned** — omitting is always an option.
- Break up prose with h3 subheadings for scannability (formats A, B only — C is too compact).
- Render sequences as numbered lists where applicable.

---

## Visuals (v1.30 — visual density expansion)

Use inline SVG, tables, or visual primitives when they communicate faster or more clearly than prose. Pass both tests before including: (1) does it communicate something prose can't? (2) does it look like it belongs in a magazine, not a slide deck?

**Use for:** charts (bar, line, donut), architecture / flow / cascade diagrams, timelines for multi-day events, comparison tables, stats rows.

**Never use:** AI-generated images, stock photography, decorative illustrations, unsourced external images, visuals in quick hits / Other News / foreword.

**SVG diagrams must be actual `<svg>` elements** with coloured rectangles, connecting lines/arrows, and the digest colour palette. Text-based or CSS-box approximations don't meet the bar — omit rather than publish a degraded version.

### Visual density rule (v1.30)

The digest covers engineering leadership. The right register is data-informed, diagram-friendly — not prose-memo. Three rules:

1. **Per-section floor (Standard Weekly)**: every major section (Lead, QT1, QT2, In Practice, Leadership Read, Outside In) contains **at least one visual element**. *Visual* means any of: inline SVG chart, stats row, by-the-numbers callout, compare-table, process-flow diagram, sparkline, pull quote bar, sidebar box. The rule is *no major section is pure prose end-to-end.* Most sections already meet this through existing primitives — the rule formalises the floor.

2. **Per-issue visual budget (Standard Weekly)**: target **4–6 distinct visual elements** across all sections. Below 4 reads memo-adjacent for this audience; above 6 starts to crowd. Cover lead-stat / lead-quote counts; Volume II identity strap does NOT count (it's identity, not content visual).

3. **Real-diagram floor (Standard Weekly)**: of the 4–6 visuals per issue, **at least 1–2 must be a real diagram, chart, or table** — not just stats rows, pull quote bars, or sidebar boxes. *Real diagram / chart / table* means: an inline SVG bar/line/donut chart, a process-flow diagram, an architecture diagram, a compare-table, a by-the-numbers callout, or a small `compare-table.compact`. This is the rule that moves the publication beyond memo. The Lead's SVG chart (when data warrants) usually fills one slot; the second is most often a compare-table or process-flow in In Practice / a Quick Take / Outside In.

### Visual primitives (the toolkit)

Existing primitives (all unchanged):
- **Stats rows** (`.stats-row`, `.oi-stats-row`) — 3–4 cells with large numbers, used in Lead, Outside In, Leadership Read
- **Stats tiles** (`.stats-tile`) — single compact tile with one stat
- **Pull quote bars** (`.pq-bar`, `.pull-quote`) — full-width quote band or floated section blockquote
- **By-the-numbers callout** (`.by-the-numbers`) — teal-bordered panel with 3–6 data points
- **Mid-issue accent: number band** (`.mid-accent-band`) — single large stat in a tinted band between Quick Takes and Other News
- **Platform Updates table** (`.glance-table`) — Status / Platform / What Changed, 0–2 rows
- **P0 status card** (`.p0-status-card`)
- **Sidebar box** (`.sidebar-box-float`, `.sidebar-box`) — floated context / Jargon Watch / Concept of the week
- **Radar timeline** (`.radar-timeline`)
- **Cover lead-stat / lead-quote**

New primitives in v1.30:
- **Compare table** (`.compare-table`) — compact 2-column table, 3–5 rows max. Used for *"approach A vs approach B"*, *"before vs after"*, *"us vs them"*. Borrowed concept from the deep-dive comparison grid but scaled for inline use in QTs and In Practice. Max-width 480px (default) or 360px (`.compact` modifier). Header row uses deep-teal labels; body rows have a heavier first-column label and a light second column. **Cap: 5 rows × 2 columns. Tables larger than this are slide-deck territory — break into prose or chart instead.**
- **Process-flow diagram** (`.process-flow` with `.pf-step` and `.pf-arrow`) — 3–5 horizontal step boxes joined by arrows, stacks vertically on mobile. Used for sequences the source describes step-by-step (the *"funnel, not a fork"* shape from the Issue 11 v1.25 In Practice piece, an agentic-coding adoption sequence, a hiring-loop redesign). CSS-based primitive — the writer fills in step labels; the visual layout is automatic. For more complex shapes (non-linear flow, branching, feedback loops), the writer falls back to hand-crafted inline `<svg>` per the existing visuals rule.
- **Sparkline** (`.sparkline` wrapper) — 80px inline container for hand-crafted SVG (mini bar chart, line trend, comparison bars). Used inline within prose for mid-paragraph trend references. `.sparkline.wide` for 120px. The writer hand-crafts the SVG; the wrapper enforces consistent inline sizing.

### Deep dive visual density (v1.30 update)

Deep dives already carry significantly more visual surface than weeklies — section markers, progress bar, scope indicator, how-to-read guide, comparison grid (red/green), case-study timeline, verdict box, key-takeaway box, lessons section, Meanwhile section, distinct source-section layouts. The v1.30 update **bumps the minimum inline SVG count from 2–3 to 3–4 per deep dive**, to maintain the visual heft differential as standard weeklies get denser. Deep dives should always feel a step up in visual depth, not a continuation of the same density.

### Phase-by-phase responsibility (v1.30)

- **Phase 1 (research)**: flag candidates with chartable data using the optional `chartable_data` notes field — *"this candidate has 3 comparable metrics that would chart"* or *"this candidate is a process the source describes step-by-step"*. Cheap to add; gives Phase 3 the signal.
- **Phase 3 (planning)**: each section brief names which visual primitive(s), with rationale. The component manifest at the top of `section-briefs.md` lists visuals across the issue and confirms the 4–6 budget + 1–2 real-diagram floor.
- **Phase 4 (writing)**: produces the SVG / table / diagram per brief. **If Phase 4 can't make the planned visual cleanly (quote unverifiable, data point unconfirmed, layout breaks), it SUBSTITUTES another visual rather than shipping pure prose for that section.** Substitution order: (a) a different verifiable quote pull as `.pq-bar`, (b) a stats tile with a verifiable number, (c) a sidebar callout with verified context, (d) a small inline SVG or sparkline of related data, (e) a compare-table if the article references comparable data points elsewhere. Pure prose with no visual breaker for a section fails the per-section visual floor (v1.30). The v1.30 rule prevented degraded visuals; the v1.31 rule prevents the unintended consequence of *no* visual, which happened in Issue 12 v1.30 when both the Lead `.pq-bar` and Leadership Read centred blockquote were omitted on quote-verification failure.
- **Phase 5 (review)**: verifies the visual budget (4–6 per issue, ≥1 per major section, ≥1–2 real diagrams/charts/tables), and that each visual passes both tests ("communicates faster than prose" + "magazine-quality not slide-deck").

---

## Layout Components (rotate — don't use all in one issue)

- **Feature opener** — full-width navy banner for lead article. Use when the story has real weight.
- **Floated sidebar box** (`.sidebar-box-float`) — floated right (280px), wraps with opening paragraphs. Standard weeklies only. See Sidebar Layouts section.
- **Article with sidebar** (`.article-with-sidebar`) — 65% body / 35% grid sidebar. **Deep dives only** — do not use in standard weeklies.
- **Sidebar boxes** — light (factual) or dark (urgent). Variants: Head to Head, Context, What We Said Last Week.
- **Full-width pull quote bar** (`.pq-bar`) — navy band, centred serif quote. Max once per issue.
- **Key takeaway box** — navy panel, teal title, bullet implications. End of dense articles only.
- **By-the-numbers callout** — teal-bordered panel, 3–6 data points at a glance.
- **Quick take cards** — two-column grid, each card has a coloured header bar, pulled-out anchor stat, and article body. Replaces the old coloured-left-border style.
- **Stats row** (`.stats-row`, `.oi-stats-row`) — flex row of stat cells (large number + small label). Use in lead articles and Outside In sections when data warrants.
- **P0 status card** (`.p0-status-card`) — status card for ongoing Priority 0 stories. Status badge + compact event log + current status. Never use a progress/loading bar for P0 incidents (no known endpoint).
- **Stats tile** (`.stats-tile`) — compact standalone tile with one large number (36px Playfair Display, teal or red) and a short label beneath. Use as a pattern breaker in place of a bullet point when a single stat is striking enough to warrant visual emphasis. Available in the rotation pool — use when the data earns it, don't force one every issue.
- **Compliance side-note** (`.sidebar-box.compliance`) — narrow sidebar-box variant with an orange left border and "Risk / Compliance" label. One sentence flagging a regulatory or compliance implication of a story. Maximum once per issue, and only when a genuine regulatory angle exists. If it appears every week it becomes wallpaper.
- **Outside In callout** (`.oi-callout`) — shaded box (off-white background, teal left border) within the Outside In section for the core lesson or key admission paragraph. Gives the section visual hierarchy without a new design paradigm.
- **Context/definition boxes** — teal-bordered, inline background for readers who need it.
- **Before/after panels** — two equal boxes showing a state change.
- **Inline SVG chart** — data-driven bar/line/grouped-bar chart using `<svg>` elements and the digest palette. Use in lead articles when data from multiple sources can be visualised. Must pass both tests: (1) communicates something prose can’t, (2) looks magazine-quality.
- **Timeline** (`.radar-timeline`) — vertical connector with date blocks and dots. Used for On the Radar. Urgent items get red styling.
- **Counterpoint section** (`.counterpoint-section`) — green left border, off-white background, pill badge. Deep dive only. Includes comparison grid.
- **Comparison grid** (`.comparison-grid`) — two-column side-by-side data comparison. Red-tinted left column, green-tinted right column. Deep dive counterpoint sections.
- **Verdict box** (`.verdict-box`) — red-tinted callout within navy lessons section. Italic serif editorial verdict. Deep dive only.
- **Section markers** (`.section-marker`) — numbered red circles showing position (1 of N). Deep dive only.
- **Progress bar** (`.progress-bar`) — sticky red-to-coral gradient bar filling on scroll. Deep dive only.
- **How to Read guide** (`.how-to-read`) — three-card grid showing 2 min / 10 min / 30 min reading paths. Deep dive only.
- **Scope indicator** (`.cover-scope`) — row of large stats on the cover. Deep dive only.
- **Feature article** (`.feature-article`) — off-white background, teal top border, 400–600 words. Standard weekly only. Occasional (every 2–4 issues).
- **The Stack** (`.the-stack`) — white background, deep-teal left border, 300–500 words. Technical-for-managers explainer. Occasional (every 3–5 issues).
- **Down the Rabbit Hole** (`.rabbit-hole`) — compact sidebar box, teal left border, one curated link. Recurring (every 1–2 issues). Can be floated within an article or standalone.
- **Meanwhile section** (`.meanwhile-section`) — off-white background, teal top border, structured news catch-up. Deep dive only. Replaces Other News.
- **In Practice** (`.in-practice`) — off-white background, deep-teal left border (4px), 300–450 words (v3.0.1). Standalone craft section, peer of The Leadership Read. Standard weekly only. Recurring (·9 of 10 issues). Does not count toward the standard-weekly 3–5 component cap because it is a baseline section, not a rotating component.
- **Jargon Watch** (`.jargon-watch`, v3.0 / broadened v3.7) — compact sidebar box explaining a key term, technology, standard, or named concept that an article centres on. Use when an article repeatedly references something an engineering leader can't reasonably be expected to know cold — including lowercase / hyphenated specialist terms (LLM-eval, LLM-as-judge, agent-mode), per the v3.7 trigger test. Format: small box, off-white background, deep-teal left border (3px), `.jw-label` reading "Jargon Watch" in 11px tracked uppercase teal, `.jw-term` in Playfair Display 16px navy, `.jw-body` 13px body-grey for 2–4 sentences. Optionally `.jw-link` to a primary source. Floated right (`float:right; width:260px; margin:0 0 16px 24px`). Recurring — use whenever an article warrants it. **Does not count toward the standard-weekly 3–5 component cap.**
- **Concept of the week** (`.concept-of-week`, v3.8 — for newer managers) — a peer of Jargon Watch but aimed specifically at the year-one engineering manager from a non-technical route. Where Jargon Watch glosses a *technical* term (a vendor, a protocol, an acronym), Concept of the Week glosses a *management craft* concept the issue uses but doesn't pause to explain (e.g. *calibration*, *levelling*, *skip-levels*, *psychological safety*, *RACI*, *promo packets*, *backloaded review cycle*, *coaching frameworks*). Format: small box, off-white background, **accent-orange** left border (3px) to distinguish from Jargon Watch's deep-teal, `.cw-label` reading "Concept of the week" or "If you're new to this:" in 11px tracked uppercase orange, `.cw-term` in Playfair Display 16px navy, `.cw-body` 13px body-grey for 2–4 sentences in plain language. Floated right like Jargon Watch. Use when an article centres on a management craft concept the year-one EM may not know cold — same v3.7 frequency trigger (3+ uses, or it's the article's core idea). Recurring; **does not count toward the 3–5 component cap** (baseline reader-service for the v3.3 wider-management-team reader).
- **Author card** (`.author-card`, v3.8) — small visually distinct attribution block for In Practice, The Leadership Read, and Outside In sections. Replaces the inline `ip-attribution`-style text line. Format: 60px-tall block, off-white background, deep-teal 2px top border. Contains: a 36px circle (`.ac-avatar`) with the author's initials in teal on a light-teal background (no photos — text initials only, per the v3.3 no-AI-images rule); the author's name (Playfair Display 16px navy); their role + organisation (Source Sans 3 13px body-grey); the publication date (Source Sans 3 12px med-gray). Optional: a small link icon to the source. **Reinforces visually that the section is by a real named person at a real organisation** — the load-bearing claim of all three sections. Use the author card at the top of every In Practice, Leadership Read, and Outside In Format A; smaller inline attribution remains acceptable for Outside In Formats B and C where the section is more compact.

Standard weekly: 3–5 components (Feature and Stack count toward the cap when present). Deep dive: 4–6 (Meanwhile is standard, not counted toward the cap). Light edition: minimal.

---

## Design System (never change)

Palette: navy `#0A1628` · mid-navy `#1A2744` · teal `#00B4D8` · deep-teal `#0077B6` · off-white `#F4F6F9` · body text `#3D4F63` · alert red `#DC2626` · orange `#FF6B35` · green `#00D4AA`

Typography: Playfair Display (headlines, 900/700 weight) + Source Sans 3 (body) via Google Fonts.

Output: single complete HTML file, all CSS in `<style>` tag, `max-width: 900px` centred magazine container.

---

## Headline Sensitivity

Do not use inflammatory terms like "bombs" unless there were literally bombs and it's directly relevant. "Drones", "attacks", "strikes" are all fine when factually accurate. Headlines exist to inform, not to shock.

---

## Quality Check (v3.5)

**Good issue:** scannable in 60 seconds via quick hits · rewards deeper reading · editorial voice with opinions · pull quotes from real sources · "so what?" answered for every story · lead and quick takes pass both the operational-concern lead test and the worth-reading test · source diversity across sections · varied sentence structure · no two articles share an opener style.

**Bad issue:** press release rewrites · padded with filler · IC-level technical details · corporate language · tells managers what to do · design deviates from template · all articles open the same way · foreword lists stories instead of finding the thread · epistemic reframing over the cap of 2 · grid sidebar in a standard weekly · same source anchoring 3+ sections · version lifecycle deadlines given article treatment · tool capability release as the lead.

**Cross-cutting reminders:** P0 stories get the `.p0-status-card` (status badge + event log + current status sentence), never a progress/loading bar. *In Practice* and the Leadership Read in the same issue do not share an author or outlet. Both Leadership Read and Outside In can appear in the same issue when each earns its place; condense as needed to fit the 5–7 page limit.
