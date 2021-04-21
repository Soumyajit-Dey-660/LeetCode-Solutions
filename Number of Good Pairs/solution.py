class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = 0
        countMap = {}
        for number in nums:
            if countMap.get(number) is None:
                countMap[number] = 1
            else:
                count += countMap[number]
                countMap[number] += 1
        return count