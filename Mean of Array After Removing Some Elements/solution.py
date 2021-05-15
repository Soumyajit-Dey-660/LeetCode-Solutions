class Solution:
    def trimMean(self, arr: List[int]) -> float:
        five_percent = len(arr)//20
        arr.sort()
        arr = arr[five_percent:len(arr)-five_percent]
        return sum(arr)/len(arr)
        