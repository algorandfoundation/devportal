---
title: ApplicationCallTxn
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [gtxn](/docs/algorand-typescript/typescript/latest/api/gtxn/README/) / [gtxn](/docs/algorand-typescript/typescript/latest/api/gtxn/namespaces/gtxn/README/) / ApplicationCallTxn

Defined in: [gtxn.ts:637](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L637)

A group transaction of type 'appl'

## Properties

### appId

> `readonly` **appId**: [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Application/)

Defined in: [gtxn.ts:472](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L472)

ApplicationID from ApplicationCall transaction

---

### approvalProgram

> `readonly` **approvalProgram**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:488](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L488)

The first page of the Approval program

---

### clearStateProgram

> `readonly` **clearStateProgram**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:492](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L492)

The first page of the Clear State program

---

### createdApp

> `readonly` **createdApp**: [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Application/)

Defined in: [gtxn.ts:571](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L571)

The id of the created application

---

### extraProgramPages

> `readonly` **extraProgramPages**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:520](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L520)

Number of additional pages for each of the application's approval and clear state program

---

### fee

> `readonly` **fee**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:427](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L427)

microalgos

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:431](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L431)

round number

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:435](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L435)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### globalNumBytes

> `readonly` **globalNumBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:508](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L508)

Number of global state byteslices this application makes use of.

---

### globalNumUint

> `readonly` **globalNumUint**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:504](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L504)

Number of global state integers this application makes use of.

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:460](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L460)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

---

### lastLog

> `readonly` **lastLog**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:524](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L524)

The last message emitted. Empty bytes if none were emitted. App mode only

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:439](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L439)

round number

---

### lease

> `readonly` **lease**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:447](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L447)

32 byte lease value

---

### localNumBytes

> `readonly` **localNumBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:516](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L516)

Number of local state byteslices this application makes use of.

---

### localNumUint

> `readonly` **localNumUint**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:512](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L512)

Number of local state integers this application makes use of.

---

### note

> `readonly` **note**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:443](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L443)

Any data up to 1024 bytes

---

### numAccounts

> `readonly` **numAccounts**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:484](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L484)

Number of ApplicationArgs

---

### numAppArgs

> `readonly` **numAppArgs**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:480](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L480)

Number of ApplicationArgs

---

### numApprovalProgramPages

> `readonly` **numApprovalProgramPages**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:533](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L533)

Number of Approval Program pages

---

### numApps

> `readonly` **numApps**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:500](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L500)

Number of Applications

---

### numAssets

> `readonly` **numAssets**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:496](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L496)

Number of Assets

---

### numClearStateProgramPages

> `readonly` **numClearStateProgramPages**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:542](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L542)

Number of Clear State Program pages

---

### numLogs

> `readonly` **numLogs**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:575](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L575)

Number of logs

---

### onCompletion

> `readonly` **onCompletion**: [`OnCompleteAction`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/OnCompleteAction/)

Defined in: [gtxn.ts:476](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L476)

ApplicationCall transaction on completion action

---

### rejectVersion

> `readonly` **rejectVersion**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:579](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L579)

Application version for which the txn must reject

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/)

Defined in: [gtxn.ts:468](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L468)

32 byte Sender's new AuthAddr

---

### sender

> `readonly` **sender**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/)

Defined in: [gtxn.ts:423](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L423)

32 byte address

---

### txnId

> `readonly` **txnId**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:464](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L464)

The computed ID for this transaction. 32 bytes.

---

### type

> `readonly` **type**: [`ApplicationCall`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/TransactionType/#applicationcall)

Defined in: [gtxn.ts:455](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L455)

Transaction type

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:451](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L451)

Transaction type as bytes

## Methods

### accounts()

> **accounts**(`index`): [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/)

Defined in: [gtxn.ts:557](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L557)

Accounts listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Index of the account to get

#### Returns

[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/)

---

### appArgs()

> **appArgs**(`index`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:552](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L552)

Arguments passed to the application in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Index of the arg to get

#### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

---

### approvalProgramPages()

> **approvalProgramPages**(`index`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:538](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L538)

All approval program pages

#### Parameters

##### index

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Index of the page to get

#### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

---

### apps()

> **apps**(`index`): [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Application/)

Defined in: [gtxn.ts:567](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L567)

Foreign Apps listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Index of the application to get

#### Returns

[`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Application/)

---

### assets()

> **assets**(`index`): [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/)

Defined in: [gtxn.ts:562](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L562)

Foreign Assets listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Index of the asset to get

#### Returns

[`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/)

---

### clearStateProgramPages()

> **clearStateProgramPages**(`index`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:547](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L547)

All clear state program pages

#### Parameters

##### index

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Index of the page to get

#### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

---

### logs()

> **logs**(`index`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:529](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L529)

Read application logs

#### Parameters

##### index

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Index of the log to get

#### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)
