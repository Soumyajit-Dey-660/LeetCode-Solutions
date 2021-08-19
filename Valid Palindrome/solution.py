class Solution:
    def isPalindrome(self, s: str) -> bool:
        alpha_string = ''
        for char in s:
            if char.isalnum():
                alpha_string += char.lower()
        return alpha_string == alpha_string[::-1]