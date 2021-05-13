# Write your MySQL query statement below
-- Both solutions from below are valid solutions
SELECT DISTINCT p1.Email FROM Person p1, Person p2 WHERE p1.id <> p2.id AND p1.email = p2.email;
-- SELECT Email FROM Person GROUP BY Email HAVING count(Email) > 1;