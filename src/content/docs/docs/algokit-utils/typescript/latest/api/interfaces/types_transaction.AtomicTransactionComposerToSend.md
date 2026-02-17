---
title: AtomicTransactionComposerToSend
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / AtomicTransactionComposerToSend

[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).AtomicTransactionComposerToSend

An `AtomicTransactionComposer` with transactions to send.

## Hierarchy

- [`SendParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/)

  ↳ **`AtomicTransactionComposerToSend`**

## Table of contents

### Properties

- [additionalAtcContext](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.AtomicTransactionComposerToSend/#additionalatccontext)
- [atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.AtomicTransactionComposerToSend/#atc)
- [coverAppCallInnerTransactionFees](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.AtomicTransactionComposerToSend/#coverappcallinnertransactionfees)
- [maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.AtomicTransactionComposerToSend/#maxroundstowaitforconfirmation)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.AtomicTransactionComposerToSend/#populateappcallresources)
- [sendParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.AtomicTransactionComposerToSend/#sendparams)
- [suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.AtomicTransactionComposerToSend/#suppresslog)

## Properties

### additionalAtcContext

• `Optional` **additionalAtcContext**: [`AdditionalAtomicTransactionComposerContext`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.AdditionalAtomicTransactionComposerContext/)

Additional `AtomicTransactionComposer` context used when building the transaction group that is sent.
This additional context is used and must be supplied when coverAppCallInnerTransactionFees is set to true.

#### Defined in

[src/types/transaction.ts:167](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L167)

---

### atc

• **atc**: `AtomicTransactionComposer`

The `AtomicTransactionComposer` with transactions loaded to send

#### Defined in

[src/types/transaction.ts:157](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L157)

---

### coverAppCallInnerTransactionFees

• `Optional` **coverAppCallInnerTransactionFees**: `boolean`

Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

#### Inherited from

[SendParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/).[coverAppCallInnerTransactionFees](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/#coverappcallinnertransactionfees)

#### Defined in

[src/types/transaction.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L142)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The number of rounds to wait for confirmation. By default until the latest lastValid has past.

#### Inherited from

[SendParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/).[maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:136](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L136)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `Config.populateAppCallResources`.

#### Inherited from

[SendParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/).[populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:140](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L140)

---

### sendParams

• `Optional` **sendParams**: `Omit`\<[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/), `"fee"` \| `"maxFee"` \| `"skipSending"` \| `"atc"`\>

**`Deprecated`**

- set the parameters at the top level instead
  Any parameters to control the semantics of the send to the network

#### Defined in

[src/types/transaction.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L161)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress.

#### Inherited from

[SendParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/).[suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/#suppresslog)

#### Defined in

[src/types/transaction.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L138)
