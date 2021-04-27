class Solution:
    def reverseWords(self, s: str) -> str:
        resultantString = ''
        words = s.split(' ')
        for i, word in enumerate(words):
            word = word[::-1]
            for letter in word:
                resultantString += letter
            if i != len(words) -1:
                resultantString += ' '
        return resultantString