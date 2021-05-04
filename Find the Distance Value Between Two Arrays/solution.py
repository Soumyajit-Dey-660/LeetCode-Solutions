class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        distance_value = 0
        for val1 in arr1:
            flag = False
            for val2 in arr2:
                if abs(val1-val2) <= d:
                    flag = True
                    break
            if not flag:
                distance_value += 1
        return distance_value