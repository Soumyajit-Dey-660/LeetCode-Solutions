class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        matchCount = 0
        for item in items:
            if ruleKey == "type" and item[0] == ruleValue:
                matchCount += 1
            elif ruleKey == "color" and item[1] == ruleValue:
                matchCount += 1
            elif ruleKey == "name" and item[2] == ruleValue:
                matchCount += 1
        return matchCount