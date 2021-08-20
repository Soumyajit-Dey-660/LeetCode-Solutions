class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        if len(score) == 1:
            return ["Gold Medal"]
        if len(score) == 2:
            return ["Gold Medal", "Silver Medal"] if score[0] > score[1] else [
                "Silver Medal", "Gold Medal"
            ]
        index_map = {}
        result = [None] * len(score)
        for i, num in enumerate(score):
            index_map[num] = i
        score = sorted(score, reverse=True)
        result[index_map[score[0]]] = "Gold Medal"
        result[index_map[score[1]]] = "Silver Medal"
        result[index_map[score[2]]] = "Bronze Medal"
        for i in range(3, len(score)):
            result[index_map[score[i]]] = str(i + 1)
        return result