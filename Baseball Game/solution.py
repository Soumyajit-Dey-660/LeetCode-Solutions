class Solution:
    def calPoints(self, ops: List[str]) -> int:
        scores = []
        for op in ops:
            if op == "+":
                scores.append(scores[len(scores)-1] + scores[len(scores)-2])
            elif op == "D":
                scores.append(scores[len(scores)-1]*2)
            elif op == "C":
                scores = scores[:len(scores)-1]
            else:
                scores.append(int(op))
        return sum(scores)