//@ts-expect-error, no types for Astro
import type { Badge } from '@astrojs/starlight/schemas/badge';
import type {
  LinkHTMLAttributes,
  //@ts-expect-error, no types for Astro
} from '@astro/starlight/schemas/sidebar';

export interface Link {
  type: 'link';
  label: string;
  href: string;
  isCurrent: boolean;
  badge: Badge | undefined;
  attrs: LinkHTMLAttributes;
}

export interface Group {
  type: 'group';
  label: string;
  entries: (Link | Group)[];
  collapsed: boolean;
  badge: Badge | undefined;
}
