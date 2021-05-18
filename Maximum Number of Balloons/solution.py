class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        # balloon -> {'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1}
        balloon_count = 0
        count_map = {}
        for char in text:
            if count_map.get(char):
                count_map[char] += 1
            else:
                count_map[char] = 1
        if 'b' in count_map and 'a' in count_map and 'l' in count_map and 'o' in count_map and 'n' in count_map:
            balloon_count = count_map['b']
            if count_map['a'] < balloon_count: balloon_count = count_map['a']
            if count_map['n'] < balloon_count: balloon_count = count_map['n']
            if count_map['l'] // 2 < balloon_count: balloon_count = count_map['l'] // 2
            if count_map['o'] // 2 < balloon_count: balloon_count = count_map['o'] // 2
        return balloon_count