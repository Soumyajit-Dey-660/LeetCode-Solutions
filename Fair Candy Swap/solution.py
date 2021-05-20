class Solution:
    def fairCandySwap(self, aliceSizes: List[int], bobSizes: List[int]) -> List[int]:
        alice_has_total = sum(aliceSizes)
        bob_has_total = sum(bobSizes)
        middle = (alice_has_total + bob_has_total) // 2
        bob_set = set(bobSizes)
        for candy in aliceSizes:
            if middle + candy - alice_has_total in bob_set:
                return [candy, middle + candy - alice_has_total]
                