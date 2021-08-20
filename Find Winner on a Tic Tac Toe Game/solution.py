class Solution:
    def tictactoe(self, moves: List[List[int]]) -> str:
        matrix = [["-" for _ in range(3)] for _ in range(3)]
        for i, move in enumerate(moves):
            row, column = move
            if i % 2 == 0:
                matrix[row][column] = 'X'
            else:
                matrix[row][column] = 'O'
        for row in range(3):
            for col in range(3):
                if matrix[row][col] != '-':
                    if row == 0 and col == 0:
                        # 3 possibilities of winning
                        # 1. Horizontal match
                        if matrix[0][1] == matrix[0][0] and matrix[0][
                                2] == matrix[0][0]:
                            return 'A' if matrix[0][0] == 'X' else 'B'
                        # 2. Vertical match
                        elif matrix[1][0] == matrix[0][0] and matrix[2][
                                0] == matrix[0][0]:
                            return 'A' if matrix[0][0] == 'X' else 'B'
                        # 3. Diagonal match
                        elif matrix[1][1] == matrix[0][0] and matrix[2][
                                2] == matrix[0][0]:
                            return 'A' if matrix[0][0] == 'X' else 'B'
                    if row == 0 and col == 1:
                        # 1 possibilty - vertical match
                        if matrix[0][1] == matrix[1][1] and matrix[0][
                                1] == matrix[2][1]:
                            return 'A' if matrix[0][1] == 'X' else 'B'
                    if row == 0 and col == 2:
                        # 2 possibilities
                        # 1. Vertical match
                        if matrix[0][2] == matrix[1][2] and matrix[0][
                                2] == matrix[2][2]:
                            return 'A' if matrix[0][2] == 'X' else 'B'
                        # 2. Diagonal match
                        if matrix[0][2] == matrix[1][1] and matrix[0][
                                2] == matrix[2][0]:
                            return 'A' if matrix[0][2] == 'X' else 'B'
                    if row == 1 and col == 0:
                        # 1 possibility - horizontal match
                        if matrix[1][0] == matrix[1][1] and matrix[1][
                                0] == matrix[1][2]:
                            return 'A' if matrix[1][0] == 'X' else 'B'
                    if row == 2 and col == 0:
                        # 1 possibility - horizontal match
                        if matrix[2][0] == matrix[2][1] and matrix[2][
                                0] == matrix[2][2]:
                            return 'A' if matrix[2][0] == 'X' else 'B'
        all_moves_played = True
        for i in range(3):
            for j in range(3):
                if matrix[i][j] == '-':
                    all_moves_played = False
                    break
        return 'Draw' if all_moves_played else 'Pending'