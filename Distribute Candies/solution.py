class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        different_types = {}
        for candy in candyType:
            if different_types.get(candy) == None:
                different_types[candy] = True
        return len(candyType)//2 if len(different_types) >= len(candyType)//2 else len(different_types)