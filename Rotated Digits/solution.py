class Solution:
    def rotatedDigits(self, n: int) -> int:
        rotate_map = {
            '2': '5',
            '5': '2',
            '6': '9',
            '9': '6',
            '0': '0',
            '1': '1',
            '8': '8'
        }
        result_count = 0
        for num in range(1, n+1):
            string = str(num)
            eligible = True
            rotate_res = ''
            for digit in string:
                if digit not in rotate_map.keys():
                    eligible = False
                    break
                else:
                    rotate_res += rotate_map[digit]
            if eligible and rotate_res != string:
                result_count += 1
        return result_count