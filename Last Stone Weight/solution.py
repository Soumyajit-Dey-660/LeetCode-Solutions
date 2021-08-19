class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        def getHighestTwoNums(arr):
            highest = [arr[1], 1] if arr[1] >= arr[0] else [arr[0], 0]
            second_highest = [arr[1], 1] if arr[1] < arr[0] else [arr[0], 0]
            for i in range(2, len(arr)):
                if second_highest[0] < arr[i] <= highest[0]:
                    second_highest = [arr[i], i]
                elif arr[i] > highest[0]:
                    second_highest = [highest[0], highest[1]]
                    highest = [arr[i], i]
            return [highest, second_highest]

        if len(stones) == 1:
            return stones[0]
        if len(stones) == 0:
            return 0
        highest = -1
        second_highest = -1
        while second_highest != 0 and highest != 0:
            two_highest_nums = getHighestTwoNums(stones)
            highest = two_highest_nums[0][0]
            second_highest = two_highest_nums[1][0]
            stones[two_highest_nums[1][1]] = 0
            stones[two_highest_nums[0][1]] = highest - second_highest

        return max(stones)
