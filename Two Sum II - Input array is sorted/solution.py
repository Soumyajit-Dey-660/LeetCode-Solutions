class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1
        while left < right:
            total_sum = numbers[left] + numbers[right]
            if total_sum == target:
                return [left+1, right+1]
            elif total_sum > target:
                right -= 1
            else:
                left += 1
        