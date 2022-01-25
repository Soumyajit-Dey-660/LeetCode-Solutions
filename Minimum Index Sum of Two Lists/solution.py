class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        countSum = {}
        for i, restaurant in enumerate(list1):
            countSum[restaurant] = [-1, i]
        for i, restaurant in enumerate(list2):
            if countSum.get(restaurant) != None:
                countSum[restaurant][1] += i
                countSum[restaurant][0] = 1
        sortedMap = dict(list(sorted(countSum.items(), key=lambda item: item[1])))
        minIndexSum = 10e4+5
        result = ""
        for key in sortedMap:
            if sortedMap[key][0] == 1:
                if sortedMap[key][1] < minIndexSum:
                    minIndexSum = sortedMap[key][1]
                    result = [key]
                elif sortedMap[key][1] == minIndexSum:
                    result.append(key)
        return result
            