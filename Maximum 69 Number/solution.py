class Solution:
    def maximum69Number (self, num: int) -> int:
        numStr = str(num)
        for i, digit in enumerate(numStr):
            if digit == '6':
                numStr = numStr[:i] + "9" + numStr[i+1:]
                return int(numStr)
        return int(numStr)