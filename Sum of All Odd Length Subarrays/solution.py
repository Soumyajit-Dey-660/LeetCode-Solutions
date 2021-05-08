class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        curr_odd = 1
        result_sum = 0
        while curr_odd <= len(arr):
            for i in range(len(arr)):
                if curr_odd + i > len(arr): break
                for j in range(i, curr_odd+i): result_sum += arr[j]
            curr_odd += 2
        return result_sum