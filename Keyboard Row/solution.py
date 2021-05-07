class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        first = 'qwertyuiop'
        second = 'asdfghjkl'
        third = 'zxcvbnm'
        result = []
        for word in words:
            which_row = None
            all_in_same_row = True
            if word[0].lower() in first:
                which_row = first
            if word[0].lower() in second:
                which_row = second
            if word[0].lower() in third:
                which_row = third
            for i in range(1, len(word)):
                if word[i].lower() not in which_row:
                    all_in_same_row = False
                    break
            if all_in_same_row:
                result.append(word)
        return result