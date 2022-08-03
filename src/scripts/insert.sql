/** Insert new employees */
INSERT INTO 
Employee(name, email, password ) 
VALUES 
("AA", "aa@gmail.com", "123"),
("BB", "bb@gmail.com", "456"),
("CC", "cc@gmail.com", "789")




/** Insert new timeslots */
INSERT INTO 
Timeslot(duration, assigned_employee)
VALUES
("10 min",1)

/** Insert new assignments */
INSERT INTO 
Assignment(employee_id, timeslot_id)
VALUES
(1,1)
