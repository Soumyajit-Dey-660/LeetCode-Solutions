class Solution:
    def sortSentence(self, s: str) -> str:
        s = s.split(" ")
        result = [""] * len(s)
        for word in s:
            ind = int(word[-1]) - 1
            result[ind] = word[:-1]
        return " ".join(result)
