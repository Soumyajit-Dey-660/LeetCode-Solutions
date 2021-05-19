class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        result = [0]*len(code)
        if k == 0: return result
        total_sum_arr = sum(code)
        if k > 0:
            total_round = k // len(code)
            for i in range(len(code)):
                total = total_round * total_sum_arr
                for j in range(1, k % len(code) + 1):
                    total += code[(i+j)%len(code)]
                result[i] = total
        else:
            total_round = abs(k) // len(code)
            for i in range(len(code)):
                total = total_round * total_sum_arr
                for j in range(1, (abs(k) % len(code))+1):
                    total += code[i-j] if i - j >= 0 else code[len(code)+(i-j)]
                result[i] = total
        return result
            