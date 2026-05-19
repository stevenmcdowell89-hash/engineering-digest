# Engineering Digest — Full Skill Prompt

This bundle is the complete specification for producing the **Engineering Digest**, a magazine-style weekly briefing for hands-off engineering leadership (directors, VPs, heads of engineering) at a software company whose customers include UK and Middle East banks and fintechs.

You are being given everything: the operational skill, the editorial spec (taste, banned phrases, hard rules, every editorial decision), the compliance checklist, the candidates schema, and the three HTML templates with all CSS baked in.

## How to use this bundle

Read files **in this order**, then follow the workflow in `SKILL.md`:

1. **`SKILL.md`** — operational entry point. Tells you the five-phase pipeline (Beat sweep → Inventory & rank → Slot detail → Generate → Review), models to use, when to use which format, hard rules, the state file schema.
2. **`references/editorial-spec.md`** — the single source of truth on taste, voice, structure, section-by-section editorial direction, banned phrases, scoring rubrics, balance rules, opener catalogue, sidebar catalogue, beat definitions, audience definition, and the workflow architecture (v3.1) reasoning.
3. **`references/candidates-schema.json`** — JSON schema the phase-1 research output must validate against.
4. **`references/compliance-checklist.md`** — the review gate. Every issue must pass before shipping.
5. **`assets/weekly-template.html`** — standard weekly format. CSS, page structure, components.
6. **`assets/deepdive-template.html`** — deep-dive format (one story dominates, requires 2–3+ SVG visuals).
7. **`assets/light-template.html`** — light edition for quiet weeks.

## The non-negotiables (mirrored from SKILL.md so you can't miss them)

- **No inflammatory headlines** — "drones", "attacks", "strikes" are fine when factual; "bombs" only if literally accurate and relevant.
- **No corporate language** — no "leverage", "synergy", "best-in-class". The full banned-phrase list lives in `references/editorial-spec.md`.
- **No action items** — inform and contextualise only. This is not a to-do list.
- **No AI-generated images** — SVG diagrams only, and only actual `<svg>` elements (not raster images dressed as SVG).
- **No fabricated links** — every URL must resolve to a real, working source.
- **Always search the web** — never generate an issue from training data alone.
- **Audience is hands-off engineering leadership at a software vendor**, not engineering managers at a bank. Banking/fintech is the customer lens, not the subject matter. The primary curation test is: "what guides the team's work vs. what the team's work is."

## Workflow at a glance (full version in SKILL.md)

| Phase | Output artefact | What happens |
|---|---|---|
| 1. Beat sweep | `candidates.json` | Research every top-tier beat + secondary pools, validate against schema |
| 2. Inventory & rank | `run-plan.md` | Curate; apply 3-issue lookback, topic saturation cap, AI-balance check, lead sanity check; choose format |
| 3. Slot detail | `section-briefs.md` | Per-section briefs: opener style, sidebar plan, jargon glosses, pull quotes, word counts, sources |
| 4. Generate | `issue-N.html` | Write the HTML against the plan. No editorial decisions at this stage — execution only |
| 5. Review | `review.md` | Run the full compliance checklist + lead-sanity cross-check |

Each phase writes to `/digest-runs/issue-N/`. That directory is the audit trail.

## State file

Maintained at `engineering-digest-state.json`. Read at start of every run, updated at end. Schema and rationale in `SKILL.md` under "State Tracking".

```json
{
  "last_issue_number": 3,
  "last_issue_date": "2026-03-24",
  "last_issue_format": "weekly",
  "last_lead_topic": "AI tooling & adoption",
  "consecutive_non_deepdive": 1,
  "last_outside_in_company": "Wise",
  "last_editorial_moment": "second-look",
  "last_lead_opener": "stat-first",
  "last_qt_layout": "equal",
  "last_oi_format": "full",
  "p0_stories_tracking": ["AWS ME recovery"]
}
```

## Run directory structure

```
digest-runs/issue-N/
  candidates.json     ← phase 1
  run-plan.md         ← phase 2
  section-briefs.md   ← phase 3
  issue-N.html        ← phase 4
  issue-N.pdf         ← generated from HTML
  review.md           ← phase 5
```

---

Read `SKILL.md` next, then `references/editorial-spec.md` in full. Do not skip the spec — it contains every editorial judgement that distinguishes this digest from a generic tech newsletter.
