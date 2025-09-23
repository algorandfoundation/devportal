---
title: algokit_utils.accounts.account_manager.AccountInformation
---

#### _class_ algokit_utils.accounts.account_manager.AccountInformation

Information about an Algorand account’s current status, balance and other properties.

See https://dev.algorand.co/reference/rest-apis/algod/#account for detailed field descriptions.

#### address _: str_

The account’s address

#### amount _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)_

The account’s current balance

#### amount_without_pending_rewards _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)_

The account’s balance without the pending rewards

#### min_balance _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)_

The account’s minimum required balance

#### pending_rewards _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)_

The amount of pending rewards

#### rewards _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)_

The amount of rewards earned

#### round _: int_

The round for which this information is relevant

#### status _: str_

The account’s status (e.g., ‘Offline’, ‘Online’)

#### total_apps_opted_in _: int | None_ _= None_

Number of applications this account has opted into

#### total_assets_opted_in _: int | None_ _= None_

Number of assets this account has opted into

#### total_box_bytes _: int | None_ _= None_

Total number of box bytes used by this account

#### total_boxes _: int | None_ _= None_

Total number of boxes used by this account

#### total_created_apps _: int | None_ _= None_

Number of applications created by this account

#### total_created_assets _: int | None_ _= None_

Number of assets created by this account

#### apps_local_state _: list[dict] | None_ _= None_

Local state of applications this account has opted into

#### apps_total_extra_pages _: int | None_ _= None_

Number of extra pages allocated to applications

#### apps_total_schema _: dict | None_ _= None_

Total schema for all applications

#### assets _: list[dict] | None_ _= None_

Assets held by this account

#### auth_addr _: str | None_ _= None_

If rekeyed, the authorized address

#### closed_at_round _: int | None_ _= None_

Round when this account was closed

#### created_apps _: list[dict] | None_ _= None_

Applications created by this account

#### created_assets _: list[dict] | None_ _= None_

Assets created by this account

#### created_at_round _: int | None_ _= None_

Round when this account was created

#### deleted _: bool | None_ _= None_

Whether this account is deleted

#### incentive_eligible _: bool | None_ _= None_

Whether this account is eligible for incentives

#### last_heartbeat _: int | None_ _= None_

Last heartbeat round for this account

#### last_proposed _: int | None_ _= None_

Last round this account proposed a block

#### participation _: dict | None_ _= None_

Participation information for this account

#### reward_base _: int | None_ _= None_

Base reward for this account

#### sig_type _: str | None_ _= None_

Signature type for this account
