class Solution:
    def smallestRangeI(self, A: List[int], K: int) -> int:
        A.sort()
        smallest = A[0] + K
        largest = A[len(A)-1] - K
        if largest <= smallest:
            return 0
        else:
            return largest-smallest