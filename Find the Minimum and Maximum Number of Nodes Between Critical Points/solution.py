# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        distances = [10e6+7, 1]
        if not head.next.next:
            return [-1, -1]
        temp = head
        lastVal = head.val
        pointer = 2
        firstPointer = False
        lastPointer = False
        while temp.next:
            if (lastVal < temp.val and temp.val > temp.next.val) or (lastVal > temp.val and temp.val < temp.next.val):
                if not firstPointer:
                    firstPointer = pointer
                    lastPointer = pointer
                else:
                    distances[1] = pointer - firstPointer;
                    distances[0] = (pointer - lastPointer) if (pointer - lastPointer) < distances[0] else distances[0]
                    lastPointer = pointer
            lastVal = temp.val
            temp = temp.next
            pointer += 1
        return [-1, -1] if firstPointer == lastPointer else distances