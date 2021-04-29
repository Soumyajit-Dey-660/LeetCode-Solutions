class Solution:
    # Memory efficient but time consuming 
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        curr_pointer = 0
        while (curr_pointer < len(nums)):
            if not (curr_pointer % 2 == 0 and nums[curr_pointer] % 2 == 0) or (curr_pointer % 2 != 0 and nums[curr_pointer] % 2 != 0):
                if curr_pointer % 2 == 0:
                    for i in range(curr_pointer + 1, len(nums)):
                        if nums[i] % 2 == 0:
                            nums[i], nums[curr_pointer] = nums[curr_pointer], nums[i]
                            break
                else:
                    for i in range(curr_pointer + 1, len(nums)):
                        if nums[i] % 2 != 0:
                            nums[i], nums[curr_pointer] = nums[curr_pointer], nums[i]
                            break
            curr_pointer += 1
                
        return nums

    # Runs faster but memory inefficient
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        oddArr = []
        evenArr = []
        for num in nums:
            oddArr.append(num) if num % 2 != 0 else evenArr.append(num)
        for i in range(len(evenArr)):
            nums[2*i] = evenArr[i]
            nums[2*i+1] = oddArr[i]
        return nums