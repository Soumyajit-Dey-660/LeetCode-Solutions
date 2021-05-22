class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        increasing = False
        decreasing = False
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                increasing = True
                break
            if nums[i] < nums[i-1]:
                decreasing = True
                break
        if not decreasing and not increasing: # [1, 1, 1]
            return True
        for i in range(1, len(nums)):
            if increasing:
                if nums[i] < nums[i-1]:
                    return False
            else:
                if nums[i] > nums[i-1]:
                    return False
        return True