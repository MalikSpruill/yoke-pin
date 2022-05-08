INSERT INTO department (name)
VALUES
    ('Military'),
    ('Factory Unit'),
    ('Clean Crew'),
    ('Financial Staff');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Soldier', 45000, 1),
    ('Pipe Cleaner', 38000, 2),
    ('Janitor', 32000, 3),
    ('Account Management Executive', 147000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
    ('Bill', 'Noris', 1, null),
    ('Orlando', 'Felter', 2, null),
    ('Forest', 'Neadle', 1, 1);
