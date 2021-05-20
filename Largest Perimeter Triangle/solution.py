# Both solutions are O(nlogn) solution because sorting is the most expensive solution
class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        if len(nums) < 3: return 0
        nums.sort()
        smallest, mid, largest = nums[0], nums[1], nums[2]
        max_perimeter = (smallest + mid + largest) if (smallest + mid > largest) else 0 
        for i in range(3, len(nums)):
            if mid >= nums[i] > smallest:
                if nums[i] + mid > largest:
                    smallest = nums[i]
            elif largest >= nums[i] > mid:
                if nums[i] + smallest > largest:
                    smallest = mid
                    mid = nums[i]
            elif nums[i] > largest:
                smallest = mid
                mid = largest
                largest = nums[i]
            max_perimeter = (smallest + mid + largest) \
            if (smallest + mid + largest) > max_perimeter and smallest + mid > largest else max_perimeter
        return max_perimeter

# Alternate solution 

class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        if len(nums) < 3: return 0
        nums.sort(reverse=True)
        largest = nums[0]
        mid = nums[1]
        smallest = nums[2]
        if smallest + mid > largest:
            return smallest + mid + largest
        for i in range(3, len(nums)):
            largest = mid
            mid = smallest 
            smallest = nums[i]
            if smallest + mid > largest: return smallest + mid + largest
        return 0

