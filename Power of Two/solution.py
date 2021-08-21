class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        check = 0
        x = 0
        match = False
        while check < n:
            check = 2**x
            if check == n:
                match = True
                break
            x += 1
        return match