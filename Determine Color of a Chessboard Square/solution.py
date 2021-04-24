class Solution:
    def squareIsWhite(self, coordinates: str) -> bool:
        matrix = []
        for i in range(8):
            if i == 0 or i % 2 == 0:
                matrix.append([False, True]*4)
            else:
                matrix.append([True, False]*4)
        row = ord(coordinates[0]) - 97
        column = int(coordinates[1]) - 1
        return matrix[row][column]