class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        sorted_arr = []
        positive_pointer = 0
        for num in nums:
            if num < 0: positive_pointer += 1
            else: break
        negative_pointer = positive_pointer - 1
        
        while negative_pointer >= 0 and positive_pointer < len(nums):
            if nums[negative_pointer] * nums[negative_pointer] < nums[positive_pointer] * nums[positive_pointer]:
                sorted_arr.append(nums[negative_pointer] * nums[negative_pointer])
                negative_pointer -= 1
            else:
                sorted_arr.append(nums[positive_pointer] * nums[positive_pointer])
                positive_pointer += 1
        
        while negative_pointer >= 0:
            sorted_arr.append(nums[negative_pointer] * nums[negative_pointer])
            negative_pointer -= 1
        
        while positive_pointer < len(nums):
            sorted_arr.append(nums[positive_pointer] * nums[positive_pointer])
            positive_pointer += 1
            
        return sorted_arr