class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
        currOne = -1
        for i, num in enumerate(nums):
            if num == 1:
                currOne = i
                break
        if currOne == -1: return True
        for i in range(currOne + 1, len(nums)):
            if nums[i] == 1:
                if i - currOne - 1 < k:
                    return False
                currOne = i
        return True