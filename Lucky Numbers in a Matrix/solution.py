class Solution:
    def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
        compare_pointer = 0
        result = []
        while compare_pointer < len(matrix[0]):
            max_num = matrix[0][compare_pointer]
            max_index = 0
            for i in range(1, len(matrix)):
                if matrix[i][compare_pointer] > max_num:
                    max_num = matrix[i][compare_pointer]
                    max_index = i
            if max_num == min(matrix[max_index]):
                result.append(max_num)
            compare_pointer += 1
            
        return result