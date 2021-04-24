class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        maxSize = 0
        count = 0
        for rectangle in rectangles:
            if min(rectangle) > maxSize:
                maxSize = min(rectangle)
        for rectangle in rectangles:
            if min(rectangle) == maxSize:
                count += 1
        return count