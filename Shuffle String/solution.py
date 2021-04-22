class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        result = ['_']*len(indices)
        resultantString = ''
        for i in range(len(indices)):
            result[indices[i]] = s[i]
        for letter in result:
            resultantString += letter
        return resultantString