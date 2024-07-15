from algopy import ARC4Contract, LocalState, UInt64, Bytes

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        # Initializing a local storage for Uint64 data type
        self.local_int = LocalState(UInt64) # Uint64
        self.local_bytes = LocalState(Bytes) # Bytes        
        self.local_bool = LocalState(bool) #Bool
