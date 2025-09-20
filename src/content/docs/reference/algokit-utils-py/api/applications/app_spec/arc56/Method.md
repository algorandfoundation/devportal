---
title: Method
---
#### *class* algokit_utils.applications.app_spec.arc56.Method

Method information.

#### actions *: [Actions](/reference/algokit-utils-py/api/applications/app_spec/arc56/actions/#algokit_utils.applications.app_spec.arc56.Actions)*

The allowed actions

#### args *: list[[MethodArg](/reference/algokit-utils-py/api/applications/app_spec/arc56/methodarg/#algokit_utils.applications.app_spec.arc56.MethodArg)]*

The method arguments

#### name *: str*

The method name

#### returns *: [Returns](/reference/algokit-utils-py/api/applications/app_spec/arc56/returns/#algokit_utils.applications.app_spec.arc56.Returns)*

The return information

#### desc *: str | None* *= None*

The optional description

#### events *: list[[Event](/reference/algokit-utils-py/api/applications/app_spec/arc56/event/#algokit_utils.applications.app_spec.arc56.Event)] | None* *= None*

The optional list of events

#### readonly *: bool | None* *= None*

The optional readonly flag

#### recommendations *: [Recommendations](/reference/algokit-utils-py/api/applications/app_spec/arc56/recommendations/#algokit_utils.applications.app_spec.arc56.Recommendations) | None* *= None*

The optional execution recommendations

#### to_abi_method() → algosdk.abi.Method

Convert to ABI method.

* **Raises:**
  **ValueError** – If underlying ABI method is not initialized
* **Returns:**
  ABI method

#### *static* from_dict(data: dict[str, Any]) → [Method](#algokit_utils.applications.app_spec.arc56.Method)