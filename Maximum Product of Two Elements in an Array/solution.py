class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        maxValueIndex = 0 if nums[0] > nums[1] else 1
        secondMaxValueIndex = 0 if nums[0] <= nums[1] else 1
        for i in range(2, len(nums)):
            if nums[i] >= nums[maxValueIndex]:
                secondMaxValueIndex = maxValueIndex
                maxValueIndex = i
            elif nums[i] > nums[secondMaxValueIndex]:
                secondMaxValueIndex = i
        return (nums[maxValueIndex] - 1) * (nums[secondMaxValueIndex] - 1)