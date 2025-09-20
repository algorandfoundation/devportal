---
title: AppClientCallCoreParams
slug: reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcallcoreparams
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / AppClientCallCoreParams



[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).AppClientCallCoreParams

Common (core) parameters to construct a ApplicationClient contract call

## Table of contents

### Properties

- [note](#note)
- [sendParams](#sendparams)
- [sender](#sender)

## Properties

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The transaction note for the smart contract call

#### Defined in

[src/types/app-client.ts:215](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L215)

___

### sendParams

• `Optional` **sendParams**: [`SendTransactionParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/)

Parameters to control transaction sending

#### Defined in

[src/types/app-client.ts:217](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L217)

___

### sender

• `Optional` **sender**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

#### Defined in

[src/types/app-client.ts:213](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L213)