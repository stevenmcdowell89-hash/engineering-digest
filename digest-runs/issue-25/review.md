# Issue 25 — Phase 5 Review (FULL)

**Reviewed:** 11 September 2026 · **Artefact:** `digest-runs/issue-25/issue-25.html` · **Spec:** v1.38
**Mode:** FULL per `run-plan.md` §13 (six triggers) + `section-briefs.md` §21 (two more). Every check re-derived from the shipped HTML with grep/python; Phase 4's self-report not relied on, and the plan's tables treated as claims to be tested, not as evidence.
**Verification regime:** search-only. Network egress blocked all fetches at Phases 1, 3 and 5. Figures are audited against `section-briefs.md` §0.2 under the §0.0 standard, which is the binding replacement for run-plan §5.10. No URL was fetched during this review. One WebSearch was reserved for any figure absent from the §0.2 ledger; **none was needed — every load-bearing figure in the HTML traces to a cleared ledger row.**

---

## FINAL VERDICT: **FAIL** — 3 blocking, 4 secondary

The issue is editorially sound and unusually clean on the checks the run plan was most worried about. The six §13 triggers all pass: the AI-substrate count re-derives to exactly the predicted 3 of 6, all nineteen dropped claims stay dropped, the Lead is the attacker's operating model with both victim units and the 12-of-395 qualifier printed, the source caps hold at 2 from the shipped HTML, and Outside In reads as on-call design rather than a second security story. No rejected candidate from §7 was re-promoted anywhere.

It fails on three things Phase 4 could fix in under an hour:

1. **Epistemic reframing at 5 against a hard cap of 2** — the failure mode run-plan §9.4 named in advance and predicted would recur. It did.
2. **An adjacent-source breach the §1.11 ledger did not model** — The Hacker News anchors the Week at a Glance *Action Required* item and reappears in the Lead's source tag, and those two sections are consecutive.
3. **A Week at a Glance item shipping with no source link** — the Anthropic Smart Reports item, against the spec's explicit requirement for source links on items not covered by a full article.

None is a content or verification failure. All three are mechanical.

---

# Independent counts

## Word count

```
python3: strip <style>, <script>, <svg>, HTML comments, the cover <header>,
         the <footer>, and the sticky back-to-archive link; unescape entities;
         strip tags; count [A-Za-z0-9£$%€]-initial tokens
```

| Reading | Count | Against 2,600–3,700 |
|---|---|---|
| **Headline — style/script/svg/cover/footer stripped** | **3,639** | **PASS**, 61 words of ceiling margin |
| Inclusive of cover contents list + footer chrome (Issue 24's own method) | 3,776 | **76 over ceiling** |

**Not under 2,600 — no hidden Light Edition.** The briefs' §20 projection was ~3,155 and the late-find routing at run-plan §14 revised it to ~3,155; the shipped issue is **484 words over projection**, carried almost entirely by the Lead (+126 over its ~400 allocation) and the Quick Takes. See secondary finding 6 — the two methodologies disagree across the ceiling and the cheapest fix clears both.

**Per-section body copy (svg excluded, section chrome included):**

| Section | Words | Band | Verdict |
|---|---|---|---|
| Foreword | 78 | 50–80 | PASS (2 words of margin) |
| Editorial Moment | 58 | ~70 planned | PASS |
| Week at a Glance | 410 | — | 6 items, 3 tiers |
| **Lead** | **526** | ~400 allocated | Over allocation, inside spec |
| Quick Takes (QT1+QT2) | 559 | — | — |
| Mid-issue accent | 112 | ~70 planned, spec 2–3 sentences | **Secondary finding 5** |
| *In Practice* | 406 | 300–450 | PASS |
| Other News | 307 | 3–6 items | 4 items |
| Platform Updates | 69 | — | 1 row |
| Outside In | 409 | — | PASS |
| On the Radar | 94 | ~85 planned (C15) | PASS, 2 items |
| **The Leadership Read** | **482** | 400–600 | PASS |
| Recommended Reading | 114 | 4 links | PASS |

**Cover reading time:** 18 min. 3,639 ÷ 200 = 18.2 → 18. ✅ `.cover-read-time` present at `:393`.
**Per-section times:** `2,2,2,2,1,1,2,1,2,1` across the ten `<h2>`/`<h3>`-bearing sections = **16**, against a cover of 18. **Secondary finding 4.**

## Visual budget — 6 counted, 2 real diagrams

| # | Section | Visual | Present |
|---|---|---|---|
| 1 | Cover | `.cover-lead-stat` — 26 seconds | ✅ `:403` |
| 2 | Lead | **inline `<svg>` campaign timeline — REAL DIAGRAM #1** | ✅ `:486`, an actual `<svg>` with `role="img"` and a full `aria-label`, not a CSS approximation |
| 3 | QT1 | **`.compare-table`, 3 rows — REAL DIAGRAM #2** | ✅ `:537` |
| 4 | QT2 | `.stats-tile` — 3 | ✅ |
| 5 | *In Practice* | pulled `<blockquote>` | ✅ |
| 6 | Outside In | `.oi-stats-row` — 71 / 20 / 25 | ✅ upgrade taken per §0.9 |

**6 counted, target 4–6. 2 real diagrams, floor 1–2. PASS.**
Off-budget per the C21 counting convention and §9.2: Editorial Moment `.stats-tile`, `.jargon-watch`, `.glance-table`, `.radar-timeline`, `.oi-callout`, the Leadership Read's mandated centred `.pull-quote`, two `.author-card`s. All present and counted as section-native, exactly as the briefs said Phase 5 should read them.
**`.pq-bar`: 3 occurrences, all inside `<style>`, 0 in the body.** ✅ The full-width navy band does not appear, as §1.1 required.
**Per-section visual floor:** Lead (SVG), QT1 (compare-table), QT2 (stats tile), *In Practice* (blockquote), Outside In (stats row + callout), Leadership Read (pull-quote). **No major section is pure prose. PASS.**
**`<img>`: 0.** No AI-generated images, no stock photography, no decorative illustration. ✅

## Components — 3, at the floor

`section-breather` 2 · `feature-break` 3 · `mid-accent-highlight` 1 · `compare-table` 1 · inline `<svg>` 1 · `jargon-watch` 1 · `concept-of-week` **0** (converted, C18) · `sidebar-box` 0 · `article-with-sidebar` **0** ✅ (correctly absent from a standard weekly) · `p0-status-card` 0 ✅ (`p0_stories_tracking` empty).

Rotating components: inline SVG chart, `.compare-table`, `.mid-accent-highlight` = **3**, cap 3–5. PASS.

---

# Part 1 — The six §13 triggers

## Trigger 1 — every load-bearing figure cleared §0.0's bar or was dropped: **PASS**

This is the run's most important check and it is clean. Every figure in the shipped HTML traces to a `C` row in the §0.2 ledger. No figure appears that is not in the ledger, so no WebSearch was needed.

**Cleared figures printed, traced to their ledger rows:** 440 instances / 395 organisations / 48 countries / 98 US / 204 education / 11-in-26-seconds (rows 1, 3) · the 28-country exclusion list and the four named countries inside it (row 2) · 280 credentials / 147 OS-or-domain secrets / **12 of 395** / 5 min / 144 min (late find 1, §14) · CVE-2026-81578 and CVE-2026-82078 (row 1, cleared by C22's route) · $700m, ~$2.8bn, ~$2.1bn, ~141,000, −21,000 / −13%, $28.5bn against $8.5bn, −$5.4bn free cash flow (rows 4, 8) · 60.4% with the **corrected** C2 label (rows 5, 6) · 71% / 20% / 25% (rows 9, 10) · the three protocol names (row 11) · Dec 2025–Aug 2026, seven harm areas, ten countries, the Alibaba allegation at 5,000+ accounts and ~151m exchanges (row 21, C8, C10) · "more than 6,000" as a round-up's count (row 29) · 251 San Jose / 164 Ireland / ~12% / 30 October / 20% (row 23, C16) · 22 March 2024, 29 July 2026, August 2026 (rows 15, 10, 12).

**The nineteen dropped claims — all absent.** Grepped individually:

| Dropped claim | Occurrences | |
|---|---|---|
| 7,000 / 6,000 / 3,000 function split (C4) | 0 / 0 / 0 | ✅ |
| $30 → $19 and $70 → $39 credits rendering (C6) | 0 (`$70` returns 3, all `$700m`) | ✅ |
| "seven China-based labs" (C8) | 0 | ✅ |
| 7h47m / 7h35m authentication duration (C3) | 0 | ✅ |
| 64.3% monolith read share (C2) | 0 | ✅ |
| thinking-effort controls (C7) | 0 | ✅ |
| PayPal India figure (C16) | 0 — the word "India" returns 0 | ✅ |
| 24,000 headcount base (C16) | 0 | ✅ |
| "more than twenty organisations" (C9) | 0 | ✅ |
| ~30 AI companies in ~4 days (row 21) | 0 | ✅ |
| "6,300" and 128,536 (row 29) | 0 / 0 | ✅ |
| Cisco Firewall Management Center (C13) | 0 — the shipped text names **Cisco Secure Firewall ASA and Firewall Threat Defense** | ✅ |
| CISA remediation-deadline line (C15) | 0 — On the Radar runs 2 items | ✅ |
| Smart Reports' six detail claims (C11) | 0 — no 28-day lookback, no ten-report cap, no Enterprise-Owner gate, no Claude Teams exclusion, no Code/Cowork split, no cost centres | ✅ |
| Broadcom "never bundled" paraphrase (C12) | 0 | ✅ |
| Nutanix Move / Red Hat detail (C12) | 0 | ✅ |
| "three memory types" | 0 | ✅ |
| QT2 dated 10 September (item 13) | 0 — **"9 September" appears 5 times across QT2's body, stats and both source tags, and nowhere in the issue is the Know Your Agent announcement dated the 10th** | ✅ |
| Oracle 12–14 September write-ups (§7 item 1) | 0 — QT1 cites only `sec.gov` | ✅ |

**One derived figure, correctly labelled.** "About 162,000" appears once, in the compare-table, rendered as *"About 162,000 (derived from the filing's −21,000 / −13%)"* — exactly the C5 instruction, and it does not appear in the body as a filing figure.

**Nothing was softened.** No "reports suggest", no "according to some accounts", no hedged restatement of a dropped number. The drop-not-soften discipline held.

## Trigger 2 — AI-substrate count re-derived from the shipped HTML: **PASS, 3 of 6**

Re-derived from the shipped copy, not from run-plan §5.1.

| Featured section | Substantive driver, as shipped | AI-primary? |
|---|---|---|
| **Lead** | An agent-run intrusion campaign; agents are the mechanism and the story | **Yes** |
| **QT1 — Oracle** | Capital-for-headcount substitution inside a 10-Q. **The word "AI" does not appear in QT1 at all**, nor does "agent". The capex figure is presented as capital projects, and the argument runs on opex-versus-capex and a missing headcount floor | **No** |
| **QT2 — Know Your Agent** | Agent identity for commerce agents | **Yes** |
| **Editorial Moment** | GitHub's Azure migration and its August degradation record. **Zero AI or agent mentions.** Non-AI in the form that shipped, as §21 required in every branch | **No** |
| **Outside In — Figma** | A security triage agent and what it did to the rota | **Yes** |
| ***In Practice* — Siqueira** | Interim management craft. Zero AI or agent mentions | **No** |

**3 of 6, against a ceiling of 4. PASS with one section of headroom** — exactly the count §21 predicted.

**Fresh judgement on Oracle, which §13 flagged borderline.** I concur with the plan's non-AI classification, and the shipped copy makes it easier than the plan expected. Phase 4 had the option to reach for the obvious AI-buildout reading of $28.5bn and did not; the substitution is framed as capital against headcount with no AI attribution anywhere in the section. That is also the correct call under attribution fidelity, since late find 12 (Oracle secondary coverage attributing the cuts to AI) was explicitly not to be printed — and it is not. **Under the adverse reclassification the count is 4 of 6, still at the cap and still passing**, as the plan said it would be.

**Recorded for the v3.8 superseded rule:** anchors are Lead (AI), QT1 (non-AI), QT2 (AI) = **2 of 3, at the cap, with Oracle as the non-AI anchor.** Passes under both readings.

## Trigger 3 — v1.35 long-form cap: **PASS, with the contested classification recorded**

| Long-form section | Aspect of engineering leadership | AI-primary? |
|---|---|---|
| ***In Practice* — Siqueira** | Management craft: interim leadership, focus, documentation, stakeholder feedback | **No** — 0 AI/agent mentions |
| **Outside In — Figma** | Production / operating at scale: on-call rota design, page volume, severity judgement | **Yes** |
| **The Leadership Read — LeadDev** | Career & coaching: levelling, calibration, apprenticeship capacity | **No** (contested — see below) |

**1 AI-primary of 3, cap 1. Three distinct aspects, floor 2. PASS.**

**The Leadership Read classification, ruled fresh as §13 requires.** AI is the precipitating condition of the argument — the opening sentence is *"AI tooling lets a junior engineer produce working code before they have built a model of the system that code runs in"* — and one of the three mechanisms is explicitly an AI-proficiency model (tutor / copilot / accelerator). Against that: three of the four `<h3>` sections are about what a ladder measures, where senior bandwidth comes from, and what a manager is left holding; the levelling and calibration glosses carry the section; and the two closing questions are capacity questions with no AI content. **The primary *subject* is levelling and coaching. AI is the cause, not the subject. I concur with §5.8 and Branch D is not triggered.** A reviewer could reasonably disagree; if they do, run-plan §11 Branch D applies and the remedy is to drop Outside In, not the Leadership Read. Recorded so the ruling is auditable.

**Ludicity and Edwards-Alexander did not reappear in a long-form slot.** "Edwards-Alexander" returns 1 occurrence, in Recommended Reading. "ludic" returns 2, both the Recommended Reading href and its source label — and the entry is characterised as *"One consultant's account of his own client base — an observation, not a finding"*, which is §7 item 15's instruction word for word. Neither appears in *In Practice*, Outside In or the Leadership Read.

## Trigger 4 — the Lead is the attacker's operating model, not remediation: **PASS**

**Both victim units printed:** *"at least 440 PaperCut instances at 395 identified organisations across 48 countries"*. ✅
**The 12-of-395 qualifier printed:** *"administrator privileges were obtained at 12 of the 395 organisations"*, preceded by *"Scale and depth are separate figures"* — late find 1 folded in exactly as §0.4 and §14 required. ✅
**No remediation anywhere.** Zero patch commands, zero configuration, zero CLI flags, zero exploit mechanics, zero SKUs. The two CVEs are named once as identifiers and nothing is said about them beyond that. No sentence tells anyone to update, patch, isolate or scan. The PaperCut *patching* story — barred from the issue entirely at §7 item 17 — is absent. ✅
**No sentence implies OpenAI's Agents API was involved.** The Lead says *"Hundreds of autonomous agents ran on an OpenAI Codex harness with a DeepSeek model … the reporting is explicit that OpenAI's models were not used."* That is the §3.3 constraint discharged explicitly rather than by omission. ✅
**No overlap with the Week at a Glance CISA line.** The Lead's CVEs are `CVE-2026-81578` / `CVE-2026-82078`; the KEV item names no identifiers at all and describes a different product set. ✅
**Headline sensitivity:** *"One operator, hundreds of agents, 440 compromised instances"* — factual, no inflammatory framing. ✅

## Trigger 5 — source caps and the named adjacency, counted from the shipped HTML: **PARTIAL FAIL**

Counted by extracting every `href` and its containing section. **Ledger re-derived in reading order:**

| # | Section | Outlets actually linked |
|---|---|---|
| 1 | Foreword | — |
| 2 | Editorial Moment | **github.blog** |
| 3 | Week at a Glance | **thehackernews.com** · anthropic.com · *(Smart Reports — unlinked)* · business-standard.com · blog.pragmaticengineer.com · mdpi.com |
| 4 | Lead | greynoise.io · **thehackernews.com** · helpnetsecurity.com · securityweek.com · theregister.com · darkreading.com · openai.com *(jw-link)* |
| 5 | Quick Takes | sec.gov · businesswire.com · ant-intl.com · pymnts.com |
| 6 | Mid-issue accent | theregister.com · shapeblue.com · techtarget.com |
| 7 | *In Practice* | atlassian.com |
| 8 | Other News | openai.com · github.blog ×2 · newsletter.pragmaticengineer.com |
| 9 | Platform Updates | learn.microsoft.com |
| 10 | Outside In | figma.com · infoq.com |
| 11 | On the Radar | paymentsdive.com · siliconrepublic.com |
| 12 | The Leadership Read | leaddev.com |
| 13 | Recommended Reading | infoq.com · martinfowler.com · ojs.aaai.org · ludic.mataroa.blog |

**Source cap (v2.0, max 2 sections per publication) — PASS. No outlet exceeds 2:**

| Outlet | Sections | |
|---|---|---|
| **github.blog** | 2 — Editorial Moment, Other News (two items, one section) | **AT CAP** ✅ |
| **The Pragmatic Engineer** | 2 — Week at a Glance, Other News | **AT CAP** ✅ |
| **InfoQ** | 2 — Outside In, Recommended Reading | **AT CAP** ✅ |
| **Anthropic** | 1 — Week at a Glance (both items, one section) | Held at 1 ✅ |
| The Hacker News | 2 — Week at a Glance, Lead | At cap — **but adjacent, see below** |
| The Register | 2 — Lead, mid-issue accent | At cap, 2 apart ✅ |
| OpenAI | 2 — Lead `.jw-link`, Other News | At cap; the jw-link was authorised at §1.4 ✅ |

**No GitHub item appears in Week at a Glance.** The breach the Editorial Moment placement creates is prevented, exactly as §1.11 required: the Copilot managed-permissions story sits in Other News, and Phase 4 did not "improve" the placement. ✅ The Copilot weekly-release item and the JetBrains sandbox late find are both absent, barred by the cap. ✅

**Adjacency (v1.32) — ONE BREACH.** Positions 3 → 4 are consecutive and **both link thehackernews.com**: the Week at a Glance *Action Required* item's only source is `thehackernews.com/2026/09/cisa-adds-seven-exploited-flaws-as.html`, and the Lead's source tag carries `thehackernews.com/2026/09/papercut-attacker-uses-hundreds-of-ai.html`. The §1.11 ledger recorded the Lead's outlet as "GreyNoise Labs" alone and did not model the six corroborating secondaries in its source tag, which is where the breach entered. **Blocking finding 2.** Every other adjacent pair is clean.

## Trigger 6 — Outside In: **PASS**

Figma ships (Branch D not taken). **It reads as on-call design, not as a second security story:** the `<h2>` is *"The rota Figma's triage agent actually changed"*, the three `<h3>`s are what the agent was given, what it changed on the rota, and what transfers, and the closing paragraph is explicit that *"Security is the setting; the rota is the part that travels."* The `.oi-callout` frames it as *"a staffing and retention decision before it is a tooling one"*. There is no threat, no attacker and no vulnerability anywhere in the section. ✅
**The `.oi-stats-row` ran because all three figures pinned** (§0.9, ledger rows 9–10), and the figures are labelled *"Figma's own reporting rather than an audited result"* — attribution fidelity discharged. ✅
**Both dates stated:** *"Figma published on 29 July 2026 and InfoQ wrote it up in September, so neither is this week's news."* ✅
**`.author-card` runs** with both named authors (Matthew Sullivan and Brad Girardeau), per §0.9. ✅
**DoorDash and Zalando do not appear in a featured slot.** "Zalando" returns 0 occurrences in the whole file. "DoorDash" returns 2, both in the single Recommended Reading entry, cited to **InfoQ** and never to careersatdoordash.com — §7 item 12's binding held. ✅

---

# Part 2 — Phase 4's four flagged items, ruled

## Flag 1 — window badge style `5–11 September 2026`: **PASS, no change**

No spec rule governs the spacing of the date range; the template carries only `[DATE RANGE]`. House precedent is mixed — Issue 22 shipped `8 – 14 August 2026` (spaced), Issues 21 and 24 shipped spaced forms across a month boundary. **Decisive evidence: Issue 24's own `footer-next` reads `Next edition: 5–11 September 2026`, unspaced, character for character.** The shipped badge matches the predecessor's forward reference to this exact week. Both `.cover-date` and `.footer-sub` use the same string, and `.footer-next` correctly reads `12–18 September 2026`. **Ruled correct.** Worth settling as house style at some point; not a finding.

## Flag 2 — three throughlines kept, two optional ones dropped: **PASS, no change**

v3.8 makes the cross-issue throughline **optional** and explicitly "not a separate section". Three shipped, each a single sentence, each in a different section:

1. **Lead:** *"Issue 24's Feature covered Unit 42's ten-hour agent-run intrusion against a single unnamed victim; a week later the same pattern is running at 440 instances."*
2. **QT2:** *"…the same gap Issue 24's On the Radar recorded against the Agentic Payments Alliance."*
3. **Mid-accent:** *"Tottenham Hotspur's VMware exit, covered at Issue 24, ran through the same window."*

All three add substance. **One routing deviation, ruled acceptable:** §7 item 12 asked for the DoorDash throughline inside the Other News OpenAI item; it ships instead in Recommended Reading (*"the build-side companion to the Agents API item above"*), which keeps DoorDash further from a featured slot and satisfies Trigger 6 more comfortably. Dropping the other two is within the rule's own discretion.

## Flag 3 — the Anthropic Smart Reports item carries an unlinked source tag: **FAIL**

The item ships as `<span class="on-source">Anthropic</span>` with no `<a>`. The spec's Standard Weekly Structure is explicit for this section: *"Include source links on any item not covered by a full article."* The checklist restates it as *"Every section has source attribution"* and *"All links are real, working URLs."* Every other Week at a Glance item is linked. **This is a failure.**

**`candidates.json` was checked for a real URL.** It holds **no anthropic.com URL for Smart Reports** — the only anthropic.com entry is the threat-intelligence report, already used by the item above it. It does hold three real Smart Reports URLs, all secondary: `claypier.com/en/claude-enterprise-smart-reports-beta/`, `gaiinsights.substack.com/p/anthropics-new-smart-reports-feature`, and `releasebot.io/updates/anthropic/claude`. So the item can be linked without fabricating anything. **Blocking finding 3.**

## Flag 4 — Recommended Reading hrefs: **PASS**

All four confirmed present in `candidates.json`:

| Link | Found in |
|---|---|
| `infoq.com/news/2026/08/doordash-flux-cloud-agent/` | candidates.json ✅ |
| `martinfowler.com/articles/exploring-gen-ai/an-accidental-blackboard.html` | candidates.json ✅ |
| `ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/537` | candidates.json ✅ |
| `ludic.mataroa.blog/blog/ai-mania-is-eviscerating-global-decision-making/` | candidates.json ✅ |

**Extended to every `href` in the file: all 34 external URLs are present in `candidates.json` or `section-briefs.md`.** None is fabricated. ✅ Four are bare domains standing in for article URLs — see secondary finding 7.

---

# Part 3 — Compliance checklist, section by section

## Workflow pipeline (v3.1): **PASS**

Run directory present; `candidates.json` parses; `run-plan.md` and `section-briefs.md` both present with the required content; `review.md` is this file.

**Phase 4 cross-check.** Lead in the HTML = the GreyNoise PaperCut agent swarm = the lead named at run-plan §3. QT1 = Oracle's 10-Q. QT2 = Know Your Agent. Editorial Moment = "Number of the week" on 60.4%. Format = Standard Weekly. **All match.** ✅

**No silent re-promotion — all 29 §7 rejections checked against the shipped HTML.** Oracle → QT1 only. Visa/Mastercard/Ant → QT2 only. Broadcom VDDK → mid-issue accent only. OpenAI Agents API → one Other News item. GitHub Copilot permissions and credits → two Other News items. Anthropic threat report and Smart Reports → two Week at a Glance items, one section. GitHub availability report → Editorial Moment only. Pragmatic Engineer code review → one Other News sentence. LeadDev → Leadership Read. Figma → Outside In. DoorDash, Edwards-Alexander, Nii, Ludicity → Recommended Reading only. CISA KEV → one Week at a Glance line, exposure and ownership framing, no remediation. **PaperCut patching: absent entirely.** Visual Studio 2026 → the single Platform Updates row. PayPal → one Radar line. The 6,000 round-up → one Watching line, characterised as a round-up's count. MDPI → one Watching line with specific substance. **Absent entirely, as required: the IBS Intelligence tracker, Dario Amodei (0 occurrences), Uber's restructure as an anchor, Nvidia (0), Hugging Face (0), Broadcom TrueSource (0), MEBIS and Seamless Fintech ME (0), Zalando (0), the Copilot weekly release train (0), MAI-Code-1-Flash (0).** **No rejected candidate appears as the Lead or in any promoted slot.** ✅

**Late-find routing (run-plan §14) — fully compliant.** #1 (containment figures) folded into the Lead ✅. #2 (Agents API terms) ships as one clause — *"OpenAI states there is no additional fee for the API itself, with usage billed as tokens and tools"* ✅, and the nine sandbox partners are absent ✅. #3 (Alibaba allegation) runs once, inside the existing Anthropic item, attributed as an allegation ✅. #7/#8: the India figure is gone and 30 October folds into the Radar line ✅; no seniority profile. **#4, #5, #6, #9, #11 are all absent** — no ~30-AI-companies claim, no Azure MySQL primary or auth-core migration, no JetBrains sandbox, no BOD 26-04, no second Figma agents post ✅. **#10 and #12 not printed** — no PaperCut disclosure/patch dating, and no AI attribution on the Oracle cuts ✅.

**No-repeat-featured-anchor (v1.31) and the no-repeat-anchor set.** Uber appears twice: once inside the Week at a Glance round-up's company list, once inside that item's href. Not an anchor, not a story. Nvidia and Hugging Face: 0 occurrences. Tottenham/VMware: one sentence in the mid-accent. **All three are single-sentence throughlines at most. PASS.** ✅

**Jargon-watch coverage.** Every term flagged at run-plan §9.5 and briefs §1.8 is glossed inline or carries the sidebar — spot-checked all 30: *agent harness* (Jargon Watch), *remote code execution*, *domain administrator*, *exclusion list*, *10-Q*, *restructuring plan*, *free cash flow*, capex/opex (the C18 inline gloss, present and doing the work the sidebar would have), *Know Your Agent*, *agentic commerce*, the three protocol names, *VDDK*, *agentless backup*, *interim engineering manager*, *individual contributor*, *alert triage*, *on-call page*, *severity*, *steering memory*, *levelling*, *calibration*, *Known Exploited Vulnerabilities catalogue*, *elevation of privilege*, *session token*, *model distillation*, *bring-your-own-key*, *data residency*, *included AI credits*, *overage*. **No silent acronyms.** This is the strongest jargon pass in recent issues. ✅

## Foreword: **PASS**

78 words, one paragraph, drop cap via `.foreword` CSS. One editorial thread — bought capacity needing the scope, identity and accountability hired capacity had — stated once and not decorated. No "meanwhile", "elsewhere" or "also this week" (0 occurrences of each). Does not restate the cover contents. **No AI-default framing:** it does not open on AI's presence or absence, and it does not frame any story relative to AI's noisiness. **Issue-wide scan:** no section intro, transition or editorial moment frames a topic as a consolation prize for an AI-light week. ✅

## Article depth: **PASS**

Every article carries a so-what for delivery leadership. The Lead is scope governance, escalation design and supplier assurance, not CVE forensics. QT1 is capital allocation against headcount. QT2 is what an agent proves before a network lets it transact. No IC-level detail anywhere. **No corporate language:** "leverage", "synergy", "best-in-class", "going forward", "low-hanging", "move the needle", "double down" all return 0. **No action items:** the `.ip-try` line reports what Siqueira's account suggests rather than instructing, and the discussion prompt states an implication. ✅

## Explain key terms (v3.7): **PASS** — see the jargon coverage above.

## Format & length: **PASS** (3,639, 61 words of margin) — see secondary finding 6 on the methodology divergence.

## Topic & lead selection (v1.32): **PASS**

News-event Lead test: a research publication dated 9 September, in window, case (a), no traction exception. ✅ Anchor balance: 3 of 3 news events. ✅ Within-issue concern diversity: Operating at scale / Management & teams / Wider engineering landscape — three concerns, one anchor each. ✅ Tool releases are not leads: the Agents API is in Other News. ✅ AI-substrate ceiling: 3 of 6. ✅ Long-form variety: 1 of 3. ✅ Bank-regulator test: not engaged, no regulator item anywhere. ✅ "Worth reading": all three anchors carry tension.

## Audience-fit & urgency gates (v3.2): **PASS**

Lead `act_this_week`; QT1 and QT2 high-impact `decide_this_month`; no `general_awareness` story anchors. Anchor depth-fit: none of the three requires the reader to be operating the system — the Lead's takeaway is a risk-register conversation, not a patching one. Banking/fintech framing is positive throughout; QT2's loyalty sentence describes the reader's world rather than briefing them on compliance. *In Practice* quality check: named operator (Bruno Siqueira), real org (Atlassian), journey not framework, implication-level content. ✅

## Structure: **PASS**

Section order follows the v1.32 default exactly: news block → *In Practice* → Other News → Platform Updates → Outside In → On the Radar → Leadership Read. Week at a Glance grouped by urgency across three tiers. On the Radar puts the dated item first, then the open one. Layout components rotated and at the floor of 3.

**Section spread (v1.32):** *In Practice* at 7, Outside In at 10, Leadership Read at 12, separated by Other News, Platform Updates and On the Radar. **No two long-form sections adjacent.** ✅ `.oi-hero-band` not used. ✅

*Note on a checklist conflict:* the v3.0 checklist item placing *In Practice* "between Platform Updates and the Leadership Read" is superseded by the v1.32 default order that run-plan §8 mandates and that the no-adjacent rule requires. The shipped order is correct under v1.32.

## Ongoing stories: **PASS (not engaged)** — no P0 tracked; `p0-status-card` returns 0; no progress bar anywhere. The AWS Middle East item runs as a Radar line with its 30 April date stated and nothing claimed beyond it, exactly as §8 required.

## Leadership Read, Outside In & In Practice: **PASS**

Outside In: Figma appears nowhere in `outside_in_history`; sector is enterprise/SaaS against Duolingo's consumer tech, giving two categories in the rolling-4 window; transferability and substitution tests both hold (swap Figma for "a large engineering org" and the rota lesson survives intact — the section says so itself); not a migration story, not a single-team case study. Ends with a bold takeaway; renders its lesson in `.oi-callout`; uses `<h3>`s. ✅
Leadership Read: LeadDev, a real external piece; differs from the previous issue's martinfowler.com; 482 words inside 400–600; names the thesis and carries four concrete mechanisms against a floor of two; strip-link test passes (the two closing questions survive without the link); ends with the discussion prompt, which states an implication rather than an instruction. ✅
**Anti-overlap:** Atlassian (*In Practice*) / Figma (Outside In) / LeadDev (Leadership Read) — three different organisations, no shared author or outlet. ✅
*In Practice*: 406 words inside 300–450; season theme label carries no week count; evergreen sub-label present; ends with the bold *What to try*; full-width `.in-practice-header` above the `.in-practice` inset with a `<hr class="feature-break">` immediately above. ✅

## Source diversity (v2.0): **PASS** — no outlet in more than 2 sections. See Trigger 5.

## Layout choices (v3.5): **PASS**

QT-B with QT1 in the wider column — correct, QT1 carries four comparable figures and the issue's second real diagram while QT2 is one clean signal. Outside In Format A placed after Platform Updates and before the Leadership Read with a news section between. Mid-issue accent is genuinely interesting and its stat comes from a story in the issue. **Openers — final allocation matches §1.5 exactly:** Lead narrative-first, QT1 stat-first, QT2 summary-first, *In Practice* quote-first, Outside In stat-first, Leadership Read summary-first. **No two of Lead / QT1 / QT2 share an opener.** The two collisions are the pre-declared ones, seven and ten sections apart, and both conditional openers earned their condition by verification. ✅

## Feature Article: **PASS (not present)** — `last_feature_date` 2026-09-04; not eligible until Issue 26. Absence is cadence, not omission.
## The Stack: **PASS (not present)** — declined at §6.20 with a named standing topic; `last_stack_date` stays null.
## Down the Rabbit Hole: **PASS (not present)** — omitted on a worked ruling; `last_rabbit_hole_date` stays 2026-09-04.

## Prose style (v3.6): **FAIL — blocking finding 1**

The v3.6 scan is structural, not lexical. Applying the test — *does this sentence name what something is NOT in order to introduce what it IS?* — and scanning meaning rather than surface form:

**Counted (5, against a hard cap of 2):**

1. **Outside In, `.oi-callout`:** *"The measurable output of a triage agent was fewer pages for the people on the rota, which is a **staffing and retention decision before it is a tooling one**."* — names the category it is not, to install the category it is.
2. **Outside In, closing paragraph:** *"**Security is the setting; the rota is the part that travels**, to a payments or platform rota just as readily."* — the wrong-unit / right-unit structure the checklist names explicitly as a counted equivalent.
3. **Leadership Read, opening:** *"…and that the gap is a **levelling and coaching problem rather than a tooling one**."*
4. **Leadership Read, closing:** *"Both are **capacity questions before they are coaching ones**."*
5. **Platform Updates:** *"…which makes **the model contract, rather than the IDE licence**, the thing that decides where code goes."*

**Examined and ruled clear, with reasons (recorded so the ruling is auditable):**

- *"publicly reported events, not a sector measure"* (Week at a Glance) — a **mandated** attribution-fidelity characterisation per §7 item 23 and §5.10. Not counted.
- *"One consultant's account of his own client base — an observation, not a finding"* (Recommended Reading) — **mandated** by §7 item 15 in almost exactly these words. Not counted.
- *"The figures are Figma's own reporting rather than an audited result"* (Outside In) — **mandated** by §9.4 attribution fidelity. Not counted.
- *"with authority to act rather than recommend"* (Lead) and *"a different end of the spectrum from the attacker-operated agents"* (QT2) — **mandated** agent-terminology precision glosses per §9.4. Not counted.
- *"the reporting is explicit that OpenAI's models were not used"* (Lead) — **mandated** by §3.3. Not counted.
- *"The peak figure is a separate measure of rate, not a fourth step"* — inside the `<svg>`, a diagram disambiguation, and excluded from body copy. Borderline; not counted.
- *"rather than as soft extras"*, *"rather than as tenure accrues"*, *"rather than to time served"*, *"rather than from a course"* (Leadership Read) — each reports the source's own contrast rather than reframing what the story is. Individually clear. **Recorded anyway: the Leadership Read runs seven contrastive constructions in 482 words, which is the prose tic the rule exists to suppress even where each instance is defensible.**

**Ruling: 5 counted against a hard cap of 2.** Even at the most conservative reading — dropping #5 as a table cell and #2 as a metaphor — the count is 3, still over. The run plan predicted this failure mode at §9.4 in terms ("this material invites it badly… Phase 4 lexical scans have returned zero while shipping violations before in this run's history; do not repeat that") and it recurred. **Three must go.**

## Quote allocation & attribution fidelity (v3.6): **PASS**

**Every quoted phrase in the issue audited against §1.7:**

| Quoted text | §1.7 status |
|---|---|
| *"is no longer available for use or download"* (mid-accent) | Verbatim fragment of §1.7 line 1 ✅ |
| *"Especially at a highly distributed company, documenting decisions is crucial to avoid repeated or unnecessary meetings."* (*In Practice* opener) | §1.7, quote-first opener ✅ |
| *"I'd been an overcommunicator before this experience, but being a manager reinforced the importance of keeping everyone in the loop, early and often."* (*In Practice* blockquote) | §1.7, the section's counted visual ✅ |
| *"generating code faster than we're building the learning, understanding, and judgment junior software engineers need to grow in their career"* (Leadership Read `.pull-quote`) | §1.7 ✅ — **stops at "career"**; the single-rendering tail is absent ✅ |
| *"Junior engineers are skipping straight to architect-level thinking"* (Leadership Read body, in `<em>`) | The article's **title**, not attributed speech. Cleared |

**No GreyNoise quotation anywhere in the issue.** The campaign is reported, never quoted, and no `.pq-bar` runs. ✅
**Anthropic is paraphrased throughout, never quoted**, and the Alibaba claim is rendered *"It separately alleges that…"* ✅
**The Pragmatic Engineer is not quoted at all**, either item. ✅
**Ludicity is not quoted** — characterisation only. ✅
**The third verified Siqueira line (*"Being concise and to the point…"*) is deliberately unused**, exactly as §1.7 predicted; its absence is not a miss. ✅
**Figma's on-call sentence runs as reported description, not in quotation marks** — §1.7's paraphrase instruction honoured. ✅
**One quote, one slot:** no line appears twice. ✅
**Attribution fidelity:** McKinsey is absent entirely (the $3–5tn figure did not ship); the 6,000 tally is a round-up's count; Figma's percentages are its own reporting; the Alibaba claim is Anthropic's allegation; the GitHub error-budget framing is absent. **No invented label is put in any source's mouth.** ✅

**One minor deviation from a §1.7 binding — secondary finding 5.** §1.7 said of the two Broadcom lines: *"use this or the TAP clause below, not both."* The accent runs the first verbatim **and** paraphrases the TAP clause (*"its approved use has always been backup and recovery products from its technology alliance partners"*). The paraphrase is faithful to Broadcom's cleared wording, so there is no fidelity problem — but both clauses run where one was permitted, and the accent is 112 words against ~70.

## Audience framing & voice (v1.31): **PASS**

**Sentence-level grep — every banned construction returns 0:** "the reader", "reader's", "your team", "your firm", "your org", "your customers", "you must", "you should", "you need to". ✅
**No rhetorical questions posed to the audience.** Two interrogatives appear and both are third-person. Week at a Glance: *"Which of those sit inside the estate, and who owns the answer, is the week's question"* — a declarative sentence with an embedded interrogative. Discussion prompt: *"if senior engineers are the apprenticeship infrastructure, which output commitments move to make room for the mentoring, review and teaching that assumes?"* — no second person, and structurally the form the spec's own approved rewrite uses. ✅
The audience is never located as a bank's internal engineering team. Banking, fintech and loyalty content is framed as the world the reader operates in. ✅

## Agent terminology precision (v2.6 / v3.0): **PASS** — all four senses named on first use in their own sections

| Section | Sense named |
|---|---|
| Lead | *"agents operated by an attacker against systems he does not own, with authority to act rather than recommend"* |
| QT2 | *"consumer-facing commerce agents, software that buys on a person's behalf, which is a different end of the spectrum from the attacker-operated agents in this issue's lead"* |
| Other News | *"developer-triggered agents inside a layer an organisation configures and constrains centrally"* |
| Outside In | *"a scoped internal agent whose findings a human confirms or corrects before anything closes"* |
| Leadership Read | *"code-generating assistance inside a developer's own workflow, where a person triggers the work and reads the result"* |

The highest-density agent-terminology issue in the run, and the strongest execution of this rule so far. ✅

## Sources & links: **PARTIAL FAIL** (findings 3 and 7)

Every section carries source attribution **except the Anthropic Smart Reports Week at a Glance item** (finding 3). All 34 external URLs trace to `candidates.json` or `section-briefs.md`; none is fabricated. Four are bare domains (finding 7).

## Date-range enforcement (v1.4): **PASS**

Every anchor has a primary source in the 5–11 September window: Lead 9 September, QT1 11 September, QT2 9 September. **Nothing dated after 11 September is presented as in-window** — the only later dates are PayPal's 30 October separations (a forward-looking Radar item) and the footer's 12–18 September next edition. **Every out-of-window piece states its date and, where required, carries its label:** *In Practice* — March 2024, with the `.ip-evergreen` *"A classic worth revisiting"* label and the sentence *"The piece dates from March 2024 and has not been improved on since"*; Outside In — *"Figma published on 29 July 2026 and InfoQ wrote it up in September, so neither is this week's news"*; Leadership Read — August 2026, stated twice; Recommended Reading — 2 September, 1986 and 18 July all stated. The Copilot credits item pegs itself to the in-window billing period. **Amodei (12 September) is absent entirely**, as §5.6 required. ✅

## Design: **PASS**

Single complete HTML file. **`<style>` block compared byte-for-byte against `.claude/skills/engineering-digest/assets/weekly-template.html`: 39,614 characters each, whitespace-normalised strings identical, zero class-selector difference in either direction. Exact match.** ✅ The one real `<svg>` is an actual `<svg>` element, not a CSS approximation, with `role="img"` and a descriptive `aria-label`. No `<img>`. No stock photography. Headline is factual. Cover badge is the orange `.week-badge` *"This Week's Briefing"*. ✅

## Content enhancements (v1.6): **PASS**

`.cover-read-time` present. Lead `.pq-bar` omitted with a documented reason (no GreyNoise line verified) — the checklist permits omission when no quote earns it, and §1.1 required it. Both quick takes end with a bold `.so-what` takeaway; Outside In ends with the same. `.oi-callout` present. Lead, Outside In and Leadership Read all use `<h3>`s. Discussion prompt present and non-prescriptive. `.sidebar-box.compliance` correctly absent — no regulator item exists in the issue. `.stats-tile` used twice where data earns emphasis. ✅

*Advisory, not a finding:* the Leadership Read's three mechanisms are a genuine sequence rendered as `<h3>`-headed prose rather than a numbered list. Given each mechanism runs a full paragraph, the `<h3>` treatment scans better than a numbered list would; ruled acceptable.

## Pacing & layout (v3.5): **PASS**

Quick hits open briskly, the Lead and Quick Takes build, the back-of-book eases out. Tier 2 labels written in sentence case in the HTML (*"Action required"*, *"Worth knowing"*, *"Watching"*), not relying on `text-transform`. The Lead's sidebar is the floated `.jargon-watch` inset — `.article-with-sidebar` returns 0 in a standard weekly. ✅ Two `.section-breather`s, at the cap. Editorial Moment sits after the Foreword and before the Week at a Glance, and the "Number of the week" variant matches the template's markup exactly. ✅

## Reader service components (v3.8): **PASS**

**Concept of the week:** converted to an inline gloss inside QT1 per C18, with the §1.4 arithmetic behind it (a 260px float against ~114px of remaining text in the featured card). The concept, the placement and the target reader are unchanged. **This is the first of the two documented deviations and it shipped as documented.** ✅
**Author cards:** rendered on *In Practice* (Bruno Siqueira / Atlassian / March 2024) and Outside In Format A (Sullivan and Girardeau / Security engineering, Figma / 29 July 2026), both with text-initials avatars and no photos. **The Leadership Read uses the smaller inline attribution — `<p class="source-tag">LeadDev · August 2026</p>` — because no author byline could be established across two searches (§0.2 row 32, C20). This is the second documented deviation and it shipped as documented.** An author card with no name would have misrepresented its own load-bearing claim; the inline form is the right call. ✅
**Cross-issue throughlines:** three, all single sentences. ✅

## Visual identity (v1.31): **PASS**

`.cover-identity-strap` with `.cis-vol` as a teal pill badge ✅ · `.cover-tagline` *"Engineering decisions, every Friday."* ✅ · bordered orange `.week-badge` ✅ · dot-grid motif from the template CSS ✅ · `.cover-lead-stat` variant chosen on the issue's strongest signal ✅ · per-section `.section-time` on all ten `<h2>`/`<h3>`-bearing sections ✅ (but see finding 4) · `.lead-article` navy drop cap and `.mgmt-section` teal drop cap ✅ · `.footer-vol` teal pill ✅ · archive bar with five pills, **#25 marked `current`** ✅ · **no editor's note** (Issue 12 only) ✅.

**Palette guardrail (v1.32) — the Issue 12 failure does not recur.** Lead label `.section-label.alert` red, which is the permitted active-in-the-wild-exploitation case. The only other red is the `.tier-action` styling and its `.qh-badge red`. QT1 header `.qt-header.fintech` = orange (Management & teams). QT2 header `.qt-header.devex` = deep teal (Wider engineering landscape). Outside In label orange via `.outside-in-section .section-label`. **Structural landmarks all default teal:** Week at a Glance, Foreword, Quick Takes, Other News, Platform Updates, On the Radar, Recommended Reading, and the In Practice header label via `.in-practice-header .section-label{color:var(--deep-teal)}`. ✅

## Visual density (v1.30): **PASS** — 6 visuals, 2 real diagrams, per-section floor met, compare-table at 3 rows against a 5-row cap. See the counts above.

## Template compliance: **PASS** — exact `<style>` match; all classes used as the template defines them; `.rd-label` is a real template class, correctly used for the open-ended AWS Radar item.

---

# Part 4 — Failures, numbered, with the exact fix

## Blocking

**1. Prose style v3.6 — epistemic reframing at 5 against a hard cap of 2.**
*Fix:* rewrite three of the five as direct declaratives. Cheapest three, preserving the strongest two: (a) `.oi-callout` → *"The measurable output of a triage agent was fewer pages for the people on the rota, which puts it in a staffing and retention conversation."*; (b) Leadership Read closing → *"Both are capacity questions."*; (c) Platform Updates → *"…which moves the decision about where code goes onto the model contract."* Keep #2 (*"Security is the setting; the rota is the part that travels"*) and #3 (*"a levelling and coaching problem rather than a tooling one"*), which are the two carrying real analytical weight. Recount structurally after the edit — not lexically.

**2. Adjacent-source rule v1.32 — The Hacker News in consecutive sections (Week at a Glance → Lead).**
*Fix:* remove `thehackernews.com` from the Lead's source tag. Five corroborating secondaries remain (Help Net Security, SecurityWeek, The Register, Dark Reading, plus the GreyNoise primary), so nothing is lost and no figure loses its second limb under §0.0. Then update `section-briefs.md` §1.11 to record each section's **full** linked-outlet set rather than its anchoring outlet only — that gap is what let this through.

**3. Sources & links — the Anthropic Smart Reports Week at a Glance item ships with no source link.**
*Fix:* hyperlink the `on-source` tag. `candidates.json` holds no anthropic.com Smart Reports URL, so use one of the three real secondary URLs it does hold and relabel the tag to match the outlet — `gaiinsights.substack.com/p/anthropics-new-smart-reports-feature` is the closest to a write-up. The item's substance stays attributed to Anthropic in the body text, so the Anthropic 1-of-2 section count is unaffected and no cap moves.

## Secondary

**4. Per-section reading times sum to 16 against a cover read time of 18.**
*Fix:* raise the Lead from `(2 min)` to `(3 min)` (526 words) and Quick Takes from `(2 min)` to `(3 min)` (559 words). The sum then reads 18 and matches the cover. The cover's own 18 is correct (3,639 ÷ 200 = 18.2).

**5. Mid-issue accent runs long and runs both Broadcom clauses.**
112 words and four sentences, against the briefs' ~70 words and the spec's *"compact 2–3 sentence highlight box"*; and §1.7 permitted the verbatim quote **or** the TAP clause, not both.
*Fix:* cut the TAP paraphrase (*"; its approved use has always been backup and recovery products from its technology alliance partners"*) and fold the agentless-backup gloss into the first sentence. That lands ~75 words and three sentences, keeps Broadcom's verbatim wording and the Tottenham throughline, and recovers ~35 words toward finding 6.

**6. Word count sits 61 words inside the ceiling on this run's counting method and 76 words over it on the method Issue 24's review used.**
3,639 with the cover and footer stripped; 3,776 with them included. The two Phase 5 reviews should not count differently across a ceiling.
*Fix:* recover ~150 words, which clears both readings. The Lead is the place — 526 words against a ~400 allocation, and paragraphs three and five both restate scale that the SVG already carries. Combined with finding 5 that is ~185 words and lands the inclusive count at ~3,590. Separately, settle the counting convention in the spec so the next review does not have to choose.

**7. Four bare-domain links stand in for article URLs.**
`theregister.com/` (mid-accent), `paymentsdive.com/` (Radar), `blog.pragmaticengineer.com/` (Week at a Glance), `newsletter.pragmaticengineer.com/` (Other News). All four are real and all four appear in `candidates.json`/`section-briefs.md`, so none is fabricated and this is not a blocking failure — but a homepage is not a source link to the item it sits under.
*Fix:* no action available this run, since no fetch capability exists to resolve the article URLs and inventing paths would be fabrication. Record it: **the correct behaviour under a no-fetch regime is the bare domain, not a guessed path.** Resolve at the next run with egress.

---

# Part 5 — Caveats

1. **Search-only verification, second consecutive run.** Nothing was fetched at Phase 1, Phase 3 or Phase 5. This review audits the shipped HTML against the §0.2 ledger under the §0.0 standard; it does not independently re-verify the underlying facts, and it could not. Every load-bearing figure in the HTML is a cleared ledger row, so no figure required a fresh WebSearch and none was run. **Issue 25 is a search-verified issue end to end and any later audit should read it that way.** The §0.0 standard is sound — two-limb clearance with a hard drop-not-soften rule — and Phase 4 applied it without a single soften.

2. **The Leadership Read's AI classification is contested and I have ruled one way.** I concur with §5.8 that its primary subject is levelling and coaching, not AI. A reviewer who weighs the opening sentence and the tutor/copilot/accelerator mechanism more heavily would reclassify it AI-primary, putting v1.35 at 2 of 3 and triggering Branch D — whose authorised remedy is to drop **Outside In**, not the Leadership Read. Because the Editorial Moment shipped non-AI, the 3-of-6 substrate count is unaffected either way, exactly as §11 designed.

3. **Four outlets appear in the HTML that are not in the §1.10 / §1.11 ledgers:** PYMNTS (QT2), ShapeBlue and TechTarget (mid-accent), Silicon Republic (Radar). Each sits at one section and none creates a cap or adjacency breach, so none is a failure — but the ledgers are incomplete as records of the shipped issue and should be reconciled before the state file is written. The same incompleteness is the root cause of blocking finding 2.

4. **OpenAI reaches two sections** via the Lead's `.jw-link` plus the Other News item. This was authorised at §1.4 and sits at the cap, not over it. Recorded so a later audit does not read it as drift.

5. **QT1's `.compare-table` shipped as 3 rows × 2 columns**, with the before/after pair combined in one cell using an arrow, rather than the 3-column Before / In this filing layout §1.1a specified. It is further inside the 5×2 cap than the briefed version, the derived-figure labelling survives intact, and the before/after grammar reads cleanly. Ruled an acceptable Phase 4 rendering choice, recorded rather than flagged.

6. **`digest-state.json` must not be updated until the three blocking findings are fixed and this review re-run.** On the primary branch the updates are run-plan §12 unchanged, plus the §21 additions: `in_practice_season_progress` → 3 with the season marked complete, Siqueira appended with 22 March 2024, Figma appended as enterprise/SaaS with 71 / 20 / 25, `last_leadership_read` → LeadDev with the August 2026 date and a note that no byline could be established, and the twelve late finds added to the Issue 26 routing list.

---

**Re-review required on findings 1, 2 and 3. Findings 4–7 should be taken in the same pass.**
