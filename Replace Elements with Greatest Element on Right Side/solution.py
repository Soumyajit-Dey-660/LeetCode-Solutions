class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        for i, val in enumerate(arr):
            if i == len(arr) - 1:
                continue
            arr[i] = max(arr[i+1: ])
        arr[len(arr)-1] = -1
        return arr