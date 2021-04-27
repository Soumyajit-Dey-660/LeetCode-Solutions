class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        count_index_map = {}
        for i, row in enumerate(mat):
            count_index_map[i] = sum(row)
        count_index_map = dict(sorted(count_index_map.items(), key=lambda item: item[1]))
        result = []
        counter = 0
        for key in count_index_map:
            result.append(key)
            counter += 1
            if counter == k:
                break
        return result
        