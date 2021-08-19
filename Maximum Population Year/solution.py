class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        if len(logs) == 1:
            return logs[0][0]
        population_track = [0] * 101
        for log in logs:
            for i in range(log[0] - 1950, log[1] - 1950):
                population_track[i] += 1
        max_population = 0
        max_population_year = 0
        for i in range(101):
            if population_track[i] > max_population:
                max_population = population_track[i]
                max_population_year = 1950 + i
        return max_population_year