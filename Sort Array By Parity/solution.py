class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        result = []
        odds = []
        for num in A:
            if num % 2 == 0:
                result.append(num)
            else:
                odds.append(num)
        for num in odds:
            result.append(num)
        return result