class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        total = 0
        for number in nums:
            if len(str(number)) % 2 == 0:
                total += 1
        return total