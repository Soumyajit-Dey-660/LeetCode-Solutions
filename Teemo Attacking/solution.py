class Solution:
    def findPoisonedDuration(self, timeSeries: List[int],
                             duration: int) -> int:
        total = 0
        for i in range(len(timeSeries) - 1):
            if timeSeries[i] == timeSeries[i + 1]:
                continue
            elif timeSeries[i] + duration > timeSeries[i + 1]:
                total += timeSeries[i + 1] - timeSeries[i]
            else:
                total += duration
        total += duration
        return total