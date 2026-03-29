---
name: astro-coding
description: Provides Astro/Starlight implementation patterns, best practices, and critical rules with tiered context loading
---

# astro-coding Skill

Smart, context-aware implementation patterns for Astro and Starlight development. Provides the knowledge needed to write high-quality, standards-compliant Astro code.

## Purpose

The astro-coding skill is a **knowledge provider** that supplies Astro-specific coding patterns, critical rules, and best practices. It uses a tiered loading strategy to minimize token usage while ensuring all critical rules are always available.

## Tiered Loading Strategy

### Tier 1: Critical Rules (ALWAYS LOADED - ~100 tokens)
The non-negotiable rules that prevent breaking errors. Loaded for every Astro/Starlight task.

**Source**: `${CLAUDE_PLUGIN_ROOT}/knowledge-base/critical-rules.md`

**Contains**:
1. File extensions in imports (`.astro`, `.ts`, `.js`)
2. Correct module prefixes (`astro:content` not `astro/content`)
3. Use `class` not `className` in .astro files
4. Async operations in frontmatter only
5. Never expose `SECRET_*` client-side
6. Type all component Props interfaces
7. Define `getStaticPaths()` for dynamic routes
8. Don't access `Astro.params` inside `getStaticPaths()`
9. Use proper collection types (`CollectionEntry<'name'>`)
10. Validate XSS risk with `set:html`

### Tier 2: Common Patterns (CONTEXT-LOADED - ~400 tokens)
Pattern-specific knowledge loaded based on task type detection.

**Sources**:
- `${CLAUDE_PLUGIN_ROOT}/knowledge-base/astro-patterns.md` - Core Astro patterns
- `${CLAUDE_PLUGIN_ROOT}/knowledge-base/error-catalog.md` - 100+ error patterns indexed by symptom
- `${CLAUDE_PLUGIN_ROOT}/knowledge-base/starlight-guide.md` - Starlight-specific patterns

**Load based on keywords**:
- **"component"** → Component patterns, TypeScript patterns
- **"page" or "route"** → Routing patterns, dynamic routes, `getStaticPaths`
- **"collection" or "content"** → Content collections, schemas, queries
- **"config" or "integration"** → Configuration patterns
- **"starlight"** → Starlight patterns, sidebar, components
- **"error" or "fix" or "debug"** → Error catalog for diagnostic help

### Tier 3: Deep Dive (ON-DEMAND - ~800 tokens)
Comprehensive references for complex integrations and advanced features.

**Source**: `${CLAUDE_PLUGIN_ROOT}/knowledge-base/deep-dive/`

**Files**:
- `integrations.md` - External data integrations and custom loaders
- `content-collections-reference.md` - Complete collections API
- `content-loader-api.md` - Advanced loader patterns
- `external-data-integration.md` - Multi-source content systems
- `routing-pages-reference.md` - Advanced routing patterns
- `starlight-specific.md` - Deep Starlight customization

**Load for**:
- Custom content loaders
- External API integrations
- Complex multi-source architectures
- Advanced routing strategies
- Deep Starlight customization

## Critical Rules Reference

**These rules are ALWAYS enforced, loaded from Tier 1:**

### 1. File Extensions Required ✅
```typescript
// ✅ CORRECT
import Header from './Header.astro';
import { formatDate } from '../utils/dates.ts';

// ❌ WRONG - Build error
import Header from './Header';
```

### 2. Correct Module Prefixes ✅
```typescript
// ✅ CORRECT - Use colon
import { getCollection } from 'astro:content';

// ❌ WRONG - Module not found
import { getCollection } from 'astro/content';
```

### 3. Use `class` Not `className` ✅
```astro
<!-- ✅ CORRECT in .astro files -->
<div class="container">

<!-- ❌ WRONG - React/JSX syntax -->
<div className="container">
```

### 4. Await in Frontmatter Only ✅
```astro
---
// ✅ CORRECT
const posts = await getCollection('blog');
---
<ul>{posts.map(p => <li>{p.data.title}</li>)}</ul>

<!-- ❌ WRONG - Await in template -->
<ul>{(await getCollection('blog')).map(...)}</ul>
```

### 5. Never Expose Secrets ✅
```typescript
// ✅ CORRECT - Server-side only
const apiKey = import.meta.env.SECRET_API_KEY;

// ❌ WRONG - Exposed to client
<script>
  const key = import.meta.env.SECRET_API_KEY; // ❌ NEVER
</script>
```

## Quick Reference Templates

### Basic Component
```astro
---
interface Props {
  title: string;
  items: string[];
  variant?: 'primary' | 'secondary';
}

const { title, items, variant = 'primary' } = Astro.props;
---

<div class={`component component--${variant}`}>
  <h2>{title}</h2>
  <ul>
    {items.map(item => <li>{item}</li>)}
  </ul>
</div>

<style>
  .component {
    padding: 1rem;
  }
  .component--primary {
    background: var(--color-primary);
  }
</style>
```

### Dynamic Route
```astro
---
// File: src/pages/blog/[slug].astro
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

interface Props {
  post: CollectionEntry<'blog'>;
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<article>
  <h1>{post.data.title}</h1>
  <time datetime={post.data.publishDate.toISOString()}>
    {post.data.publishDate.toLocaleDateString()}
  </time>
  <Content />
</article>
```

### Content Collection
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

## Task-Based Loading Examples

### Simple Component Task
```
Task: "Create a Card component"
Load:
  - Tier 1: Critical rules (always)
  - Tier 2: Component patterns from astro-patterns.md
Tokens: ~300 total
```

### Route with Collections
```
Task: "Add blog with pagination"
Load:
  - Tier 1: Critical rules (always)
  - Tier 2: Routing patterns + Collection patterns + Starlight guide
Tokens: ~600 total
```

### Complex Integration
```
Task: "Integrate GitBook API with custom loader"
Load:
  - Tier 1: Critical rules (always)
  - Tier 2: Collection patterns + error catalog
  - Tier 3: integrations.md + external-data-integration.md
Tokens: ~1200 total
```

### Bug Fix
```
Task: "Fix TypeScript errors in components"
Load:
  - Tier 1: Critical rules (always)
  - Tier 2: Error catalog + TypeScript patterns
Tokens: ~400 total
```

## Pattern Detection Keywords

The skill detects keywords to load appropriate patterns:

| Keywords | Patterns Loaded |
|----------|-----------------|
| component, card, button, layout | Component patterns, Props typing |
| page, route, [slug], dynamic | Routing patterns, getStaticPaths |
| collection, content, blog, docs | Collection patterns, schemas |
| config, integration, tailwind | Configuration patterns |
| starlight, sidebar, nav | Starlight patterns |
| error, fix, debug, failing | Error catalog |
| api, fetch, external, loader | Integration patterns (Tier 3) |
| authentication, auth, login | Security patterns + integrations |

## Knowledge Base Structure

```
knowledge-base/
├── critical-rules.md          # Tier 1: Always loaded
├── astro-patterns.md          # Tier 2: Core patterns
├── error-catalog.md           # Tier 2: 100+ errors indexed
├── starlight-guide.md         # Tier 2: Starlight specifics
└── deep-dive/                 # Tier 3: On-demand
    ├── integrations.md
    ├── content-collections-reference.md
    ├── content-loader-api.md
    ├── external-data-integration.md
    ├── routing-pages-reference.md
    └── starlight-specific.md
```

## Token Optimization Guidelines

**Minimal loading** (~100 tokens):
- Only critical rules
- For trivial tasks (<10 lines, 1 file)
- Example: Fix typo, update text

**Standard loading** (~400 tokens):
- Critical rules + relevant pattern section
- For typical tasks (20-100 lines, 2-5 files)
- Example: Create component, add route

**Full loading** (~1200 tokens):
- Critical rules + multiple patterns + deep dive references
- For complex tasks (>100 lines, >5 files, integrations)
- Example: Custom loaders, multi-source systems, refactoring

## Error Catalog Usage

The error catalog indexes 100+ error patterns by symptom for quick diagnosis:

**Example lookup**:
```
Symptom: "Cannot find module './Header'"
→ Error catalog points to: Missing file extension
→ Solution: Add .astro extension to import
```

**Categories in catalog**:
- Import errors
- Component errors
- Routing errors
- Collection errors
- Starlight errors
- Configuration errors
- TypeScript errors
- Runtime errors

## Integration with Commands

- **`/dev`** - Uses this skill for all implementation tasks
- **`/design`** - References architecture patterns from Tier 2/3
- **`/lookup`** - Uses Tier 2 patterns for quick API reference

## Best Practices

**When writing code with this skill**:
1. ✅ Always check critical rules first
2. ✅ Load only relevant pattern sections
3. ✅ Use error catalog for debugging
4. ✅ Type all Props interfaces
5. ✅ Include error handling for async operations
6. ✅ Consider accessibility (ARIA labels, semantic HTML)
7. ✅ Optimize performance (client directives, image handling)

**Validation checklist** (from critical rules):
- [ ] All imports have file extensions
- [ ] Using `astro:content` not `astro/content`
- [ ] Using `class` not `className`
- [ ] All `await` in frontmatter, not templates
- [ ] No `SECRET_*` in `<script>` tags
- [ ] All Props have TypeScript interfaces
- [ ] Dynamic routes have `getStaticPaths()`

## Version

**Skill Version**: 3.0 (Tiered Loading)
**Plugin Version**: v0.4.0+
**Last Updated**: 2025-11-05

This skill provides comprehensive Astro/Starlight knowledge with intelligent, token-efficient loading based on task requirements.
