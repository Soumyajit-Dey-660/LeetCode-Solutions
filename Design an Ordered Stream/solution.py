class OrderedStream:

    def __init__(self, n: int):
        self.n = n
        self.ptr = 0
        self.arr = [None]*(n+1)

    def insert(self, idKey: int, value: str) -> List[str]:
        self.arr[idKey-1] = value
        result = []
        while(self.arr[self.ptr] != None and self.ptr <= self.n-1):
            result.append(self.arr[self.ptr])
            self.ptr += 1
        return result


# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream(n)
# param_1 = obj.insert(idKey,value)