# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if not head: return head
        curr = head
        prev = None
        next_p = curr.next
        while(curr.next):
            curr.next = prev
            prev = curr
            curr = next_p
            next_p = next_p.next
        curr.next = prev
        head = curr
        return head