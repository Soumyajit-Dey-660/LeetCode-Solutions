import math

class Solution:
    def reverse(self, x: int) -> int:
        reverse = 0
        isUnsigned = True if x<0 else False
        x = abs(x)
        while x > 0:
            rem = x % 10
            x = x // 10
            reverse = reverse * 10 + rem
        reverse = reverse if reverse <= math.pow(2, 31)-1 and reverse >= -(math.pow(2, 31)) else 0
        reverse = -reverse if isUnsigned else reverse
        return reverse
