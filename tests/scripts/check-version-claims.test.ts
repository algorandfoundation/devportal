import { describe, expect, it } from 'vitest';
import {
  compareWithBaseline,
  scanContent,
} from '../../scripts/check-version-claims.js';

const rulesFor = (line: string) =>
  scanContent('page.mdx', line).map(f => f.rule);

describe('scanContent', () => {
  it.each([
    ['| Tool | Current Version |', 'current-version'],
    ['The latest version is 9.2.0.', 'current-version'],
    ['the last blocks (currently 1000) are kept', 'currently-number'],
    ['The minimum fee is currently 1000 microAlgos', 'currently-number'],
    ['Sufficient as of October 2022.', 'dated-claim'],
    ['FIPS 206 is in draft at the time of writing.', 'dated-claim'],
    [
      'See [v5.0.0](https://github.com/algorand/go-algorand/releases/tag/v5.0.0-stable).',
      'pinned-release-link',
    ],
    [
      '[code](https://github.com/algorandfoundation/algokit-utils-ts/blob/40be39f6aa/docs/index.md)',
      'pinned-commit-link',
    ],
    [
      'https://raw.githubusercontent.com/algorand/go-algorand/ad578576ab5f5bfe58a590164903617ecef379e4/daemon/kmd/api/swagger.json',
      'pinned-commit-link',
    ],
  ])('flags %s', (line, rule) => {
    expect(rulesFor(line)).toContain(rule);
  });

  it.each([
    'Box resizing was introduced in AVM v13.',
    'As of go-algorand 3.4.2 the node no longer needs this flag.',
    'See the [releases page](https://github.com/algorand/go-algorand/releases/latest).',
    '[config](https://github.com/algorand/go-algorand/blob/rel/stable/config/consensus.go)',
    'Earlier versions of the template used a different layout.',
    'NodeKit does not currently support this option.',
    'Link to a third party: https://github.com/someone/else/releases/tag/v1.0.0',
  ])('does not flag %s', line => {
    expect(rulesFor(line)).toEqual([]);
  });

  it('reports the line number and normalised text', () => {
    const [finding] = scanContent('a.mdx', 'intro\n   The   latest version is 2.\n');
    expect(finding).toMatchObject({
      file: 'a.mdx',
      line: 2,
      rule: 'current-version',
      text: 'The latest version is 2.',
    });
  });

  it('honours an opt-out marker on the same line or the line above', () => {
    expect(
      rulesFor('The latest version is 2. {/* version-claim-ok: example */}'),
    ).toEqual([]);
    expect(
      rulesFor('<!-- version-claim-ok: historical -->\nThe latest version is 2.'),
    ).toEqual([]);
    // ...but not two lines above
    expect(
      rulesFor('<!-- version-claim-ok -->\n\nThe latest version is 2.'),
    ).toEqual(['current-version']);
  });
});

describe('compareWithBaseline', () => {
  const claim = { file: 'a.mdx', rule: 'current-version', text: 'The latest version is 2.' };

  it('accepts a baselined claim wherever it moves in the file', () => {
    const { fresh, resolved } = compareWithBaseline([{ ...claim, line: 40 }], [claim]);
    expect(fresh).toEqual([]);
    expect(resolved).toEqual([]);
  });

  it('reports a claim that is not in the baseline', () => {
    const { fresh } = compareWithBaseline([{ ...claim, line: 3 }], []);
    expect(fresh).toHaveLength(1);
  });

  it('reports a second copy of a claim baselined only once', () => {
    const { fresh } = compareWithBaseline(
      [{ ...claim, line: 3 }, { ...claim, line: 9 }],
      [claim],
    );
    expect(fresh).toEqual([{ ...claim, line: 9 }]);
  });

  it('reports baseline entries that no longer match anything', () => {
    const { fresh, resolved } = compareWithBaseline([], [claim]);
    expect(fresh).toEqual([]);
    expect(resolved).toEqual([claim]);
  });
});
