class Solution:
    def numberOfSteps(self, num: int) -> int:
        noOfSteps = 0
        while(num != 0):
            if(num % 2 == 0):
                num /= 2
                noOfSteps += 1
            else:
                num -= 1
                noOfSteps += 1
        return noOfSteps