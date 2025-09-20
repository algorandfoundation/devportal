---
title: OnSchemaBreak
---

#### _class_ algokit_utils.applications.enums.OnSchemaBreak(\*args, \*\*kwds)

Bases: `enum.Enum`

Action to take if an Application’s schema has breaking changes

#### Fail _= 0_

Fail the deployment

#### ReplaceApp _= 2_

Create a new Application and delete the old Application in a single transaction

#### AppendApp _= 3_

Create a new Application
