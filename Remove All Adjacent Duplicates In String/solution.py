class Solution:
    def removeDuplicates(self, S: str) -> str:
        made_changes = True
        while True:
            if not made_changes:
                return S
            made_changes = False
            for i in range(1, len(S)):
                if S[i] == S[i-1]:
                    S = S[:i-1] + S[i+1:]
                    made_changes = True
                    break