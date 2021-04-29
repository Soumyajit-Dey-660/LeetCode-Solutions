class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
        oddIndexedCoins = 0
        evenIndexedCoins = 0
        for index in position:
            if index % 2 == 0:
                evenIndexedCoins += 1
            else:
                oddIndexedCoins += 1
        result = evenIndexedCoins if evenIndexedCoins < oddIndexedCoins else oddIndexedCoins
        return result
        