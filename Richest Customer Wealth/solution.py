class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        maximumWealth = 0
        for moneyList in accounts:
            maximumWealth = sum(moneyList) if sum(moneyList) > maximumWealth else maximumWealth
        return maximumWealth