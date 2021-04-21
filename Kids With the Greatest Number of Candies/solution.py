class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        highestCandies = max(candies)
        result = [False]*len(candies)
        for ind, numOfCandy in enumerate(candies):
            if numOfCandy + extraCandies >= highestCandies:
                result[ind] = True
        return result