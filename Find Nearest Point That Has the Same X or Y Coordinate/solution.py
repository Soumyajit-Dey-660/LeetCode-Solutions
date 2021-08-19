class Solution:
    def nearestValidPoint(self, x: int, y: int,
                          points: List[List[int]]) -> int:
        is_valid = False
        for i, point in enumerate(points):
            if point[0] == x or point[1] == y:
                is_valid = True
                continue
            else:
                points[i] = None
        if not is_valid:
            return -1
        smallest_manhattan_distance = float('inf')
        for point in points:
            if point != None:
                manhattan_distance = abs(x - point[0]) + abs(y - point[1])
                smallest_manhattan_distance = manhattan_distance \
                if manhattan_distance < smallest_manhattan_distance \
                else smallest_manhattan_distance
        for i, point in enumerate(points):
            if point != None:
                if abs(x - point[0]) + abs(
                        y - point[1]) == smallest_manhattan_distance:
                    return i
                    