class Solution:
    def toGoatLatin(self, S: str) -> str:
        final_word = ''
        temp = ''
        words = S.split(" ")
        
        for i, word in enumerate(words):
            is_first_letter_vowel = False
            if (word[0].lower() == 'a' or word[0].lower() == 'e' or word[0].lower() == 'i' or word[0].lower() == 'o' or word[0].lower() == 'u'):
                is_first_letter_vowel = True
                final_word += word[0]
            else:
                temp = word[0]
            for j in range(1, len(word)):
                final_word += words[i][j]

            if (not is_first_letter_vowel):
                final_word += temp
                
            final_word += 'ma' + 'a'*(i+1)
            
            if i != len(words)-1:
                final_word += ' '
                
        return final_word