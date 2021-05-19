class Solution:
    def addDigits(self, num: int) -> int:
        return num % 9 or 9 if num != 0 else 0