class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        lookUp = {}
        for char in arr:
            if lookUp.get(char) == None:
                lookUp[char] = 1
            elif lookUp[char] == 1:
                lookUp[char] += 1
        for key in list(lookUp):
            if lookUp[key] != 1:
                del lookUp[key]
        if k > len(lookUp):
            return ""
        iteration = 0
        for key in lookUp:
            iteration += 1
            if iteration == k:
                return key