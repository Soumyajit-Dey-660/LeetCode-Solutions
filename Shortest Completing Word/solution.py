class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        licensePlate = licensePlate.replace(' ', '').lower()
        res1 = ""
        for i in licensePlate:
            if i.isalpha():
                res1 = "".join([res1, i])
        licensePlate = res1
        original_map = {}
        result = 'a'*15
        for char in licensePlate:
            if original_map.get(char):
                original_map[char] += 1
            else:
                original_map[char] = 1
        for word in words:
            temp_map = {}
            eligible = True
            for char in word:
                if temp_map.get(char):
                    temp_map[char] += 1
                else:
                    temp_map[char] = 1
            for key in original_map:
                if temp_map.get(key) == None or temp_map[key] < original_map[key]:
                    eligible = False
                    break
            if eligible and len(word) < len(result):
                result = word
        return result