class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        out_of_position = 0
        position = []
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                position.append([s1[i], s2[i]])
                out_of_position += 1
        if out_of_position == 0: return True
        if out_of_position == 2 and position[0][0] == position[1][1] and position[0][1] == position[1][0]:
            return True
        return False