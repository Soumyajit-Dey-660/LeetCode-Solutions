class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        result = 0
        for i in range(len(columnTitle)):
            value = ord(columnTitle[i]) - ord('A') + 1
            if i == len(columnTitle) - 1:
                result += value
                return result
            result += (26 **(len(columnTitle) - i - 1)) * value