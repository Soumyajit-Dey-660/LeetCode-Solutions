class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        count_map = {}
        unique = []
        for val in arr:
            if count_map.get(val) != None:
                count_map[val] += 1
            else:
                count_map[val] = 1
                
        for key in count_map:
            if count_map[key] not in unique:
                unique.append(count_map[key])
            else:
                return False
            
        return True