from algopy import ARC4Contract, GlobalState, Bytes,arc4

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        self.global_bytes_full = GlobalState(Bytes(b"Hello"))

    @arc4.abimethod
    def set_global_state(self, value: Bytes) -> None:
        self.global_bytes_full.value = value