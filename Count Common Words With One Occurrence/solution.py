class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        lookUp1 = {}
        lookUp2 = {}
        result = 0
        for word in words1:
            if lookUp1.get(word) == None:
                lookUp1[word] = 1
            else:
                lookUp1[word] += 1
        for word in words2:
            if lookUp2.get(word) == None:
                lookUp2[word] = 1
            else:
                lookUp2[word] += 1
        for key in lookUp1:
            if lookUp1[key] == 1 and lookUp2.get(key) != None:
                if lookUp2[key] == 1:
                    result += 1
        return result