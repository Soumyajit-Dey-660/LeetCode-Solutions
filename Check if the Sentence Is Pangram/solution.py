class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        letterMap = {}
        for letter in sentence:
            if letterMap.get(letter) is None:
                letterMap[letter] = 1
            else:
                letterMap[letter] == 1
        result = True if len(letterMap) == 26 else False
        return result