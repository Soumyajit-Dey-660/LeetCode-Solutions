# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        if head == None:
            return
        curr = head
        result = []
        while curr.next:
            greater_found = False
            temp = curr.next
            while temp:
                if temp.val > curr.val:
                    greater_found = True
                    result.append(temp.val)
                    break
                temp = temp.next
            if not greater_found:
                result.append(0)
            curr = curr.next
        result.append(0)
        return result