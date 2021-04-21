class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        count = 0
        for letter in stones:
            if letter in set(jewels):
                count += 1
        return count