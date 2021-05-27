class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums.append(1)
        for i in range(len(nums)-1): # Iterate till len(nums) - 1 because we have put an extra element there
            index = abs(nums[i])
            nums[index] = -abs(nums[index])
        for i in range(len(nums)):
            if nums[i] > 0:
                return i
        return nums.index(0)