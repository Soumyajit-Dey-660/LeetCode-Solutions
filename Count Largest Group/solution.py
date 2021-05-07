class Solution:
    def countLargestGroup(self, n: int) -> int:
        def get_sum(num):
            total_sum = 0
            while(num > 0):
                total_sum += num % 10
                num = num // 10
            return total_sum
        result = 0
        value_sum_map = {}
        for val in range(1, n+1):
            if value_sum_map.get(get_sum(val)) != None:
                value_sum_map[get_sum(val)].append(val)
            else:
                value_sum_map[get_sum(val)] = [val]
        max_length = 0
        for key in value_sum_map:
            if len(value_sum_map[key]) > max_length:
                max_length = len(value_sum_map[key])

        for key in value_sum_map:
            if len(value_sum_map[key]) == max_length:
                result += 1
        return result