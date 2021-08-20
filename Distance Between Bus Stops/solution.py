class Solution:
    def distanceBetweenBusStops(self, distance: List[int], start: int,
                                destination: int) -> int:
        clockwise_distance = 0
        anti_clockwise_distance = 0
        if start == destination:
            return 0
        elif start < destination:
            for i in range(start, destination):
                clockwise_distance += distance[i]
            for i in range(0, start):
                anti_clockwise_distance += distance[i]
            for i in range(destination, len(distance)):
                anti_clockwise_distance += distance[i]
            return min(clockwise_distance, anti_clockwise_distance)
        else:
            for i in range(destination, start):
                anti_clockwise_distance += distance[i]
            for i in range(0, destination):
                clockwise_distance += distance[i]
            for i in range(start, len(distance)):
                clockwise_distance += distance[i]
            return min(clockwise_distance, anti_clockwise_distance)