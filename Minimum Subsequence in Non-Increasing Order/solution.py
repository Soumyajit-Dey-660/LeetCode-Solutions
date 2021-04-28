class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        result = []
        if (len(nums) == 1): return nums
        nums.sort(reverse=True)
        for i in range(1, len(nums)):
            if sum(nums[:i]) > sum(nums[i:]):
                return nums[:i]
        return nums