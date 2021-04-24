class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        totalSum = 0
        for i, row in enumerate(mat):
            totalSum += row[i] + row[len(row)-i-1]
        totalSum = totalSum - mat[len(mat)//2][len(mat)//2] if len(mat) % 2 != 0 else totalSum
        return totalSum