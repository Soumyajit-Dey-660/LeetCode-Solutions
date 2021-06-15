class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        allSmall = False
        if 97 <= ord(word[0]) <= 122:
            allSmall = True
        if allSmall:
            for i in range(1, len(word)):
                if 65 <= ord(word[i]) <= 90:
                    return False
        elif len(word) > 1:
            remainingAllSmall = False
            if 97 <= ord(word[1]) <= 122:
                remainingAllSmall = True
            if remainingAllSmall:
                for i in range(2, len(word)):
                    if 65 <= ord(word[i]) <= 90:
                        return False
            else:
                for i in range(2, len(word)):
                    if 97 <= ord(word[i]) <= 122:
                        return False
        return True
            