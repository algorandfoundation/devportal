---
title: AppDeployResult
sidebar:
  label: AppDeployResult
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_deployer.AppDeployResult

The result of a deployment

#### app _: [ApplicationMetaData](ApplicationMetaData.md#algokit_utils.applications.app_deployer.ApplicationMetaData)_

The application metadata

#### operation*performed *: [algokit_utils.applications.enums.OperationPerformed](/reference/algokit-utils-py/api/applications/enums/operationperformed/#algokit_utils.applications.enums.OperationPerformed)\_

The operation performed

#### create*result *: [algokit_utils.transactions.transaction_sender.SendAppCreateTransactionResult](/reference/algokit-utils-py/api/transactions/transaction_sender/sendappcreatetransactionresult/#algokit_utils.transactions.transaction_sender.SendAppCreateTransactionResult)[[algokit_utils.applications.abi.ABIReturn](/reference/algokit-utils-py/api/applications/abi/abireturn/#algokit_utils.applications.abi.ABIReturn)] | None\_ _= None_

The create result

#### update*result *: [algokit_utils.transactions.transaction_sender.SendAppUpdateTransactionResult](/reference/algokit-utils-py/api/transactions/transaction_sender/sendappupdatetransactionresult/#algokit_utils.transactions.transaction_sender.SendAppUpdateTransactionResult)[[algokit_utils.applications.abi.ABIReturn](/reference/algokit-utils-py/api/applications/abi/abireturn/#algokit_utils.applications.abi.ABIReturn)] | None\_ _= None_

The update result

#### delete*result *: [algokit_utils.transactions.transaction_sender.SendAppTransactionResult](/reference/algokit-utils-py/api/transactions/transaction_sender/sendapptransactionresult/#algokit_utils.transactions.transaction_sender.SendAppTransactionResult)[[algokit_utils.applications.abi.ABIReturn](/reference/algokit-utils-py/api/applications/abi/abireturn/#algokit_utils.applications.abi.ABIReturn)] | None\_ _= None_

The delete result
