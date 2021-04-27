import math

class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        matches = 0
        
        def getBits(num):
            digits = []
            while num > 0:
                digits.append(math.ceil(num / 2)*2 - num)
                num = num // 2
            digits = digits[::-1]
            return digits
        
        xArr = getBits(x)
        yArr = getBits(y)
        greaterLength = len(xArr) if len(xArr) > len(yArr) else len(yArr)
        
        if len(xArr) != greaterLength:
            temp = [0]*(greaterLength - len(xArr))
            for val in xArr:
                temp.append(val)
            xArr = temp
        else:
            temp = [0]*(greaterLength - len(yArr))
            for val in yArr:
                temp.append(val)
            yArr = temp
        
        for i in range(greaterLength):
            if xArr[i] != yArr[i]:
                matches += 1
                
        return matches