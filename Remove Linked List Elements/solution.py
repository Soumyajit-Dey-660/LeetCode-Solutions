# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if head == None:
            return head
        current = ListNode(-1)
        nextNode = head
        result = current
        while nextNode:
            if nextNode.val != val:
                current.next = nextNode
                current = nextNode
            nextNode = nextNode.next
        if current.val == -1:
            return None
        current.next = nextNode
        return result.next