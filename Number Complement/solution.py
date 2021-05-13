import math

class Solution:
    def findComplement(self, num: int) -> int:
        output = 0
        def get_complement_binary(n):
            arr = []
            while n > 0:
                arr.append(1 if n % 2 == 0 else 0)
                n = n // 2
            arr.reverse()
            return arr
        complement_binary = get_complement_binary(num)
        for i in range(len(complement_binary)):
            output += math.pow(2, len(complement_binary)-i-1) if complement_binary[i] == 1 else 0
        return int(output)