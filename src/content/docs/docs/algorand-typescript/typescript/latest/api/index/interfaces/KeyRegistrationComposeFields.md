---
title: KeyRegistrationComposeFields
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/README/) / KeyRegistrationComposeFields

Defined in: [itxn-compose.ts:10](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L10)

## Extends

- [`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/)

## Properties

### fee?

> `optional` **fee**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:635](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L635)

microalgos

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`fee`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:639](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L639)

round number

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`firstValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:643](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L643)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`firstValidTime`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#firstvalidtime)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:647](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L647)

round number

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`lastValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:655](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L655)

32 byte lease value

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`lease`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#lease)

---

### nonparticipation?

> `optional` **nonparticipation**: `boolean`

Defined in: [itxn.ts:683](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L683)

Marks an account nonparticipating for rewards

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`nonparticipation`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#nonparticipation)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:651](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L651)

Any data up to 1024 bytes

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`note`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#note)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:659](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L659)

32 byte Sender's new AuthAddr

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`rekeyTo`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#rekeyto)

---

### selectionKey?

> `optional` **selectionKey**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:667](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L667)

32 byte address

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`selectionKey`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#selectionkey)

---

### sender?

> `optional` **sender**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:631](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L631)

32 byte address

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`sender`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#sender)

---

### stateProofKey?

> `optional` **stateProofKey**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`64`\>

Defined in: [itxn.ts:687](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L687)

64 byte state proof public key

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`stateProofKey`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#stateproofkey)

---

### type

> **type**: [`KeyRegistration`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/TransactionType/#keyregistration)

Defined in: [itxn-compose.ts:11](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L11)

---

### voteFirst?

> `optional` **voteFirst**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:671](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L671)

The first round that the participation key is valid.

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`voteFirst`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#votefirst)

---

### voteKey?

> `optional` **voteKey**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:663](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L663)

32 byte address

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`voteKey`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#votekey)

---

### voteKeyDilution?

> `optional` **voteKeyDilution**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:679](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L679)

Dilution for the 2-level participation key

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`voteKeyDilution`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#votekeydilution)

---

### voteLast?

> `optional` **voteLast**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:675](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L675)

The last round that the participation key is valid.

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`voteLast`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#votelast)
