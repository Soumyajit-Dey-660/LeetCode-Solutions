class Solution:
    def arraySign(self, nums: List[int]) -> int:
        product = 1
        result = 0
        for num in nums:
            product *= num
        if product > 0:
            result = 1
        elif product < 0:
            result = -1
        return result