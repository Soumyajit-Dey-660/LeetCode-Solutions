class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        searchLeft = -1
        searchRight = -1
        # search in left side of start
        for i in range(start+1):
            if nums[i] == target:
                searchLeft = i
                # don't break from loop because if target exists in later portion 
                # of array then abs(searchLeft-start) will be minimized
        # search in right side of start
        for i in range(start, len(nums)):
            if nums[i] == target:
                searchRight = i
                break
                # break from loop because if target exists in later portion of
                # array then abs(searchRight - start) will be maximized
        minLeft = start - searchLeft if searchLeft != -1 else len(nums)
        minRight = searchRight - start if searchRight != -1 else len(nums)
        return min(minLeft, minRight)