class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        maxHeight = 0
        currentHeight = 0
        for height in gain:
            currentHeight += height
            maxHeight = currentHeight if currentHeight > maxHeight else maxHeight
        return maxHeight