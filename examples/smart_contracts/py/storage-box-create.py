from algopy import Box, BoxMap, BoxRef, String, UInt64, arc4

class BoxContract(arc4.ARC4Contract):
    def __init__(self) -> None:
        self.box_str = Box(arc4.String, key=b"BOX_C")
        self.box_map = BoxMap(UInt64, String, key_prefix="")
        self.box_ref = BoxRef()