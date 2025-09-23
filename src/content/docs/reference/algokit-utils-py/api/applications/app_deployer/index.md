---
title: algokit_utils.applications.app_deployer
---

## Classes

| [`AppDeploymentMetaData`](#algokit_utils.applications.app_deployer.AppDeploymentMetaData) | Metadata about an application stored in a transaction note during creation. |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`ApplicationReference`](#algokit_utils.applications.app_deployer.ApplicationReference)   | Information about an Algorand app                                           |
| [`ApplicationMetaData`](#algokit_utils.applications.app_deployer.ApplicationMetaData)     | Complete metadata about a deployed app                                      |
| [`ApplicationLookup`](#algokit_utils.applications.app_deployer.ApplicationLookup)         | Cache of {py:class}\`ApplicationMetaData\` for a specific creator           |
| [`AppDeployParams`](#algokit_utils.applications.app_deployer.AppDeployParams)             | Parameters for deploying an app                                             |
| [`AppDeployResult`](#algokit_utils.applications.app_deployer.AppDeployResult)             | The result of a deployment                                                  |
| [`AppDeployer`](#algokit_utils.applications.app_deployer.AppDeployer)                     | Manages deployment and deployment metadata of applications                  |

## Module Contents

### algokit_utils.applications.app_deployer.APP_DEPLOY_NOTE_DAPP _: str_ _= 'ALGOKIT_DEPLOYER'_
