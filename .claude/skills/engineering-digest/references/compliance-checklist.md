# Pre-Publish Compliance Checklist

Run through every item before delivering an issue. If any item fails, fix it before sharing.

## Workflow Pipeline (v3.1)

These checks run before the content checks. They verify the five-phase pipeline produced the right artefacts in the right order. If any of these fail, the issue is structurally invalid — don't proceed to content checks.

- [ ] **Run directory exists** at `digest-runs/issue-N/` for this issue number
- [ ] **Phase 1 artefact present**: `candidates.json` exists, parses as JSON, validates against `references/candidates-schema.json`
- [ ] **Phase 1 completeness**: `candidates.json` has an entry for every operational concern (management_teams, ways_of_working, operating_at_scale, banking_fintech_loyalty) — empty concerns have a non-trivial `null_finding` referencing the queries run
- [ ] **Phase 1 secondary pools**: `secondary` object includes `leadership_read`, `in_practice`, and `outside_in` arrays (rabbit_hole and p0_active optional)
- [ ] **Phase 2 artefact present**: `run-plan.md` exists in the run directory
- [ ] **Phase 2 lead justification**: run plan names the chosen lead, lists at least 2 candidates considered and rejected for the lead slot with reasons
- [ ] **Phase 2 operational-concern lead test (v3.4 — replaces AI-balance check)**: the chosen lead is a story that triggers a leadership conversation the reader is about to have with their team, peers, leadership, or customers — not a tool capability release. Tool releases (Cursor/Copilot/Claude Code feature ships) are At a Glance unless they trigger an operating-model, budget, or org-shape conversation
- [ ] **Phase 2 lead-sanity check**: chosen lead is in the top 3 candidates ranked by combined so-what + narrative tension + UK/ME relevance score across all beats — OR run plan justifies the choice
- [ ] **Phase 2 soft breadth guardrail (v3.4 — replaces topic saturation cap)**: across rolling 4 issues, leads span at least 3 of the 4 operational concerns. If the same concern leads twice running, the run plan documents the choice. (Within a single issue, multiple anchors can share a concern — discipline lives in the operational-decision test, not in a rotation rule.)
- [ ] **Phase 3 artefact present**: `section-briefs.md` exists in the run directory with per-section briefs and a top-level component manifest
- [ ] **Phase 4 cross-check**: the lead in the published HTML matches the lead named in `run-plan.md`. QT1 and QT2 match. Editorial moment topic matches. Format matches.
- [ ] **No silent re-promotion**: candidates explicitly rejected for the lead slot in `run-plan.md` did not appear as the lead in the HTML
- [ ] **Jargon-watch coverage**: every term flagged for glossing or Jargon Watch in `section-briefs.md` is either glossed inline or has a `.jargon-watch` sidebar in the HTML
- [ ] **Phase 5 artefact**: `review.md` exists with pass/fail summary

## Foreword
- [ ] One paragraph only (two for deep dive)
- [ ] 50–80 words
- [ ] Single editorial thread, not a story list
- [ ] No "meanwhile", "elsewhere", or "also this week"
- [ ] Does not restate the cover contents
- [ ] Drop-cap on first letter
- [ ] **No AI-default framing (v2.9)**: foreword does not anchor the week's identity to whether AI made news. Banned openers: "a quiet week on the AI front, but…", "with AI taking a breather…", "no major AI moves this week, so…", "setting AI aside…", "AI took a back seat this week…", and any structurally similar phrasing in either direction (apologetic *or* relieved). Lead on what *did* happen, on its own merits. AI is one beat among many — not the default protagonist.
- [ ] **Issue-wide AI-default framing scan (v2.9)**: section intros, transitions, and editorial moments do not frame other topics relative to AI's absence or presence ("away from the AI conversation…", "a reminder that non-AI engineering still ships…", "while AI dominated headlines elsewhere…"). The Node.js release, the cPanel CVE, the fintech funding number stand on their own — they are not consolation prizes for an AI-light week.

## Article Depth
- [ ] Every article passes the "so what?" test for engineering managers
- [ ] Calibrated for delivery managers — not IC-level technical detail
- [ ] Security stories give urgency and scope, not CVE forensics
- [ ] Model releases cover cost/tooling impact, not benchmark tables
- [ ] No corporate language ("leverage", "synergy", "best-in-class")
- [ ] No action items or recommendations — inform only

## Explain key terms on first use (v3.0)
- [ ] **Specialist-term scan (v3.7 — broadened from v3.0 proper-noun scan)**: scanned the full issue for FOUR categories of terms, not just capitalised ones:
  1. **Proper nouns** — vendor / product / framework / standard / regulation names (e.g. Temporal, DNSSEC, MCP, DORA, Octoverse, PSD3, eBPF).
  2. **Acronyms and abbreviations** — including lowercase or mixed-case (`mTLS`, `OIDC`, `LLM-eval`, `LLM-as-judge`).
  3. **Hyphenated neologisms / specialist phrases used as named concepts in the article** — e.g. `funnel-not-a-fork`, `tuition-cost-of-transformation`, `verification-tax`, `J-Curve`, `agent-mode`. If the article uses a phrase as a defined concept (often italicised, often repeated), it needs glossing — capitalisation is irrelevant.
  4. **Numerical-frequency trigger**: any term appearing **3 or more times in the body of one section** must be glossed inline on first use OR carry a Jargon Watch sidebar, regardless of capitalisation. This catches the Issue 11 v1.25 LLM-eval failure mode (the term appeared 8 times across the In Practice section without a single gloss line).

  Each flagged term is either glossed inline on first use OR explained in a Jargon Watch sidebar in the same section.
- [ ] **Inline gloss format**: where used, gloss is a short parenthetical or appositive an engineering leader can parse without leaving the page (e.g. *"LLM-eval — using one language model to score another model's output against named criteria, before any human-led test runs"*).
- [ ] **Jargon Watch sidebar**: where used, sidebar carries a `JARGON WATCH` label, the term, and 2–3 sentences of plain-language explanation; small (≤260px), floated, does not count toward the 3–5 layout-component cap.
- [ ] **Over-inform, don't under-inform**: if a term is doing real work in an article (mentioned more than once, drives the "why this matters"), it gets explained even if the reader "should" know it. **The bar includes a year-one engineering manager from a non-technical route (former scrum master / delivery manager / PM)** — if the term is borderline for them, gloss it.
- [ ] **No silent acronyms**: every acronym is expanded on first use unless it is unambiguously general-business (CEO, GDP, US, UK).
- [ ] **Cross-issue repeat acceptable**: a term that was glossed in a recent issue may be re-glossed briefly here — readers don't carry context week-to-week.

## Format & Length
- [ ] Correct format selected (weekly / deep dive / light edition)
- [ ] Standard weekly: 5–7 pages (hard limit)
- [ ] Light edition: 3–4 pages
- [ ] Deep dive: minimum 2–3 inline SVG visuals
- [ ] Page count enforcement order followed if over limit
- [ ] **When in doubt, go Light (v3.0)**: if any two of the following are true, the issue was published as a Light Edition rather than padded into a Standard Weekly — (1) the lead is a routine version release with no controversy or downstream impact story, (2) a quick take rests on a single-source funding number with no follow-on reporting, (3) Outside In is filling a slot rather than earning it, (4) Leadership Read cannot meet its 400-word floor with a defensible piece. A thin Standard Weekly is worse than a tight Light Edition.

## Topic & Lead Selection (v3.4 — replaces v2.0 mechanical rotation rules)
- [ ] **Operational-concern lead test**: the lead connects to one of the four operational concerns (Management & teams / Ways of working / Operating at scale / Banking, fintech & loyalty) with a clear "what changes for the reader" takeaway, AND it triggers a leadership conversation the reader is about to have with their team, peers, leadership, or customers
- [ ] **Tool releases are not leads**: Cursor / Copilot / Claude Code feature ships, capability releases, and version bumps are At a Glance unless they trigger an operating-model, budget, or org-shape conversation. The lead's takeaway is never "the tool can now do X" — it's "as a leader, the conversation is now Y"
- [ ] **AI substrate classification (v3.4)**: AI stories are classified by the operational decision they trigger, not as a standalone beat. A Cursor pricing change that forces budget renegotiation is "Ways of working", not "AI tooling"
- [ ] **Soft breadth guardrail (v3.4)**: across rolling 4 issues, leads span at least 3 of the 4 operational concerns. If the same concern leads twice running, the run plan documents the choice on substance grounds
- [ ] **No-repeat-featured-anchor (v1.31)**: no story that was a featured anchor (Lead, QT1, or QT2) in either of the previous 2 issues appears as a featured anchor in this issue, even in a different slot. (Cross-issue throughline — a single sentence inside another article referencing the prior coverage — is the only re-reference allowed.) The Issue 12 v1.30 failure: DORA's J-Curve as QT1 a week after being Issue 11 v1.25's Lead.
- [ ] **Within-issue concern diversity (v1.31)**: Lead, QT1, and QT2 span **at least 2 operational concerns**; at most ONE anchor can come from a single concern. The Issue 12 v1.30 failure: Lead (FCA) + QT2 (Stripe SPT) both in Banking, fintech & loyalty.
- [ ] Lead chosen by operational-decision impact this specific week — not by standing concern rank, not by mechanical rotation
- [ ] **Banking, fintech & loyalty framing (v1.31 — corrects v3.3 overshoot)**: bank engineering content (Monzo / Wise / Starling / etc. engineering blogs), peer fintech engineering moves, payments-rail engineering, and loyalty / commerce-media tech are first-class subject matter. **Bank-regulator decisions about banking compliance (FCA / ADGM / FSRA / PSR / HMT / DORA-EU policy) are At a Glance / On the Radar / Other News only — never Lead, never featured Quick Take.** The reader is upstream of the regulated institutions; regulator action is information to surface briefly, not anchor material. The v3.3 attempt to allow regulator decisions under "positive framing" produced the Issue 10 audience-fit failure again in Issue 12 v1.30 — retired.
- [ ] **Loyalty / commerce-media research emphasis (v3.7)**: Phase 1 ran explicit queries for loyalty / commerce-media engineering this week (Stripe Ledger, neobank loyalty rollouts, agentic-commerce protocol shifts, aggregator API moves, rewards-platform engineering, Visa/Mastercard loyalty-track work) — the patch is researched every week regardless of whether a story surfaces. **A loyalty story takes a slot only when it earns one on substance**; wider engineering news is NOT crowded out by a forced thin loyalty piece. If no loyalty story surfaces, no loyalty slot appears — that is correct, not a failure
- [ ] **Source sector irrelevance (v2.5)**: a Shopify / Netflix / Atlassian-style leadership story is eligible for any concern it speaks to when the lesson applies to the reader — don't filter by source sector
- [ ] **"Worth reading" test passed**: every lead and quick take has narrative, tension, or insight beyond just being important to know. Important-but-not-interesting stories are in Week at a Glance or On the Radar
- [ ] Version lifecycle deadlines (EOLs, deprecations) are in Platform Updates / On the Radar — not given article treatment unless genuine narrative beyond "update by date X"
- [ ] Testing stories: only full article treatment if structural shift; single-company case studies → Leadership Read or Outside In

## Audience-fit & urgency gates (v3.2)

These checks enforce the v3.3 audience definition. The reader is engineering leadership at a fintech operating in the customer-loyalty / commerce-media space, working with UK and Middle East banks as customers — plus a wider management team that includes managers who came in from non-technical routes. The test for every anchor slot: "what guides the team's work" vs. "what the team's work is."

- [ ] **Lead urgency**: the Lead qualifies as `act_this_week` or high-impact `decide_this_month` for the audience. If `general_awareness`, the curation has failed — replace the lead. ("Node.js 20 reaches EOL in months" is `general_awareness`. It does not lead.)
- [ ] **Quick Take urgency**: each Quick Take meets the same `act_this_week` or high-impact `decide_this_month` bar. If a Quick Take resolves to `general_awareness`, demote it to On the Radar, Week at a Glance, or Other News.
- [ ] **Anchor depth-fit**: for each anchor slot (Lead, QT1, QT2), there is a clear "what guides the team's work" takeaway that does not require the reader to be running the system themselves. If the only useful version of the takeaway is for someone patching, deploying, configuring, or writing code, the story is in the wrong slot — demote.
- [ ] **Banking/fintech framing (v3.3 — supersedes v3.2 customer-pressure gate)**: banking, fintech, and loyalty stories are framed positively as *"the world the reader operates in and the engineering decisions their peers and customers are making"* — not as customer-pressure briefings, and not as compliance briefings for the reader's own firm. Regulatory stories (FCA, ADGM, PSR, DORA) qualify for any slot they earn on operational impact, including the Lead.
- [ ] **In Practice quality check (v3.5 — replaces v3.2 whitelist)**: the *In Practice* piece (if present) passes the three required qualities — (1) named operator at a real org, (2) journey not framework, (3) technical content at implication level. Source identity is the filter, not a fixed whitelist; named eng-management authors and scale-tech / fintech engineering blogs are strong candidate pools, with bank engineering blogs (Monzo / Wise / Starling / Revolut / etc.) first-class per v3.3.
- [ ] **AI-substrate ceiling (v3.8)**: across rolling 4 issues, no more than 2 anchor slots (Lead, QT1, QT2) have AI as the substantive driver. At least one of this issue's top 3 anchors is a story where AI is not the primary force (security event, payments rail shift, regulator action, peer-bank engineering decision, non-AI management craft). If all 3 anchors are AI-driven, the run plan documents the call and names what non-AI candidates were considered and rejected.

## Structure
- [ ] Section order matches the spec for the chosen format
- [ ] Week at a Glance grouped by urgency (action required → worth knowing → watching)
- [ ] On the Radar split: deadlines/required actions first, then events
- [ ] Layout components rotated — not the same set every issue
- [ ] Standard weekly: 3–5 components. Deep dive: 4–6. Light: minimal.

## Ongoing Stories
- [ ] Any active Priority 0 story has a P0 status card (`.p0-status-card`) — NOT a progress/loading bar
- [ ] P0 status card includes: status badge (UNRESOLVED/DEGRADED/RECOVERING/RESOLVED), compact event log (2–4 dated milestones), and current status sentence with source
- [ ] No progress bars used for P0 incidents (no known endpoint makes bars misleading)
- [ ] Updates shorter than original coverage — reference back, don't repeat

## Leadership Read & Outside In
- [ ] Both included only when source material earns it
- [ ] Outside In company does not appear anywhere in `outside_in_history` in the state file (not just the previous issue) — full-run no-repeat rule (v2.2)
- [ ] Outside In source/angle is clearly distinct from any prior coverage (check the specific talk, post, or product referenced — a different angle on a previously-covered company is not sufficient unless at least 10 issues have passed)
- [ ] Outside In passes the **transferability test** (v2.3): can be articulated as "Engineering leaders should pay attention to this because..." and applies to a pattern the UK banking/fintech reader will face in 6–12 months — not a company-specific tech-stack story
- [ ] Outside In passes the **substitution test** (v2.4): swap the company name for "a large engineering org" and the specific technology for a generic placeholder — if the lesson still carries real meaning, include; if the sentence becomes empty or tautological, reject
- [ ] Outside In is not a narrow language/framework migration, a vendor/cloud migration story ("moved to Azure", "adopted Kubernetes"), an industry-specific operational story (fast food, retail, aviation domain context), a pure infrastructure/API design post, a single-team case study with no org implication, a marketing/product-launch post, or ungrounded thought leadership
- [ ] Outside In **sector rotation** (v2.3): in any rolling 4-issue window, at least 2 different sector categories represented; no single category (banking/fintech, dev tools, consumer tech, enterprise/SaaS, platform/cloud, academic/public) anchors more than 2 of 4 consecutive issues — check `outside_in_history` for the last 3 issues' sectors
- [ ] Leadership Read source is a real external piece, not original advice
- [ ] **Leadership Read source differs from the previous issue's** — check `last_leadership_read` in state file. No publication serves as Leadership Read in consecutive issues.
- [ ] Leadership Read passes the **transferability test (v2.5)**: source sector is irrelevant; the lesson must apply to a UK banking/fintech eng leader. Shopify performance-review posts, Netflix on-call culture posts, Atlassian delivery-framework posts all eligible provided the substitution test holds (swap company name for "a large engineering org" — lesson still meaningful).
- [ ] **Anti-overlap (v2.5):** If both Leadership Read and Outside In appear in this issue, they are from **different companies**. Check the Outside In subject before finalising the Leadership Read.
- [ ] Both condensed as needed to stay within page limits

## Source Diversity (v2.0)
- [ ] No single publication appears in more than **2 sections** of this issue
- [ ] If a source is used in lead article + Week at a Glance, it is NOT also used as Leadership Read or quick take anchor
- [ ] Source variety across sections — different publications anchor different sections

## Layout choices (v3.5 — replaces v1.9 rotation-tracking)

The v3.5 spec retired cross-issue rotation tracking for Quick Take layout, Outside In format, mid-issue accent, and lead opener. The discipline is within-issue craft, not state-file rotation. Verify:

- [ ] Quick Take layout (QT-A equal grid / QT-B featured+compact / QT-C single full-width) suits this week's material. If QT-B: stronger story is in the wider column. If QT-C: only one story genuinely earns quick-take treatment — no forced symmetry
- [ ] Outside In format (A full feature / B hero moment / C compact inset) suits the source material. Placement matches the format (A after LR, B before LR, C after lead). Omitting is always an option when nothing earns it
- [ ] Mid-issue accent (number band / mini-highlight) is genuinely interesting — not filler. Number band stat comes from a story already covered. Optional component — omit if nothing earns it
- [ ] No two articles in this issue open the same way (within-issue opener variety rule)

## Feature Article (v2.1)
_Skip if no Feature article is present in this issue._
- [ ] Feature is present only in standard weekly format — not deep dive or light edition
- [ ] `last_feature_date` checked — minimum 1-issue gap since last Feature
- [ ] Feature topic differs from lead article topic
- [ ] 400–600 words with h3 subheadings
- [ ] At least one visual element (pull quote bar, stats row, sidebar box, or SVG)
- [ ] Ends with bold "The takeaway" line
- [ ] Uses `.feature-article` CSS class with correct styling (off-white bg, teal top border)
- [ ] Feature topic subject to topic saturation cap and source diversity rules
- [ ] Feature opener style differs from lead article and quick takes in this issue (Entry Pattern Rotation)
- [ ] `last_feature_date` updated in state file after generation

## The Stack (v2.1)
_Skip if no Stack article is present in this issue._
- [ ] `last_stack_date` checked — minimum 2-issue gap since last Stack
- [ ] Topic connects to something in this week's news — not speculative or standalone
- [ ] 300–500 words, structured as: what it is → why it matters for teams → what to watch for
- [ ] Uses h3 subheadings, no code blocks
- [ ] Includes one visual (SVG diagram or definition/context box)
- [ ] Headline phrased as a concept, not a question
- [ ] Never condescending — assumes intelligent, time-constrained reader
- [ ] **Manager test passed (v2.5)**: the entry can be articulated as "after reading this, the reader will ask a better question of their team / spot a risk in a roadmap / recognise a trade-off in a vendor or build-vs-buy review." If the honest answer is "understand how it works technically," reject — that's an IC concern, not a Stack entry.
- [ ] Uses `.the-stack` CSS class with correct styling (white bg, deep-teal left border)
- [ ] `last_stack_date` updated in state file after generation

## Down the Rabbit Hole (v2.1)
_Skip if no Rabbit Hole is present in this issue._
- [ ] Links to exactly one external resource — not a reading list
- [ ] Connected to a story covered elsewhere in this issue
- [ ] 2–3 sentences maximum — sells the click, doesn't summarise the destination
- [ ] Source type badge present (Paper / Talk / Long-read / Thread / Podcast)
- [ ] Uses `.rabbit-hole` CSS class with correct styling
- [ ] Placement feels natural — floated within a related article or standalone between sections
- [ ] `last_rabbit_hole_date` updated in state file after generation

## Article Openers (v3.5 — within-issue variety only)
- [ ] No two articles (lead, quick takes, Feature) in this issue share the same opener style
- [ ] Opener styles drawn from the catalogue: stat-first, quote-first, summary-first, narrative-first
- [ ] Each opener suits its story — chosen for editorial fit

## Meanwhile (v2.1 — deep dives only)
_Skip this section for standard weekly and light edition issues._
- [ ] Present in this deep dive issue — not omitted
- [ ] Placed after Lessons & Implications, before On the Radar
- [ ] Intro line present in italic — sets the transition tone
- [ ] 4–8 items with bold headline, one sentence of context, source link
- [ ] "Would have led" items (1–2 max) identified honestly — these genuinely would have anchored a standard weekly
- [ ] "Also this week" items at quick-hit density (one sentence each)
- [ ] Two-column grid used for "Also this week" items
- [ ] No analysis in Meanwhile items — informational only
- [ ] All items have primary sources from the 7-day window
- [ ] No duplication with stories already referenced in the deep dive
- [ ] "Other News This Week" section NOT also present — Meanwhile replaces it in deep dives
- [ ] Uses `.meanwhile-section` CSS class with correct styling (off-white bg, teal top border)

## Synthesis
- [ ] Connected dots stated explicitly — not left to the reader
- [ ] Each article covers a different topic area
- [ ] No two articles covering the same story from different angles

## Prose Style (v3.6 — structural test, not pattern list)

- [ ] **Epistemic reframing structural test (v3.6)**: every sentence was scanned using the structural test — *does this sentence name what something is NOT in order to introduce what it IS?* The six canonical patterns ("not X — it's Y", "the real X was Y", "the interesting part isn't X", "less a X than a Y", "not whether X, but how Y", "not just X — it's Y") are illustrative, NOT exhaustive. **All structurally equivalent constructions count**: "the precondition story matters more than the headline", "not the tool, not the prompt library — it's the X", "the wrong unit of measurement is X; the right one is Y", "X isn't the story — Y is", etc.
- [ ] **Count ≤ 2 per issue confirmed**. Common failure: lexical scans for the six patterns return 0 because the writer used variations on the same structure. The v3.6 scan is structural — scan the meaning, not the surface form. Phase 4 self-counts that report 0 should be reviewed sceptically; the reviewer recounts.
- [ ] Remaining analytical points use direct declarative sentences

## Quote Allocation & Attribution Fidelity (v3.6 — new)

- [ ] **One quote, one slot**: no source quote (verified verbatim OR paraphrased) appears in more than one slot per issue. The same line cannot anchor both the Editorial Moment and the Outside In callout, or appear as both a pull-quote bar and a body quote. If a quote works in two places, the stronger placement keeps it; the other slot uses a different quote or framing.
- [ ] **Attribution fidelity**: every concept attributed by name to a source uses the source's actual terminology. Inventing a label and putting it in the source's mouth is disallowed even when the substance is correct. Acceptable: *"DORA describes a productivity dip — call it the 'instability tax' if you like…"* (digest labels the framing, attributes the concept). Disallowed: *"DORA's 'instability tax'"* (label invented and attributed).
- [ ] **Quoted-phrase scan**: every double-quoted phrase in the HTML attributed by name to a source has been checked against the source's actual wording (via WebFetch or WebSearch summaries). Paraphrased forms are marked as paraphrases, not rendered as direct quotes.

## In Practice (v2.8, expanded v3.0 / v3.0.1)
_The v2.7 Leadership Read management-craft floor is **superseded** by *In Practice*. The Leadership Read may be craft or strategy._

- [ ] *In Practice* is included in this issue — OR this issue is one of the ~1-in-10 skip weeks, with a footer note (*"In Practice returns next week"*) and a documented reason in the run notes
- [ ] `current_in_practice_season` and `in_practice_season_progress` were read from the state file before researching candidates
- [ ] If we are mid-April → mid-May or mid-October → mid-November, the active season is calendar-anchored (year-end performance cycle / lighter mid-year cycle); other windows are flexible
- [ ] During research (Step 3), explicit management-craft queries were run for this season's theme — covering both the named-author pool (Lara Hogan, Will Larson, Camille Fournier, Cate Huston, Patrick Kua, Pragmatic Engineer, LeadDev) AND the engineering company blog pool (Monzo, Spotify, Shopify, GitHub, Intercom, Atlassian, LinkedIn, Stripe, Slack, Wise and similar) using season-themed query suffixes
- [ ] The chosen *In Practice* piece comes from one of the named-author or engineering-company-blog pools and is genuinely about the work of being a manager (calibration, levelling, performance reviews, hiring loops, 1:1s, manager onboarding, career frameworks, coaching, team rituals, retention)
- [ ] If a company-blog piece is used, it passes the substitution test — swap the company name with "a large engineering org" and the management lesson still carries real meaning
- [ ] The piece has not been used before in *In Practice* — cross-checked against `in_practice_history` in the state file (no-recycle rule)
- [ ] If recent material on the season's theme is thin, an evergreen piece is used and tagged with the *"a classic worth revisiting"* sub-label
- [ ] *In Practice* and the Leadership Read in the same issue do not share an author or outlet (anti-overlap rule)
- [ ] Source diversity: the publication used in *In Practice* is counted as one of its 2 allowed sections this issue
- [ ] Framing is peer-level for a working engineering manager, sometimes ~1 year in — not director-of-directors strategy
- [ ] **Body length (v3.0.1)**: *In Practice* is 300–450 words. Below 300 the piece is too condensed to add value beyond "the original might be interesting"; above 450 it crowds the Leadership Read.
- [ ] **Substance floor (v3.0)**: the piece names the specific framework, model, ritual, or lever the source is arguing for; carries at least one concrete example or mechanism (a script, a question, a specific failure mode, a step in a process); and articulates the takeaway in our own words rather than gesturing at the source.
- [ ] **Strip-link test (v3.0)**: if the link to the original were removed, the *In Practice* entry still teaches the reader something specific. If the entry collapses to "go read this," rewrite or omit.
- [ ] **Visual hierarchy (v3.0)**: *In Practice* is presented as a peer section to the Leadership Read — full-width header bar (`.in-practice-header`) above the off-white inset box (`.in-practice`), full container width, separated from Platform Updates by a `.feature-break` or `.section-breather`. It does not read as a panel inside Platform Updates.
- [ ] *In Practice* uses `.in-practice` styling (off-white background, deep-teal 4px left border, 28px/36px padding) below the `.in-practice-header` bar
- [ ] *In Practice* has the section label "IN PRACTICE" (Tier 1) plus an italic theme name (no week count); ends with a bold *"What to try"* one-sentence framing
- [ ] *In Practice* is positioned between Platform Updates and the Leadership Read (section 13 — a standalone peer of the Leadership Read, not a sub-section of Platform Updates)
- [ ] If the season is on its 3rd or 4th issue and no strong candidate exists, the season was cut short rather than dragged — a new theme begins next issue
- [ ] State file has been updated post-generation: `in_practice_season_progress` incremented (or season closed), the new piece appended to `in_practice_history` with `{issue, piece_title, author, url}`, and `current_in_practice_season` advanced if the season ended

## Leadership Read body length & substance floor (v3.0.1)
_Skip if Leadership Read is omitted this issue._
- [ ] **Body length**: 400–600 words. Below 400 the piece reads as a teaser rather than a digest; above 600 it competes with the lead.
- [ ] **Substance floor**: names the specific argument or thesis of the source piece; carries at least 2 concrete examples, mechanisms, or counter-positions from the source; articulates the takeaway in our own words. "It's worth a read because it's interesting" is not a takeaway.
- [ ] **Strip-link test**: if the link were removed, the entry still teaches the reader something specific they can carry into a 1:1, a planning session, or a hiring debrief.
- [ ] **Omit cleanly when thin**: if the week's candidate cannot meet the 400-word floor with substance, the Leadership Read is cut entirely and a footer note (*"Leadership Read returns next week"*) is added — it is not padded with summary or filler.
- [ ] **Page-cut floor**: when trimming the issue to fit the page limit, the Leadership Read may be shortened toward 400 words but never below. If 400 cannot hold, omit per the rule above. *In Practice* is not a page-cut lever.

## Audience Framing & Voice (v1.31 — third-person editorial, no direct address)

- [ ] **Third-person editorial voice (v1.31)**: the publication never addresses the reader directly. **Banned constructions (any instance is a failure)**: *"the reader"*, *"the reader's [anything]"*, *"your team"*, *"your firm"*, *"your org"*, *"your customers"*, *"you must"*, *"you should"*, *"you need to"*. **Also banned**: rhetorical questions posed to the audience (*"does the reader's product sit inside…?"*, *"what does this mean for your team?"*, *"which of your services…?"*). Acceptable third-person: *"Firms in scope are now running daily reconciliations"*, *"Teams running coding agents face this question"*, *"In-scope organisations now operate under a daily reconciliation discipline"*. The Issue 12 v1.30 Lead and Leadership Read shipped 13+ direct-address violations; v1.31 makes the rule explicit.
- [ ] **Sentence-level grep**: search the issue HTML for *"the reader"*, *"reader's"*, *"your team"*, *"your firm"*, *"your customers"*, *"you must"*, *"you should"*. Each should return 0 hits. The Leadership Read discussion prompt phrasing — *"Which of your services has the tightest feedback loop today?"* — is the named v1.31 failure case; the prompt must be written third-person (*"Engineering leaders running coding agents now face the question: which service has the tightest feedback loop, and is that where the agents are pointed?"*).
- [ ] Reader-description (where it appears in run plan or briefs, not in the issue itself) uses the v3.3 audience: engineering leadership at a fintech in customer-loyalty / commerce-media space, working with UK and ME banks as customers, with a wider management team including managers from non-technical backgrounds.
- [ ] Audience is never described as "engineering managers in banks" or any phrase that locates the reader as a bank's internal eng team.
- [ ] Banking, fintech, and loyalty stories are framed in third-person editorial about the engineering content (*"Monzo's data-mesh post argues…"*, *"Stripe's SPT consolidation lands four wallet networks…"*). Never as compliance briefings for the reader's firm.
- [ ] Accessibility check: the issue is readable by an engineering manager who came in from a non-technical route. Jargon Watch sidebars, inline glosses, Concept of the Week sidebars, and the agent-terminology precision rule all serve this reader.

## Agent Terminology Precision (v2.6)
- [ ] First use of "deploy agents" / "agentic AI" / "AI agents" / "autonomous agents" in any article names which end of the spectrum the story is about: agent-mode workflows inside existing tools (human still triggers/reviews) vs production agents with action authority (autonomous tool calls, money moves, record updates)
- [ ] If a survey/source itself lumps both ends together, the article says so explicitly (e.g. "the survey lumps both together, which is part of why the ROI number is soft") rather than letting the ambiguity carry through unflagged
- [ ] No article uses "deploy agents" as a standalone term across multiple paragraphs without clarifying what is being deployed in practice
- [ ] Deep dives that anchor on agent deployment data include at least one paragraph that distinguishes the spectrum for the reader

## Sources & Links
- [ ] Every section has source attribution
- [ ] All links are real, working URLs — none fabricated
- [ ] Web search was performed for current news — no reliance on training data
- [ ] Date range is backward-looking (previous 7 days for weekly)

## Date-Range Enforcement (v1.4)
- [ ] Every lead article, quick take, and quick hit has a primary source published within the 7-day window
- [ ] Any story from outside the window is only included because it received significant new traction/reactions this week, and the article explicitly states when the original event occurred
- [ ] Search queries used date constraints; results were audited for publication date before shortlisting
- [ ] No story older than 7 days received lead or quick-take treatment without meeting the traction exception

## Design
- [ ] Output is a single complete HTML file
- [ ] CSS matches the template exactly — colours, fonts, components
- [ ] SVG diagrams are actual `<svg>` elements, not CSS approximations
- [ ] No AI-generated images, stock photography, or decorative illustrations
- [ ] No inflammatory headlines (see headline sensitivity rule)

## Content Enhancements (v1.6)
- [ ] Cover includes estimated reading time (`.cover-read-time`) next to issue badge
- [ ] Lead article includes a mid-article pull quote bar (`.pq-bar`) — omit only when no quote earns it
- [ ] Each quick take ends with a bold "The takeaway" line (`.so-what`) — one sentence stating the implication, not an instruction
- [ ] Outside In ends with a bold "The takeaway" line, same format as quick takes
- [ ] Outside In renders its core lesson or key admission in a shaded callout box (`.oi-callout`)
- [ ] Leadership Read, Outside In, and Lead Article all use h3 subheadings for scannability
- [ ] Genuine sequences (phases, steps, progressions) rendered as numbered lists, not buried in prose
- [ ] Leadership Read ends with a discussion prompt: **"This could be worth talking about:"** + one specific sentence anchored in the article’s argument
- [ ] Discussion prompt is NOT an action item — it highlights a takeaway, not an instruction
- [ ] Compliance side-note (`.sidebar-box.compliance`) used maximum once per issue, and only when a genuine regulatory angle exists
- [ ] Stats tile (`.stats-tile`) used only when data earns visual emphasis — not forced every issue
- [ ] "The takeaway" lines and discussion prompts do NOT prescribe actions — they state implications

## Pacing & Layout (v3.5)
- [ ] Weekend magazine pacing: quick hits open briskly, lead/quick takes build, Leadership Read / Outside In ease the reader out
- [ ] Tier 2 labels written in sentence case in the HTML (the template's CSS handles the visual rendering — write the text in the case it should appear in, not relying on `text-transform: uppercase`)
- [ ] If the lead article uses a sidebar: **floated inset box** (`.sidebar-box-float`) for standard weeklies, **grid sidebar** (`.article-with-sidebar`) for deep dives only
- [ ] Standard weekly sidebar box has a clear purpose (context, methodology, "what we said last week") — not decorative
- [ ] `.article-with-sidebar` (65/35 grid) is NOT used in any standard weekly issue
- [ ] Section breathers (`.section-breather`) placed between The Week at a Glance and Lead Article, and between Quick Takes and Other News
- [ ] No more than 2 section breathers in the issue
- [ ] Editorial moment present after foreword/P0, before The Week at a Glance — variant suits this week's material (no cross-issue rotation tracker)
- [ ] Editorial moment is brief, curatorial in tone, distinct from the main editorial content
- [ ] **Section spread (v3.8)**: the three long-form sections (*In Practice*, Outside In, The Leadership Read) are NOT all clustered at the back of the issue. **At least one is placed mid-issue.** The default is *In Practice* at position 10 (after the second section breather, before Other News). Variants are acceptable when documented in the run plan — what is NOT acceptable is all three back-to-back in positions 13–15. If the actual rendered HTML has all three back-to-back, the structure has failed and Phase 4 must be sent back to re-order.

## Reader Service Components (v3.8 — for the wider management team)
- [ ] **Concept of the week (v3.8)** sidebar present in this issue when warranted — used when an article centres on a management craft concept the year-one EM from a non-technical route may not know cold (calibration, levelling, skip-levels, psychological safety, RACI, promo packets, etc.). Same v3.7 frequency trigger: 3+ uses of a concept in one section, OR it's the article's core idea. The component is optional — omit when nothing earns it; don't force one every issue.
- [ ] **Author card (v3.8)** rendered at the top of every *In Practice* section, every Leadership Read section, and every Outside In Format A section. Contains: text initials avatar (no photos), author name, role + organisation, date. Reinforces the "real person at a real organisation" claim visually. Smaller inline attribution remains acceptable for Outside In Formats B and C.
- [ ] **Cross-issue throughline (v3.8)**: when a current story has roots in a prior issue, a single sentence inside an article references the prior coverage. Optional. Not a separate section. Used when the connection adds substance.

## Visual Identity (v1.31 — Volume II made actually visible)
- [ ] **Cover identity strap (`.cover-identity-strap`)**: 22px padding (taller than v1.29's 14px); teal-tinted background with deep-teal border. The *"Vol. II"* element is a **teal pill badge** (`.cis-vol` — solid teal background, navy text, bold), not tracked uppercase text.
- [ ] **Cover tagline (`.cover-tagline`)**: italic teal strapline beneath the masthead — *"Engineering decisions, every Friday."* or equivalent stance statement. Magazine-standard.
- [ ] **Week badge (`.week-badge`)**: bordered orange treatment (transparent fill, orange border), not solid pill. Pairs visually with the identity strap and footer badge.
- [ ] **Cover dot-grid motif**: 40px dot grid at ~7% opacity tiled across the cover background. Subtle but present.
- [ ] **Cover variant chosen on substance**: `.cover-lead-stat` OR `.cover-lead-quote` based on the issue's strongest signal.
- [ ] **Per-section reading time**: each major section `<h2>` carries `.section-time` `(N min)` in 12px med-gray.
- [ ] **Drop caps**: Lead section uses class `.lead-article` (navy 56px drop cap); Leadership Read uses `.mgmt-section` (teal 52px drop cap). Both render automatically via CSS.
- [ ] **Footer Volume II badge (`.footer-vol`)**: **teal pill badge** matching the cover identity strap treatment — solid teal background, navy text, bold. Not just teal-coloured text.
- [ ] **Palette by concern**: section labels and quick-take header bars carry colour cues — Management & teams = orange, Ways of working = teal (default), Operating at scale = alert-red (when warranted), Banking/fintech/loyalty = green. Outside In stays orange.
- [ ] **Author cards (v1.28)** rendered on *In Practice*, Leadership Read, and Outside In Format A — text initials avatar, name, role + org, date.
- [ ] **In Practice header treatment (v1.31)**: off-white background with deep-teal top + left borders, flowing continuously into the off-white `.in-practice` inset body — reads as ONE unit. The v1.30 navy header bar (which read as a section breather, not a section start) is retired.
- [ ] **Section breather above In Practice**: `<hr class="feature-break">` immediately above the In Practice section so the section start is unambiguous.
- [ ] **Editor's note (Issue 12 ONLY)**: `.editor-note` block at the top of the Foreword acknowledging the Vol. II refresh. **Remove from Issue 13 onwards.**
- [ ] **Thumbnail-distinguishability check (v1.31)**: place this issue's cover next to Issue 10's cover. The two should be visibly distinct at thumbnail size. If they aren't, the Vol. II markers aren't doing the job and need to be raised further.

## Visual Density (v1.30 — diagrams, charts, tables expansion)
- [ ] **Per-section visual floor (Standard Weekly)**: every major section (Lead, QT1, QT2, In Practice, Leadership Read, Outside In) contains at least one visual element (inline SVG, stats row, by-the-numbers callout, compare-table, process-flow, sparkline, pull quote bar, or sidebar box). No major section is pure prose end-to-end.
- [ ] **Per-issue visual budget (Standard Weekly)**: 4–6 distinct visual elements across all sections. Below 4 reads memo-adjacent; above 6 starts to crowd. The cover lead-stat / lead-quote counts; the Volume II identity strap does NOT count (identity, not content).
- [ ] **Real-diagram floor (Standard Weekly)**: of the 4–6 visuals, **at least 1–2 are a real diagram, chart, or table** — inline SVG chart, process-flow, architecture diagram, compare-table, by-the-numbers callout, or compact compare-table. Stats rows, pull quote bars, and sidebar boxes alone do NOT satisfy this floor (they count toward the 4–6 budget but not the real-diagram requirement).
- [ ] **Deep dive visual minimum (v1.30 bump)**: deep dives carry minimum 3–4 inline SVGs (up from 2–3 in earlier versions), plus the existing structural visual surface (section markers, progress bar, scope indicator, how-to-read guide, comparison grid, case-study timeline, verdict box, lessons section, Meanwhile section). Maintains the visual heft differential between deep dives and weeklies as weeklies get denser.
- [ ] **Compare-table cap**: `.compare-table` is capped at 5 rows × 2 columns. Larger tables are slide-deck territory — break into prose, chart, or a process-flow instead.
- [ ] **Process-flow used when warranted**: when an article describes a 3–5 step sequence (rollout phases, funnel-vs-fork shapes, hiring-loop redesigns), `.process-flow` is the default primitive. Hand-crafted inline SVG is reserved for non-linear or branching diagrams.
- [ ] **Sparkline used inline only**: `.sparkline` sits mid-prose for trend references. Not used as a section anchor (a section anchor is a stats row, inline chart, or by-the-numbers callout).
- [ ] **Phase 4 visual substitution (v1.31 — corrects v1.30 unintended consequence)**: if the planned visual for a section can't be sourced cleanly (quote unverifiable, data point unconfirmed, layout breaks), Phase 4 **SUBSTITUTES** a different visual rather than shipping pure prose. Substitution order: (a) a different verifiable quote pull as `.pq-bar`, (b) a stats tile with a verifiable number, (c) a sidebar callout with verified context, (d) a small inline SVG or sparkline of related data, (e) a compare-table if the article references comparable data points. Pure prose for a section fails the per-section visual floor (v1.30). The v1.30 rule prevented degraded visuals; v1.31 prevents the unintended consequence of *no* visual when verification fails (Issue 12 v1.30 lost both Lead `.pq-bar` and Leadership Read centred blockquote on quote-verification failure with no substitutes).
- [ ] **Phase 1 chartable_data flagging**: candidates that have data / structure suitable for charting carry the `chartable_data` field in `candidates.json`. Phase 3 uses these flags to allocate visual primitives per section.

## Design Enhancements (v1.1)
- [ ] Cover: centred masthead, lead pull-stat in tinted band with context sentence
- [ ] Quick hits grouped by urgency tiers (Action Required / Worth Knowing / Watching) with distinct backgrounds and left borders
- [ ] Lead article has h3 subheadings every 1–2 paragraphs
- [ ] Lead article includes inline SVG chart if data from multiple sources warrants it
- [ ] Quick takes use coloured header bars (not left-border style) with pulled-out anchor stats
- [ ] Other News and Platform Updates use tighter padding (32px top/bottom)
- [ ] Platform Updates table has Status column with colour-coded dots (red/amber/green) and alternating row shading
- [ ] Outside In includes stats row (`.oi-stats-row`) if source has benchmark data or key metrics
- [ ] On the Radar uses timeline treatment (`.radar-timeline`) with date blocks and connector dots; urgent items use `.radar-item.urgent`
- [ ] Footer includes archive bar with pill badges for previous issues

## Deep Dive Stat Discipline (v1.9.2)
_Skip this section for standard weekly and light edition issues._
- [ ] **Stat home assignments documented** in the research brief before writing began — each headline stat assigned to one home section
- [ ] Each headline stat has full context (number + explanation) in exactly one section — its home section
- [ ] All subsequent references to that stat use shorthand (e.g. "Writer's 29%", "the deployment-to-ROI gap") without re-explanation
- [ ] Executive summary frames the central tension and maps what sections cover — does not pre-digest all stats from all sources at full weight
- [ ] Source sections do not cross-reference stats from other source sections in body text — cross-referencing is the Counterpoint's job
- [ ] Counterpoint comparison grid contains no more than 2–3 metrics per column (not a full replay of each source's data)
- [ ] Counterpoint body text drives the analytical reconciliation — does not summarise what source sections already covered
- [ ] Each section's closing sentences hand off a question or tension to the next section (thread forward, not repeat back)
- [ ] Lessons & Implications section references stats in shorthand only — does not re-introduce any stat with full context
- [ ] **Post-generation stat audit completed**: scanned all sections for any stat appearing at full context more than once; rewrote duplicates to shorthand before delivery

## Deep Dive Design Enhancements (v1.2)
_Skip this section for standard weekly and light edition issues._
- [ ] Cover: left-aligned layout (not centred), 52px headline, `max-width: 700px`
- [ ] Cover: scope indicator row present (studies / sections / engineers / sources)
- [ ] Cover: lead stat band with single large stat (56px) and context sentence
- [ ] How to Read This: three-card grid (2 min / 10 min / 30 min reading paths)
- [ ] Section markers present on each major content section (1 of N through N of N)
- [ ] Progress bar: sticky red-to-coral gradient bar at top, fills on scroll (JavaScript present)
- [ ] Source sections use **distinct layouts**  — no two consecutive sections use the same treatment
- [ ] At least one source section uses article-with-sidebar (`.article-with-sidebar`)
- [ ] At least one source section opens with by-the-numbers callout (`.by-the-numbers`)
- [ ] Counterpoint section (if present): green left border, pill badge, comparison grid with red/green tint columns
- [ ] Counterpoint includes reconciliation subheading (why data doesn't contradict)
- [ ] Case study (if present): timeline treatment (`.timeline-box`) with colour-coded dates
- [ ] Lessons section: navy background (`.lessons-section`), verdict callout (`.verdict-box`) opening
- [ ] Lessons section: key takeaway box (`.key-takeaway`) with arrow-prefixed bullets closing
- [ ] Other News: two-column grid (`.other-news-grid`), tighter padding
- [ ] On the Radar: compact two-column (`.radar-compact`), urgent items in red
- [ ] Footer: archive bar with pill badges, current issue highlighted

## Template Compliance
- [ ] HTML structure matches the relevant template in `assets/`
- [ ] All CSS classes from the template are used correctly
- [ ] Cover badge matches format (orange "This Week's Briefing" / red "Deep Dive" / grey "Short Edition")
