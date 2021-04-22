class Solution:
    def balancedStringSplit(self, s: str) -> int:
        lCount = 0
        rCount = 0
        totalCount = 0
        for letter in s:
            if letter == "L":
                lCount += 1
            if letter == "R":
                rCount += 1
            if lCount == rCount:
                lCount = 0
                rCount = 0
                totalCount += 1
        return totalCount