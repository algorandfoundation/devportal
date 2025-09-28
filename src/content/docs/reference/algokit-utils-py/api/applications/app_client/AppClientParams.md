---
title: AppClientParams
sidebar:
  label: AppClientParams
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_client.AppClientParams

Full parameters for creating an app client

#### app_spec _: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | [algokit_utils.applications.app_spec.arc32.Arc32Contract](/reference/algokit-utils-py/api/applications/app_spec/arc32/arc32contract/#algokit_utils.applications.app_spec.arc32.Arc32Contract) | str_

The application specification

#### algorand _: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/algorandclient/#algokit_utils.algorand.AlgorandClient)_

The Algorand client

#### app_id _: int_

The application ID

#### app_name _: str | None_ _= None_

The application name

#### default_sender _: str | None_ _= None_

The default sender address

#### default_signer _: algosdk.atomic_transaction_composer.TransactionSigner | None_ _= None_

The default transaction signer

#### approval_source_map _: algosdk.source_map.SourceMap | None_ _= None_

The approval source map

#### clear_source_map _: algosdk.source_map.SourceMap | None_ _= None_

The clear source map
