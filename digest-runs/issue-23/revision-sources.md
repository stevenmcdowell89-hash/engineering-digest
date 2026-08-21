# Issue 23 — Revision source pack (practitioner & rollout narrative)

**Purpose.** Replace survey-percentage material in the day-to-day-usage (S2) and implementation (S5) sections with named practitioner and organisational narrative. Audience for this revision is **manager-and-down** — engineering managers, team leads, and their engineers — so the compression below is pitched at *what a team does differently on Monday*, one level more concrete than exec-briefing altitude, but still not a tutorial (no prompt text, no CLI, no config).

**Window.** Published Dec 2025 – Aug 2026. All 16 main-pack sources are 2026. Every date below is the date printed on the page.

**Verification.** Every quote in this pack was checked character-for-character against the raw page text (curl → tag-stripped extraction), not against a summariser's paraphrase. Where a quote was reported by an intermediate fetch but **could not** be found in the raw text, it has been removed and the removal is logged in the appendix. Curly quotation marks in sources are rendered as straight quotes here; nothing else is altered.

**Counts.** Bucket A (day-to-day team practice): 7. Bucket B (rollout mechanics): 9. Total 16.

**Exclusions honoured.** No Monzo Agent Chip, no Bessemer *Atlas: AI-pilled engineering teams*, no James Socol LeadDev piece, no Lloyds 300-roles release, no JetBrains / DX / DORA / Veracode / GitClear / METR survey material. Two sources are new, complementary pieces from orgs already in the issue (Bessemer on Shopify; Lloyds' Glasgow engineering programme) — allowed under the brief.

---

# BUCKET A — Day-to-day team practice (for the rewritten lifecycle section)

---

## A1. "Engineering practices that make coding agents work" — Pragmatic Summit fireside chat

**Simon Willison** · independent developer, creator of Datasette; former Django co-creator · self-published on simonwillison.net · **14 March 2026** (transcript of a February 2026 Pragmatic Summit session) · https://simonwillison.net/2026/Mar/14/pragmatic-summit/
**Bucket:** A · **Spectrum:** agent-mode → autonomous · **First-person operator:** yes

### Verbatim

> "Every single coding session I start with an agent, I start by saying here's how to run the test—it's normally uv run pytest is my current test framework. So I say run the test and then I say use red-green TDD and give it its instruction. So it's "use red-green TDD"—it's like five tokens, and that works. All of the good coding agents know what red-green TDD is and they will start churning through and the chances of you getting code that works go up so much if they're writing the test first."

> "the reason not to write tests in the past has been that it's extra work that you have to do and maybe you'll have to maintain them in the future. They're free now. They're effectively free. I think tests are no longer even remotely optional."

> "You have to get them to test the stuff manually, which doesn't make sense because they're computers. But anyone who's done automated tests will know that just because the test suite passes doesn't mean that the web server will boot."

> "There's a lot to be said for keeping your codebase high quality because the agent will then add to it in a high quality way. And honestly, it's exactly the same with human development teams—if you're the first person to use Redis at your company, you have to do it perfectly because the next person will copy and paste what you did."

### Mechanisms

- **Session-opening ritual.** Every agent session starts the same way: point the agent at the test command, then name the discipline (red/green). It is a team convention, not a prompt library — the discipline is what carries, and it fits in a sentence.
- **Tests reframed as the guardrail, not the chore.** The historical objection to tests (writing and maintaining them costs engineer time) is gone; what remains is that a test suite is the only mechanism by which an agent can tell whether it has finished. Teams that skipped tests have no such mechanism.
- **Automated tests are necessary but not sufficient.** A green suite does not prove the service boots. Practice: require the agent to exercise the running system manually and leave a written record of what it exercised, as an artefact reviewers can read.
- **Repo readiness is a quality flywheel.** Agents replicate whatever patterns already exist — including bad ones. One or two well-written tests in the team's preferred style set the style for everything the agent adds afterwards.
- **Templates as the mechanism for repo readiness.** Willison keeps project templates (cookiecutter) so a new repo starts with a readme, CI, and a small test in the house style. The team-scale equivalent is a golden-path repo template, not a document telling people to be careful.
- **Code quality from agents is a choice, not a fate.** For long-lived, high-stakes code, refinement passes are part of the process; for throwaway work they are not.

**What this gives a team mid-rollout:** the cheapest high-yield change available — make repo readiness and a runnable test command the precondition for agent work, and hold one convention for how every agent session opens.

---

## A2. "The Coming Loop"

**Armin Ronacher** · creator of Flask, formerly Principal Architect at Sentry; now working on agent tooling (Pi / OpenClaw) · self-published on lucumr.pocoo.org · **23 June 2026** · https://lucumr.pocoo.org/2026/6/23/the-coming-loop/
**Bucket:** A · **Spectrum:** autonomous (harness-driven loops) · **First-person operator:** yes

### Verbatim

> "I don't prompt Claude anymore. I have loops running that prompt Claude and figuring out what to do. My job is to write loops."
> — *attributed by Ronacher to Boris Cherny, quoted as the epigraph of the piece. This is NOT Ronacher's own line; several secondary write-ups misattribute it to him.*

> "The pattern is the same everywhere though: work is put into a queue of sorts, a machine picks it up, attempts it, stops, and then some harness decides whether that was actually the end."

> "My current status is that I have not had much success with this way of working for code I deeply care about which turns out to be quite a lot of code."

> "Present-day models tend to produce code that is too defensive, too complex, too local in its reasoning. They avoid strong invariants. They add fallbacks instead of making bad states impossible. They duplicate code, invent bad abstractions, and paper over unclear design with more machinery."

> "I believe that loops that produce artifacts without necessity of longevity or that create some form of clearly verifiable mechnical translation matters more than the general ability of a harness to mechanically measure a goal." *(sic — "mechnical" is the source's spelling)*

### Mechanisms

- **The named next step past "run agents in parallel."** A queue of work, a machine that picks it up, and an outer harness that decides whether the attempt is finished or should be re-run with modified context. The human's job moves from prompting to designing the loop and its stopping rule.
- **A concrete "when NOT to use an agent unattended" test.** Loops work where the output is a *transformation of code that already exists* (ports, migrations), or where the artefact is deliberately short-lived (performance experiments, security sweeps, research). They work badly on new, long-lived code with load-bearing invariants.
- **The failure mode is legible and reviewable.** Unattended loops accrete defensive fallbacks rather than making bad states impossible. Each iteration adds a small defence and the system becomes less understandable while appearing more robust. Reviewers can be taught to look for exactly this signature.
- **A stopping signal does not need to be objective.** It only needs to be good enough to drive another iteration — an LLM judge is often sufficient for translation-shaped work.
- **A named risk for juniors.** Given loop tooling without guidance, juniors learn the defensive pattern and will argue for it convincingly, because the machine's rationalisation is fluent.
- **Comprehension as an explicit team standard.** Ronacher's bar is being able to explain what the system does under pressure without asking the model first. That is a statable norm, not a vibe.

**What this gives a team mid-rollout:** a defensible line between work that can run unsupervised in a loop and work that cannot — drawn on the shelf-life and invariant-density of the output, not on task size.

---

## A3. "Mitchell Hashimoto's new way of writing code"

**Mitchell Hashimoto** (subject; co-founder of HashiCorp, creator of Vagrant/Terraform, now building the Ghostty terminal) · reported by **Gergely Orosz** · The Pragmatic Engineer · **25 February 2026** · https://newsletter.pragmaticengineer.com/p/mitchell-hashimoto
**Bucket:** A · **Spectrum:** agent-mode, heavily parallel · **First-person operator:** no — journalism, but built on a named operator speaking about his own practice

### Verbatim

> "If I'm coding, I want an agent planning. If they're coding, I want to be reviewing."

> "open source has always been a system of trust. Before, we've had default trust. Now it's just default deny."

> "We're at the Gmail moment for version control... never delete, archive everything."

> "There's a lot of people like, 'I don't want it to write code for me.' But just delegate some of the research part."

### Mechanisms

- **A schedulable rule for the day, not a productivity aspiration.** Always have an agent doing *something*; the human and the agent are never in the same mode at the same time. Coding ↔ planning; coding ↔ reviewing. This is directly transplantable as a team norm.
- **Slow work gets queued at transitions.** Before stepping away — end of day, leaving the house, going into a meeting — the question is "what's a slow thing an agent could do next?" Research, library comparison, and edge-case enumeration are the canonical answers because they need no real-time attention.
- **Sceptic conversion has a specific first move.** Don't ask a sceptical engineer to let an agent write code. Ask them to delegate the *research* — comparing libraries, enumerating edge cases. It sidesteps the identity objection entirely.
- **Review discipline scales down, not up.** For Ghostty he reviews every line. The parallelism is in the *preparation and investigation*, not in unreviewed merges.
- **Adjudication instead of trust.** Where confidence is low, he runs the same task against multiple models in separate checkouts and picks between the outputs — a practice only economic because machine time is cheap and human time is not.
- **Contribution intake flips to default-deny.** Agent-generated contributions from outside make plausible-but-wrong changes cheap to produce, so the burden of proof moves onto the submitter. Directly relevant to any team accepting PRs from beyond its own squad.

**What this gives a team mid-rollout:** the single most portable daily practice in this pack — never let human and agent occupy the same mode — plus a low-friction on-ramp for the team's sceptics.

---

## A4. "Agentic Code Review"

**Addy Osmani** · engineering leader at Google, long-time head of developer experience for Chrome · self-published on addyosmani.com · **15 June 2026** · https://addyosmani.com/blog/agentic-code-review/
**Bucket:** A · **Spectrum:** agent-mode · **First-person operator:** yes (practitioner essay drawing on external data)

### Verbatim

> "One line from a developer has stayed with me: reviewing an agent's PR made them "the first human being to ever lay eyes on this code". That is worth sitting with, and it points straight at the fix. In normal review the author already understood the change and you were checking their work. With an agent PR, nobody has reconstructed the why yet, and the reviewer is the first to try."

> "A confident "looks good" with no human anywhere in it is borrowed confidence: the system's certainty becomes yours, and nobody actually understood anything. The loop can be both very sure and very wrong, with no human left to tell the difference."

> "Of 617 distinct flagged locations, 93.4% were caught by exactly one of the four tools. 6% by two. Almost none by three. None at all by all four."

> "Keep PRs small, deliberately. Agent PRs run large, 51% larger on average in the Faros data, and reviewer engagement is one of the strongest predictors that a PR merges at all. A large unreviewable PR gets rejected outright or, worse, rubber-stamped. Instruct your agents to produce small commits. A diff a human can actually read is now a design constraint."

### Mechanisms

- **Names the actual mechanical change in review.** Human-authored review is *verification* — someone already understood the change. Agent-authored review is *reconstruction* — the reviewer is the first mind to build the model of why. That is a different, more expensive job, and it explains the review-time blowout better than volume does.
- **PR intake requirements as the countermeasure.** Before a human reads it, an agent PR must carry: a statement of why the change is being made, a diff of readable size, and evidence the tests were actually run. This pushes reconstruction work back to the submitter, where it is cheap.
- **Small diffs are now a design constraint, not a style preference.** Agent PRs run materially larger, and oversized diffs get rubber-stamped rather than rejected. Instructing agents to produce small commits is a review-load intervention.
- **Risk-tiered review, keyed to the code path rather than the author.** Config changes get a lint and a glance; payments and auth paths get type checks, tests, more than one automated reviewer, a domain expert, and a security look.
- **Multiple automated reviewers are complementary, not redundant.** Across a real 146-PR comparison, the four tools almost never flagged the same line — so a second reviewer bot adds coverage, but stacking bots does not substitute for a human.
- **"Borrowed confidence" is the named rubber-stamping failure.** When one model writes, another reviews and a third adjudicates — especially from the same family — the blind spots correlate and the loop agrees with itself. The human moves up a level rather than leaving.

**What this gives a team mid-rollout:** a ready-made PR-intake checklist and a risk-tiered review policy — the two most transplantable review artefacts in this pack.

---

## A5. "Harness engineering for coding agent users"

**Birgitta Böckeler** · Distinguished Engineer and Global Lead for AI-assisted Delivery, Thoughtworks · martinfowler.com ("Exploring Gen AI" series) · **2 April 2026** (expands a memo first published 17 February 2026) · https://martinfowler.com/articles/harness-engineering.html
**Bucket:** A (with B overlap on ownership) · **Spectrum:** agent-mode → autonomous · **First-person operator:** yes — consultant writing from client engagements, not vendor marketing

### Verbatim

> "The term harness has emerged as a shorthand to mean everything in an AI agent except the model itself - Agent = Model + Harness."

> "A good harness should not necessarily aim to fully eliminate human input, but to direct it to where our input is most important."

> "Ashby's Law of Requisite Variety is another interesting argument for these pre-defined topologies. The law says that a regulator must have at least as much variety as the system it governs, and it can only regulate what it has a model of. An LLM-based coding agent can produce almost anything, but committing to a topology narrows that space, making a comprehensive harness more achievable."

### Mechanisms

- **Gives the team's agent scaffolding a name and an owner.** "Harness" covers everything that is not the model: instruction files, skills, bootstrap scripts, linters, type checkers, test suites, architecture-fitness checks, review agents. Naming it makes it something a team can own, staff and budget.
- **Splits the scaffolding into two halves that behave differently.** *Guides* (feedforward) steer the agent before it acts — AGENTS.md, architecture notes, how-to docs, skills. *Sensors* (feedback) tell it whether what it did was right — linters, types, tests, structural checks, review agents. Most teams over-invest in guides and under-invest in sensors.
- **Sensors have to be spread across the lifecycle.** A sensor that only fires in CI is too late to close the agent's self-correction loop; the useful ones fire while the agent is still working.
- **The design goal is explicitly not full autonomy.** The harness exists to concentrate scarce human attention where it changes the outcome. That reframes "how much can we automate?" into "where do we still want a person, and what do we build so they only have to be there?"
- **Narrowing what the agent may produce makes the harness achievable.** Committing to a topology — a small set of sanctioned shapes for how code is structured — reduces the variety the harness has to regulate. Practical consequence: teams start choosing stacks and structures partly on what harnesses already exist for them.
- **Continuous stewardship, not a one-off setup.** Controls are improved in a steering loop as issues are observed, which makes the harness a maintained artefact with a rota, not a project with an end date.

**What this gives a team mid-rollout:** vocabulary and a division of labour for the scaffolding work that is otherwise invisible on the roadmap — and an argument for staffing it.

---

## A6. "Running an AI-native engineering org"

**Fiona Fung** · Director of Engineering for Claude Code and Claude Cowork, Anthropic · claude.com blog · **3 June 2026** · https://claude.com/blog/running-an-ai-native-engineering-org
**Bucket:** A (with B overlap on team structure) · **Spectrum:** agent-mode → autonomous · **First-person operator:** yes — vendor's own engineering-practice account with a named operator author, so in scope

### Verbatim

> "On the Claude Code team, we wrote a pretty good six month roadmap, and then because of Claude Code, so many things changed that it was out of date by month three."

> "I call it just-in-time (JIT) planning, almost like JIT compiling: how do you do just the right amount at the right time? Our planning ritual shifted away from design docs toward discussions in PRs or prototypes."

> "We use Code Review heavily. Claude handles all the style and linting, PR feedback requests, catching bugs and fixing them before a full commit, and adding tests. Where we still definitely want a human is expertise."

> "Don't hesitate to kill processes that no longer work: Finally, we relentlessly question why we do things the way we do. When something doesn't make sense anymore, team members have explicit permission to question and kill old processes."

### Mechanisms

- **Planning and estimation actually changed, with a name for the change.** Six-month roadmaps went stale at month three, so planning moved to "just enough, just in time." The ritual shifted from design docs to discussion inside PRs and prototypes. This is the clearest first-hand answer in the pack to "what happens to sprint planning".
- **Prototype-and-instrument replaces product review.** Rather than reviewing a proposal, they build it, put internal users on it, and act on the feedback. Fewer formal product reviews as a direct consequence.
- **Review is split by category, not by seniority.** Machine handles style, lint, PR feedback, pre-commit bug fixing, and test authorship. Human is mandatory where the judgement is domain expertise — legal risk tolerance, trust and safety, product calls.
- **Hiring profile shifts away from throughput.** Two profiles favoured: creative builders with product sense, and engineers with deep systems expertise. Raw output is explicitly deprioritised because the models supply it.
- **Role boundaries blur in both directions.** PMs write code; engineers do design work. Team shape is pods under one mission, with people moving to where the work is.
- **Explicit permission to kill process.** Naming that permission is what makes the other changes possible — it is the governance mechanism behind the rest of the list.

**What this gives a team mid-rollout:** the most concrete available picture of what happens to planning ceremonies, review split and hiring profile once agent-assisted work is the default rather than an experiment.

---

## A7. "AI-coding agents kill team collaboration"

**Chris Stokel-Walker** · freelance journalist (UK) · LeadDev · **28 July 2026** · https://leaddev.com/ai/ai-coding-agents-kill-team-collaboration
Quoted experts: **Courtney Miller**, Assistant Professor of Computer Science, George Washington University; **Sarah Wells**, software engineering consultant (formerly BBC / Financial Times).
**Bucket:** A · **Spectrum:** agent-mode · **First-person operator:** no — journalism, reporting an analysis of 25,264 agent-generated PRs across 2,361 GitHub repositories

### Verbatim

> "in 79% of agentic PRs, the same developer both reviewed and modified the AI's contribution. Just one in eight workflows involved multiple humans."

> "Software development is not an isolated task, and writing new code was never the hard part," says Courtney Miller

> "If you internalize that, it's your responsibility to figure out how to speed up your productivity by 10x using these tools. That's a you problem," she says.

> "I'm worried that they're not; they can't make the judgement about whether the agent is making a sensible suggestion," she says. *(Sarah Wells, on junior engineers)*

> "I think code reviews are probably going to stop being the way that you share knowledge," Wells says. "You're going to share knowledge at a higher level than the code itself."

### Mechanisms

- **The measurable form of "no unreviewed agent merges" being quietly broken.** In 79% of agentic PRs the author and the reviewer are the same person. The norm most teams believe they have is not the norm the data shows.
- **Adoption concentrates in individuals at the edge of the workflow.** In 70% of projects, fewer than one in five contributors took part in an agentic workflow at all. A team can have "adopted" agents and still have most of its people outside the practice.
- **Divergence of personal method is the second-order problem.** Everyone develops their own prompting and correction habits, so teams that started from a shared process end up with different ones — invisible until handover or incident.
- **Named countermeasures, all team-level.** Shared learning spaces: a Q&A channel, a standing agent item in stand-up, demos against the team's actual systems (not toy repos), hack weeks and showcases.
- **Culture determines whether failures get shared.** People share failed experiments only if the culture rewards it — and it will not if managers reward raw usage or treat token consumption as evidence of productivity.
- **Knowledge sharing moves upstream.** If code review stops being where knowledge transfers, collaboration has to be deliberately preserved where the decisions are: design, architecture, risk.
- **Junior-engineer exposure is specific.** Juniors are substituting the agent for the colleague conversation, and are the least equipped to judge whether the agent's suggestion is sensible.

**What this gives a team mid-rollout:** a way to check whether the team's stated review norm survives contact with reality, and a short list of collaboration rituals to put back deliberately.

---

# BUCKET B — Rollout mechanics (for the rewritten implementation section)

---

## B1. "The AI engineering stack we built internally — on the platform we ship"

**Ayush Thakur, Scott Roe-Meschke and Rajesh Bhatia** · Cloudflare engineering (Roe-Meschke: Engineering Manager, Developer Productivity; Bhatia: leads the Productivity Platform function) · Cloudflare blog · **20 April 2026** · https://blog.cloudflare.com/internal-ai-engineering-stack/
**Bucket:** B · **Spectrum:** agent-mode → autonomous · **First-person operator:** yes — vendor's own engineering-practice account with named authors, in scope

### Verbatim

> "In the last 30 days, 93% of Cloudflare's R&D organization used AI coding tools powered by infrastructure we built on our own platform."

> "Eleven months ago, we undertook a major project: to truly integrate AI into our engineering stack. We needed to build the internal MCP servers, access layer, and AI tooling necessary for agents to be useful at Cloudflare. We pulled together engineers from across the company to form a tiger team called iMARS (Internal MCP Agent/Server Rollout Squad). The sustained work landed with the Dev Productivity team, who also own much of our internal tooling including CI/CD, build systems, and automation."

> "One thing we got right early: routing through a single proxy Worker from day one. We could have had clients connect directly to AI Gateway, which would have been simpler to set up initially. But centralizing through a Worker meant we could add per-user attribution, model catalog management, and permission enforcement later without touching any client configs. Every feature described in the bootstrap section below exists because we had that single choke point."

> "Usually the problem was local context: the model didn't know the right test command, the team's current conventions, or which parts of the codebase were off-limits. That pushed us toward AGENTS.md: a short, structured file in each repo that tells coding agents how the codebase actually works and forces teams to make that context explicit."

> "None of these pieces are especially novel on their own. Plenty of companies run service catalogs, ship reviewer bots, or publish engineering standards. The difference is the wiring."

> "As AI tooling adoption has grown the 4-week rolling average has climbed from ~5,600/week to over 8,700. The week of March 23 hit 10,952, nearly double the Q4 baseline."

### Mechanisms

- **The sequence is explicit and datable.** Eleven months from a cross-company tiger team (iMARS) to 93% R&D adoption. The team was temporary; the ownership then landed permanently with Dev Productivity, the team that already owned CI/CD and build systems. That is the ownership answer most orgs are looking for.
- **Build the choke point first, even though it is harder.** A single proxy in front of the model gateway was the one early decision they name as correct — because per-user attribution, model-catalogue changes and permission enforcement could all be added later without touching a single client's configuration.
- **Instruction files as a forcing function, not documentation.** AGENTS.md exists because agents produced plausible-but-wrong changes for want of local context: the right test command, current conventions, and which parts of the codebase are off-limits. Files are deliberately short and high-signal because they sit in the context window. Generated across the GitLab estate rather than left to each team to start from nothing.
- **Three layers, in order:** platform (auth, routing, inference, sandboxed execution), knowledge (service catalogue plus AGENTS.md), enforcement (AI code review in CI against internal standards).
- **The value is integration, not any component.** Their own framing: service catalogues, reviewer bots and engineering standards are all common; what changed the first-draft quality was that an agent could reach all three through one toolchain.
- **Measured on merge-request throughput with a stated baseline.** ~5,600/week rolling average up to 8,700+, peak week 10,952 — quoted against the Q4 baseline rather than as a naked number.

**What this gives a team mid-rollout:** the strongest available build-order argument — gateway/choke point first, then repo-level context, then enforcement — with a named owning team and a real timeline.

---

## B2. "Inside Shopify's AI-first engineering playbook"

**Farhan Thawar** (subject; VP & Head of Engineering, Shopify) · written by the Atlas editorial team, Bessemer Venture Partners · **2 April 2026** · https://www.bvp.com/atlas/inside-shopifys-ai-first-engineering-playbook
**Bucket:** B · **Spectrum:** agent-mode, multi-tool · **First-person operator:** no — VC-published interview, but a named operator on his own org's rollout
*(Distinct from, and complementary to, the Bessemer Atlas piece already used in S5.)*

### Verbatim

> "I don't care if you have a go-to-market for this. I don't care what the price is. How do I get this inside Shopify for every engineer?"

> "At Shopify, we always have one tool for one job—except for with AI," he explains, "since we don't know yet which company, workflow, or model is going to win."

> "The brain is a muscle," he says, "If you stop going to the gym—or stop using your brain—it will atrophy."

### Mechanisms

- **A deliberate exception to the org's own standardisation rule.** Shopify's default is one tool per job; AI is the stated exception, because no one knows which vendor, workflow or model wins. Engineers run Cursor, Claude Code, Copilot, Codex and experimental Gemini tooling side by side.
- **What makes multi-tool survivable is the layer underneath.** A centralised LLM proxy routes all AI requests through a single platform layer — so the tooling above it can churn without the org losing cost attribution or control. Same architectural bet as Cloudflare's, reached from the opposite direction.
- **Order of operations:** proxy infrastructure → enablement (internal MCP servers, internal platform tooling) → cultural adoption led by leaders using the tools visibly → measurement → agentic workflows in parallel and in sequence.
- **Enablement is culture plus tooling together, not a training programme.** Adoption spread through leadership modelling and weekly demos rather than a mandate.
- **Parallel agents are a senior-engineer practice.** Several agents launched against different parts of the codebase, outputs reviewed, the failures discarded and the good parts merged — an explicitly wasteful pattern that is only rational when generation is cheap and judgement is not.
- **A named, non-obvious risk carried at leadership level.** Comprehension debt: as agents write more, engineers gradually lose the understanding of the systems they maintain. Thawar names it as the risk that worries him most — worth pairing with Ronacher (A2) on the same fear from the IC side.

**What this gives a team mid-rollout:** permission to keep tool choice plural, provided the layer beneath it is singular — and the leadership-modelling mechanism that spread adoption without a mandate.

---

## B3. "How Uber uses AI for development: inside look"

**Ty Smith** (Principal Engineer) and **Anshu Chada** (Director of Engineering, Developer Platform), Uber · reported by **Gergely Orosz** · The Pragmatic Engineer · **10 March 2026** · https://newsletter.pragmaticengineer.com/p/how-uber-uses-ai-for-development
**Bucket:** B · **Spectrum:** agent-mode → background/autonomous · **First-person operator:** no — journalism from a named-operator conference session (Pragmatic Summit, San Francisco)
*Partial paywall: the Minion section is subscriber-only. Everything quoted below is from the free portion and was verified against the raw page.*

### Verbatim

> "As Anshu Chada, Engineering Director on Uber's Dev Platform, puts it: "What we found is when we push some of the boring stuff to AI – upgrades, migrations, bug fixes – not only does it result in much higher satisfaction from our engineers, but they're able to push our product and create features for end users in ways that we didn't even think were possible.""

> "[Once you start using agents] as an engineer, you're giving a prompt and waiting for something. While it's running and you're waiting you're thinking: 'What am I going to do? Have a coffee or browse Reddit? Might as well kick off another background agent.' And so, engineers get into this mode of running several agents at once, right? Both us [at Uber] and a lot of the industry is trying to push towards this."

> "How Uber built Minion, Shepherd, uReview, and other internal agentic AI tools. Also, new challenges in rolling out AI tools, like more platform investment and growing concern about token costs"

### Mechanisms

- **Toil is the deliberate first target, chosen for morale as much as throughput.** Upgrades, migrations and trivial bug fixes go to agents first. The reported effect is higher engineer satisfaction, which is what buys the room to attempt harder work later.
- **Parallel agent use arrives by itself, from waiting.** The honest mechanism is dead time: once a developer is blocked on an agent, starting a second one is the obvious move. Teams should expect parallelism to emerge whether or not they plan for it — and should plan review capacity accordingly.
- **A named internal stack rather than raw tool access.** MCP gateway for connecting agents to internal data; an agent builder; a standard CLI; Minion for background agents with monorepo access and opinionated defaults; uReview for code review. The abstraction layer is the product the platform team ships.
- **Adoption was voluntary and peer-led by design.** Uber's own conclusion is that top-down mandates were less efficient than engineers showing peers their wins — from a company with the leverage to mandate if it wanted to.
- **Adoption was slower than expected even so.** Stated plainly in a company with a dedicated developer platform org. Useful calibration for anyone whose rollout feels stalled.
- **Platform investment and token cost are named as the emerging problems.** The rollout's difficulty migrates from access to funding and platform capacity. See B8.

**What this gives a team mid-rollout:** a realistic adoption curve from a well-resourced org, and the argument for starting on migrations and upgrades rather than on feature work.

---

## B4. "Inside a five-year-old startup's rapid AI makeover" (Craft Docs)

**Balint Orosz** (founder, Craft Docs) with architect **Gyula Halmos** · reported by **Gergely Orosz** · The Pragmatic Engineer · **27 January 2026** (updated 27 June 2026 to note Polymarket's acquisition of Craft Agents; article now free) · https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft
**Bucket:** B · **Spectrum:** agent-mode → autonomous · **First-person operator:** no — journalism built on a named founder's account of his own company

### Verbatim

> "We knew we had one shot at showing users that AI is useful for them. And until we had a 'wow' moment ourselves, we would not go all-in on AI. We didn't want Craft to have the same negative associations with AI as Copilot has"

> "Product coherence is becoming a silent advantage of standout products. If we took contributions as PRs submitted, the product would become a patchwork of local optimizations. I realized that there is no point in attempting to merge pull requests. I prefer to use PRs as a high-fid[elity feature request]"

> "Balint himself spends $3,000/month on top of the $200 Claude Max subscription, and is the heaviest user of tokens at Craft. Everyone else – engineers and non-engineers – are on the $200/month subscription."

> "This migration work was estimated to take 3-4 months. It was done in a week with AI tooling."

### Mechanisms

- **A dated rollout sequence a comparable team can line up against.** Six months of agent experimentation → an internal terminal wrapper built December 2025 → a two-week solo build over the holidays → **5 January 2026, mandatory adoption across all teams** → open-sourced 19 January 2026.
- **The mandate came *after* the internal proof, not before it.** Leadership refused to go all-in until they had their own "wow" moment. This is the sequencing lesson: earn the mandate, then issue it.
- **Budget is a stated, simple policy.** $200/month per person for everyone, engineer or not. The single heaviest user runs ~$3,000/month on top. Cost was explicitly not being optimised at this stage — the founder's stated worry was that others were spending too *little*.
- **The non-engineers were the surprise adopters.** Support built triage, bug-report, education, daily-report, user-data and feature-request workflows; marketing built pages without engineering; HR and finance automated integrations. Support ticket handling went from 20–30 minutes to 2–3 minutes.
- **A named enablement ritual worth stealing: "What's Impossible?"** A weekly challenge in which teams propose something they think would take two to three months, then attempt it in one week with agents. It converts scepticism by making the demonstration the team's own.
- **Throughput and permission model both changed.** Parallel agent work moved the team from 15–20 Linear issues a week to 100+; a three-level permission model (read-only → confirm each edit → unrestricted) is the control that made that safe enough.
- **Review discipline relaxed at the top and the team knows it.** The two architects merge without reviewing each other. Recorded here as an observed practice, not a recommendation — it is the counter-example to A4 and A7.

**What this gives a team mid-rollout:** the clearest small-org playbook in the pack — earn the proof, then mandate, with a flat per-head budget and a weekly ritual that manufactures believers.

---

## B5. "AI Adoption at Sentry" (internal memo, published)

**David Cramer** · co-founder and Chief Product Officer, Sentry · published as a public gist · **16 January 2026** · https://gist.github.com/dcramer/c0a673da13a24f7e315535c1cb57dcae
**Bucket:** B · **Spectrum:** agent-mode → autonomous · **First-person operator:** yes — a founder's internal memo to the company, published verbatim

### Verbatim

> "2026 is the year that we are asking everyone to get comfortable with using LLMs in their daily workflows."

> "What you may not know is I have not personally written code in more than six months. I've fully adopted agentic coding, and have been able to ship production changes to Sentry as well as other software with it."

> "At Sentry we've been forward thinking here in the engineering org. We've unlocked budget, relaxed IP restrictions, and opened up the most cutting edge tools to our engineers. We've also been very intentional about adoption, but so far we haven't seen the organic growth we'd like in the company. About half of engineering is using AI tools in their daily workflows, but only a small subset of engineers have gotten truly comfortable with the state of the art."

> "This is now a necessary skill for you to have in your career in order to stay competitive."

> "Again, this is not something that we can solve top-down, we will need folks to lean in and we are going to expect it."

> "Lastly, you may see big numbers when it comes to how much money we're spending on some of these tools. Make no mistake the numbers are not comfortable, and there will be a point where we need to address that. For now we're simply looking to stay ahead of the curve and understand what is working and what isn't, so we're being more relaxed with budgetary spending. This is especially true within engineering where some of us are spending more than $100/day on these tools. Yes, it's a lot. Yes, it's worth it. Yes, we will fix it at some point."

### Mechanisms

- **A documented adoption plateau, named by the person responsible for it.** Barriers removed — budget unlocked, IP restrictions relaxed, frontier tools opened — and still only about half of engineering uses the tools daily, with a much smaller group genuinely fluent. This is the most honest plateau account in the pack.
- **The three barriers that were actually removed are specific and checkable.** Budget, IP/data restrictions, tool access. Any team stalled at the same point can audit itself against that list.
- **A deliberately hybrid posture: voluntary in method, non-optional in expectation.** Not a mandate; framed instead as a career-competitiveness expectation, with explicit acknowledgement that the problem cannot be solved top-down.
- **Measurement was built, in two days, because nothing existed.** Abacus tracks commits touched by AI and average tool usage across the org — and the fact that a CPO could build it in two days is itself offered internally as the argument for the tools.
- **Named points of contact and a Slack channel.** The memo routes people to specific individuals and an open channel rather than to a programme — lightweight enablement, no training budget.
- **Cost transparency instead of cost control, stated as a temporary choice.** Some engineers exceed $100/day. Leadership names the number, says it is uncomfortable, says it is worth it for now, and commits to fixing it later. Compare with B8, where other orgs hit that wall.
- **Leadership modelling as the lead argument.** The memo opens with the CPO's own six months without hand-written code. Adoption asks land differently when the asker has already gone first.

**What this gives a team mid-rollout:** language for the awkward middle of a rollout — access solved, enthusiasm uneven — and a worked example of expectation-setting that is neither a mandate nor a shrug.

---

## B6. "How Figma stays ahead of vulnerabilities with agents"

**Rohan Sharma, Liam Buchan and Dave Martin** · Security Engineers, Figma · Figma blog · **23 July 2026** · https://www.figma.com/blog/how-figma-stays-ahead-of-vulnerabilities-with-agents/
**Bucket:** B (guardrails and review gates) · **Spectrum:** agent-mode, gated · **First-person operator:** yes

### Verbatim

> "Ninety-nine lines, 2,560 words, and 68 precedents later, this work had a side effect we did not plan for: We had written a complete threat model, in roughly the form we'd want a new hire to read on day one. The policy is the threat model."

> "Precision is the share of reported findings that are real vulnerabilities. High precision implies low false positives. Recall is the share of real vulnerabilities the system catches. High recall implies low false negatives. Pointing coding agents at the codebase and asking them to find vulnerabilities is simple. Getting the precision and recall an organization needs is still hard."

> "Cost isn't a constraint for per-PR review. For both the models we use, a pull request review runs about $0.50 median spend, rarely more, since most PRs have nothing to flag. This approach pays for itself many times over in avoided bounty payouts, not to mention avoided impact to our users."

> "Keep in mind that every task in the corpus is a bug that our historical review process, human reviewers plus static analysis (SAST), already missed. So a 75.8% union catch rate is 75.8% of the bugs that got all the way past our existing controls."

> "Every policy change is reviewed by a security engineer and rerun against the full corpus before it ships."

### Mechanisms

- **One written policy drives three different stages.** The same 68-precedent policy governs PR review before merge, just-in-time guidance during code generation, and retrospective audit of a decade-old monorepo. Write the standard once; apply it at every point the agent touches the code.
- **Writing the policy produced the threat model as a by-product** — and in a form a new hire can read on day one. The artefact that makes agents useful turns out to be the artefact the org needed for humans anyway. Strongest argument in the pack for why instruction-and-policy files earn their maintenance cost.
- **A gate stated in one sentence.** Nothing merges without human review, a SAST pass, and agentic review. Provider failover exists so an outage at one model vendor cannot let a PR through unreviewed.
- **Two models, chosen because they disagree.** Two frontier models run independently and either one raising a finding escalates it — deliberate redundancy on the grounds that they miss different bugs. Same conclusion Osmani reached from external data (A4).
- **Blast radius is scoped explicitly.** Read-only access during analysis; sandboxed execution with egress controls for fix-writing agents; CI for agent-generated PRs runs without deploy credentials or production secrets.
- **A precision bar gates what reaches a human.** Findings only surface once a class has held above a precision threshold over a rolling look-back, and disputed findings go to security on-call. This is the mechanism that stops reviewer fatigue from becoming rubber-stamping.
- **Honest cost and honest baseline.** ~$0.50 median per PR review; recall measured against a corpus of bugs the *existing* human-plus-SAST process had already missed, which is the only honest denominator.
- **The policy itself is change-controlled.** Every policy change is reviewed by a security engineer and re-run against the full corpus — the agent layer is treated as production, with an owning team.

**What this gives a team mid-rollout:** a concrete, costed model of what "guardrails" means in practice — a written policy, a stated merge gate, scoped credentials, and a precision bar protecting the humans' attention.

---

## B7. "Adoption and Impact of Command-Line AI Coding Agents: A Study of Microsoft's Early 2026 Rollout of Claude Code and GitHub Copilot CLI"

**Emerson Murphy-Hill, Jenna Butler and Alexandra Savelieva** · Microsoft researchers, studying their own employer's rollout · arXiv preprint (2607.01418) · **submitted 1 July 2026** · https://arxiv.org/abs/2607.01418
**Bucket:** B · **Spectrum:** agent-mode (CLI agents) · **First-person operator:** yes (operator-researchers inside the rolling-out organisation) · **Not peer-reviewed**

### Verbatim (from the abstract, verified against the arXiv page)

> "Organizations rolling out agentic command line tools like Anthropic's Claude Code and GitHub's Copilot CLI need to know who will try them, who will keep using them, and whether the tools produce enough output to justify their cost. At organizational scale, token spend can run into millions of dollars annually, so misreading adoption, retention, or impact can make a rollout expensive without changing engineering velocity."

> "Studying tens of thousands of engineers at Microsoft over its early-2026 rollout, we find that first use spread primarily through social networks, retention was associated more with engineers' coding activity than with demographics, and adopters merged roughly 24% more pull requests than they would have otherwise."

> "We use merged pull requests as our proxy for output -- acknowledging that a merged PR is not the same as the value it delivers -- and the lift persists across our four-month window."

> "These results suggest that CLI coding agents are neither uniformly adopted nor mere novelty effects and that organizations should treat visible peer use as central to rollout strategy."

**Secondary coverage, for practitioner-readable framing of the same study:** Chris Stokel-Walker, "AI-coding agents spread through peer pressure, not mandates," LeadDev, 13 July 2026 — https://leaddev.com/ai/ai-coding-agents-spread-through-peer-pressure-not-mandates. It reports the peer-effect odds (reviewer peers +54%, skip-level peers +216%, direct manager +82%) and carries commentary from Cat Hicks, Daniel Russo and Michaela Greiler. Listed here rather than as a separate source to keep the pack at 16.

### Mechanisms

- **Trying and sticking are two different problems with two different levers.** First use spreads through the social graph; retention tracks how much the engineer actually codes. A rollout plan that solves only for trial will show a spike and then a plateau.
- **Visible peer use is the rollout lever, and the authors say so.** The recommendation is explicit: treat visible peer use as central to rollout strategy. Practically that means demos, shared channels, and reviewers who use the tools — not a training course.
- **Manager use matters for trial, less for retention.** A manager visibly using the tools lifts the odds a report tries it. It does not keep them there; workflow fit does.
- **Retention is predicted by workflow fit, not demographics.** Not seniority, not tenure, not team. Where a rollout stalls, the diagnosis to reach for is that the tool does not fit how those engineers actually work.
- **An impact figure with its caveat attached by its own authors.** ~24% more merged PRs, persisting across four months — with the explicit acknowledgement that a merged PR is not the same as the value it delivers. That caveat is the model for how the digest should handle every throughput number.
- **Token spend is framed as the thing the rollout must justify.** At organisational scale it runs to millions annually, so misreading adoption or impact makes a rollout expensive without changing velocity.

**What this gives a team mid-rollout:** the strongest evidence available that enablement budget belongs in visible peer practice rather than in training — plus a defensible, caveated impact figure.

---

## B8. "The token bill comes due: Inside the industry scramble to manage AI's runaway costs"

**Rebecca Bellan** · TechCrunch · **5 June 2026** · https://techcrunch.com/2026/06/05/the-token-bill-comes-due-inside-the-industry-scramble-to-manage-ais-runaway-costs/
Named operators quoted: **Chris Reed**, Senior Director of IT Finance, Priceline; **J.R. Storment**, Executive Director, FinOps Foundation; **Vitaly Gordon**, CEO, Faros AI; **Alexander Embiricos**, Head of Enterprise, OpenAI.
**Bucket:** B (funding and budgeting) · **Spectrum:** n/a (spend governance) · **First-person operator:** no — journalism with named operators on the record

### Verbatim

> ""It's like the crack-cocaine epidemic," said Chris Reed, senior director of IT finance at Priceline, noting the company had begun placing token limits on certain groups. "They let you try it to get you hooked on it, and now you're kind of beholden to it.""

> "Vitaly Gordon, CEO of engineering operations platform Faros AI, said he recently spoke to a CTO who told him: "One of my engineers spent $40,000 on tokens last month, and I genuinely don't know whether I should stop him or should I go and tell everyone else to be like him.""

> "We started hearing existential crises, and the whole conversation shifted from tokenmaxxing and 'go fast' to 'we need guardrails, how do we control this?'" *(J.R. Storment, FinOps Foundation)*

> ""Our conversations are never about that now. Now the conversations are about, 'hey, we're spending so much. What visibility do you have? What auditability do you have? What token controls do you have? What is the efficiency of your models?'"" *(Alexander Embiricos, OpenAI)*

### Mechanisms

- **The dated turn from "go fast" to "get control."** Named as happening in the first months of 2026, driven by orgs blowing through annual budgets in a quarter. Anyone still on the relaxed-spend posture (B4, B5) can see where it ends.
- **The real management problem is attribution, not the total.** The $40,000 engineer is unmanageable not because of the number but because nobody can tell whether it is waste or the best return in the org. This is the practical argument for the per-user attribution Cloudflare built in on day one (B1).
- **Team-level controls actually being applied:** token limits scoped to specific groups rather than to everyone; usage limits set at enablement time rather than retrofitted after a shock bill.
- **The buyer's questions have changed, and that shapes what platform teams must supply:** visibility, auditability, token controls, model efficiency. Those are the four capabilities a team should be able to answer for internally.
- **Withdrawal is a real rollout event.** The piece reports Microsoft revoking developers' Claude Code licences months after enabling them. Access granted early in a rollout is not necessarily permanent, and teams plan badly if they assume it is.

**What this gives a team mid-rollout:** the questions finance will ask before the second year is funded, and the case for building attribution before the bill rather than after it.

---

## B9. Lloyds Banking Group embeds agentic AI in software engineering (University of Glasgow programme)

Reported by **QA Financial**, carried by Resultsense · **5 May 2026** · https://www.resultsense.com/news/2026-05-05-lloyds-glasgow-agentic-ai-engineering/
Named: **Dr Tim Storer**, University of Glasgow (academic lead); **Ranil Boteju**, Chief Data and Analytics Officer, Lloyds; **Richard Bishop**, Lead Quality Engineer, Lloyds.
**Bucket:** B · **Spectrum:** agent-mode, supervised · **First-person operator:** no — trade journalism, second-hand via an aggregator
*(New and complementary to the Lloyds 300-roles release excluded from this issue.)*
**Caveat, load-bearing:** the outlet paraphrases Boteju and Storer rather than quoting them directly. The quotations below are **the outlet's own words**, not Lloyds' or Glasgow's. Treat as reported, not as first-party. Only Richard Bishop's carbon figure is attributed as a reported claim by a named individual.

### Verbatim (the outlet's wording)

> "Lloyds' move shifts the testing question from "does this work in isolation?" to "does it work safely in live engineering environments under regulatory constraint?""

> "Ranil Boteju, Lloyds' Chief Data and Analytics Officer, has framed the trial as exploring how AI can support innovation while preserving the auditability and explainability required in regulated environments."

> "Dr Tim Storer, leading the academic side at Glasgow, told QA Financial the goal is to produce evidence-based guidance for large regulated organisations on how to integrate agentic AI into engineering practices effectively."

> "Richard Bishop, Lead Quality Engineer at Lloyds, has reported that software-testing environments produce 120% more carbon emissions than production environments"

### Mechanisms

- **A four-year, in-production research partnership rather than a pilot.** Agents placed directly inside software and data engineering teams across multiple hubs, with performance measured alongside human engineers under live conditions.
- **The evaluation question is reframed for a regulated setting.** Not "does the agent work?" but "does it work safely in a live engineering environment under regulatory constraint?" That is the framing a bank-facing engineering org will actually be asked to answer.
- **Auditability and explainability are the stated design constraints**, not compliance box-ticking bolted on afterwards — building on the bank's earlier neurosymbolic sandbox work aimed at reducing hallucination and improving transparency.
- **A rare admission that evidence is what is missing.** The programme's stated output is evidence-based guidance for large regulated organisations — an acknowledgement that no such guidance exists yet.
- **Quality engineering measured on an unexpected axis.** Test environments tracked for carbon alongside quality benchmarks. When agents multiply test runs, the environment cost of testing becomes a first-order number.

**What this gives a team mid-rollout:** the closest analogue to a UK-bank rollout posture — supervised, in-production, measured, and designed around auditability from the start.

---

# Also fetched, held in reserve (verified, not packaged)

Fetched and date-verified, but kept out of the main 16 to stay inside the brief's range. Available if a slot needs filling.

| Source | Date | Why held |
|---|---|---|
| Chris Stokel-Walker, "AI-coding agents spread through peer pressure, not mandates," LeadDev — https://leaddev.com/ai/ai-coding-agents-spread-through-peer-pressure-not-mandates | 13 Jul 2026 | Secondary coverage of B7; its distinctive quotes are summarised inside the B7 entry |
| Chris Stokel-Walker, "Your AI-coding agents might need an org chart," LeadDev — https://leaddev.com/ai/your-ai-coding-agents-might-need-an-org-chart | 4 Aug 2026 | Reports a 116-task lab experiment on model-pairing for review, not team practice. Useful single finding: a weaker model reviewing a stronger one degrades the outcome |
| Simon Willison, "Agentic Engineering Patterns," Simon Willison's Newsletter — https://simonw.substack.com/p/agentic-engineering-patterns | 27 Feb 2026 | Overlaps A1; A1 is the more practice-dense of the two |
| Dave Barnwell, "Why AI Adoption Is Still Hard For Engineering Teams" — https://www.d4b.dev/blog/2026-05-22-why-ai-adoption-is-still-hard-for-engineering-teams | 22 May 2026 | Named author but independent consultant with no organisational narrative; advice rather than account |
| incident.io, "Engineering teams in 2027" — https://incident.io/blog/eng-in-2027 | 19 May 2026 | Forward-looking model, no named author on the page, no account of what they actually did |

---

# Appendix — could not verify

Items that were pursued and could not be fetched, dated, or attributed to the standard this pack requires. None of these are used above, and none should be cited.

**1. AutoScout24 AI Champions network (OpenAI customer story) — https://openai.com/index/autoscout24/**
Returned **HTTP 403** on fetch. Search snippets describe a cross-functional AI Champions network creating a feedback loop between central leadership and individual teams — which would have been the pack's best enablement-mechanics source. Unverifiable, and it would in any case have needed a named AutoScout24 operator to clear the vendor-marketing bar.

**2. Mike Mason (Thoughtworks), "AI Coding Agents in 2026: Coherence Through Orchestration, Not Autonomy" — https://mikemason.ca/writing/ai-coding-agents-jan-2026/**
Returned **HTTP 403**. Author and approximate date (January 2026) are visible in search results only. No quote could be captured; excluded.

**3. PagerDuty, "From Experiment to Essential: Making Every Engineer an AI Agent Engineer" — https://www.pagerduty.com/eng/making-every-engineer-an-ai-agent-engineer/**
Fetched successfully. Author **Ralph Bird**; publication date **28 August 2025** — roughly twelve months old and therefore outside the window. Content is a good enablement account (workshops, a golden-path template repo, a shared internal library, governance folded into the standard process, ~100 engineers). **Out of window, not unverifiable** — reinstatable if the window is widened.

**4. Gergely Orosz and Laura Tacho, "How tech companies measure the impact of AI on software development," The Pragmatic Engineer**
Publication date **16 September 2025** — outside the window. Contains named-operator material on what companies refuse to measure (Suhail Patel, Monzo) that would otherwise have filled a gap. **Out of window, not unverifiable.**

**5. Simon Willison, "Embracing the parallel coding agent lifestyle" (6 Oct 2025) and Gergely Orosz, "New trend: programming by kicking off parallel AI agents" (30 Oct 2025)**
Both fetched and dated. Both **outside the eight-month window** at roughly ten months. Superseded for this pack by A1, A2 and A3, all of which cover parallel-agent practice with 2026 dates.

**6. Quotes withdrawn during verification.** Three quotations reported by the intermediate fetch tool could not be found in the raw page text and have been removed rather than printed:
- Cloudflare — "Every MR is reviewed automatically." Not present. The verified claim is narrower: AI code review runs in the CI pipeline against internal standards.
- Armin Ronacher — "In the harness operated loop I'm not sure what my role even is." Not present in the published text.
- Addy Osmani — "your job is to deliver code you have proven to work," reported as a Simon Willison quote carried by Osmani. Not locatable in that form on the page.

**7. Misattribution corrected.** "I don't prompt Claude anymore. I have loops running that prompt Claude and figuring out what to do. My job is to write loops." is widely reported as Armin Ronacher's line. On the page it is the epigraph, attributed by Ronacher to **Boris Cherny**. If this line is used in the issue it must be attributed to Cherny, quoted by Ronacher.

**8. QA-role and estimation practice — searched, nothing qualifying found.** Repeated searches for named-practitioner accounts of how QA ownership and sprint estimation changed under agentic coding returned only SEO content-marketing with no named operator. The only first-hand material located on either topic is inside A6 (Anthropic's JIT planning) and A7 (testing and QA must scale with generation or the bottleneck moves to review). Recorded as a genuine gap, not an unfetchable source.
