# Pre-Publish Compliance Checklist

Run through every item before delivering an issue. If any item fails, fix it before sharing.

## Workflow Pipeline (v3.1)

These checks run before the content checks. They verify the five-phase pipeline produced the right artefacts in the right order. If any of these fail, the issue is structurally invalid — don't proceed to content checks.

- [ ] **Run directory exists** at `digest-runs/issue-N/` for this issue number
- [ ] **Phase 1 artefact present**: `candidates.json` exists, parses as JSON, validates against `references/candidates-schema.json`
- [ ] **Phase 1 completeness**: `candidates.json` has an entry for every top-tier beat (ai_tooling, eng_leadership, devex, banking_fintech, sw_eng_news, security_compliance, platform_updates) — empty beats have a non-trivial `null_finding` referencing the queries run
- [ ] **Phase 1 secondary pools**: `secondary` object includes `leadership_read`, `in_practice`, and `outside_in` arrays (rabbit_hole and p0_active optional)
- [ ] **Phase 2 artefact present**: `run-plan.md` exists in the run directory
- [ ] **Phase 2 lead justification**: run plan names the chosen lead, lists at least 2 candidates considered and rejected for the lead slot with reasons
- [ ] **Phase 2 AI-balance check**: of the top 3 anchor slots (lead, QT1, QT2), no more than 2 are AI tooling stories — OR run plan documents why the strongest case for the week is genuinely 3 AI stories, naming non-AI candidates considered and rejected
- [ ] **Phase 2 lead-sanity check**: chosen lead is in the top 3 candidates ranked by combined so-what + narrative tension + UK/ME relevance score across all beats — OR run plan justifies the choice
- [ ] **Phase 2 topic saturation**: of the top 4 anchor slots (lead, QT1, QT2, editorial moment), no more than 2 share the same beat
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
- [ ] **Proper-noun / capitalised-term scan**: scanned the full issue for proper nouns and capitalised technical terms (e.g. Temporal, DNSSEC, MCP, DORA, Octoverse, attestation, kex, epoll, PSD3, eBPF, OIDC, mTLS). Each one is either glossed inline on first use OR explained in a Jargon Watch sidebar in the same section.
- [ ] **Inline gloss format**: where used, gloss is a short parenthetical or appositive that an engineering leader who has not touched the term in 18 months can parse without leaving the page (e.g. "Temporal — a durable workflow runtime for long-running operations").
- [ ] **Jargon Watch sidebar**: where used, sidebar carries a `JARGON WATCH` label, the term, and 2–3 sentences of plain-language explanation; it is small (≤260px) and floated, not a full-width feature; it does not count toward the 3–5 layout-component cap.
- [ ] **Over-inform, don't under-inform**: if a term is doing real work in an article (mentioned more than once, drives the "why this matters"), it gets explained even if the reader "should" know it. The bar is the engineering leader who reads broadly but doesn't live in this specific stack.
- [ ] **No silent acronyms**: every acronym is expanded on first use unless it is unambiguously general-business (CEO, GDP, US, UK).
- [ ] **Cross-issue repeat acceptable**: a term that was glossed in a recent issue may be re-glossed briefly here — readers don't carry context week-to-week.

## Format & Length
- [ ] Correct format selected (weekly / deep dive / light edition)
- [ ] Standard weekly: 5–7 pages (hard limit)
- [ ] Light edition: 3–4 pages
- [ ] Deep dive: minimum 2–3 inline SVG visuals
- [ ] Page count enforcement order followed if over limit
- [ ] **When in doubt, go Light (v3.0)**: if any two of the following are true, the issue was published as a Light Edition rather than padded into a Standard Weekly — (1) the lead is a routine version release with no controversy or downstream impact story, (2) a quick take rests on a single-source funding number with no follow-on reporting, (3) Outside In is filling a slot rather than earning it, (4) Leadership Read cannot meet its 400-word floor with a defensible piece. A thin Standard Weekly is worse than a tight Light Edition.

## Topic & Lead Selection (v2.0)
- [ ] **3-issue lookback enforced**: lead article topic has not led either of the previous 2 issues (check last 3 entries in state file `issues` array)
- [ ] Lead chosen by highest impact this specific week — not by standing topic rank
- [ ] **Topic saturation cap**: of the 4 prominent slots (lead, QT1, leadership read, editorial moment), no more than 2 share the same topic area
- [ ] Topic classification uses v2.0 definitions — AI's impact on teams/culture is "Engineering leadership", not "AI tooling"; AI tool releases are "AI tooling", not "DevEx"
- [ ] **Banking & fintech reader-frame (v2.5)**: stories selected by impact on UK/ME banking/fintech engineering teams, not by source geography. US fintech moves, EU regulation, global payments shifts all eligible when they change what UK/ME teams build, buy, patch, or plan for.
- [ ] **Engineering leadership source sector (v2.5)**: a Shopify/Netflix/Atlassian-style leadership story is eligible for this topic area when the lesson applies to a banking/fintech eng team — don't filter by source sector.
- [ ] **"Worth reading" test passed**: every lead article and quick take has narrative, tension, or insight beyond just being important to know. Stories that are important but not interesting to read are in Week at a Glance, Platform Updates, or On the Radar instead.
- [ ] Version lifecycle deadlines (EOLs, deprecations) are in Platform Updates / On the Radar — not given article treatment unless the story has genuine narrative beyond "update by date X"
- [ ] Testing stories: only full article treatment if structural shift; single-company case studies → Leadership Read or Outside In
- [ ] Testing has not anchored consecutive issues

## Audience-fit & urgency gates (v3.2)

These checks enforce the v3.3 audience definition. The reader is engineering leadership at a fintech operating in the customer-loyalty / commerce-media space, working with UK and Middle East banks as customers — plus a wider management team that includes managers who came in from non-technical routes. The test for every anchor slot: "what guides the team's work" vs. "what the team's work is."

- [ ] **Lead urgency**: the Lead qualifies as `act_this_week` or high-impact `decide_this_month` for the audience. If `general_awareness`, the curation has failed — replace the lead. ("Node.js 20 reaches EOL in months" is `general_awareness`. It does not lead.)
- [ ] **Quick Take urgency**: each Quick Take meets the same `act_this_week` or high-impact `decide_this_month` bar. If a Quick Take resolves to `general_awareness`, demote it to On the Radar, Week at a Glance, or Other News.
- [ ] **Anchor depth-fit**: for each anchor slot (Lead, QT1, QT2), there is a clear "what guides the team's work" takeaway that does not require the reader to be running the system themselves. If the only useful version of the takeaway is for someone patching, deploying, configuring, or writing code, the story is in the wrong slot — demote.
- [ ] **Banking/fintech framing (v3.3 — supersedes v3.2 customer-pressure gate)**: banking, fintech, and loyalty stories are framed positively as *"the world the reader operates in and the engineering decisions their peers and customers are making"* — not as customer-pressure briefings, and not as compliance briefings for the reader's own firm. Regulatory stories (FCA, ADGM, PSR, DORA) qualify for any slot they earn on operational impact, including the Lead.
- [ ] **In Practice source check (v3.2)**: the *In Practice* piece (if present) is from the strict whitelist — Monzo, Wise, Stripe, Cloudflare, GitHub, Shopify, Spotify, Intercom, Airbnb, or Figma. Off-whitelist sources require a documented exception in run notes. Whitelist alone is not sufficient — the three required qualities (named operator, journey not framework, technical content at implication level) still apply.

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

## Quick Take Layout (v1.9)
- [ ] Quick take layout variant (QT-A / QT-B / QT-C) differs from `last_qt_layout` in the state file
- [ ] If QT-B: stronger story is in the wider (60%) column; compact column has anchor stat + 2–3 sentences + takeaway only
- [ ] If QT-C: only one story genuinely earns quick-take treatment — second card not forced for symmetry
- [ ] `last_qt_layout` updated in state file after generation

## Outside In Format (v1.9)
- [ ] Outside In format (A–F) differs from `last_oi_format` in the state file
- [ ] Chosen format matches the strength of the source material (see format menu in editorial spec)
- [ ] Placement matches the format’s rules: A after LR, B before LR, C after lead, E within lead, F flexible
- [ ] Format D (omit) used only when nothing genuinely earns inclusion
- [ ] `last_oi_format` updated in state file after generation

## Mid-Issue Accent (v1.9)
- [ ] If mid-issue accent is present, it uses a different variant (number band / mini-highlight) from the last issue
- [ ] Number band stat comes from a story already covered — emphasis, not new content
- [ ] Mini-highlight is genuinely interesting — not filler
- [ ] Mid-issue accent omitted if nothing earns it (optional component)

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

## Entry Pattern Rotation (v2.1)
- [ ] Lead article opener differs from `last_lead_opener` in the state file
- [ ] No two articles (lead, quick takes, Feature) in this issue share the same opener style
- [ ] Opener styles drawn from the catalogue: stat-first, quote-first, summary-first, narrative-first
- [ ] Each opener suits its story — style chosen for editorial fit, not just rotation
- [ ] `last_lead_opener` updated in state file after generation

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

## Prose Style (v1.5, expanded v1.8)
- [ ] Epistemic reframing statements appear no more than **2 times** in the entire issue. The full pattern catalogue (all count toward the cap):
  1. "the question is not X — it's Y"
  2. "the real X was Y" / "the real issue is not X — it's Y"
  3. "the interesting part isn't X — it's that Y"
  4. "less a X than a Y" / "this is less about X than Y"
  5. "not whether X, but how Y" / "not whether, but how"
  6. "not just X — it's Y"
  Any close variation (e.g. "the hardest problem here is not X", "the question is no longer X") also counts.
- [ ] **Mandatory scan completed**: after generating the full HTML, every sentence was scanned for the six patterns above (and close variations), the count was confirmed at or below 2, and any excess was rewritten as direct declarative statements
- [ ] Remaining analytical points use direct declarative sentences instead of the reframing pattern

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

## Audience Framing (v3.3 — supersedes v3.2 customer-pressure framing)
- [ ] Reader-frame phrasing matches the v3.3 audience: engineering leadership at a fintech in the customer-loyalty / commerce-media space, working with UK and ME banks as customers, plus a wider management team that includes managers from non-technical backgrounds. Acceptable descriptors: "engineering leaders", "engineering directors", "heads of engineering", "your management team", "for your teams", "in your org".
- [ ] Audience is never described as "engineering managers in banks" or any phrase that locates the reader as a bank's internal eng team
- [ ] Banking, fintech, and loyalty stories are framed positively as *"the world the reader operates in"* — not as "customer-pressure" briefings, not as compliance briefings for the reader's own firm
- [ ] Regulatory stories (FCA, ADGM, PSR, DORA) are evaluated for any slot — including the Lead — on operational impact, not blocked by a categorical "never the lead" rule
- [ ] Accessibility check: the issue is readable by an engineering manager who came in from a non-technical route (former scrum master / delivery manager / PM). Jargon Watch sidebars, inline glosses, and the agent-terminology precision rule all serve this reader as well as the senior eng reader

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

## Pacing & Layout (v1.7)
- [ ] Weekend magazine pacing: quick hits open briskly, lead/quick takes build, Leadership Read/Outside In ease the reader out
- [ ] Two-tier label hierarchy applied: Tier 1 labels (section labels, cover labels, key takeaway title) in all-caps with 3–4px letter-spacing; Tier 2 labels (tier labels, quick-take headers, stat labels, table headers, badges, archive bar label) in sentence case with 1–2px letter-spacing
- [ ] Tier 2 labels written in sentence case in the HTML — not relying on CSS `text-transform: uppercase`
- [ ] Article opener for the lead differs from last issue's opener style (stat-first / quote-first / summary-first / narrative-first)
- [ ] Quick takes within this issue use different opener styles from each other
- [ ] If lead article uses a sidebar, it uses the correct layout for the format: **floated inset box** (`.sidebar-box-float`) for standard weeklies, **grid sidebar** (`.article-with-sidebar`) for deep dives only
- [ ] Standard weekly sidebar box has a clear purpose (context, methodology, "what we said last week") — not decorative
- [ ] `.article-with-sidebar` (65/35 grid) is NOT used in any standard weekly issue
- [ ] Section breathers (`.section-breather`) placed between The Week at a Glance and Lead Article, and between Quick Takes and Other News
- [ ] No more than 2 section breathers in the issue
- [ ] Editorial moment present after foreword/P0, before The Week at a Glance
- [ ] Editorial moment variant differs from `last_editorial_moment` in state file (no consecutive repeats)
- [ ] Editorial moment is brief, personality-rich, and tonally distinct from the main editorial content
- [ ] `last_editorial_moment` updated in state file after generation

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
