from algopy import ARC4Contract, LocalState, arc4, UInt64, Account

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        # Initializing a local storage for Uint64 data type
        self.local_int = LocalState(UInt64)

    @arc4.abimethod
    def get_local_data_with_default_int(self, for_account: Account) -> UInt64:
        return self.local_int.get(for_account, default=UInt64(0)) # Uint64

    @arc4.abimethod
    def maybe_local_data(self, for_account: Account) -> tuple[UInt64, bool]:
        # used to get data or assert int
        result, exists = self.local_int.maybe(for_account) # Uint64 
        if not exists:
            result = UInt64(0)
        return result, exists

    @arc4.abimethod
    def get_item_local_data(self, for_account: Account)-> UInt64:
        return self.local_int[for_account]
    