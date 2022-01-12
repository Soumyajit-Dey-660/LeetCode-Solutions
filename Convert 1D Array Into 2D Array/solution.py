class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        if m * n != len(original):
            return []
        result = []
        counter = 0
        for _ in range(m):
            temp = []
            for i in range(n):
                temp.append(original[counter])
                counter += 1
                if i == n-1:
                    result.append(temp)
        return result
