---
title: applications.enums
sidebar:
  label: Index
  order: 0
---
## Classes

| [`OnSchemaBreak`](#algokit_utils.applications.enums.OnSchemaBreak)           | Action to take if an Application's schema has breaking changes   |
|------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`OnUpdate`](#algokit_utils.applications.enums.OnUpdate)                     | Action to take if an Application has been updated                |
| [`OperationPerformed`](#algokit_utils.applications.enums.OperationPerformed) | Describes the actions taken during deployment                    |

## Module Contents

### *class* algokit_utils.applications.enums.OnSchemaBreak(\*args, \*\*kwds)

Bases: `enum.Enum`

Action to take if an Application’s schema has breaking changes

#### Fail *= 0*

Fail the deployment

#### ReplaceApp *= 2*

Create a new Application and delete the old Application in a single transaction

#### AppendApp *= 3*

Create a new Application

### *class* algokit_utils.applications.enums.OnUpdate(\*args, \*\*kwds)

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

### *class* algokit_utils.applications.enums.OperationPerformed(\*args, \*\*kwds)

Bases: `enum.Enum`

Describes the actions taken during deployment

#### Nothing *= 0*

An existing Application was found

#### Create *= 1*

No existing Application was found, created a new Application

#### Update *= 2*

An existing Application was found, but was out of date, updated to latest version

#### Replace *= 3*

An existing Application was found, but was out of date, created a new Application and deleted the original