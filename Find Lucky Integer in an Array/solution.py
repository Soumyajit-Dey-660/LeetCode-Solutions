class Solution:
    def findLucky(self, arr: List[int]) -> int:
        count_map = {}
        max_freq = -1
        for val in arr:
            if count_map.get(val) != None:
                count_map[val] += 1
            else:
                count_map[val] = 1
        
        for key in count_map:
            if key == count_map[key] and key > max_freq:
                max_freq = key
        
        return max_freq