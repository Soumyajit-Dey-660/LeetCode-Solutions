class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        max_duration = [keysPressed[0], releaseTimes[0]]
        for i in range(1, len(keysPressed)):
            if releaseTimes[i] - releaseTimes[i-1] > max_duration[1]:
                max_duration = [keysPressed[i], releaseTimes[i] - releaseTimes[i-1]]
            if releaseTimes[i] - releaseTimes[i-1] == max_duration[1]:
                if ord(keysPressed[i]) > ord(max_duration[0]):
                    max_duration[0] = keysPressed[i]
        return max_duration[0]