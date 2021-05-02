class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        position = []
        vulnerable = 0
        
        for i in range(8):
            for j in range(8):
                if board[i][j] == 'R':
                    position.append(i)
                    position.append(j)
                    break
                    
        rook_row, rook_column = position[0], position[1]
        
        if rook_row != 0:
            for i in range(rook_row-1, -1, -1):
                if board[i][rook_column] == 'B':
                    break
                if board[i][rook_column] == 'p':
                    vulnerable += 1
                    break
        
        if rook_row != 7:
            for i in range(rook_row+1, 8):
                if board[i][rook_column] == 'B':
                    break
                if board[i][rook_column] == 'p':
                    vulnerable += 1
                    break
                    
        if rook_column != 0:
            for i in range(rook_column-1, -1, -1):
                if board[rook_row][i] == 'B':
                    break
                if board[rook_row][i] == 'p':
                    vulnerable += 1
                    break
        
        if rook_column != 7:
            for i in range(rook_column+1, 8):
                if board[rook_row][i] == 'B':
                    break
                if board[rook_row][i] == 'p':
                    vulnerable += 1
                    break
        
        return vulnerable