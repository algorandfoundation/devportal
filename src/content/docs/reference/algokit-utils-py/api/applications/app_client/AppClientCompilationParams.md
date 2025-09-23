---
title: algokit_utils.applications.app_client.AppClientCompilationParams
---

#### _class_ algokit_utils.applications.app_client.AppClientCompilationParams

Bases: `TypedDict`

Parameters for compiling an application’s TEAL code.

- **Variables:**
  - **deploy_time_params** – Optional template parameters to use during compilation
  - **updatable** – Optional flag indicating if app should be updatable
  - **deletable** – Optional flag indicating if app should be deletable

#### deploy*time_params *: algokit*utils.models.state.TealTemplateParams | None*

#### updatable _: bool | None_

#### deletable _: bool | None_
