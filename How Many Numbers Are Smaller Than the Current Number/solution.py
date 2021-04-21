class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        sortedNums = sorted(nums)
        result = [0]*len(nums)
        for ind, number in enumerate(nums):
            result[ind] = sortedNums.index(number)
        return result