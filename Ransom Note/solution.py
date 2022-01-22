class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        def getCount(word):
            lookUp = {}
            for char in word:
                if lookUp.get(char) == None:
                    lookUp[char] = 1
                else:
                    lookUp[char] += 1
            return lookUp
        ransomLookUp = getCount(ransomNote)
        magazineLookUp = getCount(magazine)
        for char in ransomLookUp:
            if magazineLookUp.get(char) == None or magazineLookUp[char] < ransomLookUp[char]:
                return False
        return True