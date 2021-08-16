class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        track_map = {}
        result = []
        
        for i, num in enumerate(groupSizes):
            if num not in track_map:
                track_map[num] = [i]
            else:
                track_map[num].append(i)

        for key in track_map: 
            temp = []
            for i in range(len(track_map[key])): 
                if ((i+1) % int(key) == 0):
                    temp.append(track_map[key][i])
                    result.append(temp)
                    temp = []
                else:
                    temp.append(track_map[key][i])
                
        return result