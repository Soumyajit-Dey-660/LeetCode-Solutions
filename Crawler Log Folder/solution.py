class Solution:
    def minOperations(self, logs: List[str]) -> int:
        deeper_level = 0
        for directory in logs:
            if directory[0] == '.':
                if directory[1] == '.':
                    deeper_level = deeper_level - 1 if deeper_level > 0 else 0
            else:
                deeper_level += 1
        return deeper_level