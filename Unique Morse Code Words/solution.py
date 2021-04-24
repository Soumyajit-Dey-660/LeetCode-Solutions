class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        transformed_words_count = {}
        morse_code_map = { 
            'a': ".-",
            'b': "-...",
            'c': "-.-.",
            'd': "-..",
            'e': ".",
            'f':"..-.",
            'g': "--.",
            'h': "....",
            'i': "..",
            'j': ".---",
            'k': "-.-",
            'l': ".-..",
            'm': "--",
            'n': "-.",
            'o': "---",
            'p': ".--.",
            'q': "--.-",
            'r': ".-.",
            's': "...",
            't': "-",
            'u': "..-",
            'v': "...-",
            'w': ".--",
            'x': "-..-",
            'y': "-.--",
            'z': "--.."
        }
        for word in words:
            transformed_word = ''
            for letter in word:
                transformed_word += morse_code_map[letter]
            if transformed_words_count.get(transformed_word) != None:
                transformed_words_count[transformed_word] += 1
            else:
                transformed_words_count[transformed_word] = 1
        return len(transformed_words_count)