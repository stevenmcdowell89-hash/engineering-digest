# The Engineering Digest — what it is, who it's for, and how it's made

*An explainer for anyone picking this up cold. Written against the repo as it stands at Issue 22 (14 August 2026), skill version v1.38.*

---

## 1. The one-paragraph version

The Engineering Digest is a weekly, magazine-style briefing for hands-off engineering leadership — directors, VPs and heads of engineering — at a fintech in the customer-loyalty /
commerce-media space whose customers are UK and Middle East banks. Its cover tagline is *"Engineering decisions, every Friday."* It is not a news feed, not a link dump and not a
to-do list: it is a curated, opinionated read that tells a leader what moved in the engineering world this week and what conversation it changes. Each issue is a single self-contained
HTML file (plus a PDF), published to an archive site with push notifications. It is produced by an AI pipeline governed by a heavily versioned editorial
specification (currently v1.38) whose revisions are almost all traceable to specific, named failures in past issues.

---

## 2. Purpose

### The reader

The digest is written for a specific person, and almost every rule in the spec exists to protect that specificity:

- **Engineering leadership at a fintech operating in customer loyalty / commerce media**, working with UK and Middle East banks *as customers* — not managers inside a bank.
- **Directors, VPs, heads of engineering**, plus the wider management team — including managers who arrived from non-technical routes (former scrum masters, delivery managers, PMs
  stepping into engineering leadership) and need an accessible read on the wider landscape.
- They **guide and direct teams**. They make decisions about rollouts, adoption and maintenance. They do not build CI/CD pipelines, ship code, write prompts or patch CVEs themselves.

The digest is meant to be their one reliable weekly read on: the bank engineering orgs they partner with, the broader UK/ME fintech ecosystem, the loyalty / commerce-media patch they
operate in, and the management craft they are still growing into.

### The central curation test

Everything is filtered through one question:

> **What guides the team's work, versus what the team's work *is*.** The digest covers the first. It does not cover the second.

The spec works this through with examples:

| Topic | In scope | Out of scope |
|---|---|---|
| Agentic coding rollout | How to set the team up to adopt it, what pre-work is needed, how to plan work so adoption succeeds, what changes about review, calibration, hiring and levelling | Prompt patterns, instruction-file contents, the CLI command, the config flag, the model setting |
| Test automation | How a team approached the rollout, what broke, what changed about engagement with engineers, what they learned | Which Cypress version had which bug, test-runner configuration, code-level test patterns |
| A vulnerability or version EOL | "Is this widespread now, do my teams need to act this week or this month, what conversation should I be having?" | Remediation steps, the patch command, the migration code path |

A second gate — the **audience-fit gate** — asks of every candidate: *what does the reader do with this on Monday?* If the answer requires them to be running the system themselves
(patching, deploying, configuring, writing code), the story cannot lead and cannot anchor a Quick Take. It can still appear as a one-liner where the required action is "be aware" or
"delegate."

### Stance

- **No action items.** The digest informs and contextualises; the reader draws their own conclusions.
- **Third-person editorial voice.** The publication never addresses the reader directly — *"your team"*, *"you should"*, *"the reader's firm"* and rhetorical questions to the
  audience are all banned constructions. This was added after an issue shipped with 13+ instances of "the reader."
- **Confident and opinionated** — Pragmatic Engineer, not press release. No corporate language ("leverage", "synergy", "best-in-class").
- **Weekend magazine pacing.** It is opened on a Friday or over the weekend. Quick hits up front, the lead and quick takes in the middle, the reflective long reads as a slow close.
  "A short magazine you finish with your coffee, not a task list you work through."
- **No branding.** The masthead says *Engineering Digest* and nothing else — no company name anywhere in the publication.

---

## 3. What it covers

### Four operational concerns

Stories are classified not by subject but by **the operational decision they trigger**:

1. **Management & teams** — 1:1s, performance conversations, calibration and levelling, career frameworks, hiring loops, onboarding, skip-levels, the manager-of-managers transition,
   coaching, retention.
2. **Ways of working** — how teams deliver and change practice: delivery metrics (DORA, SPACE), trunk-based development, CI/CD adoption, internal developer platforms, incident-response
   culture, team topologies. The agentic-coding rollout question lives here.
3. **Operating at scale** — running production systems and the orgs that keep them running: post-mortems with narrative weight, outage analysis, on-call design, observability under
   load, dependency lifecycle when the deadline is live, security when exploitation is active.
4. **Wider engineering landscape** — cross-industry engineering news, vendor moves with cascade effects, hyperscaler decisions, landmark research, labour-market shifts, peer
   engineering decisions at scale-tech orgs. The test: *"would this be the biggest engineering news at Spotify, GitHub or Mozilla as much as at the reader's org?"*

**AI is the substrate that runs through all four — not a fifth concern.** This is one of the most consequential design decisions in the spec. A Cursor capability release is a
one-line mention; a Cursor *pricing* change that forces a budget conversation is a Quick Take or a Lead. Tool releases are never leads by default. The test: *can the reader take this
into a conversation with their team, their finance partner, their customers or their leadership?*

**Banking, fintech and loyalty** are a consistent cross-cutting sub-theme rather than a beat: a Monzo data-mesh piece is *Ways of working* with a banking surfacing note; a Visa
protocol launch is *Wider engineering landscape* with a loyalty note. Research queries for loyalty / commerce-media engineering run every single week, but a forced thin fintech piece
never displaces a strong general-engineering one.

**Priority 0** sits above all four: cross-cutting events (hyperscaler outages, mass-exploited zero-days, infrastructure-level disruption) that always lead and are never crowded out.
Most weeks nothing qualifies. Test: *would an engineering leader regret not knowing this on Monday morning?* P0 stories are tracked across issues with a status card — a status badge
and dated event log, never a progress bar, because P0 incidents rarely have a known endpoint and a bar implies false precision.

### What is deliberately demoted

- **Bank-regulator decisions** (FCA, ADGM/FSRA, PSR, HMT) are scope-conditional: eligible for anchor slots only if the implications cross industries — *"would this matter at
  Mozilla, Spotify or GitHub?"* A rule affecting UK payment institutions specifically does not. This rule exists because an early issue led with an FCA story, and the reader is
  *upstream* of the regulated entity.
- **Platform and runtime updates** (.NET, Node.js, framework releases) never get article treatment. A Node.js EOL is "be aware, plan something" — a radar line, not a headline.
- **Routine hyperscaler launches** — reference rows only, unless they hit at Priority 0 scale.

### Two tests every story must pass

1. **The "so what?" test** — does this change how engineering managers manage, prioritise, buy or flag risk?
2. **The "worth reading" test** — is there a narrative, tension or insight that makes it genuinely interesting to read, not just important to know?

Stories that pass the first and fail the second go to the scan-and-go reference sections. The article sections are the magazine sections; they have to reward the reader's time with a
story.

Plus **strict date discipline**: the window is the previous 7 days, verified against the primary source's own publication date. Older stories qualify only under the *new-in-window*
rule — genuine new traction, reaction or follow-up this week, and the article must say when the original event happened. When a date is borderline, the story is demoted. *"Stale
stories given headline treatment destroy reader trust."*

---

## 4. Curation: the balance rules

Selecting good stories is not enough — the issue has to hold together as an issue. The spec enforces this with a set of balance rules, nearly all of which were written after a
specific issue got it wrong:

- **News-event Lead test** — the Lead must be driven by a news event, not a reflective essay. A good blog post published this week is not a news event; it belongs in the back-of-book
  sections.
- **Anchor balance** — of the three anchor slots (Lead, Quick Take 1, Quick Take 2), at least two must be news events. News up front, analysis at the back.
- **Within-issue concern diversity** — the three anchors must span at least two of the four operational concerns.
- **No-repeat anchor** — a story that anchored either of the previous two issues cannot anchor this one, even in a different slot. A single-sentence *cross-issue throughline* inside
  another article is the only allowed callback.
- **AI-substrate ceiling** — across the six featured sections (Lead, QT1, QT2, Editorial Moment, Outside In, In Practice), at most four can have AI as the substantive driver. An
  earlier anchor-only version of this rule passed an issue that readers still experienced as wall-to-wall AI.
- **Long-form variety** — of the three reflective sections (In Practice, Outside In, Leadership Read), at most one can have AI or agents as its primary subject.
- **Source diversity** — no publication in more than two sections of an issue; no publication as Leadership Read in consecutive issues; no repeat Outside In company across the whole
  run; Outside In must draw from at least two sector categories in any rolling four issues.
- **Adjacent-source rule** — no two consecutive featured sections from the same outlet, which catches back-to-back same-company pieces that a per-issue count misses.
- **Soft breadth guardrail** — across rolling four issues, leads should span at least three of the four concerns. Explicitly editorial guidance, not a mechanical block: if the same
  concern has the genuinely strongest story two weeks running, it takes it and the run plan records the call.

---

## 5. Anatomy of an issue

### Three formats

| Format | When | Length |
|---|---|---|
| **Standard Weekly** (default) | 2–3+ stories that all pass the "worth reading" test | 2,600–3,700 words of body copy |
| **Deep Dive** | One story dominates the whole issue | No word limit, but 3–4+ inline SVG visuals are mandatory |
| **Light Edition** | The top-priority areas were quiet | 1,200–2,000 words |

Format is a *consequence of the candidate pool*, not a decision made up front. **"When in doubt, go Light"**: a thin Standard Weekly padded to look full is worse than an honest Light
Edition. The word floor enforces the same thing from the other side — below 2,600 words an issue is a Light Edition that has not admitted it.

A Deep Dive trigger fires after three consecutive non-deep-dive issues, but *a trigger is not a mandate*. At Issue 22 the trigger fired and was declined in writing, on evidence
quality: no story dominated the window, and of five data threads in the candidate cluster only one verified against primary sources. That reasoning is preserved in the run plan.

### The standard weekly, section by section

1. **Cover** — masthead, contents, estimated reading time, and a **lead pull-stat**: the single most memorable number in the issue, set large in a tinted band.
2. **Foreword** — one paragraph, 50–80 words, one editorial point. It finds the thread of the week; it never lists the stories. It may not frame the week around whether AI was noisy
   or quiet.
3. **P0 status card** — only when a Priority 0 story is being tracked.
4. **Editorial Moment** — a short curatorial aside: *"Worth a second look"*, *"Number of the week"* or *"Quote of the week"*.
5. **The Week at a Glance** — 5–8 quick hits in three urgency tiers: **Action Required** (red), **Worth Knowing** (teal), **Watching** (grey). The scannable spine of the issue.
6. **Lead article** — 300–400 words, subheadings, a pull-quote bar, and a chart when the data supports one.
7. **1–2 Quick Takes** — 150–250 words each, with an anchor stat, in one of three layouts (equal grid, featured + compact, or a single full-width card when only one story earns
   it). Each ends with a bold **"The takeaway"** line stating what has changed — never an instruction.
8. **Mid-issue accent** — an optional pattern-breaker: a number band or a mini-highlight.
9. **In Practice** — first-person operational writing (see below).
10. **Other News This Week** — 3–6 one-line items with links.
11. **Platform Updates** — 0–2 rows, maximum. Most weeks it is one row or omitted.
12. **Outside In** — a transferable lesson from another engineering org (see below).
13. **On the Radar** — a dated timeline of deadlines and upcoming events.
14. **The Leadership Read** — the reflective close (see below).
15. **Recommended Reading**, then a **footer** with an archive bar of the last five issues.

**Section spread rule:** no two long-form sections may be adjacent. The default order interleaves them with news — Lead + Quick Takes → In Practice → Other News → Platform
Updates → Outside In → On the Radar → Leadership Read — so the back of the issue is never a wall of essays.

**Word-budget enforcement** has a defined cut order when a draft runs long (shorten Outside In first, then drop occasional sections, then demote the weakest article, then tighten the
Lead). *In Practice* is explicitly not a cut lever: it either earns its 300–450 words or it is omitted with a "returns next week" note.

### The three recurring long reads

**In Practice** — first-person operational writing from a **named operator at a named organisation**. Three qualities, all required: (1) a real person who did the thing, not an
"editorial team" byline; (2) a journey, not a framework — *"how we…"*, *"what we learned when…"*, never *"here's how X should work"*; (3) technical content at the level of
implications, not instructions. It is calibrated against three Monzo engineering posts as an archetype. It runs in **themed seasons of 3–4 issues** — two of them calendar-anchored
to the performance cycle (April–May year-end, October–November mid-year), the rest rotating through management craft, technical leadership for managers, managing upwards, and
agent-era management. Seasons are cut short rather than dragged. It closes with a bold **"What to try"** line pitched peer-to-peer, never prescriptive.

**Outside In** — a lesson from another engineering organisation, chosen by **transferability, not sector**. The gate is the substitution test: swap the company name for "a large
engineering org" and the technology for "a new platform". If the sentence still means something, it's in; if it collapses into "a large engineering org adopted a new language and it
was challenging", it's rejected. Migration stories where the headline is the technology, and domain-quirk stories, are explicitly out. No company may repeat across the entire run.

**The Leadership Read** — the deepest curated piece, 400–600 words, on a navy background. It must name the author's actual argument, give at least two concrete mechanisms or
examples, and leave a takeaway even for a reader who never clicks through — the "strip the link" test. It ends with a **"This could be worth talking about:"** discussion prompt. It is
omitted cleanly rather than shipped hollow, with a limit of two consecutive issues without one.

### Reader-service devices

- **Jargon Watch** — glosses a technical term, protocol or standard the article leans on. The trigger covers proper nouns, acronyms (including lowercase ones like `mTLS` or
  `LLM-eval`), hyphenated neologisms used as named concepts, and any term appearing three or more times in one section.
- **Concept of the Week** — the same idea for *management craft* concepts (calibration, levelling, skip-levels, psychological safety, RACI), aimed squarely at the year-one manager
  from a non-technical route. That reader is the explicit bar: if a term is borderline for them, it gets glossed.
- **Author cards** — initials avatar, name, role, org and date on each long-form section, reinforcing the load-bearing claim that a real named person at a real organisation wrote it.
- **Visuals** — 4–6 per issue, of which at least one or two must be a real chart, table or diagram rather than a stats row. Inline `<svg>` only. **No AI-generated images, ever.** If
  a clean visual can't be produced honestly, another visual is substituted; the section never ships degraded or fabricated data.

### Prose guardrails

A handful of anti-tic rules keep the voice from drifting:

- **Epistemic reframing capped at two per issue** — any sentence that names what something is *not* in order to introduce what it *is* ("the question isn't X, it's Y"). The check is
  structural, not a search for set phrases, because writers kept passing the lexical scan while shipping variations.
- **One quote, one slot** — the same source line can't anchor two sections.
- **Attribution fidelity** — a concept attributed to a named source must use that source's actual terminology; inventing a memorable label and putting it in their mouth is banned.
- **Define agent terminology on first use** — say which end of the spectrum a story sits at (agent-mode workflows inside a tool vs production agents with action authority), because
  surveys routinely conflate them.
- **Readability** — described in the spec as a nudge rather than a rule: clean declarative sentences, break anything past ~30 words. *"A Friday-morning briefing, not a literary essay
  — it doesn't need to be Tolstoy."*
- And the non-negotiables: no fabricated links, always search the web (never write from training data), no inflammatory headlines, no corporate language.

---

## 6. How it works (high level)

### A five-phase pipeline

Each issue is produced by five sequential phases, each run as a separate agent, each leaving a written artefact on disk:

| Phase | Output | What happens |
|---|---|---|
| 1. **Beat sweep** | `candidates.json` | Research every concern (3–5 queries each) plus secondary pools for Leadership Read, In Practice, Outside In, rabbit hole and live P0 stories. Empty beats must be recorded with an explicit null finding naming the queries run — "nothing came up" is not an acceptable answer. |
| 2. **Inventory & rank** | `run-plan.md` | The curation step. Score every candidate, apply the audience-fit gate and every balance rule, choose the lead and each slot, pick the format, and record the candidates rejected for the lead and why. |
| 3. **Slot detail** | `section-briefs.md` | Per-section briefs: opener style, sidebar plan, jargon to gloss, quotes allocated to slots, word targets, source URLs. Primary sources are fetched and figures verified here. |
| 4. **Generate** | `issue-N.html` | Write the HTML against the plan. Execution only, no editorial decisions. If a link doesn't resolve or a quote turns out not to exist, the writer stops and flags rather than improvising. |
| 5. **Review** | `review.md` | Run the full compliance checklist (~380 lines of checks) plus a lead-sanity cross-check that the shipped issue matches the plan. Nothing delivers until it passes. |

**Why the split exists.** Earlier versions chose the lead *during* research — anchoring on the first strong story found rather than on the best story of the week. Separating
research from curation, and curation from writing, with a reviewable artefact at each handoff, is the load-bearing design. Phase 4 may not silently promote, demote or substitute a
story; any change goes back to Phase 2.

**Recall in research.** Named, beat-framed queries are treated as a precision layer that is inherently incomplete, so three recall rules run alongside them: name-agnostic patterned
catch-alls ("*<sector> company layoffs restructure <month>*"), a cross-beat entity sweep (any organisation found under one concern's framing is swept again under the other three,
explicitly including workforce and restructure terms), and a whole-source rule (a primary source opened for verification is read for everything material in it, not just the number
being checked). All three came from a single miss: a major payments-company restructure that never entered the candidate pool at all because it fell in the seam between two beats.

### Continuity between issues

A state file (`engineering-digest-state.json`) carries the run forward: issue number, last lead topic and the last three, consecutive non-deep-dive count, Outside In company history,
Leadership Read history, In Practice season and history, cadence dates for the occasional sections, and tracked P0 stories. It is written **only at the deliver step**, so test runs
can be repeated against the same week without polluting season state.

Every run leaves its directory (`digest-runs/issue-N/`) in the repo permanently. It is the audit trail — the reason it's possible to reconstruct, months later, why a given issue led
with what it led with, and what was rejected.

### Publication

The issue ships as a single self-contained HTML file (all CSS inline, 900px magazine container, Playfair Display + Source Sans 3, a fixed navy/teal palette that the spec marks "never
change"). A script renders a PDF via headless Chromium. Both land in `issues/`, listed on an archive index page. The site runs on a Cloudflare Worker that also handles web-push
subscriptions, and a GitHub Action fires a push notification to subscribers whenever a *new* issue file is added to `main` — edits to existing files deliberately don't re-notify.

### How the digest improves itself

The most distinctive thing about this project isn't the pipeline — it's the feedback loop around it. The skill's changelog is a post-mortem log. Nearly every rule in the spec is
traceable to a named issue that got something wrong:

- An issue led with an FCA decision → the reader is upstream of the regulator, so bank-regulator stories became scope-conditional.
- An issue shipped as a "curated essay anthology" with five of six featured slots being blog posts → the news-first Lead test and the anchor-balance rule.
- An issue shipped three back-to-back AI essays at the back → the long-form variety rule.
- A major restructure was missed entirely by the research sweep → the recall layer described above.
- The 5–7 page limit was breached by ten consecutive issues because it was arithmetically unreachable against the spec's own substance floors → it was retired for a measured word
  budget, on the principle that **"a rule every issue breaks is not a rule."**

There is also visible restraint in the other direction: the changelog repeatedly retires rules as well as adding them (mechanical rotation trackers, a strict source whitelist, a
six-variant format menu, blanket blocks replaced by conditional tests), with the explicit note that *"the spec is already gathering more rails than is healthy."*

---

## 7. Related

A sibling publication, the **Product Edition**, lives in the same repo: a monthly briefing for product managers and product leaders at the same company, covering movement in the
card-linked-offer / cashback / rewards category and seeding sourced roadmap threads. Same production philosophy, separate spec, separate template and its own archive page.
