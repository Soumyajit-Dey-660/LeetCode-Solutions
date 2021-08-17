class Solution:
    def minOperations(self, n: int) -> int:
        no_of_steps = n // 2
        result = 0
        if n % 2 != 0:
            for i in range(no_of_steps):
                result += 2 * i + 2
        else:
            for i in range(no_of_steps):
                result += 2 * i + 1
        return result