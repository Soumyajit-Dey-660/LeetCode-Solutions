class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        unique_map = {}
        total = 0
        for val in nums:
            if unique_map.get(val) != None:
                unique_map[val] += 1
            else:
                unique_map[val] = 1
    
        for key in unique_map:
            if unique_map[key] == 1:
                total += key
                
        return total