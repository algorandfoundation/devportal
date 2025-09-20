---
title: FundAppAccountParams
slug: reference/algokit-utils-ts/api/interfaces/types_app_clientfundappaccountparams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / FundAppAccountParams

[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).FundAppAccountParams

Parameters for funding an app account

## Table of contents

### Properties

- [amount](#amount)
- [note](#note)
- [sendParams](#sendparams)
- [sender](#sender)

## Properties

### amount

• **amount**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

#### Defined in

[src/types/app-client.ts:254](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L254)

---

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The transaction note for the smart contract call

#### Defined in

[src/types/app-client.ts:258](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L258)

---

### sendParams

• `Optional` **sendParams**: [`SendTransactionParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/)

Parameters to control transaction sending

#### Defined in

[src/types/app-client.ts:260](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L260)

---

### sender

• `Optional` **sender**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

#### Defined in

[src/types/app-client.ts:256](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L256)
