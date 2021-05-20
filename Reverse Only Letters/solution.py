class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        specials = []
        result = ''
        for i in range(len(s)):
            if 65 <= ord(s[i]) <= 90 or 97 <= ord(s[i]) <= 122:
                result += s[i]
            else:
                specials.append([i, s[i]])
        result = result[::-1]
        for special in specials:
            result = result[: special[0]] + special[1] + result[special[0]: ]
        return result