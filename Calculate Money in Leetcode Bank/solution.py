class Solution:
    def totalMoney(self, n: int) -> int:
        weekly_savings = 0
        savings_on_remaining_days = 0
        week_saved = n//7
        remaining_days = n % 7
        for i in range(week_saved):
            weekly_savings += (7+i)*(7+i+1)/2 - i * (i+1)/2
        for i in range(1, remaining_days+1):
            savings_on_remaining_days += week_saved + i;
        return int(weekly_savings + savings_on_remaining_days)
        