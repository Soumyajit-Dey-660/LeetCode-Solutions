class MyHashSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.my_set = []

    def add(self, key: int) -> None:
        if key not in self.my_set: 
            self.my_set.append(key)

    def remove(self, key: int) -> None:
        if key in self.my_set:
            del self.my_set[self.my_set.index(key)]

    def contains(self, key: int) -> bool:
        """
        Returns true if this set contains the specified element
        """
        return key in self.my_set


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)