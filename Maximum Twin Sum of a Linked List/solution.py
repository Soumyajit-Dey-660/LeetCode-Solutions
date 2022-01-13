# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        maximum_pair_sum = 0
        
        old = ListNode()
        left, right = head, head.next
        
        while right.next:
            right = right.next.next
            nxt = left.next
            left.next = old
            old = left
            left = nxt
            
        right = left.next
        left.next = old
        
        while right.next:
            maximum_pair_sum = max(maximum_pair_sum, right.val+left.val)
            left = left.next
            right = right.next
            
        maximum_pair_sum = max(maximum_pair_sum, right.val+left.val)
        return maximum_pair_sum