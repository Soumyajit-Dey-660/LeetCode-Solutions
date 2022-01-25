class Solution:
    def frequencySort(self, s: str) -> str:
        result = ""
        lookUp = {}
        for char in s:
            if lookUp.get(char) == None:
                lookUp[char] = 1
            else:
                lookUp[char] += 1
        sortedLookUp = dict(sorted(lookUp.items(), key=lambda item: item[1], reverse=True))
        for char in sortedLookUp:
            result += lookUp[char] * char
        return result