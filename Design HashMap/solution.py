class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.my_map = []
        
        

    def put(self, key: int, value: int) -> None:
        """
        value will always be non-negative.
        """
        found = False
        for i,val in enumerate(self.my_map):
            if val[0] == key:
                self.my_map[i][1] = value
                found = True
                break
        if not found:
            self.my_map.append([key, value])
        

    def get(self, key: int) -> int:
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        for val in self.my_map:
            if val[0] == key:
                return val[1]
        return -1
        

    def remove(self, key: int) -> None:
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        for i, val in enumerate(self.my_map):
            if val[0] == key:
                del self.my_map[i]
                break
        


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)