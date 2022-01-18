# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def getLength(head):
            temp = head
            totalLength = 0
            while temp:
                totalLength += 1
                temp = temp.next
            return totalLength
        if getLength(head) == 0 or getLength(head) == 1:
            return None
        temp = head
        for _ in range((getLength(head) // 2) - 1):
            temp = temp.next
        temp.next = temp.next.next
        return head