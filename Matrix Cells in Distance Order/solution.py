class Solution:
    def allCellsDistOrder(self, R: int, C: int, r0: int, c0: int) -> List[List[int]]:
        distance_map = {}
        result = []
        for row in range(R):
            for column in range(C):
                distance_map[(row, column)] = abs(row - r0) + abs(column - c0)
        distance_map = dict(sorted(distance_map.items(), key=lambda x:x[1]))
        for key in distance_map:
            result.append([key[0], key[1]])
        return result