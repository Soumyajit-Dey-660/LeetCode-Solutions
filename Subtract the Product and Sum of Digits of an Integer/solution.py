class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        copy1 = n
        copy2 = n
        product = 1
        addition = 0
        
        while copy1 > 0:
            product *= copy1 % 10
            copy1 = copy1 // 10
            
        while copy2 > 0:
            addition += copy2 % 10
            copy2 = copy2 // 10
        
        return product - addition