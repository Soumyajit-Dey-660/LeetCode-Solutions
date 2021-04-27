class RecentCounter:

    def __init__(self):
        self.requests = []

    def ping(self, t: int) -> int:
        no_of_requests = 0
        self.requests.append(t)
        for ping in self.requests:
            if ping > t:
                break
            if (t - 3000) <= ping <= t:
                no_of_requests += 1
                
        return no_of_requests


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)