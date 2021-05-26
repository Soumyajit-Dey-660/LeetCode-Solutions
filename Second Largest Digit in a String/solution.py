class Solution:
    def secondHighest(self, s: str) -> int:
        largest = -1
        second_largest = -1
        for char in s:
            if char.isdigit():
                if int(char) > largest:
                    second_largest = largest
                    largest = int(char)
                elif int(char) > second_largest and int(char) != largest:
                    second_largest = int(char)
        return second_largest if second_largest != largest else -1