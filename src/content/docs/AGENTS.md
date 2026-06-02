---
title: Documentation Standards for Agents
sidebar:
  hidden: true
---

This file defines content standards and authoring conventions for the Algorand developer portal documentation site (Astro/Starlight). It applies to all files in this directory tree — tutorials, how-to guides, API/CLI/library reference pages, conceptual explanations, quickstarts, changelogs, and any `.mdx` or `.md` page.

The site follows the **Diátaxis framework**: every page is one of four modes. **Identify the mode first; then write to it.** Mixing modes is the most common documentation failure.

## Step One: Identify the Mode

|                       | Acquisition (study) | Application (work) |
| --------------------- | ------------------- | ------------------ |
| **Action (steps)**    | Tutorial            | How-to guide       |
| **Cognition (facts)** | Explanation         | Reference          |

If a page is doing two of these, it's two pages. If you can't identify the mode, flag it — the page is mode-mixed and needs restructuring before any other edits.

## Mode-Specific Writing Patterns

### Tutorial

Audience: beginner. Voice: second person, encouraging, present tense, active voice.

- State the destination upfront: what the reader will build and what they'll learn. List prerequisites explicitly.
- Numbered steps; each does one thing with a verifiable result ("you should see X"). Show output at every checkpoint.
- One path through. Resist completeness — link out for alternatives.
- **Avoid:** parameter lists, design rationale, "Optional: …" steps, multiple paths for the same thing.

### How-to Guide

Audience: competent reader with a job to do. Voice: second person, imperative, terse.

- Title is goal-oriented: "How to \<do the specific thing>." State the goal in the first sentence, then prereqs, then steps.
- Address the goal, not the tool. Allow forks where real choices exist; the reader exercises judgment.
- **Avoid:** beginner pedagogy, complete parameter tables, pages of background before instructions.

### Reference

Audience: working developer looking up facts. Voice: third person, present tense, neutral — no "you," no narrative, no subjective adjectives ("useful," "powerful").

- Mirrors the machinery: one page per major API/module, sections per method/command, subsections per parameter.
- **Parameter tables** with `Name | Type | Required | Description` columns. Document every parameter: type, required flag, default, constraints, description. "Must be a 58-character base32-encoded Algorand address" — not "an address."
- **Document errors:** what codes/exceptions can be thrown, under what conditions. Include realistic examples for success and at least one common error case.
- **Avoid:** scenario walkthroughs, design rationale, tutorial narrative, missing types or constraints, only happy-path examples.

### Explanation

Audience: curious reader building a mental model. Voice: discursive but disciplined; analogies and metaphors welcome.

- Frame around a question. Make connections across concepts. Acknowledge alternatives and trade-offs.
- Use concrete examples to anchor abstractions. Don't try to be complete — illuminate, don't enumerate.
- **Avoid:** step-by-step procedures, complete parameter listings, "try this in your terminal."

### Common Mode-Mixing Failures

1. **Tutorial with reference interjected** — listing every flag mid-tutorial. Strip; link to reference.
2. **How-to with explanation mixed in** — design rationale mid-instructions. Move to an explanation page; link.
3. **Reference as tutorial** — API docs walking through a scenario. Restructure as `Endpoint → Description → Parameters → Returns → Errors → Example`.
4. **Explanation as how-to** — concept page secretly walking through doing something. Pull instructions into a how-to.
5. **Frankenstein page** — tutorial section 1, how-to section 2, reference section 3. That's multiple pages.

If asked for a small edit and you notice mode-mixing, **flag it as a separate change** rather than fixing it silently.

## Frontmatter

Required on every page:

```yaml
---
title: <descriptive but brief; appears in the sidebar>
description: <one or two sentences: what this page is and who it's for>
---
```

`description` is required, not decorative. It feeds the `llms.txt` index and is the primary signal AI tools and search use to decide whether to retrieve the page. Write as a complete present-tense sentence that makes sense out of context. Don't write "This page covers…" — write what the page covers.

Add when needed: `sidebar.label` (title too long for sidebar), `sidebar.order` (wrong default sequence), prev/next overrides (auto-generated link points to an unrelated section).

## Headings, Structure, and Voice

- **Title Case** for all headings. No trailing punctuation or colons. Don't skip levels.
- **Auto-generated TOC shows two levels** by default — structure with that in mind.
- **Short paragraphs.** Lead with the answer. Plain English; define jargon on first use.
- **Consistent terminology.** Same concept, same name, every page. Pick one and stick with it.
- **Consistent product names.** `algokit` (command) vs. `AlgoKit` (product).

## Acronyms and abbreviations

**Domain- and product-specific acronyms must be defined on first use on each page**, with the expansion followed by the acronym in parentheses. The acronym can then be used freely for the rest of the page.

> The Algorand Virtual Machine (AVM) executes smart contract code. Each AVM operation has a defined cost…

This applies per page, not per site — readers land on individual pages from search, deep links, and AI tools, so each page must stand alone.

## Code Examples

**Inline triple-backtick** when: fewer than 5 lines, illustrative only, or demonstrating syntax (not meant to run).

**`RemoteCode`** when: more than a handful of lines, readers will copy/run it, or the same example appears on multiple pages (single source of truth).

Import at the top of any page that uses these components:

```javascript
import RemoteCode from '/src/components/RemoteCode.astro';
import { Tabs, TabItem } from '@astrojs/starlight/components';
```

Wrap relevant lines in source files with comment markers using `example: NAME`:

```python
# example: PAYMENT
@abimethod()
def payment(self) -> UInt64:
    ...
# example: PAYMENT
```

Snippet names: `UPPER_SNAKE_CASE`, descriptive enough to identify alone (`PAYMENT_INNER_TXN`, not `EXAMPLE_1`). Use the same name across all language files for the same logical example.

```markup
<RemoteCode src='...' snippet='PAYMENT' lang='py' title='Payment Inner Transaction' frame='none' />
```

Multi-language examples use `Tabs` with `syncKey="lang"` so the user's language choice persists across blocks. Language versions must be in parity — same operation, inputs, outputs, and error handling.

**Every substantive example must:**

- Use realistic data (real-shaped addresses, plausible IDs). Never `foo`/`yourAddressHere`.
- Be copy-paste runnable given stated prereqs.
- Show errors, not just success.
- Be idiomatic in its language — don't transliterate Python into TypeScript.

**Code-block attributes:** `frame=none` and `showLineNumbers=false` for snippets under 10 lines. Lines ≤ 80 characters. Always specify a language tag; use `shell` (not `bash`) for CLI commands.

## Links and References

- Internal links must point to real pages. Verify after restructuring.
- External resources not owned by Algorand Foundation or Algorand Technologies belong in an "Additional Resources" section at the bottom, not inline.
- Cross-references use the destination page's actual title, not "click here" or "this page."

## Review Checklist

Walk in order. The first two have the highest leverage.

**0. Mode** — What mode is this page? If you can't tell, that's the finding. Is it mode-mixed? Flag anything off-mode as a separate change, not an inline fix.

**1. Frontmatter** — `title`: descriptive, brief, Title Case, won't wrap in sidebar. `description`: present, complete-sentence, meaningful in isolation. `sidebar.label`/`sidebar.order`/prev-next where needed.

**2. Technical accuracy** — APIs, endpoints, commands, and parameters correct against current versions. Code snippets actually run. Anything implicitly pinned to a stale version?

**3. Voice and clarity** — Mode-appropriate voice (see per-mode sections). Concise; cut filler and hedges. Audience match. Plain English; terms defined on first use.

**4. Structure** — Heading hierarchy clear, no skipped levels, Title Case throughout. TOC reads as a coherent map. Sections not absurdly short or long.

**5. Completeness** — Tutorial: full path from prereqs to working result, no silent gaps. How-to: addresses actual goal including realistic edge cases. Reference: every parameter has name/type/required/default/constraints/description; errors documented; realistic examples including failure cases. Explanation: covers what matters for understanding.

**6. Code examples** — Language tag present; `shell` for CLI. `frame=none`/`showLineNumbers=false` for snippets under 10 lines. Lines ≤ 80 chars. Substantive examples from `RemoteCode`. Multi-language in `Tabs` with `syncKey="lang"`; parity across languages. Snippet names descriptive, `UPPER_SNAKE_CASE`. Realistic data. Errors documented.

**7. Consistency** — Terminology consistent across pages. Product names and capitalization correct. Inline `code` for identifiers and paths; code blocks for multi-line.

**8. Links** — Internal links valid. External links live. Non-Algorand external resources only in "Additional Resources." Cross-references use destination titles.

**9. AI/agent-readability** — `description` present and meaningful. Page self-contained enough to be useful retrieved out of context. Parameters described explicitly (type, format, constraints). Clean markdown structure. Errors and edge cases documented.

**Reporting findings:** for each issue: **where** (section/quote), **what's wrong** (specific, mode-aware), **suggested fix** (the actual change). "This section is unclear" is not actionable — push deeper: what specifically, and what would fix it? If a category doesn't apply, say so: "No code; section 6 N/A."

## What Not to Surprise the User With

- Don't reorganize a page's structure as part of a small edit unless asked.
- Don't change terminology site-wide based on one page's review.
- Don't move code from inline to `RemoteCode` (or vice versa) without flagging it.
- Don't change a page's mode without flagging it — that's a structural change, not an edit.

These look small but have ripple effects.
