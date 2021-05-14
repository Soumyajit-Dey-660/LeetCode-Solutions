class Solution:
    def reformatNumber(self, number: str) -> str:
        result = ''
        number = number.replace(' ', '')
        number = number.replace('-', '')
        if len(number) < 3: return number
        for i in range(len(number)//3):
            result += number[3*i:3*(i+1)] 
            if i != len(number)//3 - 1:
                result += '-'
        remaining = len(number) % 3
        result += number[(len(number)//3)*3 :]
        # If remaining is 0, current result is answer 123-456
        if remaining == 0: return result
        # If remaining is 1, current result is 123-4567
            # We have to make it 123-45-67
        # If remaining is 2, current result is 123-45678
            # We have to make it 123-456-78
        else:
            result = result[: len(result)-2] + '-' + result[len(result)-2: ]
            return result
        
            