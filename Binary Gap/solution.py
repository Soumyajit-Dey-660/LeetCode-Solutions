class Solution:
    def binaryGap(self, n: int) -> int:
        if n == 0: return 0
        def getBinaryArr(num):
            arr = []
            while num > 0 :
                arr.append(num%2)
                num = num//2
            arr.reverse()
            return arr
        
        last_pointer = 0
        max_distance = 0
        binaryArr = getBinaryArr(n)
        for i, num in enumerate(binaryArr):
            if num == 1:
                last_pointer = i
                break
        
        for i in range(last_pointer, len(binaryArr)):
            if binaryArr[i] == 1:
                max_distance = i - last_pointer if i - last_pointer > max_distance else max_distance
                last_pointer = i
        
        return max_distance