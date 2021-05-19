class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        empty_bottles = numBottles
        drank = numBottles
        while empty_bottles >= numExchange:
            drank += empty_bottles // numExchange
            empty_bottles = empty_bottles % numExchange + empty_bottles // numExchange
        return drank