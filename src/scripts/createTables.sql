CREATE TABLE Employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE Timeslot (
    id INT AUTO_INCREMENT PRIMARY KEY,
    duration VARCHAR(50)
);


CREATE TABLE Assignment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (employee_id) REFERENCES Employee(id),
    FOREIGN KEY (timeslot_id) REFERENCES Timeslot(id)
);
