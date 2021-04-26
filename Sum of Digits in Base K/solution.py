class Solution:
    def sumBase(self, n: int, k: int) -> int:
        digits = []
        while n >= k:
            digits.append(n - (n // k)*k)
            n = n // k
        digits.append(n)
        return sum(digits)