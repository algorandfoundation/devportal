---
title: algokit_utils.applications.enums.OperationPerformed
---

#### _class_ algokit_utils.applications.enums.OperationPerformed(\*args, \*\*kwds)

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
