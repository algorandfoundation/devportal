---
title: Method
---

#### _class_ algokit_utils.applications.app_spec.arc56.Method

Method information.

#### actions _: [Actions](/reference/algokit-utils-py/api/applications/app_spec/arc56/actions/#algokit_utils.applications.app_spec.arc56.Actions)_

The allowed actions

#### args _: list[[MethodArg](/reference/algokit-utils-py/api/applications/app_spec/arc56/methodarg/#algokit_utils.applications.app_spec.arc56.MethodArg)]_

The method arguments

#### name _: str_

The method name

#### returns _: [Returns](/reference/algokit-utils-py/api/applications/app_spec/arc56/returns/#algokit_utils.applications.app_spec.arc56.Returns)_

The return information

#### desc _: str | None_ _= None_

The optional description

#### events _: list[[Event](/reference/algokit-utils-py/api/applications/app_spec/arc56/event/#algokit_utils.applications.app_spec.arc56.Event)] | None_ _= None_

The optional list of events

#### readonly _: bool | None_ _= None_

The optional readonly flag

#### recommendations _: [Recommendations](/reference/algokit-utils-py/api/applications/app_spec/arc56/recommendations/#algokit_utils.applications.app_spec.arc56.Recommendations) | None_ _= None_

The optional execution recommendations

#### to_abi_method() → algosdk.abi.Method

Convert to ABI method.

- **Raises:**
  **ValueError** – If underlying ABI method is not initialized
- **Returns:**
  ABI method

#### _static_ from_dict(data: dict[str, Any]) → [Method](#algokit_utils.applications.app_spec.arc56.Method)
