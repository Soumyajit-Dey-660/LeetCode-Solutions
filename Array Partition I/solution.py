class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        result = 0
        nums = sorted(nums)
        for i in range(len(nums)//2):
            result += nums[2*i] if nums[2*i] <= nums[2*i+1] else nums[2*i+1]
        return result