class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        total_words_can_be_written = 0
        text = text.split(" ")
        if len(brokenLetters) == 0:
            return len(text)
        for word in text:
            can_word_be_written = True
            for char in word:
                if char in brokenLetters:
                    can_word_be_written = False
                    break
            total_words_can_be_written = total_words_can_be_written + 1 \
            if can_word_be_written else total_words_can_be_written
        return total_words_can_be_written