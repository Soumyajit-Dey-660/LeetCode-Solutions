class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        word1 = s1.split(' ')
        word2 = s2.split(' ')
        uncommon1 = {}
        uncommon2 = {}
        result = []
        for word in word1:
            if uncommon1.get(word) != None:
                uncommon1[word] += 1
            else:
                uncommon1[word] = 1
        for word in word2:
            if uncommon2.get(word) != None:
                uncommon2[word] += 1
            else:
                uncommon2[word] = 1
        for key in uncommon1:
            if key not in uncommon2 and uncommon1[key] == 1:
                result.append(key)
        for key in uncommon2:
            if key not in uncommon1 and uncommon2[key] == 1:
                result.append(key)
        return result
        