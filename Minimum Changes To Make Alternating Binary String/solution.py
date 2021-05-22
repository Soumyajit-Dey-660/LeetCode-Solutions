# A binary string can be made alternating two ways ->
# 1001 cand be made -> 1. 1010 and also 2. 0101
# See which one takes less number of operations and return that as answer
class Solution:
    def minOperations(self, s: str) -> int:
        num_of_ops = 0
        num_of_other = 1
        other = s[:]
        for i in range(1, len(s)):
            if s[i] == s[i-1]:
                temp = "1" if s[i] == '0' else '0'
                s = s[:i] + temp + s[i+1:]
                num_of_ops += 1
        temp = "1" if other[0] == '0' else '0'
        other = temp + other[1:]
        for i in range(1, len(other)):
            if other[i] == other[i-1]:
                aux = '1' if other[i] == '0' else '0'
                other = other[:i] + aux + other[i+1:]
                num_of_other += 1
        return min(num_of_ops, num_of_other)            