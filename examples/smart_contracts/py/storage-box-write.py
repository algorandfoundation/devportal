from algopy import Box, BoxMap, BoxRef, Bytes, Global, String, Txn, UInt64, arc4

class BoxContract(arc4.ARC4Contract):
    def __init__(self) -> None:
        self.box_str = Box(arc4.String, key=b"BOX_C")
        self.box_map = BoxMap(UInt64, String, key_prefix="")
        self.box_ref = BoxRef()

    @arc4.abimethod
    def set_box(self, value: arc4.String) -> None:
        self.box_str.value = value

    @arc4.abimethod
    def set_box_map(self, key: UInt64, value: String) -> None:
        self.box_map[key] = value

    @arc4.abimethod
    def set_box_ref(self) -> None:
        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes

        box_ref = BoxRef(key=String("blob"))
        assert not box_ref, "no data"

        # create
        assert box_ref.create(size=32)
        assert box_ref, "has data"

        # update
        box_ref.put(sender_bytes + app_address)
        assert box_ref, "Blob exists"
        assert box_ref.length == 64