# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        if headA == None or headB == None:
            return None
        def getLength(node):
            total_length = 0
            while node:
                node = node.next
                total_length += 1
            return total_length
        node1 = headA
        node2 = headB
        lengthA = getLength(node1)
        lengthB = getLength(node2)
        if lengthA > lengthB:
            for _ in range(lengthA - lengthB):
                headA = headA.next
        elif lengthB > lengthA:
            for _ in range(lengthB - lengthA):
                headB = headB.next
        while headA and headB:
            if headA == headB:
                return headA
            headA = headA.next
            headB = headB.next
        return None