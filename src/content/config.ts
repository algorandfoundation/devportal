import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // // Add a default value to the built-in `banner` field.
        // banner: z.object({ content: z.string() }).default({
        //   content:
        //     'This new developer portal is under construction. For complete documentation, please refer to the <a href="https://developer.algorand.org/docs/" target="_blank" rel="noopener">old developer portal</a>.',
        // }),
        opcodes: z.array(z.string()).optional(),
        contentType: z
          .enum(['tutorial', 'how-to', 'guide', 'reference'])
          .optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  }),
};
