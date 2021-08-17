class Solution:
    def minPartitions(self, n: str) -> int:
        maxNum = 0
        for num in n:
            if int(num) > maxNum:
                maxNum = int(num)
        return maxNum