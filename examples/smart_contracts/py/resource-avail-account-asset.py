from algopy import UInt64, Account, Asset, op, ARC4Contract
from algopy.arc4 import abimethod


class AccountAndAssetReference(ARC4Contract):

    @abimethod
    def get_asset_balance(self) -> UInt64:
        acct = Account(
            "WMHF4FLJNKY2BPFK7YPV5ID6OZ7LVDB2B66ZTXEAMLL2NX4WJZRJFVX66M"
        )  # Replace with your account address
        asset = Asset(1185)  # Replace with your asset id
        balance, has_value = op.AssetHoldingGet.asset_balance(acct, asset)

        if has_value:
            return balance
        return UInt64(0)

    @abimethod
    def get_asset_balance_with_arg(self, acct: Account, asset: Asset) -> UInt64:
        balance, has_value = op.AssetHoldingGet.asset_balance(acct, asset)

        if has_value:
            return balance
        return UInt64(0)
