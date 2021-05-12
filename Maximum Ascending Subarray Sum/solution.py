class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        max_sum = nums[0]
        curr_sum = nums[0]
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                curr_sum += nums[i]
            else:
                max_sum = curr_sum if curr_sum > max_sum else max_sum
                curr_sum = nums[i]
        max_sum = curr_sum if curr_sum > max_sum else max_sum
        return max_sum
            