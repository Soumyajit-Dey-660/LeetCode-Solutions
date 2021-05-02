class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        for sandwich in sandwiches:
            if sandwich in students:
                ind = students.index(sandwich)
                students = students[:ind] + students[ind+1:]
            else:
                return len(students)
        return 0