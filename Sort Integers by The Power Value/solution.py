class Solution:
    def getKth(self, lo: int, hi: int, k: int) -> int:
        stepsMap = []
        def getSteps(num):
            totalSteps = 0
            while num != 1:
                num = num // 2 if num % 2 == 0 else num * 3 + 1
                totalSteps += 1
            return totalSteps
        for i in range(lo, hi+1):
            stepsMap.append([i, getSteps(i)])
        stepsMap = sorted(stepsMap, key=lambda x: x[1])
        return stepsMap[k-1][0]