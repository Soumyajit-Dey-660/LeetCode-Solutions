class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        result = []
        modulo_list = [(3, 'Fizz'), (5, 'Buzz')]
        for i in range(1, n+1):
            fizzbuzz_string = ''
            for res in modulo_list:
                if i % res[0] == 0:
                    fizzbuzz_string += res[1]
            if fizzbuzz_string == '':
                result.append(str(i))
            else:
                result.append(fizzbuzz_string)
        return result