class Solution:
    def hammingWeight(self, n: int) -> int:
        total_bits = 0
        while (n > 0):
            if n % 2 == 1:
                total_bits += 1
            n = n // 2
        return total_bits
