class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        def gcd(a, b):
            if (a == b):
                return a
            if (a > b):
                return gcd(a - b, b)
            return gcd(a, b - a)
        lookUp = {}
        for card in deck:
            if lookUp.get(card) == None:
                lookUp[card] = 1
            else:
                lookUp[card] += 1
        compare = lookUp[sorted(lookUp.keys())[0]]
        if compare < 2: 
            return False
        for card in lookUp:
            if gcd(compare, lookUp[card]) == 1:
                return False
            compare = gcd(compare, lookUp[card])
        return True