from algopy import ARC4Contract, BoxRef, String, UInt64, arc4, BoxMap, Box, Txn, Global, Bytes

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        self.box_map = BoxMap(UInt64, String, key_prefix="")
        self.box_ref = BoxRef()

    @arc4.abimethod
    def length_box_map(self) -> None:
        key_0 = UInt64(0)
        value = String("Value")
        self.box_map[key_0] = value
        assert self.box_map[key_0].bytes.length == value.bytes.length
        assert self.box_map.length(key_0) == value.bytes.length
    
    @arc4.abimethod
    def length_box_ref(self) -> None:
        self.box_ref.create(size=UInt64(32))
        assert self.box_ref, "has data"
        assert self.box_ref.length == 64

