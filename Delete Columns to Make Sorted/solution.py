class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        delete_column = 0
        pointer = 0
        while (pointer < len(strs[0])):
            for i in range(1, len(strs)):
                if strs[i-1][pointer] > strs[i][pointer]:
                    delete_column += 1
                    break
            pointer += 1
        return delete_column
            