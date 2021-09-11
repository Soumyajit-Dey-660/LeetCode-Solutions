class Solution:
    def countBits(self, n: int) -> List[int]:
        result = []
        def getBinaryOnes(num):
            no_of_ones = 0
            while(num > 0):
                if num % 2 != 0:
                    no_of_ones += 1
                num = num // 2
            return no_of_ones
        for i in range(n+1):
            result.append(getBinaryOnes(i))
        return result