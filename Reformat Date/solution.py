class Solution:
    def reformatDate(self, date: str) -> str:
        result = ''
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        arr = date.split(" ")
        result += arr[2] + '-'
        ind = months.index(arr[1]) + 1
        result += str(ind) + '-' if ind >= 10 else '0' + str(ind) + '-'
        result += arr[0][:-2] if int(arr[0][:-2]) >= 10 else '0' + arr[0][:-2]
        return result