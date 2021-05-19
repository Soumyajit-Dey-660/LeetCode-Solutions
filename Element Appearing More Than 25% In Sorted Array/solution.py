class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        curr = 1
        compare = arr[0]
        last_index = -1
        for i in range(1, len(arr)):
            if arr[i] == compare:
                curr += 1
            else:
                last_index = i
                break
        if curr > len(arr) // 4:
            return compare
        compare = arr[last_index]
        curr = 1
        for i in range(last_index+1, len(arr)):
            if arr[i] == compare:
                curr += 1
            else:
                if curr > len(arr) // 4:
                    return compare
                compare = arr[i]
                curr = 1
        if curr > len(arr) // 4:
            return compare