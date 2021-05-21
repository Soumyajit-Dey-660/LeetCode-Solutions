class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
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
        for key in t_map:
            if not s_map.get(key) or t_map[key] > s_map[key]:
                return key

# Different Approach
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        for char in s:
            ind = t.index(char)
            t = t[: ind] + t[ind+1: ]
        return t