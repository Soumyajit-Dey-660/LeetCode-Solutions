class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        start = []
        destination = []
        for path in paths:
            start.append(path[0])
            destination.append(path[1])
        for city in destination:
            if city not in start:
                return city