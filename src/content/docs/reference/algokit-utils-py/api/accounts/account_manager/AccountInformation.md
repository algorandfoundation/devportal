---
title: algokit_utils.accounts.account_manager.AccountInformation
---
#### *class* algokit_utils.accounts.account_manager.AccountInformation

Information about an Algorand account’s current status, balance and other properties.

See https://dev.algorand.co/reference/rest-apis/algod/#account for detailed field descriptions.

#### address *: str*

The account’s address

#### amount *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)*

The account’s current balance

#### amount_without_pending_rewards *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)*

The account’s balance without the pending rewards

#### min_balance *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)*

The account’s minimum required balance

#### pending_rewards *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)*

The amount of pending rewards

#### rewards *: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount)*

The amount of rewards earned

#### round *: int*

The round for which this information is relevant

#### status *: str*

The account’s status (e.g., ‘Offline’, ‘Online’)

#### total_apps_opted_in *: int | None* *= None*

Number of applications this account has opted into

#### total_assets_opted_in *: int | None* *= None*

Number of assets this account has opted into

#### total_box_bytes *: int | None* *= None*

Total number of box bytes used by this account

#### total_boxes *: int | None* *= None*

Total number of boxes used by this account

#### total_created_apps *: int | None* *= None*

Number of applications created by this account

#### total_created_assets *: int | None* *= None*

Number of assets created by this account

#### apps_local_state *: list[dict] | None* *= None*

Local state of applications this account has opted into

#### apps_total_extra_pages *: int | None* *= None*

Number of extra pages allocated to applications

#### apps_total_schema *: dict | None* *= None*

Total schema for all applications

#### assets *: list[dict] | None* *= None*

Assets held by this account

#### auth_addr *: str | None* *= None*

If rekeyed, the authorized address

#### closed_at_round *: int | None* *= None*

Round when this account was closed

#### created_apps *: list[dict] | None* *= None*

Applications created by this account

#### created_assets *: list[dict] | None* *= None*

Assets created by this account

#### created_at_round *: int | None* *= None*

Round when this account was created

#### deleted *: bool | None* *= None*

Whether this account is deleted

#### incentive_eligible *: bool | None* *= None*

Whether this account is eligible for incentives

#### last_heartbeat *: int | None* *= None*

Last heartbeat round for this account

#### last_proposed *: int | None* *= None*

Last round this account proposed a block

#### participation *: dict | None* *= None*

Participation information for this account

#### reward_base *: int | None* *= None*

Base reward for this account

#### sig_type *: str | None* *= None*

Signature type for this account