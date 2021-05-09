class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        count_map = {}
        result = []
        for num in nums:
            if count_map.get(num) != None:
                count_map[num] += 1
            else:
                count_map[num] = 1
        count_map_sort_arr = sorted(count_map.items(), key=lambda x: x[1])
        counter = 0
        while counter < len(count_map_sort_arr):
            freq = count_map_sort_arr[counter][1]
            temp = []
            while counter < len(count_map_sort_arr):
                if count_map_sort_arr[counter][1] == freq:
                    temp.append(count_map_sort_arr[counter][0])
                    counter += 1
                else:
                    break
            temp.sort(reverse=True)
            for val in temp:
                for _ in range(freq):
                    result.append(val)
        return result