# Documentation Standards (AGENTS.md)

This file defines content standards and authoring conventions for the Algorand developer portal documentation site (Astro/Starlight). It applies to work on any file within this directory tree — tutorials, how-to guides, API/CLI/library reference pages, conceptual explanations, quickstarts, changelogs, and any `.mdx` or `.md` page on the site.

When creating, editing, or reviewing content here, follow these conventions. They take precedence over generic markdown or technical-writing guidance for any work in this codebase.

The site follows the **Diátaxis framework**: every page is one of four modes (tutorial, how-to, reference, explanation), each with a different purpose and writing style. The most common documentation failure is mixing modes — a tutorial that derails into reference, a how-to that pauses for an essay. **Identify the mode first; then write to it.**

## Contents

- [Documentation Standards (AGENTS.md)](#documentation-standards-agentsmd)
  - [Contents](#contents)
  - [Step one: identify the mode](#step-one-identify-the-mode)
  - [Mode-specific writing patterns](#mode-specific-writing-patterns)
    - [Tutorial](#tutorial)
    - [How-to guide](#how-to-guide)
    - [Reference](#reference)
    - [Explanation](#explanation)
    - [Common mode-mixing patterns](#common-mode-mixing-patterns)
  - [Frontmatter (required on every page)](#frontmatter-required-on-every-page)
  - [Headings, structure, and navigation](#headings-structure-and-navigation)
  - [Voice patterns across all modes](#voice-patterns-across-all-modes)
  - [Code examples](#code-examples)
    - [Inline vs. RemoteCode](#inline-vs-remotecode)
    - [Substantive expectations](#substantive-expectations)
    - [Inline code-block attributes](#inline-code-block-attributes)
    - [RemoteCode setup](#remotecode-setup)
    - [Snippet markers in source files](#snippet-markers-in-source-files)
    - [Using RemoteCode](#using-remotecode)
    - [Multi-language examples with Tabs](#multi-language-examples-with-tabs)
    - [Style and density](#style-and-density)
  - [Links and references](#links-and-references)
  - [Writing for both humans and AI](#writing-for-both-humans-and-ai)
  - [Authoring workflow](#authoring-workflow)
  - [Review checklist](#review-checklist)
    - [0. Mode](#0-mode)
    - [1. Frontmatter](#1-frontmatter)
    - [2. Technical accuracy](#2-technical-accuracy)
    - [3. Voice and clarity (mode-aware)](#3-voice-and-clarity-mode-aware)
    - [4. Structure (mode-aware)](#4-structure-mode-aware)
    - [5. Completeness (mode-aware)](#5-completeness-mode-aware)
    - [6. Code examples](#6-code-examples)
    - [7. Consistency](#7-consistency)
    - [8. Links](#8-links)
    - [9. AI/agent-readability](#9-aiagent-readability)
    - [Reporting findings](#reporting-findings)
  - [What not to surprise the user with](#what-not-to-surprise-the-user-with)

## Step one: identify the mode

Before writing or reviewing, ask: **what kind of page is this?**

|                       | Acquisition (study) | Application (work) |
| --------------------- | ------------------- | ------------------ |
| **Action (steps)**    | Tutorial            | How-to guide       |
| **Cognition (facts)** | Explanation         | Reference          |

- **Tutorial** — guided lesson; reader is learning by doing, on rails. Includes quickstarts.
- **How-to guide** — practical directions for a real-world goal; reader is competent.
- **Reference** — neutral, factual description of the machinery (APIs, CLI, opcodes, config).
- **Explanation** — conceptual background and "why."

If a page is doing two of these, it's two pages. Split it.

If you can't tell which mode a page is, surface that explicitly — it usually means the page is mode-mixed and needs restructuring before anything else.

## Mode-specific writing patterns

### Tutorial

Audience: beginner. Voice: second person, friendly, encouraging, present tense, active voice, confident.

- State the destination upfront — what the reader will build/do, what they'll have learned.
- List prerequisites explicitly.
- Numbered steps. Each step does one thing and has a verifiable result ("you should see X").
- Show output at every checkpoint.
- One path through. Resist completeness — link out for alternatives.

**Does NOT belong:** comprehensive parameter lists, design rationale, production hardening, comparisons.

**Red flags:** "Optional: …" steps, "see also" mid-body, lists of every flag, multiple ways to do the same thing presented as choices, long blocks of explanation between steps.

### How-to guide

Audience: competent reader with a job to do. Voice: second person, imperative, direct, terse.

- Title is goal-oriented: "How to \<do the specific thing>." Not "Asset opt-ins" (reference) or "Working with assets" (too broad).
- State the goal in the first sentence. Then prereqs. Then steps.
- Address the goal, not the tool — the API is the means, not the subject.
- Allow forks where real choices exist; the reader exercises judgment.
- Skip the obvious; link out for context and background.

**Does NOT belong:** beginner pedagogy (tutorial), complete parameter tables (reference), design rationale (explanation).

**Red flags:** title is a noun phrase rather than a goal, pages of background before the instructions, every option exhaustively listed.

### Reference

Audience: working developer looking up specific facts. Voice: third person, present tense, neutral. No "you," no narrative, no opinions, no "useful"/"convenient"/"powerful." Describe what the thing _is_ and what it _does_.

- Mirrors the structure of the machinery: one page per major API/module, sections per method/command, subsections per parameter.
- **Parameter tables** with `Name | Type | Required | Description` columns. Don't bury parameters in prose.
- **Document every parameter:** type, required flag, default value (if any), constraints (range, format, length), description that doesn't rely on visual context. "Must be a 58-character base32-encoded Algorand address" — not "an address."
- **Document errors:** what error codes/exceptions can this throw, under what conditions. AI tools generating integration code rely on these.
- **Realistic examples** — short request/response per endpoint or method, both success and at least one common error case.
- Don't narrate ("First call X, then call Y" is a how-to). Reference describes; it doesn't sequence.

**Does NOT belong:** scenario walkthroughs (how-to), design rationale (explanation), pedagogy (tutorial).

**Red flags:** subjective adjectives, second person, tutorial-style narrative, missing types or constraints, only happy-path examples, parameters described as "the ID" with no further detail.

### Explanation

Audience: curious reader building a mental model. Voice: discursive but disciplined, active voice; metaphors and analogies welcome.

- Frame around a question. Make it explicit early.
- Make connections — tie the concept to other concepts. This is the only mode where digression is on-task.
- Use concrete examples to anchor abstractions. Not full code walkthroughs (that's a how-to).
- Acknowledge alternatives and trade-offs.
- Don't try to be complete. Explanation is illumination, not enumeration.

**Does NOT belong:** step-by-step procedures, complete parameter listings, "try this in your terminal."

**Red flags:** "Step 1: …", complete parameter tables, "First, install X. Then run Y."

### Common mode-mixing patterns

These are the specific failures most likely to show up in review:

1. **Tutorial-with-reference-interjected.** Mid-tutorial detour to list every flag of a command. Strip; link to the reference.
2. **How-to-with-explanation-mixed-in.** Pausing mid-instructions to explain why the system is designed a certain way. Move rationale to an explanation page; link.
3. **Reference-as-tutorial.** API docs that walk through a complete scenario instead of describing endpoints neutrally. Restructure as `Endpoint → Description → Parameters → Returns → Errors → Example`.
4. **Explanation-as-how-to.** Concept page that's secretly trying to walk the reader through doing something. Pull doing-instructions into a how-to.
5. **The Frankenstein page** — tutorial in section 1, how-to in section 2, reference in section 3. This is multiple pages.

If asked for a small edit and you notice the page is mode-mixed, **flag it as a separate, larger change** rather than fixing it silently.

## Frontmatter (required on every page)

```yaml
---
title: <descriptive but brief; appears in the sidebar>
description: <one or two sentences describing what this page is and who it's for>
---
```

The `description` field is **required**, not optional decoration. It feeds the auto-generated `llms.txt` index and is the primary signal AI coding assistants (Cursor, Copilot, Claude Code) and search use to decide whether to retrieve the page. Write it as a complete sentence, present tense, that makes sense pulled out of context. Don't write "This page covers…" — write what the page covers.

Add when needed:

- `sidebar.label` — when the title is too long for the sidebar (it shouldn't wrap onto multiple lines).
- `sidebar.order` — when default ordering puts pages in the wrong sequence.
- Prev/next overrides — when the auto-generated previous link points to an unrelated section.

## Headings, structure, and navigation

- **Title Case** for all headings. No trailing punctuation or colons.
- **Don't skip levels.** `##` for major sections, `###` for subsections.
- **Auto-generated TOC shows two levels** by default — structure with that in mind.
- **Reasonably sized sections.** A one-sentence section should usually merge with a sibling; a ten-screen section should subdivide.
- **Page title** appears in the sidebar — keep it short enough not to wrap.

## Voice patterns across all modes

(See per-mode sections above for mode-specific voice.)

- **Short paragraphs.** Walls of prose are harder to scan than the same content broken up.
- **Plain English over jargon.** Define less-common terms on first use.
- **Lead with the answer.** Especially in how-tos: tell the reader what they'll do in the first paragraph, then deliver.
- **Consistent terminology.** Same concept, same name, every page. "Transaction group" / "txn group" / "batch" — pick one.
- **Consistent product names and capitalization.** `algokit` (lowercase command) vs. `AlgoKit` (product).

## Code examples

### Inline vs. RemoteCode

**Inline (triple-backtick) is appropriate when:**

- The snippet is fewer than 5 lines.
- It's illustrative, not something the reader will copy and run.
- The page demonstrates syntax (e.g., a TEAL opcode signature) rather than runnable code.

**`RemoteCode` is appropriate when:**

- More than a handful of lines.
- Something readers will copy, run, or follow along with.
- Same example shown across multiple pages (single source of truth).

Where examples live: library-focused examples in that library's source repo; cross-library examples in the dedicated devportal code examples repo. Whenever possible, leverage examples that already exist rather than duplicating.

### Substantive expectations

Mechanics aside, every example clears this bar:

- **Realistic data.** Real-shaped Algorand addresses, plausible asset IDs, sensible amounts. Never `foo`/`bar`/`example.com`/`yourAddressHere`.
- **Copy-paste runnable** given the prereqs the page states.
- **Show errors, not just success.** Document failure modes — exception types, error codes, response bodies. AI tools (and human developers) generate error handling from these.
- **Parity across languages.** Python and TypeScript versions of the same example should do the same thing. If they must diverge, explain why.
- **Progressive complexity.** Start minimal, then build up.
- **Idiomatic in each language.** Don't transliterate Python into TypeScript or vice versa.

### Inline code-block attributes

```shell showLineNumbers=false frame=none
pipx install algokit
```

Common attributes:

- `frame=none` — removes the default frame; use for short shell commands where the frame adds noise.
- `frame=terminal` — terminal-style frame for install/CLI sequences.
- `showLineNumbers=false` — hide line numbers (use for snippets under 10 lines).
- `title="..."` — title bar; use for snippets that benefit from a label (filename, what it does).
- `{1}` or `{1,3-5}` — highlights specific lines.
- `"word"` — highlights every occurrence of `word`.

Marking multiple distinct words requires the `Code` component with the `mark` attribute. See [Expressive Code docs](https://expressive-code.com/key-features/syntax-highlighting/) for the full list.

**Language tags:** Always specify a language. Use `shell` (not `bash`) for CLI commands — site convention. Conventional names elsewhere (`python`, `typescript`, `javascript`, `json`, `yaml`).

### RemoteCode setup

Add these imports immediately after the frontmatter:

```javascript
import RemoteCode from '/src/components/RemoteCode.astro';
import { Tabs, TabItem } from '@astrojs/starlight/components';
```

Only include the `Tabs`/`TabItem` import if the page actually uses tabs.

### Snippet markers in source files

Wrap the relevant lines in the source file with comment markers using `example: NAME`:

```javascript
// example: ENCODING
const b64Encoded = 'SGksIEknbSBkZWNvZGVkIGZyb20gYmFzZTY0';
const b64Decoded = Buffer.from(b64Encoded, 'base64').toString();
console.log(b64Encoded, b64Decoded);
// example: ENCODING
```

```python
# example: PAYMENT
@abimethod()
def payment(self) -> UInt64:
    result = itxn.Payment(amount=5000, receiver=Txn.sender, fee=0).submit()
    return result.amount
# example: PAYMENT
```

**Snippet names should be descriptive enough to identify from the name alone** — `PAYMENT_INNER_TXN`, `OPTIN_ASSET`, `ENCODING_BASE64`, not `EXAMPLE_1`. Names appear in URLs and props, are surfaced to AI tools, and make the source repo grep-able. Use `UPPER_SNAKE_CASE`. When the same logical example exists in multiple language source files, use the same snippet name across all of them.

### Using RemoteCode

```markup
<RemoteCode
  src='https://raw.githubusercontent.com/algorand-devrel/new-devportal-code-examples/main/projects/devportal-code-examples/smart_contracts/inner_transactions/contract.py'
  snippet='PAYMENT'
  lang='py'
  title='Payment Inner Transaction'
  frame='none'
/>
```

The same Expressive Code attributes work on `RemoteCode` as on inline code blocks.

### Multi-language examples with Tabs

```markup
<Tabs syncKey="lang">
  <TabItem label="Python" icon="seti:python">
    <RemoteCode src='...contract.py' snippet='PAYMENT' lang='py' title='Payment Inner Transaction' frame='none' />
  </TabItem>
  <TabItem label="TypeScript" icon="seti:typescript">
    <RemoteCode src='...contract.ts' snippet='PAYMENT' lang='ts' title='Payment Inner Transaction' frame='none' />
  </TabItem>
</Tabs>
```

**`syncKey="lang"` matters.** It makes the user's language choice persist across every Tabs block on the page. Without it, each Tabs block resets independently.

**Keep language versions in parity** — same operation, same inputs, same outputs, same error handling. A reader switching tabs should see equivalent code.

Don't use `Tabs` for single-language examples (e.g., TEAL-only).

### Style and density

- Use code blocks sparingly. Combine variants of the same command into one block with comments rather than many separate blocks.
- Don't repeat boilerplate (imports, setup) on every snippet. Show once, reference after.
- Lines ≤ 80 characters — horizontal scrolling is a readability killer.
- Inline comments only when genuinely clarifying. Don't comment the obvious.

## Links and references

- **Internal links** point to real pages. Verify after restructuring.
- **External links** are live and current.
- External resources not owned by Algorand Foundation or Algorand Technologies belong in an "Additional Resources" section at the bottom, not inline.
- **Cross-references** use the destination page's actual title ("Refer to the Getting Started guide"), not "click here" or "this page."

## Writing for both humans and AI

The site exposes content to AI tools (`llms.txt`, `llms-full.txt`, per-page `.md`). AI coding assistants are increasingly the consumer. Several things matter for both:

- **Frontmatter `description`** is the primary AI retrieval signal. Required; descriptive.
- **Self-contained pages.** Don't write paragraphs that only make sense after three other pages. Link out for context, don't assume it.
- **Explicit parameter descriptions.** A human can guess what `assetId` is; an AI agent generating code needs the type, format, constraints, required flag spelled out.
- **Clean markdown structure.** Headings reflect document structure, tables for tabular data, code blocks for code. AI parsers use these signals.
- **Descriptive snippet names** in `RemoteCode`.
- **Document errors and edge cases**, not just the happy path.

These aren't separate AI-only rules — they're the same rules that make docs better for humans, sharpened.

## Authoring workflow

1. **Identify the mode.** Tutorial, how-to, reference, or explanation. If the page is doing two, split it.
2. **Confirm the audience and section** within the mode (beginner tutorial vs. advanced how-to).
3. **Draft the structure first** — title, headings, what each section will cover — before prose. Catches organization problems early.
4. **Write the prose**, applying the mode-specific voice.
5. **Add code examples** if relevant; apply the substantive bar (realistic data, parity, errors).
6. **Set frontmatter** — `title`, `description` (required, descriptive), `sidebar.label` if needed.
7. **Self-review** against the checklist below.

## Review checklist

Walk these in order. The first two are the highest leverage.

### 0. Mode

- What mode is this page? If you can't tell, that's the finding.
- Is the page actually written as that mode, or is it mode-mixed?
- Anything off-mode that should be moved out (with a link) instead of inlined?

### 1. Frontmatter

- `title` is descriptive, brief, Title Case, doesn't wrap in sidebar.
- `description` is present, complete-sentence, present-tense, meaningful in isolation.
- `sidebar.label`, `sidebar.order`, prev/next overrides where needed.

### 2. Technical accuracy

- APIs, endpoints, commands, parameters correct against current versions.
- Code snippets actually run.
- Anything implicitly pinned to a stale version?

### 3. Voice and clarity (mode-aware)

Voice expectation depends on mode (see per-mode sections). Across all:

- Audience match — beginner vs. advanced level.
- Concise. Cut filler and hedges.
- Plain English; define less-common terms on first use.

Common mode-voice failures: reference pages that say "you can," tutorials in passive voice, how-tos with explanatory paragraphs between steps, subjective adjectives in reference.

### 4. Structure (mode-aware)

Structure expectation depends on mode (see per-mode sections). Across all:

- Heading hierarchy clear, doesn't skip levels.
- Title Case throughout.
- TOC reads as a coherent map of the page.
- Sections aren't absurdly short or absurdly long.
- Related topics grouped, not interleaved.

### 5. Completeness (mode-aware)

What "complete" means depends on mode:

- **Tutorial** — full path from prereqs to working result; no silent gaps.
- **How-to** — addresses the actual goal including realistic edge cases.
- **Reference** — every parameter has name/type/required/default/constraints/description; errors documented; realistic examples including error cases.
- **Explanation** — covers what matters for understanding.

### 6. Code examples

- Language specified; `shell` (not `bash`) for CLI.
- `frame=none` and `showLineNumbers=false` for snippets under 10 lines.
- Lines ≤ 80 characters.
- Substantive examples come from `RemoteCode` against a real source file.
- Multi-language wrapped in `Tabs` with `syncKey="lang"`; language versions in parity.
- Snippet names descriptive, `UPPER_SNAKE_CASE`.
- Realistic example data.
- Errors and edge cases documented for substantial examples.
- Code idiomatic in its language.

### 7. Consistency

- Terminology consistent across pages.
- Product names and capitalization correct (`algokit` vs. `AlgoKit`).
- Inline `code` for parameter names, paths, identifiers; code blocks for multi-line.

### 8. Links

- Internal links point to real pages.
- External links live and current.
- Non-Algorand external resources only in "Additional Resources," not inline.
- Cross-references use destination titles, not "click here."

### 9. AI/agent-readability

- `description` frontmatter present and meaningful.
- Page self-contained enough to be useful retrieved out of context.
- Parameters described explicitly, not contextually.
- Clean markdown structure (no custom layouts where standard markdown works).
- Errors and edge cases documented.

### Reporting findings

For each issue: **where** (section/quote), **what's wrong** (specific, mode-aware where it applies), **suggested fix** (the actual change).

Example:

> **Section: "Step 3: Configuring Your Network"** — This step is in a tutorial but spends two paragraphs listing every flag of `algokit network configure`. That's reference inside a tutorial. Recommend trimming to the one flag the tutorial uses, and linking to the CLI reference for the full list.

Vague feedback like "this section is unclear" isn't actionable. Push deeper: what specifically is unclear, and what would make it clear?

If a category genuinely doesn't apply (e.g., a pure conceptual explainer with no code), say so explicitly: "No code on this page; section 6 N/A."

## What not to surprise the user with

- Don't reorganize a page's structure as part of a small edit unless asked.
- Don't change terminology site-wide based on one page's review.
- Don't move code from inline to `RemoteCode` (or vice versa) without flagging it.
- Don't change a page's mode without flagging it — that's a structural change, not an edit.

These look small but have ripple effects.
