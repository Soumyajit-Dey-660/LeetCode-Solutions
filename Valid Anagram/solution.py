class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_map = {}
        t_map = {}
        for char in s:
            if s_map.get(char):
                s_map[char] += 1
            else:
                s_map[char] = 1
        for char in t:
            if t_map.get(char):
                t_map[char] += 1
            else:
                t_map[char] = 1
        for key in s_map:
            if s_map[key] != t_map.get(key):
                return False
        for key in t_map:
            if t_map[key] != s_map.get(key):
                return False
        return True