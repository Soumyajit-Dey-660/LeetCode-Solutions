class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        oddCount = 0
        matrix = [[0] * n for _ in range(m)]
        
        for values in indices:
            row, column = values
            for i in range(n):
                matrix[row][i] += 1
            for i in range(m):
                matrix[i][column] += 1
            
        for i in range(m):
            for j in range(n):
                if matrix[i][j] % 2 != 0:
                    oddCount += 1
        return oddCount