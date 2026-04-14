---
title: 'algokit_utils.applications.enums'
---

<div class="api-ref">

# algokit_utils.applications.enums

## Classes

| [`OnSchemaBreak`](#algokit_utils.applications.enums.OnSchemaBreak)           | Action to take if an Application's schema has breaking changes |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`OnUpdate`](#algokit_utils.applications.enums.OnUpdate)                     | Action to take if an Application has been updated              |
| [`OperationPerformed`](#algokit_utils.applications.enums.OperationPerformed) | Describes the actions taken during deployment                  |

## Module Contents

### _class_ OnSchemaBreak(\*args, \*\*kwds)

Bases: `enum.Enum`

Action to take if an Application’s schema has breaking changes

#### Fail _= 0_

Fail the deployment

#### ReplaceApp _= 2_

Create a new Application and delete the old Application in a single transaction

#### AppendApp _= 3_

Create a new Application

### _class_ OnUpdate(\*args, \*\*kwds)

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

### _class_ OperationPerformed(\*args, \*\*kwds)

Bases: `enum.Enum`

Describes the actions taken during deployment

#### Nothing _= 0_

An existing Application was found

#### Create _= 1_

No existing Application was found, created a new Application

#### Update _= 2_

An existing Application was found, but was out of date, updated to latest version

#### Replace _= 3_

An existing Application was found, but was out of date, created a new Application and deleted the original

</div>
