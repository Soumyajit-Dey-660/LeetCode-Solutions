class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        def isSorted(word1, word2):
            for i in range(len(word1)):
                try:
                    if order.index(word1[i]) == order.index(word2[i]):
                        continue
                    elif order.index(word1[i]) < order.index(word2[i]):
                        return True
                    else:
                        return False
                except:
                    return False
            return True

        for i in range(1, len(words)):
            if not isSorted(words[i - 1], words[i]):
                return False
        return True
