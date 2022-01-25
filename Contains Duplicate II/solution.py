class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        lookUp = {}
        for i, num in enumerate(nums):
            if lookUp.get(num) == None:
                lookUp[num] = i
            else:
                if i - lookUp[num] <= k:
                    return True
                lookUp[num] = i
        return False