---
title: CallConfig
---

#### _class_ algokit_utils.applications.app_spec.arc32.CallConfig

Bases: `enum.IntFlag`

Describes the type of calls a method can be used for based on {py:class}\`algosdk.transaction.OnComplete\` type

#### NEVER _= 0_

Never handle the specified on completion type

#### CALL _= 1_

Only handle the specified on completion type for application calls

#### CREATE _= 2_

Only handle the specified on completion type for application create calls

#### ALL _= 3_

Handle the specified on completion type for both create and normal application calls
