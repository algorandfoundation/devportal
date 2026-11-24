---
editUrl: false
next: false
prev: false
title: "CommonTransactionParams"
---

> **CommonTransactionParams** = `object`

Defined in: [src/types/composer.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L46)

Common parameters for defining a transaction.

## Properties

### extraFee?

> `optional` **extraFee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/composer.ts:70](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L70)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

***

### firstValidRound?

> `optional` **firstValidRound?**: `bigint`

Defined in: [src/types/composer.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L81)

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

***

### lastValidRound?

> `optional` **lastValidRound?**: `bigint`

Defined in: [src/types/composer.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L83)

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

***

### lease?

> `optional` **lease?**: `Uint8Array` \| `string`

Defined in: [src/types/composer.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L66)

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

***

### maxFee?

> `optional` **maxFee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/composer.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L72)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

***

### note?

> `optional` **note?**: `Uint8Array` \| `string`

Defined in: [src/types/composer.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L60)

Note to attach to the transaction. Max of 1000 bytes.

***

### rekeyTo?

> `optional` **rekeyTo?**: `string` \| `Address`

Defined in: [src/types/composer.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L58)

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

***

### sender

> **sender**: `string` \| `Address`

Defined in: [src/types/composer.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L48)

The address of the account sending the transaction.

***

### signer?

> `optional` **signer?**: `algosdk.TransactionSigner` \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/)

Defined in: [src/types/composer.ts:53](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L53)

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

***

### staticFee?

> `optional` **staticFee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/composer.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L68)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

***

### validityWindow?

> `optional` **validityWindow?**: `number` \| `bigint`

Defined in: [src/types/composer.ts:74](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L74)

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.
