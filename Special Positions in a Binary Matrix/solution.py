class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        forbidden_row = {}
        forbidden_column = {}
        special_count = 0
        for row in range(len(mat)):
            for column in range(len(mat[0])):
                if mat[row][column] == 1:
                    # add row
                    if forbidden_row.get(row) != None:
                        forbidden_row[row] += 1
                    else:
                        forbidden_row[row] = 1
                    # add column
                    if forbidden_column.get(column) != None:
                        forbidden_column[column] += 1
                    else:
                        forbidden_column[column] = 1
        for row in range(len(mat)):
            for column in range(len(mat[0])):
                if mat[row][column] == 1:
                    if forbidden_row[row] == 1 and forbidden_column[column] == 1:
                        special_count += 1
        return special_count