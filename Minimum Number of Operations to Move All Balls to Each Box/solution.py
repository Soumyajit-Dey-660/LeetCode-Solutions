class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        result = []
        for i in range(len(boxes)):
            no_of_ops = 0
            for j in range(len(boxes)):
                if i == j:
                    continue
                else:
                    if boxes[j] == '1':
                        no_of_ops += abs(i - j)
            result.append(no_of_ops)
        return result