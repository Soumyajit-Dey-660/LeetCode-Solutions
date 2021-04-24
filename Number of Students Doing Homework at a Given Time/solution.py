class Solution:
    def busyStudent(self, startTime: List[int], endTime: List[int], queryTime: int) -> int:
        total = 0
        for i in range(len(startTime)):
            if startTime[i] <= queryTime <= endTime[i]:
                total += 1
        return total