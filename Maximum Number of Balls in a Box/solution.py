class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        lookup = {}
        maximum = -1
        
        def digits(num):
            digArr = []
            while num > 0:
                digArr.append(num % 10)
                num = num // 10
            return digArr
        
        
        for num in range(lowLimit, highLimit+1):
            totalSum = sum(digits(num))
            if lookup.get(totalSum) != None:
                lookup[totalSum] += 1
            else:
                lookup[totalSum] = 1

        for key in lookup:
            maximum = lookup.get(key) if lookup.get(key) > maximum else maximum
            
        return maximum