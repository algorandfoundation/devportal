from algopy import Box, BoxMap, String, UInt64, arc4, Txn, BoxRef

class BoxContract(arc4.ARC4Contract):
    def __init__(self) -> None:
        self.box_str = Box(arc4.String, key=b"BOX_C")
        self.box_map = BoxMap(UInt64, String, key_prefix="")
        self.box_ref = BoxRef()

    @arc4.abimethod
    def get_box(self) -> arc4.String:
        return self.box_str.value
    
    @arc4.abimethod
    def get_box_map(self, key: UInt64) -> String:
        return self.box_map[key]

    @arc4.abimethod
    def get_func_box(self, val_str: arc4.String) -> None:
        self.box_str.value = val_str
        assert self.box_str.get(default=arc4.String("42")) == "42"

    @arc4.abimethod
    def get_func_box_map(self) -> String:
        key = UInt64(1)
        return self.box_map.get(key, default=String("default"))

    @arc4.abimethod
    def get_func_box_ref(self) -> None:
        sender_bytes = Txn.sender.bytes
        assert self.box_ref.get(default=sender_bytes) == sender_bytes

    @arc4.abimethod
    def maybe_box(self) -> None:
        box_str, box_str_exists = self.box_str.maybe()
        assert not box_str_exists
        assert box_str == String("0")

    @arc4.abimethod
    def maybe_box_map(self) -> None:
        key_0 = UInt64(0)
        key_1 = UInt64(1)
        value = String("Value")
        self.box_map[key_0] = value
        value, exists = self.box_map.maybe(key_1)
        assert not exists
        assert key_0 in self.box_map

    @arc4.abimethod
    def maybe_box_ref(self) -> None:
        value, exists = self.box_ref.maybe()
        assert not exists
        assert value == b""
