# .env file should include this :
```
SERVER_PORT=
SERVER_HOSTNAME=
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_ROOT_PASSWORD=
MYSQL_PORT=
```

# employees API
### get all employees
GET /api/employees/read/

### get employee by employee ID
GET /api/employees/read/:id/

### create a new employee
POST api/employees/create/:id/

### update the employee given by employee ID
PUT /api/employees/update/:id/

### delete the employee given by employee ID
DELETE /api/employees/delete/:id/


# timeslots API
### get all timeslots
GET /api/timeslots/read/

### get timeslot by timeslot ID
GET /api/timeslots/read/:id/

### create a new timeslot
POST api/timeslots/create/:id/

### update the timeslot given by timeslot ID
PUT /api/timeslots/update/:id/

### delete the timeslot given by timeslot ID
DELETE /api/timeslots/delete/:id/

# assignment API
### get all timeslots
GET /api/assignments/read/

### assign an employee to a timeslot
GET /api/assignments/read/
