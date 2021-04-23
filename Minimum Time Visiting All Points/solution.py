class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        timeTaken = 0
        for i in range(len(points)-1):
            timeTaken += abs(points[i][0] - points[i+1][0]) if abs(points[i][0] - points[i+1][0]) > abs(points[i][1] - points[i+1][1]) else abs(points[i][1] - points[i+1][1])
        return timeTaken