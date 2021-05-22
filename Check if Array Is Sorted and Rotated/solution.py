class Solution:
    def check(self, nums: List[int]) -> bool:
        break_point = False
        for i in range(1, len(nums)):
            if nums[i] < nums[i-1]:
                if break_point: return False
                break_point = True
        if break_point and nums[0] < nums[-1]: return False
        return True