class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        counter = 0
        result = 0
        
        boxTypes = sorted(boxTypes, key=lambda x:x[1], reverse=True)
        while truckSize > 0 and counter < len(boxTypes):
            if boxTypes[counter][0] <= truckSize:
                result += boxTypes[counter][0] * boxTypes[counter][1]
                truckSize -= boxTypes[counter][0]
            else:
                result += truckSize * boxTypes[counter][1]
                break
            counter += 1
            
        return result
