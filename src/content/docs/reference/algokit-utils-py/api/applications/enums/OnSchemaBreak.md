---
title: OnSchemaBreak
---
#### *class* algokit_utils.applications.enums.OnSchemaBreak(\*args, \*\*kwds)

Bases: `enum.Enum`

Action to take if an Application’s schema has breaking changes

#### Fail *= 0*

Fail the deployment

#### ReplaceApp *= 2*

Create a new Application and delete the old Application in a single transaction

#### AppendApp *= 3*

Create a new Application