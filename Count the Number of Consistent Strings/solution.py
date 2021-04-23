class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        consistentCount = 0
        allowedSet = set(allowed)
        for word in words:
            if set(word).issubset(allowedSet):
                consistentCount += 1
        return consistentCount