from algopy import ARC4Contract, GlobalState, UInt64, arc4

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        self.global_int_full = GlobalState(UInt64(1))

    @arc4.abimethod
    def del_global_state(self) -> bool:
        del self.global_int_full.value
        return True
