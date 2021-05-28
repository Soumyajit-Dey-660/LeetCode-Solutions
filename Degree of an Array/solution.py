class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        count_map = {}
        nums_with_most_freq = []
        max_value = 0
        sub_arr_len = 50001
        for num in nums:
            if count_map.get(num):
                count_map[num] += 1
            else:
                count_map[num] = 1
        
        for key in count_map:
            if count_map[key] > max_value:
                max_value = count_map[key]
                
        for key in count_map:
            if count_map[key] == max_value:
                nums_with_most_freq.append(key)
                
        for val in nums_with_most_freq:
            start = nums.index(val)
            end = start
            for i in range(start+1, len(nums)):
                if nums[i] == val:
                    end = i
            if end - start + 1 < sub_arr_len:
                sub_arr_len = end - start + 1
                
        return sub_arr_len