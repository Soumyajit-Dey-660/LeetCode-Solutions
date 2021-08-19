class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        current = [1, 1]
        if rowIndex == 0:
            return [1]
        if rowIndex == 1:
            return current
        previous = current
        for i in range(2, rowIndex + 1):
            current = [1]
            for j in range(len(previous) - 1):
                current.append(previous[j] + previous[j + 1])
            current.append(1)
            previous = current
        return current