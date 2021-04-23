class Solution:
    def maxDepth(self, s: str) -> int:
        maxBracs = 0
        currBracs = 0
        for letter in s:
            if letter == "(":
                currBracs += 1
        
            if letter == ")":
                currBracs -= 1
                
            maxBracs = currBracs if currBracs > maxBracs else maxBracs
            
        return maxBracs