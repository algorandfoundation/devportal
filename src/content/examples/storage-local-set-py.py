from algopy import ARC4Contract, LocalState, UInt64, arc4, Account

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        # Initializing a local storage for Uint64 data type
        self.local_int = LocalState(UInt64)
    
    @arc4.abimethod
    def set_local_int(self, for_account: Account, value:  UInt64) -> None:
        self.local_int[for_account] = value # Uint64