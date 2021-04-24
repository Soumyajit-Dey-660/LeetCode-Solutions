class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        result = ''
        if k > len(s):
            return
        words = list(s.split(' '))
        for i in range(k):
            result += words[i]
            if i < k - 1:
                result += ' '
        return result
