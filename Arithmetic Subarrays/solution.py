class Solution:
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        result = []
        for i in range(len(l)):
            if r[i] < l[i]: 
                result.append(False)
                continue
            if r[i] == l[i]: 
                result.append(True)
                continue
            temp = nums[l[i]:r[i]+1]
            temp.sort()
            sequence_diff = temp[1] - temp[0]
            arithmatic = True
            for j in range(2, len(temp)):
                if temp[j] - temp[j-1] != sequence_diff:
                    result.append(False)
                    arithmatic = False
                    break
            if arithmatic: result.append(True)
        return result