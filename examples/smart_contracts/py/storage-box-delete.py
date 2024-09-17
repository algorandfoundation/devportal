from algopy import ARC4Contract, BoxMap, BoxRef, String, UInt64, arc4, Box

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        self.box_str = Box(arc4.String, key=b"BOX_C")
        self.box_map = BoxMap(UInt64, String, key_prefix="")
        self.box_ref = BoxRef()

    @arc4.abimethod
    def delete_boxes(self) -> None:
        del self.box_str.value
        assert self.box_str.get(default=arc4.String("42")) == "42"
        a, a_exists = self.box_str.maybe()
        assert not a_exists
        assert a == arc4.String("0")

    @arc4.abimethod
    def box_map_del(self, key: UInt64) -> None:
        del self.box_map[key]


    @arc4.abimethod
    def delete_box_ref(self) -> None:
        self.box_ref.create(size=UInt64(32))
        assert self.box_ref, "has data"
        self.box_ref.delete()
