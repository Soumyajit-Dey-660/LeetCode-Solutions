class Solution:
    def isHappy(self, n: int) -> bool:
        total = 0

        def get_digits(n):
            digits = []
            while n > 0:
                digits.append(n % 10)
                n = n // 10
            return digits

        tracking_arr = []
        while True:
            temp = n if total == 0 else total
            digits = get_digits(temp)
            total = 0
            for num in digits:
                total += num**2
            if total == 1:
                return True
            if total in tracking_arr:
                return False
            tracking_arr.append(total)