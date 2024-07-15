import { describe, test, beforeEach, afterEach } from '@jest/globals'
import { algoKitLogCaptureFixture } from './testing'

describe('MY MODULE', () => {
  const logs = algoKitLogCaptureFixture()
  beforeEach(logs.beforeEach)
  afterEach(logs.afterEach)

  test('MY TEST', async () => {
    // Test stuff!

    const capturedLogs = logs.testLogger.capturedLogs
    // do stuff with the logs
  })
})
