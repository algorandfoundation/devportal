---
title: ApplicationCallComposeFields
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/README/) / ApplicationCallComposeFields

Defined in: [itxn-compose.ts:22](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L22)

## Extends

- [`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/)

## Properties

### accounts?

> `optional` **accounts**: readonly ([`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/))[]

Defined in: [itxn.ts:951](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L951)

Accounts listed in the ApplicationCall transaction

#### Param

Index of the account to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`accounts`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#accounts)

---

### appArgs?

> `optional` **appArgs**: readonly `unknown`[]

Defined in: [itxn.ts:946](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L946)

Arguments passed to the application in the ApplicationCall transaction

#### Param

Index of the arg to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`appArgs`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#appargs)

---

### appId?

> `optional` **appId**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Application/)

Defined in: [itxn.ts:907](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L907)

ApplicationID from ApplicationCall transaction

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`appId`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#appid)

---

### approvalProgram?

> `optional` **approvalProgram**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) \| readonly [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:936](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L936)

All approval program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`approvalProgram`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#approvalprogram)

---

### apps?

> `optional` **apps**: readonly ([`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Application/))[]

Defined in: [itxn.ts:961](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L961)

Foreign Apps listed in the ApplicationCall transaction

#### Param

Index of the application to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`apps`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#apps)

---

### assets?

> `optional` **assets**: readonly ([`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/))[]

Defined in: [itxn.ts:956](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L956)

Foreign Assets listed in the ApplicationCall transaction

#### Param

Index of the asset to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`assets`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#assets)

---

### clearStateProgram?

> `optional` **clearStateProgram**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) \| readonly [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:941](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L941)

All clear state program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`clearStateProgram`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#clearstateprogram)

---

### extraProgramPages?

> `optional` **extraProgramPages**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:931](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L931)

Number of additional pages for each of the application's approval and clear state program

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`extraProgramPages`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#extraprogrampages)

---

### fee?

> `optional` **fee**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:879](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L879)

microalgos

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`fee`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:883](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L883)

round number

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`firstValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:887](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L887)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`firstValidTime`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#firstvalidtime)

---

### globalNumBytes?

> `optional` **globalNumBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:919](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L919)

Number of global state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`globalNumBytes`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#globalnumbytes)

---

### globalNumUint?

> `optional` **globalNumUint**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:915](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L915)

Number of global state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`globalNumUint`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#globalnumuint)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:891](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L891)

round number

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`lastValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:899](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L899)

32 byte lease value

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`lease`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#lease)

---

### localNumBytes?

> `optional` **localNumBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:927](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L927)

Number of local state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`localNumBytes`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#localnumbytes)

---

### localNumUint?

> `optional` **localNumUint**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:923](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L923)

Number of local state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`localNumUint`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#localnumuint)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:895](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L895)

Any data up to 1024 bytes

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`note`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#note)

---

### onCompletion?

> `optional` **onCompletion**: [`OnCompleteAction`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/OnCompleteAction/)

Defined in: [itxn.ts:911](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L911)

ApplicationCall transaction on completion action

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`onCompletion`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#oncompletion)

---

### rejectVersion?

> `optional` **rejectVersion**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:965](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L965)

Application version for which the txn must reject

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`rejectVersion`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#rejectversion)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:903](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L903)

32 byte Sender's new AuthAddr

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`rekeyTo`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#rekeyto)

---

### sender?

> `optional` **sender**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:875](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L875)

32 byte address

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`sender`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#sender)

---

### type

> **type**: [`ApplicationCall`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/TransactionType/#applicationcall)

Defined in: [itxn-compose.ts:23](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L23)
