class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 1: return [[1]]
        result = [[1], [1, 1]]
        for i in range(3, numRows+1):
            temp = [1]
            for j in range(len(result[-1])-1):
                temp.append(result[-1][j] + result[-1][j+1])
            temp.append(1)
            result.append(temp)
        return result