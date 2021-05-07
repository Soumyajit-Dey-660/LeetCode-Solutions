class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        min_sum = 10e6+7
        curr_sum = 0
        for val in nums:
            curr_sum += val
            if curr_sum < min_sum:
                min_sum = curr_sum
        return 1-min_sum if min_sum < 0 else 1