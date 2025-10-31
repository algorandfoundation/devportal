---
title: ApplicationCallInnerTxn
type: interface
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [itxn](/reference/algorand-typescript/api/itxn/readme/) / [itxn](/reference/algorand-typescript/api/itxn/namespaces/itxn/readme/) / ApplicationCallInnerTxn

Defined in: [itxn.ts:417](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L417)

An inner transaction of type 'appl'

## Properties

### appId

> `readonly` **appId**: [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

Defined in: [itxn.ts:472](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L472)

ApplicationID from ApplicationCall transaction

---

### approvalProgram

> `readonly` **approvalProgram**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:488](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L488)

The first page of the Approval program

---

### clearStateProgram

> `readonly` **clearStateProgram**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:492](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L492)

The first page of the Clear State program

---

### createdApp

> `readonly` **createdApp**: [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

Defined in: [itxn.ts:571](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L571)

The id of the created application

---

### extraProgramPages

> `readonly` **extraProgramPages**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:520](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L520)

Number of additional pages for each of the application's approval and clear state program

---

### fee

> `readonly` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:427](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L427)

microalgos

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:431](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L431)

round number

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:435](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L435)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### globalNumBytes

> `readonly` **globalNumBytes**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:508](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L508)

Number of global state byteslices this application makes use of.

---

### globalNumUint

> `readonly` **globalNumUint**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:504](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L504)

Number of global state integers this application makes use of.

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:460](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L460)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

---

### lastLog

> `readonly` **lastLog**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:524](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L524)

The last message emitted. Empty bytes if none were emitted. App mode only

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:439](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L439)

round number

---

### lease

> `readonly` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:447](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L447)

32 byte lease value

---

### localNumBytes

> `readonly` **localNumBytes**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:516](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L516)

Number of local state byteslices this application makes use of.

---

### localNumUint

> `readonly` **localNumUint**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:512](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L512)

Number of local state integers this application makes use of.

---

### note

> `readonly` **note**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:443](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L443)

Any data up to 1024 bytes

---

### numAccounts

> `readonly` **numAccounts**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:484](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L484)

Number of ApplicationArgs

---

### numAppArgs

> `readonly` **numAppArgs**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:480](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L480)

Number of ApplicationArgs

---

### numApprovalProgramPages

> `readonly` **numApprovalProgramPages**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:533](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L533)

Number of Approval Program pages

---

### numApps

> `readonly` **numApps**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:500](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L500)

Number of Applications

---

### numAssets

> `readonly` **numAssets**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:496](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L496)

Number of Assets

---

### numClearStateProgramPages

> `readonly` **numClearStateProgramPages**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:542](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L542)

Number of Clear State Program pages

---

### numLogs

> `readonly` **numLogs**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:575](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L575)

Number of logs

---

### onCompletion

> `readonly` **onCompletion**: [`OnCompleteAction`](/reference/algorand-typescript/api/index/enumerations/oncompleteaction/)

Defined in: [itxn.ts:476](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L476)

ApplicationCall transaction on completion action

---

### rejectVersion

> `readonly` **rejectVersion**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:579](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L579)

Application version for which the txn must reject

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:468](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L468)

32 byte Sender's new AuthAddr

---

### sender

> `readonly` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:423](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L423)

32 byte address

---

### txnId

> `readonly` **txnId**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:464](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L464)

The computed ID for this transaction. 32 bytes.

---

### type

> `readonly` **type**: [`ApplicationCall`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#applicationcall)

Defined in: [itxn.ts:455](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L455)

Transaction type

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:451](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L451)

Transaction type as bytes

## Methods

### accounts()

> **accounts**(`index`): [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:557](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L557)

Accounts listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Index of the account to get

#### Returns

[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

---

### appArgs()

> **appArgs**(`index`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:552](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L552)

Arguments passed to the application in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Index of the arg to get

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

---

### approvalProgramPages()

> **approvalProgramPages**(`index`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:538](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L538)

All approval program pages

#### Parameters

##### index

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Index of the page to get

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

---

### apps()

> **apps**(`index`): [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

Defined in: [itxn.ts:567](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L567)

Foreign Apps listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Index of the application to get

#### Returns

[`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

---

### assets()

> **assets**(`index`): [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:562](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L562)

Foreign Assets listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Index of the asset to get

#### Returns

[`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

---

### clearStateProgramPages()

> **clearStateProgramPages**(`index`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:547](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L547)

All clear state program pages

#### Parameters

##### index

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Index of the page to get

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

---

### logs()

> **logs**(`index`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:529](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L529)

Read application logs

#### Parameters

##### index

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Index of the log to get

#### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)
