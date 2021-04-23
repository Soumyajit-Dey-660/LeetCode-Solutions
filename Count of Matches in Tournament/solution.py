class Solution:
    def numberOfMatches(self, n: int) -> int:
        noOfTeamsRemaining = n
        matchesPlayed = 0
        while(noOfTeamsRemaining > 1 ):
            if (noOfTeamsRemaining % 2 == 0):
                matchesPlayed += noOfTeamsRemaining // 2
                noOfTeamsRemaining = noOfTeamsRemaining // 2
            else:
                matchesPlayed += (noOfTeamsRemaining - 1) // 2
                noOfTeamsRemaining = (noOfTeamsRemaining - 1) // 2 + 1
        return matchesPlayed