export default function markDrafts() {
  return function transformer(_tree, file) {
    // If you’re using Astro, the frontmatter is exposed at:
    const frontmatter = file.data.astro?.frontmatter || {};

    // If the "draft" property is true, store a marker that we can read later.
    if (frontmatter.draft === true) {
      // We'll set a custom property "excluded" to true.
      file.data.astro.excluded = true;
    }
  };
}
