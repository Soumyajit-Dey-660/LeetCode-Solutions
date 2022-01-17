class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        def checkIfValExist(lookUp, val):
            for key in lookUp:
                if lookUp[key] == val:
                    return True
            return False
        
        words = s.split(' ')
        if len(words) != len(pattern):
            return False
        lookUp = {}
        for i, char in enumerate(pattern):
            if lookUp.get(char) == None:
                if checkIfValExist(lookUp, words[i]):
                    return False
                lookUp[char] = words[i]
            else:
                if lookUp[char] != words[i]:
                    return False
        return True