# O(1) Space 
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        compare = nums[0]
        curr = 1
        last_index = -1
        for i in range(1, len(nums)):
            if compare == nums[i]:
                curr += 1
            else:
                last_index = i
                break
        if curr > len(nums) // 2: return compare
        compare = nums[last_index]
        curr = 1
        for i in range(last_index+1, len(nums)):
            if nums[i] == compare: curr += 1
            else:
                if curr > len(nums) // 2: return compare
                compare = nums[i]
                curr = 1
        if curr > len(nums) // 2: return compare