class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        count_map = {}
        result = []
        for visit_info in cpdomains:
            visitNum, domain = visit_info.split(" ")
            domain = domain.split('.')[::-1]
            make_domain = ''
            for i, subdomain in enumerate(domain):
                if i != 0: 
                    make_domain = subdomain + '.' + make_domain
                else:
                    make_domain = subdomain
                if count_map.get(make_domain) != None:
                    count_map[make_domain] += int(visitNum)
                else:
                    count_map[make_domain] = int(visitNum)
        
        for key in count_map:
            result.append(str(count_map[key]) + " " + key)
        
        return result
