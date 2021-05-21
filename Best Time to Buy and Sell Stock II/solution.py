class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        start_price = prices[0] 
        profit = 0
        i = 1
        while i < len(prices):
            if prices[i] <= start_price: 
                start_price = prices[i]
                i += 1
            else:
                day = i
                while day < len(prices):
                    if prices[day] > prices[day-1]:
                        day += 1
                    else:
                        break
                profit += prices[day-1] - start_price
                start_price = prices[day] if day < len(prices) else 0
                i = day
        return profit
                