---
title: "algokit_utils.transactions.fee_coverage"
---

<div class="api-ref">

# algokit_utils.transactions.fee_coverage

## Classes

| [`FeeDeltaType`](#algokit_utils.transactions.fee_coverage.FeeDeltaType)   | Describes the type of fee delta                                                            |
|---------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`FeeDelta`](#algokit_utils.transactions.fee_coverage.FeeDelta)           | Represents a difference between required and provided fee amounts.                         |
| [`FeePriority`](#algokit_utils.transactions.fee_coverage.FeePriority)     | Priority wrapper used when deciding which transactions need additional fees applied first. |

## Module Contents

### *class* FeeDeltaType(\*args, \*\*kwds)

Bases: `enum.Enum`

Describes the type of fee delta

#### DEFICIT

#### SURPLUS

### *class* FeeDelta

Represents a difference between required and provided fee amounts.

#### type *: [FeeDeltaType](#algokit_utils.transactions.fee_coverage.FeeDeltaType)*

#### data *: int*

#### *static* from_int(value: int) → [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta) | None

#### *static* add(lhs: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta) | None, rhs: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta) | None) → [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta) | None

#### *static* to_int(delta: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta)) → int

#### *static* amount(delta: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta)) → int

#### *static* is_deficit(delta: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta)) → bool

#### *static* is_surplus(delta: [FeeDelta](#algokit_utils.transactions.fee_coverage.FeeDelta)) → bool

### *class* FeePriority

Priority wrapper used when deciding which transactions need additional fees applied first.

#### priority_level *: int*

#### deficit_amount *: int*

#### Covered *: ClassVar[[FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)]*

#### ModifiableDeficit *: ClassVar[collections.abc.Callable[[int], [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)]]*

#### ImmutableDeficit *: ClassVar[collections.abc.Callable[[int], [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)]]*

#### *static* covered() → [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)

#### *static* modifiable_deficit(amount: int) → [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)

#### *static* immutable_deficit(amount: int) → [FeePriority](#algokit_utils.transactions.fee_coverage.FeePriority)


</div>
