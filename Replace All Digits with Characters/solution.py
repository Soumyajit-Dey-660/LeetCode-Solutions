class Solution:
    def replaceDigits(self, s: str) -> str:
        resultant_string = ''
        for i in range(len(s)//2):
            letter = s[2*i]
            num = s[2*i+1]
            resultant_string += letter + chr(ord(letter) + int(num))
        if len(s) % 2 != 0:
            resultant_string += s[len(s)-1]
        return resultant_string