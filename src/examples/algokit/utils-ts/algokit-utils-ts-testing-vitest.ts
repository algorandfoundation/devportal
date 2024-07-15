import { describe, test, beforeEach } from 'vitest'
import { algorandFixture } from './testing'

describe('MY MODULE', () => {
  const fixture = algorandFixture()
  beforeEach(fixture.beforeEach, 10_000)

  test('MY TEST', async () => {
    const { algod, testAccount /* ... */ } = fixture.context

    // Test stuff!
  })
})