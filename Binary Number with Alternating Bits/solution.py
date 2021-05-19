class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        last = -1
        while n > 0:
            if last == -1:
                last = n % 2
                n = n // 2
                continue
            if last == n % 2:
                return False
            last = n % 2
            n = n // 2
        return True