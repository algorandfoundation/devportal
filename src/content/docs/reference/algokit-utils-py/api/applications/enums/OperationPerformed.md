---
title: algokit_utils.applications.enums.OperationPerformed
---
#### *class* algokit_utils.applications.enums.OperationPerformed(\*args, \*\*kwds)

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