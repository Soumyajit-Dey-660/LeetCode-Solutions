class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        lookUp1 = {}
        lookUp2 = {}
        for char in word1:
            if lookUp1.get(char) == None:
                lookUp1[char] = 1
            else:
                lookUp1[char] += 1
        for char in word2:
            if lookUp2.get(char) == None:
                lookUp2[char] = 1
            else:
                lookUp2[char] += 1
        for key in lookUp1:
            if lookUp2.get(key) == None and lookUp1[key] > 3:
                return False
            elif lookUp2.get(key) != None:
                if abs(lookUp2[key] - lookUp1[key]) > 3:
                    return False
        for key in lookUp2:
            if lookUp1.get(key) == None and lookUp2[key] > 3:
                return False
            elif lookUp1.get(key) != None:
                if abs(lookUp2[key] - lookUp1[key]) > 3:
                    return False
        return True