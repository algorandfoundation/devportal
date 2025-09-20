---
title: AppClientParams
---

#### _class_ algokit_utils.applications.app_client.AppClientParams

Full parameters for creating an app client

#### app*spec *: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | [algokit_utils.applications.app_spec.arc32.Arc32Contract](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc32/arc32contract/#algokit_utils.applications.app_spec.arc32.Arc32Contract) | str\_

The application specification

#### algorand _: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/algorand/algorandclient/#algokit_utils.algorand.AlgorandClient)_

The Algorand client

#### app*id *: int\_

The application ID

#### app*name *: str | None\_ _= None_

The application name

#### default*sender *: str | None\_ _= None_

The default sender address

#### default*signer *: algosdk.atomic*transaction_composer.TransactionSigner | None* _= None_

The default transaction signer

#### approval*source_map *: algosdk.source*map.SourceMap | None* _= None_

The approval source map

#### clear*source_map *: algosdk.source*map.SourceMap | None* _= None_

The clear source map
