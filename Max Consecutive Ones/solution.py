class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        first_pointer = 0
        second_pointer = 0
        max_consecutive_ones = 0
        while second_pointer < len(nums):
            if nums[first_pointer] != 1:
                first_pointer += 1
                second_pointer += 1
            else:
                while second_pointer < len(nums) and nums[second_pointer] == 1:
                    second_pointer += 1
                consecutive_ones = second_pointer - first_pointer
                max_consecutive_ones = consecutive_ones \
                if consecutive_ones > max_consecutive_ones else max_consecutive_ones
                first_pointer = second_pointer
        return max_consecutive_ones