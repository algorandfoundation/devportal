---
title: OnUpdate
---
#### *class* algokit_utils.applications.enums.OnUpdate(\*args, \*\*kwds)

Bases: `enum.Enum`

Action to take if an Application has been updated

#### Fail *= 0*

Fail the deployment

#### UpdateApp *= 1*

Update the Application with the new approval and clear programs

#### ReplaceApp *= 2*

Create a new Application and delete the old Application in a single transaction

#### AppendApp *= 3*

Create a new application