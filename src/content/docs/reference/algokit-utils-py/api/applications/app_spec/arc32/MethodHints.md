---
title: MethodHints
sidebar:
  label: MethodHints
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_spec.arc32.MethodHints

MethodHints provides hints to the caller about how to call the method

#### read_only _: bool_ _= False_

#### structs _: dict[str, [StructArgDict](StructArgDict.md#algokit_utils.applications.app_spec.arc32.StructArgDict)]_

#### default_arguments _: dict[str, [DefaultArgumentDict](DefaultArgumentDict.md#algokit_utils.applications.app_spec.arc32.DefaultArgumentDict)]_

#### call_config _: MethodConfigDict_

#### empty() → bool

#### dictify() → dict[str, Any]

#### _static_ undictify(data: dict[str, Any]) → [MethodHints](#algokit_utils.applications.app_spec.arc32.MethodHints)
