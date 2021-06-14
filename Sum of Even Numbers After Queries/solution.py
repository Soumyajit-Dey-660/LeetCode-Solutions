class Solution:
    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        totalSum = 0
        result = []
        for num in nums:
            if num % 2 == 0:
                totalSum += num
        for i in range(len(queries)):
            temp = nums[queries[i][1]]
            nums[queries[i][1]] += queries[i][0]
            if nums[queries[i][1]] % 2 == 0:
                if temp % 2 != 0:
                    totalSum += nums[queries[i][1]]
                else:
                    totalSum += queries[i][0]
            else:
                if temp % 2 == 0:
                    totalSum -= temp
            result.append(totalSum)
        return result