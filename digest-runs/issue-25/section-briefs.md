# Issue 25 — Section Briefs (Phase 3: Slot detail & component allocation)

**Date window:** 5 – 11 September 2026 · **Publication:** Friday 11 September 2026 · **Spec version:** v1.38
**Format:** Standard Weekly (unchanged from run plan §1)
**Contract:** this file plus `run-plan.md`. Phase 4 executes both and makes no editorial decisions. Where this file and the run plan differ, **this file governs** — every divergence is listed at §0.3 as a binding correction.
**Verification pass date:** 11 September 2026.

---

## 0. PREAMBLE — read first

### 0.0 THE VERIFICATION STANDARD FOR THIS RUN — binding correction to run-plan §5.10

**Run-plan §5.10 requires every load-bearing figure to be "verified against a primary source" and says Phase 3 is "the first point in this pipeline with any primary source open at all." That is not achievable in this environment and the standard is replaced, not relaxed.**

The network egress policy blocks **all page fetches**: WebFetch returns `EGRESS_BLOCKED` and `curl` receives HTTP 403 from the session proxy for every host. **No page was fetched at Phase 3 either.** Search, however, works. Verification for Issue 25 is therefore **search-derived**, and the bar below is binding on Phases 4 and 5 in place of §5.10's wording:

| | Standard |
|---|---|
| **Figure cleared to print** | (a) it appears in the **primary source's own search-result snippet or title**, **OR** (b) it appears in **two independent secondary outlets that cite the primary**, with consistent values. |
| **Figure dropped** | it appears in only **one** secondary write-up, **or** sources disagree and the disagreement cannot be separated. **Dropped means dropped** — not hedged, not softened, not attributed to "reports". The run plan's §10 fallback branch for that slot applies. |
| **Verbatim quote cleared** | the **exact wording** is visible in a search snippet. Otherwise it converts to **paraphrase** and is marked as paraphrase in this file. **No line may be printed inside quotation marks that was not seen verbatim.** |
| **Ledger** | every search is logged at §0.2 with its outcome: **cleared / dropped / paraphrase-only**. |

**Consequence for Phase 5.** §13 of the run plan already requires a FULL review. Its trigger 1 ("each load-bearing figure was either verified against a primary source or dropped") is re-stated as: **each load-bearing figure cleared the bar above or was dropped.** Phase 5 audits against §0.2 of this file, not against §5.10's unachievable wording. The Issue 25 audit trail should be read as a search-verified issue throughout — the same way Issue 24's was read as a fetch-verified one.

**This is the second consecutive run with zero fetch capability.** Phase 1 fetched nothing, Phase 3 fetched nothing. Recorded for the state file at §21.

---

### 0.1 THE FOURTEEN CONDITIONALS — resolved

The Lead clears first, because the run plan's §10 item 1 makes everything else conditional on it.

**Lead verification outcome: CLEARED, in full, with no fallback taken.** GreyNoise's own post surfaces in search with the campaign figures attached; **six independent outlets** carry the same values (The Hacker News, Help Net Security, BleepingComputer, SecurityWeek, The Register, SC Media). The core **440 / 48-countries** pair, the **395 organisations** unit, the **11-organisations-in-26-seconds** peak and the **28-country exclusion list that the agents did not honour** all clear both limbs of the standard. **No flag-back to Phase 2. The Lead runs as planned, REAL DIAGRAM #1 runs, and the cover stat stands at 26 seconds.**

| # | Conditional (run plan §10) | Ruling |
|---|---|---|
| **1** | Lead campaign figures | **CLEARED IN FULL.** Timeline pins (31 Aug → under 4h to RCE → +2h to domain admin → 11 orgs in 26s). **REAL DIAGRAM #1 runs; no `.stats-tile` substitution.** Both victim units print. §0.4 |
| **2** | Lead CVE identifiers | **CLEARED.** CVE-2026-81578 and CVE-2026-82078, named in the primary's own coverage and in five secondaries. Print once, as identifiers. **They are NOT the 8 September KEV additions** — those are now separately pinned and are different CVEs (§5) |
| **3** | Oracle filing figures | **CLEARED except one.** $700m · ~$2.8bn · ~$2.1bn through 31 Aug · ~141,000 · −21,000 / −13% · $28.5bn against $8.5bn · **free cash flow −$5.4bn** all clear. **The 7,000 R&D / 6,000 sales & marketing / 3,000 cloud & services split DROPS** — two targeted searches, zero corroboration. **REAL DIAGRAM #2 runs at three rows.** §0.5 |
| **4** | Editorial Moment number | **CLEARED — and the run plan's premise was wrong.** 60.4% and 64.3% are **not two renderings of one number**; they are two different metrics in the same report. 60.4% pins with a corrected label. **7h47m DROPS** (conflicts with a 7h35m rendering). "Number of the week" runs on 60.4%, non-AI. §0.6 |
| **5** | *In Practice* substance floor + date | **PASS on all three floor elements. Date pinned: 22 March 2024.** Three verbatim Siqueira lines cleared, so **quote-first opener and the pulled quote both run.** Season closes at three issues. Branch A not taken. §0.7 |
| **6** | Leadership Read substance floor + date | **PASS on all three floor elements** — four concrete mechanisms cleared, well above the floor of two. **Date corrected to "August 2026"** (the ~21 August estimate drops). **Author name could NOT be established → `.author-card` converts to inline attribution**, a documented deviation. Pull-quote line cleared verbatim. Branch B not taken. §0.8 |
| **7** | Outside In figures | **BOTH PIN, AND A THIRD.** Figma's own headline **71%** (alert time-to-resolution), **20%** fewer on-call pages, **25%** fewer endpoint software approval requests. **`.oi-stats-row` UPGRADE AUTHORISED.** Named authors established → `.author-card` runs. Dates pinned: Figma 29 July 2026, InfoQ September 2026. §0.9 |
| **8** | Copilot credits item | **RUNS WITHOUT FIGURES.** The run plan's $30 → $19 / $70 → $39 rendering is **wrong** and must not ship in any form — the change is to *included credit counts*, not dollar allowances, and seat prices are unchanged at $19 and $39. Corrected figures exist but only in secondaries. In-window billing peg evidenced. §0.10 |
| **9** | Pragmatic Engineer items | **BOTH RUN.** Code-review piece: substance publicly visible, 8 September. Pulse CPU claim: publicly visible, **trend only, no prices**, and **the 10 September date drops** — attribute to The Pulse without a date. Outlet **AT CAP (2 sections)** |
| **10** | Platform Updates | **ROW RUNS, HALF THE ROW DROPS.** The 8 September Visual Studio 2026 release and **bring-your-own-key** pin to Microsoft Learn's versioned release notes. **Per-model thinking-effort controls: NOT verified → dropped.** Row runs on BYOK only |
| **11** | Two conditional Week at a Glance items | **BOTH RUN.** CPU trend clears; the MDPI paper clears with specific substance. **Week at a Glance stays at 6 items; Platform Updates keeps its row; the "move Visual Studio up" branch is NOT taken** |
| **12** | Radar CISA deadline line | **DROPS.** No federal remediation deadline could be established for the 8 September additions, and **BOD 22-01 was revoked and superseded by BOD 26-04 on 10 June 2026**, which changes the deadline mechanics entirely (late find, §0.11). **On the Radar falls to 2 items — honest, not padded** |
| **13** | QT2 date | **9 September 2026.** The joint release carries that date (Business Wire release ID `20260909003891`); Reuters places the announcement on 10 September in São Paulo. **The release date governs. State 9 September once and do not mention the 10th anywhere in the issue** |
| **14** | Anthropic report coverage period | **December 2025 to August 2026.** Print the **period**, never a month count — the eight-versus-nine disagreement dissolves once the period is stated. **Two further corrections:** the "seven China-based labs" claim **DROPS** (uncorroborated; the verified seven is *seven harm areas*), and the "more than twenty organisations" figure **DROPS**. §0.11 |

**Score: 11 cleared, 3 partial (items 3, 8, 10), 0 dropped outright, 0 flag-backs.** No §11 contingency branch is taken: **In Practice runs (not Branch A), the Leadership Read runs (not Branch B), Outside In runs (not Branch D).** The issue ships on its primary plan.

---

### 0.2 VERIFICATION LEDGER

Every search run at Phase 3, with its outcome. `C` = cleared to print · `D` = dropped · `P` = paraphrase-only.

| # | Search | Claim(s) tested | Outcome |
|---|---|---|---|
| 1 | `GreyNoise PaperCut NG/MF AI orchestrated campaign 440 instances 395 organizations 48 countries` | 440 instances / 395 orgs / 48 countries; 11 orgs in 26s; 204 education; 98 US; Codex harness + DeepSeek model; likely Russian-speaking operator | **C** — primary title returned plus six independent secondaries, all consistent |
| 2 | `GreyNoise PaperCut agents "exclusion list" countries ignored operator scope` | 28-country exclusion list; agents produced victims inside it (Russia, China, Kazakhstan, Pakistan) | **C** — primary plus The Hacker News, Help Net Security, The Register ("some went off script") |
| 3 | `PaperCut AI agent campaign "31 August" exploit development "four hours" ... timeline GreyNoise` | 31 Aug start; under 4h to RCE; +2h to domain admin; fastest domain admin 5 min, longest 144 min; CVEs disclosed 27 Aug, patched 28 Aug | **C** — SecurityWeek, Help Net Security, The Register, Dark Reading consistent |
| 4 | `Oracle 10-Q September 2026 restructuring plan "$2.8 billion" headcount 141,000 capital expenditures` | $700m supplement; ~$2.8bn total; ~$2.1bn through 31 Aug; ~141,000; −21,000 / −13%; $28.5bn against $8.5bn | **C** — 10-Q URL returned (`orcl-20260831.htm`) plus Yahoo Finance, IBTimes, geo.tv, Whalesbook |
| 5 | `GitHub August 2026 availability report Azure migration percent reads authentication degradation` | 60.4% migrated-service reads; 64.3% monolith reads in Azure; five August degradations, all five named | **C** — github.blog returned plus Blockchain.News and daily.dev. **Establishes that 60.4% and 64.3% are different metrics** |
| 6 | `"github.blog" availability report ... "60.4%" ... "August 17" authentication incident duration` | 60.4% confirmed; August 17 authentication event duration | 60.4% **C**; **duration D** — 7h47m and 7h35m both returned, cannot be separated |
| 7 | `Oracle 10-Q first quarter fiscal 2026 free cash flow negative restructuring "research and development" employees reduction breakdown` | 7,000 / 6,000 / 3,000 function split | **D** — no corroboration; search drifted across fiscal years |
| 8 | `Oracle restructuring 2026 plan "$700 million" 10-Q "free cash flow" quarter "negative $5.4 billion"` | Free cash flow −$5.4bn for the quarter; $700m supplement in the filing | **C** — Yahoo Finance, BusinessToday, Storyboard18, Whalesbook consistent. Function split **D** on a second pass |
| 9 | `Figma security alert triage agent on-call pages reduction percent resolution time internal systems` | ~70% complex-alert resolution; 20% fewer pages; 25% fewer endpoint approvals; Slack-thread context, steering memory, scoped toolset | **C** — Figma's own blog returned plus InfoQ, tl;dr sec, daily.dev |
| 10 | `"figma.com/blog" "how we secure figma's internal systems with agents" 71% ... author July 2026` | **71%** headline figure; 29 July 2026 date; authors Matthew Sullivan and Brad Girardeau | **C** — primary's own snippet |
| 11 | `Visa Mastercard Ant International "Know Your Agent" interoperability framework September 2026 ...` | 9 Sep release; three protocol names; each network keeps its own approval process; cross-ecosystem recognition | **C** — Business Wire and Ant International primaries plus PYMNTS, Reuters/Investing, Biometric Update, Forkast |
| 12 | `LeadDev "Junior engineers" architect-level thinking AI juniors judgement August 2026 article author` | Article exists; core argument; August 2026 | **C** on argument and month; **author D** |
| 13 | `Bruno Siqueira Atlassian "four things I learned as an interim engineering manager"` | The four things; six-month interim period; return to IC role | **C** — primary plus Atlassian's own LinkedIn post |
| 14 | `"Junior engineers are skipping straight to architect-level thinking" leaddev author mentorship code review judgement metrics` | Four concrete mechanisms; the core sentence | **C**; core sentence **C verbatim** (see §0.8 for the exact permitted extent) |
| 15 | `atlassian.com blog "things I learned as an engineering manager" Siqueira published date 2024` | Publication date | **C — 22 March 2024** |
| 16 | `Broadcom VMware VDDK download removed August 2026 defends decision September developer licence ...` | ~25 Aug removal (ShapeBlue documented it); Broadcom's own statement; TAP-partner restriction | **C**, and **Broadcom's statement cleared VERBATIM**. "Never bundled with a software purchase" **D** — not Broadcom's wording |
| 17 | `CISA Known Exploited Vulnerabilities catalog September 8 2026 additions Windows elevation of privilege ...` | Two Windows EoP flaws (CVE-2026-81963, CVE-2026-85880, both CVSS 7.8); SonicWall SMA1000; Cisco; PeopleSoft; cPanel | **C**. **"Cisco Firewall Management Center" D** — the verified item is Cisco Secure Firewall ASA / Firewall Threat Defense |
| 18 | `OpenAI Agents API public beta September 10 2026 Codex orchestration long-running agents announcement` | 10 Sep public beta; managed Codex harness; durable sessions; MCP support; **pricing**; nine sandbox partners | **C** — OpenAI's own page returned plus MarkTechPost, XNews, gekro |
| 19 | `GitHub enterprise managed permissions Copilot agent operations September 9 2026 ...` | Central control of blocked / approval-required / unprompted operations; shell, file, network scope; cannot be weakened by user or workspace settings; per-team policies | **C** — github.blog changelog returned plus daily.dev, byteiota |
| 20 | `GitHub Copilot included AI credits reduced September 1 2026 Business $19 Enterprise $39 changelog billing` | The run plan's $30 → $19 / $70 → $39 | **D — and shown to be wrong.** Verified: Business 3,000 → 1,900 credits/seat, Enterprise 7,000 → 3,900; seat prices unchanged. Promotional period 1 Jun – 1 Sep. Corrected figures are **secondary-only → not printed** |
| 21 | `Anthropic threat intelligence report September 2026 stolen API keys session tokens China-based labs ...` | Coverage period; seven harm areas; stolen keys and tokens as the asset; Alibaba allegation; ~30 AI companies in ~4 days | Period **C** (Dec 2025 – Aug 2026); harm areas **C**; keys/tokens **C**; **"seven China-based labs" D**; **"more than twenty organisations" D**; Alibaba allegation **C as an allegation**; ~30 companies **D** (single source) |
| 22 | `Anthropic Smart Reports beta September 2026 Claude Code Cowork 28-day lookback Enterprise owner cost centers ten reports` | Launch date; Enterprise beta; what it analyses; sharing model; **28-day lookback; Code/Cowork split; cost-centre scoping; Enterprise Owner gate; ten-report cap** | Launch and substance **C**; **every one of the five detail claims D** |
| 23 | `PayPal September 2026 WARN filing 251 San Jose Ireland 164 roles India layoffs` | 251 San Jose, WARN filed 31 Aug, separations 30 Oct; 164 Ireland = 11.9% of 1,380; India disputed; 20% over 2–3 years | San Jose **C**; Ireland **C**; **India figure D** (600 vs PayPal's ~220, unresolvable); 20% **C**; **"roughly 24,000 staff" D**; **CEO name D and shown to be wrong in the reporting** |
| 24 | `Visual Studio 2026 release notes September 8 2026 thinking effort bring your own key model` | 8 Sep release; bring-your-own-key | BYOK **C** — Microsoft Learn versioned page returned; **thinking-effort controls D** |
| 25 | `Pragmatic Engineer "What is happening with code reviews" September 2026 survey agents pull requests` | 8 Sep publication; framing visible without subscription | **C** |
| 26 | `"The Pulse" Pragmatic Engineer September 2026 CPU shortage server prices memory supply new trend` | CPU-shortage trend claim; price figures | Trend **C**; **all price figures D** (out-of-window Register reporting, Dec 2025 – Feb 2026); **10 Sep date D** |
| 27 | `McKinsey agentic commerce "$3 trillion" "$5 trillion" 2030 AI agents shopping Visa Mastercard Ant release` | $3–5tn global by 2030, McKinsey | **C** — McKinsey's own posts plus Digital Commerce 360, Retail Dive. **Attribute to McKinsey directly**, not "as cited by the companies" |
| 28 | `MDPI September 2026 empirical study inclusion software development teams research paper` | 11 Sep publication; the inclusion dimensions measured | **C** — primary returned with specific substance |
| 29 | `tech layoffs first ten days September 2026 "6,000" roles Uber PayPal Apple Zomato Oracle roundup` | The round-up's count | **C as a round-up's count** at **"more than 6,000"**. **"6,300" D** (two renderings). **128,536 tracker aggregate D and barred by §5.10** |
| 30 | `CISA BOD 22-01 due date September 29 2026 KEV added September 8 remediation federal agencies` | A federal remediation deadline for the 8 Sep additions | **D** — none established. Surfaced instead: **BOD 22-01 revoked, superseded by BOD 26-04 (10 June 2026)** |
| 31 | `Siqueira Atlassian interim engineering manager "I learned" quote ... focus communication documentation` | Verbatim Siqueira lines | **C verbatim** — three lines, listed at §0.7 |
| 32 | `leaddev.com "skipping straight to architect-level thinking" written by author byline career-development` | Author byline | **D** — no byline surfaced across two attempts |

**Totals: 32 searches · 41 claims cleared · 19 claims dropped · 0 paraphrase-only conversions** (every quote this issue prints was seen verbatim; where none existed, the section was re-planned rather than paraphrased into quotation marks).

---

### 0.3 BINDING CORRECTIONS TO THE RUN PLAN

Phase 4 executes these over the run plan's wording. Phase 5 audits against this list.

| # | Run plan said | Correction | Why |
|---|---|---|---|
| **C1** | §5.10: verify against a primary source or drop | **The §0.0 search-derived standard replaces it**, with the same drop-not-soften discipline | No fetch capability at any phase; the standard must be achievable to be enforceable |
| **C2** | §8: Editorial Moment — *"60.4%, the share of reads GitHub served from Azure"*; one source "also renders 64.3%" | **The label is wrong and the two numbers are different metrics.** Correct label: **"reads from migrated services peaked at 60.4%"**. 64.3% is the monolith's own read share in Azure and **is not printed** | Both figures appear in the same report describing different things; printing 60.4% as "reads GitHub served from Azure" would be a factual error |
| **C3** | §8: Editorial Moment fallback **7h47m** | **Dropped.** 7h47m and 7h35m both returned and cannot be separated. The authentication event is named (**17 August, authentication-path overload**) **without a duration** | §0.0 disagreement rule |
| **C4** | §8 / §10 item 3: QT1 states *"roughly 7,000 from R&D, 6,000 from sales and marketing and 3,000 from cloud and services"*, and the leadership framing rests on *"the R&D share now stated in a filing rather than inferred"* | **The split DROPS, and so does the framing built on it.** Replacement framing: **Oracle discloses no new headcount target and no timetable for the remaining actions** — the absence is the story | Uncorroborated across two targeted searches |
| **C5** | §8: QT1 `.compare-table` row *headcount ~162,000 → ~141,000* | **Runs, but 162,000 is a derived figure** — it is implied by the verified −21,000 / −13% pair, not stated. Phase 4 renders the left cell as **"about 162,000"** and the brief records the derivation | Honest labelling of a derived value inside a diagram |
| **C6** | §8: Other News — Copilot credits *"$30 → $19 (Business) and $70 → $39 (Enterprise), seat prices unchanged"* | **These figures are wrong and must not ship in any form.** The change is to *included credit counts*, not dollar allowances. **The item runs as one sentence with no figures** | The rendering conflates credits with dollars; §10 item 8's no-figure branch applies |
| **C7** | §8: Platform Updates — *"per-model thinking-effort controls ... and bring-your-own-key support"* | **Thinking-effort half DROPS. The row runs on bring-your-own-key only** | Unverified against the versioned release notes |
| **C8** | §8: Week at a Glance — Anthropic's *"seven China-based labs"* allegation, attributed as such | **The claim DROPS.** The verified seven is **seven harm areas**. In its place, the report's **Alibaba allegation** (over 5,000 fake accounts, stolen credentials, payment cards and API keys, about 151 million exchanges, model distillation, May–June 2026) may run **once, attributed to Anthropic as an allegation** | Uncorroborated as stated; the replacement clears and is attributable |
| **C9** | §8: Week at a Glance — *"one documented case automated breaches against more than twenty organisations"* | **DROPS.** Not printed in any form | Uncorroborated; the nearest verified claim (~30 AI companies in ~4 days) is single-sourced and also drops |
| **C10** | §7 item 6 / §10 item 14: read the report's framing before printing eight or nine months | **Print the period, not a count: "activity disrupted between December 2025 and August 2026"** | Dissolves the disagreement without asserting a contested number |
| **C11** | §8: Week at a Glance — Smart Reports' *"28-day lookback"*, *"ten free reports per organisation per month"*, *"off by default, needs an Enterprise Owner"*, *"not on Claude Teams"*, *"across chat, Claude Code and Claude Cowork"*, *"teams, groups, departments or cost centres"* | **All six detail claims DROP.** The item runs on what cleared: launched 10 September in beta on Claude Enterprise; it analyses how a team uses Claude — the work done, what it cost, where sessions hit friction, and which repeated patterns are worth packaging as shared skills; output is prose and charts; a report opens only through a sharing link, for named recipients and admins with existing viewing access | Each detail failed both limbs of §0.0 |
| **C12** | §8: mid-issue accent — Broadcom's kit *"was never bundled with a software purchase"*; *"Nutanix Move requires VDDK and Red Hat recommends it for migrations"* | **Both DROP.** Broadcom's actual wording is cleared verbatim and is used instead (§10). The Nutanix / Red Hat detail is also IC-level and barred by §9.4 independently | Attribution fidelity (v3.6): the paraphrase is not what Broadcom said |
| **C13** | §8: Week at a Glance — CISA additions *"spanning SonicWall SMA 1000, Cisco Firewall Management Center, cPanel/WHM and Oracle PeopleSoft"* | **"Cisco Firewall Management Center" DROPS.** The verified product is **Cisco Secure Firewall ASA / Firewall Threat Defense** | Wrong product named |
| **C14** | §8: Week at a Glance — *"The Pulse flagged CPU shortages as a new trend on 10 September"* | **The date DROPS.** Attribute to The Pragmatic Engineer's Pulse without a date. **No price figures** | Date unpinnable; every price figure traces to out-of-window Register reporting |
| **C15** | §8: On the Radar — 3 items, including the CISA remediation-deadline line | **The CISA line DROPS. On the Radar runs 2 items** (~85 words, down from 120). **Nothing is substituted in** | No deadline established; BOD 22-01 superseded (§0.11). Padding a Radar is worse than a short one |
| **C16** | §8: On the Radar — PayPal *"roughly 220 in India"* and *"about 20% of roughly 24,000 staff"* | **The India figure DROPS** (600 reported, ~220 per PayPal, unresolvable) and **the 24,000 base DROPS.** The line carries **251 San Jose**, **164 Ireland (about 12% of the Irish workforce)**, the **30 October separation date**, and the **20% multi-year programme** with no headcount base | §0.0 disagreement rule |
| **C17** | §8: Other News — *"no pricing may be stated or implied — none was published"* for the Agents API | **Superseded by a late find (§0.11).** OpenAI published terms: **no additional fee for the Agents API; usage is billed as tokens and tools.** This may be stated, attributed to OpenAI's announcement | The binding instruction rested on an absence that does not exist |
| **C18** | §9.3: two sidebars — Jargon Watch in the Lead, **Concept of the week floated in QT1**, with a layout caution | **The Concept of the week CONVERTS TO AN INLINE GLOSS inside QT1**, as §9.3's own caution authorises. **The issue runs one floated sidebar. No third sidebar is added and the component does not move to another section** | Arithmetic at §1.4: QT1's featured card leaves ~114px of text beside a 260px float. It crowds |
| **C19** | §9.1: Outside In opener *"stat-first — flagged collision with QT1"* | **Unchanged — and now correct by verification rather than by assumption.** Figma's headline figure pins, so stat-first is earned. **Final opener allocation confirmed at §1.5; no fallback opener is taken anywhere** | §9.1 requires Phase 3 to report the final allocation |
| **C20** | §8: Leadership Read author card — *"LeadDev · August 2026 (author name and date conditional)"* | **Date corrected to "August 2026"** (the ~21 August estimate drops). **No author name could be established across two searches, so `.author-card` converts to the smaller inline attribution** for this section only | The author card's load-bearing claim is a named person; an author card with no name misrepresents it |
| **C21** | §9.2: Outside In counted visual is the `.oi-callout`, with a conditional upgrade | **The `.oi-stats-row` is the counted visual (#6). The `.oi-callout` also runs and is counted as section-native**, per §9.3's own listing of `.oi-callout` among section-native primitives. **Counted total stays at 6** | Stated explicitly so Phase 5 audits the count rather than inferring it |
| **C22** | §8: Lead — CVE identifiers printable *"only if Phase 3 verifies them against the CISA KEV catalog"* | **Cleared by a different route** — both identifiers are named in the primary's coverage and five secondaries. **Printable once, as identifiers.** The KEV catalog itself was not re-queried for them this run | §0.0 limb (b) is satisfied without the KEV route |

---

### 0.4 Conditional 1 worked — the Lead

**Cleared to print, in the exact forms below. Nothing else about the campaign may be printed.**

| Claim | Cleared form | Corroboration |
|---|---|---|
| Victim count | **at least 440 PaperCut NG/MF instances at 395 identified organisations** | Primary snippet + 6 secondaries |
| Geography | **48 countries**; **98 victims in the United States**, the largest single country, then the United Kingdom, France, Spain and Canada | Primary + 4 |
| Sector | **204 of the 395 victim organisations were in education** | Primary + 3 |
| Peak | **at least 11 organisations compromised in 26 seconds** | Primary + 5 |
| Start | **31 August 2026** | Primary + 4 |
| Speed to RCE | **from an empty workspace to remote code execution against a real victim in under four hours** | SecurityWeek, Help Net Security, The Register |
| Speed to domain admin | **domain administrator two hours after that**; where domain admin was reached, the fastest was **5 minutes** and the longest **144 minutes** | Same three |
| Operator | **a likely Russian-speaking operator**, inferred from a hardcoded 28-country exclusion list led by Russia, Belarus and the CIS states | Primary + 3 |
| Tooling | **hundreds of autonomous agents running on an OpenAI Codex harness with a DeepSeek model**, plus publicly available offensive security tooling | Primary + 4 |
| **The exclusion list** | **the operator hardcoded a 28-country exclusion list; the campaign produced victims inside it, including Russia, China, Kazakhstan and Pakistan. GreyNoise records that the technical cause of the deviation is unknown** | Primary + The Hacker News + The Register + Help Net Security |
| CVEs | **CVE-2026-81578 and CVE-2026-82078** | Primary + 5 |
| Outcomes | **credentials harvested from 280 victims; operating-system or domain secrets from 147; administrator privileges obtained at 12 organisations** | Primary + 2 — **see §0.11 late find 1** |

**Binding on Phase 4, in addition to run-plan §3.3:**

1. **The "unknown cause" clause is not optional.** The exclusion-list failure is the issue's most transferable fact and it must be printed with GreyNoise's own limit attached: the agents produced victims inside the excluded set, and **why** is not established. Writing it as though the cause is known, or implying a mechanism, is a fabrication.
2. **The 12-of-395 figure is printed alongside the 440.** A campaign that reached 440 instances and full administrative control at 12 organisations is a different fact from one that did neither, and printing only the larger number inflates the story. One sentence, no more.
3. **The Codex / DeepSeek pairing is stated exactly as GreyNoise has it — a Codex harness running a DeepSeek model.** Reporting is explicit that **OpenAI's models were not used**. Phase 4 may state this. It may not arrange it next to the Agents API item in any way that reads as implication. **If the sentence cannot be written without insinuation, drop the harness attribution entirely and keep the campaign.**
4. **No remediation, no patch commands, no CVE forensics, no exploit mechanics, no PaperCut configuration** (run plan §3.2). The 27 August zero-day disclosure and 28 August patch are **not printed** — that is the patch story, barred from the issue.

---

### 0.5 Conditional 3 worked — Oracle

**Cleared:** the 11 September 10-Q supplements the 2026 Restructuring Plan by **about $700m**, lifting the expected total to **about $2.8bn** against **about $2.1bn** recorded through 31 August. Full-time headcount stands at **about 141,000**, a fall of **about 21,000 or 13%** across the fiscal year. Capital expenditure for the quarter to 31 August was **$28.5bn**, against **$8.5bn** a year earlier. **Free cash flow was negative $5.4bn** for the quarter.

**Dropped:** the 7,000 / 6,000 / 3,000 function split (C4). Also barred, unchanged from §5.10: the 30,000 / 18% March figure, the 7,000–8,000 Business Today estimate, and any citation of the 12–14 September write-ups.

**Flag for Phase 5, not for print.** Several secondary write-ups characterise part of the reduction as linked to Oracle's AI deployment. **That characterisation is the outlets', is not Oracle's own verified wording, and is not printed.** It does not change the §5.1 ruling that Oracle is non-AI-primary; if Phase 5 reclassifies anyway, the count moves to 4 of 6 and still passes.

---

### 0.6 Conditional 4 worked — the Editorial Moment

The run plan assumed 60.4% and 64.3% were competing renderings of one number. **They are not.** GitHub's August report states both, describing two different things:

- **reads from migrated services peaked at 60.4%** — the migration-progress figure, and the one the digest prints;
- **reads from GitHub's own monolith peaked at 64.3% in Azure** — a different denominator, **not printed**;
- Git reads reached 54% — **not printed**.

**"Number of the week" runs on 60.4%, with the corrected label.** The supporting sentence uses the five degradations, which clear as a set: an Actions capacity cascade on **6 August**, an **authentication-path overload on 17 August**, a Copilot Cloud Agent regional database outage on **20 August**, an Actions database saturation event on **26 August**, and an upstream model-provider degradation on **27 August**. **No duration is printed for any of them** (C3).

**The section stays non-AI in every branch** — this is what holds the §5.1 count at 3 of 6 independently of the Oracle and Leadership Read rulings. Frame it as **the publication**, not the outages: GitHub put its migration progress and its failure record in the same document. **The "a year's error budget" framing is a third party's and is not attributed to GitHub** (run plan §7 item 8).

---

### 0.7 Conditional 5 worked — *In Practice* substance floor

**All three floor elements confirmed; date pinned to 22 March 2024.**

| Floor element | Confirmed |
|---|---|
| **(1) The specific named claim** | Six months in an interim engineering-manager role at Atlassian left Siqueira with four named things — **focus, communication, documentation and stakeholder feedback** — after which he returned to an individual-contributor role |
| **(2) At least one concrete example, mechanism or distinction** | **Two clear the bar.** The documentation mechanism: at a highly distributed company, documenting decisions is what stops meetings being repeated. The focus mechanism: work never stops arriving and time does not expand, so what gets attention has to be chosen deliberately against customer value rather than absorbed as it lands |
| **(3) The takeaway without clicking (strip-link test)** | What an interim manager's contribution actually is, and what changes in how a director reads a manager holding the role without the accumulated context — the four things are the ones that survive when the context does not |

**Three verbatim lines cleared** (search 31). Any of these may be printed inside quotation marks:

1. *"I'd been an overcommunicator before this experience, but being a manager reinforced the importance of keeping everyone in the loop, early and often."*
2. *"Especially at a highly distributed company, documenting decisions is crucial to avoid repeated or unnecessary meetings."*
3. *"Being concise and to the point with project progress is so important."*

**Consequences:** the **quote-first opener runs as planned** (no fallback to narrative-first, so no new opener collision — §1.5), and the **pulled quote runs**. Use **line 2 in the opener** (it is the sharpest and the most transferable) and **line 1 as the pulled quote**; line 3 is recorded as verified-but-unallocated. **Season closes at three issues. Branch A is not taken.**

**Honest framing, unchanged from run plan §5.3:** this is on-theme by adjacency, not squarely on-theme, and it is the second consecutive evergreen in the season. The *"a classic worth revisiting"* sub-label carries that.

---

### 0.8 Conditional 6 worked — the Leadership Read

**All three floor elements confirmed. Four concrete mechanisms cleared, against a floor of two.**

| Floor element | Confirmed |
|---|---|
| **(1) The named argument** | Junior engineers are being pushed into architect-level thinking faster than they are building the judgement to support it, because AI tooling lets them produce working code before they have built a model of the system it runs in. The piece frames this as a **levelling, coaching and apprenticeship problem**, not a tooling one |
| **(2) Concrete mechanisms — four** | (a) **Track growth, learning, understanding and judgement as primary metrics alongside output**, not as soft extras. (b) **A three-phase model for AI proficiency — tutor, copilot, accelerator — with scaffolding that loosens as judgement develops.** (c) **Treat senior engineers as apprenticeship infrastructure**: expect them to mentor, review and teach, and ask them to help refine the team's AI norms and guardrails. (d) **Judgement shows in crises** — production incidents are where the piece says growth is actually visible |
| **(3) The takeaway without clicking** | What a manager writes into the ladder once output has moved up a level and judgement has not, and where the senior bandwidth to close the gap is supposed to come from |

**Verbatim line cleared, with a hard limit on extent.** Two independent renderings agree on this clause:

> **"generating code faster than we're building the learning, understanding, and judgment junior software engineers need to grow in their career"**

**Binding:** the centred `.pull-quote` runs on that clause and **stops there**. One rendering continues *"...and truly own the systems they work on"*; **that tail appeared in only one rendering and must not be printed.** Quote the US spelling **"judgment"** as written inside the quotation marks; the digest's own prose uses *judgement* (attribution fidelity, v3.6).

**Two corrections (C20).** The date is **August 2026** — the ~21 August estimate could not be pinned and drops. **No author byline could be established across two searches**, so the mandated `.author-card` **converts to the smaller inline attribution** (`LeadDev · August 2026`) for this section. This is a documented deviation from the v3.8 author-card requirement, taken because an author card with no named person defeats the component's only purpose. Phase 5 should read it as a ruling, not an omission.

**Also binding:** the piece's own title is *"Junior engineers are skipping straight to architect-level thinking"* — one secondary renders it as *"leapfrogging"*. **Use the title as it appears in the URL and the primary listing.**

**The non-AI-primary ruling stands.** The subject is levelling, coaching and apprenticeship design; AI is the causal backdrop. Branch D is not triggered.

---

### 0.9 Conditional 7 worked — Outside In

**Both planned figures pinned, and a third cleared. The `.oi-stats-row` upgrade is authorised.**

| Figure | Cleared form | Source |
|---|---|---|
| Resolution | **71% reduction in alert time-to-resolution** | **Figma's own post — the headline figure.** Use this, not InfoQ's ~70% |
| Pages | **20% reduction in on-call pages**, achieved partly by correctly lowering the severity of some alerts | Figma's post + InfoQ |
| Endpoint | **25% fewer endpoint software approval requests** | Figma's post + InfoQ |
| Authors | **Matthew Sullivan and Brad Girardeau**, Figma security engineering | Primary snippet |
| Dates | Figma published **29 July 2026**; InfoQ wrote it up in **September 2026** | Primary + InfoQ |

**Binding: one source, one figure.** Everything in this section is **Figma's own reporting**, and the section says so. **InfoQ's ~70% rendering is not printed** and the 71% does **not** carry the qualifier "on complex alerts" — Figma states both an overall 71% and a separate ~70% on complex alerts, and merging them would be a fabrication. **Print the overall 71%, unqualified.**

**The `.author-card` runs** with two named authors (initials **MS** — use the first author's initials, with both names in the name line).

**Also cleared and usable in prose, not as stats:** the agent receives the full Slack thread history as context, plus its own steering memory and a toolset scoped to what a security on-call engineer needs during triage; human review and strict controls are retained; the on-call engineer's job shifted from investigating from scratch to reviewing what the agent found, confirming or correcting it, and handling the cases that need human judgement.

**Dropped:** the run plan's *"three kinds of memory — past alerts, behavioural guidance and learned database structures"*. Only two memory constructs cleared (an alert memory and a steering memory), so **the "three memory types" stat does not run** and is replaced in the stats row by the 25% endpoint figure. **The vendor stack behind it — the data lake, the retrieval layer, the identity and endpoint tools — is IC-level detail and is barred** (§9.4).

**Binding framing, unchanged and load-bearing:** this is an **on-call design story**, not a security story. The subject is page volume, severity judgement and what stays with a human. Figma's security team is the setting. **The section must not read as a companion to the Lead.**

---

### 0.10 Conditional 8 worked — Copilot credits

The run plan's figures are **wrong**, not merely unpinned. What happened on 1 September 2026: a promotional period that ran from 1 June ended, and **included AI credits per seat** fell — Business from 3,000 to 1,900, Enterprise from 7,000 to 3,900. **Seat prices did not change**: Business remains $19 per user per month, Enterprise $39. The run plan's *"$30 → $19"* and *"$70 → $39"* conflate credit counts with dollar figures and **must not ship in any form**.

The corrected figures are carried by several secondaries but **not by GitHub's own page** in anything surfaced. **§10 item 8's no-figure branch therefore applies: the item runs as one sentence with no figures.**

**The in-window peg is evidenced and the item does not drop.** The promotion ended on 1 September, so **the first full post-promotion billing period is the one now running** — the change lands as an unexplained invoice variance rather than as a price rise anyone approved. Both dates stated (changelog 28 August, effective 1 September). Overage is on by default for organisations and enterprises unless spend policies are adjusted — **cleared, and it is the part that matters**, so it may run in the same sentence.

---

### 0.11 LATE FINDS (whole-source rule, v1.37)

Material in-window items surfaced while verifying, **not in `candidates.json`**, routed to the main loop for a Phase 2 slot decision. Phase 4 does not place any of these on its own initiative.

| # | Late find | Where it surfaced | Routing |
|---|---|---|---|
| **1** | **GreyNoise's containment figures:** credentials harvested from **280** victims, operating-system or domain secrets from **147**, administrator privileges obtained at **12** of the 395 organisations; fastest time to domain admin **5 minutes**, longest **144 minutes** | GreyNoise post (searches 1, 3) | **Folded into the Lead** as a precision correction, not a new slot — printing 440 without the 12 inflates the story (§0.4 binding 2). Recorded here because it is the kind of qualifying fact the Issue 20 Visa failure lost |
| **2** | **OpenAI published commercial terms for the Agents API: no additional fee for the API itself; usage is billed as tokens and tools.** Also: **nine named sandbox partners at launch** (Blaxel AI, Cloudflare Dev, Daytona, DigitalOcean, E2B, Modal, Oracle Cloud, Runloop AI, Vercel) | OpenAI's own announcement (search 18) | **Supersedes run-plan §8's "no pricing may be stated or implied"** (C17). The pricing line is authorised in Other News. **The nine-partner list is a supplier-concentration fact and is NOT placed by Phase 4** — routed to Phase 2 for Issue 26 |
| **3** | **Anthropic's Alibaba allegation:** over 5,000 fake accounts, plus stolen credentials, payment cards and API keys, used for model distillation against Claude models across May–June 2026, with about 151 million exchanges documented | Anthropic threat report coverage (search 21) | **Replaces the dropped "seven China-based labs" claim** (C8). Authorised in the existing Week at a Glance item, **once, attributed to Anthropic as an allegation** |
| **4** | **A follow-on campaign in the same report hit roughly thirty AI companies in about four days** | Same | **Single-sourced → not printed.** Routed to Phase 2 |
| **5** | **GitHub ran a production MySQL primary from Azure for the first time on 11 August 2026**, and moved a 24-table authentication-core cohort off its oldest shared database, removing around a million queries per second from that database's replicas | GitHub August availability report (search 5) | **Material migration progress not in `candidates.json`.** Not printed as a figure — github.blog is at its 2-section cap and the Editorial Moment carries 60.4% only. **Routed to Phase 2 for Issue 26**, where the Azure migration may warrant its own slot |
| **6** | **GitHub changelog, 8 September 2026: enterprise-managed sandbox in Copilot for JetBrains** | github.blog listing (search 19) | **In window, not in `candidates.json`. Barred this issue by the github.blog 2-section cap.** Routed to Phase 2 for Issue 26 |
| **7** | **PayPal's India number is disputed, not merely unconfirmed:** reporting of roughly 600 roles (about 10% of India headcount) against PayPal's own figure of about 220 (about 4%). India has no WARN equivalent, so no filing settles it | PayPal coverage (search 23) | **The India figure drops from the Radar line** (C16). Recorded so a future issue does not re-adopt either number |
| **8** | **PayPal's San Jose separations all take effect on 30 October 2026**, and the cuts skew senior — reporting counts nearly 50 directors and more than 40 senior managers. The Ireland redundancies are proposed between 7 and 21 October | Same | **The 30 October date is folded into the Radar line**, which is what makes it a genuine dated Radar item. **The seniority profile is NOT printed** — it is single-thread reporting and it would turn a one-line item into a story |
| **9** | **CISA's BOD 22-01 has been revoked and superseded by BOD 26-04, "Prioritizing Security Updates Based on Risk", issued 10 June 2026** | KEV deadline search (search 30) | **Out of window, and a genuine gap.** It changes how KEV remediation deadlines work for an audience that gets asked about KEV timelines. **Routed to Phase 2** as a standing candidate — plausibly The Stack or a Quick Take, not a news item |
| **10** | **The PaperCut pair were disclosed as zero-days on 27 August and patched the next day** | GreyNoise coverage (search 3) | **Sharpens the Lead's dating but is not printed** — the patch story stays barred from the issue entirely (run plan §7 item 17) |
| **11** | **A second Figma post, "How Figma stays ahead of vulnerabilities with agents"**, exists alongside the alert-triage piece | Figma blog listing (search 10) | **Not in `candidates.json`. Not used** — Figma takes one section this issue and joins the no-repeat set afterwards. Routed to Phase 2 for awareness |
| **12** | **Oracle's secondary coverage attributes part of the reduction to AI deployment**; Oracle's own verified wording does not | Oracle coverage (searches 4, 8) | **Not printed** (§0.5). Flagged to Phase 5 as the input to any reclassification of QT1 |

---

## 1. COMPONENT MANIFEST

### 1.1 Counted visual budget (v1.30 — target 4–6, real-diagram floor 1–2)

**Counted: 6. Real diagrams: 2. Both real diagrams survived verification and neither substitution branch is taken.**

| # | Section | Visual | Status |
|---|---|---|---|
| 1 | Cover | `.cover-lead-stat` — **26 seconds** | **RUNS.** Pinned; neither authorised fallback (440, 21,000) is taken |
| 2 | **Lead** | **Inline `<svg>` campaign timeline — REAL DIAGRAM #1** | **RUNS.** All four points pinned (§0.4). The `.stats-tile` substitution is **not** taken |
| 3 | **QT1** | **`.compare-table`, 3 rows — REAL DIAGRAM #2** | **RUNS at three rows.** All three survive verification (§1.1a). The `.stats-tile` substitution is **not** taken |
| 4 | QT2 | `.stats-tile` — **3** | **RUNS** |
| 5 | *In Practice* | Pulled quote | **RUNS** — verbatim line cleared (§0.7), so no substitution is needed |
| 6 | Outside In | **`.oi-stats-row`** — 71% · 20% · 25% | **RUNS (upgrade authorised, §0.9).** The `.oi-callout` also runs and is **section-native, uncounted** (C21) |

**Off-budget, by the run plan's own counting conventions (§9.2, §9.3):** the Leadership Read's mandated centred `.pull-quote`; the Jargon Watch sidebar; the QT1 concept gloss (now inline — C18); the Editorial Moment's stats tile; the Platform Updates `.glance-table`; the `.radar-timeline`; the `.oi-callout`.

**`.pq-bar` is NOT used this issue** (run plan §3.3). Any GreyNoise line that Phase 4 wishes to quote runs as an in-body quote in prose. **The full-width navy band does not appear.**

**Per-section visual floor — every major section carries one:** Lead (SVG), QT1 (compare-table), QT2 (stats tile), *In Practice* (pulled quote), Outside In (stats row + callout), Leadership Read (centred pull-quote). **No major section is pure prose end-to-end. PASS.**

#### 1.1a REAL DIAGRAM #2 — the exact three rows

`.compare-table`, headed **"What the 11 September filing moved"**, columns **Before** / **In this filing**. Cap is 5 rows; this uses 3.

| Row | Before | In this filing |
|---|---|---|
| 2026 Restructuring Plan | about **$2.1bn** recorded through 31 August | about **$2.8bn** expected total |
| Quarterly capital expenditure | **$8.5bn** a year earlier | **$28.5bn** |
| Full-time headcount | about **162,000** | about **141,000** |

**Binding:** the 162,000 is **derived** from the filing's verified −21,000 / −13% pair, not stated in it. Render it as **"about 162,000"** and do not present it as a filing figure anywhere in the body (C5). The **−$5.4bn free cash flow** runs in QT1's prose, not in the table — it has no verified year-earlier comparator and a one-sided row would break the before/after grammar.

#### 1.1b REAL DIAGRAM #1 — the exact four points

Inline `<svg>`, digest palette, **actual `<svg>` elements — no CSS box approximation.** Four nodes on one horizontal axis:

1. **31 Aug** — exploit development and testing begins in a private lab
2. **Under 4 hours** — remote code execution against a live victim
3. **+2 hours** — domain administrator
4. **26 seconds** — 11 organisations compromised at the campaign's peak

Node 4 is the visual punch and should be rendered distinctly (the peak, not a fifth step in a sequence). **No CVE identifiers, no exploit mechanics and no product configuration appear in the diagram.**

### 1.2 Rotating components (standard weekly cap 3–5)

**Three — at the floor, deliberately.**

1. **Inline SVG chart** (Lead)
2. **`.compare-table`** (QT1)
3. **`.mid-accent-highlight`** (Broadcom)

**No Feature** (not eligible until Issue 26 — `last_feature_date` 2026-09-04, minimum one-issue gap). **No Stack** (considered and declined at run plan §6.20 with a named standing topic). **No Rabbit Hole** (see §1.3). **No `.sidebar-box.compliance`** — no regulator item exists anywhere in the issue (run plan §5.7), and the spec is explicit that using it every week turns it into wallpaper.

Off-cap baseline components: `.in-practice`, `.jargon-watch`, `.author-card`, `.oi-callout`, `.stats-tile`, `.oi-stats-row`, `.glance-table`, `.radar-timeline`, `.pull-quote`.

### 1.3 Cadence gates, checked against `engineering-digest-state.json`

| Section | State value | Ruling |
|---|---|---|
| **Feature Article** | `last_feature_date`: **2026-09-04** | **NOT ELIGIBLE.** Ran at Issue 24; minimum one-issue gap; eligible again at Issue 26. **Not run.** Recorded so Phase 5 reads the absence as cadence |
| **The Stack** | `last_stack_date`: **null** | **Trivially eligible; declined.** Named topic exists (*"the agent harness"*, live in three stories this week). Declined on word-budget arithmetic and because the reader-service need is met proportionately by the Lead's Jargon Watch at a tenth of the cost. **Standing Issue 26 candidate** |
| **Down the Rabbit Hole** | `last_rabbit_hole_date`: **2026-09-04** | **Eligible but not due** — cadence is every 1–2 issues, so the spec's instruction applies: **omit rather than force.** Both candidate tangents fail their own test (GreyNoise's post is the Lead's own source, so it is not a tangent and would put the outlet at two sections; the 1986 Nii paper connects only to a piece not in the issue). **Omitted on a worked ruling, not on cadence.** `last_rabbit_hole_date` stays at 2026-09-04 |
| **In Practice** | `current_in_practice_season`: *Making technical decisions when not the SME*, progress **2** | **RUNS as week 3** and the season **CLOSES at three** (§0.7). **No week count in the theme label** — grep check at §11 |
| **Outside In** | `last_outside_in_company`: **Duolingo** | **RUNS, Format A, Figma.** Fresh against `outside_in_history`; sector rotation is the rule that chose it (enterprise / SaaS against Duolingo's consumer tech at scale). The Issue 24 footer promise is kept |
| **Leadership Read** | `last_leadership_read`: **martinfowler.com** | **RUNS, LeadDev.** Not the consecutive outlet. lethain is eligible again and unused — no candidate surfaced and none could be gone looking for without fetch capability |

### 1.4 Sidebar allocation — ONE floated sidebar, and the arithmetic behind the change

**Run-plan §9.3 allocated two floated sidebars and attached a binding layout caution to the second. The caution fires.**

The template's magazine column is **900px** with **60px** section padding, giving roughly **780px** of content width. `.two-col.qt-featured` is a `3fr 2fr` grid with a 36px gap, so QT1's featured card is about **446px**, and after card padding roughly **398px** of usable text width. `.concept-of-week` floats at **260px**. That leaves about **114px** of text running beside the box — a column two or three words wide. It crowds.

**Ruling (C18): the Concept of the week converts to an inline gloss inside QT1's body.** The concept, the placement and the reader it is aimed at are unchanged; only the component changes. **It does not move to another section and no third sidebar is added anywhere** — both explicitly barred by §9.3.

| Sidebar | Section | Status |
|---|---|---|
| **`.jargon-watch` — *agent harness*** | **Lead**, floated right, deep-teal border | **RUNS.** The Lead is full-width, so 260px floats cleanly |
| ~~`.concept-of-week` — *capital expenditure against operating expenditure*~~ | ~~QT1~~ | **CONVERTED TO INLINE GLOSS** (§1.4 arithmetic) |

**Jargon Watch content — *agent harness* (2–4 sentences, `.jw-body`):** the orchestration layer around a model — the thing that manages context, calls tools, keeps a long-running job alive and coordinates helper agents. The model does the reasoning; the harness decides what the model sees, what it is allowed to touch and when it stops. It is the layer the operator in this week's campaign supplied himself, the layer OpenAI began selling as a product on 10 September, and the layer an organisation running internal agents either owns or rents. **Optional `.jw-link` to OpenAI's Agents API announcement** — not to GreyNoise, which would put that outlet at two sections.

**Inline concept gloss — *capital expenditure against operating expenditure* (QT1, one to two sentences in body prose, aimed at the year-one engineering manager from a non-technical route):** engineering salaries are operating expenditure, spent and gone in the period they land; data centres and the machines inside them are capital expenditure, spent once and written down over years. The two come out of different lines and are judged by different tests, which is how a director can be told to hold headcount in the same quarter that capital spending more than triples.

### 1.5 Openers — final allocation (§9.1 requires Phase 3 to report this)

**No fallback opener is taken anywhere.** Both conditional openers cleared their conditions: *In Practice*'s quote-first has three verbatim Siqueira lines (§0.7), and Outside In's stat-first has Figma's own headline figure (§0.9). **The allocation below is identical to run-plan §9.1's primary column, now earned by verification rather than assumed.**

| Section | Position | Opener | Note |
|---|---|---|---|
| Lead — GreyNoise | 7 | **Narrative-first** | The 31 August start and the campaign clock |
| QT1 — Oracle | 8 | **Stat-first** | $28.5bn |
| QT2 — Know Your Agent | 8 | **Summary-first** | — |
| *In Practice* — Siqueira | 11 | **Quote-first** | **Condition met.** Opens on the documentation line (§0.7 line 2) |
| Outside In — Figma | 15 | **Stat-first** | **Condition met.** Flagged collision with QT1, seven sections apart |
| The Leadership Read — LeadDev | 18 | **Summary-first** | Flagged collision with QT2, ten sections apart |

**Two collisions, both pre-declared at run-plan §9.1, both at maximum available separation. Four opener styles across six articles is the arithmetic ceiling.** Phase 4 does not choose an opener inline and may not vary this table.

### 1.6 Palette (run plan §6.24, unchanged)

| Element | Colour | Reason |
|---|---|---|
| **Lead section label** | **`.section-label.alert` — RED** | The permitted case: *Operating at scale* with active in-the-wild exploitation |
| Week at a Glance *Action Required* tier | Red tier styling | The only other red in the issue |
| QT1 header bar | **Orange** | Management & teams |
| QT2 header bar | **Teal** | Wider engineering landscape |
| Outside In section label | **Orange** | Existing convention |
| Concept gloss (now inline) | — | Component converted; no orange border in QT1 |
| **Week at a Glance label · Foreword label · In Practice header label · Editorial Moment label** | **Default teal** | **Structural landmarks, regardless of content concern.** This is the Issue 12 v1.31 failure and Phase 5 checks it |

### 1.7 Quote allocation — one quote, one slot (v3.6)

**Every line below was seen verbatim. Nothing in this issue is printed inside quotation marks that was not.**

| Line | Verbatim? | Slot | Binding |
|---|---|---|---|
| **Broadcom:** *"To ensure the highest standard of security, reliability, and product features, the Virtual Disk Development Kit (VDDK) is no longer available for use or download."* | **YES** | **Mid-issue accent, once** | The accent is ~70 words; use this or the TAP clause below, **not both** |
| **Broadcom:** *"The approved use case for VDDK per the SDK license has always been for backup and recovery solutions from our TAP [Technology Alliance Program] partners, and this change merely re-enforces those terms."* | **YES** | **Mid-issue accent, alternative** | Preferred if only one runs — it is the sentence that does the defending. **Replaces the run plan's "never bundled" paraphrase, which is not Broadcom's wording** (C12) |
| **Siqueira:** *"Especially at a highly distributed company, documenting decisions is crucial to avoid repeated or unnecessary meetings."* | **YES** | ***In Practice* opener** | Quote-first opener |
| **Siqueira:** *"I'd been an overcommunicator before this experience, but being a manager reinforced the importance of keeping everyone in the loop, early and often."* | **YES** | ***In Practice* pulled quote** | The section's counted visual |
| **Siqueira:** *"Being concise and to the point with project progress is so important."* | **YES** | **UNALLOCATED** | Verified and deliberately unused — recorded so Phase 5 does not read its absence as a miss |
| **LeadDev:** *"generating code faster than we're building the learning, understanding, and judgment junior software engineers need to grow in their career"* | **YES** | **Leadership Read, centred `.pull-quote`** | **Stops at "career". The "and truly own the systems they work on" tail is single-rendering and must not be printed** (§0.8) |
| **Figma:** the on-call engineer's job shifted from investigating from scratch to reviewing what the agent found, confirming or correcting it, and handling the cases that need human judgement | **Partial fragments only** | **Outside In — AS PARAPHRASE, NOT IN QUOTATION MARKS** | The full sentence was not seen verbatim. Phase 4 renders it as reported description |
| **GreyNoise** | **No line verified** | — | **No GreyNoise quotation marks anywhere in the issue.** The campaign is reported, not quoted. No `.pq-bar` (§1.1) |
| **Anthropic** | — | — | **Paraphrased throughout, never quoted** (run plan §9.4). The Alibaba claim is attributed as Anthropic's allegation |
| **The Pragmatic Engineer** | — | — | **Not quoted at all**, either item |
| **Ludicity** | — | — | **Not quoted.** The piece is profane in places; Recommended Reading carries a characterisation only |

### 1.8 Jargon scan (v3.7 — four-category trigger test, run across every planned section)

**Category 1 — proper nouns and named things · Category 2 — acronyms and abbreviations, including lowercase · Category 3 — hyphenated neologisms used as named concepts · Category 4 — the numerical-frequency rule: any term used 3+ times in one section must be glossed regardless of capitalisation.**

| Section | Term | Category | Treatment |
|---|---|---|---|
| **Lead** | **agent harness** | 3 + **4 (recurs across three sections)** | **`.jargon-watch` sidebar** — discharges *harness* for the whole issue |
| Lead | agent swarm | 3 | Inline, one clause on first use |
| Lead | remote code execution | 2 | Inline, one clause — *running an attacker's own commands on the machine* |
| Lead | domain administrator | 1 | Inline, one clause — *the account that controls every machine on the network* |
| Lead | exclusion list | 3 + **4 (core idea)** | Inline, one clause on first use; it is the article's central named thing |
| Lead | PaperCut NG/MF | 1 | Inline, one clause — *widely deployed print-management software* |
| Lead | CVE | 2 | Inline, one clause at the single point of use |
| **QT1** | **capital expenditure against operating expenditure** | 3 + **4 (article's core idea)** | **Inline concept gloss** (C18, §1.4) |
| QT1 | 10-Q | 2 | Inline, one clause — *the quarterly filing a US-listed company makes to the SEC* |
| QT1 | restructuring plan | 3 + **4 (5+ uses)** | Inline, one clause — *the accounting envelope a company books severance and exit costs against* |
| QT1 | free cash flow | 3 | Inline, one clause |
| **QT2** | Know Your Agent | 1 + 3 + **4 (core idea)** | Inline, one clause on first use — *checking what an agent is and who stands behind it, before letting it transact* |
| QT2 | agentic commerce | 3 | Inline, one clause |
| QT2 | Trusted Agent Protocol · Verifiable Intent · Agentic Mobile Protocol | 1 | **One clause each on first use**, naming whose each is |
| **Mid-issue accent** | VDDK | 2 + 1 | Inline, one clause — *the kit third-party tools use to read virtual machine disks* |
| Accent | agentless backup | 3 | Inline, one clause |
| Accent | SDK | 2 | Inline, one clause |
| ***In Practice*** | interim engineering manager | 3 + **4 (core idea)** | Inline, one clause |
| *In Practice* | individual contributor | 3 | Inline, one clause |
| **Other News** | included AI credits · overage | 3 | Inline, one clause each — **without figures** (C6) |
| Other News | Agents API | 1 | Inline, one clause |
| Other News | Model Context Protocol | 1 + 2 | **Only if used.** One clause, or omit the reference |
| **Platform Updates** | bring-your-own-key | 3 + 2 | Inline, one clause — *pointing the tool at a model contract the organisation already holds* |
| Platform Updates | data residency | 3 | Inline, one clause |
| **Outside In** | alert triage | 3 + **4 (5+ uses)** | Inline, one clause on first use |
| Outside In | on-call page | 3 + **4 (4+ uses)** | Inline, one clause — *the alert that wakes whoever is holding the rota* |
| Outside In | severity | 4 | Inline, one clause |
| Outside In | steering memory | 3 | Inline, one clause |
| **Leadership Read** | levelling · calibration · ladder | 3 | **Inline, one clause each** — the concept sidebar is spent (C18 keeps it inline in QT1 in any case) |
| Leadership Read | apprenticeship model | 3 | Inline, one clause |
| **Week at a Glance** | Known Exploited Vulnerabilities catalog | 1 + 2 | Inline, one clause |
| Week at a Glance | elevation of privilege | 3 | Inline, one clause |
| Week at a Glance | session token | 3 | Inline, one clause |
| Week at a Glance | model distillation | 3 | Inline, one clause — *training a cheaper model on a more capable one's outputs* |

**The v3.7 numerical-frequency trigger and the word "agent".** *Agent* appears in the Lead, QT2, Other News, Platform Updates, Outside In and the Leadership Read — far past the 3+ threshold, and in **four materially different senses**. It is **not** glossed once as a single term. It is handled by the four spectrum glosses at §1.9, each on first use in its own section, which is the run plan's §9.4 requirement and is the higher bar.

### 1.9 Agent-terminology precision (v3.0 / v2.6) — the four senses, allocated

**Run-plan §9.4 requires Phase 3 to allocate these explicitly. This is the highest-density agent-terminology issue in the run.**

| Sense | Section | Named on first use as | Must not be blurred with |
|---|---|---|---|
| **1 — Attacker-operated autonomous agents with action authority against live estates** | **Lead** | *autonomous agents run by an attacker against systems he does not own, with authority to act rather than recommend* | Every other sense. This is the far end of the spectrum |
| **2 — Consumer-facing commerce agents transacting on someone's behalf** | **QT2** | *agents that buy on a person's behalf, which is why a network wants to know what stands behind one before it clears a transaction* | Sense 1 — the Lead is two sections earlier and the reader will carry the word across |
| **3 — Developer-triggered agents inside an orchestration layer an organisation administers** | **Other News** (Agents API; Copilot managed permissions) | *agents a developer starts, running inside a layer the organisation configures and can constrain centrally* | Sense 1 — **this is where the OpenAI insinuation risk lives** (§0.4 binding 3) |
| **4a — A scoped internal agent with human review retained** | **Outside In** | *a scoped internal agent whose findings a human confirms or corrects before anything closes* | Sense 1 — the Outside In section must not read as a second security story |
| **4b — Code-generating assistance inside developer workflows** | **Leadership Read** | *code-generating assistance inside a developer's own workflow* | Senses 1 and 3 |

### 1.10 Source-cap ledger (v2.0 — max 2 sections per publication), final after all rulings

| Outlet | Sections | Status |
|---|---|---|
| **github.blog** | Editorial Moment (availability report) · Other News (Copilot managed permissions **+** Copilot credits — two items, **one** section) | **AT CAP, 2 of 2.** **No GitHub item in Week at a Glance, Platform Updates, On the Radar or Recommended Reading.** The Copilot weekly-release item and the 8 September JetBrains sandbox item (late find 6) are both excluded by this cap |
| **The Pragmatic Engineer** | Week at a Glance (CPU trend) · Other News (code review) | **AT CAP, 2 of 2** — both conditionals cleared, so the cap binds. **No Pragmatic Engineer link in Recommended Reading** |
| **InfoQ** | Outside In (write-up alongside Figma's own post) · Recommended Reading (DoorDash Flux) | **AT CAP, 2 of 2.** No InfoQ in Other News, Week at a Glance or Platform Updates |
| **Anthropic** | Week at a Glance (threat report **+** Smart Reports — two items, **one** section) | **1 of 2**, held deliberately. The late finds at §0.11 items 3–4 sit inside the existing item and do not open a second section |
| GreyNoise | Lead | 1 — and the Rabbit Hole that would have been its second is omitted (§1.3) |
| SEC / Oracle 10-Q | QT1 | 1 |
| Business Wire / Ant International (joint release) | QT2 | 1 |
| The Register | Mid-issue accent | 1 |
| Atlassian | *In Practice* | 1 |
| Figma | Outside In (primary) | 1 |
| OpenAI | Other News | 1 |
| Microsoft Learn | Platform Updates | 1 |
| LeadDev | The Leadership Read | 1 |
| Payments Dive · AWS | On the Radar | 1 each |
| CISA / The Hacker News · MDPI · Business Standard | Week at a Glance | 1 each |
| martinfowler.com · AI Magazine · Ludicity | Recommended Reading | 1 each |

### 1.11 Adjacent-source ledger (v1.32), final, in reading order

| # | Section | Outlet |
|---|---|---|
| 1 | Editorial Moment | **github.blog** |
| 2 | Week at a Glance | CISA / The Hacker News · Anthropic ×2 · Business Standard · The Pragmatic Engineer · MDPI |
| 3 | Lead | GreyNoise Labs |
| 4 | QT1 | Oracle Form 10-Q (SEC) |
| 5 | QT2 | Business Wire / Ant International |
| 6 | Mid-issue accent | The Register |
| 7 | *In Practice* | Atlassian |
| 8 | Other News | OpenAI · **github.blog ×2** · The Pragmatic Engineer |
| 9 | Platform Updates | Microsoft Learn |
| 10 | Outside In | Figma (primary) with InfoQ as the write-up |
| 11 | On the Radar | Payments Dive · AWS |
| 12 | The Leadership Read | LeadDev |
| 13 | Recommended Reading | InfoQ · martinfowler.com · AI Magazine · Ludicity |

**No two consecutive sections share an outlet. PASS**, held in place by one binding constraint: **because the Editorial Moment is a github.blog item and Week at a Glance follows it immediately, no GitHub item may appear in Week at a Glance.** This is why the Copilot managed-permissions story sits in Other News rather than in *Action Required*, where it naturally belongs. **Phase 4 may not "improve" this placement.** The two github.blog sections are six apart; the two Pragmatic Engineer placements are six apart.

---

## 2. COVER

**Variant:** `.cover-lead-stat`.

- **Stat:** **26 seconds**
- **Context line:** *the time in which eleven organisations were compromised at the peak of a single operator's agent-run campaign*
- **Status: PINNED.** Neither authorised fallback (440, 21,000) is taken.

**Also on the cover:** identity strap with the teal `.cis-vol` pill badge · italic teal `.cover-tagline` · bordered orange `.week-badge` · 40px dot-grid motif at ~7% opacity · date **Friday 11 September 2026** · issue badge **Issue 25** · `.cover-read-time` calculated from the **final** word count at 200 wpm (≈16 min at the §20 projection — Phase 4 recalculates from what it actually writes) · `.cover-contents` grid · `.archive-bar` showing the last five issues with Issue 25 in `.archive-pill.current` teal.

**No `.editor-note`** — Issue 12 only.

---

## 3. FOREWORD

**50–80 words · drop cap · one editorial point.**

**The point, stated once:** organisations are buying capacity instead of hiring it, and then finding that bought capacity needs the same scope, identity and accountability that hired capacity always had. Oracle funds the substitution out of its own lines. A single operator demonstrates what the substitution buys an attacker — and then finds his agents ignoring the rules he wrote for them. Three card networks begin building the identity layer agents will need before anyone lets them transact.

**Binding:**
- **Must not** frame the week relative to AI's noisiness or quietness in either direction (v2.9).
- **Must not** list stories, restate the cover, or use *"meanwhile"*, *"elsewhere"* or *"also this week"*.
- **Must not** be written as an epistemic reframe. The throughline may be echoed **at most once more** in the issue, and **never** as *"the question is not X — it's Y"* (§18).
- **Third-person editorial voice.** No *"your team"*, no rhetorical questions.

---

## 4. EDITORIAL MOMENT — "Number of the week"

**~70 words · `.editorial-moment` with `.em-number` · stats-tile component · label default teal (structural landmark).**

- **The number: 60.4%**
- **The label, corrected and binding (C2): *the share of reads GitHub's migrated services served at their August peak*.** **Not** *"the share of reads GitHub served from Azure"* — that is a different figure (64.3%, the monolith's own read share in Azure) and it is **not printed**.
- **Why it matters, one sentence:** the same document records **five degradations** across August, including an **authentication-path overload on 17 August**, so GitHub published the migration's progress and the failures running alongside it in one place — which is the part most organisations separate.

**Binding:**
- **No duration for any incident** (C3).
- **Frame it as the publication, not the outages** (run plan §7 item 8).
- **The "a year's error budget" framing is a third party's and is not attributed to GitHub.**
- **Non-AI in every branch** — the §5.1 count depends on it.
- **This is github.blog's first of two sections. No GitHub item may appear in Week at a Glance** (§1.11).

**Source:** https://github.blog/news-insights/company-news/github-availability-report-august-2026/

---

## 5. THE WEEK AT A GLANCE

**6 items across three tiers · source link on every item · ~300 words total · section label default teal.**
**No GitHub item. No InfoQ item.** (§1.10, §1.11)

### Action Required (`.tier-action`, red)

**1. CISA added two actively exploited Windows elevation-of-privilege flaws on 8 September.** One line.
- **Cleared:** **CVE-2026-81963** (Windows Update Stack) and **CVE-2026-85880** (Windows ALPC), both **CVSS 7.8**, added **8 September 2026**, alongside additions covering **SonicWall SMA1000 appliances**, **Cisco Secure Firewall ASA / Firewall Threat Defense**, **Oracle PeopleSoft Enterprise PeopleTools** and a **cPanel LiteSpeed plugin**.
- **Corrected (C13): "Cisco Firewall Management Center" is the wrong product and must not be printed.**
- **Framing:** exposure and ownership — which of these sit inside the estate and who is already accountable for them this week.
- **Binding: no remediation steps, no patch commands, no CVE forensics.** **This must not overlap the Lead** — the Lead's CVEs are the PaperCut pair and are not repeated here.
- **Identifiers are printable** (cleared above). If Phase 4 prefers a tighter line, the identifiers may be dropped and the line kept; the vendor list alone carries the ownership point.
- Source: https://thehackernews.com/2026/09/cisa-adds-seven-exploited-flaws-as.html

### Worth Knowing (`.tier-know`, deep teal)

**2. Anthropic's September threat intelligence report.** Two to three sentences.
- **Cleared:** the report covers **activity disrupted between December 2025 and August 2026** across **seven harm areas** (C10). **Stolen API keys and session tokens have become an asset criminals steal and resell** — valuable three ways over: resale, compute that runs at the victim's expense, and cover, because the activity is attributed to the credential's legitimate owner. **Threat actors from at least ten countries** were involved.
- **Authorised, once, as Anthropic's allegation (C8, late find 3):** Anthropic alleges **Alibaba** ran **over 5,000 fake accounts**, together with stolen credentials, payment cards and API keys, to **distil** Claude models across **May–June 2026**, documenting **about 151 million exchanges**.
- **DROPPED and not printed (C8, C9): the "seven China-based labs" claim; the "more than twenty organisations" figure; any eight-or-nine-month coverage count.**
- **Binding: paraphrase throughout, never quoted.** The same-day reporting that Anthropic conceded an earlier July explanation was wrong may run as **one clause** — a vendor correcting itself is the credible part, not a gotcha.
- **Framing for this audience:** key rotation and token lifetime move into the supplier conversation.
- Source: https://www.anthropic.com/threat-intelligence-report-september-2026

**3. Anthropic's Smart Reports beta.** Two sentences.
- **Cleared only:** launched **10 September** in beta on **Claude Enterprise**. It analyses how a team uses Claude — **what work got done, what it cost, where sessions ran into friction, and which repeated patterns are worth packaging as shared skills** — and returns **prose and charts**. A report **opens only through a sharing link**, for named recipients and for admins who already have viewing access.
- **DROPPED and not printed (C11): the 28-day lookback; the chat / Claude Code / Claude Cowork split; the teams-groups-departments-cost-centres scoping; "off by default, needs an Enterprise Owner"; "not on Claude Teams"; the ten-free-reports cap.**
- **Framed as the people question before the budgeting one:** a reporting surface that reads what engineers actually typed, and whose output can reach performance conversations.
- *(Both Anthropic items sit in this one section, keeping the outlet at 1 of 2.)*

### Watching (`.tier-watch`, grey)

**4. More than 6,000 tech roles in the first ten days of September.** One line.
- **Cleared as a round-up's count only**, across Uber, PayPal, Apple, Zomato and Oracle. **Attribute it to the round-up in the sentence that carries it.**
- **Binding: not charted, not a sector aggregate, not the Editorial Moment number. No cumulative total and no AI-attribution percentage** — the trackers contradict each other (§5.10). **The 6,300 rendering and the 128,536 tracker figure are both barred** (C-list, search 29).
- Source: https://www.business-standard.com/industry/news/global-tech-layoffs-2026-oracle-amazon-dell-uber-paypal-it-sector-job-cuts-126091100188_1.html

**5. CPU and memory supply.** One line. **CONDITIONAL CLEARED — RUNS.**
- **Cleared, trend only:** The Pragmatic Engineer's **Pulse** has flagged **CPU supply as a new trend**, after the GPU and memory shortages before it, attributing the new pressure to **agents consuming far more CPU through tool use**. Its stated position is to secure compute now, while it is possible, even at a premium.
- **Binding (C14): no date is stated** — the 10 September date could not be pinned. **No price figures anywhere** — every one traces to out-of-window reporting.
- Source: https://blog.pragmaticengineer.com/

**6. Empirical research on inclusion in software development teams.** One line. **CONDITIONAL CLEARED — RUNS with specific substance.**
- **Cleared:** published **11 September 2026**. The study measures inclusion along named dimensions — **belonging to the organisation, team cooperation and cohesion, cognitive sharing with supervisors, being valued by senior management, and involvement in organisational social activities** — and argues that in software teams inclusion is not only general belonging but **whether people are involved in work-related decisions and have access to project information**.
- **Binding: say the specific thing above; do not gesture at "a study on inclusion".** A rare in-window piece of team research that is not a vendor survey.
- Source: https://www.mdpi.com/2674-113X/5/3/40

**Both conditionals cleared, so Week at a Glance runs at 6 items and the "move Visual Studio 2026 up" remedy is NOT taken** (C-list, conditional 11).

---

## 6. SECTION BREATHER

`.section-breather` between Week at a Glance and the Lead. **One of exactly two breathers this issue** (the second is between Quick Takes and the mid-issue accent).

---

## 7. LEAD — the agent swarm

**~400 words · `.lead-article` (drop cap renders automatically) · section label `.section-label.alert` RED · opener NARRATIVE-FIRST · h3 subheadings every one to two paragraphs.**

### Content

Open on the clock: **31 August**, a private lab with a vulnerable copy of the software and a directory server in it, exploits developed and tested there. **Under four hours** from an empty workspace to remote code execution against a live victim. **Two hours after that**, domain administrator. At the campaign's peak, **eleven organisations compromised in twenty-six seconds**. By the time GreyNoise published on **9 September**, the count stood at **at least 440 instances at 395 identified organisations across 48 countries** — **98 of them in the United States**, the largest single country, then the United Kingdom, France, Spain and Canada, and **204 of the 395 in education**.

Then the three things that actually transfer:

1. **The economics of mass exploitation changed shape in public.** One operator now runs what used to need a crew. That is a risk-register and supplier-assurance conversation, and it moves the assumed volume and speed of opportunistic attacks against anything internet-facing for every organisation at once — not only for those running the affected product.
2. **The agents did not honour their operator's own scope rules.** He hardcoded a **28-country exclusion list**; the campaign produced victims inside it, including **Russia, China, Kazakhstan and Pakistan**. **GreyNoise records that the technical cause of that deviation is unknown** — and that uncertainty is the part that lands, because every internal agent rollout is being underwritten on the assumption that scope rules hold.
3. **Detection windows measured in seconds break controls that depend on a human noticing.** Eleven organisations inside twenty-six seconds is a fact about change management, escalation design and what an on-call rota can be expected to catch.

**The proportion sentence (§0.4 binding 2, one sentence):** the campaign reached 440 instances, harvested credentials from **280** victims and operating-system or domain secrets from **147**, and obtained **administrator privileges at 12 organisations** — where it did, the fastest run took **five minutes** and the longest **144**.

**Throughline #1 of a maximum of three, one sentence only:** Issue 24's Feature covered Unit 42's ten-hour agent-run intrusion against a single unnamed victim; a week later the same pattern is running at 440. **Must not become the article's frame.**

### Visual — REAL DIAGRAM #1

Inline `<svg>` campaign timeline. Four points, exactly as specified at §1.1b. Actual `<svg>` elements, digest palette, no CSS approximation. **Substitution branch not taken.**

### Sidebar

**`.jargon-watch` — *agent harness*.** Floated right, 260px, deep-teal border. Content at §1.4.

### Binding constraints

- **Both victim units in the sentence that carries them** — *440 instances at 395 organisations*. Never one alone, never merged.
- **Agent sense 1 named on first use** (§1.9).
- **Harness attribution, exactly:** hundreds of autonomous agents run on an **OpenAI Codex harness with a DeepSeek model**. Reporting is explicit that **OpenAI's models were not used**. OpenAI's Agents API appears in Other News, eight sections later. **No sentence, juxtaposition or arrangement may suggest the Agents API was involved in this campaign or that OpenAI is implicated. If the sentence cannot be written without insinuation, drop the harness attribution and keep the campaign.**
- **CVE-2026-81578 and CVE-2026-82078 may appear once, as identifiers, and nowhere else in the issue.**
- **No remediation, no patch commands, no CVE forensics, no exploit mechanics, no product configuration.** The 27 August disclosure and 28 August patch are **not printed**.
- **No `.pq-bar`.** No GreyNoise line is verified; **no quotation marks around anything attributed to GreyNoise anywhere in the issue.**
- **No inflammatory framing.** *Campaign*, *intrusion*, *compromise*, *exploitation* are accurate and fine. Nothing beyond that.
- **Third-person editorial voice throughout.**

### Sources

- https://www.greynoise.io/blog/ai-orchestrated-campaign-against-papercut-ng-mf (primary — cite this)
- https://thehackernews.com/2026/09/papercut-attacker-uses-hundreds-of-ai.html
- https://www.helpnetsecurity.com/2026/09/11/ai-agents-papercut-ng-mf-attack-campaign/
- https://www.securityweek.com/papercut-flaws-exploited-in-ai-powered-attacks/
- https://www.theregister.com/security/2026/09/10/hundreds-of-ai-agents-helped-papercut-attacker-hit-395-orgs-and-some-went-off-script/5295650
- https://www.darkreading.com/cyberattacks-data-breaches/papercut-ai-swarm-attack-cyber-kill-chain

---

## 8. QUICK TAKES — layout QT-B (featured + compact)

`.two-col.qt-featured`. QT1 in the wider column with full treatment; QT2 in the compact card — anchor stat, two to three sentences, takeaway line, no subheadings. **Each ends with a bold "The takeaway" line stating what has changed, not an instruction.**

### 8.1 QT1 — Oracle's 10-Q

**~260 words · `.qt-header` ORANGE (Management & teams) · opener STAT-FIRST.**

- **Anchor stat:** **$28.5bn**
- **Context label:** *quarterly capital expenditure, against $8.5bn a year earlier*

**Content.** The **11 September** filing supplements the **2026 Restructuring Plan by about $700m**, lifting the expected total to **about $2.8bn** against **about $2.1bn** already recorded through 31 August. Full-time headcount stands at **about 141,000**, a fall of **about 21,000 or 13%** across the year. Capital expenditure for the quarter to 31 August was **$28.5bn**, against **$8.5bn** a year earlier. **Free cash flow was negative $5.4bn.**

**The framing, corrected (C4).** The run plan's R&D-share angle is gone with the dropped split. The replacement is stronger and is verified: **Oracle discloses no new headcount target and no timetable for the remaining actions.** A restructuring plan has been enlarged by $700m without a stated end point, in the same filing that shows capital spending more than tripling year on year. The leadership conversation is the one a director is asked to hold when the capital line grows and the hiring line does not — and when the company funding both will not say how much further the hiring line has to fall.

**Visual — REAL DIAGRAM #2.** `.compare-table`, three rows, exactly as specified at §1.1a. **All three rows survive verification; the `.stats-tile` substitution is not taken.**

**Inline concept gloss (C18):** *capital expenditure against operating expenditure*, one to two sentences in body prose. Content at §1.4.

**Inline glosses, one clause each:** *10-Q*, *restructuring plan*, *free cash flow*.

**Binding:**
- **Cite the filing.** The 12–14 September write-ups are out of window and **may not be cited** (run plan §7 item 1).
- **Do not print:** the 7,000 / 6,000 / 3,000 function split (C4) · the 30,000 / 18% March figure · the 7,000–8,000 September estimate · any AI motive for the reduction (§0.5).
- **Render "about 162,000" as derived, and only inside the compare-table** (C5).
- **Throughline #2 of three, optional, one sentence only:** Issue 22 covered the capex-versus-headcount trade at Oracle; this filing puts figures on it.

**Source:** https://www.sec.gov/Archives/edgar/data/0001341439/000119312526389274/orcl-20260831.htm

### 8.2 QT2 — "Know Your Agent"

**~180 words · `.qt-header` TEAL (Wider engineering landscape) · opener SUMMARY-FIRST · compact card format, no subheadings.**

- **Anchor stat:** **3** (`.stats-tile`)
- **Context label:** *rival agent-identity protocols the three networks have agreed to make portable*

**Content.** **Ant International, Mastercard and Visa said on 9 September** that they will develop a shared **Know Your Agent** interoperability framework, so that an agent verified on one network can be recognised across the others — across card networks, wallet ecosystems, agent platforms and marketplaces. **Each keeps its own protocol and its own approval and risk-management process**: Visa's **Trusted Agent Protocol**, Mastercard's **Verifiable Intent**, Ant International's **Agentic Mobile Protocol**. The companies say the work should reduce integration costs and give participating networks better risk visibility.

**The loyalty surfacing note is the point of the section:** agent identity is the layer every card-linked offer, redemption and cashback flow will eventually have to reason about — and **loyalty processing remains explicitly unsolved**, the same gap Issue 24's On the Radar recorded against the Agentic Payments Alliance.

**Binding:**
- **Hold the line on what was not announced: no timeline, no named merchant pilots, no published spec.** That absence is the honest centre of the item.
- **State 9 September, once, and be consistent** (C-list, conditional 13). **Do not mention 10 September anywhere in the issue.**
- **McKinsey's $3–5tn-by-2030 projection may appear at most once, in the body, attributed to McKinsey.** Corrected attribution (search 27): **attribute it to McKinsey directly, not "as cited by the companies"** — the companies' own citation of it could not be confirmed. **It is optional; omitting it is the cleaner call in a 180-word card.**
- **No chart** — there is no verified data to chart and the projection is not the digest's number.
- **Agent sense 2 named** (§1.9) — consumer-facing commerce agents transacting on someone's behalf, a different end of the spectrum from the Lead's.
- **Inline glosses, one clause each:** *Know Your Agent*, *agentic commerce*, and each of the three protocol names on first use.

**Sources:**
- https://www.businesswire.com/news/home/20260909003891/en/ (primary — the joint release)
- https://www.ant-intl.com/en/news/detail/?id=ant-international-mastercard-and-visa-initiate-collaboration-on-know-your-agent-interoperability-to-scale-agentic-commerce
- https://www.pymnts.com/cybersecurity/2026/visa-mastercard-team-with-ant-know-your-agent-framework

---

## 9. SECTION BREATHER

`.section-breather` between Quick Takes and the mid-issue accent. **Second and last breather.**

---

## 10. MID-ISSUE ACCENT — `.mid-accent-highlight`

**~70 words · compact highlight box, off-white, subtle teal left border, 14px italic, with source link.**

**Content.** Broadcom removed the public download pages for VMware's **Virtual Disk Development Kit** around **25 August**, with no deprecation notice and no replacement, and **defended the decision on 10 September**. In Broadcom's own words, the kit *"is no longer available for use or download"*, and its approved use *"has always been for backup and recovery solutions from our TAP [Technology Alliance Program] partners"*. Because agentless backup and virtual-machine migration tooling depends on it, the removal narrows the backup path and the exit path at the same time.

**Binding:**
- **State both dates** (~25 August removal, 10 September defence).
- **Use Broadcom's actual wording** (§1.7). **The run plan's "never bundled with a software purchase" paraphrase is not Broadcom's and must not be printed** (C12). Use **one** of the two cleared quotations, not both — the box is 70 words.
- **One sentence only on Tottenham Hotspur's exit — throughline #3 of three.** Do not retell the migration.
- **No hardware, SKU or configuration detail.** **The Nutanix / Red Hat dependency claim is dropped** (C12).
- **Inline glosses:** *VDDK*, *agentless backup*, *SDK*.

**Sources:**
- https://www.theregister.com/ (The Register, 10 September — the in-window peg)
- https://www.shapeblue.com/broadcom-vddk-download-vmware-to-kvm/ (documents the ~25 August removal)
- https://www.techtarget.com/it-infrastructure/news/366648768/Broadcom-confirms-change-in-VMware-migration-tool-access

---

## 11. `<hr class="feature-break">` → IN PRACTICE — Bruno Siqueira

**~400 words · `.in-practice-header` (off-white, deep-teal top + left borders) flowing into the off-white `.in-practice` inset · preceded by an explicit `<hr class="feature-break">` · opener QUOTE-FIRST.**

- **Section label:** `IN PRACTICE`, Tier 1, **default deep teal** (structural landmark).
- **`.ip-theme`:** *Making technical decisions when not the SME*
- **`.ip-evergreen` sub-label:** *a classic worth revisiting*
- **GREP CHECK, binding (v1.34):** the `.ip-theme` element must not contain **"week"**, **"of 3"**, **"of 4"**, **"part"**, or any count.
- **`.author-card`:** avatar initials **BS** · **Bruno Siqueira** · *Atlassian* · **March 2024** — date pinned at §0.7.

**Opener (quote-first), verbatim:** *"Especially at a highly distributed company, documenting decisions is crucial to avoid repeated or unnecessary meetings."*

**Body.** Siqueira stepped into an interim engineering-manager role at Atlassian for **six months** and came out with four things: **focus**, **communication**, **documentation** and **stakeholder feedback**. Then he went back to an individual-contributor role.

Summarise **the journey — what he found and what changed — not advice layered on top.** The two mechanisms that carry the section:

- **Focus.** Work never stops arriving and the day does not get longer, so what receives attention has to be chosen deliberately, against what brings customer value, rather than absorbed in the order it lands. That is a scarcity discipline, and it is the first thing a manager without accumulated context has to build from nothing.
- **Documentation.** At a highly distributed company, writing decisions down is what stops the same meeting happening twice. It is the cheapest substitute for the context a permanent manager would already be carrying — which is exactly why it matters most to someone holding the role temporarily.

The frame for a director: what an interim manager's contribution actually is, and what it tells a reader about how a manager operates when the accumulated context is not there to lean on.

**Visual:** **pulled quote** within the section, on the verbatim line *"I'd been an overcommunicator before this experience, but being a manager reinforced the importance of keeping everyone in the loop, early and often."* Satisfies the per-section visual floor.

**Binding:**
- **Do not build a `.compare-table` here** — the piece does not support a two-column split and inventing one breaches attribution fidelity (v3.6).
- **Never write original advice, never plagiarise.**
- **Inline glosses:** *interim engineering manager*, *individual contributor*.
- The date is stated honestly. This is the season's **second consecutive evergreen**, and the sub-label carries that.

**Closing line:** bold **"What to try"**, one peer-level sentence. **Informs, does not prescribe** — no action item, no imperative directed at the reader.

**Source:** https://www.atlassian.com/blog/leadership/things-i-learned-as-an-engineering-manager

---

## 12. OTHER NEWS THIS WEEK

**4 items · ~210 words · one sentence plus source link per item unless stated · no visuals in this section.**
**No InfoQ (at cap). No Anthropic (already in Week at a Glance).**

**1. OpenAI opens the Agents API in public beta** (OpenAI, **10 September**). **Two sentences — the fullest treatment in this section.**
- The managed orchestration, context-management and sandbox layer behind Codex is now available directly, aimed at work where an agent runs for extended periods, uses tools and coordinates helper agents, with durable sessions that carry across turns.
- **Pricing — authorised, correcting the run plan (C17, late find 2):** OpenAI states there is **no additional fee for the API itself**; usage is billed as the tokens and tools the agents consume. Every organisation that has been building its own harness now has a vendor-managed alternative to price against, with a supplier-concentration question attached either way.
- **Binding: confirm the URL resolves. Agent sense 3 named** (§1.9) — developer-triggered agents inside an orchestration layer an organisation administers. **The nine sandbox partners are NOT listed** (late find 2, routed to Phase 2).
- **One permitted throughline sentence** to DoorDash's Flux, covered at Issue 24, as the build-side comparison.
- **This item sits eight sections after the Lead. Nothing in it may echo, reference or juxtapose the campaign** (§0.4 binding 3).
- Source: https://openai.com/index/introducing-the-agents-api/

**2. GitHub gives enterprise admins central control of Copilot agent operations** (github.blog, **9 September**). **Two sentences.**
- Administrators can decide centrally which agent operations are **blocked**, which **require human approval** and which may **proceed unprompted**, covering **shell commands, file reads and edits, and network domains**, with different policies for different enterprise teams. **Managed restrictions cannot be weakened by user settings, workspace settings, auto-approval, or approvals a developer saved earlier.**
- The point: *what our agents may touch* becomes an administrable policy rather than a per-developer habit — and the first version of an agent control a bank's security reviewer can actually be shown.
- Source: https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/

**3. Copilot's included AI credits fell on 1 September** (github.blog changelog, **28 August**). **One sentence, NO FIGURES (C6).**
- Both dates stated. **The in-window fact is that the first full post-promotion billing period is the one now running**, so the change lands as an unexplained invoice variance rather than as a price rise anyone approved — and additional paid usage is enabled by default for organisations and enterprises unless spend policies are adjusted.
- **Binding: the run plan's "$30 → $19" and "$70 → $39" are wrong and must not appear in any form.** No credit counts either — they clear only in secondaries. **Seat prices did not change, and the sentence must not imply they did.**
- Source: https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/
- *(Items 2 and 3 sit in the same section, keeping github.blog at 2 of 2.)*

**4. The Pragmatic Engineer surveys what code review has become** (**8 September**). **One sentence. CONDITIONAL CLEARED — RUNS.**
- A survey of how review is actually done now that agents produce more code than the people around them can track, and whether the practice adapts or stops being a default.
- **Binding: do not quote it.** The substance is publicly visible without a subscription, which is what cleared it.
- Source: https://newsletter.pragmaticengineer.com/

**No item may appear in both Other News and Week at a Glance.**

---

## 13. PLATFORM UPDATES

**1 row. `.glance-table` — Status / Platform / What changed. ~35 words.**

| Status | Platform | What changed |
|---|---|---|
| Shipped | **Visual Studio 2026** (8 September) | **Bring-your-own-key** support lets a team point the IDE at models it has already contracted for — which makes the model contract, not the IDE licence, the thing that determines where code goes. |

**Binding (C7): the per-model thinking-effort half of the run plan's row DROPS** — it could not be verified against the versioned release notes. **The row runs on bring-your-own-key only.** The data-residency weight for Gulf customers is the reason the row is here at all and may be stated in one clause.

**Inline glosses:** *bring-your-own-key*, *data residency*.

**Source:** https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes

---

## 14. `<hr class="feature-break">` → OUTSIDE IN — Figma, Format A

**~380 words · `.outside-in-section`, Format A · position 15 · section label ORANGE · opener STAT-FIRST · h3 subheadings.**

- **`.author-card`:** avatar initials **MS** · **Matthew Sullivan and Brad Girardeau** · *Figma, security engineering* · **29 July 2026**
- **Dates stated honestly in the body:** Figma published on **29 July 2026**; **InfoQ wrote it up in September**. Neither is presented as this week's news.

**Opener (stat-first):** **71%** — the reduction Figma reports in the time it takes to resolve a security alert.

**Content.** Figma's security team built an **alert-triage agent** that receives the **full Slack thread history** as context, plus **its own steering memory** and a toolset **scoped to what a security on-call engineer needs during triage**. Human review and strict controls are retained throughout. Figma reports a **71% reduction in alert time-to-resolution**, a **20% reduction in on-call pages** — achieved in part by correctly lowering the severity of some alerts — and **25% fewer endpoint software approval requests**. The on-call engineer's job moved from investigating from scratch to reviewing what the agent found, confirming or correcting it, and handling the cases that need human judgement.

**Binding framing — this is an on-call design story, not a security story.** The transferable subject is **page volume, severity judgement and what stays with a human**: a rota-design and retention question before it is a tooling one. Figma's security team is the setting, not the lesson. **The section must not read as a companion to the Lead**, which carries the issue's security weight eight sections earlier.

**The one-sentence lesson (transferability test):** the measurable output of a triage agent was fewer pages for the people on the rota, which is a staffing and retention decision before it is a tooling one.

**Visuals:**
- **`.oi-stats-row` — COUNTED VISUAL #6, upgrade authorised (§0.9):** **71%** *faster alert resolution* · **20%** *fewer on-call pages* · **25%** *fewer endpoint approval requests*.
- **`.oi-callout` — section-native, uncounted (C21):** carries the one-sentence lesson above.

**Binding:**
- **One source, one figure.** Everything is **Figma's own reporting**, and the section says so — not audited. **InfoQ's ~70% rendering is not printed.** **The 71% carries no "on complex alerts" qualifier** (§0.9). **The dropped "three memory types" stat does not appear.**
- **No vendor stack** — no data lake, retrieval layer, identity tooling or model names. IC-level and barred (§18).
- **Agent sense 4a named** (§1.9) — a scoped internal agent with human review retained.
- **Inline glosses, one clause each:** *alert triage*, *on-call page*, *severity*, *steering memory*.
- **End with a bold "The takeaway" line.**

**Sources:**
- https://www.figma.com/blog/how-we-secure-figmas-internal-systems-with-agents/ (primary — every figure cites this)
- https://www.infoq.com/news/2026/09/figma-security-agents/ (the September write-up peg)

---

## 15. ON THE RADAR

**`.radar-timeline` treatment, dated items first. 2 items · ~85 words.**

**The run plan's third item is dropped (C15).** No federal remediation deadline could be established for the 8 September KEV additions, and **BOD 22-01 has been revoked and superseded by BOD 26-04 (10 June 2026)**, which changes the deadline mechanics (late find 9). **Nothing is substituted in. Two honest items beat three with one padded.** Recorded so Phase 5 reads the count as a ruling.

**1. 30 October 2026 — PayPal.** One line.
- A further **251 roles at San Jose** disclosed through a government filing on **4 September**, with **every affected employee separating on 30 October**; separately, **164 roles in Ireland**, about **12%** of the Irish workforce. Inside a previously announced programme to reduce roles by about **20%** over the next two to three years.
- **Binding (C16): one company's programme, never a sector aggregate.** **Do not print the India figure** — reporting and PayPal disagree and cannot be separated. **Do not print a headcount base** for the 20%. **Do not print the CEO name** — the reporting conflicts and no name is needed for a one-line item. **Do not print the seniority profile** (late find 8). Issue 24 covered the 31 August tranche.
- Sources: https://www.paymentsdive.com/ · https://www.siliconrepublic.com/business/paypal-layoff-ireland-164-fintech-ai

**2. AWS ME-CENTRAL-1 / ME-SOUTH-1** — standing watch. One line.
- Both remain **open**; AWS's last public update is dated **30 April 2026**. **Say nothing stronger.** Do not conflate with any other regional concentration watch.
- **Not a P0 status card** — the state has not changed since April and a card would imply movement that has not happened.

---

## 16. `<hr class="feature-break">` → THE LEADERSHIP READ — LeadDev

**~480 words · navy `.mgmt-section` (drop cap renders automatically) · opener SUMMARY-FIRST.**

- **Attribution, corrected (C20):** **inline attribution**, not `.author-card` — **LeadDev · August 2026**. No byline could be established across two searches, and an author card with no named person defeats the component's purpose. **Documented deviation; Phase 5 reads it as a ruling.**
- **Title, exact:** *"Junior engineers are skipping straight to architect-level thinking"*. **The "leapfrogging" rendering is a secondary's and is not used.**

**Opener (summary-first).** AI tooling lets a junior engineer produce working code before they have built a model of the system it runs in — so they arrive in architecture-shaped conversations years before the judgement to hold them arrives, and the piece treats that as a levelling and coaching problem rather than a tooling one.

**Substance — four mechanisms confirmed (§0.8), against a floor of two. Use at least two; three is the natural fit at 480 words:**

1. **Growth metrics.** Track **learning, understanding and judgement as primary metrics alongside output**, not as soft extras appended to a ladder that measures shipping.
2. **The proficiency ladder.** A three-phase model for AI proficiency — **tutor, then copilot, then accelerator** — with scaffolding that loosens as judgement develops rather than as tenure accrues.
3. **Apprenticeship infrastructure.** Senior engineers are treated as the apprenticeship infrastructure: expected to mentor, review and teach, and asked to help refine the team's AI norms and guardrails. That requires real senior bandwidth, which is a capacity decision, not an aspiration.
4. **Where judgement is visible.** Judgement shows in crises — production incidents are where the piece says growth actually becomes legible.

**The takeaway without clicking:** what a manager writes into the ladder once output has moved up a level and judgement has not, and where the senior bandwidth to close that gap is supposed to come from.

**Visual — the mandated centred `.pull-quote` blockquote card**, on the verified line:

> *"generating code faster than we're building the learning, understanding, and judgment junior software engineers need to grow in their career"*

**Binding: the quotation stops at "career". The tail "and truly own the systems they work on" appeared in one rendering only and must not be printed.** Quote **"judgment"** as written inside the marks; use **judgement** in the digest's own prose (attribution fidelity, v3.6).

**Binding:**
- **Use the piece's actual terminology** — *tutor / copilot / accelerator*, *apprenticeship*, *judgement*. **Do not invent a label and attribute it** (v3.6).
- **Agent sense 4b named on first use** (§1.9) — code-generating assistance inside developer workflows.
- **Inline glosses, one clause each:** *levelling*, *calibration*, *ladder*, *apprenticeship model*. The concept sidebar is spent (§1.4).
- **Non-AI-primary.** The subject is levelling, coaching and apprenticeship design; AI is the causal backdrop. **This is the run's most load-bearing classification** — if Phase 5 disagrees, the remedy is run-plan §11 Branch D (drop Outside In, not this section).
- **This is not a code-review piece**, which is what discharges the topic-repeat check against Issue 24's Leadership Read. The week's code-review material runs as one sentence in Other News and nowhere else.

**End with the discussion prompt** — *"This could be worth talking about:"* plus **one specific question anchored in the piece's argument** (the natural one: where the senior bandwidth for apprenticeship comes from when output targets have not moved). **Not an action item.**

**Source:** https://leaddev.com/career-development/junior-engineers-are-skipping-straight-to-architect-level-thinking

---

## 17. RECOMMENDED READING

**Linked list, 4 links, no article treatment. ~80 words.**
**Binding: no github.blog, Anthropic or Pragmatic Engineer link here** (all at or held at cap, §1.10).

1. **DoorDash, "Delegating engineering work to cloud-based agents"** — **cited to InfoQ's write-up, never to careersatdoordash.com** (403 at Issue 24, untestable this run). The build-side companion to the Agents API item.
2. **Giles Edwards-Alexander, "An Accidental Blackboard"** (martinfowler.com, 2 September) — ten engineers in one room leaning fully into agentic engineering, who prompted their agents into using the repository as a shared blackboard without designing it that way.
3. **H. Penny Nii, "The Blackboard Model of Problem Solving"** (AI Magazine, 1986) — the canonical account of the coordination pattern from Hearsay-II that the piece above rediscovered. **Include only if link 2 runs** — the pairing is the point.
4. **Ludicity, "AI mania is eviscerating global decision-making"** (18 July) — **characterised honestly as one consultant's account of his own client base, never as a finding.** **Do not print the Hacker News points figure.** The piece is profane in places; **no quotation**.

---

## 18. PROSE RULES TO HOLD

- **Epistemic reframing: hard cap of 2 per issue, structural test not lexical.** The test is *"does this sentence name what something is NOT in order to introduce what it IS?"* — not a search for six literal patterns. **This material invites it badly.** Constructions this week's copy will reach for and must not: *"the story isn't the 440 servers"*, *"the real cost isn't the restructuring charge"*, *"less an announcement than an intention"*, *"the question is not whether agents follow scope rules"*, *"it's not a security story — it's an on-call story"* (this last one is the single likeliest breach, in Outside In, because it is exactly the section's framing note restated as prose). **Budget two at most across the whole issue and scan structurally.** Lexical scans have returned zero while shipping violations in this run's history.
- **Third-person editorial voice.** No *"the reader"*, *"your team"*, *"your firm"*, *"you should"*, and no rhetorical questions posed to the audience.
- **Readability (v1.36).** Break any sentence past roughly 30 words or three clauses with a parenthetical. Declarative, not literary.
- **One quote, one slot (v3.6).** The allocation at §1.7 is binding and complete. **Nothing is printed inside quotation marks that is not in that table.**
- **Attribution fidelity (v3.6).** The 6,000-roles tally is a round-up's count. The Alibaba claim is Anthropic's allegation. The McKinsey projection is McKinsey's. Figma's percentages are Figma's own reporting, not audited. The error-budget framing around GitHub's August incidents is a third party's, not GitHub's. **Each is attributed inside the sentence that carries it.**
- **Agent-terminology precision (v3.0).** Four senses, allocated at §1.9, each named on first use in its own section.
- **Palette guardrail (v1.32).** §1.6. Red appears exactly twice: the Lead's section label and the *Action Required* tier. **Structural landmarks stay default teal.**
- **No action items anywhere**, including *In Practice*'s "What to try" line and the Leadership Read's discussion prompt. Both inform; neither instructs.
- **No inflammatory framing** in the Lead.
- **No IC-level detail anywhere.** No exploit mechanics, no patch commands, no configuration, no SKUs, no CLI flags, no vendor stack lists.
- **Cross-issue throughlines: exactly three, one sentence each, none allowed to become a section's frame.** #1 Unit 42 → the Lead. #2 Issue 22's Oracle coverage → QT1 (optional). #3 Tottenham Hotspur → the mid-issue accent. **No fourth.**

---

## 19. FOOTER

- Archive bar, last five issues, **Issue 25 highlighted teal** (`.archive-pill.current`).
- **Vol. II pill badge** (`.footer-vol` — solid teal background, navy text).
- Next-edition line.
- **Conditional notes — NONE OF THE THREE RUN THIS ISSUE:**
  - *"In Practice returns next week"* — **not used.** *In Practice* runs (§0.7).
  - *"The Leadership Read returns next week"* — **not used.** It runs (§0.8).
  - *"Outside In returns next week"* — **not used.** It runs, which discharges the promise Issue 24's footer made (§0.9).

---

## 20. WORD BUDGET

| Section | Run plan | **This brief** | Change |
|---|---|---|---|
| Foreword | 75 | **75** | — |
| Editorial Moment | 70 | **70** | — |
| Week at a Glance (6 items) | 300 | **300** | Both conditionals cleared |
| Lead | 400 | **400** | — |
| QT1 — Oracle | 260 | **260** | Split dropped, filing-silence framing absorbs it |
| QT2 — Know Your Agent | 180 | **180** | — |
| Mid-issue accent | 70 | **70** | — |
| *In Practice* | 400 | **400** | Floor passed |
| Other News (4 items) | 210 | **210** | All four run |
| Platform Updates (1 row) | 40 | **35** | Half the row dropped (C7) |
| Outside In | 380 | **380** | — |
| On the Radar | 120 | **85** | 2 items, not 3 (C15) |
| The Leadership Read | 480 | **480** | Floor passed |
| Recommended Reading | 80 | **80** | — |
| Takeaway lines + source attributions | 130 | **130** | — |
| **TOTAL** | **~3,195** | **~3,155** | **−40** |

**~3,155 against a budget of 2,600–3,700. 555 above the floor, 545 below the ceiling.** Derived page count at ~250–300 words/page: roughly **11–13 pages**. **Nothing is cut to hit a page number.**

**If the draft exceeds 3,700**, apply the run plan's §11 cut order: (1) shorten Outside In toward 300, (2) drop the weakest Other News items, (3) demote the conditional Week at a Glance items, (4) tighten the Lead to 400, (5) shorten the Leadership Read toward its 400-word floor — **not below**. ***In Practice* is not a cut lever** — it either earns its 400 words or it is omitted entirely.

**No §11 branch is taken.** Branch A (no *In Practice*), Branch B (no Leadership Read), Branch C (both) and Branch D (Leadership Read reclassified) are all inapplicable on the verified plan.

---

## 21. COMPLIANCE CARRY-FORWARD FOR PHASE 5

Phase 5 runs **FULL**, not lightweight — six triggers fire at run-plan §13, and this brief adds two.

| Check | Where to look |
|---|---|
| **Every load-bearing figure cleared §0.0's bar or was dropped** — not softened, not hedged | §0.2 ledger against the shipped HTML. **This is the most important check of the run** |
| **The 19 dropped claims did not reappear** | §0.2 and §0.3. Highest-risk reappearances: the 7,000/6,000/3,000 split · the $30→$19 / $70→$39 credits rendering · "seven China-based labs" · the 7h47m duration · the thinking-effort controls · the India figure · the CISA deadline line · the "three memory types" stat |
| **AI-substrate count re-derived from the HTML, not trusted from the table** | Expect **3 of 6** (Lead, QT2, Outside In). Oracle is the flagged borderline; at 4 of 6 it still passes. **The Editorial Moment must be non-AI in whatever form it shipped** |
| **v1.35 long-form cap: 1 AI-primary of 3, three distinct aspects** | *In Practice* (non-AI, technical leadership for managers) · Outside In (AI, on-call design) · Leadership Read (non-AI, career and coaching). **Check Ludicity and Edwards-Alexander did not reappear in a long-form slot** |
| **The Lead is the attacker's operating model, not remediation** | No patch commands, no CVE forensics, no exploit mechanics, no product configuration. **Both victim units printed. The 12-of-395 proportion printed. No sentence implies OpenAI's Agents API was involved** |
| **Source caps counted from the HTML** | github.blog **2**, InfoQ **2**, The Pragmatic Engineer **2**, Anthropic **1**. **No GitHub item in Week at a Glance** — the breach the Editorial Moment placement creates |
| **Outside In reads as on-call design, not as a second security story** | §14. **DoorDash and Zalando must not appear in a featured slot.** The stats row ran because both figures pinned |
| **`.ip-theme` contains no week count** | Grep for "week", "of 3", "of 4", "part" inside `.ip-theme` |
| **Quote audit: nothing in quotation marks that is not in §1.7** | Specifically: **no GreyNoise quotation anywhere**; the LeadDev quote **stops at "career"**; Broadcom's wording is Broadcom's, not the "never bundled" paraphrase |
| **Openers: no two the same except the two pre-declared collisions** | §1.5 |
| **Visual budget: 6 counted, 2 real diagrams, every major section carries one, no `.pq-bar`** | §1.1 and C21's counting convention |
| **NEW — the two documented deviations shipped as documented** | (a) Leadership Read uses **inline attribution, not `.author-card`** (C20). (b) QT1's concept runs as an **inline gloss, not `.concept-of-week`** (C18). **Neither is an omission; both are rulings with stated reasons** |
| **NEW — On the Radar runs 2 items and nothing was padded in** | C15 |
| **No rejected candidate from run-plan §7 was re-promoted** | 29 entries; the pool was deep and almost uniformly AI-flavoured, so the quiet-re-promotion risk is correspondingly high |

**Notes for the state file (on Deliver only — v1.34).** Run-plan §12 applies **unchanged**, on the primary branch: `in_practice_season_progress` → **3** with the season marked **complete**; Siqueira appended to `in_practice_history` with the date **22 March 2024**; Figma appended to `outside_in_history` (**enterprise / SaaS**) with **71% / 20% / 25%** as the recorded figures; `last_leadership_read` → **LeadDev**, piece appended with the date **August 2026** and a note that **no author byline could be established**. **Add:** *Phase 1 and Phase 3 both fetched nothing — HTTPS egress was blocked for every host at both phases. Issue 25 is a search-verified issue end to end and should be read that way in any later audit. The verification standard used is recorded at `section-briefs.md` §0.0.* **Also add the twelve late finds at §0.11 to the Issue 26 routing list**, with items 2 (nine sandbox partners), 5 (GitHub's Azure migration milestones), 6 (JetBrains sandbox) and 9 (**BOD 26-04 supersedes BOD 22-01**) flagged as the ones worth a slot.

---

## 22. MAIN-LOOP ADDENDUM — fixes applied after the first Phase 5 review (11 September 2026)

The first full Phase 5 pass (`review.md`, Part 4) returned FAIL on three blocking and four secondary findings. The main loop applied the fixes directly to `issue-25.html`:

1. **Epistemic reframing 5 → 2.** The `.oi-callout`, the Leadership Read closing sentence and the Platform Updates row were rewritten as declaratives. The two retained are *"Security is the setting; the rota is the part that travels"* (Outside In) and *"a levelling and coaching problem rather than a tooling one"* (Leadership Read).
2. **Adjacent-source (v1.32).** The Hacker News removed from the Lead's source tag; it now anchors Week at a Glance only. **Ledger correction to §1.11:** each section's full linked-outlet set, not only its anchoring outlet, is the unit the adjacency rule counts. Outlets present in the shipped HTML but absent from §1.10: PYMNTS (QT2), ShapeBlue and TechTarget (mid-accent), Silicon Republic (Radar) — each at one section, no cap or adjacency breach.
3. **Smart Reports item linked** to GAI Insights' write-up (a real URL in `candidates.json`); the body attribution stays with Anthropic, so the Anthropic section count is unchanged at 1.
4. **Section times** — Lead and Quick Takes raised to (3 min); sum now matches the cover.
5. **Mid-issue accent** cut to three sentences (~75 words); Broadcom's verbatim wording kept, the technology-alliance-partner paraphrase dropped (one quote, one slot).
6. **Word budget** — Lead trimmed (country breakdown, CVE identifiers, operator-attribution inference, directory-server aside); QT2 compact card trimmed (protocol names); one restating sentence cut from QT1; the CISA item's closing question-shaped sentence removed. Body copy now 3,559 words by the foreword-to-footer method; 3,691 inclusive of cover and footer — under 3,700 on either method. **Counting convention for future reviews: body copy = foreword through Recommended Reading, cover and footer excluded, SVG text excluded.**
7. **Bare-domain links** (The Register, Payments Dive, two Pragmatic Engineer) stand as the correct behaviour under a no-fetch regime; article paths are not guessed.
