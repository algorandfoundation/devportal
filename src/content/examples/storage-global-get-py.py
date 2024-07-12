from algopy import ARC4Contract, GlobalState, Bytes, arc4, UInt64

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        self.global_int_full = GlobalState(UInt64(50)) # UInt64 with default value = 50)

    @arc4.abimethod
    def get_global_state(self) -> UInt64:
        return self.global_int_full.get(default=UInt64(0))

    @arc4.abimethod
    def maybe_global_state(self) -> tuple[UInt64, bool]:
        int_value, int_exists = self.global_int_full.maybe() # uint64
        if not int_exists:
            int_value = UInt64(0)
        return int_value, int_exists
