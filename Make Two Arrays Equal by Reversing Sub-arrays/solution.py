class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        arr_map = {}
        target_map = {}
        for num in arr:
            if arr_map.get(num) != None:
                arr_map[num] += 1
            else:
                arr_map[num] = 1
        
        for num in target:
            if target_map.get(num) != None:
                target_map[num] += 1
            else:
                target_map[num] = 1
        if(arr_map == target_map): return True
        return False