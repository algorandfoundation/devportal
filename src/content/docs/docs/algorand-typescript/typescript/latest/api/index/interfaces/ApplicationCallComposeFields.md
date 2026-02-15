---
title: ApplicationCallComposeFields
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/readme/) / ApplicationCallComposeFields

Defined in: [itxn-compose.ts:22](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L22)

## Extends

- [`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/)

## Properties

### accounts?

> `optional` **accounts**: readonly ([`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/))[]

Defined in: [itxn.ts:951](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L951)

Accounts listed in the ApplicationCall transaction

#### Param

Index of the account to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`accounts`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#accounts)

---

### appArgs?

> `optional` **appArgs**: readonly `unknown`[]

Defined in: [itxn.ts:946](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L946)

Arguments passed to the application in the ApplicationCall transaction

#### Param

Index of the arg to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`appArgs`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#appargs)

---

### appId?

> `optional` **appId**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/)

Defined in: [itxn.ts:907](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L907)

ApplicationID from ApplicationCall transaction

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`appId`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#appid)

---

### approvalProgram?

> `optional` **approvalProgram**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) \| readonly [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:936](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L936)

All approval program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`approvalProgram`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#approvalprogram)

---

### apps?

> `optional` **apps**: readonly ([`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/application/))[]

Defined in: [itxn.ts:961](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L961)

Foreign Apps listed in the ApplicationCall transaction

#### Param

Index of the application to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`apps`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#apps)

---

### assets?

> `optional` **assets**: readonly ([`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/asset/))[]

Defined in: [itxn.ts:956](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L956)

Foreign Assets listed in the ApplicationCall transaction

#### Param

Index of the asset to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`assets`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#assets)

---

### clearStateProgram?

> `optional` **clearStateProgram**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) \| readonly [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:941](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L941)

All clear state program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`clearStateProgram`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#clearstateprogram)

---

### extraProgramPages?

> `optional` **extraProgramPages**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:931](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L931)

Number of additional pages for each of the application's approval and clear state program

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`extraProgramPages`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#extraprogrampages)

---

### fee?

> `optional` **fee**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:879](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L879)

microalgos

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`fee`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:883](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L883)

round number

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`firstValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:887](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L887)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`firstValidTime`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#firstvalidtime)

---

### globalNumBytes?

> `optional` **globalNumBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:919](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L919)

Number of global state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`globalNumBytes`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#globalnumbytes)

---

### globalNumUint?

> `optional` **globalNumUint**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:915](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L915)

Number of global state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`globalNumUint`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#globalnumuint)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:891](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L891)

round number

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`lastValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:899](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L899)

32 byte lease value

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`lease`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#lease)

---

### localNumBytes?

> `optional` **localNumBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:927](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L927)

Number of local state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`localNumBytes`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#localnumbytes)

---

### localNumUint?

> `optional` **localNumUint**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:923](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L923)

Number of local state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`localNumUint`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#localnumuint)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:895](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L895)

Any data up to 1024 bytes

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`note`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#note)

---

### onCompletion?

> `optional` **onCompletion**: [`OnCompleteAction`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/oncompleteaction/)

Defined in: [itxn.ts:911](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L911)

ApplicationCall transaction on completion action

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`onCompletion`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#oncompletion)

---

### rejectVersion?

> `optional` **rejectVersion**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:965](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L965)

Application version for which the txn must reject

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`rejectVersion`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#rejectversion)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:903](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L903)

32 byte Sender's new AuthAddr

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`rekeyTo`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#rekeyto)

---

### sender?

> `optional` **sender**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:875](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L875)

32 byte address

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`sender`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#sender)

---

### type

> **type**: [`ApplicationCall`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/transactiontype/#applicationcall)

Defined in: [itxn-compose.ts:23](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L23)
