class Solution:
    def sortString(self, s: str) -> str:
        lookUp = {}
        result = ""
        for char in s:
            if lookUp.get(char) == None:
                lookUp[char] = 1
            else:
                lookUp[char] += 1
        sortedItems = sorted(lookUp.items())
        sortedLookUp = {}
        for item in sortedItems:
            sortedLookUp[item[0]] = item[1]
        turn = 1
        while True:
            search = list(sortedLookUp.keys())
            if turn % 2 == 0:
                search.reverse()       
            for key in search:
                if sortedLookUp[key] >= 1:
                    sortedLookUp[key] -= 1
                    result += key
                else:
                    del sortedLookUp[key]
            if len(search) == 0:
                return result
            turn += 1