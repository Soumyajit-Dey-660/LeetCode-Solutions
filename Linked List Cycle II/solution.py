# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None or head.next == None:
            return None
        if head.next == head:
            return head
        slow = head
        fast = head
        slow = slow.next
        fast = fast.next.next
        cycleFound = False
        while fast and fast.next:
            if slow == fast:
                cycleFound = True
                break
            slow = slow.next
            fast = fast.next.next
        if not cycleFound:
            return None
        slow = head
        while (slow != fast):
            slow = slow.next
            fast = fast.next
        return slow