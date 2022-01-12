class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        no_of_turns = 0
        while True:
            for i, ticket in enumerate(tickets):
                if tickets[k] == 0:
                    return no_of_turns
                if ticket != 0:
                    tickets[i] -= 1
                    no_of_turns += 1