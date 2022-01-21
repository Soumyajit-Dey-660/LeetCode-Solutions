# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def numComponents(self, head: Optional[ListNode], nums: List[int]) -> int:
        temp = head
        no_of_components = 0
        chaining = False
        while temp:
            if temp.val in nums and not chaining:
                chaining = True
            elif temp.val not in nums and chaining:
                chaining = False
                no_of_components += 1
            temp = temp.next
        if chaining: no_of_components += 1
        return no_of_components