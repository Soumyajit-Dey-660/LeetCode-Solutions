class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        count_map = {}
        for num in nums:
            if count_map.get(num): return True
            else: count_map[num] = True
        return False