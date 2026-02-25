---
title: 'algokit_utils.transactions.fee_coverage'
---

<div class="api-ref">

# algokit_utils.transactions.fee_coverage

## Classes

| [`FeeDeltaType`](#algokit_utils.transactions.fee_coverage.FeeDeltaType) | Describes the type of fee delta                                                            |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`FeeDelta`](#algokit_utils.transactions.fee_coverage.FeeDelta)         | Represents a difference between required and provided fee amounts.                         |
| [`FeePriority`](#algokit_utils.transactions.fee_coverage.FeePriority)   | Priority wrapper used when deciding which transactions need additional fees applied first. |

## Module Contents

### _class_ FeeDeltaType(\*args, \*\*kwds)

Bases: `enum.Enum`

Describes the type of fee delta

#### DEFICIT

#### SURPLUS

### _class_ FeeDelta

Represents a difference between required and provided fee amounts.

#### type _: [FeeDeltaType](#algokit_utils.transactions.fee_coverage.FeeDeltaType)_

#### data _: int_

#### _static_ from_int(value: int) → [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta) | None

#### _static_ add(lhs: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta) | None, rhs: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta) | None) → [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta) | None

#### _static_ to_int(delta: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta)) → int

#### _static_ amount(delta: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta)) → int

#### _static_ is_deficit(delta: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta)) → bool

#### _static_ is_surplus(delta: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta)) → bool

### _class_ FeePriority

Priority wrapper used when deciding which transactions need additional fees applied first.

#### priority*level *: int\_

#### deficit*amount *: int\_

#### Covered _: ClassVar[[FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)]_

#### ModifiableDeficit _: ClassVar[collections.abc.Callable[[int], [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)]]_

#### ImmutableDeficit _: ClassVar[collections.abc.Callable[[int], [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)]]_

#### _static_ covered() → [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)

#### _static_ modifiable_deficit(amount: int) → [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)

#### _static_ immutable_deficit(amount: int) → [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)

</div>
