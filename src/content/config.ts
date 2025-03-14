import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        opcodes: z.array(z.string()).optional(),
        contentType: z
          .enum(['tutorial', 'how-to', 'guide', 'reference'])
          .optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  }),
};
