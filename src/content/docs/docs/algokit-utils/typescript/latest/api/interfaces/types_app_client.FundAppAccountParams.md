---
title: FundAppAccountParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/) / FundAppAccountParams

[types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/).FundAppAccountParams

Parameters for funding an app account

## Table of contents

### Properties

- [amount](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientfundappaccountparams/#amount)
- [note](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientfundappaccountparams/#note)
- [sendParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientfundappaccountparams/#sendparams)
- [sender](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientfundappaccountparams/#sender)

## Properties

### amount

• **amount**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)

#### Defined in

[src/types/app-client.ts:254](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L254)

---

### note

• `Optional` **note**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnote)

The transaction note for the smart contract call

#### Defined in

[src/types/app-client.ts:258](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L258)

---

### sendParams

• `Optional` **sendParams**: [`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/)

Parameters to control transaction sending

#### Defined in

[src/types/app-client.ts:260](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L260)

---

### sender

• `Optional` **sender**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

#### Defined in

[src/types/app-client.ts:256](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L256)
