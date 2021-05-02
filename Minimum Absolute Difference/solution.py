class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        result = []
        min_diff = 10e6+7
        arr.sort()
        for i in range(1, len(arr)):
            min_diff = abs(arr[i] - arr[i-1]) if abs(arr[i] - arr[i-1]) < min_diff else min_diff
        for i in range(1, len(arr)):
            if abs(arr[i] - arr[i-1]) == min_diff:
                result.append([arr[i-1], arr[i]])
        return result