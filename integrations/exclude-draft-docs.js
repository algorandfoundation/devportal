export default function excludeDraftDocsIntegration() {
  return {
    name: 'exclude-draft-docs',

    // This hook runs before Astro starts building pages
    hooks: {
      'astro:build:setup': ({ pages }) => {
        for (const [pagePath, pageData] of pages) {
          // If our remark plugin set `excluded = true`, remove this page from the build
          if (pageData.moduleExports?.astro?.excluded === true) {
            pages.delete(pagePath);
          }
        }
      },
    },
  };
}
