// Sets each opcode heading's id on the AVM opcodes page from its section's
// `data-anchor` (written by scripts/generate-opcode-list.ts). MDX cannot put
// an id on a Markdown heading. Runs before Starlight's heading ids, which keep
// an id that is already set.
const OPCODES_PAGE = /[\\/]reference[\\/]algorand-teal[\\/]opcodes\.mdx$/;

export default function rehypeOpcodeAnchorIds() {
  return (tree, file) => {
    if (!OPCODES_PAGE.test(file.path ?? '')) return;
    for (const node of tree.children) {
      if (node.type !== 'mdxJsxFlowElement') continue;
      const classes = node.attributes?.find(a => a.name === 'class')?.value;
      if (typeof classes !== 'string' || !classes.split(/\s+/).includes('opcode-section')) continue;
      const anchor = node.attributes?.find(a => a.name === 'data-anchor')?.value;
      const heading = node.children?.find(c => c.tagName === 'h3');
      // Fail the build rather than silently lose the ids if the template changes.
      if (!anchor || !heading) throw new Error(`opcode section without anchor or h3: ${anchor}`);
      heading.properties.id = anchor;
    }
  };
}
