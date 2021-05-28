class Solution:
    def firstUniqChar(self, s: str) -> int:
        store = [0]*26
        for char in s:
            index = ord(char) - ord('a')
            store[index] += 1
        for i in range(len(s)):
            index = ord(s[i]) - ord('a')
            if store[index] == 1:
                return i
        return -1