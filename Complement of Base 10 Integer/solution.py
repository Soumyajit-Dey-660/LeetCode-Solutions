import math
class Solution:
    def bitwiseComplement(self, n: int) -> int:
        if n == 0: return 1
        def getBinary(num):
            # 5 returns [1, 0, 1]
            result = []
            while num > 0:
                result.append(num%2)
                num = num // 2
            result.reverse()
            return result
        
        def getDecimal(num_arr):
            # [0, 1, 0] returns 2
            result = 0
            for i, num in enumerate(num_arr):
                result += math.pow(2, len(num_arr)-i-1) if num == 1 else 0
            return result
        
        def complementArr(arr):
            # [1, 0, 1] return [0, 1, 0]
            for i in range(len(arr)):
                arr[i] = 0 if arr[i] == 1 else 1
            return arr
                
        
        return int(getDecimal(complementArr(getBinary(n))))
        