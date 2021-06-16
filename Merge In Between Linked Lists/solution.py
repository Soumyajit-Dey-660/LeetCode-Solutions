# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        node = list1
        for _ in range(a-1):
            node = node.next
        current = node
        for _ in range(b - a + 2):
            current = current.next
        node.next = list2
        while node.next:
            node = node.next
        node.next = current
        return list1