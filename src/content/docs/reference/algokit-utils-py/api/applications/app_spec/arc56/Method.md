---
title: Method
sidebar:
  label: Method
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_spec.arc56.Method

Method information.

#### actions _: [Actions](Actions.md#algokit_utils.applications.app_spec.arc56.Actions)_

The allowed actions

#### args _: list[[MethodArg](MethodArg.md#algokit_utils.applications.app_spec.arc56.MethodArg)]_

The method arguments

#### name _: str_

The method name

#### returns _: [Returns](Returns.md#algokit_utils.applications.app_spec.arc56.Returns)_

The return information

#### desc _: str | None_ _= None_

The optional description

#### events _: list[[Event](Event.md#algokit_utils.applications.app_spec.arc56.Event)] | None_ _= None_

The optional list of events

#### readonly _: bool | None_ _= None_

The optional readonly flag

#### recommendations _: [Recommendations](Recommendations.md#algokit_utils.applications.app_spec.arc56.Recommendations) | None_ _= None_

The optional execution recommendations

#### to_abi_method() → algosdk.abi.Method

Convert to ABI method.

- **Raises:**
  **ValueError** – If underlying ABI method is not initialized
- **Returns:**
  ABI method

#### _static_ from_dict(data: dict[str, Any]) → [Method](#algokit_utils.applications.app_spec.arc56.Method)
