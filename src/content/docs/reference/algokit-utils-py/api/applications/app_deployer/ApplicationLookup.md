---
title: algokit_utils.applications.app_deployer.ApplicationLookup
---
#### *class* algokit_utils.applications.app_deployer.ApplicationLookup

Cache of {py:class}\`ApplicationMetaData\` for a specific creator

Can be used as an argument to {py:class}\`ApplicationClient\` to reduce the number of calls when deploying multiple
apps or discovering multiple app_ids

#### creator *: str*

#### apps *: dict[str, [ApplicationMetaData](#algokit_utils.applications.app_deployer.ApplicationMetaData)]*