---
title: 'algokit_utils.transactions.composer_resources'
---

<div class="api-ref">

# algokit_utils.transactions.composer_resources

## Classes

| [`GroupResourceType`](#algokit_utils.transactions.composer_resources.GroupResourceType)             | Describes different group resources |
| --------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`GroupResourceToPopulate`](#algokit_utils.transactions.composer_resources.GroupResourceToPopulate) |                                     |

## Functions

| [`populate_transaction_resources`](#algokit_utils.transactions.composer_resources.populate_transaction_resources)(...) | Populate transaction-level resources for app call transactions |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`populate_group_resources`](#algokit_utils.transactions.composer_resources.populate_group_resources)(→ None)          | Populate group-level resources for app call transactions       |

## Module Contents

### populate_transaction_resources(transaction: Transaction, resources_accessed: SimulateUnnamedResourcesAccessed, group_index: int) → Transaction

Populate transaction-level resources for app call transactions

### _class_ GroupResourceType(\*args, \*\*kwds)

Bases: `enum.Enum`

Describes different group resources

#### Account _= 'Account'_

#### App _= 'App'_

#### Asset _= 'Asset'_

#### Box _= 'Box'_

#### ExtraBoxRef _= 'ExtraBoxRef'_

#### AssetHolding _= 'AssetHolding'_

#### AppLocal _= 'AppLocal'_

### _class_ GroupResourceToPopulate

#### type _: [GroupResourceType](#algokit_utils.transactions.composer_resources.GroupResourceType)_

#### data _: Any_

### populate_group_resources(transactions: list[Transaction], group_resources: SimulateUnnamedResourcesAccessed) → None

Populate group-level resources for app call transactions

</div>
