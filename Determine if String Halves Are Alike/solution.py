class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        firstHalfCount = 0
        secondHalfCount = 0
        for letter in s[: len(s)//2]:
            if letter.lower() == 'a' or letter.lower() == 'e' or letter.lower() == 'i' or letter.lower() == 'o' or letter.lower() == 'u':
                firstHalfCount += 1
        for letter in s[len(s)//2:]:
            if letter.lower() == 'a' or letter.lower() == 'e' or letter.lower() == 'i' or letter.lower() == 'o' or letter.lower() == 'u':
                secondHalfCount += 1
        if firstHalfCount == secondHalfCount:
            return True
        return False