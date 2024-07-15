from algopy import ARC4Contract, GlobalState, Bytes

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        # Different ways of initializing Bytes
        self.global_bytes_full = GlobalState(Bytes(b"Hello")) # Bytes with default value = bytes(Hello)
        self.global_bytes_simplified = Bytes(b"Hello") # Bytes simplified with default value = bytes(Hello)
        self.global_bytes_no_default = GlobalState(Bytes) # Bytes with no default value
