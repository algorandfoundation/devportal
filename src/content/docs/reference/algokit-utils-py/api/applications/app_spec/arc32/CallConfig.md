---
title: CallConfig
---
#### *class* algokit_utils.applications.app_spec.arc32.CallConfig

Bases: `enum.IntFlag`

Describes the type of calls a method can be used for based on {py:class}\`algosdk.transaction.OnComplete\` type

#### NEVER *= 0*

Never handle the specified on completion type

#### CALL *= 1*

Only handle the specified on completion type for application calls

#### CREATE *= 2*

Only handle the specified on completion type for application create calls

#### ALL *= 3*

Handle the specified on completion type for both create and normal application calls