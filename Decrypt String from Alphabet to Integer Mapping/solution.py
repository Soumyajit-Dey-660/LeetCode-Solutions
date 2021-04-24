class Solution:
    def freqAlphabets(self, s: str) -> str:
        weird_map = {
            '1': 'a',
            '2': 'b',
            '3': 'c',
            '4': 'd',
            '5': 'e',
            '6': 'f',
            '7': 'g',
            '8': 'h',
            '9': 'i',
            '10#': 'j',
            '11#': 'k',
            '12#': 'l',
            '13#': 'm',
            '14#': 'n',
            '15#': 'o',
            '16#': 'p',
            '17#': 'q',
            '18#': 'r',
            '19#': 's',
            '20#': 't',
            '21#': 'u',
            '22#': 'v',
            '23#': 'w',
            '24#': 'x',
            '25#': 'y',
            '26#': 'z',
        }
        result = ''
        i = 0
        while(i < len(s)):
            if s[i] == '#':
                i += 1
                continue
            try:
                if s[i+2] == '#':
                    lookup = s[i:i+3]
                    result += weird_map[lookup]
                    i += 3
                    continue
            except:
                result += weird_map[s[i]]
                i += 1
            else:
                result += weird_map[s[i]]
                i += 1
        return result