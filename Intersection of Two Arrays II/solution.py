class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        first_set = {}
        second_set = {}
        result = []
        
        for val in nums1:
            if first_set.get(val) != None:
                first_set[val] += 1
            else:
                first_set[val] = 1
        
        for val in nums2:
            if second_set.get(val) != None:
                second_set[val] += 1
            else:
                second_set[val] = 1
        
        for key in first_set:
            if second_set.get(key) != None:
                limit = second_set[key] if second_set[key] <= first_set[key] else first_set[key]
                for _ in range(limit):
                    result.append(key)
        
        return result