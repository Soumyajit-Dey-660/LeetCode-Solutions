class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        result = []
        for i in range(len(nums)//2):
            result.extend([nums[2*i+1]]*nums[2*i])
        return result