---
title: algokit_utils.applications.app_factory.AppFactoryCreateMethodCallResult
---
#### *class* algokit_utils.applications.app_factory.AppFactoryCreateMethodCallResult

Bases: [`algokit_utils.transactions.transaction_sender.SendSingleTransactionResult`](/reference/algokit-utils-py/api/transactions/transaction_sender/sendsingletransactionresult/#algokit_utils.transactions.transaction_sender.SendSingleTransactionResult), `Generic`[`ABIReturnT`]

Base class for transaction results.

Represents the result of sending a single transaction.

#### app_id *: int*

#### app_address *: str*

#### compiled_approval *: Any | None* *= None*

#### compiled_clear *: Any | None* *= None*

#### abi_return *: ABIReturnT | None* *= None*