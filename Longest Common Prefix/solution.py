class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 1: return strs[0]
        prefix = ""
        smaller = len(strs[0]) if len(strs[1]) > len(strs[0]) else len(strs[1])
        for i in range(smaller):
            if strs[0][i] == strs[1][i]:
                prefix += strs[0][i]
            else:
                break
        for i in range(2, len(strs)):
            if strs[i] == "": return ""
            if len(prefix) == 0:
                return ""
            smaller = len(
                strs[i]) if len(strs[i]) < len(prefix) else len(prefix)
            for j in range(smaller):
                if len(
                        strs[i]
                ) == smaller and j == smaller - 1 and strs[i][j] == prefix[j]:
                    prefix = strs[i]
                if strs[i][j] == prefix[j]:
                    continue
                else:
                    prefix = prefix[:j]
                    break
        return prefix