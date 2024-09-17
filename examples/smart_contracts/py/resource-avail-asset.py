from algopy import ARC4Contract, UInt64, Asset
from algopy.arc4 import abimethod


class AssetReference(ARC4Contract):

    @abimethod
    def get_asset_total_supply(self) -> UInt64:
        return Asset(1185).total  # Replace with your asset id

    @abimethod
    def get_asset_total_supply_with_arg(self, asa: Asset) -> UInt64:
        return asa.total
