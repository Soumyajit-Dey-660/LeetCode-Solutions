class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        result = []
        for i, val in enumerate(nums):
            result.insert(index[i], val)
        return result