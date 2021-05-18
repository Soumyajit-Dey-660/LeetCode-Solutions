class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> List[int]:
        remaining_candies = candies
        result = [0]*num_people
        curr_candy = 1
        while True:
            for i in range(num_people):
                if curr_candy < remaining_candies:
                    result[i] += curr_candy
                    remaining_candies -= curr_candy
                    curr_candy += 1
                else:
                    result[i] += remaining_candies
                    return result
                