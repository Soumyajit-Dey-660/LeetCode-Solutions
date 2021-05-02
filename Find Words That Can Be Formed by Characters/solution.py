class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        length = 0
        compare_map = {}
        def get_map(word):
            count_map = {}
            for letter in word:
                if count_map.get(letter) != None:
                    count_map[letter] += 1
                else:
                    count_map[letter] = 1
            return count_map
        
        for char in chars:
            if compare_map.get(char) != None:
                compare_map[char] += 1
            else:
                compare_map[char] = 1
        
        for word in words:
            new_map = get_map(word)
            eligible = True
            for char in word:
                if compare_map.get(char) == None or compare_map[char] < new_map[char]:
                    eligible = False
                    break
            if eligible: length += len(word)
                
        return length