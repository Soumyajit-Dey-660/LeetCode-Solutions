class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        result = []
        currIndex = 0
        nextIndex = 0
        lastIndex = 0
        flag = False
        while currIndex < len(s):
            if s[currIndex] == c:
                flag = True
                break
            currIndex += 1
        if not flag: return []
        if currIndex == len(s) - 1: return [x for x in range(len(s)-1, -1, -1)]
        for x in range(currIndex, -1, -1): result.append(x)
        nextIndex = currIndex + 1
        while nextIndex < len(s):
            if s[nextIndex] == c:
                for x in range(currIndex + 1, nextIndex + 1):
                    result.append(min(x - currIndex, nextIndex - x))
                currIndex = nextIndex
            nextIndex += 1
        lastIndex = currIndex
        currIndex += 1
        while currIndex < len(s):
            result.append(currIndex - lastIndex)
            currIndex += 1
        return result