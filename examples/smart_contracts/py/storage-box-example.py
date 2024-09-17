from algopy import BoxMap, arc4

class UserStruct(arc4.Struct):
    name: arc4.String
    id: arc4.UInt64
    asset: arc4.UInt64

class KitchenSink(arc4.ARC4Contract):
    def __init__(self) -> None:
        self.user_map = BoxMap(arc4.UInt64, UserStruct, key_prefix="users")

    @arc4.abimethod
    def box_map_test(self) -> bool:
        key_0 = arc4.UInt64(0)
        key_1 = arc4.UInt64(1)
        value = UserStruct(
            arc4.String('testName'),
            arc4.UInt64(70),
            arc4.UInt64(2)
        )

        self.user_map[key_0] = value.copy()
        assert self.user_map[key_0].bytes.length == value.bytes.length
        assert self.user_map.length(key_0) == value.bytes.length
        return True
    
    @arc4.abimethod
    def box_map_set(self, key: arc4.UInt64, value: UserStruct) -> bool:
        self.user_map[key]= value.copy()
        assert self.user_map[key] == value
        return True

    @arc4.abimethod
    def box_map_get(self, key: arc4.UInt64) -> UserStruct:
        return self.user_map[key]

    @arc4.abimethod
    def box_map_exists(self, key: arc4.UInt64) -> bool:
        return key in self.user_map
