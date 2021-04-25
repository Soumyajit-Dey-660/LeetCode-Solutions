class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        result = []
        
        def digits(num):
            digitsArr = []
            while num > 0:
                digitsArr.append(num % 10)
                num = num // 10
            return digitsArr
        
        
        for i in range(left, right+1):
            flag = True
            digitsArr = digits(i)   
            if 0 in digitsArr:
                continue      
            for num in digitsArr:
                if i % num != 0:
                    flag = False
                    break
            if flag:
                result.append(i)
                
        return result