class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        not_matching = 0
        heightsCopy = heights[:]
        heights.sort()
        for i in range(len(heights)):
            if heightsCopy[i] != heights[i]:
                not_matching += 1
        return not_matching