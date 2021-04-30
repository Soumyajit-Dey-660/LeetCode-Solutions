class Solution:
    def commonChars(self, A: List[str]) -> List[str]:
        counter = 0
        result = []
        def getMap(string):
            count_map = {}
            for char in string:
                if count_map.get(char) != None:
                    count_map[char] += 1
                else:
                    count_map[char] = 1
            return count_map
        compare_map = getMap(A[0])
        while counter < len(A) and len(compare_map) > 0:
            new_map = getMap(A[counter])
            keys_to_be_deleted = []
            for key in compare_map:
                if key not in new_map:
                    keys_to_be_deleted.append(key)
                elif compare_map[key] > new_map[key]:
                    compare_map[key] = new_map[key]
            for key in keys_to_be_deleted:
                del compare_map[key]
            counter += 1
        for key in compare_map:
            for i in range(compare_map[key]):
                result.append(key)
        return result
            
                