---
title: algokit_utils.applications.app_spec.arc32.MethodHints
---
#### *class* algokit_utils.applications.app_spec.arc32.MethodHints

MethodHints provides hints to the caller about how to call the method

#### read_only *: bool* *= False*

#### structs *: dict[str, [StructArgDict](#algokit_utils.applications.app_spec.arc32.StructArgDict)]*

#### default_arguments *: dict[str, [DefaultArgumentDict](#algokit_utils.applications.app_spec.arc32.DefaultArgumentDict)]*

#### call_config *: MethodConfigDict*

#### empty() → bool

#### dictify() → dict[str, Any]

#### *static* undictify(data: dict[str, Any]) → [MethodHints](#algokit_utils.applications.app_spec.arc32.MethodHints)