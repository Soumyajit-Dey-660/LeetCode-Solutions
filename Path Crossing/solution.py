class Solution:
    def isPathCrossing(self, path: str) -> bool:
        positions = []
        current = [0, 0]
        positions.append(current)
        for direction in path:   
            if direction == "N":
                current = [current[0], current[1] + 1]
            elif direction == 'E':
                current = [current[0] + 1, current[1]]
            elif direction == 'S':
                current = [current[0], current[1] - 1]
            elif direction == 'W':
                current = [current[0] - 1, current[1]]
                
            if current in positions:
                return True
            else: positions.append(current)
            
        return False