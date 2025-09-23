---
title: algokit_utils.applications.enums.OnUpdate
---

#### _class_ algokit_utils.applications.enums.OnUpdate(\*args, \*\*kwds)

Bases: `enum.Enum`

Action to take if an Application has been updated

#### Fail _= 0_

Fail the deployment

#### UpdateApp _= 1_

Update the Application with the new approval and clear programs

#### ReplaceApp _= 2_

Create a new Application and delete the old Application in a single transaction

#### AppendApp _= 3_

Create a new application
