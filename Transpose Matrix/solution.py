class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        transpose_matrix = [[0]*len(matrix) for _ in range(len(matrix[0]))]
        for i in range(len(matrix[0])):
            for j in range(len(matrix)):
                transpose_matrix[i][j] = matrix[j][i]
        return transpose_matrix