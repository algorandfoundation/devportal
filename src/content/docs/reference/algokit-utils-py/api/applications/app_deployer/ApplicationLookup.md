---
title: ApplicationLookup
sidebar:
  label: ApplicationLookup
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_deployer.ApplicationLookup

Cache of {py:class}\`ApplicationMetaData\` for a specific creator

Can be used as an argument to {py:class}\`ApplicationClient\` to reduce the number of calls when deploying multiple
apps or discovering multiple app_ids

#### creator _: str_

#### apps _: dict[str, [ApplicationMetaData](ApplicationMetaData.md#algokit_utils.applications.app_deployer.ApplicationMetaData)]_
