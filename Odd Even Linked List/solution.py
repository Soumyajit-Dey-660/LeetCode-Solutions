# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None:
            return
        if head.next == None:
            return head
        if head.next.next == None:
            return head
        oddCurr = head
        evenCurr = head.next
        linkCurr = head.next
        def getLength(head):
            totalLength = 0
            temp = head
            while temp:
                temp = temp.next
                totalLength += 1
            return totalLength
        if getLength(head) % 2 != 0:
            while evenCurr.next.next != None:
                oddCurr.next = oddCurr.next.next
                evenCurr.next = evenCurr.next.next
                oddCurr = oddCurr.next
                evenCurr = evenCurr.next
            oddCurr.next = oddCurr.next.next
            oddCurr.next.next = linkCurr
            evenCurr.next = None
        else:
            while evenCurr.next != None:
                oddCurr.next = oddCurr.next.next
                evenCurr.next = evenCurr.next.next
                oddCurr = oddCurr.next
                evenCurr = evenCurr.next
            evenCurr.next = None
            oddCurr.next = linkCurr
        return head