class MinStack:
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.arr = []

    def push(self, val: int) -> None:
        if len(self.arr) != 0:
            self.arr.append(min(self.arr[-2], val))
        else:
            self.arr.append(val)
        self.arr.append(val)

    def pop(self) -> None:
        self.arr = self.arr[:-2]

    def top(self) -> int:
        return self.arr[-1]

    def getMin(self) -> int:
        return self.arr[-2]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()