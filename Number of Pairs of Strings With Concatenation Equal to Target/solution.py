class Solution:
    def numOfPairs(self, nums: List[str], target: str) -> int:
        no_of_pairs = 0
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i == j:
                    continue
                else:
                    if nums[i] + nums[j] == target:
                        no_of_pairs += 1
        return no_of_pairs