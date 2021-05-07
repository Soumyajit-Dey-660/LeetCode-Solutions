class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
        if s == '': return [0, 100]
        total_lines = 1
        remaining = 100
        for letter in s:
            if widths[ord(letter) - ord('a')] <= remaining:
                remaining -= widths[ord(letter) - ord('a')]
            else:
                total_lines += 1
                remaining = 100 - widths[ord(letter) - ord('a')]
        return [total_lines, 100-remaining]          
        