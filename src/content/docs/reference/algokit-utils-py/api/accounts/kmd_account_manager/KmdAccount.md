---
title: KmdAccount
---

#### _class_ algokit_utils.accounts.kmd_account_manager.KmdAccount(private_key: str, address: str | None = None)

Bases: [`algokit_utils.models.account.SigningAccount`](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount)

Account retrieved from KMD with signing capabilities, extending base Account.

Provides an account implementation that can be used to sign transactions using keys stored in KMD.

- **Parameters:**
  - **private_key** – Base64 encoded private key
  - **address** – Optional address override for rekeyed accounts, defaults to None
