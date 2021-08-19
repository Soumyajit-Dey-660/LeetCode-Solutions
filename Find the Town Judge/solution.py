class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        trust_map = {}
        trust_nobody = []
        for i in range(1, n + 1):
            trust_map[i] = []
        for item in trust:
            trust_map[item[0]].append(item[1])
        for key, value in trust_map.items():
            if len(value) == 0:
                if len(trust_nobody) == 0:
                    trust_nobody = [key]
                else:
                    return -1
        if len(trust_nobody) == 0: return -1
        for key, value in trust_map.items():
            if key != trust_nobody[0]:
                if trust_nobody[0] not in value:
                    return -1
        return trust_nobody[0]