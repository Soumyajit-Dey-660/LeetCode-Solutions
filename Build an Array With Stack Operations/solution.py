class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        pointer = 0
        building_arr = []
        for num in range(1, n+1):
            if pointer == len(target): return building_arr
            building_arr.append('Push')
            if target[pointer] == num:
                pointer += 1
            else:
                building_arr.append('Pop')
        return building_arr