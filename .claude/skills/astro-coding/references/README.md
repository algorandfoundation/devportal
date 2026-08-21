# Astro Coding Skill References

Quick reference materials for the astro-coding skill.

## Contents

This directory contains:
- Quick reference cards for common patterns
- Component templates
- Code snippets

## Main Knowledge Base

For comprehensive documentation, see:
`${CLAUDE_PLUGIN_ROOT}/knowledge-base/`

## Quick Links

### Most Common Patterns

**Component Template**:
```typescript
---
import type { ComponentProps } from 'astro/types';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<div class="container">
  <h1>{title}</h1>
</div>
```

**Dynamic Route**:
```typescript
---
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('blog');
  return entries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}

const { entry } = Astro.props;
---
```

**Content Collection Query**:
```typescript
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog', ({ data }) => {
  return data.draft !== true;
});

const sorted = posts.sort((a, b) =>
  b.data.date.valueOf() - a.data.date.valueOf()
);
---
```

## Critical Rules Checklist

- [ ] All imports have file extensions (.astro, .ts, .tsx)
- [ ] Use `astro:content` not `astro/content`
- [ ] Use `class` not `className`
- [ ] No `await` in template sections
- [ ] Collections are sorted when order matters
- [ ] Props are properly typed
- [ ] Error handling is in place
