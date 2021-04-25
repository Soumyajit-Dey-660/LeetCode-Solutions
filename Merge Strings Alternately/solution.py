class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = ''
        smaller = len(word1) if len(word1) <= len(word2) else len(word2)
        for i in range(smaller):
            result += word1[i] + word2[i]
        if len(word1) == len(word2):
            return result
        elif len(word1) > len(word2):
            result += word1[len(word2): ]
        else:
            result += word2[len(word1): ]
        return result