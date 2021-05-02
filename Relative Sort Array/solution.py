class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        curr_pointer = 0
        next_pointer = 0
        for compare_val in arr2:
            next_pointer = curr_pointer + 1
            while next_pointer < len(arr1):
                if arr1[curr_pointer] == compare_val:
                    curr_pointer += 1
                if arr1[next_pointer] == compare_val:
                    arr1[next_pointer], arr1[curr_pointer] = arr1[curr_pointer], arr1[next_pointer]
                    curr_pointer += 1               
                next_pointer += 1
        temp = arr1[curr_pointer:]
        arr1 = arr1[:curr_pointer]
        temp.sort()
        for val in temp:
            arr1.append(val)
        return arr1