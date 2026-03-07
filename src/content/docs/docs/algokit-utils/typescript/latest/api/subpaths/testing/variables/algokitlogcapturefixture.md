---
editUrl: false
next: false
prev: false
title: "algoKitLogCaptureFixture"
---

> `const` **algoKitLogCaptureFixture**: () => [`AlgoKitLogCaptureFixture`](/docs/algokit-utils/typescript/latest/api/subpaths/testing/interfaces/algokitlogcapturefixture/)

Defined in: [src/testing/fixtures/algokit-log-capture-fixture.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/fixtures/algokit-log-capture-fixture.ts#L22)

Creates a test fixture for capturing AlgoKit logs.

## Returns

[`AlgoKitLogCaptureFixture`](/docs/algokit-utils/typescript/latest/api/subpaths/testing/interfaces/algokitlogcapturefixture/)

The fixture

## Example

```typescript
const logs = algoKitLogCaptureFixture()

beforeEach(logs.beforeEach)
afterEach(logs.afterEach)

test('My test', () => {
    const capturedLogs = logs.testLogger.capturedLogs
})
```
