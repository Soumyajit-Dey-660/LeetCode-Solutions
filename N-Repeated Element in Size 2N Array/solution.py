class Solution:
    def repeatedNTimes(self, A: List[int]) -> int:
        uniques = set()
        for num in A:
            for unique in uniques:
                if num == unique:
                    return num
            uniques.add(num)