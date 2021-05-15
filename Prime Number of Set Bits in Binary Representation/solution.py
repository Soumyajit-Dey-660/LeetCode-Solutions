import math
class Solution:
    def countPrimeSetBits(self, left: int, right: int) -> int:
        total = 0
        def total_set_bits(num):
            set_bits = 0
            while num > 0:
                if num % 2 != 0: set_bits += 1
                num = num // 2
            return set_bits
        
        def is_prime(num):
            if num == 1: return False
            for i in range(2, int(math.sqrt(num))+1):
                if num % i == 0: return False
            return True
        
        for i in range(left if left != 1 else 2, right+1):
            if is_prime(total_set_bits(i)): total += 1
        
        return total