class Solution:
    def maxPower(self, s: str) -> int:
        currLength = 1
        maxLength = 1
        currChar = s[0]
        for i in range(1, len(s)):
            if s[i] == currChar: currLength += 1
            else:
                maxLength = currLength if currLength > maxLength else maxLength
                currLength = 1
                currChar = s[i]
        maxLength = currLength if currLength > maxLength else maxLength
        return maxLength