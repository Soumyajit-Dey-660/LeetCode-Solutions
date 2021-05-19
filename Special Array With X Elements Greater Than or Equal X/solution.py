class Solution:
    def specialArray(self, nums: List[int]) -> int:
        for output in range(len(nums)+1):
            not_small = 0
            for val in nums:
                if val >= output:
                    not_small += 1
            if not_small == output:
                return output
        return -1