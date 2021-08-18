class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        count_map = {}
        for char in s:
            if char not in count_map:
                count_map[char] = 1
            else:
                count_map[char] += 1
        check = count_map[s[0]]
        for key in count_map:
            if count_map[key] != check:
                return False
        return True